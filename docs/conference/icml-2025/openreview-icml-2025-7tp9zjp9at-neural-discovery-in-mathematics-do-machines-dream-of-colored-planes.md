---
title: "Neural Discovery in Mathematics: Do Machines Dream of Colored Planes?"
title_zh: 数学中的神经发现：机器会梦见彩色平面吗？
authors: "Konrad Mundinger, Max Zimmer, Aldo Kiem, Christoph Spiegel, Sebastian Pokutta"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=7Tp9zjP9At"
tags: ["query:automatic-discovery"]
score: 8.0
evidence: 神经网络驱动数学新配色的发现
tldr: 神经网络重新表述Hadwiger-Nelson问题以发现新平面着色。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 5513, \"height\": 3851}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-002.webp\", \"caption\": \"\", \"page\": 3, \"index\": 2, \"width\": 2524, \"height\": 1997}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-003.webp\", \"caption\": \"\", \"page\": 7, \"index\": 3, \"width\": 2900, \"height\": 753}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-004.webp\", \"caption\": \"\", \"page\": 8, \"index\": 4, \"width\": 3855, \"height\": 2109}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-005.webp\", \"caption\": \"\", \"page\": 9, \"index\": 5, \"width\": 1900, \"height\": 1192}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-006.webp\", \"caption\": \"\", \"page\": 14, \"index\": 6, \"width\": 770, \"height\": 771}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-007.webp\", \"caption\": \"\", \"page\": 14, \"index\": 7, \"width\": 770, \"height\": 771}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-008.webp\", \"caption\": \"\", \"page\": 14, \"index\": 8, \"width\": 770, \"height\": 771}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-009.webp\", \"caption\": \"\", \"page\": 14, \"index\": 9, \"width\": 770, \"height\": 771}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-010.webp\", \"caption\": \"\", \"page\": 14, \"index\": 10, \"width\": 770, \"height\": 771}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-011.webp\", \"caption\": \"\", \"page\": 14, \"index\": 11, \"width\": 770, \"height\": 771}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-012.webp\", \"caption\": \"\", \"page\": 15, \"index\": 12, \"width\": 375, \"height\": 375}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-013.webp\", \"caption\": \"\", \"page\": 15, \"index\": 13, \"width\": 375, \"height\": 375}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-014.webp\", \"caption\": \"\", \"page\": 15, \"index\": 14, \"width\": 375, \"height\": 375}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-015.webp\", \"caption\": \"\", \"page\": 15, \"index\": 15, \"width\": 375, \"height\": 375}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-016.webp\", \"caption\": \"\", \"page\": 15, \"index\": 16, \"width\": 375, \"height\": 375}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-017.webp\", \"caption\": \"\", \"page\": 15, \"index\": 17, \"width\": 375, \"height\": 375}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-018.webp\", \"caption\": \"\", \"page\": 15, \"index\": 18, \"width\": 375, \"height\": 375}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-019.webp\", \"caption\": \"\", \"page\": 18, \"index\": 19, \"width\": 1479, \"height\": 1464}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-020.webp\", \"caption\": \"\", \"page\": 19, \"index\": 20, \"width\": 2151, \"height\": 1192}]"
motivation: 长期未解决的Hadwiger-Nelson问题需要新方法。
method: 将着色问题重构为可微优化任务，使用神经网络作为近似器进行梯度探索。
result: 发现了两个新颖的六着色，三十年首次改进。
conclusion: 神经网络可以有效驱动数学发现。
---

## Abstract
We demonstrate how neural networks can drive mathematical discovery through a case study of the Hadwiger-Nelson problem, a long-standing open problem at the intersection of discrete geometry and extremal combinatorics that is concerned with coloring the plane while avoiding monochromatic unit-distance pairs. Using neural networks as approximators, we reformulate this mixed discrete-continuous geometric coloring problem with hard constraints as an optimization task with a probabilistic, differentiable loss function. This enables gradient-based exploration of admissible configurations that most significantly led to the discovery of two novel six-colorings, providing the first improvement in thirty years to the off-diagonal variant of the original problem (Mundinger et al., 2024a). Here, we establish the underlying machine learning approach used to obtain these results and demonstrate its broader applicability through additional numerical insights.

---

## 论文详细总结（自动生成）

## 论文详细中文总结

### 1. 核心问题与整体含义（研究动机和背景）
- **核心问题**：Hadwiger-Nelson（HN）问题——确定平面所需的最小颜色数，使得任意距离为1的两点颜色不同（即平面的色数 \(\chi(\mathbb{R}^2)\)）。这是一个组合几何与极值组合交叉领域的长期公开问题，已被研究70多年。已知下界 \(\chi(\mathbb{R}^2) \ge 5\)（de Grey, 2018），上界 \(\chi(\mathbb{R}^2) \le 7\)（1950年已知的六边形镶嵌着色）。
- **整体含义**：本文聚焦于HN问题的多个变体（离对角线着色、几乎着色、高维着色、避免三角形着色），**旨在利用神经网络作为数学发现的工具**，通过连续优化探索解空间，发现新的有效着色构造。研究动机在于传统方法（SAT求解器、穷举搜索）在处理混合离散-连续约束时受限，而神经网络可提供灵活且几乎没有先验假设的探索能力。
- **本文贡献**：发现了两个新颖的六着色，是30年来首次改进离对角线变体的已知区间；同时在其他变体（几乎5-着色、三维几乎14-着色、三角形避免区域）上也取得了数值和形式化的改进。

### 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：将离散着色放松为**概率着色**，即函数 \(p: \mathbb{R}^2 \to \Delta_c\)（\(c\) 维概率单纯形），表示每个点取各颜色的概率。原始硬约束（相同颜色不能出现在单位距离点对）被放松为**最小化冲突概率**。
- **损失函数**（以原始HN问题为例）：
  \[
  L_R(p) = \int_{[-R,R]^2} \int_{\partial B_1(x)} p(x)^\top p(y) \, d\nu(y) \, d\mu(x),
  \]
  其中 \(x\) 在边长为 \(2R\) 的正方形中均匀采样，\(y\) 在 \(x\) 的单位圆上均匀采样。内积 \(p(x)^\top p(y)\) 表示 \(x,y\) 同色的概率。最小化此损失即试图使任意单位距离点对的概率分布正交。
- **关键技术细节**：
  - 使用**多层感知机（MLP）** 参数化 \(p_\theta\)，输入坐标，输出经过softmax的概率向量。激活函数采用正弦（SIREN），架构为2–4个隐藏层，每层32–256个神经元。
  - **梯度估计**：通过蒙特卡洛采样估计损失梯度，每步采样 \(n\) 个中心点（1024–4096），每个中心点周围采样 \(m\) 个圆周点（1–32）。
  - **针对不同变体的修改**：
    - **几乎着色**：引入额外“丢弃”颜色（共 \(c+1\) 种），在损失中加入拉格朗日项 \(\lambda \int p_{c+1}(x) dx\) 惩罚丢弃颜色的使用。
    - **离对角线着色**：损失修改为每个颜色 \(k\) 在其对应距离 \(d_k\) 的圆上的冲突积分。
    - **高维着色**：将采样从平面扩展到三维空间（单位球面）。
    - **避免三角形**：损失中加入第三个顶点（由三角形几何约束确定）的概率项。
  - **形式化管道（Algorithm 1）**：自动提取神经网络输出的周期性，强制周期化，离散化为小平行四边形，再通过启发式迭代修复冲突，最终得到严格可验证的着色方式（用于几乎着色和高维情形）。

### 3. 实验设计：场景、基准与对比方法
- **实验场景**：涵盖HN问题的四个变体：
  1. **原始六着色**（数值验证方法有效性）。
  2. **几乎着色**（\(k=1,\dots,6\) 种颜色，最小化需要丢弃的区域）。
  3. **离对角线六着色**：类型 \((1,1,1,1,1,d)\) 和 \((1,1,1,1,d_1,d_2)\)。
  4. **高维着色**（\(\mathbb{R}^3\)，15色及几乎14色）。
  5. **避免含1-\(a\)-\(b\)边长的三角形着色**（参数空间 \((a,b)\)）。
- **基准（Baseline）**：
  - 几乎着色：对比 Croft (1967) 和 Parts (2020b) 的结果。
  - 离对角线六着色：对比 Hoffman & Soifer (1996) 和 Soifer (1994b) 已知区间 \([\sqrt{2}-1, 1/\sqrt{5}] \approx [0.414, 0.447]\)。
  - 三角形变体：对比 Aichholzer & Perz (2019) 的结果。
  - 三维着色：对比 Coulson (2002) 的15色上界。
- **对比方法**：**本文未与其他机器学习方法直接对比**（因为此任务是首次用神经网络探索HN问题），主要通过与已知数学构造和数值冲突率比较来验证发现的有效性。作者也尝试了傅里叶基和Voronoi图，但神经网路表现最佳。

### 4. 资源与算力
- **GPU型号**：NVIDIA V100。
- **单次运行时长**：2–20分钟（V100），若使用CPU可在10分钟内得到可用结果。
- **总运行量**：每个变体执行**数千次**运行（尤其为探索离对角和三角形参数空间），总样本量 \(10^6\) 到 \(10^{10}\) 个点对。未给出精确总GPU小时数。
- **训练步数**：16,384–65,536步，每步采样1,024–4,096个中心点，1–32个圆周点。

### 5. 实验数量与充分性
- **数量**：每个变体数千次独立运行，涵盖不同超参数（学习率、拉格朗日系数、网络大小、批量大小）。对于离对角线着色，展示了16条独立曲线（Figure 6）及整个参数空间的扫描（Figure 7）。对于三角形变体，训练了“thousands of networks”在不同子区域。
- **充分性**：实验覆盖了主要变体的关键参数范围，数值结果与已知构造一致，并给出了改进。但是**缺乏与其他ML方法的系统性消融对比**（因为该任务是首次将此类方法应用至HN问题）。作者仅与已知数学结果比较，未设计同类型方法的公平对比。
- **客观性**：数值冲突率通过蒙特卡洛采样计算，但需要指出的是，数值结果不代表正式证明。形式化着色通过Algorithm 1得到严格验证（如几乎着色中数值3.60%经形式化后为3.7356%，略有增加但仍优于Parts的4.0060%）。作者强调了数值结果需要后续形式化，实验过程是客观的。

### 6. 论文的主要结论与发现
1. **离对角线六着色**：发现两个新着色，将单色避开距离 \(d\) 的可行区间从 \([0.414,0.447]\) 大幅扩展至 \([0.354,0.657]\)（第一个用参数化区间 \([0.354,0.553]\)，第二个常数区间 \([0.418,0.657]\)）。这是30年来首次改进。
2. **几乎5-着色**：形式化构造覆盖99.7356%平面（即需丢弃3.7356%区域），优于Parts的4.0060%。
3. **三维几乎14-着色**：覆盖96.5378%的 \(\mathbb{R}^3\)（丢弃3.4622%）。
4. **三角形避免**：扩展了用3–6色可避免指定三角形 \((1,a,b)\) 的参数区域（Figure 4）。
5. **对原始HN问题**：神经网络一致收敛到类似已知六边形镶嵌的模式，但未发现少于7色的无冲突解，数值上支持 \(\chi(\mathbb{R}^2)=7\) 的猜想。
6. **多色数**：未能在5色情形下找到同时避免所有距离的解（最佳冲突率约5%），给多色数 \(\chi_p(\mathbb{R}^2)=6\) 提供了进一步证据。

### 7. 优点
- **方法新颖**：将混合离散-连续着色问题转化为连续可微优化，利用神经网络作为通用函数近似器，无需强先验假设（对称性、周期性），可发现不规则且可解释的解。
- **自动形式化管道**：对几乎着色和高维情形，Algorithm 1实现了从神经网络输出到严格可验证构造的自动转化，在二维和三维都能工作，减轻了人工分析负担。
- **多场景适用**：方法轻松适配HN问题多个变体，并取得了数个领域第一（如30年首次改进、5-几乎着色改进），展示了广泛适用性。
- **可解释性**：神经网络往往输出规律性强的模式（如条纹、六边形镶嵌），容易转化为人类可正式证明的构造。
- **效率**：单次训练仅需分钟级（GPU），整体超参数调优虽然耗时但仍然可行。

### 8. 不足与局限
- **数值≠证明**：所有数值结果仅是候选解的质量指示，不能直接作为正式证明。形式化仍需额外步骤（尤其面对自由度大的解空间时）。
- **超参数敏感**：拉格朗日惩罚系数 \(\lambda\) 的选择对结果影响大，需多次尝试才可稳定找到有效构造，缺乏自动调优策略。
- **缺乏与同类方法的通用比较**：未与FunSearch、PatternBoost、强化学习等方法在同一任务上进行公平对比，无法说明本方法在所有方面更优。
- **形式化不总是自动**：对于离对角线六着色，形式化最终仍依赖于人解释（图1、图3、图11的构造由作者手工形式化）；仅几乎着色和高维情形实现了全自动管道。
- **高维扩展性**：三维形式化已自动完成，但更高维度的采样和计算成本增长迅速（圆→球→超球），且可视化困难，可能限制推广。
- **收敛保证**：梯度下降只能找到局部最优，不能保证全局最优（即不能证明不存在某种着色）。
- **实验偏差**：训练时仅在有限边界 \([-R,R]^2\) 内采样，虽然作者认为足够大，但可能遗漏某些远距离约束；周期性的提取依赖阈值选择。

（完）
