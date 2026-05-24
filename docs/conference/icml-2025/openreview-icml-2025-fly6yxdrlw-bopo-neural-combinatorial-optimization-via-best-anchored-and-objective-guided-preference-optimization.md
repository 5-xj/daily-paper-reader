---
title: "BOPO: Neural Combinatorial Optimization via Best-anchored and Objective-guided Preference Optimization"
title_zh: BOPO：基于最佳锚定与目标引导偏好优化的神经组合优化
authors: "Zijun Liao, Jinbiao Chen, Debing Wang, Zizhen Zhang, Jiahai Wang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=FLy6yXdrlW"
tags: ["query:rl-comb-opt"]
score: 9.0
evidence: 提出BOPO方法用于神经组合优化，直接对应需求3中的神经组合优化和强化学习求解组合优化问题
tldr: 针对现有基于强化学习的神经组合优化方法样本效率低的问题，本文提出了BOPO训练范式。该方法通过最佳锚定偏好对构建和目标引导的成对损失函数，无需奖励模型或参考策略即可有效利用解偏好。在作业调度问题和旅行商问题上的实验表明，BOPO显著提升了样本效率和求解质量。该工作为神经组合优化提供了一种新的训练思路，减少了经典RL方法的依赖，具有实用价值。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-fly6yxdrlw/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1466, \"height\": 540, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fly6yxdrlw/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1711, \"height\": 490, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fly6yxdrlw/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1717, \"height\": 490, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fly6yxdrlw/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1754, \"height\": 501, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fly6yxdrlw/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1749, \"height\": 538, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-fly6yxdrlw/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1776, \"height\": 910, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-fly6yxdrlw/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 851, \"height\": 486, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-fly6yxdrlw/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 857, \"height\": 193, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-fly6yxdrlw/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 858, \"height\": 234, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-fly6yxdrlw/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 861, \"height\": 381, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-fly6yxdrlw/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 857, \"height\": 221, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-fly6yxdrlw/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1291, \"height\": 378, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-fly6yxdrlw/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1439, \"height\": 428, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-fly6yxdrlw/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1295, \"height\": 377, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-fly6yxdrlw/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1539, \"height\": 482, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-fly6yxdrlw/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1448, \"height\": 215, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-fly6yxdrlw/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1702, \"height\": 461, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-fly6yxdrlw/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 450, \"height\": 272, \"label\": \"Table\"}]"
motivation: 现有基于强化学习的神经组合优化方法因稀疏奖励和解利用不充分而样本效率低，亟需更有效的训练范式。
method: 提出BOPO方法，通过最佳锚定偏好对构造和目标引导的成对损失函数，利用目标值指导梯度缩放，无需奖励模型或参考策略。
result: 在作业调度问题和旅行商问题的实验显示，BOPO相比现有方法显著提升样本效率和求解质量。
conclusion: BOPO为神经组合优化提供了高效训练范式，降低了对传统强化学习组件的依赖，具有广泛应用前景。
---

## Abstract
Neural Combinatorial Optimization (NCO) has emerged as a promising approach for NP-hard problems. However, prevailing RL-based methods suffer from low sample efficiency due to sparse rewards and underused solutions. We propose *Best-anchored and Objective-guided Preference Optimization (BOPO)*, a training paradigm that leverages solution preferences via objective values. It introduces: (1) a best-anchored preference pair construction for better explore and exploit solutions, and (2) an objective-guided pairwise loss function that adaptively scales gradients via objective differences, removing reliance on reward models or reference policies. Experiments on Job-shop Scheduling Problem (JSP), Traveling Salesman Problem (TSP), and Flexible Job-shop Scheduling Problem (FJSP) show BOPO outperforms state-of-the-art neural methods, reducing optimality gaps impressively with efficient inference. BOPO is architecture-agnostic, enabling seamless integration with existing NCO models, and establishes preference optimization as a principled framework for combinatorial optimization.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：现有基于强化学习（RL）的神经组合优化（NCO）方法因稀疏奖励和解利用不充分，导致样本效率低。传统RL方法（如REINFORCE、PPO）依赖大量的轨迹采样，且常丢弃次优解；自标签学习（SLL）虽部分改进，但仍只利用最优解，丢弃其他样本。
- **整体含义**：本文提出一种全新的训练范式——**BOPO**，将偏好优化引入NCO，通过利用多个解之间的自然偏好关系（依据目标值）直接优化策略，无需额外奖励模型或参考策略。该方法旨在提升样本效率，并在多种组合优化问题（JSP、TSP、FJSP）上达到最优性能。

### 2. 论文提出的方法论

- **核心思想**：利用可计算的目标值构造解之间的显式偏好（`f*(y,x) = -g(y)`），并基于偏好对训练策略。关键组件：
  - **最佳锚定偏好对构造（Best-anchored Preference Pair Construction）**：
    1. **混合rollout**：对每个实例生成 `B` 个解（1个贪心解 + B-1个采样解），兼顾开发与探索。
    2. **均匀过滤**：从排序后的 `B` 个解中均匀选取 `K` 个代表性解，避免对相似解过拟合。
    3. **最佳锚定配对**：将最佳解与每个次优解配对，形成 `K-1` 个偏好对 `(x, y1, yk)`，高效利用高质量信息。
  - **目标引导的偏好优化损失（Objective-guided Preference Optimization Loss）**：
    - 定义平均对数似然 `fθ(y,x) = (1/|y|) log πθ(y|x)`。
    - 使用 Bradley-Terry 模型，并引入自适应缩放因子 `β(x, yw, yl) = g(yl)/g(yw)`，根据目标差距动态调整梯度。
    - 最终损失函数为：
      `L_BOPO = -log σ( (g(yl)/g(yw)) * (fθ(yw,x) - fθ(yl,x)) )`
    - 无需奖励模型、参考策略或额外超参数。
- **算法流程**：每个训练步，从数据集中采样一批实例，对每个实例执行混合rollout得到B个解，均匀过滤后最佳锚定配对，计算平均BOPO损失，用Adam优化更新模型。

### 3. 实验设计

- **问题与数据集**：
  - **JSP**：三个基准：Taillard (TA)、Lawrence (LA)、Demirkol (DMU)，包含多种形状（如15×15, 20×15等）。训练集：6种形状各5000实例（共3万）。测试集：各基准的公开实例。
  - **TSP**：随机生成TSP20/50/100，各1000测试实例；另用TSPLIB和四种分布（uniform, cluster, explosion, implosion）测试泛化。
  - **FJSP**：LA基准的e-data、r-data、v-data。训练集：5种形状各2500实例（共2.5万）。
- **对比方法**：
  - **非构造性方法**：精确求解器（Gurobi、OR-Tools）、RL改进方法（L2S、NLS、TGA等）。
  - **构造性方法**：传统优先调度规则（SPT, MOR, MWR）、RL方法（L2D、SchN、CL、POMO、INViT）、SLL方法（SLIM及其变体）。
- **评价指标**：最优性间隙 `(g(y)-g(y*))/g(y*) × 100%`，同时报告总求解时间。

### 4. 资源与算力

- 论文明确提到：实验在 **NVIDIA TITAN Xp GPU** 和 **Intel(R) Xeon(R) E5-2680 CPU** 的Linux系统上进行。
- 未给出精确的训练总时长，仅提及推理时间；训练超参数：JSP 20 epoch，TSP 700-2000 epoch（因模型不同），FJSP 未明确epoch数。总体算力消耗中等，但未提供完整训练成本。

### 5. 实验数量与充分性

- **实验数量**：涵盖三个经典COP（JSP、TSP、FJSP）的多个基准，共约 **30+ 组**主要对比结果（表1-4及图2-5）。
- **消融实验**：
  - 对比不同训练范式（RL、SLL、BOPO）的样本效率（图3）。
  - 验证偏好对构造各步骤的有效性（表5）。
  - 对比不同损失函数（DPO、SimPO、BOPO变体）（表6）。
  - 超参数分析（B、K及其交互）（图4）。
  - 混合rollout与纯采样对比（图5）。
- **公平性**：大部分对比使用相同模型骨干（如MGL、POMO、INViT），超参数尽量对齐；部分基线直接引用原文数据（有标注“-”表示未报告）。整体实验设计较为充分客观。

### 6. 论文的主要结论与发现

- BOPO在三个COP上均显著优于现有神经构造方法，尤其在大规模JSP和复杂FJSP上差距明显。
- BOPO的样本效率远高于RL和SLL，在训练数据有限时优势更突出。
- 最佳锚定构造和目标引导损失是关键，缺一不可；混合rollout能有效降低对采样数B的依赖。
- BOPO可与不同模型架构（如POMO、INViT、MGL）无缝集成，具有架构无关性。
- 推理时间与现有神经方法相当，但解质量接近甚至超越部分传统非构造性迭代启发式（如L2S）。

### 7. 优点

- **新范式**：首次系统地将偏好优化引入NCO，提供更高效利用多个解的训练框架。
- **设计巧妙**：最佳锚定配对+均匀过滤，以少量高质量偏好对获得强学习信号；目标引导缩放因子无需额外超参数，自适应调节梯度。
- **架构无关**：可应用于不同神经网络模型和多种COP，通用性强。
- **性能突出**：在JSP、TSP、FJSP上均达到最优，且推理速度快（毫秒级），优于需要大量迭代的传统方法。
- **实验扎实**：在多种基准、多种分布、多种模型上验证，消融和超参数分析全面。

### 8. 不足与局限

- **资源需求**：训练时仍需较大数量的rollout解（如B=256），与SLIM类似，对GPU内存有一定要求（论文中报告了内存占用）。
- **实验覆盖**：
  - 只测试了三个问题（JSP、TSP、FJSP），未涉及更广泛COP（如VRP变体、图着色等）。
  - 未对比更多最新的基于扩散或自回归的方法（如DIFUSCO等）。
  - 泛化实验仅基于TSPLIB和四种分布，JSP/FJSP的跨分布泛化测试较少。
- **理论分析**：对梯度动态和收敛性缺乏理论证明，主要依赖实验验证。
- **潜在偏差**：部分基线（如SLIM）使用了不同模型（GAT-MHA），论文对比了自己的MGL模型，虽在消融中控制变量，但跨模型对比时模型差异可能影响公平性。
- **局限性自我提及**：论文指出需要较大rollout解数，未来将探索更高效的高质量解获取方式。

（完）
