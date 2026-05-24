---
title: Large Language Model-driven Large Neighborhood Search for Large-Scale MILP Problems
title_zh: 大规模语言模型驱动的大邻域搜索用于大规模混合整数线性规划
authors: "Huigen Ye, Hua Xu, An Yan, Yaoyang Cheng"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=teUg2pMrF0"
tags: ["query:automatic-discovery"]
score: 9.0
evidence: LLM驱动的大邻域搜索，结合启发式搜索与语言模型
tldr: 提出一种LLM驱动的大邻域搜索框架，自动选择大规模MILP问题的邻域。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 大规模MILP问题的邻域选择依赖专家知识或昂贵机器学习，难以扩展。
method: 提出双层自进化LLM代理自动选择邻域策略，用小规模训练数据即可泛化到大规模问题。
result: 能发现有效策略，且泛化到大规模MILP实例。
conclusion: LLM驱动的邻域选择为大规模组合优化提供可扩展方案。
---

## Abstract
Large Neighborhood Search (LNS) is a widely used method for solving large-scale Mixed Integer Linear Programming (MILP) problems. The effectiveness of LNS crucially depends on the choice of the search neighborhood. However, existing strategies either rely on expert knowledge or computationally expensive Machine Learning (ML) approaches, both of which struggle to scale effectively for large problems. To address this, we propose LLM-LNS, a novel Large Language Model (LLM)-driven LNS framework for large-scale MILP problems. Our approach introduces a dual-layer self-evolutionary LLM agent to automate neighborhood selection, discovering effective strategies with scant small-scale training data that generalize well to large-scale MILPs. The inner layer evolves heuristic strategies to ensure convergence, while the outer layer evolves evolutionary prompt strategies to maintain diversity. Experimental results demonstrate that the proposed dual-layer agent outperforms state-of-the-art agents such as FunSearch and EOH. Furthermore, the full LLM-LNS framework surpasses manually designed LNS algorithms like ACP, ML-based LNS methods like CL-LNS, and large-scale solvers such as Gurobi and SCIP. It also achieves superior performance compared to advanced ML-based MILP optimization frameworks like GNN&GBDT and Light-MILPopt, further validating the effectiveness of our approach.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）
论文聚焦于大规模混合整数线性规划（MILP）问题的求解。MILP是NP-hard问题，随着问题规模增大，精确算法（如分支定界）计算代价过高，启发式方法（如大邻域搜索，LNS）成为主流。LNS的性能高度依赖邻域选择策略，但现有策略要么依赖专家手工设计（费力且缺乏适应性），要么使用机器学习（如强化学习收敛慢，模仿学习需要大量标注数据），都难以有效扩展到超大规模实例。论文旨在利用大语言模型（LLM）的预训练知识和推理能力，自动生成高质量的邻域选择策略，仅需少量小规模训练数据即可泛化至大规模问题，从而解决冷启动和扩展性难题。

### 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程
**核心思想**：提出LLM-LNS框架，将LLM与进化算法结合，设计了一个**双层自进化LLM代理**，自动生成并优化LNS的邻域选择策略。外层负责进化**提示策略**（prompt strategies）以维持种群多样性；内层负责进化**启发式策略**（heuristic strategies）以加速收敛。同时引入**差分记忆机制**，利用父代策略的适应度差异指导LLM生成更优的子代策略。

**关键技术细节**：
- **双层结构**：
  - **内层（Heuristic Strategy Evolution）**：初始启发式由LLM基于小规模训练数据生成（包括代码和自然语言描述）。每一代通过选择父代策略（依据适应度概率采样），结合外层提供的进化提示（如交叉、变异），由LLM生成新策略；新策略在训练实例上评估适应度（目标函数值），优胜劣汰。
  - **外层（Evolutionary Prompt Strategy Evolution）**：初始提示策略为手工设计的交叉/变异指令。当内层种群中前l个策略连续t代无改善时，触发外层进化——使用LLM结合差分记忆生成新的提示策略（如“结合遗传算法与模拟退火”）。外层提示策略的适应度由其生成的启发式的平均适应度衡量，并定期剪枝低效提示，控制种群规模。
- **差分记忆与定向进化**：在进化过程中，LLM接收到一组父代策略-思路-适应度三元组，并被指示学习高适应度与低适应度策略之间的差异，从而生成更优的子代策略。公式表示为：\( H^{(t+1)} = M(p_{meta} \parallel S^{(t)}) \)，其中 \( S^{(t)} \) 包含m个三元组，\( p_{meta} \) 包括学习指令和进化提示。
- **自适应大邻域搜索（ALNS）**：将LLM代理输出的变量得分用于选择邻域（top-k变量），并动态调整邻域大小 \(k\)：若收敛缓慢则扩大邻域（\( k \leftarrow \min(k_{\max}, k + \lceil u\% \cdot n \rceil) \)），若子问题求解超时则缩小邻域（\( k \leftarrow \max(k_{\min}, k - \lceil u\% \cdot n \rceil) \)）。

### 3. 实验设计：数据集、基准、对比方法
- **数据集**：
  - 小规模训练数据：各问题类型的小规模实例（如变量数/约束数为大规模实例的1%）。
  - 大规模测试数据：四个经典NP-hard MILP问题——**Set Covering (SC)**、**Minimum Vertex Cover (MVC)**、**Maximum Independent Set (MIS)**、**Mixed Integer Knapsack Set (MIKS)**，每个问题有两个规模（SC1/SC2等），变量数从10万到2000万不等。
  - 额外测试：在线装箱问题（Weibull分布，1k~10k物品，容量100/500）和TSP（TSPLib子集）上的启发式生成任务。
- **基准与方法**：
  - 手工LNS方法：Random-LNS、ACP。
  - 学习型LNS方法：CL-LNS。
  - 通用求解器：Gurobi、SCIP。
  - 高级ML优化框架：GNN&GBDT、Light-MILPopt。
  - 启发式自动设计方法：FunSearch、EOH（Evolution of Heuristic）。
- **评估指标**：目标函数值（最小化或最大化）、原对偶积分（primal integral）、收敛曲线。

### 4. 资源与算力
论文未明确说明使用的GPU型号、数量或训练时长。仅提到所有LLM调用均使用相同的轻量级模型（如GPT-4o-mini），实验设置中给出迭代次数（例如在线装箱20代、TSP 10代，MILP问题20代）和种群大小（如20或4）。但未披露总计算时间或硬件配置。

### 5. 实验数量与充分性
- **实验数量**：论文在两个层面进行了充分实验：
  - **启发式生成任务**：在线装箱（6种规模×容量组合）、TSP（6个TSPLib实例）。每个任务对比了多种手工/ML/AI生成方法，并给出了多个运行结果（如3次运行）。
  - **大规模MILP求解**：4种问题类型×2种规模 = 8个大规模实例。对比了8种基线方法（包括Gurobi、SCIP、ACP、CL-LNS、GNN&GBDT等）。额外添加了使用SCIP作为子求解器、不同LLM（GPT-4o、DeepSeek等）的对比，以及消融研究（双层的不同组件）。
- **充分性与公平性**：
  - 所有方法在相同时间限制和子求解器（默认Gurobi）下比较，保证公平。
  - 训练数据仅使用小规模实例，测试在大规模实例上，验证泛化性。
  - 提供了多次运行的均值和标准偏差（附录中），显示LLM-LNS稳定性较好。
  - 消融实验表明双层结构和差分记忆均有效。
- **总体评价**：实验数量充足，对比方法全面，分析细致（包括收敛曲线、原对偶积分、误差条），结论有力。但缺乏对更大规模问题（如1亿变量）的测试，以及现实世界MIPLIB实例的测试仅在附录少量提及。

### 6. 论文的主要结论与发现
- LLM-LNS在8个大规模MILP实例上**全部取得最优目标值**，显著优于手工LNS（Random-LNS、ACP）、学习型LNS（CL-LNS）、通用求解器（Gurobi、SCIP）以及ML框架（GNN&GBDT、Light-MILPopt）。
- 在启发式生成任务（在线装箱、TSP）中，**LLM-LNS的代理（dual-layer agent）一致性优于FunSearch和EOH**，平均超额装箱比例最低（1.63% vs FunSearch 2.31%），TSP距离最优解差距最小（0.08% vs EOH 0.16%）。
- 训练仅用小规模数据（1%规模）即可泛化至大规模实例，解决冷启动和扩展性问题。
- 双层自进化机制有效平衡探索与利用，差分记忆加速收敛。

### 7. 优点
- **方法创新**：首次将LLM与双层进化框架结合用于LNS邻域自动选择，外层进化提示策略、内层进化启发式策略，设计巧妙。
- **数据高效**：仅需少量小规模训练数据，即可生成高质量邻域策略，避免了大规模标注或强化学习的昂贵采样。
- **泛化能力强**：训练于小规模，测试于大规模，跨规模、跨问题类型（不同MILP类别）均表现优异。
- **理论严谨**：提供了伪代码、数学表述、消融实验，可重复性强。
- **实验结果全面**：在多个基准上对比大量方法，附有收敛曲线、误差条、标准差等详细分析。

### 8. 不足与局限
- **应用范围有限**：主要针对特定MILP问题结构（SC、MVC、MIS、MIKS），未验证在非线性规划、动态优化或其他组合优化问题上的有效性。
- **LLM依赖与资源需求**：虽使用轻量模型，但每次进化均需调用LLM，总体计算成本仍可能较高，且未给出训练总耗时或GPU配置。
- **未完全利用领域知识**：框架未融合经典优化技术（如松弛诱导、分解方法），纯依赖LLM生成策略，可能遗漏专业优化知识。
- **超参数敏感**：外层进化触发条件（停滞阈值l、t）、差分记忆的m值等对性能影响未深入探讨。
- **现实场景验证不足**：仅在合成随机数据集上测试，MIPLIB真实实例的实验规模小且未展示详细结果。
- **潜在偏差风险**：LLM本身可能带有训练数据中的偏见，导致生成的启发式偏向某些解法，影响公平性。

（完）
