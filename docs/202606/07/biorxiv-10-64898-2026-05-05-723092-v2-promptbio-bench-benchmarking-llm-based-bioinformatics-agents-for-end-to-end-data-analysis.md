---
title: "PromptBio-Bench: Benchmarking LLM-based Bioinformatics Agents for End-to-End Data Analysis"
title_zh: PromptBio-Bench：基于LLM的生物信息学智能体端到端数据分析的基准测试
authors: "Guo, W., Zhang, M., Han, B., Ma, Y., Leng, Y., Hebbar, S., Zhou, X., Gu, W., Yang, X., Dhar, S."
date: 2026-06-01
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.05.723092v2.full.pdf"
tags: ["query:ad"]
score: 6.0
evidence: 评估LLM代理在生物信息学数据分析中的表现，支持发现任务
tldr: 当前缺乏对基于大语言模型的生物信息学智能体在端到端数据分析中的系统性评估。为此提出PromptBio-Bench，包含244个专家精选任务和多难度级别，以及结构化文件比较与评分框架。评估三个前沿智能体发现Biomni与ToolsGenie性能相当，且所有智能体随任务难度增加准确率显著下降。该基准为智能体生物信息学进展提供了基础设施。
source: biorxiv
selection_source: fresh_fetch
motivation: 缺乏对大语言模型智能体在生物信息学自动化工作流中实际能力的系统评估。
method: 构建包含244个专家任务和文件比较评分框架的PromptBio-Bench基准套件。
result: Biomni与ToolsGenie表现相当，所有智能体准确率随任务难度增加而下降。
conclusion: PromptBio-Bench为追踪智能体生物信息学进展提供有价值的基准基础设施。
---

## 摘要
基于大语言模型（LLM）的智能体在自动化生物信息学工作流程方面具有变革潜力；然而，对其能力的系统性评估仍然有限，阻碍了对其实际应用准备程度的清晰评估。我们提出了PromptBio-Bench，一个包含244个由专家精心策划、涵盖不同难度级别的生物信息学和数据科学任务的综合评估套件，以及一个用于结构化文件比较和根据专家参考答案文件进行评分的评估框架。对三种最先进的生物信息学智能体的评估显示，Biomni和ToolsGenie的性能相当，而所有智能体的准确性随着任务难度的增加而显著下降。随着基础模型和智能体框架的不断发展，PromptBio-Bench为系统追踪智能体生物信息学领域的进展提供了宝贵的基准基础设施。

## Abstract
Large language model (LLM)-based agents hold transformative potential for automating bioinformatics workflows; however, systematic evaluations of their capabilities remain limited, hindering a clear assessment of their readiness for real-world application. We introduce PromptBio-Bench, a comprehensive evaluation suite of 244 expert-curated tasks spanning bioinformatics and data science at varied difficulty levels, and an evaluation framework for structured file comparison and scoring against expert reference answer files. Evaluation of three state-of-the-art bioinformatics agents revealed comparable performance between Biomni and ToolsGenie, with all agents showing a marked decline in accuracy as task difficulty increased. As foundation models and agent frameworks continue to evolve, PromptBio-Bench provides a valuable benchmark infrastructure for systematically tracking progress in agentic bioinformatics.