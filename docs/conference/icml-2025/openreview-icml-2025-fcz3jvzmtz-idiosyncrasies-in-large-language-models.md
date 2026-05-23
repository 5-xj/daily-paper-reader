---
title: Idiosyncrasies in Large Language Models
title_zh: 大型语言模型中的独特性
authors: "Mingjie Sun, Yida Yin, Zhiqiu Xu, J Zico Kolter, Zhuang Liu"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=FCZ3jVzmTZ"
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
In this work, we unveil and study idiosyncrasies in Large Language Models (LLMs) -- unique patterns in their outputs that can be used to distinguish the models. To do so, we consider a simple classification task: given a particular text output, the objective is to predict the source LLM that generates the text. We evaluate this synthetic task across various groups of LLMs and find that simply fine-tuning text embedding models on LLM-generated texts yields excellent classification accuracy. Notably, we achieve 97.1\% accuracy on held-out validation data in the five-way classification problem involving ChatGPT, Claude, Grok, Gemini, and DeepSeek. Our further investigation reveals that these idiosyncrasies are rooted in word-level distributions. These patterns persist even when the texts are rewritten, translated, or summarized by an external LLM, suggesting that they are also encoded in the semantic content. Additionally, we leverage LLM as judges to generate detailed, open-ended descriptions of each model's idiosyncrasies. Finally, we discuss the broader implications of our findings, including training on synthetic data, inferring model similarity, and robust evaluation of LLMs.

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
- OpenReview：[https://openreview.net/forum?id=FCZ3jVzmTZ](https://openreview.net/forum?id=FCZ3jVzmTZ)
