---
title: "A chromosome-level, haplotype-resolved genome assembly for the barn owl, Tyto alba"
title_zh: 仓鸮（Tyto alba）染色体水平、单倍型解析的基因组组装
authors: "Corval, H., Ducrest, A.-L., Bachmann Salvy, M., Burns, A., Topaloudis, A., Simon, C., Cora, E., Cavaleri, D., Almasi, B., Roulin, A., Iseli, C., Guex, N., Cumer, T., Goudet, J."
date: 2026-03-23
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.20.713190v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 染色体级单倍型解析基因组组装与遗传图谱
tldr: 本研究针对鸟类基因组中微染色体组装困难的问题，利用长读长测序技术，成功构建了仓鸮（Tyto alba）染色体水平且单倍型解析的高质量基因组。通过结合亲本测序、PacBio HiFi和纳米孔数据，研究者组装出46条染色体，与核型一致，并发现7号染色体存在复杂的结构变异。该成果为鸮形目提供了首个高质量参考基因组，助力鸟类进化研究。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-20-713190-v1/fig-001.webp\", \"caption\": \"Table 1 - Comparison of general assembly statistics across barn owl (Tyto alba) references. Genomes compared include genome_assembly_l500 from Ducrest et al. (2020) and T.alba_DEE_v4.0 from Machado et al. (2021). These reference genomes are shown alongside the two parental haplomes assembled here. Haplomes are each shown twice: a hifiasm column for the unscaffolded contigs, and a final column for the chromosomescale assembly after filtering, scaffolding and curation. Metrics include total assembly size, counts of contigs, N50/N90, percentage of GC, total Ns and BUSCO completeness.\", \"page\": 11, \"index\": 1, \"width\": 896, \"height\": 459}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-20-713190-v1/fig-002.webp\", \"caption\": \"Figure 1 – Contiguity, completeness, and chromatin interaction landscape of the paternal and maternal haplotype assemblies. (A-B) Snail plots display the overall structure and composition of the (A) paternal and (B) maternal assemblies. Each circumferential axis is divided into 1,000 bins, each representing 0.1% of the corresponding assembly. Scaffold length distribution is shown in dark grey, with the plot radius scaled to the longest scaffold (highlighted in red). N50 and N90 scaffold length thresholds are indicated in orange and pale orange, respectively. Nucleotide composition is displayed as dark blue for GC, light blue for AT, and white for ambiguous bases (N). A BUSCO completeness summary (Complete, Fragmented, Duplicated, Missing) is provided in the upper-right corner of each panel. (C-D) HiC contact maps for the (C) paternal and (D) maternal assemblies illustrate the genome-wide pattern of spatial interactions. Chromosomes are arranged by size from left to right and from top to bottom, with the Z chromosome positioned last. The red main diagonal represents high-frequency intrachromosomal contacts, while off-diagonal signals correspond to inter-chromosomal interactions. Interaction frequencies are displayed on a logarithmic scale. Heatmaps were generated using HiContacts.\", \"page\": 10, \"index\": 2, \"width\": 890, \"height\": 850}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-20-713190-v1/fig-003.webp\", \"caption\": \"Figure 4 - Large complex inversion on chromosome 7. Alignment between the paternal (top, dark blue) and maternal (bottom, burgundy) chromosome 7 highlights a major chromosomal inversion. The figure shows an extract from the whole-genome alignment, restricted to alignment blocks that are exclusive to chromosome 7 in both haplomes. Regions aligning in the same orientation are displayed in light grey, whereas regions aligned in the opposite orientation are shown in dark grey. Repeat proportion, calculated in 100-kbp windows, is plotted along the top and bottom. Two repeat detection methods are shown: RepeatMasker, represented in a lighter colour with a dashed line, and Red, represented in a dark colour with a solid line.\", \"page\": 14, \"index\": 3, \"width\": 890, \"height\": 1152}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-20-713190-v1/fig-004.webp\", \"caption\": \"Figure 3 - Dot chromosomes and their genomic characteristics. (A-C) Chromosome-wide distributions of GC content (A), repetitive elements (B), and exonic sequence (C) are shown for the paternal (dark blue) and the maternal haplome (burgundy). (D-E) Bar plots illustrate the absolute (lower panels) and relative proportion (upper panels) of newly annotated genes on each chromosome of the paternal (D) and maternal (E) haplomes. Newly annotated genes compared with the previous assembly are depicted in lighter colours.\", \"page\": 13, \"index\": 4, \"width\": 890, \"height\": 896}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-20-713190-v1/fig-005.webp\", \"caption\": \"Figure 2 - Overview of the paternal and maternal haplomes and their genome features. (A) The Circos plot provides a comparative summary of the genomic characteristics of the paternal haplome (left, dark blue) and maternal haplome (right, burgundy). From the outer to the inner track, the plots show the repeat proportion calculated in 100-kbp windows; the 46 chromosomes of each haplome, with known telomeric and pericentromeric sequences indicated by green circles and red squares, respectively; the distribution of annotated genes, summarised in 100-kbp windows; and the whole-genome alignment between the two haplotypes. Because repetitive elements strongly affect alignment, both haplomes were hard-masked with RepeatMasker prior to alignment. Regions aligning in the same orientation are shown in light grey, and regions aligning in opposite orientation are shown in dark grey. (B) Fluorescence in situ hybridisation (FISH) visualisation of the Common barn owl karyotype of a female individual. Chromosomes are counterstained with DAPI (blue). Centromeric regions are highlighted in red and telomeric regions in green using specific DNA probes (see Material and methods section for details). Sexual chromosomes Z and W are indicated by white arrows.\", \"page\": 12, \"index\": 5, \"width\": 890, \"height\": 588}]"
motivation: 鸟类基因组中富含基因和GC含量的微染色体极难组装，导致现有组装结果往往不完整。
method: 采用三人组分箱策略，结合Illumina亲本数据、PacBio HiFi和ONT长读长数据，并利用连锁图谱进行支架搭建。
result: 成功组装出包含46条染色体的两个单倍型基因组，并识别出7号染色体上一个约38 Mb的复杂嵌套倒位区域。
conclusion: 该研究提供了鸮形目首个单步型解析的染色体水平基因组，为研究结构变异和鸟类基因组演化奠定了基础。
---

## 摘要
近期长读长测序技术的进步使得跨物种的近端粒到端粒（T2T）组装成为可能。然而，由于存在大量微染色体（通常小于20Mb，且富含基因、GC含量和重复序列），鸟类基因组组装仍具挑战性。因此，微染色体在基因组组装中经常缺失。在本研究中，我们展示了西仓鸮（Tyto alba）的染色体水平、单倍型解析基因组组装。利用Illumina亲本读段结合PacBio HiFi和Oxford Nanopore Technologies数据的trio-binning策略，我们生成了两套分相的重叠群（contig）集。利用连锁图谱，这些重叠群被搭建成40个连锁群。比较分析识别出了对应于微染色体的未定位HiFi支架（scaffold），我们利用长读长信息将其整合进另外六条微染色体中。这两套组装结果均呈现46条染色体，与该物种的核型相符。除了7号染色体上一个包含嵌套倒位的约38 Mb复杂区域外，亲本单倍型之间表现出极强的共线性。这一高质量参考基因组为鸮形目（Strigiformes）提供了首个单倍型解析且染色体水平的基因组，为结构变异和鸟类基因组进化的精细研究提供了可能。

## Abstract
Recent advances in long-read sequencing have enabled near telomere-to-telomere (T2T) assemblies across diverse taxa. However, avian genomes remain challenging due to numerous microchromosomes, small, typically < 20Mb, elements that are gene-, GC-, and repeat-rich. As a consequence, microchromosomes are often missing from genome assemblies. Here, we present a chromosome-level, haplotype-resolved genome assembly for the Western barn owl (Tyto alba). Using a trio-binning strategy with Illumina parental reads combined with PacBio HiFi and Oxford Nanopore Technologies data, we generated two phased contig sets. These were scaffolded into 40 linkage groups using a linkage map. Comparative analyses identified unplaced HiFi scaffolds corresponding to microchromosomes, which we integrated into six additional microchromosomes using long reads information. The two assemblies present 46 chromosomes, matching the karyotype of the species. They exhibit strong synteny between parental haplotypes, except for a [~]38 Mb complex region on chromosome 7 containing nested inversions. This high-quality reference provides the first haplotype-resolved and chromosome-level genome for Strigiformes, enabling fine-scale studies of structural variation and avian genome evolution.

---

## 论文详细总结（自动生成）

这篇论文详细介绍了仓鸮（*Tyto alba*）首个染色体水平、单倍型解析（Haplotype-resolved）的参考基因组组装过程及其生物学发现。以下是对该论文的结构化总结：

### 1. 核心问题与整体含义
*   **研究动机**：鸟类基因组组装面临两大挑战：一是存在大量**微染色体**（Microchromosomes），这些染色体体积小、GC含量高且富含重复序列，在传统组装中极易丢失；二是二倍体生物的基因组往往被组装成“马赛克”式的共识序列，丢失了来自父母本的**单倍型相位信息**。
*   **整体含义**：仓鸮作为生态学和进化研究的模式物种，此前缺乏高质量、完整的基因组。本研究通过集成多种前沿测序技术，解决了微染色体缺失和相位混淆问题，为鸮形目（Strigiformes）及鸟类基因组进化研究提供了最高标准的参考底图。

### 2. 方法论
核心思想是**“多源数据集成组装策略”**，具体流程如下：
*   **三人组分箱（Trio-binning）**：利用父母本的 Illumina 短读长数据提取特异性 k-mer，将后代（参考个体）的 PacBio HiFi 和 ONT 长读长数据预先分类到父本和母本两个“桶”中。
*   **混合组装算法**：
    *   使用 **hifiasm** 结合 HiFi 和 ONT 数据生成单倍型特异性重叠群（Contigs）。
    *   利用**遗传连锁图谱**（Linkage Map）将重叠群定向并锚定到 40 个连锁群上。
*   **微染色体找回（MicroFinder）**：针对未定位的小片段，利用 **MicroFinder** 工具根据鸟类保守的微染色体基因特征进行筛选，并结合 ONT 超长读长手动搭建，最终找回了 6 条此前缺失的微染色体。
*   **基因注释**：采用 NCBI 的 **EGAPx** 流程，整合了 6 种组织的 RNA-seq 数据进行辅助注释。

### 3. 实验设计
*   **数据集**：
    *   **PacBio HiFi**：约 150.8 Gb（~118x 覆盖度）。
    *   **ONT (Oxford Nanopore)**：约 40.2 Gb（~31x 覆盖度）。
    *   **Hi-C**：3.38 亿对读段，用于验证染色体相互作用。
    *   **Illumina**：父母本短读长数据。
*   **Benchmark（基准对比）**：
    *   对比了之前的仓鸮组装版本：`genome_assembly_l500` (2020) 和 `T.alba_DEE_v4.0` (2021)。
    *   使用 **BUSCO**（aves_odb10）评估基因组完整度。
    *   使用 **FISH**（荧光原位杂交）实验进行细胞遗传学验证，确保组装结果与实际核型（46 条染色体）一致。

### 4. 资源与算力
*   论文详细列出了测序深度和数据量（如 HiFi 118x, ONT 31x），但**未明确说明具体的计算资源**（如 GPU 型号、核心数或具体的组装耗时）。这在基因组组装类论文中较为常见，通常默认使用高性能计算集群（HPC）。

### 5. 实验数量与充分性
*   **实验规模**：研究针对一个核心家庭（三人组）进行了深度测序，并对两个单倍型分别进行了完整的组装和注释。
*   **充分性与客观性**：
    *   **多维度验证**：不仅通过计算指标（N50, BUSCO）评估，还引入了 Hi-C 接触图验证支架顺序，以及 FISH 实验验证物理核型。
    *   **相位准确性**：通过 k-mer 分析计算了切换错误率（Switch error rate），父本和母本单倍型的错误率分别控制在 7.8% 和 7.5% 左右，证明了分相的可靠性。
    *   实验设计严谨，通过湿实验（FISH）与干实验（组装）互证，结果具有高度说服力。

### 6. 主要结论与发现
*   **组装质量飞跃**：成功构建了两个单倍型基因组（父本 1.27 Gbp，母本 1.29 Gbp），各包含 46 条染色体，完全符合仓鸮核型。
*   **找回缺失序列**：补齐了 6 条微染色体，这些染色体表现出极高的 GC 含量和重复序列密度，且基因分布相对稀疏。
*   **重大结构变异**：在 7 号染色体上发现了一个长达 **38 Mb 的复杂倒位区域**，包含多个嵌套的倒位和易位片段。这是此前碎片化组装版本无法识别的。
*   **端粒与着丝粒**：识别了大部分染色体的端粒序列，并确定了 Z 染色体为唯一的中央着丝粒染色体，其余均为近端着丝粒染色体。

### 7. 优点
*   **技术集成度高**：完美结合了 HiFi 的高准确性、ONT 的长跨度、Hi-C 的空间信息以及遗传图谱的生物学约束。
*   **解决行业痛点**：针对鸟类“微染色体”组装难题给出了标准范式，特别是利用 MicroFinder 找回缺失染色体的方法具有借鉴意义。
*   **单倍型解析**：提供了完整的父母本相位信息，为研究等位基因特异性表达和结构变异进化奠定了基础。

### 8. 不足与局限
*   **W 染色体缺失**：由于参考个体是雄性（ZZ），该组装未包含雌性特有的 W 染色体。
*   **分相错误率**：虽然 7.5% 的切换错误率在当前技术下属于正常范围，但对于追求完美 T2T 的研究来说，仍存在微小的相位切换风险。
*   **算力细节缺失**：缺乏对组装算法资源消耗的量化描述，不利于其他研究者评估复现成本。
*   **功能研究尚浅**：论文重点在于“组装”，对于 7 号染色体巨大倒位区域的具体生物学功能（如是否影响表型或适应性）仅做了推测，未进行深入的功能基因组学实验。

（完）
