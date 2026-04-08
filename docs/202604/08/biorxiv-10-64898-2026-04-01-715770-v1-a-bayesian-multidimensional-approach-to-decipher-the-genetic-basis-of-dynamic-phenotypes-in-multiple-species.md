---
title: A Bayesian multidimensional approach to decipher the genetic basis of dynamic phenotypes in multiple species
title_zh: 一种贝叶斯多维方法：解析多物种动态表型的遗传基础
authors: "Blois, L., Heuclin, B., Bernard, A., Denis, M., Dirlewanger, E., Foulongne-Oriol, M., Marullo, P., Peltier, E., Quero-Garcia, J., Marguerit, E., Gion, J.-M."
date: 2026-04-03
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.01.715770v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 复杂数量表型的遗传结构
tldr: 本文提出了一种贝叶斯多维变系数模型（BVCM），用于揭示多物种动态表型的遗传基础。通过整合时间序列表型与多位点基因组数据，该方法能在不同时间尺度上识别主要与次要QTL，并捕捉基因效应的动态变化，提升表型方差解释率及对复杂性状遗传结构的理解。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715770-v1/fig-001.webp\", \"caption\": \"\", \"page\": 10, \"index\": 1, \"width\": 1378, \"height\": 1378}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715770-v1/fig-002.webp\", \"caption\": \"\", \"page\": 11, \"index\": 2, \"width\": 1377, \"height\": 589}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715770-v1/fig-003.webp\", \"caption\": \"\", \"page\": 12, \"index\": 3, \"width\": 1377, \"height\": 589}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715770-v1/fig-004.webp\", \"caption\": \"\", \"page\": 14, \"index\": 4, \"width\": 1378, \"height\": 1378}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715770-v1/fig-005.webp\", \"caption\": \"\", \"page\": 15, \"index\": 5, \"width\": 1135, \"height\": 853}]"
motivation: 现有研究难以有效解析复杂性状在时间维度上的动态遗传机制。
method: 研究建立了一个多变量贝叶斯变系数模型，用于联合分析时间序列表型与基因组数据。
result: BVCM在多物种数据中识别出主要及弱效QTL，提升了表型方差解释率并发现时间依赖的动态遗传效应。
conclusion: 该方法为理解基因型与表型关系的时间动态提供了新框架，可推广至功能基因组学及育种研究。
---

## 摘要
解析复杂数量性状的遗传结构在数量遗传学中仍然是一个挑战。这些性状不仅依赖于多个遗传因素，而且还随着时间与环境的变化而形成。尽管数量遗传学已经在不同环境条件下研究了表型可塑性的遗传决定性，但与时间相关的表型可塑性却受到较少关注。

在本研究中，我们提出了一个多变量贝叶斯框架——贝叶斯变系数模型（Bayesian Varying Coefficient Model，BVCM），用于通过多位点方法分析与时间相关的表型可塑性的遗传结构。我们将 BVCM 应用于在不同时间尺度（每日、每月、每年）测量的时间序列表型，并涵盖多种生物物种，包括酵母（Saccharomyces cerevisiae）、真菌（Fusarium graminearum）、桉树（Eucalyptus urophylla × E. grandis）以及甜樱桃树（Prunus avium）。BVCM 的结果与采用逐时间点的已知全基因组关联方法所得结果进行了比较。

对于所有物种和性状，BVCM 不仅能够检测到由标记-性状关联方法识别的主要 QTL，还揭示了具有弱效应的附加遗传区域。同时，它在多数表型中提高了表型方差的解释率。模型揭示了动态 QTL，其效应可随时间呈现暂时增强、增加或减少的趋势。通过在一个统计模型中同时考虑时间和遗传的多变量结构，我们对复杂性状的遗传架构有了更深入的理解，特别是通过减少“缺失遗传率”问题。更广泛地，本研究为功能基因组学、进化生态学以及作物育种等领域的扩展应用奠定了基础，其中与时间相关的表型可塑性对关键复杂数量性状的预测与选择具有重要意义。

研究要点：通过捕捉影响与时间相关的表型可塑性的遗传因素，我们的方法有助于更深入地理解基因型-表型关系的动态特性。

## Abstract
Deciphering the genetic architecture of complex quantitative phenotypes remains challenging in quantitative genetics. These traits not only depend of multiple genetic factors but are also established over time and environments. Although quantitative genetics has investigated the genetic determinism of phenotypic plasticity in contrasted environmental conditions, the time related phenotypic plasticity has received less attention.

Here we proposed a multivariate Bayesian framework, the Bayesian Varying Coefficient Model, designed for analysing the genetic architecture of the time related phenotypic plasticity by a multilocus approach. We applied the BVCM to time series phenotypes measured at various time scales (daily, monthly, yearly) across a diverse set of biological species. We included in this study: yeast (Saccharomyces cerevisiae), fungi (Fusarium graminearum), eucalyptus (Eucalyptus urophylla x E. grandis), and sweet cherry tree (Prunus avium). The BVCM results were compared with those obtained with a known genome-wide association method carried out time by time.

For all species and traits, the BVCM was able to detect the major QTL identified by marker-trait association methods and revealed additional genetic regions of weak effect. It also increased the phenotypic variance explained for most of the phenotypes considered. It revealed dynamic QTLs with transitory, increasing or decreasing effects over time. By considering both the temporal and genetic multivariate structures in a single statistical model, we increased our understanding of the genetic architecture of complex traits notably by reducing the issue of missing heritability. More broadly, this work raises the foundation for extended applications in functional genomics, evolutionary ecology, and crop breeding programs, in which time-related phenotypic plasticity remains crucial for predicting and selecting key quantitative complex traits.

Key messageBy capturing the genetic factors influencing the time related phenotypic plasticity, our approach contributes to a deeper understanding of the dynamic nature of genotype-phenotype relationships.

---

## 论文详细总结（自动生成）

# 一种贝叶斯多维方法：解析多物种动态表型的遗传基础 — 中文结构化总结

---

## 一、研究背景与核心问题

- **研究动机**  
  数量遗传学长期面临对复杂数量性状遗传结构的解析困难。这类性状由多基因调控，并且其表型表现常随时间和环境变化而动态变化。以往研究更多关注环境空间维度中的表型可塑性，而对于**时间维度上的表型变化（dynamic phenotypes）**探讨有限。

- **核心问题**  
  当前主流的 QTL 或 GWAS 分析多采用单时间点或逐时间点的方式，无法捕捉时间系列中表型形成的连续性与动态性。本研究旨在：
  1. 建立能同时整合**时间变化与多基因互作**的新统计框架；
  2. 探究不同生物物种中动态表型的遗传基础；
  3. 减少传统模型在复杂性状中的“**缺失遗传率（missing heritability）**”问题。

---

## 二、方法论：贝叶斯变系数模型（BVCM）

- **核心思想**  
  提出一个统一的**多变量贝叶斯框架（Bayesian Varying Coefficient Model，BVCM）**，可在单一模型中同时估计：
  - 多位点的遗传效应；
  - 表型随时间变化的动态轨迹；
  - 不同遗传标记的选择概率。

- **关键技术细节**  
  - 模型利用**贝叶斯变量选择（Bayesian variable selection）**机制，通过“**spike-and-slab 先验**”对系数进行稀疏化选择；  
  - 每个遗传标记效应随时间变化函数表示，可通过 **B-spline** 或 **P-spline** 插值拟合；
  - 参数估计使用 **MCMC（Markov Chain Monte Carlo）采样**，通过多链收敛检查与后验概率计算进行变量筛选；
  - 两步筛选流程：
    1. 第一步进行大规模采样（20,000 次 burn-in + 10,000 次迭代 × 100 重复），计算标记的边际包含概率；
    2. 第二步在候选标记子集中重新采样，优化精度并应用概率阈值（0.8 或 0.4）确定显著标记。
  - 模型同时评估群体遗传关系矩阵（基于 VanRaden 公式）计算遗传方差与狭义遗传率 \( h^2 = \frac{Var_g}{Var_g + Var_e} \)。

- **对比方法**  
  采用传统的 **BLINK**（Bayesian-information and Linkage-disequilibrium Iteratively Nested Keyway method，Huang et al. 2018）作为基准对照。  
  BLINK 是逐时间点的单步多变量选择模型，本研究用它作为 BVCM 的性能基线。

---

## 三、实验设计

- **物种与数据集**  
  共分析四种具有代表性的多物种动态表型：
  1. **酵母（Saccharomyces cerevisiae）**：基于 95 个基因型 × 8070 SNP × 10 时间点的发酵 CO₂ 释放数据。  
  2. **真菌（Fusarium graminearum）**：94 个 F1 菌株 × 483 SNP × 6–9 时间点病害进程与菌丝生长数据。  
  3. **桉树（Eucalyptus urophylla × E. grandis）**：960 个全同胞个体 × 双亲 1429/1353 SNP × 8 时间点的树径测量。  
  4. **甜樱桃（Prunus avium）**：“Regina × Lapins” F1 × 双亲 124/136 SNP × 4 年的开花日期（BF/FF）数据。

- **对照与评估指标**  
  - 比较 **BVCM vs. BLINK** 在 QTL 检出数、表型方差解释率（PVE）、时间动态一致性。  
  - 采用线性模型和 LMG 方法分解各标记对表型方差的贡献度。  
  - 使用 **missMDA** 和 **beagle** 对缺失基因型与表型数据进行插补。  

---

## 四、资源与算力

- **文中未说明具体算力信息**：  
  未给出 GPU 或 CPU 类型、使用数量或计算时长。仅说明采用 R 环境中的 BGLR 与自编代码运行多次 MCMC 采样。  
  → 推测为常规计算集群或工作站级别的贝叶斯估计，无高性能 GPU 运算。

---

## 五、实验数量与充分性

- **实验覆盖**  
  - 四个物种 × 多种性状（6 个主要时间序列：酵母发酵、真菌病害与生长、桉树树径、樱桃开花两阶段）；
  - 每个数据集均进行 **BLINK 与 BVCM 双方法对比**；
  - 分析包括时间动态、方差解释率、标记聚类效应、个别标记时间变化效应；
  - 附加图表超过 20 个（主图与补图），展示不同时间点与物种的对比。

- **充分性与公平性**  
  各物种数据来自独立研究组且均为已发表结果，模型比较使用相同的基因型和表型输入，评价标准一致，因此对比**公平客观**。  
  但缺乏跨模型统计显著性检验或其他 Bayesian 模型的横向比较。

---

## 六、主要结论与发现

1. **性能提升**：BVCM 在多数场景中显著提高 QTL 检出数及表型方差解释率（平均提升约 7%，最高达 27.3%）。  
2. **动态效应揭示**：模型捕捉到 QTL 随时间的动态变化（暂时性、增强或衰减效应），揭示复杂性状建立的时间机制。  
3. **弱效位点检测能力**：能识别传统 GWAS 未显著的小效应变异，提高遗传解释度并缓解缺失遗传率问题。  
4. **多维整合优势**：同时考虑遗传结构与时间结构，相较逐时间分析减少信息损失。  
5. **广泛适用性**：在真菌、酵母、树木到果树均取得一致稳定表现，证明模型具跨生物系统的通用性。

---

## 七、方法与实验亮点

- **方法学创新**
  - 贝叶斯变系数模型将多位点选择与时间动态估计统一；
  - 两步 MCMC 筛选策略提升稳定性与精度；
  - 可灵活使用 B-spline 插值拟合任意时间尺度；
  - 后验概率阈值可调整以兼顾强弱信号。

- **实验设计亮点**
  - 跨物种验证：从单细胞生物到多年生植物；
  - 同时对时间序列和静态性状的遗传结构进行量化；
  - 结合传统方法（BLINK）进行全面定量对比；
  - 对每个标记计算动态 PVE 曲线，揭示时序遗传动力学。

---

## 八、不足与局限

- **技术层面**  
  - 模型计算成本高（大量 MCMC 迭代），但文中未提供算力需求；
  - 当前未直接整合基因间交互网络或群体结构效应；
  - 尚不能明确识别特定遗传交互（如显性或高阶上位性）。

- **实验覆盖不足**  
  - 数据集来自已知系统，未扩展至动物或人类复杂表型；
  - 部分数据时间点较少（如樱桃 4 年序列），限制动态建模深度；
  - 缺乏系统的消融实验和泛化性分析。

- **应用限制**
  - 对低遗传力性状或小样本群体的检测能力有限；
  - 对模型参数（MCMC 迭代数、阈值选择）依赖较强；
  - 尚需进一步验证在实际育种选择中的稳定性与泛化性能。

---

**总体评价**：  
该论文在数量遗传学与贝叶斯建模交叉领域具有较高创新性。BVCM 提供了统一框架可揭示复杂时间表型的遗传动态，对理解多基因、多时间尺度性状具有重要价值。尽管算力与扩展性仍有限，但其方法为“动态遗传架构”研究奠定了方法论基础。

---

（完）
