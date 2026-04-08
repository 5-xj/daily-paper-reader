---
title: "A High-Quality Genome Assembly of Chaetoceros muelleri Reveals Extensive Gene Duplication, Functional Diversification, and Unique Lineage-Specific Innovation"
title_zh: 高质量的曲壳藻（Chaetoceros muelleri）基因组组装揭示了广泛的基因重复、功能多样化以及谱系特异的创新
authors: "Sanyal, A., Andren, E., Tellgren Roth, C."
date: 2026-04-07
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.04.716509v1.full.pdf"
tags: ["query:gene"]
score: 10.0
evidence: 高质量核基因组组装及跨基因组比较分析
tldr: 本研究首次利用从沉积物中复活的C. muelleri细胞，通过PacBio HiFi长读段技术组装出高质量基因组。比较分析揭示该种具有独特的基因扩展、功能分化与转座元件驱动的结构动态，为理解硅藻进化与适应提供关键资源。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-04-716509-v1/fig-001.webp\", \"caption\": \"Fig. 2b. Pairwise comparison of unique versus shared COG categories in C. muelleri and C. tenuissimus.\", \"page\": 25, \"index\": 1, \"width\": 654, \"height\": 329}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-04-716509-v1/fig-002.webp\", \"caption\": \"Fig. 4. TE landscape in C. muelleri\", \"page\": 26, \"index\": 2, \"width\": 871, \"height\": 327}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-04-716509-v1/fig-003.webp\", \"caption\": \"Fig. 5. Proxy enrichment for C. tenuissimus vs. C. muelleri orthogroups A (GO enrichment): Significantly enriched GO terms (Top-20 by FDR) in the C. muelleri proxy gene set drawn from orthogroups where C. tenuissimus has higher copy-number than C. muelleri. Dot size reflects overlap; color encodes −log (FDR). B (PFAM): PFAM domain enrichment (Top-20) shown as horizontal bars (odds ratio). Enriched domains include chromatin- and stress-linked modules (e.g., HSF_DNA-bind, Histone), transporters (Bestrophin, Silic_transp), sulfur metabolism (Sulfatase/Sulfotransfer_2), and TE-associated signatures (RVT_1, rve). C (KEGG): KEGG pathway enrichment (Top-20) with bubble size = overlap and color = −log (FDR); chromatin-heavy and stress/cell-death signaling maps dominate. D (bCOG): COG category enrichment (bars = odds ratio; orange indicates FDR ≤ 0.05). COG P (Inorganic ion transport & metabolism) is significantly enriched. Design: Target set = 1,135 annotated C. muelleri genes from 834 Cten > CM orthogroups; background = all annotated C. muelleri genes (n ≈ 8,826). Tests used Fisher’s exact with\", \"page\": 26, \"index\": 3, \"width\": 736, \"height\": 276}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-04-716509-v1/fig-004.webp\", \"caption\": \"Fig. 3. Overall repeats of all the classes of the C. muelleri genome\", \"page\": 26, \"index\": 4, \"width\": 709, \"height\": 356}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-04-716509-v1/fig-005.webp\", \"caption\": \"Table 2. Superfamilies of repeats\", \"page\": 21, \"index\": 5, \"width\": 906, \"height\": 443}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-04-716509-v1/fig-006.webp\", \"caption\": \"Fig. 6. Lineage-Structured Gene Duplication Across Diatoms Heatmap showing presence–absence heatmap of OGs across the 14 genomes. Cells reflect the number of OGs shared by each species pair. Species are ordered by morphology (centric vs pennate), revealing clusters of high OG sharing and broader evolutionary structure.\", \"page\": 27, \"index\": 6, \"width\": 798, \"height\": 552}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-04-716509-v1/fig-007.webp\", \"caption\": \"Table 1. Genome properties of C. muelleri\", \"page\": 20, \"index\": 7, \"width\": 881, \"height\": 1066}]"
motivation: 硅藻在海洋初级生产中占重要地位，但缺乏高质量核基因组资源。
method: 研究者通过复活沉积孢子并采用PacBio HiFi长读段测序组装核基因组，进行比较与功能富集分析。
result: 得到一个紧凑、高连续、高完整性的C. muelleri核基因组，并发现广泛的基因重复与功能多样化。
conclusion: 本研究为C. muelleri提供了基础基因组资源，并揭示转座元件在硅藻基因组可塑性和进化中的重要作用。
---

## 摘要
硅藻是海洋初级生产的重要贡献者，但对于如曲壳藻（Chaetoceros）等生态上优势谱系而言，高质量的核基因组资源仍然稀缺。本研究首次报告了曲壳藻（Chaetoceros muelleri）的高质量核基因组组装，该基因组来自波罗的海沉积物中休眠孢子复活所得的活细胞，并利用 PacBio HiFi 长读长测序技术获得。组装结果显示其基因组规模紧凑（43 Mb）、连续性高（N50 = 1.40 Mb），完整度高（93% BUSCO）。在 14 种硅藻基因组的比较分析中，C. muelleri 表现出广泛的谱系特异和扩张的基因家族，同时拥有一个较小、保守的核心基因组，体现了快速的进化更替。功能富集分析显示，多糖生物合成、囊泡介导运输、膜重塑和转录调控等功能的多样化，这与其壳硅（frustule）形成及环境响应的适应性相关。转座元件（TEs）对其基因组结构具有显著影响，占组装序列的约 18%，其中以 LTR 反转录转座子为主，且存在大量未分类重复序列，表明存在新型或高度分化的 TE 谱系。DNA 复制、重组与修复功能的富集进一步表明，基因组维持机制可能对 TE 驱动的结构动态变化起到补偿作用。与 C. tenuissimus 的直接比较揭示了基因家族扩张和调控创新的差异模式，突显了曲壳藻属内部的分化进化策略。通过将复活生态学与长读长基因组学相结合，本研究为 C. muelleri 提供了基础的基因组资源，并凸显了 TE 介导的基因组可塑性在硅藻进化中的作用。

## Abstract
Diatoms are major contributors to marine primary production, yet high quality nuclear genome resources remain scarce for ecologically dominant lineages such as Chaetoceros. Here, we present the first high quality nuclear genome assembly of Chaetoceros muelleri, generated from living cells resurrected from resting spores preserved in Baltic Sea sediments and sequenced using PacBio HiFi long read technology. The assembly is compact (43 Mb), highly contiguous (N50 = 1.40 Mb), and highly complete (93% BUSCO). Comparative analyses across 14 diatom genomes revealed extensive lineage specific and expanded gene families in C. muelleri, alongside a small, conserved core genome, reflecting rapid evolutionary turnover. Functional enrichment highlighted diversification of polysaccharide biosynthesis, vesicle mediated trafficking, membrane remodelling, and transcriptional regulation, consistent with adaptations linked to frustule formation and environmental responsiveness. Transposable elements (TEs) strongly shape the genome, accounting for ~18% of the assembly, with dominant LTR retrotransposons and a large fraction of unclassified repeats suggesting novel or highly diverged TE lineages. Enrichment of DNA replication, recombination, and repair functions further indicates compensatory genome maintenance associated with TE driven structural dynamics. Direct comparison with C. tenuissimus revealed contrasting patterns of gene family expansion and regulatory innovation, underscoring divergent evolutionary strategies within Chaetoceros. By integrating resurrection ecology with long read genomics, this study provides a foundational genomic resource for C. muelleri and highlights the role of TE mediated genome plasticity in diatom evolution.

---

## 论文详细总结（自动生成）

# 曲壳藻（Chaetoceros muelleri）高质量基因组研究总结

---

## 一、研究核心问题与整体背景

- **研究动机**：硅藻（Diatoms）是海洋初级生产的主要贡献者，占全球碳固定的约 20–30%。曲壳藻属（Chaetoceros）在生态系统中具有决定性作用，但长期以来缺乏高质量的**核基因组参考序列**。  
- **研究空白**：此前仅有两种 Chaetoceros 物种（C. tenuissimus、C. gracilis）拥有核基因组。多数研究集中于叶绿体或线粒体基因组，限制了对基因复制、转座元件（TE）、功能分化及环境适应机制的理解。  
- **研究目标**：本研究希望构建一个高质量的 **C. muelleri 核基因组**，并通过跨物种比较揭示其谱系特异的基因创新与 TE 驱动的基因组动态。

---

## 二、方法论：核心思想与关键技术

- **总体框架**：结合“**复活生态学（Resurrection Ecology）**”与“**长读长基因组学**”。
  - 从波罗的海沉积物中取样，复活休眠孢子，获得活性细胞。
  - 利用 **PacBio HiFi 长读段测序技术**，实现高精度、高连续的核基因组组装。
- **组装流程**：
  1. **DNA提取**：对复活的单一菌株进行温和裂解与酚-氯仿提取。
  2. **测序与组装**：  
     - 测序平台：PacBio Revio，单细胞 25M。  
     - 使用组装软件：**hifiasm v0.19.6** 与 **flye v2.8.3**。  
     - 污染剔除：BLAST 比对和 rRNA 检测，用 barrnap 工具区分非目标序列（如细菌/共生藻）。
  3. **组装统计**：Assembly-stats 工具计算 contig 数、GC 含量、N50 等指标。
  4. **完整性评估**：用 **BUSCO v5.7.1**（stramenopiles_odb10 数据集）评估基因组完整度。
  5. **基因预测与功能注释**：采用 **MAKER 注释管线**与 **AUGUSTUS 模型训练**，结合 eggNOG-mapper 进行 GO/KEGG/COG/PFAM 注释。
  6. **重复序列分析**：构建 RepeatModeler2 自定义库，并用 RepeatMasker 做去蛋白化和分类。
  7. **跨物种比对**：用 **OrthoFinder v2.5.5** 生成 14 种硅藻的共正交群（OGs）矩阵，分析基因扩张、物种特异性和复制事件。

---

## 三、实验设计

- **数据来源**：
  - 样品采自波罗的海西部 Gotland 海盆沉积物（198 m水深）。
  - 复活年份范围：1965–2020 年不同层位沉积孢子。
  - DNA 取自复活培养的单一株系 **C. muelleri BS20**。
- **比较对象**：
  - 14 个硅藻物种（5 种中心型、9 种双翅型），包括 *Thalassiosira*, *Skeletonema*, *Phaeodactylum*, *Nitzshia*, *Seminavis* 等。
- **分析类型**：
  - **核基因组特征分析**（大小、GC%、重复比例）。
  - **基因组完整度对比**（BUSCO测试）。
  - **正交群（OG）分布与功能富集分析**。
  - **转座元件分类统计**。
  - **谱系层级复制事件统计与功能富集**。
  - **种间比较**：与 *C. tenuissimus* 做基因家族、GO/KEGG/PFAM 对比分析。

---

## 四、资源与算力

- **计算资源**：
  - 数据分析在瑞典国家高性能计算中心（SNIC）Dardel 超算上完成。  
  - 未具体说明 GPU 型号与数量。
- **测序资源**：
  - PacBio Revio 平台，HiFi 模式，每个样品使用一块 SMRT Cell 25M。  
  - 约 44× 测序覆盖深度。
- **说明**：论文未给出详细的计算时长或 GPU 配置，仅指出使用 NBIS/SciLifeLab 的生物信息基础设施。

---

## 五、实验数量与充分性

- **主要实验类型**：
  - （1）基因组组装与完整度验证；
  - （2）重复序列检测与类别统计；
  - （3）14个物种的正交群聚类；
  - （4）功能富集分析（GO、KEGG、COG、PFAM）；
  - （5）物种间复制事件比较；
  - （6）谱系结构与生态分层分析。
- **充分性与公平性**：
  - 数据覆盖 14 种参考硅藻，横跨海洋/淡水、中心型/双翅型。
  - 采用统一注释与 OrthoFinder 流程以避免管线偏差。
  - 比较框架较全面，但缺乏独立的实验验证（如表达或表型数据）。

---

## 六、主要结论与发现

- **高质量组装成果**：
  - 基因组大小 43.36 Mb、N50 = 1.4 Mb、GC含量 40.55%。  
  - 完整度：BUSCO 完成度 93%（88% 单拷贝），显示非冗余高质量。  
- **基因重复与创新**：
  - 156 个物种特异 OG、120 个扩张 OG（约 477 基因）。  
  - 功能富集于：
    - 多糖与纤维素生物合成；  
    - 囊泡介导运输与膜系统；  
    - 基因转录调控。  
- **转座元件动态**：
  - 基因组约 38.8% 为重复序列；  
  - TE 占 17.9%，以 LTR 型反转录转座子为主；
  - 约 19.3% 未知重复，推测存在新型 TE 谱系。
- **对比结果**：
  - 与 *C. tenuissimus* 比较显示：后者在染色质组装、离子转运、应激响应更显著扩张；  
    *C. muelleri* 则强化了多糖合成和囊泡运输机制。  
- **进化意义**：
  - TE 活动促进了基因复制与新功能出现；
  - Chaetoceros 属物种呈现分化的基因扩张模式；
  - 系统性比较揭示了海洋/淡水、中心型/双翅型间的基因组功能结构化趋势。

---

## 七、优点与亮点

- 利用 **复活生态学方法** 获取活体样本，在古生态学与基因组学之间构建独特桥梁。  
- **PacBio HiFi 技术** 提供超高准确度与长读长，提升组装连续性。  
- 在**统一管线**下跨物种比较，有效控制注释偏差。  
- 丰富的**功能富集分析**揭示多层次进化驱动（结构、转录、代谢）。  
- 数据公开透明，提供了未来生态基因组研究的基础资源。

---

## 八、不足与局限

- 缺乏**染色体级组装**与结构验证，无法确定大型结构变异。  
- 功能推断主要依赖 bioinformatics，没有实验性验证（如转录组或表型响应）。  
- TE 的大量“未知类别”未做深入分类与系统发育推断。  
- 对生态意义的分析停留在推测层面，未结合环境生理或基因表达数据。  
- 基因组比较仍受物种数量限制（仅 14 种），未来需扩至更广泛硅藻谱系。

---

**（完）**
