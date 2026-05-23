---
title: Large Language Model-driven Large Neighborhood Search for Large-Scale MILP Problems
title_zh: 大语言模型驱动的大邻域搜索用于大规模混合整数线性规划
authors: "Huigen Ye, Hua Xu, An Yan, Yaoyang Cheng"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=teUg2pMrF0"
tags: ["query:automatic-discovery"]
score: 8.0
evidence: 大模型驱动的启发式搜索用于自动发现策略
tldr: 用大模型自动选择搜索邻域，发现高效策略以解决大规模MILP。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 现有大邻域搜索的邻域选择依赖专家知识或高计算成本，难以扩展。
method: 提出双层自进化大模型代理，自动选择搜索邻域并进行策略发现。
result: 在小规模数据上学习到的策略能有效泛化到大规模问题。
conclusion: 大模型驱动的自动邻域选择显著提升了大邻域搜索的可扩展性和效果。
---

## Abstract
Large Neighborhood Search (LNS) is a widely used method for solving large-scale Mixed Integer Linear Programming (MILP) problems. The effectiveness of LNS crucially depends on the choice of the search neighborhood. However, existing strategies either rely on expert knowledge or computationally expensive Machine Learning (ML) approaches, both of which struggle to scale effectively for large problems. To address this, we propose LLM-LNS, a novel Large Language Model (LLM)-driven LNS framework for large-scale MILP problems. Our approach introduces a dual-layer self-evolutionary LLM agent to automate neighborhood selection, discovering effective strategies with scant small-scale training data that generalize well to large-scale MILPs. The inner layer evolves heuristic strategies to ensure convergence, while the outer layer evolves evolutionary prompt strategies to maintain diversity. Experimental results demonstrate that the proposed dual-layer agent outperforms state-of-the-art agents such as FunSearch and EOH. Furthermore, the full LLM-LNS framework surpasses manually designed LNS algorithms like ACP, ML-based LNS methods like CL-LNS, and large-scale solvers such as Gurobi and SCIP. It also achieves superior performance compared to advanced ML-based MILP optimization frameworks like GNN&GBDT and Light-MILPopt, further validating the effectiveness of our approach.

---

## 论文详细总结（自动生成）

# 论文详细总结

## 1. 核心问题与整体含义（研究动机和背景）

- **问题**：大规模混合整数线性规划（MILP）问题求解困难，尤其是当问题规模达到百万级变量和约束时。Large Neighborhood Search（LNS）是常用方法，但其性能高度依赖邻域选择策略。
- **现有方法局限**：
  - 手工设计的LNS需要专家知识，且难以适应新问题。
  - 基于机器学习（如强化学习、模仿学习）的LNS方法需要大量计算资源或高质量标注数据，收敛慢，在大规模问题上难以扩展。
- **本文动机**：利用大语言模型（LLM）的预训练知识和推理能力，自动生成和进化邻域选择策略，以少量小规模数据训练、泛化到大规模问题，避免冷启动和昂贵训练。

## 2. 论文提出的方法论

### 核心思想
- 提出 **LLM-LNS** 框架，核心是一个**双层自进化LLM代理**，自动生成并优化LNS的邻域选择策略。
- 内层（Inner Layer）进化启发式策略（含自然语言描述和代码），侧重收敛；外层（Outer Layer）进化提示策略，引导LLM生成多样性启发式，避免早熟。
- 引入**差分记忆（Differential Memory）** 机制，将父策略的适应度反馈回LLM，使其学习从低效到高效的进化方向，加速优化。

### 关键技术细节
- **内层进化**：初始启发式由LLM根据小规模训练问题结构生成，然后每一代通过选择父策略、结合外层提供的进化提示（交叉/变异），由LLM生成子策略；用适应度（目标函数值）评估，保留最优。
- **外层进化**：初始提示策略为手工编写的交叉/变异指令。当内层连续t代无改进时，触发外层提示进化：根据已有提示的表现，由LLM生成新的提示策略，并淘汰低效提示，保持多样性。
- **差分记忆**：每一代提供给LLM一组〈策略-想法-适应度〉元组，让LLM分析高低适应度策略间的差异，指导生成新的策略。形式化：`H^{(t+1)} = M(p_meta ∥ S(t))`，其中`p_meta`包含学习指令`p_learn`和进化提示`p_evo`。
- **应用**：进化出的最佳启发式用于**自适应大邻域搜索（ALNS）**。ALNS每轮用LLM代理对所有决策变量打分，选择top-k变量构成邻域求解子问题，并动态调整邻域大小（根据改进幅度和时间）。

### 算法流程（文字描述）
1. 初始化：用LLM生成初始启发式种群和手工提示种群。
2. 外层循环：固定当前提示，内层循环进化启发式（生成、评估、选择）。
3. 若内层适应度长期停滞，则进化提示策略（生成、评估、修剪）。
4. 最终选择最佳启发式，应用于大规模测试问题上的ALNS过程。

## 3. 实验设计

### 数据集/场景
- **启发式生成任务**：
  - **在线装箱（Online Bin Packing）**：Weibull分布，物品数1k~10k，容量100/500。
  - **旅行商问题（TSP）**：TSPLib实例（如rd100, bier127等）。
- **大规模MILP问题**：
  - **Set Covering (SC)**：最小化，变量/约束20万~2000万。
  - **Minimum Vertex Cover (MVC)**：最小化，变量10万~1000万。
  - **Maximum Independent Set (MIS)**：最大化。
  - **Mixed Integer Knapsack Set (MIKS)**：最大化。
  - 小规模（训练）为大规模（测试）的1%规模，测试规模达百万级。

### Benchmark与对比方法
- **启发式生成**：First Fit, Best Fit, FunSearch, EOH, AM, POMO, LEHD, OR-Tools等。
- **大规模MILP**：
  - 传统LNS：Random-LNS, ACP
  - 学习型LNS：CL-LNS
  - 求解器：Gurobi, SCIP
  - 高级ML框架：GNN&GBDT, Light-MILPopt
  - 子求解器统一用Gurobi或SCIP以公平比较。

### 评价指标
- 目标函数值（越小/越大越好）
- 原始积分（Primal Integral，综合收敛速度）
- 收敛曲线（Objective vs Time）

## 4. 资源与算力

- 论文**未明确说明**使用的GPU型号、数量、训练总时长。
- 仅提及LLM模型使用 **GPT-4o-mini**（同设置下也实验了GPT-4o、DeepSeek、Gemini等），进化迭代次数为20（装箱）或10（TSP），种群规模20或10。
- 训练阶段（小规模数据）的计算开销未量化，但推理阶段（大规模测试）使用了Gurobi或SCIP作为子求解器。

## 5. 实验数量与充分性

- **实验数量**：涵盖两大部分（启发式生成 + 大规模MILP），每部分多个数据集/场景，总计约20+组对比表，以及消融实验、鲁棒性实验、收敛曲线分析。
- **充分性与公平性**：
  - 对比方法全面，包括SOTA（FunSearch, EOH, GNN&GBDT等）。
  - 消融实验验证了双层结构和差分记忆的有效性（表13）。
  - 多次运行（3次）报告标准差/误差条，显示稳定性。
  - 训练集与测试集规模不同，验证泛化能力。
  - 子求解器统一使用Gurobi或SCIP，确保公平。
- **客观性**：实验设计合理，结果清晰支持结论。但可能存在超参数调优的偏向，因为所有方法在同一时间限制下比较，但不同方法对超参数敏感。

## 6. 论文的主要结论与发现

- LLM-LNS在**启发式生成任务**（装箱、TSP）上显著优于FunSearch、EOH等SOTA方法：装箱平均超出率1.63% vs 2.09%（EOH）；TSP平均差距0.08% vs 0.16%（EOH）。
- 在**大规模MILP问题**上，LLM-LNS在所有实例上取得最优（或接近最优）目标值，并具有最快的收敛速度和最小的原始积分，超越手工LNS、学习型LNS、求解器以及高级ML框架。
- 表明LLM驱动的自动化邻域选择策略能从**少量小规模数据**泛化到大问题，解决了现有方法的扩展性瓶颈。
- 双层自进化+差分记忆机制有效平衡探索与利用，避免早熟。

## 7. 优点

- **创新性**：首次将LLM与双层自进化框架结合用于LNS邻域选择，引入差分记忆实现方向性进化。
- **有效性**：在多个基准和现实规模问题中取得SOTA性能。
- **泛化性**：小样本训练即可推广到大规模问题，降低训练成本。
- **自动化**：无需手工设计策略或大规模标注数据，减少人力。
- **可解释性**：论文展示了进化路径（图2、附录D），说明策略如何逐步改进，增强可信度。
- **鲁棒性**：多次运行结果稳定，对LLM模型（GPT-4o-mini, DeepSeek等）有一定鲁棒性。

## 8. 不足与局限

- **计算资源未详述**：未报告具体GPU算力消耗，实际应用中LLM调用可能仍昂贵。
- **实验覆盖偏差**：主要验证了4类MILP问题（SC、MVC、MIS、MIKS），未涉及更广泛的工业问题（如调度、网络流）或非线性/动态优化。
- **依赖LLM质量**：性能受LLM能力影响（如Llama-3.1-70B表现较差），框架可能对模型有选择性。
- **超参数敏感性**：邻域大小、进化代数、种群大小等需手动设定，未系统讨论最优设置。
- **公平性讨论缺失**：未分析对比方法是否经过充分调优，可能引入比较偏差。
- **可复现性**：虽然开源了代码，但LLM调用（API或本地部署）可能因版本不同产生差异。
- **启发式生成任务**：TSP和装箱问题规模相对较小，大规模MILP的启发式生成与真实应用仍有差距。

（完）
