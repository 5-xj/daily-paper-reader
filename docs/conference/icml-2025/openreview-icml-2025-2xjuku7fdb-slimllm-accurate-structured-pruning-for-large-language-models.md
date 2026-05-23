---
title: "SlimLLM: Accurate Structured Pruning for Large Language Models"
title_zh: SlimLLM：大型语言模型的准确结构化剪枝
authors: "Jialong Guo, Xinghao Chen, Yehui Tang, Yunhe Wang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=2xjUkU7FDb"
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
Large language models(LLMs) have garnered significant attention and demonstrated impressive capabilities in a wide range of applications. However, due to their enormous computational costs, the deployment and application of LLMs are often severely limited. To address this issue, structured pruning is an effective solution to compress the parameters of LLMs. Determining the importance of each sub-module in LLMs and minimizing performance loss are critical issues that need to be carefully addressed in structured pruning. In this paper, we propose an effective and fast structured pruning method named SlimLLM for large language models. For channel and attention head pruning, we evaluate the importance based on the entire channel or head, rather than merely aggregating the importance of individual elements within a sub-module. This approach enables a more holistic consideration of the interdependence among elements within the sub-module. In addition, we design a simple linear regression strategy for the output matrix to quickly recover performance. We also propose layer-based importance ratio to determine the pruning ratio for each layer. Based on the LLaMA benchmark results, our SlimLLM outperforms other methods and achieves state-of-the-art performance.

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
- OpenReview：[https://openreview.net/forum?id=2xjUkU7FDb](https://openreview.net/forum?id=2xjUkU7FDb)
