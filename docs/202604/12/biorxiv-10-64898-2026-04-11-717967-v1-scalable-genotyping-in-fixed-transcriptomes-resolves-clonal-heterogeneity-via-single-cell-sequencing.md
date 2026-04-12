---
title: Scalable genotyping in fixed transcriptomes resolves clonal heterogeneity via single-cell sequencing
title_zh: 固定转录组中的可扩展基因分型通过单细胞测序解析克隆异质性
authors: "Blattman, S. B., Maslah, N., Varela, A. A., Kumpaitis, K., Nalbant, B., Snopkowski, C., Mariani, M., Kida, L. C., Takizawa, M., Ratnayeke, N., Yu, K. K. H., Fernandes, S., Mousavi, N., Borgstrom, E., Vallejo, D., Boghospor, L., Xin, R., Mignardi, M., Wu, S., Scarlott, N., Delgado-Rivera, L., Kumar, P., Krishnan, S., Giraudier, S., Kiladjian, J.-J., Howitt, B. E., Kohlway, A., Lund, P., Pe'er, D., Chaligne, R., Lareau, C. A."
date: 2026-04-12
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.11.717967v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 单细胞中可扩展的基因分型和遗传变异检测
tldr: 本研究提出了名为GIFT的单细胞检测技术，可同时获得基因型与转录组信息，在骨髓增生性肿瘤中解析克隆异质性。该方法精确且可扩展，揭示了突变相关造血反应和疾病分化机制。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-11-717967-v1/fig-001.webp\", \"caption\": \"Figure 4. Cohort-scale profiling of myeloproliferative neoplasms with GIFT. a, Overview of MPN cohort. CD34+ peripheral blood cells from 35 patients and 2 healthy controls were profiled by GIFT. b, Number of targets and cells genotyped in primary samples with GIFT or three alternative approaches14,24,50. c–e, UMAP of patient-integrated scVI55 latent space, including all patients and controls, colored by cell type (c), total gene expression counts per cell (d) or number of captured GIFT targets (e). HSC, hematopoietic stem cell; MEP, megakaryocyte–erythroid progenitor; MPP, multipotent progenitor; GMP, granulocyte-monocyte progenitor; MK, megakaryocyte; CLP, common lymphoid progenitor; pDC, plasmacytoid dendritic cell; cDC, conventional dendritic cell. f, VAF measured by GIFT is highly correlated with bulk VAF in whole blood (ρ, Spearman correlation). Variants are shown only if expected from bulk (n = 138). Genes are labeled when more than 3 mutations in that gene are seen across patients. g, Proportion of cells (from all cell types) genotyped for JAK2 by GIFT ( 1 GIFT count) and two GoT-like approaches24,50. GIFT capture is significantly higher than ≥ alternatives24 (p = 0.0004, one-sided Mann-Whitney U). Error bars, s.d. across patients (n = 1 [Nam8], 7 [Van Egeren24], 37 GIFT—this study). HSPC, hematopoietic stem and progenitor cell. h, Proportion of cells genotyped for JAK2 by GIFT is highly correlated with JAK2 expression (Spearman’s ρ = 0.93, n=215 patient/cell type combinations).\", \"page\": 15, \"index\": 1, \"width\": 1129, \"height\": 839}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-11-717967-v1/fig-002.webp\", \"caption\": \"Figure 3. GIFT resolves somatic evolution in archival tissue. a, Human glioblastoma (GBM) FFPE tissue was subjected to nuclei extraction and multiple candidate decrosslinking conditions. b, Gene expression UMIs per cell for different decrosslinking (dcl) temperatures. Line denotes median; box denotes interquartile range; whiskers extend to 1.5x interquartile range. Conditions were compared in a single 4-plex experiment. c, Decrosslinking at 80°C increases GIFT counts per cell (p = 6.9*10-62, one-sided Wilcoxon test, n = 374). Gene-matched control probes containing the GIFT PCR handle but no gap are shown for comparison. FC, fold change. d, UMAP embedding of gene expression states from the 80°C decrosslinking library colored by cell type annotation (n = 11,192 cells). NPC, neural progenitor cell; AC, astrocyte; MES, mesenchymal; OPC, oligodendrocyte progenitor cell. e, (Pseudo)bulk variant allele frequencies (VAF) of mutations profiled from the cells in d. f, Genotype calls for major tumor-associated variants. The number of cells genotyped for each\", \"page\": 14, \"index\": 2, \"width\": 1129, \"height\": 606}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-11-717967-v1/fig-003.webp\", \"caption\": \"Figure 2. Scalable and accurate genotyping enabled by GIFT. a–d, GIFT profiling of 611 multiplexed targets in four mixed cell lines (n = 20,512 cells). a, UMAP embedding showing that each cell type clusters distinctly by gene expression. b, UMAP colored by number of detected genes per cell for gene expression assay (WTA, whole-transcriptome amplicon probe set). c, Relationship between number of GIFT loci genotyped per cell and number of genes detected per cell by WTA; ρ, Spearman correlation across all cells. d, Comparison of GIFT and GoT8 genotyping efficiencies. x-axis shows counts for the best-captured target in each dataset. e–g, Comparison of gapfilling and dual probes with WT and mutant alleles on the left-hand side (LHS) or right-hand side (RHS) probes in three mixed cell lines. e, Thirty variants were tested across the cell lines using the three methods. f, Percent of genotyping counts (UMIs) that are correct for each target by method (n = 30 targets per boxplot; *** p < 0.0005, * p < 0.05, one-sided Wilcoxon test). Heterozygous cells are excluded from accuracy calculations. Line denotes median; box denotes interquartile range; whiskers extend to 1.5x interquartile range. g, Top: UMAP embedding of a representative variant, colored by Dual LHS or GIFT genotypes (n = 11,187 genotyped cells by dual probes; n = 8,283 genotyped cells by GIFT). Bottom: Genotyping accuracy by dual probes, only considering cells with a genotype call. Numbers on stacked bars indicate the percent of cells with the correct call.\", \"page\": 13, \"index\": 3, \"width\": 1129, \"height\": 629}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-11-717967-v1/fig-004.webp\", \"caption\": \"Figure 6. Lineage reconstruction in transforming MPN. a,b, UMAP of an individual MPN patient colored by GIFT-called genotypes for 4 different variants (a) or cell type (b). HSC, hematopoietic stem cell; MEP, megakaryocyte–erythroid progenitor; MPP, multipotent progenitor; GMP, granulocyte-monocyte progenitor; Early Ery, early erythroid; MK, megakaryocyte. c, Cell type fractions by cell genotype. Error bars, s.e.m. (n = 1-4,643 cells per condition). Colors correspond to the legend in b. TP53 c.818G>A and CALR c.1150_1154delinsTGTC genotypes are classified as mut/mut or mut/wt, including only cells with pgenotype > 0.9. ZRSR2 c.883C>T and EZH2 c.2054G>A genotypes are classified as mut/ (mut/mut or mut/wt) with pgenotype > 0.6. d, Left: phylogeny inferred by PICASSO41. Right: UMAP colored by clone assignments. Grey populations could not be confidently assigned to a clone. e, Top: GIFT genotyping of NRAS c.35G>A. Bottom: NRAS c.35G>A mutation is enriched in clone A, which is the source of leukemic blast cells. We add E as an emerging clone defined by NRAS mutation. f, Differential expression57 in HSCs of clones A, C, and D relative to each other. The most significantly enriched pathways are shown for each clone, highlighting top pathway genes. Genes on chr5q, chr13q, and chr18 are colored to show effects of inferred CNVs. g, Normalized enrichment scores58 for significantly enriched pathways in HSCs of each clone (FDR <0.1). Grey boxes indicate no significant enrichment (FDR >0.1).\", \"page\": 17, \"index\": 4, \"width\": 1129, \"height\": 816}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-11-717967-v1/fig-005.webp\", \"caption\": \"Figure 1. Gap-filling enables genotyping in addition to single-cell transcriptomic profiling at scale. a,\", \"page\": 12, \"index\": 5, \"width\": 1129, \"height\": 552}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-11-717967-v1/fig-006.webp\", \"caption\": \"Figure 5. GIFT genotyping reveals impact of JAK2 mutation in MPN patients. a,b, UMAP of genotype-unaware latent space ( ) generated by MrVI27 for 9 MPN patients selected for having a low fraction 𝑢 of heterozygous cells, colored by cell type (a) or JAK2 V617F genotype (b). Only non-heterozygous cells with 1 GIFT count are included (n = 45,174 cells). c, Differential abundance of JAK2 V617F by cell type. JAK2 ≥\", \"page\": 16, \"index\": 6, \"width\": 1129, \"height\": 860}]"
motivation: 现有单细胞技术难以在同一细胞中大规模关联转录状态与体细胞突变，亟需新方法解决此瓶颈。
method: 研究团队通过设计DNA探针间的缺口填充反应实现基因型条码化，并结合单细胞测序平台开展大规模分析。
result: 研究通过单细胞测序对35位骨髓增生性肿瘤供体的70多万个细胞进行分析，揭示了特定突变驱动下的造血反应和细胞状态差异。
conclusion: GIFT显著提升了基因型与表型关联分析能力，为复杂疾病的单细胞解析提供了新工具。
---

## 摘要
单细胞转录组学彻底革新了我们对异质性细胞群体的理解。然而，广泛应用的平台的技术局限性限制了我们在大规模上将转录状态与同一细胞中的体细胞突变联系起来的能力。在此，我们引入了一种用于固定转录组中的基因分型的新方法——Genotyping in Fixed Transcriptomes (GIFT)，该方法可在单细胞水平上同时检测数百个特定靶向遗传变异并获取全转录组信息。GIFT 的核心创新是一种经过合理设计的缺口填充反应，发生在相邻的单链 DNA (ssDNA) 探针之间，将条形码引入原始转录序列，从而实现高度特异性的靶向突变检测。GIFT 实现了超过 99% 的基因分型准确率，并可灵活地在每个细胞中捕获数百种突变，包括在 FFPE（甲醛固定石蜡包埋）组织中，从而能够在异质性环境中进行克隆谱系追踪。我们通过对来自 35 名骨髓增殖性肿瘤（MPN）供体的超过 70 万个细胞进行分析，展示了 GIFT 的独特可扩展性，揭示了依赖突变的造血系统对与特征性 JAK2V617 突变相关的系统性炎症的反应，包括干扰素相关转录程序的等位基因剂量梯度，以及造血干细胞的转录预激，最终导致疾病状态的分化。总之，GIFT 的独特技术优势使得可以通过克隆谱系追踪并结合全方位细胞状态测量，在单细胞分辨率下直接解析基因型与表型之间的关系。

## Abstract
Single-cell transcriptomics has revolutionized our understanding of heterogeneous cell populations. However, technical limitations of widely-used platforms have limited our ability to link transcriptional states to somatic mutations within the same cells at scale. Here, we introduce Genotyping in Fixed Transcriptomes (GIFT), a novel assay for simultaneous detection of hundreds of targeted genetic variants and whole transcriptome profiles in single cells. The core innovation of GIFT is a rationally designed gapfilling reaction between adjacent single-stranded DNA (ssDNA) probes that barcodes native transcript sequence to enable highly-specific targeted mutation detection. GIFT achieves >99% genotyping accuracy and flexible capture of hundreds of mutations per cell, including in FFPE (Formalin-Fixed Paraffin-Embedded) tissue, enabling clonal lineage tracing in heterogeneous settings. We demonstrate the unique scalability of GIFT by profiling >700,000 cells from 35 donors with myeloproliferative neoplasms (MPN), revealing mutation-dependent hematopoietic responses to systemic inflammation associated with the characteristic JAK2V617 mutation, including an allelic dose gradient of interferon-associated transcriptional programs and transcriptional priming of hematopoietic stem cells that develop into divergent disease states. Together, the unique technical advantages of GIFT enable direct resolution of genotype-to-phenotype relationships via clonal lineage tracing with comprehensive cell state measurements at single-cell resolution.

---

## 论文详细总结（自动生成）

# 固定转录组中的可扩展基因分型（GIFT）论文总结

---

## 1. 研究核心问题与整体意义

- **研究动机**：传统单细胞转录组技术虽能揭示细胞异质性，但无法在同一细胞中同时大规模测定转录状态与体细胞突变。  
- **技术瓶颈**：以往 RNA 级别的突变分型方法只能检测极少数（1–3）突变位点，且需依赖活细胞和完整的 mRNA，限制了临床存档样本（如 FFPE）的利用。  
- **研究意义**：本论文旨在开发一种可扩展、精准、兼容固定组织的新型单细胞基因分型平台，使得在单细胞层面直接关联基因型与表型成为可能，对肿瘤演化、克隆异质性及疾病分化具有深远意义。

---

## 2. 方法论：核心思想与关键技术细节

### 核心思想
- **方法名称**：Genotyping in Fixed Transcriptomes（GIFT）  
- **基本框架**：在 10x Genomics 的 Single Cell Gene Expression Flex 技术基础上改造，加入“缺口填充（gapfilling）”反应，以 ssDNA 探针对 RNA 分子的原生序列进行定向测序和突变识别。

### 技术细节
- **探针设计**：
  - 使用两条相邻单链 DNA 探针（LHS 与 RHS）分别杂交到 RNA 上，在二者间留下若干个碱基的“缺口”；
  - 通过非链置换的 DNA 聚合酶 IV（来源于 *Sulfolobus* 属）进行缺口填充，使该间隙区的原生序列被复制并带有单细胞条形码。
- **反应优化**：
  - 添加 **Betaine** 以提升 GC 丰富区域的扩增效率，提升基因型分子回收率约 60%；  
  - 对固定样本引入 **高温脱交联（decrosslinking）** 步骤，显著恢复 RNA 可及性。
- **算法处理**：
  - 自研软件 **giftwrap** 用于解析测序数据（提取条形码、UMI、探针及间隙序列）；  
  - 开发 **概率性基因型推断模型**，分四步计算：
    1. 估计 PCR 模板交换概率；  
    2. 定义有效突变特征集合；  
    3. 基于编辑距离计算每个 gapfill 序列的可能来源；  
    4. 整合所有 UMI 计算细胞层面的突变概率。
  - 同步使用深度生成模型 **MrVI**（改进自 scVI）进行基因型—转录组联合建模，可区分样本差异与突变效应。

---

## 3. 实验设计与对比分析

### 数据与场景
- **细胞系实验**：  
  - 多种混合人类肿瘤细胞系（HEK293T、HeLa、K-562、HEL、SET-2、Jurkat、MCF-7 等）；  
  - 设计 95–611 个突变靶点进行验证。
- **临床样本**：  
  - FFPE 固定的胶质母细胞瘤（GBM）组织样本；  
  - 来自 35 位骨髓增生性肿瘤（MPN）患者及 2 位健康对照的外周血 CD34⁺ 细胞（总计 712,664 个单细胞）。
  
### 对比方法
- **内部 benchmark**：与已有的单细胞基因分型技术比较：
  - **GoT（Genotyping of Transcriptomes）**：传统 RT 扩增法；
  - **GoT-Multi**：双探针扩展法（Dual-probe）。
- **评价指标**：
  - 准确率（accuracy）、单细胞捕获深度、位点覆盖度、转录质量（UMI 数与基因数）；
  - 在 FFPE、空间转录组（Visium HD）、以及大规模患者队列中的适用性。

---

## 4. 资源与算力

- 文中 **未提及 GPU 型号或算力配置**。  
- 表达分析与建模使用开源框架 **Scanpy、PhenoGraph、scVI、mrVI** 等；所有计算似乎在常规高性能计算集群完成，但论文未披露具体节点或时长信息。

---

## 5. 实验数量与充分性

- **实验范围**：
  - 方法开发与化学优化实验：≥5 组（酶筛选、Betaine 添加、Gap 长度测试等）。
  - 可扩展性测试：两轮大规模细胞系（95 位点、611 位点）。
  - FFPE 样本验证：3 位 GBM 患者。
  - 大队列应用：37 份样本（MPN+对照）。
  - 克隆谱系重建与纵向验证：2 位 MPN 患者进行深度分析。
- **实验充分性与客观性**：
  - 对照包括不同技术（Flex、GoT、GoT-Multi），对比指标合理；
  - 多组织类型与样本来源覆盖充分（细胞系、血液、固体肿瘤、存档组织）；
  - 统计检验（Spearman/Willcoxon）与多重复样本验证增加了结论可靠性。

---

## 6. 主要结论与发现

- **技术成果**：
  - GIFT 在单细胞中实现同时检测数百个突变，准确率 >99%，并保持高质量转录数据；
  - 缺口长度最佳为 ≤4bp，Betaine 可显著提升产率；
  - 方法可兼容 FFPE 样本，实现空间和时间分辨的基因分型。
- **生物发现**：
  - 在 MPN 患者中观察到 **JAK2 V617F** 突变导致的等位剂量依赖干扰素-γ反应梯度；
  - 突变造血干细胞表现出转录预激特征，推动不同疾病阶段的分化；
  - 在转化为急性髓系白血病（AML）的患者中，借 GIFT 重建完整克隆谱系，识别到低频 NRAS 亚克隆，可预测病程进展；
  - FFPE 肿瘤样本中成功重构 EGFR 等突变主导的演化分支。

---

## 7. 优点与创新亮点

- **技术创新**：
  - 首次实现固定组织（包括 FFPE）中的单细胞基因分型；
  - 缺口填充策略简单、兼容商业平台、无显著转录损失；
  - 高并行度：百至千位点级别突变可同测；
  - 精确度高，错误率极低，支持概率型突变推定。
- **生物学应用**：
  - 大规模、多患者、单细胞水平的突变表型关联；
  - 可在空间维度实现定位式基因分型；
  - 为肿瘤演化与克隆分化研究提供独特的分辨率。

---

## 8. 不足与局限

- **算力与资源**：论文未说明计算或实验成本，限制了可重复性评估。  
- **方法局限**：
  - 仍依赖 10x Genomics 专有平台；通用性对其他测序体系有限；  
  - Gapfill 长度过长会显著降低效率（>5bp 性能下降）；  
  - 错误建模依赖概率阈值设置，潜在影响假阳性／假阴性；  
  - 对极低表达基因或深度不足的突变位点仍存在抽样偏差。
- **应用限制**：
  - 虽验证 FFPE、血液，但尚未在非人类或大体积组织中展示；
  - 临床数据为探索性，尚未用于真实诊断流程，未来需验证通量与成本可行性。

---

（完）
