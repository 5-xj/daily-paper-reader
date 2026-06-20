---
title: "VaxjoGNN: A Graph Neural Network for Ontology-Grounded Vaccine Adjuvant Recommendation"
title_zh: VaxjoGNN：一种基于本体论的疫苗佐剂推荐的图神经网络
authors: "He, Y., Zheng, Y."
date: 2026-06-18
pdf: "https://www.biorxiv.org/content/10.1101/2025.11.27.690985v3.full.pdf"
tags: ["query:rerank-train"]
score: 7.0
evidence: 在GNN训练中使用listwise排序目标
tldr: "佐剂选择是疫苗开发瓶颈，现有计算多聚焦抗原发现。VaxjoGNN将疾病-佐剂匹配建模为基于生物医学本体的异构知识图上的top-k推荐，采用listwise排序训练图神经网络。公开基准上，已知疾病NDCG@10达0.59，未见过疾病达0.27，较随机基线提升5.4倍。该框架提供本体驱动的佐剂优先排序，与抗原发现工具互补。"
source: biorxiv
selection_source: fresh_fetch
motivation: 疫苗开发中佐剂筛选是瓶颈，现有计算工具多聚焦抗原发现，缺乏系统性的佐剂推荐方法。
method: 将疾病-佐剂匹配建模为基于生物医学本体的异构知识图上的top-k推荐任务，采用listwise排序目标训练图神经网络VaxjoGNN。
result: "在公开基准上，已知疾病NDCG@10达0.59，未见过疾病达0.27，相比随机基线提升5.4倍。"
conclusion: 该框架提供了本体驱动的佐剂优先排序方法，与抗原发现工具互补，有望加速疫苗研发。
---

## 摘要
选择有效的佐剂仍然是疫苗开发中的一个瓶颈，但大多数计算工作都针对抗原发现而非佐剂优先排序。我们将疾病-佐剂匹配视为一个基于生物医学本体的异质知识图谱上的top-k推荐任务，整合了整理的事实、机制通路和文本证据。我们引入了VaxjoGNN，一种使用列表排序目标训练的图神经网络。在一个公开基准上，VaxjoGNN在已知疾病上实现了0.59的NDCG@10，在先前未知疾病上实现了0.27（比随机基线提高5.4倍）。该框架提供了一种基于本体的佐剂优先排序方法，补充了现有的以抗原为中心的工具。

## Abstract
Selecting an effective adjuvant remains a bottleneck in vaccine development, but most computational efforts have targeted antigen discovery rather than adjuvant prioritization. We frame disease-adjuvant matching as a top-k recommendation task on a heterogeneous knowledge graph grounded in biomedical ontologies, integrating curated facts, mechanistic pathways, and textual evidence. We introduce VaxjoGNN, a graph neural network trained with a listwise ranking objective. On a public benchmark, VaxjoGNN achieves NDCG@10 of 0.59 on seen diseases and 0.27 on previously unseen diseases (a 5.4x improvement over a random baseline). The framework provides an ontology-anchored approach to adjuvant prioritization that complements existing antigen-focused tools.