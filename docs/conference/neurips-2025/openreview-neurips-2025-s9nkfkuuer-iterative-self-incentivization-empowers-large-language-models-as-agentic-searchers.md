---
title: Iterative Self-Incentivization Empowers Large Language Models as Agentic Searchers
title_zh: 迭代自激励增强大语言模型作为智能体搜索者
authors: "Zhengliang Shi, Lingyong Yan, Dawei Yin, Suzan Verberne, Maarten de Rijke, Zhaochun Ren"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=s9NkfkUuEr"
tags: ["query:ad"]
score: 9.0
evidence: 语言模型引导的启发式搜索用于科学发现
tldr: 针对复杂任务中多跳查询和检索内容不相关的问题，ExSearch提出一种自激励的智能体搜索框架，让大语言模型在推理过程中自主决定检索内容、触发外部检索器并提取细粒度证据以支持下一步推理。通过自激励迭代训练，模型学会更有效的搜索策略，显著提升多跳问答和信息检索的准确率，为语言模型引导的启发式搜索提供了新范式。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 现有方法难以让LLM在复杂任务中准确搜索知识，面临多跳查询和无关检索内容的挑战。
method: 提出ExSearch框架，LLM在推理过程中通过自激励过程决定检索内容、触发检索器并提取证据。
result: 实验表明ExSearch在多跳问答和检索任务上显著优于传统方法。
conclusion: ExSearch验证了自激励机制在LLM搜索中的有效性，为启发式搜索与语言模型的结合提供了新方向。
---

## Abstract
Large language models (LLMs) have been widely integrated into information retrieval to advance traditional techniques. However, effectively enabling LLMs to seek accurate knowledge in complex tasks remains a challenge due to the complexity of multi-hop queries as well as the irrelevant retrieved content. To address these limitations, we propose ExSearch, an agentic search framework, where the LLM learns to retrieve useful information as the reasoning unfolds through a self-incentivized process. At each step, the LLM decides what to retrieve (thinking), triggers an external retriever (search), and extracts fine-grained evidence (recording) to support next-step reasoning.  To enable LLM with this capability, we adopts a Generalized Expectation-Maximization algorithm. In the E-step, the LLM generates multiple search trajectories and assigns an importance weight to each; the M-step trains the LLM on them with a re-weighted loss function. This creates a self-incentivized loop, where the LLM iteratively learns from its own generated data, progressively improving itself for search. We further theoretically analyze this training process, establishing convergence guarantees. Extensive experiments on four knowledge-intensive benchmarks show that ExSearchS substantially outperforms baselines, e.g., +7.8% improvement on exact match score. Motivated by these promising results, we introduce ExSearch-Zoo, an extension that extends our method to broader scenarios, to facilitate future work.

---

## 论文详细总结（自动生成）

# 论文中文详细总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：大语言模型（LLM）已被广泛集成到信息检索（IR）中，但在处理复杂任务（如多跳问答）时仍面临挑战。主要问题有两个：
  - **多跳查询的复杂性**：直接提交包含多个子查询的复杂查询往往导致检索覆盖率低。
  - **检索内容不相关**：即使对于简单查询，检索结果也常包含无关内容，形成误导性上下文。
- **整体目标**：教会 LLM 如何与检索器交互，并在推理过程中反思检索到的内容，从而有效获取准确知识。
- **核心含义**：提出一种**自激励的智能体搜索框架** ExSearch，让 LLM 在推理过程中自主决定检索什么、触发外部检索器、并提取细粒度证据，通过自激励迭代训练逐步提升搜索能力。

## 2. 方法论：核心思想、关键技术细节、算法流程

- **核心思想**：将 LLM 建模为**探索性搜索智能体**，通过“思考（thinking）→ 搜索（search）→ 记录（recording）”的循环动作逐步构建搜索轨迹，最终基于完整轨迹生成答案。训练过程采用**广义期望最大化（GEM）算法**，将搜索轨迹视为潜在变量，通过自激励循环优化 LLM。
- **关键技术细节**：
  - **动作定义**：
    - `thinking`: 基于当前搜索轨迹生成子查询。
    - `search`: 触发外部检索器（如 ColBERTv2.0）获取 top-K 文档。
    - `recording`: 从检索文档中提取细粒度证据，支持下一步推理。
  - **训练算法（GEM）**：
    - **E-step（轨迹探索）**：LLM 生成多个候选搜索轨迹，每个轨迹根据其支持正确答案的可能性自动分配一个重要性权重 `w(z) ∝ p(y | x, z; θt)`（即当前模型下轨迹生成正确答案的概率）。
    - **M-step（重加权轨迹学习）**：利用重要性权重重新加权轨迹，构建证据下界（ELBO）并最大化，从而更新 LLM 参数。优化目标分解为两部分：
      - `LR`（学习搜索）：`w(z) log p(z | x; θ)`，鼓励模型生成高质量搜索轨迹。
      - `LA`（学习回答）：`w(z) log p(y | x, z; θ)`，训练模型聚合轨迹信息生成最终答案。
  - **理论保证**：证明了该训练过程是**非递减**的，且由于目标函数有上界，序列收敛到有限值，即保证收敛。
- **算法流程**（文字描述）：
  1. 用少量伪数据（1000 个示例）进行冷启动微调，使 LLM 具备基本动作能力。
  2. 在每次训练迭代中：
     - E-step：LLM 为每个输入任务生成多个搜索轨迹（思考→搜索→记录循环），并计算每个轨迹的重要性权重。
     - M-step：利用重加权损失函数训练 LLM，更新参数。
  3. 迭代 5 次（默认），并在验证集上早停。

## 3. 实验设计：数据集、Benchmark、对比方法

- **数据集**：四个知识密集型基准：
  - Natural Questions（NQ）（单跳）
  - HotpotQA（多跳）
  - MuSiQue（多跳）
  - 2WikiMultihopQA（2WikiQA）（多跳）
- **评估指标**：来自 KILT 的 F1、Exact Match（EM）、Accuracy（Acc.）。
- **对比方法**（三组）：
  - **直接推理（无检索）**：DeepSeek-R1、GPT-4o、GPT-3.5、Qwen2.5、LLaMA-3.3-70B、Mistral-8x7B 等。
  - **高级 RAG**：RankRAG、ChatQA、RetRobust、InstructRAG、RAG-DDR、Recomp 等。
  - **迭代 RAG**：GenGround、IRCoT、DSPy、SearChain、Search-o1、Search-R1（DPO/PPO 训练）、Self-RAG 等。
- **实现细节**：
  - 检索器：ColBERTv2.0，语料为 Wikipedia 2018 年 dump。
  - 文档数：高级 RAG 方法使用 10 篇，迭代 RAG 方法及 ExSearch 使用 5 篇（可迭代检索）。
  - LLM 骨干：Qwen-2.5-7B-Instruct、Llama-3.1-8B、Mistral-7B 等，以及扩展到 3B、24B 模型。
  - 训练：DeepSpeed ZeRO 3，学习率 2×10⁻⁶，迭代 5 次，早停。

## 4. 资源与算力

- 论文**未明确说明**具体使用的 GPU 型号、数量及训练时长。仅提到使用 DeepSpeed ZeRO 3 进行分布式训练，batch size 根据模型大小设为 4（3B/7B/8B）或 2（24B），采用 BF16 混合精度训练，序列长度 8192 tokens。
- 冷启动数据合成使用 GPT-4o，约 $20 成本生成 1000 个示例。
- 没有提供完整的算力消耗报告，这是一个信息缺口。

## 5. 实验数量与充分性

- **实验数量**：非常充分，涵盖：
  - 4 个数据集的全面对比（表 1）。
  - 检索性能评估（表 2：Recall@3/5）。
  - 消融实验（表 3）：逐一去除 thinking、search、recording、w(z) 四个组件。
  - 训练收敛性可视化（图 3）。
  - 冷启动数据量影响分析（图 4）。
  - 扩展实验（ExSearch-Zoo）：多种 backbone LLM（3B-24B）及添加重排序动作（图 5）。
- **充分性与公平性**：
  - 对比基线广泛且涵盖最新方法，包括 GPT-4o、Search-R1 等。
  - 论文报告了多个指标（F1、EM、Acc.），避免单一指标偏差。
  - 对无法复现的基线（标注“-”）仅引用原始论文结果，透明度高。
  - 消融实验清晰验证各组件必要性。
- **潜在偏差**：主要基于字面匹配指标，未进行人工评估（仅补充了一个小规模人工评估，100 个样本）。长文本生成质量未充分衡量。

## 6. 主要结论与发现

- ExSearch 在所有四个基准上显著优于所有基线，即使使用 7B 模型也超过 GPT-4o、LLaMA-3.3-70B 等大模型（平均 F1 提升 +5.63 和 +7.55）。
- 检索性能（Recall）也大幅提升，说明迭代推理有助于覆盖更多相关知识。
- 消融实验表明每个组件（thinking, search, recording, 重要性权重 w(z)）都至关重要，缺失任一组件均导致性能下降。
- 训练过程验证了理论收敛性，通常在 2-3 次迭代内达到最佳性能。
- 冷启动数据量即使很少（100 个示例）也能得到较好表现，且从零开始也可工作。
- ExSearch-Zoo 扩展证明该方法可泛化到不同模型家族和动作空间（如添加重排序可进一步提升性能）。

## 7. 优点（方法与实验设计的亮点）

- **方法创新**：
  - 将搜索过程建模为 LLM 的“思考-搜索-记录”动作序列，端到端训练，而非分阶段级联。
  - 采用 GEM 算法将搜索轨迹视为潜在变量，通过自激励循环逐步优化，有理论收敛保证。
  - 重要性权重 `w(z) ∝ p(y | x, z)` 提供了连续细粒度的训练信号，优于二元奖励。
  - 框架可扩展（ExSearch-Zoo），支持不同 backbone 和额外动作（如重排序）。
- **实验设计亮点**：
  - 对比基线全面，包括直接推理、高级 RAG、迭代 RAG 三大类，且使用统一检索设置。
  - 不仅评估最终答案质量，还报告检索召回率，说明方法对检索本身的改善。
  - 消融实验系统，并分析冷启动数据量的影响，提供实用指南。
  - 提供理论收敛性证明并与实验收敛曲线验证。

## 8. 不足与局限

- **实验覆盖**：
  - 仅使用四个 QA 数据集，未测试更开放、更复杂的任务（如长文档摘要、事实核查、多模态检索等）。
  - 评估指标局限于字面匹配（F1/EM/Acc.），未充分衡量生成答案的流畅性、完整性、可解释性。
  - 未进行大规模人工评估（仅 100 样本）。
- **偏差风险**：
  - 检索语料固定为 Wikipedia 2018 dump，可能与最新知识存在差距。
  - 冷启动数据来源于 GPT-4o 生成，可能存在分布偏差。
- **应用限制**：
  - 每个推理步骤都触发检索，对简单查询可能冗余（计算开销大）。
  - 在失败案例分析中，存在“过度搜索”（over-searching）和“欠搜索”（under-searching）问题，模型尚不能自适应控制搜索深度。
  - 目前仅支持文本输入输出，未扩展到多模态场景。
  - 训练和推理的计算成本未详细报告，与其他方法的效率对比缺失。
- **公平性**：论文未报告统计显著性检验，未提供错误条或置信区间。

（完）
