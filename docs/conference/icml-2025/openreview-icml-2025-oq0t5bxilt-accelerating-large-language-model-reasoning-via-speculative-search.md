---
title: Accelerating Large Language Model Reasoning via Speculative Search
title_zh: 通过推测性搜索加速大语言模型推理
authors: "Zhihai Wang, Jie Wang, Jilai Pan, Xilin Xia, Huiling Zhen, Mingxuan Yuan, Jianye HAO, Feng Wu"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=oq0t5BXilT"
tags: ["query:automatic-discovery"]
score: 7.0
evidence: 通过小模型引导的启发式搜索加速大模型推理
tldr: 提出推测性搜索，用小模型引导大模型思维生成，加速基于树搜索的推理。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 解决树搜索式推理方法因生成大量中间步骤而导致的推理延迟问题。
method: 利用小型模型在思维和令牌两个层面与大模型协作，高效生成高质量推理思路。
result: 显著降低推理延迟，同时保持或提升推理质量。
conclusion: 推测性搜索框架有效加速了大语言模型的推理过程。
---

## Abstract
Tree-search-based reasoning methods have significantly enhanced the reasoning capability of large language models (LLMs) by facilitating the exploration of multiple intermediate reasoning steps, i.e., thoughts. However, these methods suffer from substantial inference latency, as they have to generate numerous reasoning thoughts, severely limiting LLM applicability. To address this challenge, we propose a novel Speculative Search (SpecSearch) framework that significantly accelerates LLM reasoning by optimizing thought generation. Specifically, SpecSearch utilizes a small model to strategically collaborate with a large model at both thought and token levels, efficiently generating high-quality reasoning thoughts. The major pillar of SpecSearch is a novel quality-preserving rejection mechanism, which effectively filters out thoughts whose quality falls below that of the large model's outputs. Moreover, we show that SpecSearch preserves comparable reasoning quality to the large model. Experiments on both the Qwen and Llama models demonstrate that SpecSearch significantly outperforms state-of-the-art approaches, achieving up to 2.12$\times$ speedup with comparable reasoning quality.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **问题**：基于树搜索（Tree-Search-Based, TSB）的推理方法（如Tree-of-Thoughts、Beam Search、MCTS）虽然显著提升了大语言模型（LLMs）在多步推理任务上的能力，但生成大量中间推理步骤（thoughts）导致推理延迟增加数个数量级（图1a），严重限制了实际部署，尤其是在低延迟要求的实时应用中。
- **背景**：现有加速方法（如标准推测解码 Speculative Decoding）仅在 token 级别进行投机加速，未能利用树搜索推理中“thought”作为基本单位的结构特性，导致加速效果欠佳。同时，简单地在 thought 层级让大模型介入（如固定比例拒绝）也难以保持推理质量（图2b）。
- **整体含义**：本文提出**Speculative Search (SpecSearch)** 框架，首次将推测执行思想泛化到树搜索推理中，通过小模型在 thought 和 token 双层级与大模型协作，在保持推理质量的同时显著加速推理过程。

## 2. 方法论

### 核心思想
- **双层级推测思维生成器（Bi-Level Speculative Thought Generator）**：遵循“草稿-评估-拒绝-修正”范式。在**粗粒度 thought 层面**，小模型并行生成多个候选思维，由思维评估器（如过程奖励模型 PRM）评分；在**细粒度 token 层面**，对 rejected 的低质量思维使用无损 token 级推测解码（如标准投机采样）进行修正。
- **质量保持的拒绝机制（Quality-Preserving Rejection Mechanism）**：动态设置每步推理的阈值，拒绝质量低于大模型输出的思维。由于无法直接获取当前步大模型质量，利用历史推理步骤中大模型生成的思维质量，通过**指数移动平均（EMA）** 结合非参数估计（如样本均值、置信上界或最大值）来估计当前步阈值 \(\hat{\beta}^{(k+1)}\)。
- **数学定义与理论保证**：
  - 定义思维质量 \(V(z)\)，生成器质量 \(E_{z\sim G}[V(z)]\)。
  - **Theorem 4.3**：若每步阈值 \(\beta^{(k)} \ge \mu_p^{(k)}\)（大模型平均质量），则生成器保持无退化质量。
  - **Theorem 4.5 & 4.6**：在质量递减假设（Assumption 4.4）下，给出每步及整体保持无退化质量的概率下界，且该下界随 draft 样本数 \(N\) 增大而趋近于1。

### 关键技术细节
- **草稿阶段**：小模型并行生成 \(2N\) 个思维（高效利用小模型低内存占用）。
- **评估阶段**：使用 PRM（如 MATH-psa, Math-Shepherd）为每个思维打分。
- **拒绝阶段**：比较分数与动态阈值 \(\hat{\beta}^{(k)}\)，保留高于阈值的；若保留数超过 \(N\)，取前 \(N\) 个。
- **修正阶段**：对 rejected 思维，用大模型（通过 token 级投机解码）重新生成替换。
- **阈值更新**：
  \[
  \hat{\beta}^{(k+1)} = \theta \hat{\beta}^{(k)} + (1-\theta) \Theta(\mathcal{V}_p^{(k)} \cup \mathcal{V}_q^{(k)})
  \]
  其中 \(\Theta\) 为 max 估计（实际采用），\(\theta=0.9\)。

## 3. 实验设计

### 数据集
- **主要数据集**：
  - **MATH-100**：从 MATH 数据集中随机选取100个难题（高中竞赛级别）。
  - **GSM8K-100**：从 GSM8K 数据集中随机选取100个小学应用题。
- **额外评估**（附录I.1）：
  - 完整 GSM8K（1319题）
  - AIME（竞赛题）
  - Olympiad Bench
  - HumanEval（代码生成）
- **消融实验**：MATH-50（从MATH-100再抽50个）。

### Benchmark 与对比方法
- **基准设置**：基于 OpenR 框架，使用量化模型（GPTQ-Int4）。
- **对比方法**：
  - **AR**：标准自回归生成（原始ToT方法）。
  - **SpS**：标准推测解码（token-level），使用 vLLM 实现。
  - **SpecSearch (Ours)**：本文方法。

### 主要模型与超参数
- 大模型：Qwen2.5-72B-Instruct-GPTQ-Int4, Llama-3-70B-Instruct-GPTQ-Int4
- 小模型：Qwen2.5-7B-Instruct-GPTQ-Int4, Llama-3-8B-Instruct-GPTQ-Int4（部分实验也用1.5B/0.5B版本）
- 搜索算法：Beam Search（束宽2，树宽6，深度50），MCTS（迭代4次）
- PRM：MATH-psa（主实验），Math-Shepherd（泛化实验）
- EMA权重 \(\theta=0.9\)（消融实验中在0.8~0.95变化）

## 4. 资源与算力

文中未明确说明使用了多少GPU型号、数量及训练时长。仅提及使用量化模型（GPTQ-Int4）以减少显存需求，以及使用 vLLM 进行推理加速。由于是推理阶段加速方法，无需额外训练，主要关注推理延迟测量。硬件细节未提供。

## 5. 实验数量与充分性

- **主实验**：4组（Qwen & Llama 在 MATH-100, GSM8K-100 上对比 AR, SpS）。
- **泛化实验**：
  - 不同搜索算法（Beam Search, MCTS）各2组。
  - 不同PRM（Math-Shepherd, MATH-psa）各2组。
  - 额外数据集4组（完整GSM8K, AIME, Olympiad Bench, HumanEval）。
- **消融实验**：贡献分析（替换评估、不同拒绝策略）共5组；敏感性分析（EMA权重、小模型大小）各5组左右。
- **总计**：约20+组实验，覆盖不同模型、数据集、算法、评估器、超参数。

**充分性评价**：实验设计较为全面，覆盖了主要推理场景、多种模型系列、两种搜索算法、两种PRM，并进行了消融和敏感性分析。但未在更大规模模型（如数百B参数）或更多样化任务（如常识推理、多模态）上验证。实验随机采样100/50个样本，虽然因推理耗时长而可以理解，但样本量较小可能带来方差。总体而言，在论文范围内实验充分且客观。

## 6. 主要结论与发现

- **显著加速**：SpecSearch 在 MATH-100 上相比 AR 加速 3.35×，相比 SpS 加速 1.72×；在 GSM8K-100 上最高加速 2.87× vs AR，1.44× vs SpS（表1）。
- **保持或提升推理质量**：在 Llama 上准确率甚至超过基线（MATH-100: 64% vs 62%/61%），在 Qwen 上准确率几乎持平（差异 ≤1%）。
- **广泛兼容性**：可集成不同搜索算法（Beam Search, MCTS）和不同 PRM（Math-Shepherd, MATH-psa），均获得类似加速收益。
- **理论保障**：证明了在合适阈值下保持无退化质量的概率下界，且随 draft 样本数增加趋近于1。
- **可视化分析**：每步平均奖励分数与 AR/SpS 接近，说明质量保持（图4）。

## 7. 优点

- **方法创新**：首次在树搜索推理中实现双层级推测（thought+token），结构上与推理框架天然对齐，不同于仅 token 级的推测解码。
- **质量保持机制**：利用 PRM 进行语境质量验证，避免严格 token 级匹配导致的频繁拒绝，提高接受率；动态阈值基于历史大模型质量估计，无需预知当前步大模型输出。
- **理论分析扎实**：给出了概率下界和单调性分析，为方法提供了理论基础。
- **实验充分且结果显著**：在多个数据集、模型、算法上均取得一致加速，且消融实验验证了各组件的必要性。
- **实用性强**：无需修改搜索算法或 prompts，即插即用；小模型可并行生成，不显著增加延迟。

## 8. 不足与局限

- **实验样本量较小**：主实验仅使用100个样本（MATH-100, GSM8K-100），可能受随机性影响；虽补充了完整GSM8K（1319个），但其他高难度数据集样本数仍小。
- **仅关注数学与代码任务**：未在常识推理、开放问答、对话等任务上验证，泛化性受限。
- **依赖 PRM 质量**：评估和拒绝机制依赖 PRM 的准确性；若 PRM 对误导性思维给出高分（如案例3所示），可能导致错误累积。论文也承认存在“错误思维欺骗 PRM”的情况。
- **阈值估计对历史数据依赖**：在早期步骤历史数据少时，估计可能不准确，虽通过 EMA 缓解，但初始阈值设定（用大模型生成）增加了少量开销。
- **未提供硬件资源细节**：无法复现或评估实际硬件要求。
- **超参数稳定性**：EMA 权重 θ 在较宽范围内效果稳定，但未探讨搜索宽度 N、树深度等对加速比的影响。

（完）
