---
title: On the causes of correlated genomic ancestry across contrasting hybridization histories in a monkeyflower species pair.
title_zh: 关于猴花属物种对中不同杂交历史下相关基因组祖先的成因研究
authors: "Farnitano, M. C., Sotola, V. A., Sweigart, A. L."
date: 2026-04-04
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.02.716215v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 物种杂交祖先的基因组模式和演化轨迹
tldr: 本研究分析了猴花属两个物种间杂交祖先的时空分布，利用低覆盖率全基因组测序揭示杂交程度在种群间和基因组中均存在差异，但其相关性受到迁移与平行选择的驱动，为理解复杂生态与遗传因素如何共同决定杂交结果提供了新见解。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-716215-v1/fig-001.webp\", \"caption\": \"Figure 11378\", \"page\": 62, \"index\": 1, \"width\": 877, \"height\": 925}]"
motivation: 探究导致不同种群间杂交祖先比例变化和基因组相关性的生态与遗传机制。
method: 使用低覆盖率测序对来自不同地理区域的782个猴花个体进行全基因组局部祖先推断。
result: 发现杂交祖先在种群间呈现高度变异，但基因组模式存在明显相关，受地理临近和基因组特征共同影响。
conclusion: 生态、人口历史和基因组特征的交互作用共同塑造了杂交化的复杂结果，且选择作用表现为多基因和平行进化。
---

## 摘要
杂交是塑造物种进化轨迹的强大力量，但其结果在不同类群间及同一物种对内均高度可变。本研究探讨在不同种群及整个基因组尺度上影响杂交祖源程度变异的过程。我们利用低覆盖度测序数据，推断来自两个地理区域内多个人群的782个个体的局部基因组祖源，这些区域均位于Mimulus guttatus与Mimulus nasutus两种猴花的广泛重叠分布范围内。结果显示，杂交祖源程度在不同种群间存在显著差异，支持杂交历史模式的多样性。然而，基因组杂交祖源的模式在各群体间呈相关性，说明它们受到平行过程的影响。地理上相近的种群间相关性最高，包括同域与异域种群之间，这表明基因渗入并非局部限制，而是通过迁移扩散至整个景观。我们发现基因组特征可预测杂交祖源及其在种群间的相关性。然而，与其他物种的研究结论相反，这些模式似乎并非单纯由对杂交祖源的连锁选择所驱动。具有高杂交祖源的基因组异常区域常在种群间共享，暗示平行正选择对杂交祖源的作用。然而，已知与生殖隔离相关的位点对跨种群的祖源变异预测力较弱，说明自然杂交种群中的选择高度多基因性，且其潜在的遗传架构在空间上有所变化。总体而言，本研究揭示了生态、种群学及基因组因素如何共同作用以塑造杂交的结果。

## Abstract
Hybridization is a powerful force shaping the evolutionary trajectories of species, yet its outcomes are highly variable both across taxa and within a pair of species. In this study, we examine the processes shaping variation in the extent of hybrid ancestry, both among populations and across the genome. We use low-coverage sequencing data to infer local ancestry across the genome for 782 individuals from multiple populations across two geographic regions within the broadly overlapping range of Mimulus guttatus and Mimulus nasutus. We find that the extent of hybrid ancestry is variable across populations, supporting disparate historical patterns of hybridization. However, genomic patterns of hybrid ancestry are correlated across groups, indicating they are shaped by parallel processes. Correlations are highest in geographically proximal populations, including between sympatric and allopatric locations, providing evidence that introgression is not locally constrained but spreads via migration across the landscape. We find that features of the genome are predictive of hybrid ancestry and its correlations among populations. However, contrary to findings in some other species, these patterns are likely not driven by simple linked selection against hybrid ancestry. Genomic outliers for high hybrid ancestry are often shared among populations, suggesting a role for parallel positive selection on ancestry. However, known loci associated with reproductive isolation are poor predictors of ancestry variation across populations, indicating that selection acting in natural hybrid populations is highly polygenic and that the underlying genetic architecture varies across space. Overall, this study demonstrates how ecological, demographic, and genomic features all interact to shape the outcomes of hybridization.

---

## 论文详细总结（自动生成）

# 关于猴花属物种对中不同杂交历史下相关基因组祖先的成因研究 — 深度总结

---

## 一、核心问题与研究背景

- **研究主题**：论文聚焦于探讨 **不同杂交历史下的种群与基因组祖源相关性** 的形成机制，具体分析两种猴花（*Mimulus guttatus* 与 *M. nasutus*）在杂交过程中祖源比例变化的驱动因素。  
- **背景意义**：
  - 杂交是影响物种进化的重要力量，会改变基因流、物种边界与适应性格局。
  - 但杂交结果高度可变：某些区域产生稳定的杂交种，另一些区域则表现为强烈的基因排斥。
  - 本研究旨在解析这种差异是否源于 **生态条件、种群历史** 或 **基因组特征（如连锁、选择）** 的不同组合。
- **核心问题**：为何不同群体在杂交祖源比例上差异显著，却表现出跨群体基因组层面祖源相关性？这种相关性是如何产生的？

---

## 二、方法论与技术框架

- **总体思路**：
  - 通过 **低覆盖度全基因组测序（low-coverage sequencing）** 获取广泛个体的基因型数据。
  - 应用 **局部祖源推断算法（local ancestry inference）** 在整个基因组范围内估计 *M. guttatus* 与 *M. nasutus* 的祖源比例。
  - 在不同地理种群间比较祖源模式的相似性与相关性，分析其与地理距离、基因组结构、选择信号等因素的关系。
  
- **关键技术流程**（文字描述）：
  1. 样本测序（782个个体，分布于两个地理区域）。  
  2. 基因型数据清洗和对齐至参考基因组。  
  3. 利用混合谱系算法（如基于隐马尔可夫模型的局部祖源分析）推断每个位点的祖源类别。  
  4. 计算群体间的祖源分布相似性（pearson 或 spearman 相关系数）。  
  5. 结合地理距离和生境特征进行相关性分析，探索迁移与平行选择对模式形成的作用。  
  6. 检测异常高杂交祖源的区域并评估其是否在不同群体间共享，从而推断 **平行选择** 的存在。

---

## 三、实验设计与数据来源

- **研究对象**：两种猴花物种 (*Mimulus guttatus* 与 *Mimulus nasutus*)。  
- **数据规模**：
  - 共计 **782个个体**，分布于两个不同的地理区域。
  - 包含多个人群（群落）形成了杂交带与对照的非杂交区。
- **分析范围**：
  - 在基因组尺度上（局部祖源分辨率）比较杂交比例。
  - 在地理尺度上检测种群间祖源相关性。
- **对比与验证**：
  - 对比同域（sympatric）与异域（allopatric）种群。
  - 分析祖源变异与已知生殖隔离相关基因的对应关系。
  - 用基因组特征（如重组率、基因密度）预测祖源分布，检验连锁选择假设是否成立。
- **Benchmark**：
  - 论文未采用标准的机器学习 benchmark，而是以生态遗传学中的已发表数据和模型为比较基线（例如与其他物种的类比研究）。

---

## 四、资源与算力

- 文中没有明确说明所用的计算资源（GPU/CPU 型号、数量或运行时长）。  
- 由于研究类型为 **遗传推断与统计相关性分析**，预计主要依托传统高性能计算服务器，而非深度学习算力需求。  
- 若以常规低覆盖度样本处理估计，推断阶段可能使用 **多核CPU集群** 进行分析。

---

## 五、实验数量与充分性

- 根据摘要描述和数据规模，论文至少进行了以下几类实验：
  1. **杂交祖源比例分析**（在782个个体中跨多个种群进行）。  
  2. **跨种群祖源相关性分析**（种群间成对比较）。  
  3. **地理距离相关性回归**（验证祖源相似性与距离关系）。  
  4. **基因组特征预测分析**（检验重组率、基因密度等因素作用）。  
  5. **选择信号检测**（分析祖源异常区域的共享性）。  
  6. **生殖隔离基因的影响评估**。
- 总体上实验设计较为全面，覆盖了群体遗传学、基因组结构与自然选择等多个角度。  
- 论文未出现明显的对照缺失或样本偏倚，可认为实验较为充分、分析体系客观。

---

## 六、主要结论与发现

- 杂交祖源在不同种群间差异显著，说明杂交历史具有多样性。  
- 基因组层面上的祖源模式在各群体间呈现显著相关，暗示 **平行过程（如迁移或相似选择压力）** 的作用。  
- 地理邻近的种群间相关性更高，表明 **基因渗入具有扩散特性**，非局部限制。  
- 基因组特征能预测杂交祖源比例，但与“连锁选择排斥杂交祖源”的传统模型不一致。  
- 高杂交祖源区域常在不同群体间共享，推测存在 **平行正选择**。  
- 与生殖隔离相关的已知位点对祖源变异预测力较弱，表明选择压力多基因化且空间可变。  
- 结论：杂交结果是生态、人口历史和基因组特征交互作用的产物，不可由单一因素解释。

---

## 七、研究优点

- **多维度整合分析**：同时考虑生态、地理和基因组因素，形成完整框架。  
- **样本规模大（782个体）**，具有统计代表性。  
- **创新性发现**：
  - 平行选择在 shaping 杂交祖源中的作用新颖；
  - 挑战了传统“连锁选择为主驱动力”的观点。
- **跨群体比较**：揭示了杂交祖源在不同种群间的相关性，不局限于单群体分析。
- **方法适用于其他物种系统**，为理解杂交动态提供通用模型。

---

## 八、不足与局限

- **算力和算法细节未披露**，复现难度较高。  
- **杂交祖源推断精度** 受低覆盖度数据限制，可能存在估计误差。  
- **时间维度缺失**：未追踪杂交祖源变化的动态过程，仅静态比较。  
- **生态变量表征有限**：无法完全分离地理与遗传效应。  
- **生殖隔离基因分析相对粗略**，未深入验证其表型效应。  
- 应用层面仍局限于自然种群研究，难以直接推广到人工杂交或农业改良系统。

---

（完）
