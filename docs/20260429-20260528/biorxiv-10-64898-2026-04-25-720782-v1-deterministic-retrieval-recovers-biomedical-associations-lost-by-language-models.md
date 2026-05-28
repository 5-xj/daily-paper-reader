---
title: Deterministic retrieval recovers biomedical associations lost by language models
title_zh: 确定性检索恢复语言模型丢失的生物医学关联
authors: "Halder, A., Singh, M., Kesarwani, R., Mathew, B., Bhattacharya, N., Chikhaliya, O., Motwani, D., Peela, S. C. M., Samanta, S., Muddemmanavar, P., Farooq, M., Ahuja, G., Sengupta, D."
date: 2026-04-29
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.25.720782v1.full.pdf"
tags: ["query:ad"]
score: 6.0
evidence: 基于大模型的确定性生物医学知识发现框架
tldr: 基于大语言模型的检索系统因输出截断、同义词不匹配和运行随机性而丢失生物医学关联，但损失程度未知。提出BioChirp开源框架，利用LLM进行查询解释和候选过滤，结合多源共识实体解析与确定性图检索。在四个主要生物医学数据库中，BioChirp恢复了更多关联且重现性显著高于传统LLM方法。该工作表明确定性检索能有效弥补LLM的内在缺陷，提升生物医学知识发现的可靠性和可重复性。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有LLM检索系统在生物医学关联检索中存在截断、同义词不匹配和随机变异问题，导致关联丢失且损失程度未知。
method: BioChirp框架利用LLM进行查询解释和候选过滤，结合多源共识实体解析与确定性图检索实现精准恢复。
result: 在四个主要生物医学数据库中，BioChirp比传统LLM检索恢复更多关联，且重现性显著更高。
conclusion: 确定性图检索方法能有效弥补LLM的不足，提升生物医学关联恢复的准确性和可重复性。
---

## 摘要
基于大型语言模型（LLM）的检索系统因输出截断、同义词不匹配以及运行间变异性而遗漏生物医学关联，但这一损失的程度尚不明确。我们提出BioChirp，这是一个开源框架，利用LLM进行查询解释和候选过滤，将多来源共识实体解析与基于确定性图谱的检索相结合。在四个主要生物医学数据库中，BioChirp比传统的基于LLM的检索方法恢复了更多且重现性更高的关联。

## Abstract
Large language model (LLM)-based retrieval systems miss biomedical associations through output truncation, synonym mismatch and run-to-run variability, but the magnitude of this loss remains unclear. We present BioChirp, an open-source framework that uses LLMs for query interpretation and candidate filtering, combining multi-source consensus entity resolution with deterministic graph-based retrieval. Across four major biomedical databases, BioChirp recovered more associations with higher reproducibility than conventional LLM-based retrieval approaches.