---
title: "ResearchTown: Simulator of Human Research Community"
title_zh: 研究小镇：人类研究社区模拟器
authors: "Haofei Yu, Zhaochen Hong, Zirui Cheng, Kunlun Zhu, Keyang Xuan, Jinwei Yao, Tao Feng, Jiaxuan You"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=CZPOIZqWwd"
tags: ["query:automatic-discovery"]
score: 9.0
evidence: 使用大模型模拟研究社区以实现自动发现
tldr: 多智能体框架模拟研究社区以启发自动发现
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 探索能否用大模型模拟人类研究社区以促进科学发现。
method: 构建智能体-数据图，引入TextGNN进行文本推理。
result: 成功模拟协作与创新过程。
conclusion: 为自动科学发现提供了新范式。
---

## Abstract
Large Language Models (LLMs) have demonstrated remarkable potential in scientific domains, yet a fundamental question remains unanswered: Can we simulate human research communities with LLMs? Addressing this question can deepen our understanding of the processes behind idea brainstorming and inspire the automatic discovery of novel scientific insights. In this work, we propose ResearchTown, a multi-agent framework for research community simulation. Within this framework, the human research community is simplified as an agent-data graph, where researchers and papers are represented as agent-type and data-type nodes, respectively, and connected based on their collaboration relationships. We also introduce TextGNN, a text-based inference framework that models various research activities (e.g., paper reading, paper writing, and review writing) as special forms of a unified message-passing process on the agent-data graph. To evaluate the quality of the research community simulation, we present ResearchBench, a benchmark that uses a node-masking prediction task for scalable and objective assessment based on similarity. Our experiments reveal three key findings: (1) ResearchTown can provide a realistic simulation of collaborative research activities, including paper writing and review writing; (2) ResearchTown can maintain robust simulation with multiple researchers and diverse papers; (3) ResearchTown can generate interdisciplinary research ideas that potentially inspire pioneering research directions.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：能否利用大语言模型（LLM）模拟人类研究社区？
- **研究动机**：
  - 深入理解研究想法产生的底层过程。
  - 启发和加速新颖科学发现的自动化过程。
- **背景**：现有LLM多智能体框架成功应用于社会模拟、游戏模拟，但无法处理研究社区中复杂的协作活动（如论文写作、审稿）。现有研究自动化工作多限于单一任务或单智能体工作流，缺乏多智能体协作模拟能力。

## 2. 方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：将研究社区抽象为**智能体-数据图（agent-data graph）**，其中：
  - 智能体节点（agent node）代表研究人员，其属性为LLM函数。
  - 数据节点（data node）代表论文、审稿等，属性为文本。
  - 边包括：作者关系、引用关系、审稿关系。
- **关键技术**：**TextGNN**——一种基于文本的消息传递框架，将研究活动建模为图上的消息传递过程。所有隐藏状态均为文本形式。
- **算法流程（三个阶段）**：
  - **阶段1：论文阅读**：插入新智能体节点，聚合其邻接论文信息，生成研究者画像（公式6）。
  - **阶段2：论文写作**：插入新数据节点，聚合作者智能体与引用论文的信息，生成论文内容（公式7）。
  - **阶段3：审稿写作**：基于已生成的论文，聚合审稿人智能体与引用论文信息，生成审稿（公式8）。
- **整体模拟算法**：可视为2层GNN，第一层为论文阅读，第二层为论文写作与审稿写作（Algorithm 1）。

## 3. 实验设计

- **数据集与场景**：
  - **ResearchBench** 包含：
    - **PaperBench**：1000个论文写作任务，来自NeurIPS 2024和ICLR 2024，按难度分为easy/medium/hard。
    - **ReviewBench**：200个审稿写作任务，来自ICLR 2024。
    - **High Impact PaperBench**：100个高被引论文任务（用于极端测试）。
- **评估方法**：节点掩码预测任务——掩码目标论文节点，用模型预测其内容，与真实内容计算语义相似度（使用text-embedding-large-3和voyage-3嵌入模型）。
- **对比方法**：四种聚合策略（AGG-self, AGG-agent, AGG-data, AGG-global）作为基线。AGG-global为完整ResearchTown方法。
- **消融实验**：
  - 论文数量（不同引用部分）
  - 智能体数量（1–5）
  - 生成模型（GPT-4o-mini, Qwen-2.5-7B-Instruct, Deepseek-v3）
  - 嵌入模型（voyage-3 vs text-embedding-large-3）
  - 人工评价（40篇论文的相似度、新颖性、可行性）

## 4. 资源与算力

- **未明确说明**：
  - 论文未提及使用的GPU型号、数量或训练时长。
  - 仅说明使用GPT-4o-mini（通过API调用）、Qwen-2.5-7B-Instruct和Deepseek-v3（通过推理API），解码温度设为0。
  - 未报告任何训练或推理阶段的硬件资源消耗。

## 5. 实验数量与充分性

- **实验数量**：
  - 主要实验：1000篇论文写作任务 + 200篇审稿写作任务 + 100篇高影响论文任务。
  - 消融实验：
    - 论文数量消融：296个任务（按引用部分划分）。
    - 智能体数量消融：172个任务（硬子集，论文作者≥5）。
    - 生成模型对比：3种模型，全部任务。
    - 嵌入模型对比：2种。
    - 人工评估：40篇。
    - LLM-as-judge细粒度评估：1000篇。
- **充分性**：实验覆盖了多种变量（难度、参考文献数量、智能体数量、模型、嵌入），并采用了自动评估和人工评估相结合的方式，具有较强的系统性和全面性。但仅在ML会议论文上评估，领域泛化性未验证。
- **客观公平性**：使用了随机采样、标准嵌入模型、消融设计，并进行了人工验证（与LLM评估相关性0.61）。但实验依赖闭源API，可重复性受限。

## 6. 主要结论与发现

1. **模拟真实性**：ResearchTown能够真实模拟协作研究活动，论文写作平均相似度0.68（text-embedding-large-3），审稿写作强度和弱点相似度分别为0.51和0.47。
2. **鲁棒性**：
   - 增加智能体数量可提升论文写作和审稿写作质量。
   - 使用相关工作中引用的论文效果最佳。
   - 对不同生成模型（Deepseek-v3优于GPT-4o-mini优于Qwen）和嵌入模型均表现一致。
3. **跨学科灵感**：ResearchTown能生成不存在于现实中的跨学科研究想法（如NLP+天文学、NLP+犯罪学），但也可能产生不连贯的输出（当领域组合过于分散时）。

## 7. 优点

- **框架创新性**：首次将研究社区模拟形式化为图上的消息传递过程，统一了多种研究活动的建模。
- **评估可扩展性**：提出节点掩码预测任务，提供客观、可扩展的自动化评估，避免了传统人工评估的主观性和高成本。
- **多智能体协作**：通过智能体-数据图实现了研究人员之间的间接协作，并在消融实验中证明了协作的好处。
- **跨学科生成能力**：展示了生成新颖、非现有研究方向的潜力，有助于启发创新。
- **充分的消融实验和鲁棒性验证**：对关键超参数（智能体数、论文数、模型）进行了系统分析。

## 8. 不足与局限

- **生成质量差距**：模拟的论文和审稿虽然在语义上接近真实，但在新颖性和可行性方面仍低于真实论文（LLM评估：新颖性7.39 vs 7.85；可行性6.82 vs 7.13），且审稿弱点识别更困难。
- **跨学科生成不稳定**：当组合过多无关领域时，输出可能成为术语拼凑，缺乏聚焦和实用性。
- **依赖闭源模型**：主要实验基于GPT-4o-mini等API模型，研究可重复性和成本受限于第三方。
- **评估偏差**：
  - 嵌入相似度可能无法捕捉逻辑一致性、理论基础等细微方面。
  - LLM-as-judge评估与人类评估在内在质量（新颖性、可行性）上相关性低（未报告具体值）。
  - 实验仅覆盖ML会议论文，未检验在其他学科（如物理、生物）的泛化能力。
- **计算资源未报告**：缺乏训练/推理成本分析，不利于资源评估和公平比较。
- **伦理问题**：存在促进抄袭、产生低质量或误导性声明的潜在风险（论文已讨论并设计了限制措施，但实际效果需验证）。

（完）
