---
title: An Efficient Search-and-Score Algorithm for Ancestral Graphs using Multivariate Information Scores for Complex Non-linear and Categorical Data
title_zh: 基于多元信息分数的祖先图高效搜索与评分算法
authors: "Nikita Lagrange, Herve Isambert"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=RfqTvlo9XQ"
tags: ["query:sr"]
score: 4.0
evidence: 贪心搜索与评分方法进行因果结构学习
tldr: 针对复杂非线性及类别数据中的因果结构学习，提出一种基于多元信息分数的贪心搜索与评分算法，用于祖先图。算法利用局部信息分数分两步搜索，有效处理隐含变量，在计算效率和准确性之间取得平衡。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-rfqtvlo9xq/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1694, \"height\": 1705, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rfqtvlo9xq/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 862, \"height\": 1057, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rfqtvlo9xq/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1788, \"height\": 1123, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rfqtvlo9xq/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1535, \"height\": 534, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rfqtvlo9xq/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 900, \"height\": 446, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rfqtvlo9xq/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1717, \"height\": 2150, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-rfqtvlo9xq/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1791, \"height\": 1108, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-rfqtvlo9xq/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1705, \"height\": 350, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-rfqtvlo9xq/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1606, \"height\": 368, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-rfqtvlo9xq/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1777, \"height\": 390, \"label\": \"Table\"}]"
motivation: 现有因果结构学习方法在大规模数据或非线性关系下计算复杂且易受参数假设影响。
method: 采用两阶段贪心搜索：先基于局部信息分数选择节点，再优化边结构，并用多元信息估计似然。
result: 在合成和真实数据上，算法在速度和准确性上优于现有方法。
conclusion: 该算法为复杂非线性数据的因果发现提供了一种实用方案。
---

## Abstract
We propose a greedy search-and-score algorithm for ancestral graphs, which include directed as well as bidirected edges, originating from unobserved latent variables. The normalized likelihood score of ancestral graphs is estimated in terms of multivariate information over relevant "$ac$-connected subset" of vertices, $\boldsymbol{C}$, that are connected through collider paths confined to the ancestor set of $\boldsymbol{C}$. For computational efficiency, the proposed two-step algorithm relies on local information scores limited to the close surrounding vertices of each node (step 1)  and edge (step 2). This computational strategy, although restricted to information contributions from $ac$-connected subsets containing up to two-collider paths, is shown to outperform state-of-the-art causal discovery methods on challenging benchmark datasets.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：在观测数据存在未观测到的潜在变量（隐藏变量）的情况下，如何高效、准确地学习包含有向边和双向边的祖先图（ancestral graphs）的因果结构。传统方法（如基于贝叶斯网络的似然估计）难以直接处理隐藏变量导致的混合图结构（如双向边），而现有针对祖先图的方法多假设数据为线性高斯分布，无法有效处理复杂非线性或类别型数据。
- **研究动机**：实际应用中，隐藏变量普遍存在（如医疗记录、生物数据），导致变量间出现双向边或更复杂的依赖关系。需要一种不依赖于线性或正态假设的、可扩展的因果发现方法，适用于小样本、高维、非线性、类别型数据。
- **整体含义**：本文提出了一种基于多元信息分解的似然函数估计方法，将祖先图的似然表示为所有“ac-连通子集”上的多元交叉信息之和，并基于此设计了一个两阶段贪心搜索与评分算法，在计算效率和准确性之间取得了较好平衡，尤其适用于复杂非线性数据和类别数据。

## 2. 论文提出的方法论

### 2.1 核心思想
- 利用多元信息论，将祖先图的似然函数分解为所有“ac-连通子集”（ancestor-collider connected subsets）上的交叉信息之和（Theorem 1），并证明该分解可将模型分布 q 替换为经验分布 p 进行估计（Proposition 3）。
- **ac-连通子集**定义：子集 C 中任意两点之间要么直接相连，要么存在一条“碰撞路径”，且路径上的所有碰撞节点都在 C 的祖先集中。
- 该分解避免了传统基于头尾因子分解（head-and-tail factorization）难以经验估计的问题。

### 2.2 关键技术细节
- **贪心两阶段搜索**：
  - **阶段 1（节点评分）**：对每个节点 X_i，基于其可能父节点、配偶或邻居的局部条件熵与因子化正态最大似然（fNML）复杂度之和最小化，进行边方向预判和边删除。循环迭代直至收敛。
  - **阶段 2（边方向评分）**：对阶段1保留的边，基于局部 ac-连通子集（最多包含两跳碰撞路径）对全局似然的贡献，计算每条边的方向得分（有向、双向、无连接），并选择使全局得分降低最大的方向变更，避免形成有向环或几乎有向环。循环直至收敛或达到极限环。
- **评分函数**：使用条件互信息减去对称化的 fNML 复杂度（见表1）。方向评分考虑了马尔可夫等价性，即当两个节点共享相同父/配偶集时，三种方向的得分相等。
- **信息估计**：对于连续变量，通过优化过程估计条件互信息；对于离散变量直接计算。

### 2.3 算法流程
1. 使用 MIIC 方法获得初始图结构（包含有向、双向、无向边）。
2. 阶段1：对每个节点，搜索最优父/配偶/邻居集，最小化节点评分（式14/34），迭代更新边方向预判，移去无方向预判的边。
3. 阶段2：对每条保留的边，计算三种可能方向（X→Y, Y→X, X↔Y）的边评分（表1），选择全局得分降低最大的方向变更，重复直至收敛。

## 3. 实验设计

### 3.1 使用的数据集 / 场景
- **合成连续数据集**：基于线性高斯模型和非线性连续模型（高斯混合 + 非线性结构方程），生成包含50或150个节点、平均度3或5的贝叶斯网络，然后隐藏0%、10%或20%的变量以构造祖先图。共360个独立模型。
- **真实世界类别数据集**：来自 bnlearn 仓库的四个离散贝叶斯网络：Alarm（37节点，509参数）、Insurance（27节点，1008参数）、Barley（48节点，114005参数）、Mildew（35节点，540150参数）。同样隐藏0%、10%、20%变量。
- **玩具模型**：三个简单祖先图（图E.1），用于测试双向边方向预测。

### 3.2 Benchmark
- 真实图（理论 PAGs）作为标准，评估精确率（Precision）和召回率（Recall），并将方向错误（有向/双向边预测方向不同）也计为假阳性。

### 3.3 对比方法
- **MIIC**（本算法的起点）
- **M3HC**（基于得分搜索的祖先图学习方法）
- **GFCI**（混合因果发现算法）
- **DAG-GNN**（基于图神经网络的连续优化方法）
- **FCI**（约束基方法，仅用于类别数据对比）

## 4. 资源与算力

论文中**未明确说明**使用的GPU型号、数量、训练时长等硬件资源信息。仅提及算法的时间复杂度：MIIC的复杂度关于节点数近似二次，MIIC_search&score的两阶段步骤在固定平均度下关于节点数（阶段1）和边数（阶段2）是线性的，整体与 MIIC 相当，具有可扩展性。这表明算法可以在普通CPU上运行，无需大规模GPU集群。

## 5. 实验数量与充分性

### 5.1 实验数量
- **连续数据**：4种节点尺寸×度组合（50/150节点×3/5度）×3种隐藏比例（0%/10%/20%）×6种样本量（100~20000）≈ 30×4×3×6=2160个独立模型（每个条件下30次重复）。加上线性/非线性两种类型，总计更多。
- **类别数据**：4个网络×3种隐藏比例×6种样本量×50次独立重复≈ 4×3×6×50=3600个实验。另加 bootstrap 敏感性分析（30次重采样）。
- **玩具模型**：3个模型×6种样本量，每个条件多次重复（百分比报告）。

### 5.2 充分性与公平性
- **充分性**：覆盖不同大小、稀疏度、分布类型（线性、非线性、离散）的数据，并系统研究隐藏变量比例的影响。使用了多次重复和误差棒（95%置信区间），结果具有统计可靠性。
- **公平性**：对比方法均采用其官方推荐或最佳参数设置（附录E有详细说明）。在数据生成、评估指标（精确率+召回率）上统一。但未做交叉验证（如不同数据分割），仅使用独立同分布样本。对FCI在某些复杂模型大样本下未能收敛的情况也如实记录。

## 6. 论文的主要结论与发现

1. **理论贡献**：提出并证明了祖先图的似然函数可分解为 ac-连通子集上的多元信息之和，该分解可凭经验估计，为搜索-评分算法提供了理论基础。
2. **算法有效性**：MIIC_search&score 在大多数非线性连续和类别数据集上，在精确率和召回率两方面均显著优于 MIIC、M3HC、GFCI、DAG-GNN 和 FCI，尤其在小样本或复杂高阶交互场景下表现突出。
3. **线性高斯模型的局限性**：在纯线性高斯数据上，GFCI 和 DAG-GNN 表现最佳（因它们假设线性组合），但本方法仍保持相当竞争力，且对非线性数据鲁棒性更强。
4. **隐藏变量的影响**：随着隐藏变量比例增加，所有方法的召回率下降（因弱间接效应更难检测），但精确率基本不变，说明算法能有效控制假阳性。
5. **可扩展性**：算法规模近似线性于节点/边数，适用于中等规模图（50-150节点）和中等样本量（100-20000）。

## 7. 优点

- **理论创新**：首次将祖先图似然分解为 ac-连通子集的交叉信息，并给出可经验估计的变形，为搜索-评分方法提供了简洁的理论框架。
- **处理复杂数据**：不假设数据分布（线性、正态），可直接应用于非线性、多模态连续数据及高维离散数据，填补了该领域空白。
- **计算效率高**：两阶段贪心搜索仅使用局部信息（最多两跳碰撞路径），避免了穷举或MCMC的高开销，且在实验中已证明能有效提升性能。
- **鲁棒性**：在多种数据模型、隐藏比例、样本量下，精确率和召回率均优于或持平现有方法，尤其在小样本场景优势明显。
- **公开代码与可复现性**：提供了源代码链接（GitHub），方便社区验证和扩展。

## 8. 不足与局限

- **局部近似**：算法仅考虑 ac-连通子集中最多包含两跳碰撞路径，对于包含更长碰撞路径的复杂祖先图，可能丢失部分信息贡献，导致局部最优或极限环。
- **无向边问题**：理论分解（Theorem 1）限于不含无向边的祖先图（MAGs），未扩展到包含无向边的更一般情况。
- **未与其他参数化评分方法对比**：如基于 BIC 的离散嵌套马尔可夫模型、指数族分布等，仅在实验部分提及但未实际对比。
- **仅考虑了三种边类型**（有向、双向、无连接），未处理可能存在的延迟边（如潜在时间混淆）或选择偏倚。
- **未提供大规模高维实验**（如>150节点），尽管算法复杂度可接受，但缺少极端场景的验证。
- **资源信息缺失**：未说明实验所需的计算资源（GPU/CPU型号、运行时间等），不利于评估实际部署成本。
- **敏感性分析有限**：仅对类别数据做了bootstrap，连续数据未做多次重采样验证，可能存在欠充分的泛化评估。

（完）
