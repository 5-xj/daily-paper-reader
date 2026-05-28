---
title: Rewriting protein alphabets with language models
title_zh: 利用语言模型重写蛋白质字母表
authors: "Pantolini, L., Studer, G., Engist, L., Pudziuvelyte, I., Pommerening, F., Waterhouse, A. M., Bienert, S., Tauriello, G., Steinegger, M., Schwede, T., Durairaj, J."
date: 2026-05-22
pdf: "https://www.biorxiv.org/content/10.1101/2025.11.27.690975v3.full.pdf"
tags: ["query:ad"]
score: 7.0
evidence: 使用语言模型进行蛋白质同源发现
tldr: 远程同源检测对蛋白质功能注释和结构预测至关重要。本文提出TEA方法，利用对比学习将蛋白质语言模型嵌入转换为新的20字母字母表。该方法无需结构信息，搜索速度与序列搜索相当，性能与结构方法相当且互补。将语言模型表示学习与经典序列算法结合，为生物信息学提供强大新工具。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有远程同源检测方法需结构信息或速度慢，亟需高效且敏感的序列搜索方法。
method: 采用对比学习将蛋白质语言模型嵌入转换为新的20字母字母表TEA，用于同源性搜索。
result: TEA搜索速度与序列搜索相同，性能与结构方法相当且互补，无需结构信息。
conclusion: 将语言模型与经典序列算法结合，为大规模蛋白质同源性搜索提供新型高效工具。
---

## 摘要
快速且灵敏地检测远程同源性对于功能注释和结构预测等任务至关重要。我们提出了一种新方法，利用对比学习将蛋白质语言模型的嵌入转换为一个新的20个字母的字母表TEA，从而实现高效的大规模蛋白质同源性搜索。使用我们的字母表进行搜索，其性能与基于结构的方法相当且互补，无需任何结构信息，并且具有序列搜索的速度。最终，我们将蛋白质语言模型表示学习的最新进展引入到过去半个世纪开发的众多序列生物信息学算法中，为生物发现提供了强大的新工具。

## Abstract
Detecting remote homology with speed and sensitivity is crucial for tasks like function annotation and structure prediction. We introduce a novel approach using contrastive learning to convert protein language model embeddings into a new 20-letter alphabet, TEA, enabling highly efficient large-scale protein homology searches. Searching with our alphabet performs on par with and complements structure-based methods without requiring any structural information, and with the speed of sequence search. Ultimately, we bring the exciting advances in protein language model representation learning to the plethora of sequence bioinformatics algorithms developed over the past half-century, offering a powerful new tool for biological discovery.