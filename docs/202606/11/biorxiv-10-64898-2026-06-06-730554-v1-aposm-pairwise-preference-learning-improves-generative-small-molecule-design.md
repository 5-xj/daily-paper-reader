---
title: "APOSM: Pairwise preference learning improves generative small-molecule design"
title_zh: "APOSM: 成对偏好学习改进生成式小分子设计"
authors: "Dreisler, M. W., Michael, R., Hatzakis, N. S., Boomsma, W."
date: 2026-06-10
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.06.730554v1.full.pdf"
tags: ["query:ad"]
score: 7.0
evidence: 用于分子发现的启发式主动学习方法
tldr: 小分子先导化合物优化受限于候选物合成与测试成本，依赖代理模型筛选。针对评分噪声与稀疏性，本文提出训练代理模型基于成对比较而非绝对分数，开发APOSM算法，结合碎片生成器、成对消息传递图神经网络和概率排序，在主动学习循环中批量获取。在Practical Molecular Optimization基准和GPCR配体重发现任务上，相比无引导碎片优化、Graph-GA遗传算法和点回归消融，APOSM在目标达成率和采样效率上显著提升，尤其在绝对分数难以校准的任务中优势最大。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有代理模型基于绝对分数预测，受限于测量噪声和稀疏性，导致筛选不可靠。
method: 提出APOSM算法，使用成对比较训练图神经网络代理，结合碎片生成器和概率排序进行批量主动学习。
result: 在分子优化基准和GPCR重发现任务上，APOSM优于基线方法，尤其在分数校准困难的任务中改进最大。
conclusion: 成对偏好学习能有效提升小分子设计的代理模型可靠性，提高采样效率和目标达成率。
---

## 摘要
小分子先导化合物的优化受到候选物合成与检测成本的限制，因此为实验测试优先排序化合物的代理模型成为设计过程的核心。此类代理模型的可靠性受限于筛选测量的噪声和稀疏性。我们证明，在候选分子之间进行成对比较而非基于绝对预测得分训练代理模型，能够在此情境下为活性候选物选择提供更可靠的信号。我们开发了APOSM，一种主动学习算法，结合了基于片段的生成器、成对消息传递图神经网络代理模型以及批次获取循环内的概率排序。在实用分子优化基准和GPCR配体重新发现任务上，APOSM在目标达成率和采样效率上优于无指导的基于片段的优化、Graph-GA遗传算法以及逐点回归消融实验，尤其在绝对得分最难校准的任务上提升最大。

## Abstract
Small-molecule lead refinement is constrained by the cost of synthesizing and assaying candidates, making the surrogate models that prioritize compounds for experimental testing central to the design process. The reliability of such surrogates is limited by the noise and sparsity of screening measurements. We show that training the surrogate on pairwise comparisons between candidate molecules, rather than on absolute predicted scores, yields a substantially more reliable signal for active candidate selection in this regime. We develop APOSM, an active-learning algorithm that combines a fragment-based generator, a pairwise message-passing graph neural network surrogate, and probabilistic ranking inside a batched acquisition loop. On the Practical Molecular Optimization benchmark and a GPCR ligand rediscovery task, APOSM improves target attainment and sampling efficiency over unguided fragment-based optimization, the Graph-GA genetic algorithm, and a pointwise-regression ablation, with the largest gains on tasks where absolute scores are hardest to calibrate.