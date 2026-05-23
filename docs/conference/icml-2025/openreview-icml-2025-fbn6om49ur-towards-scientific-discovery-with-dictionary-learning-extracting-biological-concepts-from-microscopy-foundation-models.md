---
title: "Towards scientific discovery with dictionary learning: Extracting biological concepts from microscopy foundation models"
title_zh: 用字典学习迈向科学发现：从显微镜基础模型中提取生物学概念
authors: "Konstantin Donhauser, Kristina Ulicna, Gemma Elyse Moran, Aditya Ravuri, Kian Kenyon-Dean, Cian Eastwood, Jason Hartford"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=fBn6om49Ur"
tags: ["query:automatic-discovery"]
score: 3.0
evidence: 字典学习从显微镜模型中发现科学概念
tldr: 使用稀疏字典学习从显微镜视觉模型中提取生物学概念。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 1024, \"height\": 327}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-002.webp\", \"caption\": \"\", \"page\": 6, \"index\": 2, \"width\": 1024, \"height\": 237}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-003.webp\", \"caption\": \"\", \"page\": 6, \"index\": 3, \"width\": 1024, \"height\": 256}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-004.webp\", \"caption\": \"\", \"page\": 8, \"index\": 4, \"width\": 1024, \"height\": 664}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-005.webp\", \"caption\": \"\", \"page\": 9, \"index\": 5, \"width\": 1024, \"height\": 596}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-006.webp\", \"caption\": \"\", \"page\": 13, \"index\": 6, \"width\": 1024, \"height\": 409}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-007.webp\", \"caption\": \"\", \"page\": 13, \"index\": 7, \"width\": 1024, \"height\": 853}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-008.webp\", \"caption\": \"\", \"page\": 16, \"index\": 8, \"width\": 1024, \"height\": 1017}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-009.webp\", \"caption\": \"\", \"page\": 18, \"index\": 9, \"width\": 377, \"height\": 377}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-010.webp\", \"caption\": \"\", \"page\": 18, \"index\": 10, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-011.webp\", \"caption\": \"\", \"page\": 18, \"index\": 11, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-012.webp\", \"caption\": \"\", \"page\": 18, \"index\": 12, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-013.webp\", \"caption\": \"\", \"page\": 18, \"index\": 13, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-014.webp\", \"caption\": \"\", \"page\": 18, \"index\": 14, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-015.webp\", \"caption\": \"\", \"page\": 18, \"index\": 15, \"width\": 377, \"height\": 377}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-016.webp\", \"caption\": \"\", \"page\": 18, \"index\": 16, \"width\": 377, \"height\": 377}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-017.webp\", \"caption\": \"\", \"page\": 18, \"index\": 17, \"width\": 377, \"height\": 377}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-018.webp\", \"caption\": \"\", \"page\": 18, \"index\": 18, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-019.webp\", \"caption\": \"\", \"page\": 18, \"index\": 19, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-020.webp\", \"caption\": \"\", \"page\": 18, \"index\": 20, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-021.webp\", \"caption\": \"\", \"page\": 18, \"index\": 21, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-022.webp\", \"caption\": \"\", \"page\": 18, \"index\": 22, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-023.webp\", \"caption\": \"\", \"page\": 19, \"index\": 23, \"width\": 377, \"height\": 377}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-024.webp\", \"caption\": \"\", \"page\": 19, \"index\": 24, \"width\": 377, \"height\": 377}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-025.webp\", \"caption\": \"\", \"page\": 19, \"index\": 25, \"width\": 377, \"height\": 377}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-026.webp\", \"caption\": \"\", \"page\": 19, \"index\": 26, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-027.webp\", \"caption\": \"\", \"page\": 19, \"index\": 27, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-028.webp\", \"caption\": \"\", \"page\": 19, \"index\": 28, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-029.webp\", \"caption\": \"\", \"page\": 19, \"index\": 29, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-030.webp\", \"caption\": \"\", \"page\": 19, \"index\": 30, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-031.webp\", \"caption\": \"\", \"page\": 19, \"index\": 31, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-032.webp\", \"caption\": \"\", \"page\": 19, \"index\": 32, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-033.webp\", \"caption\": \"\", \"page\": 19, \"index\": 33, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-034.webp\", \"caption\": \"\", \"page\": 19, \"index\": 34, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-035.webp\", \"caption\": \"\", \"page\": 19, \"index\": 35, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-036.webp\", \"caption\": \"\", \"page\": 20, \"index\": 36, \"width\": 377, \"height\": 377}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-037.webp\", \"caption\": \"\", \"page\": 20, \"index\": 37, \"width\": 377, \"height\": 377}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-038.webp\", \"caption\": \"\", \"page\": 20, \"index\": 38, \"width\": 466, \"height\": 466}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-039.webp\", \"caption\": \"\", \"page\": 20, \"index\": 39, \"width\": 377, \"height\": 377}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-040.webp\", \"caption\": \"\", \"page\": 20, \"index\": 40, \"width\": 419, \"height\": 419}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-041.webp\", \"caption\": \"\", \"page\": 20, \"index\": 41, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-042.webp\", \"caption\": \"\", \"page\": 20, \"index\": 42, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-043.webp\", \"caption\": \"\", \"page\": 20, \"index\": 43, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-044.webp\", \"caption\": \"\", \"page\": 20, \"index\": 44, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-045.webp\", \"caption\": \"\", \"page\": 20, \"index\": 45, \"width\": 1305, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-046.webp\", \"caption\": \"\", \"page\": 22, \"index\": 46, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-047.webp\", \"caption\": \"\", \"page\": 22, \"index\": 47, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-048.webp\", \"caption\": \"\", \"page\": 22, \"index\": 48, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-049.webp\", \"caption\": \"\", \"page\": 22, \"index\": 49, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-050.webp\", \"caption\": \"\", \"page\": 22, \"index\": 50, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-051.webp\", \"caption\": \"\", \"page\": 22, \"index\": 51, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-052.webp\", \"caption\": \"\", \"page\": 23, \"index\": 52, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-053.webp\", \"caption\": \"\", \"page\": 23, \"index\": 53, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-054.webp\", \"caption\": \"\", \"page\": 23, \"index\": 54, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-055.webp\", \"caption\": \"\", \"page\": 23, \"index\": 55, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-056.webp\", \"caption\": \"\", \"page\": 23, \"index\": 56, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-057.webp\", \"caption\": \"\", \"page\": 23, \"index\": 57, \"width\": 1000, \"height\": 800}]"
motivation: 现有字典学习主要应用于文本领域，本文探索其在科学数据中提取概念的能力。
method: 结合稀疏字典学习算法ICFL与PCA白化预处理，从显微镜基础模型中提取生物学概念。
result: 成功从细胞显微镜图像中检索到具有生物学意义的特征。
conclusion: 字典学习可有效从科学数据中提取可解释概念，推动科学发现。
---

## Abstract
Sparse dictionary learning (DL) has emerged as a powerful approach to extract semantically meaningful concepts from the internals of large language models (LLMs) trained mainly in the text domain. In this work, we explore whether DL can extract meaningful concepts from less human-interpretable scientific data, such as vision foundation models trained on cell microscopy images, where limited prior knowledge exists about which high-level concepts should arise. We propose a novel combination of a sparse DL algorithm, Iterative Codebook Feature Learning (ICFL), with a PCA whitening pre-processing step derived from control data. Using this combined approach, we successfully retrieve biologically meaningful concepts, such as cell types and genetic perturbations. Moreover, we demonstrate how our method reveals subtle morphological changes arising from human-interpretable interventions, offering a promising new direction for scientific discovery via mechanistic interpretability in bioimaging.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **动机**：字典学习（DL）已成功从大型语言模型（LLM）中提取语义概念，但该方法主要依赖文本监督。本文欲探索 DL 能否从**缺少人类先验知识**的科学数据（如无监督显微镜基础模型）中提取有意义的高层特征。
- **背景**：细胞显微镜图像通常使用掩码自编码器（MAE）学习表征，这些模型能捕捉复杂的生物关系，但内部表征难以解释。若能通过机制可解释性（如字典学习）分解出概念，将有助于理解药物扰动等引发的细微形态变化，推动科学发现。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：假设模型表征由稀疏的、过完备的概念线性组合而成（叠加假说）。通过字典学习将表征分解为稀疏特征向量和对应的特征方向（字典列）。
- **关键技术细节**：
  - **Iterative Codebook Feature Learning (ICFL)**：一种批量匹配追踪算法。对每一个表征 $x$，先选择与残差最相关的 $L$ 个字典列，求解在该子集上的稀疏系数，更新残差；重复 $J$ 次，最终得到最多 $K=J\cdot L$ 个非零特征。该过程替代了SAE中的编码器，字典矩阵 $W_{\text{dec}}$ 通过梯度下降最小化重构损失来学习。
  - **PCA 白化预处理**：利用对照（未处理）细胞数据计算PCA变换，将扰动样本的表征减去对照均值并白化，从而抑制常见变异（如细胞周期），突出扰动信号。
  - **特征碰撞处理**：每100步对余弦相似度 >0.9 的字典列随机重置一列，防止特征坍塌。
- **公式 / 算法流程**：
  - 模型：$x \approx W_{\text{dec}} z + b_{\text{pre}}$，$z$ 为稀疏向量。
  - 损失：$\mathcal{L} = \sum_i \|x_i - W_{\text{dec}} z_i - b_{\text{pre}}\|_2^2$。
  - 算法1（Batched-OMP）：输入 $x,W_{\text{dec}},b_{\text{pre}}$，初始化 $x^{(1)}=x-b_{\text{pre}}$，迭代 $t=1..J$：选择 top-L 列，求解最小二乘，更新残差。

### 3. 实验设计

- **数据集与场景**：
  - 使用 **Cell Painting** 显微镜图像，来自 **RxRx1** 和 **RxRx3** 数据集。
  - 基础模型：两个 MAE（ViT-L/8 约330M参数，ViT-G/8 约1.9B参数），在细胞图像上预训练。
  - 提取中间层（L=16, G=33）的残差流或注意力输出作为表征。
- **Benchmark 任务（5个分类任务）**：
  1. **细胞类型**（23类，近线性可分）
  2. **实验批次**（272类，强批次效应）
  3. **siRNA 扰动**（1138类，弱信号）
  4. **CRISPR 扰动**（5类，强信号）
  5. **功能基因群**（39类，表型相似组）
  - 评估指标：平衡测试准确率（BTA）、选择性分数（avg/max selectivity）、余弦相似度（重建质量）。
- **对比方法**：
  - **TopK SAE**（Gao et al., 2024）：两层的稀疏自编码器，使用TopK激活。
  - **CellProfiler 手工特征**（964个特征）：由领域专家设计，用于对比选择性分数。
  - 消融：有无PCA白化、不同模型尺寸、不同层、不同稀疏度、不同学习率。

### 4. 资源与算力

- 文中提及训练细节：**40M tokens**（每个token来自一个图像块），batch size **8192**，训练 **300k 迭代**，学习率 **5×10⁻⁵**。
- 未明确说明使用的 GPU 型号、数量及总训练时长。因此无法精确量化算力开销。

### 5. 实验数量与充分性

- **实验组数**：较多，包括：
  - 主要对比（ICFL vs TopK SAE）在5个任务上。
  - 消融实验：PCA白化（有/无）、模型尺寸（MAE-L vs MAE-G）、层类型（残差流 vs 注意力输出）、稀疏度（50~150）、学习率（1e-5~1e-4）。
  - 与 CellProfiler 手工特征的对比（图2）。
  - 单细胞级别的定性分析（图6、表3）。
- **充分性评估**：实验设计较为全面，覆盖了不同难度任务、不同算法变体、关键超参数。结论在多个维度上得到验证，结果公平（如测试集与训练集按批次分离避免数据泄漏）。但实验仅基于两个 MAE 和一个细胞染色数据集，泛化性有限。

### 6. 论文的主要结论与发现

1. **ICFL + PCA 白化**成功提取了与细胞类型、基因扰动等高度相关的特征，且这些特征**方向**能有效分离不同扰动（图3）。
2. 线性探针在重建表征上的性能接近于原始表征（尤其对强信号任务），说明稀疏特征保留了大部分生物信息。
3. ICFL 相比 TopK SAE 具有**更少死特征**（表1）、**更高的重建质量**（图4C）和**更好的选择性分数**（图8）。
4. PCA 白化对性能提升显著（图4A），因为它抑制了对照数据中的主导方差。
5. 与 CellProfiler 手工特征相比，ICFL 特征的选择性分数相当（Pearson系数0.71），证明无监督方法能自动发现专家级别的概念。
6. 在单细胞水平上，**token级热图**能高精度（87%召回）区分扰动细胞与逃脱细胞，展现机制可解释性的潜力。

### 7. 优点

- **方法创新**：ICFL 结合批量匹配追求和梯度下降，自然避免死特征；PCA白化利用对照数据作为弱监督，提升特征特异性。
- **实验严谨**：在多个生物相关任务上系统评估，包含手工对照，定量与定性结合。
- **解释性强**：通过选择性分数、token热图、细胞分类等展示特征的可解释性，直接关联生物学意义。
- **开源友好**：方法简单，不依赖文本或标签，容易推广到其他科学领域。

### 8. 不足与局限

- **任务难度限制**：对于细微形态变化的扰动（如 siRNA 1138类），线性探针性能下降明显（BTA 仅~51%），表明稀疏特征可能丢失部分信息或这些变化并非线性表示。
- **依赖对照数据**：PCA白化需要来自同一实验的对照样本，可能不适用于无对照的场景。
- **领域局限**：仅验证于 Cell Painting 显微镜数据，对其他科学数据（如基因表达、医学影像）的适用性未知。
- **因果性未验证**：虽然特征与标签相关，但未通过干预实验证明模型确实依赖这些概念进行推理。
- **计算细节缺失**：未报告具体 GPU 时间与资源，难以复现规模和成本。
- **特征数量固定**：始终使用 8192 个特征，未探索最优字典大小。

（完）
