---
title: Stability and Generalization Capability of Subgraph Reasoning Models for Inductive Knowledge Graph Completion
title_zh: 归纳式知识图谱补全中子图推理模型的稳定性与泛化能力
authors: "Minsung Hwang, Jaejun Lee, Joyce Jiyoung Whang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=NE6Px91RkQ"
tags: ["query:sr"]
score: 4.0
evidence: 知识图谱补全的理论分析
tldr: 该论文针对归纳式知识图谱补全中的子图推理模型，首次提供了稳定性与泛化能力的理论分析。定义了稳定性为输出对输入子图变化的容忍度，并提出了关系树移动距离来量化这种差异。该工作为理解知识图谱补全模型的行为提供了理论基础，属于知识发现领域的理论研究。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-ne6px91rkq/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 782, \"height\": 333, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ne6px91rkq/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 867, \"height\": 325, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ne6px91rkq/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 852, \"height\": 278, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ne6px91rkq/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 850, \"height\": 283, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ne6px91rkq/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 850, \"height\": 303, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-ne6px91rkq/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1584, \"height\": 884, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-ne6px91rkq/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 591, \"height\": 196, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-ne6px91rkq/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 853, \"height\": 227, \"label\": \"Table\"}]"
motivation: 子图推理模型经验成功但缺乏理论理解，特别是稳定性与泛化关系。
method: 定义稳定性度量，引入关系树移动距离，分析其与泛化界的关联。
result: 建立了稳定性和泛化之间的理论联系。
conclusion: 为设计更可靠的知识图谱补全模型提供了理论指导。
---

## Abstract
Inductive knowledge graph completion aims to predict missing triplets in an incomplete knowledge graph that differs from the one observed during training. While subgraph reasoning models have demonstrated empirical success in this task, their theoretical properties, such as stability and generalization capability, remain unexplored. In this work, we present the first theoretical analysis of the relationship between the stability and the generalization capability for subgraph reasoning models. Specifically, we define stability as the degree of consistency in a subgraph reasoning model's outputs in response to differences in input subgraphs and introduce the Relational Tree Mover’s Distance as a metric to quantify the differences between the subgraphs. We then show that the generalization capability of subgraph reasoning models, defined as the discrepancy between the performance on training data and test data, is proportional to their stability. Furthermore, we empirically analyze the impact of stability on generalization capability using real-world datasets, validating our theoretical findings.

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究背景**：知识图谱补全（KGC）旨在预测缺失的三元组。传统方法多采用直推式（transductive）设定，要求训练和推理知识图谱共享相同实体。然而，真实世界知识图谱不断扩展，新实体不断出现，促使研究转向**归纳式KGC**（Inductive KGC），即推理图的实体在训练中从未见过。
- **子图推理模型**：当前归纳KGC最成功的方法之一是子图推理模型（如GraIL、NBFNet、RED-GNN），它们通过提取目标三元组周围的子图结构并利用图神经网络（GNN）计算分数来预测链接，无需学习特定实体表示。
- **核心问题**：尽管这类模型经验上表现优异，但其**稳定性**（输出对输入子图变化的敏感度）和**泛化能力**（训练数据与测试数据之间的性能差异）之间的理论关系尚属空白。现有理论工作主要关注模型的表达能力，而非泛化与稳定性。
- **论文意义**：本文首次对子图推理模型在归纳KGC中的稳定性和泛化能力进行理论分析，为理解模型行为、指导设计更可靠的模型提供了基础。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **通用框架定义**：将子图推理模型分解为两个组件：
  - **子图提取器**（非参数函数）：从知识图谱中提取与查询三元组对应的子图，例如取头实体和尾实体的k跳邻居的交集。
  - **子图消息传递神经网络（SMPNN）**：一个参数化的消息传递神经网络，对提取的子图进行打分。文中给出了SMPNN的形式化定义（包括消息、聚合、更新、全局读出和读出函数），并证明GraIL、NBFNet、RED-GNN均可纳入该框架。
- **稳定性定义**：基于**Lipschitz连续性**定义稳定性。若存在常数η ≥ 0使得 `|fw(S1) - fw(S2)| ≤ η · RTMD(S1,S2)`，则称SMPNN是Lipschitz连续的；稳定性 `Cf = 1/η`，值越大表示模型越稳定。
- **关键技术创新：关系树移动距离（RTMD）**：
  - 为了量化子图之间的差异，提出了**关系计算树**的概念，该树递归地捕获实体的k跳邻域结构及关系标签。
  - RTMD通过比较两个子图中所有实体的关系计算树（包括根实体初始嵌入差异、关系差异、查询关系差异以及子树的多集），利用最优传输距离（optimal transport）来计算整体距离。
  - 引入了空白树增广（blank tree augmentation）以处理子图大小不等的情况。
- **理论分析**：
  - **定理4.5**：推导了SMPNN Lipschitz常数η的上界，该上界依赖于各内部函数的Lipschitz常数、最大度、层数等。由此可比较不同模型（例如平均聚合器比求和聚合器更稳定）。
  - **PAC-Bayes泛化界（定理5.3）**：首次给出了归纳KGC下子图推理模型的泛化误差上界，其中包含了KL散度项和期望风险差异项 `D(P,λ,γ)`。
  - **期望风险差异的上界（定理5.4）**：证明了 `D` 的上界与 `OT_RTMD(ψ(Tinf,Ttr))`（训练与推理三元组子图多集之间的最优传输距离）成正比，与稳定性 `Cf` 成反比。即：**训练与推理图子图分布差异越小、模型越稳定，泛化误差越小**。

## 3. 实验设计：数据集、基准与对比方法

- **数据集**：使用标准归纳KGC数据集：WN18RR v3（WNv3）、FB15K-237 v1（FBv1）、NELL-995 v2（NLv2）。从训练图中随机划分部分三元组作为Ftr和Ttr；推理图使用原测试集作为Tinf。对每个正三元组，随机扰动头或尾生成负样本，保证正负平衡。
- **基准模型**：GraIL、NBFNet、RED-GNN及其变种。通过替换SMPNN不同组件（消息函数、聚合函数、更新函数、全局读出函数、读出函数、历史函数θ(k)）以及层数L=2,3，共生成48个不同的实例。
- **实验任务**：
  1. **RTMD有效性验证**：对所有子图计算RTMD，使用t-SNE可视化；再用SVM（核为exp(-0.1×RTMD)）进行分类，评估子图标签（正/负）分类准确率。
  2. **Lipschitz连续性验证**：训练GraIL模型，绘制所有子图对的RTMD与分数差异的散点图，验证最大分数差异随RTMD递增的趋势。
  3. **稳定性与泛化误差关系**：对48个模型实例，分别计算经验Lipschitz常数（稳定性的倒数）和泛化误差（LGinf(fw,0) - hat_LGtr(fw,γ)），绘制散点图并计算Pearson相关系数及统计显著性。

## 4. 资源与算力

- 论文明确提到使用Python 3.8、PyTorch 1.13.0、cudatoolkit 11.7，以及GeomLoss（Sinkhorn算法）和POT（最优传输）库。
- **未说明**具体的GPU型号、数量或训练时长，仅提及运行1000个epoch，学习率从{5e-4, 1e-3, 5e-3, 1e-2}中调优。算力细节缺失，但实验规模较小（子图大小受限），一般GPU即可支持。

## 5. 实验数量与充分性

- **实验数量**：共包含三类实验，每个实验覆盖三个数据集。
  - SVM分类实验（5次重复，报告平均准确率）。
  - Lipschitz连续性可视化（每个数据集一张散点图）。
  - 稳定性与泛化误差相关性分析（48个模型，每个数据集约排除训练不佳的模型后留30-40个点，计算相关系数、p值和95%置信区间）。
- **充分性**：
  - 实验设计较为全面：验证了RTMD的有效性、Lipschitz连续性假设成立、并直接验证了稳定性和泛化能力的负相关关系。
  - 统计显著性检验（p<0.01，置信区间不含0）增强了结论的可信度。
  - 但实验仅局限于三个中等规模数据集，且子图提取限于2跳，未测试更大规模或更复杂的子图提取策略。未与归纳KGC中的其他非子图方法（如基于规则的模型）比较泛化性能，仅在同框架内对比。

## 6. 论文的主要结论与发现

- **RTMD是有效的子图差异度量**：基于RTMD的SVM分类准确率显著高于随机（如WNv3为82.05%，NLv2为86.54%），且t-SNE显示正负子图可分离。
- **SMPNN满足RTMD下的Lipschitz连续性**：分数差异的上界随RTMD增大而增大，与理论一致。
- **稳定模型具有更好的泛化能力**：在所有三个数据集上，稳定性（1/经验Lipschitz常数）与泛化误差呈显著负相关（Pearson r约-0.5至-0.58，p<0.01），证明理论关系在实践中成立。
- **理论贡献**：通过PAC-Bayes框架建立了子图推理模型在归纳KGC中的第一个泛化界，揭示了稳定性、子图分布差异和泛化误差之间的定量关系。

## 7. 优点

- **首次理论分析**：填补了子图推理模型稳定性与泛化能力理论关系的空白。
- **统一框架**：将GraIL、NBFNet、RED-GNN等主流模型纳入统一SMPNN框架，便于后续分析。
- **新颖度量RTMD**：专门针对多关系子图设计，将节点特征、关系标签、查询关系纳入考量，优于现有的TMD。
- **理论推导完整**：从Lipschitz常数上界到PAC-Bayes泛化界，再到期望风险差异的界，逻辑严密。
- **实验验证充分**：从分类、Lipschitz连续性到相关性分析，多角度实证支撑理论结论，并进行了统计显著性检验。
- **指导意义**：强调设计稳定模型（如使用平均聚合、小Lipschitz常数的函数）对提升泛化能力的重要性。

## 8. 不足与局限

- **实验规模有限**：仅使用三个中等规模数据集（WN18RR、FB15K-237、NELL-995各一个版本），未在更大数据集（如YAGO、Wikidata）或归纳KGC的其他权威基准上验证。
- **子图提取固定**：仅使用2跳包围子图，未探讨不同k跳或动态子图提取的影响。
- **模型变体范围**：虽然生成了48个变体，但仅覆盖了部分组件组合（如消息函数仅包括GraIL、RED-GNN、NBFNet的几种），未包括更多近期模型（如AdaProp、A*Net等）。
- **未考虑新关系**：文中假设推理图与训练图共享关系集R，未扩展至「新关系」出现的更复杂归纳场景（如InGram等方法）。
- **计算成本**：RTMD的计算需要递归构造关系计算树并求解最优传输，在大规模子图或深层数时可能昂贵，但论文未提供运行时间分析。
- **假设强度**：泛化界依赖于Lipschitz连续性假设、PAC-Bayes的扰动构造，实际应用中这些条件可能不完全满足，导致界较宽松。
- **缺失与其他归纳KGC方法的对比**：未将GraIL等模型的泛化性能与基于表示学习的方法（如InGram）或基于规则的方法进行比较，因此稳定性与泛化关系的结论是否适用于其他类型模型尚不明确。

（完）
