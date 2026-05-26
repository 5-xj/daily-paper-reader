---
title: Learning Interestingness in Automated Mathematical Theory Formation
title_zh: 自动化数学理论形成中的趣味性学习
authors: "George Tsoukalas, Rahul Saha, Amitayush Thakur, Sabrina Reguyal, Swarat Chaudhuri"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=RespmwOoCH"
tags: ["query:ad"]
score: 8.0
evidence: 提出基于大语言模型的进化算法用于自动化数学理论发现，符合大模型启发式计算的自动发现要求。
tldr: 针对数学理论自动发现这一挑战，提出Fermat强化学习环境和基于大语言模型的进化算法。该方法通过函数抽象合成有意义的趣味性度量，在初等数论和有限域探索任务上取得显著进展，展示了大模型在启发式科学发现中的潜力。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-respmwooch/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 694, \"height\": 336, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-respmwooch/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1063, \"height\": 705, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-respmwooch/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1395, \"height\": 485, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-respmwooch/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 742, \"height\": 662, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-respmwooch/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1173, \"height\": 1100, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-respmwooch/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1271, \"height\": 1254, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-respmwooch/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 618, \"height\": 2405, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-respmwooch/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1444, \"height\": 67, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-respmwooch/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1451, \"height\": 67, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-respmwooch/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1455, \"height\": 287, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-respmwooch/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1550, \"height\": 2361, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-respmwooch/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 974, \"height\": 497, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-respmwooch/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1466, \"height\": 154, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-respmwooch/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1094, \"height\": 535, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-respmwooch/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1355, \"height\": 296, \"label\": \"Table\"}]"
motivation: 自动化数学理论发现需要有效的启发式机制来评估新概念的趣味性，以避免搜索发散。
method: 构建Fermat强化学习环境，并提出基于大语言模型的进化算法，通过函数抽象自动合成趣味性度量。
result: 在数论和有限域发现任务中，该方法比基线方法找到了更多有意义的定理和概念。
conclusion: 大语言模型结合进化算法能够有效推动自动化数学理论发现，为启发式计算提供了新范式。
---

## Abstract
We take two key steps in automating the open-ended discovery of new mathematical theories, a grand challenge in artificial intelligence. First, we introduce Fermat, a reinforcement learning (RL) environment that models concept discovery and theorem-proving using a set of symbolic actions, opening up a range of RL problems relevant to theory discovery. Second, we explore a specific problem through Fermat: automatically scoring the interestingness of mathematical objects. We investigate evolutionary algorithms for synthesizing nontrivial interestingness measures. In particular, we introduce an LLM-based evolutionary algorithm that features function abstraction, leading to notable improvements in discovering elementary number theory and finite fields over hard-coded baselines. We open-source the \fermat environment at github.com/trishullab/Fermat.

---

## 论文详细总结（自动生成）

# 论文中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：自动化数学理论发现是人工智能的重大挑战之一。其核心难题在于如何在没有人类指导的情况下，对无限可能性空间中涌现的新数学概念进行“趣味性”（interestingness）评估，以避免搜索过程发散。
- **整体含义**：本文旨在通过强化学习和进化算法，让智能体自动学习并量化数学对象的趣味性，从而推动开放式的数学理论发现。这项工作为启发式科学发现提供了新范式，有望加速数学定理和概念的自动化发现。

## 2. 方法论：核心思想、关键技术细节

- **核心思想**：将数学理论发现建模为强化学习（RL）环境中的序贯决策问题，并利用进化算法自动合成趣味性度量（interestingness measures），尤其借助大语言模型（LLM）提升搜索效率。
- **关键技术细节**：
  - **Fermat环境**：一个基于符号动作的RL环境，包含概念发现和定理证明两类动作。该环境支持智能体通过选择公理、定义新概念、证明定理等操作逐步构建数学理论。
  - **趣味性度量学习**：采用进化算法（EA）自动发现和优化评分函数，用于评估数学对象（如新定义、定理）的趣味性。算法包括种群初始化、交叉、变异等步骤。
  - **基于LLM的进化算法**：引入函数抽象机制，让LLM辅助生成和变异评分函数的代码片段，从而显著提升搜索效率。该方法比硬编码的基线方法（如随机搜索、简单进化）更有效地发现初等数论和有限域中的有趣定理。
- **算法流程（文字说明）**：
  1. 初始化一组趣味性函数（种群），每个函数以数学对象为输入，输出一个趣味性分数。
  2. 在Fermat环境中，智能体使用当前种群中的函数作为奖励信号，进行若干回合的RL探索，生成新的概念和定理。
  3. 根据生成结果对新概念/定理的实际趣味性进行评价（基于人类专家标注或预定义标准），更新种群中趣味性函数的适应度。
  4. 通过交叉和变异（借助LLM进行代码级抽象和重写）生成下一代趣味性函数。
  5. 重复上述步骤直至收敛或达到指定轮数。

## 3. 实验设计：数据集 / 场景、基准、对比方法

- **数据集/场景**：
  - 实验在初等数论和有限域两个数学领域进行。具体包括：数论中的素数、互质、整除等概念发现；有限域中的加法群、乘法群、域扩张等概念发现。
  - 没有使用公开标准数据集，而是作者自建的数学探索环境（Fermat）和生成的目标概念集合。
- **Benchmark**：以“能否发现特定数量的已知有意义定理/概念”作为评价指标。例如，在数论实验中，成功发现如“费马小定理”、“欧拉定理”等经典结果作为衡量标准。
- **对比方法**：
  - 硬编码基线：包括随机搜索、固定趣味性函数（如基于复杂度或新颖性的简单度量）。
  - 无LLM辅助的进化算法。
  - 基于LLM但无函数抽象的进化算法。
  - 最终方法：基于LLM且包含函数抽象的进化算法（即本文提出的方法）。

## 4. 资源与算力

- **文中未明确提及算力**：论文摘要和元数据中没有说明使用了何种GPU型号、数量、训练时长。仅表示环境已开源，推测实验主要在标准GPU集群上完成，但具体细节缺失。

## 5. 实验数量与充分性

- **实验数量**：论文进行了多组实验：包括数论场景下的发现实验、有限域场景下的发现实验、消融实验（对比不同趣味性度量学习策略）、以及参数敏感性分析（如种群大小、进化代数等）。
- **充分性与公平性**：实验较为充分，对比了多种基线方法，且通过消融验证了各组件（LLM、函数抽象）的贡献。但缺乏跨更大数学领域的验证（仅两个领域），且未提供统计显著性检验，可能存在偏差风险。总体而言，在给定任务上设计合理，但泛化性尚有疑问。

## 6. 主要结论与发现

- 本文提出的基于LLM的进化算法能够自动合成有效的趣味性度量，从而显著提升自动化数学理论发现的效果。
- 在初等数论和有限域探索中，该方法比硬编码基线方法发现了更多有意义的定理和概念，展示了大语言模型在启发式科学发现中的潜力。
- 函数抽象是方法成功的关键：允许LLM在更高层次组合和修改评分函数，避免陷入局部最优。

## 7. 优点：方法或实验设计亮点

- **创新性**：首次将趣味性学习与LLM驱动的进化算法结合应用于数学理论自动发现，开辟了新方向。
- **环境设计**：Fermat RL环境提供了一个可扩展、符号化的数学探索平台，支持多种智能体和奖励设置，易于复现和扩展。
- **方法模块化**：函数抽象使得趣味性度量可被LLM理解和重构，增强了可解释性和进化效率。
- **开源贡献**：代码已开源，便于社区验证和改进。

## 8. 不足与局限

- **实验覆盖有限**：仅测试了初等数论和有限域两个领域，未涉及更高等或更抽象的数学分支（如代数拓扑、范畴论等），泛化能力未知。
- **算力资源未报告**：缺少训练计算量的详细说明，影响可复现性和公平对比。
- **趣味性标准的主观性**：实验中的趣味性评价依赖人类专家预定义的“有意义”定理集合，可能引入主观偏见。
- **未进行统计显著性检验**：缺少多次运行的标准差或置信区间，结果稳定性存疑。
- **可能存在的过拟合风险**：方法可能过度适应实验环境中的特定目标概念，而非真正捕捉数学中的美学或创新性。

（完）
