---
title: "MOOSE-Chem2: Exploring LLM Limits in Fine-Grained Scientific Hypothesis Discovery via Hierarchical Search"
title_zh: "MOOSE-Chem2: 通过层次搜索探索LLM在细粒度科学假设发现中的极限"
authors: "Zonglin Yang, Wanhao Liu, Ben Gao, Yujie Liu, Wei Li, Tong Xie, Lidong Bing, Wanli Ouyang, Erik Cambria, Dongzhan Zhou"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=Q3DtkFJ1Ap"
tags: ["query:ad"]
score: 10.0
evidence: 利用LLM内部启发式进行层次搜索，生成细粒度可操作科学假设
tldr: 当前LLM生成的科学假设往往停留在粗粒度层面，缺少具体的方法和实验步骤。本文提出MOOSE-Chem2，将细粒度科学假设发现建模为组合优化问题，并采用层次搜索策略，充分利用LLM内部蕴含的启发式知识，从给定的粗略研究方向出发，自动生成包含详细实验方案的可操作假设。在化学等多个科学领域的实验表明，该方法能够产生比基线更具体、更合理的假设，显著提高了假设的实用性。这项工作不仅探索了LLM在自动化科学发现中的能力边界，也为未来将大语言模型与启发式搜索相结合进行科学发现提供了重要启示。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-q3dtkfj1ap/fig-001.webp\", \"caption\": \"\", \"page\": 14, \"index\": 1, \"width\": 1024, \"height\": 1024}]"
motivation: 现有LLM生成科学假设往往过于粗略，缺乏方法论和实验细节，无法直接指导实验验证。
method: 将细粒度假设发现形式化为组合优化问题，通过层次搜索框架充分利用LLM内部启发式来生成详细假设。
result: 在化学等领域，该方法成功生成了高质量可操作的假设，验证了LLM在复杂假设发现中的潜力。
conclusion: MOOSE-Chem2揭示了LLM在细粒度科学假设发现中的上限，为自动科学发现提供了新方向。
---

## Abstract
Large language models (LLMs) have shown promise in automating scientific hypothesis generation, yet existing approaches primarily yield coarse-grained hypotheses lacking critical methodological and experimental details. We introduce and formally define the new task of fine-grained scientific hypothesis discovery, which entails generating detailed, experimentally actionable hypotheses from coarse initial research directions. We frame this as a combinatorial optimization problem and investigate the upper limits of LLMs' capacity to solve it when maximally leveraged. Specifically, we explore four foundational questions: (1) how to best harness an LLM's internal heuristics to formulate the fine-grained hypothesis it itself would judge as the most promising among all the possible hypotheses it might generate, based on its own internal scoring-thus defining a latent reward landscape over the hypothesis space; (2) whether such LLM-judged better hypotheses exhibit stronger alignment with ground-truth hypotheses; (3) whether shaping the reward landscape using an ensemble of diverse LLMs of similar capacity yields better outcomes than defining it with repeated instances of the strongest LLM among them; and (4) whether an ensemble of identical LLMs provides a more reliable reward landscape than a single LLM. To address these questions, we propose a hierarchical search method that incrementally proposes and integrates details into the hypothesis, progressing from general concepts to specific experimental configurations. We show that this hierarchical process smooths the reward landscape and enables more effective optimization. Empirical evaluations on a new benchmark of expert-annotated fine-grained hypotheses from recent literature show that our method consistently outperforms strong baselines.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义
- **研究动机**：当前大语言模型（LLM）在自动生成科学假设方面取得进展，但生成的假设普遍停留在粗粒度层面，缺乏具体的方法论细节和实验步骤，导致难以直接用于实验验证。
- **整体目标**：正式定义“细粒度科学假设发现”任务——从粗略的研究方向出发，生成包含详细实验配置、试剂、条件等可操作的科学假设。
- **核心问题**：探索在最大化利用 LLM 内部启发式的情况下，LLM 在该任务上的能力上限。具体提出四个研究问题：  
  Q1：如何利用 LLM 自身的内部评分（定义假设空间上的奖励景观）来生成它自己认为最优的细粒度假设？  
  Q2：LLM 认为更优的假设是否与真实假设（专家标注）有更好的对齐？  
  Q3：用多样化的 LLM 集成定义奖励景观，是否优于用相同数量的最强 LLM 重复实例？  
  Q4：用多个相同 LLM 的集成定义奖励景观是否比单个 LLM 更可靠？

### 2. 方法论：核心思想与关键技术细节
- **核心思想**：将细粒度假设发现形式化为一个组合优化问题，并利用 LLM 的内部启发式来引导搜索。提出**层次启发式搜索（Hierarchical Heuristic Search, HHS）** 框架。
- **关键技术细节**：
  - **层次分解**：将假设的编辑空间分为 5 个层次（从高到低）：反应机理 → 通用概念/组件 → 具体组件 → 组件的完整细节 → 实验条件。每个层次只搜索对应级别的候选子空间，大幅降低复杂度。
  - **搜索过程**：从粗粒度假设出发，在每个层次内通过 LLM 逐步添加或删除细节，并使用 LLM 的成对比较（“当前假设是否优于上一个”）作为梯度信号，直到连续 k 次无改进则停止当前层次。
  - **重组模块**：每个层次独立运行多次（默认3次），得到多个局部最优，再通过 LLM 重组（插值）可能产生更优的局部最优。
  - **理论分析**：层次化分解能够平滑奖励景观（类似低通滤波），减少陷入差局部最优的风险。
- **公式**：  
  \( P(h_f | b, h_c) = \prod_{i=1}^{p} P(D^{*(i)} | b, h_c, D^{*(<i)}, D^{(i)}) \)  
  其中 \( D^{(i)} \) 为层次 i 的候选编辑集，\( D^{*(i)} \) 为真实编辑集。

### 3. 实验设计
- **数据集与基准**：基于 TOMATO-Chem 数据集扩展，包含 51 篇 2024 年 1 月后发表在《Nature》《Science》等期刊的化学论文，每篇提供研究背景、粗粒度假设，并由两位化学博士标注细粒度假设作为真实参考。
- **LLM 选择**：使用 GPT-4o-mini（预训练数据截止 2023 年 10 月），避免数据污染。
- **对比方法**：
  - Greedy Search（贪心搜索）
  - Greedy Search + Self-Consistency（带自一致性的贪心搜索，相当于对 HHS 去掉层次分解的对照）
  - 其他方法：ChemCrow、Qi et al.、SciMON、MOOSE、MOOSE-Chem（来自参考文献）
- **评估指标**：
  - 基于 LLM 的成对比较（4 个维度：有效性、新颖性、详细性、可行性，以及总体）
  - 专家评估（两位化学博士生对每个样本的三个方法随机排序）
  - 软/硬召回率（Soft/Hard Recall）：衡量生成假设覆盖真实假设中方法细节的比例

### 4. 资源与算力
- 文中**未明确说明**使用的 GPU 型号、数量及训练时长。
- 提到使用 OpenAI 的 GPT-4o-mini API，每次生成最终假设需调用数百至上千次迭代搜索步骤。
- 未提供具体算力估算，但指出该方法仅需 API 调用，不涉及模型训练。

### 5. 实验数量与充分性
- 实验分组：
  - Q1（HHS vs 贪心搜索及其变体）：51 个样本 × 6 次成对比较（克服位置偏差），并有人类专家评估（两个学生分别评估部分样本）。
  - Q2（召回率）：与 6 种基线方法比较，报告软/硬召回率及搜索步数。
  - Q3（委员会比较）：三种委员会设置（混合 LLM、GPT-4o-mini 委员会、Gemini-1.5-flash 委员会），使用两种 LLM 作为评估器消除偏好偏差。
  - Q4（单一 vs 多个相同 LLM）：HHS-1 与 HHS-3 的成对比较及召回率对比。
- **充分性**：实验覆盖了主要研究问题，采用了 LLM 评估与专家评估双重验证，并针对位置偏差、评估器偏差进行了控制。但基准仅有 51 个样本（化学领域），规模较小；专家评估样本也仅覆盖全部样本，但每对仅由一名专家评估，主观性较强。
- **公平性**：对比方法均为强基线，且通过共享核心 prompt 仅改变层次化部分实现公平对照。

### 6. 论文的主要结论与发现
- **Q1**：HHS 在发现更好的局部最优方面显著优于贪心搜索及其自一致性变体，在四个维度及总体评估上均占优。专家评估中 HHS 的胜率远高于其他方法。
- **Q2**：HHS 发现的假设在软/硬召回率上均超过所有基线，说明被 LLM 认为更优的假设与真实假设的细节对齐度更高。推理步数增加通常提升召回率，但过多步数可能带来负收益。
- **Q3**：使用重复实例的最强 LLM（GPT-4o-mini）委员会比同等大小的混合 LLM 委员会效果更好，说明模型质量比多样性在此任务中更关键。
- **Q4**：集成多个相同 LLM（HHS-3）比单个 LLM（HHS-1）在总体质量上相当，但在新颖性上显著更优，且召回率更高。集成通过总结少数但推理强的观点促进了探索。

### 7. 优点
- **任务形式化**：首次将细粒度科学假设发现定义为组合优化问题，并建立奖励景观分析框架。
- **方法创新**：层次启发式搜索借鉴人脑的“从粗到细”策略，具有理论支持（平滑景观、降维）。
- **数据与评估**：构建了避免数据污染的基准（2024 年 1 月后论文，LLM 训练数据截止更早）；设计了软/硬召回率指标量化细节覆盖。
- **实验严谨**：针对位置偏差、评估器偏差做了多重控制（六次轮换、多种 LLM 评估器）。
- **可迁移性**：方法不限于化学，层次设计可针对新学科手动定义。

### 8. 不足与局限
- **全局最优不确定**：HHS 不能保证收敛到全局最优，仅能找到更好的局部最优。
- **领域限制**：目前仅在化学数据集上验证，虽然声称可迁移但未提供跨学科实验。
- **基准规模有限**：仅 51 个样本，可能不足以全面反映性能；且所有假设均来自高质量期刊，可能偏向已知成功方向。
- **细节质量不均**：生成的假设中约 40% 的细节是实验重要的，但还有大量无关细节；约 50% 的重要细节未被覆盖。
- **人类评估主观性**：只有两位博士生评估，且未报告评估者间信度。
- **算力消耗**：方法需要大量 API 调用（数百到上千次），对资源有要求。

（完）
