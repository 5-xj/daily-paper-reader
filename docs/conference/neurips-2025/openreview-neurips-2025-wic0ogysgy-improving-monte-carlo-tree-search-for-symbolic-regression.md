---
title: Improving Monte Carlo Tree Search for Symbolic Regression
title_zh: 改进用于符号回归的蒙特卡洛树搜索
authors: "Zhengyao Huang, Daniel Zhengyu Huang, Tiannan Xiao, Dina Ma, Zhenyu Ming, Hao Shi, Yuanhui Wen"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=Wic0OgYsgy"
tags: ["query:sr"]
score: 9.0
evidence: 蒙特卡洛树搜索改进符号回归，直接方法匹配
tldr: 符号回归旨在从数据中发现简洁可解释的数学表达式，但传统遗传编程和蒙特卡洛树搜索方法受限于搜索策略和顺序构造。本文提出改进的MCTS框架，通过创新的博弈策略和非顺序符号构造方式，显著提升了符号回归的搜索效率和表达式质量。实验表明，该方法在多项基准测试中优于现有MCTS和遗传编程方法，为符号回归提供了更高效的启发式搜索手段。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-wic0ogysgy/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1386, \"height\": 459, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wic0ogysgy/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1272, \"height\": 584, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wic0ogysgy/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1393, \"height\": 612, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wic0ogysgy/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1283, \"height\": 558, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wic0ogysgy/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1447, \"height\": 2185, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-wic0ogysgy/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1465, \"height\": 701, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wic0ogysgy/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1097, \"height\": 229, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wic0ogysgy/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 955, \"height\": 676, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wic0ogysgy/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1356, \"height\": 677, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wic0ogysgy/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1491, \"height\": 640, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wic0ogysgy/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 895, \"height\": 634, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wic0ogysgy/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 913, \"height\": 1029, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wic0ogysgy/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 574, \"height\": 635, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wic0ogysgy/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1264, \"height\": 2127, \"label\": \"Table\"}]"
motivation: 现有MCTS在符号回归中受限于传统博弈策略和顺序符号构造，性能不佳。
method: 提出改进的MCTS框架，包含两种创新：改进的博弈策略（如UCT变种）和非顺序符号构造（允许并发生成表达式子结构）。
result: 在多个符号回归基准数据集上，该方法比现有MCTS和遗传编程方法获得更准确的表达式。
conclusion: 改进的MCTS显著提升了符号回归的搜索效率，为自动化知识发现提供了有力工具。
---

## Abstract
Symbolic regression aims to discover concise, interpretable mathematical expressions that satisfy desired objectives, such as fitting data, posing a highly combinatorial optimization problem. While genetic programming has been the dominant approach, recent efforts have explored reinforcement learning methods for improving search efficiency. Monte Carlo Tree Search (MCTS), with its ability to balance exploration and exploitation through guided search, has emerged as a promising technique for symbolic expression discovery. However, its traditional bandit strategies and sequential symbol construction often limit performance. In this work, we propose an improved MCTS framework for symbolic regression that addresses these limitations through two key innovations: (1) an extreme bandit allocation strategy tailored for identifying globally optimal expressions, with finite-time performance guarantees under polynomial reward decay assumptions; and (2) evolution-inspired state-jumping actions such as mutation and crossover, which enable non-local transitions to promising regions of the search space. These state-jumping actions also reshape the reward landscape during the search process, improving both robustness and efficiency. We conduct a thorough numerical study to the impact of these improvements and benchmark our approach against existing symbolic regression methods on a variety of datasets, including both ground-truth and black-box datasets. Our approach achieves competitive performance with state-of-the-art libraries in terms of recovery rate, attains favorable positions on the Pareto frontier of accuracy versus model complexity.

---

## 论文详细总结（自动生成）

# 论文中文总结：Improving Monte Carlo Tree Search for Symbolic Regression

## 1. 核心问题与整体含义（研究动机和背景）
- **问题**：符号回归（Symbolic Regression, SR）旨在从数据中发现简洁、可解释的数学表达式，这是一个高度组合优化的NP难问题。传统方法以遗传编程（GP）为主，但常产生过于复杂的公式且对超参数敏感。近年强化学习方法（如MCTS）被引入，但传统MCTS的bandit策略（如UCB1）追求平均奖励最大化，而SR的目标是找到**全局最优表达式**（即最高奖励），两者不匹配；同时，MCTS的顺序符号构造方式限制了搜索效率。
- **动机**：需要针对SR的极值搜索特性设计专用的MCTS变体，并引入非顺序的搜索跳跃机制（如遗传交叉/突变），以加速发现高质量表达式。
- **整体含义**：本文提出改进的MCTS框架，通过极值bandit分配策略和进化启发的状态跳跃动作，显著提升了SR的搜索效率和表达式质量，在多个基准上达到与最先进库相竞争的性能。

## 2. 论文提出的方法论
### 核心思想
将MCTS的节点选择视为“极值bandit”问题（目标是最大化观察到的最高奖励，而非平均奖励），并嵌入遗传操作（变异、交叉）作为状态跳跃，配合双向传播机制维护优先队列。

### 关键技术细节
- **极值bandit分配策略（UCB-extreme）**：  
  选择动作的公式为：  
  \[
  I_{T+1} := \arg\max_k \left\{ \hat{Q}_{k,T_k} + 2c \left( \frac{\ln T}{T_{k,T}} \right)^\gamma \right\}
  \]
  其中 \(\hat{Q}_{k,T_k}\) 是臂k的**历史最高奖励**（而非平均奖励）。参数 \(c>0, \gamma>0\) 需满足条件 \(\frac{1}{\gamma}\ge a_1\) 等（\(a_1\)为最优臂的衰减率）。  
  理论：在多项式衰减假设下，证明性能差距 \(G(T)=O(T^{-1/a_1})\)，遗憾 \(R(T)=O(\ln T / T^{1+1/a_1})\)（最优性）；指数衰减下性能差距仅 \(O(1/\ln T)\)。

- **进化启发的状态跳跃动作**：  
  每个MCTS节点维护一个Top-N轨迹优先队列。在节点选择时以概率 \(p_s\) 触发状态跳跃：以概率 \(p_m\) 对队列中的轨迹施加**变异**（均匀变异、节点替换、子树插入/收缩等），否则执行**交叉**（单点交换子树）。新增状态通过**双向传播**更新祖先和子节点的队列，确保信息共享。

- **总体算法流程**（Algorithm 1）：  
  从根节点开始，以概率 \(p_s\) 执行状态跳跃；否则按UCB-extreme或随机选择子节点（随机探索率\(\epsilon\)）。到达叶节点后展开、模拟（rollout），然后反向传播奖励，并同步更新优先级队列。

## 3. 实验设计
### 数据集/场景
- **基本基准（Ground-truth）**：Nguyen（12个方程）、Nguyen C（5个）、Jin（6个）、Livermore（22个）。每个方程有有限样本点（如20个），表达式已知。
- **SRBench黑箱基准**：包含Feynman、Strogatz和黑箱子集（共122个任务，46个真实观测+76个合成）。

### 对比方法
- 基本基准：DSR（RNN+风险策略梯度）、GEGL（GP+模仿学习）、NGGP（神经引导GP）、PySR（高性能GP库）。
- SRBench：21种基线（包括Operon、GP-GOMEA、DSR、FEAT、AIFeynman等）。

### 评价指标
- 恢复率（百分比）：在基本基准上，100次独立运行中完全恢复原表达式的比例（2百万表达式评估预算）。
- 测试R²和模型复杂度（节点数）：SRBench中10次运行的中位数，并绘制帕累托前沿。

### 额外实验
- 消融实验（四种变体）：随机选择（Model A）、去掉状态跳跃（Model B）、标准UCB1（Model C）、完整方法。
- 参数敏感性分析：对UCB-extreme的不同\(\gamma, c\)组合（6种配置）测试恢复率。
- 奖励分布可视化：展示状态跳跃后衰减率降低（a值减小）。

## 4. 资源与算力
- 论文明确说明：“所有实验在提供10.6 TFLOPS FP32性能和256GB RAM的机器上运行”。**未指定GPU型号、数量及具体训练时长**，仅给出单次运行的时间示例（如Nguyen基准平均157.90秒 vs NGGP的265.54秒，均为单核CPU时间）。
- 算力水平中等偏上，但缺乏详细信息以便复现。

## 5. 实验数量与充分性
- **数量充足**：基本基准12+5+6+22=45个方程，各100次重复（共4500次运行）；SRBench 122个数据集各10次（1220次运行）。消融实验覆盖12个Nguyen方程。参数分析涵盖6种配置。
- **公平性**：与权威基准（DSR、NGGP、PySR等）在同一评估协议下比较（相同预算、相同动作空间限制等）。SRBench遵循标准评估流程（75%/25%分割、固定种子）。
- **充分性**：实验覆盖了简单到复杂的表达式，包括常数优化、有/无噪声场景。但未涉及噪声数据或更高维输入（仅最多两个变量）。

## 6. 主要结论与发现
- 提出的改进MCTS在基本基准上恢复率平均93.25%，优于DSR（83.58%）和PySR（74.41%），与NGGP（92.33%）相当；在Livermore基准上显著领先（71.41% vs DSR 30.41%）。
- 在SRBench黑箱基准上，方法在测试准确率上排名第二（仅次于Operon），而模型复杂度显著更低（位于帕累托前沿顶端）。
- 消融实验证明：状态跳跃动作是性能提升的主要驱动（去掉后恢复率从93.25%降至53.08%），极值bandit策略也贡献明显（标准UCB1仅10.50%）。
- 理论分析表明：极值bandit策略在多项式衰减下具有最优遗憾界，并能通过状态跳跃降低实际衰减率（a值从[4,6]降至[2,4]），从而提升收敛速度。

## 7. 优点
- **理论严谨**：为极值bandit分配提供了有限时间遗憾界（多项式衰减假设），并给出负结果（指数衰减下性能瓶颈为O(1/ln T)）。
- **方法创新**：巧妙融合MCTS与遗传操作，通过状态跳跃重塑奖励分布，结合双向传播高效复用优秀子结构，避免传统混合方法（交替GP和RL）的割裂。
- **实验全面**：覆盖多个标准基准和大规模黑箱基准，与多种代表性方法对比，并进行了详尽的消融和参数分析。
- **实用性**：代码开源，且运行速度优于NGGP（平均单核时间157.9秒 vs 265.5秒）。

## 8. 不足与局限
- **理论假设限制**：极值bandit的遗憾界依赖于奖励分布多项式衰减的假设（Beta分布），实际SR中分布可能更复杂。虽通过状态跳跃改善了衰减，但缺乏对更一般分布的理论扩展。
- **未解决难题**：复杂表达式（如Nguyen-12*）的恢复率仅22%，表明仍存在搜索易陷入局部最优的问题。
- **实验覆盖**：所有测试的表达式均不超过两个变量且样本少（20个）。高维、大数据场景下的表现未知；未包含噪声实验。
- **计算资源描述模糊**：未给出具体GPU型号、数量及总训练时长，不利于复现。
- **可扩展性**：当前方法依赖树结构和预定义符号集，对更复杂问题（如差分方程、条件表达式）的适用性未讨论。

（完）
