---
title: Intercellular communication is a heritable dimension of human tissue architecture
title_zh: 细胞间通讯是人类组织架构的一个可遗传维度
authors: "Yang, C., Zhang, X., Chen, J."
date: 2026-03-31
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.29.715138v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 将性状遗传力划分为细胞内在和细胞间成分
tldr: 该研究开发了EdgeMap工具，通过整合空间转录组学和GWAS数据，首次将人类性状的遗传力分解为细胞内在和细胞间通讯（边缘）成分。研究发现细胞间通讯是遗传架构的一个重要且互补的维度，在17种性状和5种组织中识别出多个特定配体-受体通道（如双相情感障碍中的突触信号），为理解复杂疾病的分子机制提供了新视角。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-29-715138-v1/fig-001.webp\", \"caption\": \"Fig. 5 Liver recovers PCSK9 biology and reveals intercellular lipid communication. a, Two-band pair-level summary for liver–LDL. The upper band shows empirical Bonferroni discoveries, whereas the lower band isolates mechanistic benchmark candidates including PCSK9–SORT1, LRPAP1–LRP1, and ANGPTL4–SDC4. b, Multi-trait comparison in liver: LDL, TG, CAD show significant edge signal; T2D and BMI serve as negative controls. c, Sender–receiver resolution in Visium HD M6: top liver LDL pairs show distinct primary sender and receiver cell types, supporting intercellular rather than autocrine signaling. d, Independent GWAS replication: per-pair z-scores in liver for UK Biobank LDL (x) versus GLGC 2013 LDL (y; no sample overlap). PCSK9–SORT1 is among the top-ranked channels in both GWAS independently. e, Cross-platform validation: aggregate edge z-scores for LDL in liver using standard Visium (∼55µm) and cell-segmented Visium HD (∼8µm) from independent donors and laboratories. f–i, Spatial communication maps for the three top LDL pairs: f, PCSK9–SORT1 (PCSK9 inhibitors), g, LRPAP1–LRP1 (tier 3; lipoprotein clearance locus), h, ANGPTL4–SDC4 (lipid metabolism), and i, RGB composite overlay.\", \"page\": 11, \"index\": 1, \"width\": 753, \"height\": 607}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-29-715138-v1/fig-002.webp\", \"caption\": \"Fig. 3 Global evidence for communication heritability. a, Heatmap of edge z-scores across 85 trait–tissue combinations. Stars mark significant combinations (P < 0.05, one-sided); colour intensity reflects z-score magnitude. b, Biological coherence: edge z-scores in a priori expected trait–tissue pairings versus all others (Mann–Whitney P = 4.7 × 10−9; ∆z = 2.29). c, Cell-type composition control: paired edge z-scores before versus after conditioning on spatial-domain gene-expression annotations. 11 of 12 significant combinations survive the additional control (mean ∆z = −5.6%). d, LR database specificity: real edge z-scores (diamonds) versus 500 expression-matched shuffled LR databases (dots). Liver (Pemp < 0.002) and gut (Pemp = 0.034) show significant LR specificity; heart and brain are marginal (see Discussion). e, Cross-section replication: edge z-scores across independent tissue sections (12 brain DLPFC sections from 3 donors, 5 heart sections from 5 donors, 4 liver sections from 4 donors, 4 gut sections from 4 donors). f, Locus ablation: edge z-scores after removing the top K GWAS loci (±500 kb). Heart, brain, and gut maintain significance at all ablation levels; liver attenuates beyond 5 loci, consistent with concentrated lipoprotein-pathway architecture.\", \"page\": 7, \"index\": 2, \"width\": 751, \"height\": 545}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-29-715138-v1/fig-003.webp\", \"caption\": \"Fig. 4 Cardiovascular communication pathways carry blood pressure heritability. a, Ranked pair-level summary for heart–SBP. The upper band shows the four empirical Bonferroni discoveries; the lower band shows biologically interpretable positive candidates highlighted for pathway-level follow-up. b, Pathway convergence: named-family candidates among the top positive heart–SBP pairs collapse onto a small number of recurrent pathway families rather than scattering across the LR database. c, Multi-trait comparison: SBP, DBP, and CAD show significant edge signal; AF and heart rate serve as negative controls. d, Cross-section replication across 5 independent heart sections from 5 donors for SBP, CAD, and DBP. e–h, Spatial communication maps for three top SBP pairs from distinct pathway families: complement (C3–CD46), ECM (FN1–SDC2), and Notch (JAG2–NOTCH3). Rightmost panel: RGB composite overlay demonstrating spatial separation of pathway-specific communication niches.\", \"page\": 10, \"index\": 3, \"width\": 752, \"height\": 597}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-29-715138-v1/fig-004.webp\", \"caption\": \"Fig. 1 Overview of the EdgeMap framework. a, Conceptual advance: node-centric methods (S-LDSC, scDRS, gsMap) identify disease-relevant tissues and cell types but treat each cell independently; EdgeMap further decomposes heritability into cell-intrinsic (node) and cell–cell communication (edge) components, resolving which intercellular channels carry genetic risk. b, Spatial-weighted communication model for ligand–receptor pairs. c, Joint regression decomposes heritability into node and edge components via Frisch–Waugh–Lovell. d, Per-pair conditional testing resolves edge signal into individual LR channels.\", \"page\": 3, \"index\": 4, \"width\": 775, \"height\": 425}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-29-715138-v1/fig-005.webp\", \"caption\": \"Fig. 6 Trait-specific communication signatures in brain. a, Node and edge z-scores across traits in DLPFC: BMI, bipolar, and SCZ show significant edge signal; depression and AD do not. b–c, Cross-region rank concordance between DLPFC and hippocampus for BMI (b) and bipolar disorder (c): top-ranked pairs are preserved across brain regions. d, Trait specificity heatmap: top pairs for each trait show near-zero or negative z-scores for other traits, demonstrating traitspecific communication architecture. e, Alzheimer’s disease focused view: APP–LRP1 dominates the pair-level brain AD signal, consistent with a concentrated amyloid-clearance channel rather than distributed edge enrichment. f–i, Spatial communication maps for three top extracellular-verified bipolar pairs: RTN4–CNTNAP1 (the sole Bonferroni-significant pair), NCAM1–FGFR1 (adhesion–RTK), and NRXN2–NLGN2 (trans-synaptic adhesion). Rightmost panel: RGB composite overlay showing spatial separation of the three signaling programmes across cortical territory.\", \"page\": 13, \"index\": 5, \"width\": 754, \"height\": 482}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-29-715138-v1/fig-006.webp\", \"caption\": \"Fig. 2 Simulation validation (heart annotation LD scores; brain and gut in Extended Data Table 3). a, Aggregate null QQ plot (n = 500 replicates): node and edge P -values are well calibrated. b, Per-pair null QQ plot: sparse pair annotations generate a heavy-tailed null that departs strongly from N(0, 1), motivating empirical calibration. c, Coefficient recovery: estimated τ̂ (median ± 95% interval) versus true τ across all scenarios; bias < 0.6%. d, Node and edge zscores are uncorrelated under the mixed architecture (r = 0.030, P = 0.50), confirming independent decomposition. e, Power curve: rejection rate as a function of true effect size τ ; the target component reaches 100% power by τ = 2 × 10−9 while the non-target component maintains nominal error. f, Rejection-rate summary across null, node-only, edge-only, and mixed architectures, showing calibrated type-I error and complete power in the targeted non-null settings.\", \"page\": 5, \"index\": 6, \"width\": 750, \"height\": 452}]"
motivation: 现有的遗传风险映射方法主要关注细胞类型，难以揭示遗传效应是否集中在细胞间的分子界面（通讯）上。
method: 开发了EdgeMap方法，将空间转录组与GWAS统计量结合，将性状遗传力划分为细胞内在和细胞间成分，并解析具体的配体-受体通道。
result: 在多种组织和性状中发现边缘遗传力显著富集，并识别出67个与特定疾病相关的细胞间通讯通道，且这些基因多为传统方法所忽略。
conclusion: 细胞间通讯是人类组织架构中一个可遗传的维度，为疾病风险研究提供了与传统基因水平分析互补的新方向。
---

## 摘要
将遗传风险映射到细胞的方法可以识别与疾病相关的组织和细胞类型，但无法测试遗传效应是否集中在细胞间的分子界面上。在此，我们介绍了 EdgeMap，它将空间转录组学与 GWAS 汇总统计数据相结合，将性状遗传力划分为细胞内在成分和细胞间成分，并将细胞间信号解析为特定的配体-受体通道。在 17 种性状和 5 种人类组织中，边缘遗传力（edge heritability）在生物学一致的性状-组织配对中显著富集（3.8 倍；P = 4.4 x 10^-6），并在独立的组织切片、GWAS 队列和细胞分割的 Visium HD 数据中得到了验证。通过对每对细胞进行分解，识别出 67 个性状特异性通道（FDR < 0.10），这些通道被组织成趋同的通路家族——包括双相情感障碍中的神经粘连蛋白-神经配体（neurexin-neuroligin）突触信号传导、心血管性状中的血管粘附以及肝脏中的脂蛋白清除通路。大多数边缘基因在标准的基因级优先级排序中并不存在，这支持了细胞间通讯作为遗传架构的一个补充维度。

## Abstract
Methods that map genetic risk to cells identify disease-relevant tissues and cell types but cannot test whether genetic effects concentrate at molecular interfaces between cells. Here we introduce EdgeMap, which integrates spatial transcriptomics with GWAS summary statistics to partition trait heritability into cell-intrinsic and intercellular components and to resolve the intercellular signal into specific ligand-receptor channels. Across 17 traits and five human tissues, edge heritability is enriched in biologically coherent trait-tissue pairings (3.8-fold; P = 4.4 x 10^-6) and replicates across independent tissue sections, GWAS cohorts, and cell-segmented Visium HD. Per-pair decomposition identifies 67 trait-specific channels (FDR < 0.10) organized into convergent pathway families - neurexin-neuroligin synaptic signaling in bipolar disorder, vascular adhesion in cardiovascular traits, and lipoprotein-clearance pathways in liver. Most edge genes are absent from standard gene-level prioritization, supporting intercellular communication as a complementary dimension of genetic architecture.

---

## 论文详细总结（自动生成）

### 论文分析报告：细胞间通讯是人类组织架构的一个可遗传维度

#### 1. 核心问题与研究动机
*   **核心问题**：全基因组关联研究（GWAS）虽然识别了大量与复杂性状相关的位点，但如何将这些位点映射到具体的细胞程序仍是挑战。现有的遗传力划分方法（如 S-LDSC, scDRS, gsMap）主要关注“细胞内在”（cell-intrinsic）的表达，即“以节点为中心”，而忽略了组织中细胞间通过配体-受体（LR）对进行的“细胞间通讯”（intercellular communication）所承载的遗传风险。
*   **研究动机**：组织不仅由细胞身份定义，还由邻近细胞间的相互作用塑造。作者假设遗传风险具有“关系性”成分，即某些变异可能通过扰动一个细胞的配体并影响另一个细胞的受体来发挥作用。

#### 2. 方法论：EdgeMap 框架
*   **核心思想**：EdgeMap 通过整合空间转录组学（ST）数据和 GWAS 汇总统计量，将性状遗传力显式分解为**节点（细胞内在）**和**边缘（细胞间通讯）**两个组件。
*   **关键技术细节**：
    *   **空间加权通讯模型**：利用空间邻近图（KNN）计算每个细胞在特定 LR 对上的通讯强度。
    *   **特征评分**：定义了**基因特异性评分（GSS，节点分）**衡量基因表达的空间集中度，以及**通讯特异性评分（CSS，边缘分）**衡量 LR 通讯的空间集中度。
    *   **遗传力划分**：将 GSS 和 CSS 映射到 SNP 级别的 LD 分数（Annotation LD Scores），并代入联合回归框架。
    *   **统计推断**：利用 **Frisch–Waugh–Lovell 定理**确保节点和边缘组件在相互校正后捕捉独特的方差。
    *   **单对分解**：针对稀疏注释问题，开发了基于 50,000 次模拟的**经验零分布校准（Empirical Null Calibration）**，以识别具体的 LR 通讯通道。

#### 3. 实验设计
*   **数据集与场景**：
    *   **性状**：涵盖心血管、精神疾病、代谢和免疫四大类共 17 种复杂性状（如 SBP, CAD, SCZ, Bipolar, LDL 等）。
    *   **组织**：心脏、大脑（DLPFC 和海马体）、肝脏、肠道 5 种人类组织。
    *   **技术平台**：主要使用 10x Visium，并利用 8μm 分辨率的 **Visium HD** 进行交叉验证。
*   **Benchmark 与对比**：
    *   对比了传统的节点中心方法（S-LDSC, scDRS, gsMap）。
    *   在基因优先级排序上，对比了 **MAGMA**（基于基因关联）和 **Open Targets L2G**（基于精细映射）。
    *   使用了 500 个表达匹配的随机洗牌数据库作为生物学特异性对照。

#### 4. 资源与算力
*   **算力说明**：论文提到计算在德克萨斯 A&M 大学统计系的 Arseven 高性能计算集群上完成。
*   **效率**：EdgeMap 流程效率极高，处理一个“性状 × 组织”组合（包括单对测试）仅需约 **23 秒**。文中未详细列出具体的 GPU 型号或总训练时长，但从单次运行时间看，该方法对算力需求较低，具有良好的可扩展性。

#### 5. 实验数量与充分性
*   **实验规模**：
    *   分析了 85 个“性状-组织”组合。
    *   进行了 500 次模拟实验验证校准精度和节点-边缘分离度。
    *   在 12 个大脑切片、5 个心脏切片等多个独立样本中进行了重复实验。
*   **充分性评价**：实验设计非常充分且严谨。作者不仅验证了方法的统计学效力（通过模拟），还通过独立 GWAS 队列（如 GLGC 2013 LDL）、独立实验平台（Visium HD）以及位点消融实验（Locus Ablation）确保了结果的客观性和稳健性。

#### 6. 主要结论与发现
*   **边缘遗传力普遍存在**：在生物学相关的性状-组织对中，边缘遗传力显著富集（3.8 倍）。
*   **识别关键通道**：识别出 67 个性状特异性通讯通道。例如：
    *   **双相情感障碍**：富集在 *RTN4–CNTNAP1* 等突触粘附信号。
    *   **心血管性状**：富集在血管粘附和 Notch 信号。
    *   **肝脏 LDL**：成功找回了经典的 *PCSK9–SORT1* 轴，并发现了 *F9–LRP1* 等新通道。
*   **互补性**：64% 的边缘基因在传统的 MAGMA 或 L2G 排序中未被识别，证明细胞间通讯是遗传架构中一个此前被忽视的独立维度。

#### 7. 优点与亮点
*   **概念创新**：首次将遗传力划分从“细胞类型”提升到了“细胞间界面”维度。
*   **统计严谨**：通过联合回归和经验零分布解决了空间转录组数据稀疏性带来的统计偏差。
*   **高分辨率验证**：利用 Visium HD 证明了识别出的信号确实源于细胞间交互而非自分泌（Autocrine）信号。
*   **药物靶点潜力**：发现边缘基因中约 53% 是已批准的药物靶点，为药物研发提供了新的遗传学支持。

#### 8. 不足与局限
*   **信号强度适中**：单个“性状-组织”的 z 分数通常在 2-3 之间，虽然整体显著，但单项测试的统计效力受限于 GWAS 样本量和 ST 数据的覆盖度。
*   **分辨率限制**：标准 Visium（55μm）每个点包含多个细胞，所谓的“边缘”实际上是局部细胞群之间的通讯，而非绝对的单细胞对单细胞接触（尽管 Visium HD 有所改善）。
*   **数据库依赖**：结果高度依赖于现有的 LR 数据库（如 LIANA），若数据库存在偏差或未包含某些非经典交互，则无法被识别。
*   **因果性推断**：目前主要提供遗传力富集证据，尚不能直接证明通讯过程中的因果介导作用，需结合精细映射进一步研究。

（完）
