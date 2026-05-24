---
title: Learning Interestingness in Automated Mathematical Theory Formation
title_zh: 自动化数学理论形成中的有趣性学习
authors: "George Tsoukalas, Rahul Saha, Amitayush Thakur, Sabrina Reguyal, Swarat Chaudhuri"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=RespmwOoCH"
tags: ["query:ad"]
score: 9.0
evidence: 自动化数学理论发现，利用LLM进化算法发现数学对象有趣性度量
tldr: 该论文针对自动发现新数学理论这一AI重大挑战，提出两个关键步骤：首先构建Fermat强化学习环境，将概念发现与定理证明建模为符号动作序列，为理论发现提供实验平台；其次在该环境中探索如何自动评分数学对象的有趣性，引入基于大语言模型的进化算法（LLM-EA），通过函数抽象合成非平凡的有趣性度量。实验表明该方法在初等数论和有限域发现中比传统进化算法有显著改进，推动了自动化数学发现的前沿。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-respmwooch/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 713, \"height\": 340}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-respmwooch/fig-002.webp\", \"caption\": \"\", \"page\": 5, \"index\": 2, \"width\": 858, \"height\": 577}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-respmwooch/fig-003.webp\", \"caption\": \"\", \"page\": 7, \"index\": 3, \"width\": 5650, \"height\": 1881}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-respmwooch/fig-004.webp\", \"caption\": \"\", \"page\": 21, \"index\": 4, \"width\": 924, \"height\": 873}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-respmwooch/fig-005.webp\", \"caption\": \"\", \"page\": 22, \"index\": 5, \"width\": 1138, \"height\": 1131}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-respmwooch/fig-006.webp\", \"caption\": \"\", \"page\": 23, \"index\": 6, \"width\": 2519, \"height\": 765}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-respmwooch/fig-007.webp\", \"caption\": \"\", \"page\": 26, \"index\": 7, \"width\": 2807, \"height\": 4283}]"
motivation: 自动发现新数学理论是AI的宏伟目标，但现有方法缺少对发现过程中有趣性评估的有效自动方法。
method: 构建Fermat强化学习环境，并引入基于LLM的进化算法，通过函数抽象合成非平凡的有趣性度量，引导数学对象发现。
result: 在初等数论和有限域发现任务上，LLM进化算法获得的度量相比传统方法带来显著性能提升。
conclusion: 该方法为自动化数学发现提供了可扩展的方案，展示了LLM在理论形成中的潜力。
---

## Abstract
We take two key steps in automating the open-ended discovery of new mathematical theories, a grand challenge in artificial intelligence. First, we introduce Fermat, a reinforcement learning (RL) environment that models concept discovery and theorem-proving using a set of symbolic actions, opening up a range of RL problems relevant to theory discovery. Second, we explore a specific problem through Fermat: automatically scoring the interestingness of mathematical objects. We investigate evolutionary algorithms for synthesizing nontrivial interestingness measures. In particular, we introduce an LLM-based evolutionary algorithm that features function abstraction, leading to notable improvements in discovering elementary number theory and finite fields over hard-coded baselines. We open-source the \fermat environment at github.com/trishullab/Fermat.

---

## 论文详细总结（自动生成）

# 论文总结：Learning Interestingness in Automated Mathematical Theory Formation

## 一、论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：自动化发现新数学理论是人工智能中长期追求的目标。现有AI系统（如定理证明器、程序搜索）多局限于解决预定义问题，缺乏对**开放式的理论形成过程**（包括定义新概念、提出猜想、证明/反证）的支持。同时，数学探索中存在巨大的组合搜索空间，需要一种自动评估数学对象**有趣性（interestingness）** 的机制来引导搜索，而传统方法依赖手工设计的启发式，缺乏学习能力。
- **研究背景**：该工作继承HR系统（基于产生式规则的概念发现与猜想生成）的思想，但将其形式化为强化学习问题，并利用大语言模型驱动的进化算法自动合成有趣性度量。论文目标是使AI系统能够自主发现人类认可的数学知识（如数论和有限域中的基础概念与定理）。

## 二、论文提出的方法论：核心思想、关键技术细节

### 核心思想
- 将数学理论形成建模为**马尔可夫决策过程（MDP）**，其中状态是当前数学知识图（包含定义、猜想、定理），动作是符号化操作（产生新定义、形成猜想、调用定理证明器验证/驳斥），奖励分为外在奖励（发现预定义的已知数学实体）和内在奖励（由**有趣性度量**提供）。
- **有趣性度量**表示为可执行的Python程序，通过**LLM驱动的进化算法（EvoAbstract）** 自动合成，目标是最大化累积外在奖励。

### 关键技术细节
1. **Fermat环境**：
   - 定义了一组**产生式规则**（9种定义规则+4种猜想规则），如Compose、Exists、Specialize、ForAll等，用于从已有实体生成新实体。
   - 使用Z3定理证明器作为后端验证猜想，支持有界/无限域上的自动推理。
   - 实体包含符号定义、计算解释、缓存的示例/反例集，并记录构造历史。

2. **EvoAbstract算法**（三个阶段）：
   - **演化阶段（Evolution）**：维护多个岛屿种群（k=4），每个种群包含候选有趣性程序。LLM（Lvar）基于模板和高分父程序生成新程序。
   - **抽象阶段（Abstraction）**：每隔固定代数，LLM（Labs）从高分程序中提取可复用的子程序（函数抽象），加入岛屿的抽象库（Lib）。后续演化中LLM可调用这些抽象，促进模块化搜索。
   - **策略评估阶段（Policy Evaluation）**：每个候选程序通过Fermat环境执行多次回合（16次独立rollout），计算平均外在奖励作为适应度。

3. **策略模板**：根据有趣性度量对当前定义排序，采样N个高分定义，枚举可能的动作，再模拟所有动作并选择使新实体有趣性分数最高的动作。

## 三、实验设计

### 使用的数据集/场景
- **三种初始知识图配置**：
  - `succ_zero_eq`：仅包含零、后继函数、相等谓词（最基础）。
  - `arithmetic_base`：包含零、一、二、加法、乘法、整除、≤、相等（较丰富）。
  - `ff_27`：有限域F27，包含零、一、域生成元。
- **外在奖励基准集**：数论领域180个实体（教科书来源），F27领域67个实体，涵盖定义、猜想和定理。

### 对比方法
- **随机策略**：均匀随机选择动作。
- **HR固定度量**：实现HR系统中的新奇性、简洁性、生产力、适用性、可理解性等度量（各自及等权重组合）。
- **One-shot LLM**：直接从GPT-4o采样64个程序，不做演化。
- **FunSearch**：去除抽象组件后的EvoAbstract（即常规LLM进化算法）。
- **EvoAbstract**：完整方法。

### 超参数与评估
- 每轮迭代64个回合（timeout 60秒），计算平均奖励。
- EvoAbstract运行64代，每代评估16次rollout，重复4次取均值。
- LLM使用GPT-4o-mini（演化与抽象），采样数2程序/次，抽象阶段每8代进行一次。

## 四、资源与算力

- **硬件**：64个Intel Xeon Platinum 8352Y CPU + 64个AMD EPYC 7413 24C CPU（**未使用GPU**）。
- **时长**：
  - 单次有趣性度量评估约120秒（利用64个worker并行）。
  - FunSearch/EvoAbstract完整实验约18小时/次。
  - GPT-4o基线约6小时。
- **备注**：计算资源以CPU集群为主，未涉及大规模GPU训练。

## 五、实验数量与充分性

- 实验覆盖三个不同复杂度的起始环境，对比了8个基线方法（随机、5个HR度量、HR等权组合、GPT-4o、FunSearch）。
- 每种方法（除随机和HR度量外）均进行了多次独立运行：FunSearch和EvoAbstract各4次取平均，GPT-4o采样64个程序。
- 消融实验：通过对比FunSearch（无抽象）与EvoAbstract，验证抽象学习的效果。
- **充分性评价**：实验设计较全面，涵盖了基线对比、消融分析、多领域（数论与有限域）验证。但作者指出存在局限性，如策略模板限制、瓶颈实体、未处理对称性等。总体而言，实验客观且有意义，但在复杂度和统计显著性（仅4次运行）上可进一步加强。

## 六、论文的主要结论与发现

1. **EvoAbstract和FunSearch均显著优于所有固定HR度量和随机策略**，在三个环境中发现的地面实体数量分别为（9.62-23.98） vs 随机（4.44-4.68）等。
2. **抽象学习带来一定增益**：在`arithmetic_base`上EvoAbstract（23.98）略优于FunSearch（22.41），但在`succ_zero_eq`和`ff_27`上EvoAbstract早期表现更好但后期可能陷入“抽象锁定”，导致最终略逊于FunSearch。
3. **生成的度量具有可解释性**：EvoAbstract的度量包含类似适用性、唯一性、规则多样性等子程序，比FunSearch更模块化。
4. **能够复现基础数论概念**：如加法、乘法、整除性、幂、素数等，并产生部分猜想（如整除自反性），但难以发现复杂猜想（如Goldbach猜想）。
5. **存在改进空间**：策略模板限制了可扩展性；瓶颈概念（如素数）发现后知识图过大阻碍后续操作；未利用实体间等价关系减少冗余。

## 七、优点

- **问题新颖性**：将数学理论形成形式化为RL问题，并聚焦有趣性度量的自动学习，是超出固定难题解决方案的开放式发现的重要一步。
- **方法创新性**：EvoAbstract结合LLM演化与函数抽象学习，能够自动发现可解释、模块化的有趣性度量，且性能优于手工设计的启发式和单次LLM采样。
- **环境开源**：Fermat框架公开，有利于后续研究。
- **实验设计合理**：从最简定义开始，逐步验证不同复杂度的初始理论，并包含消融对照组。
- **定性分析充分**：对学到的度量（含子程序）和生成的数学知识图进行了具体案例展示，提供了直观理解。

## 八、不足与局限

- **策略模板限制可扩展性**：当前仅暴露部分动作空间，难以处理需要长链动作的复杂数学对象。
- **瓶颈实体问题**：某些关键概念（如素数）一旦发现，知识图膨胀过快，阻碍继续探索。
- **未处理定义等价性**：缺乏对等效定义的检测，导致冗余实体和低效搜索；Z3全量检查计算代价高。
- **实验重复次数较少**：每个配置仅4次独立运行，统计稳定性有限。
- **发现深度有限**：尽管能复现基础定义，但未能系统地发现复杂猜想（如有限域特征为3的猜想），显示方法论在高阶推理方面仍有明显不足。
- **计算资源消耗大**：每个评价耗时较长，可能限制进一步扩大搜索规模。

（完）
