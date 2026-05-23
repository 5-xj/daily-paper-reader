---
title: "sciLaMA: A Single-Cell Representation Learning Framework to Leverage Prior Knowledge from Large Language Models"
title_zh: sciLaMA：利用大型语言模型先验知识的单细胞表示学习框架
authors: "Hongru Hu, Shuwen Zhang, Yongin Choi, Venkat S. Malladi, Gerald Quon"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=0m4VsLwj5s"
tags: ["query:automatic-discovery"]
score: 2.0
evidence: 利用LLM先验知识进行单细胞分析
tldr: 利用LLM衍生的基因嵌入进行单细胞表示学习。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 现有单细胞模型难以融入外部生物学知识。
method: 提出sciLaMA框架，将LLM静态基因嵌入整合到单细胞表示学习中。
result: 在多个单细胞分析任务中提升了性能。
conclusion: LLM先验知识可有效增强单细胞数据分析。
---

## Abstract
Single-cell RNA sequencing (scRNA-seq) enables high-resolution exploration of cellular diversity and gene regulation, yet analyzing such data remains challenging due to technical and methodological limitations. Existing task-specific deep generative models like Variational Auto-Encoder (VAE) and its variants struggle to incorporate external biological knowledge, while transformer-based foundational large Language Models (LLMs or large LaMs) face limitations in computational cost and applicability to tabular gene expression data. Here, we introduce sciLaMA (single-cell interpretable Language Model Adapter), a novel representation learning framework that bridges these gaps by integrating static gene embeddings from multimodal LaMs with scRNA-seq tabular data through a paired-VAE architecture. Our approach generates context-aware representations for both cells and genes and outperforms state-of-the-art methods in key single-cell downstream tasks, including batch effect correction, cell clustering, and cell-state-specific gene marker and module identification, while maintaining computational efficiency. sciLaMA offers a computationally efficient, unified framework for comprehensive single-cell data analysis and biologically interpretable gene module discovery.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
利用LLM先验知识进行单细胞分析。

### 2. 核心内容
利用LLM衍生的基因嵌入进行单细胞表示学习。

### 3. 对应检索需求
using large language models for discovery tasks。

### 4. 来源与原文
- Source：ICML-2025-Accepted
- OpenReview：[https://openreview.net/forum?id=0m4VsLwj5s](https://openreview.net/forum?id=0m4VsLwj5s)
