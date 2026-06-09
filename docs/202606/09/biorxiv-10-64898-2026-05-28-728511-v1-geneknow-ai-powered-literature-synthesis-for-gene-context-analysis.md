---
title: "GeneKnow: AI-powered literature synthesis for gene-context analysis"
title_zh: GeneKnow：基于AI的基因背景分析文献综合
authors: "Zhang, H., Zang, C."
date: 2026-06-01
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.28.728511v1.full.pdf"
tags: ["query:ad"]
score: 6.0
evidence: 使用大语言模型进行文献综合，属于发现任务
tldr: 手动文献综述难以高效解析基因在特定生物学上下文中的功能，费时且易出错。GeneKnow框架通过受控混合工作流利用生成式AI，生成带真实引用的文献综合。系统基准测试显示，GeneKnow在生成可信基因功能综述时无虚假引用，且幻觉显著低于主流AI工具。该框架为基因-上下文分析提供了可靠、可追溯的解决方案。
source: biorxiv
selection_source: fresh_fetch
motivation: 人工文献综述耗时且易出错，难以高效准确地解析基因在特定生物学上下文中的功能。
method: GeneKnow采用源扎根的受控混合工作流，结合生成式AI模型与真实引用追溯机制。
result: 系统基准测试中，GeneKnow生成的可信基因功能综述无虚假引用，且幻觉显著低于主流网页AI工具。
conclusion: GeneKnow为基因-上下文分析提供了可靠、可追溯的AI驱动文献综合方案。
---

## 摘要
在特定的生物学背景下解读基因功能对生物医学研究至关重要，然而手动文献综述工作强度大。我们开发了GeneKnow，一个基于来源的框架，在受控的混合工作流中使用生成式AI模型，生成可靠、可追溯的文献综合，并附有真实引文。通过系统性的基准测试，我们证明了GeneKnow在生成可信的、特定背景下的基因功能综合方面优于主流网页界面AI工具，且不会产生虚假引文，并最大程度减少幻觉。

## Abstract
Interpreting gene function in specific biological contexts is essential for biomedical research, yet manual literature review is labor-intensive. We developed GeneKnow, a source-grounded framework that uses generative AI models within a controlled hybrid workflow to produce reliable, traceable literature synthesis supported by authentic citations. Through systematic benchmarking, we showed that GeneKnow outperforms mainstream web-interface AI tools in generating trustworthy context-specific gene function syntheses without fabricated citations and minimizing hallucinations.