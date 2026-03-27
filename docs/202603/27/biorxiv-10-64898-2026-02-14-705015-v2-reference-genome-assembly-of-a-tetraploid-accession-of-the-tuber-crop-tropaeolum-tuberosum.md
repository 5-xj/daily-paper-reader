---
title: Reference genome assembly of a tetraploid accession of the tuber crop Tropaeolum tuberosum
title_zh: 四倍体块茎作物块茎金莲花（Tropaeolum tuberosum）的参考基因组组装
authors: "Ruiz-Mateus, D., Scheffler, I., Marquez-Cardona, M. d. P., Greb, T., Teran, W., Hunziker, P."
date: 2026-03-25
pdf: "https://www.biorxiv.org/content/10.64898/2026.02.14.705015v2.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 参考基因组组装和基因组资源
tldr: "本研究针对安第斯山脉重要但缺乏基因组资源的块茎作物块茎旱金莲（Tropaeolum tuberosum），利用PacBio HiFi测序技术构建了首个高质量四倍体参考基因组。该基因组大小为1.3 Gb，Contig N50达32.2 Mb，基因完整度高达98.5%。通过对哥伦比亚野生型进行重测序验证，证明了该参考基因组的广泛适用性。此研究为该作物的遗传改良、功能基因组学研究及生物多样性保护奠定了坚实基础。"
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-02-14-705015-v2/fig-001.webp\", \"caption\": \"Fig. 1: The Tropaeolum tuberosum reference genome. (a) Tubers of the BGHEID007454 accession. (b) Leaves, stems and flowers of the BGHEID007454 accession. (c) Distribution profile of 21-mer analysis. (d) Snail plot of the primary reference genome. (e) Benchmarking Helixer and ANNEVO annotations.\", \"page\": 6, \"index\": 1, \"width\": 854, \"height\": 867}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-02-14-705015-v2/fig-002.webp\", \"caption\": \"Table 1: Statistics for the Tropaeolum tuberosum reference genome assembly and 150 annotation. 151\", \"page\": 8, \"index\": 2, \"width\": 944, \"height\": 754}]"
motivation: 块茎旱金莲是具有重要营养和抗逆价值的安第斯作物，但因缺乏参考基因组限制了其遗传研究和育种改良。
method: 采用PacBio HiFi测序技术对欧洲异地保存的四倍体品系进行组装，并结合Oxford Nanopore重测序和ANNEVO流程进行验证与注释。
result: "成功组装出1.3 Gb的基因组，包含56,354个高置信度蛋白编码基因，且在不同地理来源的种质间表现出极高的序列一致性。"
conclusion: 该高质量参考基因组为块茎旱金莲的比较基因组学、群体遗传学及功能分析提供了关键资源，助力其育种与保护。
---

## 摘要
块茎金莲花（Tropaeolum tuberosum）是一种原产于安第斯山脉的块茎作物，因其营养成分、抗病虫害能力以及对高海拔环境的适应性而备受重视。尽管它对粮食安全和可持续农业有所贡献，但它仍属于未被充分利用的物种，基因组资源匮乏，限制了遗传和功能研究。为填补这一空白，我们利用 PacBio HiFi 测序技术，为一个欧洲迁地保护（ex situ）的四倍体块茎金莲花种质生成了参考基因组组装。该组装包含 1,805 个 contig，总长度为 1.3 Gb（contig N50 = 32.2 Mb，最长 contig = 60 Mb），覆盖了估计基因组大小的 87%。我们使用 BUSCO（Benchmarking Universal Single-Copy Orthologs）评估了组装的完整性和准确性，检测到 98.5% 的完整基因（21.7% 为单拷贝，76.8% 为重复拷贝），0.7% 为片段化基因，0.7% 为缺失基因，证明了近乎完整的基因空间恢复，符合高质量四倍体基因组的标准。为了评估可转移性，我们利用 Oxford Nanopore 技术对一个具有经济相关性的哥伦比亚野外采集基因型进行了重测序。Read 比对显示，99.7% 的主要比对结果指向该参考基因组（加权平均覆盖度 = 16.4x，96.1% 的区域覆盖度 ≥ 96.1x），证实了不同种质之间广泛的序列保守性，并验证了该迁地保护参考基因组作为原位（in situ）种质资源锚点的适用性。重复元件占基因组的 71.3%。利用 ANNEVO，我们注释了 56,354 个高置信度蛋白质编码基因，BUSCO 完整度达到 98.3%，PSAURON 评分为 97.2，且与蔷薇分支（rosid lineage）的分类一致性达到 90.5%（OMArk）。这一高质量参考基因组为块茎金莲花的比较基因组学、群体基因组学和功能分析奠定了基础资源，支持了这一重要粮食资源的未来育种和保护。

## Abstract
Tropaeolum tuberosum is a tuber-forming crop native to the Andes, valued for its nutritional content, pest resistance and adaptation to high-altitude environments. Despite its contribution to food security and sustainable agriculture, it remains an underutilized species with scarce genomic resources, limiting genetic and functional studies. To address this gap, we generated a reference genome assembly for a European ex situ tetraploid accession of T. tuberosum using PacBio HiFi sequencing. The assembly spans 1.3 Gb in 1,805 contigs (contigs N50 = 32.2 Mb, longest contig = 60 Mb) and recovers 87% of the estimated genome size. We assessed assembly completeness and accuracy using Benchmarking Universal Single-Copy Orthologs, which detected 98.5% complete genes (21.7% single-copy, 76.8% duplicated), 0.7% fragmented, and 0.7% missing, demonstrating near-complete gene space recovery consistent with a high-quality tetraploid genome. To evaluate transferability, we resequenced a field-collected Colombian genotype of economic relevance using Oxford Nanopore technology. Read mapping showed 99.7% of primary alignments to the reference (weighted mean coverage = 16.4x, 96.1% at [&ge;]96.1x), confirming broad sequence conservation between accessions and validating the suitability of the ex situ reference as an anchor for in situ germplasm. Repetitive elements accounted for 71.3% of the genome. Using ANNEVO, we annotated 56,354 high-confidence protein-coding genes, achieving 98.3% complete BUSCOs, a PSAURON score of 97.2, and 90.5% taxonomic consistency with the rosid lineage (OMArk). This high-quality reference genome establishes a foundational resource for comparative genomics, population genomics and functional analyses on T. tuberosum, supporting future breeding and conservation of this important food resource.

---

## 论文详细总结（自动生成）

这篇论文详细介绍了安第斯山脉重要块茎作物——**块茎金莲花（*Tropaeolum tuberosum*，又称 Mashua）**的首个高质量四倍体参考基因组的组装与注释工作。以下是对该研究的结构化总结：

### 1. 论文的核心问题与整体含义
*   **研究背景**：块茎金莲花是安第斯地区继马铃薯、木薯等之后的第四大重要块茎作物，具有极高的营养价值、抗逆性和药用潜力（如抗癌、抗炎特性）。
*   **核心问题**：尽管其在粮食安全和可持续农业中具有重要地位，但由于缺乏高质量的参考基因组，该物种的遗传改良、功能基因组学研究和生物多样性保护一直受到严重限制。
*   **整体含义**：本研究通过构建首个高精度的参考基因组，填补了该物种基因组资源的空白，为未来针对该作物的精准育种、代谢途径研究及群体遗传学分析提供了核心工具。

### 2. 论文提出的方法论
*   **测序策略**：采用 **PacBio HiFi** 长读段测序技术，利用其高准确度（>99.9%）和长读段特性，有效解决四倍体基因组中高度重复和杂合的组装难题。
*   **组装流程**：
    *   使用 **Hifiasm** 软件进行从头组装（de novo assembly），生成初级组装结果。
    *   利用 **K-mer 分析**（21-mer）估算基因组大小和杂合度。
*   **基因注释**：
    *   **重复序列注释**：使用 RepeatMasker 识别转座子等重复元件。
    *   **蛋白质编码基因注释**：采用 **ANNEVO** 流程，整合了基于深度学习的 **Helixer** 预测工具，并结合蛋白质证据进行优化。
*   **验证方法**：利用 **Oxford Nanopore (ONT)** 测序技术对另一个地理来源（哥伦比亚野外采集）的种质进行重测序，通过 Read 比对验证参考基因组的普适性。

### 3. 实验设计
*   **数据集/样本**：
    *   **参考样本**：欧洲迁地保护（ex situ）的四倍体品系 BGHEID007454。
    *   **验证样本**：哥伦比亚实地采集的具有经济价值的野外基因型。
*   **Benchmark（基准测试）**：
    *   **完整性评估**：使用 **BUSCO**（Embryophyta odb10 数据库）评估基因空间的恢复程度。
    *   **注释质量评估**：使用 **PSAURON** 评分和 **OMArk** 分类一致性分析。
*   **对比实验**：对比了不同注释工具（如单纯的 Helixer 预测与经过 ANNEVO 优化的预测）在基因数量和完整度上的差异。

### 4. 资源与算力
*   **测序资源**：PacBio HiFi 测序（生成约 1.3 Gb 组装结果）；Oxford Nanopore 测序（用于验证）。
*   **算力说明**：论文中**未明确列出**具体的 GPU 型号、核心数或训练时长。但提到了使用 ANNEVO 和 Helixer 等计算密集型工具，通常这类流程需要高性能计算集群（HPC）支持。

### 5. 实验数量与充分性
*   **实验规模**：
    *   完成了全基因组组装、重复序列分析、基因注释及质量评估。
    *   通过对不同地理来源（欧洲 vs 哥伦比亚）的种质进行比对，验证了基因组的“可转移性”。
*   **充分性评价**：实验设计较为充分。BUSCO 完整度达到 98.5%，且通过了跨样本的 Read 比对验证（99.7% 的比对率），证明了该参考基因组具有极高的准确性和代表性。

### 6. 论文的主要结论与发现
*   **基因组特征**：组装大小为 **1.3 Gb**，包含 1,805 个 contig，**Contig N50 达 32.2 Mb**，最长 contig 为 60 Mb。
*   **基因组成**：注释出 **56,354 个**高置信度蛋白质编码基因；重复元件占基因组的 **71.3%**。
*   **高质量指标**：BUSCO 完整度（98.5%）和 PSAURON 评分（97.2）均显示出极高的组装和注释质量。
*   **高度保守性**：哥伦比亚种质的 Read 能够以极高比例比对到该参考基因组，说明不同来源的块茎金莲花在序列水平上具有广泛的保守性。

### 7. 优点
*   **技术领先**：利用 HiFi 测序克服了多倍体基因组组装的复杂性，获得了接近染色体级别的 contig 连续性。
*   **注释严谨**：结合了深度学习预测与传统证据，并使用了最新的质量评估工具（如 OMArk），确保了基因预测的可靠性。
*   **实用性强**：通过跨种质验证，证明了该参考基因组对全球不同地区的块茎金莲花研究均有参考价值。

### 8. 不足与局限
*   **缺乏物理图谱**：目前的组装处于 Contig 级别，尚未利用 Hi-C 测序技术将其挂载到染色体水平（Scaffold/Chromosome level）。
*   **单一样本局限**：虽然验证了另一个种质，但对于该物种广泛的遗传多样性而言，单一参考基因组可能无法完全捕捉所有的结构变异（SV），未来需要泛基因组（Pangenome）研究。
*   **功能验证缺失**：论文侧重于基因组的“构建”，尚未对特定性状（如抗癌成分硫代葡萄糖苷的合成途径）进行深入的功能基因组学实验验证。

（完）
