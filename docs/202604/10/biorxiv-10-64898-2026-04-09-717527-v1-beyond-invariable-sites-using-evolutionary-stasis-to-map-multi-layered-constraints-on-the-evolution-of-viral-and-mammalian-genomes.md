---
title: "Beyond Invariable Sites: Using Evolutionary Stasis to Map Multi-Layered Constraints on the Evolution of Viral and Mammalian Genomes"
title_zh: 超越不变位点：利用进化静止性映射病毒与哺乳动物基因组演化的多层约束
authors: "Kosakovsky Pond, S. L., Verdonk, H., Weaver, S., Brown, G., Callan, D., Nekrutenko, A., Martin, D. P."
date: 2026-04-10
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.09.717527v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 绘制病毒和哺乳动物基因组演化的多层约束图谱
tldr: 本研究针对传统进化速率模型无法有效解析近零演化速率位点的问题，提出了B-STILL层级贝叶斯框架，通过对基因层次和密码子位点的演化机会校准，检测并量化极端纯化选择下的功能约束，成功识别病毒与哺乳动物基因组中的功能锚点，为高分辨率基因组注释提供新工具。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-001.webp\", \"caption\": \"Figure 3: B-STILL performance summary across 1,800 simulated datasets. (A) Detection power (TPR) as a function of absolute tree length (at 5% injected ESA density). Sensitivity scales log-linearly with total substitution count, reaching nearsaturation in deep phylogenies (T > 5). (B) Power vs. Anchor Density. Power decreases as the proportion of ESAs increases in marginal signal regimes (e.g., Encephalitis Virus Envelope and Mammalian Beta-globin), reflecting the adaptation of the Bayesian prior to a more evolutionarily stagnant background. (C) FPR control remains robustly below 1% across all datasets. (D) Significance vs. Codon Redundancy. Absolute stasis is statistically more significant at redundant codons.\", \"page\": 11, \"index\": 1, \"width\": 1052, \"height\": 819}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-002.webp\", \"caption\": \"Figure 6: Genome-scale concordance between B-STILL inferred evolutionary stasis and REVEL pathogenicity scores (N = 34, 206 positions). The X-axis groups variants into four discrete stasis categories based on site-level EBFprox. The left Y-axis (blue boxplots) shows the distribution of continuous REVEL scores for each category, with the sample size (N) indicated at the bottom. The right Y-axis (red line) tracks the pathogenicity rate, defined as the percentage of variants within each category exceeding the high-confidence REVEL threshold (≥ 0.70). ρ represents the Spearman rank correlation coefficient, demonstrating an alignment between deep-time sequence constraint and modern clinical consensus.\", \"page\": 15, \"index\": 2, \"width\": 740, \"height\": 516}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-003.webp\", \"caption\": \"Figure 10: Three-dimensional structural hub of Evolutionary Stasis Anchors in the uncharacterized protein FAM214A. Residues are colored by B-STILL significance (log10 EBF ), with significant anchors (EBF ≥ 100) shown as red spheres. We identified a significant Stasis Cluster comprising nine Evolutionary Stasis Anchors centered at residue 1038 (p < 10−4, permutation test), likely demarcating a structural or interaction hub in this poorly characterized ORF.\", \"page\": 21, \"index\": 3, \"width\": 844, \"height\": 844}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-004.webp\", \"caption\": \"Figure 1: Bayesian resolution of evolutionary stasis in HIV-1 Reverse Transcriptase. (A) The gene-wide prior distribution of synonymous (α) and non-synonymous (β) substitution rates, representing the average selective landscape across the entire gene. (B) The posterior distribution for site 116, showing the concentration of probability mass at the (0, 0) origin. This transition from a broad prior to a peaked posterior at the origin is the hallmark signature of an Evolutionary Stasis Anchor.\", \"page\": 7, \"index\": 4, \"width\": 1052, \"height\": 454}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-005.webp\", \"caption\": \"Figure 11: Comparative resolution of B-STILL Proximal Stasis EBF vs. nucleotide-level conservation (phyloP) across 38 mammalian genes. (Left) Correlation with the maximum phyloP score per codon (ρ = 0.19). The visible “0/0 plateau” represents the resolution ceiling of frequentist Likelihood Ratio Tests (LRTs), which assign an identical significance score to all invariant sites, failing to distinguish between stochastic invariance and functional constraint. (Right) Correlation with the minimum phyloP score per codon (ρ = 0.35). The stronger alignment with the least-conserved position indicates that B-STILL EBFs effectively filter out genetic-code artifacts—where positions are invariant solely due to codon-structure constraints—identifying functional anchors with higher specificity.\", \"page\": 22, \"index\": 5, \"width\": 1052, \"height\": 479}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-006.webp\", \"caption\": \"Table 2: Summary of B-STILL performance across 900 simulation replicates (50 per Gene/Scenario combination). Scenario A represents the neutral null model; Scenario B evaluates extreme purifying selection (ω = 0.1) at all sites; Scenario C tests sensitivity under reduced evolutionary depth (0.5× tree scaling).\", \"page\": 10, \"index\": 6, \"width\": 610, \"height\": 479}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-007.webp\", \"caption\": \"Figure 5: Clinical validation of B-STILL Empirical Bayes Factors using pathogenic and benign variants from ClinVar. (Left) Aggregate ROC curve for non-synonymous variants (AUROC = 0.65), using EBFprox as the predictor. (Right) Aggregate ROC curve for synonymous variants (AUROC = 0.88) using EBFsyn. The True Positive Rate (TPR) represents the proportion of clinically confirmed pathogenic variants correctly identified as Evolutionary Stasis Anchors, while the False Positive Rate (FPR) denotes the proportion of confirmed benign variants incorrectly flagged. These results demonstrate that Evolutionary Stasis Anchors are a powerful and specific predictor of clinical pathogenicity, particularly for synonymous regulatory variation.\", \"page\": 14, \"index\": 7, \"width\": 1054, \"height\": 442}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-008.webp\", \"caption\": \"Table 3: Validation of B-STILL Proximal EBFs against human population variation (gnomAD v4.1). ρ represents the Spearman correlation between site-level EBF and the sum of allele frequencies at that site. Top 20 genes by correlation magnitude are shown.\", \"page\": 13, \"index\": 8, \"width\": 368, \"height\": 419}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-009.webp\", \"caption\": \"Table 1: Sites in HIV-1 RT inferred to be under significant proximal constraint (EBF ≥ 10). α and β represent the mean posterior synonymous and non-synonymous rates, respectively.\", \"page\": 8, \"index\": 9, \"width\": 790, \"height\": 715}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-010.webp\", \"caption\": \"Figure 7: Mapping of B-STILL Stasis Clusters to annotated viral gene overlaps. Horizontal tracks indicate RefSeq overlaps (black lines) and statistically significant Stasis Clusters (dark gray rectangles).\", \"page\": 19, \"index\": 10, \"width\": 1052, \"height\": 1198}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-011.webp\", \"caption\": \"Table 5: Top 20 functional protein features significantly enriched for B-STILL Stasis Clusters across the mammalian exome. Enrichment scores were calculated relative to the genomic background via Fisher’s Exact Test; all listed features exhibit p < 10−50 after multiple testing correction.\", \"page\": 17, \"index\": 11, \"width\": 948, \"height\": 485}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-012.webp\", \"caption\": \"Figure 4: Patterns of evolutionary stasis across 19,117 mammalian genes. (A) Distribution of maximal stasis significance. Isolated ESAs in variable genes reach EBF values (> 106). (B) Detection Sensitivity vs. Depth. Signals of evolutionary stasis are negligible in shallow phylogenies (T < 1) and peak in phylogeneies of moderate depth (T = 1–5). (C) Selective Hierarchy. Absolute sequence constraint (α, β ≈ 0) provides a more powerful signal of deviation from expectation than synonymous-only constraint.\", \"page\": 12, \"index\": 12, \"width\": 1054, \"height\": 337}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-013.webp\", \"caption\": \"Figure 2: Structural mapping of invariant sites in HIV-1 Reverse Transcriptase (PDB: 1RTD) with a global view of B-STILL inferred invariant residues (red spheres) projected onto the RT heterodimer.\", \"page\": 9, \"index\": 13, \"width\": 1052, \"height\": 494}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-014.webp\", \"caption\": \"Figure 8: Distribution of Evolutionary Stasis Anchor significance (EBF) across 815 uncharacterized mammalian ORFs. The heavy-tailed distribution highlights a subset of sites under extreme constraint in the dark proteome.\", \"page\": 20, \"index\": 14, \"width\": 740, \"height\": 373}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-015.webp\", \"caption\": \"Figure 9: Statistical characterization of 4,888 Evolutionary Stasis Clusters identified across 19,152 mammalian genes.\", \"page\": 20, \"index\": 15, \"width\": 1052, \"height\": 904}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-09-717527-v1/fig-016.webp\", \"caption\": \"Table 4: Statistically significant Stasis Clusters identified by Hypergeometric scan statistic (10,000 permutations) on FRESCO viral alignments. k represents stasis sites (EBF ≥ 10) in cluster span d.\", \"page\": 16, \"index\": 16, \"width\": 944, \"height\": 917}]"
motivation: 现有基因组保守性分析工具在处理极端纯化选择导致的近零演化速率位点时存在分辨率缺陷。
method: 提出了B-STILL，一个基于层级贝叶斯模型的框架，用于分析接近零演化速度区域的选择压力。
result: B-STILL能区分随机不变性与功能约束，识别出预测生物适应性和疾病潜力的进化静止锚点。
conclusion: B-STILL有效拓展了基因组保守性分析的分辨能力，将被忽视的不变位点转化为揭示重要功能约束的信息标记。
---

## 摘要
基因组保守性的量化研究已经从早期的进化速率统计建模发展到当前最先进的、考虑系统发育信息的深度学习架构。然而，当进化速率接近“零速率原点”时，仍然存在一个基本的分辨率差距，此时标准的选择推断工具会基本忽略在不变基因组位点上极端净化选择的信号。我们提出了 B-STILL（Bayesian Significance Test of Invariant Low Likelihoods，即不变低似然贝叶斯显著性检验），这是一个层级贝叶斯框架，旨在通过利用基因层级校准和密码子位点特异的进化机会来解析蛋白编码数据的选择性景观。该框架基于计算高效的密码子替代模型近似，具有可扩展性，可应用于包含成千上万序列的比对数据。通过在近零进化速率范围内显式调整“静止半径”，B-STILL 可以区分随机不变性与功能约束，识别出进化静止锚点（Evolutionary Stasis Anchors, ESAs），其中允许的进化变化上限相对于基因背景而言具有统计异常性。该层级方法能够提供功能或结构约束的特征，这在其他工具中往往难以检测。通过与广泛的病原体和临床数据库进行验证，我们确认 ESAs 是生物适应性和疾病潜力的预测因子。总体而言，我们鉴定了数千个显著聚集的 ESAs，这些 ESAs 精确地标注了哺乳动物和病毒基因组中既有的功能域以及尚未表征的结构基序。这些发现确立了 B-STILL 作为一种可扩展的统计框架，用于高分辨率的基因组注释，将过去被忽视的不变基因组和蛋白质位点转化为跨生命不同领域的极端净化选择的有信息标记。

## Abstract
The quantification of genomic conservation has progressed from foundational statistical modeling of evolutionary rates to state-of-the-art phylogeny-aware deep learning architectures. Yet, a fundamental resolution gap remains whenever evolutionary rates closely approach the "zero-rate origin," where standard selection inference tools will essentially ignore signals of extreme purifying section at invariant genome sites. We present B-STILL (Bayesian Significance Test of Invariant Low Likelihoods), a hierarchical Bayesian framework designed to resolve the selective landscape of protein-coding data by leveraging gene-level calibration and codon-site specific evolutionary opportunity. This framework is based on computationally efficient approximations using codon-substitution models which are scalable to alignments with thousands of sequences. By explicitly tuning the stasis radius around the near-zero evolutionary-rate regime, B-STILL distinguishes between stochastic invariance and functional constraint, identifying Evolutionary Stasis Anchors (ESAs) where the upper bound on permitted evolutionary change is statistically anomalous relative to the background of the gene. This hierarchical approach provides a signature of functional or structural constraint that is often difficult to detect using other tools. Validation against extensive pathogen and clinical databases confirms that ESAs are predictors of biological fitness and disease potential. Collectively, we identified thousands of significantly clustered ESAs that precisely footprint both known functional domains and currently uncharacterized structural motifs in mammalian and viral genomes. These findings establish B-STILL as a scalable statistical framework for high-resolution genomic annotation, ransforming formerly ignored invariant genome and protein sites into informative markers of extreme purifying selection across both well-characterized and uncharacterized protein-coding genes from different domains of life.

---

## 论文详细总结（自动生成）

# 论文总结：超越不变位点——利用进化静止性映射病毒与哺乳动物基因组的多层演化约束

---

## 一、核心问题与研究背景

- **问题定位**：传统的基因组保守性分析方法（如 phyloP、GERP++ 等）在处理“几乎不发生变异”的位点时分辨率不足——当进化速率接近零时，常规似然比检验（LRT）会出现显著性饱和，无法区分随机不变性与真正的功能性约束。
- **研究动机**：这些“不变位点”往往反映最强烈的净化选择，是维持蛋白质和基因组功能的关键锚点。但由于现有模型忽略其统计异常性，相关功能被隐藏。
- **总体目标**：构建一种能在“零演化速率邻域”内保持分辨力的统计框架，以揭示基因组中多层次的功能与结构约束，给出精确的“进化静止锚点（Evolutionary Stasis Anchors, ESAs）”图谱。

---

## 二、方法论：B-STILL 框架

### ✦ 核心思想
- 提出 **B-STILL（Bayesian Significance Test of Invariant Low Likelihoods）** 层级贝叶斯模型，用于量化极端净化选择导致的序列静止。
- 方法通过结合 **基因级别校准** 与 **密码子位点的演化机会（synonymous/non-synonymous rates）**，计算某位点“保持不变”相对于基因整体变异背景的统计惊异度。

### ✦ 技术机制与公式主线
1. **基础模型**：基于 **Muse–Gaut (MG94) 密码子替代模型**，整合一般可逆核苷酸替代矩阵（REV）。
   - 每个密码子替换率定义为：  
     \( q_{ij} = αθ_{ni,nj}π_{nj} \)（同义）或 \( βθ_{ni,nj}π_{nj} \)（非同义）。
2. **贝叶斯推断模块（FUBAR 式固定网格）**：
   - 在固定的 α–β 二维网格上求似然并估计基因全局先验分布。
   - 使用变分贝叶斯（VB0）或 Collapsed Gibbs 采样估计后验权重。
3. **近零速率敏感化处理**：
   - 采用 **二次密集网格分布** 把近零区域分辨率拉高，用以区分真正的“静止”与“随机不变”。
4. **主要统计量：经验贝叶斯因子 (EBF)**  
   \[
   EBF(S) = \frac{P(S|D)/(1-P(S|D))}{P(S)/(1-P(S))}
   \]
   - 表示“观察数据中静止状态的后验惊异程度”。
   - 默认聚焦“Proximal Stasis”（近零演化半径）指标来判断极端约束位点。
5. **区域聚类检测（Hypergeometric Scan Statistic）**：
   - 非参数统计框架，用超几何分布计算局部 ESA 密度的显著性。
   - 通过 10,000 次随机置换控制基因级别家族错误率（FWER）。

### ✦ 区别于传统模型：
- 不像 PHAST（phastCons）那样基于隐藏马尔可夫模型平滑区域，而是通过离散点过程模型直接定位高密度 ESA 区域。
- 提供从单个位点到连续结构域的层级约束评估。

---

## 三、实验设计

### ✦ 数据集与场景
- **模拟数据**：基于 6 个实际基因的系统发育树（HIV-1 RT、RuBisCO、SARS-CoV-2 Spike、β-球蛋白、Camelid VHH、脑炎病毒包膜）生成 1800 个序列数据集，用于灵敏度与功效测试。
- **真实数据**：
  - 大规模分析：19,117 个哺乳动物蛋白编码基因（共约 1100 万个密码子）来自 120 种哺乳动物基因组比对。
  - 临床验证集：38 个含已知致病同义变异的基因（ClinVar、HGMD）。
  - “暗蛋白组”（Dark Proteome）：815 个结构功能未知的 ORFs。
  - 病毒对照：111 个来自 FRESCO 数据集的病毒基因（包含重叠阅读框结构）。
  - 人群数据验证：gnomAD v4.1.1、ClinVar、REVEL。

### ✦ 对比方法
- **主要对比基线**：phyloP（基于核苷水平的保守性 LRT）。
- 额外参考：FRESCO、phastCons 等传统保守性框架。

### ✦ 验证任务
- 灵敏度/特异性评估（TPR/FPR）；
- 临床变异预测效能（AUROC）；
- 与 REVEL 病理评分的相关性（Spearman ρ）。

---

## 四、资源与算力

- 文中明确报告：  
  - 在 **Ampere Altra 3.0GHz ARM64 集群**上完成对 19,152 基因的全扫描，消耗 **约 422 CPU 小时**。
  - 平均处理速率：**19.52 个密码子/秒/核**。  
- 未使用 GPU 或深度学习加速；方法为传统统计推断，全为 CPU 运算。

---

## 五、实验数量与充分性

- **模拟实验**：共 1800 个场景 × 90 演化情境 × 10 重复 → 充分覆盖不同进化深度与演化速率。
- **真实数据分析**：  
  - 哺乳动物全基因组级别（>千万人次位点）；
  - 疾病验证数据与病毒检测均包含数百至数千个样本；
  - 置换检验控制 FWER。  
- **公平性与客观性**：
  - 比较方法使用相同对齐与树结构。
  - 严格筛选高置信度临床变异（无冲突提交者）。

结论：实验范围广、指标客观、统计校正充分，结果可信度高。

---

## 六、主要结论与发现

- B-STILL 有效区分：
  - 由密码子结构导致的“表观不变”；
  - 与功能有关的“真正静止约束”。
- **识别结果**：
  - 全基因组共检测到 15 万余个显著 ESA（约占 1.38% 的密码子）。
  - 发掘出 4888 个显著的 “Stasis Clusters” 区域。
- **生物学发现**：
  - 在 HIV-1 RT、病毒重叠阅读框与哺乳动物基因中精确定位功能域。
  - 同义位点的进化静止能预测临床致病突变（AUROC≈0.88）。
  - “暗蛋白组”中发现显著的三维结构锚，如 FAM214A 中的结构中心（p < 10⁻⁴）。
- **理论贡献**：
  - 打破传统 LRT 的“0/0显著性天花板”。
  - 为无表型、无结构数据的区域提供进化功能注释。

---

## 七、优点与亮点

- **方法创新**：
  - 层级贝叶斯 + 密集近零网格，量化“进化静止”统计显著性。
  - 使用基因级 prior 自动自适应不同演化深度，避免过度显著。
- **高可扩展性**：
  - 计算高效，可处理千序列、百万位点数据。
- **临床与功能相关性**：
  - 可揭示同义功能约束，对基因调控和疾病预测敏感度显著提升。
- **解释性强**：
  - 相比黑箱式 AI 模型，B-STILL 提供可追溯的进化解释路径。

---

## 八、不足与局限

- **模型限制**：
  - 仅基于编码序列的密码子取样；对非编码序列（调控区）不适用。
- **数据依赖**：
  - 对深度系统发育树敏感；浅树（如 SARS-CoV-2）检测力较低。
- **功能验证有限**：
  - 对“暗蛋白组”发现的 ESAs尚无实验验证。
- **未结合结构统计模型或生化能量函数**：
  - 对蛋白动力学和突变效应的物理解释仍需后续整合。
- **非 GPU 实现**：
  - 尽管计算高效，但不具备适应更大多基因组深度网络的 GPU 扩展优势。

---

**（完）**
