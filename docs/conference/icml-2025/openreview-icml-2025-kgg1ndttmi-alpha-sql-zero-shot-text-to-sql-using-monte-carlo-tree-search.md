---
title: "Alpha-SQL: Zero-Shot Text-to-SQL using Monte Carlo Tree Search"
title_zh: Alpha-SQL：使用蒙特卡洛树搜索的零样本文本到SQL
authors: "Boyan Li, Jiayi Zhang, Ju Fan, Yanwei Xu, Chong Chen, Nan Tang, Yuyu Luo"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=kGg1ndttmI"
tags: ["query:automatic-discovery"]
score: 6.0
evidence: 使用蒙特卡洛树搜索作为启发式方法生成SQL
tldr: 基于MCTS的零样本文本到SQL方法，利用LLM推理。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-kgg1ndttmi/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 505, \"height\": 647}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kgg1ndttmi/fig-002.webp\", \"caption\": \"\", \"page\": 2, \"index\": 2, \"width\": 1024, \"height\": 1024}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-kgg1ndttmi/fig-003.webp\", \"caption\": \"\", \"page\": 2, \"index\": 3, \"width\": 1127, \"height\": 455}]"
motivation: 零样本Text-to-SQL无需微调，但现有方法推理能力不足。
method: 提出Alpha-SQL，使用蒙特卡洛树搜索框架迭代推断SQL构造动作，结合LLM增强推理。
result: 在零样本设置下取得了优异的SQL生成效果。
conclusion: MCTS可有效提升LLM在结构化任务中的推理能力。
---

## Abstract
Text-to-SQL, which enables natural language interaction with databases, serves as a pivotal method across diverse industries.
With new, more powerful large language models (LLMs) emerging every few months, fine-tuning has become incredibly costly, labor-intensive, and error-prone. As an alternative, *zero-shot* Text-to-SQL, which leverages the growing knowledge and reasoning capabilities encoded in LLMs without task-specific fine-tuning, presents a promising and more challenging direction.
To address this challenge, we propose Alpha-SQL, a novel approach that leverages a Monte Carlo Tree Search (MCTS) framework to iteratively infer SQL construction actions based on partial reasoning states. To enhance the framework’s reasoning capabilities, we introduce *LLM-as-Action-Model* to dynamically generate SQL construction *actions* during the MCTS process, steering the search toward more promising SQL queries. Moreover, Alpha-SQL employs a self-supervised reward function to evaluate the quality of candidate SQL queries, ensuring more accurate and efficient query generation. Experimental results show that Alpha-SQL achieves 69.7% execution accuracy on the BIRD development set, using a 32B open-source LLM without fine-tuning. Alpha-SQL outperforms the best previous zero-shot approach based on GPT-4o by 2.5% on the BIRD development set.

---

## 论文详细总结（自动生成）

# 中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：Text-to-SQL 任务旨在将自然语言查询转换为 SQL 语句，以简化用户与关系数据库的交互。随着大语言模型（LLM）的快速发展，微调方法成本高昂、劳动密集且易出错，因此零样本（zero-shot）Text-to-SQL 成为一个有前景但更具挑战的方向：它利用 LLM 已有的知识和推理能力，无需针对特定任务进行微调。
- **核心问题**：零样本 Text-to-SQL 面临的主要挑战是如何将预训练 LLM 的通用知识迁移并泛化到具体的 SQL 生成任务中，尤其是在没有任务特定标注数据的情况下，准确理解数据库模式、构建复杂 SQL 查询并保持鲁棒性。
- **整体含义**：论文提出 Alpha-SQL，将 SQL 生成建模为树结构上的搜索问题，通过蒙特卡洛树搜索（MCTS）框架逐步构造查询，无需微调即可提升 LLM 在零样本 Text-to-SQL 上的性能，为小规模开源模型提供了一种低成本、高效的解决方案。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：将 Text-to-SQL 任务分解为一系列更小的子任务，并通过 MCTS 在树状搜索空间中逐步探索和构造 SQL 查询。每个节点表示部分推理状态，每条边表示一个 SQL 构造动作（如选择表、修改子句等）。通过从根节点到叶节点的路径得到完整的候选 SQL。
- **关键技术细节**：
  - **LLM-as-Action-Model**：在 MCTS 过程中，调用 LLM 动态生成 SQL 构造动作，并附上逐步推理（链式思维），使每个动作都基于当前上下文，引导搜索向更优的 SQL 方向前进。
  - **动作空间**：定义了 7 种推理动作（A1-A7），包括问题重述、模式选择、列值识别、列函数识别、SQL 生成、SQL 修正和终止。动作之间遵循有向顺序约束（见表 1），且每个动作在一条路径中只出现一次。
  - **MCTS 四阶段**：
    - **Selection**：使用 UCT（Upper Confidence Bound applied to Trees）公式平衡探索与利用，选择有希望的节点。
    - **Expansion**：对每个有效动作采样多次（`N_expansion=3`，温度 `T_expansion=0.8`），生成子节点，并去重以减少分支因子。
    - **Simulation**：从当前节点迭代选择未探索的子节点，直到终止节点，形成一条完整路径。
    - **Backpropagation**：在终止节点处，通过自监督奖励函数计算奖励值 `r`。奖励基于执行结果的一致性：采样 `N_reward=5` 条 SQL（温度 `T_reward=1.0`），比较执行结果，统计一致性比例。然后将奖励回传更新路径上各节点的 `Q` 和 `N` 值。
  - **最终 SQL 选择**：从所有完整路径中收集候选 SQL，执行它们并选择执行结果一致性最高的 SQL 作为最终输出。
  - **数据库值检索**：离线预处理表格型列值，使用 MinHash 签名；在线阶段通过 LSH 检索与查询关键词相似的数据库值，并经过编辑相似度和语义相似度过滤（`ϵ_edit=0.3`, `ϵ_semantic=0.6`），丰富上下文。

## 3. 实验设计

- **数据集**：
  - **BIRD 开发集**（1534 对）：更复杂，包含领域特定关键词如 CASE、IIF。
  - **Spider 开发集**（1034 对）：经典基准。
  - **子采样开发集（SDS）**：BIRD 开发集的 10%（147 个样本），用于消融和效率实验（81 简单、54 中等、12 困难）。
- **基准方法**：
  - 零样本方法：DAIL-SQL、SuperSQL、MCS-SQL、RSL-SQL（均基于 GPT-4 或 GPT-4o）。
  - 微调方法：SFT CodeS（7B/15B）、CHESS-SQL（基于 Deepseek-Coder-33B 等）、CHASE-SQL（基于 Gemini-1.5-Pro/Flash）、XiYan-SQL（基于 Qwen2.5-Coder-32B）。
- **评估指标**：执行准确率（Execution Accuracy, EX），即预测 SQL 的执行结果与真实 SQL 一致的百分比。

## 4. 资源与算力

- 论文明确说明：所有实验在 Ubuntu 22.04.3 LTS 服务器上运行，配备 512GB RAM 和双路 40 核 Intel Xeon Platinum 8383C CPU（@2.70GHz）。开源 LLM 使用 8 张 GPU 本地部署，每张 GPU 具有 80GB 内存和 312 TFLOPS（BF16 精度）。未提供具体训练时长或总计算量。

## 5. 实验数量与充分性

- **主要实验**：
  - BIRD 和 Spider 开发集上的完整对比结果（表 2、表 3）。
  - 性能与模型规模折衷分析（图 4）。
  - MCTS Rollout 数量对性能的影响（图 5）。
  - 与基线 LLM（直接提示）的对比（表 4），包括 Deepseek-V3、GPT-4o、Gemini-1.5-Pro、DeepSeek-R1 等。
  - 动作空间消融实验（表 5），逐一移除单个动作观察性能变化。
- **充分性评价**：实验覆盖了主要数据集（BIRD、Spider），对比了多种代表性方法（零样本和微调），并进行了动作消融和 Rollout 数量分析。但缺少在其他数据集（如 WikiSQL）上的验证，也未报告统计显著性检验。总体较为充分，但消融实验仅在 SDS 子集上进行，可能不够全面。

## 6. 论文的主要结论与发现

- Alpha-SQL 在零样本设置下，使用 32B 开源 LLM（Qwen2.5-Coder-32B）在 BIRD 开发集上达到 69.7% 的执行准确率，超过此前最优秀的零样本方法 RSL-SQL（GPT-4o）2.5 个百分点。
- 即使使用 7B 模型，Alpha-SQL 也能达到 66.8% 的准确率，接近或超越许多更大模型的零样本及微调方法。
- 在 Spider 数据集上，14B 版本的 Alpha-SQL 达到 87.0%，超过了微调过的 CodeS-15B（84.9%）。
- 更多 MCTS Rollout 数量能稳定提升性能，且搜索空间虽然庞大（理论上 >3000 条路径），但仅需 24 个 Rollout 即可显著提高效果。
- 动作空间消融表明，每个动作都贡献积极作用，其中 SQL 修正（A6）和模式选择（A2）最为关键。
- Alpha-SQL 作为即插即用框架，能有效提升 Qwen2.5-Coder-7B 和 Phi-4 等小模型的性能（分别提升 17.0% 和 16.5%）。

## 7. 优点

- **方法创新**：将 MCTS 引入零样本 Text-to-SQL，将 SQL 生成视为带推理的搜索过程，而非传统静态流水线。
- **无需微调**：完全避免任务特定标注数据和昂贵的训练过程，适应快速更新的 LLM 生态。
- **高效探索**：通过 UCT 平衡探索与利用，配合合理剪枝，在庞大搜索空间中高效找到高质量 SQL。
- **自监督奖励**：基于执行结果一致性设计奖励函数，无需人工标注，具有泛化性。
- **通用即插即用**：可集成不同规模的 LLM（7B-32B）均获得显著提升，且对其他模型（如 Phi-4）同样有效。
- **实验全面**：在多个基准数据集上与多种方法对比，验证了框架的有效性和鲁棒性。

## 8. 不足与局限

- **计算开销**：虽然无需微调，但 MCTS 过程需要多次调用 LLM（24 个 Rollout），推理时间成本和 GPU 资源消耗较高，文中未提供详细的推理时延数据。
- **实验覆盖有限**：仅在 BIRD 和 Spider 两个数据集上评估，缺少对更多领域（如跨数据库、多表复杂查询）或更大规模数据集的验证。消融实验仅基于子采样集（SDS 147 样本），样本量较小。
- **动作空间设计依赖人工**：7 种动作及其顺序约束由人工设计，可能并非最优，缺少自动化学习。动作去重策略虽然减少分支，但可能丢失一些有信息量的变体。
- **奖励设计局限**：自监督奖励依赖采样 SQL 的执行一致性，若采样不足或采样分布偏向某些类型，可能引入偏差。仅使用一致性，未考虑 SQL 语义正确性（如结果相同但逻辑不同）。
- **缺乏与传统方法对比**：未与基于解析器或规则的方法（如 SQLNet、IRNet）对比，也未讨论与微调方法的性能差距（如 CHASE-SQL 达 73.0%）。
- **可重复性细节**：虽然提供了代码链接，但超参数设置（如 N_rollout=24、N_expansion=3）的依据未充分说明，且未报告多次运行的标准差。

（完）
