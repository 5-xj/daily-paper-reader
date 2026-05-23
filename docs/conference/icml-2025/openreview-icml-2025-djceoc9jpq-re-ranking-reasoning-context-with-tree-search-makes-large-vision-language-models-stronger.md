---
title: Re-ranking Reasoning Context with Tree Search Makes Large Vision-Language Models Stronger
title_zh: 用树搜索重排序推理上下文使大型视觉语言模型更强
authors: "Qi Yang, Chenghao Zhang, Lubin Fan, Kun Ding, Jieping Ye, Shiming Xiang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=DJcEoC9JpQ"
tags: ["query:automatic-discovery"]
score: 6.0
evidence: 树搜索重排序用于视觉推理，与启发式搜索相关
tldr: 多模态检索增强生成结合蒙特卡洛树搜索重排序推理上下文
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-001.webp\", \"caption\": \"\", \"page\": 3, \"index\": 1, \"width\": 868, \"height\": 620}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-002.webp\", \"caption\": \"\", \"page\": 3, \"index\": 2, \"width\": 760, \"height\": 506}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-003.webp\", \"caption\": \"\", \"page\": 3, \"index\": 3, \"width\": 448, \"height\": 324}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-004.webp\", \"caption\": \"\", \"page\": 3, \"index\": 4, \"width\": 440, \"height\": 320}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-005.webp\", \"caption\": \"\", \"page\": 4, \"index\": 5, \"width\": 908, \"height\": 632}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-006.webp\", \"caption\": \"\", \"page\": 5, \"index\": 6, \"width\": 480, \"height\": 356}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-007.webp\", \"caption\": \"\", \"page\": 5, \"index\": 7, \"width\": 480, \"height\": 356}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-008.webp\", \"caption\": \"\", \"page\": 5, \"index\": 8, \"width\": 480, \"height\": 356}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-009.webp\", \"caption\": \"\", \"page\": 8, \"index\": 9, \"width\": 489, \"height\": 306}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-010.webp\", \"caption\": \"\", \"page\": 13, \"index\": 10, \"width\": 514, \"height\": 400}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-011.webp\", \"caption\": \"\", \"page\": 13, \"index\": 11, \"width\": 748, \"height\": 208}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-012.webp\", \"caption\": \"\", \"page\": 13, \"index\": 12, \"width\": 771, \"height\": 614}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-013.webp\", \"caption\": \"\", \"page\": 13, \"index\": 13, \"width\": 722, \"height\": 522}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-014.webp\", \"caption\": \"\", \"page\": 14, \"index\": 14, \"width\": 640, \"height\": 480}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-015.webp\", \"caption\": \"\", \"page\": 14, \"index\": 15, \"width\": 480, \"height\": 640}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-016.webp\", \"caption\": \"\", \"page\": 14, \"index\": 16, \"width\": 667, \"height\": 333}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-017.webp\", \"caption\": \"\", \"page\": 14, \"index\": 17, \"width\": 429, \"height\": 472}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-018.webp\", \"caption\": \"\", \"page\": 14, \"index\": 18, \"width\": 768, \"height\": 227}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-019.webp\", \"caption\": \"\", \"page\": 17, \"index\": 19, \"width\": 499, \"height\": 476}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-020.webp\", \"caption\": \"\", \"page\": 17, \"index\": 20, \"width\": 500, \"height\": 291}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-021.webp\", \"caption\": \"\", \"page\": 17, \"index\": 21, \"width\": 349, \"height\": 386}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-022.webp\", \"caption\": \"\", \"page\": 17, \"index\": 22, \"width\": 417, \"height\": 396}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-023.webp\", \"caption\": \"\", \"page\": 18, \"index\": 23, \"width\": 346, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-024.webp\", \"caption\": \"\", \"page\": 18, \"index\": 24, \"width\": 402, \"height\": 387}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-025.webp\", \"caption\": \"\", \"page\": 18, \"index\": 25, \"width\": 500, \"height\": 303}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-026.webp\", \"caption\": \"\", \"page\": 18, \"index\": 26, \"width\": 448, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-027.webp\", \"caption\": \"\", \"page\": 18, \"index\": 27, \"width\": 500, \"height\": 293}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-028.webp\", \"caption\": \"\", \"page\": 20, \"index\": 28, \"width\": 394, \"height\": 305}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-029.webp\", \"caption\": \"\", \"page\": 20, \"index\": 29, \"width\": 500, \"height\": 347}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-030.webp\", \"caption\": \"\", \"page\": 20, \"index\": 30, \"width\": 500, \"height\": 333}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-031.webp\", \"caption\": \"\", \"page\": 20, \"index\": 31, \"width\": 500, \"height\": 321}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-032.webp\", \"caption\": \"\", \"page\": 20, \"index\": 32, \"width\": 500, \"height\": 331}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-033.webp\", \"caption\": \"\", \"page\": 20, \"index\": 33, \"width\": 429, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-034.webp\", \"caption\": \"\", \"page\": 22, \"index\": 34, \"width\": 373, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-035.webp\", \"caption\": \"\", \"page\": 22, \"index\": 35, \"width\": 385, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-036.webp\", \"caption\": \"\", \"page\": 22, \"index\": 36, \"width\": 500, \"height\": 407}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-037.webp\", \"caption\": \"\", \"page\": 22, \"index\": 37, \"width\": 333, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-038.webp\", \"caption\": \"\", \"page\": 22, \"index\": 38, \"width\": 500, \"height\": 481}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-039.webp\", \"caption\": \"\", \"page\": 22, \"index\": 39, \"width\": 441, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-040.webp\", \"caption\": \"\", \"page\": 22, \"index\": 40, \"width\": 398, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-djceoc9jpq/fig-041.webp\", \"caption\": \"\", \"page\": 22, \"index\": 41, \"width\": 485, \"height\": 326}]"
motivation: 现有视觉问答中检索知识不足且响应不稳定。
method: 构建含推理模式的知识库，使用蒙特卡洛树搜索重排序。
result: 提升了视觉问答任务的准确性和鲁棒性。
conclusion: 树搜索有效增强了多模态推理性能。
---

## Abstract
Recent advancements in Large Vision Language Models (LVLMs) have significantly improved performance in Visual Question Answering (VQA) tasks through multimodal Retrieval-Augmented Generation (RAG). However, existing methods still face challenges, such as the scarcity of knowledge with reasoning examples and erratic responses from retrieved knowledge. To address these issues, in this study, we propose a multimodal RAG framework, termed RCTS, which enhances LVLMs by constructing a Reasoning Context-enriched knowledge base and a Tree Search re-ranking method. Specifically, we introduce a self-consistent evaluation mechanism to enrich the knowledge base with intrinsic reasoning patterns.  We further propose a Monte Carlo Tree Search with Heuristic Rewards (MCTS-HR) to prioritize the most relevant examples.  This ensures that LVLMs can leverage high-quality contextual reasoning for better and more consistent responses. Extensive experiments demonstrate that our framework achieves state-of-the-art performance on multiple VQA datasets, significantly outperforming In-Context Learning (ICL) and Vanilla-RAG methods. It highlights the effectiveness of our knowledge base and re-ranking method in improving LVLMs.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **研究动机**：大型视觉语言模型（LVLMs）在视觉问答（VQA）中虽有检索增强生成（RAG）方法，但现有方法面临两大挑战：①检索的知识缺乏推理示例，无法提供内在推理模式；②检索到的知识响应不稳定，未必能带来正面效果。
- **核心问题**：如何构建一个包含推理上下文的知识库，并有效排序检索到的样本，从而提升 LVLM 的指令对齐与推理能力，使其从“模糊知晓”走向“真正理解”。
- **整体含义**：提出一种名为 **RCTS** 的多模态 RAG 框架，通过自动生成推理上下文和基于树搜索的重排序，显著提高 VQA 准确率与鲁棒性。

## 2. 论文提出的方法论
### 2.1 核心思想
- 构建一个**富含推理上下文**的知识库（Reasoning Context-enriched Knowledge Base），利用 LVLM 自身生成候选推理步骤并验证其正确性。
- 采用**蒙特卡洛树搜索结合启发式奖励**（MCTS-HR）对检索到的样本进行重排序，选出最有助于回答当前问题的上下文示例。
- 整个框架训练无关（training-free），可灵活扩展至不同领域。

### 2.2 关键技术细节
- **推理上下文生成（Self-Consistent Evaluation）**：
  1. 对知识库中每个问答对 `(Q_kb, A_kb)`，用 LVLM 生成 Nc 个候选推理上下文 `{C_i}`。
  2. 将每个 `C_i` 与 `Q_kb` 拼接，让 LVLM 预测答案，并与真实答案 `A_kb` 比较得到评分 `Score_i`。
  3. 选择评分最高的推理上下文作为该问答对的最终推理上下文。
- **混合嵌入检索（Hybrid Embeddings）**：
  - 对用户查询中的文本和图像分别编码（BERT-base + ViT-MLP），得到 token 级混合嵌入。
  - 计算查询嵌入与知识库嵌入间的最大余弦相似度作为相关性分数，检索 Top-N 样本。
- **MCTS-HR 重排序**：
  - **动作空间**：Top-N 检索样本构成候选动作集，每个动作带有相似度分数 `s_i`。
  - **选动作**：使用基于相似度的概率分布 `P(a_i) = s_i / sum(s_j)` 采样，构建 K 个动作的序列（K=3）。
  - **奖励函数**：结合**自洽启发式奖励**（预测答案自身一致性）与**互惠启发式奖励**（对参考问题的预测正确性），加权得到最终奖励 `Q = α·Q_S + (1-α)·Q_M`（默认 α=0.2）。
  - **反向传播**：将奖励值回传至父节点并更新节点值，公式考虑了子节点平均质量与最佳子节点质量。
- **算法流程**：初始化根节点 → 节点选择 (UCT) → 动作扩展 → 分支模拟（拼接 K 个动作与用户查询生成 K-shot 提示） → 奖励评估 → 反向传播 → 迭代直到达到最大 rollout 数或早停条件。

## 3. 实验设计
### 3.1 数据集与场景
- **推理型 VQA**：ScienceQA（测试集 4241，知识库 16967）、MMMU-Dev（150 知识库 900）、MathV testmini（304 知识库 2736）。
- **非推理型 VQA**：VizWiz（val 4319，train 20523）、VSR-MC（test 1181，trainval 4440）。
- **基准**：各数据集官方划分，知识库与评估集无重叠。

### 3.2 对比方法
- **Zero-Shot**：无检索上下文。
- **ICL（随机检索）**：从知识库随机选取 K 个样本。
- **Vanilla-RAG（Top 检索）**：直接使用相似度最高的 K 个样本。

### 3.3 实验结果摘要
- 在三个 LVLM（Qwen2-VL 2B/7B，InternVL-2 8B）上，RCTS 全面超越所有基线。
- 平均提升：相对 Vanilla-RAG 在 Qwen2-VL (7B) 上提升 4.2%，InternVL-2 (8B) 上提升 3.9%。
- 在非推理数据集 VizWiz 和 VSR-MC 上也分别提升 1.61% 和 3.05%。

## 4. 资源与算力
- 文中明确说明：超过 7B 参数的 LVLM 使用 **4-bit AWQ 量化**，运行在 **单张 NVIDIA 4090 24GB GPU** 上。
- 未报告具体训练时长或总计算量（因为框架无需训练，仅需推理调用）。

## 5. 实验数量与充分性
- **实验数量**：主实验包含 3 种 LVLM × 5 个数据集 × 3 种基线 + RCTS，共约 60 组对比结果（部分表内省略）。此外还包括多个消融实验：
  - 关键组件消融（推理上下文、MCTS 的单独/联合效果，表4）。
  - 奖励策略消融（自洽、互惠、混合，图5a）。
  - 权重 α 敏感性（表5，取 0.0-1.0）。
  - Rollout 数量影响（图5b，测试 4,6,10,18,34）。
  - 推理上下文可靠性验证（表6，准确率 85%-100%）。
- **充分性评估**：实验覆盖多种模型规模、多种任务类型（推理型与非推理型）、多种对比条件。消融实验完备，验证了每个组件的贡献。公平性方面，所有方法使用相同 LVLM 和后处理，检索方式一致。
- **客观性**：除 MMMU 开发集（因测试集不可见）外，其余均使用官方测试集，结果可复现。

## 6. 论文的主要结论与发现
- RCTS 框架能有效解决 LVLM 在 VQA 中知识缺乏和响应不稳定的问题。
- 自动生成的推理上下文可为模型提供更丰富的内在推理模式，显著提升答案准确性。
- MCTS-HR 重排序优于简单 Top-N 检索，能够挑选出最有效的上下文示例，尤其适用于复杂推理场景。
- 推理上下文与 MCTS 两个组件互补，共同使用时效果最佳。
- 框架在非推理数据集上同样有效，说明其具有通用性。

## 7. 优点
- **创新性**：首次将树搜索与上下文重排序结合用于多模态 RAG，并引入启发式奖励函数。
- **自动化**：推理上下文完全由 LVLM 自生成并验证，无需人工标注。
- **训练无关**：无需微调模型，可快速适配新知识库。
- **解释性**：重排序过程可视化（附录 D），可分析每个分支的决策。
- **实验全面**：涵盖多种模型、多种任务类型，消融实验细致。

## 8. 不足与局限
- **知识库依赖性**：性能强烈依赖于知识库中是否存在与当前查询相似的样本；若无，则 MCTS-HR 无法改善（如 MMMU 上提升较小，图16 展示失败案例）。
- **计算开销**：MCTS 需要多次 LVLM 生成（rollout），虽然可在单 GPU 运行，但比 Vanilla-RAG 更耗时，需权衡性能与效率。
- **场景局限**：主要聚焦于多选或短文本回答的 VQA，对于长文本生成或开放域问答未验证。
- **未考虑多语言**：所有数据集均为英文，中文场景未测试。
- **公平性**：对比的 Vanilla-RAG 来自同一团队可复现工作，但未与其他最新多模态 RAG 方法（如 Wiki-LLaVA、EchoSight）直接比较。

（完）
