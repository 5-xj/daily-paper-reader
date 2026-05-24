---
title: "Discovering Data Structures: Nearest Neighbor Search and Beyond"
title_zh: 发现数据结构：近邻搜索与更广泛的应用
authors: "Omar Salemohamed, Laurent Charlin, Shivam Garg, Vatsal Sharan, Gregory Valiant"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=DOaqwuhEjc"
tags: ["query:ad"]
score: 8.0
evidence: 用神经网络端到端学习数据结构，自动发现搜索算法
tldr: 该论文探索如何用神经网络端到端学习数据结构，聚焦近邻搜索问题。提出数据结發現框架，无需初始化或种子结构，完全从数据中学习适应分布的数据组织与查询算法。在一维情况下模型自动发现了二分查找、插值查找等最优分布相关/无关算法；在高维空间中也学得有效的数据结构。逆向工程分析揭示了学得结构与经典方法的对应关系，表明神经网络能从数据分布中归纳出高效算法，为自动算法发现开辟了新途径。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-doaqwuhejc/fig-001.webp\", \"caption\": \"\", \"page\": 5, \"index\": 1, \"width\": 600, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-doaqwuhejc/fig-002.webp\", \"caption\": \"\", \"page\": 5, \"index\": 2, \"width\": 600, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-doaqwuhejc/fig-003.webp\", \"caption\": \"\", \"page\": 6, \"index\": 3, \"width\": 1300, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-doaqwuhejc/fig-004.webp\", \"caption\": \"\", \"page\": 6, \"index\": 4, \"width\": 1300, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-doaqwuhejc/fig-005.webp\", \"caption\": \"\", \"page\": 7, \"index\": 5, \"width\": 600, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-doaqwuhejc/fig-006.webp\", \"caption\": \"\", \"page\": 20, \"index\": 6, \"width\": 1000, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-doaqwuhejc/fig-007.webp\", \"caption\": \"\", \"page\": 20, \"index\": 7, \"width\": 1000, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-doaqwuhejc/fig-008.webp\", \"caption\": \"\", \"page\": 20, \"index\": 8, \"width\": 1000, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-doaqwuhejc/fig-009.webp\", \"caption\": \"\", \"page\": 21, \"index\": 9, \"width\": 600, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-doaqwuhejc/fig-010.webp\", \"caption\": \"\", \"page\": 22, \"index\": 10, \"width\": 1000, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-doaqwuhejc/fig-011.webp\", \"caption\": \"\", \"page\": 22, \"index\": 11, \"width\": 1000, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-doaqwuhejc/fig-012.webp\", \"caption\": \"\", \"page\": 22, \"index\": 12, \"width\": 1000, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-doaqwuhejc/fig-013.webp\", \"caption\": \"\", \"page\": 22, \"index\": 13, \"width\": 1000, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-doaqwuhejc/fig-014.webp\", \"caption\": \"\", \"page\": 26, \"index\": 14, \"width\": 1200, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-doaqwuhejc/fig-015.webp\", \"caption\": \"\", \"page\": 26, \"index\": 15, \"width\": 547, \"height\": 480}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-doaqwuhejc/fig-016.webp\", \"caption\": \"\", \"page\": 26, \"index\": 16, \"width\": 547, \"height\": 480}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-doaqwuhejc/fig-017.webp\", \"caption\": \"\", \"page\": 27, \"index\": 17, \"width\": 790, \"height\": 790}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-doaqwuhejc/fig-018.webp\", \"caption\": \"\", \"page\": 27, \"index\": 18, \"width\": 790, \"height\": 790}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-doaqwuhejc/fig-019.webp\", \"caption\": \"\", \"page\": 28, \"index\": 19, \"width\": 400, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-doaqwuhejc/fig-020.webp\", \"caption\": \"\", \"page\": 29, \"index\": 20, \"width\": 640, \"height\": 480}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-doaqwuhejc/fig-021.webp\", \"caption\": \"\", \"page\": 33, \"index\": 21, \"width\": 640, \"height\": 480}]"
motivation: 传统数据结构设计依赖人工，难以自动适应特定数据分布，且缺乏端到端的学习方法。
method: 提出一个可微的神经网络框架，端到端学习数据存储与查询策略，无需预先设定结构，从零开始发现最优数据组织。
result: 在一维近邻搜索中自动发现二分查找、插值搜索等最坏情况最优算法；在高维中也学得有效结构，并且可逆向工程分析。
conclusion: 该方法证明了神经网络可在无先验知识下从数据分布中自动发现高效算法，有望推动自动算法设计。
---

## Abstract
We explore if it is possible to learn data structures end-to-end with neural networks, with a focus on the problem of nearest-neighbor (NN) search. We introduce a framework for data structure discovery, which adapts to the underlying data distribution and provides fine-grained control over query and space complexity. Crucially, the data structure is learned from scratch, and does not require careful initialization or seeding with candidate data structures. In several settings, we are able to reverse-engineer the learned data structures and query algorithms. For 1D nearest neighbor search, the model discovers optimal distribution (in)dependent algorithms such as binary search and variants of interpolation search. In higher dimensions, the model learns solutions that resemble k-d trees in some regimes, while in others, elements of locality-sensitive hashing emerge. Additionally, the model learns useful representations of high-dimensional data such as images and exploits them to design effective data structures. Beyond NN search, we believe the framework could be a powerful tool for data structure discovery for other problems and adapt our framework to the problem of estimating frequencies over a data stream. To encourage future work in this direction, we conclude with a discussion on some of the opportunities and remaining challenges of learning data structures end-to-end.

---

## 论文详细总结（自动生成）

# 中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：神经网络能否从零开始、以端到端的方式自动学习并发现数据结构（data structures），而无需人工设计或种子初始化？  
- **研究动机**：  
  - **科学动机**：深度模型已在图像识别、游戏、对话等领域取得成功，但数据结构和算法设计仍被视为需要人类智能的挑战。探索神经网络自主发现算法有助于理解其能力边界。  
  - **实践动机**：传统数据结构通常针对最坏情况设计，无法利用数据分布的特定模式。学习增强的数据结构（如 Learned Index）已展示出潜力，但仍需人类专家融入学习组件。本文希望去掉人工干预，让模型完全通过端到端训练自行发现整个数据结构和查询算法。  
- **聚焦问题**：近邻搜索（Nearest Neighbor Search, NN）是研究起点，因其理论深厚、应用广泛。随后扩展到流式频率估计问题。

## 2. 方法论：核心思想、关键技术细节、算法流程

- **核心思想**：将数据结构的构建与查询执行建模为两个可微分的神经网络组件，通过约束空间复杂度和查询复杂度实现端到端训练。  
- **技术细节**：  
  - **数据加工网络（data-processing network）**：基于8层Transformer（NanoGPT架构），输入原始数据集 \( D \)，输出每个点的标量排名 \( o_i \)，利用可微排序函数（differentiable sort）得到置换矩阵 \( P \)，将数据点按排名重排为 \( \hat{D} \)。  
  - **查询执行网络（query-execution network）**：由 \( M \) 个MLP查询模型（\( Q_1,\dots,Q_M \)）组成，每个模型输出 one-hot 查找向量 \( m_i \)，从 \( \hat{D} \) 中读取对应值 \( v_i \)，并基于查询历史 \( H_i \) 逐步逼近最近邻。最终预测为最后一次查找结果 \( \hat{y} \)。  
  - **训练策略**：使用软最大化（softmax）+ Gumbel噪声实现可微的稀疏查找；训练时用softmax，推理时用hardmax精确一次热点。损失函数为平方损失或交叉熵（视任务而定）。  
  - **空间复杂度控制**：通过限制输出的维度（如仅输出标量排名，而非直接重构数据点）和额外存储单元（extra space）来控制。  
  - **查询复杂度控制**：通过固定查找次数 \( M \) 并施加稀疏性约束来强制执行。  
- **算法流程**（文字说明）：  
  1. 对每个训练样本（数据集 \( D \)、查询 \( q \)、真实最近邻 \( y \)），数据加工网络将 \( D \) 重排成有序结构 \( \hat{D} \)。  
  2. 查询网络依次执行 \( M \) 次查找，每次选择一个位置读取数据，并记录历史。  
  3. 将第 \( M \) 次查找的结果作为预测 \( \hat{y} \)，与 \( y \) 计算损失，反向传播更新两个网络。  

## 3. 实验设计

- **数据集/场景**：  
  - **一维近邻搜索**：均匀分布 \( (-1,1) \)、硬分布（anti-concentration）、Zipf分布。数据集大小 \( N=100 \)（硬分布 \( N=15 \)），查询次数 \( M=7 \)（硬分布 \( M=3 \)）。  
  - **二维近邻搜索**：均匀分布与硬分布，\( N=100, M=6 \)。  
  - **高维近邻搜索**：30维单位超球面均匀分布、FashionMNIST（100维PCA降维）、SIFT特征（100维），以及3位数字MNIST（标签空间隐式）。\( N=100, M=6 \)（或 \( N=8, M=1 \) 用于探针实验）。  
  - **频率估计**：Zipf分布流、CAIDA IP流量数据集（约30M包）。  
- **基准方法（benchmark）**：  
  - 1D：二分查找（Binary Search）、插值搜索（Interpolation Search）。  
  - 2D：k-d树。  
  - 高维：LSH（SimHash）、学习到哈希方法（ITQ、K-Means、NeuralLSH）、以及分数感知的哈希（oracle）。  
  - 频率估计：CountMinSketch（CMS）。  
- **消融实验（ablations）**：  
  - E2E（frozen）：冻结数据加工网络（仅用随机权重）。  
  - E2E（no-permute）：去除置换组件，直接输出转换后的数据。  
  - E2E（non-adaptive）：查询模型不接收查询历史，仅依赖当前查询。  

## 4. 资源与算力

- **文中说明**：所有实验均使用**单张 NVIDIA RTX8000 GPU**。  
- 训练步数最多 **200万步**，批次大小 **1024**；多数实验约 **50万步**；采用 Adam 优化器，学习率网格搜索 \(\{1e-4,1e-5,5e-5\}\)。  
- 未报告详细训练时长，但指出在学术计算资源下完成。  

## 5. 实验数量与充分性

- **实验数量**：覆盖1D、2D、高维（30D/100D）多个数据分布；两个任务（NN搜索和频率估计）；多种消融（3种以上消融变体）；频率估计还迁移至真实CAIDA数据集。  
- **充分性**：  
  - 对比方法均为经典/最新基线，包括学习增强方法（如Zipf Treap）。  
  - 消融实验系统探究了核心组件（排序、查询历史、噪声）的必要性。  
  - 对随机种子变异性进行了展示（附录B.2），结果稳定。  
  - 实验设计客观：使用合成数据精确控制分布，并在真实数据集上验证部分结论。  
- **公平性**：对比的基线在最有利设置下运行（如LSH选择最优 \( K \) 值）；MNIST实验中注明与oracle哈希比较是不公平的，但作为参考。

## 6. 主要结论与发现

- **端到端学习有效**：在所有设定下，模型均能从零开始学到有意义的数据结构和查询算法。  
- **发现经典算法**：  
  - 1D均匀分布：模型学会排序，并采用类似插值搜索的策略（根据查询位置调整起始搜索点），优于二分查找。  
  - 1D硬分布：模型自动退化为二分查找（最坏情况最优）。  
  - 2D硬分布：模型学到类似k-d树的递归交替分割策略。  
- **高维表示学习**：  
  - 30D超球面：模型学到类似LSH的投影分区。  
  - 3-数字MNIST：模型从图像中学习到数值顺序表示，并基于该表示排序、搜索，准确率约98%。  
- **频率估计**：模型学到类似CMS但使用更小更新增量的算法，在Zipf分布和CAIDA数据上 outperforms CMS。  
- **可解释性**：通过反向工程分析（如PCA投影、决策边界可视化），揭示了学得结构与经典方法的对应关系。

## 7. 优点

- **完全自动化**：无需人工设计或种子初始化，从零开始发现数据结构。  
- **适应性**：模型自动利用数据分布特征（均匀性、偏态等）调整算法，无需单独编码。  
- **通用框架**：支持不同任务（近邻搜索、频率估计），且可扩展至额外空间（extra space）利用。  
- **可解释性**：逆向工程分析揭示了学得结构与经典算法（二分查找、k-d树、LSH）的对应，提供了算法发现的新视角。  
- **消融设计严谨**：清晰隔离了不同组件的作用（排序、查询历史、噪声）。

## 8. 不足与局限

- **规模有限**：大多数实验数据集大小 \( N \approx 100 \)，仅初步探索至 \( N=500 \)。实际部署需要更大规模。  
- **计算开销**：Transformer数据加工网络具有二次复杂度（虽然可用线性注意力替代），查询网络为每个查找运行MLP，推理成本较高；预处理时间未优化。  
- **缺乏理论保证**：与学习增强算法不同，端到端学习不提供最坏情况渐近保证。  
- **实验覆盖局限**：仅测试了欧氏距离和特定分布；未探索插入/删除动态场景。  
- **失败模式**：在部分频率估计设置中（如高度偏斜且排名随机化时）学习难以收敛，表明需要更好的初始化或归纳偏置。  
- **公平性考虑**：在MNIST实验中与oracle哈希比较虽已注明，但仍需注意基线选择可能偏向模型。

（完）
