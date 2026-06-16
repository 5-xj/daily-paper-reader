---
title: An AI-Powered Trisomy 21 Research Assistant
title_zh: 人工智能驱动的21三体研究助手
authors: "NANDI, S., Sundararajan, Z., Subirana-Granes, M., Espinosa, J. M., Pividori, M., Sullivan, K. D., Galbraith, M. D., Costello, J."
date: 2026-06-11
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.08.730893v1.full.pdf"
tags: ["query:ad"]
score: 6.0
evidence: 基于大模型的检索增强生成用于唐氏综合症文献发现
tldr: 唐氏综合征相关文献激增，通用大模型检索缺乏实验证据。本文提出section-aware RAG系统T21 Research Assistant，优先利用论文Results部分，从1789篇开放获取文献中检索并生成引用响应。在专家问题测试中，BERTScore F1达0.712，召回率0.758，性能比肩顶级模型。该系统提供结构化、可验证的答案，已公开上线。
source: biorxiv
selection_source: fresh_fetch
motivation: 标准RAG平等对待论文各部分，导致检索结果偏向背景而非实验证据，影响回答可靠性。
method: 构建基于NVIDIA Nemotron的section-aware RAG，通过多阶段流水线（查询验证、检索、重排序、合成、引用验证）优先引用Results部分。
result: 专家评估显示，BERTScore F1为0.712，召回率0.758，与GPT-4等模型性能相当或更优。
conclusion: T21 Research Assistant为唐氏综合征研究提供可信、可引用的答案，降低了文献综述门槛。
---

## 摘要
唐氏综合征由21三体引起，会增加多种共病条件的风险。截至2026年初，PubMed中已有超过34,000篇相关出版物，跟上这一不断扩大的文献数量颇具挑战。虽然通用大型语言模型广泛用于信息检索，但它们通常依赖广泛的训练数据而非特定证据。检索增强生成（RAG）通过将模型输出与源文本关联，提高了回复的严谨性和可靠性。在研究中，源文本是经过同行评审的文章。标准实现将所有手稿章节等同对待，允许背景文本与实验结果同等排序。为了让模型输出侧重于有实验支持的回复，我们开发了T21研究助手，这是一个对章节敏感的RAG系统，优先处理结果章节，以将回复基于主要实验证据。该系统仅从PubMed Central的1,789篇开放获取的唐氏综合征出版物中提取内容，包括327篇NIH INCLUDE资助的研究，并使用多阶段流水线进行查询验证、检索、重排序、综合和引文验证。基于NVIDIA Nemotron模型构建，它能生成结构化的、附有引用的回复。使用专家策划的问题进行评估，显示出强劲性能，BERTScore F1达到0.712，召回率为0.758，与领先的专有和开源模型相当或更优。T21研究助手可在以下网址获取：https://bioinformatics.cuanschutz.edu/t21-res-assi/

## Abstract
Down syndrome, caused by trisomy 21, increases the risk of diverse co-occurring conditions. With more than 34,000 related publications indexed in PubMed as of early 2026, keeping pace with this expanding literature is challenging. While general-purpose large language models are widely used for information retrieval, they often rely on broad training data rather than specific evidence. Retrieval-augmented generation (RAG) improves rigor and reliability of responses by linking model outputs to source texts. In research, source texts are peer-reviewed articles. Standard implementations treat all manuscript sections equally, allowing background text to rank as highly as experimental results. To focus model outputs on experimentally supported responses, we developed the T21 Research Assistant, a section-aware RAG system that prioritizes Results sections to ground responses in primary experimental evidence. The system draws exclusively from 1,789 open-access Down syndrome publications from PubMed Central, including 327 NIH INCLUDE-funded studies, and uses a multistage pipeline for query validation, retrieval, reranking, synthesis, and citation verification. Built on NVIDIA Nemotron models, it generates structured, cited responses. Evaluation using expert-curated questions demonstrated strong performance, achieving a BERTScore F1 of 0.712 and recall of 0.758, comparable to or exceeding leading proprietary and open-source models. T21 Research Assistant is available at: https://bioinformatics.cuanschutz.edu/t21-res-assi/