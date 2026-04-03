---
title: "Joint modeling of social genetic effects in mono- and pluri-specific groups: case study in intercrops"
title_zh: 单一物种与多物种群体中社会遗传效应的联合建模：以间作为例的研究
authors: "Salomon, J., Enjalbert, J., Flutre, T."
date: 2026-03-31
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.27.714849v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 定量遗传学理论和社会遗传效应建模
tldr: 该研究针对间作系统中种间社会遗传效应（SGE）缺乏建模的问题，提出了一种统一的定量遗传学框架。该模型将育种值分解为直接效应、种间社会效应和种内社会效应，并开发了高效的R/C++软件实现。通过模拟验证，该方法能准确估计遗传参数，支持在单作和间作系统中同步实现遗传增益，为多物种群落的育种提供了重要的理论基础和计算工具。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714849-v1/fig-001.webp\", \"caption\": \"Figure 2 : The three experimental designs compared in this study, each having the same number of plots (filled cells), with sole_only consisting of sole crops only, inter_only (sparse) consisting of intercrops only, and sole_inter_50 (sparse) combining both sole crops and intercrops.\", \"page\": 15, \"index\": 1, \"width\": 981, \"height\": 652}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714849-v1/fig-002.webp\", \"caption\": \"Figure 1 : The proposed modeling framework of DBVs (direct breeding values), SBVs (social breeding values), DBVxSBVs (interactions between DBVs and SBVs) and SIGVs (social intragenotypic values) in the case of a sole crop and an interspecific binary mixture.\", \"page\": 14, \"index\": 2, \"width\": 1045, \"height\": 489}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714849-v1/fig-003.webp\", \"caption\": \"Figure 6 : Proportion of top-performing genotypes (y-axis) selected for a targeted cropping system (x-axis; sole cropping, SC, or intercropping, IC), based on their breeding values estimated from three experimental designs ( sole_only , sole_inter_50 and inter_only ). Results are shown across increasing variance of social intragenotypic values: var(SIGV) = 10% (A), 30% (B), and 50% (C) of var(DBV). Other (co)variance parameters were fixed as follows: var(SBV) = 20% var(DBV), and cor(DBV,SBV) = -0.8. Error bars represent standard errors of the means across replicates. Tukey’s HSD test was performed separately within each level of var(SIGV); groups that do not share a common letter differ significantly (α = 0.05).\", \"page\": 19, \"index\": 3, \"width\": 1045, \"height\": 380}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714849-v1/fig-004.webp\", \"caption\": \"Figure 4 : Pearson correlation between true and estimated breeding values for cBV, DBV, SBV, and SIGV on the y-axis, along scenarios with increasing importance of SIGV, i.e., increasing ratio var(SIGV)/ var(DBV) on the x-axis (var(SBV) = 20% var(DBV), cor(DBV,SBV=-0.8). For the inter_only design, the true classical breeding value was compared with the estimated direct breeding value only, as SIGV was not estimable with this design.\", \"page\": 17, \"index\": 4, \"width\": 983, \"height\": 719}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714849-v1/fig-005.webp\", \"caption\": \"Figure 3: Estimation accuracy (normalized biased error on the y-axis, one dot per simulation) of genetic (co)variances for the focal species, under varying levels of SIGV variance (x-axis) and var(SBV) = 20% var(DBV) . ⓧ marks cases where the bias is significantly greater than 15 % of the mean (|NBE| ≥ 0.15) .\", \"page\": 16, \"index\": 5, \"width\": 977, \"height\": 650}]"
motivation: 现有的育种框架大多忽略了间作系统中种间社会遗传效应（SGE）对表型表达的影响。
method: 提出一种联合分析单作与混作的定量遗传模型，将育种值分解为直接、种间社会和种内社会三个组分，并利用线性混合模型进行拟合。
result: 模拟实验表明，该模型在多种遗传结构和稀疏设计下均能准确估计遗传（协）方差，并实现单作与间作的同步遗传增益。
conclusion: 该框架为解析和利用多物种环境下的复杂遗传效应提供了有力工具，有助于将间作育种整合到现有的单作育种体系中。
---

## 摘要
尽管社会（或间接）遗传效应在塑造群落内表型表达中起着核心作用，但种间群体的遗传学研究在很大程度上仍未得到充分探索。间作，即在同一块田地里同时种植多种作物，为利用这些种间社会效应提供了一个强有力的模型。这种物种混合种植具有公认的农业效益，但很少有育种框架整合了社会相互作用的遗传学。在本文中，我们通过将数量遗传学理论扩展到种间群体来填补这一空白，并以间作为具体的应用模型案例。我们提出了一个数量遗传模型，在统一的框架内联合分析种内和种间的相互作用。育种值被分解为：在单作和混作中共享的直接组分、对应于一个物种对另一个物种影响的种间社会组分，以及捕捉克隆植物单基因型群体内社会效应的种内组分。在统计学上，这涉及同时拟合多个线性混合模型（每种群体类型一个），且所有模型共享直接育种值。由于目前尚无开源软件能够拟合如此复杂的混合模型，我们提供了基于 R/C++ 的实现。针对各种遗传（协）方差结构和稀疏实验设计的模拟表明，该模型能够准确估计所有遗传（协）方差和育种值。通过结合单作和间作的不完整但平衡的设计，可以同时实现两个系统的遗传增益，从而使育种策略能够逐步将间作整合到现有的仅限单作的方案中。更广泛地说，该框架允许在单物种和混合物种情况（无论是否栽培）下观察到基因型时，剖析直接和社会的遗传效应。

## Abstract
The genetics of interspecific groups remains largely unexplored, despite the central role of social (or indirect) genetic effects in shaping phenotypic expression within communities. Intercropping, i.e. the simultaneous cultivation of multiple crop species in the same field, offers a powerful model to harness these interspecific social effects. Such species mixtures provide well-documented agricultural benefits, yet few breeding frameworks have integrated the genetics of social interactions. Here, we address this gap by extending quantitative genetic theory to interspecific groups, with intercropping as a concrete and applied model case. We propose a quantitative genetic model that jointly analyzes intra and interspecific interactions within a unifying framework. Breeding values are decomposed into a direct component, shared in mono and mixed-crops, an interspecific social component corresponding to the effect of one species on another, and an intraspecific component that captures the social effects within a mono-genotypic stand of cloned plants. Statistically, this consists in simultaneously fitting several linear mixed models, one per stand type, all having direct breeding values in common. As no open-source software can fit such a complex mixed model, we provide such an implementation in R/C++. Simulations across various genetic (co)variance structures and sparse experimental designs showed accurate estimation of all genetic (co)variances and breeding values. With an incomplete, yet balanced design combining sole crops and intercrops, genetic gains in both systems were achievable simultaneously, enabling breeding strategies that progressively integrate intercropping into existing, sole-crop-only schemes. More broadly, this framework allows dissecting direct and social genetic effects when genotypes are observed in mono- and mixed-species situations, cultivated or not.

---

## 论文详细总结（自动生成）

这篇论文题为《单一物种与多物种群体中社会遗传效应的联合建模：以间作为例的研究》，由法国国家农业食品与环境研究院（INRAE）的研究人员完成。以下是对该论文的深度结构化总结：

### 1. 核心问题与整体含义
*   **研究动机**：间作（在同一块地同时种植多种作物）具有提高产量稳定性、减少化肥依赖等生态效益，但目前缺乏专门的育种框架。现有的育种主要针对单作（Sole Crop, SC），而忽略了物种间的**社会遗传效应（Social Genetic Effects, SGE）**，即一个个体的基因型如何影响其邻居的表型。
*   **核心问题**：如何建立一个统一的数量遗传学模型，既能分析单作中的种内相互作用，又能分析间作中的种间相互作用，从而帮助育种者在不完全放弃单作育种的前提下，高效地进行间作育种。

### 2. 方法论
*   **核心思想**：将表型分解为直接遗传效应和不同类型的社会遗传效应，并利用联合建模（Joint Modeling）将单作和间作数据整合在一起。
*   **关键技术细节**：
    *   **育种值分解**：
        *   **直接育种值 (DBV)**：基因型对自身表型的影响，在单作和间作中共享。
        *   **种间社会育种值 (SBV)**：一个物种的基因型对间作伙伴物种表型的影响。
        *   **种内社会效应值 (SIGV)**：在单作（纯系）中，相同基因型个体之间的相互影响。
    *   **数学模型**：
        *   间作表型 = 均值 + 自身的DBV + 伙伴的SBV + (DBV×SBV)交互项。
        *   单作表型 = 均值 + 自身的DBV + 自身的SIGV。
    *   **算法实现**：由于现有开源软件无法处理此类复杂的关联随机效应，作者基于 **R/C++** 开发了新工具，利用 **TMB (Template Model Builder)** 软件包，通过**自动微分 (AD)** 和**拉普拉斯近似 (LA)** 实现受限极大似然估计 (REML)，大幅提升了计算效率。

### 3. 实验设计
*   **数据集/场景**：基于真实的小麦-豌豆和大麦-豌豆田间试验参数进行大规模随机模拟。
*   **对比实验设计 (Benchmark)**：
    1.  `sole_only`：仅使用单作数据（传统育种模式）。
    2.  `inter_only`：仅使用间作数据（稀疏设计）。
    3.  `sole_inter_50`：联合设计，50%单作+50%间作（本文提出的稀疏平衡设计）。
*   **评估指标**：遗传（协）方差估计的准确性（归一化偏差误差 NBE）、育种值估计的准确性（皮尔逊相关系数）以及选择优秀基因型的成功率（真阳性率 TPR）。

### 4. 资源与算力
*   **硬件环境**：在一台配备 16 GB RAM、CPU 最高频率 3700 MHz 的笔记本电脑上运行，操作系统为 Debian GNU/Linux。
*   **软件环境**：使用 R 语言和 TMB 框架。
*   **算力说明**：文中未给出具体的总训练时长，但强调了 TMB 相比于商业软件 ASReml-R 在处理稀疏矩阵和复杂随机效应时的计算优势和数值稳定性。

### 5. 实验数量与充分性
*   **实验规模**：每个场景进行了 **100 次重复模拟**。
*   **变量控制**：涵盖了 5 种不同的 SIGV 方差水平（从 DBV 方差的 10% 到 50%），并测试了包含和不包含基因组亲缘关系矩阵（GRM）的情况。
*   **充分性评价**：实验设计较为充分，通过对比不同实验强度和遗传结构，客观地展示了联合模型在处理不完整设计（Incomplete Design）时的鲁棒性。

### 6 主要结论与发现
*   **联合建模的优越性**：`sole_inter_50` 设计是唯一能准确估计所有遗传参数（包括 SIGV）的设计。
*   **间作对单作的反馈**：间作数据不仅能评估间作表现，还能通过共享的 DBV 提高对单作育种值估计的准确性。
*   **基因组信息的价值**：引入基因组亲缘关系矩阵（GRM）显著提升了社会效应（SBV 和 SIGV）的估计准确性。
*   **育种策略建议**：当社会效应较强时，直接在间作环境下选择比通过单作环境间接选择更有效。

### 7. 优点
*   **理论创新**：首次提出了 SIGV 概念，解释了单作与间作表现相关性不高的遗传学本质。
*   **实用性强**：为育种家提供了一个“桥梁”，允许他们逐步将间作试验整合到现有的单作育种平台中，而不需要推倒重来。
*   **开源贡献**：提供了高效的 R/C++ 代码实现，解决了复杂混合模型拟合的计算瓶颈。

### 8. 不足与局限
*   **模拟依赖**：主要结论基于模拟数据，虽然参数参考了真实试验，但仍需更多大规模真实田间数据验证。
*   **成本考量**：间作试验涉及种子分拣等额外劳动力成本，模型虽证明了遗传增益，但未详细计算经济投入产出比。
*   **模型假设**：假设植物种植密度恒定，未考虑密度变化与社会遗传效应的交互作用。

（完）
