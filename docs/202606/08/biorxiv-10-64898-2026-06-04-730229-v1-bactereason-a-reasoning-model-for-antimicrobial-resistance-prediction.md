---
title: "BacteReason: A Reasoning Model for Antimicrobial Resistance Prediction"
title_zh: BacteReason：用于抗菌药物耐药性预测的推理模型
authors: "Oikawa, Y., Kawashima, S., Kinjo, A. R., Demizu, Y., Tamura, R., Tsuda, K."
date: 2026-06-07
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.04.730229v1.full.pdf"
tags: ["query:ad"]
score: 6.0
evidence: 使用大语言模型预测抗菌素耐药性并提供机制解释
tldr: "抗菌素耐药性（AMR）的全球传播对临床决策构成压力，现有机器学习预测缺乏机理可信度。提出BacteReason，一个推理大语言模型，通过微调开源LLM，利用教师模型从生物医学知识图谱数据库检索证据生成机理理由。在外推基准上，相对未调基线准确率提升43%，相对无理由微调提升38%。表明推理监督与知识图谱证据结合能提高预测准确性和可解释性。"
source: biorxiv
selection_source: fresh_fetch
motivation: 现有AMR预测缺乏机理解释，限制了临床可信度，需要能提供理性依据的预测模型。
method: 通过TogoMCP接口使用专有教师LLM从知识图谱检索证据生成机理理由，微调开源LLM预测抗生素敏感性并提供理性。
result: "在外推基准上，BacteReason相对未调基线准确率提升43%，相对无理由微调提升38%。"
conclusion: 推理监督与知识图谱证据结合显著提升AMR预测的准确性和可解释性。
---

## 摘要
抗菌药物耐药性（AMR）的全球快速蔓延给临床决策带来了前所未有的压力。目前已存在基于机器学习的抗生素敏感性预测器，但其缺乏机制基础限制了可信度。我们提出BacteReason，一种推理型大语言模型（LLM），能够预测细菌对目标抗生素的敏感性，并提供机制性解释。BacteReason通过在临床敏感性数据上微调一个开放权重的LLM而获得，该数据附带了解释分子机制的理由。这些理由由专有的教师LLM生成，该模型被提示解释已知的敏感性结果。教师模型通过TogoMCP与一组生物医学知识图谱数据库连接，将每个推理步骤锚定在检索到的证据上。在外推基准测试中，BacteReason相比未调整的基线实现了43%的相对改进，相比在相同基础LLM上微调但未包含理由的模型实现了38%的相对改进，表明推理监督提高了预测准确性。

## Abstract
The rapid global spread of antimicrobial resistance (AMR) has placed unprecedented pressure on clinical decision-making. Machine learning predictors of antibiotic susceptibility exist, but their lack of mechanistic grounding limits credibility. We present BacteReason, a reasoning large language model (LLM) that predicts bacterial susceptibility to a target antibiotic, together with a mechanistic rationale. BacteReason is obtained by fine-tuning an open-weight LLM on clinical susceptibility data augmented with rationales that explain the molecular mechanisms. These rationales are produced by a proprietary teacher LLM prompted to explain known susceptibility outcomes. The teacher is interfaced via TogoMCP with a collection of biomedical knowledge-graph databases, grounding each reasoning step in retrieved evidence. On an extrapolation benchmark, BacteReason achieves a relative improvement of 43% over the untuned baseline and 38% over the same base LLM fine-tuned without rationales, demonstrating that reasoning supervision improves prediction accuracy.