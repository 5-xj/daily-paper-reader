---
title: "From SNPs to Pathways: A genome-wide benchmark of annotation discrepancies and their impact on protein- and pathway-level inference"
title_zh: 从 SNP 到通路：注释差异的全基因组基准测试及其对蛋白质和通路水平推断的影响
authors: "Queme, B., Muruganujan, A., Ebert, D., Mushayahama, T., Gauderman, W. J., Mi, H."
date: 2026-03-24
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.21.713397v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: SNP注释差异的全基因组基准测试
tldr: 本研究针对SNP注释工具（ANNOVAR、SnpEff、VEP）和基因模型（Ensembl、RefSeq）在全基因组范围内的差异进行了基准测试。通过分析4000多万个SNP，研究揭示了不同配置在蛋白质水平和通路分析中的显著不一致性。结果表明，单一工具或模型往往存在注释缺失，而采用多工具、多模型的集成策略能最大化覆盖范围并提高通路富集分析的可靠性，为基因组研究提供了更稳健的解释框架。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-21-713397-v1/fig-001.webp\", \"caption\": \"Table 2. Protein Annotation Coverage by Tool-Gene Model Combination. Percentage of UniProt IDs captured across all SNPs, 258 stratified by region (whole genome, genic, intergenic) and by annotation tool (ANNOVAR, SnpEff, VEP) within each gene model 259 (RefSeq, Ensembl). Combined tool strategies within each gene model and across both models are also reported. Coverage reflects the 260 proportion of the unified reference set (per region) captured by each configuration. This table highlights substantial variability in 261 annotation depth based on tool and gene model choice, with RefSeq- and multi-tool configurations achieving the highest coverage 262 overall. Accordingly, the fully combined configuration (Combined Tools across Combined gene models) reaches 100% by definition, 263 and the key comparisons are the shortfalls of single-tool and single-gene-model strategies relative to this union reference. 264\", \"page\": 12, \"index\": 1, \"width\": 964, \"height\": 482}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-21-713397-v1/fig-002.webp\", \"caption\": \"Table 1. Protein Annotation Coverage by Gene Model for Each Tool, Using Standardized Region Definitions. Percentage of 103 UniProt IDs captured by each tool (ANNOVAR, SnpEff, VEP) when using RefSeq versus Ensembl gene models, with region definitions 104 standardized to Ensembl. Values represent the proportion of the SNP-specific UniProt reference set annotated by each tool and gene 105 model combination, stratified by region (whole genome, genic, intergenic). This table isolates the effect of gene model selection while 106 holding the annotation tool constant and highlights how RefSeq generally yields higher coverage than Ensembl, except for VEP, where 107 the trend is reversed. Because the ‘Combined’ column is the union reference for each tool across gene models under the standardized 108 framework, it attains 100% recovery by definition; the informative quantities are the shortfalls of the single-gene-model configurations 109 (RefSeq or Ensembl) relative to that union. 110\", \"page\": 5, \"index\": 2, \"width\": 960, \"height\": 619}]"
motivation: 探究常用SNP注释工具和基因模型之间的差异程度及其对下游蛋白质和通路水平推断的具体影响。
method: 使用三种主流注释工具结合两种基因模型，对HRC数据库中超过4000万个SNP进行了全面的对比评估。
result: 注释输出在工具和模型间存在显著差异，且单一方法在结直肠癌GWAS案例中会导致关键生物通路的遗漏。
conclusion: 推荐在基因组研究中使用多工具、多模型的集成注释方法，以获得更全面且可重复的生物学发现。
---

## 摘要
背景：准确的单核苷酸多态性（SNP）注释是基因组研究的核心，但广泛使用的工具和基因模型往往会产生不同的结果。先前的研究已在小型数据集中展示了此类差异，但全基因组范围内的变异程度及其对下游通路分析的影响仍不清楚。结果：我们对三种常用的 SNP 注释工具（ANNOVAR、SnpEff 和 VEP）进行了全面比较，利用 Ensembl 和 RefSeq 基因模型评估了来自单倍型参考联盟（Haplotype Reference Consortium）的 4000 多万个 SNP。在蛋白质水平上，不同工具和基因模型的注释输出存在显著差异（p-adj < 0.001），且差异存在于基因区和基因间区。RefSeq 提供了更广泛的注释覆盖，特别是对于基因间区 SNP，而 Ensembl 显示出更高的内部一致性。SnpEff 总体上提供了最完整的覆盖，而没有任何单一工具或模型配置能够实现对并集参考库的完全注释恢复。跨工具和模型的整合最大限度地扩大了覆盖范围并减少了注释丢失。在对来自 FIGI GWAS 的 204 个结直肠癌相关 SNP 的案例研究中，通路富集结果因注释策略而异。完全整合的方法识别出了所有四个显著通路，而几种单一工具或单一模型策略则遗漏了一个或多个。结论：SNP 注释结果受所使用的工具和基因模型的影响，仅依赖单一方法可能会导致覆盖不全。多工具、多模型策略提供了最全面的注释并保留了富集通路，支持更稳健且可重复的基因组解释。

## Abstract
BackgroundAccurate single-nucleotide polymorphism (SNP) annotation is central to genomic research yet widely used tools and gene models often yield divergent results. Prior studies have shown such discrepancies in small datasets, but the extent of genome-wide variation and its impact on downstream pathway analysis remain unclear.

ResultsWe conducted a comprehensive comparison of three commonly used SNP annotation tools, ANNOVAR, SnpEff, and VEP, using both Ensembl and RefSeq gene models to evaluate more than 40 million SNPs from the Haplotype Reference Consortium. At the protein level, annotation output differed significantly across tools and gene models (p-adj < 0.001), with discrepancies present in both genic and intergenic regions. RefSeq produced broader annotation coverage, particularly for intergenic SNPs, while Ensembl showed greater internal consistency. SnpEff provided the most complete coverage overall, whereas no single tool or model configuration achieved full annotation recovery of the union reference. Integration across tools and models maximized coverage and reduced annotation loss. In a case study of 204 colorectal cancer-associated SNPs from the FIGI GWAS, pathway enrichment results varied depending on annotation strategy. The fully integrated approach identified all four significant pathways, whereas several single-tool or single-model strategies missed one or more.

ConclusionSNP annotation outcomes are influenced by both the tool and gene model used, and relying on a single approach may result in incomplete coverage. A multi-tool, multi-model strategy provides the most comprehensive annotation and preserves enriched pathways, supporting more robust and reproducible genomic interpretation.

---

## 论文详细总结（自动生成）

这篇论文对 SNP（单核苷酸多态性）注释工具及其关联的基因模型在全基因组范围内的差异进行了深入的基准测试，并评估了这些差异对蛋白质映射和生物通路富集分析的影响。以下是详细总结：

### 1. 核心问题与研究动机
*   **核心问题**：在基因组研究中，研究者依赖注释工具将 SNP 映射到基因和蛋白质。然而，不同的注释工具（如 ANNOVAR, SnpEff, VEP）和基因模型（如 Ensembl, RefSeq）经常对同一个 SNP 给出不一致的解释。
*   **研究动机**：以往的研究多集中在小型数据集或特定转录组背景下，缺乏全基因组规模的系统性量化评估。作者旨在明确这些“注释差异”到底有多大，以及它们是否会误导下游的生物学通路推断（如 GWAS 后的功能解释）。

### 2. 方法论
*   **核心思想**：通过一个统一的平台（AnnoQ）运行多种工具和模型组合，将所有输出标准化映射到 UniProt 蛋白质 ID，并以“所有工具/模型注释的并集”作为参考基准（Union Reference）来评估各方法的覆盖率。
*   **关键技术细节**：
    *   **ID 映射标准化**：使用 HGNC 数据集将基因符号、Entrez ID 和 Ensembl ID 统一映射到 UniProt ID，以消除因标识符不统一导致的表观差异。
    *   **定性协议分析**：分析不同工具对同一个 SNP 产生的蛋白质列表是否完全一致、部分重叠或完全不同。
    *   **定量覆盖度分析**：计算单一工具或模型捕获到并集参考库中蛋白质 ID 的比例。
    *   **集成策略**：提出“多工具+多模型”的并集集成逻辑，以最大化注释深度。

### 3. 实验设计
*   **数据集**：
    *   **全基因组基准**：使用了来自单倍型参考联盟（HRC）的 **40,290,938 个 SNP**。
    *   **案例研究**：使用了来自 FIGI 联盟结直肠癌 GWAS 的 **204 个显著相关 SNP**。
*   **对比配置**：
    *   **工具**：ANNOVAR (2020-06-07), SnpEff (v4.3t), VEP (v107)。
    *   **基因模型**：Ensembl (v107/GENCODE v41) 和 RefSeq。
*   **Benchmark**：以“所有配置产生的注释并集”作为相对金标准，对比单一配置的召回率。

### 4. 资源与算力
*   **算力说明**：论文中**未明确说明**具体的硬件型号（如 GPU/CPU 核心数）或具体的计算时长。
*   **平台支持**：实验是在 AnnoQ 平台（基于 WGSA v0.95 工作流）上完成的，这是一个集成的大规模基因变异注释查询系统。

### 5. 实验数量与充分性
*   **实验规模**：分析了超过 4000 万个 SNP，涵盖了基因区（Genic）和基因间区（Intergenic），实验规模极其宏大。
*   **统计严谨性**：采用了配对 t 检验，并针对染色体级别的聚合数据进行了 **Bonferroni 校正**，以避免因 SNP 间的连锁不平衡（LD）导致的统计显著性虚高。
*   **充分性评价**：实验设计非常充分且客观。作者不仅做了全基因组的统计对比，还通过结直肠癌的实际案例验证了这些统计差异如何转化为生物学结论的差异。

### 6. 主要结论与发现
*   **模型差异巨大**：RefSeq 映射到的蛋白质 SNP 数量比 Ensembl 多出约 32.6%，尤其在基因间区表现出更广的覆盖范围。
*   **工具表现各异**：
    *   **SnpEff** 表现最稳健，覆盖率最高（全基因组约 94.1%-99.2%）。
    *   **VEP** 在基因区表现良好，但在基因间区（Intergenic）的覆盖率骤降（尤其配合 RefSeq 时仅为 1.4%）。
    *   **ANNOVAR** 表现居中。
*   **通路分析受损**：在结直肠癌案例中，单一工具/模型（如 VEP+RefSeq）遗漏了关键的“钙粘蛋白信号通路”和“早老素通路”，而集成策略能找回所有显著通路。
*   **集成必要性**：没有任何单一配置能达到 100% 的并集覆盖，只有跨工具、跨模型的集成才能提供最稳健的解释。

### 7. 优点
*   **规模化**：首次在 4000 万 SNP 级别上完成了工具间差异的量化。
*   **实用性强**：为基因组研究人员提供了明确的建议——不要迷信单一工具，应采用集成策略。
*   **标准化流程**：通过 HGNC 映射解决了长期困扰注释对比的 ID 不统一问题。

### 8. 不足与局限
*   **缺乏绝对金标准**：由于生物学上并没有一个完美的“SNP-蛋白质”真值表，研究只能以“并集”作为参考，这可能包含一些假阳性注释。
*   **仅限蛋白质编码基因**：研究排除了伪基因和非编码 RNA，这在非编码区功能研究日益重要的今天是一个限制。
*   **计算复杂性**：虽然集成策略更稳健，但对于普通实验室来说，同时运行和维护三个大型注释工具及两个基因模型具有较高的技术门槛。

（完）
