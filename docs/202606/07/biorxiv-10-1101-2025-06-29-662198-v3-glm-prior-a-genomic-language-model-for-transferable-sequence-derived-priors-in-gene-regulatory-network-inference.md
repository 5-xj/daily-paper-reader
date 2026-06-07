---
title: "GLM-Prior: a genomic language model for transferable sequence-derived priors in gene regulatory network inference"
title_zh: GLM-Prior：一个用于基因调控网络推断中可迁移序列衍生先验的基因组语言模型
authors: "Gibbs, C. S., Chen, A., Bonneau, R., Cho, K."
date: 2026-06-03
pdf: "https://www.biorxiv.org/content/10.1101/2025.06.29.662198v3.full.pdf"
tags: ["query:ad"]
score: 6.0
evidence: 基因组语言模型用于预测基因调控网络先验知识
tldr: 基因调控网络推断依赖高质量先验知识，但现有先验不完整且难以跨物种获取。本文提出GLM-Prior，微调基因组语言模型从DNA序列预测转录因子-靶基因相互作用，构建序列衍生的先验矩阵，并与概率矩阵分解模型PMF-GRN结合。在人类、小鼠和酵母的六个细胞系中评估，GLM-Prior在哺乳动物中表现优异且可跨物种迁移，先验质量是下游推断性能的主要制约因素。该方法为缺乏实验数据的场景提供了可迁移的序列衍生先验构建流程。
source: biorxiv
selection_source: fresh_fetch
motivation: 基因调控网络推断需要高质量先验，但现有先验在跨物种和细胞类型时往往不完整或缺失。
method: 微调基因组语言模型GLM-Prior预测TF-靶基因相互作用，构建序列衍生先验矩阵，并与PMF-GRN结合进行双重推断。
result: 在六个细胞系中，GLM-Prior在哺乳动物中表现优于基于可达性的先验，且可跨物种迁移，先验质量显著影响网络推断性能。
conclusion: GLM-Prior作为序列衍生先验的基准流程，可在缺少实验数据时构建可迁移的先验，提升基因调控网络推断的适用性。
---

## 摘要
基因调控网络（GRN）推断依赖于高质量的先验知识，但精心策划的先验通常不完整或跨物种和细胞类型无法获得。我们提出了GLM-Prior，一个经过微调的基因组语言模型，用于从核苷酸序列预测转录因子（TF）-靶标基因相互作用，并将其作为构建TF-基因先验矩阵的序列衍生策略进行基准测试。我们将GLM-Prior与PMF-GRN（一种概率矩阵分解模型）集成，创建了一个双阶段流程，该流程结合了序列衍生的先验和单细胞基因表达数据，用于先验条件化的GRN推断。在六种人类、小鼠和酵母细胞系背景下，GLM-Prior的性能随训练数据中正标签丰度和TF覆盖率的增加而扩展，并在注释良好的哺乳动物背景下与独立参考网络表现出高于偶然的一致性。我们评估了单物种、物种迁移和多物种训练范式，发现GLM-Prior可以在相关哺乳动物物种中构建信息丰富的先验，而向酵母的迁移仍接近偶然水平。与基于可及性的先验在多种GRN推断方法中的比较表明，GLM-Prior在五个哺乳动物细胞系中的四个中实现了最高的先验性能。在这些基准测试下，先验质量在很大程度上限制了可实现的GRN推断性能，基于表达式的推断提供了依赖于先验的细化。总之，这些结果将GLM-Prior定位为在无法获得匹配实验检测的系统中用于可迁移、序列衍生先验构建的基准工作流程。

## Abstract
Gene regulatory network (GRN) inference depends on high-quality prior knowledge, yet curated priors are often incomplete or unavailable across species and cell types. We present GLM-Prior, a genomic language model fine-tuned to predict transcription factor (TF)-target gene interactions from nucleotide sequence, and benchmark it as a sequence-derived strategy for constructing TF-gene prior matrices. We integrate GLM-Prior with PMF-GRN, a probabilistic matrix factorization model, to create a dual-stage pipeline that combines sequence-derived priors with single-cell gene expression data for prior-conditioned GRN inference. Across six human, mouse, and yeast cell-line contexts, GLM-Prior performance scales with positive label abundance and TF coverage in training data, and shows abovechance agreement with independent reference networks in well-annotated mammalian contexts. We evaluate single-species, species-transfer, and multi-species training paradigms, finding that GLM-Prior can construct informative priors across related mammalian species, while transfer to yeast remains near chance. Comparisons with accessibility-based priors across multiple GRN inference methods show that GLM-Prior achieves the highest prior performance in four of five mammalian cell lines. Under these benchmarks, prior quality largely constrains achievable GRN inference performance, with expression-based inference providing prior-dependent refinement. Together, these results position GLM-Prior as a benchmarked workflow for transferable, sequence-derived prior construction in systems where matched experimental assays are unavailable.