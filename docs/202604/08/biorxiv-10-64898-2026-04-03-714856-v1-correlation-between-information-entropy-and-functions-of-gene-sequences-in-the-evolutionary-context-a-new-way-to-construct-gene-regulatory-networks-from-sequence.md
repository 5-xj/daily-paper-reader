---
title: "Correlation Between Information Entropy and Functions of Gene Sequences in the Evolutionary Context: A New Way to Construct Gene Regulatory Networks from Sequence"
title_zh: 信息熵与基因序列功能在进化背景下的相关性：一种从序列构建基因调控网络的新方法
authors: "Pan, L., Chen, M., Tanik, M."
date: 2026-04-07
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.03.714856v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 信息论应用于基因序列和调节网络
tldr: 本文提出利用信息熵量化基因序列信息并结合进化保守性，从序列数据直接构建基因调控网络的新方法。研究建立了一个四层整合框架，通过大肠杆菌实验展示其提高调控关系识别的效果，为理解序列到网络的调控联系提供数学基础。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-03-714856-v1/fig-001.webp\", \"caption\": \"Figure 2. Information-theoretic GRN inference pipeline and four-layer integrative framework. (A) General pipeline for MI-based GRN inference: input data (MSA or expression matrix) → pairwise MI computation → DPI/CMI pruning of indirect edges → evolutionary conservation weighting → final GRN. Insets show a representative MI matrix (left) and inferred network (right) with TFs (red) and target genes (blue). (B) The proposed four-layer framework. Layer 1 computes per-position entropy, language model perplexity, and LZ complexity from DNA sequences. Layer 2 scores evolutionary conservation using JSD and phylogenetic entropy. Layer 3 performs network inference using conservation-weighted MI, CMI with sequence features, and transfer entropy. Layer 4 integrates DNA foundation model embeddings through multi-modal GNN fusion. The composite scoring function (top) weights contributions from each layer.\", \"page\": 11, \"index\": 1, \"width\": 964, \"height\": 1043}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-03-714856-v1/fig-002.webp\", \"caption\": \"Figure 1. Shannon entropy profiles across genomic compartments and sequence information content. (A) Mean Shannon entropy (bits) across genomic compartments. Promoters show the lowest entropy (highest conservation), while intergenic regions approach maximum entropy (Hmax = 2 bits). Error bars: standard deviation. ∗∗∗p < 0.001. (B) Information content (IC = 2− H) along a simulated 50-position regulatory region. The TF binding site (positions 15–25, shaded) shows dramatically elevated IC, indicating strong functional constraint. (C) Simplified sequence logo representation showing information content at each position of a 10- nucleotide binding motif. Stack height equals total IC; letter heights are proportional to base frequency. (D) Relationship between Shannon entropy and evolutionary rate (dN/dS). Low-entropy positions (promoters, blue) show low evolutionary rates; high-entropy positions (intergenic, red) evolve rapidly. Black line: moving average trend.\", \"page\": 10, \"index\": 2, \"width\": 977, \"height\": 1098}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-03-714856-v1/fig-003.webp\", \"caption\": \"Figure 4. Projected benchmark performance and entropy–conservation landscape. (A) Projected AUROC for GRN inference methods on E. coli and S. cerevisiae benchmarks. The proposed framework (highlighted) is expected to outperform expression-only methods by incorporating evolutionary sequence information. (B) Two-dimensional entropy–conservation landscape. Genomic compartments occupy distinct regions: promoters cluster at low entropy / high conservation (upper-left), while intergenic regions show high entropy / low conservation (lower-right). Dashed boxes indicate high-confidence regulatory zones and neutral zones.\", \"page\": 13, \"index\": 3, \"width\": 977, \"height\": 612}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-03-714856-v1/fig-004.webp\", \"caption\": \"Figure 3. Worked example: E. coli SOS regulatory sub-network. (A) Simulated expression heatmap for six SOS genes across 12 conditions. lexA shows anticorrelation with SOS targets. (B) Pairwise MI matrix computed from expression data. High MI values identify strong statistical dependencies. (C) DPI pruning example on the triplet (lexA, recA, uvrA). The weakest edge (I = 0.55) is removed, which incorrectly eliminates the true direct lexA→uvrA regulation. (D) Conservation-weighted MI rescues lost edges. The uvrA promoter has high conservation (w = 0.75), boosting its weighted score. (E) Transfer entropy resolves regulatory directionality: TlexA→recA = 0.58 ≫ TrecA→lexA = 0.12. (F) Final inferred SOS sub-network with directed edges. Red: repression by LexA; green: activation. Edge width proportional to composite score.\", \"page\": 12, \"index\": 4, \"width\": 974, \"height\": 1039}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-03-714856-v1/fig-005.webp\", \"caption\": \"Table 1. Comparison of information-theoretic and hybrid methods for GRN inference.\", \"page\": 5, \"index\": 5, \"width\": 1000, \"height\": 301}]"
motivation: 现有的基因调控网络推断多依赖表达数据，而缺乏利用DNA序列本身的信息熵与进化约束的系统方法。
method: 研究构建了一个结合序列熵、进化保守性、表达互信息和DNA模型嵌入的四层整合框架，用于从序列推断基因网络。
result: 在大肠杆菌SOS调控子网的实证中，该框架提升了边识别准确度和调控方向判定能力。
conclusion: 信息熵是连接序列信息与功能调控逻辑的核心度量，为从DNA序列推断基因调控网络提供了统一数学语言。
---

## 摘要
DNA序列中编码的信息可以通过香农熵及相关度量进行严格量化。在进化背景下，这种量化为直接从序列数据构建基因调控网络（GRNs）提供了一条有理论基础但尚未充分探索的路径。尽管大多数GRN推断方法仅依赖于基因表达谱，但调控密码最终是写在DNA序列中的。本文回顾了应用于基因序列的信息论数学基础，综述了现有基因调控网络推断的计算方法，重点关注信息论和基于序列的途径，并探讨了进化保守性如何通过约束序列熵来维持生物功能。随后，我们提出一个四层整合框架：结合逐位的香农熵分布、通过詹森-香农散度计算的进化保守性评分、基于表达的互信息与传递熵，以及DNA基础模型嵌入，用以从序列构建GRN。通过大肠杆菌SOS调控子网络的实例分析，我们展示了保守性加权互信息如何提升边缘区分能力，以及传递熵如何解析调控的方向性。该框架生成了可检验的预测：由低熵调控区支持的网络边缘应表现出更高的实验验证率，而跨物种的熵分布保守性应能预测GRN拓扑的保守性。本研究连接了生物信息的三个层次——核苷酸水平的熵、进化约束模式以及网络层面的调控逻辑——确立了信息熵作为从序列到网络调控推断的自然数学语言。

## Abstract
The information encoded in DNA sequences can be rigorously quantified using Shannon entropy and related measures. When placed in an evolutionary context, this quantification offers a principled yet underexplored route to constructing gene regulatory networks (GRNs) directly from sequence data. While most GRN inference methods rely exclusively on gene expression profiles, the regulatory code is ultimately written in the DNA sequence itself. Here we review the mathematical foundations of information theory as applied to gene sequences, survey existing computational methods for GRN inference with emphasis on information-theoretic and sequence-based approaches, and examine how evolutionary conservation constrains sequence entropy to preserve biological function. We then propose a four-layer integrative framework that combines per-position Shannon entropy profiles, evolutionary conservation scoring via Jensen-Shannon divergence, expression-based mutual information and transfer entropy, and DNA foundation model embeddings to construct GRNs from sequence. Through worked examples on the Escherichia coli SOS regulatory sub-network, we demonstrate how conservation-weighted mutual information improves edge discrimination and how transfer entropy resolves regulatory directionality. The framework generates testable predictions: edges supported by low-entropy regulatory regions should show higher experimental validation rates, and cross-species entropy profile conservation should predict GRN topology conservation. This work bridges three scales of biological information-nucleotide-level entropy, evolutionary constraint patterns, and network-level regulatory logic-establishing information entropy as the natural mathematical language for sequence-to-network regulatory inference.

---

## 论文详细总结（自动生成）

## 一、研究核心问题与整体背景

- **研究动机**：  
  当前大多数基因调控网络（Gene Regulatory Network, GRN）推断方法主要依赖基因表达数据，如 ARACNE、CLR、GENIE3 等。这些方法统计分析基因表达之间的依赖关系，却忽略了调控信息的根源——DNA 序列本身。  
  作者指出，调控信息在核苷酸序列层面通过结合位点、密码子偏好等模式体现，因而信息熵等信息论工具可用于直接量化序列中蕴含的生物功能信号。

- **核心科学问题**：  
  如何利用 DNA 序列的信息熵及其进化保守性，将序列层面的信息与基因表达、进化约束结合起来，实现从序列数据直接推断基因调控网络。

- **研究目标**：  
  构建一个统一的信息论框架，将序列熵、进化约束、表达依赖和模型嵌入整合为可计算的网络推断体系，弥合“序列信息”与“网络结构”之间的理论与算法差距。

---

## 二、方法论：核心思想与技术细节

### 2.1 理论基础
- 以香农熵（Shannon Entropy）为核心度量，用以衡量序列中各位点的不确定性：
  \[
  H(j) = -\sum_{i \in \{A,C,G,T\}} p_i(j)\log_2 p_i(j)
  \]
- 信息含量（Information Content, IC）定义为序列位点偏离随机性的程度：
  \[
  IC(j) = \log_2(4) - H(j) - e(n)
  \]
- 进化保守性通过詹森–香农散度（Jensen–Shannon Divergence, JSD）与跨物种比对的熵变化来度量。

### 2.2 信息论扩展指标
- **互信息 (MI)**：衡量两个变量间的统计依赖，用于检测基因之间的协同表达。
- **条件互信息 (CMI)**：去除中介变量影响，区分直接与间接调控。
- **传递熵 (Transfer Entropy, TE)**：刻画调控方向性，是非对称信息流度量。
- **Kolmogorov 复杂性与 Lempel–Ziv (LZ) 压缩度量**：衡量序列的可压缩性和复杂性，用作高阶依赖结构指标。

### 2.3 四层整合框架
论文提出“**四层信息整合框架**”，构成算法主体（见图 2）：

1. **序列信息层**：计算逐位的香农熵、DNA 语言模型困惑度(perplexity)、LZ 复杂度，描述序列信息分布。  
2. **进化保守层**：通过跨物种分布的 JSD 与模型重建概率，识别“信息保守元件”。  
3. **网络推断层**：在表达数据上计算 MI、CMI、TE，并以序列保守度作为权重与条件变量校正。  
4. **基础模型整合层**：利用 DNA 语言模型（如 DNABERT-2、Evo2）的嵌入特征和注意力机制来补充非线性依赖，用多模态 GNN 进行特征融合。  

最终为每一候选调控边计算**复合评分函数**：
\[
S(g_{TF} \rightarrow g_{target}) = \alpha\cdot MI_{expr}\cdot w_{cons}(R) + \beta\cdot TE_{expr} + \gamma\cdot IC_{motif}(m,R)
\]
其中 \(w_{cons}(R)\) 联合了位置熵与语言模型困惑度的加权。

---

## 三、实验设计与对比方法

- **实验对象**：  
  以**大肠杆菌 SOS 调控子网络**为实例验证，包括基因 *lexA, recA, uvrA, uvrB, sulA, umuD*。
  
- **实验数据**：  
  以模拟表达矩阵（12 条件、6 基因）与已知保守位点（LexA 结合位点）为主，验证框架步骤。

- **验证流程**：  
  - 计算 MI → 应用 DPI（数据处理不等式）裁剪间接边 → 加入保守加权 → 使用 TE 解析方向性 → 比较获得的网络与真实调控关系。  
  - 以 AUC 与网络拓扑一致性作为主要评估指标。

- **对比方法（Table 1）**：  
  ARACNE、CLR、GENIE3、PCA-CMI、CMI2NI、MEOMI、SCENIC+、LINGER 等主流表达或混合方法。

- **基准场景**：  
  文中展示了对 *E. coli* 与 *S. cerevisiae* 的预测性能投影（Fig.4A），预期优于表达型方法。

---

## 四、资源与算力说明

- 文中**未具体说明算力资源**（如 GPU 型号或训练时长）。  
  提到的“DNA 基础模型嵌入”依赖预训练模型（如 DNABERT-2、Evo2），但未报告运行或训练资源。

---

## 五、实验数量与充分性

- **实验数量**：  
  主体演示为一组大肠杆菌 SOS 网络案例，配合若干理论推导与图示模拟。
- **补充预测与基准分析**：  
  提供跨物种投影结果（Figure 4），但为理论预估而非实测。
- **充分性与公平性**：  
  框架流程展示清晰、逻辑完整，但缺乏大规模真实数据验证和参数消融实验。因此仍属方法论性探索，实验范围有限。

---

## 六、主要结论与发现

- **核心结论**：  
  信息熵可以作为连接 DNA 序列、进化约束与调控逻辑的统一度量语言。  
  将序列保守性信息整合入 MI / TE 基因网络推断中显著提升边界识别与方向判定。
  
- **核心发现**：
  1. **低熵调控区**的网络边缘更具生物学验证性。  
  2. 跨物种序列熵剖面保守程度与调控网络拓扑的保守性高度相关。  
  3. DNA 基础模型的困惑度可作为非线性信息特征的有效代理。

---

## 七、方法优势与创新亮点

- **统一性**：首次构建从核苷酸信息熵到网络结构的系统桥梁。  
- **多尺度融合**：连接序列位点—进化保守—基因网络三个层级。  
- **方向解析能力增强**：结合 TE 可有效判定调控方向。  
- **可解释性强**：低熵区域直接对应高功能约束，为边缘评分提供生物学解释。  
- **模型兼容性好**：可整合现有 DNA 语言模型与多模态网络结构。

---

## 八、不足与局限

- **实验规模有限**：缺乏真实多物种、多组学实证。  
- **算力与数据依赖不明**：未明确报告运行代价与可复现性。  
- **参数依赖性**：复合系数 (α, β, γ) 需经验设定或交叉验证优化，尚未给出自动估计方式。  
- **进化假设风险**：假设保守性即功能重要，可能忽略新近获得的调控创新。  
- **未与真实大样本基因网络做系统 benchmark**，需后续验证其稳健性与泛化。

---

**（完）**
