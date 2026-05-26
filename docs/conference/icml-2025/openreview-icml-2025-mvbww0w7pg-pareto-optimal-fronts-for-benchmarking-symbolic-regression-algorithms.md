---
title: Pareto-Optimal Fronts for Benchmarking Symbolic Regression Algorithms
title_zh: 用于符号回归算法基准测试的帕累托最优前沿
authors: "Kei Sen Fong, Mehul Motani"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=mvbWw0w7pG"
tags: ["query:sr"]
score: 9.0
evidence: 符号回归算法基准测试
tldr: 该论文针对符号回归算法评估中缺乏绝对参考的问题，提出了绝对帕累托最优（APO）解的概念，用于衡量算法在预测性能和表达式长度之间的最优权衡。通过理论分析和实验，展示了APO前沿作为基准的可行性，为符号回归算法的公平比较提供了新标准。该工作直接服务于符号回归知识发现领域的方法评估。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-mvbww0w7pg/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 771, \"height\": 755, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-mvbww0w7pg/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1723, \"height\": 621, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-mvbww0w7pg/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1716, \"height\": 586, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-mvbww0w7pg/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1664, \"height\": 1781, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-mvbww0w7pg/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1747, \"height\": 667, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-mvbww0w7pg/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1747, \"height\": 690, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-mvbww0w7pg/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1698, \"height\": 585, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-mvbww0w7pg/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1780, \"height\": 1032, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-mvbww0w7pg/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1242, \"height\": 1579, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-mvbww0w7pg/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1341, \"height\": 2215, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-mvbww0w7pg/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1248, \"height\": 645, \"label\": \"Table\"}]"
motivation: 现有符号回归评估只能进行相对比较，缺乏对算法效率上限的认识。
method: 提出绝对帕累托最优前沿，作为最佳预测精度与表达式长度权衡的基准。
result: 展示了APO前沿的构造方法及其在多种数据集上的应用。
conclusion: 为符号回归算法提供了更科学的评估标准。
---

## Abstract
Symbolic Regression (SR) algorithms select expressions based on prediction performance while also keeping the expression lengths short to produce explainable white box models. In this context, SR algorithms can be evaluated by measuring the extent to which the expressions discovered are Pareto-optimal, in the sense of having the best R-squared score for a given expression length. This evaluation is most commonly done based on relative performance, in the sense that an SR algorithm is judged on whether it Pareto-dominates other SR algorithms selected in the analysis, without any indication on efficiency or attainable limits. In this paper, we explore absolute Pareto-optimal (APO) solutions instead, which have the optimal tradeoff between the multiple SR objectives, for 34 datasets in the widely-used SR benchmark, SRBench, by performing exhaustive search. Additionally, we include comparisons between eight numerical optimization methods. We extract, for every dataset, an APO front of expressions that can serve as a universal baseline for SR algorithms that informs researchers of the best attainable performance for selected sizes. The APO fronts provided serves as an important benchmark and performance limit for SR algorithms and is made publicly available at: https://github.com/kentridgeai/SRParetoFronts

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：当前符号回归（Symbolic Regression, SR）算法的评估主要依赖于**相对帕累托最优**（即与其他算法比较是否占优），这种评估缺乏对算法**效率上限**和**绝对可达性能**的指示，且结论可能因选择的对比算法集不同而出现矛盾（如“排名倒置悖论”）。
- **研究动机**：为SR领域提供**绝对基准**——即对于给定的数据集和表达式长度，穷举所有可能表达式，找出在R²分数和表达式长度之间真正最优的权衡曲线（绝对帕累托最优前沿，APO front），从而揭示现有算法离理论最优还有多远。
- **整体含义**：APO前沿可作为SR算法性能的**通用基线**和**不可逾越的性能极限**，帮助研究者客观评估算法效率，并指导未来SR算法设计（特别是搜索简单表达式的方向）。

## 2. 论文提出的方法论：核心思想、关键技术细节

### 核心思想
- 采用**基因表达式编程（GEP）** 的K-expression编码，将表达式编码为固定长度的字符串（基因组），解码后得到可变长度的数学表达式（表型组）。
- 对每个数据集，穷举所有可能的K-expression（给定最大头长 h=3 或 h=4），并优化其中的数值常量（Ephemeral Random Constants, ERCs），记录每个表达式的R²分数和长度，然后提取**绝对帕累托最优前沿**（即每个长度上R²最高的表达式，且要求较长表达式的R²严格优于较短表达式）。

### 关键技术细节
- **函数集**：{Add, Sub, Mul, Div, Pow}，所有函数元数为2。
- **操作数**：数据集特征（x_i）和数值常量（ERC，用符号R表示）。
- **K-expression结构**：头长h和尾长（由 h × (n_max − 1) + 1 决定，n_max=2），确保所有K-expression都能解码为合法表达式。
- **数值优化方法比较**：使用了8种方法优化ERC：L-BFGS-B、CG、Nelder-Mead、Powell、SLSQP、TNC、trust-constr、BFGS。每种方法对每个表达式运行一次，初始猜测在(-1,1)内随机（由随机种子控制）。
- **APO前沿提取**：对每个数据集，取所有随机种子和优化方法中每个表达式长度上的最佳R²，构建前沿。仅当较长表达式性能严格优于较短时才纳入前沿，否则该长度点空缺。

## 3. 实验设计：使用了哪些数据集/场景，benchmark，对比方法

### 数据集
- 从**SRBench**（La Cava et al., 2021）中选取了**34个数据集**（条件：样本数<1000，特征数<10）。对于头长h=4，进一步限制特征数≤6（最终30个数据集）。
- 数据集涵盖物理、材料、健康等领域，包括合成数据（Friedman系列）和真实数据（如cloud, vineyard, cpu等）。

### Benchmark
- 以**APO前沿**作为绝对基准，与SRBench中已有的**14种SR算法**进行对比：AFP、AFP FE、AIFeynman、BSR、DSR、EPLEX、FEAT、FFX、GP-GOMEA、ITEA、MRGP、Operon、SBP-GP、gplearn。
- 对比指标：R²分数 vs 表达式长度（实际数值，而非排名）。

### 对比方法
- 除了上述14种SR算法外，还单独比较了**8种数值优化方法**在构造APO前沿中的表现（Powell、CG、trust-constr、L-BFGS-B、BFGS、TNC、SLSQP、Nelder Mead）。

## 4. 资源与算力

- 论文明确说明：**总计算资源为1,480,000核·小时**（core-compute-hours）。
- 硬件来源：新加坡国家超算中心（NSCC）。
- 具体配置（GPU型号、数量、训练时长等）未详细说明，但指明计算量用于穷举搜索（头长h=3对34个数据集运行10个随机种子，头长h=4对30个数据集运行1个随机种子），以及8种优化方法对每个K-expression的独立运行。

## 5. 实验数量与充分性

- **主要实验数量**：
  - 穷举搜索：头长h=3时，对34个数据集×10个随机种子×8种优化方法 → 总计约2720个组合（每个组合包含大量K-expression）；头长h=4时，30个数据集×1种子×8方法。
  - 每个数据集上的APO前沿表达式数量因表达式长度而异（通常5个左右）。
- **充分性评价**：
  - **优点**：穷举搜索保证了对于给定函数集和头长，APO前沿是**真实最优**（除数值优化可能陷入局部最优外）。随机种子覆盖10个，且比较了8种优化方法，降低了单一种子/方法的偏差。
  - **局限性**：函数集仅限于5种二元运算，未包含更多初等函数（如sin, cos, exp等）；头长最大为4，限制了表达式复杂度；数值优化不能保证全局最优，但通过多随机种子和多种优化器缓解。
  - **客观公平**：与SRBench的14种算法对比时，使用实际R²和长度而非排名，避免了排名倒置问题；同时按数据集单独分析，避免了聚合丢失信息。

## 6. 论文的主要结论与发现

- **发现#1**：现有SR算法**远未接近APO前沿**。除SBP-GP外，大多数算法在短表达式上R²明显低于APO，说明当前算法未能充分探索短表达空间。
- **发现#2**：从穷举空间中随机采样，**超过85%的数据集上，R²处于最高区间（接近APO）的表达式占比不到1%**，说明简单随机搜索很难找到高质量短表达式。
- **发现#3**：关于表达式的“损失景观”，平均约**23.7%** 的距APO表达式两步突变的结构可以通过贪婪突变回到APO，表明APO表达式周围存在一定的可达性，但部分数据集可达性极低（如0%）。
- **发现#4**：不同数值优化方法对最终APO前沿的**影响不大**，R²分布高度相似。在APO前沿表达式中，Powell方法出现频率最高（32.1%），而常用BFGS仅占9.41%，**BFGS并无明显优势**。
- **发现#5**：建议SR研究者重点关注**Type III和Type IV数据集**（即当前算法距APO前沿差距较大的），这些数据集的短表达式空间有待深入挖掘。
- **提出两项SR基准分析惯例**：
  - 惯例#1：使用**实际数值**（R²和长度）而非排名作为帕累托图坐标，以避免排名倒置。
  - 惯例#2：补充**逐数据集分析**，避免聚合信息丢失。

## 7. 优点：方法或实验设计上的亮点

- **绝对基准的提出**：首次为SR黑盒数据集提供绝对帕累托最优前沿，弥补了相对比较的不足，具有理论和实践双重意义。
- **穷举搜索的严谨性**：利用GEP的K-expression保证穷举覆盖所有合法结构（给定函数集和头长），避免了搜索空间不规则的问题。
- **多种数值优化方法比较**：对8种方法进行大规模实证，为SR研究者选择优化器提供了可靠参考（结论：BFGS并非最优）。
- **公开数据集和代码**：所有APO前沿数据公开，便于其他研究者直接使用，避免重复计算。
- **对现有基准分析方法的批判与改进**：明确指出排名分析和聚合分析的问题，并提出解决方案，具有方法论贡献。

## 8. 不足与局限

- **函数集有限**：仅包含5种基本运算，未包含sin, cos, exp, log等常见初等函数，限制了APO前沿的表达能力。论文提到扩展函数集会增加12.7倍计算资源。
- **表达式长度限制**：最大头长为4，因此只能覆盖较短的表达式，对于需要复杂结构才能逼近的数据集，APO前沿可能不完整。
- **数值优化非全局**：尽管采用多随机种子和多种优化器，但仍无法保证ERC全局最优，尤其在高度非凸的损失景观上。
- **数据集范围有限**：仅选用SRBench中34个数据集（样本<1000，特征<10），未涵盖更大规模或更高维的数据，可能影响结论的普适性。
- **未考虑正则化**：论文明确排除正则化（如长度惩罚），但实际问题中可能需要在训练集和测试集之间权衡。
- **计算资源消耗大**：虽然公开数据可减少重复计算，但原始搜索成本较高，后续若要扩展函数集或头长，资源需求会急剧增长。

（完）
