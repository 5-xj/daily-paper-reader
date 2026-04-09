---
title: A Bayesian multidimensional approach to decipher the genetic basis of dynamic phenotypes in multiple species
title_zh: 一种贝叶斯多维方法用于解析多物种动态表型的遗传基础
authors: "Blois, L., Heuclin, B., Bernard, A., Denis, M., Dirlewanger, E., Foulongne-Oriol, M., Marullo, P., Peltier, E., Quero-Garcia, J., Marguerit, E., Gion, J.-M."
date: 2026-04-03
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.01.715770v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 用于破译跨物种表型遗传基础的贝叶斯框架
tldr: 该研究旨在解析复杂定量性状的时间动态遗传基础，提出贝叶斯变化系数模型(BVCM)整合时间与遗传多维信息，并在多种生物中验证其可有效识别主要及弱效QTL，提升表型方差解释率，深化对基因型-表型动态关系的理解。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715770-v1/fig-001.webp\", \"caption\": \"\", \"page\": 10, \"index\": 1, \"width\": 1378, \"height\": 1378}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715770-v1/fig-002.webp\", \"caption\": \"\", \"page\": 11, \"index\": 2, \"width\": 1377, \"height\": 589}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715770-v1/fig-003.webp\", \"caption\": \"\", \"page\": 12, \"index\": 3, \"width\": 1377, \"height\": 589}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715770-v1/fig-004.webp\", \"caption\": \"\", \"page\": 14, \"index\": 4, \"width\": 1378, \"height\": 1378}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715770-v1/fig-005.webp\", \"caption\": \"\", \"page\": 15, \"index\": 5, \"width\": 1135, \"height\": 853}]"
motivation: 复杂定量性状在时间与环境中的动态变化揭示其遗传架构具有挑战性，现有方法难以充分捕捉这种时间相关的表型可塑性。
method: 提出并应用了一种多变量贝叶斯变化系数模型(BVCM)，用于多物种时间序列表型的多位点遗传分析。
result: BVCM识别了主要和隐藏的遗传位点，提升了解释的表型方差，并揭示了随时间变化的动态QTL效应。
conclusion: 该研究表明BVCM能更全面揭示复杂性状的遗传动态结构，有助于减少缺失遗传力问题并推动功能基因组学与作物改良研究。
---

## 摘要
解析复杂数量性状的遗传结构在数量遗传学中仍然具有挑战性。这些性状不仅依赖于多个遗传因素，而且会在不同时间和环境中形成。尽管数量遗传学已经研究了表型可塑性在不同环境条件下的遗传决定因素，但与时间相关的表型可塑性却较少受到关注。

在本研究中，我们提出了一种多变量贝叶斯框架——贝叶斯变系数模型（Bayesian Varying Coefficient Model, BVCM），用于通过多位点方法分析与时间相关的表型可塑性的遗传结构。我们将BVCM应用于在不同时间尺度（每日、每月、每年）测量的时间序列表型，涵盖了多种生物物种，包括酿酒酵母（Saccharomyces cerevisiae）、禾谷镰刀菌（Fusarium graminearum）、桉树（Eucalyptus urophylla × E. grandis）以及甜樱桃（Prunus avium）。我们将BVCM的结果与逐时间进行的已知全基因组关联分析方法的结果进行了比较。

对于所有物种和性状，BVCM不仅能够检测到由标记-性状关联方法识别的主要QTL，还揭示出额外的低效应遗传区域。对于多数考虑的表型，它提高了解释的表型方差比例。BVCM还揭示了动态QTL，其效应在时间上表现出暂时性、增强或减弱等趋势。通过在一个统计模型中同时考虑时间和遗传的多变量结构，我们加深了对复杂性状遗传结构的理解，尤其是在减少“缺失遗传力”问题方面。本研究为功能基因组学、进化生态学和作物育种项目的进一步应用奠定了基础，其中与时间相关的表型可塑性对于预测和选择关键数量复杂性状具有重要意义。

主要信息：通过捕获影响与时间相关的表型可塑性的遗传因素，我们的方法有助于更深入地理解基因型-表型关系的动态本质。

## Abstract
Deciphering the genetic architecture of complex quantitative phenotypes remains challenging in quantitative genetics. These traits not only depend of multiple genetic factors but are also established over time and environments. Although quantitative genetics has investigated the genetic determinism of phenotypic plasticity in contrasted environmental conditions, the time related phenotypic plasticity has received less attention.

Here we proposed a multivariate Bayesian framework, the Bayesian Varying Coefficient Model, designed for analysing the genetic architecture of the time related phenotypic plasticity by a multilocus approach. We applied the BVCM to time series phenotypes measured at various time scales (daily, monthly, yearly) across a diverse set of biological species. We included in this study: yeast (Saccharomyces cerevisiae), fungi (Fusarium graminearum), eucalyptus (Eucalyptus urophylla x E. grandis), and sweet cherry tree (Prunus avium). The BVCM results were compared with those obtained with a known genome-wide association method carried out time by time.

For all species and traits, the BVCM was able to detect the major QTL identified by marker-trait association methods and revealed additional genetic regions of weak effect. It also increased the phenotypic variance explained for most of the phenotypes considered. It revealed dynamic QTLs with transitory, increasing or decreasing effects over time. By considering both the temporal and genetic multivariate structures in a single statistical model, we increased our understanding of the genetic architecture of complex traits notably by reducing the issue of missing heritability. More broadly, this work raises the foundation for extended applications in functional genomics, evolutionary ecology, and crop breeding programs, in which time-related phenotypic plasticity remains crucial for predicting and selecting key quantitative complex traits.

Key messageBy capturing the genetic factors influencing the time related phenotypic plasticity, our approach contributes to a deeper understanding of the dynamic nature of genotype-phenotype relationships.

---

## 论文详细总结（自动生成）

# 一种贝叶斯多维方法用于解析多物种动态表型的遗传基础 — 中文结构化总结

---

## 一、核心问题与研究背景

- **研究动机**：数量遗传学长期关注复杂定量性状的遗传结构，但多数研究仅考虑在静态或不同环境条件下的表型，而**与时间相关的表型可塑性**（即表型随时间发生连续变化的遗传响应）仍缺乏系统性方法。
- **研究问题**：现有基因组关联分析（GWAS）通常将不同时间点的表型分别分析，难以揭示随时间动态变化的QTL（数量性状位点），从而造成“缺失遗传力”（missing heritability）问题。
- **研究目标**：提出一种新的统计框架，能够同时整合**时间维度与遗传多位点结构**，揭示多个生物物种中动态性状的完整遗传基础。

---

## 二、方法论：贝叶斯变系数模型（Bayesian Varying Coefficient Model, BVCM）

### 1. 核心思想
- 基于贝叶斯推断框架，将表型的时间变化建模为**随时间连续变化的遗传效应函数**。
- 遗传位点的效应（如QTL的加性或显性效应）被表示为变系数函数，而非固定系数。
- 能同时捕获主效应和弱效应位点，也能刻画其效应在时间上的动态趋势，如暂时增强或减弱。

### 2. 技术要点
- **变系数模型结构**：
  \[
  y_t = \mu_t + \sum_i x_i \beta_i(t) + \epsilon_t
  \]
  其中 \( y_t \) 为时间 t 的表型，\( x_i \) 为基因型标记，\( \beta_i(t) \) 为随时间变化的系数函数，\( \epsilon_t \) 为噪声项。
- **贝叶斯更新机制**：
  - 对每个系数函数设定层级先验分布；
  - 通过 MCMC 或 Variational Bayesian 方法进行参数估计；
  - 对时间序列进行联合建模而非逐时间点分析。
- **多维整合**：能够处理多性状、多时间尺度（如日/月/年）与多物种数据，属于一种**跨物种、多维结构建模**框架。

---

## 三、实验设计

### 1. 数据来源与物种覆盖
研究在四类物种上验证BVCM模型的通用性：
- 酿酒酵母（*Saccharomyces cerevisiae*）；
- 禾谷镰刀菌（*Fusarium graminearum*）；
- 桉树（*Eucalyptus urophylla × E. grandis*）；
- 甜樱桃（*Prunus avium*）。

各物种表型均为时间序列数据，包括生长速率、发育轨迹、产量相关性状等，时间尺度从每日到多年。

### 2. 基准与对比方法
- **基准方法**：传统逐时间点的全基因组关联分析（Time-by-time GWAS）。
- **比较目标**：验证BVCM是否能在检测主要QTL的基础上，进一步识别弱效遗传区域并提升解释的表型方差。

---

## 四、资源与算力需求

- 论文中未明确说明具体的计算资源、GPU型号或训练时长。
- 考虑到方法性质主要为统计推断（基于贝叶斯MCMC），推测运行需求以CPU多核运算为主，侧重模型迭代与参数估计而非深度学习训练。

> **补充说明**：文中无算力细节披露，因此无法确定计算规模或软硬件配置。

---

## 五、实验数量与充分性

- 涉及 **4 种物种 × 多时间尺度** 的实验设计，每个物种均进行了完整的表型时间序列分析。
- 对比实验包含：
  - BVCM 与 基准GWAS在检测QTL上的性能比较；
  - 表型方差解释率对比；
  - 动态效应的时间趋势验证。
- 实验结果覆盖多类表型和多时间周期，样本多且结构复杂，验证具有**较高的充分性与普适性**。
- 未提及消融实验（如单维度去除时间因素对比），但整体设计较为全面。

---

## 六、主要结论与发现

- **BVCM能同时检测主要QTL和弱效位点**：相比传统方法，识别到更多潜在遗传区域。
- **提高表型方差解释率**：在多数性状中，模型解释的表型变异比例更高，减少了“缺失遗传力”。
- **揭示动态遗传效应趋势**：发现QTL效应随时间呈现暂时性、增强或减弱变化，符合生物过程的动态性。
- **模型的跨物种通用性**：在真菌、植物等多种类群中均表现稳定，证明方法的广泛适用性。
- 最终表明，BVCM能够更全面地刻画复杂性状的动态遗传架构，推动功能基因组与作物育种方向的发展。

---

## 七、优点与亮点

- **创新性建模框架**：首次将时间维度与多位点遗传结构合并进单一贝叶斯统计模型。
- **识别弱效QTL的能力**：有效解决传统分析忽略低效应区域的问题。
- **动态解释力**：揭示遗传效应随时间的真实变化规律，而非静态估计。
- **应用广泛性**：跨物种、多时间尺度的设计验证了方法在不同生物学系统中的泛化能力。
- **减少缺失遗传力问题**：通过综合建模增强性状解释力。

---

## 八、不足与局限

- **计算复杂度较高**：贝叶斯变系数模型在大样本和高维位点数据中可能计算代价高。
- **没有说明算力资源与算法优化**：缺乏对计算效率及可扩展性的讨论。
- **消融分析有限**：未系统评估时间维度或特定先验选择对结果的影响。
- **数据来源限制**：虽为多物种验证，但物种数仍偏少，未覆盖动物或非模型植物群。
- **模型解释性依赖于先验选择**：不同先验假设可能影响QTL识别的稳定性。

---

**（完）**
