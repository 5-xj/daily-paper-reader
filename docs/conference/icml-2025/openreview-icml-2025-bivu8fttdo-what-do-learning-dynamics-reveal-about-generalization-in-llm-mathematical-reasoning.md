---
title: What Do Learning Dynamics Reveal About Generalization in LLM Mathematical Reasoning?
title_zh: 学习动态揭示了LLM数学推理泛化的什么？
authors: "Katie Kang, Amrith Setlur, Dibya Ghosh, Jacob Steinhardt, Claire Tomlin, Sergey Levine, Aviral Kumar"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=bivU8fTTDo"
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
Modern large language models (LLMs) excel at fitting finetuning data, but often struggle on unseen examples. In order to teach models genuine reasoning abilities rather than superficial pattern matching, our work aims to better understand how the learning dynamics of LLM finetuning shapes downstream generalization. Our analysis focuses on reasoning tasks, whose problem structure allows us to distinguish between memorization (the exact replication of reasoning steps from the training data) and performance (the correctness of the final solution). We find that a model's performance on test prompts can be effectively characterized by a training metric we call pre-memorization train accuracy: the accuracy of model samples on training queries before they begin to copy the exact reasoning steps from the training set. On the dataset level, this metric is able to almost perfectly predict test accuracy, achieving $R^2$ of $\geq 0.9$ across various models (Llama3 8B, Gemma2 9B), datasets (GSM8k, MATH), and training configurations. On a per-example level, this metric is also indicative of whether individual model predictions are robust to perturbations in the training query. By connecting a model's learning dynamics to test performance, pre-memorization train accuracy can inform training decisions, such as the makeup of the training data. Our experiments on data curation show that prioritizing examples with low pre-memorization accuracy leads to 1.5-2x improvements in data efficiency compared to i.i.d. data scaling and other data scaling techniques.

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
- OpenReview：[https://openreview.net/forum?id=bivU8fTTDo](https://openreview.net/forum?id=bivU8fTTDo)
