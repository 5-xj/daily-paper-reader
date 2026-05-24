---
title: "ReSearch: Learning to Reason with Search for LLMs via Reinforcement Learning"
title_zh: ReSearch：通过强化学习让LLM学会推理与搜索结合
authors: "Mingyang Chen, Linzhuang Sun, Tianpeng Li, sunhaoze, ZhouYijie, Chenzheng Zhu, Haofen Wang, Jeff Z. Pan, Wen Zhang, Huajun Chen, Fan Yang, Zenan Zhou, Weipeng Chen"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=OuGAwwAT8G"
tags: ["query:ad"]
score: 7.0
evidence: 通过强化学习训练LLM结合搜索，属于LLM引导的启发式搜索
tldr: 该研究针对大型语言模型在复杂多跳问答中难以有效整合外部搜索的问题，提出ReSearch框架，通过强化学习训练LLM将搜索操作作为推理链的组成部分，自主决定何时及如何进行搜索。方法无需任何推理步骤的监督数据，即可使模型学会在推理中动态调用搜索并利用结果推进推理。在Qwen2.5系列模型上的实验结果表明，该方法显著提升了多步推理的准确率，为LLM在需要外部知识的推理任务中提供了新的范式。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 现有LLM虽在推理方面表现优异，但难以将外部搜索过程自然融入推理链，尤其对于需要多步检索的复杂问题。
method: 提出ReSearch框架，将搜索操作视为推理链的组成单元，通过强化学习训练模型自主决定搜索时机与策略，无需任何推理步骤的监督数据。
result: 在Qwen2.5-7B和32B模型上训练后，模型在多跳问答任务上相比基线方法有显著提升，展示了搜索与推理深度融合的有效性。
conclusion: 该工作表明强化学习可以使LLM学会在推理中高效利用外部搜索，为构建具备检索增强能力的推理系统提供了新思路。
---

## Abstract
Large Language Models (LLMs) have shown remarkable capabilities in reasoning, exemplified by the success of OpenAI-o1 and DeepSeek-R1. However, integrating reasoning with external search processes remains challenging, especially for complex multi-hop questions requiring multiple retrieval steps. We propose ReSearch, a novel framework that trains LLMs to Reason with Search via reinforcement learning without using any supervised data on reasoning steps. Our approach treats search operations as integral components of the reasoning chain, where when and how to perform searches is guided by text-based thinking, and search results subsequently influence further reasoning. We train ReSearch on Qwen2.5-7B(-Instruct) and Qwen2.5-32B(-Instruct) models and conduct extensive experiments. Despite being trained on only one dataset, our models demonstrate strong generalizability across various benchmarks. Analysis reveals that ReSearch naturally elicits advanced reasoning capabilities such as reflection and self-correction during the reinforcement learning process.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：大型语言模型（LLM）虽然在推理方面表现优异（如 OpenAI-o1、DeepSeek-R1），但在需要外部搜索支持时，尤其是复杂多跳问题（multi-hop questions），LLM 难以将搜索过程自然地融入推理链。现有方法（如多步 RAG）依赖人工设计的提示或启发式策略，缺乏可扩展性，且标注推理步骤代价高昂。
- **整体含义**：该工作旨在通过强化学习（RL）让 LLM 自主学会何时及如何执行搜索，将搜索操作视为推理链的有机组成部分，从而提升复杂知识密集型任务的准确性，并为 LLM 结合外部搜索提供新的训练范式。

## 2. 方法论

### 核心思想
- 将搜索操作（search query 和 retrieval result）嵌入到推理链中，使用特殊标签（`<think>`、`<search>`、`<result>`、`<answer>`）组织生成过程。模型通过强化学习（GRPO）自主决定推理和搜索的交替，无需任何推理步骤的监督数据。

### 关键技术细节
- **算法**：采用 Group Relative Policy Optimization (GRPO)。对于每个输入，采样 G 个完成序列（rollout），计算组内归一化优势，优化目标包含裁剪和 KL 散度惩罚。
- **Rollout 过程**：模型生成文本，当遇到 `</search>` 标签时，将查询发送给搜索引擎，检索结果以 `<result>` 包围后拼接回当前序列，继续生成，直到遇到结束符。
- **检索结果掩码**：在损失计算中，忽略检索结果的 token，避免模型偏向外部检索内容。
- **训练模板**：为基座模型和指令微调模型分别设计了简洁的提示模板，指导模型按格式生成。
- **奖励函数**：仅基于最终答案的 F1 分数和格式正确性（标签、`\boxed{}` 是否存在），不依赖中间推理步骤。

## 3. 实验设计

### 数据集与基准
- **训练集**：仅使用 MuSiQue 的训练集（19938 样本）。
- **测试基准**：HotpotQA（7405 样本）、2WikiMultiHopQA（12576 样本）、MuSiQue dev（2417 样本）、Bamboogle（125 样本）。所有测试集均去除上下文文档，仅保留问题和答案。
- **对比方法**：
  - Naive Generation（无检索）
  - Naive RAG（单次检索 + 生成）
  - Iter-RetGen（迭代检索生成）
  - IRCoT（交织检索与 CoT）
- **评估指标**：Exact Match (EM) 和 LLM-as-a-Judge (LJ，使用 gpt-4o-mini 判断答案正确性)。

### 模型与实现
- 训练模型：Qwen2.5-7B、Qwen2.5-7B-Instruct、Qwen2.5-32B、Qwen2.5-32B-Instruct。
- 检索环境：基于 FlashRAG，使用 E5-base-v2 检索器，Wikipedia（2018 年 12 月）为知识库，每次检索 Top-5 结果。

## 4. 资源与算力

- 训练硬件：8 × 8 Nvidia H800 GPUs（即 8 节点，每节点 8 卡，共 64 张 H800），采用全参数优化和梯度检查点。
- 训练超参数：学习率 1e-6，batch size 256，训练 2 个 epoch，rollout 数 5，温度 1.0，KL 损失系数 0.001，裁剪比 0.2。具体训练时长未明确给出。

## 5. 实验数量与充分性

- **主要实验**：在 4 个多跳 QA 数据集上比较了 4 种基线与 ReSearch 的 4 种变体（7B/32B base/instruct），共报告了 32 个 EM 和 LJ 分数。
- **消融/分析实验**：
  - 训练过程中响应长度和搜索次数的变化曲线（图 3）。
  - 训练和验证奖励曲线（图 4）。
  - 案例研究展示了模型在训练中涌现的反思和自我纠正能力。
- **充分性评价**：实验覆盖了多个不同难度和来源的数据集，对比了主流多步 RAG 方法，且训练集仅用单一数据集而测试多个数据集，有效验证了泛化性。训练曲线和消解性分析增强了结论的可信度。实验设计客观、公平。

## 6. 主要结论与发现

- ReSearch 在所有基准上均显著优于基线方法。例如，在 7B 模型上，平均 EM 提升 15.81%，LJ 提升 17.56%；在 32B 模型上，平均 EM 提升 14.82%，LJ 提升 15.46%。
- 指令微调版（Instruct）优于基座版，且模型越大效果越好。
- **涌现能力**：模型在训练中自然学会了反思和自我纠正（例如意识到搜索查询错误并修正），这是通过强化学习自发形成的，无需预设启发式规则。
- 响应长度和搜索次数随训练增加，表明模型逐渐学会更充分地利用搜索工具。

## 7. 优点

- **创新性**：首次通过强化学习将搜索操作深度融入推理链，无需任何监督的推理步骤数据，实现了端到端的搜索与推理联合优化。
- **简洁有效**：仅使用基于最终答案的简单奖励（F1 + 格式），就能激发复杂的推理与搜索协调行为。
- **强泛化性**：单数据集训练即可泛化至多个不同类型的数据集，表明学到的是通用的“推理+搜索”能力，而非过拟合特定模式。
- **实验全面**：覆盖不同模型规模、不同基线方法，并提供了训练过程中的动态分析，结论可靠。

## 8. 不足与局限

- **场景限制**：当前框架主要适用于答案较简洁、可通过 F1 分数客观评估的多跳问答任务，对于需要长文本生成、主观判断的复杂任务，现有奖励函数可能不够。
- **知识源局限**：仅使用 Wikipedia 作为检索知识库，未探索领域特定知识库（如医疗、法律）或实时信息，限制了在专有场景的应用。
- **计算资源需求高**：训练需 64 张 H800 GPU，对硬件要求较高，可能阻碍小型团队复现。
- **未报告统计显著性检验**：虽提到 3 次运行取均值，但未提供误差线或置信区间。
- **潜在偏差**：检索结果可能引入源偏差，模型可能过度依赖搜索而忽略自身推理。

（完）
