---
title: Differentiable Quadratic Optimization For the Maximum Independent Set Problem
title_zh: 可微二次优化用于最大独立集问题
authors: "Ismail Alkhouri, Cedric Le Denmat, Yingjie Li, CUNXI YU, Jia Liu, Rongrong Wang, Alvaro Velasquez"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=aPgRQIXmdE"
tags: ["query:rl-comb-opt"]
score: 8.0
evidence: 可微二次优化求解最大独立集
tldr: 针对最大独立集（MIS）这一经典组合优化问题，现有可微优化方法通常采用连续松弛的二次目标函数，但容易陷入不良极值。本文通过引入补图中的最大团（MC）项，提出一种新的二次规划形式，使得每个极大独立集对应一个局部最小点。为了处理非凸性，采用动量梯度并行优化多个初始解。理论分析了平稳点的性质，实验表明该方法在MIS问题上取得了有竞争力的结果，为组合优化提供了一种新的可微求解范式。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-apgrqixmde/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 712, \"height\": 291, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-apgrqixmde/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1486, \"height\": 534, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-apgrqixmde/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1527, \"height\": 297, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-apgrqixmde/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1271, \"height\": 631, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-apgrqixmde/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1670, \"height\": 955, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-apgrqixmde/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1700, \"height\": 638, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apgrqixmde/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1433, \"height\": 470, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apgrqixmde/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1354, \"height\": 1530, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apgrqixmde/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1366, \"height\": 1318, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apgrqixmde/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1262, \"height\": 254, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apgrqixmde/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1183, \"height\": 470, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apgrqixmde/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1151, \"height\": 195, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apgrqixmde/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1079, \"height\": 522, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apgrqixmde/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1077, \"height\": 494, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apgrqixmde/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1427, \"height\": 248, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apgrqixmde/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1076, \"height\": 164, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apgrqixmde/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1329, \"height\": 293, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apgrqixmde/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1641, \"height\": 255, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apgrqixmde/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 741, \"height\": 313, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apgrqixmde/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 743, \"height\": 271, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apgrqixmde/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 811, \"height\": 910, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apgrqixmde/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 810, \"height\": 1721, \"label\": \"Table\"}]"
motivation: 现有可微方法求解最大独立集时容易陷入不良局部极值，导致收敛质量差。
method: 提出结合最大团项的新二次规划形式，并采用动量梯度并行优化多个初始解。
result: 理论证明了极大独立集与局部最小点的对应关系，实验验证了方法的收敛性和解的质量。
conclusion: 该工作为组合优化中的可微方法提供了新思路，有望推广到其他组合优化问题。
---

## Abstract
Combinatorial Optimization (CO) addresses many important problems, including the challenging Maximum Independent Set (MIS) problem. Alongside exact and heuristic solvers, differentiable approaches have emerged, often using continuous relaxations of quadratic objectives. Noting that an MIS in a graph is a Maximum Clique (MC) in its complement, we propose a new quadratic formulation for MIS by incorporating an MC term, improving convergence and exploration. We show that every maximal independent set corresponds to a local minimizer, derive conditions with respect to the MIS size, and characterize stationary points. To tackle the non-convexity of the objective, we propose optimizing several initializations in parallel using momentum-based gradient descent, complemented by an efficient MIS checking criterion derived from our theory. We dub our method as **p**arallelized **C**lique-Informed **Q**uadratic **O**ptimization for MIS (pCQO-MIS). Our experimental results demonstrate the effectiveness of the proposed method compared to exact, heuristic, sampling, and data-centric approaches. Notably, our method avoids the out-of-distribution tuning and reliance on (un)labeled data required by data-centric methods, while achieving superior MIS sizes and competitive run-time relative to their inference time. Additionally, a key advantage of pCQO-MIS is that, unlike exact and heuristic solvers, the run-time scales only with the number of nodes in the graph, not the number of edges. Our code is available at the GitHub repository: https://github.com/ledenmat/pCQO-mis-benchmark/tree/refactor.

---

## 论文详细总结（自动生成）

# 论文详细总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **问题**：最大独立集（Maximum Independent Set, MIS）是经典NP难组合优化问题，在无线网络、任务调度、基因组测序等场景有广泛应用。
- **现有方法局限**：
  - 精确求解器（如Gurobi, CP-SAT）可扩展性差，尤其对稠密图。
  - 启发式（如ReduMIS）依赖大量图归约，运行时间随边数增长，不适合稠密图。
  - 数据驱动方法（如DIMES, DIFUSCO）需要大量标注数据，泛化能力差，训练后在不同分布图上表现不佳。
  - 已有可微方法（如连续松弛QUBO）常陷入不良局部极值，收敛质量差。
- **本文贡献**：提出一种新的可微二次规划方法pCQO-MIS，利用MIS与最大团（MC）的对偶性，引入补图团项以改善收敛和探索性。无需训练数据，可并行化，运行时间仅与节点数相关。

## 2. 论文提出的方法论

### 核心思想
- 利用MIS在补图中等价于MC的性质，在连续松弛的QUBO目标中添加一个**最大团项**（-γ'/2 x^T A_{G'} x），以鼓励选择在补图中相邻的节点（即原图中不相邻），从而加速收敛并避免稀疏解。
- 通过理论分析确定边缘惩罚参数γ和团项参数γ'的条件，使每个极大独立集对应局部极小点。
- 采用**并行动量梯度下降（MGD）**对多个随机初始化解进行优化，投影到[0,1]^n超立方体。
- 提出高效MIS检查准则：只用一个投影梯度步判断解是否为极大独立集，大幅加速。

### 关键技术细节
- **目标函数**：
  \[
  f(x) = -e_n^T x + \frac{\gamma}{2} x^T A_G x - \frac{\gamma'}{2} x^T A_{G'} x,\quad x\in[0,1]^n
  \]
  其中A_G为原图邻接矩阵，A_{G'}为补图邻接矩阵，γ > 1，γ' ≥ 1。
- **梯度**：
  \[
  g(x) = -e_n + (\gamma A_G - \gamma' A_{G'})x
  \]
- **更新**（投影MGD）：
  \[
  v \leftarrow \beta v + \alpha g(x),\quad x \leftarrow \text{Proj}_{[0,1]^n}(x-v)
  \]
- **并行初始化**：从高斯分布采样M个初始解，均值基于节点度设置（高度节点初始值低），方差η控制探索。
- **MIS检查**：对优化得到的x，二值化后检查是否满足一步投影梯度条件（式(15)），若满足则视为极大独立集。

### 理论结果
- **引理1**：Hessian矩阵非半正定，问题非凸。
- **定理1**：γ ≥ 1 + γ'k（k为MIS大小）是极大独立集为局部极小点的充要条件。
- **引理2**：所有局部极小点都是二进制向量。
- **定理2**：若γ > 1 + γ'Δ(G')，则所有局部极小点对应极大独立集。
- **定理3**：非二进制平稳点存在时只能是鞍点，不是局部极小点。

## 3. 实验设计

### 使用的数据集/场景
- **ER图**：128个图，700-800节点，边概率p=0.15（稠密）。
- **SATLIB图**：500个图，最多1347节点，5978边（稀疏）。
- **DIMACS图**：61个图，含不同密度（从0.0098到0.96），已知最优解。
- **大规模GNM图**：节点数50-2000，边数设为约一半完全图（稠密）。
- **BA图**：Barabási–Albert模型，n=100,300,1000，q=5,15,50,150。
- **消融与效率实验**：使用不同规模、不同密度的ER图等。

### 基准对比方法
- **精确求解器**：Gurobi, CP-SAT
- **启发式**：ReduMIS（当前SOTA启发式）
- **采样方法**：iSCO
- **学习方法**：GCN, LwD, DIMES, DIFUSCO（均为目前领先的基于学习的方法）
- **消融变体**：pQO-MIS（γ'=0，即无团项）

### 评估指标
- 平均MIS大小（↑）
- 总顺序运行时间（分钟，↓），学习方法的运行时间不计训练时间（但标注清楚）。

## 4. 资源与算力

- **本文方法pCQO-MIS**：使用单块NVIDIA RTX3070 GPU 和 Intel I9-12900K CPU 运行。未明确并行使用的GPU数量，但算法设计为单GPU并行处理多个初始化。
- **对比方法**：
  - 学习方法（DIMES, LwD等）运行于单块NVIDIA A100 40GB GPU + AMD EPYC 7713 CPU。
  - DIFUSCO运行于单块NVIDIA V100 + Intel Xeon Gold 6248。
  - iSCO运行于单块NVIDIA A100 40GB + AMD EPYC 7H12。
- **训练时间**：学习方法训练时间未计入比较，但文中指出pCQO-MIS无需训练，仅需超参数调优（约30秒对一张图）。
- **资源开销**：pCQO-MIS在稠密图上仍保持较低运行时间，且不随边数增长。

## 5. 实验数量与充分性

- **主要基准实验**：ER和SATLIB数据集上的全面对比（表1），包含多种运行时间变体。
- **可扩展性实验**：GNM图不同规模（50-2000节点）对比ReduMIS, Gurobi, CP-SAT（图2）。
- **MIS检查效率**：不同规模、密度下与标准迭代检查的对比（图3）。
- **DIMACS图**：61个图，30秒时间限制下的性能（表3）。
- **大ER图**：n=3000，p=0.1-0.7，30秒时间限制（表4）。
- **BA图**：与ReduMIS对比（表5）。
- **消融研究**：MC项的影响（表7-8）、超参数敏感性（表13-14）、与dNN MIS对比（表10）、与DIFUSCO不同密度对比（表11）。
- **充分性评价**：实验覆盖多种图类型（稀疏/稠密）、不同规模、多个基线、消融验证。但稀疏图（SATLIB）上pCQO-MIS未超越ReduMIS，作者解释ReduMIS应用了2-opt局部搜索，而其他方法未使用。整体实验设计较充分，但缺少对工业级超大稀疏图的测试（如数百万节点图），且超参数调优过程未标准化。

## 6. 论文的主要结论与发现

- pCQO-MIS在稠密图（ER, GNM）上**超过ReduMIS、Gurobi、CP-SAT及所有学习方法**，获得更高平均MIS大小和更短运行时间（或接近）。
- 在稀疏图（SATLIB）上接近最优，但略逊于ReduMIS。
- 运行时间仅随节点数增长，**不随边数增长**，因此在稠密图上扩展性优于传统方法。
- 无需训练数据，避免泛化问题，超参数调优成本低（约30秒/图）。
- MC项显著提升收敛质量（对比pQO-MIS平均MIS提升4-11节点）。
- 理论分析保证了极大独立集与局部极小点间的对应关系，并给出参数选择指导。

## 7. 优点

- **无需标注数据**：完全无训练，适合数据稀缺或分布未知场景。
- **可微与并行**：全梯度计算，支持GPU并行处理多个初始化，易于硬件加速。
- **理论坚实**：严格证明了局部极小点与极大独立集的关系，以及平稳点性质。
- **高效检查**：基于理论推导的高效MIS检查准则，显著降低验证开销。
- **扩展性好**：运行时间仅依赖节点数，对于稠密图优势明显。
- **通用性**：方法适用于任何图表征，不依赖特定图结构。

## 8. 不足与局限

- **稀疏图性能不佳**：在SATLIB等稀疏图上未能超越ReduMIS，主要因为未使用2-opt等局部搜索后处理。
- **超参数敏感**：需要针对不同图选择γ、γ'、α、β等，文中虽给出网格搜索建议，但尚未完全自动化。
- **理论条件依赖已知MIS大小**：定理1需要k（MIS大小）先验，实际需估计（如用Wei下界），可能带来误差。
- **仅针对MIS问题**：未展示推广到其他组合优化问题的能力。
- **缺少与最新学习方法的全时对比**：学习方法训练时间未计入，若加上训练时间，pCQO-MIS总时间更短，但文中未提供具体训练时长。
- **可扩展性实验规模有限**：最大节点数2000，未测试更大规模（如10^5节点）稠密图。
- **实验硬件不一致**：不同方法使用不同GPU和CPU，运行时间比较可能受硬件影响，但作者已注明各平台。

（完）
