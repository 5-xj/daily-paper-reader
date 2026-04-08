---
title: Intercellular communication is a heritable dimension of human tissue architecture
title_zh: 细胞间通讯是人类组织结构的可遗传维度
authors: "Yang, C., Zhang, X., Chen, J."
date: 2026-03-31
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.29.715138v1.full.pdf"
tags: ["query:gene"]
score: 9.5
evidence: 结合空间转录组学与GWAS来划分性状遗传性
tldr: 该研究针对传统基因风险定位无法解析细胞间遗传效应的问题，提出了EdgeMap方法，整合空间转录组与GWAS数据，区分细胞自身与细胞间可遗传性，并识别特定配体-受体信号通道。结果显示，细胞间通信在多种疾病相关组织中具有显著富集，揭示其为人类组织遗传架构中的继承性维度。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-29-715138-v1/fig-001.webp\", \"caption\": \"Fig. 5 Liver recovers PCSK9 biology and reveals intercellular lipid communication. a, Two-band pair-level summary for liver–LDL. The upper band shows empirical Bonferroni discoveries, whereas the lower band isolates mechanistic benchmark candidates including PCSK9–SORT1, LRPAP1–LRP1, and ANGPTL4–SDC4. b, Multi-trait comparison in liver: LDL, TG, CAD show significant edge signal; T2D and BMI serve as negative controls. c, Sender–receiver resolution in Visium HD M6: top liver LDL pairs show distinct primary sender and receiver cell types, supporting intercellular rather than autocrine signaling. d, Independent GWAS replication: per-pair z-scores in liver for UK Biobank LDL (x) versus GLGC 2013 LDL (y; no sample overlap). PCSK9–SORT1 is among the top-ranked channels in both GWAS independently. e, Cross-platform validation: aggregate edge z-scores for LDL in liver using standard Visium (∼55µm) and cell-segmented Visium HD (∼8µm) from independent donors and laboratories. f–i, Spatial communication maps for the three top LDL pairs: f, PCSK9–SORT1 (PCSK9 inhibitors), g, LRPAP1–LRP1 (tier 3; lipoprotein clearance locus), h, ANGPTL4–SDC4 (lipid metabolism), and i, RGB composite overlay.\", \"page\": 11, \"index\": 1, \"width\": 753, \"height\": 607}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-29-715138-v1/fig-002.webp\", \"caption\": \"Fig. 3 Global evidence for communication heritability. a, Heatmap of edge z-scores across 85 trait–tissue combinations. Stars mark significant combinations (P < 0.05, one-sided); colour intensity reflects z-score magnitude. b, Biological coherence: edge z-scores in a priori expected trait–tissue pairings versus all others (Mann–Whitney P = 4.7 × 10−9; ∆z = 2.29). c, Cell-type composition control: paired edge z-scores before versus after conditioning on spatial-domain gene-expression annotations. 11 of 12 significant combinations survive the additional control (mean ∆z = −5.6%). d, LR database specificity: real edge z-scores (diamonds) versus 500 expression-matched shuffled LR databases (dots). Liver (Pemp < 0.002) and gut (Pemp = 0.034) show significant LR specificity; heart and brain are marginal (see Discussion). e, Cross-section replication: edge z-scores across independent tissue sections (12 brain DLPFC sections from 3 donors, 5 heart sections from 5 donors, 4 liver sections from 4 donors, 4 gut sections from 4 donors). f, Locus ablation: edge z-scores after removing the top K GWAS loci (±500 kb). Heart, brain, and gut maintain significance at all ablation levels; liver attenuates beyond 5 loci, consistent with concentrated lipoprotein-pathway architecture.\", \"page\": 7, \"index\": 2, \"width\": 751, \"height\": 545}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-29-715138-v1/fig-003.webp\", \"caption\": \"Fig. 4 Cardiovascular communication pathways carry blood pressure heritability. a, Ranked pair-level summary for heart–SBP. The upper band shows the four empirical Bonferroni discoveries; the lower band shows biologically interpretable positive candidates highlighted for pathway-level follow-up. b, Pathway convergence: named-family candidates among the top positive heart–SBP pairs collapse onto a small number of recurrent pathway families rather than scattering across the LR database. c, Multi-trait comparison: SBP, DBP, and CAD show significant edge signal; AF and heart rate serve as negative controls. d, Cross-section replication across 5 independent heart sections from 5 donors for SBP, CAD, and DBP. e–h, Spatial communication maps for three top SBP pairs from distinct pathway families: complement (C3–CD46), ECM (FN1–SDC2), and Notch (JAG2–NOTCH3). Rightmost panel: RGB composite overlay demonstrating spatial separation of pathway-specific communication niches.\", \"page\": 10, \"index\": 3, \"width\": 752, \"height\": 597}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-29-715138-v1/fig-004.webp\", \"caption\": \"Fig. 1 Overview of the EdgeMap framework. a, Conceptual advance: node-centric methods (S-LDSC, scDRS, gsMap) identify disease-relevant tissues and cell types but treat each cell independently; EdgeMap further decomposes heritability into cell-intrinsic (node) and cell–cell communication (edge) components, resolving which intercellular channels carry genetic risk. b, Spatial-weighted communication model for ligand–receptor pairs. c, Joint regression decomposes heritability into node and edge components via Frisch–Waugh–Lovell. d, Per-pair conditional testing resolves edge signal into individual LR channels.\", \"page\": 3, \"index\": 4, \"width\": 775, \"height\": 425}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-29-715138-v1/fig-005.webp\", \"caption\": \"Fig. 6 Trait-specific communication signatures in brain. a, Node and edge z-scores across traits in DLPFC: BMI, bipolar, and SCZ show significant edge signal; depression and AD do not. b–c, Cross-region rank concordance between DLPFC and hippocampus for BMI (b) and bipolar disorder (c): top-ranked pairs are preserved across brain regions. d, Trait specificity heatmap: top pairs for each trait show near-zero or negative z-scores for other traits, demonstrating traitspecific communication architecture. e, Alzheimer’s disease focused view: APP–LRP1 dominates the pair-level brain AD signal, consistent with a concentrated amyloid-clearance channel rather than distributed edge enrichment. f–i, Spatial communication maps for three top extracellular-verified bipolar pairs: RTN4–CNTNAP1 (the sole Bonferroni-significant pair), NCAM1–FGFR1 (adhesion–RTK), and NRXN2–NLGN2 (trans-synaptic adhesion). Rightmost panel: RGB composite overlay showing spatial separation of the three signaling programmes across cortical territory.\", \"page\": 13, \"index\": 5, \"width\": 754, \"height\": 482}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-29-715138-v1/fig-006.webp\", \"caption\": \"Fig. 2 Simulation validation (heart annotation LD scores; brain and gut in Extended Data Table 3). a, Aggregate null QQ plot (n = 500 replicates): node and edge P -values are well calibrated. b, Per-pair null QQ plot: sparse pair annotations generate a heavy-tailed null that departs strongly from N(0, 1), motivating empirical calibration. c, Coefficient recovery: estimated τ̂ (median ± 95% interval) versus true τ across all scenarios; bias < 0.6%. d, Node and edge zscores are uncorrelated under the mixed architecture (r = 0.030, P = 0.50), confirming independent decomposition. e, Power curve: rejection rate as a function of true effect size τ ; the target component reaches 100% power by τ = 2 × 10−9 while the non-target component maintains nominal error. f, Rejection-rate summary across null, node-only, edge-only, and mixed architectures, showing calibrated type-I error and complete power in the targeted non-null settings.\", \"page\": 5, \"index\": 6, \"width\": 750, \"height\": 452}]"
motivation: 传统的遗传风险定位方法无法评估遗传效应是否集中在细胞间的分子接口上。
method: 提出EdgeMap方法，整合空间转录组与GWAS数据，将性状可遗传性分解为细胞内与细胞间成分，并识别特定配体-受体通路。
result: EdgeMap在17种性状和5种组织中揭示了显著的边缘遗传性富集，并识别出67个与疾病相关的配体-受体通道。
conclusion: 研究证明细胞间通信是人类组织结构遗传架构的重要维度，补充了传统基因水平遗传分析。
---

## 摘要
用于将遗传风险映射到细胞的方法能够识别与疾病相关的组织和细胞类型，但无法检验遗传效应是否集中在细胞间的分子界面处。我们在此提出 EdgeMap，这一方法将空间转录组学与 GWAS 汇总统计相结合，用于将性状的遗传率划分为细胞内在与细胞间两个部分，并进一步解析细胞间信号对应的特定配体-受体通道。在 17 种性状与 5 种人类组织中，边缘遗传率在生物学上具有一致性的性状-组织配对中显著富集（3.8 倍；P = 4.4 × 10⁻⁶），并在独立的组织切片、GWAS 队列以及细胞分割的 Visium HD 中得到重复验证。逐对分解分析鉴定出 67 个性状特异性通道（FDR < 0.10），这些通道组织成趋同的通路家族——双相障碍中的 neurexin-neuroligin 突触信号传导、心血管性状中的血管黏附、以及肝脏中的脂蛋白清除通路。多数边缘基因在标准的基因层级优先排序中缺失，这表明细胞间通讯是遗传结构的一个互补维度。

## Abstract
Methods that map genetic risk to cells identify disease-relevant tissues and cell types but cannot test whether genetic effects concentrate at molecular interfaces between cells. Here we introduce EdgeMap, which integrates spatial transcriptomics with GWAS summary statistics to partition trait heritability into cell-intrinsic and intercellular components and to resolve the intercellular signal into specific ligand-receptor channels. Across 17 traits and five human tissues, edge heritability is enriched in biologically coherent trait-tissue pairings (3.8-fold; P = 4.4 x 10-6) and replicates across independent tissue sections, GWAS cohorts, and cell-segmented Visium HD. Per-pair decomposition identifies 67 trait-specific channels (FDR < 0.10) organized into convergent pathway families--neurexin-neuroligin synaptic signaling in bipolar disorder, vascular adhesion in cardiovascular traits, and lipoprotein-clearance pathways in liver. Most edge genes are absent from standard gene-level prioritization, supporting intercellular communication as a complementary dimension of genetic architecture.

---

## 论文详细总结（自动生成）

# 《Intercellular communication is a heritable dimension of human tissue architecture》论文总结

---

## 一、研究核心问题与整体背景

- **研究动机**：  
  传统的 GWAS（全基因组关联分析）能够识别与复杂性状相关的遗传位点，但主要从“细胞内”角度解析遗传信号，缺乏对**细胞间通讯（intercellular communication）**这一维度的系统建模。  
- **问题提出**：  
  现有的可遗传性分区方法（如 S-LDSC、scDRS、gsMap）虽然能将遗传率映射到特定细胞或组织，但默认每个细胞是独立单元，忽略了**相邻细胞间通过配体–受体（ligand–receptor, LR）通道传递信号的分子接口**。  
- **核心科学命题**：  
  是否存在一种“细胞间通信层面”的可遗传性结构？即某些疾病相关的遗传效应是否集中于细胞–细胞相互作用的通道，而非单个细胞的基因表达。

---

## 二、方法论：EdgeMap 框架

### 1. 核心思想
- **EdgeMap** 是一种结合空间转录组学和 GWAS 汇总统计的新方法。  
- 其核心目标是**将复杂性状的遗传率分解为**：
  - **节点（node）成分**：细胞自身的表达特征；
  - **边（edge）成分**：细胞之间的通信强度。  
- 该方法通过统计建模区分两类贡献，进而识别出具体的配体–受体通道对应的遗传效应。

### 2. 方法流程
1. **输入数据**：
   - 空间转录组数据（用于测量组织中每个细胞或空间位置的基因表达）；
   - GWAS 汇总统计（SNP-level χ² 或关联统计值）。
2. **构建空间邻接图**：  
   - 以细胞为节点，K 近邻为边；
   - 边权重由空间距离经高斯核函数计算。
3. **通信强度计算**：  
   - 对每对配体–受体（LR）对，计算基于空间权重加权的通信活性；
   - 使用 LIANA Consensus 数据库（包含 4624 对 LR 组合）。
4. **特征定义**：
   - **GSS（Gene Specificity Score）**：基因在空间中的表达集中度 → 反映“细胞内特异性”；
   - **CSS（Communication Specificity Score）**：基于 LR 活性强度的空间集中度 → 反映“细胞间通信特异性”。
5. **映射到 SNP 层面**：  
   - 利用 LD-score 矩阵（来自 gsMap）将基因级得分映射到 SNP 注释。
6. **联合回归分解**：
   - 在 S-LDSC 框架下建立扩展模型：
     \[
     E[\chi^2_s] = 1 + N \sum_q τ_q ℓ^{(q)}_s + Nτ_{node}ℓ^{(node)}_s + Nτ_{edge}ℓ^{(edge)}_s
     \]
   - τ_node 与 τ_edge 分别表示节点与边的遗传富集度；
   - 使用 Frisch–Waugh–Lovell 定理保证独立分解。
7. **逐对（per-pair）条件检验**：
   - 对每对 LR 通道独立测试其特异性；
   - 通过 50,000 次经验空值模拟校准显著性（避免稀疏注释导致的偏差）。

---

## 三、实验设计

### 1. 数据与场景
- **空间转录组学数据**（5 种人类组织）：
  - 心脏、前额叶皮层（DLPFC）、海马、肝脏、肠道；
  - 数据来源包括 10x Genomics、Maynard、Guilliams、Thompson、Kuppe 等公开数据。
- **GWAS 数据（17 种复杂性状）**覆盖四大类：
  - 心血管：SBP、DBP、CAD、AF、心率；
  - 精神/神经：SCZ、BD、MDD、AD、ADHD；
  - 代谢：BMI、T2D、LDL、TG、Height；
  - 免疫：UC、Crohn's disease。
- LiANA Consensus中的4624条LR对作为通信基础。

### 2. Benchmark 与对比方法
- 对比基准为 S-LDSC、scDRS、gsMap 等经典可遗传性分区方法；
- 控制实验包括：
  - **表达匹配随机置换 LR 数据库**；
  - **细胞类型组成因子控制**；
  - **基因组区段剔除测试**（locus ablation）；
  - **跨切片与跨 GWAS 复现**。

---

## 四、资源与算力

- 论文中指出计算在 **Texas A&M 高性能计算集群（Arseven HPC）** 上完成；
- 未明确具体 GPU 型号、CPU 核数或运行时长；
- 整个 EdgeMap 流程（针对单个性状 × 组织）约需 **23 秒**（包含逐对检验），计算效率较高；
- 故总体算力需求为中等规模，无深度学习训练环节。

---

## 五、实验数量与充分性

- 模拟与真实实验共计数十组：
  - **模拟验证**：4 种架构（null、node-only、edge-only、mixed）× 3 个组织 × 500 次重复；
  - **真实应用**：  
    - 17 种性状 × 5 种组织 = 85 对组合；
    - 共检测 4624 LR 通道 × 数个组织；
  - **控制与复现实验**：  
    - 500 次随机配对测试（表达匹配对照）；  
    - 50,000 次经验空值模拟/组织；  
    - 4–12 个独立组织切片复现；
    - 2 个独立 GWAS 队列验证（GLGC、FinnGen）。
- **充分性**：实验证明结论在跨数据源、跨组织、跨分辨率数据中均可复现，具有较强的普适性与统计稳健性。

---

## 六、主要结论与发现

- **存在细胞间层面的遗传结构**：  
  细胞间通信（edge）成分在 17 种性状中有 16 对显著的 trait–tissue 组合，比随机期望高 3.8 倍（P = 4.4 × 10⁻⁶）。
- **发现 67 个显著配体–受体通道（FDR < 0.10）**，对应 72 个基因，形成可复现的功能模块：
  - **心脏**：血压遗传性集中于 Notch、Complement、ECM、GPCR 等信号；
  - **肝脏**：LDL 通路中恢复了已知 PCSK9–SORT1 通路，同时揭示了 F9–LRP1、RSPO3–RNF43 等新通道；
  - **大脑**：精神疾病（SCZ、BD）集中于 NRXN–NLGN 突触黏附轴；
  - **肠道**：溃疡性结肠炎聚焦于 CD44 介导的黏附信号。
- **边基因与传统基因优先法正交**：64% EdgeMap 鉴定基因未被 MAGMA 或 Locus-to-Gene 覆盖。

---

## 七、方法与实验的主要优点

- **创新的“节点–边”遗传结构分解**：首次将细胞间通信纳入 GWAS 可遗传性框架。
- **统计独立性验证充分**：通过 FWL 定理和模拟验证，边/节点信号无泄漏。
- **多层验证链路**：跨组织切片、跨 GWAS、人群独立性均经验证；
- **生物学解释性强**：恢复了 PCSK9、LRP1、NRXN–NLGN 等已知病理通路；
- **算法高效**：单批次分析耗时短，具有良好的可推广性。

---

## 八、不足与局限

- **效应量较小、单一组合统计功效有限**：单个 trait–tissue 的 z 值多数在 2–3 之间，仅景观级呈强信号。  
- **稀疏注释假设限制**：S-LDSC 对小样本注释的标准误不服从正态，需大量模拟校准。  
- **空间分辨率限制**：Visium (~55 μm) 的分辨率不足以精定位单细胞边界，解释到“群体级细胞间”而非真实细胞–细胞接触。  
- **部分 LR 对本身非细胞外作用**，需谨慎过滤；严格外泌筛选后部分边缘组合降为边缘显著。  
- **未探讨因果方向与变异定位**：方法提供遗传富集统计，而非致因变异推断。

---

**（完）**
