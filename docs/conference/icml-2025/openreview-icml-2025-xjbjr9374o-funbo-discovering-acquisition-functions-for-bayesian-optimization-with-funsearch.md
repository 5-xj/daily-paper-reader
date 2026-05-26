---
title: "FunBO: Discovering Acquisition Functions for Bayesian Optimization with FunSearch"
title_zh: FunBO：利用FunSearch发现贝叶斯优化的采集函数
authors: "Virginia Aglietti, Ira Ktena, Jessica Schrouff, Eleni Sgouritsa, Francisco Ruiz, Alan Malek, Alexis Bellot, Silvia Chiappa"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=XjbJR9374o"
tags: ["query:ad"]
score: 8.0
evidence: 基于大语言模型和FunSearch发现采集函数
tldr: 贝叶斯优化的采集函数设计常需专门定制。本文基于FunSearch提出FunBO，利用大语言模型自动发现新的采集函数，以代码形式输出，在多个优化问题上取得良好性能，展示了LLM辅助自动发现算法的潜力。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 514, \"height\": 528, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 937, \"height\": 892, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 675, \"height\": 411, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 762, \"height\": 614, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1611, \"height\": 426, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1603, \"height\": 373, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1340, \"height\": 728, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1731, \"height\": 633, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1741, \"height\": 459, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1219, \"height\": 890, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1225, \"height\": 847, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1595, \"height\": 620, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1594, \"height\": 653, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1215, \"height\": 976, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1782, \"height\": 1490, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-xjbjr9374o/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1767, \"height\": 732, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-xjbjr9374o/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1421, \"height\": 253, \"label\": \"Table\"}]"
motivation: 贝叶斯优化中最佳采集函数因问题而异，手动设计成本高。
method: 基于FunSearch，利用大语言模型自动发现并输出新采集函数的代码表达式。
result: 在多个标准优化问题上，发现的采集函数优于或匹敌手工设计的函数。
conclusion: 大语言模型与搜索结合为自动发现优化算法提供了有效范式。
---

## Abstract
The sample efficiency of Bayesian optimization algorithms depends on carefully crafted acquisition functions (AFs) guiding the sequential collection of function evaluations. The best-performing AFs can vary significantly across optimization problems, often requiring ad-hoc and problem-specific choices. This work tackles the challenge of designing novel AFs that perform well across a variety of experimental settings. Based on FunSearch, a recent work using Large Language Models (LLMs) for discovery in mathematical sciences, we propose FunBO, an LLM-based method that can be used to learn new AFs written in computer code by leveraging access to a number of evaluations for a limited set of objective functions. We provide the analytic expression of all discovered AFs and evaluate them on various global optimization benchmarks and hyperparameter optimization tasks. We show how FunBO identifies AFs that generalize well both in and out of the training distribution of functions, thus outperforming established general-purpose AFs and achieving competitive performance against AFs that are customized to specific function types and are learned via transfer-learning algorithms.

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：贝叶斯优化（BO）中，采集函数（Acquisition Function, AF）的选择对优化效率至关重要，但最佳AF往往因目标函数类型而异。传统通用AF（如EI、UCB）在不同问题上表现差异大，而针对特定问题定制的AF则依赖人工设计或昂贵的元学习训练。因此，亟需一种能自动发现通用性强、泛化能力好的新型AF的方法。
- **整体意义**：论文提出FunBO，利用大型语言模型（LLM）与FunSearch算法，在计算机代码空间中自动搜索高性能AF，输出的AF代码可直接部署，兼具可解释性、简洁性和强泛化性能。这项工作将LLM从“执行任务”的角色扩展到“发现新算法”，为自动化算法设计提供了新范式。

## 2. 论文提出的方法论

- **核心思想**：将AF的发现视为一个算法搜索问题，通过LLM作为变异算子，在代码空间内迭代改进AF，并使用完整的BO评估流程衡量性能。
- **关键技术细节**：
  - **初始AF**：以期望改进（EI）函数作为初始程序，输入包括预测均值、预测方差、当前最优值（incumbent）及一个超参数beta。
  - **FunSearch框架**：维护一个程序数据库（DB），采用岛屿模型（island model）保持多样性；每轮从DB中采样两个AF（优先选高得分和短代码），按得分升序排列作为提示，要求LLM生成一个改进版本。
  - **评估得分**：对每个候选AF，在训练函数集 \( \mathcal{G}_{\text{Tr}} \) 上运行完整BO循环，计算平均得分：  
    \[
    s_h(\mathcal{G}_{\text{Tr}}) = \frac{1}{|\mathcal{G}_{\text{Tr}}|} \sum_{j} \left[ \left(1 - \frac{g_j(x^*_j) - y^*_j}{g_j(x^{t=0}_j) - y^*_j}\right) + \left(1 - \frac{T_{h,j}}{T}\right) \right]
    \]  
    第一项衡量找到的最优值与真实最优值的差异，第二项衡量收敛速度（使用多少回合找到最优）。
  - **输出选择**：在训练集上得分前20%的AF中，选择在验证集 \(\mathcal{G}_{\text{V}}\) 上表现最好的一个作为最终结果。
- **算法流程**：初始化DB（包含初始AF和分数）→ 每步采样两个AF构建LLM提示 → LLM生成一批新AF → 对每个正确AF计算得分 → 添加至DB并更新岛屿 → 重复直至时间预算（T=48h）→ 输出最终AF。

## 3. 实验设计

- **使用的数据集/场景**：
  - **OOD-Bench（跨函数类泛化）**：训练集包括Ackley, Levy, Schwefel（一维），验证集为Rosenbrock（一维）；测试集包括9个不同的合成函数（Sphere, Styblinski-Tang, Weierstrass, Beale, Branin, Michalewicz, Goldstein-Price, Hartmann 3D/6D），且额外扩展了50个缩放平移实例。
  - **ID-Bench（同函数类内泛化）**：Branin, Goldstein-Price, Hartmann (d=3)三个函数类，各生成25个训练实例（缩放平移），5个验证，100个测试。
  - **HPO-ID（超参数优化）**：RBF-SVM和AdaBoost超参数优化（d=2），使用HyLAP提供的损失数据，35个数据集训练，15个测试。
  - **GPs-ID（高斯过程样本类）**：从RBF核GP先验采样25个函数（d=3）训练，测试d=3和d=4各100个样本。
  - **Few-shot**：以GPs-ID实验发现的AF为基础，用5个Ackley实例快速适应，测试100个Ackley实例。
- **Benchmark和对比方法**：通用AF（EI、UCB、Probability of Improvement、Posterior Mean、Random Search）、元学习AF（MetaBO）、少样本AF（FSAF）。均保持一致的GP超参数、初始设计、评估网格。
- **实验充分性**：共进行了5大类实验（OOD、ID、HPO、GPs、Few-shot），覆盖跨函数类与同函数类、高维/低维、HPO真实任务。每个实验均统计均值和标准差（来源为测试函数间差异）。实验条件控制严格，对比方法均采用官方代码并调整至公平状态。

## 4. 资源与算力

- 论文未明确说明具体GPU型号与数量。
- 提到了实验配置：使用5个Codey LLM实例运行于TPU集群，100个CPU评估器并行评分，每轮实验时间预算T=48小时。FunBO整体单轮实验（包括LLM采样和BO评估）在高性能计算集群上耗时约2天。

## 5. 实验数量与充分性

- **数量**：共包含
  - OOD-Bench：9个测试函数 + 扩展50×9实例。
  - ID-Bench：3个函数类 × 100个测试实例。
  - HPO-ID：2个任务 × 15个测试数据集。
  - GPs-ID：2种维度（d=3,4）各100样本。
  - Few-shot：5个训练实例 → 100测试实例。
- **消融**：通过对比FunBO发现的AF与通用AF、元学习AF，以及将OOD-Bench发现的AF在ID场景下测试，验证了泛化性。
- **充分性与公平性**：实验采用了固定Sobol网格、离线调优的GP超参数、相同初始设计（包含函数最大值点），排除了AF优化和代理模型差异的干扰。此外，附录D.6还使用BoTorch标准管道（随机初始点、每轮重拟合GP）复现了结果。实验设计客观公平。

## 6. 论文的主要结论与发现

- FunBO能自动发现简洁、可解释的AF代码，这些AF在跨函数类（OOD）和同函数类（ID）场景下均显著优于或相当MI、UCB等通用AF。
- 与基于神经网络的元学习AF（MetaBO）相比，FunBO在多数任务中性能相当或更优，且输出代码可直接部署，无需额外训练。
- 少样本适应场景下，FunBO仅用5个实例即可找到比FSAF更好的AF。
- 发现的AF具有明确数学形式（例如OOD-Bench中为EI+UCB混合，GPs-ID中为(EI^2)/(1+(z/beta)^2 * sqrt(var))^2），可解释性强，有助于理解其探索-利用策略。
- 泛化性能：OOD-Bench中发现的AF在8个不同类别的测试函数上表现稳定，说明FunBO能发现真正通用的AF。

## 7. 优点

- **自动化发现**：无需人工设计AF，通过LLM和进化搜索自动得到高性能代码。
- **可解释性**：输出的AF为Python代码，数学本质清晰，避免了神经网络黑箱。
- **部署简易**：代码可一键集成到现有BO库，无需额外训练或参数调整。
- **泛化性强**：不仅在同函数类内表现好，跨函数类也能取得稳定改善。
- **灵活性**：可调整输入、加入先验知识，扩展到多目标、噪声、约束等场景。
- **可控性**：通过初始AF、提示设计和得分函数引导搜索方向。

## 8. 不足与局限

- **计算开销大**：每次候选AF评估需运行完整BO循环，训练集函数数量有限时成本高；整体搜索过程需大量LLM采样和CPU计算，实际应用门槛高。
- **方差高**：LLM输出和进化过程的随机性导致不同运行间结果波动大，需多次重复才能稳定复现。
- **评估集依赖**：训练函数集G的选择对最终AF质量影响大，在目标函数与G差异极大时可能失效。
- **实验覆盖局限**：仅考虑了单输出、GP代理模型、无噪声场景；未验证多目标、带约束、噪声、多保真等实际复杂情形。
- **评分函数简单**：式(1)仅关注最终最优值和收敛回合数，未能全面刻画搜索路径质量，可能存在偏差。
- **可扩展性**：对于高维（d>6）或非常复杂的函数，当前实验不足，且BO网格点数量指数增长。
- **资源消耗**：虽未具体说明GPU型号，但一次实验需48小时和多个TPU/CPU核，可重复性有待进一步提高。

（完）
