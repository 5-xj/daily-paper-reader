---
title: "KBQA-o1: Agentic Knowledge Base Question Answering with Monte Carlo Tree Search"
title_zh: "KBQA-o1: 基于蒙特卡洛树搜索的智能知识库问答"
authors: "Haoran Luo, Haihong E, Yikai Guo, Qika Lin, Xiaobao Wu, Xinyu Mu, Wenhao Liu, Meina Song, Yifan Zhu, Anh Tuan Luu"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=QuecSemZIy"
tags: ["query:automatic-discovery"]
score: 5.0
evidence: 蒙特卡洛树搜索作为计算发现中的启发式方法
tldr: 将MCTS启发式搜索与大模型结合用于知识库问答，与启发式发现相关。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-quecsemziy/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 1456, \"height\": 1634}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-quecsemziy/fig-002.webp\", \"caption\": \"\", \"page\": 1, \"index\": 2, \"width\": 1200, \"height\": 987}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-quecsemziy/fig-003.webp\", \"caption\": \"\", \"page\": 2, \"index\": 3, \"width\": 840, \"height\": 1200}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-quecsemziy/fig-004.webp\", \"caption\": \"\", \"page\": 12, \"index\": 4, \"width\": 2910, \"height\": 830}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-quecsemziy/fig-005.webp\", \"caption\": \"\", \"page\": 12, \"index\": 5, \"width\": 2910, \"height\": 1132}]"
motivation: 现有方法在知识库问答中缺乏高效探索和效果平衡。
method: 提出基于ReAct的代理过程和MCTS启发式搜索生成逻辑形式。
result: MCTS平衡了探索性能与搜索空间，生成了高质量的推理路径。
conclusion: MCTS启发式搜索有效提升了知识库问答的效率和效果。
---

## Abstract
Knowledge Base Question Answering (KBQA) aims to answer natural language questions with a large-scale structured knowledge base (KB). Despite advancements with large language models (LLMs), KBQA still faces challenges in weak KB awareness, imbalance between effectiveness and efficiency, and high reliance on annotated data. To address these challenges, we propose KBQA-o1, a novel agentic KBQA method with Monte Carlo Tree Search (MCTS). It introduces a ReAct-based agent process for stepwise logical form generation with KB environment exploration. Moreover, it employs MCTS, a heuristic search method driven by policy and reward models, to balance agentic exploration's performance and search space. With heuristic exploration, KBQA-o1 generates high-quality annotations for further improvement by incremental fine-tuning. Experimental results show that KBQA-o1 outperforms previous low-resource KBQA methods with limited annotated data, boosting Llama-3.1-8B model's GrailQA F1 performance to 78.5% compared to 48.5% of the previous sota method with GPT-3.5-turbo. Our code is publicly available.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义

知识库问答（KBQA）旨在利用大规模结构化知识库（如 Freebase）回答自然语言问题。现有方法面临三个主要挑战：  
- **弱 KB 意识**：端到端方法直接生成逻辑形式，难以感知 KB 中的未见实体和关系。  
- **效果与效率不平衡**：逐步方法（CoT）易陷入局部最优，而树状搜索（ToT）搜索空间过大。  
- **高标注依赖**：训练开源 LLM 需要大量高质量标注数据，人工标注成本高。

本文提出 **KBQA-o1**，一种基于蒙特卡洛树搜索（MCTS）的智能体 KBQA 方法，通过启发式探索 KB 环境、结合策略模型和奖励模型，在低资源条件下显著提升性能，减少对标注数据的依赖。

---

### 2. 方法论：核心思想、关键技术细节

- **整体架构**：采用 **ReAct 式 agent** 逐步生成逻辑形式。Agent 拥有八种原子查询工具（如 Extract entity、Find relation、Merge、Compare 等），每步从 KB 环境中获取候选动作，形成探索空间。
- **关键组件**：
  - **策略模型**（π_policy）：根据当前状态预测后续步骤序列，使用少量标注数据通过 SFT 训练。
  - **奖励模型**（π_reward）：评估完整逻辑形式的质量，同样通过 SFT 训练。
  - **MCTS 过程**：包括选择（UCT 公式平衡探索与利用）、扩展（策略模型生成候选，SimCSE 匹配 KB 选项）、模拟（沿高分路径生成完整轨迹）、反向传播（结合策略模型和奖励模型计算 Q 值并更新节点）。
- **增量微调**：对无标签问题，使用 MCTS 探索生成候选逻辑形式，过滤掉空答案或低奖励（阈值 γ*）的样本，形成自动标注数据，再对策略模型和奖励模型进行增量 SFT。

技术细节公式包括：  
- 策略模型损失：\( L_{SFT}(\pi_{policy}, D_a) = -\mathbb{E}_{D_a}[\sum_{t=1}^l \log \pi_{policy}(\sum_{i=t}^l e_i | h_{t-1})] \)  
- 奖励模型损失：\( L_{SFT}(\pi_{reward}, D_a) = -\mathbb{E}_{D_a}[\log \pi_{reward}(F_{h_l} | Q)] \)  
- Q 值计算：\( Q(h_l) \leftarrow \delta R_{\pi_{policy}}(e_l|h_{l-1}) + (1-\delta)R_{\pi_{reward}}(F_{h_l}|Q) \) （δ=0.5）

---

### 3. 实验设计

- **数据集**：GrailQA（含 I.I.D、Compositional、Zero-shot 三个子集）、WebQSP、GraphQ，均基于 Freebase。
- **低资源设置**：GrailQA 使用 40-shot（40 个标注样本），WebQSP 和 GraphQ 使用 100-shot。
- **基准方法**：
  - 全监督方法：RnG-KBQA、DecAF、TIARA 等。
  - 低资源方法：KB-BINDER、KB-Coder、ARG-KBQA（均基于 GPT-3.5-turbo）。
  - 本文还对比了端到端变体（RG-E2E、GR-E2E）和逐步变体（CoT-SbS、ToT-SbS）以分析 MCTS 的优势。
- **评估指标**：F1 和 Exact Match（EM），GrailQA 报告三个子集和整体结果，WebQSP 和 GraphQ 报告 F1。
- **基座模型**：多种开源 LLM，包括 Llama-3.1-8B/70B、Qwen2.5-7B/14B/32B/72B、Gemma-2-9B/27B。

---

### 4. 资源与算力

论文明确说明：所有实验在 **8 张 NVIDIA A40 GPU（48GB）** 上完成。每张 GPU 内存 48GB，但未提及训练总时长或具体推理时间。

---

### 5. 实验数量与充分性

- **主要实验**：三个数据集（GrailQA、WebQSP、GraphQ）上的低资源结果（Table 2,3,4），对比多种 LLM 尺寸。
- **消融实验**（Table 5）：移除 agent 提示、KB 环境、初始 SFT、MCTS、增量微调等模块。
- **对比分析**（Figure 4）：与端到端和逐步方法在各子集和逻辑算子上的 F1 对比，以及查询效率（图 c）。
- **增量学习分析**（Figure 5）：探索样本数量、奖励阈值、探索权重对性能的影响。
- **多 LLM 支持**：验证了三个系列、多种尺寸模型的通用性。

实验设计较为全面，覆盖了不同难度子集、不同模型规模以及关键模块的独立贡献。消融实验和对比分析客观展示了 MCTS 和增量微调的有效性。

---

### 6. 论文的主要结论与发现

- KBQA-o1 在低资源设置下大幅超越此前基于 GPT-3.5-turbo 的最优方法（GrailQA 上 F1 提升 30 个百分点），甚至在某些子集上超越全监督方法。
- MCTS 平衡了探索性能和搜索空间，优于 CoT（局部最优）和 ToT（搜索空间过大）。
- 增量微调利用自动标注数据（通过 MCTS 生成并经奖励模型过滤）持续提升模型性能，且存在最优奖励阈值。
- 该方法可即插即用，支持多种开源 LLM，具有良好的可扩展性。

---

### 7. 优点

- **方法创新性**：首次将 MCTS 引入 KBQA 的 agent 过程，结合策略模型和奖励模型进行启发式搜索，兼顾效果与效率。
- **低资源友好**：通过少量标注数据启动，利用自动标注实现增量提升，降低人工成本。
- **灵活可扩展**：支持多种开源 LLM 和不同规模，实验结果稳定且可复现。
- **实验设计严谨**：消融、对比、参数分析完整，验证了各组件必要性。

---

### 8. 不足与局限

- **实验范围有限**：仅在 Freebase 上的三个数据集测试，未在 Wikidata 等其他常用 KB 或专业领域（医疗、法律）验证，泛化性存疑。
- **搜索效率仍有限制**：尽管 MCTS 优于 ToT，但图 4(c) 显示其推理速度仍慢于 CoT，实际部署时可能需要更优的剪枝策略。
- **依赖 SimCSE 进行语义匹配**：扩展阶段使用无监督检索模型，可能引入匹配误差；更精准的匹配方法或可进一步提升。
- **增量微调需要大量未标注数据**：在无标签数据稀缺的场景下，该方法的优势可能减弱。
- **奖励阈值 γ* 需要手动调节**：不同数据集最优值差异大（-100、30、-50），缺乏自适应机制。
- **未讨论模型幻觉与安全性**：LLM 生成逻辑形式仍可能产生幻觉，论文未对此进行鲁棒性分析。

---

（完）
