---
title: Hybrid crosses reveal a cell-type-specific landscape of mouse regulatory variation
title_zh: 杂交揭示小鼠调控变异的细胞类型特异性全景
authors: "Weber, R., Carilli, M., Rebboah, E., Filimban, G., Liang, H. Y., Trout, D., Duffield, M., Mahdipoor, P., Taghizadeh, E., Fattahi, N., Mojaverzargar, R., Kawauchi, S., Williams, B. A., MacGregor, G., Wold, B., Pachter, L., Hallgrimsdottir, I. B., Mortazavi, A."
date: 2026-04-04
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.02.716195v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 基因表达的遗传结构和调控变异
tldr: 研究通过分析C57BL/6J小鼠与多种品系杂交后代的单核RNA测序数据，系统揭示了不同细胞类型的调控变异格局。结果显示多数基因调控不保守，顺式因素主导表达差异而反式效应更细胞类型特异，从而构建了一个解码哺乳动物基因调控复杂性的基础资源。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-716195-v1/fig-001.webp\", \"caption\": \"Figure 1. A multi-tissue, multi-strain single-nucleus RNA-seq dataset for inferring regulatory variation. (A) Schematic representation of cis-acting and trans-acting genetic variants. (B) Overview of the dataset across eight tissue groups, 15 genotypes, and eight replicates. (C) Genetic variation present among the eight CC founder strains. (D) Bulk whole-tissue regulatory assignments in seven parental-F1 trios. (E–H) Log2 fold change in expression between parents (RP ) by proportion cis for each gene in a cell type. Stacked bar plots depict the breakdown of regulatory assignments for each cell type: (E) liver hepatocytes in B6J-CASTJ trios, (F) liver hepatocytes in B6J-WSBJ trios, (G) diencephalon/pituitary astrocytes in B6J-CASTJ trios, and (H) diencephalon/pituitary astrocytes in B6J-WSBJ trios.\", \"page\": 3, \"index\": 1, \"width\": 1054, \"height\": 815}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-716195-v1/fig-002.webp\", \"caption\": \"Figure 2. Cell-type resolved regulatory assignments in the cortex/hippocampus and diencephalon/pituitary gland. Proportion bar plots of genes in each regulatory category per cell type in the cortex/hippocampus (A) and the diencephalon/pituitary gland (B). Number of genes assigned to each regulatory category in the cortex/hippocampus and diencephalon for microglia (C) and glutamatergic neurons (D). Sankey diagrams showing the switches in regulatory assignments between the cortex/hippocampus (left) and diencephalon (right) for microglia (1,558 shared genes) (E) and glutamatergic neurons (9,135 shared genes) (F). Proportion cis plots and stacked bar plots depicting regulatory assignment proportions in the diencephalon for microglia (G) and glutamatergic neurons (H). RP = parental log2 fold change. Pseudobulked gene expression of B6J and CASTJ parental strains and allele-specific expression of B6J–CASTJ F1s, shown for microglia (I–K; Gsap, Spi1, Olfml3) and glutamatergic neurons (L–N; Gsap, Dcc, Phldb2).\", \"page\": 5, \"index\": 2, \"width\": 1054, \"height\": 815}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-716195-v1/fig-003.webp\", \"caption\": \"Figure 3. Regulatory variation across diverse cell types in B6J–CASTJ F1 trios. (A) Pairwise scatter plots showing proportion of regulatory assignments across nine tissues, encompassing 126 unique cell-type-tissue combinations. ρ indicates the Spearman correlation coefficient. (B) Stacked proportion bar plots of the top ten and bottom ten cell types by conserved proportion, with color of the cell-type text indicating its tissue of origin. (C) Proportions of regulatory assignments are plotted across 20 quantiles of absolute parental log2 fold change (RP ). The black line indicates the global mean across all cell types. (D) Regulatory sharing between 6,730 cell-type pairs. (E) Distribution of promoter SNP density across levels of cis-regulatory conservation. Genes are binned by the fraction of cell types showing cis-acting effects. SNP density represents the proportion of SNPs within the proximal promoter region of the transcription start site (TSS). Mann–Whitney U test with Benjamini–Hochberg correction (* q < 0.05), with significance relative to the first bin. (F) Per-gene regulatory class fraction across 126 cell type–tissue combinations, grouped by IMPC knockout viability. Mann–Whitney U test with Benjamini–Hochberg correction (* q < 0.05, ** q < 0.01, *** q < 0.001).\", \"page\": 6, \"index\": 3, \"width\": 1054, \"height\": 1127}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-716195-v1/fig-004.webp\", \"caption\": \"Figure 4. Landscape of cis- and trans-acting variation in seven parental–F1 trios. (A, B) Proportion bar plots showing the regulatory composition of glutamatergic neurons (A) and microglia (B) across seven parental–F1 trios. (C) Box plots (top) showing the proportion of genes within each regulatory class across all cell types for seven mouse strains, with significance relative to the AJ (p < 0.01, Mann–Whitney U test). The corresponding divergence for each strain (bottom) is expressed as the ∆ in cell-type proportions relative to the AJ baseline. (D) Enrichment of observed cis×trans-acting variation relative to expected frequency. Box plots show distribution across all cell types in each tissue. (E) Mean number of strains a gene shares a regulatory assignment in for each cell type for cis-, cis×trans-, and trans-acting assignments. (F) Overall average of regulatory assignments across all cell types. (G) Number of parental–F1 trios a gene shares a regulatory assignment in for mature oligodendrocytes of the diencephalon. (H, I) Heatmaps of parental and hybrid log2 fold changes for genes with shared regulatory assignments across all seven parental–F1 trios, including 14 genes with shared cis-acting (H) and 45 genes with shared cis×trans-acting (I) assignments.\", \"page\": 8, \"index\": 4, \"width\": 1054, \"height\": 896}]"
motivation: 该研究旨在揭示基因表达调控的遗传结构及其在不同细胞类型中的变异机制。
method: 研究利用单核RNA测序分析八种组织的670万个细胞核，比较C57BL/6J母本与多个父本杂交的F1代及亲本的表达模式。
result: 发现超九成检测到的基因在至少一种细胞类型中表现出非保守的调控，且顺式变异主导表达差异，反式效应更具细胞类型特异性。
conclusion: 本研究建立了小鼠细胞类型特异性基因调控变异的全面图谱，为解析哺乳动物基因表达调控的复杂性奠定基础。
---

## 摘要
理解基因表达的遗传结构是进化生物学和医学的基础。作为 IGVF 联盟的一部分，我们呈现了一个包含 670 万个细胞核、涵盖八个组织类别的单核 RNA 测序资源，其中包括来自 C57BL/6J 母鼠与其他 Collaborative Cross 创始品系交配而成的七种 F1 杂交鼠，并与亲本品系进行比较。我们在 92 种细胞类型的一个或多个杂交组合中，鉴定出 25,777 个基因（占检测到基因的 91%）在至少一种细胞类型中表现出非保守的调控行为。我们的结果显示，虽然通过 cis 作用变异主要驱动调控差异，但 trans 作用效应在细胞类型上具有显著特异性，并且对组织环境更为敏感。值得注意的是，整体组织分析往往掩盖了这些信号，尤其是在如星形胶质细胞等细胞数量较少的群体中。此外，增加遗传分化主要会扩展 cis 作用变异的范围，而 trans 作用效应在物种内的遗传距离范围内保持稳定。该图谱为解码遗传变异与细胞类型特异性调控之间的复杂相互作用提供了基础框架。

## Abstract
Understanding the genetic architecture of gene expression is fundamental to evolutionary biology and medicine. As part of the IGVF Consortium, we present a single-nucleus RNA-seq resource of 6.7 million nuclei across eight tissue groups, featuring seven F1 hybrids from C57BL/6J dams crossed with the other Collaborative Cross founder strains for comparison against parental strains. We identify 25,777 genes (91% of those detected) exhibiting non-conserved regulatory behavior in at least one of 92 cell types in one or more crosses. Our results show that while cis-acting variation primarily drives divergence, trans-acting effects are substantially more cell-type specific and sensitive to tissue environment. Notably, bulk tissue analyses frequently mask these signals, particularly in smaller populations such as astrocytes. Furthermore, increasing genetic divergence primarily expands the landscape of cis-acting variation, while trans-acting effects remain stable across genetic distances within species. This atlas establishes a foundational framework for decoding the complex interplay between genetic variation and cell-type-specific regulation across the mammalian body.

---

## 论文详细总结（自动生成）

# 《杂交揭示小鼠调控变异的细胞类型特异性全景》论文详析

---

## 一、核心问题与研究背景

- **核心问题**：探究小鼠基因表达的遗传调控结构，厘清顺式（cis）与反式（trans）作用的相对贡献及其在不同细胞类型间的特异性。
- **研究动机**：尽管已有大量关于基因表达差异的研究，但大部分局限于整体组织层面，忽略了不同细胞类型内的调控差异。理解这种细胞类型特异性调控对于进化生物学和疾病机制研究至关重要。
- **背景体系**：研究属于 **Impact of Genomic Variation on Function (IGVF)** 联盟的一部分，旨在解析非编码遗传变异如何影响基因表达与表型。

---

## 二、方法论与技术框架

### 1. 核心思想
- 基于 **单核 RNA 测序 (snRNA-seq)** 技术，通过比较亲本品系与 F1 杂交个体的 **基因双等位表达差异** 来解析 cis 与 trans 调控作用。
- 建立跨品系、跨组织的细胞类型分辨度基础图谱，量化每个细胞类型中基因表达受顺式或反式遗传因素影响的程度。

### 2. 关键技术细节
- 使用 **XgeneR 包**建立广义线性模型（GLM）框架，用于区分不同调控类型：
  - **输入数据**：亲本总体表达 + 杂交体的等位基因特异性表达。
  - **模型策略**：对两组数据拟合负二项分布，检验 cis 与 trans 权重是否显著偏离零。
  - **分类方式**：
    - *cis-acting*：F1 的等位差与亲本差相符；
    - *trans-acting*：亲本差显著但 F1 中无等位偏差；
    - *cis+trans* 或 *cis×trans*：两者方向一致或相反。
- 引入 **“比例 cis” 指标**（proportion cis）以连续量化顺式调控在总体变化中的贡献度。
- 使用 **g2gtools** 生成品系特异参考基因组，结合 **kallisto/kb-python** 实现无偏比对和定量。
- 所有核数据进行 **CellBender** 去背景、**Scrublet** 去双胞细胞检测及 **Scanpy** 聚类分析。

---

## 三、实验设计

### 1. 数据集构成
- **生物材料**：C57BL/6J（母本）与其他 7 种 Collaborative Cross 创始品系杂交所得 F1 小鼠。
- **组织覆盖**：8 个组织群（肾、肝、脑区、心脏、肌肉、肾上腺及生殖腺）共计 6.7 百万个细胞核。
- **细胞类型**：识别并注释了 *92 种细胞类型及状态*。
- **关联资源**：整合之前的创始品系单核转录组数据库（Rebboah et al., 2025）。

### 2. 数据处理流程
- 构建八块条码实验板，共 512 个样本；
- 平均测序深度约 25 亿读段/组织；
- 去除环境 RNA 后保留约 534 万个高质量细胞核。

### 3. 对比与分析维度
- 对比 **亲本 vs F1 杂交体** 在表达调控的类型与比例上的变化；
- 细胞层面与整体组织层面的交叉分析，评估 bulk 分析是否掩盖细胞型差异；
- 比较不同品系杂交组合的调控模式变化与遗传分化距离的关联。

---

## 四、资源与算力

- 文中未直接报告 GPU 或计算资源型号。
- 从数据规模和工具来看，推测采用高性能计算环境运行，但无明确信息关于算力、节点数量或处理时长。
- 可确认使用 IGVF 基因组数据门户及 Parse Biosciences 自动化测序平台完成大型数据处理。

---

## 五、实验数量与充分性评估

- **实验广度**：跨越 7 种 F1 杂交组合、8 个组织、92 种细胞类型。
- **对比维度**：
  - 逐细胞类型的 cis/trans 比例；
  - 相同细胞类型在不同组织中的调控差异；
  - 不同品系的遗传距离与调控类型变化；
  - 关联基因功能（IMPC 敲除存活率）、启动子 SNP 密度与调控类型关系。
- **充分性**：
  - 数据量极大（约 670 万核），覆盖广泛；
  - 实验重复（八次组织独立板）说明统计稳健；
  - 模型公平：对所有基因与细胞类型使用一致阈值和同一算法流程。
  
  → 整体实验设定充分且客观。

---

## 六、主要结论与发现

1. **普遍调控变异**：超过 91% 的检测基因在至少一细胞类型中表现出非保守调控。
2. **顺式主导**：cis 变异是主要差异来源，影响范围随遗传距离增大而扩展。
3. **反式特异性**：trans 作用更具细胞类型特异性和组织依赖性。
4. **补偿机制存在**：cis×trans（对抗性）调控广泛存在，并常与小幅表达差异相关。
5. **细胞层面发现**：
   - 星形胶质细胞、微胶质细胞等表现出较低调控保守性；
   - 高度表达、关键性发育基因倾向于保守调控。
6. **功能关联**：
   - 含多启动子 SNP 的基因更可能在多细胞类型中呈现顺式变异；
   - 致死性基因更倾向于保守调控，非致死基因允许更多调控多样性。
7. **遗传分化效应**：
   - 更远缘的交配（如 CAST/EiJ）带来更高的 cis 调控比例；
   - trans 调控相对稳定。

---

## 七、研究优点与创新亮点

- **分辨率高**：首次在单细胞层面系统测定小鼠 cis/trans 调控模式。
- **跨品系比较体系**：利用 Collaborative Cross，捕捉超过 90% 小鼠遗传多样性。
- **数据规模大**：6.7 百万个核、8 个组织、92 种细胞类型，构筑完备图谱。
- **定量模型新颖**：引入 proportion cis 连续指标，优于传统分类模式。
- **公开资源**：提供交互式数据浏览器与开源代码，有助复现与延展研究。
- **生物学洞察**：揭示调控多样性与基因功能约束、适应性变异间的联系。

---

## 八、不足与局限性

- **算力与资源描述不足**：未明确报告算法运行环境与计算资源，影响评估 reproducibility。
- **样本限制**：
  - 暂未覆盖胚胎期或病理状态组织；
  - 仅涉及母本为 B6J 的杂交方向，可能存在母系偏倚。
- **技术局限**：
  - snRNA-seq 仍无法捕捉快速转录动态或时序性调控；
  - GLM 模型假定统计独立性，可能忽略复杂网络效应。
- **功能验证缺失**：未通过实验追踪关键基因的调控机制验证。
- **物种外推性有限**：结果主要适用小鼠，向人类或其他哺乳类推广仍需进一步验证。

---

（完）
