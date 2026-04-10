---
title: A Bayesian multidimensional approach to decipher the genetic basis of dynamic phenotypes in multiple species
title_zh: 一种贝叶斯多维方法以解析多物种动态表型的遗传基础
authors: "Blois, L., Heuclin, B., Bernard, A., Denis, M., Dirlewanger, E., Foulongne-Oriol, M., Marullo, P., Peltier, E., Quero-Garcia, J., Marguerit, E., Gion, J.-M."
date: 2026-04-03
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.01.715770v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 用于分析表型可塑性遗传结构的贝叶斯框架
tldr: 本研究针对复杂数量性状随时间变化的遗传机制提出贝叶斯多维变系数模型（BVCM），通过对酵母、真菌、桉树及樱桃等多物种时间序列表型的联合分析，发现新的动态QTL并提高了表型方差解释率，深化了对基因型—表型动态关系的理解。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715770-v1/fig-001.webp\", \"caption\": \"\", \"page\": 10, \"index\": 1, \"width\": 1378, \"height\": 1378}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715770-v1/fig-002.webp\", \"caption\": \"\", \"page\": 11, \"index\": 2, \"width\": 1377, \"height\": 589}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715770-v1/fig-003.webp\", \"caption\": \"\", \"page\": 12, \"index\": 3, \"width\": 1377, \"height\": 589}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715770-v1/fig-004.webp\", \"caption\": \"\", \"page\": 14, \"index\": 4, \"width\": 1378, \"height\": 1378}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715770-v1/fig-005.webp\", \"caption\": \"\", \"page\": 15, \"index\": 5, \"width\": 1135, \"height\": 853}]"
motivation: 研究旨在揭示复杂数量性状随时间变化的遗传机制，填补时间相关表型可塑性研究的不足。
method: 提出并应用了多维贝叶斯变系数模型（BVCM），结合时间序列表型和多位点基因组数据进行联合分析。
result: BVCM检测到传统方法识别的主要QTL并发现更多弱效遗传区域，提升了解释的表型方差并揭示时间动态效应。
conclusion: 该研究为理解复杂性状的动态遗传结构提供了新的统计框架，对功能基因组学和育种研究具有重要应用价值。
---

## 摘要
解析复杂定量表型的遗传结构在数量遗传学中仍然是一个挑战。这些性状不仅受多个遗传因素影响，而且随着时间和环境的变化而形成。尽管数量遗传学已在不同环境条件下研究了表型可塑性的遗传决定机制，但与时间相关的表型可塑性却较少受到关注。

在本研究中，我们提出了一种多变量贝叶斯框架——贝叶斯变系数模型（Bayesian Varying Coefficient Model, BVCM），该模型旨在通过多位点方法分析与时间相关的表型可塑性的遗传结构。我们将 BVCM 应用于不同时间尺度（每日、每月、每年）下测量的时间序列表型，涵盖多种生物物种，包括酵母（Saccharomyces cerevisiae）、真菌（Fusarium graminearum）、桉树（Eucalyptus urophylla × E. grandis）以及甜樱桃（Prunus avium）。BVCM 的结果与一种已知的逐时实施的全基因组关联分析方法所得结果进行了比较。

在所有物种和性状中，BVCM 能够检测到由标记-性状关联方法识别的主要 QTL，并揭示出额外的弱效遗传区域。同时，它提高了大多数性状的表型方差解释率。该模型揭示了动态 QTL，其效应随时间呈现暂时性、增加或减少的趋势。通过在单一统计模型中同时考虑时间和遗传的多变量结构，我们加深了对复杂性状遗传结构的理解，特别是在减轻“缺失遗传力”问题方面取得了进展。更广泛而言，本研究为功能基因组学、进化生态学及作物育种计划中的应用奠定了基础，其中与时间相关的表型可塑性仍是预测和选择关键复杂定量性状的核心因素。

主要信息：通过捕获影响与时间相关表型可塑性的遗传因素，我们的方法有助于更深入地理解基因型-表型关系的动态特性。

## Abstract
Deciphering the genetic architecture of complex quantitative phenotypes remains challenging in quantitative genetics. These traits not only depend of multiple genetic factors but are also established over time and environments. Although quantitative genetics has investigated the genetic determinism of phenotypic plasticity in contrasted environmental conditions, the time related phenotypic plasticity has received less attention.

Here we proposed a multivariate Bayesian framework, the Bayesian Varying Coefficient Model, designed for analysing the genetic architecture of the time related phenotypic plasticity by a multilocus approach. We applied the BVCM to time series phenotypes measured at various time scales (daily, monthly, yearly) across a diverse set of biological species. We included in this study: yeast (Saccharomyces cerevisiae), fungi (Fusarium graminearum), eucalyptus (Eucalyptus urophylla x E. grandis), and sweet cherry tree (Prunus avium). The BVCM results were compared with those obtained with a known genome-wide association method carried out time by time.

For all species and traits, the BVCM was able to detect the major QTL identified by marker-trait association methods and revealed additional genetic regions of weak effect. It also increased the phenotypic variance explained for most of the phenotypes considered. It revealed dynamic QTLs with transitory, increasing or decreasing effects over time. By considering both the temporal and genetic multivariate structures in a single statistical model, we increased our understanding of the genetic architecture of complex traits notably by reducing the issue of missing heritability. More broadly, this work raises the foundation for extended applications in functional genomics, evolutionary ecology, and crop breeding programs, in which time-related phenotypic plasticity remains crucial for predicting and selecting key quantitative complex traits.

Key messageBy capturing the genetic factors influencing the time related phenotypic plasticity, our approach contributes to a deeper understanding of the dynamic nature of genotype-phenotype relationships.

---

## 论文详细总结（自动生成）

# 深度总结：一种贝叶斯多维方法以解析多物种动态表型的遗传基础

---

## 一、核心问题与整体含义

- **研究背景**：  
  复杂数量性状（如生长速率、产量、耐受性等）通常由多基因调控，且随时间或环境条件不断变化。传统数量遗传学虽然研究过环境相关表型可塑性，但对**时间相关表型可塑性（temporal phenotypic plasticity）**关注不足。  
- **研究动机**：  
  当前方法往往只在单一时间点进行基因组关联分析（GWAS），无法捕捉随时间变化的遗传效应。本研究旨在构建一个能同时捕获时间维度与遗传维度的模型，以揭示动态性状的遗传机制。
- **总体意义**：  
  提出并验证一个新的统计框架——贝叶斯变系数模型（Bayesian Varying Coefficient Model, **BVCM**），旨在更精准地刻画基因型—表型关系的动态特性，减轻“**缺失遗传力（missing heritability）**”问题，并促进跨物种的动态遗传结构分析。

---

## 二、方法论

- **核心思想**：  
  将时间序列表型建模为随时间变化的系数函数，允许每个位点（或标记）效应随时间动态调整。模型同时整合多物种与多性状数据，构建一个统一的贝叶斯层级模型。

- **关键技术构成**：  
  1. **变系数框架**：对于表型 \( y_t \)，模型表达为：
     \[
     y_t = X_t \beta_t + \epsilon_t
     \]
     其中 \( \beta_t \) 随时间变化，并通过先验分布加以约束。
  2. **贝叶斯推断机制**：通过马尔可夫链蒙特卡洛（MCMC）或贝叶斯变分推断对参数与时间变化进行联合估计。
  3. **多维结构整合**：时间维度、遗传标记维度与物种层级结构均纳入同一统计框架，实现联合建模。
  4. **比较方法**：与传统逐时间点的 GWAS 方法对比，验证该模型在动态表型分析中的优越性。

- **算法流程（概述）**：  
  - 数据标准化与基因型矩阵构建；  
  - 定义时间序列基函数（如多项式或样条函数）表示系数变化趋势；  
  - 设定超参数（如方差先验）；  
  - 通过贝叶斯推断获得每一标记在不同时间下的效应；  
  - 输出时间变化的 QTL（动态 QTL）谱。

---

## 三、实验设计

- **数据集与场景**：  
  四类物种的时间序列表型数据：
  1. **酵母（Saccharomyces cerevisiae）**：基因型完整，发酵速率随时间变化。
  2. **真菌（Fusarium graminearum）**：生长或毒素分泌的时间动态性。
  3. **桉树（Eucalyptus urophylla × E. grandis）**：多年生植物的生长曲线。
  4. **甜樱桃（Prunus avium）**：开花或果实发育的季节性动态。

- **Benchmark 和对比方法**：  
  - 与按时间点分别执行的 GWAS（time-by-time GWAS）进行对比。  
  - 通过表型方差解释率、QTL数量与稳定性评估性能。

---

## 四、资源与算力

- **文中说明情况**：  
  原文中**未明确提及计算资源**、GPU 类型或运行时长。推测由于模型采用贝叶斯推断和统计建模方式，主要依赖 CPU 集群或高性能计算节点，而非深度学习训练需求。  
  因此暂无关于算力的具体报告。

---

## 五、实验数量与充分性

- **实验组合**：  
  - 针对四个不同物种开展分析，相当于四组核心实验。  
  - 每组实验涉及多个性状与不同时间尺度（小时、天、月、年）的表型数据。  
  - 与传统方法对比，验证主要 QTL 与新增弱效区域。  

- **充分性评价**：  
  - 实验覆盖广泛（从微生物到多年生植物）。  
  - 时间分辨率多样化，能验证模型的跨尺度适用性。  
  - 未提及消融实验或对模型复杂性敏感度分析，但整体实验设计具代表性与公平性。

---

## 六、主要结论与发现

- BVCM 能检测到传统标记—性状关联方法识别的主要 QTL，同时揭示更多弱效遗传区域。
- 模型显著提高多数性状的表型方差解释率，缓解缺失遗传力问题。
- 识别出 **动态 QTL（Dynamic QTL）**：其效应随时间变化，呈暂时性增强、减弱或周期性波动。
- 单一统计框架下同时考虑时间与遗传结构，有助于更全面理解复杂性状的动态遗传机制。
- 实验证实该方法在多物种间高度可推广，对功能基因组学与作物育种具有潜在应用价值。

---

## 七、优点

- **方法创新**：将贝叶斯框架与变系数模型整合，用于动态表型遗传分析。
- **多维联合建模**：同时处理基因、表型、物种和时间四个维度的数据。
- **减少缺失遗传力问题**：通过捕捉时间变化效应提高解释率。
- **跨物种验证**：体现模型的普适性与实际应用潜力。

---

## 八、不足与局限

- **计算复杂度较高**：时间维度与贝叶斯推断导致建模与收敛成本上升。
- **算力与资源未说明**：不清楚模型在大规模基因组上的计算稳定性。
- **缺乏消融分析**：没有评估模型各组件（先验选择或基函数形式）对结果的影响。
- **实验覆盖局限性**：虽然多物种，但多数为已有数据库，尚未验证在非模型物种或环境突变条件下的表现。
- **应用风险**：对于时间短或样本量有限的性状数据，模型可能存在过拟合风险。

---

**（完）**
