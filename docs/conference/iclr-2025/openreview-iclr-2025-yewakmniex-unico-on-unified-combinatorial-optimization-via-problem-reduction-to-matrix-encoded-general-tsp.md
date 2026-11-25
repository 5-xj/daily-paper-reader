---
title: "UniCO: On Unified Combinatorial Optimization via Problem Reduction to Matrix-Encoded General TSP"
title_zh: UniCO：通过问题归约到矩阵编码的通用TSP实现统一组合优化
authors: "Wenzheng Pan, Hao Xiong, Jiale Ma, Wentao Zhao, Yang Li, Junchi Yan"
date: 2025-01-22
pdf: "https://proceedings.iclr.cc/paper_files/paper/2025/file/3acefc84f1355f5f974195bb9f6014a4-Paper-Conference.pdf"
tags: ["query:atsp", "query:ATSP"]
score: 7.0
evidence: 将ATSP等问题归约为通用TSP形式的统一神经求解框架
tldr: 现有神经组合优化求解器通常针对单一问题（如TSP、CVRP、SAT）定制，缺乏统一的表示与学习框架。本文提出UniCO，将多类组合优化问题归约为以距离矩阵为特征的通用TSP形式，并给出问题归约与解转换流程以支撑通用求解。实验表明至少ATSP、HCP与SAT可以高效归约，使同一求解器能同时处理多类实例，为统一神经组合优化提供了一条可行路径，也直接涉及ATSP的现代求解方式。
source: ICLR-2025-Accepted
selection_source: topic_research
id: openreview-iclr-2025-yewakmniex
canonical_id: "work:82c24f3de3c250aac86be155"
publication_date: 2025
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
official_pdf_url: "https://proceedings.iclr.cc/paper_files/paper/2025/file/3acefc84f1355f5f974195bb9f6014a4-Paper-Conference.pdf"
official_link: "https://proceedings.iclr.cc/paper_files/paper/2025/hash/3acefc84f1355f5f974195bb9f6014a4-Abstract-Conference.html"
conference_acceptance_status: accepted
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2025-yewakmniex/fig-001.webp\", \"caption\": \"\", \"page\": 5, \"index\": 1, \"width\": 311, \"height\": 582}, {\"url\": \"assets/figures/openreview/openreview-iclr-2025-yewakmniex/fig-002.webp\", \"caption\": \"\", \"page\": 5, \"index\": 2, \"width\": 373, \"height\": 372}, {\"url\": \"assets/figures/openreview/openreview-iclr-2025-yewakmniex/fig-003.webp\", \"caption\": \"\", \"page\": 5, \"index\": 3, \"width\": 596, \"height\": 372}, {\"url\": \"assets/figures/openreview/openreview-iclr-2025-yewakmniex/fig-004.webp\", \"caption\": \"\", \"page\": 5, \"index\": 4, \"width\": 373, \"height\": 372}, {\"url\": \"assets/figures/openreview/openreview-iclr-2025-yewakmniex/fig-005.webp\", \"caption\": \"\", \"page\": 5, \"index\": 5, \"width\": 373, \"height\": 372}, {\"url\": \"assets/figures/openreview/openreview-iclr-2025-yewakmniex/fig-006.webp\", \"caption\": \"\", \"page\": 5, \"index\": 6, \"width\": 373, \"height\": 372}, {\"url\": \"assets/figures/openreview/openreview-iclr-2025-yewakmniex/fig-007.webp\", \"caption\": \"\", \"page\": 5, \"index\": 7, \"width\": 370, \"height\": 370}, {\"url\": \"assets/figures/openreview/openreview-iclr-2025-yewakmniex/fig-008.webp\", \"caption\": \"\", \"page\": 5, \"index\": 8, \"width\": 370, \"height\": 370}, {\"url\": \"assets/figures/openreview/openreview-iclr-2025-yewakmniex/fig-009.webp\", \"caption\": \"\", \"page\": 5, \"index\": 9, \"width\": 311, \"height\": 388}]"
motivation: 神经组合优化求解器多为单一问题定制，缺乏统一的表示与学习框架。
method: 提出UniCO，将多类组合优化问题归约为以距离矩阵编码的通用TSP，并设计归约与解转换流程。
result: 验证ATSP、HCP与SAT均可高效归约，使同一神经求解器能处理多种问题实例。
conclusion: 该统一框架为跨问题类型的神经组合优化求解提供了可行范式。
---

## 摘要
针对组合优化（CO），已有多种神经求解器被提出，它们通常面向特定问题类型定制，例如TSP、CVRP和SAT等。然而，如何借助通用框架在问题表示与学习方面实现通用性，仍是一个开放问题。本文首先提出UniCO，通过将一组CO问题归约为以距离矩阵为特征的通用TSP形式来统一它们。该策略的适用性取决于问题归约与解转换过程的效率；我们表明，至少ATSP、HCP和SAT可以较容易地实现这种归约。其期望是能够有效、甚至同时利用尽可能多类型的CO实例来训练神经TSP求解器，并可选择针对特定问题类型对其进行微调。特别地，与主流的基于二维坐标欧氏实例的TSP基准不同，我们研究的TSP领域可能涉及非度量、非对称或离散距离，且没有显式节点坐标；这在TSP文献中探索较少，同时带来了新的智力挑战。沿着这一方向，我们设计了两种分别对应有监督与无监督设置的神经TSP求解器，以处理此类矩阵形式输入：1）MatPOENet；2）MatDIFFNet。前者是一种基于强化学习的序列模型，采用伪独热嵌入（POE）方案；后者是一种基于扩散的生成模型，采用混合噪声参考映射方案。在ATSP、2DTSP、HCP分布和SAT分布的通用TSP上的实验表明，该方法对具有结构和规模变化的任意矩阵编码TSP具有很强能力。

## Abstract
Various neural solvers have been devised for combinatorial optimization (CO), which are often tailored for specific problem types, e.g., TSP, CVRP and SAT, etc. Yet, it remains an open question how to achieve universality regarding problem representing and learning with a general framework. This paper first proposes **UniCO**, to unify a set of CO problems by reducing them into the *general* TSP form featured by distance matrices. The applicability of this strategy depends on the efficiency of the problem reduction and solution transition procedures, which we show that at least ATSP, HCP, and SAT are readily feasible. The hope is to allow for the effective and even simultaneous use of as many types of CO instances as possible to train a neural TSP solver, and optionally finetune it for specific problem types. In particular, unlike the prevalent TSP benchmarks based on Euclidean instances with 2-D coordinates, our studied domain of TSP could involve non-metric, asymmetric or discrete distances without explicit node coordinates, which is much less explored in TSP literature while poses new intellectual challenges. Along this direction, we devise two neural TSP solvers with and without supervision to conquer such matrix-formulated input, respectively: 1) **MatPOENet** and 2) **MatDIFFNet**. The former is a reinforcement learning-based sequential model with pseudo one-hot embedding (POE) scheme; and the latter is a Diffusion-based generative model with the mix-noised reference mapping scheme. Experiments on ATSP, 2DTSP, HCP- and SAT-distributed general TSPs show the strong ability towards arbitrary matrix-encoded TSP with structure and size variation.