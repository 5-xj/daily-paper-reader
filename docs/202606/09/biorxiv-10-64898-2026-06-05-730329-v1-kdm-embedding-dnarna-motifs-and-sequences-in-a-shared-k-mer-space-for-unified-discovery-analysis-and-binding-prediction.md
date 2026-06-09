---
title: "KDM: embedding DNA/RNA motifs and sequences in a shared k-mer space for unified discovery, analysis and binding prediction"
title_zh: KDM：在共享k-mer空间中嵌入DNA/RNA基序与序列，实现统一的发现、分析和结合预测
authors: "Fumagalli, L., Becchi, T., Cereda, M., Pozzoli, U."
date: 2026-06-07
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.05.730329v1.full.pdf"
tags: ["query:ad"]
score: 6.0
evidence: 提出了序列中自动基序发现的统一框架
tldr: 传统motif分析方法在可解释性和性能间存在权衡，KDM框架通过将motifs和序列表示为共享k-mer字典上的概率分布，利用Hellinger变换和Bhattacharyya系数统一实现了评分、比较、发现和预测。在大量ChIP-seq和eCLIP实验中，KDM方法在排名一致性和预测性能上匹配或超越现有方法，并揭示了数据规模比模型架构更关键。该框架提供了贯穿全流程的单一可解释表示。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有motif分析方法在可解释性（PWM）和性能（深度学习）之间分裂，缺乏统一框架。
method: 通过Hellinger变换将motifs和序列嵌入共享k-mer字典空间，使用Bhattacharyya系数统一评分、比较和预测。
result: 在1324个TF和161个RBP实验中，KDM匹配传统方法排名；在2475个实验中预测性能与深度学习相当。
conclusion: KDM提供统一可解释的motif分析框架，表明数据规模比模型架构更重要。
---

## 摘要
基序发现和结合位点预测是调控基因组学的核心任务，然而方法论领域分裂为可解释但僵化的位置权重矩阵（PWM）和高性能但不透明的机器学习模型。我们提出了KDM，一个统一的框架，其中基序和序列都表示为在共享k-mer字典上的概率分布，通过Hellinger变换嵌入。这种共同几何形状使得基序-序列评分、基序-基序比较、从头发现和结合预测仅需一个基本操作——Bhattacharyya系数。我们基于该表示实例化了四个工具：用于位置富集分析的KDMMap、用于信息内容感知基序匹配的KDMMatch、通过投影非负矩阵分解进行无监督基序发现的KDMFind，以及使用Lasso正则化逻辑回归进行结合预测的KDM-LRLM。在1,324个转录因子ChIP-seq和161个RBP eCLIP实验中，KDMMap在84%的TF和79%的RBP实验中匹配了CentriMo的基序排名，KDMMatch在74.5%的TF上与Tomtom的基序注释一致。在涵盖2,475个实验的四个数据集上的结合预测中，KDM-LRLM匹配或超过了八种深度学习方法和三种基于k-mer的竞争者。值得注意的是，AI方法仅在训练集大小的前四分之一区间内超越了k-mer方法，这表明数据规模而非架构驱动了近期深度模型的主导地位。KDM在整个基序分析工作流中提供了一个单一的可解释表示。

## Abstract
Motif discovery and binding-site prediction in DNA and RNA sequences are central tasks in regulatory genomics, yet the methodological landscape is split between interpretable but rigid position weight matrices (PWMs) and high-performing but opaque machine-learning models. We present KDM, a unifying framework in which both motifs and sequences are represented as probability distributions over a shared k-mer dictionary, embedded via the Hellinger transformation. This common geometry enables motif-sequence scoring, motif-motif comparison, de novo discovery, and binding prediction with a single primitive, the Bhattacharyya coefficient. We instantiate four tools on this representation: KDMMap for positional enrichment analysis, KDMMatch for information-content-aware motif matching, KDMFind for unsupervised motif discovery via projective non-negative matrix factorization, and KDM-LRLM for binding prediction with Lasso-regularized logistic regression. Across 1,324 transcription-factor ChIP-seq and 161 RBP eCLIP experiments, KDMMap matches CentriMo's motif rankings in 84% of TF and 79% of RBP experiments, and KDMMatch agrees with Tomtom on motif annotation in 74.5% of TFs. On binding prediction across four datasets covering 2,475 experiments, KDM-LRLM matches or exceeds eight deep-learning and three k-mer-based competitors. Notably, AI methods overtake k-mer methods only in the top quartile of training-set size, indicating that data scale, not architecture, drives the recent dominance of deep models. KDM provides a single interpretable representation across the full motif-analysis workflow.