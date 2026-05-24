---
title: "KGGen: Extracting Knowledge Graphs from Plain Text with Language Models"
title_zh: KGGen：利用语言模型从纯文本提取知识图谱
authors: "Belinda Mo, Kyssen Yu, Joshua Kazdan, Proud Mpala, Lisa Yu, Charilaos I. Kanatsoulis, Sanmi Koyejo"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=YyhRJXxbpi"
tags: ["query:ad"]
score: 4.0
evidence: 使用LLM从文本自动提取知识图谱，属于数据知识自动发现
tldr: 该论文针对知识图谱数据稀缺且自动提取质量低的问题，提出KGGen——一种利用语言模型从纯文本生成高质量知识图的新方法。核心创新是实体解析时通过聚类相关实体大大降低传统方法的稀疏性问题，使输出图谱更稠密、更完整。与现有提取器对比，KGGen在多个基准上取得了更高覆盖率和准确率，为从大规模文本中自动发现结构化知识提供了实用工具，对知识驱动的人工智能有重要价值。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-yyhrjxxbpi/fig-001.webp\", \"caption\": \"\", \"page\": 5, \"index\": 1, \"width\": 1911, \"height\": 1072}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-yyhrjxxbpi/fig-002.webp\", \"caption\": \"\", \"page\": 6, \"index\": 2, \"width\": 1795, \"height\": 795}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-yyhrjxxbpi/fig-003.webp\", \"caption\": \"\", \"page\": 7, \"index\": 3, \"width\": 1336, \"height\": 600}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-yyhrjxxbpi/fig-004.webp\", \"caption\": \"\", \"page\": 7, \"index\": 4, \"width\": 1958, \"height\": 1141}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-yyhrjxxbpi/fig-005.webp\", \"caption\": \"\", \"page\": 8, \"index\": 5, \"width\": 1800, \"height\": 639}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-yyhrjxxbpi/fig-006.webp\", \"caption\": \"\", \"page\": 9, \"index\": 6, \"width\": 488, \"height\": 360}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-yyhrjxxbpi/fig-007.webp\", \"caption\": \"\", \"page\": 9, \"index\": 7, \"width\": 834, \"height\": 660}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-yyhrjxxbpi/fig-008.webp\", \"caption\": \"\", \"page\": 9, \"index\": 8, \"width\": 1162, \"height\": 870}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-yyhrjxxbpi/fig-009.webp\", \"caption\": \"\", \"page\": 9, \"index\": 9, \"width\": 472, \"height\": 414}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-yyhrjxxbpi/fig-010.webp\", \"caption\": \"\", \"page\": 9, \"index\": 10, \"width\": 386, \"height\": 323}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-yyhrjxxbpi/fig-011.webp\", \"caption\": \"\", \"page\": 17, \"index\": 11, \"width\": 1736, \"height\": 1390}]"
motivation: 高质量知识图谱稀缺，现有自动提取方法存在实体稀疏和重复问题，限制了知识图谱的应用。
method: 提出KGGen框架，使用语言模型进行实体提取，并通过新型实体解析方案聚类相关实体以降低稀疏性，生成更稠密的知识图。
result: 在多个文本知识提取基准上，KGGen相比现有方法在覆盖率和准确性上均有显著提升。
conclusion: 该方法为自动知识发现提供了高效可扩展的图谱生成方案，有助于推动知识图谱在AI中的基础作用。
---

## Abstract
Recent interest in building foundation models for knowledge graphs has highlighted
a fundamental challenge: knowledge graph data is scarce. The best-known knowl-
edge graphs are primarily human-labeled, created by pattern-matching, or extracted
using early NLP techniques. While human-generated knowledge graphs are in
short supply, automatically extracted ones are of questionable quality. We present
KGGen, a novel text-to-knowledge-graph generator that uses language models to
extract high-quality graphs from plain text with a novel entity resolution approach
that clusters related entities, significantly reducing the sparsity problem that plagues
existing extractors. Unlike other KG generators, KGGen clusters and de-duplicates
related entities to reduce sparsity in extracted KGs. Along with KGGen, we release
Measure of Information in Nodes and Edges (MINE), the first benchmark to test an
extractor’s ability to produce a useful KG from plain text. We benchmark our new
tool against leading existing generators such as Microsoft’s GraphRAG; we achieve
comparable retrieval accuracy on the generated graphs and better information re-
tention. Moreover, our graphs exhibit more concise and generalizable entities and
relations. Our code is open-sourced at https://github.com/stair-lab/kg-gen/.

---

## 论文详细总结（自动生成）

# 论文详细总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：知识图谱（KG）数据严重稀缺且不完整。现有的人工标注 KG（如 Wikidata、DBpedia）规模有限，而自动提取方法（如 OpenIE、GraphRAG）提取的图谱存在严重的稀疏性问题——实体和关系类型过于特异、重复度高、缺乏泛化性，导致下游任务（如 KG 嵌入、图增强检索）性能受限。
- **研究动机**：解决自动 KG 提取中的稀疏性和重复性问题，生成高质量、稠密、可泛化的知识图谱，从而为知识图谱基础模型、图 RAG 等应用提供可靠数据源。
- **整体含义**：提出一种新型文本到知识图谱生成器 KGGen，利用语言模型结合创新的实体/边解析算法，显著提升图谱质量，并发布首个专门评估提取质量的基准 MINE，推动该领域发展。

## 2. 论文提出的方法论：核心思想、关键技术细节

### 核心思想
- 多阶段管线：**提取 → 聚合 → 解析**。通过聚类去重解决实体和关系的稀疏性问题，使图谱更稠密、关系类型更可重用。

### 关键技术细节
1. **实体与关系提取**：
   - 使用 LLM（Gemini 2.0 Flash）通过 DSPy 签名分两阶段提取：先提取实体列表，再基于实体列表提取 (subject, predicate, object) 三元组。
   - 强调忠实于原文，避免过度合并。

2. **聚合**：
   - 将所有源文本的三元组合并为一个整体图，实体和关系统一小写化，不使用 LLM。

3. **实体与边解析（核心创新）**：
   - 采用**两步解析**：先基于 S-BERT 嵌入进行 K-means 聚类（每簇128项），再对每个簇内项使用 BM25+语义嵌入融合检索 top-16 相似项，由 LLM 判断是否重复并选择规范代表。
   - 迭代进行，直到簇内所有项被处理，生成别名映射（类似 Wikidata 的 aliases）。
   - 有效合并同义实体（如 "Olympic Winter Games" 与 "Winter Olympics"），减少冗余。

## 3. 实验设计：数据集、基准、对比方法

### 使用的数据集/场景
- **MINE-1**：自建基准，100篇短文（平均592词），每篇15个事实，覆盖艺术、科学、技术、心理、历史等5类。评估信息保留率。
- **MINE-2**：基于 WikiQA 数据集（20,400个问题，1,995篇维基文章），评估图辅助的检索增强生成（RAG）性能。
- **SemEval-2010 Task 8**：100个人工标注的句子，评估实体提取准确率。
- **扩展实验**：使用小说《风之名》（100万字符）测试扩展性与效率。

### 对比方法
- **OpenIE**（Stanford CoreNLP 实现）
- **GraphRAG**（微软，2024）

### 基准（MINE）
- MINE-1：事实可恢复率（通过语义检索+LLM判断是否可从子图中推理出事实）。
- MINE-2：RAG 问答准确率（检索 top-10 三元组 + 两跳扩展，LLM生成答案，LLM-as-a-Judge 评估）。

## 4. 资源与算力

- **文中未明确说明 GPU 型号、数量或训练时长**。但提到实验使用 LLM API（Gemini 2.0 Flash、Claude Sonnet 3.5、GPT-4o），无需本地 GPU 训练。对于1M字符的语料，KGGen 总处理时间551秒，成本约0.84美元（基于API）。
- 相比之下，GraphRAG 在相同语料上提取阶段耗时2319秒，且超线性扩展。
- **结论**：实验主要依赖 API 调用，未涉及大规模 GPU 训练。

## 5. 实验数量与充分性

- **实验数量**：
  - MINE-1：100篇文章，每篇15个事实，共1500次评估。
  - MINE-2：WikiQA 完整数据集（约2万问题）。
  - SemEval-2010：100个句子。
  - 扩展实验：4种语料规模（100字符至100万字符）的缩放分析。
  - 消融：不同 LLM 后端对比（Claude Sonnet 3.5、GPT-4o、Gemini 2.0 Flash）。
  - 定性分析：100个三元组人工验证有效性。
- **充分性评估**：
  - 实验覆盖了短文本、大规模文本、人工标注数据、不同领域，对比方法全面（OpenIE, GraphRAG）。
  - 统计显著性：MINE-1 给出了分布图及均值，MINE-2 比较柱状图，但未提供误差条或置信区间。
  - 公平性：对比方法使用默认参数或官方推荐设置，但未进行超参数调优（可能略偏利于 KGGen）。
  - 消融实验较充分（不同LLM、不同规模），但对解析步骤的单独消融（有无解析）未明确报告。

## 6. 论文的主要结论与发现

1. **KGGen 在 MINE-1 上显著优于现有方法**：平均得分66.07%，高于 GraphRAG（47.80%）和 OpenIE（29.84%）。
2. **MINE-2 上 KGGen 与 GraphRAG 性能相当**，但 KGGen 的图谱更稠密、关系更可重用。
3. **实体/边解析有效**：在1M字符语料中，实体减少22.4%，边减少23%，且关系类型复用频率随规模增加（平均每种关系出现10次），而 GraphRAG 始终只有约2次。
4. **成本效率高**：处理完整小说仅需0.84美元、551秒，远低于 GraphRAG（成本更高，时间更长）。
5. **跨模型鲁棒性**：KGGen 在 Claude、GPT-4o、Gemini 上均表现良好（最高73%）。
6. **人标验证**：实体提取准确率96%（SemEval-2010），提取的三元组98%有效（对比 GraphRAG 0%、OpenIE 55%）。

## 7. 优点

- **方法论创新**：首次将实体解析与图稀疏性缓解结合，通过迭代聚类+LLM判重，有效解决自动KG提取的核心痛点。
- **实用性强**：开源、成本低、速度快，社区已广泛采用（700+ GitHub stars, 12k+ 下载）。
- **评估体系完善**：提出 MINE 基准，包含信息保留和 RAG 两个任务，弥补了该领域缺乏标准评估的空白。
- **实验全面**：覆盖多个数据集、多种规模、多模型后端、人工验证，结论稳健。
- **透明可复现**：开源代码、详细提示词附录，支持复现。

## 8. 不足与局限

- **过度/不足去重风险**：论文承认实体解析可能误合并或漏合并，影响图谱准确性。
- **基准规模有限**：MINE 最大语料约5M tokens，未达到网络级规模（如 Wikipedia 全文），对 web-scale 提取的泛化能力评估不足。
- **领域知识局限**：通用 LLM 在医学、金融等专业领域可能缺乏足够知识，提取质量低于人类专家。
- **未提供统计显著性检验**：MINE-1 仅有均值，无置信区间或 p 值，可能影响结论强度。
- **缺少对解析步骤的独立消融**：未明确量化“有/无解析”对最终性能的提升幅度。
- **对比方法可能未调优**：OpenIE 和 GraphRAG 均使用默认配置，可能未达到其最佳性能，对比公平性有一定瑕疵。
- **使用 LLM-as-a-Judge 存在偏差风险**：虽验证了90.2%一致性，但小样本验证可能不足以覆盖所有情况。

（完）
