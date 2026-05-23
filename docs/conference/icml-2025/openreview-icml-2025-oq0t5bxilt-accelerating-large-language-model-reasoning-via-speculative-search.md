---
title: Accelerating Large Language Model Reasoning via Speculative Search
title_zh: 通过投机搜索加速大语言模型推理
authors: "Zhihai Wang, Jie Wang, Jilai Pan, Xilin Xia, Huiling Zhen, Mingxuan Yuan, Jianye HAO, Feng Wu"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=oq0t5BXilT"
tags: ["query:automatic-discovery"]
score: 4.0
evidence: 投机搜索作为启发式方法加速大模型推理
tldr: 提出投机搜索框架，用小模型加速大模型的树搜索推理。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 树搜索推理方法延迟高，限制了应用。
method: 利用小模型在大模型推理时协同生成高质量思路，优化生成过程。
result: 显著加速了大语言模型的推理过程。
conclusion: 投机搜索有效提升了树搜索推理的效率。
---

## Abstract
Tree-search-based reasoning methods have significantly enhanced the reasoning capability of large language models (LLMs) by facilitating the exploration of multiple intermediate reasoning steps, i.e., thoughts. However, these methods suffer from substantial inference latency, as they have to generate numerous reasoning thoughts, severely limiting LLM applicability. To address this challenge, we propose a novel Speculative Search (SpecSearch) framework that significantly accelerates LLM reasoning by optimizing thought generation. Specifically, SpecSearch utilizes a small model to strategically collaborate with a large model at both thought and token levels, efficiently generating high-quality reasoning thoughts. The major pillar of SpecSearch is a novel quality-preserving rejection mechanism, which effectively filters out thoughts whose quality falls below that of the large model's outputs. Moreover, we show that SpecSearch preserves comparable reasoning quality to the large model. Experiments on both the Qwen and Llama models demonstrate that SpecSearch significantly outperforms state-of-the-art approaches, achieving up to 2.12$\times$ speedup with comparable reasoning quality.

---

## 论文详细总结（自动生成）

# 基于论文《Accelerating Large Language Model Reasoning via Speculative Search》的详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：基于树搜索（Tree-Search-Based, TSB）的推理方法（如 Tree-of-Thoughts、Beam Search、MCTS）虽然能显著增强大语言模型（LLM）的推理能力，但需要生成大量中间推理步骤（thoughts），导致推理延迟大幅增加（实验显示可达数个数量级），严重限制了 LLM 在低延迟场景下的实际部署。
- **整体含义**：现有方法在探索多种推理路径时，思路生成（thought generation）占据总计算时间的 91% 以上，成为效率瓶颈。因此，亟需一种在保持推理质量的同时大幅降低延迟的加速方法。

## 2. 论文提出的方法论
- **核心思想**：提出 Speculative Search（SpecSearch）框架，利用一个小模型（draft model）与大模型（target model）在**粗粒度的思路级**和**细粒度的 token 级**进行协作，高效生成高质量推理思路。
- **关键技术细节**：
  - **双层次投机思路生成器（Bi-Level Speculative Thought Generator）**：
    - **思路级起草**：使用小模型并行生成多个推理思路。
    - **思路级评估**：利用现有推理框架中的思路评估器（如过程奖励模型 PRM）对每个思路给出质量分数。
    - **思路级拒绝**：根据动态阈值拒绝低质量思路（仅当思路质量低于大模型输出质量时拒绝）。
    - **Token 级纠正**：对被拒绝的思路，使用标准 token 级投机解码方法（如 Speculative Sampling）由大模型重新生成，确保最终结果与大模型分布一致。
  - **质量保持拒绝机制（Quality-Preserving Rejection Mechanism）**：
    - 由于无法直接获取大模型在当前步骤的推理质量，论文利用历史推理过程中大模型已生成的思路数据，通过**非参数统计估计**（如样本均值、置信上界、最大值）结合**指数移动平均（EMA）** 动态估计大模型的当前质量下限，作为拒绝阈值。
    - 同时利用小模型中通过拒绝的样本作为近似上界，提高估计准确性。
  - **理论保证**：
    - 定理 4.3：若每个推理步骤的阈值不小于大模型在该步骤的期望质量，则 SpecSearch 保证推理质量不退化。
    - 定理 4.5 和 4.6：在质量递减假设和方差有界条件下，给出了逐步骤和整个推理过程的质量保持概率下界，并证明该下界随起草样本数 N 增大而趋近于 1。

## 3. 实验设计
- **数据集**：
  - **数学推理**：GSM8K（100 和完整 1319 样本）、MATH（100 和 50 样本）、AIME、Olympiad Bench。
  - **代码生成**：HumanEval。
- **基准方法**：
  - **AR**：原始自回归生成（标准 ToT 方法，仅用大模型）。
  - **SpS**：标准投机采样（仅 token 级加速）。
- **对比方法**：在同一搜索算法（Beam Search 或 MCTS）和相同评估器（PRM）下进行对比。
- **模型设置**：
  - **主实验**：Qwen2.5-72B-Instruct（大模型）与 Qwen2.5-7B-Instruct（小模型）；Llama-3-70B-Instruct 与 Llama-3-8B-Instruct。
  - **评估器**：MATH-psa（默认），Math-Shepherd（用于通用性验证）。
  - **搜索算法**：Beam Search（默认）、MCTS。

## 4. 资源与算力
- **显式说明**：论文**未明确**说明所使用的 GPU 型号、数量及训练/推理时长。仅提到使用量化模型（GPTQ-Int4）部署，未提及训练阶段（本方法为纯推理加速，无需训练）。
- **推断**：由于涉及 70B 量级的大模型和 7B/8B 的小模型，推理时很可能使用多张高端 GPU（如 A100 或 H100）。具体配置未披露。

## 5. 实验数量与充分性
- **实验组数**：
  - **主实验**（表 1）：2 个数据集（MATH-100、GSM8K-100）× 2 个模型族（Qwen、Llama）× 3 种方法 = 12 种组合。
  - **通用性实验**（表 2）：2 种搜索算法（Beam Search、MCTS）× 2 种 PRM（Math-Shepherd、MATH-psa）= 4 种情况，在 GSM8K-100 上测试。
  - **消融实验**（表 3）：在 MATH-50 上测试了评估模块替换、拒绝机制变体共 5 个变体。
  - **敏感性分析**（表 10、11）：不同小模型大小（7B/3B/1.5B/0.5B）、不同 EMA 权重 θ。
  - **附加实验**（附录 I.1）：完整 GSM8K（1319 样本）、AIME、Olympiad Bench、HumanEval，共 4 个补充表。
- **充分性与公平性**：实验覆盖了多种常见数据集（数学推理+代码）、两种主流模型族、两种搜索算法、两种评估器，并进行消融和敏感性分析。对比方法（AR、SpS）均为当前业内标准。实验设置均采用相同搜索参数（树宽 6、深度 50），控制变量较好。但主实验使用 100 样本子集，可能存在统计波动；作者补充了完整数据集结果予以缓解。

## 6. 论文的主要结论与发现
- **显著加速**：SpecSearch 在 **MATH-100** 数据集上相比 AR 加速 **3.35×**，相比 SpS 加速 **1.72×**；在 **GSM8K-100** 上加速比分别为 2.87× 和 1.44×。在完整 GSM8K-1319 上加速 **2.84×**。
- **保持推理质量**：在所有实验中，SpecSearch 的准确率与 AR 和 SpS 相当，甚至在 Llama 模型上还略有提升（MATH-100 上 64% vs 62%）。
- **兼容性强**：可无缝集成到 Beam Search 和 MCTS 中，并与不同 PRM（Math-Shepherd、MATH-psa）搭配使用。
- **理论保障**：提供了质量保持的概率上界，且该界随起草数 N 增加而接近 1。

## 7. 优点
- **创新性**：首次将投机执行（speculative execution）从 token 级推广到**树搜索推理的思路级**，提出双层次投机生成范式，更贴合推理树结构。
- **高效拒绝机制**：通过历史数据动态估计大模型质量，无需额外大模型推理，计算开销极小。
- **理论贡献**：给出推理质量不退化的充分条件和概率下界，增强了方法可信度。
- **实验全面**：覆盖多种模型、数据集、搜索算法、评估器，并进行消融和敏感性分析，验证了方法的普适性。
- **开源性**：代码已在 GitHub 公开，便于复现和二次开发。

## 8. 不足与局限
- **实验偏差风险**：主实验仅使用 100 样本子集（MATH-100、GSM8K-100），可能受随机性影响。虽补充完整数据集，但主要图表仍基于小样本。
- **PRM 局限性**：案例研究表明，错误的推理思路有时能获得高 PRM 分数，导致模型无法正确拒绝（即 PRM 本身存在误判风险）。这会限制 SpecSearch 的质量保持能力。
- **阈值估计依赖假设**：动态阈值方法假设大模型推理质量随步骤递减（如图 7 所示）。若实际任务不满足该假设，估计可能失效。
- **未涵盖多轮对话或更复杂任务**：实验仅涉及数学推理和代码生成，未在开放域问答、对话等场景验证。
- **算力成本未量化**：虽然减少了延迟，但需要维护两个模型（大+小），增加了内存和调度复杂度。加速比受批处理大小、硬件等因素影响，文中未给出详细资源消耗分析。
- **缺少与最新加速技术的对比**：仅对比了标准 AR 和 SpS，未与最近的其他加速方法（如 SEED、TreeBon、并行解码等）进行定量比较。

（完）
