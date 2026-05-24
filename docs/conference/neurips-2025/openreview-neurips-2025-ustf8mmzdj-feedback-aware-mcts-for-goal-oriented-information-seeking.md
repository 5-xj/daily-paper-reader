---
title: Feedback-Aware MCTS for Goal-Oriented Information Seeking
title_zh: 带反馈的蒙特卡洛树搜索用于目标导向的信息寻求
authors: "Harshita Chopra, Chirag Shah"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=ustF8MMZDJ"
tags: ["query:ad"]
score: 6.0
evidence: LLM生成问题，MCTS选择以最大化信息获取
tldr: 该论文针对对话系统中高效获取缺失信息的问题，提出结合大语言模型与蒙特卡洛树搜索的框架。LLM生成候选问题，MCTS选择信息增益最大的问题，并引入层次化反馈机制利用历史交互模式。实验表明该方法在多个信息寻求任务中显著优于基线。这项工作展示了LLM与启发式搜索结合的潜力，但聚焦于信息寻求而非科学发现。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-ustf8mmzdj/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 360, \"height\": 360}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-ustf8mmzdj/fig-002.webp\", \"caption\": \"\", \"page\": 2, \"index\": 2, \"width\": 360, \"height\": 360}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-ustf8mmzdj/fig-003.webp\", \"caption\": \"\", \"page\": 9, \"index\": 3, \"width\": 490, \"height\": 390}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-ustf8mmzdj/fig-004.webp\", \"caption\": \"\", \"page\": 14, \"index\": 4, \"width\": 1308, \"height\": 980}]"
motivation: 对话系统需要高效提问以缩小可能性空间，但现有方法缺乏对信息增益的智能规划。
method: 利用LLM生成问题候选，MCTS进行策略性选择，并结合层次化反馈机制利用历史模式指导后续提问。
result: 在多个基准数据集上，该方法在信息获取效率和准确性上优于现有方法。
conclusion: 该方法有效结合LLM和搜索策略，为信息寻求任务提供了可行范式，但对科学发现领域的直接贡献有限。
---

## Abstract
Effective decision-making and problem-solving in conversational systems require the ability to identify and acquire missing information through targeted questioning. A key challenge lies in efficiently narrowing down a large space of possible outcomes by posing questions that minimize uncertainty. To address this, we introduce a novel framework that leverages Large Language Models (LLMs) to generate information-seeking questions, with Monte Carlo Tree Search (MCTS) to strategically select questions that maximize information gain, as a part of inference-time planning. Our primary contribution includes a hierarchical feedback mechanism that exploits past interaction patterns to guide future strategy. Specifically, each new problem is mapped to a cluster based on semantic similarity, and our UCT (Upper Confidence bound for Trees) formulation employs a cluster-specific bonus reward to prioritize successful question trajectories that have proven effective for similar problems in the past. Extensive empirical evaluation across medical diagnosis and technical troubleshooting domains shows that our method achieves an average of 12\% improvement in success rates and about 10x reduction in the number of LLM calls made for planning per conversation, compared to the state of the art. An additional 8\% gain in success rate is observed on average when we start with a constrained set of possibilities. Our results underscore the efficacy of feedback-aware MCTS in enhancing information-seeking in goal-oriented dialogues.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：在目标导向的对话系统中，系统需要通过提问高效地获取缺失信息，以缩小大规模可能性空间。现有方法（如直接提示或穷举树搜索）缺乏对信息增益的智能规划，且计算成本高。
- **整体含义**：本文提出 **MISQ-HF**（Monte Carlo Tree Search for Information Seeking Questions with Hierarchical Feedback）框架，将大语言模型（LLM）的问题生成能力与蒙特卡洛树搜索（MCTS）的策略选择相结合，并引入基于聚类的层次化反馈机制，利用历史成功交互模式指导未来提问，从而在提升任务成功率的同时大幅降低LLM调用次数。

## 2. 论文提出的方法论

### 核心思想
- 利用LLM生成候选问题，MCTS在推理时动态构建并探索决策树，选择预期信息增益最大的问题。
- 通过语义聚类将新问题映射到历史成功簇，在UCT（Upper Confidence bound for Trees）公式中加入簇特定的奖励偏置，优先选择对相似问题有效的提问路径。

### 关键技术细节
- **决策树构建**：每个节点存储当前可能性集合Ω_v，LLM根据Ω_v和祖先上下文生成m个候选问题，每个问题将Ω_v二分（肯定/否定回答），对应两个子节点。
- **信息增益奖励**：基于熵的奖励函数 \( R_{IG}(v) = -p_A \log p_A - p_N \log p_N \) 除以缩放项，奖励平衡分割。
- **MCTS四阶段**：选择（UCT公式，加入簇奖励）、扩展（若节点无子节点则生成问题）、模拟（随机展开至深度ds）、反向传播（更新累计奖励R_total和访问次数）。
- **反馈机制**：成功后沿路径反向传播奖励，公式 \( B_k(v) \leftarrow B_k(v) + \beta \cdot R_{total}(v) \cdot \gamma^{d_v} \)，其中γ为衰减因子，强调早期问题。
- **最终UCT**：\( UCT_{feedback}(v, k) = R_{total}(v)/N_v + C\sqrt{\ln N_p/N_v} + B_k(v) \)。

### 算法流程（文字说明）
1. 对每个新样本，用DistilBERT/Clinical-BERT生成问题描述嵌入，通过余弦相似度分配给已有簇或创建新簇。
2. 初始化根节点可能性集合（可为完整Ω或约束子集）。
3. 循环至最大轮次T或目标识别成功：
   - 若在信息寻求阶段（前δT轮）且|Ω_v|≥2，执行MCTS（K次迭代）选择最佳问题，获取用户回答，沿回答分支移动节点。
   - 否则进入目标提问阶段，直接询问具体可能性。
4. 成功识别目标后，沿节点路径反向传播，更新各节点对应簇的奖励B_k。

## 3. 实验设计

### 数据集 / 场景
- **Medical Diagnosis**：DX（104对话，5疾病）、MedDG（454样本，15疾病），最大轮次T=6。
- **Troubleshooting**：FloDial（153对话，153故障类型），T=20。
- **20 Questions**：Common（111物品）、Things（200物品），T=20。
- **额外验证**：Situation Puzzles（100谜题，开放集），T=10/25。

### Benchmark
- **基线方法**：Direct Prompting (DP) —— 直接让LLM生成下一个问题；Uncertainty of Thoughts (UoT) —— 基于不确定性的树搜索（穷举展开）。
- **消融变体**：MISQ（无层次化反馈）、MISQ-HF（完整方法）。

### 对比方法
- **LLM模型**：Llama 3.3 70B Instruct、Mixtral 8*7B Instruct、GPT-4o作为提问者，所有回答者统一用Llama 3.3 70B Instruct模拟。

### 评估指标
- 成功率 (SR)、平均成功对话轮次 (MSC)、问题生成调用次数 (QGC)。

## 4. 资源与算力

- **文中说明**：所有实验运行在 **8核CPU、16GB RAM** 的机器上，未使用本地GPU。LLM通过API访问（AWS Bedrock和OpenAI），因此未披露具体的GPU型号、数量或训练时长。
- **关键点**：由于主要计算来自LLM API调用，论文将“LLM调用次数”作为核心效率指标，而非硬件运行时。

## 5. 实验数量与充分性

- **实验数量**：
  - 三个主要领域共5个数据集（MD×2、TS×1、20Q×2），覆盖不同规模可能性空间。
  - 三种LLM（Llama、Mixtral、GPT-4o），两种设置（Closed Set / Open Set），两种初始化（全Ω vs 约束Ω）。
  - 完整消融：DP、UoT、MISQ、MISQ-HF四组对比。
  - 附加实验：Situation Puzzles、统计显著性测试（三遍重复，表5）。
- **充分性**：实验覆盖广泛，消融充分，结果报告了均值和标准差，并进行了配对t检验（p<0.05）。实验设计客观公平，基线选取合理。

## 6. 论文的主要结论与发现

- **性能提升**：MISQ-HF在成功率和效率上均显著优于UoT和DP：SR平均提升12%，QGC平均降低约10倍（如DX上0.04 vs 0.77）。
- **反馈机制贡献**：带反馈的MISQ-HF比无反馈的MISQ在SR上进一步提升，尤其在TS领域（如Llama 3.3下SR从62.74%升至67.97%）。
- **约束初始化增益**：使用约束可能性集初始化根节点，平均额外提升8% SR。
- **开放集场景**：MISQ-HF在FloDial和DX开放集上保持相近SR，QGC显著低于UoT。
- **泛化能力**：在20 Questions和Situation Puzzles上也证明了有效性，表明方法可扩展至更广的信息寻求任务。

## 7. 优点

- **方法创新**：将MCTS与层次化聚类反馈结合，首次在信息寻求对话中实现基于历史经验的动态偏置，平衡探索与利用。
- **高效性设计**：通过缓存决策树、限制展开深度、重用成功路径，将LLM调用复杂度从指数级降为线性，实际减少约10倍调用。
- **实验严谨**：多领域、多模型、多设置的全面评估，包含消融和统计显著性检验，公开代码和数据集。
- **实用导向**：所提QGC指标直观反映了LLM调用成本，对实际部署有明确指导意义。

## 8. 不足与局限

- **未利用失败案例**：系统仅从成功对话中学习，未对失败提问进行惩罚或错误分析，可能错过优化机会。
- **问题质量评估缺失**：未设计机制惩罚冗余或低质量提问，奖励函数仅基于信息增益，可能忽略用户感受。
- **置信度量化不足**：在高风险领域（如医疗诊断）未引入显式置信度阈值，可能导致错误诊断。
- **开放集场景反馈效果有限**：由于每个案例的提问路径独特，直接复用历史成功路径意义较小，MISQ-HF的反馈优势不明显。
- **依赖LLM生成质量**：问题生成依赖于LLM的能力，若LLM生成不平衡或无关问题，将影响整体性能。
- **用户中心设计缺失**：未考虑对话自然度和用户信任，可能产生过于突兀的问题序列。

（完）
