---
title: "The Best of Both Worlds: Bridging Quality and Diversity in Data Selection with Bipartite Graph"
title_zh: 两全其美：用二分图在数据选择中桥接质量与多样性
authors: "Minghao Wu, Thuy-Trang Vu, Lizhen Qu, Gholamreza Haffari"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=nCoaJYNCcg"
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
The performance of large language models (LLMs) is strongly influenced by the quality and diversity of data used during supervised fine-tuning (SFT). However, current data selection methods often prioritize one aspect over the other, resulting in suboptimal training outcomes. To address this, we formulate data selection as a set cover problem and present GraphFilter, a novel approach that balances both quality and diversity in data selection. GraphFilter models the dataset as a bipartite graph connecting sentences to their constituent n-grams, then employs a priority function that combines quality and diversity metrics multiplicatively. GraphFilter iteratively selects sentences with the highest priority, removes covered n-grams from the bipartite graph, and recomputes priorities to reflect the changing data landscape. We validate GraphFilter using three model backbones across six widely-used benchmarks, demonstrating that it outperforms nine existing baselines in both model performance and computational efficiency. Further analysis shows that our design choices lead to more effective subset selection, underscores the value of instruction diversity, and provides insights into how quality and diversity interact with different subset sizes.

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
- OpenReview：[https://openreview.net/forum?id=nCoaJYNCcg](https://openreview.net/forum?id=nCoaJYNCcg)
