---
title: "Correlate: A Web Application for Analyzing Gene Sets and Exploring Gene Dependencies Using CRISPR Screen Data"
title_zh: Correlate：一款用于利用 CRISPR 筛选数据分析基因集合并探索基因依赖关系的网络应用
authors: "Deolankar, S., Wermeling, F."
date: 2026-04-04
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.02.716070v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 利用CRISPR筛选数据分析基因集并探索基因依赖性
tldr: 本研究开发了Correlate，一个基于CRISPR筛选数据的网页应用，可直接分析癌症细胞系中基因的功能关联与依赖。工具支持用户定义基因集的相关性分析、特定背景下的基因探索，并辅助实验设计，对知识库工具如STRING与GSEA形成数据驱动的补充。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-716070-v1/fig-001.webp\", \"caption\": \"Figure 2. Hypothesis generation in Correlate. (A) Design mode network for BRAF with skin cancer/melanoma/BRAF-mutated filters (n=50 cell lines), with node colors reflecting gene effect scores (“Color by GE” mode). (B) Same network with the “Show all correlations” option enabled, revealing functional relationships among the correlated genes. (C) BRAF vs MAPK1 scatter plot with BRAF hotspot mutation stratification. (D) Mutation analysis table showing differential gene dependencies between BRAF wild-type and BRAF-mutated skin cancer cell lines. (E) DUSP4 gene effect stratified by 0, 1, or 2 BRAF hotspot mutations in melanoma. (F) SHOC2 gene effect stratified by 0, 1, or 2 BRAF hotspot mutations in melanoma. A-C and E-F are directly exported from the app as SVG files. D is based on an exported .csv file.\", \"page\": 10, \"index\": 1, \"width\": 998, \"height\": 836}]"
motivation: 研究者需要一种无需安装、可交互的工具来直接基于CRISPR筛选数据分析基因功能与依赖关系。
method: 该应用基于Cancer Dependency Map的CRISPR筛选数据，通过网页端实现基因效应、突变与融合信息的相关性分析。
result: Correlate能够识别基因间的功能关联，探索癌症类型或突变背景下的基因依赖，并辅助实验设计。
conclusion: Correlate为基于功能基因组学数据的关系挖掘与假设生成提供了直观高效的平台。
---

## 摘要
CRISPR 筛选数据为理解基因功能和识别潜在药物靶点提供了宝贵的资源。在此，我们介绍 Correlate，这是一款可自由访问的网络应用（https://correlate.cmm.se），可用于探索 Cancer Dependency Map（DepMap）中的 CRISPR 筛选基因效应、热点突变以及易位/融合数据，涵盖超过 1,000 种人类癌细胞系。该应用支持两种主要使用场景：（i）分析用户定义的基因集合（例如 CRISPR 筛选的命中基因），通过相关性识别功能上相关的基因，并基于基因必需性或用户提供的筛选统计信息提供概览；（ii）在特定生物学背景下（如特定癌症类型或突变背景）探索感兴趣的基因，从而生成有关基因功能与依赖性的假设。此外，Correlate 通过提供基因必需性的快速概览并帮助识别具有相关突变特征的细胞系来支持实验设计。与依赖于先验生物学注释和人工整理的交互网络的知识驱动工具（如 STRING 和 GSEA）不同，Correlate 直接从功能性 CRISPR 筛选读数中识别基因连接，为基因网络分析提供一种互补且数据驱动的视角。该应用完全在浏览器中运行，无需安装或登录，并可与 Green Listed v2.0 工具系列集成，用于定制 CRISPR 筛选设计。

亮点{blacksquare} 交互式网络平台，用于基于 DepMap CRISPR 筛选数据对用户定义的基因集合进行批量相关性分析，无需安装或编程技能。
{blacksquare} 从 CRISPR 筛选读数而非人工整理的注释中识别功能性基因关系，为 GSEA 和 STRING 等工具提供数据驱动的补充。
{blacksquare} 支持在不同癌症类型和突变背景下进行基因依赖关系的情境化探索，有助于生成关于基因功能和治疗靶点的假设。
{blacksquare} 通过基因必需性概览、突变与融合分析以及细胞系识别支持实验设计，并可选集成用户提供的来自 CRISPR 筛选、蛋白质组学或转录组学分析的统计数据。

## Abstract
CRISPR screen data provides a valuable resource for understanding gene function and identifying potential drug targets. Here, we present Correlate, a freely accessible web application (https://correlate.cmm.se) that enables exploration of the Cancer Dependency Map (DepMap) CRISPR screen gene effects, hotspot mutations, and translocation/fusion data across more than 1,000 human cancer cell lines. The application supports two main use cases: (i) analysis of user-defined gene sets (e.g. CRISPR screen hits) to identify functionally linked genes based on correlations while providing an overview based on essentiality or user-provided screen statistics; and (ii) exploration of genes of interest in defined biological contexts, such as specific cancer types or mutational backgrounds, to generate hypotheses about gene function and dependencies. Additionally, Correlate supports experimental design by providing rapid overviews of gene essentiality and enabling the identification of cell lines with relevant mutational profiles. In contrast to knowledge-based approaches such as STRING and GSEA, which rely on prior biological annotations and curated interaction networks, Correlate identifies gene connections directly from functional CRISPR screen readouts, offering a complementary and data-driven perspective on gene network analysis. The application runs entirely in the browser, requires no installation or login, and integrates with the Green Listed v2.0 tool family for custom CRISPR screen design.

HIGHLIGHTS{blacksquare} Interactive web-based platform for bulk correlation analysis of user-defined gene sets using DepMap CRISPR screen data, requiring no installation or programming expertise.
{blacksquare}Identifies functional gene relationships from CRISPR screen readouts rather than curated annotations, offering a data-driven complement to tools such as GSEA and STRING.
{blacksquare}Enables contextual exploration of gene dependencies across cancer types and mutational backgrounds, supporting hypothesis generation about gene function and therapeutic targets.
{blacksquare}Supports experimental design through gene essentiality overviews, mutation and fusion analysis, and cell line identification, with optional integration of user-provided statistics from CRISPR screens, proteomics, or transcriptomics analyses.

---

## 论文详细总结（自动生成）

# 《Correlate：一款用于利用 CRISPR 筛选数据分析基因集合并探索基因依赖关系的网络应用》总结

---

## 一、核心问题与研究动机

- **研究背景**：  
  在癌症功能基因组学研究中，**CRISPR 筛选数据**提供了关于基因功能、细胞生存依赖和潜在药物靶点的重要信息。虽然已有的知识库工具（如 STRING、GSEA）可以基于已知的注释关系探讨基因网络，但它们依赖人工整理或预定义关联，**缺乏从原始实验数据直接揭示功能关系的能力**。

- **核心问题**：  
  如何在无需安装复杂程序、无需编程经验的前提下，让研究者能够**直接、交互式地利用 CRISPR 筛选数据挖掘基因功能依赖关系**，并生成新的生物学假设？

- **研究目标**：  
  本文旨在开发一款**基于网页的交互式工具——Correlate**，通过利用 DepMap（Cancer Dependency Map）的公共 CRISPR 筛选数据，实现以下目标：
  1. 批量分析用户自定义的基因集合之间的功能相关性。  
  2. 在特定癌症类型或突变背景下探索单个基因的依赖特征。  
  3. 辅助科研人员进行假设生成与实验设计。

---

## 二、方法论与实现思路

- **总体框架**：  
  Correlate 是一个**完全基于浏览器运行的交互式应用**，可以在无需安装和登录的情况下直接分析 DepMap 数据。其主要数据来源为：
  - DepMap CRISPR 筛选的基因效应得分（gene effect scores）；  
  - 热点突变数据；  
  - 基因融合/易位数据。

- **核心思想**：  
  通过统计基因效应得分间的**相关性分析（correlation analysis）**，识别功能相互关联的基因对。同时，结合突变背景（如 BRAF 突变状态）和癌症类型进行数据分层，从而揭示依赖性差异。

- **关键功能模块**：
  1. **基因集合分析模式（Set Analysis）**：  
     用户输入基因列表（例如来源于实验筛选的命中基因），系统计算基因效应相关矩阵，展示网络图；节点颜色和边宽反映基因效应值与相关强度。  
  2. **单基因探索模式（Gene Exploration）**：  
     选择单个基因，在指定癌症类型或突变背景下展示其依赖分布、散点图及分层分析结果。  
  3. **突变及融合整合**：  
     可过滤特定突变（如 BRAF hotspot），分析其如何影响相关基因的依赖性差异。  
  4. **结果导出**：  
     用户可导出分析图表（SVG）、数据表格（CSV）用于后续统计或绘图。  

- **算法流程简述**：  
  1. 从 DepMap 数据集中加载指定细胞系的基因效应矩阵。  
  2. 对用户提供或选择的基因集计算 Pearson 或 Spearman 相关系数。  
  3. 生成基因网络图与分布图。  
  4. 对不同背景（突变类型、癌症类型）进行分层统计与可视化。  
  （论文未提供明确公式，但整体为统计相关性筛选及多维可视化分析。）

- **技术实现**：  
  使用 Web 前端技术实现交互界面，并可与 Green Listed v2.0 集成，用于定制化 CRISPR 筛选设计。

---

## 三、实验设计与验证方式

- **数据集**：
  - 主体数据来源于 **DepMap（Cancer Dependency Map）**，包含 >1000 种人类癌细胞系。
  - 使用 CRISPR 基因效应、突变热点、基因融合三类信息。

- **分析场景举例**（来自图 2 描述）：
  - 选取 **BRAF** 基因为示例，在皮肤癌/黑色素瘤背景中过滤细胞系（n=50）。
  - 计算与 BRAF 相关的功能基因（如 MAPK1、DUSP4、SHOC2）之间的效应关联。
  - 分析突变背景下的差异依赖性，支持基因功能假设生成。

- **对比方式**：  
  虽然本文不是算法性能竞赛性质的研究，但在方法定位上，**与传统注释型工具（STRING、GSEA）进行了功能层面对比**，展示 Correlate 的“数据驱动”优势，即无需生物学先验知识即可构建基因网络。

- **benchmark**：  
  未设置特定的定量 benchmark，而是通过典型案例（如 BRAF 网络）展示可解释性与实用场景。

---

## 四、资源与算力

- 文中未提及任何服务器算力、GPU 规模或运行性能指标；  
  由于该应用完全基于浏览器运行，推测计算主要通过**网页端与后台 API 的轻量矩阵运算**实现，并未依赖高性能计算资源。

---

## 五、实验数量与充分性

- **实验展示类型**：
  - 以数个案例（如 BRAF、MAPK 信号通路）展示工具功能；
  - 多种模型情境（突变背景、癌症类型）。
- **实验充分性**：  
  实验更多为**功能演示与可视化展示**，未进行统计学意义上的重复实验或大规模测试，因此偏向于“工具开发型验证”而非“模型性能型验证”。
- **公平性与客观性**：
  数据来源客观（DepMap 公共数据库），但未显示跨数据库验证或数据噪声控制分析。

---

## 六、主要结论与发现

- Correlate 实现了一个**可自由访问、交互性强的数据驱动平台**，能从 CRISPR 筛选数据中直观揭示基因间依赖与功能联系；
- 能够根据**癌症类型或突变背景**探索差异性基因依赖；
- 支持研究者快速生成基因功能假设及潜在药物靶点线索；
- 与 STRING、GSEA 等注释驱动方法互补，为基因网络分析提供新的视角；
- 工具支持与 Green Listed v2.0 联用，实现实验设计层面的闭环支持。

---

## 七、优点与亮点

- **数据驱动**：完全基于 CRISPR 筛选读数计算，无需先验注释；
- **零门槛使用**：浏览器端运行，适合非编程背景的生物学家；
- **交互可视化强**：网络图、相关矩阵、突变分层分析均可一键生成；
- **模块丰富**：包括基因集合分析、单基因探索、突变依赖比较、导出接口；
- **整合性高**：与 CRISPR 实验设计工具（Green Listed）联动，形成从计算到验证的应用链。

---

## 八、不足与局限

- **实验验证有限**：缺乏外部数据集的定量评估或实验证据支撑；
- **依赖单一数据源（DepMap）**：若数据更新或存在噪声，将影响结果稳定性；
- **缺乏统计显著性控制**：未明确描述相关阈值、假阳性校正方法；
- **功能上偏向探索与假设生成**，尚未提供自动靶点优先级排序或机制推断；
- **算力和性能评估缺失**：未说明在大规模基因集计算下的响应速度与可扩展性。

---

**（完）**
