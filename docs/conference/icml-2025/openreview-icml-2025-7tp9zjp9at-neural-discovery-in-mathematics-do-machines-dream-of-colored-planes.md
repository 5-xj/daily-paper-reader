---
title: "Neural Discovery in Mathematics: Do Machines Dream of Colored Planes?"
title_zh: 数学中的神经发现：机器会梦想彩色平面吗？
authors: "Konrad Mundinger, Max Zimmer, Aldo Kiem, Christoph Spiegel, Sebastian Pokutta"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=7Tp9zjP9At"
tags: ["query:ad"]
score: 7.0
evidence: 神经网络自动发现数学结构
tldr: 本文展示神经网络如何驱动数学发现：针对Hadwiger-Nelson着色问题，将离散连续混合的几何约束转化为可微优化问题，通过梯度探索发现两个新的六着色方案，三十年来首次改进该问题的非对角变体。该方法为自动数学发现提供了可扩展范式。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 859, \"height\": 608, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 855, \"height\": 678, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 858, \"height\": 763, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 723, \"height\": 543, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 867, \"height\": 241, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 869, \"height\": 496, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 856, \"height\": 466, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 855, \"height\": 562, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1419, \"height\": 498, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1658, \"height\": 1186, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 866, \"height\": 590, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1592, \"height\": 804, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1691, \"height\": 839, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1593, \"height\": 1594, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1282, \"height\": 1278, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1518, \"height\": 820, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1415, \"height\": 498, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-7tp9zjp9at/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 859, \"height\": 203, \"label\": \"Table\"}]"
motivation: 传统数学证明依赖人工直觉，难以探索大规模离散连续混合空间。
method: 用神经网络作为近似器，将硬约束着色问题转化为概率可微损失函数进行梯度优化。
result: 发现了两个全新的六着色方案，改进了三十年来未突破的非对角Hadwiger-Nelson问题下界。
conclusion: 神经网络可有效辅助数学发现，尤其适用于离散连续混合的组合优化问题。
---

## Abstract
We demonstrate how neural networks can drive mathematical discovery through a case study of the Hadwiger-Nelson problem, a long-standing open problem at the intersection of discrete geometry and extremal combinatorics that is concerned with coloring the plane while avoiding monochromatic unit-distance pairs. Using neural networks as approximators, we reformulate this mixed discrete-continuous geometric coloring problem with hard constraints as an optimization task with a probabilistic, differentiable loss function. This enables gradient-based exploration of admissible configurations that most significantly led to the discovery of two novel six-colorings, providing the first improvement in thirty years to the off-diagonal variant of the original problem (Mundinger et al., 2024a). Here, we establish the underlying machine learning approach used to obtain these results and demonstrate its broader applicability through additional numerical insights.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：Hadwiger‑Nelson 问题（HN 问题）是组合几何与极值组合的经典未解难题，要求确定平面上的色数 \(\chi(\mathbb{R}^2)\)，即给平面上的每点着色，使得任意距离为 1 的两点颜色不同。该问题已有七十余年历史，目前仅知 \(\chi(\mathbb{R}^2) \in \{5,6,7\}\)，下界为 5，上界为 7。
- **整体含义**：作者希望借助神经网络（NN）作为连续优化工具，自动探索该问题及其变体的构造性着色，从而推动数学发现。通过对 Hadwiger‑Nelson 问题的研究，展示了 NN 如何打破离散‑连续混合问题的求解瓶颈，并取得了具体改进（如首次在三十年内更新非对角变体的已知结果）。

### 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：将硬约束的离散着色问题松弛为连续可微的概率着色问题。用一个向量函数 \(p: \mathbb{R}^2 \to \Delta_c\)（\(c\) 维概率单纯形）表示每点属于各颜色的概率，然后定义损失函数惩罚单位距离点上出现相同颜色的期望概率。
- **关键技术细节**：
  - 损失函数定义为：
    \[
    L_R(p) = \int_{[-R,R]^2} \int_{\partial B_1(x)} p(x)^T p(y) \,d\nu(y)\,d\mu(x)
    \]
    其中 \(\partial B_1(x)\) 是半径为 1 的圆，\(\nu\) 和 \(\mu\) 分别为均匀分布。
  - 使用神经网络 \(p_\theta\)（MLP + 正弦激活 + 最终 softmax）参数化概率分布。
  - 通过蒙特卡洛采样近似梯度：每步采样 \(n\) 个中心点 \(x_i \sim U([-R,R]^2)\)，对每个 \(x_i\) 采样 \(m\) 个环绕点 \(y_{ij} \sim U(\partial B_1(x_i))\)，然后计算随机梯度。
- **各变体的调整**：
  - **几乎着色（Variant 1）**：引入第 \(c+1\) 个“额外”颜色，其内部不惩罚冲突；总损失为原损失 \(L_R(p^c_\theta)\) 加上拉格朗日项 \(\lambda \int p_{\theta,c+1}\)，控制额外颜色的面积。
    - 之后通过 **Algorithm 1** 自动提取周期性、离散化、迭代修复冲突，得到严格形式化的着色。
  - **避免不同距离（Variant 2）**：将损失改为对不同颜色使用不同半径的圆；并可将距离参数加入 NN 输入，实现同时优化连续距离区间。
  - **高维空间（Variant 3）**：将积分域和球面改为 \(\mathbb{R}^n\) 中的相应对象。
  - **避免三角形（Variant 4）**：将内积项替换为 \(p(x)_k p(y)_k \frac{p(z_1)_k + p(z_2)_k}{2}\)，其中 \(z_1, z_2\) 为以 \(x,y\) 为端点、边长为 \(1,a,b\) 的三角形的第三个候选点。
- **算法流程**（以几乎着色为例）：
  1. 训练 NN 最小化拉格朗日损失（式 5）。
  2. 从 NN 输出中提取周期性方向，得到基本平行四边形。
  3. 强制周期性后重新训练 NN。
  4. 将基本平行四边形离散化为更小的像素级平行四边形，每像素取得分最高的颜色。
  5. 通过辅助边覆盖问题迭代消除残留冲突，用额外颜色覆盖无法解决的像素，最终得到无冲突的几乎着色。

### 3. 实验设计：数据集 / 场景、基准、对比方法

- **场景**：原始 HN 问题及其四个变体。
- **基准（已知最好结果）**：
  - 几乎着色：Prior results by Croft (1967) and Parts (2020b)（见表 1）。
  - 避免不同距离：Hoffman & Soifer (1996) 和 Soifer (1994b) 给出的类型 \((1,1,1,1,1,d)\) 的 \(d\) 范围 \([0.415, 0.447]\)。
  - 三维空间色数：Coulson (2002) 的上界 15。
  - 避免三角形：Aichholzer & Perz (2019) 给出的分区结果。
- **对比方法**：未直接对比其他机器学习方法；而是与纯人工/ SAT 求解等传统方法的结果进行比较。
- **数据集**：无传统数据集；训练时在固定盒子 \([-R,R]^2\) 上均匀采样点对。

### 4. 资源与算力

- **硬件**：单次运行在 NVIDIA V100 GPU 上耗时 2～20 分钟；作者提到 10 分钟内也可以在标准笔记本 CPU 上获得可用结果。
- **总计算量**：由于需要调试超参数（学习率、拉格朗日乘子、网络结构等），每个变体运行了“数千次”（thousands of runs）。未提供总 GPU 小时数，但可估计总量在数百至数千 GPU 小时。

### 5. 实验数量与充分性

- **实验数量**：每个变体都进行了大量实验（数千次训练），并报告了典型配置下的冲突率。
- **覆盖范围**：
  - 几乎着色：覆盖 \(k=1..6\) 色，均得了数值和形式化结果（表 1）。
  - 避免不同距离：对类型 \((1,1,1,1,1,d)\) 和 \((1,1,1,1,d_1,d_2)\) 进行了系统扫参（图 6, 7）。
  - 三维空间：15 色、14 色几乎着色。
  - 避免三角形：对参数 \(a,b\) 空间进行网格训练，生成分区图（图 4, 8）。
- **充分性和公平性**：
  - 数值结果与传统已知构造进行比较，并在可形式化的场景下给出严格证明（如算法 1）。
  - 作者说明未找到改进的负结果（如多色数 5 色无解、原始 6 色无改进）也作为证据提供，这增强了结论的可靠性。
  - 消融实验方面提及了不同网络大小、学习率、盒子大小的影响，但未系统展示；总体实验设计足以支撑主要结论。

### 6. 论文的主要结论与发现

- 发现 **两个新的六着色**（类型 \((1,1,1,1,1,d)\)），将可实现的距离范围从 \([0.415, 0.447]\) 扩展到 \([0.354, 0.657]\)（三十年来首次改进）。
- 在 **几乎着色** 变体中：
  - 五色覆盖比例从 95.994% 提升到 96.2644%（即移除 3.7356%）。
  - 六色覆盖比例达到 99.96%（移除 0.04%）。
- 在 **三维空间**：首次给出一个 14‑着色覆盖 96.5378% 的 \(\mathbb{R}^3\)（移除约 3.46%）。
- 在 **避免三角形** 问题中：扩展了 3～5 色的可行区域，缩小了仍需 7 色的参数空间。
- 多色数方面：数值搜索未找到五色方案，提示多色数可能确实是 6。

### 7. 优点

- **方法创新**：将离散着色问题松弛为概率连续优化，利用 NN 作为通用函数逼近器，无需预先离散化全局或假设对称性，可发现非规则结构。
- **自动化程度高**：对于几乎着色变体，设计了全自动管道（Algorithm 1），从 NN 输出到形式化着色的整个过程无需人工干预。
- **可扩展性**：框架易于调整以覆盖多种变体（不同距离、高维、三角形等），并可处理连续参数空间。
- **提供负结果**：不仅提供改进，还明确报告了无法改进的方向，对后续研究者有参考价值。
- **代码开源**：提供了可复现代码和构造。

### 8. 不足与局限

- **数值解不构成形式证明**：NN 输出的着色需要进一步人工分析或自动管道才能形式化；尤其对于没有自动管道（如避免不同距离）的变体，仍依赖大量人工推导。
- **超参数敏感**：损失中的拉格朗日乘子、学习率、网络架构等需要精细调谐，否则难以收敛到有效解。
- **有限盒子的局限**：训练仅在有限盒子 \([-R,R]^2\) 上进行，虽然通过周期性外推可扩展到全平面，但未能覆盖所有可能存在的不规则边界行为。
- **实验覆盖率有限**：对于三角形变体，仅针对少数离散 \((a,b)\) 对进行了训练，未对整个参数连续空间做严格覆盖。
- **计算资源需求**：虽然单次训练快，但为调优需要大量重复运行，可能对资源有限的团队不友好。
- **方法通用性尚未验证**：仅在一类几何着色问题上验证，其在其他组合优化问题（如极值图论）上的适用性还需进一步研究。
- **未提供统计显著性**：报告的最小冲突率取自多运行的点位最小值，未使用置信区间或方差分析，结果的稳健性可进一步加强。

（完）
