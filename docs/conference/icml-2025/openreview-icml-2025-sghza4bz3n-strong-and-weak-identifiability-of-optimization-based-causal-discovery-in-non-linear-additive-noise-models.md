---
title: Strong and Weak Identifiability of Optimization-based Causal Discovery in Non-linear Additive Noise Models
title_zh: 非线性加性噪声模型中基于优化的因果发现的强与弱可识别性
authors: "Mingjia Li, Hong Qian, Tian-Zuo Wang, ShujunLi, Min Zhang, Aimin Zhou"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=sgHza4bz3n"
tags: ["query:sr"]
score: 6.0
evidence: 从数据中因果发现
tldr: 该论文针对优化方法在非线性加性噪声模型中进行因果发现的识别性问题，提出了强可识别与弱可识别的概念。通过分析结构方程的特征，解释了优化方法在某些问题上表现好而在其他问题上表现差的原因。该工作为因果发现方法的选择和优化提供了理论指导，属于从数据中发现知识的一种形式。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-sghza4bz3n/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 837, \"height\": 493, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-sghza4bz3n/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 865, \"height\": 250, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-sghza4bz3n/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1784, \"height\": 663, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-sghza4bz3n/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 669, \"height\": 617, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-sghza4bz3n/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 671, \"height\": 682, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-sghza4bz3n/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 869, \"height\": 349, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-sghza4bz3n/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 801, \"height\": 454, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-sghza4bz3n/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 855, \"height\": 909, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-sghza4bz3n/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 740, \"height\": 554, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-sghza4bz3n/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 583, \"height\": 531, \"label\": \"Table\"}]"
motivation: 优化方法在因果发现中性能差异大，缺乏对其识别难度的理论理解。
method: 将可识别问题进一步分为强可识别和弱可识别，并分析结构方程特征。
result: 揭示了优化方法性能差异的原因，为实例分类提供了依据。
conclusion: 有助于理解因果发现的难度和选择合适的方法。
---

## Abstract
Causal discovery aims to identify causal relationships from observational data. Recently, optimization-based causal discovery methods have attracted extensive attention in the literature due to their efficiency in handling high-dimensional problems. However, we observe that optimization-based methods often perform well on certain problems but struggle with others. This paper identifies a specific characteristic of causal structural equations that determines the difficulty of identification in causal discovery and, in turn, the performance of optimization-based methods. We conduct an in-depth study of the additive noise model (ANM) and propose to further divide identifiable problems into strongly and weakly identifiable types based on the difficulty of identification. We also provide a sufficient condition to distinguish the two categories. Inspired by these findings, this paper further proposes GENE, a generic method for addressing strongly and weakly identifiable problems in a unified way under the ANM assumption. GENE adopts an order-based search framework that incorporates conditional independence tests into order fitness evaluation, ensuring effectiveness on weakly identifiable problems. In addition, GENE restricts the dimensionality of the effect variables to ensure \emph{scale invariance}, a property crucial for practical applications. Experiments demonstrate that GENE is uniquely effective in addressing weakly identifiable problems while also remaining competitive with state-of-the-art causal discovery algorithms for strongly identifiable problems.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

论文关注**基于优化的因果发现方法**在**非线性加性噪声模型（ANM）** 中的表现差异。尽管近年来基于连续优化的方法（如 NOTEARS-MLP、Gran-DAG）在处理高维数据时效率较高，但作者观察到**即使在同一模型假设下，优化方法在不同问题上的性能可能截然不同**。例如，某些结构方程（如 y = x² + N）通过简单回归就能正确辨识因果方向，而另一些（如 y = x³ + x + N）则很难区分两个方向的拟合差异。这一现象促使作者深入分析**可识别性的难度**，并首次将因果模型的可识别性进一步划分为**强可识别**和**弱可识别**两类，揭示了优化方法性能差异的根本原因——结构方程中是否存在隐函数。这项研究为理解因果发现的难度和选择合适的方法提供了理论指导。

### 2. 论文提出的方法论：核心思想、关键技术细节

**核心思想：** 基于ANM假设，将可识别问题分为强可识别（回归拟合度本身就能区分因果方向）和弱可识别（需依赖残差独立性检验）。提出一种通用的阶搜索框架 **GENE**，同时利用拟合优度和残差独立性，统一处理两类问题。

**关键技术细节：**
- **强/弱可识别性定义**（Definition 3.1）：给定结构方程 Si: Vi = fi(Vpa(i)) + Ni，若对每个父变量 pa(i)k 都无法从等效隐式方程 Fi(Vi, pa(i)1,...,pa(i)j, Ni)=0 中解出隐函数 pa(i)k = g(·)，则 Si 为强可识别；否则为弱可识别。整个 SEM 强可识别当且仅当所有 Si 强可识别。
- **充分条件**（Theorem 3.3）：基于隐函数定理（Lemma 3.2），若存在某个父变量 pa(i)k 使 Fi 关于该变量的偏导数有界且非零（满足全局隐函数存在条件），则 Si 是弱可识别的。
- **GENE 算法流程**：
  1. **阶估计**：对每个顺序 π，用全连接神经网络（2个隐藏层，大小 h=256）拟合变量 Vπ(i) 与所有前驱变量的关系，计算 R² 作为拟合优度。同时计算残差，对每个前驱变量进行 χ² 独立性检验（显著性水平 0.05）。总适应度函数 fit(π) = Σ_i R²(Vπ(i)) · (1 - α·(1/i)·Σ_j IT(residual, Vπ(j)))，其中 α 默认 1。
  2. **贪婪阶搜索**（Algorithm 1）：从随机排列开始，反复尝试操作（移动一个元素到另一位置），若适应度提升则接受，直到无法再提升。定理4.3保证在合理假设下能找到真实阶（Rev=0）。
  3. **最小剪枝**（Least Pruning, Algorithm 2）：对每个变量，从完整前驱集合中逐步剪枝掉“剪枝后 R² 下降最小”的父节点，若下降量小于阈值则剪掉，否则停止。从而得到最终 DAG。

### 3. 实验设计

- **合成数据集**：采用 Erdős–Rényi (ER) 图生成 DAG，节点数 d={10,20}，图密度（边数/节点数）={1,2,4}，样本数 n=3000。非线函数三种形式：
  - MIM（三角函数组合）：强可识别
  - GP（高斯过程）：强可识别
  - MLP（Sigmoid 全连接）：弱可识别
  共 2×3×3=18 种设置，每种生成 10 个不同的图，共 180 个问题实例。
- **真实数据集**：Sachs 蛋白信号网络（11节点，17条真边，853个观测样本）。
- **基准对比方法**：连续优化类（Notears-MLP, Gran-DAG），组合优化类（SELF, GSF [GES], PC-ANM），阶搜索类（CAM, RESIT, R2Sort, CaPS, NHTS）。
- **评估指标**：F1 Score（0~1，越高越好）、SHD（Structural Hamming Distance，越低越好）。

### 4. 资源与算力

论文中明确说明：所有实验在 **AMD Ryzen 5 3600 6核CPU、16 GB RAM、512 GB SSD** 上运行，操作系统 Windows 11，Python 3.8。**未使用 GPU**。未提供具体训练时长（仅在图8中给出了部分方法的执行时间对比，如 GENE 在 d=10 时约 200-400 秒，d=20 时约 400-800 秒）。未提及多卡或多机训练。

### 5. 实验数量与充分性

- **合成实验**：18种设置 × 10次重复 = 180个独立问题。每个问题独立运行并取平均，结果以箱线图或带误差棒柱状图展示。覆盖了不同节点数、密度、函数类型。
- **附加实验**：
  - **标准化影响实验**（Figure 4）：d=10, density=2，对比标准化前后 F1 变化。
  - **消融实验**（Figure 5）：移除 GENE 中的残差独立项，对比在 MIM/GP/MLP 上的表现。
  - **阶搜索效果实验**（Figure 6）：仅对比阶搜索方法（GENE、CAM、RESIT、R2Sort、CaPS、NHTS）输出阶的 Rev 值。
  - **效率分析**（Figure 8）：F1 vs 执行时间 Pareto 图。
  - **超参数分析**（Figure 9）：α 取值 0.2~5 对 MIM/GP/MLP 的影响。
  - **真实数据集 Sachs**（Table 1，Figure 7）。
- **充分性评价**：实验设计较为全面，覆盖了不同类型、不同难度的问题，并提供了消融和敏感性分析。对比方法覆盖了主流分类。但合成数据均基于 ANM 假设且噪声高斯，未测试非高斯噪声或更复杂结构（如后非线性）。另外，所有数据都由作者自己生成（使用 gcastle 工具包），可能引入某些隐性偏差（如变量尺度、函数复杂度）。总体而言，实验数量充分，对比公平（超时未完成的曲线被剔除，并明确标注）。

### 6. 论文的主要结论与发现

1. **强/弱可识别性的划分是有意义的**：仅依赖拟合优度的方法（CAM、Notears-MLP、R2Sort、CaPS、NHTS）在强可识别问题（MIM、GP）上显著优于弱可识别问题（MLP），而依赖残差独立的方法（RESIT）在弱可识别上稍好但整体不如 GENE。
2. **GENE 在弱可识别问题上独一无二的优越性**：在 MLP 合成数据上，GENE 的 Rev 值约为 CAM 的一半、RESIT 的四分之一；在 Sachs 数据集上，GENE 的 F1=0.65，远超第二名 Gran-DAG 的 0.33。
3. **连续优化方法对数据标准化非常敏感**：Notears-MLP 和 Gran-DAG 在标准化后 F1 平均下降 34%（强）和 52%（弱），表明它们利用了不当的方差信息；GENE 使用 R² 具有尺度不变性。
4. **GENE 的贪婪阶搜索可达到全局最优**（Theorem 4.3）：保证在合理假设下找到真实阶。
5. **在强可识别问题上，GENE 依然有竞争力**：在 MIM 和 GP 上，F1 和 SHD 与 CAM 等相当甚至更好（特别是密度高时）。

### 7. 优点

- **理论贡献**：首次提出并形式化了强/弱可识别性，并给出基于隐函数定理的充分条件，为因果发现难度分级提供了理论工具。
- **方法统一性**：GENE 将拟合优度与残差独立性有机结合，在一个框架内同时处理两类问题，无需事先知道问题类型。
- **尺度不变性**：使用 R² 而非 MSE 作为拟合度量，避免了连续优化方法对数据尺度的敏感性，更贴近实际应用。
- **全局最优保证**：定理4.3为贪婪阶搜索提供了理论保证。
- **实验充分且客观**：覆盖多种合成设定和真实数据，消融实验直观验证了残差独立项的重要性，标准化实验揭示了连续方法的缺陷。
- **代码开源**：论文提供了 GitHub 仓库，便于复现。

### 8. 不足与局限

- **充分条件非必要**：Theorem 3.3 只是弱可识别的充分条件，不能覆盖所有情况（如 y³ - x = 0 在零点导数不满足条件但仍存在隐函数）。
- **剪枝策略可改进**：最小剪枝基于 R² 下降量，阈值选择可能影响性能，且未与其他剪枝方法（如 Group LASSO、sparsity-smoothness penalty）系统对比。
- **实验限制**：
  - 合成数据仅使用 ER 图，未考虑其他图结构（如 Scale-free、小世界）。
  - 噪声始终为高斯，未测试非高斯噪声场景（ANM 允许非高斯噪声）。
  - 样本量固定为 3000，未研究样本量小的影响。
  - 真实数据仅测试 Sachs 一个，普适性有限。
- **对比方法覆盖不全**：未包含近年来基于扩散模型（如 DCD）或 score matching（如 SCORE）的方法；PC-ANM 是混合法但可能未调优。
- **计算效率**：GENE 在 d=20 时执行时间约 400-800s，虽处于 Pareto 前沿，但比 CAM（~200s）慢；且未报告超大规模（d>50）的性能。
- **未讨论交叉验证或超参数选择**：α 默认1，阈值 θ 未说明如何选取，可能依赖调参。

（完）
