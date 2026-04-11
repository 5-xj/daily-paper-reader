---
title: "Beyond Invariable Sites: Using Evolutionary Stasis to Map Multi-Layered Constraints on the Evolution of Viral and Mammalian Genomes"
title_zh: 超越不变位点：利用进化停滞绘制病毒与哺乳动物基因组进化的多层约束
authors: "Kosakovsky Pond, S. L., Verdonk, H., Weaver, S., Brown, G., Callan, D., Nekrutenko, A., Martin, D. P."
date: 2026-04-10
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.09.717527v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 绘制病毒和哺乳动物基因组进化的多层约束图谱
tldr: 本研究提出了一个分层贝叶斯框架B-STILL，用于识别基因组中进化速率极低的位点，填补现有工具在接近零进化速率区域的解析空白。该方法通过模型校准和“静止半径”调控，区分随机不变与功能约束，成功定位哺乳动物与病毒基因组中的强约束区域。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-001.webp\", \"caption\": \"Figure 3: B-STILL performance summary across 1,800 simulated datasets. (A) Detection power (TPR) as a function of absolute tree length (at 5% injected ESA density). Sensitivity scales log-linearly with total substitution count, reaching nearsaturation in deep phylogenies (T > 5). (B) Power vs. Anchor Density. Power decreases as the proportion of ESAs increases in marginal signal regimes (e.g., Encephalitis Virus Envelope and Mammalian Beta-globin), reflecting the adaptation of the Bayesian prior to a more evolutionarily stagnant background. (C) FPR control remains robustly below 1% across all datasets. (D) Significance vs. Codon Redundancy. Absolute stasis is statistically more significant at redundant codons.\", \"page\": 11, \"index\": 1, \"width\": 1052, \"height\": 819}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-002.webp\", \"caption\": \"Figure 6: Genome-scale concordance between B-STILL inferred evolutionary stasis and REVEL pathogenicity scores (N = 34, 206 positions). The X-axis groups variants into four discrete stasis categories based on site-level EBFprox. The left Y-axis (blue boxplots) shows the distribution of continuous REVEL scores for each category, with the sample size (N) indicated at the bottom. The right Y-axis (red line) tracks the pathogenicity rate, defined as the percentage of variants within each category exceeding the high-confidence REVEL threshold (≥ 0.70). ρ represents the Spearman rank correlation coefficient, demonstrating an alignment between deep-time sequence constraint and modern clinical consensus.\", \"page\": 15, \"index\": 2, \"width\": 740, \"height\": 516}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-003.webp\", \"caption\": \"Figure 10: Three-dimensional structural hub of Evolutionary Stasis Anchors in the uncharacterized protein FAM214A. Residues are colored by B-STILL significance (log10 EBF ), with significant anchors (EBF ≥ 100) shown as red spheres. We identified a significant Stasis Cluster comprising nine Evolutionary Stasis Anchors centered at residue 1038 (p < 10−4, permutation test), likely demarcating a structural or interaction hub in this poorly characterized ORF.\", \"page\": 21, \"index\": 3, \"width\": 844, \"height\": 844}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-004.webp\", \"caption\": \"Figure 1: Bayesian resolution of evolutionary stasis in HIV-1 Reverse Transcriptase. (A) The gene-wide prior distribution of synonymous (α) and non-synonymous (β) substitution rates, representing the average selective landscape across the entire gene. (B) The posterior distribution for site 116, showing the concentration of probability mass at the (0, 0) origin. This transition from a broad prior to a peaked posterior at the origin is the hallmark signature of an Evolutionary Stasis Anchor.\", \"page\": 7, \"index\": 4, \"width\": 1052, \"height\": 454}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-005.webp\", \"caption\": \"Figure 11: Comparative resolution of B-STILL Proximal Stasis EBF vs. nucleotide-level conservation (phyloP) across 38 mammalian genes. (Left) Correlation with the maximum phyloP score per codon (ρ = 0.19). The visible “0/0 plateau” represents the resolution ceiling of frequentist Likelihood Ratio Tests (LRTs), which assign an identical significance score to all invariant sites, failing to distinguish between stochastic invariance and functional constraint. (Right) Correlation with the minimum phyloP score per codon (ρ = 0.35). The stronger alignment with the least-conserved position indicates that B-STILL EBFs effectively filter out genetic-code artifacts—where positions are invariant solely due to codon-structure constraints—identifying functional anchors with higher specificity.\", \"page\": 22, \"index\": 5, \"width\": 1052, \"height\": 479}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-006.webp\", \"caption\": \"Table 2: Summary of B-STILL performance across 900 simulation replicates (50 per Gene/Scenario combination). Scenario A represents the neutral null model; Scenario B evaluates extreme purifying selection (ω = 0.1) at all sites; Scenario C tests sensitivity under reduced evolutionary depth (0.5× tree scaling).\", \"page\": 10, \"index\": 6, \"width\": 610, \"height\": 479}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-007.webp\", \"caption\": \"Figure 5: Clinical validation of B-STILL Empirical Bayes Factors using pathogenic and benign variants from ClinVar. (Left) Aggregate ROC curve for non-synonymous variants (AUROC = 0.65), using EBFprox as the predictor. (Right) Aggregate ROC curve for synonymous variants (AUROC = 0.88) using EBFsyn. The True Positive Rate (TPR) represents the proportion of clinically confirmed pathogenic variants correctly identified as Evolutionary Stasis Anchors, while the False Positive Rate (FPR) denotes the proportion of confirmed benign variants incorrectly flagged. These results demonstrate that Evolutionary Stasis Anchors are a powerful and specific predictor of clinical pathogenicity, particularly for synonymous regulatory variation.\", \"page\": 14, \"index\": 7, \"width\": 1054, \"height\": 442}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-008.webp\", \"caption\": \"Table 3: Validation of B-STILL Proximal EBFs against human population variation (gnomAD v4.1). ρ represents the Spearman correlation between site-level EBF and the sum of allele frequencies at that site. Top 20 genes by correlation magnitude are shown.\", \"page\": 13, \"index\": 8, \"width\": 368, \"height\": 419}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-009.webp\", \"caption\": \"Table 1: Sites in HIV-1 RT inferred to be under significant proximal constraint (EBF ≥ 10). α and β represent the mean posterior synonymous and non-synonymous rates, respectively.\", \"page\": 8, \"index\": 9, \"width\": 790, \"height\": 715}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-010.webp\", \"caption\": \"Figure 7: Mapping of B-STILL Stasis Clusters to annotated viral gene overlaps. Horizontal tracks indicate RefSeq overlaps (black lines) and statistically significant Stasis Clusters (dark gray rectangles).\", \"page\": 19, \"index\": 10, \"width\": 1052, \"height\": 1198}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-011.webp\", \"caption\": \"Table 5: Top 20 functional protein features significantly enriched for B-STILL Stasis Clusters across the mammalian exome. Enrichment scores were calculated relative to the genomic background via Fisher’s Exact Test; all listed features exhibit p < 10−50 after multiple testing correction.\", \"page\": 17, \"index\": 11, \"width\": 948, \"height\": 485}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-012.webp\", \"caption\": \"Figure 4: Patterns of evolutionary stasis across 19,117 mammalian genes. (A) Distribution of maximal stasis significance. Isolated ESAs in variable genes reach EBF values (> 106). (B) Detection Sensitivity vs. Depth. Signals of evolutionary stasis are negligible in shallow phylogenies (T < 1) and peak in phylogeneies of moderate depth (T = 1–5). (C) Selective Hierarchy. Absolute sequence constraint (α, β ≈ 0) provides a more powerful signal of deviation from expectation than synonymous-only constraint.\", \"page\": 12, \"index\": 12, \"width\": 1054, \"height\": 337}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-013.webp\", \"caption\": \"Figure 2: Structural mapping of invariant sites in HIV-1 Reverse Transcriptase (PDB: 1RTD) with a global view of B-STILL inferred invariant residues (red spheres) projected onto the RT heterodimer.\", \"page\": 9, \"index\": 13, \"width\": 1052, \"height\": 494}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-014.webp\", \"caption\": \"Figure 8: Distribution of Evolutionary Stasis Anchor significance (EBF) across 815 uncharacterized mammalian ORFs. The heavy-tailed distribution highlights a subset of sites under extreme constraint in the dark proteome.\", \"page\": 20, \"index\": 14, \"width\": 740, \"height\": 373}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-015.webp\", \"caption\": \"Figure 9: Statistical characterization of 4,888 Evolutionary Stasis Clusters identified across 19,152 mammalian genes.\", \"page\": 20, \"index\": 15, \"width\": 1052, \"height\": 904}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-016.webp\", \"caption\": \"Table 4: Statistically significant Stasis Clusters identified by Hypergeometric scan statistic (10,000 permutations) on FRESCO viral alignments. k represents stasis sites (EBF ≥ 10) in cluster span d.\", \"page\": 16, \"index\": 16, \"width\": 944, \"height\": 917}]"
motivation: 现有方法难以解析进化速率接近零的基因组区域，导致极端净化选择信号被忽略。
method: 提出了层次贝叶斯模型B-STILL，利用密码子替代模型并通过基因级校准与静止半径调整识别极端保守位点。
result: B-STILL识别出数千个“进化静止锚点”（ESAs），准确定位哺乳动物和病毒基因组中的功能域与未表征结构基序。
conclusion: B-STILL为高分辨率基因组注释提供了新途径，使不变位点成为揭示极端净化选择的有效标记。
---

## 摘要
基因组保守性的量化研究已从早期对进化速率的统计建模发展到当前结合系统发育信息的深度学习架构。然而，当进化速率接近“零速率起点”时，仍存在基本的分辨率缺口，在此区域标准的选择推断工具几乎忽略了不变位点中极强纯化选择的信号。我们提出了 B-STILL（Bayesian Significance Test of Invariant Low Likelihoods，贝叶斯不变低似然显著性检验），这是一种层级贝叶斯框架，旨在通过利用基因层面的校准及密码子位点特异的进化机会来解析蛋白编码数据的选择景观。该框架基于计算效率高的密码子替换模型近似，可扩展至包含数千序列的比对。通过在接近零进化速率区域明确调节“停滞半径”，B-STILL 能区分随机不变性与功能约束，识别出“进化停滞锚点”（Evolutionary Stasis Anchors, ESAs），即允许进化变化的上限相对于基因背景在统计上异常的区域。此层级方法提供了功能或结构约束的特征信号，这类信号常常难以通过其他工具检测。与广泛的病原体及临床数据库验证结果一致，ESAs 是生物适应性和疾病潜力的预测指标。综合而言，我们识别出数千个高度聚集的 ESAs，它们精确地描绘了哺乳动物与病毒基因组中已知的功能结构域以及尚未表征的结构基序。这些发现确立了 B-STILL 作为一种可扩展的高分辨率基因组注释统计框架，将原本被忽视的不变基因组及蛋白位点转化为代表极强纯化选择的有效标记，适用于不同生命领域中已表征与未表征的蛋白编码基因。

## Abstract
The quantification of genomic conservation has progressed from foundational statistical modeling of evolutionary rates to state-of-the-art phylogeny-aware deep learning architectures. Yet, a fundamental resolution gap remains whenever evolutionary rates closely approach the "zero-rate origin," where standard selection inference tools will essentially ignore signals of extreme purifying section at invariant genome sites. We present B-STILL (Bayesian Significance Test of Invariant Low Likelihoods), a hierarchical Bayesian framework designed to resolve the selective landscape of protein-coding data by leveraging gene-level calibration and codon-site specific evolutionary opportunity. This framework is based on computationally efficient approximations using codon-substitution models which are scalable to alignments with thousands of sequences. By explicitly tuning the stasis radius around the near-zero evolutionary-rate regime, B-STILL distinguishes between stochastic invariance and functional constraint, identifying Evolutionary Stasis Anchors (ESAs) where the upper bound on permitted evolutionary change is statistically anomalous relative to the background of the gene. This hierarchical approach provides a signature of functional or structural constraint that is often difficult to detect using other tools. Validation against extensive pathogen and clinical databases confirms that ESAs are predictors of biological fitness and disease potential. Collectively, we identified thousands of significantly clustered ESAs that precisely footprint both known functional domains and currently uncharacterized structural motifs in mammalian and viral genomes. These findings establish B-STILL as a scalable statistical framework for high-resolution genomic annotation, ransforming formerly ignored invariant genome and protein sites into informative markers of extreme purifying selection across both well-characterized and uncharacterized protein-coding genes from different domains of life.

---

## 论文详细总结（自动生成）

# 论文总结：Beyond Invariable Sites — 使用进化停滞解析基因组中的深层进化约束

---

## 一、研究动机与背景

- **核心问题**：传统的进化建模与选择压力推断方法（如 dN/dS 模型、LRT 或 phyloP）在进化速率接近“零速率”时失效，即难以区分真性功能约束的不变位点与由随机因素造成的表面不变性。  
- **研究动机**：
  - 大多数系统发育模型在速率趋于零的区域没有统计分辨力，导致极强净化选择（extreme purifying selection）在基因组注释中被忽略。  
  - 许多疾病相关变异恰位于这些高度约束区域，因此识别这类位点对理解序列功能、疾病致病机制与分子演化均至关重要。  
- **研究目标**：建立一种能在“接近零进化速率”区域实现统计区分的新型推断框架，以刻画病毒与哺乳动物基因组中多层进化约束的空间分布。

---

## 二、方法论：B-STILL 框架

### 1. 核心思想
- **方法名称**：B-STILL（Bayesian Significance Test of Invariant Low Likelihoods）。  
- **主要思想**：
  - 将传统的“是否变异”推断转化为“在给定基因背景下，局部速率是否显著低于可进化上限”的贝叶斯显著性问题。
  - 通过层次贝叶斯模型建模 **基因层级的进化速率先验** 与 **位点层级的后验更新**。
  - 定义并检测所谓的**进化静止锚点（Evolutionary Stasis Anchors, ESAs）**：其 posterior 概率质量集中于(α≈0, β≈0) 的位点。

### 2. 核心建模机制
- **输入数据**：多序列比对（nucleotide/codon level）与已知系统发育树。
- **模型特征**：
  - 基于 **密码子替代模型（codon-substitution model）** 的速率近似（按 α：同义替代率，β：非同义替代率区分）。
  - **基因级校准**（gene-level calibration）：通过全基因的速率分布设定先验，避免跨基因比较偏差。
  - **静止半径（stasis radius）**：定义接近零速率的概率阈值，用于分辨“停滞”信号与噪音。
  - **经验贝叶斯因子（EBF）** 用于量化每个位点的“停滞显著性”，并以此定义 Proximal/Absolute stasis。
- **推断流程（简化）**：
  1. 对基因范围计算 α、β 的先验分布；
  2. 对每个位点计算速率的后验分布；
  3. 统计 posterior 密度在(0,0)邻域内的集中度 → 计算 EBF；
  4. EBF≥阈值的位点定义为 ESA；
  5. 对 ESA 进行聚类（Stasis Clusters），分析其分布特征及功能富集。

---

## 三、实验设计

### 1. 数据与应用场景
- **模拟实验**：1800 个模拟数据集（包含不同进化深度与 ESA 注入密度）。
- **实际数据**：
  - 病毒基因组（如 HIV-1 Reverse Transcriptase、脑炎病毒包膜蛋白等）。
  - 哺乳动物蛋白编码基因（约 19,000 基因）。
  - 临床变异数据库（ClinVar、REVEL）与人群变异数据库（gnomAD）。
  - 未表征蛋白（dark proteome）分析，共 815 个 ORFs。

### 2. 基线与对比方法
- **主要对比**：
  - Frequentist LRT（似然比检验）对不变位点无区分力。
  - phyloP / phyloFit 等经典保守性评分。
- **验证关系**：
  - 与临床致病性评分（REVEL）关联（ρ ≈ 0.6）。
  - 与群体变异频谱 (gnomAD) 相关。
  - 与已知结构域或蛋白结构中心的空间聚集显著对应。

---

## 四、资源与算力

- **论文中未明确说明具体算力配置**（如 GPU 型号、训练时长等）。
- 根据方法特征推断，该贝叶斯推断框架为可并行化的 CPU 任务，支持数千序列规模的比对分析，可能使用高性能计算节点（HPC cluster）。但无直接量化指标。

---

## 五、实验数量与充分性

- **模拟与实测实验共约数千组**：
  - 1800 组模拟测试（Table 2, Figure 3）。
  - 约 19,000 捕获基因、815 未注释 ORF、4888 Stasis Clusters。
  - 临床与群体验证实验 3 组（ClinVar, gnomAD, REVEL）。
- **实验全面性**：
  - 包含病毒与哺乳动物双领域。
  - 同时进行结构、功能与临床层面的交叉验证。
- **客观性**：引用多个权威数据库，统计显著性控制（如 FDR、多重检验校正），整体设计较为严格。

---

## 六、主要结论与发现

1. **B-STILL 能在接近零速率区间保持统计分辨率**，可区分随机不变与功能约束。  
2. **识别出数千个 ESA**，这些位点在结构与功能上表现出明显富集：  
   - 对应已知结构域、蛋白交互枢纽、调控元素。  
   - 亦揭示未注释的高约束结构（dark proteome 区域）。
3. **临床验证**：ESA 显著富集致病突变（REVEL≥0.7 区间），AUROC 高达 0.88（同义变异）。
4. **对病毒基因组分析**揭示其重叠编码区存在高密度 Stasis Clusters。
5. **宏观意义**：建立了一种连接深时演化约束与现代变异功能的统计框架，为精准基因注释与疾病变异风险评估提供新工具。

---

## 七、优点与创新点

- **创新性统计框架**：首次在贝叶斯层次模型中显式定义“零速率解析半径”。
- **可扩展性强**：计算复杂度可控，可处理上千序列的密码子比对。
- **多层验证**：从模拟→基因组→病理三层面均有一致信号。
- **功能揭示力强**：检测出传统工具遗漏的极端净化选择区域。
- **应用广泛**：适用于病毒、哺乳动物甚至未注释蛋白基因组。

---

## 八、不足与局限

- **计算代价仍较高**：虽然较现有贝叶斯推断优化，但应用至全基因组仍需显著计算资源。
- **无算力细节描述**：复现性受限，尚待开源实现或Benchmark。
- **模型假设依赖性强**：对系统发育树的拓扑与分歧时间敏感，若输入树偏差可能影响 EBF 判断。
- **临床验证覆盖有限**：尽管与 ClinVar、REVEL 对齐，但体细胞突变等情境未验证。
- **对非编码区未扩展**：当前方法聚焦于蛋白编码序列，对调控元件的适配需后续拓展。

---

**（完）**
