---
title: "Forest-of-Thought: Scaling Test-Time Compute for Enhancing LLM Reasoning"
title_zh: 思维森林：扩展测试时计算以增强大模型推理
authors: "Zhenni Bi, Kai Han, Chuanjian Liu, Yehui Tang, Yunhe Wang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=BMJ3pyYxu2"
tags: ["query:automatic-discovery"]
score: 6.0
evidence: 使用多棵推理树作为启发式搜索引导大模型
tldr: 集成多棵推理树，通过集体决策增强大模型推理
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-001.webp\", \"caption\": \"\", \"page\": 6, \"index\": 1, \"width\": 3600, \"height\": 2400}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-002.webp\", \"caption\": \"\", \"page\": 7, \"index\": 2, \"width\": 287, \"height\": 949}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-003.webp\", \"caption\": \"\", \"page\": 7, \"index\": 3, \"width\": 1000, \"height\": 949}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-004.webp\", \"caption\": \"\", \"page\": 7, \"index\": 4, \"width\": 1089, \"height\": 949}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-005.webp\", \"caption\": \"\", \"page\": 7, \"index\": 5, \"width\": 1042, \"height\": 949}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-006.webp\", \"caption\": \"\", \"page\": 7, \"index\": 6, \"width\": 1600, \"height\": 1200}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-007.webp\", \"caption\": \"\", \"page\": 8, \"index\": 7, \"width\": 640, \"height\": 480}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-008.webp\", \"caption\": \"\", \"page\": 14, \"index\": 8, \"width\": 1039, \"height\": 816}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-009.webp\", \"caption\": \"\", \"page\": 14, \"index\": 9, \"width\": 1039, \"height\": 816}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-010.webp\", \"caption\": \"\", \"page\": 14, \"index\": 10, \"width\": 1039, \"height\": 816}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-011.webp\", \"caption\": \"\", \"page\": 14, \"index\": 11, \"width\": 1039, \"height\": 816}]"
motivation: 现有推理方法单次遍历无法修正错误路径，影响准确性。
method: 提出Forest-of-Thought框架，融合多个推理树并采用稀疏激活策略选择路径。
result: 在复杂逻辑问题上提升了推理准确性和效率。
conclusion: 多树集成与稀疏激活有效增强了大模型推理能力。
---

## Abstract
Large Language Models (LLMs) have demonstrated remarkable abilities across various language tasks, but solving complex reasoning problems remains a significant challenge. While existing methods, such as Chain-of-Thought (CoT) and Tree-of-Thought (ToT), enhance reasoning by decomposing problems or structuring prompts, they typically perform a single pass of reasoning and may fail to revisit flawed paths, compromising accuracy. To address this limitation, we propose a novel reasoning framework called Forest-of-Thought (FoT), which integrates multiple reasoning trees to leverage collective decision-making for solving complex logical problems. FoT employs sparse activation strategies to select the most relevant reasoning paths, improving both efficiency and accuracy. Additionally, we introduce a dynamic self-correction strategy that enables real-time error correction, along with consensus-guided decision-making strategies to optimize both correctness and computational resources. Experimental results demonstrate that the FoT framework, combined with these strategies, significantly enhances the reasoning capabilities of LLMs, enabling them to solve complex tasks with greater precision and efficiency.

---

## 论文详细总结（自动生成）

# 论文详细总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：大规模语言模型（LLM）在处理复杂推理任务时，现有方法（如 Chain-of-Thought、Tree-of-Thought）通常只进行单次推理，一旦出现错误路径难以回溯修正，导致准确性不足。
- **整体目标**：提出一种新的推理框架 **Forest-of-Thought (FoT)**，通过集成多棵推理树并利用集体决策来增强 LLM 的推理能力，同时引入稀疏激活、动态自纠正和共识引导策略来平衡效率与准确性。

## 2. 论文提出的方法论

- **核心思想**：构建多棵独立的推理树（如 ToT 或 MCTSr），每棵树从不同角度探索解空间，通过稀疏激活机制仅保留有效路径，再利用动态自纠正和共识决策输出最终答案。
- **关键技术细节**：
  - **稀疏激活 (Sparse Activation)**：对每棵推理树的每层节点进行评估，仅保留 top-scoring 节点继续扩展；若某棵树在某层无有效输出，则整树被剪枝，从而节省计算资源。
  - **输入数据增强 (Input Data Augmentation)**：从外部知识库 B 中检索与输入最相似的问题，拼接后作为增强输入，引导模型进行“慢思考”。
  - **动态自纠正 (Dynamic Self-Correction)**：监控每步推理的 logits 分数，若低于阈值（如 0.5），则自动触发纠正：若存在数学规则则应用规则修正，否则利用 LLM 结合知识库重新生成。
  - **共识引导决策 (Consensus-Guided Expert Decision, CGED)**：各激活树产出候选答案后，先进行多数投票；若存在不一致，由 LLM 专家比较推理过程并选择最合理答案。
- **算法流程**（文字说明）：
  1. 对输入 x 进行增强（检索知识库）。
  2. 并行运行 n 棵推理树，每棵树执行稀疏激活和自纠正，获得结果 si 及激活标志 φi。
  3. 仅保留 φi=1 的树的结果。
  4. 将保留的结果送入 CGED 策略，得到最终答案。

## 3. 实验设计

- **数据集**：
  - **Game of 24**：95 个可解问题（来自 4nums.com）。
  - **GSM8K**：小学数学文字题。
  - **MATH**：数学竞赛题（按难度分 1-5 级）。
  - **AIME 2024**：美国数学邀请赛题。
- **基准方法**：IO、CoT、CoT-SC、GoT、ToT、BoT、XoT、MCTSr、rStar-Math、GPT-4o 等。
- **对比模型**：
  - Base Models：Llama3-8B-Instruct、Mistral-7B、GLM-4-9B、Qwen2.5-Math-7B-Instruct、QwQ-32B-preview。
  - 推理树构建：ToT 和 MCTSr 变体（不同 rollout 数）。
- **主要指标**：成功率（Game of 24）和准确率（GSM8K、MATH、AIME）。

## 4. 资源与算力

- **论文未明确说明 GPU 型号、数量及训练时长**。
- 提及使用 **MindSpore、CANN 和 Ascend AI Processor（华为昇腾）** 进行计算，但未披露具体资源规模。

## 5. 实验数量与充分性

- **实验组数**：
  - Game of 24 主表（表 2）对比 8 种方法。
  - 消融实验（表 1）：逐步添加自纠正、输入增强、稀疏激活，并报告 LLM 调用次数。
  - GSM8K 缩放律（图 2、图 3）：不同基础模型和不同子树数量，验证一致性趋势。
  - MATH 分难度对比（图 4）：FoT vs MCTSr 在 4 个难度层级的提升。
  - 停止策略消融（表 3）：多数投票、数学专家、CGED 在 n=2~5 时的准确率。
  - 阈值影响（表 13）：不同自纠正阈值（0.3~0.6）对 GSM8K 准确率的影响。
  - 决策方法对比（表 12）：随机 vs 分数 vs CGED。
  - 主表（表 4）：在 GSM8K、MATH-500、AIME 2024 上与 rStar-Math、GPT-4o 等对比。
- **充分性评价**：实验较为充分，涵盖不同推理树类型、不同模型规模、不同难度任务，并进行了丰富的消融和缩放律分析。但缺少在更多 NLP 推理任务（如常识推理、逻辑推理）上的验证。

## 6. 论文的主要结论与发现

- FoT 框架通过集成多棵推理树并采用稀疏激活、动态自纠正和 CGED 策略，显著提升 LLM 在数学推理任务上的准确率。
- 在 Game of 24 上，FoT (n=8) 达到 **96.84%** 成功率，远超 ToT (74.00%) 和 BoT (82.40%)。
- 在 GSM8K 上，FoT (n=4) 基于 QwQ 达到 **97.33%**，超越 GPT-4o (92.90%) 和 rStar-Math (95.20%)。
- 缩放律试验表明，激活更多子树（n 增大）可稳定提升准确率，且增益在大模型上更显著。
- 动态自纠正策略在中等阈值（0.5）时效果最佳。
- CGED 策略在子树数量较多时优于简单多数投票。

## 7. 优点（方法与实验设计亮点）

- **方法上的创新**：
  - 首次提出“多树集成 + 稀疏激活”的框架，兼顾集体智能与计算效率。
  - 动态自纠正机制可根据 logits 分数实时触发修正，避免固定迭代次数的弊端。
  - 共识引导决策结合多数投票与专家判断，提升鲁棒性。
- **设计亮点**：
  - 输入增强利用外部知识库，引导模型进行“慢思考”。
  - 提供多种推理树实例（ToT、MCTSr），验证框架通用性。
  - 对不同基础模型进行了规模化验证，展示可迁移性。

## 8. 不足与局限

- **计算成本较高**：尽管采用稀疏激活，但需要同时运行多棵推理树，总体计算量仍显著大于单树方法（如表1显示 LLM 调用约 27-32 次）。
- **实验覆盖有限**：
  - 仅测试数学推理（Game of 24、GSM8K、MATH、AIME），未涉及常识推理、符号推理或开放域问答。
  - 未在更大规模模型（如 70B、130B）上进行验证。
- **偏差风险**：
  - 自纠正阈值（0.5）可能依赖特定数据集调优，泛化性需进一步检验。
  - 知识库构建依赖公开数据集，可能引入检索偏差。
- **应用限制**：
  - 依赖于 LLM 的自评价能力（logits 分数），对不太自信的模型可能效果不佳。
  - 无法处理需要长期依赖或深层回溯的复杂问题，树深度可能指数增长。

（完）
