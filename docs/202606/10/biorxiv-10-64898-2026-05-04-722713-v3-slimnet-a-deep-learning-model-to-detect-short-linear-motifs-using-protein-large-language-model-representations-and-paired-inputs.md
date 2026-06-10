---
title: "SLiMNet: a deep learning model to detect short linear motifs using protein large language model representations and paired inputs"
title_zh: SLiMNet：一种利用蛋白质大语言模型表示和配对输入检测短线性基序的深度学习模型
authors: "McFee, M. C., Kim, P. M."
date: 2026-06-10
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.04.722713v3.full.pdf"
tags: ["query:ad"]
score: 6.0
evidence: 使用蛋白质大模型进行基序发现
tldr: 短线性基序（SLiMs）在无序区域中调控蛋白互作，但实验验证的基序有限且现有方法缺乏功能注释能力。本文提出SLiMNet，一种基于孪生网络和对比学习的深度学习模型，利用蛋白质大语言模型嵌入预测成对SLiMs的功能相似性。模型在未见过的非冗余基序对上检测到功能共享，其得分与深度突变扫描实验的结合强度相关。研究提供了三个资源库：DisProt IDR区16-mer全比对图谱、MoMaP实例比对库和256个孤儿基序潜在功能对图谱，为SLiM功能注释和假说生成提供了重要工具。
source: biorxiv
selection_source: fresh_fetch
motivation: 实现短线性基序的功能相似性预测，解决现有方法无法功能注释的瓶颈。
method: 基于孪生网络和对比学习，使用蛋白质大语言模型嵌入处理成对SLiM输入。
result: 检测到非冗余基序对共享功能，得分与实验结合强度相关，并构建了多个功能注释资源库。
conclusion: 提供了SLiM功能预测工具和资源库，推动基序功能注释和假说生成。
---

## 摘要
短线性基序（SLiMs）是位于内在无序区（IDRs）内的短片段（长度为3-15个氨基酸），介导瞬时蛋白质-蛋白质相互作用以及其他功能，如稳定性和亚细胞定位。在可能存在的数十万个SLiMs中，只有几千个得到实验验证。SLiMs可以通过局部比对在IDRs内检测为保守区域，但当前方法的敏感性和特异性有限，且无法对其命中进行功能注释。因此，功能分配是SLiM生物学中的一个主要未解决问题。本文提出SLiMNet，一种受孪生网络和对比学习启发的深度学习模型，用于预测SLiMs对之间的功能相似性。SLiMNet使用蛋白质大语言模型嵌入，并在标注的SLiM集合上进行训练。我们证明，它能检测到未见过的、非冗余基序对中的共享功能，其得分与来自细胞周期蛋白结合基序深度突变扫描的实验结合强度相关。利用SLiMNet，我们提供了源于已标注IDR区域的假定SLiM对存储库，以帮助生成SLiMs功能注释的假设。这包括一个基于DisProt数据库中平铺IDR的所有对全部16聚体评分生成的图谱。我们证明，它捕获了最近添加到MoMaP的一个新核定位基序以及文献中的一个PRMT1甲基化基序。我们还提供了一个存储库，其中包含所有IDR与所有MoMaP实例通过SLiMNet评分的结果，以及256个已知孤儿基序（仅有一个已知实例具有基本功能的基序）的潜在功能对图谱。总的来说，这些图谱是SLiM生物学界的有用资源。

## Abstract
Short linear motifs (SLiMs) are short (3-15 amino acids in length) segments within intrinsically disordered regions (IDRs) that mediate transient protein-protein interactions as well as other functions such as stability and subcellular localization. Only a few thousand out of likely hundreds of thousands have been experimentally validated. SLiMs can be detected as conserved regions inside of IDRs using local alignments, though current approaches have limited sensitivity and specificity and are unable to functionally annotate their hits. Assigning function is hence a major outstanding issue in SLiM biology. Here we present SLiMNet, a deep learning model inspired by siamese networks and contrastive learning that predicts functional similarity in pairs of SLiMs. SLiMNet uses uses protein large language model embeddings and is trained on annotated sets of SLiMS. We show that it detects shared function in unseen, non-redundant motif pairs, and its scores correlate with experimental binding strengths from deep mutational scanning of cyclin-binding motifs. Using SLiMNet we provide repositories of putative SLiM pairs derived from annotated IDR regions for to help with hypothesis generation for the functional annotation of SLiMs. This includes an atlas generated from all-by-all scoring 16-mers from tiled IDRs from the DisProt database. We show that it captures a new nuclear localization motif recently added to MoMaP and a PRMT1 methylation motif in the literature. We also provided a repository of all IDRs scored with SLiMNet against against all MoMaP instances, and an atlas of potential functional pairs for 256 known orphan motifs (motifs with only a single known instance with essential function). Collectively, these atlases are useful resources for the SLiM biology community