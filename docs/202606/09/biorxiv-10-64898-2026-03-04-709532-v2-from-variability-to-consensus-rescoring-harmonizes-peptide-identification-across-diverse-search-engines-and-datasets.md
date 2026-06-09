---
title: "From variability to consensus: rescoring harmonizes peptide identification across diverse search engines and datasets"
title_zh: 从变异性到共识：重新评分协调了跨不同搜索引擎和数据集的肽鉴定
authors: "Winkelhardt, D., Berres, S., Uszkoreit, J."
date: 2026-06-08
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.04.709532v2.full.pdf"
tags: ["query:rerank-train"]
score: 6.0
evidence: 重评分方法类似于信息检索中的重排序器训练
tldr: 蛋白质组学中不同搜索引擎的肽-谱匹配结果存在不一致性。基准测试七种搜索引擎与三种rescoring方法（Percolator、MS2Rescore、Oktoberfest）在四个数据集上的表现，发现rescoring显著提高鉴定一致性，预测方法增益最大。数据库大小对宏蛋白质组影响显著，但预测方法在特定配置下存在FDR低估。高级rescoring能协调搜索引擎结果，增强稳健性和可比性，但仍需谨慎选择特征与数据库。
source: biorxiv
selection_source: fresh_fetch
motivation: 系统比较不同搜索引擎和rescoring方法在多种条件下的性能，评估其对鉴定一致性和FDR控制的影响。
method: 对7种搜索引擎、4个数据集及不同大小数据库，测试标准FDR及Percolator、MS2Rescore、Oktoberfest三种rescoring。
result: Rescoring显著提高鉴定一致性，预测方法增益最大；数据库大小对宏蛋白质组影响显著；部分预测方法存在FDR低估。
conclusion: 高级rescoring协调搜索引擎鉴定结果，但可靠FDR控制需谨慎选择特征和数据库。
---

## 摘要
肽谱匹配（PSM）重新评分已成为蛋白质组学工作流程中的标准做法，提高了跨多种搜索引擎的肽鉴定准确性。尽管有多种重新评分策略可用，但跨多个搜索引擎、数据集和数据库配置的系统比较仍然有限。在这里，我们对七个公开可用的搜索引擎进行了基准测试，评估了标准的目标-诱饵假发现率（FDR）估计以及Percolator、MS2Rescore和Oktoberfest在四个不同质谱平台上以数据依赖模式获取的数据集上的表现，并针对不同大小和组成的蛋白质数据库进行了搜索。重新评分显著提高了鉴定一致性，并减少了搜索引擎之间的变异性，基于预测的方法带来了最大的增益。虽然数据库大小对人类数据集的影响有限，但它显著影响了宏蛋白质组数据集的鉴定率。基于诱饵的评估表明，方法总体上对FDR控制得当，尽管基于预测的重新评分在特定配置中表现出更高的FDR低估趋势。总体而言，先进的重新评分策略协调了跨搜索引擎的肽鉴定结果，从而增强了蛋白质组学分析的稳健性和可比性。然而，为了确保在不同实验设置下可靠的FDR控制和最佳性能，仔细的特征选择和适当的数据库选择仍然至关重要。

## Abstract
Peptide-spectrum match (PSM) rescoring has become standard in proteomics workflows, improving peptide identification accuracy across diverse search engines. Despite the availability of multiple rescoring strategies, systematic comparisons spanning several search engines, datasets, and database configurations remain limited. Here, we benchmarked seven publicly available search engines, evaluating standard target-decoy-based false discovery rate (FDR) estimation alongside Percolator, MS2Rescore, and Oktoberfest across four datasets acquired on different mass spectrometry platforms in data-dependent mode and searched against protein databases of varying size and composition. Rescoring substantially increased identification consensus and reduced variability between search engines, with prediction-based approaches yielding the largest gains. While database size had limited impact for human datasets, it significantly affected identification rates on a metaproteomic dataset. Entrapment-based evaluation indicated generally adequate FDR control across methods, although prediction-based rescoring exhibited a higher tendency toward FDR underestimation in specific configurations. Overall, advanced rescoring strategies harmonize peptide identification outcomes across search engines, thereby enhancing robustness and comparability in proteomics analyses. However, careful feature selection and appropriate database choice remain essential to ensure reliable FDR control and optimal performance across diverse experimental settings.