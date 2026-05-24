---
title: "ResearchTown: Simulator of Human Research Community"
title_zh: ResearchTown：人类研究社区的模拟器
authors: "Haofei Yu, Zhaochen Hong, Zirui Cheng, Kunlun Zhu, Keyang Xuan, Jinwei Yao, Tao Feng, Jiaxuan You"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=CZPOIZqWwd"
tags: ["query:automatic-discovery"]
score: 9.0
evidence: 用大语言模型模拟研究社区以启发科学见解的自动发现
tldr: 提出ResearchTown多智能体框架，用大模型模拟研究社区，自动生成和发现科学想法。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 探究能否用大语言模型模拟人类研究社区以自动发现科学见解。
method: 将研究社区简化为智能体-数据图，并引入TextGNN进行文本推理。
result: 框架能模拟研究社区互动并自动产生新颖科学想法。
conclusion: 大模型模拟研究社区可促进自动科学发现。
---

## Abstract
Large Language Models (LLMs) have demonstrated remarkable potential in scientific domains, yet a fundamental question remains unanswered: Can we simulate human research communities with LLMs? Addressing this question can deepen our understanding of the processes behind idea brainstorming and inspire the automatic discovery of novel scientific insights. In this work, we propose ResearchTown, a multi-agent framework for research community simulation. Within this framework, the human research community is simplified as an agent-data graph, where researchers and papers are represented as agent-type and data-type nodes, respectively, and connected based on their collaboration relationships. We also introduce TextGNN, a text-based inference framework that models various research activities (e.g., paper reading, paper writing, and review writing) as special forms of a unified message-passing process on the agent-data graph. To evaluate the quality of the research community simulation, we present ResearchBench, a benchmark that uses a node-masking prediction task for scalable and objective assessment based on similarity. Our experiments reveal three key findings: (1) ResearchTown can provide a realistic simulation of collaborative research activities, including paper writing and review writing; (2) ResearchTown can maintain robust simulation with multiple researchers and diverse papers; (3) ResearchTown can generate interdisciplinary research ideas that potentially inspire pioneering research directions.

---

## 论文详细总结（自动生成）

# ResearchTown: Simulator of Human Research Community 论文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：能否用大语言模型（LLMs）模拟人类研究社区？
- **整体含义**：成功模拟可以深化对研究想法（idea brainstorming）背后过程的理解，并启发自动发现新颖科学见解。现有的多智能体LLM框架（如社交模拟、游戏模拟）不适用于复杂的合作研究活动（如论文写作、评审），而单智能体自动化研究框架（如AI Scientist）缺乏多研究者协作模拟能力。本文提出ResearchTown，将研究社区建模为智能体-数据图（agent-data graph），并用TextGNN统一模拟研究活动。

## 2. 论文提出的方法论

### 核心思想
- **智能体-数据图（Agent-Data Graph）**：一种异构图，包含两类节点：智能体节点（研究者）和数据节点（论文）。边类型包括智能体-数据（作者/评审）、数据-数据（引用）。智能体节点以LLM作为函数属性，数据节点以文本作为属性。
- **TextGNN**：一种基于文本的消息传递框架，将标准GNN中的嵌入空间消息传递替换为文本空间。所有隐藏状态为文本形式。通过设计不同的聚合函数（对应论文阅读、论文写作、评审写作）来模拟不同研究活动。

### 关键技术细节
- **三个阶段**：
  1. **论文阅读（Stage 1）**：插入新的智能体节点，聚合其邻接数据节点（论文摘要）生成研究者画像（Equation 6）。
  2. **论文写作（Stage 2）**：插入新的数据节点，聚合邻接智能体节点（研究者画像）和引文数据节点，生成论文内容（Equation 7）。
  3. **评审写作（Stage 3）**：基于已有论文节点，聚合评审者智能体节点和引文数据节点，生成评审意见和分数（Equation 8）。
- **公式说明**：每个阶段对应一层TextGNN，实际实现中使用全局聚合函数 `fg` 和智能体函数 `fa`（均为LLM加提示模板）进行文本级消息传递。例如论文写作：每个研究者先根据引文生成一个提案，再由全局聚合函数综合所有提案生成最终论文。
- **隐藏状态**：论文节点初始为全文，经过消息传递后转化为结构化五问格式（What is the problem? 等5个问题）的文本，评审节点转化为要点列表。

## 3. 实验设计

### 数据集 / 场景
- **ResearchBench**：包含两个子集
  - **PaperBench**：1000个论文写作任务，来自NeurIPS 2024和ICLR 2024（截止日期后，避免数据泄露）。按难度分为Hard（333）、Medium（334）、Easy（333）。
  - **ReviewBench**：200个评审写作任务，来自ICLR 2024。评审者由语义相似度从作者库中检索得到（排除原论文作者）。
- **High Impact Paper Bench**：额外100个高被引论文写作任务（来自10个顶级AI会议）。

### 对比方法
- **四种聚合策略**：
  - AGG-self：不使用任何邻居信息（LLM独立生成）
  - AGG-agent：仅使用邻居智能体节点
  - AGG-data：仅使用邻居数据节点（引文）
  - AGG-global：使用所有邻居（智能体+数据），即ResearchTown方法

### 评估指标
- **论文写作评估**：将生成论文和真实论文转换为统一五问格式，计算每个问题嵌入的余弦相似度平均（使用text-embedding-large-3和voyage-3）。
- **评审写作评估**：将评审转为要点列表，计算真实评审每个要点在生成评审中的最大相似度（召回率）；另计算评分差ΔS。
- **额外评估**：LLM-as-judge细粒度相似度（6维）、新颖性/可行性打分、人类评估。

## 4. 资源与算力

- 文中明确提到使用 **GPT-4o-mini**（具体版本 gpt-4o-mini-2024-07-18）作为LLM骨干，解码温度设为0。此外还使用 **Qwen-2.5-7B-Instruct** 和 **Deepseek-v3** 进行模型消融。
- **未明确说明**：使用的GPU型号、数量、训练时长、推理成本等。文章似乎只做推理，没有训练，但推理API调用量未定量给出。因此无法评估具体算力消耗。

## 5. 实验数量与充分性

- **主要实验**：
  - PaperBench：1000个论文写作任务 + 200个评审写作任务，覆盖四种聚合策略。
  - 消融实验：
    - 论文数量影响：使用论文的不同部分（全部、仅相关工作、仅引言等），296个任务。
    - 智能体数量影响：1-5个研究者（论文写作）和1-5个评审者（评审写作），分别使用172和200个任务。
    - 生成模型对比：3个模型（GPT-4o-mini, Qwen, Deepseek）。
    - 嵌入模型对比：text-embedding-large-3 vs voyage-3。
  - LLM-as-judge细粒度评估：6维度打分。
  - 新颖性/可行性评估：LLM和人类双评估（40个样本）。
  - 跨学科案例研究：多个领域组合（NLP+天文、NLP+犯罪学等）。

- **充分性判断**：实验设计全面，覆盖多种场景、消融和基准对比。但不足在于：所有实验使用单一开源/闭源API，未报告预算约束；人类评估样本量较小（40个）；缺乏运行多次的统计显著性检验（温度0固定，但随机性可能仍存在）。

## 6. 论文的主要结论与发现

1. **模拟真实性**：ResearchTown能提供真实的合作研究活动模拟。论文写作平均相似度0.68（Easy子集0.74），评审写作强度相似度0.51，弱点相似度0.47。评审写作更困难，尤其是弱点识别。
2. **鲁棒性**：
   - 增加智能体数量提升质量（从1个到5个，论文写作相似度从49.0升至57.3）。
   - 参考文献选择影响大（相关工作部分片段效果最好，相似度66.7）。
   - 对生成模型和嵌入模型鲁棒（不同模型下AGG-global均最优）。
3. **跨学科创新**：能产生新颖的跨学科研究想法，例如将天体物理学运动学模型应用于语言演化分析，或利用多模态LLM整合叙事分析与实时翻译支持受大规模监禁影响的社区。
4. **局限**：当组合过多无关领域时可能产生不连贯输出；模拟论文的新颖性和可行性略低于真实论文（但差距不大）。

## 7. 优点

- **统一图框架**：将研究社区建模为智能体-数据图，利用GNN消息传递思想统一多种研究活动（阅读、写作、评审），结构清晰且可扩展。
- **可扩展评估**：利用图结构自然定义masked node prediction任务，通过嵌入相似度自动评估，避免了昂贵且主观的人工评估。
- **跨学科能力**：通过组合不同领域智能体自动生成新颖跨学科想法，具有启发性。
- **丰富消融**：系统分析了智能体数量、论文数量、生成模型、嵌入模型等影响因素，验证了鲁棒性。
- **开源**：代码和基准数据均已公开，促进复现和后续研究。

## 8. 不足与局限

- **实验覆盖不足**：
  - 仅使用论文摘要/全文文本，未涉及图表、代码等模态。
  - 评估主要依赖嵌入相似度，可能无法完全反映研究质量（如方法正确性、结果可靠性）。
  - 人类评估样本量仅40个，相关性可能有限。
- **偏差风险**：
  - 使用单一LLM（GPT-4o-mini）可能引入模型偏见；不同模型结果差异（如评审分数偏差）说明依赖性。
  - 论文选择来自顶级会议，可能无法代表一般研究社区。
  - 评审者检索基于语义相似度，未模拟真实评审者分配过程。
- **应用限制**：
  - 生成的论文内容仅为要点摘要，非完整论文，实际使用需人工完善。
  - 跨学科组合过多时产生不连贯输出，说明框架对领域组合敏感。
  - 未评估对实际科学发现促进作用的实证效果。
- **算力开销未讨论**：虽然使用API，但多次调用（每篇论文需多个智能体生成）可能成本较高，文中未分析。

（完）
