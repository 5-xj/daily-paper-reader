---
title: Explicit Discovery of Nonlinear Symmetries from Dynamic Data
title_zh: 从动态数据显式发现非线性对称性
authors: "Lexiang Hu, Yikang Li, Zhouchen Lin"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=kzY6nbbBYq"
tags: ["query:sr"]
score: 8.0
evidence: 显式发现非线性对称性，属于方程发现
tldr: 该论文针对动力学数据中非线性对称性难以显式发现的问题，提出LieNLSD方法。通过构建函数库并求解系数矩阵，首次同时确定非线性无穷小生成元的数量和显式表达式。理论证明了延长公式的线性性。实验在多种动态系统上成功发现对称性，为方程发现提供了新工具。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-kzy6nbbbyq/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1705, \"height\": 309, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kzy6nbbbyq/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1173, \"height\": 495, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kzy6nbbbyq/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1172, \"height\": 368, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kzy6nbbbyq/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1474, \"height\": 742, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kzy6nbbbyq/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1734, \"height\": 538, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kzy6nbbbyq/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1463, \"height\": 370, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kzy6nbbbyq/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1465, \"height\": 249, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kzy6nbbbyq/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1754, \"height\": 230, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-kzy6nbbbyq/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1764, \"height\": 252, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kzy6nbbbyq/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 868, \"height\": 1060, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kzy6nbbbyq/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 857, \"height\": 381, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kzy6nbbbyq/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1764, \"height\": 457, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kzy6nbbbyq/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1766, \"height\": 231, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kzy6nbbbyq/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1225, \"height\": 404, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kzy6nbbbyq/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1763, \"height\": 318, \"label\": \"Table\"}]"
motivation: 现有对称性发现方法局限于线性对称性或无法给出显式李代数子空间。
method: LieNLSD构建函数库，求解无穷小生成元系数矩阵，获得显式非线性对称性。
result: 在多种动态数据上成功发现非线性对称性，并给出显式表达式。
conclusion: 首次实现非线性对称性的显式发现，可用于微分方程的发现与简化。
---

## Abstract
Symmetry is widely applied in problems such as the design of equivariant networks and the discovery of governing equations, but in complex scenarios, it is not known in advance. Most previous symmetry discovery methods are limited to linear symmetries, and recent attempts to discover nonlinear symmetries fail to explicitly get the Lie algebra subspace. In this paper, we propose LieNLSD, which is, to our knowledge, the first method capable of determining the number of infinitesimal generators with nonlinear terms and their explicit expressions. We specify a function library for the infinitesimal group action and aim to solve for its coefficient matrix, proving that its prolongation formula for differential equations, which governs dynamic data, is also linear with respect to the coefficient matrix. By substituting the central differences of the data and the Jacobian matrix of the trained neural network into the infinitesimal criterion, we get a system of linear equations for the coefficient matrix, which can then be solved using SVD. On top quark tagging and a series of dynamic systems, LieNLSD shows qualitative advantages over existing methods and improves the long rollout accuracy of neural PDE solvers by over $20\\%$ while applying to guide data augmentation. Code and data are available at [https://github.com/hulx2002/LieNLSD](https://github.com/hulx2002/LieNLSD).

---

## 论文详细总结（自动生成）

## 论文详细总结

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：在复杂动态系统中，非线性对称性（如 Lie 点对称性）的自动发现极具挑战。现有方法大多局限于线性对称性（如 LieGAN、LieGG），而能够发现非线性对称性的最近工作（LaLiGAN、Ko et al.、Shaw et al.）要么无法显式给出无穷小生成元的表达式（黑盒），要么只能处理单参数群对称性，且均不能自动确定李代数子空间的维数（即非线性无穷小生成元的数量）。
- **整体含义**：该文旨在填补这一空白，首次提出同时确定非线性无穷小生成元的数量及其显式表达式的自动发现方法。这对于简化微分方程、指导等变网络设计、辅助方程发现等应用具有重要价值。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：将无穷小群作用表示为函数库的线性组合，通过证明其延长公式（prolongation）和无穷小判据（infinitesimal criterion）均对系数矩阵保持线性，从而将对称性发现转化为一个线性方程组求解问题。
- **关键技术细节**：
  - **函数库设定**：定义无穷小群作用为 \( v = W \Theta(x,u) \cdot \nabla \)，其中 \(\Theta\) 是预定义函数库（包含非线性项，如 \(1,x,u,x^2,\ldots\)），\(W\) 是待求系数矩阵。
  - **延长公式线性性证明（Theorem 4.1）**：证明了 \(n\) 阶延长 \( \text{pr}^{(n)}v \) 仍线性于 \(W\)，即 \(\text{pr}^{(n)}v = \Theta_n(x,u^{(n)}) \text{vec}(W) \cdot \nabla\)。
  - **无穷小判据**：对于微分方程系统 \(F(x,u^{(n)})=0\)，对称性条件为 \(\text{pr}^{(n)}v[F] = 0\)，代入可得 \(J_F \Theta_n \text{vec}(W)=0\)，即关于 \(\text{vec}(W)\) 的线性齐次方程组。
  - **求解流程**：
    1. 从动态数据集中用中心差分估计各阶导数，得到延拓数据集。
    2. 训练神经网络拟合输入输出映射（如 \(u_t = f(u')\)），并通过自动微分获得雅可比矩阵 \(J_F\)。
    3. 采样 \(M\) 个点，构造系数矩阵 \(C\)，其零空间对应 \(\text{vec}(W)\) 的解空间。
    4. 对 \(C\)（或 \(C^\top C\)）进行奇异值分解（SVD），小奇异值个数即为无穷小生成元个数，对应的右奇异向量即为系数矩阵。
    5. 采用 LADMAP 算法对基底进行稀疏化，以提高可解释性。

### 3. 实验设计：数据集 / 场景、Benchmark、对比方法

- **数据集/场景**：
  - **线性对称性**：Top quark tagging 数据集（粒子物理，静态数据）。
  - **非线性对称性**：Burgers 方程、波动方程（2维）、薛定谔方程（复域形式）的动力学数据。
  - **数据增强应用**：Burgers 方程、热方程、KdV 方程的长时间滚动预测（使用 FNO 作为神经 PDE 求解器）。
- **Benchmark**：以 Grassmann 距离（子空间距离）作为定量指标，并比较参数量。
- **对比方法**：与 LieGAN（线性对称性发现最佳方法）进行线性对称性精度的定量对比；与 Ko et al. (2024) 在数据增强效果上进行对比；与无增强、真实对称性增强（GT）对比。

### 4. 资源与算力

- 文中未明确说明训练所使用的 GPU 型号、数量及具体训练时长。仅在附录中提及使用 Adan 优化器、学习率 \(10^{-3}\) 等超参数，但未报告硬件配置。因此，无法评估其算力需求。

### 5. 实验数量与充分性

- **实验数量**：涵盖了 4 种动力学系统（Burgers、波动、薛定谔、热、KdV、反应扩散）及 1 个静态物理任务，共计至少 7 组数据集。
- **定量实验**：在 Top quark tagging、Burgers、波动、薛定谔 4 个数据集上，与 LieGAN 对比了 Grassmann 距离（3 次运行均值±标准差）；在 3 个 PDE 数据集上进行了数据增强效果对比（3 次运行）。
- **消融/扩展**：还包括了热方程、KdV 方程、反应扩散系统的额外实验，以及基底稀疏化效果。
- **充分性与公平性**：实验较为充分，对比方法均为当前最先进的工作（LieGAN、Ko et al.），且 Grassmann 距离为客观指标。但缺乏与 LaLiGAN 的直接定量对比（因 LaLiGAN 无法给出显式子空间），且未提供训练时间对比。

### 6. 论文的主要结论与发现

- 提出了 LieNLSD，是首个能同时确定非线性无穷小生成元数量并显式给出其表达式的方法。
- 证明了延长公式和无穷小判据对系数矩阵的线性性质，从而将对称性发现简化为线性方程组求解。
- 在多个动态系统上成功发现了已知的非线性对称性（如 Burgers 方程的特殊共形对称、波动方程的 20 个生成元、薛定谔方程的旋转/缩放等），且线性对称性精度优于 LieGAN，参数量更少。
- 将发现对称性用于指导数据增强（LPSDA），使 FNO 的长时滚动预测精度提升超过 20%，效果与使用真实对称性（GT）相当，优于 Ko et al. 的方法。

### 7. 优点

- **方法论创新**：首次在非线性对称性发现中实现了显式性，可确定李代数子空间维数，克服了现有方法的黑盒或单参数限制。
- **理论严谨**：严格证明了延长公式的线性性质，为线性求解提供了数学保证。
- **灵活性**：函数库可自由指定，理论上可扩展到任意阶非线性项。
- **应用有效**：在多种物理系统上验证，且直接提升了下游任务（PDE 求解器数据增强）的性能。
- **可解释性**：通过 LADMAP 稀疏化基底，使结果更直观易读。

### 8. 不足与局限

- **实验局限**：
  - 未与 LaLiGAN 进行直接定量对比（因 LaLiGAN 无法给出显式子空间），只能定性说明 LieNLSD 更优。
  - 未评估大型/高维系统（如三维 Navier-Stokes）上的扩展性。
  - 函数库选择依赖于先验知识（如最高阶项的选择），可能影响发现结果的完整性。
- **偏差风险**：神经网络拟合的准确性直接影响雅可比矩阵，从而影响对称性发现的精度。若训练数据覆盖不足或存在噪声，可能导致错误对称性。
- **应用限制**：
  - 要求数据来自微分方程系统，且需已知方程结构（以便分离输入输出特征），不适用于完全黑盒数据。
  - 中心差分法估导在高阶导数时受网格分辨率影响较大，对数据质量敏感。
  - 稀疏化步骤（LADMAP）的收敛性依赖超参数设定，可能需要调参。
- **算力成本**：未明确说明，但训练多个神经网络（每个数据集一个）及进行 SVD 在处理大规模数据时可能计算量较大。

（完）
