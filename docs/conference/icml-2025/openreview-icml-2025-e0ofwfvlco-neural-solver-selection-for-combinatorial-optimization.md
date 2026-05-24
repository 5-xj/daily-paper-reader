---
title: Neural Solver Selection for Combinatorial Optimization
title_zh: 神经求解器选择用于组合优化
authors: "Chengrui Gao, Haopu Shang, Ke Xue, Chao Qian"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=e0OFWfvLCO"
tags: ["query:rl-comb-opt"]
score: 5.0
evidence: 协调多种神经求解器解决组合优化的框架
tldr: 本文发现现有神经组合优化求解器在不同实例上表现互补，因此提出了首个通用框架来协调多个神经求解器。该框架在实例级别动态选择最优求解器组合，显著提升整体求解性能。实验表明，协调后的系统在多个组合优化问题上大幅超越单个最优求解器。这项工作开辟了求解器协同的新思路，可有效利用现有神经求解器的多样性。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-e0ofwfvlco/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1722, \"height\": 497, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-e0ofwfvlco/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 439, \"height\": 447, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-e0ofwfvlco/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 775, \"height\": 392, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-e0ofwfvlco/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1777, \"height\": 677, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-e0ofwfvlco/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1776, \"height\": 968, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-e0ofwfvlco/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1224, \"height\": 1004, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-e0ofwfvlco/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 837, \"height\": 714, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-e0ofwfvlco/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 835, \"height\": 715, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-e0ofwfvlco/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 840, \"height\": 713, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-e0ofwfvlco/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1374, \"height\": 259, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-e0ofwfvlco/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 835, \"height\": 714, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-e0ofwfvlco/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1428, \"height\": 386, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-e0ofwfvlco/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1482, \"height\": 610, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-e0ofwfvlco/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1348, \"height\": 297, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-e0ofwfvlco/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1434, \"height\": 235, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-e0ofwfvlco/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 933, \"height\": 298, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-e0ofwfvlco/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1246, \"height\": 443, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-e0ofwfvlco/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1427, \"height\": 2032, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-e0ofwfvlco/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1524, \"height\": 1882, \"label\": \"Table\"}]"
motivation: 现有神经组合优化求解器在不同实例上表现互补，但尚无通用框架来协调它们以提升整体性能。
method: 提出首个通用协调框架，通过分析实例特征动态选择或组合多个神经求解器，实现实例级别的自适应求解。
result: 在最大独立集、旅行商等任务上，协调框架相比最佳单一求解器取得显著性能提升。
conclusion: 该工作证明了协调多个神经求解器的巨大潜力，为未来组合优化研究提供了新方向。
---

## Abstract
Machine learning has increasingly been employed to solve NP-hard combinatorial optimization problems, resulting in the emergence of neural solvers that demonstrate remarkable performance, even with minimal domain-specific knowledge. To date, the community has created numerous open-source neural solvers with distinct motivations and inductive biases. While considerable efforts are devoted to designing powerful single solvers, our findings reveal that existing solvers typically demonstrate complementary performance across different problem instances. This suggests that significant improvements could be achieved through effective coordination of neural solvers at the instance level. In this work, we propose the first general framework to coordinate the neural solvers, which involves feature extraction, selection model, and selection strategy, aiming to allocate each instance to the most suitable solvers. To instantiate, we collect several typical neural solvers with state-of-the-art performance as alternatives, and explore various methods for each component of the framework. We evaluated our framework on two typical problems, Traveling Salesman Problem (TSP) and Capacitated Vehicle Routing Problem (CVRP). Experimental results show that our framework can effectively distribute instances and the resulting composite solver can achieve significantly better performance (e.g., reduce the optimality gap by 0.88% on TSPLIB and 0.71% on CVRPLIB) than the best individual neural solver with little extra time cost.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：组合优化问题（COPs）广泛存在于物流、制造等领域，传统方法依赖专家设计的启发式算法，而近年来涌现了大量端到端神经求解器（neural solvers），它们基于不同的网络架构、训练方法和归纳偏置，在各基准上不断刷新记录。然而，作者通过实验发现，**没有任何一个单一神经求解器能在所有实例上占据绝对优势**；不同求解器在不同实例上表现出**互补性能**（见图1(a)），且当实例分布改变时，优势关系几乎反转（见图1(b)）。这表明若能在实例级别协调多个求解器，可能带来显著的整体性能提升。
- **核心问题**：如何设计一个通用框架，能够根据每个实例的特征，自动选择最合适的神经求解器（或求解器组合）进行求解，从而提高整体性能并控制额外时间成本。
- **整体含义**：该工作首次提出神经求解器选择框架，将零散的、多样化的神经求解器整合成一个协调系统，实现了“1+1>2”的效果，为神经组合优化开辟了新的研究方向。

## 2. 提出的方法论

### 核心思想
构建一个三组件框架：**特征提取**（提取实例特征）、**选择模型**（基于特征预测求解器兼容性分数）、**选择策略**（根据分数决定实际调用的求解器）。通过监督学习训练选择模型，使其能够为每个实例动态分配最优求解器。

### 关键技术细节

#### 特征提取
- **图注意力编码器**：将COP实例（如TSP、CVRP）表示为全连接图，节点包含坐标、需求等原始特征。使用多层图注意力层（类似Transformer）更新节点嵌入，最后对所有节点嵌入取平均作为实例表示。
- **层次图编码器**（改进）：针对简单平均可能丢失层级结构的问题，引入图池化（graph pooling）。通过堆叠多个块，每个块先经过若干图注意力层，然后根据代表性分数（representative scores）选择重要节点进行下采样，保留多级粗化图的特征。最后将所有级别的读出的表示（均值池化+最大池化后拼接）求和，得到层次化实例表示。

#### 选择模型
- 将实例表示和实例规模（节点数N）输入多层感知机（MLP），输出一个分数向量，每个元素对应一个候选神经求解器的兼容性分数。
- 训练损失：两种方式——**分类损失**（交叉熵，以最佳求解器为标签）和**排序损失**（ListMLE，最大化正确排序概率，利用所有求解器的相对表现）。

#### 选择策略
- **贪心选择**：选择分数最高的单个求解器。
- **Top-k选择**：选择分数最高的k个求解器，同时运行并取最优。
- **拒绝式选择**：基于置信度（softmax响应），对低置信度实例使用Top-k，高置信度使用贪心选择。
- **Top-p选择**：选择分数累计概率达到p的最小求解器子集。

此外，论文还初步探索了**求解器特征**（利用代表实例的嵌入通过Transformer得到求解器的特征表示），以实现对新求解器的零样本泛化。

## 3. 实验设计

### 数据集 / 场景
- **合成数据集**：从高斯混合分布中采样生成TSP和CVRP实例，规模N ∈ [50, 500]。训练集10,000个实例，测试集1,000个实例。
- **标准基准**：TSPLIB（真实世界TSP实例，N ≤ 1002），CVRPLIB Set-X（真实CVRP实例，N ∈ [100, 1000]），用于评估分布外泛化。
- 额外实验：更大规模N ∈ [500, 2000]以及增加新求解器（GLOP、UDC）的评估。

### Benchmark
- 性能指标：**最优性间隙（Optimality Gap）** = (解目标值 - 已知最优解目标值) / 已知最优解目标值。
- 时间消耗：包括选择时间和求解器运行时间。
- 对照：Oracle（运行所有候选求解器后取最优）、最佳单一求解器、静态求解器组合（固定子集）。

### 对比方法
- **个体神经求解器**：Omni、BQ、LEHD、DIFUSCO、T2T、ELG、INViT、MVMoE等，经过消元后保留7个（TSP）和5个（CVRP）。
- **特征提取对比**：人工特征（Smith-Miles等人）、图注意力编码器、层次图编码器。
- **损失函数对比**：分类损失 vs. 排序损失。
- **选择策略对比**：贪心、Top-2、拒绝式、Top-p。
- **与传统算法选择方法对比**：Salesperson特征 + 随机森林（Seiler等人） + 本文排序模型。

## 4. 资源与算力

论文中**未明确说明**所使用的GPU型号、数量、训练时长等具体算力信息。仅提及训练50个epoch，选择模型训练时间约2小时（层次编码器）。在附录A.7中比较了编码器训练时间（每epoch 1m40s vs 2m30s）。整体属于中等规模实验，未披露硬件细节。

## 5. 实验数量与充分性

- **实验组数**：在合成TSP、合成CVRP、TSPLIB、CVRPLIB四个主要数据集上均进行了完整测试（表1、表2），每个设置重复5次取均值和标准差。
- **消融实验**：对比三种特征提取方法（表3）、分类/排序损失、四种选择策略（表1、2、图5），以及层次编码器的消融（表6）、拒绝式/Top-p参数调优（图5）、Top-k与静态组合对比（图4）、求解器特征泛化实验（图3）等。
- **充分性**：实验覆盖了合成数据、真实数据、分布偏移、规模增大、多种策略、多种特征、与经典算法选择方法对比等场景，消融分析细致。结果报告均值与标准差，统计严格。总体实验设计客观、公平、充分。

## 6. 主要结论与发现

- **协调框架有效**：所有实现的协调框架均优于最佳单一求解器。例如，合成TSP上排序损失+Top-2将最优性间隙从2.33%降至1.51%；合成CVRP上从6.82%降至4.82%。
- **泛化能力强**：在分布外的大规模真实数据上（TSPLIB、CVRPLIB），协调框架依然显著提升（间隙降低0.88%和0.71%）。
- **层次编码器提升泛化**：相比普通图注意力编码器，层次编码器在分布外数据上表现更好。
- **排序损失优于分类损失**：尤其在Top-p和分布外场景，排序损失更稳定。
- **自适应选择策略平衡性能与效率**：贪心策略效率高但性能略低；Top-k性能最接近Oracle但时间翻倍；拒绝式和Top-p在两者间取得良好折中。
- **初步实现求解器特征泛化**：新求解器可直接加入而不需重新训练选择模型，但top-1准确率略有下降，需进一步优化。

## 7. 优点

- **首次提出神经求解器选择框架**：将算法选择思想引入神经组合优化领域，填补空白。
- **框架通用且可扩展**：三个组件模块化，易于替换或改进，适用于TSP、CVRP及其他COP问题。
- **实验全面且严谨**：覆盖多种数据分布、多种策略、多种特征、消融分析、泛化测试，并报告统计指标。
- **兼顾性能与效率**：自适应策略在几乎不增加时间的前提下显著提升性能，实用性高。
- **公开代码**：促进可复现和后续研究。

## 8. 不足与局限

- **算力信息缺失**：未明确说明训练选择模型所使用的GPU型号、数量、总计算量，不利于复现和比较。
- **求解器特征方法初步**：提出的求解器特征泛化能力有限（top-1性能略降），特征提取方法依赖手动定义代表实例，尚有改进空间。
- **未考虑运行时感知**：当前训练只使用目标值，未考虑不同求解器的运行时间差异。若未来加入耗时求解器（如迭代优化类），需要引入时间代价加权。
- **未探索训练增强**：论文仅利用现成的预训练求解器，未尝试对求解器进行微调以增强互补性（仅作为未来方向提及）。
- **问题范围有限**：仅验证了TSP和CVRP两类问题，其他组合优化问题（如调度、图论问题）尚未测试。
- **忽略随机性**：所有求解器使用贪心解码（无随机性），但许多求解器支持采样或波束搜索，可能影响选择策略的鲁棒性。

（完）
