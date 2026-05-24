---
title: Graph-Supported Dynamic Algorithm Configuration for Multi-Objective Combinatorial Optimization
title_zh: 图支持的多目标组合优化动态算法配置
authors: "Robbert Reijnen, Yaoxin Wu, Zaharah Bukhsh, Yingqian Zhang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=KCDoaDlzUB"
tags: ["query:rl-comb-opt"]
score: 8.0
evidence: 深度强化学习用于多目标组合优化的动态算法配置
tldr: 该论文针对多目标组合优化（MOCO）问题中算法参数难以动态调整的挑战，提出了一种基于图神经网络（GNN）的深度强化学习（DRL）框架。该方法将算法配置建模为马尔可夫决策过程，利用GNN学习目标空间中解收敛图的嵌入表示，从而增强状态表征。在多种MOCO基准上的实验表明，该方法显著优于固定配置和传统DRL方法，能有效提升多目标进化算法的性能。这项工作展示了强化学习在算法自动化配置中的潜力，为组合优化问题提供了新的求解思路。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-kcdoadlzub/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1668, \"height\": 623, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kcdoadlzub/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1757, \"height\": 647, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kcdoadlzub/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 693, \"height\": 225, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-kcdoadlzub/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1703, \"height\": 1325, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kcdoadlzub/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1563, \"height\": 370, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kcdoadlzub/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1753, \"height\": 357, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kcdoadlzub/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1663, \"height\": 311, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kcdoadlzub/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1187, \"height\": 798, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kcdoadlzub/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1441, \"height\": 182, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kcdoadlzub/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1662, \"height\": 259, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kcdoadlzub/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 821, \"height\": 221, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kcdoadlzub/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1455, \"height\": 187, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kcdoadlzub/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 938, \"height\": 189, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kcdoadlzub/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 937, \"height\": 175, \"label\": \"Table\"}]"
motivation: 多目标组合优化问题中，算法参数动态调整困难，传统方法依赖人工经验，缺乏自适应能力。
method: 提出基于GNN的DRL框架，将动态算法配置建模为MDP，用GNN学习解收敛图嵌入以优化配置策略。
result: 在多个MOCO基准上，该框架显著提升了多目标进化算法的解质量和收敛速度，优于基线方法。
conclusion: DRL结合GNN可有效实现自适应算法配置，为组合优化提供通用框架。
---

## Abstract
Deep reinforcement learning (DRL) has been widely used for dynamic algorithm configuration, particularly in evolutionary computation, which benefits from the adaptive update of parameters during the algorithmic execution. However, applying DRL to algorithm configuration for multi-objective combinatorial optimization (MOCO) problems remains relatively unexplored. This paper presents a novel graph neural network (GNN) based DRL to configure multi-objective evolutionary algorithms. We model the dynamic algorithm configuration as a Markov decision process, representing the convergence of solutions in the objective space by a graph, with their embeddings learned by a GNN to enhance the state representation. Experiments on diverse MOCO challenges indicate that our method outperforms traditional and DRL-based algorithm configuration methods in terms of efficacy and adaptability. It also exhibits advantageous generalizability across objective types and problem sizes, and applicability to different evolutionary computation methods.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机与背景）

- **背景**：多目标组合优化（MOCO）问题（如柔性作业车间调度、车辆路径问题）通常 NP-hard，常使用多目标进化算法（MOEA）求解。MOEA 的性能高度依赖参数配置（如交叉率、变异率），且最优参数会随搜索进程动态变化。
- **问题**：现有静态算法配置方法（如 SMAC3、irace）或手动调参难以适应搜索阶段变化；动态算法配置（DAC）多用于连续优化，对离散、大规模、多目标的 MOCO 效果不佳。现有 DRL 方法（如 MADAC）依赖手动设计的状态特征，泛化性差。
- **整体含义**：本文旨在提出一种通用、自适应的 DRL 框架，自动学习 MOCO 搜索状态的表示并动态调整 MOEA 参数，从而提升解质量和泛化能力。

## 2. 方法论：核心思想、关键技术细节

- **核心思想**：将动态算法配置建模为上下文马尔可夫决策过程（MDP）；用图表示当前解在目标空间中的收敛结构与多样性，通过图神经网络（GNN）自动提取状态特征；使用深度强化学习（PPO）训练策略，输出连续参数配置。
- **关键技术细节**：
  - **状态表示**：将每代种群中所有解作为节点，节点特征为归一化后的每个目标值；基于非支配排序将解分层，连接同一前沿内的节点，形成有向图。额外加入一个归一化代数特征向量表示剩余搜索预算。
  - **动作空间**：连续值，分别控制交叉率（0.6~1.0）和变异率（0.0~0.1），经归一化映射到 [-1,1]。
  - **奖励函数**：当当前代超体积（HV）超过历史最优时，计算当前提升百分比平方与历史最佳提升百分比平方之差，否则为0。该奖励函数实例无关，鼓励后期大幅改进。
  - **策略学习**：使用 Proximal Policy Optimization (PPO)。策略网络先通过两层 GCN 提取图嵌入，经全局平均池化后与代数向量拼接，再经线性层输出动作均值和方差。
- **算法流程**（每步）：
  1. 获得当前解种群，构建目标空间图。
  2. GCN 提取状态嵌入。
  3. 策略网络输出参数配置。
  4. 应用配置运行一代 MOEA，得到新种群。
  5. 计算 HV 变化并给出奖励，更新策略。

## 3. 实验设计

- **问题与数据集**：
  - **柔性作业车间调度 (FJSP)**：规模 5j5m / 10j5m / 25j5m；目标数 2 / 3 / 5（Bi- / Tri- / Penta-）。每规模生成 200 实例（训练 100，测试 100）。
  - **带容量约束车辆路径 (CVRP)**：客户数 100 / 200 / 500；2 目标（总距离、最长路线）。每规模 200 实例（训练 100，测试 100）。
- **基准方法**：
  - 静态默认配置 NSGA-II（交叉率 0.7，变异率 0.02）。
  - 静态优化：SMAC3（贝叶斯优化）、irace（迭代竞赛）。
  - 动态 DRL 基线：MADAC（多智能体 VDN，离散动作）。
- **额外对比**：
  - 泛化实验：训练模型直接用于更大规模实例、更复杂变体（DAFJS-SDST，带装配约束与序列依赖准备时间）。
  - 目标转移实验：训练成对目标（A,B）后直接优化不同目标对（C,D）。
  - 不同 MOEA：MOPSO（粒子群优化）。
  - 端到端方法：P-MOCO（Pareto 集学习，仅 CVRP）。
- **评价指标**：平均超体积（mean HV）、最大超体积（max HV）、标准差；额外 IGD、IGD+、非支配解数量。
- **统计验证**：Wilcoxon 秩和检验（p < 0.05）。

## 4. 资源与算力

- 论文明确说明：训练在 **Intel Core i7-6920HQ CPU @ 2.90GHz with 8GB RAM**、**5 个并行环境**（无 GPU）上完成。
- 训练时长：
  - Bi-CVRP：约 11–26 小时。
  - FJSP 变体：约 5 小时至 3 天。
- MADAC 基线：CVRP 2–8 小时，FJSP 12–60 小时。
- **不足**：未使用 GPU 加速，大规模问题训练时间较长。

## 5. 实验数量与充分性

- **实验数量**：每个问题规模测试 100 实例 × 10 次运行，报告均值和标准差。涵盖两种问题、三种规模、多种目标数。
- **消融实验**：去掉额外特征向量、仅用单层 GCN、替换 GCN 为 Transformer 或 GAT。
- **泛化实验**：不同规模互迁移、更复杂变体、不同目标组合。
- **算法适用范围实验**：NSGA-II 和 MOPSO 均适用。
- **充分性评价**：
  - 对比基线全面（静态 + 动态经典方法）。
  - 统计检验保障显著性。
  - 额外指标（IGD+ 等）进一步确认 Pareto 前沿质量。
  - 实验设计客观、公平，充分验证了所提方法的有效性与泛化性。

## 6. 主要结论与发现

- GS-MODAC 在大多数实验设置中 **显著优于所有基线**，尤其在多目标（5 目标）和大规模（25j5m）问题上表现突出（Penta-FJSP 平均 HV 比最好基线高 8.2%）。
- GS-MODAC **收敛更快**，Pareto 前沿更广阔、更接近真实前沿。
- **泛化能力强**：训练于小规模可有效迁移至大规模；训练于普通 FJSP 可较好地解决更复杂的 DAFJS-SDST 变体，且优于在该变体上直接调优的基线。
- **目标转移**：训练于某组目标后，可用于不同目标组合，性能持平或略优于基线。
- **适用多种 MOEA**：成功用于 NSGA-II 和 MOPSO。
- 奖励函数与图状态表示设计有效。

## 7. 优点

- **创新性**：首次将 GNN 图状态引入 MOCO 动态算法配置，避免手动设计状态特征，自动捕捉解在目标空间的结构信息。
- **状态表示实例无关**：基于归一化目标值，适应不同量纲和问题。
- **奖励函数通用**：基于超体积提升，无需问题特定先验，促进后期精细搜索。
- **实验全面**：覆盖多种问题、规模、目标数、算法类型、泛化场景，消融和替代网络分析扎实。
- **性能优越**：在困难问题上提升显著，呈现强泛化性。

## 8. 不足与局限

- **计算开销**：训练全部在 CPU 上完成，耗时较长（达 3 天），未利用 GPU 加速。大规模问题（如 500 客户 CVRP）推理时状态提取仍有一定占比，尽管论文声称占比低。
- **实验覆盖有限**：仅验证了 FJSP 和 CVRP 两类问题，未涉及其他常见 MOCO（如多目标旅行商、背包、资源分配等）。在更广 MOCO 上的有效性待验证。
- **泛化范围不足**：泛化实验主要限于同分布或轻微变异，未测试分布外（如完全不同的客户分布）或对抗性实例分布。
- **奖励依赖超体积参考点**：需预先定义 nadir 点和理想点，高维目标（>5）时超体积计算可能成为瓶颈。
- **对比基线选择**：动态 DRL 基线仅 MADAC，未与更近期的 DRL 配置方法比较；与端到端方法 P-MOCO 对比有限（仅 CVRP，且 P-MOCO 泛化性弱）。
- **消融实验深度**：仅测试了缺少部分组件或更换网络层，未探索图构建方式（如是否带权边）、池化方法、GCN 层数影响等超参数敏感性。
- **离散动作空间**：MADAC 使用离散动作，而 GS-MODAC 输出连续值，可能带来探索困难，论文未充分讨论离散/连续配置的优势对比。

（完）
