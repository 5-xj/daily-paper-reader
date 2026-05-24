---
title: Monte Carlo Tree Search for Comprehensive Exploration in LLM-Based Automatic Heuristic Design
title_zh: 基于蒙特卡洛树搜索的大模型自动启发式设计全面探索
authors: "Zhi Zheng, Zhuoliang Xie, Zhenkun Wang, Bryan Hooi"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=Do1OdZzYHr"
tags: ["query:automatic-discovery"]
score: 9.0
evidence: 基于大模型的自动启发式设计结合蒙特卡洛树搜索
tldr: 使用蒙特卡洛树搜索在大模型自动启发式设计中进行全面探索。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-do1odzzyhr/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 372, \"height\": 340}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-do1odzzyhr/fig-002.webp\", \"caption\": \"\", \"page\": 3, \"index\": 2, \"width\": 672, \"height\": 651}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-do1odzzyhr/fig-003.webp\", \"caption\": \"\", \"page\": 35, \"index\": 3, \"width\": 1830, \"height\": 988}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-do1odzzyhr/fig-004.webp\", \"caption\": \"\", \"page\": 35, \"index\": 4, \"width\": 902, \"height\": 536}]"
motivation: 现有基于种群的大模型自动启发式设计方法无法充分探索每个启发式的潜力且易陷入局部最优。
method: 引入蒙特卡洛树搜索进行启发式空间的全面探索，避免局部收敛。
result: 在路由规划和任务分配等复杂优化任务上生成高质量启发式。
conclusion: MCTS能有效增强LLM自动启发式设计的探索能力。
---

## Abstract
Handcrafting heuristics for solving complex optimization tasks (e.g., route planning and task allocation) is a common practice but requires extensive domain knowledge. Recently, Large Language Model (LLM)-based automatic heuristic design (AHD) methods have shown promise in generating high-quality heuristics without manual interventions. Existing LLM-based AHD methods employ a population to maintain a fixed number of top-performing LLM-generated heuristics and introduce evolutionary computation (EC) to iteratively enhance the population. However, these population-based procedures cannot fully develop the potential of each heuristic and are prone to converge into local optima. To more comprehensively explore the space of heuristics, this paper proposes to use Monte Carlo Tree Search (MCTS) for LLM-based heuristic evolution. The proposed MCTS-AHD method organizes all LLM-generated heuristics in a tree structure and can better develop the potential of temporarily underperforming heuristics. In experiments, MCTS-AHD delivers significantly higher-quality heuristics on various complex tasks. Our code is available.

---

## 论文详细总结（自动生成）

# 论文中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **背景**：手工设计启发式（heuristics）是解决复杂优化任务（如路径规划、任务分配）的常用方法，但高度依赖领域专家知识，且过程繁琐。自动启发式设计（AHD）旨在自动生成高质量的启发式算法。
- **现有方法**：基于大语言模型（LLM）的AHD方法（如EoH、Funsearch、ReEvo）通过维护一个固定数量的精英启发式种群，并利用进化计算（EC）迭代改进。但种群方法会直接丢弃性能暂时较差的启发式，无法充分开发它们的潜力，容易陷入局部最优。
- **本文动机**：为了更全面地探索启发式空间，避免局部收敛，提出使用蒙特卡洛树搜索（MCTS）来指导LLM的启发式进化，让表现不佳的启发式也有机会被进一步优化。

## 2. 方法论

- **核心思想**：将所有LLM生成的启发式函数组织成一棵MCTS树，每个节点代表一个启发式函数及其语言描述。MCTS通过选择、扩展、模拟、反向传播四个阶段引导进一步的启发式生成。
- **关键技术细节**：
  - **LLM动作设计**：定义6种动作：初始化（i1）、两种变异（m1‑新机制、m2‑调参）、两种交叉（e1‑完全不同的新函数、e2‑学习参考函数）、树路径推理（s1‑利用从根到叶的进化历史生成改进启发式）。
  - **思想对齐过程（Thought‑Alignment）**：在生成代码后，再调用一次LLM生成精确且相关的语言描述（≤3句），避免幻觉导致的描述与代码不匹配。
  - **渐进式扩展（Progressive Widening）**：当节点访问次数满足条件时，允许非叶节点添加新子节点，实现对旧节点的重探索。条件：⌊N(n)^α⌋ ≥ |Children(nc)|，α=0.5。
  - **探索衰减（Exploration‑Decay）**：线性降低UCT中的探索因子λ = λ₀ * (T-t)/T，λ₀=0.1，早期鼓励探索，后期收敛。
  - **UCT公式**（归一化后）：
    ```
    UCT(c) = (Q(c)-qmin)/(qmax-qmin) + λ · sqrt(ln(N(nc)+1)/N(c))
    ```
  - **质量值更新**：每个节点的Q值为子节点中的最大值，N值为子节点访问次数之和。
  - **终止条件**：总启发式评估次数达到预算T（通常1000或2000）。

## 3. 实验设计

- **任务与场景**：
  - **NP‑hard组合优化问题**：TSP、KP、CVRP、MKP、BPP（在线/离线）、ASP。
  - **其他优化任务**：Cost‑aware Acquisition Function设计（用于贝叶斯优化）。
  - **使用的求解框架**：逐步构造（Step‑by‑Step）、蚁群优化（ACO）、引导局部搜索（GLS）、贝叶斯优化（BO）。
- **数据集**：
  - 每种任务有特定规模的训练/测试集，例如TSP用50/100/200节点实例，KP用50/100/200物品实例，在线BPP用WeiBull实例（1000‑10000物品），BO用12个合成函数（Ackley、Rastrigin等）。
  - 评估数据集D包含64个实例（部分任务）或5‑10个实例（ACO、GLS、BO）。
- **对比方法**：
  - 手工启发式：Nearest‑greedy、ACO、EI等。
  - 传统AHD：GHPP（基于遗传编程）。
  - 神经组合优化：POMO、DeepACO、NeuralGLS等。
  - 现有LLM‑based AHD：Funsearch、EoH、ReEvo、HSEvo。
  - 所有LLM方法使用相同预训练模型（GPT‑3.5‑turbo、GPT‑4o‑mini，部分使用Claude‑3.5‑sonnet、DeepSeek‑v3、Qwen2.5‑Coder‑32b）。
- **评估指标**：最优性差距（Gap %）。
- **实验细节**：每种方法独立运行3次（部分10次）取平均；评价预算T=1000（大部分任务）；每次启发式运行时间限制60秒。

## 4. 资源与算力

- 文中未明确提及GPU型号或数量，因为 **所有实验均在单个CPU（Intel i7‑12700）上运行**，不需要GPU。
- 算力消耗示例：
  - 设计KP启发式（逐步构造框架，T=1000）：约3小时，1M输入tokens，0.2M输出tokens，约0.3美元（GPT‑4o‑mini）。
  - 与其他LLM‑based AHD方法相比，未出现显著效率下降或成本增加。

## 5. 实验数量与充分性

- **实验组数**：
  - 主实验涵盖4个任务族（构造、ACO、GLS、BO），共约10种不同问题/框架组合，每个组合包含多个规模测试集（共约50个测试点）。
  - 对比了5‑6种LLM‑based AHD方法、多种手工及NCO基线。
  - 消融实验：对3个组件（渐进式扩展、思想对齐、探索衰减）和3种动作（s1、m1、m2）逐一移除并测试。
  - 参数敏感性：λ₀取0.05/0.1/0.2，初始节点数NI=4/10，α=0.5/0.6，k=1/2。
  - 在部分任务上运行10次计算p值（单侧t检验），证明MCTS‑AHD显著优于EoH（p<0.05）。
- **充分性与客观性**：
  - 实验覆盖了多种困难程度、不同求解框架、不同LLM模型，对比了从手工到神经网络的多种基线。
  - 公平性方面：所有方法共用相同LLM和种子（对需要种子的方法），但MCTS‑AHD无需种子，具更好适用性。
  - 存在一定偏差：黑色盒设置（无任务描述）下MCTS‑AHD优势减弱，说明其更依赖描述信息；另外，实验未涉及多目标优化或更大规模实例（如万级节点TSP）。

## 6. 主要结论与发现

- MCTS‑AHD在几乎所有测试任务上生成启发式的质量 **显著优于** 现有LLM‑based AHD方法（EoH、Funsearch、ReEvo、HSEvo），也超过了大多数手工启发式和部分神经组合优化方法（如POMO、DeepACO）。
- 在 **更复杂的启发式空间** 和 **更多描述信息** 的场景下，MCTS‑AHD的优势更加明显。
- MCTS结构能够保留并开发暂时低性能的启发式，帮助跳出局部最优；而种群方法容易早期收敛。
- 消融实验验证了每个组件（渐进式扩展、思想对齐、探索衰减、树路径推理动作）的必要性。
- 方法对不同LLM（GPT、Claude、DeepSeek、Qwen）均表现稳定。

## 7. 优点

- **创新性**：首次将MCTS引入LLM‑based AHD，利用树结构实现全面探索。
- **方法设计**：
  - 提出多种LLM动作（包括树路径推理），充分利用进化历史和交叉信息。
  - 思想对齐过程提高了描述质量，增强LLM推理。
  - 探索衰减自动平衡探索与利用，无需任务特定调参。
  - 渐进式扩展允许非叶节点重探索，增加多样性。
- **实验全面**：涵盖多种优化任务类型、求解框架和对比基线，统计检验表明显著改进。
- **实用性**：无需手工种子函数，适用性广；运行时间与成本可接受（数小时，约0.3美元/任务）；不依赖GPU。

## 8. 不足与局限

- **收敛速度**：MCTS‑AHD的收敛速度相对较慢，可进一步优化（文中提出未来可设计MCTS‑种群混合方法）。
- **对描述依赖**：在缺乏任务描述的黑色盒设置下，MCTS‑AHD的优势削弱，甚至不如一些种群方法，说明其有效性依赖于LLM对任务的理解和生成质量。
- **应用范围**：实验限于组合优化和BO，未涉及更广泛的实际应用（如多目标优化、大规模实时调度）。当前测试的最大规模为数千节点/物品，未验证超大规模（万级以上）的扩展性。
- **计算资源**：虽然不需GPU，但每个任务需多次调用LLM，累积token成本和等待时间可能较高（尤其使用更贵模型时）。
- **不确定性**：LLM输出随机性大，虽然多次运行取平均，但单次结果波动可能较大（文中p值表明总体显著，但个别任务标准差不小）。
- **对比公平性**：部分基线（如Funsearch、ReEvo）需要使用手工种子函数，而MCTS‑AHD免种子，可能在其他方法未调优时获得不公平优势。

（完）
