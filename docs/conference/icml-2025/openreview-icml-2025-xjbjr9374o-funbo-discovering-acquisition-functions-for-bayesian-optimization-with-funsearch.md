---
title: "FunBO: Discovering Acquisition Functions for Bayesian Optimization with FunSearch"
title_zh: FunBO：通过FunSearch发现贝叶斯优化的获取函数
authors: "Virginia Aglietti, Ira Ktena, Jessica Schrouff, Eleni Sgouritsa, Francisco Ruiz, Alan Malek, Alexis Bellot, Silvia Chiappa"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=XjbJR9374o"
tags: ["query:automatic-discovery"]
score: 9.0
evidence: 基于LLM的FunSearch发现贝叶斯优化获取函数
tldr: FunBO使用LLM自动发现贝叶斯优化中的新获取函数。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-001.webp\", \"caption\": \"\", \"page\": 4, \"index\": 1, \"width\": 1214, \"height\": 1249}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-002.webp\", \"caption\": \"\", \"page\": 5, \"index\": 2, \"width\": 2423, \"height\": 1468}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-003.webp\", \"caption\": \"\", \"page\": 6, \"index\": 3, \"width\": 2370, \"height\": 1039}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-004.webp\", \"caption\": \"\", \"page\": 6, \"index\": 4, \"width\": 2369, \"height\": 870}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-005.webp\", \"caption\": \"\", \"page\": 7, \"index\": 5, \"width\": 2357, \"height\": 1825}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-006.webp\", \"caption\": \"\", \"page\": 7, \"index\": 6, \"width\": 2357, \"height\": 1825}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-007.webp\", \"caption\": \"\", \"page\": 7, \"index\": 7, \"width\": 2357, \"height\": 1825}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-008.webp\", \"caption\": \"\", \"page\": 8, \"index\": 8, \"width\": 2357, \"height\": 1468}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-009.webp\", \"caption\": \"\", \"page\": 8, \"index\": 9, \"width\": 2423, \"height\": 1566}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-010.webp\", \"caption\": \"\", \"page\": 8, \"index\": 10, \"width\": 2290, \"height\": 1566}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-011.webp\", \"caption\": \"\", \"page\": 17, \"index\": 11, \"width\": 2423, \"height\": 1768}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-012.webp\", \"caption\": \"\", \"page\": 17, \"index\": 12, \"width\": 2423, \"height\": 1768}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-013.webp\", \"caption\": \"\", \"page\": 17, \"index\": 13, \"width\": 2357, \"height\": 1825}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-014.webp\", \"caption\": \"\", \"page\": 17, \"index\": 14, \"width\": 2357, \"height\": 1825}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-015.webp\", \"caption\": \"\", \"page\": 17, \"index\": 15, \"width\": 2357, \"height\": 1825}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-016.webp\", \"caption\": \"\", \"page\": 20, \"index\": 16, \"width\": 2423, \"height\": 1866}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-017.webp\", \"caption\": \"\", \"page\": 20, \"index\": 17, \"width\": 2423, \"height\": 1866}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-018.webp\", \"caption\": \"\", \"page\": 21, \"index\": 18, \"width\": 2290, \"height\": 1865}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-019.webp\", \"caption\": \"\", \"page\": 21, \"index\": 19, \"width\": 2290, \"height\": 1865}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-020.webp\", \"caption\": \"\", \"page\": 23, \"index\": 20, \"width\": 1492, \"height\": 1120}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-021.webp\", \"caption\": \"\", \"page\": 23, \"index\": 21, \"width\": 1786, \"height\": 1328}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-022.webp\", \"caption\": \"\", \"page\": 23, \"index\": 22, \"width\": 1522, \"height\": 1121}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-023.webp\", \"caption\": \"\", \"page\": 23, \"index\": 23, \"width\": 751, \"height\": 565}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-024.webp\", \"caption\": \"\", \"page\": 23, \"index\": 24, \"width\": 1761, \"height\": 1328}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-025.webp\", \"caption\": \"\", \"page\": 23, \"index\": 25, \"width\": 1819, \"height\": 1324}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-026.webp\", \"caption\": \"\", \"page\": 23, \"index\": 26, \"width\": 1805, \"height\": 1324}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-027.webp\", \"caption\": \"\", \"page\": 23, \"index\": 27, \"width\": 1525, \"height\": 1124}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-xjbjr9374o/fig-028.webp\", \"caption\": \"\", \"page\": 23, \"index\": 28, \"width\": 1520, \"height\": 1119}]"
motivation: 最优获取函数因问题而异，需要自动设计。
method: 基于FunSearch框架，使用LLM生成获取函数的代码，并通过评估进行筛选。
result: 发现了跨问题表现良好的新获取函数。
conclusion: LLM可自动发现优化中的关键数学函数。
---

## Abstract
The sample efficiency of Bayesian optimization algorithms depends on carefully crafted acquisition functions (AFs) guiding the sequential collection of function evaluations. The best-performing AFs can vary significantly across optimization problems, often requiring ad-hoc and problem-specific choices. This work tackles the challenge of designing novel AFs that perform well across a variety of experimental settings. Based on FunSearch, a recent work using Large Language Models (LLMs) for discovery in mathematical sciences, we propose FunBO, an LLM-based method that can be used to learn new AFs written in computer code by leveraging access to a number of evaluations for a limited set of objective functions. We provide the analytic expression of all discovered AFs and evaluate them on various global optimization benchmarks and hyperparameter optimization tasks. We show how FunBO identifies AFs that generalize well both in and out of the training distribution of functions, thus outperforming established general-purpose AFs and achieving competitive performance against AFs that are customized to specific function types and are learned via transfer-learning algorithms.

---

## 论文详细总结（自动生成）

# 论文《FunBO：通过FunSearch发现贝叶斯优化的获取函数》详细中文总结

## 1. 核心问题与整体含义（研究动机与背景）

- **背景**：贝叶斯优化（BO）依赖获取函数（AF）来平衡探索与利用，其样本效率高度依赖于精心设计的AF。不同优化问题的最佳AF差异很大，通常需要针对特定问题手动选择，通用型AF（如EI、UCB、PofI）或基于迁移学习的专用AF各有局限：通用AF性能波动大，专用AF泛化能力差（尤其是分布外）。
- **核心问题**：能否自动发现新的、以代码表达的AF，使其既能在训练分布内又能在分布外均表现优异，同时保持可解释性和易部署性？
- **整体含义**：本文提出FunBO，基于FunSearch框架，利用大型语言模型（LLM）在函数空间中进行演化搜索，自动生成AF的Python代码，从而突破传统AF设计的手工依赖。

## 2. 方法论：核心思想、关键技术细节与流程

### 核心思想
- 将AF学习问题建模为**算法发现问题**：以初始AF（EI）作为起点，通过LLM迭代改进其代码实现，并在有限的目标函数集上评估性能，从而搜索出更优的AF。
- 利用LLM的代码生成能力和先验知识，高效探索庞大的程序空间，同时保持AF的可解释性和易部署性（直接输出可调用的Python函数）。

### 关键技术细节
1. **初始AF**：采用Expected Improvement（EI）形式，输入包括预测均值、预测方差、当前最优值（incumbent）和超参数beta，输出为待选点索引。
2. **提示（Prompt）构建**：每一轮从程序数据库（DB）中采样两个已有的AF，按得分升序排列，要求LLM生成一个改进版本（更高分AF的改进）。
3. **评估机制**：
   - 对每个候选AF，在训练函数集G_Tr上运行完整的BO循环（固定GP模型、Sobol网格、超参数）。
   - 得分函数包含两项：最优值接近度（发现值与真实最优值的归一化差距）和收敛速度（发现最优值所需的试验比例）。
   - 得分公式：`score = [1 - (found - true)/(initial - true)] + [1 - trials_used/T]`，范围[0,2]。
4. **程序数据库（DB）**：
   - 采用岛屿模型（多个独立子种群，每个岛屿初始化含初始AF）。
   - 采样时倾向于高分和短程序；新程序加入对应岛屿的相应得分簇。
   - 每4小时淘汰最差一半岛屿并重新播种。
5. **输出**：在时间预算T内，返回验证集上得分最高的AF（若无需验证则取训练集最高分）。

### 算法流程（文字描述）
1. 初始化：设置G_Tr、G_V、岛屿数NDB、批次大小B、时间预算T；分配初始AF到每个岛屿。
2. 循环直到时间预算耗尽：
   - 从DB中采样两个程序，构建提示。
   - 从LLM获取B个新候选AF。
   - 对每个可通过编译的AF，在G_Tr上运行BO评估并计算得分。
   - 将候选AF加入DB，更新岛屿和簇。
3. 返回DB中训练集得分前20%且验证集得分最高的AF。

## 3. 实验设计：数据集/场景、基准、对比方法

### 实验场景
| 实验名称 | 训练集（G_Tr） | 验证集（G_V） | 测试集（F） | 维度 |
|----------|----------------|----------------|-------------|------|
| **OOD-Bench** | Ackley(1D), Levy(1D), Schwefel(1D) | Rosenbrock(1D) | 9个不同函数（Sphere, Styblinski-Tang, Weierstrass, Beale, Branin, Michalewicz, Goldstein-Price, Hartmann(3D/6D)） | 跨维度(1D~6D) |
| **ID-Bench** | 25个缩放平移的Branin/Goldstein-Price/Hartmann实例 | 5个实例 | 100个同类型实例 | 2D/3D |
| **HPO-ID** | 35个数据集的RBF-SVM/AdaBoost损失 | 5个数据集 | 15个数据集 | 2D |
| **GP s-ID** | 25个从GP先验（d=3, RBF核）采样的函数 | 无 | 100个新样本（d=3和d=4） | 3D/4D |
| **FEW-SHOT** | 5个缩放平移的Ackley实例（基于GP s-ID发现的AF初始化） | 无 | 100个Ackley新实例 | 2D |

### 基准方法
- **通用AF**：EI、UCB（β=1）、PofI、MEAN（后验均值）、随机搜索。
- **迁移学习AF**：MetaBO（强化学习训练的神经网络AF）、FSAF（Few-shot适应AF）。
- 对比维度：平均归一化简单遗憾（simple regret，Rt）随试验次数变化曲线，包含均值±1/2标准差（表示跨测试函数的性能变化）。

### 关键设置
- GP模型：零均值、RBF核，超参数离线调优固定；AF在Sobol网格上最大化；初始设计包含网格上最差点。
- OOD-Bench额外使用BoTorch标准管道进行稳健性验证（数值优化AF、每次重拟合GP、随机初始点）。
- 所有实验固定试验次数T（除HPO和GP-ID为20，其余为30），FunBO时间预算T=48h，B=12，NDB=10。

## 4. 资源与算力

- **LLM**：使用Codey（基于PaLM-2系列，通过Vertex AI API访问）。
- **计算资源**：
  - 5个Codey实例运行在TPU上（用于LLM采样）。
  - 100个CPU评估器（用于并行BO评估）。
  - 未明确说明TPU/CPU型号、数量、训练时长等具体信息。
- **训练成本**：未报告总计算量（如GPU小时数），仅给出时间预算48小时。论文指出由于每轮需运行完整BO循环，计算开销大，但未量化。

## 5. 实验数量与充分性

- **实验组数**：
  - 5个主要实验场景（OOD、ID、HPO、GP-ID、Few-shot），每个场景包含多个函数/数据集。
  - OOD-Bench测试了9个不同函数（含1D~6D）以及扩展测试集（每个函数50个随机缩放平移实例，共450个函数）。
  - ID-Bench和GP-ID各使用100个测试实例。
  - HPO-ID使用15个测试数据集。
- **消融实验**：未显式设计消融（如分析不同DB参数的影响、不同初始AF的影响等）。但通过OOD-Bench与ID-Bench的对比呈现了泛化能力差异。
- **充分性与公平性**：
  - 实验覆盖了分布内/外、不同维度、合成/真实任务、少样本适应等多种场景，较为全面。
  - 对比方法包括通用AF和基于学习的方法（MetaBO, FSAF），且关键设置（GP模型、优化网格、初始设计）保持一致。
  - 但未考虑噪声观测、更高维度（>6）、多目标优化等场景，且未讨论多次FunBO运行结果的稳定性（仅提及方差较高）。

## 6. 主要结论与发现

1. **FunBO发现的AF具有强泛化能力**：在OOD-Bench（跨函数类）中，发现的AF（形式为 `(incumbent - mean)*Φ(z) + σ*φ(z) + beta*σ`，即EI+UCB变体）显著优于所有通用AF，且能在多峰函数（如Weierstrass）上持续探索并收敛到全局最优。
2. **分布内性能与专用AF相当或更优**：在ID-Bench/HPO-ID/GP-ID中，FunBO发现的AF（如Goldstein-Price的AF为 `σ² * Φ(z)`；GP-ID的AF为 `EI² / (1 + (z/β)² * σ)²`）与MetaBO性能持平或更好，且无需额外输入（如试验编号、预算等）。
3. **少样本适应能力**：仅用5个目标函数实例，FunBO即可快速适应（基于GP s-ID发现的AF初始化）并超越FSAF和通用AF。
4. **可解释性与易部署性**：所有AF均以简洁的Python代码输出，可直接集成到BO库（如BoTorch），无需训练开销。
5. **通用AF的局限性得到验证**：实验中没有任何一个通用AF在所有函数上持续优于其他，证实了“No Free Lunch”特性。

## 7. 优点

- **方法创新**：将AF发现转化为LLM驱动的程序搜索，首次实现自动发现可解释的代码级AF，而非黑箱神经网络。
- **强泛化性**：发现的AF在分布外任务中依然有效，弥补了传统迁移学习方法的短板。
- **实用性强**：输出代码可立即部署（例如仅几行Python），与现有BO流程兼容，部署成本极低。
- **可解释性**：所有AF均能写出数学表达式，便于理解和分析其探索-权衡行为（如OOD-Bench的AF可视为EI+UCB）。
- **灵活扩展**：可适配不同输入/输出、约束、多保真度、噪声等场景（论文指出为未来工作）。

## 8. 不足与局限

- **计算开销大**：每个候选AF需在多个训练函数上运行完整BO循环，导致搜索阶段耗时高（论文设定48h），限制了在训练集规模大或目标函数昂贵时的扩展性。不过搜索成本可一次性摊销。
- **对LLM和超参数敏感**：LLM采样随机性及DB参数（岛屿数、淘汰频率）可能导致结果方差高，论文指出OOD-Bench需要多次FunBO运行才能找到高性能AF。
- **实验覆盖有限**：
  - 未测试高维（>6）、噪声观测、多目标、约束优化等常见BO场景。
  - 仅使用RBF核GP作为代理模型，未能验证与不同代理模型（如Matern、深层GP）的兼容性。
  - 与MetaBO/FSAF的比较限于特定代码实现（默认参数），未进行超参数敏感性分析。
- **评估指标简单**：得分函数只考虑最优值接近度和收敛速度，不关注完整收敛曲线（如积分遗憾）。
- **无消融实验**：未分析不同初始AF（如随机选择）、不同LLM（如GPT-4）、不同DB策略的影响，难以确定各组件贡献。
- **潜在偏差**：FunBO搜索依赖于初始AF（EI），可能限制探索空间；LLM的训练语料可能包含已知AF实现，可能导致偏向已知模式。
- **学术复现门槛**：未开源FunBO完整代码（仅引用FunSearch框架），且LLM依赖商业API（Vertex AI），可能影响可复现性。

（完）
