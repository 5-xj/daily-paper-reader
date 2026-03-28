---
title: Non-canonical DNA and sequencing challenges in bird genomes
title_zh: 鸟类基因组中的非规范 DNA 与测序挑战
authors: "Smeds, L., Sieg, J. P., Secomandi, S., Lee, C., Sollitto, M., Medico, J. A., Chiaromonte, F., Jarvis, E. D., Formenti, G., Makova, K. D."
date: 2026-03-28
pdf: "https://www.biorxiv.org/content/10.1101/2025.10.17.683159v2.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 鸟类基因组的全面分析
tldr: 本研究首次全面分析了鸟类基因组中的非规范（non-B）DNA基序。通过分析斑胸草雀T2T基因组及其他七种鸟类基因组，发现非B DNA在不同染色体组中分布差异显著，其中点状染色体含量最高且与测序深度负相关。研究还证实了G-四联体在启动子区的富集及其调控潜力，为理解鸟类基因组架构和优化测序策略提供了重要依据。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-683159-v2/fig-001.webp\", \"caption\": \"Figure 1. Examples of non-B DNA structures and their motif landscape in the zebra finch T2T assembly. A\", \"page\": 6, \"index\": 1, \"width\": 979, \"height\": 1114}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-683159-v2/fig-002.webp\", \"caption\": \"Table 1. Experimentally verified common G4s in zebra finch\", \"page\": 15, \"index\": 2, \"width\": 1002, \"height\": 327}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-683159-v2/fig-003.webp\", \"caption\": \"Figure 2. Non-B DNA motif abundance in different chromosome categories in birds. A Overall differences in various non-B DNA motif coverage among macro-, micro-, and dot chromosomes in the diploid zebra finch T2T genome. “All” means all non-B DNA motif types taken together. **P <0.01, ***P <0.001, Wilcoxon test adjusted for multiple testing using FDR. Comparisons marked with ‘ns’ are not significant. Note that the scale on the y-axis is different for each panel. B Examples of non-B DNA motif coverage in 100-kb windows along one zebra finch\", \"page\": 7, \"index\": 3, \"width\": 931, \"height\": 1214}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-683159-v2/fig-004.webp\", \"caption\": \"Figure 3. Non-B DNA motif enrichment and methylation distribution at zebra finch functional regions. A\", \"page\": 10, \"index\": 4, \"width\": 800, \"height\": 1199}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-683159-v2/fig-005.webp\", \"caption\": \"Figure 6. Non-B DNA motif enrichment and sequencing coverage at dot chromosomes. A Enrichment of non-B DNA at the A compartments (euchromatic) and the B compartments (heterochromatic) for the 11 dot chromosomes in zebra finch (averaged across the compartments for each chromosome and haplotype separately) compared to the genome-wide average (red dashed line). Gray lines between violins connect the compartments from the same dot chromosome. *P <0.05; ***P <0.001; Wilcoxon test adjusted for multiple testing using FDR. Note that some parts of the chromosomes were not assigned to A or B compartments; the telomeres and some satellites were excluded in the original annotations31. B Non-B DNA motif coverage and PacBio HiFi coverage on dot chromosomes in non-overlapping windows of length 1,024 bp, taken from31. Windows in A compartment are shown in pink, windows in B compartment are shown in blue, and windows not assigned to compartments are shown in gray. Red dashed lines show linear regression fits, and Pearson's R2 (red) and Spearman’s ρ2 (blue) are shown for each correlation. Windows with sequence coverage greater than 100× are not displayed for visualization purposes. C Same as B but for ONT coverage data.\", \"page\": 17, \"index\": 5, \"width\": 979, \"height\": 882}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-683159-v2/fig-006.webp\", \"caption\": \"Figure 5. Non-B DNA motif enrichment at bird centromeres. A Enrichment of non-B DNA motifs at centromeres in the haploid zebra finch genome (maternal+Z), compared to the genome-wide average. Red and blue denote, respectively, enrichment and depletion compared to the genome-wide non-B DNA content. Values marked with “*” are significantly enriched or depleted as compared to the genome-wide average (two-sided randomization test compared to background of 100 windows, P < 0.05, see Methods). Abbreviations are as in Fig. 1. See Fig. S18 for a full version including all haplotypes, and Fig. S19 for fold comparisons to the chromosome average instead of the genome-wide average. B Centromere enrichment in the chicken genome. Note that centromeric positions were not available for all chicken chromosomes.\", \"page\": 16, \"index\": 6, \"width\": 979, \"height\": 654}]"
motivation: 旨在填补非哺乳动物中非规范DNA研究的空白，并探究其对鸟类基因组组装挑战的影响。
method: 利用斑胸草雀T2T基因组及多种鸟类高质量基因组，结合长读长测序数据和实验验证，对非B DNA基序进行系统分析。
result: 发现鸟类非B DNA分布随染色体类型而异，点状染色体覆盖率最高且与PacBio测序深度呈负相关，同时G-四联体在调控区显著富集。
conclusion: 非B DNA的分布反映了鸟类基因组的独特架构，暗示了其在基因调控中的作用，并为实现完整的鸟类基因组测序提供了指导。
---

## 摘要
非规范（非 B 型）DNA 基序是能够折叠成与规范右旋螺旋不同的结构（如 G-四联体和 Z-DNA）的序列。在哺乳动物中，这些结构调节基因表达，充当突变热点，并与癌症相关，但在其他物种中仍缺乏深入表征。由于非 B 型 DNA 基序难以测序，许多基序在不完整的基因组组装中缺失，从而限制了功能分析。在本研究中，我们利用斑胸草雀的端粒到端粒（T2T）基因组、近乎完整的家鸡基因组以及另外六种鸟类的高质量基因组，首次对鸟类中的非 B 型 DNA 基序进行了全面分析。我们发现，首先，与哺乳动物不同，鸟类中的非 B 型 DNA 景观在不同染色体组之间存在显著差异：基因丰富且极小的点状染色体覆盖率最高（在斑胸草雀中为 15.1-30.1%），微染色体覆盖率居中（6.4-18.1%），而宏染色体覆盖率最低（5.9-6.9%）。点状染色体上的非 B 型 DNA 基序覆盖率与 PacBio 测序深度呈负相关，这可能解释了它们的组装挑战。其次，与哺乳动物类似，在斑胸草雀中，G-四联体在启动子和 5'UTR 区域富集，暗示其具有调节作用。我们通过实验验证了四种常见的 G-四联体，并利用长读长甲基化数据预测了其他基序。总之，非 B 型 DNA 的分布反映了鸟类基因组结构的独特特征，提示了其在基因调节中的作用，并为实现完整的鸟类基因组测序策略提供了参考。

## Abstract
Non-canonical (non-B) DNA motifs are sequences that can fold into structures (e.g., G-quadruplexes and Z-DNA) distinct from the canonical right-handed helix. In mammals, these structures regulate gene expression, act as mutation hotspots, and are associated with cancer, yet they remain undercharacterized in other species. Because non-B DNA motifs are difficult to sequence, many are absent from incomplete genome assemblies, limiting functional analyses. Here, we present the first comprehensive analysis of non-B DNA motifs in birds, using the telomere-to-telomere genome of zebra finch, the near-complete chicken genome, and high-quality genomes of six additional bird species. We show that, first, unlike in mammals, the non-B DNA landscape in birds differs markedly among chromosome groups: gene-rich and extremely small dot chromosomes show the highest coverage (15.1-30.1% in zebra finch), microchromosomes--intermediate coverage (6.4-18.1%), and macrochromosomes--the lowest (5.9-6.9%). Non-B DNA motif coverage on dot chromosomes negatively correlates with PacBio sequencing depth, potentially explaining their assembly challenges. Second, similar to mammals, in zebra finch, G-quadruplexes are enriched at promoters and 5'UTRs, implying regulatory roles. We experimentally validated four common G-quadruplexes and predicted others using long-read methylation data. Overall, non-B DNA distribution reflects distinct features of avian genome architecture, suggests a role in gene regulation, and informs strategies for complete bird genome sequencing.

---

## 论文详细总结（自动生成）

这是一份关于论文《Non-canonical DNA and sequencing challenges in bird genomes》（鸟类基因组中的非规范 DNA 与测序挑战）的结构化深入总结：

### 1. 核心问题与整体含义（研究动机和背景）
*   **核心问题**：非规范（non-B）DNA 基序（如 G-四联体、Z-DNA 等）在鸟类基因组中的分布特征是什么？这些结构如何影响鸟类基因组的测序与组装（尤其是极难测序的点状染色体）？
*   **研究背景**：非 B DNA 在哺乳动物中已知具有调节基因表达和诱发突变的功能，但在鸟类中缺乏系统研究。鸟类基因组具有独特的架构（宏、微、点状染色体），且长期以来点状染色体在基因组组装中大量缺失，研究者怀疑这与非 B DNA 导致的测序偏差有关。

### 2. 论文提出的方法论
*   **核心思想**：结合最先进的端粒到端粒（T2T）基因组组装技术、多种生物信息学预测算法以及体外实验验证，系统性地描绘鸟类非 B DNA 景观。
*   **关键技术细节**：
    *   **基序注释**：使用 `G4DISCOVERY`（结合 PQSFINDER 和 G4HUNTER）预测 G4，使用 `Z-DNA HUNTER` 预测 Z-DNA，使用 `GFA` 预测 A-phased、直接重复、倒置重复等基序。
    *   **折叠预测**：利用长读长测序获得的 5mC 甲基化数据作为代理指标（G4 形成通常与低甲基化相关）。
    *   **实验验证**：采用圆二色性（CD）光谱和 UV 吸收热变性分析，验证高频出现的 G4 基序在体外是否真实折叠。
    *   **关联分析**：将非 B DNA 覆盖度与 PacBio HiFi 和 ONT 测序深度进行线性回归分析。

### 3. 实验设计
*   **数据集**：
    *   **核心数据**：斑胸草雀（Zebra Finch）的 T2T 完整基因组。
    *   **对比数据**：近乎完整的家鸡（Chicken）基因组，以及涵盖 1.08 亿年进化跨度的其他 6 种鸟类（乌拉尔鸮、带尾鸽、安氏蜂鸟、大鸨、北京鸭、鸸鹋）的高质量基因组。
*   **Benchmark/对比方法**：
    *   对比了不同染色体类别（宏、微、点状染色体）的非 B DNA 密度。
    *   对比了 T2T 组装与旧版不完整组装中非 B DNA 的检出率。
    *   对比了 PacBio HiFi 与 ONT 两种长读长技术在处理非 B DNA 区域时的表现。

### 4. 资源与算力
*   **算力说明**：文中未明确列出具体的 GPU 型号或训练时长。
*   **计算环境**：提到计算工作是在宾夕法尼亚州立大学计算与数据科学研究所（ICDS）的 Roar Core 设施中完成的。由于该研究主要涉及生物信息学比对、基序搜索和统计分析，而非深度学习大模型训练，因此对算力的需求主要集中在 CPU 集群和内存上。

### 5. 实验数量与充分性
*   **实验规模**：
    *   分析了 8 个物种的全基因组数据。
    *   对斑胸草雀的 80 条染色体进行了逐一扫描。
    *   体外实验验证了 4 种最具代表性的高频 G4 基序。
*   **充分性评价**：实验设计非常充分且具有多维互证性。研究不仅停留在计算预测层面，还通过甲基化组学数据和体外生化实验验证了预测的准确性。跨物种的对比证明了发现的普遍性（尤其是点状染色体的高非 B DNA 含量）。

### 6. 主要结论与发现
*   **分布规律**：鸟类非 B DNA 分布极不均匀。点状染色体（Dot chromosomes）的覆盖率最高（高达 15-30%），远高于宏染色体（约 6%）。
*   **功能暗示**：G4 在启动子和 5'UTR 显著富集，且这些区域处于低甲基化状态，强烈暗示其在基因调控中发挥作用。
*   **测序挑战**：非 B DNA 含量（尤其是 G4 和直接重复序列）与 PacBio HiFi 测序深度呈显著负相关，解释了为何点状染色体在以往的测序项目中经常“失踪”。
*   **进化保守性**：尽管物种间存在亿年进化差异，但非 B DNA 在功能区（如启动子）的富集模式高度保守。

### 7. 优点
*   **首次全面性**：填补了鸟类 T2T 基因组非 B DNA 研究的空白。
*   **解释力强**：为长期困扰鸟类基因组学的“点状染色体组装难”问题提供了明确的物理化学解释。
*   **方法严谨**：采用了比以往研究更严格的过滤阈值（如限制间隔长度），确保了预测基序的高折叠潜力。
*   **干湿结合**：通过 CD 光谱实验将计算预测落实到了生物物理验证上。

### 8. 不足与局限
*   **样本局限性**：虽然涵盖了 8 种鸟类，但只有斑胸草雀拥有真正的 T2T 基因组，其他物种的非 B DNA 含量可能因组装不完整而被低估。
*   **组织特异性**：甲基化分析仅基于血液样本，非 B DNA 的折叠状态在不同组织或发育阶段可能存在动态变化，本文未能覆盖。
*   **算法依赖**：非 B DNA 的识别高度依赖算法阈值，虽然本文使用了严格标准，但仍可能遗漏一些在特定生理条件下形成的特殊结构。

（完）
