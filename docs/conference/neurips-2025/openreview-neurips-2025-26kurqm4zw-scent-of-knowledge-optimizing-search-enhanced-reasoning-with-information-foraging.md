---
title: "Scent of Knowledge: Optimizing Search-Enhanced Reasoning with Information Foraging"
title_zh: 知识之香：利用信息觅食理论优化搜索增强推理
authors: "Hongjin Qian, Zheng Liu"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=26kUrQm4zw"
tags: ["query:ad"]
score: 8.0
evidence: 信息觅食理论指导的启发式搜索增强LLM推理，可迁移至自动发现
tldr: 传统检索增强生成采用静态预检索策略，无法适应复杂、多步或动态变化的信息需求。受信息觅食理论启发，本文提出InForage，一个强化学习框架，将检索增强推理形式化为动态信息觅食过程，模型在推理中自适应决定何时检索、检索什么以及如何整合。实验表明，该方法在多种复杂问答任务中提升了检索效率与回答质量，其动态搜索策略可直接用于自动发现中的启发式搜索。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-26kurqm4zw/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-26kurqm4zw/fig-002.webp\", \"caption\": \"\", \"page\": 2, \"index\": 2, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-26kurqm4zw/fig-003.webp\", \"caption\": \"\", \"page\": 2, \"index\": 3, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-26kurqm4zw/fig-004.webp\", \"caption\": \"\", \"page\": 2, \"index\": 4, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-26kurqm4zw/fig-005.webp\", \"caption\": \"\", \"page\": 23, \"index\": 5, \"width\": 2360, \"height\": 2456}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-26kurqm4zw/fig-006.webp\", \"caption\": \"\", \"page\": 23, \"index\": 6, \"width\": 2350, \"height\": 1758}]"
motivation: 静态检索策略无法应对多步或动态信息需求，需要推理时自适应检索决策。
method: 基于信息觅食理论，采用强化学习训练LLM在推理过程中动态决定检索时机与内容。
result: 在多个复杂问答基准上，InForage优于静态检索方法和动态检索基线。
conclusion: 将信息觅食融入强化学习可有效指导LLM的启发式搜索，为自动发现提供了自适应检索范式。
---

## Abstract
Augmenting large language models (LLMs) with external retrieval has become a standard method to address their inherent knowledge cutoff limitations. However, traditional retrieval-augmented generation methods employ static, pre-inference retrieval strategies, making them inadequate for complex tasks involving ambiguous, multi-step, or evolving information needs. Recent advances in test-time scaling techniques have demonstrated significant potential in enabling LLMs to dynamically interact with external tools, motivating the shift toward adaptive inference-time retrieval.
Inspired by Information Foraging Theory (IFT), we propose InForage, a reinforcement learning framework that formalizes retrieval-augmented reasoning as a dynamic information-seeking process. Unlike existing approaches, InForage explicitly rewards intermediate retrieval quality, encouraging LLMs to iteratively gather and integrate information through adaptive search behaviors. To facilitate training, we construct a human-guided dataset capturing iterative search and reasoning trajectories for complex, real-world web tasks. Extensive evaluations across general question answering, multi-hop reasoning tasks, and a newly developed real-time web QA dataset demonstrate InForage's superior performance over baseline methods. 
These results highlight InForage's effectiveness in building robust, adaptive, and efficient reasoning agents. 
We provide all codes and datasets in the supplementary materials.

---

## 论文详细总结（自动生成）

# 论文中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究背景**：大型语言模型（LLM）存在知识截止日期限制，传统检索增强生成（RAG）采用静态的预推理检索策略，即在推理前一次性检索固定数量的文档并拼接到提示中。这种静态方法无法适应复杂任务中用户信息需求模糊、多步骤、动态变化或需要迭代推理的情况。
- **核心问题**：如何让LLM在推理过程中动态地、自适应地决定何时检索、检索什么以及如何整合检索到的信息，从而高效解决需要多跳推理和证据积累的复杂信息寻求任务。
- **整体含义**：本文从认知科学中的信息觅食理论（Information Foraging Theory, IFT）获得灵感，将检索增强推理形式化为一个动态信息觅食过程，通过强化学习优化模型的检索决策，使模型能够像人类一样通过“信息气味”引导搜索，逐步收集和整合证据。

## 2. 方法论

### 核心思想
- 基于信息觅食理论，将LLM的推理检索过程类比为动物觅食：模型通过推理步骤和生成的子查询（subquery）体现“信息气味”（information scent），引导检索动作获取“信息补丁”（information patch），逐步覆盖期望的知识空间。
- 提出InForage框架，使用强化学习（PPO）同时优化三个目标：最终答案正确性、中间检索的信息增益、推理效率。

### 关键技术细节
1. **推理轨迹形式化**：模型生成包含 `<think>`（推理内容）、`<search>`（子查询）、`<info>`（检索结果）、`<answer>`（最终答案）等特殊标记的结构化输出。
2. **奖励设计**：
   - **Outcome Reward**：基于最终答案的精确匹配（Exact Match）或F1分数。
   - **Information Gain Reward**：衡量检索到的信息补丁对期望知识空间（D*）的累积覆盖率，取轨迹中最大覆盖率作为奖励。
   - **Efficiency Penalty**：对过长推理路径施加指数衰减惩罚（β^(max(0,T-2))），鼓励简洁的推理。
3. **总奖励函数**： `R = Refficiency × (Routcome + α·Rgain)`，其中α平衡最终答案与信息增益。
4. **优化**：
   - 先使用监督微调（SFT）让模型学会迭代推理检索的基本能力（基于自构建数据集）。
   - 再使用Proximal Policy Optimization (PPO) 进行强化学习，利用上面定义的规则奖励。梯度更新仅作用于模型生成部分，排除检索到的信息补丁（masking）。
5. **训练数据构建**：通过人工浏览网络（谷歌搜索API）获取500个复杂多跳推理轨迹，再用GPT-4o自动化扩展至20,000个样本。每个样本包含问题、答案、中间搜索轨迹、以及经过验证的黄金文档URL。

## 3. 实验设计

### 数据集与场景
- **通用问答**：Natural Questions (NQ)、TriviaQA (TQA)、PopQA
- **多跳推理**：HotpotQA (HQA)、2WikiMultihopQA (2Wiki)、MuSiQue (Mus)、Bamboogle
- **实时网络QA**：自构建的Self数据集（500个评估样本，需实时网络搜索和多步推理）
- **注**：InForage仅在NQ、HotpotQA和自构建数据集上训练，其余为域外测试。

### Benchmark方法
- **非检索基线**：Vanilla（直接回答）、SFT（监督微调）、Reasoning（强化学习仅基于最终答案）
- **检索增强基线**：Vanilla RAG、IRCoT、RQRAG、Self-RAG、Search-o1、Search-R1（PPO和GRPO两种变体）
- **基础模型**：Qwen-2.5-3B-Instruct（主要），部分实验使用Qwen-2.5-7B
- **评估指标**：Exact Match (EM)

## 4. 资源与算力
- 训练硬件：8块NVIDIA A800-80G GPU
- SFT：2个epoch，学习率1e-5
- RL：PPO训练300步，学习率1e-6，warm-up比例0.5
- 具体训练总时长未明确说明，但提供了足够复现的配置信息。

## 5. 实验数量与充分性

- **主要实验结果**：在8个数据集上对比了10种以上方法，结果表1显示InForage在所有数据集上取得最佳或第二佳性能，平均EM为41.0%，远超第二名Search-R1-GRPO的35.6%。
- **消融实验**：对SFT、自构建数据集、信息增益奖励、效率惩罚、不同强化学习算法（PPO vs GRPO）、模型规模（3B vs 7B）等进行了系统消融（图2）。
- **案例研究**：通过一个网球选手的多条件交织查询展示了InForage的推理过程（表2）。
- **充分性评价**：实验覆盖了域内和域外数据集，消融实验全面，统计显著性通过t-test验证，结果客观公平。但是，论文未报告多次运行的标准差或误差条（尽管提到进行了t-test，但未在结果表中展示误差信息）。

## 6. 主要结论与发现

1. InForage在域内和域外数据集上均一致优于所有基线，展现出强大鲁棒性和泛化能力。
2. 动态搜索增强方法（如Search-R1和InForage）在多跳任务上尤其有效，而传统静态检索方法在模糊或演变信息需求下性能下降。
3. 信息增益奖励和效率惩罚对性能均有正向贡献，但效率惩罚在复杂真实世界任务上效果可能略有不同（需要更长推理链）。
4. PPO优于GRPO，因为PPO使用学习到的奖励信号更适合评估复杂推理质量。
5. 模型规模扩大（从3B到7B）带来进一步性能提升，说明InForage可随模型能力有效扩展。

## 7. 优点

- **理论创新**：将信息觅食理论系统地融入检索增强推理，提供了认知科学的理论支撑，而非仅凭工程直觉。
- **奖励设计细致**：同时优化最终答案、中间检索质量和效率，解决了传统单一最终奖励的稀疏信号问题。
- **数据构建严谨**：通过人工标注+自动化扩展构建了高质量的带中间轨迹数据集，并包含黄金文档URL用于精确评估检索质量。
- **实验覆盖全面**：在多个通用和多跳数据集上对比众多基线，消融实验充分，验证了各组件贡献。
- **可迁移性**：方法工具无关，框架可扩展到代码编译器、结构化数据库等其他外部工具。

## 8. 不足与局限

- **模型规模有限**：仅测试了3B和7B模型，未评估更大模型（如13B、70B）或其他模型家族（如LLaMA、Mixtral），泛化性需进一步验证。
- **对比基线不完整**：部分最新搜索增强推理工作（如DeepResearcher等）未能及时纳入对比（可能因发表于同期）。
- **任务范围窄**：数据集仅包含短答案QA任务，未覆盖长篇合成、报告写作、多文档摘要等更复杂的应用场景。
- **误差估计缺失**：虽然提到做了t-test，但结果表中未给出标准差或置信区间，统计显著性展示不完整。
- **训练-测试分布差异**：自构建数据集仅覆盖2025年1-3月的网页内容，可能引入时间偏差，且实时任务评估依赖于缓存搜索结果而非实时API。
- **奖励设计依赖黄金证据**：信息增益奖励需要提前知道期望知识空间D*（即黄金文档URL），在实际部署中难以直接获取，限制了离线训练到在线应用的直接迁移。

（完）
