---
title: "Synolog: A Scalable Synteny-Based Framework for Genome Architecture Characterization"
title_zh: Synolog：一种用于基因组结构特征分析的可扩展共线性框架
authors: "Madrigal, G., Catchen, J. M."
date: 2026-04-10
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.07.717040v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 基因组架构特征描述和共线性集群框架
tldr: 本研究针对多物种基因组结构分析难题，开发了高效可扩展的共线性分析框架Synolog，能自动识别直系同源基因、共线簇、逆转录基因及片段重复，并通过案例展示其在物种进化和染色体组装中的应用价值。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-717040-v1/fig-001.webp\", \"caption\": \"Figure 3: Ortholog inference and automatic detection of conserved synteny across metazoans. (A) Ortholog inference for protein-coding genes by Synolog and OrthoFinder2. (B) Synolog is able to identify conserved synteny between distantly related metazoans. In B, the Yasso scallop (Patinopecten yessoensis) is shown at the top of the synteny plot, followed by the Florida Lancelet (Branchiostoma floridae), the freshwater polyp (Hydra vulgaris), the flame jellyfish (Rhopilema esculentum), and the freshwater sponge (Ephydatia muelleri) at the bottom. (C) Synolog illustration that depicts the subset of orthologs that syntenically agree across all species.\", \"page\": 21, \"index\": 1, \"width\": 979, \"height\": 710}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-717040-v1/fig-002.webp\", \"caption\": \"Figure 1: Illustration of the Synolog pipeline. (A) The structure of the genomes and the BLAST hits between genomes are stored into the species cache prior to beginning a comparative analysis. (B) The pipeline begins by inferring reciprocal best hits (RBHs) between the queried organisms prior to (C) establishing the initial synteny clusters using a sliding window technique. If a phylogenetic tree is provided, (D) the organisms are linearally organized based on the provided phylogeny, which is then used to (E) detect tree spanning anchors (syntenic orthologs across all organisms in the tree) and (F) conduct an initial tandem duplication search. (G) Genes that did not have a syntenic RBH or marked as duplicates are then subjected to continuous iterations of a modified RBH (mRBH) algorithm that further builds the inferred synteny clusters until no new homologs can be detected. If phylogenetic information is present, (H) new anchors (which may or may not extend across the tree) are determined (H) followed by (I) another tandem duplicate search. (J) Orthogroups and pairwise synteny clusters are generated once there are no updates to the orthogroups and synteny clusters. (K) Assuming that a phylogenetic tree is available for guidance, local gene contractions and expansions relative to the most basal organism are inferred, along with synteny clusters spanning three or more organisms (i.e., tree clusters) and pairwise segmental duplications.\", \"page\": 10, \"index\": 2, \"width\": 979, \"height\": 951}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-717040-v1/fig-003.webp\", \"caption\": \"Figure 6: Outline of the synteny scaffolding algorithm. (A) The basis of synteny scaffolding algorithm begins with declaring a guide genome and a set of contigs to be scaffolded. (B) The contigs are bucketed to a guide sequence based on synteny content and then initially ordered based on the syntenic genes. (C) A hill-climbing algorithm is implemented where for each guide sequence, collinearity is measured using a linear regression with the contigs. (D) Contigs are swapped with adjacent neighbors after each iteration, with swaps that increase collinearity pursued. (E) After all guide sequences have a best fitted arrangement of contigs, a linear regression is performed using all guide sequences and the computed order of contigs. (F) This arrangement is then provided for users to use to scaffold the processed contigs.\", \"page\": 42, \"index\": 3, \"width\": 1033, \"height\": 225}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-717040-v1/fig-004.webp\", \"caption\": \"Figure 5: Summary of the tandem duplication algorithm. (A) Centering on an anchor gene, a sliding window is implemented in both the 3’ and 5’ directions to identify candidate tandem duplicates. (B) If a gene is marked as a tandem duplicate, it is merged to the anchor gene, effectively becoming invisible in the Synolog pipeline (C). A gene is marked as a tandem duplicate if it’s best BLAST hit is the interspecific anchor gene. (D) If the first condition is not met and if the candidate tandem duplicate has a BLAST hit to the interspecific anchor gene, that BLAST hit is compared to the focal anchor gene BLAST hit to determine if it is within the threshold. (E) In cases where the first two conditions are not met, if the candidate tandem duplicate has a match with a tandem duplicate of the interspecific anchor gene, and the previously labeled tandem duplicate’s best hit is the current anchor gene, the BLAST hits are again evaluated to determine tandem duplicate status. (F) Figures and symbols depicting the variables used in the tandem duplication algorithm are shown in below.\", \"page\": 36, \"index\": 4, \"width\": 979, \"height\": 887}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-717040-v1/fig-005.webp\", \"caption\": \"Figure 4: An overview of the synteny scaffolding process in notothenioids. The contig-level assemblies for the mackerel icefish (Champsocephalus gunnari) and the Antarctic bald notothen (Trematomous borchgrevinki) were processed through the synteny scaffolding procedure. Synolog examines different orderings of contigs by estimating collinearity through a linear regression using the synteny blocks. (A) In one arrangement between the Patagonia blennie (Eleginops maclovinus) and the mackerel icefish, Synolog preferred the arrangement with an R2 of 0.964 over an arrangement with an R2 of 0.959. (B) Similarly, Synolog selected an ordering with an R2 of 0.958 over an arrangement with an R2 of 0.952 when comparing the Patagonia blennie with the Antactic bald notothen. (C) The selected arrangements were both used to scaffold the contigs using the syntenic information. (D, E) Both the new assemblies show one-to-one homology with Patagonia blennie (Eleginops maclovinus) chromosome-level assembly. (F) A three-way synteny plot shows the mackerel icefish is the topmost genome, followed by the Antarctic bald notothen, and then the Patagonia blennie as the outgroup.\", \"page\": 24, \"index\": 5, \"width\": 977, \"height\": 797}]"
motivation: 随着基因组数据快速增长，亟需高效、用户友好的软件来分析复杂的基因组结构和进化关系。
method: 开发了可扩展的生物信息学工具Synolog，用于自动识别多基因组间的直系同源基因和共线性簇。
result: Synolog在分析不同物种的局部基因扩展、跨数亿年演化的共线簇识别以及重建鱼类染色体组装中表现出优异性能。
conclusion: Synolog为研究基因组进化与结构特征提供了强大的可扩展工具，优于传统仅基于序列相似性的方法。
---

## 摘要
数十年来，研究者们一直在描绘不同生物体的基因组结构。基因组数据集的持续增长不仅为研究基因组进化提供了重要资源，同时也要求开发可扩展且易于使用的软件来处理这些数据集。在此，我们提出了 Synolog——一个可扩展的生物信息学工具包，能够自动识别蛋白编码基因和非编码基因的直系同源物、多个基因组间的共线性簇（synteny clusters）、逆转录基因以及片段重复。通过应用 Synolog，我们展示了生态差异显著的龟类物种中局部基因扩增的实例，识别了跨越数亿年后生动物进化的共线性簇，并利用推断的共线性簇在硬骨鱼类中重建了染色体级组装——所有分析均可通过其集成可视化功能实现。同时，我们将本研究的直系同源分组方法与常用软件进行比较，并指出仅基于序列相似性还是基于共线性信息进行推断之间的权衡。

## Abstract
Detailing the genomic architecture across multiple organisms has been a task performed for decades. The continuing growth of genomic datasets not only serves as a resource for studying genome evolution but warrants the availability of scalable and user-friendly software for processing these datasets. Here, we present Synolog, a bioinformatic toolkit that can automatically identify orthologs for both protein-coding and non-coding genes, synteny clusters across two or more genomes, as well as retrogenes, and segmental duplications. Applying Synolog, we illustrate cases of local gene expansions in ecologically disparate turtle species, identify synteny clusters across hundreds of millions of years of metazoan evolution, and reconstruct chromosome-level assemblies in teleosts using the inferred synteny clusters; all using its integrated visual features. In parallel, we compare our orthogroup method to that of commonly used software and note the tradeoffs of making inferences solely based on sequence similarity versus a synteny-based approach.

---

## 论文详细总结（自动生成）

## 一、核心问题与整体含义

- **研究动机**：  
  随着高通量测序技术的发展，基因组数据的数量与复杂性急剧增长。传统仅依赖序列相似性（如 BLAST、OrthoFinder2）的同源基因识别方法无法充分解析复杂的基因组结构变化（如基因重复、片段插入及进化重排）。  
  作者指出，**系统、可扩展且能整合基因位置信息的共线性（synteny）分析框架**对于研究基因组架构、演化趋势及生态适应性具有重大意义。

- **核心问题**：  
  如何开发一个自动化、可扩展的工具，在不牺牲分析精度的前提下，整合序列相似性与共线性信息，从而：
  1. 识别蛋白编码与非编码基因的直系同源物；
  2. 标定跨物种的共线性块；
  3. 检测逆转录基因与片段重复；
  4. 支撑更上层应用，如进化树推断与基因组组装。

- **总体目标**：  
  构建 **Synolog 框架**，使得研究者能高效地进行基因组比较、结构重建与演化分析，从而提升对基因组功能与演化规律的理解。

---

## 二、方法论：核心思想与算法流程

### 1. 核心思想
Synolog 的设计理念是：**将基于序列相似性的直系同源推断与基于位置关系的共线性检测有机结合**，并利用系统发育信息（guide tree）指导逐层的同源扩展，使得同源识别既准确又具生物学意义。

### 2. 方法框架组成
Synolog 包括三个主要部分：
1. **Species Cache 构建**：整理并缓存基因组注释（GTF/GFF）、结构文件（AGP）与预计算的 BLAST 比对结果；
2. **核心分析程序（C++ 实现）**：基于滑动窗口机制和修正 RBH（reciprocal best hit）算法检测直系同源与共线性块；
3. **后处理工具集（Python 实现）**：提供可视化、注释查询与基因组 scaffold 构建功能。

### 3. 关键算法流程
1. **RBH 初始化**：  
   计算物种间所有成对最佳匹配基因（RBH），并建立初始同源基因对。
2. **滑动窗口共线性检测**：  
   将相邻基因对（≤N 个基因间隔）划为初始共线区块；向前后扩展并合并邻近块形成 synteny block。
3. **修正 RBH (mRBH) 扩充**：  
   对未匹配的基因进行迭代扫描，若位于同一共线块则纳入为正交基因；循环迭代直到无新增。
4. **导入系统发育树（Pipeline 2）**：  
   以最底层物种为参考，沿系统树逐步扩展同源匹配，构建跨物种锚点（phylogenetic anchors）。
5. **串联重复检测**：  
   通过滑动窗口和标准差阈值，判断邻近基因是否为真实串联重复（如图 5 所示）。
6. **片段重复与逆转录基因检测**：  
   - 片段重复：寻找与原共线区形态相似、但位置不同的基因簇；
   - 逆转录基因：多外显子基因的单外显子远距离副本被标记。
7. **共线集群与基因家族归并**：  
   将三种以上物种共享的共线区定义为“tree cluster”，并统计局部基因扩张或收缩。  
8. **共线 scaffold 构建**：  
   使用基因对应位置的线性回归优化顺序与方向，最大化两基因组间的共线性（R² 优化迭代）。

---

## 三、实验设计

### 1. 数据集与场景
作者设计了三个分层案例：
1. **龟类演化（Testudines）**：  
   比较五个具有不同生态习性的龟类基因组（陆生、海生、淡水生等），探讨共线性守恒与基因拷贝扩展。  
   - 数据：5 个染色体级基因组（2.21–2.25 Gb）
   - 生态跨度：>1 亿年演化差异  
   - 指导树：基于 Thomson et al. (2021)
2. **后生动物深层进化（Metazoan Evolution）**：  
   跨距 >6 亿年的演化体系，包括文昌鱼、海蜇、扇贝、淡水海绵和水螅，用于检测古老共线性（ALGs）。  
   - 测试共线性与 OrthoFinder2、Simakov et al. (2022) 的结果比对。
3. **基于共线性的染色体级 scaffold 构建**：  
   使用智利南极鱼（E. maclovinus）作参照，利用 Synolog 的共线性信息自动将两种冰鱼的 contig 级组装拼接为染色体级参考。

### 2. 对比基线
- **主要基准工具**：OrthoFinder2（基于序列相似性）；  
- **其他参考分析**：Simakov et al. (2022) 手动 curated 共线性集群。

---

## 四、资源与算力

- 论文描述中**未具体报告算力信息**（如 GPU/CPU 型号、内存或时间消耗）。  
- 提及软件实现：
  - C++ 并行化核心模块；
  - Python 工具脚本，用于可视化、执行 BLAST、组装重构；
  - 无特定硬件依赖，拥抱高扩展性。

---

## 五、实验数量与充分性

- **三大案例研究**共涵盖：
  - 5 个龟类物种；
  - 5 个跨门类的后生动物；
  - 3 个硬骨鱼类（含两个待组装 contig 级基因组）。  
- **实验维度**：
  - 共线性与直系同源识别对比；
  - 蛋白基因与非编码基因并行分析；
  - 候选函数性扩增基因的 GO 富集分析；
  - Scaffold 性能评估（R²、N50、L50）。  
- **总体评价**：实验覆盖广、进化尺度从近缘到远缘，统计与可视化多角度验证，具备较强的代表性与客观性。

---

## 六、主要结论与发现

- Synolog 成功自动化实现跨多物种的：
  1. **直系同源与共线性簇识别**；
  2. **串联重复、片段重复与逆转录基因检测**；
  3. **基于共线性的 scaffold 构建**。
- 相较 OrthoFinder2，Synolog：
  - 在蛋白编码基因数方面相当；
  - 但在 **非编码基因识别与共线性解析上显著优越**。  
- 龟类分析揭示：
  - 61.4% 为一对一直系同源；
  - 发现 20+ 与生态适应相关的基因家族扩张（如 ACOT13、C-type lectin、RGS4/5）。  
- 跨后生动物实验重现了 Simakov et al. (2022) 报告的 26–29 个古老共线群（ALGs）。  
- 共线 scaffold 成功重建两种冰鱼的染色体级装配（R²>0.95），N50 提升至 30–40 Mb。

---

## 七、优点与创新亮点

- **算法整合性强**：  
  将序列相似性、基因位置信息与系统发育树全流程融合。
- **自动化与可视化**：  
  结果可直接生成图形输出（synolog_plot.py、synolog_info.py）。  
- **非编码基因纳入分析**：显著提高基因组结构解析覆盖度。
- **支持多层应用**：包括识别逆转录基因、检测片段重复、scaffold 重构等。
- **软件可扩展性**：轻依赖、模块化设计，可在多物种/多版本基因组中重复使用。

---

## 八、不足与局限

- **算力与性能细节缺乏**：未明确说明运行时间与资源占用。
- **应用依赖数据质量**：共线性结果受制于基因组装连续性与注释准确度。
- **远缘物种的灵敏度**：演化距离过大会导致 synteny 信号弱化，需要调整阈值。
- **scaffolding 局限**：若参考基因组发生染色体融合或大型重排，结果可能偏差（文中提及 23 vs 24 染色体案例）。
- **未进行系统消融实验**：缺少对某些算法模块（如 mRBH 或 tandem duplication 阈值）的独立验证。

---

**（完）**
