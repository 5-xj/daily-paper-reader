---
title: "AI Research Agents for Machine Learning: Search, Exploration, and Generalization in MLE-bench"
title_zh: 机器学习AI研究智能体：在MLE-bench中的搜索、探索与泛化
authors: "Edan Toledo, Karen Hambardzumyan, Martin Josifoski, RISHI HAZRA, Nicolas Baldwin, Alexis Audran-Reiss, Michael Kuchnik, Despoina Magka, Minqi Jiang, Alisia Maria Lupidi, Andrei Lupu, Roberta Raileanu, Tatiana Shavrina, Kelvin Niu, Jean-Christophe Gagnon-Audet, Michael Shvartsman, Shagun Sodhani, Alexander H Miller, Abhishek Charnalia, Derek Dunfield, Carole-Jean Wu, Pontus Stenetorp, Nicola Cancedda, Jakob Nicolaus Foerster, Yoram Bachrach"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=RwfrdKSgCE"
tags: ["query:ad"]
score: 7.0
evidence: 使用搜索策略（贪婪、蒙特卡洛树搜索、进化算法）作为启发式方法进行自动机器学习研究
tldr: 本文将AI研究智能体形式化为在解空间中搜索的策略，通过设计贪婪、蒙特卡洛树搜索和进化等不同算子集和搜索策略，系统评估其在MLE-bench竞赛上的表现。实验表明，搜索策略与算子的配合对性能至关重要，最优搭配取得了领先成绩。该工作为自动化机器学习模型发现提供了启发式搜索的通用框架，有助于加速科学发现进程。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-rwfrdksgce/fig-001.webp\", \"caption\": \"\", \"page\": 15, \"index\": 1, \"width\": 1990, \"height\": 1534}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-rwfrdksgce/fig-002.webp\", \"caption\": \"\", \"page\": 31, \"index\": 2, \"width\": 840, \"height\": 1568}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-rwfrdksgce/fig-003.webp\", \"caption\": \"\", \"page\": 32, \"index\": 3, \"width\": 1499, \"height\": 1711}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-rwfrdksgce/fig-004.webp\", \"caption\": \"\", \"page\": 33, \"index\": 4, \"width\": 1873, \"height\": 2140}]"
motivation: AI研究智能体在自动化机器学习设计中潜力巨大，但搜索策略与算子设计的影响尚不清楚。
method: 将AI智能体形式化为搜索策略，系统比较贪婪、蒙特卡洛树搜索和进化等算子的组合效果。
result: 在MLE-bench上，最优搜索策略与算子组合取得了高性能，揭示了搜索与算子配合的关键性。
conclusion: 该研究为自动化机器学习模型发现提供了启发式搜索的通用框架，有助于加速科学发现。
---

## Abstract
AI research agents are demonstrating great potential to accelerate scientific progress by automating the design, implementation, and training of machine learning models. We focus on methods for improving agents' performance on MLE-bench, a challenging benchmark where agents compete in Kaggle competitions to solve real-world machine learning problems. We formalize AI research agents as search policies that navigate a space of candidate solutions, iteratively modifying them using operators. By designing and systematically varying different operator sets and search policies (Greedy, MCTS, Evolutionary), we show that their interplay is critical for achieving high performance. Our best pairing of search strategy and operator set achieves a state-of-the-art result on MLE-bench lite, increasing the success rate of achieving a Kaggle medal from 39.6% to 47.7%. Our investigation underscores the importance of jointly considering the search strategy, operator design, and evaluation methodology in advancing automated machine learning.

---

## 论文详细总结（自动生成）

# AI Research Agents for Machine Learning: Search, Exploration, and Generalization in MLE-bench 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：AI研究智能体（AI research agents）在自动化机器学习模型的设计、实现和训练方面展现出巨大潜力，但现有系统的设计往往将多种性能因素（算法设计、具体实现、计算资源利用）纠缠在一起，使得难以通过受控实验精确识别性能提升的来源。具体而言，在MLE-bench这一挑战性基准（Kaggle竞赛）上，当前SOTA方法AIDE并未充分解耦这些因素，导致对哪些组件驱动性能改进缺乏深入理解。
- **整体含义**：本文旨在通过形式化AI研究智能体为搜索算法（搜索策略 + 算子集），系统性地解耦和评估不同搜索策略（贪婪、蒙特卡洛树搜索MCTS、进化算法）和算子集对性能的影响，从而为自动化机器学习提供更清晰的设计原则和改进方向。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：将AI研究智能体建模为在候选解空间中进行搜索的算法，由两个核心组件构成：
  1. **搜索策略（Search Policy）**：决定如何遍历候选解空间（如贪婪、MCTS、进化）。
  2. **算子集（Operator Set）**：迭代修改现有解以生成新候选解的变换函数（如草稿、调试、改进、记忆、交叉）。
- **关键定义**：
  - 形式化图搜索框架：$$G_t = (V_t, E_t)$$，其中节点为工件（代码实现），边为变换。
  - 算法由五元组定义：$$\langle F, \pi_{sel}, O, \pi_{op}, \tau \rangle$$，分别对应适应度函数、选择策略、算子集、算子策略、终止规则。
- **关键技术细节**：
  - **基线AIDE**：贪婪选择策略 + AIDE算子集（草稿、调试、改进、记忆）。
  - **提出的算子集OAIRA**：在AIDE基础上改进：
    - **提示自适应复杂度**：根据节点子节点数动态调整生成难度（简单/中等/高级），避免过早过工程化。
    - **范围化记忆**：针对不同算子检索不同的记忆（草稿/改进只检索同级记忆，调试检索祖先链），促进多样性并避免模式崩溃。
    - **思考令牌**：对推理模型明确鼓励使用思考令牌进行反思，提升生成质量。
  - **代理（Agents）**：
    - **AIRA Greedy**：贪婪搜索 + OAIRA算子集。
    - **AIRA MCTS**：经典MCTS循环（选择-扩展-评估-反向传播），省略模拟rollout，直接使用代理适应度函数。选择策略使用UCT分数：$$h_{UCT}(v) = Q(v) + c \sqrt{\frac{\log N(u)}{N(v)+\epsilon}}$$，其中c为探索常数。
    - **AIRA Evolutionary**：保持固定大小种群，通过适应度比例选择父代，以固定概率应用改进或交叉，子代替换最差个体。
- **评估框架**：AIRA-dojo，提供可扩展、自定义的环境，支持隔离容器（Apptainer）、固定硬件配额（1 H200 GPU, 24 CPU, 100GB RAM, 1TB存储）、24小时wall-clock限制。

## 3. 实验设计：数据集/场景、benchmark、对比方法

- **基准**：MLE-bench，包含75个Kaggle任务，但论文主要使用**MLE-bench lite**（22个精心挑选的任务子集），以便为每个任务分配更多随机种子，提高统计可靠性。
- **评估指标**：**Medal Success Rate**（任何奖牌、银牌及以上、金牌），根据人类Kaggle排行榜百分位数评定。
- **对比方法**：
  - OpenAI官方AIDE（o1-preview）（记为[OAI] AIDE Greedy o1-preview）
  - 在AIRA-dojo中复现的AIDE（不同LLM后端：o1-preview, R1, o3）
  - 本文提出的AIRA Greedy, AIRA MCTS, AIRA Evolutionary（分别使用R1和o3）。
- **消融实验**：
  - 记忆算子消融（AIDE with/without memory）。
  - 不同UCT探索常数（c=0, 0.25, 0.5, 0.75）对MCTS性能的影响。
  - 泛化差距分析：验证集 vs 测试集选择最终节点。
- **额外分析**：长时间扩展实验（90小时）、完整MLE-bench（75任务）评估（仅AIRA Greedy o3）。

## 4. 资源与算力

- **每个实验实例**：1个NVIDIA H200 GPU，24个Intel Xeon CPU核心，100GB RAM，1TB本地scratch存储。
- **时间约束**：wall-clock 24小时；每次代码执行最长4小时（相比MLE-bench原9小时有所减少，因预实验显示无性能差异且节点数量更多）。
- **LLM**：主要使用**DeepSeek R1**（全尺寸模型，128K上下文窗口），自托管推理服务器以避免速率限制。对于主要结果也使用了**o3**（闭源），但受限于速率限制减少了并行运行数。代码执行输出解析使用GPT-4o Structured Outputs。
- **计算总量**：论文未给出精确总GPU小时数，但根据实验规模（22个任务 × 10-20 seeds × 多种agent × 每个24小时），估算在数万GPU小时级别。

## 5. 实验数量与充分性

- **主要实验**：在MLE-bench lite上，每个agent配置运行**20个随机种子（R1）** 或**10个种子（o3）**。共涉及多种agent（AIDE, AIRA Greedy, AIRA MCTS, AIRA Evo）和LLM组合。
- **方差分析**：论文专门讨论了高性能方差问题（附录J），指出3个种子不足以获得可靠排名，建议至少10-20个种子。他们通过20个种子得到更稳健的估计，并使用分层bootstrap计算95%置信区间。
- **消融实验**：包括记忆消融（图3）、搜索策略消融（将AIDE算子替换到MCTS和进化中）、不同UCT常数、泛化差距分析（验证/测试选择）、长时间扩展（90小时，10个种子/任务）。
- **充分性评价**：实验设计较为充分，覆盖了主要设计维度（搜索策略、算子集、LLM后端），并进行了统计检验。但仅使用lite子集（22/75任务）可能限制泛化性；完整MLE-bench仅对AIRA Greedy o3做了评估（20种子，表2）。

## 6. 论文的主要结论与发现

- **算子集而非搜索策略是性能瓶颈**：当使用AIDE的算子集时，更先进的搜索策略（MCTS、进化）并不比贪婪搜索更好（图3）。这表明在搜索能力受限的情况下，算子本身限制了性能提升。
- **改进算子集带来显著提升**：AIRA Greedy（OAIRA算子）相比AIDE Greedy（OAIDE算子）绝对提升约5.7个百分点（39.8%→45.5%），相对提升14%。
- **新SOTA**：AIRA MCTS + OAIRA + DeepSeek R1在MLE-bench lite上达到**47.7%任何奖牌率**，超过之前SOTA的39.6%（绝对提升8.1%）。使用o3时表现更好，金牌率达30.91%。
- **泛化差距严重**：验证集与测试集之间存在系统性过拟合。如果使用测试分数而非验证分数选择最终方案，奖牌率可提升9-13个百分点（绝对）。通过选择多个候选（top-k）提交可以部分弥补这一差距。
- **长时间搜索持续受益**：在90小时扩展实验中，AIRA Greedy和MCTS继续提升，但随后因过拟合而下降，而AIDE Greedy更早停滞。这说明需要更好的泛化正则化策略。

## 7. 优点：方法或实验设计上的亮点

- **形式化清晰**：将AI研究智能体解构为搜索策略和算子集，提供了一个统一的框架来理解和比较不同设计选择。
- **系统消融**：通过分离搜索策略和算子集，精准定位了性能瓶颈（算子集），避免了常见黑盒比较。
- **算子创新**：提出的提示自适应复杂度和范围化记忆是实用的工程改进，具有可迁移性。
- **AIRA-dojo框架**：开源、可扩展、容器化隔离、支持长时间运行，解决了大规模实验的可靠性问题（容器、检查点、LLM自托管），为社区提供标准化测试床。
- **泛化差距分析**：首次系统量化了在代理评估中使用验证集替代测试集导致的性能损失，并提出了多提交等缓解策略。
- **统计严谨性**：使用充足种子（20个）并报告置信区间，强调方差问题，提高了结论可靠性。

## 8. 不足与局限

- **实验覆盖**：主要结果基于MLE-bench lite（22/75任务），未涵盖所有任务类型。完整MLE-bench评估仅针对一个agent。
- **算子限制**：所有算子均为LLM驱动，未探索更复杂的算子（如嵌套搜索代理、SWE-Agent等）。交叉算子仅在进化中使用且效果未单独消融。
- **LLM依赖**：性能高度依赖于所用LLM（DeepSeek R1, o3），模型更新或API变化可能导致结果差异。未进行fine-tuning来提升算子能力。
- **过拟合风险**：论文揭示了严重的验证-测试差距，但仅提出多提交作为初步缓解，缺乏系统正则化方法（如早停、模型选择）。
- **计算成本高**：每个任务需要24小时×多个种子，总成本高昂，可能限制其广泛采用。
- **数据污染**：未排除LLM训练数据中可能包含Kaggle竞争信息，影响结果可信度（论文自承这一点）。
- **通用性**：框架和发现主要针对ML工程任务（Kaggle类型），在其他科学研究领域（如分子发现、材料设计）的适用性未验证。

（完）
