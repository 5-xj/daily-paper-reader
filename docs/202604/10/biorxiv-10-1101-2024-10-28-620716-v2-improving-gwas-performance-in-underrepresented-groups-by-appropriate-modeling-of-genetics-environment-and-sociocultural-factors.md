---
title: "Improving GWAS performance in underrepresented groups by appropriate modeling of genetics, environment, and sociocultural factors"
title_zh: 通过对遗传、环境与社会文化因素的适当建模提升在代表性不足群体中的 GWAS 表现
authors: "Cataldo-Ramirez, C., Lin, M., McMahon, A., Gignoux, C., Weaver, T. D., Henn, B. M."
date: 2026-04-08
pdf: "https://www.biorxiv.org/content/10.1101/2024.10.28.620716v2.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 南亚人群遗传学和遗传结构的建模
tldr: 该研究针对GWAS在非欧洲人群中的不足，通过分析UK Biobank中南亚族群的遗传结构并用SVM重新分配样本，同时在GWAS中加入环境变量以改进多基因评分性能，结果显著提高南亚样本规模与模型预测的公平性。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-10-28-620716-v2/fig-001.webp\", \"caption\": \"Figure 2. UKB self-selected ethnicity groups (UDI 21000) projected onto 1KG PCs 2 and 3. A) 1KG data 171 used in the PCA, colored by reference population. B - D) UKB data projected onto 1KG PC space, with B) 172\", \"page\": 6, \"index\": 1, \"width\": 1051, \"height\": 969}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-10-28-620716-v2/fig-002.webp\", \"caption\": \"Table 2. Environmental variables included as covariates in GWASnull (italicized) and/or GWASenv (all 322 variables listed here). 323\", \"page\": 11, \"index\": 2, \"width\": 1054, \"height\": 759}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-10-28-620716-v2/fig-003.webp\", \"caption\": \"Figure 3. Supervised ADMIXTURE output trained on 1KG data, for k = 7. A) 1KG populations used in the 195 unsupervised analyses. B) Supervised ADMIXTURE output grouped by the original UKB self-selected 196 ethnicity labels (UDI 21000). C) Supervised ADMIXTURE output grouped by SVM training group (n = 30; 197 left) and respective predicted group classifications (right) for UKB “White and Asian” and “Any other 198 Asian” identifying participants. Only groups with 30 or more SVM classifications are included in this 199\", \"page\": 7, \"index\": 3, \"width\": 1051, \"height\": 649}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-10-28-620716-v2/fig-004.webp\", \"caption\": \"Table 5. Predictive performance of PGS scores. All models meet significance at p < 1 x 10-5. Extended 426 results can be found in Tables S2.12 and S2.13. 427\", \"page\": 14, \"index\": 4, \"width\": 929, \"height\": 288}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-10-28-620716-v2/fig-005.webp\", \"caption\": \"Figure 6. Comparison of correlations between PGS score and participant height (n = 997). R2 values 420 (symbols) and 95% CI (solid lines) reflect PGS performance across the full test sample (left panel) and 421 sex stratified samples (right panel). Dashed lines connect R2 estimates between sex stratified samples to 422 help visualize biases in PGS performance. PGS models are designated by color and symbol, and are 423 consistent across panels. 424 425\", \"page\": 14, \"index\": 5, \"width\": 1051, \"height\": 409}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-10-28-620716-v2/fig-006.webp\", \"caption\": \"Table 1. UK Biobank sample. 58\", \"page\": 3, \"index\": 6, \"width\": 1038, \"height\": 1162}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-10-28-620716-v2/fig-007.webp\", \"caption\": \"Figure 5. Manhattan plots of significantly associated SNPs resulting from GWASnull (left panel) and 391 GWASenv (right panel). A significance threshold of p < 5-8 is designated by the dashed lines. The rsID for 392 the variants with the lowest p-value per peak is listed in the GWASenv panel. Regions with inflated 393 significance in GWASnull that are reduced in GWASenv are designated by asterisks in the GWASnull panel. 394 Alternatively, regions with increased significance in GWASenv in comparison to GWASnull are designated 395 by asterisks in the GWASenv panel. 396 397 Polygenic score (PGS) construction and assessments 398 Following the GWAS, we developed one height PGS model for each of the two GWAS 399 using LDpred2-auto [30, 31]. We assessed the overall performance of each model (GWASnull 400 PGS and GWASenv PGS) by calculating R2 between PGS and height, both with and without the 401 demographic or environmental covariates used in the associated GWAS, for UKB South Asian 402 participants held out from the sample prior to GWAS analyses (n = 997). We additionally 403\", \"page\": 13, \"index\": 7, \"width\": 939, \"height\": 930}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-10-28-620716-v2/fig-008.webp\", \"caption\": \"Figure 4. Relationships between group labels and genetic affinities throughout the SVM pipeline, for UKB 261 participants who selected “Any other Asian” (AOA) or “White and Asian” (WA) as their ethnicity. 262 Participants with self-selected AOA or WA ethnic backgrounds (UKB data-field 21000) (left column) were 263 first assigned a group membership to one of the 13 reference populations used to train the SVM (AFR not 264 pictured), based on the highest classification probability assigned (middle column). Classification 265 probabilities for each participant were grouped by subcontinental region and summed. Those with a 266 summed subcontinental classification probability ≥ 0.7 were assigned to that group (right column). AOA 267\", \"page\": 9, \"index\": 8, \"width\": 997, \"height\": 904}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2024-10-28-620716-v2/fig-009.webp\", \"caption\": \"Figure 1. UKB BIP (middle column) and AOA and WA (right column) array data projected onto 1KG PC4 135 and PC7 space, when using standard QC thresholds for MAF (top row) and stringent MAF thresholds 136 (bottom row). For each plot, 1KG data are represented by open circles, BIP are represented by plus 137 signs, AOA are represented by filled diamonds, and WA are represented by filled circles. All data are 138 plotted in the left column, with UKB data grayed. BIP and 1KG data are plotted in the middle column, with 139 1KG data grayed. AOA, WA, and 1KG data are plotted in the right column, with 1KG data grayed. Top: 140 When using the full SNP intersection between UKB and 1KG data, PC4 and above are both driven by 141 European genetic variation (See SI Section 1.2.3 for more information). Bottom: when more stringent 142 MAF thresholds are used to filter out all but common SNPs (i.e., variants with MAF > 0.1 retained), PC4 is 143 driven by East Asian genetic variation and PC7 is driven by South Asian genetic variation. Standard QC 144 thresholds for filtering UKB array data will emphasize structure within European axes of variation and may 145 only be appropriate for addressing within-sample structure if just the first three PCs are being considered. 146 However, this may bias the interpretation of relative genetic variance within the sample data as well as 147 patterns of global population structure (therefore also biasing attempts to characterize genetic ancestry). 148 149 UKB Bangladeshi, Indian, and Pakistani Principal Components Analysis (PCA) 150 UKB Bangladeshi, Indian, and Pakistani (BIP) participants generally cluster closer to one 151 another and to 1KG South Asian reference groups than to other reference populations included 152 in the global PCA. The UKB Indian group demonstrates the highest variance in scores across 153 PCs, suggesting the highest levels of genetic diversity of the UKB BIP groups (Fig. 2; SI Section 154 1.3.1, Fig. S1.6-S1.8), although they also comprise the largest sub-sample, possibly 155 confounding this interpretation. Across PCs, the Pakistani scores fall within the Indian ranges, 156 making them largely indistinguishable from Indian-identifying participants. In 5 of the 20 157\", \"page\": 5, \"index\": 9, \"width\": 1051, \"height\": 760}]"
motivation: 当前GWAS与多基因评分主要依赖欧洲人群数据，导致非欧洲族群分析能力有限。
method: 通过基因结构与自选族裔身份的关联分析，使用支持向量机重新分类UK Biobank中南亚血统的样本，并在GWAS中加入环境协变量。
result: "重新分类后南亚样本量增加1,381例，环境调整后的PGS模型与大规模训练模型表现相当，并减少预测中的性别偏差。"
conclusion: 适当利用族群信息、遗传亲缘及环境因素能提升GWAS与PGS在多族群中的准确性与公平性。
---

## 摘要
全基因组关联研究（GWAS）和多基因评分（PGS）的开发通常受制于生物样本库中可获得的数据，这些数据中欧洲人群显著过度代表。本文通过对英国生物样本库（UK Biobank，UKB）中自我认定为孟加拉裔、印度裔、巴基斯坦裔、“白人和亚洲裔”（WA）以及“其他亚洲裔”（AOA）参与者的遗传亲缘关系进行表征，提升了非欧洲人群数据的利用价值，从而为未来的遗传分析构建一个更稳健的南亚样本。我们评估了遗传结构与自我认定族群身份之间的关系，并利用数据集中一致的聚类模式训练支持向量机（SVM）。SVM 被用于在次大陆水平上重新分类 n = 1,853 名 AOA 和 WA 参与者，使英国生物样本库南亚组的样本量增加了 1,381 名参与者。我们进一步利用这些样本评估 GWAS 表现和 PGS 开发。通过实施严格的协变量选择程序，我们在身高 GWAS 中引入环境协变量，并比较了两个 GWAS 模型：GWASnull 和 GWASenv 的输出结果。我们发现，两种 GWAS 模型生成的 PGS 性能在预测方面与使用数量大一个数量级的训练样本所开发的 PGS 模型相当，且经过环境调整的 PGS 模型可降低预测性能中的性别偏差。总之，我们展示了如何通过利用模糊的族群编码、匹配祖源的插补面板以及引入环境协变量来提升 GWAS 的性能。

## Abstract
Genome-wide association studies (GWAS) and polygenic score (PGS) development are typically constrained by the data available in biobank repositories in which European cohorts are vastly overrepresented. Here, we increase the utility of non-European participant data within the UK Biobank (UKB) by characterizing the genetic affinities of UKB participants who self-identify as Bangladeshi, Indian, Pakistani, "White and Asian" (WA), and "Any Other Asian" (AOA), towards creating a more robust South Asian sample size for future genetic analyses. We assess the relationships between genetic structure and self-selected ethnic identities and use consistent patterns of clustering in the dataset to train a support vector machine (SVM). The SVM was utilized to reassign n = 1,853 AOA and WA participants at the subcontinental level, and increase the sample size of the UKB South Asian group by 1,381 additional participants. We further leverage these samples to assess GWAS performance and PGS development. We include environmental covariates in the height GWAS by implementing a rigorous covariate selection procedure, and compare the outputs of two GWAS models: GWASnull and GWASenv. We show that PGS performance derived from both GWAS models yield comparable prediction to PGS models developed with an order of magnitude larger training, and environmentally-adjusted PGS models reduce the sex-bias in predictive performance. In summary, we demonstrate how GWAS performance can be improved by leveraging ambiguous ethnicity codes, ancestry matched imputation panels, and including environmental covariates.

---

## 论文详细总结（自动生成）

# 论文总结  
**题目：** 通过对遗传、环境与社会文化因素的适当建模提升在代表性不足群体中的 GWAS 表现  
**原文来源：** bioRxiv, 2026  
**作者：** Cataldo‑Ramirez 等  
**研究对象：** 英国生物样本库（UK Biobank）非欧洲人群，尤其是南亚族群  

---

## 一、研究核心问题与背景

- **核心问题：**  
  当前全基因组关联研究（GWAS）与多基因评分（Polygenic Score, PGS）主要基于欧洲人群数据。这种“欧洲中心主义”导致模型在非欧洲人群（如南亚人群）中的预测能力显著下降。非欧洲样本数量小、遗传结构复杂，使相关群体在遗传学研究中被系统性忽视。

- **研究动机：**  
  作者希望通过改进数据建模与协变量处理，提高小样本、非主流族群数据在 GWAS/PGS 中的效能与公平性，从而减少医疗遗传预测中的种族偏差。

- **整体含义：**  
  研究证明，只要对遗传结构、环境因素及社会身份进行整合建模，即使在人群样本较小情况下也能改善 GWAS 的信噪比与 PGS 的预测性能。

---

## 二、方法论与技术路线

### 1. 核心思想
- **联合建模**：同时考虑个体的遗传亲缘关系、环境变量和社会自我认定族群标签。  
- **分步实现**：  
  1. 对南亚及相关群体的遗传结构进行主成分分析（PCA）与监督聚类。  
  2. 使用支持向量机（SVM）在次大陆层面重分类模糊族群样本（如 “White and Asian” 与 “Any Other Asian”）。  
  3. 构建两个模型：
     - **GWASnull**：仅包含常规协变量（性别、年龄、主成分等）；  
     - **GWASenv**：在 GWASnull 基础上进一步加入选定的环境因素（如饮食、出身地、社会经济指数等）。
  4. 利用 **LDpred2‑auto** 构建对应的 PGS 模型，并评估预测性能。

### 2. 技术细节  
- **数据清洗与质控：** 使用 PLINK、KING 去除亲缘样本、罕见 SNP。  
- **主成分计算：** 以一千基因组（1KG）为全球参照，通过 FRAPOSA 投影。  
- **SVM 训练：** R 包 e1071；训练集来自 UKB Bangladeshi & Pakistani + 1KG 南亚群体。分类概率 ≥ 0.7 时纳入南亚组。  
- **遗传数据插补：** 使用 **GenomeAsia100K (GAsP)** 参考面板，通过 Michigan Imputation Server 与 minimac4；阈值 info > 0.8。  
- **GWAS分析：** GCTA‑MLMA‑LOCO（混合线性模型），对比加入不同协变量的效果。  
- **PGS计算：** LDpred2‑auto 自动推断 SNP 遗传率与多基因性。  
- **统计验证：** 采用 cocor、r2redux 进行相关系数显著性比较。

---

## 三、实验设计

### 1. 数据与样本
- **主要数据来源：**  
  - UK Biobank（项目 ID 54084），共 10,288 名南亚及混合族裔参与者。  
  - 1KG Phase 3 参考数据，用于全球遗传比较。  
  - GenomeAsia100K 用于插补参考。

- **样本组合：**  
  - 原南亚组（Bangladeshi, Indian, Pakistani）共 6,756 人。  
  - 经 SVM 重新归类后增加 1,381 名样本，使南亚组扩大约 20%。  

### 2. 基准与对比
- **基准模型：** 传统欧洲人群训练的 PGS（Yengo et al., 2022, PGS002800）。  
- **对比设置：**  
  - GWASnull vs GWASenv（是否加入环境协变量）  
  - 自建 PGS vs 外部发布的 South Asian PGS002800  
  - 性别分层性能比较（评估性别偏差）

---

## 四、资源与算力

- 文中**未明确说明具体的算力配置**。  
  仅提及使用 GCTA、LDpred2、FRAPOSA、ADMIXTURE、ESCALATOR 等计算工具。  
  未提及 GPU 或 HPC 信息，因此无法判断训练耗时或硬件规模。

---

## 五、实验数量与充分性

- **主要分析模块：**  
  1. 人群遗传结构分析（PCA + ADMIXTURE + SVM 分类）；  
  2. 环境变量选取与线性回归检验（9 个环境因子）；  
  3. 两组 GWAS 模型比较（null 与 env）；  
  4. PGS 性能评估与外部基准对照；  
  5. 附加分析：环境变量遗传率估计、性别偏差检验、群体结构残余分析。

- **实验充分性：**  
  共涉及多轮统计建模与约 5 个主要量化评估模块，结果呈一致趋势，且引用多重显著性检验（p<10⁻⁵‑10⁻⁸），说明实验较系统、客观。

---

## 六、主要结论与发现

1. **样本扩充效果显著：**  
   通过 SVM 重新归类，“South Asian” 样本增加约 20%，提高了统计功效。  

2. **GWAS改进：**  
   环境调整模型（GWASenv）检测到更多显著 SNP（p<10⁻⁶ 时 294 vs 248 个），且标准误更小，效果估计更稳定。  

3. **PGS性能：**  
   - 环境调整后的 PGS 与大规模（约十倍数据）训练模型在预测身高上的性能相当（R²≈0.022‑0.026）。  
   - 加入环境协变量后，性别间预测差距减小（女 R²=0.123，男 R²=0.106）。  
   - 性别偏差在传统欧洲模型中更明显。  

4. **方法公平性提升：**  
   通过遗传与环境联合建模，减少因族群标签混淆带来的预测偏差。

---

## 七、优点与创新

- **人群重分类创新：**  
  使用机器学习（SVM）系统修正模糊族群标签，实现高精度族群识别。  
- **跨领域建模：**  
  将遗传学、社会文化与环境要素整合入 GWAS 模型，为多族群研究创建可推广的框架。  
- **改进数据质量：**  
  首次识别并校正 UKB 芯片的欧洲取样偏置（ascertainment bias）。  
- **环境因素引入策略严格：**  
  精选低遗传率环境变量，平衡偏差风险与解释力。  
- **公平性贡献：**  
  性别和族群预测差距均有系统缓解，对精准医学具有伦理与现实价值。

---

## 八、不足与局限

- **算力与复现性未披露：** 论文无硬件与资源细节，重复实验成本未知。  
- **样本局限：** 虽扩大至约 7,000 人，但仍属小样本，不足以代表全部南亚基因多样性。  
- **环境变量测量偏差：** UKB仅记录成人自报数据，难以反映童年营养、成长环境。  
- **方法依赖参考数据库：** SVM 分类依赖 1KG 与 UKB 训练集，若参考群体代表性不足仍可能形成新偏差。  
- **GxE未系统探索：** 虽提到基因‑环境互作的可能，但未实证检验具体交互项。  
- **外部验证缺少：** 模型仅在 UK Biobank 数据上验证，未扩展至其他非欧洲数据集。

---

**（完）**
