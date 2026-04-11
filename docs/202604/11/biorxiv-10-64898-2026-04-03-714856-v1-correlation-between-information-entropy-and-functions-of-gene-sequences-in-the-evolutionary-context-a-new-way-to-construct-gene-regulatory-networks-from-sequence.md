---
title: "Correlation Between Information Entropy and Functions of Gene Sequences in the Evolutionary Context: A New Way to Construct Gene Regulatory Networks from Sequence"
title_zh: 进化背景下基因序列信息熵与功能的相关性：一种从序列构建基因调控网络的新方法
authors: "Pan, L., Chen, M., Tanik, M."
date: 2026-04-07
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.03.714856v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 基因调控网络构建的信息论基础
tldr: 本文探讨信息熵与基因序列功能的关联，基于序列和进化保守性的熵特征，结合互信息、转移熵及DNA嵌入模型，提出一种从DNA序列直接构建基因调控网络的方法，并通过大肠杆菌实验证明其能更准确预测调控关系。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-03-714856-v1/fig-001.webp\", \"caption\": \"Figure 2. Information-theoretic GRN inference pipeline and four-layer integrative framework. (A) General pipeline for MI-based GRN inference: input data (MSA or expression matrix) → pairwise MI computation → DPI/CMI pruning of indirect edges → evolutionary conservation weighting → final GRN. Insets show a representative MI matrix (left) and inferred network (right) with TFs (red) and target genes (blue). (B) The proposed four-layer framework. Layer 1 computes per-position entropy, language model perplexity, and LZ complexity from DNA sequences. Layer 2 scores evolutionary conservation using JSD and phylogenetic entropy. Layer 3 performs network inference using conservation-weighted MI, CMI with sequence features, and transfer entropy. Layer 4 integrates DNA foundation model embeddings through multi-modal GNN fusion. The composite scoring function (top) weights contributions from each layer.\", \"page\": 11, \"index\": 1, \"width\": 964, \"height\": 1043}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-03-714856-v1/fig-002.webp\", \"caption\": \"Figure 1. Shannon entropy profiles across genomic compartments and sequence information content. (A) Mean Shannon entropy (bits) across genomic compartments. Promoters show the lowest entropy (highest conservation), while intergenic regions approach maximum entropy (Hmax = 2 bits). Error bars: standard deviation. ∗∗∗p < 0.001. (B) Information content (IC = 2− H) along a simulated 50-position regulatory region. The TF binding site (positions 15–25, shaded) shows dramatically elevated IC, indicating strong functional constraint. (C) Simplified sequence logo representation showing information content at each position of a 10- nucleotide binding motif. Stack height equals total IC; letter heights are proportional to base frequency. (D) Relationship between Shannon entropy and evolutionary rate (dN/dS). Low-entropy positions (promoters, blue) show low evolutionary rates; high-entropy positions (intergenic, red) evolve rapidly. Black line: moving average trend.\", \"page\": 10, \"index\": 2, \"width\": 977, \"height\": 1098}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-03-714856-v1/fig-003.webp\", \"caption\": \"Figure 4. Projected benchmark performance and entropy–conservation landscape. (A) Projected AUROC for GRN inference methods on E. coli and S. cerevisiae benchmarks. The proposed framework (highlighted) is expected to outperform expression-only methods by incorporating evolutionary sequence information. (B) Two-dimensional entropy–conservation landscape. Genomic compartments occupy distinct regions: promoters cluster at low entropy / high conservation (upper-left), while intergenic regions show high entropy / low conservation (lower-right). Dashed boxes indicate high-confidence regulatory zones and neutral zones.\", \"page\": 13, \"index\": 3, \"width\": 977, \"height\": 612}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-03-714856-v1/fig-004.webp\", \"caption\": \"Figure 3. Worked example: E. coli SOS regulatory sub-network. (A) Simulated expression heatmap for six SOS genes across 12 conditions. lexA shows anticorrelation with SOS targets. (B) Pairwise MI matrix computed from expression data. High MI values identify strong statistical dependencies. (C) DPI pruning example on the triplet (lexA, recA, uvrA). The weakest edge (I = 0.55) is removed, which incorrectly eliminates the true direct lexA→uvrA regulation. (D) Conservation-weighted MI rescues lost edges. The uvrA promoter has high conservation (w = 0.75), boosting its weighted score. (E) Transfer entropy resolves regulatory directionality: TlexA→recA = 0.58 ≫ TrecA→lexA = 0.12. (F) Final inferred SOS sub-network with directed edges. Red: repression by LexA; green: activation. Edge width proportional to composite score.\", \"page\": 12, \"index\": 4, \"width\": 974, \"height\": 1039}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-03-714856-v1/fig-005.webp\", \"caption\": \"Table 1. Comparison of information-theoretic and hybrid methods for GRN inference.\", \"page\": 5, \"index\": 5, \"width\": 1000, \"height\": 301}]"
motivation: 利用信息熵量化DNA序列以直接从序列数据构建基因调控网络，弥补传统仅依赖表达数据的方法局限。
method: 提出一个结合序列熵、进化保守性、互信息与转移熵以及DNA模型嵌入的四层整合框架。
result: 在大肠杆菌SOS子网络上验证了保守性加权互信息能提升边缘判别，转移熵可解析调控方向。
conclusion: 信息熵是连接序列层、进化约束与网络逻辑的数学语言，为基因调控网络推断提供新途径。
---

## 摘要
DNA序列中所编码的信息可以通过香农熵及相关测度进行严格量化。当置于进化背景下时，这种量化方法为直接从序列数据构建基因调控网络（GRN）提供了一种有理论基础但尚未充分探索的途径。尽管多数GRN推断方法仅依赖基因表达谱，调控代码最终仍写在DNA序列之中。本文回顾了信息理论在基因序列中的数学基础，综述了现有的GRN推断计算方法——特别是基于信息论和序列的途径——并探讨了进化保守性如何通过限制序列熵来维持生物功能。随后，我们提出一个四层集成框架，结合了位置级香农熵分布、基于Jensen–Shannon散度的进化保守性评分、基于表达的互信息与传递熵，以及DNA基础模型嵌入，用于从序列构建GRN。通过对大肠杆菌SOS调控子网络的实例分析，我们展示了保守性加权的互信息如何改善边缘区分，以及传递熵如何解析调控方向性。该框架产生了可验证的预测：低熵调控区域支持的边缘应当表现出更高的实验验证率，而跨物种的熵分布保守性应当预测GRN拓扑的保守性。该研究连接了三种生物信息尺度——核苷酸层面的熵、进化约束模式及网络层面的调控逻辑——确立了信息熵作为从序列到网络调控推断的自然数学语言。

## Abstract
The information encoded in DNA sequences can be rigorously quantified using Shannon entropy and related measures. When placed in an evolutionary context, this quantification offers a principled yet underexplored route to constructing gene regulatory networks (GRNs) directly from sequence data. While most GRN inference methods rely exclusively on gene expression profiles, the regulatory code is ultimately written in the DNA sequence itself. Here we review the mathematical foundations of information theory as applied to gene sequences, survey existing computational methods for GRN inference--with emphasis on information-theoretic and sequence-based approaches--and examine how evolutionary conservation constrains sequence entropy to preserve biological function. We then propose a four-layer integrative framework that combines per-position Shannon entropy profiles, evolutionary conservation scoring via Jensen- Shannon divergence, expression-based mutual information and transfer entropy, and DNA foundation model embeddings to construct GRNs from sequence. Through worked examples on the Escherichia coli SOS regulatory sub-network, we demonstrate how conservation-weighted mutual information improves edge discrimination and how transfer entropy resolves regulatory directionality. The framework generates testable predictions: edges supported by low-entropy regulatory regions should show higher experimental validation rates, and cross-species entropy profile conservation should predict GRN topology conservation. This work bridges three scales of biological information--nucleotide-level entropy, evolutionary constraint patterns, and network-level regulatory logic--establishing information entropy as the natural mathematical language for sequence-to-network regulatory inference.

---

## 论文详细总结（自动生成）

# 论文综述：进化背景下基因序列信息熵与功能的相关性  
*——从序列构建基因调控网络的新方法*

---

## 一、核心问题与研究背景

- **研究动机**：传统基因调控网络（Gene Regulatory Networks, GRNs）推断方法主要依赖基因表达数据（如 ARACNE、CLR、GENIE3 等），但忽略了调控作用的“物理基础”——DNA序列本身承载的调控信息。  
- **核心问题**：能否仅基于 DNA 序列及其信息熵特征，在进化背景下构建准确的基因调控网络？  
- **科学意义**：建立信息熵与基因功能、保守性之间的定量关联，探索从序列层到网络层的“信息语言”，从而提升对调控逻辑的理解与推断准确度。

---

## 二、方法论与技术细节

### 2.1 核心思想

- 将 **信息论指标**（Shannon 熵、互信息、转移熵、Jensen-Shannon 散度）应用于 DNA 序列分析，衡量每个位置的变异度和功能约束。
- 结合 **进化保守性**（多物种比对）与 **序列复杂度**（Lempel–Ziv 压缩、语言模型的困惑度），量化生物学功能信息。
- 通过整合 **序列熵、表达互信息、进化信号和深度模型嵌入**，直接从序列推断调控网络。

### 2.2 四层整合框架（核心算法流程）

1. **序列信息层**：计算每个位点的香农熵、语言模型困惑度、LZ复杂度，形成序列的信息分布图。  
2. **进化保守层**：通过 Jensen–Shannon 散度评估不同物种间保守特征，识别“信息保守元素”。  
3. **网络信息层**：在表达数据上应用互信息 (MI)、条件互信息 (CMI) 与转移熵 (TE)，并以序列保守分数调整边权重，推断调控方向。  
4. **模型语义层**：利用 DNA 基础模型（如 DNABERT-2、Evo2）嵌入，提取序列表示与注意力权重，融合到网络推断中。

### 2.3 综合评分函数

论文提出复合评分公式：

\[
S(g_{TF} \to g_{target}) = α·MI_{expr}·w_{cons}(R) + β·TE_{expr} + γ·IC_{motif}(m,R)
\]

其中权重项 \(w_{cons}(R)\) 结合：
- 序列的进化熵值 \(H_{phylo}\)；
- 语言模型困惑度 (PPL)；
- 通过归一化计算，反映序列约束强度。

该函数用于最终的边缘置信度计算与方向性判定。

---

## 三、实验设计

- **实验场景**：以 *E. coli*（大肠杆菌）SOS 调控子网络为示例验证。该系统是经典的 DNA 损伤修复响应模型。
- **数据来源**：
  - 模拟表达矩阵（12组条件、6个基因：lexA、recA、uvrA、uvrB、sulA、umuD）。
  - 基因调控关系已有实验验证，因此适合评估推断准确度。  
- **实验步骤**：
  1. 计算表达矩阵的互信息；  
  2. 使用 DPI（数据处理不等式）修剪间接相关；  
  3. 加入保守性加权 wcons 修复误删的真实直接调控；  
  4. 使用转移熵（TE）推断调控方向性。  
- **对比方法**：与七种主流方法比较，包括 ARACNE、CLR、GENIE3、PCA-CMI、MEOMI、SCENIC+、LINGER。

- **Benchmark 指标**：利用 DREAM 风格的 GRN Benchmark（AUROC）作为性能评估指标，对比推断准确度（如图4A）。

---

## 四、资源与算力说明

- 原文**未提供具体算力信息**，未提及 GPU 类型、训练时长、或硬件配置。
- 理论框架中涉及 DNA 基础模型（如 DNABERT-2）的嵌入提取，但未说明是否重新训练或调用已有模型，因此算力需求无法量化。

---

## 五、实验数量与充分性

- 论文仅提供了 **一个实例实验（E. coli SOS 网络）**，用于流程演示。  
- 小说明使用真实大规模 benchmark，仅给出理论性能投影（图4A）。  
- 未进行：
  - 不同物种验证；  
  - 消融实验（例如去掉保守加权或语言模型部分）；  
  - 真实平台评估。  

→ 因此实验数量较少，属于**方法论验证级别**，未达全面实证研究。

---

## 六、主要结论与发现

- 基因调控关系可由序列信息熵、进化保守性及信息传递量直接推断，无需完全依赖表达数据。  
- 新框架能够：
  - 通过保守性加权互信息改善边缘辨别力；  
  - 通过转移熵（TE）准确解析调控方向；  
  - 利用语言模型困惑度发现跨物种保守的调控信息模式。  
- **预测性假设**：
  1. 低熵调控区域对应高置信度调控边；  
  2. 跨物种的熵剖面保守性可预测网络拓扑的保守性；  
  3. 语言模型困惑度优于序列比对检测活性调控区。

---

## 七、方法与设计亮点

- **理论创新**：以信息熵为桥梁连接序列层、进化层和网络层，实现跨尺度信息整合。
- **建模创新**：
  - 将“DNA语言模型困惑度”引入调控功能量化，提出 evolutionarily conserved perplexity 的概念。
  - 使用信息论与深度表示融合的综合打分法。  
- **解释性强**：所有评分指标（熵、互信息、TE）有清晰的数学物理意义，可追溯到信息论基础。
- **可扩展性高**：框架可推广到多物种、单细胞数据和多组学整合。

---

## 八、不足与局限

- **实验验证不足**：仅有模拟数据和单一案例，尚未在真实大型数据集上测试。  
- **算力与实现细节缺失**：未说明模型运行环境及可复现性。  
- **假设风险**：
  - 默认高保守性一定意味着功能重要，可能忽略新生调控元件。  
  - 熵测度依赖多序列比对质量，低多样性或偏样本会误导结果。  
- **应用限制**：
  - 对非模式生物或无高质量序列数据的场景适用性有限。  
  - DNA语言模型计算成本高，框架在全基因组尺度执行效率尚待验证。  

---

（完）
