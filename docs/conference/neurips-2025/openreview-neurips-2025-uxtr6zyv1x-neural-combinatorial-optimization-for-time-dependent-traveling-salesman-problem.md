---
title: Neural Combinatorial Optimization for Time-Dependent Traveling Salesman Problem
title_zh: 面向时间依赖旅行商问题的神经组合优化
authors: "Ruixiao Yang, Chuchu Fan"
date: 2025-09-18
pdf: "https://papers.neurips.cc/paper_files/paper/2025/file/6996673217063746fc89f99340951600-Paper-Conference.pdf"
tags: ["query:atsp", "query:ATSP"]
score: 7.0
evidence: 将MatNet从静态非对称TSP扩展到时间依赖场景的神经模型
tldr: 时间依赖旅行商问题的边权随出发时间变化，破坏了对称性、三角不等式与循环不变性，使经典方法难以直接套用。本文在MatNet基础上提出神经模型，用邻接张量刻画时间维度的权重变化，并设计时间感知解码器逐步构造路径。该架构专门应对动态变化的非对称性与三角不等式违反。工作为从静态非对称TSP走向时间依赖路由提供了可迁移的神经组合优化思路。
source: NeurIPS-2025-Accepted
selection_source: topic_research
id: openreview-neurips-2025-uxtr6zyv1x
canonical_id: "work:a7295c8f05fb7711abea1b3b"
publication_date: 2025
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
official_pdf_url: "https://papers.neurips.cc/paper_files/paper/2025/file/6996673217063746fc89f99340951600-Paper-Conference.pdf"
official_link: "https://papers.neurips.cc/paper_files/paper/2025/hash/6996673217063746fc89f99340951600-Abstract-Conference.html"
conference_acceptance_status: accepted
motivation: 时间依赖TSP破坏对称性与三角不等式，经典TSP算法难以直接适用。
method: 扩展MatNet，用邻接张量编码时间维权重，并配合时间感知解码器构造路径。
result: 模型针对动态非对称性与三角不等式违反进行了专门设计，可处理时间依赖实例。
conclusion: 该工作把非对称TSP的神经求解推进到时间依赖场景，属现代ATSP类求解思路。
---

## 摘要
时间依赖旅行商问题（TDTSP）通过允许边权随出发时间动态变化，扩展了经典 TSP，反映了交通网络等现实场景中旅行时间因拥堵模式而波动的特点。TDTSP 破坏了经典 TSP 的对称性、三角不等式和循环不变性等性质，带来了独特的计算挑战。
在本文中，我们提出一种神经模型，通过使用邻接张量捕捉时间变化，并配合时间感知解码器，将 MatNet 从静态非对称 TSP 扩展到时间依赖设置。我们的架构应对了随时间动态变化的不对称性和三角不等式违反所带来的独特挑战。
除架构创新外，我们的研究揭示了一个关键评估洞见：许多实际 TDTSP 实例无论时间依赖边权如何，都保持相同的最优解。这暴露了当前 TDTSP 评估实践的一个根本局限，即仅依赖所有实例上的平均旅行时间指标。此类指标无法有效区分真正捕捉时间动态的方法与仅在静态路径问题上表现良好的方法。
相反，我们在真实世界数据集上进行了大量实验，在整个数据集以及时间依赖会改变最优解的特定筛选实例上评估我们的方法。结果表明，我们的方法在完整实例上取得了最先进的平均最优性差距，并在时间感知路径规划能够节省时间的实例上显著减少了旅行时间。这些结果展示了识别和利用时间依赖性的最先进能力，为评估时间依赖路径问题设立了新标准。

## Abstract
The Time-Dependent Traveling Salesman Problem (TDTSP) extends the classical TSP by allowing dynamic edge weights that vary with departure time, reflecting real-world scenarios such as transportation networks, where travel times fluctuate due to congestion patterns. TDTSP violates symmetry, triangle inequality, and cyclic invariance properties of classical TSP, creating unique computational challenges.
In this paper, we propose a neural model that extends MatNet from static asymmetric TSP to time-dependent settings by using an adjacency tensor to capture temporal variations, followed by a time-aware decoder. Our architecture addresses the unique challenge of asymmetry and triangle inequality violations that change dynamically over time.
Beyond architectural innovations, our research reveals a critical evaluation insight: many practical TDTSP instances maintain the same optimal solution regardless of time-dependent edge weights. This exposes a fundamental limitation in current evaluation practices for TDTSP that rely solely on average travel time metrics across all instances. Such metrics fail to effectively distinguish between methods that genuinely capture temporal dynamics and those that merely perform well on static routing problems. 
Instead, we present extensive experiments on real-world datasets, evaluating our approach on both entire datasets and specifically filtered instances where temporal dependencies alter the optimal solution. Results show that our method achieves state-of-the-art average optimality gap on full instances and significant travel-time reduction on instances where time-aware routing saves time. These results demonstrate state-of-the-art ability to identify and exploit temporal dependencies, setting new standards for evaluating time-dependent routing problems.