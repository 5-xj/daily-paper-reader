---
title: "GR-SAFS: A Graph-Regularized Stacking Framework with Adaptive Feature Selection for High-Dimensional Prognostic Biomarker Discovery"
title_zh: GR-SAFS：一种基于图正则化堆叠框架的自适应特征选择方法，用于高维预后生物标志物发现
authors: "He, J., Guan, J."
date: 2026-06-28
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.23.733986v1.full.pdf"
tags: ["query:ad"]
score: 7.0
evidence: 使用图正则化堆叠和自适应特征选择的生物标志物发现框架
tldr: 高维转录组数据中识别预后生物标志物面临稀疏性、网络拓扑保持和非线性信号整合三重挑战。GR-SAFS框架通过图正则化Lasso嵌入基因共表达网络，并行运行随机森林捕获非线性模式，并使用eCDF对齐和多样性惩罚二次规划路由器融合模型输出。在TCGA-LUAD队列中识别出20基因签名，训练一致性指数0.700，且在两个独立跨平台队列中唯一保持显著风险分层。该框架为整合网络拓扑与非线性信号提供了可复现的解决方案。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有方法通常忽略基因网络结构、遗漏非线性交互，或缺乏融合异构模型输出的机制。
method: GR-SAFS包含三个核心模块：图Lasso嵌入共表达网络拉普拉斯先验、随机森林引擎、eCDF对齐层和多样性惩罚二次规划路由器。
result: 在TCGA-LUAD上获得20基因签名，训练C指数0.700；跨平台验证中，仅GR-SAFS的签名在所有队列保持显著风险分层。
conclusion: GR-SAFS有效结合网络拓扑与非线性信号，开源实现确保了完全可复现性。
---

## 摘要
从高维转录组数据中识别预后生物标志物面临三重挑战：实现稀疏性、保持生物网络拓扑结构以及整合互补的非线性信号。现有方法通常忽略网络结构、遗漏非线性相互作用，或缺乏将异质模型输出融合的原则性机制。我们提出了GR-SAFS（图正则化堆叠与自适应特征选择），该框架包含三个模块：一个嵌入基因共表达网络拉普拉斯先验的Graph-Lasso引擎，与随机森林引擎并行运行；一个经验累积分布函数（eCDF）对齐层，将稀疏和密集的重要度置于共同百分位尺度上；以及一个多样性惩罚二次规划路由器，其严格凸性保证了唯一的全局最优解。在TCGA-LUAD队列中，GR-SAFS识别出一个20基因特征，训练一致性指数为0.700。在两个独立的跨平台微阵列队列中，GR-SAFS是唯一其固定特征在所有队列中均保持显著风险分层的方法，而C指数更强的基线方法在至少一个外部队列中失去显著性。功能富集将该特征锚定于连贯的Wnt/β-catenin轴。我们发布了开源实现以确保完全可重复性。

## Abstract
Identifying prognostic biomarkers from high-dimensional transcriptomic data poses a triple challenge: achieving sparsity, preserving biological network topology, and integrating complementary nonlinear signals. Existing methods typically ignore network structure, miss nonlinear interactions, or lack a principled mechanism to fuse heterogeneous model outputs. We introduce GR-SAFS (Graph-Regularized Stacking with Adaptive Feature Selection), a framework with three modules: a Graph-Lasso engine embedding gene co-expression network Laplacian priors, run in parallel with a Random Forest engine; an empirical cumulative distribution function (eCDF) alignment layer that places sparse and dense importances on a common percentile scale; and a diversity-penalized quadratic programming router whose strict convexity yields a unique global optimum. On the TCGA-LUAD cohort, GR-SAFS identifies a 20-gene signature with a training concordance index of 0.700. Across two independent crossplatform microarray cohorts, GR-SAFS is the only method whose frozen signature retains statistically significant risk stratification in every cohort, where stronger-C-index baselines lose significance on at least one external cohort. Functional enrichment anchors the signature to a coherent Wnt/{beta};-catenin axis. An open-source implementation is released for full reproducibility.