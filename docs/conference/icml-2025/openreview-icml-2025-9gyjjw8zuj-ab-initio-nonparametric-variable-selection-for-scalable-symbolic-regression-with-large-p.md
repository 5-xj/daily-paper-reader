---
title: Ab Initio Nonparametric Variable Selection for Scalable Symbolic Regression with Large $p$
title_zh: 面向大变量数p的可扩展符号回归：从头非参数变量选择
authors: "Shengbin Ye, Meng Li"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=9gyJJw8ZUj"
tags: ["query:sr"]
score: 9.0
evidence: 提出大规模p下可扩展符号回归方法以发现可解释符号表达式，直接对应符号回归知识发现。
tldr: 现有符号回归在大规模输入变量、含测量误差的数据上运行缓慢且表达式复杂。文中提出PAN+SR方法，将从头开始的非参数变量选择与符号回归结合，先高效筛除无关变量，再执行表达式搜索。在极大规模p数据集上，PAN+SR显著提升符号回归的扩展性并得到更简洁可解释的表达式。该方法为科学数据中高维方程发现提供了实用基础。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 大规模输入变量和测量误差使符号回归计算缓慢并产生复杂难解释的表达式。
method: PAN+SR将从头开始的非参数变量选择与符号回归结合，先筛变量再进行符号表达式发现。
result: 在极大规模p数据上显著提升扩展性并重构更简单可解释的符号表达式。
conclusion: 为现代科学高维数据中的符号知识发现提供了一种可扩展基础方法。
---

## Abstract
Symbolic regression (SR) is a powerful technique for discovering symbolic expressions that characterize nonlinear relationships in data, gaining increasing attention for its interpretability, compactness, and robustness. However, existing SR methods do not scale to datasets with a large number of input variables (referred to as extreme-scale SR), which is common in modern scientific applications. This "large $p$'' setting, often accompanied by measurement error, leads to slow performance of SR methods and overly complex expressions that are difficult to interpret. To address this scalability challenge, we propose a method called PAN+SR, which combines a key idea of ab initio nonparametric variable selection with SR to efficiently pre-screen large input spaces and reduce search complexity while maintaining accuracy. The use of nonparametric methods eliminates model misspecification, supporting a strategy called parametric-assisted nonparametric (PAN). We also extend SRBench, an open-source benchmarking platform, by incorporating high-dimensional regression problems with various signal-to-noise ratios. Our results demonstrate that PAN+SR consistently enhances the performance of 19 contemporary SR methods, enabling several to achieve state-of-the-art performance on these challenging datasets.

---

## 论文详细总结（自动生成）

# 面向大变量数 p 的可扩展符号回归：PAN+SR 方法

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **符号回归的重要性与瓶颈**：符号回归 (Symbolic Regression, SR) 是一种能够从数据中自动发现可解释符号表达式（如数学公式）的技术，因其**可解释性、简洁性和鲁棒性**而受到广泛关注。然而，现有符号回归方法在处理**大规模输入变量**（即 high-dimensional，所谓 extreme-scale SR）时存在严重瓶颈。
- **"large p" 场景的挑战**：现代科学应用（如高维物理、化学、生物学数据）中普遍存在输入变量数量极大的情况。该设定常伴随**测量误差**，使得现有符号回归方法面临双重困境：
  - **计算缓慢**：搜索空间随变量数量急剧膨胀，效率显著下降；
  - **表达式过于复杂**：由于无关变量干扰，得到的符号表达式往往冗长、难解释。
- **本文科学目标**：为大规模 p 场景下的符号回归提供一种**可扩展的基础性方法**，使符号知识发现在现代高维科学数据上得以高效实现，同时保持表达式的简洁性与可解释性。

## 2. 论文提出的方法论：核心思想、关键技术细节与流程

- **方法名称**：PAN+SR，即 **Parametric-Assisted Nonparametric (PAN) + Symbolic Regression (SR)**。
- **核心思想**：采用**"先筛后归"**的策略——在执行计算昂贵的符号回归之前，先通过高效的变量筛选步骤从大规模输入空间中剔除无关变量，从而**大幅缩小搜索空间**、降低后续符号回归的复杂度，同时维持准确性。
- **关键技术细节**：
  - **非参数变量选择（Nonparametric Variable Selection）**：利用非参数统计方法对输入变量与响应变量之间的关系进行建模和重要性评估，无需预设函数形式。
  - **消除模型设定错误**：非参数方法的引入避免了传统参数化筛选模型可能带来的**模型误设 (model misspecification)** 问题——若筛选模型形式不对，则可能错误剔除重要变量。非参数方法天然的灵活性保障了筛选结果的可靠性。
  - **"参数辅助的非参数"（PAN）思想**：结合参数化方法的效率优势与非参数方法的稳健性，实现高效且无偏的变量筛选。
- **算法流程（文字描述）**：
  1. **输入**：大规模高维数据集（含可能的测量误差）；
  2. **变量预筛选**：使用 PAN 非参数变量选择技术，快速识别并保留与响应变量真正相关的少数变量，剔除无关输入；
  3. **符号回归搜索**：以筛选后的低维变量作为输入，运行现有的符号回归方法，搜索简洁的符号表达式；
  4. **输出**：简洁且可解释的符号模型。

## 3. 实验设计：数据集、Benchmark 与对比方法

- **Benchmark 扩展**：作者扩展了 **SRBench**——一个开放源码的标准符号回归基准平台——在其中**新增了高维回归问题**，并构建了**不同信噪比（signal-to-noise ratios）** 的测试场景，用于系统评估方法在极端高维、含噪条件下的表现。
- **数据集特征**：真实科学应用背景下的大规模 p 数据，覆盖不同变量数量与噪声水平。
- **对比方法**：
  - 评估覆盖了 **19 种当代主流符号回归方法**；
  - 对比策略为：未使用变量筛选的原始 SR 方法 vs. 经 PAN 变量预筛选后（即 PAN+SR）的同一方法；
  - 同时考察 PAN+SR 是否使部分方法达到**当前最优（state-of-the-art）**水平。

## 4. 资源与算力

- **未明确说明资源细节**：根据提供的文本内容，论文**未明确披露**具体使用的硬件资源信息，例如 GPU 型号、GPU 数量、训练/推理时长、总计算量或能耗等细节均未提及。
- 这一点可能是因为符号回归实验的算力开销主要集中在 CPU 上的符号搜索与评估，而非大规模深度学习训练，因此作者未做特别汇报。
- 若需了解具体算力配置，需查阅论文全文的补充材料或实验部分。

## 5. 实验数量与充分性

- **实验规模（基于摘要推断）**：
  - 至少进行了**大规模高维数据集**上的多组测试，覆盖**多种信噪比（SNR）设置**；
  - 在同一高维基准上，对 **19 种 SR 方法**逐一进行了"无筛选 vs. PAN+SR 筛选"的对照实验；
  - 结果显示 PAN+SR 对 19 种方法均有**一致性提升**，并帮助其中若干方法达到 SOTA 水平。
- **充分性评估**：
  - **优势方面**：覆盖面广（19 种方法）、结论具有普遍性（一致性提升而非个别案例），且设置了多种噪声水平的场景，增强了结论的稳健性；基于 SRBench 标准平台也更有利于与其他研究的横向对比。
  - **客观性风险**：基于摘要信息，缺少具体的**消融实验描述**（如：不同非参数筛选器的对比、不同 p 值规模的敏感性分析、PAN 方法自身超参数的影响等），以及**统计显著性检验**（如多次重复实验的标准差）。因此无法完整评估实验的全面性。具体需参考论文正文中的详细实验设计。

## 6. 论文的主要结论与发现

- **PAN+SR 的一致性增益**：将 PAN 非参数变量选择与符号回归相结合后，**在参与评测的全部 19 种当代 SR 方法上都带来了性能提升**，并且提升效果在不同信噪比条件下保持一致。
- **SOTA 突破**：经过 PAN+SR 增强之后，部分已有的符号回归方法在极端高维数据集上达到了**当前最优性能（state-of-the-art）**。
- **可扩展性与简洁性的统一**：PAN+SR 不仅显著提升了符号回归在 **large p** 条件下的**可扩展性**（更快、更高维），还促使最终符号表达式变得更加**简洁、更易解释**——这正好回应了现有 SR 方法在大 p 场景下表达式过于复杂的痛点。
- **方法论价值**：证明了"非参数预筛选 + 参数化/结构化搜索"的组合策略在科学数据符号知识发现中具有基础性价值，为未来高维符号回归研究提供了一个新范式。

## 7. 优点

- **问题定位精准**：直击符号回归在 high-dimensional 场景下的 "large p" 可扩展性瓶颈，这是现代科学应用中的真实痛点。
- **思路巧妙简洁**：利用**非参数方法消除模型误设风险**，通过 "先筛选、后回归" 的模块化设计，在不改变下游 SR 算法内部机制的前提下提升全体方法性能，工程上兼容性强。
- **普适性证据扎实**：对 19 种方法的一致性性能提升证明了方法具有跨算法、跨架构的普适性,而非仅适用于某一类特定的 SR 算法。
- **平台建设价值**:扩展了 SRBench 基准平台,引入了高维含噪回归问题,为社区后续研究提供了标准化的测试资源。
- **结果可解释性好**:在提升性能的同时促进生成更简洁的表达式,兼顾了精确性与可解释性,符合科学发现的实际需求。

## 8. 不足与局限

- **信息呈现有限**：本总结基于论文摘要与元数据，**缺少方法论的具体数学形式、非参数筛选器的详细构造、超参数设置等关键细节**，无法据此复现方法。
- **实验细节披露不足**：摘要中未见对以下内容的明确交代：
  - 最大变量规模 p 的具体量级（10³？10⁵？10⁶？）；
  - PAN 筛选的时间开销与单次筛选的准确率（是否有漏筛关键变量的风险）；
  - 是否有针对**非线性交互作用**或**变量高度共线性**场景的专项测试；
  - 测量误差的具体类型（高斯噪声？异方差噪声？离群点？）。
- **缺乏消融与敏感性分析（基于摘要）**：尚不清楚 PAN 的方法参数（如显著性阈值、正则强度）对最终 SR 结果的影响程度，也未知对变量数 p 的规模敏感性。
- **资源与公平性问题**：未报告 PAN 预筛选的计算代价，若 PAN 阶段本身开销很大，则"端到端加速"的说法可能被削弱；另外，19 种 SR 方法的超参数是否分别调优的不确定性，也可能带来公平性上的质疑。
- **实际应用边界**：方法默认变量选择与符号回归是**两阶段 pipeline** 决策，一旦筛选阶段剔除了真正驱动关系的变量（尤其在噪声极大时），后续回归无法恢复，存在**不可逆错误传播**的风险。

（完）
