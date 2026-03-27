---
title: Local genomic estimates provide a powerful framework for haplotype discovery
title_zh: 局部基因组估计为单倍型发现提供了一个强大的框架
authors: "Shaffer, W., Papin, V., Yadav, S., Voss-Fels, K. P., Hickey, L., Hayes, B., Dinglasan, E. G."
date: 2026-03-26
pdf: "https://www.biorxiv.org/content/10.1101/2025.08.28.672830v2.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 单倍型发现和基因组估计框架
tldr: 传统的全基因组关联分析（GWAS）在处理连锁不平衡（LD）不完全或多个标记与QTL高度连锁时效率较低。本研究提出了一种基于单倍型块的局部基因组估计育种值（localGEBV）框架。通过将染色体片段内的标记效应进行线性组合并利用其方差，该方法在QTL发现和表型预测方面优于传统单标记GWAS。在大麦行型性状上的应用证明了该框架的稳健性，为动植物育种中的优异单倍型挖掘提供了强有力的工具。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-28-672830-v2/fig-001.webp\", \"caption\": \"Figure 4. Detection of haploblocks containing QTL. Physical position in barley 210 chromosome of SNP markers associated with row-type spike architecture detected from 211 localGEBV and GWAS. Tracks 1 to 5 (outer to innermost): Track 1 Barley chromosome 212 showing physical position (Mbp) based on cv Morex assembly v2 from the 40K XT SNP 213 chip. SNP markers are coloured in grey. Colocation of known genes and QTL from the 214 literatures is shown: row-type known genes (VRS3 in 1H, VRS1 in 2H, VRS4 in 3H, VRS5 in 215 4H, VRS2 in 5H; dark red), phenology genes (FT3, PPD1, CIGARP, Cry1b, CYP-1, 216 GA20ox2-2, Q2_CMF4, HSH1, FT5, Q6_TFL, Q6_FCA, Q6_PFT, PHYC, Q7_AGL1, 217 CO2_H4M1, Q10_CO11, Q3_MADS25-2, Q3_FT1, Q3_CO8, CO1; green ), yield-218 component candidate genes (brown); and QTL for spike sterility (qStrlSpk), grain spiculation 219 of inner lateral nerve (qGSILN), spike row number (qRow), are also shown in dark red. 220 Track 2 LocalGEBV estimated using Bayes R, track colour in blue. Track 3 LocalGEBV 221 estimated using rrBLUP, track colour in green. Track 4 GWAS using BLINK, track colour in 222\", \"page\": 11, \"index\": 1, \"width\": 1019, \"height\": 869}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-28-672830-v2/fig-002.webp\", \"caption\": \"Figure 5. Accuracy of predictors in identifying informative associations with row-spike phenotype. (A) Principal component analysis 280 showing the effects contribution of M = 9,050 XT SNP marker estimates from FarmCPU, BLINK, rrBLUP, and BayesR. Colours represent the 7 281 barley chromosomes; size of each dots represents the SNP effect contribution to the principal components relating to row-spike phenotype. (B) 282 Regression analysis of marker genotypesor haploblock haplotype configurations as predictors. Shown is the accuracy calculated as correlations 283 of the predicted value in the testing set; predicted values calculated using ordinary least squares linear probability model (LPM, light purple) and 284 logistic regression in the generalised linear model (GLM, dark purple). The most significant marker (2H:AVRIG03047) identified by both 285\", \"page\": 15, \"index\": 2, \"width\": 1523, \"height\": 627}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-28-672830-v2/fig-003.webp\", \"caption\": \"Figure 2. Relationship between haploblock variance and haploblock size. Haploblock 160 variance derived from localGEBV estimates using rrBLUP (green) and BayesR (blue), 161 plotted on the y-axis. Block size is defined by the number of SNP markers within 162 haploblocks, plotted on the x-axis. In the figure, different LD parameters are shown as facets: 163 column facets represent LD thresholds of 𝑟2 ∈ {0.1, 0.3, 0.5}; and row facet as marker 164 tolerance, 𝑡𝑜𝑙 ∈ {0, 1, 2, 3}. The localGEBV variance was scaled using a min-max scaling of 165 the log10 transformed variance. Blocks were connected using a generalized additive model 166 for non-linear relationships to represent trends between haploblock size and localGEBV 167 variance.168\", \"page\": 7, \"index\": 3, \"width\": 1019, \"height\": 727}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-28-672830-v2/fig-004.webp\", \"caption\": \"Table 1. Summary statistics of high variance haploblocks for row-spike phenotype from localGEBV estimated using rrBLUP and BayesR, and 862 significant markers identified using FarmCPU and BLINK. Only haploblocks with localGEBV Bonferroni or False Discovery Rate (FDR) 863 corrected p-values are displayed. 864\", \"page\": 39, \"index\": 4, \"width\": 1603, \"height\": 767}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-28-672830-v2/fig-005.webp\", \"caption\": \"Figure 3. LocalGEBV variance of haploblocks in chromosome 2H. The VRS1 gene 170 (marked as Δ) is co-located at 652.03 Mbp based on the XT SNP chip physical position using 171 cv Morex assembly v2. (A) The localGEBV variance profiles across chromosome 2H 172\", \"page\": 8, \"index\": 5, \"width\": 1019, \"height\": 1296}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-28-672830-v2/fig-006.webp\", \"caption\": \"Figure 7. Haplotype analysis. (A) Identification of haplotypes from the localGEBV 297 estimates using rrBLUP and BayesR. In the figure, x-axis shows the marker physical position 298 (Mbp) of chromosome 2H based on cv Morex assembly v2 from the 40K XT SNP chip; while 299 the y-axis corresponds to localGEBV or haplotype effects. The dotted vertical line illustrates 300 the position of VRS1 gene at 652.03 Mbp. Haplotypes associated with row-type phenotypes 301 are determined by the direction of localGEBV estimates, whereby negative localGEBV 302 effects favours 2-row phenotypes while positive localGEBV effects favours 6-row 303 phenotypes. Each dot corresponds to a specific haplotype, wherein the size of the dots 304 represents the haplotype abundance or the frequency of barley accessions carrying the 305\", \"page\": 19, \"index\": 6, \"width\": 1019, \"height\": 1029}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-28-672830-v2/fig-007.webp\", \"caption\": \"Figure 6. Relationship between haploblock variance and haplotype effects. Haploblock variance was determined from the localGEBV 291 estimates using rrBLUP (green) and BayesR (blue); plotted as min-max scaled of the log10 transformed variance for visual clarity. In the figure, 292 different LD parameters are shown as facets: column facet represented by LD threshold at 𝑟2 ∈ {0.1, 0.3, 0.5}; and row facet as marker tolerance 293\", \"page\": 17, \"index\": 7, \"width\": 1532, \"height\": 763}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-28-672830-v2/fig-008.webp\", \"caption\": \"Figure 1. Population structure and genetic relationships of barley germplasm. (A) 120 Principal component analysis of N = 790 barley accessions using 9,050 XT SNP chip 121 markers, revealing three distinct genetic clusters. Shown are PCs 1 and 2 from Roger’s 122 genetic distance matrix, accounting for 44.8% cumulative explained variation. The optimum 123 number of clusters were clusters = 3: Cluster 1 (313), Cluster 2 (297), and Cluster 3 (180). 124 Colours represent the row spike phenotype i.e. 2-row is orange, 6-row is blue. (B) 125 Proportions of barley accessions across the three clusters: Cluster 1 (2-row = 283, 6-row = 8, 126 NA = 22), Cluster 2 (2-row = 56, 6-row = 214, NA = 27), Cluster 3 (2-row = 15, 6-row = 150, 127 NA = 15), where NA represents accessions with ambiguous information and ‘irregular’ type. 128 (C) Genome-wide LD decay as a function of physical distance (Mbp). LD decay is shown at 129 an average distance (Mbp) between adjacent SNP based on the XT SNP chip physical 130 position using cv Morex assembly v2 and visualised up to 10 Mbp. (D) An example of the 131 two-row and six-row phenotypes.132\", \"page\": 5, \"index\": 8, \"width\": 1007, \"height\": 781}]"
motivation: 旨在解决传统单标记GWAS在处理复杂连锁不平衡信号时效率不足的问题，探索单倍型在QTL发现中的优势。
method: 基于连锁不平衡将标记分组为单倍型块，利用rrBLUP和BayesR估计标记效应，并计算局部基因组估计育种值（localGEBV）的方差。
result: 在大麦行型性状的研究中，localGEBV在QTL识别精度和表型预测准确性上均显著优于传统的单标记GWAS方法。
conclusion: localGEBV是一个稳健且灵活的单倍型分析框架，能够有效利用局部基因组效应，提升QTL发现能力并优化基因组选择。
---

## 摘要
在多样性群体或育种群体中进行的数量性状位点（QTL）发现研究通常使用全基因组关联分析（GWAS）来估计标记效应。对于动植物育种应用，研究人员日益认识到识别优异单倍型（处于连锁不平衡 LD 中的标记）而非依赖单个标记的潜在益处，因为传统方法在处理与 QTL 不完全连锁产生的累积信号，或当多个标记与 QTL 处于高连锁不平衡时产生的效应分裂方面效率较低。利用基因组预测框架，局部基因组估计育种值（localGEBV）方法在动物育种中被开发出来，并已被应用于作物单倍型图谱研究；然而，目前尚无研究彻底量化该方法的效用，或将其结果与传统 GWAS 方法进行系统比较。在此，我们描述了一种基于连锁不平衡将染色体片段中的标记进行分组（单倍型块或 haploblocks）的策略，将 localGEBV 计算为每个单倍型块内标记效应的线性对比，并利用 localGEBV 的方差来增强 QTL 发现，并与传统 GWAS 进行对比。localGEBV 的标记效应通过岭回归最佳线性无偏预测（rrBLUP）和 BayesR 进行估计，并将结果与两种常用的 GWAS 方法进行了比较。利用大麦棱型性状，我们证明了与单个标记相比，localGEBV 提高了 QTL 发现和表型预测的准确性。此外，localGEBV 的结果对于先验标记假设和分块参数的选择具有稳健性，从而在精细或宽尺度 QTL 定位中提供了灵活性。总体而言，我们的研究结果确立了 localGEBV 作为一种基于单倍型的策略，能够利用局部基因组效应来改善 QTL 发现，并具有改进基因组选择的潜力。

## Abstract
Quantitative trait loci (QTL) discovery studies on diversity panels or breeding populations typically use genome-wide association studies (GWAS) to estimate marker effects. For plant and animal breeding applications, researchers increasingly recognize the potential benefits of identifying superior haplotypes (markers in linkage disequilibrium; LD) rather than relying on single markers, as traditional approaches inefficiently account for cumulative signals from incomplete LD with QTL or split effects when multiple markers are in high LD with QTL. Using the genomic prediction framework, the local genomic estimated breeding values (localGEBV) method was developed in animal breeding and has been adopted in crop haplotype mapping studies; however, no study has thoroughly quantified the utility of this method or systematically compared outcomes to traditional GWAS approaches. Here, we characterized a strategy to group markers in chromosomal segments based on LD (haplotype blocks or haploblocks), computed localGEBV as a linear contrast of marker effects within each haploblock, and utilised the variance of localGEBV to enhance QTL discovery compared to traditional GWAS. Marker effects for localGEBV were estimated with ridge-regression best linear unbiased prediction (rrBLUP) and BayesR, with results compared to two common GWAS approaches. Using the barley row-type trait, we demonstrated that localGEBV improved QTL discovery and phenotypic prediction compared to single markers. Furthermore, localGEBV results were robust to the choice of prior marker assumptions and blocking parameters, enabling flexibility in fine or broad-scale QTL mapping. Overall, our findings establish localGEBV as a haplotype-based strategy capable of leveraging localized genomic effects to improve QTL discovery and, potentially, genomic selection.

---

## 论文详细总结（自动生成）

### 论文总结：局部基因组估计为单倍型发现提供了一个强大的框架

#### 1. 核心问题与整体含义（研究动机和背景）
*   **核心问题**：传统的全基因组关联分析（GWAS）主要依赖单标记（Single-marker）分析。然而，当单个标记与数量性状位点（QTL）之间的连锁不平衡（LD）不完全，或者多个标记同时与同一个 QTL 连锁（导致效应被分散到多个标记上）时，GWAS 的检测效能会显著下降。
*   **研究背景**：在动植物育种中，识别“优异单倍型”（一组协同遗传的标记组合）比识别单个 SNP 更有意义。虽然局部基因组估计育种值（localGEBV）在动物育种中已有应用，但其在 QTL 发现中的系统性效用、与传统 GWAS 的量化对比以及在不同参数下的稳健性尚未得到充分研究。

#### 2. 论文提出的方法论
该研究提出了一种基于单倍型块（Haploblock）的 localGEBV 分析框架，核心步骤如下：
*   **单倍型块构建**：基于连锁不平衡（LD）参数（如 $r^2$ 阈值和标记容差 $tol$）将全基因组标记划分为不同的染色体片段（单倍型块）。
*   **标记效应估计**：利用全基因组预测模型估计所有标记的效应。研究对比了两种模型：**rrBLUP**（假设所有标记具有微小且相等的方差贡献）和 **BayesR**（允许标记效应服从混合分布，能更好地捕捉大效应 QTL）。
*   **localGEBV 计算**：对于每个个体，其在特定单倍型块内的 localGEBV 是该块内所有标记基因型与其对应效应值的线性组合（即局部育种值）。
*   **QTL 发现机制**：计算全群体在每个单倍型块上的 localGEBV **方差**。方差显著高的区域被认为含有影响表型的 QTL。

#### 3. 实验设计
*   **数据集**：使用大麦（Barley）多样性群体，包含 790 份种质资源和 9,050 个 SNP 标记（来自 40K XT 芯片）。
*   **目标性状**：大麦的“行型”（Row-type，即二棱或六棱），这是一个受多个已知主效基因（如 *VRS1* 到 *VRS5*）控制的经典性状。
*   **Benchmark（基准）**：
    *   **传统 GWAS 方法**：BLINK 和 FarmCPU（目前公认的较强单标记关联分析方法）。
    *   **已知基因定位**：以文献中已证实的 *VRS* 基因物理位置作为金标准。
*   **对比维度**：对比了不同 LD 阈值（0.1, 0.3, 0.5）、不同效应估计模型（rrBLUP vs BayesR）以及单标记 vs 单倍型块的预测准确性。

#### 4. 资源与算力
*   论文中**未明确说明**具体的硬件配置（如 GPU 型号、数量）或具体的训练时长。
*   考虑到使用的是 rrBLUP 和 BayesR（通常在 CPU 上运行，BayesR 涉及 MCMC 采样），计算压力主要集中在 Bayesian 模型的迭代过程和多参数组合的敏感性分析上。

#### 5. 实验数量与充分性
*   **实验充分性**：研究设计了多组消融和对比实验，包括 12 种不同的 LD 分块参数组合（$r^2 \times tol$），并对每种组合下的 localGEBV 方差进行了全基因组扫描。
*   **客观性**：通过与已知生物学事实（*VRS* 基因位置）对比，验证了方法的准确性；通过回归分析验证了单倍型块作为预测因子的优越性。实验设计较为全面，涵盖了从统计显著性到生物学功能验证的多个维度。

#### 6. 主要结论与发现
*   **检测能力更强**：localGEBV 框架成功识别了所有已知的行型控制基因（*VRS1-5*），且在某些区域（如 2H 染色体）显示的信号比单标记 GWAS 更清晰、更集中。
*   **预测准确性更高**：使用单倍型块作为预测因子，其表型预测的准确率（相关系数）显著高于使用单个最显著标记。
*   **稳健性高**：localGEBV 的结果对分块参数（LD 阈值）具有较好的鲁棒性。即使在较宽的块定义下，依然能准确定位核心 QTL。
*   **模型差异**：BayesR 在处理大效应 QTL 时比 rrBLUP 产生的背景噪音更小，信号更尖锐。

#### 7. 优点
*   **整合效应**：能够捕捉到被单标记 GWAS 忽略的微效或分散的遗传信号。
*   **灵活性**：允许研究者根据需求调整分块尺度，既可用于粗略定位，也可用于精细制图。
*   **育种应用价值**：直接将 QTL 发现与基因组选择（GS）框架结合，方便育种家直接筛选优异单倍型。

#### 8. 不足与局限
*   **计算复杂度**：相比于极速的单标记 GWAS（如 BLINK），基于 Bayesian 模型的效应估计计算量较大，在大规模超高密度 SNP 数据集上可能存在瓶颈。
*   **参数依赖**：虽然具有稳健性，但单倍型块的边界定义仍受 LD 衰减速度的影响，在 LD 极高或极低的物种中表现可能不同。
*   **性状单一**：本文主要验证了遗传力较高的行型性状，对于超多基因控制的极微效复杂性状，该方法的提升幅度仍需进一步验证。

（完）
