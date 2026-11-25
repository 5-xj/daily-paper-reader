---
title: Differentiable extensions with rounding guarantees for combinatorial optimization over permutations
title_zh: 面向排列组合优化的带舍入保证可微扩展
authors: "Robert R Nerem, Zhishang Luo, Akbar Rafiey, Yusu Wang"
date: 2025-09-18
pdf: "https://papers.neurips.cc/paper_files/paper/2025/file/9840235bd522f0f067f306ddfd6d1ca1-Paper-Conference.pdf"
tags: ["query:atsp", "query:ATSP"]
score: 6.0
evidence: Birkhoff多面体扩展为基于指派松弛的TSP建模提供基础
tldr: 排列上的组合优化目标（如TSP、QAP）缺乏可微连续扩展，限制了基于梯度的求解与学习。作者提出Birkhoff扩展，借助连续化的Birkhoff分解，将任意排列函数几乎处处可微地延拓到双随机矩阵上，并给出取整保证。该构造为在Birkhoff多面体上优化提供了多项式时间可计算的工具。由于ATSP的经典松弛正是指派问题/Birkhoff多面体，这一扩展对ATSP的建模与松弛求解具有直接方法价值。
source: NeurIPS-2025-Accepted
selection_source: topic_research
id: openreview-neurips-2025-aaxk0cw6gw
canonical_id: "work:1ebc6ef67a7a6d87e334c9a0"
publication_date: 2025
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
official_pdf_url: "https://papers.neurips.cc/paper_files/paper/2025/file/9840235bd522f0f067f306ddfd6d1ca1-Paper-Conference.pdf"
official_link: "https://papers.neurips.cc/paper_files/paper/2025/hash/9840235bd522f0f067f306ddfd6d1ca1-Abstract-Conference.html"
conference_acceptance_status: accepted
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-aaxk0cw6gw/fig-001.webp\", \"caption\": \"\", \"page\": 24, \"index\": 1, \"width\": 800, \"height\": 600}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-aaxk0cw6gw/fig-002.webp\", \"caption\": \"\", \"page\": 24, \"index\": 2, \"width\": 800, \"height\": 600}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-aaxk0cw6gw/fig-003.webp\", \"caption\": \"\", \"page\": 24, \"index\": 3, \"width\": 800, \"height\": 600}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-aaxk0cw6gw/fig-004.webp\", \"caption\": \"\", \"page\": 24, \"index\": 4, \"width\": 800, \"height\": 600}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-aaxk0cw6gw/fig-005.webp\", \"caption\": \"\", \"page\": 24, \"index\": 5, \"width\": 800, \"height\": 600}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-aaxk0cw6gw/fig-006.webp\", \"caption\": \"\", \"page\": 24, \"index\": 6, \"width\": 800, \"height\": 600}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-aaxk0cw6gw/fig-007.webp\", \"caption\": \"\", \"page\": 24, \"index\": 7, \"width\": 704, \"height\": 573}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-aaxk0cw6gw/fig-008.webp\", \"caption\": \"\", \"page\": 24, \"index\": 8, \"width\": 719, \"height\": 573}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-aaxk0cw6gw/fig-009.webp\", \"caption\": \"\", \"page\": 24, \"index\": 9, \"width\": 719, \"height\": 573}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-aaxk0cw6gw/fig-010.webp\", \"caption\": \"\", \"page\": 24, \"index\": 10, \"width\": 741, \"height\": 573}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-aaxk0cw6gw/fig-011.webp\", \"caption\": \"\", \"page\": 24, \"index\": 11, \"width\": 719, \"height\": 573}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-aaxk0cw6gw/fig-012.webp\", \"caption\": \"\", \"page\": 24, \"index\": 12, \"width\": 800, \"height\": 600}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-aaxk0cw6gw/fig-013.webp\", \"caption\": \"\", \"page\": 24, \"index\": 13, \"width\": 800, \"height\": 600}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-aaxk0cw6gw/fig-014.webp\", \"caption\": \"\", \"page\": 24, \"index\": 14, \"width\": 800, \"height\": 600}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-aaxk0cw6gw/fig-015.webp\", \"caption\": \"\", \"page\": 25, \"index\": 15, \"width\": 1146, \"height\": 832}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-aaxk0cw6gw/fig-016.webp\", \"caption\": \"\", \"page\": 25, \"index\": 16, \"width\": 1592, \"height\": 1140}]"
motivation: 排列型组合优化目标缺少可微连续扩展，难以支撑梯度式求解与学习。
method: 提出Birkhoff扩展，基于连续化Birkhoff分解把排列函数延拓到双随机矩阵。
result: 构造出几乎处处可微且多项式可计算的扩展，并给出取整保证与理论性质。
conclusion: 为在Birkhoff多面体上优化TSP等问题提供工具，与ATSP指派松弛紧密相关。
---

## 摘要
连续扩展组合优化目标是一种强大技术，常用于集合函数优化。然而，尽管许多组合优化问题，如二次分配问题（QAP）和旅行商问题（TSP），本质上是在排列上进行优化，但用于扩展排列上函数的方法却很少。我们提出 Birkhoff 扩展（BE），它是将排列上的任意实值函数扩展到双随机矩阵的一种几乎处处可微、连续且多项式时间可计算的扩展。该构造的关键在于我们引入了著名 Birkhoff 分解的连续变体。我们的扩展具有若干优良性质，使其对优化问题颇具吸引力。首先，BE 提供舍入保证，即扩展的任意解都可以被高效地舍入为一个排列，且不增加函数值。此外，松弛情形下的近似解将产生排列空间中的近似解。其次，利用 BE，排列上的任意实值优化目标都可以扩展为双随机矩阵空间上的几乎处处可微的目标函数。这使得我们的 BE 不仅适用于基于梯度下降的优化，也适用于无监督神经组合优化，因为其训练通常需要可微损失。第三，基于上述性质，我们提出一个简单的优化过程，可方便地与现有优化方法结合以提供局部改进（即最终解的质量不劣于初始解）。最后，我们还将扩展适配到一类树上的优化问题，如 Steiner 树和基于优化的层次聚类。我们给出实验结果，以在若干与排列相关的组合优化问题上验证我们的理论结果。

## Abstract
Continuously extending combinatorial optimization objectives is a powerful technique commonly applied to the optimization of set functions. However, few such methods exist for extending functions on permutations, despite the fact that many combinatorial optimization problems, such as the quadratic assignment problem (QAP) and the traveling salesperson problem (TSP), are inherently optimization over permutations. We present Birkhoff Extension (BE), an almost-everywhere-differentiable continuous polytime-computable extension of any real-valued function on permutations to doubly stochastic matrices. Key to this construction is our introduction of a continuous variant of the well-known Birkhoff decomposition. 
Our extension has several nice properties making it appealing for optimization problems. 
First, BE provides a rounding guarantee, namely any solution to the extension can be efficiently rounded to a permutation without increasing the function value. Furthermore, an approximate solution in the relaxed case will give rise to an approximate solution in the space of permutations. 
Second, using BE, any real-valued optimization objective on permutations can be extended to an almost-everywhere-differentiable objective function over the space of doubly stochastic matrices. 
This makes our BE amenable to not only gradient-descent based optimization, but also unsupervised neural combinatorial optimization where training often requires a differentiable loss. 
Third, based on the above properties, we present a simple optimization procedure which can be readily combined with existing optimization approaches to offer local improvements (i.e., the quality of the final solution is no worse than the initial solution). 
Finally, we also adapt our extension to optimization problems over a class of trees, such as Steiner tree and optimization-based hierarchical clustering.
We present experimental results to verify our theoretical results on several combinatorial optimization problems related to permutations.