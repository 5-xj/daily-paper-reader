---
title: Policy Guided Tree Search for Enhanced LLM Reasoning
title_zh: 策略引导的树搜索增强大语言模型推理
authors: Yang Li
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=NNWSNy4YB4"
tags: ["query:automatic-discovery"]
score: 3.0
evidence: 使用学习策略指导树搜索，避免预定义启发式
tldr: 策略引导的树搜索通过学习何时扩展或回溯来增强LLM推理。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-nnwsny4yb4/fig-001.webp\", \"caption\": \"\", \"page\": 3, \"index\": 1, \"width\": 2928, \"height\": 1182}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-nnwsny4yb4/fig-002.webp\", \"caption\": \"\", \"page\": 8, \"index\": 2, \"width\": 1200, \"height\": 350}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-nnwsny4yb4/fig-003.webp\", \"caption\": \"\", \"page\": 8, \"index\": 3, \"width\": 400, \"height\": 300}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-nnwsny4yb4/fig-004.webp\", \"caption\": \"\", \"page\": 8, \"index\": 4, \"width\": 400, \"height\": 300}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-nnwsny4yb4/fig-005.webp\", \"caption\": \"\", \"page\": 18, \"index\": 5, \"width\": 2972, \"height\": 2866}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-nnwsny4yb4/fig-006.webp\", \"caption\": \"\", \"page\": 19, \"index\": 6, \"width\": 2962, \"height\": 3688}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-nnwsny4yb4/fig-007.webp\", \"caption\": \"\", \"page\": 20, \"index\": 7, \"width\": 2986, \"height\": 4142}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-nnwsny4yb4/fig-008.webp\", \"caption\": \"\", \"page\": 21, \"index\": 8, \"width\": 2736, \"height\": 4556}]"
motivation: 现有树搜索方法依赖预定义启发式或穷举搜索，效率低。
method: 提出策略引导树搜索，用强化学习训练策略动态决定搜索动作。
result: 在数学推理和逻辑推断任务上取得更高效准确的推理。
conclusion: 学习启发式可替代手工规则，提升推理效率。
---

## Abstract
Despite their remarkable capabilities, large language models often struggle with tasks requiring complex reasoning and planning. While existing approaches like Chain-of-Thought prompting and tree search techniques show promise, they are limited by their reliance on predefined heuristics and computationally expensive exploration strategies. We propose Policy-Guided Tree Search (PGTS), a framework that combines reinforcement learning with structured tree exploration to efficiently navigate reasoning paths. Our key innovation is a learned policy that dynamically decides between expanding, branching, backtracking, or terminating exploration, eliminating the need for manual heuristics or exhaustive search. Experiments across mathematical reasoning, logical deduction, and planning benchmarks demonstrate that PGTS achieves superior reasoning performance while significantly reducing computational costs compared to existing methods. These results establish PGTS as a scalable and effective solution for tackling complex reasoning tasks with LLMs.

---

## 论文详细总结（自动生成）

# 论文总结：Policy Guided Tree Search for Enhanced LLM Reasoning

## 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：大型语言模型（LLM）在复杂推理和规划任务（如数学多步问题、逻辑推理）中表现不佳。现有方法（如Chain-of-Thought提示、树搜索技术）虽然有效，但存在依赖预定义启发式规则、计算开销大等问题。
- **研究动机**：设计一种自适应的搜索策略，能动态决定何时扩展、分支、回溯或终止推理，避免手工设计启发式或穷举搜索，提升推理效率与质量。
- **整体含义**：提出策略引导的树搜索（Policy-Guided Tree Search, PGTS），将强化学习与结构化树搜索结合，使LLM推理更高效、可扩展。

## 2. 方法论

### 核心思想
- 将LLM推理建模为一个马尔可夫决策过程（MDP），其中“动作”是树搜索中的四种基本操作：**Expand**（扩展当前节点）、**Branch**（探索兄弟节点）、**Backtrack**（回溯到之前节点）、**Terminate**（结束搜索）。
- 通过图神经网络（Graph Transformer, GPS）学习策略网络，动态选择动作，引导推理树的探索。

### 关键技术细节
- **状态表示**：推理树的部分暴露结构，节点特征来自LLM隐藏层，边特征为即时奖励。
- **动作约束**：基于树深度限制和宽度限制，构建二进制约束向量，屏蔽无效动作。
- **奖励设计**：每个动作有对应的即时奖励公式（如Expand奖励为新推理步质量减成本），成本函数引导高效探索。
- **训练算法**：使用Proximal Policy Optimization (PPO) 优化策略网络，并加入熵正则化鼓励探索。训练不需要真实推理链标注，仅需任务级正误反馈。

### 算法流程（文字说明）
1. 初始化根节点（提示词）。
2. 循环：根据当前状态和约束向量，策略网络输出动作概率，采样动作执行，更新推理树，获取奖励。
3. 当选择Terminate或达到最大步数时结束。
4. 使用PPO更新策略和价值网络。

## 3. 实验设计

### 数据集与场景
- **数学推理**：GSM8K, MATH500, AQUA.
- **常识推理**：StrategyQA.
- **逻辑推理**：PrOntoQA, GPQA.
- **规划任务**：Blocksworld (4步和8步)。

### Benchmark与对比方法
- **基线方法**：Chain-of-Thought (CoT)，Monte Carlo Tree Search (MCTS)（含最好轨迹、聚合投票、Oracle设置），CoT和PGTS还结合了Self-Consistency (SC)（采样4或8条链）。
- **模型**：LLaMA3.1-8B 和 LLaMA3.1-70B，温度0.6，top-p 0.9。

### 实验结果对比
- PGTS在多数任务上优于CoT，例如MATH上PGTS-SC8达到52.20% vs CoT-SC8的48.20%（8B设置）。
- PGTS在计算效率上显著优于MCTS：MATH上PGTS的token消耗仅为MCTS的约1/3（5.28倍 vs 16.25倍CoT）。

## 4. 资源与算力

- **论文明确说明**：使用LLaMA3.1-8B和LLaMA3.1-70B模型进行推理，但**未明确提供训练PGTS策略所使用的GPU型号、数量、训练时长等具体算力信息**。仅提及训练策略使用最多1000个训练样本（每个数据集），且策略网络为轻量级图神经网络（2层GPS），开销远小于LLM生成。

## 5. 实验数量与充分性

- **实验数量**：在7个数据集（涵盖数学、常识、逻辑、规划）上进行了主实验，并包含多个消融实验：
  - 训练样本数量对收敛的影响（图3）。
  - 树宽度对性能的影响（表2）。
  - 策略网络组件消融（GPS vs SAN, SLM, LLM Agent；去除边缘特征、全局注意力等）（表3）。
- **充分性与公平性**：
  - 对比方法包括CoT、MCTS的多种变体，且MCTS使用了Oracle设置（上限）。
  - 消融实验覆盖策略结构关键组件，验证了设计选择。
  - 但GPQA任务上PGTS不如MCTS，作者归因于任务复杂性和训练数据有限，说明在特定高难度场景下表现仍有提升空间。

## 6. 主要结论与发现

- PGTS通过学习策略动态引导推理树探索，在多数推理任务上优于CoT，且计算成本远低于MCTS。
- PGTS的终止动作能有效避免“过度思考”问题，减少无用推理步骤。
- 将LLM视为环境而非策略，允许外部组件指导推理，是范式转变。
- 学习策略无需真实推理链标注，仅需任务正确标签即可训练，提升了可扩展性。

## 7. 优点

- **自适应性强**：策略网络可针对不同任务动态调整搜索行为，无需手工设计启发式。
- **计算高效**：相比MCTS，token消耗大幅降低，且策略网络本身轻量。
- **无需真实推理链标注**：仅需最终答案正确性作为奖励，降低数据成本。
- **消融实验完善**：验证了图神经网络组件、树广度、训练样本量等影响。
- **实验覆盖广泛**：涵盖数学、常识、逻辑、规划等多个推理领域。

## 8. 不足与局限

- **GPQA任务表现不佳**：在复杂多领域高级推理任务上不如MCTS，可能因训练数据量不足或任务难度过大。
- **未明确资源消耗细节**：缺少GPU型号、训练时间等具体信息，不利于复现与比较。
- **成本函数超参数固定**：不同数据集使用相同成本系数（Expand 0.1, Branch 0.2, Backtrack 0.5, Terminate 0.0），未进行数据集特定调优，可能未达最优。
- **推理链忠实性未解决**：论文指出PGTS不保证推理链符合人类可理解的逻辑，在高风险应用中可能产生误导。
- **仅使用对数似然作为中间奖励**：未采用更复杂的奖励（如self-evaluation），可能限制搜索质量（作者在结论中提到未来可探索）。

（完）
