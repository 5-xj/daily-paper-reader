---
title: Destroy and Repair Using Hyper-Graphs for Routing
title_zh: 面向路径规划的基于超图的破坏与修复方法
authors: "Ke Li, Fei Liu, Zhenkun Wang, Qingfu Zhang"
date: 2025-04-11
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/34018/36173"
tags: ["query:atsp", "query:ATSP"]
score: 6.0
evidence: 学习式破坏—修复大邻域搜索用于TSP与CVRP
tldr: 神经组合优化中的迭代式方法多依赖受限的邻域搜索，容易得到次优解。作者提出基于超图的破坏—修复策略，学习在更大的邻域上摧毁部分解并重新构造，从而扩展搜索范围。在TSP与CVRP等路径问题上，该迭代框架取得了优于受限邻域方法的近优解，为学习式局部搜索提供了更大邻域的设计思路。
source: AAAI-2025-Accepted
selection_source: topic_research
id: aaai-2025-34018
canonical_id: "work:56585a2ce511573db2549a47"
publication_date: 2025
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
conference_acceptance_status: accepted
motivation: 现有迭代式神经组合优化方法受限于受限邻域搜索，难以跳出局部最优。
method: 提出基于超图的破坏—修复策略，学习在更大邻域上摧毁部分解并重建，扩展搜索空间。
result: 在TSP和CVRP等路径问题上取得优于受限邻域方法的近优解，验证了扩大邻域的有效性。
conclusion: 表明学习式破坏修复可作为扩展邻域的手段，提升神经组合优化的求解质量。
---

## 摘要
神经组合优化（NCO）的最新进展在求解旅行商问题（TSP）和带容量约束的车辆路径问题（CVRP）等路径规划问题方面展现出潜力，且无需手工设计。该领域研究探索了两类主要方法：迭代方法和非迭代方法。非迭代方法难以直接生成近优解，而迭代方法通过学习局部搜索步骤来简化任务。然而，现有迭代方法通常受限于受限的邻域搜索，导致结果次优。为解决这一局限，我们提出一种新方法，通过学习破坏-修复策略将搜索扩展到更大的邻域。具体而言，我们引入基于超图的破坏-修复框架（DRHG）。该框架将连续的完整边压缩为超边，使模型能够更多关注被破坏的部分，并降低编码所有节点的复杂度。实验表明，DRHG 在节点数多达 10,000 的 TSP 上达到当前最优性能，并对真实世界 TSPLib 和 CVRPLib 问题表现出强泛化能力。

## Abstract
Recent advancements in Neural Combinatorial Optimization (NCO) have shown promise in solving routing problems like the Traveling Salesman Problem (TSP) and Capacitated Vehicle Routing Problem (CVRP) without handcrafted designs. Research in this domain has explored two primary categories of methods: iterative and non-iterative. While non-iterative methods struggle to generate near-optimal solutions directly, iterative methods simplify the task by learning local search steps. However, existing iterative methods are often limited by restricted neighborhood searches, leading to suboptimal results. To address this limitation, we propose a novel approach that extends the search to larger neighborhoods by learning a destroy-and-repair strategy. Specifically, we introduce a Destroy-and-Repair framework based on Hyper-Graphs (DRHG). This framework reduces consecutive intact edges to hyper-edges, allowing the model to pay more attention to the destroyed part and decrease the complexity of encoding all nodes. Experiments demonstrate that DRHG achieves state-of-the-art performance on TSP with up to 10,000 nodes and shows strong generalization to real-world TSPLib and CVRPLib problems.