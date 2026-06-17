---
title: "AGZArank: Investigating epitope-conditioned antibody binder ranking with structure-derived synthetic supervision"
title_zh: AGZArank：利用结构衍生合成监督研究表位条件抗体结合物排序
authors: "Sadykov, Z., Khamidullina, A., Sultankulov, B., Seitkali, D."
date: 2026-06-11
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.08.730711v1.full.pdf"
tags: ["query:rerank-train"]
score: 6.0
evidence: 使用合成监督训练抗体结合物排序模型；方法可迁移至重排序器训练
tldr: "计算抗体设计产生大量候选结合剂，但优先排序是瓶颈。现有评分方法未专门针对排序优化。AGZArank利用结构衍生合成监督训练几何深度学习模型，在基准测试中44.4%将真结合剂排进前十，并展现更强泛化性。研究表明候选排序可作为一个独立且可行的学习问题。"
source: biorxiv
selection_source: fresh_fetch
motivation: 计算抗体设计中，从大量候选结合剂中优先筛选出真正结合剂是关键瓶颈，现有方法缺乏专门针对排序的优化。
method: 提出AGZArank，一个几何深度学习框架，使用基于归一化伪能量目标的结构衍生合成监督进行训练，实现表位条件化的抗体结合剂排序。
result: "在45个实验验证界面上，44.4%将真结合剂排进前十；在2021年后结构上泛化性优于ProteinMPNN、ESM-IF和PRODIGY。"
conclusion: 候选排序是计算抗体设计中一个独特且可处理的问题，性能主要依赖训练规模与目标-评估对齐。
---

## 摘要
计算抗体设计方法可以为目标表位生成大量候选结合物库，但确定优先测试哪些候选物仍然是一个主要瓶颈。现有的评分方法，包括基于物理的亲和力估计、结构预测衍生的置信度度量以及逆向折叠似然模型，提供了有用的代理信号，但并未明确优化以在众多结构相似的候选物中早期富集结合物。

在此，我们将表位条件抗体结合物排序作为一个专门的学习问题进行研究，并引入AGZArank，这是一个基于归一化伪能量目标、使用结构衍生合成监督训练的几何深度学习框架。在一个包含45个实验验证的抗体-抗原界面的基准测试中，AGZArank在44.4%的情况下在前十名候选物中恢复了真正的结合物，并且在2021年后的结构上表现出比ProteinMPNN、ESM-IF和PRODIGY更强的泛化能力。消融实验表明，排序性能主要取决于训练规模以及优化目标与基于检索的评估之间的一致性，而非仅依赖于架构复杂性。这些结果支持候选物优先排序作为计算抗体设计中一个独特且可处理的问题。

## Abstract
AO_SCPLOWBSTRACTC_SCPLOWComputational antibody design methods can generate large libraries of candidate binders for a target epitope, but prioritizing which candidates to test experimentally remains a major bottleneck. Existing scoring approaches, including physics-based affinity estimators, structure-prediction-derived confidence measures, and inverse-folding likelihood models, provide useful proxy signals but are not explicitly optimized for early enrichment of binders among many structurally similar candidates.

Here we investigate epitope-conditioned antibody binder ranking as a dedicated learning problem and introduce AGZArank, a geometric deep learning framework trained with structure-derived synthetic supervision based on normalized pseudo-energy targets. On a benchmark of 45 experimentally validated antibody-antigen interfaces, AGZArank recovered the true binder within the top ten candidates in 44.4% of cases and showed stronger generalization on post-2021 structures than ProteinMPNN, ESM-IF, and PRODIGY. Ablation experiments indicate that ranking performance depends primarily on training scale and alignment between the optimization objective and retrieval-based evaluation, rather than architectural complexity alone. These results support candidate prioritization as a distinct and tractable problem in computational antibody design.