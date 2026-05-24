---
title: "CaDA: Cross-Problem Routing Solver with Constraint-Aware Dual-Attention"
title_zh: CaDA：具有约束感知双注意力的跨问题路径求解器
authors: "Han Li, Fei Liu, Zhi Zheng, Yu Zhang, Zhenkun Wang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=CS4RyQuTig"
tags: ["query:rl-comb-opt"]
score: 5.0
evidence: 跨问题的神经组合优化路径求解
tldr: 车辆路径问题是重要的组合优化问题。现有神经组合优化方法在处理跨问题场景时缺乏约束感知，且仅依赖全局连接导致关键节点关注不足。本文提出CaDA模型，通过约束感知双注意力机制，分别建模全局与局部约束，并引入关键节点聚焦。实验表明，CaDA在多个VRP变体上均取得优异性能，且具备良好的跨问题泛化能力。该工作推动了神经组合优化在真实场景中的实用化。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-cs4ryqutig/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 788, \"height\": 407, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cs4ryqutig/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1763, \"height\": 739, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cs4ryqutig/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 854, \"height\": 366, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cs4ryqutig/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 857, \"height\": 387, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cs4ryqutig/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 430, \"height\": 349, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cs4ryqutig/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 406, \"height\": 349, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cs4ryqutig/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 741, \"height\": 247, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cs4ryqutig/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1780, \"height\": 313, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cs4ryqutig/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 750, \"height\": 396, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-cs4ryqutig/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1551, \"height\": 641, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-cs4ryqutig/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1738, \"height\": 1931, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cs4ryqutig/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 864, \"height\": 262, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cs4ryqutig/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 867, \"height\": 314, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cs4ryqutig/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1780, \"height\": 793, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cs4ryqutig/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1775, \"height\": 952, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cs4ryqutig/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1774, \"height\": 317, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-cs4ryqutig/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1768, \"height\": 378, \"label\": \"Table\"}]"
motivation: 现有跨问题神经路径求解方法缺乏约束感知，且仅依赖全局连接导致关键节点关注不足，限制了跨问题性能。
method: 提出约束感知双注意力机制，包括全局注意力捕获整体约束和局部注意力聚焦关键节点，实现约束感知的跨问题求解。
result: 在多个经典VRP变体（如CVRP、VRPTW）上，CaDA超过现有跨问题方法，并展现优异的泛化能力。
conclusion: CaDA通过约束感知和关键节点聚焦，显著提升了跨问题神经路径求解的性能和泛化性。
---

## Abstract
Vehicle routing problems (VRPs) are significant combinatorial optimization problems (COPs) holding substantial practical importance. Recently, neural combinatorial optimization (NCO), which involves training deep learning models on extensive data to learn vehicle routing heuristics, has emerged as a promising approach due to its efficiency and the reduced need for manual algorithm design. However, applying NCO across diverse real-world scenarios with various constraints necessitates cross-problem capabilities. Current cross-problem NCO methods for VRPs typically employ a constraint-unaware model, limiting their cross-problem performance. Furthermore, they rely solely on global connectivity, which fails to focus on key nodes and leads to inefficient representation learning. This paper introduces a \underline{C}onstraint-\underline{A}ware \underline{D}ual-\underline{A}ttention Model (CaDA), designed to address these limitations. CaDA incorporates a constraint prompt that efficiently represents different problem variants. Additionally, it features a dual-attention mechanism with a global branch for capturing broader graph-wide information and a sparse branch that selectively focuses on the key node connections. We comprehensively evaluate our model on 16 different VRPs and compare its performance against existing cross-problem VRP solvers. CaDA achieves state-of-the-art results across all tested VRPs. Our ablation study confirms that each component contributes to its cross-problem learning performance. The source code for CaDA is publicly available at \url{https://github.com/CIAM-Group/CaDA}.

---

## 论文详细总结（自动生成）

# CaDA: Cross-Problem Routing Solver with Constraint-Aware Dual-Attention 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：车辆路径问题（VRP）是重要的组合优化问题，实际应用中存在大量带不同约束的变体（如容量、时间窗、回程等）。现有神经组合优化（NCO）方法通常为每种变体单独训练一个模型，成本高昂；而跨问题学习方法（如MTPOMO、MVMoE、RouteFinder）虽然尝试用一个模型处理多种VRP，但存在两个关键缺陷：
  - **缺乏约束感知**：模型无法区分不同约束，导致跨问题性能受限。
  - **仅依赖全局连接**：Transformer编码器对所有节点一视同仁，无法聚焦关键节点，造成表示学习效率低下。
- **整体含义**：本文提出**CaDA（Constraint-Aware Dual-Attention Model）**，通过引入约束提示和双注意力机制，使模型能够感知不同约束并聚焦关键节点，从而实现高效的跨问题VRP求解。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：在编码器-解码器框架中，增加**约束提示（Constraint Prompt）** 让模型感知当前问题的约束类型，并通过**双注意力机制**（全局分支 + 稀疏分支）同时捕获全局信息和关键节点间的高关注度连接。
- **关键技术细节**：
  1. **约束提示生成**：将5种约束（C、O、B、L、TW）编码为5维多热向量 **V**，通过两层MLP（含LayerNorm）生成提示嵌入 **P^(0)**，与节点初始嵌入拼接。
  2. **双注意力编码器**：包含**全局分支（fg）** 和**稀疏分支（fs）**，每层两者融合。
     - **全局分支**：标准MHA + SwiGLU + RMSNorm，保持全图连接。
     - **稀疏分支**：使用**Top-k稀疏注意力**，将每个节点的注意力分数中非top-k的项置为0，只保留最相关的k个节点。公式：`SparseAtt(X,Y)=Softmax(M(A))YWV`，其中`M(A)`为Top-k选择操作。
     - **融合层**：每层结束时通过线性投影将两分支输出互相加法更新。
  3. **解码器**：基于上下文嵌入（包含当前节点、剩余容量、时间等）和编码器输出，通过MHA计算查询，再通过tanh裁剪计算动作概率，使用强化学习（REINFORCE with shared baseline）训练。
- **算法流程（文字说明）**：
  - 输入实例V → 线性投影得到初始节点嵌入H^(0) → 与约束提示P^(0)拼接 → 双注意力编码器（L层） → 全局分支输出H^(L) → 解码器自回归构建路径 → 计算损失并更新策略。

## 3. 实验设计：数据集/场景、benchmark、对比方法

- **数据集/场景**：覆盖**16种VRP变体**，包括CVRP、OVRP、VRPB、VRPL、VRPTW及其组合（如VRPBLTW、OVRPBLTW等），节点规模50和100。测试集采用RouteFinder发布的1K随机实例。额外使用**CVRPLIB真实基准**（5个测试集：A、B、F、P、X，共99个实例，规模16-200）。
- **Benchmark**：对比**最优传统求解器**（PyVRP/HGS-CVRP、OR-Tools，分别运行10s/20s）和**代表性跨问题神经求解器**：MTPOMO、MVMoE、RouteFinder（含RF-POMO、RF-MoE、RF-TE）。所有神经方法使用相同数据预算训练。
- **对比方法**：**传统方法**：PyVRP（HGS）、OR-Tools；**神经方法**：MTPOMO、MVMoE、RF-POMO、RF-MoE、RF-TE。CaDA在两个规模上各训练一个模型。

## 4. 资源与算力

- **GPU型号**：NVIDIA GeForce RTX 3090。
- **CPU**：Intel(R) Xeon(R) Gold 6348 @ 2.60GHz。
- **训练时长**：VRP50约**17小时**，VRP100约**25小时**。
- **模型参数量**：CaDA约**3.4M**（次于MVMoE的3.7M，高于RF-TE的1.7M和MTPOMO的1.3M）。
- **推理时间**：在1K测试集上，CaDA使用×8数据增强，VRP50约**2秒**，VRP100约**8-9秒**。

## 5. 实验数量与充分性

- **实验总量**：主实验在16种VRP变体（50和100节点）上对比7种方法，共16×2=32组结果（表1）。此外进行**消融实验**（表2、图4）、**组件位置/稀疏函数/k值选择实验**（图5、图6）、**约束感知可视化**（图7、图9）、**零样本泛化实验**（表3：Multi-Depot和Mixed Backhaul两个未见约束）、**微调实验**（图8）、**真实世界CVRPLIB实验**（表6、表7）。
- **充分性评价**：
  - 消融实验分别验证了约束提示和稀疏分支的贡献，以及提示位置、稀疏函数类型、k值选择的影响。
  - 可视化实验展示了注意力分布差异，证明约束提示确实让模型区分不同问题。
  - 零样本和微调实验评估了泛化能力，实验设计全面。
  - **公平性**：所有神经方法使用相同测试集、相同数据增强（×8 aug），训练数据预算相同；传统求解器使用通用超参数（时间限制）。实验设置较为客观。

## 6. 论文的主要结论与发现

- **主要结论**：CaDA在16种VRP变体上均达到**最优**，在50节点和100节点上平均gap分别比第二名（RF-TE）低**0.26%** 和**0.32%**（图3）。在13/16的100节点变体上排名第一。
- **关键发现**：
  - 约束提示显著提升了跨问题性能，尤其在涉及开放路径（OVRP）和时间窗（TW）的变体中。
  - 稀疏分支（Top-k注意力）优于标准Softmax、sparsemax、1.5-entmax，k=N/2时效果最佳。
  - 双注意力融合方式：将提示仅拼接至全局分支优于其他位置。
  - CaDA在零样本泛化到未见过约束（Multi-Depot、Mixed Backhaul）时也取得最优，微调后收敛更快、最终性能更好。

## 7. 优点：方法或实验设计上的亮点

- **方法亮点**：
  - **约束提示**：简单高效地注入约束信息，无需改变网络结构，可扩展到更多约束。
  - **双注意力机制**：结合全局和稀疏分支，既保留全图信息，又通过可学习的Top-k操作聚焦关键节点，解决了传统注意力“一视同仁”的缺点。
  - **模块化设计**：各组件独立（提示、稀疏分支、融合），便于消融和扩展。
- **实验设计亮点**：
  - 覆盖16种VRP变体，涵盖所有常见约束组合，评估全面。
  - 可视化注意力分布证明约束提示的有效性，增强可解释性。
  - 零样本与微调实验验证了泛化能力，为未来研究提供基线。
  - 代码开源，便于复现。

## 8. 不足与局限

- **实验覆盖**：
  - 仅测试了50/100节点规模，未在更大规模（如200+）上评估（除CVRPLIB包含部分大实例，但神经方法训练仅100节点）。
  - 约束种类局限于5种（容量、开放、回程、时限、时间窗），未包含更多实际约束（如多车场、异构车队、取送货等）。
- **偏差风险**：
  - 所有训练数据生成方式固定（均匀分布坐标、特定需求/时间窗生成规则），可能无法覆盖真实分布多样性。
  - 约束提示采用多热编码+MLP，对于约束间复杂交互的建模能力可能有限。
- **应用限制**：
  - 需要预定义约束集（5维向量），新增约束需重新训练提示层。
  - 零样本泛化到Multi-Depot时gap仍达39.34%（×32增强后28.86%），表明对完全新类型约束的泛化仍有挑战。
  - 训练时间较长（17-25小时），但推理速度快，适合离线训练在线使用。

（完）
