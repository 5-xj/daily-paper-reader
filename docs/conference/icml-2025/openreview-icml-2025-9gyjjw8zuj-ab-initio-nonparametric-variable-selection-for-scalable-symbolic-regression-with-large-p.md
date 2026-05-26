---
title: Ab Initio Nonparametric Variable Selection for Scalable Symbolic Regression with Large $p$
title_zh: 面向大规模符号回归的从头非参数变量选择
authors: "Shengbin Ye, Meng Li"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=9gyJJw8ZUj"
tags: ["query:sr"]
score: 9.0
evidence: 大规模符号回归中的变量选择
tldr: 该论文针对符号回归在大规模变量（大p）场景下的可扩展性挑战，提出PAN+SR方法。核心思路是先通过非参数变量选择（ab initio）筛除无关变量，再进行符号回归。实验表明在极端大规模数据上显著提升效率并简化表达式。这直接支持了符号回归知识发现的需求。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-9gyjjw8zuj/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1625, \"height\": 776, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-9gyjjw8zuj/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1616, \"height\": 777, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-9gyjjw8zuj/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1776, \"height\": 675, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-9gyjjw8zuj/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 845, \"height\": 612, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-9gyjjw8zuj/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1728, \"height\": 2142, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-9gyjjw8zuj/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1729, \"height\": 2135, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-9gyjjw8zuj/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1756, \"height\": 903, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-9gyjjw8zuj/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1760, \"height\": 904, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-9gyjjw8zuj/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1757, \"height\": 915, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-9gyjjw8zuj/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1754, \"height\": 911, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-9gyjjw8zuj/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1415, \"height\": 1001, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-9gyjjw8zuj/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1382, \"height\": 973, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-9gyjjw8zuj/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1382, \"height\": 973, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-9gyjjw8zuj/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1431, \"height\": 461, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-9gyjjw8zuj/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 531, \"height\": 240, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-9gyjjw8zuj/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1218, \"height\": 930, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-9gyjjw8zuj/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 511, \"height\": 284, \"label\": \"Table\"}]"
motivation: 现有符号回归方法在输入变量极多时效率低下且表达式复杂难解。
method: PAN+SR结合非参数变量选择与符号回归，先降维再拟合。
result: 在合成和真实大规模数据上显著加速符号回归，表达式更简洁。
conclusion: 为符号回归在大规模科学数据中的应用提供了可行方案。
---

## Abstract
Symbolic regression (SR) is a powerful technique for discovering symbolic expressions that characterize nonlinear relationships in data, gaining increasing attention for its interpretability, compactness, and robustness. However, existing SR methods do not scale to datasets with a large number of input variables (referred to as extreme-scale SR), which is common in modern scientific applications. This "large $p$'' setting, often accompanied by measurement error, leads to slow performance of SR methods and overly complex expressions that are difficult to interpret. To address this scalability challenge, we propose a method called PAN+SR, which combines a key idea of ab initio nonparametric variable selection with SR to efficiently pre-screen large input spaces and reduce search complexity while maintaining accuracy. The use of nonparametric methods eliminates model misspecification, supporting a strategy called parametric-assisted nonparametric (PAN). We also extend SRBench, an open-source benchmarking platform, by incorporating high-dimensional regression problems with various signal-to-noise ratios. Our results demonstrate that PAN+SR consistently enhances the performance of 19 contemporary SR methods, enabling several to achieve state-of-the-art performance on these challenging datasets.

---

## 论文详细总结（自动生成）

# 中文总结

## 1. 论文的核心问题与整体含义

- **研究动机**：符号回归（Symbolic Regression, SR）能从数据中发现可解释的数学表达式，但在现代科学应用中常面临大量输入变量（即“大p”问题，p可达数百）。现有SR方法无法扩展到这种极端规模，表现为搜索空间指数爆炸、计算缓慢、表达式过于复杂。
- **整体含义**：论文旨在解决大规模输入场景下SR的可扩展性瓶颈，提出一种通用的预处理框架，使SR方法能高效处理高维数据而不牺牲准确性。

## 2. 论文提出的方法论

- **核心思想**：采用“先筛选、再回归”的策略，通过非参数变量选择方法（PAN）预先排除无关变量，将高维问题降维到低维子空间，再交由任何SR算法进行表达式合成。
- **关键技术细节**：
  - **变量选择方法（PAN）**：基于贝叶斯加法回归树（BART），对每个特征计算变量包含比例（VIP）。通过多次独立运行BART（K=20），得到每个特征的VIP排名。假设相关特征的排名均匀分布在{1,...,p₀}，无关特征排名均匀分布在{p₀+1,...,p}。利用层次聚类（AHC）自动将平均排名分为两类，低均值簇中的特征被保留（即筛选后的特征集）。
  - **目标**：保证极低的假阴性率（FNR），使筛选后的特征集是真实相关特征集的超集，避免遗漏任何相关变量。
- **无需预设阈值**：算法完全数据驱动，无需手动指定筛选阈值或特征数量。

## 3. 实验设计

- **数据集**：
  - **黑盒回归问题**：从PMLB中选取35个高维真实数据集（n<200且p≥10，或n≥200且p≥20）。
  - **真值回归问题**：基于Feynman符号回归数据库，引入无关特征（每个相关特征产生50个无关副本，总特征数p=51p₀）和噪声，共100个方程，调整SNR（0.5,1,2,5,10,15,20,∞）和样本量（500,1000,1500,2000）。
  - **额外场景**：含噪声特征、重复特征、相关特征（基于Friedman方程）。
- **对比方法**：19种当代SR方法（包括gplearn、AFP、Operon、uDSR、TPSR、AIFeynman等），以及4种其他非参数变量选择方法（BART-G.SE、BART-Local、BART-G.MAX、随机森林）。
- **平台**：修改并扩展了SRBench基准平台。

## 4. 资源与算力

- **计算环境**：异构CPU集群（Intel Xeon E5-2620/E5-2650/Gold 6126/6230, AMD EPYC 7642），每个任务分配1个CPU核心、16GB内存、24小时时限。
- **总算力**：
  - 黑盒问题：约34,000核时（core-hours）
  - 真值问题：约104,000核时
- **GPU使用**：文中未提及使用GPU，所有实验均在CPU上完成。
- **PAN预处理开销**：平均仅需74秒（黑盒）到325秒（真值），且可并行化。

## 5. 实验数量与充分性

- **实验数量**：
  - 黑盒问题：35数据集 × 19方法 × 10 trials = 6,650组？实际表1给出总比较12,250组（含多次运行）。
  - 真值问题：100数据集 × 19方法 × 8 SNR × 4样本量 × 10 trials = 608,000组？但实际只对部分方法进行了全扫描，总比较142,000组（表1），对Operon做了完整SNR×样本量扫描（3200设置）。
  - 消融实验：比较5种变量选择方法（图7-8）、10种聚类算法（图9-10）。
- **充分性**：实验覆盖了多种场景（不同噪声、样本量、特征结构），对比全面，统计量（R²、求解率、FPR、FNR、模型复杂度、时间）多样。但真值问题中仅对部分方法（Operon等）进行了全参数扫描，其余方法仅在n=1000, SNR=∞或10下测试。总体充分但存在一定选择性。

## 6. 论文的主要结论与发现

- **PAN+SR显著提升性能**：在黑盒问题上，18/19的SR方法测试R²提高；在真值问题上，所有19种方法的R²和符号求解率均提升，且模型复杂度未增加。
- **PAN预处理优势**：PAN的假阴性率近乎为零（除极低SNR+小样本外），而其他变量选择方法（如RF、BART-G.SE）常遗漏相关变量。
- **加速效果**：大幅缩短了部分SR方法（如AIFeynman加速5倍，uDSR加速6倍）的训练时间。
- **鲁棒性**：在不同样本量和SNR下PAN+SR一致优于单独SR，但对低SNR（≤10）仍面临困难，所有SR方法在噪声下求解率大幅下降。

## 7. 优点

- **方法创新性强**：针对SR的特殊需求（必须避免假阴性）设计了专门的变量选择方法，不同于传统统计中的FDR控制。
- **通用性与轻量级**：可作为任何SR算法的插件，计算开销小，易于集成。
- **实验严谨**：在大规模基准上进行了多方法、多场景的对比，考虑噪声、样本量、特征相关性等影响因素，并开源代码。
- **性能优异**：在极大规模（p达450）上仍能保持高求解率，部分方法达到SOTA。

## 8. 不足与局限

- **噪声敏感**：在低SNR（≤5）下PAN的假阳性率显著升高，导致保留过多无关变量，增加后续SR负担；而在极低SNR（0.5）且小样本（n=500）时，PAN也无法保证零假阴性。
- **SR自身局限**：即便提供真实特征集，许多SR方法在噪声下求解率仍接近0%，表明问题不仅在于变量选择，更在于SR算法对噪声的脆弱性。
- **实验覆盖**：真值问题中仅对部分方法进行了全参数扫描；黑盒问题中缺乏p>500的极端场景；未对比最先进的深度SR方法（如Transformer-based）在预筛前后的表现。
- **计算资源描述不详细**：未提供CPU具体型号、并行效率等信息，难以精确复现算力需求。
- **应用边界**：方法依赖BART模型，当特征与响应为高度非线性关联且BART拟合不佳时，VIP排名可能失效；层次聚类假设两个簇，若真实特征数p₀=0或接近p，聚类可能失败。
- **现实数据验证**：真值数据基于合成（Feynman方程），其分布假设（均匀分布、独立同分布）与现实数据可能存在偏差。

（完）
