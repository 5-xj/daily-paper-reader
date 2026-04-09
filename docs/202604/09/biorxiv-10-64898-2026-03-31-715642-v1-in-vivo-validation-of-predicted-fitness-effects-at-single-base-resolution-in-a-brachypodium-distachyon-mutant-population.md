---
title: In vivo validation of predicted fitness effects at single-base resolution in a Brachypodium distachyon mutant population
title_zh: 在凤梨草突变体群体中对单碱基分辨率预测适应度效应的体内验证
authors: "Moslemi, C., Folgoas, M., Yu, X., Jensen, J. D., Hentrup, S., Li, T., Wang, H., Boelt, B., Asp, T., Sibout, R., Ramstein, G. P."
date: 2026-04-02
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.31.715642v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 全基因组测序与遗传变异效应预测
tldr: 本研究以Brachypodium distachyon突变群体为实验体系，验证计算预测模型在单碱基分辨率下对突变适合度的准确性。通过多代测序与表型分析，发现蛋白质语言模型ESM在错义变异预测中表现优越，非编码变异由PlantCAD模型更准确预测，验证了变异效应预测工具在植物精准育种中的潜力。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-715642-v1/fig-001.webp\", \"caption\": \"Figure 1 – Brachypodium distachyon mutant population. (a) The B. distachyon mutant 309 population (SIEVE) was developed by treating seeds with sodium azide (NaN3; 7 mM for mutants, 0 mM for 310\", \"page\": 11, \"index\": 1, \"width\": 1018, \"height\": 475}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-715642-v1/fig-002.webp\", \"caption\": \"Table 2 – Gene depletion analysis of missense G:C-to-A:T singletons at generation M2: 361 estimate and statistical significance of association between mutation density and gene class 362 related to molecular pathways (GO BP or PMN annotations) 363\", \"page\": 14, \"index\": 2, \"width\": 946, \"height\": 635}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-715642-v1/fig-003.webp\", \"caption\": \"Table 4 – Generalized Additive Model (GAM) fit for fixation probability of mutant allele 466 depending on variant effect prediction 467\", \"page\": 18, \"index\": 3, \"width\": 1018, \"height\": 404}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-715642-v1/fig-004.webp\", \"caption\": \"Table 1 – Allele segregation from M2 to M5 330\", \"page\": 13, \"index\": 4, \"width\": 1018, \"height\": 390}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-715642-v1/fig-005.webp\", \"caption\": \"Figure 5 – Association between observed fitness of variant and predicted variant effect. 472 Relative fixation probability: log ( 𝑃𝐴𝐿𝑇\", \"page\": 19, \"index\": 5, \"width\": 1018, \"height\": 758}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-715642-v1/fig-006.webp\", \"caption\": \"Figure 2 – Classes of variants among singletons detected at the M2 generation. (a) 318 Mutation type of observed singletons after quality control (genotype quality ≥ 20, read depth < 80). The vast 319 majority (94.2%) of singletons were G:C-to-A:T transitions, as expected after mutagenesis by NaN3. (b) Gene 320 features of G:C-to-A:T singletons. The majority (62.7%) of G:C-to-A:T singletons were in intergenic regions; 321 CDS: coding sequence; UTR: untranslated region (3’ or 5’). 322\", \"page\": 12, \"index\": 6, \"width\": 1016, \"height\": 439}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-715642-v1/fig-007.webp\", \"caption\": \"Figure 3 – Distribution of predicted effects of G:C-to-A:T singletons at the M2 324 generation. (a) Predicted fitness effects of missense variants (variants causing amino-acid change in protein 325 sequences of primary transcripts) from SIFT (multiple sequence alignments), ESM (protein language model), 326\", \"page\": 12, \"index\": 7, \"width\": 1016, \"height\": 423}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-715642-v1/fig-008.webp\", \"caption\": \"Table 3 – Effect of mutational burden on phenotypic traits at generations M3 and M4 410\", \"page\": 16, \"index\": 8, \"width\": 1018, \"height\": 379}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-715642-v1/fig-009.webp\", \"caption\": \"Figure 4 – Functional enrichment of homozygous variants prioritized for predicted 413 negative effects. Average effect (point estimate + 95% confidence interval) of homozygous G:C-to-A:T 414 singletons on seed germination, heading date, plant height, and total seed weight at the M3 and M4 generations. 415 Black circles refer to average effects that are significant based on 100 permutations of predicted variant effects 416 (empirical P-value lower than 0.05). (a) Prioritizations of missense variants (variants causing amino-acid change 417\", \"page\": 16, \"index\": 9, \"width\": 1018, \"height\": 493}]"
motivation: 研究旨在验证计算工具预测基因变异对植物适合度影响的准确性。
method: 研究者构建了一个Brachypodium distachyon的点突变体群体，通过多代传代、全基因组测序和表型测量结合进行预测验证。
result: 结果显示，蛋白质语言模型ESM在预测错义变异上表现最佳，而PlantCAD在基因近端非编码变异上的预测优于其他模型。
conclusion: 该研究证明了突变体群体可用于验证基因变异效应预测工具，并指出不同模型在蛋白质编码区与非编码区预测上的优势。
---

## 摘要
计算工具，包括生物语言模型（LM），在预测遗传变异对植物适应度的影响方面显示出巨大潜力。然而，验证变异效应预测（VEP）需要实验群体，其中的遗传差异由离散的点突变组成，而非由重组块分离。在本研究中，我们生成了一个新的凤梨草（Brachypodium distachyon）突变体群体，以评估单碱基分辨率下VEP的预测准确性。这些突变系通过单籽后代法传代五代（M1至M5），并在M2和M5代进行全基因组测序，在M3和M4代进行表型测量。我们使用最先进的VEP模型预测了错义蛋白编码变异和基因邻近非编码变异的功能影响。随后通过估算突变对整个植株测量指标的影响（负担测试）及其从M2到M5的固定概率（清除测试）来验证这些预测。在错义变异中，蛋白语言模型ESM的预测准确性优于生物信息学标准SIFT和基因组语言模型PlantCAD。值得注意的是，VEP评分与等位基因固定之间的关系表明VEP评分与变异适应度之间存在对数线性关系。在基因邻近变异中，PlantCAD的准确性似乎高于监管活动的监督模型，如染色质可及性（a2z）和RNA丰度（PhytoExpr）。综上，我们的研究结果强调了最先进VEP工具作为适应度预测器的实用性，并展示了突变体群体在精准育种应用中评估计算工具的潜力。

## Abstract
Computational tools, including biological language models (LMs), show substantial promise in predicting the impact of genetic variants on plant fitness. However, validating variant effect predictions (VEP) requires experimental populations where genetic variation consists of discrete point mutations rather than segregating recombination blocks. In this study, we generated a novel population of Brachypodium distachyon mutant lines to evaluate the accuracy of VEP at single-base resolution. These lines were advanced through single-seed descent for five generations (M1 to M5), with whole-genome sequencing performed at M2 and M5 and phenotypic measurements recorded at M3 and M4. Using state-of-the-art VEP models, we predicted the functional impact of missense protein-coding variants and gene-proximal non-coding variants. We validated these predictions by estimating the effect of mutations on whole-plant measurements (burden tests) and their probability of fixation from M2 to M5 (purging tests). Among missense variants, the protein LM ESM showed superior predictive accuracy compared to the bioinformatic standard SIFT and the genomic LM PlantCAD. Notably, the relationship between VEP scores and allele fixation suggested a log-linear relationship between VEP scores and variant fitness. Among gene-proximal variants, PlantCAD appeared more accurate than supervised models of regulatory activity, such as chromatin accessibility (a2z) and RNA abundance (PhytoExpr). Collectively, our findings highlight the utility of state-of-the-art VEP tools as predictors of fitness and demonstrate the potential of mutant populations to evaluate computational tools for precision breeding applications.

---

## 论文详细总结（自动生成）

# 在凤梨草突变体群体中对单碱基分辨率预测适应度效应的体内验证  
**原题名**：*In vivo validation of predicted fitness effects at single-base resolution in a Brachypodium distachyon mutant population*  
**作者**：Moslemi, C. 等  
**来源**：bioRxiv (2026-04-02)

---

## 一、研究背景与核心问题

- **研究动机**  
  当前的基因变异效应预测（Variant Effect Prediction, VEP）工具能够在计算上推测单个碱基突变对基因功能及表型适应度的影响，特别是在植物精准育种中具有巨大潜力。  
  然而，大多数验证研究基于群体遗传数据或人工交配的重组方差，而非由离散点突变构成的实验群体，从而限制了预测的验证精度。

- **核心问题**  
  本文旨在解决“计算预测的基因变异适应度效应在单碱基分辨率上是否真实准确”的问题。它通过构建凤梨草 (*Brachypodium distachyon*) 突变群体，在体内环境中验证各类预测模型（如语言模型、传统生物信息学模型）的真实性。

- **整体含义**  
  该研究建立了基因突变预测与植物真实适应度之间的对应关系，为计算育种提供了可靠的实验基础。

---

## 二、方法论：核心思想与技术流程

- **核心思想**  
  通过体内突变群体逐代测序与表型追踪的结合，验证不同类型的变异效应预测工具在真实生物环境中的表现。

- **关键技术步骤**
  1. **突变群体构建**：使用 NaN₃ 化学诱变剂处理凤梨草种子生成 M1 代突变体，经单籽传代法传递至 M5 代。  
  2. **测序与表型采样**：  
     - 在 **M2** 与 **M5** 代进行全基因组测序；  
     - 在 **M3** 与 **M4** 代采集植株性状数据（如种子重量、株高、抽穗时间等）。  
  3. **变异效应预测**：  
     - 对错义变异采用三种模型：**SIFT**, **ESM (蛋白质语言模型)**, **PlantCAD (基因组语言模型)**；  
     - 对基因邻近的非编码变异采用 **PlantCAD**, **a2z (染色质可及性模型)** 与 **PhytoExpr (RNA丰度预测)**。  
  4. **验证策略**：  
     - **负担测试（burden tests）**：评估突变总体对植株性状的平均影响；  
     - **清除测试（purging tests）**：通过 M2→M5 等位基因固定率比较验证变异的适应度效应。  
  5. **统计建模**：利用广义加性模型（GAM）估算突变固定概率与预测得分之间的关系，发现其呈对数线性。  

---

## 三、实验设计

- **数据来源与场景**  
  一个新的凤梨草点突变体群体，跨越五代（M1–M5）。突变主要为 G:C→A:T 转换，占比约 94.2%，符合 NaN₃ 诱变模式。

- **benchmark 与对比方法**  
  - **蛋白编码区变异对比**：ESM vs. SIFT vs. PlantCAD  
  - **非编码区变异对比**：PlantCAD vs. a2z vs. PhytoExpr  
  - 使用等位基因固定概率与表型影响作为客观基准。

- **验证样本与指标**  
  测序覆盖多个代次及上万个突变点，表型测量包括种子萌发率、株高、抽穗期、种子产量等。

---

## 四、资源与算力消耗

- **算力信息**  
  论文中未明确提及所用 GPU 型号、数量或训练时长。ESM 和 PlantCAD 属于预训练模型，研究主要在推理阶段使用，因此总体算力需求较低。

- **说明**  
  缺乏详细的硬件配置描述可能限制研究在不同计算条件下的复现性。

---

## 五、实验数量与充分性

- **实验数量**  
  - 涉及两次大规模测序（M2、M5），两次表型实验（M3、M4）；  
  - 包含变异类型分层分析、基因功能富集分析（GO 功能注释）、多模型比较、 GAM 关联建模等多个子实验。  

- **充分性与公平性**  
  实验覆盖编码区与非编码区，控制突变来源单一、突变类型稳定（NaN₃诱变），实验设置较为规范；  
  然而，研究集中于单一物种与单一诱变类型，外推性仍有待进一步证明。

---

## 六、主要结论与发现

1. **预测准确度**：  
   - 在 **错义变异** 中，蛋白质语言模型 **ESM** 表现最佳，显著优于 SIFT 和 PlantCAD；  
   - 在 **非编码变异** 中，**PlantCAD** 的预测能力优于监督模型（a2z, PhytoExpr）。
2. **变异适应度规律**：  
   - 等位基因固定率与 VEP 得分之间存在 **对数线性关系**，说明预测分数能量化适应度影响。  
3. **应用前景**：  
   - 证明突变群体是验证计算预测工具的有效实验平台，为未来植物精准育种提供机制与工具支撑。

---

## 七、研究优点

- **多代验证的高可信性**：通过 M1–M5 传代与测序，确保突变固定、减少随机误差。  
- **结合语言模型与传统工具**：首次系统比较蛋白质语言模型和基因组语言模型在植物突变预测中的性能差异。  
- **体内验证平台创新**：构建的凤梨草突变体资源可广泛用于基因功能研究与算法评估。  
- **统计模型严谨**：引入 GAM 模型揭示适应度与预测分数的线性规律，具有可解释性。

---

## 八、不足与局限

- **物种单一性**：仅在凤梨草中验证，跨物种普适性待考。  
- **突变类型局限**：NaN₃诱变导致突变偏向 G:C→A:T，对其他突变类型（如插入缺失）验证不足。  
- **算力与模型细节不透明**：缺乏模型推理环境及参数公开，影响可重复性。  
- **表型维度有限**：集中在少数性状（萌发率、株高等），尚未覆盖复杂代谢或抗逆性状。  

---

（完）
