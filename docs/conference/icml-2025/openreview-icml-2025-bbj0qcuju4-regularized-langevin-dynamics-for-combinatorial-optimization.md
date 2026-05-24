---
title: Regularized Langevin Dynamics for Combinatorial Optimization
title_zh: 正则化Langevin动力学用于组合优化
authors: "Shengyu Feng, Yiming Yang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=bbJ0QCujU4"
tags: ["query:rl-comb-opt"]
score: 4.0
evidence: 针对组合优化的梯度引导采样框架
tldr: 本文针对离散Langevin动力学在组合优化中探索不足的问题，提出了正则化Langevin动力学（RLD），通过在采样中强制当前解与采样解之间的期望距离来避免局部最优。基于RLD开发了模拟退火和神经网络两种求解器。在三个经典组合优化问题上的实验表明，两种方法均能达到或超越现有最优方法。该工作为组合优化提供了一种高效的采样框架，可扩展至多种优化场景。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-bbj0qcuju4/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1782, \"height\": 830, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bbj0qcuju4/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 815, \"height\": 345, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-bbj0qcuju4/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 679, \"height\": 543, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bbj0qcuju4/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1435, \"height\": 607, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bbj0qcuju4/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1723, \"height\": 535, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bbj0qcuju4/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1341, \"height\": 207, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bbj0qcuju4/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 996, \"height\": 487, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bbj0qcuju4/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1199, \"height\": 487, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bbj0qcuju4/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1471, \"height\": 214, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-bbj0qcuju4/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1809, \"height\": 211, \"label\": \"Table\"}]"
motivation: 现有离散Langevin动力学在组合优化中探索不足，易陷入局部最优，需要增强探索能力。
method: 提出正则化Langevin动力学（RLD），通过强制期望距离约束避免局部最优，并实现基于模拟退火和神经网络的两类求解器。
result: 在最大割、旅行商等三个经典组合优化任务上，RLD方法均取得与最优算法相当或更优的性能。
conclusion: RLD框架有效提升了组合优化中采样的探索能力，可推广至更多优化问题。
---

## Abstract
This work proposes a simple yet effective sampling framework for combinatorial optimization (CO). Our method builds on discrete Langevin dynamics (LD), an efficient gradient-guided generative paradigm. However, we observe that directly applying LD often leads to limited exploration. To overcome this limitation, we propose the Regularized Langevin Dynamics (RLD), which enforces an expected distance between the sampled and current solutions, effectively avoiding local minima. We develop two CO solvers on top of RLD, one based on simulated annealing (SA), and the other one based on neural network (NN). Empirical results on three classic CO problems demonstrate that both of our methods can achieve comparable or better performance against the previous state-of-the-art (SOTA) SA- and NN-based solvers. In particular, our SA algorithm reduces the runtime of the previous SOTA SA method by up to 80\%, while achieving equal or superior performance. In summary, RLD offers a promising framework for enhancing both traditional heuristics and NN models to solve CO problems. Our code is available at https://github.com/Shengyu-Feng/RLD4CO.

---

## 论文详细总结（自动生成）

# 论文结构化总结

## 1. 核心问题与整体含义
**研究动机与背景**：组合优化（CO）问题广泛存在且多为NP难，传统启发式依赖领域知识，而模拟退火（SA）和神经网络（NN）方法近年来发展迅速。Langevin动力学（LD）及其离散化变体（如GWG、PAS/PAFS、离散Langevin采样器）被用于CO问题，但作者观察到**直接应用离散LD容易陷入局部最优**：在离散域中，局部最优处的梯度可能很大但指向不可行区域，单纯加噪声难以逃逸。因此，论文提出**正则化Langevin动力学（Regularized Langevin Dynamics, RLD）**，通过在每步采样中强制当前解与采样解之间的期望Hamming距离，增强探索能力，避免局部最优。

## 2. 方法论
**核心思想**：在离散Langevin动力学（式(6)-(7)）的基础上，加入约束条件：
\[
\mathbb{E}_{q(x'|x)}[\text{Ham}(x',x)] = d
\]
从而控制每步更新的“步长”，鼓励更广阔的搜索。

**关键技术细节**：
- 使用局部平衡提议的一阶近似，得到形式（式(10)）。对于二元变量，通过梯度计算 \(\Delta_i\) 表征翻转导致的能量变化，利用温度退火（\(\tau \to 0\)）时sigmoid近似为指示函数的性质，RLSA的翻转概率简化为（式(14)）：
\[
q(x'_i = 1-x_i|x) = \sigma\left(\frac{1}{2\tau}(\Delta_i - \Delta_{(d)} - \epsilon)\right)
\]
其中 \(\Delta_{(d)}\) 为\(\Delta\)中第d大的元素。该操作使每步平均翻转约d个坐标。

- **RLSA（Regularized Langevin Simulated Annealing）**：算法流程（Algorithm 1）包括初始化、线性退火、计算梯度、按RLD采样、更新最优解。支持多进程并行。

- **RLNN（Regularized Langevin Neural Network）**：用神经网络近似采样分布 \(q_\theta(x'|x)\)，训练损失（式(24)）由能量期望项和正则化项组成：
\[
\mathcal{L}_{\text{RLD}}(\theta; x, d, \lambda) = \mathbb{E}_{q_\theta}[H(x')] + \lambda\left(\sum_i q_\theta(x'_i=1-x_i|x) - d\right)^2
\]
采用无监督方式，仅需局部一步优化，避免长轨迹的高方差问题。训练算法如Algorithm 2。

## 3. 实验设计
**数据集与场景**：
- **最大独立集（MIS）**：RB随机图（200-300节点，800-1200节点），ER随机图（700-800节点，9000-11000节点，后一组用于迁移测试）。
- **最大团（MCl）**：RB图（200-300，800-1200）。
- **最大割（MCut）**：Barabási-Albert（BA）图（200-300，800-1200）。

**基准（Benchmark）**：每个问题有对应的OR精确求解器（Gurobi、KaMIS、SDP）和多种启发式/学习方法。

**对比方法**：
- **MIS**：PPO (RL)、INTEL (SL)、DGL (SL)、DIMES (RL)、DIFUSCO (SL)、LTFT (UL)、DiffUCO (UL)、iSCO (SA-heuristic)。
- **MCl**：Gurobi、Greedy、MFA、EGN、LTFT、DiffUCO、iSCO。
- **MCut**：Gurobi、SDP、Greedy、MFA、EGN、LTFT、DiffUCO、iSCO。

**评估指标**：目标值（集大小/团大小/割大小，越大越好），总测试集运行时间（越小越好）。对OR求解器单独列出（时间极长，不参与最优对比）。

## 4. 资源与算力
- **RLSA**：单A6000 GPU运行（文中提及所有方法在同一A6000上评估）。
- **RLNN训练**：使用两台服务器，一台8×NVIDIA RTX A6000，另一台10×NVIDIA RTX 2080 Ti。训练耗时：**所有数据集（包括大规模）在3小时以内完成**，远低于DiffUCO（RB-200-300需2天）。
- **RLNN推理**：单A6000 GPU，float16加速。

## 5. 实验数量与充分性
- **主要结果**：三个问题、多个数据集（共8个测试场景），每个场景报告目标值和运行时间（表1、表2）。
- **消融实验**：
  - 对比标准离散LD（图1）：在MIS、MCl、MCut上展示RLD（即RLSA）的primal gap轨迹，证明RLD能更快收敛且不陷于局部最优。
  - 对比RLNN有无正则化（表3、图2）：在MIS、MCl、MCut的小规模图上，证明正则化显著提升性能；MCut上效果不明显（无约束问题）。
- **更长运行时间对比**（附录B）：将RLSA和iSCO步数扩大10倍，RLSA仍占优，且运行时间少60-90%。
- **公平性**：与基线使用相同步数和试次（iSCO），官方代码复现；对比方法引用已发表结果；所有方法在同一GPU环境测试。

**充分性评价**：实验覆盖不同问题、不同规模、多种基线和最先进的NN/SA方法，消融实验覆盖关键正则化项，统计上可靠（报告均值、标准差或图表）。因此实验设计较为充分、客观、公平。

## 6. 主要结论与发现
- **RLSA**在所有数据集上达到或超过SOTA性能，同时**运行时间仅为iSCO的5%-20%**（如MIS RB-200-300: 35秒 vs 2.71分）。在ER-9000-11000上，RLSA目标值375.31远优于iSCO的365.37，时间仅1.66分 vs 1.10小时。
- **RLNN**在大部分场景中获得第二或接近SOTA的表现（MIS和MCl），训练效率远高于扩散模型（DiffUCO），且推理时间与iSCO相当或更短。
- 正则化是RLD有效的关键：无正则化的离散LD易陷局部最优，无正则化的RLNN训练无效（MIS和MCl性能不提升甚至退化）。
- RLD统一了SA和NN两类方法，为CO问题提供了简单、高效的采样框架。

## 7. 优点
- **简单有效**：仅引入一个超参数d（期望Hamming距离），即可显著提升离散Langevin动力学的探索能力；实现仅需几行PyTorch代码（附录C）。
- **广泛适用**：同时适用于传统模拟退火和神经网络学习，无需领域知识。
- **高效率**：
  - RLSA：并行采样，GPU加速，时间成本低。
  - RLNN：局部训练目标，无需估计长期回报，训练收敛快（小时级 vs 天级）。
- **消融实验设计清晰**，直观展示了正则化的必要性。
- **附录提供实验细节和代码**，可复现性强。

## 8. 不足与局限
- **仅考虑二元变量**：论文限于布尔（0/1）决策变量，未讨论如何扩展到整数、类别或混合变量。虽声称框架可推广，但未验证。
- **理论分析不足**：对RLD为何有效仅给出直观解释（梯度方向不可行），缺乏严格收敛性证明或理论界限。
- **实验覆盖有限**：仅测试三个经典问题（MIS、MCl、MCut），未包括旅行商问题（TSP）或带全局约束的问题（如车辆路径、调度）。这些问题可能暴露RLD的局限性。
- **RLNN依赖无监督目标**：对于期望能量不可分解或需要蒙特卡洛估计的问题，训练方差可能较大，论文未深入讨论。
- **超参数d的选择**：d在不同问题/规模下需调优（通过随机搜索），未提供通用规则。
- **公平性细节**：部分基线（如LTFT、DiffUCO）使用其已发表结果，而这些结果可能来自不同硬件或超参数设置；虽作者尝试统一环境，但仍有潜在偏差。

（完）
