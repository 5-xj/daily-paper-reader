---
title: Genetic background shapes AI-predicted variant effects
title_zh: 遗传背景决定AI预测的变异效应
authors: "Schilder, B. M., Liu, Z., Desmarais, J. J., Laub, D., Rahimi, F., Sethi, P., Pereira, L. A., Sun, M. M., Kinney, J. B., McCandlish, D. M., Zhou, J., Koo, P. K."
date: 2026-04-07
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.04.715328v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 量化数千个人类基因组的遗传背景如何影响变异效应
tldr: 本研究旨在解决传统方法忽视遗传多样性的问题，提出个性化变异效应预测框架pVEP，利用全球多样人群的基因组数据，评估遗传背景对AI预测的影响。结果显示，许多临床变异在不同遗传背景下预测结果差异显著，提示个体遗传背景在变异解释中具有重要作用。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-04-715328-v1/fig-001.webp\", \"caption\": \"Figure 4. pVEP reveals background-dependent predicted effects for clinical splicing variants. a, Filled density plot of all SpliceAI reference-based and personalized VEP scores per clinical variant (x-axis: 0 = no predicted splice disruption, 1 = complete disruption), stratified by ClinVar pathogenicity (n = 8.5 k: 2.6 k benign, 2.5 k VUS, 3.3 k pathogenic). The red vertical line indicates spliceogenicity threshold. b, Bar plot of pVEP scores grouped by ClinVar pathogenicity label, showing pathogenic variants and VUS have high predicted spliceogenicity than benign ones (two-sided Mann-Whitney U test: U = 2.16×106 – 2.72×106, p = 2.03×10−114 to 2.51×10−243). ns: p≥ .05; **: p < 0.01; ****: p < 0.0001). c, Bar plot of counts of SpliceAI-predicted variant effect classes (donor/acceptor gain or loss), colored by clinical significance. d, Bar plot of Shannon entropy of SpliceAI-predicted effect classes across haplotypes, grouped by pathogenicity labels. Pathogenic variants and VUS have significantly higher entropy than benign variants (two-sided independent-samples t-tests: t = 5.52–14.35, p = 6.2×10−46 to 3.6×10−8) e, Boxplot of surrogate model marginal effects per clinical variant, colored by ClinVar significance, showing pathogenic variants and VUS have higher marginal effects than benign variants (two-sided Mann-Whitney U tests: p < 0.0001). f, Bar plot of clinical variant marginals grouped by whether the clinical variant overlaps a splicing-relevant region: 3′ splice-site (ss), 5′ss, canonical, or intronic proximal. Variants within canonical and intronic proximal 3′/5′ss displayed greater effects than others (two-sided Mann-Whitney U tests: p < 0.001). g, VEP score distributions across haplotypes for chr17:2981247 A>G (RAP1GAP2, VUS) and chr17:43115788 G>C (BRCA1, pathogenic). Upper panels show log-scale haplotype frequency with spliceogenicity (red) and reference (grey) thresholds marked. Lower panels show superpopulation composition per VEP score bin. h, Attribution maps for four genomic context around BRCA1 chr17:43115788 G>C: reference and HG03691 haplotype, each with and without the clinical variant. Attribution maps given by Integrated Gradients highlight sequence-level determinants of 3′ splice-site choice. The clinical variant is highlighted in purple and the compensatory background variant in green. This variant induced a strong splicing change in all haplotypes (max ∆ = 0.996) except for the HG03691-specific haplotype (max ∆ = 0.0195). 6/17\", \"page\": 6, \"index\": 1, \"width\": 1038, \"height\": 1081}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-04-715328-v1/fig-002.webp\", \"caption\": \"Figure 1. Overview of the pVEP framework and variant datasets. a, Schematic of the pVEP framework. For each clinical variant, model predictions are computed across reference and personalized background sequences with (MUT) and without (WT) the clinical variant introduced, yielding a distribution of predicted variant effects with the reference-based VEP score (V EPref) marked for comparison. b, Bar chart of individuals per ancestral superpopulation across the 1000 Genomes Project and Human Genome Diversity Project (n = 3,819 individuals). c, Histogram of unique haplotypes per protein across all transcripts analyzed (n = 2,847 transcripts). d, Histograms of background variants per haplotype for protein sequences in ProteinGym (top, n = 132,721 unique haplotypes), 10 kb DNA windows centered on splicing variants in SpliceVarDB (middle, n = 64,846,620 unique haplotypes), and 524 kb DNA windows centered on 5′/3′ UTR variants from ClinVar (bottom, n = 105,182,898 unique haplotypes). Counts <10 are binned for visualization purposes. e, Schematics of the three clinical variant classes explored and bar plot of variant counts per class (missense: n = 62,727, splicing: n = 8,490, and UTR: n = 13,771), colored by ClinVar pathogenicity label.\", \"page\": 2, \"index\": 2, \"width\": 1017, \"height\": 763}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-04-715328-v1/fig-003.webp\", \"caption\": \"Figure 2. pVEP reveals heterogeneous predicted responses to clinical missense variants. a, Filled density plot of ESM2-650M reference-based and personalized VEP scores across all missense variants, stratified by ClinVar pathogenicity (n = 62,727: ∼8,600 benign, ∼19,500 likely benign, ∼19,300 likely pathogenic, and ∼8,900 pathogenic variants). Negative values (rightwards) indicate more pathogenic effects. Vertical dashed line (red) indicates benign/pathogenic threshold. b, Stacked bar plot showing the percentile bin (fill color) of reference-based VEP score (V EPref) relative to the full distribution average (V EPmean) at each V EPmean decile. A greater proportion of red bars indicates V EPref tends to overestimate pathogenicity, whereas a greater proportion of blue bars indicates underestimation. The gray horizontal dashed line demarcates 50% of the variants in that VEP Decile. c, Stacked barplot showing the proportion of clinical variants whose ESM2-650M VEP scores follow a normal distribution (D’Agostino-Pearson omnibus test, FDR > 0.05), non-normal distribution (FDR < 0.05,) or could not be tested (n < 20 protein haplotypes), grouped by ClinVar pathogenicity. d, Bar plot of the estimated number of modes per clinical variant VEP score distribution, inferred from a variational Bayes Gaussian mixture model. e, Haplotype-level VEP score distributions for three missense variants with high inter-haplotype variability: TH 167V>E (n = 71 haplotypes, top), COX10 225P>L (n = 46, middle), and ALDH5A1 179I>N (n = 55, bottom). Vertical dashed lines indicate V EPmean (gold), V EPref (grey), and the empirically inferred benign/pathogenic boundary (red). f, Haplotype-level ESM2-650M VEP score distribution for VHL 121C>F (n = 15 haplotypes). Vertical dashed lines indicate V EPmean (gold) and V EPref (grey). Bar plots below show the proportion of individuals from each ancestry per VEP score bin. AFR=African, AMR=Admixed American, EAS=East Asian, EUR=European, SAS=South Asian.\", \"page\": 3, \"index\": 3, \"width\": 1010, \"height\": 666}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-04-715328-v1/fig-004.webp\", \"caption\": \"Figure 5. pVEP reveals background-dependent predicted effects for clinical UTR variants. a, Filled density plot of Flashzoi average pVEP scores (V EPmean) per clinical variant, stratified by ClinVar pathogenicity. Vertical dashed lines indicate the reference-based VEP score (V EPref; grey) and the empirically inferred benign/pathogenic boundary (red). b, Bar plot of V EPmean grouped by UTR type (5′/3′) and ClinVar pathogenicity label. Pathogenic-labeled variants had significantly greater predicted pathogenicity than benign variants (two-sided Mann–Whitney U tests: 3′ UTR benign vs. pathogenic, U = 4.42×105, p = 1.3×10−7; 5′ UTR, U = 4.65×105, p = 0.016). ns: p≥ .05; ****: p≤ 0.0001. c, Bar plot of variability (median absolute deviation) of Flashzoi VEP score distributions across haplotypes, grouped by UTR type and ClinVar pathogenicity label. Benign variants within 5′ UTR regions showed greater variability in predicted effects than those witihn 3′ regions (two-sided Mann-Whitney U test: p < 0.0001). d, Haplotype-level VEP score distributions for the four clinical UTR variants with the greatest variability across haplotypes. Vertical dashed lines indicate V EPmean (gold), V EPref (grey), and the empirically inferred benign/pathogenic boundary (red), derived from gene-specific variational Bayes Gaussian mixture models. Below each histogram, bar plots show the proportion of haplotypes from each ancestry per VEP bin.\", \"page\": 8, \"index\": 4, \"width\": 765, \"height\": 677}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-04-715328-v1/fig-005.webp\", \"caption\": \"Figure 3. Background variants modify the effects of BRCA1 clinical variants in close structural proximity. a, Surrogate modeling takes as input a binary matrix of background variant presence across haplotypes (left) and predicts continuous clinical variant VEP scores (right), yielding a variant sensitization map of inferred joint effects (center). b, Predicted 3D structure of BRCA1 from AlphaFold2 (AF2). c, Variant sensitization map (inferred from ESM2 VEP scores) overlaid on the AF2-predicted BRCA1 distance map, showing all 652 significant non-additive interactions (center heatmap; p < 0.05). Red boxes indicate variant pairs where a background variant (y-axis) increases predicted pathogenicity of a clinical variant (x-axis). Pathogenic clinical variants (top scatter/density) are concentrated in the RING and BRCT domains (grey vertical bars), recapitulated by surrogate model marginal effects for clinical (bottom) and background variants (right). d, 3D structural visualization of interaction pairs: background variant 1706G>A with clinical variants 1684T>A and 1687V>I (left), and 1729L>Q with 1722S>F (FDR = 1.43×10−13; right). Spheres indicate clinical variants colored by V EPmean (red: pathogenic, blue: benign); ribbon color and dashed lines indicate the background variant’s effect on pathogenicity (red: ↑, blue: ↓, grey: no data). Labels indicate reference amino acid and residue position. e, Zoomed-in AF2 distance maps for the four variant pairs with the strongest interaction coefficients in BRCA1. f, Boxplot of clinical variant marginals grouped by ClinVar pathogenicity; pathogenic variants have higher marginals than benign ones (two-sided Mann–Whitney U tests: U = 1355–2302, p = 1.33×10−21 to 8.33×10−13, nbenign/likely benign = 137–167, npathogenic/likely pathogenic = 57–95; ns: p≥ .05; ****: p≤ 0.0001). g, Observed-to-expected enrichment of AF2 residue contacts among variant pairs at each interaction threshold, with variant pair counts on the secondary axis. h, Residue-by-residue heatmap showing the proportion of haplotypes (n = 126) gaining (blue) or losing (red) AF2-predicted contacts (< 8 Å) relative to the reference. i, Bar plot of reference contacts gained (blue) or lost (red) in population-weighted contact maps stratified by superpopulation; labels show percentage gained/lost relative to the reference. 5/17\", \"page\": 5, \"index\": 5, \"width\": 1038, \"height\": 1079}]"
motivation: 现有遗传变异预测多基于单一参考基因组，未充分考虑遗传多样性对变异效应的调节作用。
method: 该研究提出了个性化变异效应预测框架pVEP，分析全球多样人群基因组中的变异效应异质性。
result: 结果显示，同一变异在不同单倍型上表现出不同致病预测，揭示了潜在蛋白结构与剪接机制的差异。
conclusion: 研究表明，个体的遗传背景显著影响AI对变异效应的预测，个性化背景应纳入变异注释和临床解释中。
---

## 摘要
预测遗传变异的后果仍然是生物医学中的主要目标。传统方法通常在单一参考基因组的背景下评估单核苷酸变异，而未考虑可能调控变异效应的基因多样性。在此，我们引入了个性化变异效应预测框架（personalized variant effect predictor，pVEP），用于量化来自全球多样化人群的数千个基因组的遗传背景如何影响临床变异效应的计算预测。通过涵盖蛋白质结构、剪接及非编码调控的深度学习模型，pVEP揭示，许多临床变异在单倍型间表现出异质的预测效应，同一变异在某些遗传背景下被预测为致病，而在其他情况下则为良性。我们发现了支持这些差异的分子机制证据，包括预测的蛋白质接触的变化及剪接位点识别的改变。总体而言，个体化的基因组背景被证明是变异注释和临床解读中系统性被低估的变量，尤其对遗传多样性较高的人群具有重要意义。

## Abstract
Predicting the consequences of genetic variants remains a major goal in biomedicine. Conventional approaches typically assess single-nucleotide variants in the context of a single reference genome, without accounting for genetic diversity that can modulate variant effects. Here we introduce the personalized variant effect predictor (pVEP) framework, which quantifies how genetic background across thousands of human genomes from globally diverse populations shapes computational predictions of clinical variant effects. Across deep learning models spanning protein structure, splicing, and noncoding regulation, pVEP reveals that many clinical variants exhibit heterogeneous predicted effects across haplotypes, with the same variant predicted to be pathogenic in some genetic backgrounds and benign in others. We find support for underlying molecular mechanisms, including shifts in predicted protein contacts and changes in splice-site recognition. Overall, personalized genomic context emerges as a systematically underappreciated variable in variant annotation and clinical interpretation, with particular implications for genetically diverse populations.

---

## 论文详细总结（自动生成）

# 论文总结：遗传背景决定 AI 预测的变异效应（Genetic background shapes AI-predicted variant effects）

---

## 一、核心问题与研究背景

- **研究动机**：  
  当前基因变异效应（variant effect）预测常基于单一“参考基因组”（reference genome），假设每个变异在所有个体中具有相同的影响。然而，现实中人类基因组存在巨大多样性（每人约有 400–500 万差异变异），这一多样性可能改变对同一变异的致病性判断。  
  → 因此，传统“一变异一效应”范式可能导致预测偏差，尤其在不同人群（非欧系）中。

- **总体目标**：  
  本论文旨在系统量化**遗传背景（genetic background）对 AI 模型预测的变异效应的影响**，揭示个性化背景在临床变异解释中的重要性，从而提高变异解释的精准性与公平性。

---

## 二、方法论与模型框架：pVEP（Personalized Variant Effect Predictor）

### 核心思想
构建一个能够在 **个体化基因背景** 下预测变异效应的统一框架。即对于每个临床变异，将它**注入不同人群的真实单倍型基因背景中**，通过深度学习模型预测变化前后差异——从而获得一个在群体尺度上的分布。

### 技术流程（文字说明）
pVEP 的流程如下：

1. **输入**
   - 临床变异集合 \( V \)（来自 ClinVar / ProteinGym / SpliceVarDB 等）
   - 多个个体的单倍型集合 \( H \)
   - 预训练的模型集合 \( M \)（用于蛋白质、剪接、非编码区域的预测）

2. **操作步骤**
   ```
   对每个变异 v ∈ V：
       对每个单倍型 h ∈ H：
           提取该变异所在的序列 → s_wt
           注入变异 → s_mut
           用模型 m 计算预测函数差：Δm = m(s_mut) - m(s_wt)
   ```
   最终获得每个变异的 **pVEP 分布（个性化效应集合）**。

3. **模型层面**
   - **蛋白质层** → 使用 ESM 系列语言模型（ESM2-650M、ESM3等）
   - **RNA 剪接层** → 使用 SpliceAI
   - **非编码调控层（UTR）** → 使用 Flashzoi 模型（Borzoi 的高效版本）
   - 利用 **解释性 AI（XAI）方法**：包括 Integrated Gradients、变分高斯混合建模（Gaussian Mixture Model）以及 surrogate modeling（代理线性模型）分析变异交互机制。

4. **额外分析**
   - 构建 **variant sensitization map**：衡量背景变异如何放大或减弱临床变异的效应。
   - 引入 **非加性交互检测**（F-test 比较），识别背景变异与临床变异间的协同或抵消作用。

---

## 三、实验设计与数据集

- **数据来源**：
  1. **人口样本**：  
     共 3,819 个完整、相位定的个人基因组（来自 1000 Genomes Project + HGDP），覆盖七大超种群（非洲、欧洲、东亚、南亚、美洲混合、中东、大洋洲）。
  2. **变异数据集**：
     - ProteinGym：62,727 个 ClinVar 标注的 *missense* 变异；
     - SpliceVarDB：8,490 个剪接位点相关变异；
     - ClinVar：13,771 个 UTR 区域变异。
  3. **基因参考**：使用 GRCh38。

- **Benchmark 与模型对比**：
  - 主要模型：ESM、SpliceAI、Flashzoi（三个分子层面）。
  - 参考基线：传统 **reference-only VEP**。
  - 对照分析：比较 **reference score（VEP_ref）** 与 **population-averaged score（VEP_mean）** 的代表性与一致性。

- **解释与验证手段**：
  - 利用 AlphaFold2 结构预测验证蛋白质层的相互作用；
  - 与 BRCA2 大规模剪接实验（30,000+ 变体）进行交叉验证。

---

## 四、资源与算力

- **GPU 计算配置**（论文中有明确说明）：
  - 蛋白质预测（ESM 系列）：4 × NVIDIA A100 80GB
  - 剪接预测（SpliceAI）：1 × NVIDIA H100 80GB
  - 非编码预测（Flashzoi，524 kb 窗口）：20 × NVIDIA H100 80GB 并行运行
  - AlphaFold2 结构计算：2 × NVIDIA A100 使用 ColabFold
- 所有分析在 Python 3.12 + PyTorch / TensorFlow 上完成。

*说明：论文未提及训练时长，但分析涉及数百万个单倍型预测，计算量极大，属群体级推理任务。*

---

## 五、实验数量与充分性

- **总体规模**：
  - 约 **85,000 个临床变异 × 数百万单倍型** 预测；
  - 涉及三类分子层（蛋白质、RNA 剪接、非编码 UTR）。
- **具体分析维度**：
  - 正常性与多峰性检测：数十万个变异分布；
  - 交互检测与代理建模：重点在 BRCA1、TP53、BRCA2 等代表基因；
  - 多人群结构比较：检验不同祖源的背景差异。
- **实验充分性评价**：
  - 横跨多个模型与数据类型，涵盖蛋白–RNA–非编码全层；
  - 提供多种解释性验证（结构、信号、分布统计、实验验证）；
  - 但尚欠**大规模临床样本实验验证**（作者亦指出这是未来工作方向）。

---

## 六、主要结论与发现

1. **遗传背景显著改变AI预测结果**：  
   同一变异在不同背景预测为“致病”还是“良性”可完全反转。
2. **传统参考基因预测常严重偏差**：  
   约 95% 的变异分布呈多峰型，说明单一参考预测不具代表性。
3. **分子机制证据**：
   - 蛋白质层：背景变异与临床变异交互集中于 3D 相互接触区域；
   - 剪接层：背景变异可抵消致病突变（例如 BRCA1 的南亚单倍型）。
4. **群体差异**：
   - 非洲单倍型常显示更强的致病预测；
   - 特定亚洲单倍型可能出现保护性效应。
5. **平均化预测更可靠**：  
   人群平均的 pVEP 分数与多个功能注释（如保守性、频率、致病分数）相关性更强。

---

## 七、优点与创新点

- **创新视角**：首次系统引入遗传背景到 AI 变异预测框架中。
- **方法整合度高**：统一分析蛋白、剪接、非编码三层模型。
- **解释性增强**：通过 XAI、结构映射、变分建模揭示分子机制。
- **计算规模空前**：在人群规模上开展个性化预测。
- **公平性启示**：揭示现有基因组医学在种群代表性上的潜在偏差。

---

## 八、不足与局限性

- **模型局限**：
  - 当前深度模型（如 Enformer、ESM）准确性有限，尤其在个体化预测上；
  - 未纳入最新模型（Evo2、AlphaGenome 等）。
- **验证不足**：
  - 缺乏直接的实验测定（population-scale functional assays）。
- **样本覆盖**：
  - 虽有人群多样性，但仍局限于 3,819 个样本，未囊括大型群体（如 UK Biobank）。
- **解释的不确定性**：
  - 多峰性可能源于模型误差而非真正的生物效应。
- **应用限制**：
  - 临床转化需低误差高一致性，目前尚未达到临床级可靠度。

---

**（完）**
