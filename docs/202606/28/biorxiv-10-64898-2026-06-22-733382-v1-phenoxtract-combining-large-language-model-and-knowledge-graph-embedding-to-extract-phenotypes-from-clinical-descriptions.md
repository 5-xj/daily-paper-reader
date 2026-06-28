---
title: "PhenoXtract: combining Large Language Model and Knowledge Graph embedding to extract phenotypes from clinical descriptions"
title_zh: PhenoXtract：结合大语言模型与知识图谱嵌入从临床描述中提取表型
authors: "Berardelli, S., BRIERE, G., Loire, B., De Paoli, F., Gazzo, A. M., Limongelli, I., Magni, P., Zucca, S., Baudot, A."
date: 2026-06-26
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.22.733382v1.full.pdf"
tags: ["query:ad"]
score: 7.0
evidence: 结合大语言模型和知识图谱进行表型抽取
tldr: 人工从临床描述中提取标准化表型术语耗时且易错。PhenoXtract采用大语言模型提取候选实体，并通过知识图谱嵌入将其映射到富化版人类表型本体。在专家标注数据集上召回率0.70、精确度0.85，每例分析仅需10-20秒，在多数数据集上超越现有工具。该混合方法为自动化临床表型提取提供了可扩展方案。
source: biorxiv
selection_source: fresh_fetch
motivation: 临床表型标准化对诊断至关重要，但手动从文献或病历中提取并映射到本体面临效率瓶颈。
method: 多阶段管道：利用大语言模型抽取候选表型实体，再通过知识图谱嵌入映射到富化版人类表型本体。
result: 在专家标注数据上召回0.70、精确0.85，每文本处理10-20秒，优于两种基线工具。
conclusion: 大语言模型与知识图谱嵌入的混合方法有望实现大规模自动化临床表型提取。
---

## 摘要
动机：标准化的表型描述对于准确诊断至关重要，然而临床医生和研究人员在手动从科学文献或患者临床记录中提取表型并将其映射到人类表型本体（Human Phenotype Ontology）时面临挑战。深度学习的最新进展为自动化提供了新的机会。我们开发了PhenoXtract，这是一种新颖的表型提取方法，结合了大语言模型和知识图谱嵌入。PhenoXtract是一个多步骤流水线，以临床描述作为输入，使用大语言模型提取候选表型实体，并将其映射到经过丰富处理的人类表型本体（作为知识图谱处理）中的术语。结果：针对专家策划的基准数据集评估显示，PhenoXtract的召回率为0.70，精确率为0.85，证明了与手动提取表型的一致性，每段文本分析的计算时间为10-20秒。此外，在所评估的三个基准数据集中，PhenoXtract在其中两个上超越了基于规则和基于深度学习的现有最先进工具。这些结果表明，结合大语言模型和知识图谱嵌入的混合方法为大规模自动化临床表型分析提供了一个有前景的方向。

## Abstract
Motivation: Standardized phenotypic descriptions are essential for accurate diagnosis, yet clinicians and researchers face challenges in manually extracting and mapping phenotypes from scientific literature or patient clinical records to the Human Phenotype Ontology. Recent advances in deep learning offer new opportunities for automation. We developed PhenoXtract, a novel phenotype extraction approach that combines Large Language Models and Knowledge Graph embedding. PhenoXtract is a multistep pipeline that takes clinical descriptions as input, extracts candidate phenotype entities using large language models, and maps them to terms from an enriched version of the Human Phenotype Ontology, processed as a knowledge graph. Results: Evaluation against expert-curated ground-truth datasets show a recall of 0.70 and precision of 0.85 for PhenoXtract, demonstrating concordance with manually extracted phenotypes, with a computation time of 10-20 seconds for each text analyzed. Moreover, PhenoXtract surpasses rule-based and deep learning-based state-of-the-art tools in two out of the three ground-truth datasets evaluated. These results suggest that hybrid approaches combining Large Language Models and Knowledge Graph embeddings represent a promising direction for automated clinical phenotyping at scale.