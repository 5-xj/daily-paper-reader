---
title: "FunBO: Discovering Acquisition Functions for Bayesian Optimization with FunSearch"
title_zh: FunBO：利用FunSearch发现贝叶斯优化的采集函数
authors: "Virginia Aglietti, Ira Ktena, Jessica Schrouff, Eleni Sgouritsa, Francisco Ruiz, Alan Malek, Alexis Bellot, Silvia Chiappa"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=XjbJR9374o"
tags: ["query:automatic-discovery"]
score: 10.0
evidence: 基于LLM的方法自动发现采集函数数学表达式
tldr: FunBO利用大模型自动发现贝叶斯优化的采集函数
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-001.webp\", \"caption\": \"\", \"page\": 4, \"index\": 1, \"width\": 1214, \"height\": 1249}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-002.webp\", \"caption\": \"\", \"page\": 5, \"index\": 2, \"width\": 2423, \"height\": 1468}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-003.webp\", \"caption\": \"\", \"page\": 6, \"index\": 3, \"width\": 2370, \"height\": 1039}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-004.webp\", \"caption\": \"\", \"page\": 6, \"index\": 4, \"width\": 2369, \"height\": 870}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-005.webp\", \"caption\": \"\", \"page\": 7, \"index\": 5, \"width\": 2357, \"height\": 1825}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-006.webp\", \"caption\": \"\", \"page\": 7, \"index\": 6, \"width\": 2357, \"height\": 1825}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-007.webp\", \"caption\": \"\", \"page\": 7, \"index\": 7, \"width\": 2357, \"height\": 1825}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-008.webp\", \"caption\": \"\", \"page\": 8, \"index\": 8, \"width\": 2357, \"height\": 1468}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-009.webp\", \"caption\": \"\", \"page\": 8, \"index\": 9, \"width\": 2423, \"height\": 1566}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-010.webp\", \"caption\": \"\", \"page\": 8, \"index\": 10, \"width\": 2290, \"height\": 1566}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-011.webp\", \"caption\": \"\", \"page\": 17, \"index\": 11, \"width\": 2423, \"height\": 1768}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-012.webp\", \"caption\": \"\", \"page\": 17, \"index\": 12, \"width\": 2423, \"height\": 1768}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-013.webp\", \"caption\": \"\", \"page\": 17, \"index\": 13, \"width\": 2357, \"height\": 1825}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-014.webp\", \"caption\": \"\", \"page\": 17, \"index\": 14, \"width\": 2357, \"height\": 1825}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-015.webp\", \"caption\": \"\", \"page\": 17, \"index\": 15, \"width\": 2357, \"height\": 1825}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-016.webp\", \"caption\": \"\", \"page\": 20, \"index\": 16, \"width\": 2423, \"height\": 1866}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-017.webp\", \"caption\": \"\", \"page\": 20, \"index\": 17, \"width\": 2423, \"height\": 1866}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-018.webp\", \"caption\": \"\", \"page\": 21, \"index\": 18, \"width\": 2290, \"height\": 1865}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-019.webp\", \"caption\": \"\", \"page\": 21, \"index\": 19, \"width\": 2290, \"height\": 1865}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-020.webp\", \"caption\": \"\", \"page\": 23, \"index\": 20, \"width\": 1492, \"height\": 1120}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-021.webp\", \"caption\": \"\", \"page\": 23, \"index\": 21, \"width\": 1786, \"height\": 1328}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-022.webp\", \"caption\": \"\", \"page\": 23, \"index\": 22, \"width\": 1522, \"height\": 1121}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-023.webp\", \"caption\": \"\", \"page\": 23, \"index\": 23, \"width\": 751, \"height\": 565}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-024.webp\", \"caption\": \"\", \"page\": 23, \"index\": 24, \"width\": 1761, \"height\": 1328}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-025.webp\", \"caption\": \"\", \"page\": 23, \"index\": 25, \"width\": 1819, \"height\": 1324}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-026.webp\", \"caption\": \"\", \"page\": 23, \"index\": 26, \"width\": 1805, \"height\": 1324}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-027.webp\", \"caption\": \"\", \"page\": 23, \"index\": 27, \"width\": 1525, \"height\": 1124}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-028.webp\", \"caption\": \"\", \"page\": 23, \"index\": 28, \"width\": 1520, \"height\": 1119}]"
motivation: 采集函数设计依赖于手动调整，缺乏自动化方法。
method: 基于FunSearch框架，使用LLM生成并评估多种采集函数代码。
result: 发现了多种优于传统设计的采集函数。
conclusion: LLM可有效用于自动发现数学优化中的关键公式。
---

## Abstract
The sample efficiency of Bayesian optimization algorithms depends on carefully crafted acquisition functions (AFs) guiding the sequential collection of function evaluations. The best-performing AFs can vary significantly across optimization problems, often requiring ad-hoc and problem-specific choices. This work tackles the challenge of designing novel AFs that perform well across a variety of experimental settings. Based on FunSearch, a recent work using Large Language Models (LLMs) for discovery in mathematical sciences, we propose FunBO, an LLM-based method that can be used to learn new AFs written in computer code by leveraging access to a number of evaluations for a limited set of objective functions. We provide the analytic expression of all discovered AFs and evaluate them on various global optimization benchmarks and hyperparameter optimization tasks. We show how FunBO identifies AFs that generalize well both in and out of the training distribution of functions, thus outperforming established general-purpose AFs and achieving competitive performance against AFs that are customized to specific function types and are learned via transfer-learning algorithms.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：贝叶斯优化（BO）的效率高度依赖于采集函数（Acquisition Function, AF）的设计。传统通用AF（如EI、UCB、PoI）在不同优化问题上表现差异显著，需要人工根据问题特点进行选择或调整；而基于神经网络的元学习AF虽然能针对特定函数类进行定制，但缺乏可解释性，且泛化到分布外（OOD）函数时性能不佳。
- **核心问题**：如何自动发现一类性能优异、可解释、易部署且能同时适用于分布内和分布外函数的采集函数。
- **整体含义**：本文提出FunBO，利用大型语言模型（LLM）结合FunSearch框架，在代码空间中搜索并演化出新的AF。该方法输出的AF以Python代码形式呈现，兼具可解释性、可部署性和泛化能力。

### 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：将AF发现问题转化为**算法发现问题**，借助LLM生成和演化AF的Python代码，通过完整的BO循环评估候选AF在辅助函数集上的表现，并迭代优化。
- **关键技术细节**：
  - **初始AF**：采用EI作为初始程序，其输入包括预测均值、预测方差、当前最优值（incumbent）和超参数beta，返回下一个评估点的索引。
  - **Prompt构造**：从程序数据库（DB）中采样两个已有的AF（按得分排序），将其代码放入prompt中，要求LLM生成一个改进的版本。
  - **评估与评分**：对每个候选AF，在训练函数集G<sub>Tr</sub>上执行完整的BO循环（固定GP模型、Sobol网格、初始设计），计算得分s<sub>h</sub>(G<sub>Tr</sub>)：
    ```
    s = 1/|G_Tr| * Σ_j [ (1 - |f_j(x*_j,h) - y*_j| / |f_j(x^(t=0)_j) - y*_j|) + (1 - T_hj / T) ]
    ```
    第一项衡量最终最优值与真实最优值的接近程度，第二项衡量找到最优值所需的试次比例。
  - **程序数据库（DB）**：采用岛屿模型（island model）维护多个独立进化的种群，每个岛内按得分聚类；采样时优先选高得分和短程序；每4小时丢弃低分岛并重新播种。
  - **算法流程**：初始化DB（含初始AF）；循环直到时间预算T：从DB采样两个程序→生成prompt→从LLM获取B个样本→对每个正确程序在G<sub>Tr</sub>上评分→加入DB并更新→结束；返回在G<sub>Tr</sub>上得分前20%且在验证集G<sub>V</sub>上得分最高的AF。

### 3. 实验设计：使用了哪些数据集 / 场景，它的 benchmark 是什么，对比了哪些方法

- **实验场景**：共四类实验，全面评估泛化能力：
  1. **OOD-Bench**（跨函数类泛化）：训练集G<sub>Tr</sub>包含Ackley、Levy、Schwefel（一维），验证集G<sub>V</sub>用Rosenbrock（一维）；测试集F包含9个不同函数（Sphere、Styblinski-Tang、Weierstrass、Beale、Branin、Michalewicz、Goldstein-Price、Hartmann 3D/6D），维度从1到6不等。
  2. **ID-Bench**（同函数类内泛化）：对Branin、Goldstein-Price、Hartmann（3D）分别训练，每类用25个缩放平移实例（5个验证），测试100个同类实例。
  3. **HPO-ID**（超参数优化任务）：优化SVM和AdaBoost的损失函数（d=2），使用35个数据集训练，15个测试。
  4. **GP-ID**（通用函数类）：从GP prior（RBF核，长度尺度[0.05,0.5]）采样25个函数（d=3）训练，测试100个d=3和d=4的样本。
  5. **FEW-SHOT**（少样本快速适应）：使用GP-ID发现的AF作为初始，仅用5个Ackley实例（缩放平移）微调，测试100个Ackley实例。
- **Benchmark**：所有实验使用Sobol网格离散化AF优化、GP（零均值+RBF核）、固定超参数（离线调优），初始设计包含网格上最差点。
- **对比方法**：
  - 通用AF：EI、UCB（β=1）、PoI、MEAN、Random Search。
  - 元学习AF：MetaBO（Volpp et al., 2020）、FSAF（Hsieh et al., 2021）。
  - 额外对比：OOD-Bench中找到的AF在ID任务上的迁移表现。

### 4. 资源与算力：如果文中有提到，请总结使用了多少算力（GPU 型号、数量、训练时长等）。若未明确说明，也请指出这一点。

- **明确说明**：使用Codey（基于PaLM 2的代码LLM）生成AF；5个Codey实例在TPU集群上运行；评分阶段使用100个CPU evaluators per LLM instance；每个FunBO实验运行48小时（T=48 hrs），batch size B=12，岛屿数N<sub>DB</sub>=10。
- **未说明**：具体GPU/TPU型号、总GPU小时数、内存需求等未详细列出，但指出整体成本可能较高。

### 5. 实验数量与充分性：大概做了多少组实验（如不同数据集、消融实验等），这些实验是否充分、是否客观、公平。

- **实验数量**：
  - OOD-Bench：1组训练（3个函数+1个验证），测试9个不同函数；额外扩展测试（每个函数50个缩放平移实例，共450个）。
  - ID-Bench：3个函数类，每类训练25个实例，测试100个实例。
  - HPO-ID：2个任务（SVM、AdaBoost），各训练35个数据集，测试15个。
  - GP-ID：d=3训练，测试d=3和d=4各100个样本。
  - FEW-SHOT：1组训练（5个实例），测试100个实例。
- **充分性**：覆盖了跨函数类、同函数类、HPO、通用GP、少样本等多种场景，测试函数维度从1到6，尺度多样。对比了通用AF、最先进的元学习AF，并进行了BoTorch标准流水线验证（附录D.6）。实验设计控制变量（相同GP超参数、初始设计、网格），确保公平比较。
- **客观性**：所有结果以平均归一化简单后悔（¯R<sub>t</sub>）呈现，误差带表示跨测试函数的性能变异（而非多次运行）。随机搜索在某些函数上表现好，作者对此进行了合理解释。

### 6. 论文的主要结论与发现

- FunBO发现的AF在**跨函数类泛化（OOD）** 上显著优于所有通用AF（EI、UCB等），并接近/达到元学习AF在分布内的性能。
- 在**同函数类（ID）** 场景中，FunBO的AF与MetaBO性能相当或更优，且代码简短可解释（例如Goldstein-Price的AF = σ²(x)·Φ((y*-μ)/σ)）。
- 在**HPO任务**中，FunBO在AdaBoost上明显优于所有对比方法，在SVM上与MetaBO持平。
- 在**GP函数类**中，FunBO在d=4上优于EI和MetaBO，在d=3上匹配EI。
- **少样本适应**：仅用5个实例即可快速调整，性能超越FSAF和所有通用AF。
- 所有发现的AF均以简洁的Python代码形式呈现，可直接集成到BO管线，且具有明确数学表达式。

### 7. 优点：方法或实验设计上有哪些亮点

- **创新性**：将AF发现转化为程序搜索问题，利用LLM的编程能力和先验知识，自动生成可解释、可部署的AF。
- **泛化能力**：首次在同一方法中同时证明了对分布内和分布外函数的优异性能，填补了通用AF与定制AF之间的鸿沟。
- **可解释性**：输出的AF为可读代码，易于理解和调试，远优于神经网络黑盒AF。
- **灵活性**：可扩展至不同代理模型、多目标、噪声等场景（未来工作），支持少样本快速适应。
- **实验设计严谨**：控制所有混杂因素（GP超参数、初始设计、网格离散化），在多个场景系统评估，并与SOTA元学习方法公平对比。

### 8. 不足与局限：包括实验覆盖、偏差风险、应用限制等

- **计算开销**：每个候选AF需在完整BO循环中评分，训练集G越大开销越高，限制了扩展性。但一次搜索后即可重复使用。
- **依赖LLM质量**：发现AF的性能受LLM（Codey）能力影响，且存在随机性，泛化良好的AF可能需要多次运行（文中提到OOD-Bench需多次尝试）。
- **评分准则简单**：Eq.(1)只考虑最终最优值距离和发现速度，未完全刻画收敛路径，可能忽略更优的探索策略。
- **代理模型局限**：所有实验使用相同GP（零均值+RBF核），发现的AF可能过拟合于该代理模型；若换用其他模型（如Matern、Deep GP）需重新搜索。
- **无噪声场景**：论文假设无噪声观测，实际应用常含噪声，需额外处理。
- **横向对比不足**：未与更多近期自动化AF方法（如Yao et al., 2024）比较，也未在更大规模HPO基准（如NAS-Bench）上测试。

（完）
