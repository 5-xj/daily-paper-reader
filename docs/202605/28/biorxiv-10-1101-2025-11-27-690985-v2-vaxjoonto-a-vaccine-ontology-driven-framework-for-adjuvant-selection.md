---
title: "VaxjoOnto: A Vaccine Ontology-driven Framework for Adjuvant Selection"
title_zh: "VaxjoOnto: 一个基于疫苗本体论的佐剂选择框架"
authors: "He, Y., Zheng, Y."
date: 2026-05-27
pdf: "https://www.biorxiv.org/content/10.1101/2025.11.27.690985v2.full.pdf"
tags: ["query:rerank-train"]
score: 8.0
evidence: 使用列表式排序目标训练图神经网络
tldr: "疫苗开发中佐剂选择是瓶颈，现有计算工具多聚焦抗原发现。本文提出VaxjoOnto框架，将疾病-佐剂匹配建模为知识图谱上的top-k推荐任务，采用图神经网络与listwise排序学习。在公开基准上，对已知疾病NDCG@10达0.59，对未知疾病达0.27，较随机基线提升5.4倍。该本体驱动方法为佐剂优先级排序提供了新途径，可有效补充现有抗原发现工具。"
source: biorxiv
selection_source: fresh_fetch
motivation: 疫苗研发中佐剂选择是关键瓶颈，现有计算工具主要针对抗原发现，缺乏系统化的佐剂优先级评估方法。
method: 将疾病-佐剂匹配建模为异构知识图谱上的top-k推荐，使用VaxjoOnto图神经网络并采用listwise排序目标进行训练。
result: "在公开基准上，VaxjoOnto对已知疾病NDCG@10达0.59，对未知疾病达0.27，较随机基线提升5.4倍。"
conclusion: VaxjoOnto提供了本体驱动的佐剂优先级框架，可有效补充现有抗原发现工具，加速疫苗开发。
---

## 摘要
选择有效的佐剂仍然是疫苗开发中的一个瓶颈，但大多数计算工作都集中在抗原发现而非佐剂优先排序上。我们将疾病-佐剂匹配定义为基于生物医学本体的异构知识图上的top-k推荐任务，整合了整理的事实、机制通路和文本证据。我们介绍了VaxjoOnto，一个使用列表排序目标训练的图神经网络。在一个公开基准测试中，VaxjoOnto在已知疾病上实现了0.59的NDCG@10，在未知疾病上实现了0.27（比随机基线提高了5.4倍）。该框架提供了一种基于本体的佐剂优先排序方法，补充了现有的以抗原为中心的工具。

## Abstract
Selecting an effective adjuvant remains a bottleneck in vaccine development, but most computational efforts have targeted antigen discovery rather than adjuvant prioritization. We frame disease-adjuvant matching as a top-k recommendation task on a heterogeneous knowledge graph grounded in biomedical ontologies, integrating curated facts, mechanistic pathways, and textual evidence. We introduce VaxjoOnto, a graph neural network trained with a listwise ranking objective. On a public benchmark, VaxjoOnto achieves NDCG@10 of 0.59 on seen diseases and 0.27 on previously unseen diseases (a 5.4 times improvement over a random baseline). The framework provides an ontology-anchored approach to adjuvant prioritization that complements existing antigen-focused tools.