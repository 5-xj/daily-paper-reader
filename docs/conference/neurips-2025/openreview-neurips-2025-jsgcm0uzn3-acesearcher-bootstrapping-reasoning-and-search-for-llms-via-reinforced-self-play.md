---
title: "AceSearcher: Bootstrapping Reasoning and Search for LLMs via Reinforced Self-Play"
title_zh: AceSearcher：通过强化自博弈引导LLM的推理与搜索
authors: "Ran Xu, Yuchen Zhuang, Zihan Dong, Ruiyu Wang, Yue Yu, Joyce C. Ho, Linjun Zhang, Haoyu Wang, Wenqi Shi, Carl Yang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=jSgCM0uZn3"
tags: ["query:ad"]
score: 7.0
evidence: 通过强化自博弈实现LLM引导的启发式搜索，用于推理和发现
tldr: 复杂推理任务常因多跳检索低效和推理能力有限而困难。本文提出AceSearcher，一种合作自博弈框架，训练单一LLM交替扮演查询分解器和答案求解器，结合监督微调与强化微调优化最终答案准确性。在十个数据集上的实验表明，该方法超越了现有检索增强推理方法，其自动分解与搜索机制可迁移至自动发现中的启发式搜索。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 检索增强LLM在多跳推理中检索效率低且推理能力不足，需要更智能的查询分解与上下文整合方法。
method: 提出合作自博弈框架，LLM同时扮演分解器和求解器，通过监督微调与强化微调联合优化，无需中间标注。
result: 在三个推理任务、十个数据集上，AceSearcher均取得最优性能，证明了自博弈训练的有效性。
conclusion: 通过自博弈实现的自动分解与搜索增强，可有效提升LLM复杂推理能力，为启发式搜索引导的自动发现提供新范式。
---

## Abstract
Search-augmented LLMs often struggle with complex reasoning tasks due to ineffective multi-hop retrieval and limited reasoning ability. We propose AceSearcher, a cooperative self-play framework that trains a single large language model (LLM) to alternate between two roles: a decomposer that breaks down complex queries and a solver that integrates retrieved contexts for answer generation. AceSearcher couples supervised fine-tuning on a diverse mixture of search, reasoning, and decomposition tasks with reinforcement fine-tuning optimized for final answer accuracy, eliminating the need for intermediate annotations. Extensive experiments on three reasoning-intensive tasks across 10 datasets show that AceSearcher outperforms state-of-the-art baselines, achieving an average exact match improvement of 7.6%. Remarkably, on document-level finance reasoning tasks, AceSearcher-32B matches the performance of the giant DeepSeek-V3 model using less than 5% of iits parameters. Even at smaller scales (1.5B and 8B), AceSearcher often surpasses existing search-augmented LLMs with up to 9× more parameters, highlighting its exceptional efficiency and effectiveness in tackling complex reasoning tasks.

---

## 论文详细总结（自动生成）

# 详细中文总结

## 1. 论文的核心问题与整体含义

- **研究动机**：检索增强的大语言模型（LLM）在处理复杂推理任务时面临两大挑战：（1）多跳检索效率低，单次检索难以覆盖所需证据；（2）模型本身推理能力有限，难以整合多条信息以生成最终答案。现有方法多依赖强闭源模型（如GPT-4）或推理时搜索（如树搜索），但成本高、延迟大，不适用于资源受限环境。
- **整体含义**：本文旨在提出一种高效、数据驱动的训练方法，使开源LLM能够在不依赖昂贵中间标注的情况下，同时具备查询分解和上下文整合推理的能力，从而在搜索增强场景下实现复杂多步推理。这为在低资源或领域特化应用中部署高级AI能力提供了新范式。

## 2. 论文提出的方法论

- **核心思想**：受人类问题解决策略启发（分解复杂问题为子问题），提出**AceSearcher**，一个**合作自博弈（cooperative self-play）框架**。训练一个单一的LLM交替扮演两个角色：
  - **分解器（decomposer, ρ）**：将原始问题分解为一系列子问题模板 z。
  - **求解器（solver, π）**：基于子问题、检索到的上下文以及之前的中间答案，逐步生成中间答案 w 和最终答案 a′。
  
  两角色共享同一个模型参数，通过不同的输入和提示模板区分。

- **关键技术细节**：
  - **两阶段微调框架**：
    1. **第一阶段：监督微调（SFT）**：在混合数据集上训练模型，包括上下文丰富的QA数据、问题分解数据（如GSM8K、ConvFinQA）、思维链数据（如MathInstruct）。共180K训练样本，使用标准自回归损失。
    2. **第二阶段：基于偏好的强化微调（RFT）**：仅利用最终答案的奖励信号，无需中间标注。奖励函数结合精确匹配（EM）和格式检查。通过迭代DPO优化分解器和求解器：采样多条轨迹，选择最好和最差路径构建偏好对（包括分解、中间回答、最终回答），然后使用DPO损失更新模型。为提升效率，采用多轮采样（m=3次分解，m′=4次最终答案）并迭代两轮。

- **公式与算法流程**：
  - 联合学习目标：pθ(a|q) = Σ_z pθ(z|q) Σ_w pθ(a|q,z,w)pθ(w|q,z) （实际通过采样近似）
  - 奖励函数：r(q, a′, a) = EM(a′, a) × f(q, a′) （f为格式检查）
  - 优化目标：最大化期望奖励，同时用KL散度约束偏离参考策略。
  - 通过推导得到最优策略的闭式解，并通过迭代DPO（Eq. 4.5）近似实现。

## 3. 实验设计

- **数据集与场景**：
  - **多跳QA**：2WikiMHQA, HotpotQA, Bamboogle, MusiQue
  - **多跳事实验证**：HOVER, ExFever
  - **文档级推理**：DocMath-Eval基准（包含TAT-QA, FinQA, MultiHiertt, TAT-HQA的四个子集：SimpShort, CompShort, SimpLong, CompLong）
  - 共 **10个公开数据集**，覆盖三种推理密集型任务。

- **基准方法**：
  - 指令微调LLM + 单轮RAG（Llama-3.1-it, DeepSeek-R1-Distill, Qwen-3, LLama-4, GPT-4o, GPT-4.1）
  - 基于提示的多步检索（IRCOT, Plan-RAG, Search-o1, IterDRAG）
  - 微调LLM + 搜索（InstructRAG, RAG-Star, ReARTeR, CORAG, Iter-RetGen）
  - 通过强化学习训练的搜索LLM（Search-R1, R1-Searcher, DeepResearcher, MMOA-RAG, ReSearch）
  - 另外在文档推理中还对比了大型模型如DeepSeek-V3、DeepSeek-R1、Qwen-2.5-Math等。

- **评估指标**：
  - QA：Exact Match (EM)、Accuracy、F1
  - 事实验证：EM
  - 文档推理：Accuracy（官方脚本，CoT/PoT选优）

## 4. 资源与算力

- **资源配置**（来自附录G）：
  - GPU：**8张 NVIDIA A100**。
  - 训练细节：批次大小为64，最大令牌数2560/2048（SFT/RFT）。SFT和RFT各训练**1个epoch**，RFT迭代**2轮**（图2显示在第二轮后基本收敛）。优化器为AdamW（β1=0.9, β2=0.98）。
  - 不同规模的模型学习率：1.5B/8B/14B使用全量微调，32B使用LoRA（r=8, α=16）。
  - 未报告总训练时长，但结合实验规模（180K SFT数据，49K RFT数据，多轮采样），估计训练时间在数小时至一天量级。

## 5. 实验数量与充分性

- **实验数量**：
  - **主实验结果**：表1（多跳QA和事实验证，含多种尺寸基准）和表2（文档推理，含20+模型对比）。
  - **消融实验**（表3）：包含组件消融（SFT、RFT、去除分解器/求解器）、SFT数据消融（去除搜索/推理数据）、RFT算法对比（RAFT、REST EM、Offline DPO、SimPO）。
  - **效率研究**（图3）：数据效率（SFT/RFT子规模）、推理时间对比。
  - **参数研究**（图4）：检索文档数k、采样数m/m′的影响；β（图23）、检索器类型（图24）。
  - **质量分析**（图5）：人工评估分解质量、召回率提升。
  - 实验覆盖全面，指标多样，对比方法广泛（包括同期工作）。
- **公平性与客观性**：
  - 所有实验采用相同采样设置（温度0.0用于推理，k=10），并控制数据泄漏（移除重叠ID）。
  - 基准方法按原文献配置复现或引用官方结果，部分基于GPT-4o的基线也给出参考。
  - 不足之处：部分基线（如Search-R1、DeepResearcher）仅报告部分指标，存在缺失；此外推理时延对比中未包括所有基线。

## 6. 论文的主要结论与发现

1. **性能领先**：AceSearcher在10个数据集上平均优于最强基线 **7.6%**（EM），尤其在小模型上表现突出（1.5B超越部分8B模型，8B超越70B模型）。
2. **参数效率极高**：AceSearcher-32B在文档级金融推理任务上匹配 **DeepSeek-V3（685B）**，仅使用其 **<5%的参数**。
3. **两阶段微调均属必要**：SFT和RFT都显著贡献性能，缺一不可；分解器和求解器角色互补。
4. **数据效率高**：仅用2K SFT样本即可达到强基线水平，RFT阶段5K样本即有效。
5. **推理效率合理**：AceSearcher推理时间虽长于标准RAG（因多步分解），但优于多数推理时扩展方法（如CORAG），且性能与32B模型相当。
6. **分解质量提升**：RFT增强了子问题分解的准确性和召回率，人工评估得分随模型尺寸和训练阶段提高。

## 7. 优点

- **方法创新**：提出合作自博弈框架，统一训练分解和求解能力，无需中间标注，仅用最终答案奖励。
- **通用性强**：适用于多种模型尺寸（1.5B~32B）和多种任务（QA、事实验证、文档推理）。
- **数据效率高**：通过混合SFT和迭代DPO，少量数据即可取得显著提升。
- **参数效率高**：小模型匹配大模型性能，极大降低部署成本。
- **实验设计全面**：涵盖多个主流数据集、多种基线类型、详细的消融和参数分析，结论可靠。

## 8. 不足与局限

- **任务覆盖有限**：主要评估推理密集型QA和事实验证，未涉及开放生成、对话、实时工具使用等场景（论文附录A明确指出）。
- **固定检索器**：训练和推理中使用固定检索器（E5、Contriever等），未联合优化检索与推理，存在优化局限。
- **推理开销**：多步分解导致推理延迟增加，在延迟敏感场景可能受限（但论文指出与多数基线相比仍具竞争力）。
- **未采用完全在线RL**：出于资源考虑，使用迭代DPO作为替代，可能不如全在线RL表达能力强。
- **部分基线不完整**：部分同期工作（如Search-R1、DeepResearcher）仅报告部分指标，导致对比不够全面。
- **统计显著性**：主实验未提供误差棒或置信区间，结果确定性依赖贪婪采样，但消融实验和参数研究提供了额外验证。

（完）
