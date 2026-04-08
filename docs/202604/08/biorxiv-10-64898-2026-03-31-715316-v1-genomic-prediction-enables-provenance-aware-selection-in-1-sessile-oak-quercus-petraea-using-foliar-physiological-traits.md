---
title: Genomic Prediction Enables Provenance-Aware Selection in 1 Sessile Oak (Quercus petraea) using Foliar Physiological Traits
title_zh: 基因组预测通过叶片生理性状实现具种源识别的匍匐栎（Quercus petraea）选择
authors: "Aiyesa, L. V., Mueller, M., Wildhagen, H., He, M., Hardtke, A., Steiner, W., Hofmann, M., Gailing, O."
date: 2026-04-01
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.31.715316v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 基因组预测和密集全基因组标记
tldr: 本研究针对气候变化背景下无柄枹的气候适应性问题，利用746株样本的全基因组标记数据，对叶片碳氮同位素组成及C/N比进行基因组预测。结果显示高遗传度与良好预测精度，GWAS筛选增强效果，揭示基因组预测可支持面向来源地的林木选育与气候适应策略。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-715316-v1/fig-001.webp\", \"caption\": \"Figure 3. Within-year genomic prediction accuracies for δ¹³C, δ¹⁵N, and C/N ratio and for year 2021 and 2022, obtained with three models (GBLUP, BRR, LGB) using 10-fold cross-validation, with prediction ability quantified as Pearson’s correlation between observed phenotypes and genomic estimated values in the test sets.\", \"page\": 11, \"index\": 1, \"width\": 817, \"height\": 559}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-715316-v1/fig-002.webp\", \"caption\": \"Figure 2. Genomic heritability (ℎ𝑔 2) estimates, expressed as the proportion of phenotypic variance explained by SNP markers selected using (i) GWAS P-value significant thresholds and (ii) equally sized random SNP subsets matched to the number of SNPs at each GWAS P-value threshold.\", \"page\": 10, \"index\": 2, \"width\": 737, \"height\": 473}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-715316-v1/fig-003.webp\", \"caption\": \"Figure 5. Regression of FST between the tested provenance and the remaining seven training provenances on prediction ability for each trait, illustrates the effect of genetic distance on prediction ability. FST were calculated based on GWAS pre-selected SNPs for each trait at a P-value threshold of 0.05.\", \"page\": 13, \"index\": 3, \"width\": 852, \"height\": 504}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-715316-v1/fig-004.webp\", \"caption\": \"Figure 4. Genomic prediction of each of the eight provenances for each trait using the GBLUP model in (i) the “leave-one-provenance-out” within cross-validation scenario (A), and (ii) the “leave-one-provenanceand-one-year-out” cross-validation scenario (B). Prediction ability measured as Pearson’s correlation between estimated genetic values and observed phenotypic values. Green triangles between points per provenance show the mean prediction ability across the two sites within each year.\", \"page\": 12, \"index\": 4, \"width\": 854, \"height\": 1221}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-715316-v1/fig-005.webp\", \"caption\": \"Figure 1. Geographical distribution of provenances used in this study showing their latitude, longitude and elevation. Circle indicate the trial sites in Germany where trees were sampled.\", \"page\": 5, \"index\": 5, \"width\": 896, \"height\": 552}]"
motivation: 气候变化要求更高效的方法筛选具气候适应力的树种基因型。
method: 研究利用约58万标记的全基因组数据，对746株无柄枹个体的三种叶片生理性状进行基因组预测分析。
result: "三个性状的基因组遗传度较高，预测准确率在同年内达0.77，跨年份与来源地预测仍有显著准确度，且GWAS引导的SNP筛选提高了约15%的遗传力捕获率。"
conclusion: 研究表明基于基因组预测的树种选育可实现针对来源地（provenance）的精准选择，提高森林在气候变化下的适应性。
---

## 摘要
气候变化正在重塑森林生态系统的适应性格局，迫切需要更高效的策略来识别和应用具有抗性潜力的树木基因型。基因组预测为加速长期树种（如欧洲栎（Quercus petraea (Matt.) Liebl.））中复杂生理性状的选择提供了强有力的框架，这些性状支撑着对气候适应性的遗传基础。

本研究针对三项关键生理性状——碳同位素组成、氮同位素组成以及碳氮含量比（C/N 比）——进行了基因组预测，这些性状测量于746株通过密集全基因组标记（约580,000个 SNP）进行基因分型的树木中。我们在各性状中估算了较高的基因组遗传率，年度内预测准确度（基因组估计值与观测表型之间的皮尔逊相关系数）达到0.77。值得注意的是，跨年度和跨种源的预测保持在较高水平（0.41 < r < 0.82），预测能力随训练和测试种源间的遗传距离（FST）的增加而下降，这一趋势在氮同位素组成与 C/N 比中尤为明显。此外，基于 GWAS 指导的 SNP 预选相比随机 SNP 子集提升了约15%的遗传率捕获。并且，观察到显著的种源-环境互作表明这些性状具有较强的表型可塑性。

这些结果表明，基因组预测在叶片生理性状上具有显著潜力，可作为植物气候适应的多基因预测指标；同时支持考虑种源差异的育种策略以优化森林建植，并为在长期树种中应用基因组预测提供了可行方案。

## Abstract
Climate change is reshaping the adaptive landscape of forest ecosystems, demanding more efficient strategies to identify and deploy resilient tree genotypes. Genomic prediction offers a powerful framework to accelerate selection for complex physiological traits underlying climate adaptability in long-lived species such as sessile oak (Quercus petraea (Matt.) Liebl.).

Here, we conducted genomic prediction for three key physiological traits carbon isotope composition, nitrogen isotope composition, and the carbon-to-nitrogen content ratio (C/N ratio) measured in 746 trees genotyped with dense genome-wide markers ([~]580,000 SNPs). High genomic heritabilities were estimated across traits, with within-year prediction accuracies (Pearsons r between genomic estimated values and observed phenotypes) reaching 0.77. Notably, across-year and across-provenance predictions remained substantial (0.41 < r < 0.82), with predictability declining with increasing genetic distance (FST) between training and test provenances for nitrogen isotope composition and C/N ratio. In addition, GWAS-guided SNP preselection increased heritability capture by [~]15% relative to random SNP subsets. And, the pronounced provenance-by-environment interactions observed indicated substantial phenotypic plasticity in these traits.

These results demonstrate the strong potential of applying genomic prediction to foliar physiological traits as polygenic predictors for climate adaptation in plants, support provenance-aware breeding to improve forest establishment, and provide practical strategies for deploying genomic prediction in long-lived species.

---

## 论文详细总结（自动生成）

# 《基因组预测通过叶片生理性状实现具种源识别的匍匐栎选择》详细总结

---

## 一、研究背景与核心问题

- **研究动机**：  
  气候变化正在重塑森林生态系统，传统的林木育种周期冗长，难以及时筛选出具备抗性和适应性的树木基因型。为了加快繁育周期并提升气候适应能力，近年来“**基因组预测（Genomic Prediction, GP）**”成为一种高效的选择工具。
  
- **核心问题**：  
  在高遗传多样性、长生命周期树种（如欧洲无柄枹 *Quercus petraea*）中，如何利用全基因组数据预测反映气候适应能力的复杂生理性状（特别是叶片碳氮同位素和C/N比），并揭示模型在不同种源（provenance）间的迁移性与可靠性。

- **研究目标**：  
  1. 评估叶片生理性状的基因组遗传率及其预测精度；  
  2. 调查种源间的遗传分化（FST）如何影响跨种源预测能力；  
  3. 探索基于GWAS（基因组关联分析）指导的SNP预筛选是否能提高预测性能。  

---

## 二、方法与技术路线

### 1. 核心思想
- 使用高密度SNP全基因组标记数据（约580,000个SNP），构建基因组预测模型；
- 以三种叶片生理性状为预测目标：  
  - **碳同位素组成（δ¹³C）**：反映叶片内在水分利用效率；  
  - **氮同位素组成（δ¹⁵N）**：反映氮素吸收与循环效率；  
  - **C/N比**：表征碳氮代谢平衡及营养状态；
- 探索模型在不同年份、不同种源和不同环境下的预测稳健性。

### 2. 核心算法与模型
- **三个预测模型比较**：
  - **GBLUP（Genomic Best Linear Unbiased Prediction）**：利用全基因组关系矩阵评估加性遗传效应；
  - **BRR（Bayesian Ridge Regression）**：基于贝叶斯岭回归的均方惩罚模型；
  - **LGB（Light Gradient Boosting Machine）**：梯度提升树算法，建模非线性特征。
- **模型评估**：  
  通过皮尔逊相关系数 \( r \) 衡量预测值与观测表型的一致性。
- **验证方案**：
  - 标准10折交叉验证（within-year）；  
  - 留一来源交叉验证（leave-one-provenance-out）；  
  - 留一来源与年份交叉验证（leave-one-provenance-and-one-year-out）。

### 3. SNP变量筛选与遗传率分析  
- 使用GWAS（BLINK模型）进行SNP筛选，逐步放宽P值阈值（从10⁻⁵至0.8），比较各阈值下的遗传率增长趋势；
- 计算基因组遗传率 \( h_g^2 \)，即标记解释的表型方差比例；
- 比较GWAS筛选样本与随机抽样SNP在预测效果上的差异。

---

## 三、实验设计

- **样本来源**：
  - 共746株*Quercus petraea*，来自**八个种源**（法国、德国、丹麦、英国）；
  - 分布于**两个德国实验林地**（Harz与Unterlüß），两年重复观测（2021、2022）。
  
- **测定内容**：
  - 每棵树测量δ¹³C、δ¹⁵N和C/N比；
  - 使用同位素比质谱仪（IRMS）进行稳定同位素分析。

- **对比基准**：
  - 比较三种模型（GBLUP、BRR、LGB）的预测精度；
  - GWAS预筛选SNP与随机选取SNP的遗传率捕获差异；
  - 不同FST（遗传距离）条件下预测能力的衰减趋势。

---

## 四、计算资源与算力说明

- **算力来源**：  
  由德国哥廷根大学的高性能计算平台（GWDG）支持。
- **资源描述**：  
  文中未报告具体GPU型号、CPU核心数、或运行时长，仅说明使用高性能集群进行基因组数据分析与模型拟合。

---

## 五、实验数量与充分性分析

- **主要实验类型**：
  1. **表型分析**：不同年份、种源、场地的差异与交互；
  2. **GWAS实验**：7层P值阈值筛选（10⁻⁵至0.8）；
  3. **遗传率估算**：比较GWAS筛选与随机SNP集；
  4. **基因组预测实验**：3个模型 × 3 traits × 2年 × 3验证方案；
  5. **FST分析**：检验遗传分化与预测准确度的回归关系。

- **实验覆盖性**：  
  总体实验设计系统、全面且针对性强，包含横向（模型对比）、纵向（种源/年份验证）和机制探索（遗传分化效应）三维验证。  
  算法对比与交叉验证均为标准范式，实验充分且结果可信。

---

## 六、主要发现与结论

1. **高遗传率与预测力**：  
   - δ¹³C, δ¹⁵N, C/N比的基因组遗传率分别高达0.72–0.78；
   - 单年预测精度可达0.77（r），跨年预测仍维持在0.41–0.82范围。

2. **GWAS预筛选效果显著**：  
   - 相比随机SNP集，GWAS指导的SNP选择提高了约15%的遗传率捕获；
   - 表明该策略能高效识别富信息标记，减少计算负担。

3. **跨种源模型迁移性**：  
   - 随着训练与测试种源间FST上升，δ¹⁵N和C/N比的模型预测性能下降；
   - δ¹³C受遗传距离影响较小。

4. **存在显著种源×环境互作（PEI）**：  
   表明叶片生理性状具明显表型可塑性，需在选育设计中考虑环境效应。

5. **GBLUP性能稳定优越**：  
   相较复杂模型（BRR、LGB），GBLUP在精度与计算效率间取得最佳平衡。

---

## 七、研究亮点与创新点

- **首次在欧洲栎中系统实现基因组预测**叶片生理性状；
- **创新结合GWAS与基因组预测框架**，在树种应用中验证有效；
- **建立具种源识别（provenance-aware）预测体系**，为适地选育提供模型基础；
- **验证跨环境可迁移性**，揭示遗传距离对模型性能的影响；
- **构建实用的林木气候适应性指标体系**（δ¹³C, δ¹⁵N, C/N），具有早期选择潜力。

---

## 八、不足与局限性

- **样本范围有限**：仅包含欧洲八个种源，地域覆盖尚不足以代表全物种变异；
- **模型迁移性验证仍需扩大**：FST分析基于少量来源对，统计功效有限；
- **未报告计算资源与模型收敛参数**，不利于可重复验证；
- **机器学习模型（LightGBM）表现欠佳**：未进行系统调参或正则化验证；
- **环境因子有限**：仅采样两地、两年，难全面表征气候年际波动影响。

---

**（完）**
