---
title: Graph-based Symbolic Regression with Invariance and Constraint Encoding
title_zh: 基于图的符号回归：不变性与约束编码
authors: "Ziyu Xiang, Kenna Ashen, Xiaofeng Qian, Xiaoning Qian"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=JYB6wFcbky"
tags: ["query:sr"]
score: 9.0
evidence: 基于图的符号回归方法，通过不变性和约束编码直接针对符号回归知识发现。
tldr: 针对现有符号回归方法在冗余表示和稀疏奖励上的局限，提出基于图的符号回归框架GSR，通过置换不变性和约束编码压缩搜索空间，提升表达式学习效率。实验表明GSR在多个数据集上显著优于现有方法，为科学知识发现提供了更有效的解释性模型发现工具。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-jyb6wfcbky/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1386, \"height\": 438, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-jyb6wfcbky/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1449, \"height\": 769, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-jyb6wfcbky/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1409, \"height\": 606, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-jyb6wfcbky/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1351, \"height\": 610, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-jyb6wfcbky/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1307, \"height\": 352, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-jyb6wfcbky/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1310, \"height\": 498, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-jyb6wfcbky/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1421, \"height\": 419, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-jyb6wfcbky/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1084, \"height\": 274, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jyb6wfcbky/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1360, \"height\": 560, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jyb6wfcbky/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1176, \"height\": 781, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jyb6wfcbky/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1434, \"height\": 700, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jyb6wfcbky/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1437, \"height\": 775, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jyb6wfcbky/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1372, \"height\": 880, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-jyb6wfcbky/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1117, \"height\": 139, \"label\": \"Table\"}]"
motivation: 现有符号回归方法因忽略数学等价性和表达式约束，导致搜索效率低下且可解释性差。
method: 提出图结构表示符号表达式，利用置换不变图嵌入和物理约束编码，压缩搜索空间并引导搜索。
result: 在多个基准数据集上，GSR相比传统符号回归方法显著提高了发现精确表达式的成功率和效率。
conclusion: 图结构表示和约束编码是提升符号回归性能的有效途径，有助于科学数据中的知识发现。
---

## Abstract
Symbolic regression (SR) seeks interpretable analytical expressions that uncover the governing relationships within data, providing mechanistic insight beyond 'black-box' models. However, existing SR methods often suffer from two key limitations: (1) *redundant representations* that fail to capture mathematical equivalences and higher-order operand relations, breaking permutation invariance and hindering efficient learning; and (2) *sparse rewards* caused by incomplete incorporation of constraints that can only be evaluated on full expressions, such as constant fitting or physical-law verification. To address these challenges, we propose a unified framework, **Graph-based Symbolic Regression (GSR)**,  which compresses the search space through the permutation-invariant representations, expression graphs (EGs), that intrinsically encode expression equivalences via a term-rewriting system (TRS) and a directed acyclic graph (DAG) structure. GSR mitigates reward sparsity by employing a hybrid neural-guided Monte Carlo tree search (hnMCTS) on EGs, where constraint-informed neural guidance enables the direct incorporation of expression-level constraint priors, and an adaptive $\epsilon$-UCB policy balances exploration and exploitation. Theoretical analyses establish the uniqueness of our proposed EG representation and the convergence of the hnMCTS algorithm. Experiments on synthetic and real-world scientific datasets demonstrate the efficiency and accuracy of GSR in discovering underlying expressions and adhering to physical laws, offering practical solutions for scientific discovery.

---

## 论文详细总结（自动生成）

# 基于图的符号回归：不变性与约束编码——详细总结

## 1. 核心问题与整体含义（研究动机和背景）

符号回归（Symbolic Regression, SR）旨在从数据中自动发现可解释的解析表达式，揭示背后的物理或数学关系，是“AI for Science”的重要方向。然而，现有SR方法存在两个关键瓶颈：
- **冗余表示**：常用的表达式树（ET）无法捕捉数学等价性（如加法交换律、结合律），导致同一数学表达式因生成顺序不同而呈现不同状态，破坏了置换不变性，使得搜索空间膨胀、学习效率低下。
- **稀疏奖励**：许多约束（如常数的确定、物理定律验证）只能在完整表达式生成后才能评估，因而通常只在生成后作为惩罚项加入奖励，导致搜索过程中大量无效或违反约束的表达式被采样，奖励信号极其稀疏，限制了收敛速度。

本文提出**基于图的符号回归（GSR）**框架，通过置换不变的**表达式图（EG）**表示和**混合神经引导蒙特卡洛树搜索（hnMCTS）**，同时解决上述两个问题，提升符号回归的效率和准确性。

## 2. 方法论

### 核心思想
将表达式表示为有向无环图（DAG）——表达式图（EG），通过**项重写系统（TRS）**将等价表达式规范化到唯一规范形式，再通过DAG结构统一二值运算（如+和−统一为P，×和÷统一为Q），将交换操作数对齐到同一层级，从而天然保持置换不变性。在此基础上，使用**关系图卷积网络（R-GCN）**对EG进行编码，提取节点与边特征，并输出先验分布和预测奖励。搜索过程采用**hnMCTS**，通过自适应ϵ-UCB策略动态切换**经典MCTS（UCB）**和**神经引导MCTS（PUCB）**，将R-GCN预测的约束先验直接融入搜索，使表达式级约束在采样阶段即可发挥作用，而无需等到完整表达式生成。

### 关键技术细节
- **表达式图（EG）**：通过TRS（如a+b→P(a,b)、a×b→Q(a,b)、a÷a→1等）将表达式化简为规范形式，再构建DAG结构（节点共享、边带操作数关系标签）。该表示具有唯一性（Theorem 3.1）。
- **R-GCN编码器**：对EG中的每个节点执行关系依赖的消息传递（按边类型α使用不同权重Wα），输出每个节点的先验概率分布πθ|P和全局预测奖励πθ|r。消息传递公式为：h'_i = h_i + σ(∑_α ∑_j∈N_α(i) c_ij W_α h_j + W_0 h_i)。
- **hnMCTS**：
  - MDP设置：生成表达式的过程视为有限步MDP，状态为当前EG，动作为选择下一个算子/变量。
  - ϵ-UCB策略：每个搜索轨迹开始时以概率c_ϵ使用经典UCB，以概率1-c_ϵ使用PUCB。PUCB中利用R-GCN输出的πθ|P和πθ|r作为先验，引导搜索。
  - 四步流程：选择、扩展、模拟、反向传播。模拟阶段根据选择策略采用均匀随机rollout（经典）或R-GCN预测（神经引导）。反向传播更新Q值和访问次数。
  - 训练后通过损失函数l = ∑_t ((R(τ)-πθ|r(s_t))^2 - π^M(s_t) log πθ|P(s_t) )更新R-GCN参数θ。
- **理论保证**：Theorem 3.2证明hnMCTS在ϵ∈(0,1]时能保证所有动作被无限次访问，次优动作的访问次数为O(ln T)，最优动作的访问次数趋于T，从而收敛到最优策略。

## 3. 实验设计

### 数据集与场景
- **合成大数据集**：
  - **PMLB黑箱数据集**：120个无解表达式的任务，来自真实世界观测或仿真数据。
  - **Feynman数据集**：119个带物理意义解析解的任务（源自Feynman物理讲义）。
  - **Nguyen基准**：12个标准SR任务（Nguyen-1~12）及5个带常数任务（Nguyen-1c~9c）。
- **真实应用**：**材料科学**——从第一性原理分子动力学模拟的32个铜原子数据（150个快照）中学习原子间势能函数，将原子对距离映射为总形成能。包含三个物理约束：标量输出、单位一致性、短距离静电排斥（f(r→0)=∞）。

### Benchmark对比方法
- 黑箱数据集：与**SRBench**中21个基线模型对比，额外对比TPSR（基于transformer+MCTS）、DGSR（深度生成式GP）。
- Feynman数据集：与SRBench中14个基线模型对比，额外对比uDSR（统一框架）、DGSR。
- Nguyen基准：对比GP、NGGP、SPL（符号物理学习器）。
- 材料应用：对比CGCNN（黑箱GNN）、GP1/GP2（遗传编程）、常规MCTS（无图表示、无约束编码）。

## 4. 资源与算力

论文在附录A中说明：
- 实验平台：CPU Intel Xeon 6248R（Cascade Lake, 3.0GHz, 24核），GPU NVIDIA A100 40GB。
- 合成数据集GSR每秒平均采样60个表达式，材料学应用每秒平均20个表达式。
- 第一性原理计算使用两个Intel Xeon 6248R CPU（共48核，384GB内存），弛豫用时18秒，每个温度下NVT分子动力学6,000步用时900分钟。
- 仅给出不同数据集下GSR的平均训练时间（图4(c)和表1、6），但未详细说明所有对比方法的统一资源消耗。总体而言计算资源描述较清晰，但缺乏详细的GPU内存和总训练时长统计。

## 5. 实验数量与充分性

- **基准实验**：黑箱数据集120个任务（运行10次不同随机种子），Feynman数据集119个任务（运行10次），共约2390次实验，对比方法数量多（黑箱24种，Feynman 17种）。
- **Nguyen基准**：12+5个任务，各任务多次运行取成功率，对比GP、NGGP、SPL。
- **消融实验**：在6个困难任务（Nguyen-12和5个带常数任务）上比较4种模型（GSR, MCTS-EG, hnMCTS-ET, MCTS），报告成功率、评价次数、训练时间、稀疏率。
- **材料应用**：单一数据集，4种方法对比，提供训练/测试/转移MAE，并可视化势能曲线。
- **转移测试**：额外生成100个压缩态样本，零样本评估模型泛化性。

**评价**：实验覆盖了经典合成基准和真实物理应用，对比方法全面，消融实验设计合理（分别验证不变性编码和约束编码的效果）。但材料应用仅一个数据集，泛化性有待更多物态验证。Nguyen基准任务偏简单，黑箱和Feynman为中等规模。整体充分性较好。

## 6. 主要结论与发现

- GSR在**黑箱数据集**上R²中位数明显优于大部分基线，且模型复杂度（表达式规模）控制在较低水平。
- 在**Feynman数据集**上，GSR恢复真实表达式的成功率最高，说明其能有效找到物理有意义的解析形式。
- **Nguyen基准**上，GSR平均成功率99.1%，显著高于其他方法（GP 38.2%, NGGP 92.5%, SPL 94.5%）。
- **消融实验**表明，不变性编码（EG）可减少搜索空间（评估次数降低33.9%），约束编码（hnMCTS）可降低稀疏率（从25.3%降至16.5%），两者结合效果最佳（成功率98.0%，稀疏率11.4%，训练时间最短）。
- **材料学应用**中，GSR唯一同时满足所有三个物理约束，并获得最低测试MAE（2.63 meV/atom）和转移MAE（34.15 meV/atom），且表达式复杂度低（24个节点），证明了其在实际科学问题中的鲁棒性和可解释性。

## 7. 优点

- **创新性**：首次将表达式图（EG）与R-GCN结合，通过TRS和DAG结构天然编码符号表达式的置换不变性，大幅压缩冗余搜索空间。
- **实用性**：hnMCTS通过ϵ-UCB策略融合经典搜索与神经引导，既避免了纯神经引导的初始偏差，又利用了约束先验，显著提高了样本效率和收敛性。
- **理论严谨**：证明EG表示的唯一性（Theorem 3.1）和hnMCTS的收敛性（Theorem 3.2），为方法可靠性提供基础。
- **实验充分**：在合成和真实数据集上进行了大量对比和消融，涵盖不同难度和物理约束场景，统计显著性（95%置信区间）有报告。
- **实际效益**：在材料科学中生成满足物理规律的表达式，可直接用于大规模分子动力学模拟，克服黑箱模型缺乏物理意义和泛化性的问题。

## 8. 不足与局限

- **TRS手工规则**：论文明确承认当前TRS是手工设计的规则集，只能捕获基本代数等价性和部分三角/指数等价性，无法处理更高阶的对称性或领域特定不变性。这限制了EG对复杂数学结构的表达能力。
- **可扩展性未充分验证**：材料应用仅使用32个铜原子数据，虽然合理，但未在其他元素体系或更大系统上验证。转移测试仅针对压缩态一种场景。
- **计算开销**：R-GCN训练和hnMCTS每步的GNN推理可能带来额外计算负担，论文虽给出每秒采样数，但未与所有对比方法详细比较时间开销（尤其与预训练Transformer方法TPSR的对比仅在黑箱数据集上略提及）。
- **常数优化依赖**：常数通过非线性回归（BFGS）优化，增加评估开销，且可能陷入局部最优。
- **实验随机性**：虽然每次运行10次，但未提供具体的方差或统计检验（如Wilcoxon），仅给出中位数和95%置信区间，部分结论的显著性不够直观。
- **应用局限性**：对于高度非线性的表达式（如包含高阶多项式、分式嵌套），EG的节点共享可能不会显著减少冗余，TRS无法化简复杂特殊函数。

（完）
