---
title: A Convolutional Deep Learning Approach to identify DNA Sequences for Gene Prediction
title_zh: 一种用于识别基因预测 DNA 序列的卷积深度学习方法
authors: "Motta, J. A., Gomez, P. D."
date: 2026-04-01
pdf: "https://www.biorxiv.org/content/10.1101/2025.10.03.680292v2.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 人类基因组序列基因预测的深度学习方法
tldr: "本研究提出一种基于卷积神经网络（CNN）的高效基因预测方法。利用人类基因组GRCh38数据，将DNA序列转化为氨基酸序列，并通过TF*IDF向量化构建特征矩阵。该模型在3.6万个基因及伪基因数据上训练，并在24个遗传病相关基因测试中表现优异，达到了领域领先水平。"
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-03-680292-v2/fig-001.webp\", \"caption\": \"Table 2. Interest genes (Genetic disorders)\", \"page\": 6, \"index\": 1, \"width\": 947, \"height\": 1121}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-03-680292-v2/fig-002.webp\", \"caption\": \"Figure 2. Detailed Induction Processes\", \"page\": 11, \"index\": 2, \"width\": 1044, \"height\": 418}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-03-680292-v2/fig-003.webp\", \"caption\": \"Fig. 4. Genes of Interest vs. random genes\", \"page\": 15, \"index\": 3, \"width\": 1064, \"height\": 1054}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-03-680292-v2/fig-004.webp\", \"caption\": \"Table 3. Interest genes (Genetic disorders)\", \"page\": 7, \"index\": 4, \"width\": 970, \"height\": 1079}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-03-680292-v2/fig-005.webp\", \"caption\": \"Fig. 3. Genes of Interest vs. random genes\", \"page\": 14, \"index\": 5, \"width\": 1075, \"height\": 1077}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-03-680292-v2/fig-006.webp\", \"caption\": \"Figure 5. Model’s probab. and AUGUSTUS predictions Figure 6. Calibration of prediction probabilities\", \"page\": 17, \"index\": 6, \"width\": 1023, \"height\": 400}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-03-680292-v2/fig-007.webp\", \"caption\": \"Figure 7. P-R curve for model and AUGUSTUS Figure 8. Comparison of model and AUGUSTU\", \"page\": 17, \"index\": 7, \"width\": 1035, \"height\": 431}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-03-680292-v2/fig-008.webp\", \"caption\": \"Table 5. Performance of partitions of genes of interest\", \"page\": 12, \"index\": 8, \"width\": 906, \"height\": 546}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-03-680292-v2/fig-009.webp\", \"caption\": \"Table 4. Number of examples/genes/pseudogenes by chromosome\", \"page\": 9, \"index\": 9, \"width\": 921, \"height\": 306}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-03-680292-v2/fig-010.webp\", \"caption\": \"Table 1. Interest genes (Genetic disorders)\", \"page\": 5, \"index\": 10, \"width\": 947, \"height\": 1075}]"
motivation: 旨在开发一种更高效的机器学习方法，以准确识别编码基因的DNA序列。
method: "将DNA序列翻译为氨基酸后，利用TF*IDF向量化构建特征矩阵，并采用卷积神经网络进行深度学习训练。"
result: 在24个遗传病相关基因及其周边区域的测试中，模型在精确率、召回率和F值等指标上均表现出色。
conclusion: 该基于CNN的深度学习方法在基因预测任务中达到了当前最先进的技术水平。
---

## 摘要
在这项工作中，我们提出了一种高效的机器学习方法，用于识别编码基因的 DNA 序列。学习过程基于从各种专业数据库中提取的人类基因组 Build 38 (GRCh38) 序列。随后将这些序列翻译成氨基酸序列，并用于构建矩阵，以便利用 TF*IDF 向量化方法提取特征，从而创建训练空间。预测函数是使用卷积神经网络 (CNN) 深度学习模型学习得到的。训练空间是利用人类基因组的 24 条染色体以及约 36,000 个基因和假基因创建的，这些基因名称获取自 HUGO 基因命名委员会 (HGNC)。对 24 个与遗传疾病相关的基因及其周围 DNA 区域进行了性能分析。所使用的评估指标包括目标基因的精确率、召回率、F 分数、准确率和 ROC 曲线。取得的结果超出了我们的所有预期，使该工作达到了基因预测领域的先进水平。

## Abstract
In this work, we present a highly efficient machine learning method for identifying DNA sequences that code for genes. The learning process is based on Human Genome Build 38 (GRCh38) sequences extracted from various specialized databases. The sequences were then translated into amino acid sequences and used to build matrices that facilitate the extraction of features with the TF*IDF vectorization method for the creation of the training space. The prediction functions are learned using a convolutional neural network (CNN) deep learning model. The training spaces were created using the 24 chromosomes of the human genome and approximately 36,000 genes and pseudogenes whose names were fetched from the HUGO Gene Nomenclature Committee (HGNC). Performance analysis was performed on 24 genes associated with genetic disorders, as well as the surrounding DNA regions. The metrics used were precision, recall, F_score measure, accuracy and ROC curves for the genes of interest. The results achieved exceed all our expectations and place the work at the level of the state of the art for gene prediction.