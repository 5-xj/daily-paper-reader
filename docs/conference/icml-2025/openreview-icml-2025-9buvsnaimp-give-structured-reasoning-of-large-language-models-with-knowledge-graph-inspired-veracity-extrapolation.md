---
title: "GIVE: Structured Reasoning of Large Language Models with Knowledge Graph Inspired Veracity Extrapolation"
title_zh: GIVE：基于知识图谱启发的大语言模型结构化推理
authors: "Jiashu He, Mingyu Derek Ma, Jinxuan Fan, Dan Roth, Wei Wang, Alejandro Ribeiro"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=9buvSnaiMp"
score: 0.0
evidence: 不相关
tldr: 不相关
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 不相关。
method: 不相关。
result: 不相关。
conclusion: 不相关。
---

## Abstract
Existing approaches based on context prompting or reinforcement learning (RL) to improve the reasoning capacities of large language models (LLMs) depend on the LLMs' internal knowledge to produce reliable Chain-Of-Thought (CoT). However, no matter the size of LLMs, certain problems cannot be resolved in a single forward pass. Meanwhile, agent-based reasoning systems require access to a comprehensive nonparametric knowledge base, which is often costly or not feasible for use in scientific and niche domains. We present Graph Inspired Veracity Extrapolation (GIVE), a novel reasoning method that merges parametric and non-parametric memories to improve accurate reasoning with minimal external input. GIVE guides the LLM agent to select the most pertinent expert data ($\textbf{observe}$), engage in query-specific associative thinking ($\textbf{reflect}$), and then synthesize this information to produce the final output ($\textbf{speak}$). Extensive experiments demonstrated the following benefits of our framework: (1) GIVE increases the performance of LLMs across various sizes. (2) In some scenarios, GIVE allows smaller LLMs to surpass larger, more sophisticated ones in scientific tasks ($\textbf{GPT3.5T + GIVE > GPT4}$). (3) GIVE is effective on scientific and open-domain assessments. (4) GIVE is a training-free method that enables LLMs to tackle new problems that extend beyond their training data (up to $\textbf{43.5}$\% $\rightarrow$ $\textbf{88.2}$\% accuracy improvement). (5) GIVE allows LLM agents to reason using both restricted (very small) and noisy (very large) knowledge sources, accommodating knowledge graphs (KG) ranging from $\textbf{135}$ to more than $\textbf{840k}$ nodes. (6) The reasoning process involved in GIVE is fully interpretable. Our code is available at https://github.com/Jason-Tree/GIVE

---

## 论文详细总结（自动生成）

### 1. 检索相关性
不相关。

### 2. 核心内容
不相关。

### 3. 对应检索需求
当前结果未记录具体命中的检索需求。

### 4. 来源与原文
- Source：ICML-2025-Accepted
- OpenReview：[https://openreview.net/forum?id=9buvSnaiMp](https://openreview.net/forum?id=9buvSnaiMp)
