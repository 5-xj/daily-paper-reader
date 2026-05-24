---
title: "COExpander: Adaptive Solution Expansion for Combinatorial Optimization"
title_zh: COExpander：组合优化的自适应解扩展
authors: "Jiale Ma, Wenzheng Pan, Yang Li, Junchi Yan"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=KMaBXMWsBM"
tags: ["query:rl-comb-opt"]
score: 9.0
evidence: 神经组合优化，自适应扩展范式
tldr: 针对神经组合优化（NCO）在大规模问题中全局预测热图过于平滑导致解码困难，以及局部构造自回归过程耗时的问题，本文提出自适应扩展（AE）范式及其实例COExpander。该方法通过全局预测器生成信息丰富的热图，并在局部信息引导下进行扩展，兼顾了两者的优势。实验结果表明COExpander在多个组合优化问题上显著提升了求解效率和质量，为NCO提供了新的研究范式。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-kmabxmwsbm/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1688, \"height\": 575, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kmabxmwsbm/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 525, \"height\": 819, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kmabxmwsbm/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1685, \"height\": 466, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kmabxmwsbm/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1585, \"height\": 665, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kmabxmwsbm/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1599, \"height\": 627, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 824, \"height\": 790, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1754, \"height\": 446, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1167, \"height\": 889, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1751, \"height\": 849, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1749, \"height\": 276, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1724, \"height\": 324, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1745, \"height\": 212, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 850, \"height\": 623, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1718, \"height\": 269, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1714, \"height\": 440, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1155, \"height\": 234, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1375, \"height\": 554, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1754, \"height\": 593, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1759, \"height\": 1216, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1724, \"height\": 910, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1715, \"height\": 485, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1719, \"height\": 665, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1722, \"height\": 1019, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 1756, \"height\": 424, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-020.webp\", \"caption\": \"\", \"page\": 0, \"index\": 20, \"width\": 1717, \"height\": 1764, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-021.webp\", \"caption\": \"\", \"page\": 0, \"index\": 21, \"width\": 1716, \"height\": 1536, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-022.webp\", \"caption\": \"\", \"page\": 0, \"index\": 22, \"width\": 1716, \"height\": 1172, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-023.webp\", \"caption\": \"\", \"page\": 0, \"index\": 23, \"width\": 1716, \"height\": 1223, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-024.webp\", \"caption\": \"\", \"page\": 0, \"index\": 24, \"width\": 1714, \"height\": 2081, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-025.webp\", \"caption\": \"\", \"page\": 0, \"index\": 25, \"width\": 1715, \"height\": 1796, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-026.webp\", \"caption\": \"\", \"page\": 0, \"index\": 26, \"width\": 1523, \"height\": 2084, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-027.webp\", \"caption\": \"\", \"page\": 0, \"index\": 27, \"width\": 1556, \"height\": 1797, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-kmabxmwsbm/table-028.webp\", \"caption\": \"\", \"page\": 0, \"index\": 28, \"width\": 1719, \"height\": 708, \"label\": \"Table\"}]"
motivation: 现有神经组合优化方法在大规模问题上存在全局预测热图平滑和局部自回归耗时的双重瓶颈。
method: 提出自适应扩展范式COExpander，利用全局预测器生成热图，并结合局部信息进行高效解扩展。
result: 实验结果显示COExpander在多种组合优化问题上相比基线方法取得了更优的求解性能，验证了其有效性。
conclusion: COExpander提供了一种兼顾全局与局部优势的新范式，推动了神经组合优化在大规模问题上的应用。
---

## Abstract
Despite rapid progress in neural combinatorial optimization (NCO) for solving CO problems (COPs), as the problem scale grows, several bottlenecks persist: 1) solvers in the Global Prediction (GP) paradigm struggle in long-range decisions where the overly smooth intermediate heatmaps impede effective decoding, and 2) solvers in the Local Construction (LC) paradigm are time-consuming and incapable of tackling large instances due to the onerous auto-regressive process. Observing these challenges, we propose a new paradigm named Adaptive Expansion AE with its instantiation COExpander, positioned to leverage both advantages of GP and LC. COExpander utilizes informative heatmaps generated by a global predictor, which is learned under the guidance of locally determined partial solutions, to in turn direct the expansion of determined decision variables with adaptive step-sizes. To ensure transparent evaluation, we further take the lead to canonicalize 29 benchmarks spanning 6 popular COPs (MIS, MCl, MVC, MCut, TSP, ATSP) and various scales (50-10K nodes), upon which experiments demonstrate concrete SOTA performance of COExpander over these tasks. Source code and our standardized datasets will be made public.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

神经组合优化（NCO）领域当前主流的两类求解范式存在各自的瓶颈：

- **全局预测（GP）范式**：通过单次前向传播预测所有决策变量的概率热图，再通过启发式解码得到解。但随问题规模增大，热图变得过度平滑（值相似），解码效果显著下降，尤其在长距离决策中。
- **局部构造（LC）范式**：将求解建模为马尔可夫决策过程，逐步确定一个变量（auto-regressive），虽能利用局部状态，但缺乏全局视角，且自回归过程耗时严重，难以扩展至大规模实例。

论文提出了一种新的求解范式——**自适应扩展（Adaptive Expansion, AE）**，旨在结合GP的全局指导与LC的局部信息，通过自适应调整每一步确定的决策变量数量（而非固定为1或全部），实现可变的决策粒度，从而兼顾效率与解质量。其具体实现为**COExpander**。

### 2. 论文提出的方法论：核心思想、关键技术细节

**核心思想**：在求解过程中，从“完全未确定”状态开始，每一轮使用一个**全局预测器**（基于一致性扩散模型）生成当前局部解状态下的概率热图，然后仅选取热图中最“可信”的部分（即高概率或低概率）来**确定**一批变量，并更新局部掩码，以指导下一轮预测。迭代直至所有变量确定。该过程称为“partial-to-full”映射，相比GP的“noise-to-full”更稳定，相比LC的“next-token”更高效。

**关键技术细节**：

- **全局预测器**：基于Fast-T2T的一致性模型，训练时接受**局部解提示**（partial solution prompted generation）。具体地，对每个训练实例，随机生成掩码M（指示哪些变量已确定），构造部分解y_t，模型学习从(y_t, t, G, M)预测完整解x*的分布。训练损失为预测与真值间的二元交叉熵。
- **自适应扩展过程**（Algorithm 1）：  
  初始化掩码M=0（全未确定）。循环：  
  1. 采样噪声x_T，结合当前部分解x和M生成y_T。  
  2. 通过多步一致性模型推理得到概率热图H。  
  3. 从H中按**优先级**选取最可信的变量，通过**确定算子D**（基于贪婪规则）赋值并更新M。  
  4. 每一步确定的变量数量可变化（由超参数n_d控制），直至所有变量确定。
- **确定算子D**：针对不同问题定制。例如MIS：按H降序选择节点，若加入后仍为独立集则确定，同时强制邻居为“不选”。MVC：按H升序选择节点，若加入后仍为顶点覆盖则确定。TSP/ATSP：按边的H降序选择边延长游览。

### 3. 实验设计

- **使用的数据集/场景**：论文重新整理并标准化了29个benchmark，涵盖6个常见组合优化问题：MIS、MCl、MVC、MCut、TSP、ATSP。每个问题包含多种规模（50-10K节点），以及合成数据（RB、ER、BA）和真实数据（SATLIB、TSPLIB、Twitter、COLLAB）。部分实验在超大规模（RB-GIANT、ER-1400-1600、TSP-10K）上进行跨分布/跨尺度泛化测试。
- **基准方法**：  
  - 传统求解器：Gurobi、KaMIS、LKH、Concorde、GA-EAX。  
  - 神经网络方法：GCN、DIFUSCO、Fast-T2T、DiffUCO、MatNet、SymNCO、BQ-NCO、GOAL、Meta-EGN等，覆盖GP、LC及分治（D&C）范式。  
- **对比方式**：所有方法在统一硬件（H800 GPU）和标准化数据集上重新评估，确保了公平性。

### 4. 资源与算力

论文明确说明：所有模型使用 **NVIDIA H800（80GB）GPU** 和 **Intel Xeon Platinum 8558 CPU** 进行训练和测试。训练时batch size与学习率经过调优适配算力。测试时batch size为1，保证时间公平。具体训练轮数和其他参数详见附录F。

### 5. 实验数量与充分性

实验非常充分：
- 主实验：在6个问题的多个规模上对比了11种神经baseline和至少4种传统求解器（包含多种配置），结果表格（Table 1-4、Table 18-23）详细报告了目标值、下降率（gap）和时间，并给出了标准差。
- 消融实验（Section 5.5, Fig. 2）：分别探究了推理步数Is、确定步数Ds、采样数S对性能的影响，并进行了同等模型调用次数下AE与标准对比。
- 骨干网络消融（Table 16）：验证AE可提升不同骨干（GCN、一致性模型）的性能。
- 泛化实验：跨分布（真实数据Twitter/COLLAB、TSPLIB）、跨尺度（超大规模数据），展示了对未见模式的良好泛化。
- 后处理研究：将RLSA采样方法作为后处理插件应用于MIS，改进了初始解。
- 扩展到CVRP（Table 26）虽性能不如现有方法，但作为初步尝试已提供分析。

实验客观公平：所有baseline均为重新复现或使用官方checkpoint并在统一数据集和硬件上运行，修正了部分baseline的过时/错误设置（如LKH的SPECIAL参数）。

### 6. 论文的主要结论与发现

- **性能大幅领先**：COExpander在所有6个问题上均超越了此前SOTA神经方法，在节点选择问题（MIS、MCl、MVC）上gap平均降低37.9%~94.4%，在TSP和ATSP上分别降低27.8%和75.4%，同时速度提升最高达8.4x。
- **与Gurobi比较**：在超大规模节点选择问题上，COExpander甚至能超越Gurobi（3600秒限时），如RB-GIANT上的MCl问题，gap为-6.4%（即优于Gurobi），速度快2372倍。
- **新范式有效**：相比GP和LC，AE范式能有效缓解热图平滑和自回归瓶颈，获得更优的解质量与效率折中。

### 7. 优点

1. **范式创新**：提出可扩展的AE范式，填补了GP与LC之间的空白，具有模型无关性，可适配不同骨干网络。
2. **性能一流**：在标准化benchmark上全面超越现有SOTA，且时间和性能平衡好。
3. **实验严谨**：重新标准化了29个benchmark，修正了baseline的复现错误，确保公平比较；提供开源代码和标准化数据集。
4. **可解释性好**：通过自适应确定过程，每步显式地确定部分变量，相比扩散模型的黑盒生成更具可控性。
5. **泛化能力强**：跨分布、跨尺度的实验结果表现良好，展示了模型对未见实例的适应能力。

### 8. 不足与局限

1. **训练需要真实标签**：COExpander目前依赖有监督学习，需要传统求解器生成标签，对标签质量和生成成本有一定依赖。
2. **复杂约束问题瓶颈**：在带容量约束的路径问题（CVRP）上，当前性能不如LC方法，作者分析为一致性模型在复杂约束上训练困难，并提出将来可结合MDP和PPO进行改进。
3. **推理阶段超参数敏感**：Ds和Is的选择对性能有影响（但消融实验表明合理范围内趋势一致）。
4. **泛化覆盖不完全**：虽然进行了跨分布和跨尺度测试，但未覆盖所有可能分布（如高斯分布、聚类分布），也未对ATSP等做跨尺度泛化实验。
5. **计算资源需求**：尽管时间优越，但训练时需要较大GPU内存，未提及小设备上的可行性。

（完）
