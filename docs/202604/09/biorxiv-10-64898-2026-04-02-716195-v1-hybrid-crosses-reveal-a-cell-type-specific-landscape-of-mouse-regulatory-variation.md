---
title: Hybrid crosses reveal a cell-type-specific landscape of mouse regulatory variation
title_zh: 杂交分析揭示了小鼠调控变异的细胞类型特异性全景图
authors: "Weber, R., Carilli, M., Rebboah, E., Filimban, G., Liang, H. Y., Trout, D., Duffield, M., Mahdipoor, P., Taghizadeh, E., Fattahi, N., Mojaverzargar, R., Kawauchi, S., Williams, B. A., MacGregor, G., Wold, B., Pachter, L., Hallgrimsdottir, I. B., Mortazavi, A."
date: 2026-04-04
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.02.716195v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 基因表达的遗传结构和调控变异
tldr: 研究通过对七种F1杂交小鼠的八类组织进行单核RNA测序，系统描绘了细胞类型特异性基因调控变异图谱，揭示顺式变异主导基因表达差异而反式调控更依赖细胞环境，并建立了跨哺乳动物组织的基因调控基础框架。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-716195-v1/fig-001.webp\", \"caption\": \"Figure 1. A multi-tissue, multi-strain single-nucleus RNA-seq dataset for inferring regulatory variation. (A) Schematic representation of cis-acting and trans-acting genetic variants. (B) Overview of the dataset across eight tissue groups, 15 genotypes, and eight replicates. (C) Genetic variation present among the eight CC founder strains. (D) Bulk whole-tissue regulatory assignments in seven parental-F1 trios. (E–H) Log2 fold change in expression between parents (RP ) by proportion cis for each gene in a cell type. Stacked bar plots depict the breakdown of regulatory assignments for each cell type: (E) liver hepatocytes in B6J-CASTJ trios, (F) liver hepatocytes in B6J-WSBJ trios, (G) diencephalon/pituitary astrocytes in B6J-CASTJ trios, and (H) diencephalon/pituitary astrocytes in B6J-WSBJ trios.\", \"page\": 3, \"index\": 1, \"width\": 1054, \"height\": 815}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-716195-v1/fig-002.webp\", \"caption\": \"Figure 2. Cell-type resolved regulatory assignments in the cortex/hippocampus and diencephalon/pituitary gland. Proportion bar plots of genes in each regulatory category per cell type in the cortex/hippocampus (A) and the diencephalon/pituitary gland (B). Number of genes assigned to each regulatory category in the cortex/hippocampus and diencephalon for microglia (C) and glutamatergic neurons (D). Sankey diagrams showing the switches in regulatory assignments between the cortex/hippocampus (left) and diencephalon (right) for microglia (1,558 shared genes) (E) and glutamatergic neurons (9,135 shared genes) (F). Proportion cis plots and stacked bar plots depicting regulatory assignment proportions in the diencephalon for microglia (G) and glutamatergic neurons (H). RP = parental log2 fold change. Pseudobulked gene expression of B6J and CASTJ parental strains and allele-specific expression of B6J–CASTJ F1s, shown for microglia (I–K; Gsap, Spi1, Olfml3) and glutamatergic neurons (L–N; Gsap, Dcc, Phldb2).\", \"page\": 5, \"index\": 2, \"width\": 1054, \"height\": 815}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-716195-v1/fig-003.webp\", \"caption\": \"Figure 3. Regulatory variation across diverse cell types in B6J–CASTJ F1 trios. (A) Pairwise scatter plots showing proportion of regulatory assignments across nine tissues, encompassing 126 unique cell-type-tissue combinations. ρ indicates the Spearman correlation coefficient. (B) Stacked proportion bar plots of the top ten and bottom ten cell types by conserved proportion, with color of the cell-type text indicating its tissue of origin. (C) Proportions of regulatory assignments are plotted across 20 quantiles of absolute parental log2 fold change (RP ). The black line indicates the global mean across all cell types. (D) Regulatory sharing between 6,730 cell-type pairs. (E) Distribution of promoter SNP density across levels of cis-regulatory conservation. Genes are binned by the fraction of cell types showing cis-acting effects. SNP density represents the proportion of SNPs within the proximal promoter region of the transcription start site (TSS). Mann–Whitney U test with Benjamini–Hochberg correction (* q < 0.05), with significance relative to the first bin. (F) Per-gene regulatory class fraction across 126 cell type–tissue combinations, grouped by IMPC knockout viability. Mann–Whitney U test with Benjamini–Hochberg correction (* q < 0.05, ** q < 0.01, *** q < 0.001).\", \"page\": 6, \"index\": 3, \"width\": 1054, \"height\": 1127}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-716195-v1/fig-004.webp\", \"caption\": \"Figure 4. Landscape of cis- and trans-acting variation in seven parental–F1 trios. (A, B) Proportion bar plots showing the regulatory composition of glutamatergic neurons (A) and microglia (B) across seven parental–F1 trios. (C) Box plots (top) showing the proportion of genes within each regulatory class across all cell types for seven mouse strains, with significance relative to the AJ (p < 0.01, Mann–Whitney U test). The corresponding divergence for each strain (bottom) is expressed as the ∆ in cell-type proportions relative to the AJ baseline. (D) Enrichment of observed cis×trans-acting variation relative to expected frequency. Box plots show distribution across all cell types in each tissue. (E) Mean number of strains a gene shares a regulatory assignment in for each cell type for cis-, cis×trans-, and trans-acting assignments. (F) Overall average of regulatory assignments across all cell types. (G) Number of parental–F1 trios a gene shares a regulatory assignment in for mature oligodendrocytes of the diencephalon. (H, I) Heatmaps of parental and hybrid log2 fold changes for genes with shared regulatory assignments across all seven parental–F1 trios, including 14 genes with shared cis-acting (H) and 45 genes with shared cis×trans-acting (I) assignments.\", \"page\": 8, \"index\": 4, \"width\": 1054, \"height\": 896}]"
motivation: 该研究旨在揭示小鼠中基因表达的遗传结构及其在不同细胞类型中的调控变异。
method: 利用单核RNA测序分析七种F1杂交小鼠及其亲本的八类组织，共获得670万个细胞核数据。
result: "发现约91%的基因在至少一种细胞类型中表现出非保守的调控行为，且顺式变异主导差异，而反式效应更具细胞类型特异性。"
conclusion: 该图谱为理解遗传变异与细胞类型特异性调控关系提供了重要基础。
---

## 摘要
理解基因表达的遗传结构对于进化生物学和医学至关重要。作为 IGVF 联盟的一部分，我们提供了包含 670 万个细胞核、覆盖八个组织组的单核 RNA 测序资源，其中包括由 C57BL/6J 母本与其他 Collaborative Cross 创始品系杂交而成的七种 F1 杂交体，用于与亲本品系进行对比。我们鉴定出 25,777 个基因（占检测到基因的 91%）在至少一种跨系杂交中的 92 种细胞类型中的一种或多种表现出非保守的调控行为。我们的结果显示，尽管顺式作用变异主要驱动了表达差异，但反式作用效应在细胞类型上表现出显著的特异性，并且对组织环境更为敏感。值得注意的是，整体组织分析往往掩盖了这些信号，尤其是在星形胶质细胞等较小群体中。此外，遗传分化的增加主要扩大了顺式作用变异的范围，而反式作用效应在物种内部不同的遗传距离间则保持稳定。本图谱为解析遗传变异与细胞类型特异性调控在整个哺乳动物体内复杂相互作用的研究奠定了基础框架。

## Abstract
Understanding the genetic architecture of gene expression is fundamental to evolutionary biology and medicine. As part of the IGVF Consortium, we present a single-nucleus RNA-seq resource of 6.7 million nuclei across eight tissue groups, featuring seven F1 hybrids from C57BL/6J dams crossed with the other Collaborative Cross founder strains for comparison against parental strains. We identify 25,777 genes (91% of those detected) exhibiting non-conserved regulatory behavior in at least one of 92 cell types in one or more crosses. Our results show that while cis-acting variation primarily drives divergence, trans-acting effects are substantially more cell-type specific and sensitive to tissue environment. Notably, bulk tissue analyses frequently mask these signals, particularly in smaller populations such as astrocytes. Furthermore, increasing genetic divergence primarily expands the landscape of cis-acting variation, while trans-acting effects remain stable across genetic distances within species. This atlas establishes a foundational framework for decoding the complex interplay between genetic variation and cell-type-specific regulation across the mammalian body.

---

## 论文详细总结（自动生成）

# 《杂交分析揭示了小鼠调控变异的细胞类型特异性全景图》论文总结

---

## 一、核心问题与整体含义
- **研究背景**：在遗传学与分子生物学中，理解基因表达的遗传结构及其调控机制是揭示生物性状形成与疾病机制的关键。传统“整体组织”层面的基因表达分析难以捕捉细胞类型之间的差异，可能掩盖真实的遗传调控效应。
- **核心问题**：不同细胞类型对基因调控变异的响应是否一致？顺式（cis）与反式（trans）调控在多细胞环境中的贡献如何随细胞类型变化？
- **研究意义**：本研究在小鼠杂交系统中系统揭示了细胞类型特异的基因调控变异图谱，为理解哺乳动物的组织特异性表达调控奠定基础，并为生物医学中解析复杂遗传调控网络提供数据框架。

---

## 二、方法论：核心思想与技术流程
- **核心思想**：通过跨品系杂交（F1 hybrid crosses）及单核RNA测序（snRNA-seq），比较亲本与后代在单细胞水平上的基因表达与等位基因特异性表达模式，区分顺式与反式遗传效应。
- **关键步骤**：
  1. **杂交设计**：以 C57BL/6J 为母本，与 Collaborative Cross 的七个创始品系杂交，形成七种 F1 杂交体。
  2. **数据采集**：对八类组织（如肝、皮质、丘脑/垂体等）进行单核RNA测序，共获得约 670 万个细胞核的表达数据。
  3. **调控分类算法**：根据亲本间表达差异（parental log2 fold change，RP）与F1中等位基因表达比例，使用基因级别的 **顺式/反式作用分类模型** 将每个基因归类为：
     - 顺式调控（cis）
     - 反式调控（trans）
     - 顺反交互（cis×trans）
     - 保守（conserved）
  4. **跨组织比较**：建立细胞类型级的调控状态矩阵，计算调控共享性（cross-cell-type conservation）与SNP密度相关性。
- **数学思想**：通过比较等位基因表达比例与亲本表达比的相对关系，实现对顺式与反式调控的区分。

---

## 三、实验设计
- **数据集来源**：
  - 七种小鼠 F1 杂交体，每种包括母本 C57BL/6J 与不同父本品系。
  - 八类组织：皮质/海马、丘脑/垂体、肝脏、肾脏、心脏、肺、脾脏、骨骼肌。
  - 总计 670 万个细胞核，涵盖 92 种细胞类型。
- **Benchmark 与对比策略**：
  - 对比亲本表达差异与 F1 杂交体的等位基因特异性表达。
  - 对比跨品系（如 B6J–CASTJ、B6J–WSBJ）中的调控分布一致性。
  - 进行顺式与反式调控的共享度和保守度分析。
- **验证方法**：
  - 使用伪bulk表达数据验证顺式变异的稳定性。
  - 通过基因启动子区域的SNP密度与调控类型关联分析验证调控效应的遗传基础。

---

## 四、资源与算力使用情况
- **算力信息**：论文未明确说明使用的计算平台或GPU型号。
- **推测**：由于数据量巨大（670万单核），分析可能依赖高性能集群或云计算平台进行并行处理，但文中未给出具体训练或处理时长、算力规格。

---

## 五、实验数量与充分性
- **实验范围**：
  - 覆盖八类组织，92种细胞类型。
  - 分析七种 F1 杂交体，每种含多个生物学重复。
  - 调控分类涵盖约 25,777 个基因（占检测基因的 91%）。
- **实验充分性评价**：
  - 实验设计横跨多组织、多遗传背景，数据广度显著。
  - 细胞层面分析能较好排除组织混合效应。
  - 然而关于反式调控的验证及功能性机制仍基于统计推断，缺乏实验生物验证（如CRISPR或基因敲除实证）。

---

## 六、主要结论与发现
- **核心发现**：
  1. **91% 的基因**在至少一种细胞类型中表现出非保守调控模式；
  2. **顺式变异**（cis）主导基因表达的差异；
  3. **反式效应**（trans）表现出强烈的细胞类型特异性，与组织环境密切相关；
  4. 整体组织（bulk）分析会掩盖调控差异，尤其在稀有细胞群（如星形胶质细胞）中；
  5. 遗传分化的增加主要扩展顺式变异景观，而反式调控在同种内保持相对稳定；
  6. 含更多启动子 SNP 的基因更可能表现为顺式调控非保守。

---

## 七、优点（创新与亮点）
- **多层级整合分析**：首次系统地从细胞类型维度分析顺式与反式调控的分布，为组织特异性调控研究提供新框架。
- **数据规模庞大**：670万个细胞核的单核RNA测序覆盖广泛组织，样本代表性高。
- **算法细粒度**：调控分类模型兼顾亲本差异与等位基因表达比例，区分精度高。
- **可跨组织比较**：提供调控共享性的定量分析模型，揭示细胞类型间调控的层级关系。

---

## 八、不足与局限
- **算力及计算流程未披露**：难以评估分析成本与 reproducibility。
- **缺乏功能验证**：对顺式/反式调控的推断主要基于表达相关性，缺乏因果实验证。
- **组织覆盖局限**：虽有八类组织，但尚未包括如免疫系统中的所有细胞亚型。
- **跨物种推广性待验证**：结果基于 Collaborative Cross 小鼠系，能否外推至其他哺乳动物尚不明确。
- **批次偏差风险**：单核RNA测序可能受样品处理与测序深度影响，文中未详细说明消除批次效应的策略。

---

**（完）**
