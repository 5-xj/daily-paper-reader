---
title: Preference Optimization for Combinatorial Optimization Problems
title_zh: 组合优化问题的偏好优化
authors: "Mingjun Pan, Guanquan Lin, You-Wei Luo, Bin Zhu, Zhien Dai, Lijun Sun, Chun Yuan"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=Jwe5FJ8QGx"
tags: ["query:rl-comb-opt"]
score: 9.0
evidence: 使用强化学习的偏好优化用于组合优化
tldr: 针对强化学习（RL）在神经组合优化中面临的奖励信号稀疏和探索效率低下的问题，本文提出偏好优化方法。该方法通过统计比较建模将定量奖励转化为定性偏好信号，并利用偏好模型重参数化奖励函数，纳入熵正则项。在多个组合优化问题上的实验表明，偏好优化显著提升了策略学习效率和最终解的质量。这一方法为RL求解组合优化提供了新的视角，有望减少对精心设计奖励的依赖。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-jwe5fj8qgx/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1550, \"height\": 685, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-jwe5fj8qgx/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1752, \"height\": 425, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-jwe5fj8qgx/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1748, \"height\": 420, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-jwe5fj8qgx/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1406, \"height\": 614, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-jwe5fj8qgx/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1472, \"height\": 1292, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-jwe5fj8qgx/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1432, \"height\": 902, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-jwe5fj8qgx/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1743, \"height\": 708, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jwe5fj8qgx/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1231, \"height\": 550, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jwe5fj8qgx/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1690, \"height\": 711, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jwe5fj8qgx/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 668, \"height\": 552, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jwe5fj8qgx/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 528, \"height\": 562, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jwe5fj8qgx/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 666, \"height\": 560, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jwe5fj8qgx/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 715, \"height\": 600, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jwe5fj8qgx/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 893, \"height\": 569, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jwe5fj8qgx/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 966, \"height\": 610, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jwe5fj8qgx/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1147, \"height\": 496, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-jwe5fj8qgx/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1448, \"height\": 458, \"label\": \"Table\"}]"
motivation: 现有RL方法在组合优化中存在奖励信号减弱和探索效率低下的问题。
method: 提出偏好优化，通过统计比较将定量奖励转化为定性偏好，并结合熵正则项训练策略。
result: 在多个组合优化基准上，偏好优化方法显著优于传统的RL方法和启发式算法。
conclusion: 偏好优化为神经组合优化提供了一种有效的替代奖励建模方法，具有广泛的适用性。
---

## Abstract
Reinforcement Learning (RL) has emerged as a powerful tool for neural combinatorial optimization, enabling models to learn heuristics that solve complex problems without requiring expert knowledge. Despite significant progress, existing RL approaches face challenges such as diminishing reward signals and inefficient exploration in vast combinatorial action spaces, leading to inefficiency. In this paper, we propose **Preference Optimization**, a novel method that transforms quantitative reward signals into qualitative preference signals via statistical comparison modeling, emphasizing the superiority among sampled solutions. Methodologically, by reparameterizing the reward function in terms of policy and utilizing preference models, we formulate an entropy-regularized RL objective that aligns the policy directly with preferences while avoiding intractable computations. Furthermore, we integrate local search techniques into the fine-tuning rather than post-process to generate high-quality preference pairs, helping the policy escape local optima. Empirical results on various benchmarks, such as the Traveling Salesman Problem (TSP), the Capacitated Vehicle Routing Problem (CVRP) and the Flexible Flow Shop Problem (FFSP), demonstrate that our method significantly outperforms existing RL algorithms, achieving superior convergence efficiency and solution quality.

---

## 论文详细总结（自动生成）

# 论文总结：Preference Optimization for Combinatorial Optimization Problems

## 1. 核心问题与整体含义（研究动机和背景）
- **问题背景**：组合优化问题（COPs）如旅行商问题（TSP）、车辆路径问题（CVRP）和柔性流水车间调度问题（FFSP）在现实应用中广泛存在，但属于NP-hard问题。
- **现有挑战**：强化学习（RL）用于神经组合优化时存在两大主要障碍：
  - **奖励信号减弱**：随着策略提升，优势函数值趋于零，导致梯度消失和收敛缓慢。
  - **探索效率低下**：组合动作空间巨大，传统熵正则化技术计算上不可行。
- **整体目标**：提出一种新的优化框架，通过将定量奖励转化为定性偏好信号，克服上述局限，同时保持计算可行性。

## 2. 方法论：核心思想、关键技术细节、公式或算法流程
- **核心思想**：利用统计比较模型（如Bradley-Terry、Thurstone、Plackett-Luce）将定量奖励信号（如路径长度）转换为定性偏好信号。偏好信号对奖励的尺度和平移不敏感，从而稳定学习过程并持续强调更优解。
- **关键技术细节**：
  - **重参数化奖励函数**：从熵正则化RL目标（Eq.3）出发，推导出最优策略的解析形式（Eq.4）。通过重参数化，将奖励函数表达为策略的对数概率加上与实例相关的归一化常数（Eq.5）。
  - **偏好概率建模**：将奖励差异映射为偏好概率（Eq.6），例如使用Bradley-Terry模型：\(p(\tau_1 \succ \tau_2) = \sigma(\alpha[\log \pi_\theta(\tau_1|x) - \log \pi_\theta(\tau_2|x)])\)。
  - **优化目标**：最大化偏好对数似然（Eq.7），梯度计算为（Eq.8），其中每个解的梯度权重由与其他解的偏好比较生成，形成一种“数量不变的优势信号”。
  - **局部搜索微调**：将局部搜索（如2-Opt、swap*）集成到微调阶段而非后处理。利用局部搜索改进解生成高质量的偏好对（Eq.9），使策略内化这些改进，避免推理时的额外开销。
- **算法流程**（Algorithm 1）：
  1. 从策略\(\pi_\theta\)中采样N个解。
  2. （可选）对解应用局部搜索，生成改进解并加入集合。
  3. 根据真实奖励函数生成无冲突的偏好标签。
  4. 根据Eq.8近似梯度，更新策略参数。
  5. 重复直到收敛。

## 3. 实验设计：使用数据集/场景、benchmark、对比方法
- **基准问题**：
  - **TSP**（N=20,50,100）和**CVRP**（N=20,50,100）：随机均匀分布实例，用于主要对比。
  - **FFSP**（20,50,100）：用于调度问题评估。
  - **大规模TSP**（500,1000,10000）：使用DIMES模型验证扩展性。
- **Benchmark数据集**：还使用**TSPLib**和**CVRPLib-Set-X**进行零样本泛化测试，以及多种分布（Cluster, Expansion, Explosion, Grid, Implosion）的跨分布泛化测试。
- **对比方法**：
  - **启发式方法**：Concorde、LKH3、HGS、CPLEX、随机、最短任务优先、遗传算法、粒子群优化。
  - **神经求解器（RL基线）**：AM、POMO、Sym-NCO、Pointerformer、ELG、MatNet、DIMES、COMPASS、Poppy。
  - 所有神经求解器分别用原始REINFORCE（RF）和本论文的PO（Preference Optimization）训练，控制变量公平对比。

## 4. 资源与算力
- 文中明确提到：**“Most experiments were conducted on a server with NVIDIA 24GB-RTX 4090 GPUs and an Intel Xeon Gold 6133 CPU.”**
- 未说明具体GPU数量、训练总时长或总计算量。部分实验（如COMPASS、Poppy）提到在单块80GB-A800 GPU上训练100k步。TSP/CVRP训练epoch数为2000/4000，每个epoch约9分钟（TSP）或8分钟（CVRP）。微调epoch占5%，有额外开销。但整体算力细节不完整。

## 5. 实验数量与充分性
- **实验覆盖广泛**：
  - 主实验包括3个经典COP（TSP、CVRP、FFSP）的多种规模。
  - 对比了至少7种不同架构的神经求解器（AM、POMO、Sym-NCO、Pointerformer、ELG、MatNet、DIMES）及两种种群方法（COMPASS、Poppy）。
  - 做了零样本泛化到标准库（TSPLib/CVRPLib）和跨分布泛化。
  - 消融研究：偏好模型比较（BT、PL、Thurstone、Exponential）、熵分析、优势值分布、策略一致性、轨迹多样性等。
  - 局部搜索微调效果对比。
- **客观性与公平性**：
  - 所有神经求解器均在同一框架下（PO vs RF）训练，推理时间一致下比较。
  - 超参数按原实现设置，仅额外调整PO相关参数（α、偏好模型）。
  - 实验结果以表格和曲线展示，包括最优性差距（Gap）和推理时间。
- **评估充分**：提供了统计性结果（10k实例平均），并公开算法细节（附录含代码实现）。整体实验设计充分、对比公平。

## 6. 主要结论与发现
- **样本效率大幅提升**：PO训练的收敛速度是RF的1.5x-2.5x，在POMO上仅用80 epoch即可达到RF 200 epoch的性能。
- **解质量显著提高**：在TSP、CVRP、FFSP上，PO在所有规模下均获得更小的最优性差距；局部搜索微调后可进一步逼近最优（TSP-100差距0.03%）。
- **更好的探索-利用平衡**：PO具有更宽的优势分布、更高的策略一致性（p(π(τ1)>π(τ2) | r(τ1)>r(τ2))）、更高的轨迹熵（促进探索）。
- **泛化能力增强**：在零样本和跨分布场景下，PO训练的模型均优于RF基线。
- **偏好模型影响**：Bradley-Terry在中小规模表现好，Exponential在大规模或复杂问题更优。

## 7. 优点：方法与实验设计的亮点
- **创新点突出**：
  - 首次将偏好优化（PoRL思想）系统引入神经组合优化，解决了奖励信号凋零和探索问题。
  - 通过数学推导将熵正则化目标与偏好模型结合，避免了对整个动作空间的显式求和。
  - 将局部搜索自然地融入微调，避免了推理时额外开销，且偏好信号对奖励尺度不变。
- **实验设计亮点**：
  - 在多种主流神经求解器上验证通用性，表明PO是可替代REINFORCE的通用框架。
  - 包含丰富的消融和可视化分析（优势分离、分布、熵、一致性），深入揭示了PO的有效性来源。
  - 评估了不同偏好模型和α参数的影响，提供了实用指导。
  - 公开代码伪代码和关键实现细节，可复现性强。

## 8. 不足与局限
- **实验覆盖局限**：
  - 算力资源描述不完整：未明确GPU数量、总训练时长、能耗等。
  - 仅在有限的问题类型（路由和调度）上评估，未涉及图组合优化、背包等问题。
  - 与最先进的混合求解器（如NeuroLKH）对比较少，主要聚焦于纯神经求解器。
- **方法局限性**：
  - **偏好模型选择**：不同问题需要调整偏好模型和α，缺乏自适应机制。
  - **稳定性问题**：重参数化奖励函数在不同COP上的稳定性需进一步研究，附录中作者也提到这一点。
  - **与局部搜索微调的兼容性**：目前的微调阶段仍需要少量额外CPU计算（局部搜索迭代），虽然推理时无开销，但训练阶段增加了复杂性。
  - **对多目标优化的拓展**：论文仅在单目标下验证，多目标场景尚未探讨。
- **偏差风险**：偏好标签完全依赖真实奖励函数，如果真实奖励本身有噪声或定义不当，偏好信号可能误导策略。但本文中奖励（如路径长度）是确定的，因此风险较低。
- **客观性分析**：虽然对比公平，但PO方法在超参数调整（α）上可能比RF需要更多经验（依赖问题、模型、偏好模型），这可能导致额外人工成本。

（完）
