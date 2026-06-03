---
title: Species- and Topic-aware Representation Learning for Antimicrobial Peptide Discovery
title_zh: 物种与主题感知的表示学习用于抗菌肽发现
authors: "Padi, S., Mondal, K., Kaur, N., Hoogerheide, D. P., Heinrich, F., Mihailescu, E., Klauda, J. B., Cardone, A., Keyrouz, W."
date: 2026-06-01
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.28.728246v1.full.pdf"
tags: ["query:ad"]
score: 6.0
evidence: 蛋白语言模型用于抗菌肽发现
tldr: 抗菌肽耐药性威胁全球健康，亟需高效发现抗菌肽，但实验验证成本高。提出STAMP框架，结合蛋白质语言模型嵌入、物种条件和主题感知表示，实现跨物种最小抑菌浓度预测。在三个数据集上取得优异性能，皮尔逊相关系数0.837，R2 0.70，经实验验证有效。提供可扩展的预测工具，加速抗菌肽发现与优化。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有抗菌肽发现中实验验证成本高、耗时长，需要准确的跨物种最小抑菌浓度预测模型。
method: STAMP统一框架，融合蛋白质语言模型嵌入、物种条件向量和主题感知表示，端到端学习抗菌肽活性。
result: 在三个基准数据集上皮尔逊相关系数达0.837，R2达0.70，且经大肠杆菌和表皮葡萄球菌实验验证。
conclusion: STAMP是可扩展的MIC预测框架，能有效加速抗菌肽发现与优化。
---

## 摘要
抗菌药物耐药性构成重大全球健康挑战，需要高效策略来发现有效的抗菌肽（AMPs）。尽管最近的生成模型可以产生许多候选序列，但由于湿实验验证所有生成的肽的成本高且耗时，因此迫切需要准确预测肽的效力，通常以最小抑菌浓度（MIC）度量。我们提出STAMP，一种用于AMP发现的物种与主题感知表示学习框架。这一统一的机器学习框架允许跨物种预测AMP活性。STAMP整合了蛋白质语言模型嵌入与物种条件化及捕获序列级模式的主题感知表示，从而能够在单一模型中跨多种细菌物种进行可泛化的预测。我们在三个基准数据集上评估了STAMP，包括两个先前发表的数据集和一个新整理的来自DBAASP的数据集，系统性地处理了重复和不一致性。STAMP在这些数据集上取得了强大的预测性能，皮尔逊相关系数（PCC）达0.837，R2达0.70，优于多个基线模型。重要的是，我们进一步使用经实验验证对大肠杆菌和表皮葡萄球菌具有抗菌活性的肽验证了预测模型，证明了其实际应用性。此外，残基层面的重要性分析揭示了决定抗菌活性的序列因素。综合来看，这些结果确立了STAMP作为MIC预测的可扩展框架和加速AMP发现与优化的有效计算工具。

## Abstract
Antimicrobial resistance poses a major global health challenge, necessitating efficient strategies to discover potent antimicrobial peptides (AMPs). While recent generative models can produce many candidate sequences, experimentally validating all generated peptides in wet labs is impractical due to the high costs and time involved in such measurements. As a result, there is a strong demand for accurate predictions of peptide efficacy, typically measured as the minimum inhibitory concentration (MIC). We introduce STAMP, a framework for Species- and Topic-aware Representation Learning in AMP Discovery. This unified machine learning framework allows for cross-species predictions of AMP activity. STAMP integrates protein language model embeddings with species conditioning and topic-aware representations that capture sequence-level patterns, enabling generalizable predictions across multiple bacterial species within a single model. We evaluated STAMP on three benchmark datasets, which include two previously published datasets and a newly curated dataset derived from DBAASP, addressing duplicates and inconsistencies systematically. STAMP achieved strong predictive performance across these datasets, demonstrating a Pearson correlation coefficient (PCC) of 0.837 and an R2 of 0.70, outperforming several baseline models. Importantly, we further validated our prediction model using peptides that were experimentally tested for their antimicrobial activity against E.coli. and S.epidermidis bacteria, demonstrating its real-world applicability. Furthermore, residue-level importance analyses provide insights into the sequence determinants governing antimicrobial activity. Together, these results establish STAMP as a scalable framework for MIC prediction and an effective computational tool for accelerating AMP discovery and optimization.