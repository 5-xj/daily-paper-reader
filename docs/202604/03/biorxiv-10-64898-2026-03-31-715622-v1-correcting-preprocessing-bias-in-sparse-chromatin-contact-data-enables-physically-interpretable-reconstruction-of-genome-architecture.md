---
title: Correcting Preprocessing Bias in Sparse Chromatin Contact Data Enables Physically Interpretable Reconstruction of Genome Architecture
title_zh: 纠正稀疏染色质接触数据中的预处理偏差，实现具有物理可解释性的基因组架构重建
authors: "Sys, S., Misak, M., Soliman, A., Herrera-Rodriguez, R., Lambuta, R.-A., Weissbach, S., Everschor, K., Schweiger, S., Michels, J., Padeken, J., Gerber, S."
date: 2026-04-02
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.31.715622v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 基因组架构重建与染色质数据分析
tldr: 该研究揭示了染色质接触图预处理中广泛存在的“全矩阵百分位裁剪”偏差，指出其会扭曲稀疏数据的动态范围，影响对基因组三维结构的定量解释。作者提出了一种基于非零百分位裁剪和对数空间归一化的新框架，并开发了深度学习工具CCUT。该方法能有效恢复符合聚合物物理特性的接触图，实现了实验数据与物理模型（如环挤压模型）的定量一致性，为染色质构象分析提供了更稳健的标准。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-715622-v1/fig-001.webp\", \"caption\": \"Figure 2: Visual and quantitative assessment of contact matrix reconstruction on 242 representative genomic loci from the HG002 dataset. Each block shows three columns 243\", \"page\": 11, \"index\": 1, \"width\": 900, \"height\": 1229}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-715622-v1/fig-002.webp\", \"caption\": \"Table 1: Input parameters for the KMC loop extrusion model 338\", \"page\": 15, \"index\": 2, \"width\": 888, \"height\": 623}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-715622-v1/fig-003.webp\", \"caption\": \"Figure 1: Whole-matrix clipping collapses the dynamic range of sparse contact data and 161 selectively distorts near-diagonal signal. (a) Contact count distributions (nonzero entries, 162 log-scale density) for chr1 at 50 kb resolution across three chromatin capture technologies. 163\", \"page\": 7, \"index\": 3, \"width\": 898, \"height\": 889}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-715622-v1/fig-004.webp\", \"caption\": \"Figure 4: Comparison of original and reconstructed interaction maps of the highly dense 403 C. elegans genome. (a) Original and reconstructed interaction map of chromosome III with the 404 typical separation into heterochromatin rich chromosome arms (light grey) and euchromatin rich 405 center region (dark grey) indicated below the heatmaps. Enrichment of heterochromatin marked 406 by H3K9me3 for chromosome III measured by CUT&Tag in wild-type C. elegans embryos is 407 plotted right to the enhanced interaction map. The right side shows a comparison of interaction 408 maps of the eu-/heterochromatin border on the left arm on chromosome 3 for original and 409 reconstructed data. (b) Original and reconstructed interaction map of chromosome X with the 410 typical separation into smaller TAD-like domains organized by the C. elegans dosage 411 compensation complex (DCC). Enlargements showing the reconstructed interaction frequencies 412\", \"page\": 19, \"index\": 4, \"width\": 878, \"height\": 852}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-715622-v1/fig-005.webp\", \"caption\": \"Figure 3: Simulated contact maps with TAD-related features. (a) Fraction of occupied 361 CTCF binding sites as a function of (dimensionless) simulation time. (b,c) Fraction of bound 362 cohesins for, respectively, slow and fast dissociation (see Table 1). The horizontal dashed 363 black lines indicate the steady state values. (d) Representative steady state snapshots of 364 simulated time-averaged contact matrices, for (left to right) an increasing extrusion bias (see 365 Table 1) for slow (upper row) and fast (bottom row) cohesin dissociation. The insets show 366 magnified regions as indicated by the dashed boxes to respectively highlight i) 'chevron'-like 367 features arising from stalling at CTCF sites with similar orientation, ii) enhanced corner 368 peaks and iii) cross-like stripes due to stalling at neighboring boundary sites with opposite 369 orientation. The color scale linearly interpolates between zero and the highest value in each 370 matrix. 371\", \"page\": 17, \"index\": 5, \"width\": 930, \"height\": 658}]"
motivation: 现有的全矩阵百分位裁剪预处理方法会系统性地扭曲稀疏接触图的动态范围，导致无法对染色质结构进行准确的定量物理分析。
method: 提出基于非零百分位裁剪和对数空间归一化的统计一致性预处理框架，并结合模块化深度学习框架CCUT进行接触图重建。
result: 重建的接触图在结构域组织、接触衰减和缩放行为上与聚合物物理一致，并与动力学蒙特卡洛环挤压模拟结果达成定量契合。
conclusion: 预处理是决定染色质接触图物理可解释性的关键因素，本研究为跨技术的染色质构象捕获数据分析提供了原则性框架。
---

## 摘要
DNA 是自然界中最大的生物聚合物，染色质接触图谱被广泛视为其三维组织的定量读数。然而，此类解释的有效性关键取决于这些图谱的处理方式。在本文中，我们识别出染色质接触数据分析中一个此前被忽视但却根本性的偏差来源。我们证明，一种被广泛采用的预处理惯例，即全矩阵百分位裁剪（whole-matrix percentile clipping），会通过压缩动态范围来系统性地扭曲稀疏接触图谱。这种效应在近对角线相互作用中最为强烈，而该区域正是编码染色质结构域和环状结构的关键区域，因此在保留表面结构特征的同时损害了定量解释。我们表明，这种扭曲代表了当前预处理标准中一种依赖于稀疏性的失效模式，并影响了不同技术和测序深度下数据集与计算方法的可比性。为解决这一问题，我们引入了一个基于非零百分位裁剪（nonzero-percentile clipping）和对数空间归一化（log-space normalization）的统计一致性预处理框架，该框架保留了观测接触的内在动态范围。在此基础上，我们提出了 CCUT，这是一个用于染色质接触图谱重建的模块化深度学习框架。在纠正后的预处理下，重建的图谱恢复了与聚合物物理学一致的结构域组织、接触衰减和标度行为。重要的是，我们证明了重建图谱与源自动力学蒙特卡洛环挤压模型（kinetic Monte Carlo loop extrusion model）的模拟接触模式之间存在定量一致性，从而实现了实验数据与物理模型之间的直接比较。总之，我们的研究结果确立了预处理是染色质接触图谱物理可解释性的决定性因素，并为跨染色质构象捕获技术的稳健且具有可比性的分析提供了一个原则性框架。

## Abstract
DNA is the largest biopolymer in nature, and chromatin contact maps are widely interpreted as quantitative readouts of its three-dimensional organization. However, the validity of such interpretations critically depends on how these maps are processed. Here, we identify a previously overlooked but fundamental source of bias in chromatin contact data analysis. We demonstrate that a widely adopted preprocessing convention, namely whole-matrix percentile clipping, systematically distorts sparse contact maps by collapsing their dynamic range. This effect is strongest in near-diagonal interactions, precisely the regime encoding chromatin domains and looping structures, thereby compromising quantitative interpretation while preserving superficial structural features. We show that this distortion represents a sparsity-dependent failure mode of current preprocessing standards and affects the comparability of datasets and computational methods across technologies and sequencing depths. To address this, we introduce a statistically consistent preprocessing framework based on nonzero-percentile clipping and log-space normalization, which preserves the intrinsic dynamic range of observed contacts. Building on this foundation, we present CCUT, a modular deep learning framework for chromatin contact map reconstruction. Under corrected preprocessing, reconstructed maps recover domain organization, contact decay, and scaling behavior consistent with polymer physics. Importantly, we demonstrate quantitative agreement between reconstructed maps and simulated contact patterns derived from a kinetic Monte Carlo loop extrusion model, enabling direct comparison between experimental data and physical models. Together, our results establish preprocessing as a decisive determinant of the physical interpretability of chromatin contact maps and provide a principled framework for robust and comparable analysis across chromatin conformation capture technologies.

---

## 论文详细总结（自动生成）

这篇论文深入探讨了染色质构象捕获（3C）数据处理中的统计偏差，并提出了一个更具物理意义的重建框架。以下是对该论文的结构化总结：

### 1. 核心问题与研究背景
*   **核心问题**：论文指出当前主流的染色质接触图增强工具（如 DeepHiC, HiCARN 等）在预处理阶段存在一个被忽视的严重偏差——**全矩阵百分位裁剪（Whole-matrix percentile clipping）**。
*   **研究背景**：在处理稀疏数据（如 Pore-C 或低深度 Hi-C）时，矩阵中存在大量零值。传统的全矩阵裁剪会将零值纳入百分位计算，导致裁剪阈值极低，从而系统性地抹杀了近对角线区域（编码 TAD 和环结构的关键高频接触区）的信号动态范围。这使得重建结果虽然在视觉上尚可，但在物理定量解释上是失效的。

### 2. 方法论
*   **核心思想**：建立一种统计一致性的预处理流程，确保无论数据稀疏度如何，都能保留原始接触数的动态范围，从而实现物理可解释的重建。
*   **关键技术细节**：
    1.  **非零百分位裁剪（Nonzero-percentile clipping）**：仅针对矩阵中的非零项计算 99.95% 分位数作为裁剪阈值，避免零值对统计分布的干扰。
    2.  **对数空间归一化（Log-space Normalization）**：采用 `log1p` 变换压缩长尾分布，随后进行按染色体的 Min-Max 归一化。
    3.  **CCUT 框架与 HiCNet**：开发了“染色质捕获上采样工具箱”（CCUT），内置 **HiCNet** 架构。HiCNet 是一个分阶段的生成对抗网络（GAN），利用监督注意力模块（SAM）和对称性约束来恢复局部和全局特征。
    4.  **Lin’s CCC 指标**：引入林氏一致性相关系数（CCC）来评估接触衰减曲线 $P(s)$ 的重建质量，比传统的 Pearson 相关系数更能反映尺度和位移的准确性。

### 3. 实验设计
*   **数据集**：
    *   人类 Pore-C 数据（GM12878 公开数据及 HG002 自测数据）。
    *   人类 Micro-C 和 Hi-C 数据（用于预处理偏差对比）。
    *   秀丽隐杆线虫（C. elegans）胚胎 Pore-C 数据（用于跨物种验证）。
*   **Benchmark**：采用 16 倍二项分布下采样（Binomial downsampling）模拟低深度测序数据。
*   **对比方案**：对比了“原始未裁剪”、“全矩阵裁剪”和“非零百分位裁剪”三种预处理路径下的重建效果。
*   **物理模型验证**：使用动力学蒙特卡洛（KMC）环挤压模型生成模拟数据，验证重建图谱是否符合聚合物物理特性（如条带、角峰等）。

### 4. 资源与算力
*   **硬件**：使用了 **NVIDIA V100 GPU** 进行训练。
*   **软件细节**：基于 PyTorch 实现，使用了 6 个并行数据加载 worker。
*   **超参数优化**：使用 Optuna 框架进行了 30 次试验的自动超参数搜索。
*   **时长**：文中未明确给出具体的总训练时长，但提到模型可以在消费级硬件上进行微调。

### 5. 实验数量与充分性
*   **实验规模**：涵盖了人类 22 条常染色体（划分为训练、验证、测试集），并跨越了不同物种（人与线虫）。
*   **充分性**：实验设计较为全面，不仅包含了像素级指标（MSE, SSIM），还包含了生物结构指标（Insulation Score, TAD Boundary F1）和物理指标（$P(s)$ 衰减）。
*   **客观性**：通过与物理模拟模型的定量对比，证明了方法的客观有效性，而非仅仅停留在图像相似度层面。

### 6. 主要结论与发现
*   **预处理决定论**：预处理选择比模型架构更能决定稀疏数据的重建质量。全矩阵裁剪会导致近对角线区域的 Pearson 相关系数从 >0.85 塌陷至 0.5 左右。
*   **定量恢复**：CCUT 能够精准恢复被深度下采样抹除的结构域组织和接触衰减行为。
*   **物理一致性**：重建的接触图与 KMC 物理模拟结果在定量上高度契合，证明了深度学习可以学习到染色质作为聚合物的内在物理约束。
*   **跨物种通用**：在线虫这种基因密度极高、基因组极小的物种上也表现出良好的重建能力。

### 7. 优点
*   **纠偏贡献**：首次系统性地指出并解决了 3C 数据增强领域长期存在的预处理统计偏差问题。
*   **物理深度**：将深度学习与聚合物物理模型（环挤压）相结合，提升了结果的可信度。
*   **评估严谨**：识别出 Pearson 相关系数在评估衰减曲线时的局限性，并推广了更严谨的 CCC 指标。

### 8. 不足与局限
*   **外部对比有限**：由于 Pore-C 增强是一个新兴领域，论文主要与自身框架下的不同预处理方案对比，缺乏与其他最新 Hi-C 增强工具在 Pore-C 数据上的直接横向对比。
*   **极端区域挑战**：对于 GC 含量极端或高度重复的异染色质区域，重建精度可能仍受限于测序本身的偏差。
*   **泛化成本**：虽然模型具有通用性，但针对完全不同的实验协议或物种，可能仍需要一定程度的重训练或微调。

（完）
