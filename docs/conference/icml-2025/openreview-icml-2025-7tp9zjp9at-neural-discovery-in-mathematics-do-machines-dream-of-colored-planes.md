---
title: "Neural Discovery in Mathematics: Do Machines Dream of Colored Planes?"
title_zh: 数学中的神经发现：机器会梦见彩色平面吗？
authors: "Konrad Mundinger, Max Zimmer, Aldo Kiem, Christoph Spiegel, Sebastian Pokutta"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=7Tp9zjP9At"
tags: ["query:automatic-discovery"]
score: 9.0
evidence: 神经网络用于数学发现
tldr: 使用神经网络发现Hadwiger-Nelson问题的新六着色。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 5513, \"height\": 3851}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-002.webp\", \"caption\": \"\", \"page\": 3, \"index\": 2, \"width\": 2524, \"height\": 1997}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-003.webp\", \"caption\": \"\", \"page\": 7, \"index\": 3, \"width\": 2900, \"height\": 753}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-004.webp\", \"caption\": \"\", \"page\": 8, \"index\": 4, \"width\": 3855, \"height\": 2109}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-005.webp\", \"caption\": \"\", \"page\": 9, \"index\": 5, \"width\": 1900, \"height\": 1192}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-006.webp\", \"caption\": \"\", \"page\": 14, \"index\": 6, \"width\": 770, \"height\": 771}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-007.webp\", \"caption\": \"\", \"page\": 14, \"index\": 7, \"width\": 770, \"height\": 771}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-008.webp\", \"caption\": \"\", \"page\": 14, \"index\": 8, \"width\": 770, \"height\": 771}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-009.webp\", \"caption\": \"\", \"page\": 14, \"index\": 9, \"width\": 770, \"height\": 771}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-010.webp\", \"caption\": \"\", \"page\": 14, \"index\": 10, \"width\": 770, \"height\": 771}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-011.webp\", \"caption\": \"\", \"page\": 14, \"index\": 11, \"width\": 770, \"height\": 771}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-012.webp\", \"caption\": \"\", \"page\": 15, \"index\": 12, \"width\": 375, \"height\": 375}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-013.webp\", \"caption\": \"\", \"page\": 15, \"index\": 13, \"width\": 375, \"height\": 375}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-014.webp\", \"caption\": \"\", \"page\": 15, \"index\": 14, \"width\": 375, \"height\": 375}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-015.webp\", \"caption\": \"\", \"page\": 15, \"index\": 15, \"width\": 375, \"height\": 375}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-016.webp\", \"caption\": \"\", \"page\": 15, \"index\": 16, \"width\": 375, \"height\": 375}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-017.webp\", \"caption\": \"\", \"page\": 15, \"index\": 17, \"width\": 375, \"height\": 375}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-018.webp\", \"caption\": \"\", \"page\": 15, \"index\": 18, \"width\": 375, \"height\": 375}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-019.webp\", \"caption\": \"\", \"page\": 18, \"index\": 19, \"width\": 1479, \"height\": 1464}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7tp9zjp9at/fig-020.webp\", \"caption\": \"\", \"page\": 19, \"index\": 20, \"width\": 2151, \"height\": 1192}]"
motivation: 探索神经网络在数学发现中的应用，解决长期开放的Hadwiger-Nelson问题。
method: 将几何着色问题转化为带概率可微损失函数的优化任务，通过梯度下降探索可行配置。
result: 发现了两个新的六着色，三十年来首次改进了问题的对角变体。
conclusion: 证明了神经网络能够有效驱动数学发现，为组合数学提供新工具。
---

## Abstract
We demonstrate how neural networks can drive mathematical discovery through a case study of the Hadwiger-Nelson problem, a long-standing open problem at the intersection of discrete geometry and extremal combinatorics that is concerned with coloring the plane while avoiding monochromatic unit-distance pairs. Using neural networks as approximators, we reformulate this mixed discrete-continuous geometric coloring problem with hard constraints as an optimization task with a probabilistic, differentiable loss function. This enables gradient-based exploration of admissible configurations that most significantly led to the discovery of two novel six-colorings, providing the first improvement in thirty years to the off-diagonal variant of the original problem (Mundinger et al., 2024a). Here, we establish the underlying machine learning approach used to obtain these results and demonstrate its broader applicability through additional numerical insights.

---

## 论文详细总结（自动生成）

# 详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：Hadwiger-Nelson 问题（平面色数问题），即确定着色欧几里得平面至少需要多少种颜色，使得任意相距单位距离的两点颜色不同。这是一个横跨离散几何与极值组合数学的长期未决难题，已知下界为 5，上界为 7，但精确值未知。
- **研究动机**：传统方法（如穷举、SAT 求解器）在混合离散-连续问题上效果有限，而机器学习为探索抽象数学结构、引导人类直觉提供了新途径。本文旨在展示神经网络能够驱动数学发现，通过解决该问题及其变体，推进对平面色数的理解。
- **整体含义**：本研究不仅改进了多个变体的已知界限（三十年来首次改进 off-diagonal 六着色），更建立了一个可推广的优化框架，将复杂几何着色问题转化为可微的连续优化任务，为人工智能辅助数学发现提供了范例。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：将离散的颜色分配松弛为**概率着色**，即每个点 x 对应一个 c 维概率向量 p(x) ∈ Δ^c；用内积 p(x)^T p(y) 表示点 x 与 y 同色的概率。定义损失函数为所有距离为 1 的点对同色概率的积分，并利用神经网络作为函数逼近器参数化 p，通过梯度下降最小化该损失。
- **关键技术细节**：
    - **损失函数**：\( L_R(p) = \int_{[-R,R]^2} \int_{\partial B_1(x)} p(x)^T p(y) \, d\nu(y) \, d\mu(x) \)，其中 μ 和 ν 分别是均匀分布。
    - **神经网络架构**：多层感知机（MLP），使用正弦激活函数，2-4 个隐藏层，每层 32-256 个神经元，输出经 softmax 得到概率分布。
    - **梯度估计**：通过蒙特卡洛采样近似积分：采样 n 个中心点 xi，对每个 xi 采样 m 个单位圆上的点 yij，计算 mini-batch 平均损失。
    - **变体适配**：
        - **几乎着色**：引入一个额外颜色（不惩罚冲突），添加 Lagrange 惩罚项限制该颜色使用面积。
        - **不同距离**：修改损失为各颜色对应不同球面上的积分，并可扩展距离范围为输入变量。
        - **高维空间**：类似二维，只需调整采样维度。
        - **避免三角形**：替换 integrand 为考虑第三个点 z 的表达式，通过圆交点求出候选 z。
    - **形式化流程**（对于几乎着色）：
        1. 训练神经网络得到近似解；
        2. 提取周期性向量；
        3. 强制周期重训练；
        4. 离散化平行四边形为小像素；
        5. 迭代修复冲突（通过最小边覆盖），最终得到可验证的周期性着色。

## 3. 实验设计

- **数据集与场景**：无传统数据集，而是数学问题场景：
    - **原始 HN 问题**（6 色、7 色）。
    - **几乎着色**（1 至 6 色，优化未覆盖面积）。
    - **off-diagonal 变体**：六着色中第六色距离 d 可变；五着色中两个距离变；寻找 polychromatic number 的五色解。
    - **高维空间**：R³ 的 14/15 色着色及几乎着色。
    - **避免三角形**：边长 (1, a, b) 的三角形，参数空间 a, b ∈ (0,1]，探索需要多少颜色。
- **基准（baseline）**：
    - 几乎着色：Croft (1967) 和 Parts (2020b) 的结果。
    - off-diagonal 六着色：Hoffman & Soifer (1993/1996)、Soifer (1994b) 的界限 [√2-1, 1/√5]。
    - 高维：Coulson (2002) 的 15 色上界。
    - 避免三角形：Aichholzer & Perz (2019) 的已知区域。
- **对比方法**：没有直接对比其他 ML 方法，而是通过数值结果与已知最优界限比较，验证框架能否复现或改进。

## 4. 资源与算力

- **硬件**：NVIDIA V100 GPU（单卡运行）。
- **训练时间**：单次运行 2–20 分钟（V100 上），在普通笔记本 CPU 上 10 分钟内也可得到合理结果。
- **训练步数**：16,384 至 65,536 步。
- **批量大小**：中心点 1,024–4,096 个，每个中心点周围采样 1–32 个圆点，总样本量 10⁶–10¹⁰。
- **总实验量**：为每个变体进行了**数千次**运行（特别是 off-diagonal 和三角形变体的参数空间探索），未明确给出 GPU 总时数。

## 5. 实验数量与充分性

- **数量**：实验中进行了大量超参数调优和网格搜索（尤其在 off-diagonal 和三角形区域），足以覆盖主要的参数区域和随机变化。对于几乎着色，则通过自动化流程从众多运行中提取最佳结果。
- **充分性**：
    - 对于每个变体，均给出了与已知最佳界限的定量比较（如未覆盖面积、可实现距离范围）。
    - 包含负结果（如未能找到 14 色完整着色、未能改进 polychromatic number 上界），表明框架能诚实地指示上限。
    - 无明显消融实验（如不同网络架构、不同采样策略的对比），但提供了多种变体的一致性验证。
- **客观性与公平性**：数值结果基于蒙特卡洛估计，存在统计噪声，但文中通过多次运行取最小值（如图 6）和百分比阈值（如图 8）增加可靠性。形式化着色则经过严格离散验证，确保正确性。

## 6. 论文的主要结论与发现

1. **两个新颖的六着色**：将 off-diagonal 六着色中第六色可实现距离从 [0.415, 0.447] 扩展到 **[0.354, 0.657]**（第一个连续族覆盖 0.354–0.553，第二个固定着色覆盖 0.418–0.657），这是三十年来首次改进。
2. **几乎着色改进**：
    - 5 色：未覆盖面积从 4.01% 降至 **3.7356%**（形式化值），满足 Parts 期望的低于 4% 目标。
    - 6 色：数值约 0.03%（稍高于已知 0.02%），1-4 色结果与已知构造一致。
3. **三维空间**：得到 14 色几乎着色，未覆盖 3.4622% 的 R³；未发现 14 色完整着色，支持 Coulson 的 15 色上界。
4. **避免三角形**：将需要 3、4、5 色的参数区域显著扩大，减少了需要 7 色的区域（图 4）。同时数值结果不支持 Graham 猜想（3 色总足够），提示当三角形接近单位距离时更难。
5. **数值证据**：未能找到 7 色以下完全着色，支持 χ(R²)=7 的猜测；未能找到五色 polychromatic 着色，提示 polychromatic 数可能为 6。

## 7. 优点

- **创新性**：将混合离散-连续几何问题转化为连续可微优化，利用神经网络的表达能力和频谱偏差，无需强假设或离散化，能够发现意想不到的非对称、非周期性模式。
- **通用性**：框架可轻松扩展到不同变体（几乎着色、不同距离、高维、三角形），仅需修改损失函数和采样策略，具有广泛适用性。
- **结合洞察与自动化**：在几乎着色场景中实现了完全自动化的形式化流程（Algorithm 1），无需人工干预；在其他场景中则作为人类数学家的直觉助手，产生可解释的模式。
- **结果有实质改进**：直接改进了多个长期未变界限（六着色距离范围、5-几乎着色覆盖率、三角形区域），证明方法有效。
- **计算效率高**：单次运行仅数分钟，适合快速迭代探索。

## 8. 不足与局限

- **数值结果非形式证明**：神经网络输出仅为近似，必须经过额外形式化（如周期性提取、离散化、冲突修复）才能得到数学上严格的构造。形式化过程需要人工洞察或算法辅助，并非完全自动（除几乎着色外）。
- **超参数敏感**：Lagrange 乘子 λ 对几乎着色结果影响显著，需要手动调参；网络架构和学习率等也需经验调整。
- **无法保证全局最优**：梯度下降可能陷入局部最优，因此未能找到更好解并不证明不存在。
- **实验覆盖局限**：未系统地对比不同函数族（如傅里叶基、径向基函数）的表现，仅提及 NN 最佳；未做消融实验分离各组件贡献（如周期提取步骤的必要性）。
- **可解释性挑战**：高维着色（如 R³）可视化困难，形式化更依赖于自动流程，人类难以理解模式。
- **对原始 HN 问题无贡献**：尽管得到了改进变体的着色，但未能降低原始问题的上界（7 色），也未给出下界改进。

（完）
