---
title: Solving the Asymmetric Traveling Salesman Problem via Trace-Guided Cost Augmentation
title_zh: 通过迹引导的代价增强求解非对称旅行商问题
authors: "Zhen Zhang, Javen Qinfeng Shi, Wee Sun Lee"
date: 2025-09-18
pdf: "https://papers.neurips.cc/paper_files/paper/2025/file/52a8f97c0393be8b2f36a54925010cff-Paper-Conference.pdf"
tags: ["query:atsp", "query:ATSP"]
score: 9.0
evidence: 直接面向ATSP的连续松弛与梯度算法
tldr: 非对称旅行商问题是组合优化中最基础也最难的问题之一，现有方法难以兼顾连续松弛质量与离散解恢复。本文提出迹引导代价增强框架，将可微的迹有向无环图约束与双随机矩阵指派松弛结合，实现软排列上的梯度优化。作者设计带自适应步长的投影指数梯度法，在满足松弛约束的同时最小化旅行代价，并恢复高质量离散解。该工作为ATSP提供了新的连续松弛与现代求解思路。
source: NeurIPS-2025-Accepted
selection_source: topic_research
id: openreview-neurips-2025-cnxrp7u5gv
canonical_id: "work:8f09180999242238358263a2"
publication_date: 2025
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
official_pdf_url: "https://papers.neurips.cc/paper_files/paper/2025/file/52a8f97c0393be8b2f36a54925010cff-Paper-Conference.pdf"
official_link: "https://papers.neurips.cc/paper_files/paper/2025/hash/52a8f97c0393be8b2f36a54925010cff-Abstract-Conference.html"
conference_acceptance_status: accepted
motivation: 非对称旅行商问题是组合优化中基础且极难的难题，亟需高质量连续松弛与离散恢复方法。
method: 提出可微的迹引导有向无环图约束与双随机矩阵松弛相结合，并用投影指数梯度法优化软排列。
result: 方法在满足松弛约束下最小化旅行代价，并从软排列恢复高质量离散ATSP解。
conclusion: 为ATSP提供新的连续松弛与梯度优化框架，属于现代ATSP求解方法。
---

## 摘要
非对称旅行商问题（ATSP）是组合优化中最基本且最难求解的问题之一。我们利用可微约束提出一种新的ATSP连续松弛框架，这些约束鼓励无环结构和有效排列。该方法将基于迹的可微有向无环图（DAG）约束与分配问题的双随机矩阵松弛相结合，从而能够对软排列进行基于梯度的优化。我们开发了一种具有自适应步长的投影指数梯度方法，在满足松弛约束的同时最小化巡回代价。为恢复高质量离散巡回，我们引入一种贪心后处理过程，利用代价感知的环合并迭代修正子巡回。我们的方法在标准非对称TSP基准上取得了最先进性能，并展现出有竞争力的可扩展性和准确性，尤其是在LKH-3等启发式求解器难以处理的大规模或非对称实例上。

## Abstract
The Asymmetric Traveling Salesman Problem (ATSP) ranks among the most fundamental and notoriously difficult problems in combinatorial optimization. We propose a novel continuous relaxation framework for the Asymmetric Traveling Salesman Problem (ATSP) by leveraging differentiable constraints that encourage acyclic structures and valid permutations. Our approach integrates a differentiable trace-based Directed Acyclic Graph (DAG) constraint with a doubly stochastic matrix relaxation of the assignment problem, enabling gradient-based optimization over soft permutations. We develop a projected exponentiated gradient method with adaptive step size to minimize tour cost while satisfying the relaxed constraints. To recover high-quality discrete tours, we introduce a greedy post-processing procedure that iteratively corrects subtours using cost-aware cycle merging. Our method achieves state-of-the-art performance on standard asymmetric TSP benchmarks and demonstrates competitive scalability and accuracy, particularly on large or asymmetric instances where heuristic solvers such as LKH-3 struggle.

---

## 论文详细总结（自动生成）

## 论文信息
- **标题**：Solving the Asymmetric Traveling Salesman Problem via Trace-Guided Cost Augmentation
- **作者**：Zhen Zhang, Javen Qinfeng Shi, Wee Sun Lee
- **会议**：NeurIPS 2025
- **主题**：非对称旅行商问题（ATSP）的连续松弛、可微 DAG 约束与梯度优化求解

---

## 1. 核心问题与整体含义

- **研究动机**：ATSP 是组合优化中最基础且极具挑战的问题之一，许多组合优化问题可归约到 ATSP。现有方法存在明显取舍：
  - 学习型神经组合优化方法推理快，但在 ATSP 上解质量通常低于 LKH-3，且对训练分布敏感，泛化性不足。
  - LKH-3 是强启发式，但主要面向对称 TSP；在大规模、高度非对称或非度量 ATSP 上可能表现受限。
  - 基于分配问题（AP）的松弛能提供紧下界，但传统 AP 启发式（如 Karp–Steele Patching）在开源实现中往往不如 LKH-3。
- **整体含义**：论文试图桥接“连续松弛/可微优化”与“离散组合优化”，提出一种新的 ATSP 连续松弛框架：用可微的迹型 DAG 约束抑制子环，用双随机矩阵松弛表示软排列，再通过梯度型算法和贪心解码恢复高质量离散巡回。其目标是兼顾解质量、可扩展性与运行效率，尤其针对大规模 ATSP。

---

## 2. 方法论

### 2.1 核心思想
- 将 TSP 写成“分配约束 + 单一大环约束”的形式。
- 用双随机矩阵 \(X\in\mathcal{D}_n\) 松弛置换矩阵。
- 用迹型可微 DAG 约束排除长度小于 \(n\) 的环，从而允许且只允许长度为 \(n\) 的 Hamiltonian 环。
- 在 log 域优化 \(Y\)，令 \(X=\exp(Y)\)，通过 Sinkhorn 归一化保持双随机性，并用投影指数梯度法最小化“巡回代价 + 迹惩罚”。

### 2.2 关键公式与约束
- 原始 TSP：
  \[
  \min_X \langle D,X\rangle
  \]
  满足每行每列和为 1，且 \(X\) 为单一 Hamiltonian 环。
- 可微 DAG 约束：
  \[
  h(X)=\sum_{i=1}^{n}\operatorname{tr}(X^i)=0
  \]
  用于表示无环。
- 用于 TSP 的松弛约束：
  \[
  \sum_{i=1}^{n-1}\operatorname{tr}(X^i)=0
  \]
  即排除长度 \(<n\) 的子环，但允许长度 \(n\) 的 Hamiltonian 环。
- 连续松弛问题：
  \[
  \min_{X\in\mathcal{D}_n}\langle D,X\rangle
  \quad \text{s.t.}\
