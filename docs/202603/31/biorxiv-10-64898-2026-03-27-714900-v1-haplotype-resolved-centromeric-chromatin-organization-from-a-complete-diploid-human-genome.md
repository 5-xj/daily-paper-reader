---
title: Haplotype-resolved centromeric chromatin organization from a complete diploid human genome
title_zh: 完整二倍体人类基因组的单倍型解析着丝粒染色质组织
authors: "Xu, Y., Loucks, H., Menendez, J., Ryabov, F., Lucas, J. K., Cechova, M., Morina, L., Xu, E., Dubocanin, D., Chittenden, C., Asri, M., Violich, I., Ortiz, C., Gardner, J. M. V., Hillaker, T., O'Rourke, S., McNulty, B., Potapova, T. A., Mitchell, M. W., Schwartz, J. P., Straight, A. F., Gerton, J. L., Timp, W., Alexandrov, I. A., Altemose, N., Miga, K. H."
date: 2026-03-31
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.27.714900v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 人类基因组中着丝粒序列和染色质结构的研究
tldr: 本研究利用完整的二倍体人类基因组（T2T-HG002）和超长读长DiMeLo-seq技术，在单分子水平上解析了所有着丝粒的染色质结构。研究发现CENP-A在低甲基化着丝粒凹陷区（CDR）形成离散子域，且CDR在不同单倍型间保持平衡。此外，DNA甲基化被证实是调节着丝粒组织的关键因素，其水平变化会显著重构CDR结构，为理解着丝粒可塑性和染色体不稳定性提供了新见解。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714900-v1/fig-001.webp\", \"caption\": \"Figure 1. Haplotype-resolved centromere annotation reveals multi-scale variation in the diploid HG002 genome. (A) Centromeric satellite (censat) annotations for maternal ('M') and paternal ('P') chromosomes. Annotations are centered at the p-arm proximal boundary of the active array. Acrocentric short-arms (13p, 14p, 15p, 21p, and 22p) are included due to their enrichment of satellite classes common to centromeric regions. The locations of centromere dip regions (CDRs) are indicated in black. (B) Chromosome 5 paternal and maternal haplotypes illustrating the largest homolog-specific size difference observed among active αSat arrays (9.49 Mb paternal vs. 3.59 Mb maternal), with higher-order repeat haplotypes (HORhap) and a 1D modplot heatmap28 and 1D projected ModDotPlot tracks. Repeat annotations highlight a triplication in the chromosome 5 paternal active array. CDRs are shown in black within the q-arm proximal region. (C) CpG methylation track across the chromosome 5 maternal active αSat array, illustrating nine discrete sub-CDR hypomethylation dips. (D) Stacked bar plot of sub-CDR lengths for all chromosomes, ordered by genomic position, with mean aggregate sub-CDR lengths indicated separately for maternal (dark red), paternal (light red), and all chromosomes combined (red). Despite extensive variation in active array length, total, or aggregate sub-CDR lengths per chromosome appears similar between homologs and consistent between chromosomes genome-wide (mean ~90 kb, range 69–109 kb).\", \"page\": 4, \"index\": 1, \"width\": 1101, \"height\": 641}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714900-v1/fig-002.webp\", \"caption\": \"Figure 2. Single-molecule profiling of CENP-A chromatin architecture across haplotype-resolved human centromeres. (A) Schematic 33 of the adaptive sampling DiMeLo-seq enrichment strategy and data processing pipeline. Coverage comparisons between adaptive sampling and whole genome sequencing are shown for the chromosome X αSat HOR array and genome-wide, illustrating ~30-fold enrichment of centromeric regions relative to the rest of the genome. (B) Integrative Genomics Viewer (IGV) 34 visualization of a region spanning a CDR on chromosome 5 (chr5_MATERNAL: 49150874-49257508) within the active αSat array. mCpG (magenta), H3K9me3 (green), and CENP-A (blue) DiMeLo-seq signal tracks are shown, illustrating the relationship between CENP-A enrichment and the heterochromatic (H3K9me3 and mCpG) boundaries of sub-CDR intervals (indicated by black bars). (C) Aggregate profile plots of mCpG, H3K9me3, and CENP-A signal centered on CDR boundaries across all centromeres, demonstrating an inverse relationship between CpG hypomethylation and CENP-A enrichment relative to flanking H3K9me3-marked heterochromatin. (D) Stacked heatmaps of H3K9me3 (top) and CENP-A (bottom) DiMeLo-seq 6mA signal density across all aggregated sub-CDRs, ordered by chromosomal position and separated by maternal and paternal haplotype. The dotted line indicates the mean length (~90 kb) of aggregate sub-CDRs. The majority of sub-CDRs display an inverse relationship between CENP-A and H3K9me3 (where CENP-A signal is high, H3K9me3 signal is low), with variation observed primarily in the outermost sub-CDRs. (E) Scatter plot comparing DiMeLo-seq CENP-A 6mA relative abundance between maternal and paternal homologs across all centromeres, showing broadly balanced signal between haplotypes. (F) IGV visualization of an atypical sub-CDR at chromosome 4 (chr4_MATERNAL:51622694-51707732), where CENP-A enrichment is absent and H3K9me3 is present within the sub-CDR, representing a departure from the canonical centromeric chromatin architecture in which H3K9me3 and mCpG are excluded from sub-CDRs. (G) Schematic 35 illustrating co-occupancy of CENP-A across multiple sub-CDRs on individual ultra-long nanopore reads, as assessed using a decision-tree classifier trained on single-molecule signals from CDR and non-CDR regions. The majority of reads spanning two sub-CDRs exhibit CENP-A enrichment at both sub-CDRs.\", \"page\": 6, \"index\": 2, \"width\": 1111, \"height\": 488}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714900-v1/fig-003.webp\", \"caption\": \"Figure 3. DNA methylation state influences sub-CDR boundaries and CENP-A domain organization. (A) IGV visualization of the chromosome 20 (chr20_MATERNAL:28635505-28746668) CDR region showing mCpG (magenta), H3K9me3 (green), and CENP-A (blue) DiMeLo-seq signal tracks in early- and late-passage (25 days) HG002 LCLs. SubCDRs are highlighted in light green. Sites where methylated intervals separating neighboring sub-CDRs were diminished are indicated by dark green bars and a red box, resulting in more frequent formation of continuous CENP-A–occupied regions. (B) Log2 fold-change of mCpG, H3K9me3, and CENP-A DiMeLo-seq signal densities at inter-sub-CDR boundaries between early- and late-passage LCLs. Within regions of boundary loss, there is a significant decrease in mCpG between early and late passage, a concurrent decrease in H3K9me3 and a corresponding increase in CENP-A. (C) Illustration of central and flanking sub-CDRs in the chr5_MATERNAL CDR region. Genome-wide fold-change plots show CENP-A density increasing in central sub-CDRs but not in flanking sub-CDRs in late-passage LCLs, with H3K9me3 showing the reciprocal pattern and mCpG remaining largely unchanged across sub-CDR positions. (D) Fold-change analysis of mCpG and CENPA signal densities across 1 kb bins within sub-CDRs in HG002 early-passage LCLs and iPSCs, with non-CDR active array regions used as a baseline. HG002 hiPSCs show a reduction in CENP-A enrichment and an increase in CpG methylation within the active array. (E) Line plot comparing sub-CDR positions in hiPSCs and LCLs for chr12_MATERNAL. The hiPSC active array shows elevated CpG methylation in the active array (~90%) and within sub-CDRs (~60%) relative to LCLs (~60% and ~20%, respectively). Although the CDR in hiPSCs is broader than in LCLs, it occupies only a partial span of the corresponding LCL CDR. (F) Scatter plots of relative CENP-A abundance, estimated by multiplying mean 6mA/A density by total or aggregate sub-CDR(s) length, for maternal and paternal homologs in late-passage LCLs and iPSCs. Despite extensive sub-CDR reorganization, relative CENP-A abundance remains proportional across chromosomes and balanced between homologs.\", \"page\": 9, \"index\": 3, \"width\": 1104, \"height\": 552}]"
motivation: 旨在利用完整的二倍体人类基因组解析着丝粒卫星DNA阵列中染色质的组织与调节机制。
method: 采用富集自适应采样的超长读长DiMeLo-seq技术，对T2T-HG002基因组的所有着丝粒进行单分子染色质分析。
result: 发现CENP-A在低甲基化CDR区形成离散子域，且DNA甲基化水平的升降会直接导致CDR结构的重组、合并或扩张。
conclusion: DNA甲基化是人类着丝粒组织的核心调节因子，对着丝粒的可塑性、表观遗传及染色体稳定性具有重要意义。
---

## 摘要
着丝粒确保细胞分裂过程中染色体的正确分离，然而卫星 DNA 阵列中着丝粒染色质的组织和调节仍未得到完全理解。在此，我们利用完整二倍体人类基因组基准（T2T-HG002），对着丝粒序列和单个单倍型上的染色质结构进行了详细研究。利用自适应采样增强的超长读长 DiMeLo-seq，我们实现了跨所有着丝粒的单分子染色质图谱绘制，揭示了在单条染色质纤维上，决定着丝粒身份的组蛋白变体 CENP-A 在低甲基化着丝粒凹陷区（CDRs）内形成了多个离散的子域，这些区域两侧是富含 H3K9me3 的异染色质。尽管存在潜在的序列变异，CDRs 仍定位于序列同质化区域，并在所有染色体和单倍型之间保持相对平衡的 CENP-A 剂量和总长度。此外，我们表明着丝粒和近着丝粒 DNA 甲基化的双向变化伴随着着丝粒染色质结构的变化。在着丝粒低甲基化的传代细胞中，子域边界被侵蚀，相邻的 CENP-A 结构域倾向于合并和扩张。相反，在着丝粒高甲基化的多能干细胞中，CDRs 发生了根本性的重组，使得离散的低甲基化结构域经常合并成更宽的连续区域。这些与甲基化相关的 CDR 重构事件表明，DNA 甲基化是人类着丝粒组织的主要调节因子，对于理解发育和疾病中的着丝粒可塑性、表观遗传继承和染色体不稳定性具有重要意义。

## Abstract
Centromeres ensure proper chromosome segregation during cell division, yet the organization and regulation of centromeric chromatin within satellite DNA arrays remain incompletely understood. Here, we leverage the complete diploid human genome benchmark (T2T-HG002) to provide a detailed study of centromeric sequence and chromatin architecture on individual haplotypes. Using adaptive-sampling-enriched, ultra-long-read DiMeLo-seq, we achieve single-molecule chromatin profiling across all centromeres, revealing that along single chromatin fibers, CENP-A, the histone variant specifying centromere identity, forms multiple discrete subdomains within hypomethylated centromere dip regions (CDRs) that are flanked by H3K9me3-enriched heterochromatin. Despite underlying sequence variation, CDRs localize to sequence-homogeneous domains and maintain relatively balanced CENP-A dosage and aggregate length across all chromosomes and between haplotypes. Further, we show that bidirectional changes to centromeric and pericentromeric DNA methylation are accompanied by changes to centromeric chromatin architecture. In passaged cells with centromeric hypomethylation, subdomain boundaries are eroded, and adjacent CENP-A domains tend to merge and expand. Conversely, in pluripotent stem cells with centromeric hypermethylation, CDRs are fundamentally reorganized, such that discrete hypomethylated domains are frequently consolidated into broader contiguous tracts. These methylation-associated CDR restructuring events suggest that DNA methylation acts as a principal regulator of human centromere organization, with implications for understanding centromere plasticity, epigenetic inheritance, and chromosomal instability in development and disease.

---

## 论文详细总结（自动生成）

这是一份关于论文《Haplotype-resolved centromeric chromatin organization from a complete diploid human genome》的深度结构化总结：

### 1. 核心问题与整体含义
*   **研究背景**：着丝粒（Centromere）是确保细胞分裂中染色体正确分离的关键结构，由高度重复的卫星DNA（如 $\alpha$-satellite）组成。由于其序列的高度重复性和复杂性，长期以来一直是基因组学研究的“黑洞”。
*   **核心问题**：尽管已有T2T-CHM13（单倍型）的参考，但人类二倍体基因组中，两个单倍型（父本和母本）之间的着丝粒染色质组织是否存在差异？DNA甲基化如何动态调节着丝粒的表观遗传状态？
*   **整体含义**：本研究首次在单分子水平上解析了完整二倍体人类基因组（HG002）的所有着丝粒染色质结构，揭示了DNA甲基化是调控着丝粒可塑性和稳定性的核心因子。

### 2. 论文提出的方法论
*   **核心思想**：结合超长读长测序技术与原位蛋白标记，在不破坏DNA长片段连续性的前提下，同时获取序列、DNA甲基化和特定蛋白（CENP-A, H3K9me3）的结合信息。
*   **关键技术细节**：
    *   **DiMeLo-seq (Directed Methylation with Long-read sequencing)**：利用融合了蛋白A的Hia5甲基转移酶，通过抗体引导在目标蛋白（如CENP-A）结合位点附近产生腺嘌呤甲基化（6mA）标记。
    *   **富集自适应采样（Adaptive Sampling）**：在Nanopore测序过程中，利用软件实时识别序列，仅对含有着丝粒序列的片段进行完整测序，将着丝粒区域的覆盖度提升了约30倍。
    *   **单分子分类器**：开发了基于决策树的分类算法，对单条DNA纤维上的6mA信号进行处理，以识别CENP-A的富集子域。

### 3. 实验设计
*   **数据集**：使用了HG002（人类淋巴母细胞系 LCL）的完整二倍体基因组作为基准。
*   **对比场景**：
    1.  **单倍型对比**：比较同一细胞内父本和母本同源染色体着丝粒的差异。
    2.  **细胞状态对比**：对比早期传代与晚期传代（25天）的LCL细胞，观察DNA甲基化水平下降的影响。
    3.  **细胞类型对比**：对比LCL（淋巴细胞）与iPSC（诱导多能干细胞），观察高甲基化环境对着丝粒的影响。
*   **Benchmark**：以T2T-CHM13完整基因组组装和常规全基因组测序（WGS）作为对照。

### 4. 资源与算力
*   **硬件设备**：使用了Oxford Nanopore的PromethION测序平台。
*   **算力说明**：论文未详细列出具体的GPU型号或训练时长，但提到了使用自适应采样技术来优化测序资源的分配，并利用高性能计算集群进行大规模长读长序列的比对（使用Winnowmap2等工具）和甲基化调用。

### 5. 实验数量与充分性
*   **实验规模**：涵盖了人类全部23对染色体（共46条），对每一个着丝粒都进行了单倍型解析。
*   **充分性评价**：实验设计非常充分。研究不仅观察了静态的结构，还通过细胞传代和细胞类型转换进行了动态的功能验证。通过单分子水平的分析，避免了群体平均化带来的信息丢失，实验结果具有高度的客观性和说服力。

### 6. 主要结论与发现
*   **离散子域结构**：CENP-A并非均匀分布在低甲基化区（CDR），而是形成了多个离散的“子域”（sub-CDRs），这些子域被微小的H3K9me3和高甲基化区域分隔。
*   **剂量平衡性**：尽管不同染色体甚至同源染色体间的着丝粒阵列长度差异巨大（如5号染色体父本比母本大9.49 Mb），但其CENP-A的总覆盖长度（约90 kb）和信号强度在单倍型间保持高度平衡。
*   **甲基化的调节作用**：
    *   **低甲基化（晚期传代）**：导致子域边界侵蚀，CENP-A结构域发生合并和扩张。
    *   **高甲基化（iPSC）**：导致CDR结构彻底重组，离散的子域被整合为更宽的连续区域。
*   **序列偏好**：CDR倾向于定位在序列最同质化（进化上最年轻）的区域。

### 7. 优点
*   **高分辨率**：实现了单分子、单倍型级别的解析，这是以往技术无法达到的。
*   **动态视角**：通过操纵DNA甲基化状态，证明了表观遗传环境对着丝粒物理结构的直接塑造作用。
*   **完整性**：填补了二倍体人类基因组中着丝粒组织的空白，为理解染色体不稳定性提供了新模型。

### 8. 不足与局限
*   **样本多样性**：研究主要集中在HG002这一个体上，虽然是二倍体，但尚未涵盖更广泛的人群遗传多样性。
*   **功能验证**：虽然观察到了结构重组，但这些重组如何直接导致具体的染色体分离错误（如非整倍体产生）仍需更直接的实时成像或功能实验支持。
*   **技术门槛**：DiMeLo-seq结合超长读长测序的操作和分析复杂度极高，目前难以在常规实验室大规模普及。

（完）
