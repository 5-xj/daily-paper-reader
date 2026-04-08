---
title: A longitudinal data framework for context-specific genotype-to-phenotype mapping
title_zh: 用于特定情境下基因型-表型映射的纵向数据框架
authors: "Veith, T., Beck, R. J., Tagal, V., Li, T., Alahmari, S., Cole, J., Hannaby, D., Kyei, J., Yu, X., Maksin, K., Schultz, A., Lee, H., Diaz, A., Lupo, J., El Naqa, I., Eschrich, S. A., Ji, H., Andor, N."
date: 2026-04-08
pdf: "https://www.biorxiv.org/content/10.1101/2025.05.07.652202v3.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 基因型到表型映射框架
tldr: 本文提出了一个名为CLONEID的纵向数据框架，用于在时间轴上整合克隆解析的表型、分子及样本环境信息，从而支持特定情境下基因型与表型的关联解析。它通过事件、视角与身份的结构化连接，实现数据溯源与可复现导出，帮助研究者在长期实验（如胃癌细胞密度选择实验）中追踪并解释表型适应及其染色体基础。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-05-07-652202-v3/fig-001.webp\", \"caption\": \"Figure 1: Event-based architecture of CLONEID. (A) The same data model is used across clinical, in vivo and in vitro settings. Time-stamped Events capture specimen relationships, interventions and environmental context. (B) Longitudinal phenotype measurements anchor every event. (C) Assay-specific molecular readouts are represented as Perspectives, which preserve what was measured together with the upstream data required for provenance. (D) Multiple Perspectives are reconciled into an inferred Identity across assays and time. Together, this design enables integrated, queryable and reproducible retrieval of longitudinal genotype–phenotype records.\", \"page\": 2, \"index\": 1, \"width\": 1129, \"height\": 586}]"
motivation: 由于分子检测昂贵且稀疏，常无法与频繁的表型观测结合，本研究旨在建立一种能维持基因型-表型解释连贯性的 longitudinal 数据框架。
method: 研究设计了CLONEID框架，将事件、检测视角和统一身份通过结构化方式连接，支持溯源与数据导出。
result: 在胃癌实验中，CLONEID成功整合了培养事件、增长测定与核型分析，揭示了表型适应与染色体状态的动态关系。
conclusion: CLONEID框架实现了跨时间维度的基因型与表型整合，为长期实验的演化和适应性研究提供了系统支撑。
---

## 摘要
分子检测可以解析克隆结构，但其成本高昂且时间上通常稀疏；而表型观测（如成像）则可频繁采集，却常常缺乏后期解释所需的情境信息。我们提出了 CLONEID，这是一种事件驱动的框架，用于组织克隆分辨的表型、分子及样本情境记录，从而可以随时间保持基因型到表型的解释。CLONEID 通过结构化数据摄取、具有溯源意识的检索以及可复现的导出，将带有时间戳的事件、与检测相关的视角以及协调的身份信息关联起来，以补充上游克隆识别方法。在一个长期胃癌密度选择实验中，CLONEID 将重复的培养事件、生长测量以及后期核型分析在统一记录中关联起来，从而支持结合底层染色体状态的表型适应的纵向解释。

## Abstract
Molecular assays can resolve clonal structure, but they are expensive and typically sparse in time, whereas phenotypic observations such as imaging can be collected frequently but often are not preserved in the context needed for later interpretation. We present CLONEID, an event-based framework for organizing clone-resolved phenotypic, molecular, and specimen-context records so that genotype-to-phenotype interpretation can be maintained across time. CLONEID links time-stamped Events, assay-specific Perspectives, and reconciled Identities through structured ingestion, provenance-aware retrieval, and reproducible export, complementing upstream clone-calling methods. In a long-term gastric cancer density-selection experiment, CLONEID linked repeated culture events, growth measurements, and late karyotypic profiling within a shared record, supporting longitudinal interpretation of phenotypic adaptation together with underlying chromosomal state.

---

## 论文详细总结（自动生成）

# 用于特定情境下基因型-表型映射的纵向数据框架 — 中文深度总结

---

## 一、核心问题与整体含义

### 研究动机
- **背景问题**：癌症等复杂系统常包含多个共存克隆，这些克隆在分子状态与表型表现上均可随时间变化。现有方法多能解析克隆结构（如测序推断），但**缺乏纵向数据整合机制**，无法同时保留表型观测的时序环境与关联的分子特征。
- **研究痛点**：
  - 分子测定（如基因组/转录组检测）代价高昂且时间点稀疏；
  - 表型观测（如影像）虽频繁，但情境与溯源信息丢失，难以与基因型联系。
- **总体目标**：建立一个能够在时间维度上持续追踪克隆演化的框架，使**“基因型→表型”**的解释在跨实验、跨环境与跨测定条件下保持一致性与可复现性。

### 概念贡献
- 提出事件驱动的纵向数据整合框架 **CLONEID**；
- 该框架支持对癌症模型中克隆、表型及分子层的长期演化、依赖情境的适应过程进行结构化记录与溯源分析。

---

## 二、方法论

### 核心思想
CLONEID 以**事件 (Event)** 为中心，通过结构化方式将：
1. **事件 (Event)**：时间索引的发生记录（如培养、取样、干预等）；
2. **视角 (Perspective)**：检测结果对应的分子层读数（基因组、转录组、蛋白组、核型等）；
3. **身份 (Identity)**：将来自多个视角的克隆层记录整合为单一生物单位的推断对象；
4. **表型 (Phenotype)**：在系统保持整体性的状态下，直接观察到的行为与形态特征；

进行关联与整合，以实现**纵向、上下文依赖的基因型-表型追踪**。

### 技术框架
- **三层架构**：
  1. **Web门户层**：实现可视化、数据上传与导出；
  2. **逻辑层（Java实现）**：负责事件摄取、记录关联与身份整合；
  3. **数据库层（SQL）**：储存事件、表型及分子视角数据，并支持溯源查询。
- **数据关系模型**：
  - Event 作为核心时间节点，连接所有下游记录；
  - Perspective 存储分子检测结果及其来源；
  - Identity 通过关系表链接不同 Perspective；
  - Phenotype 记录事件对应的系统级状态与行为。
- **数据溯源与复现机制**：
  - 每个事件及视角均带有 provenance 元信息；
  - 支持上下文打包导出，可用于跨实验复现与分析重现。
- **实现工具**：
  - **Web portal**（dev.cloneid.org）：交互式访问和查询；
  - **R 包 cloneidR**：编程操作、可视化和数据注册。

---

## 三、实验设计

### 数据与场景
- **主要实验**：长期胃癌细胞密度选择实验（SNU-668细胞系）。
  - 包含两种培养模式：
    - **r-selection（低密度选择）**：强调快速生长；
    - **K-selection（高密度选择）**：强调容量适应。
  - 实验周期：超过 6 个月；
  - 每个条件 3 个生物学重复（共 6 条实验轨迹）。
- **记录内容**：
  - 每次培养、转移、取样均为一个 Event；
  - 图像数据（显微镜）、细胞计数、形态特征组成 Phenotype 层；
  - 后期的核型分析（Karyotyping）作为分子 Perspective；
  - 通过 Identity 连接两者，形成完整纵向记录。

### Benchmark 与比较
- 无传统意义上的基准对比算法；
- 验证侧重于展示 CLONEID 的整合与追踪能力：
  - 表型轨迹与染色体状态关联；
  - 不同适应路径（r vs. K）间的克隆演化差异；
- 附录还展示了：
  - 基于转录组快照对长期适应预测；
  - 基于多模态脑胶质瘤数据的定量适应性建模（ALFA-K）验证。

---

## 四、资源与算力

- 文中未提及具体硬件资源或算力信息。
- 图像分割与处理使用开源工具（如 **Cellpose**），且具备版本控制以保障复现性。
- 核型处理与 OCR 识别流程基于标准图像处理算法（未说明 GPU 或并行规模）。

**结论**：算力细节未公开，但框架设计与实现可在普通研究机构服务器环境下运行。

---

## 五、实验数量与充分性

- **主要实验模块**：
  1. 主体胃癌细胞密度选择实验（r/K 选择条件 × 3 重复）；
  2. 后期核型分子测定（121 个单细胞核型数据）；
  3. 附录中两个额外验证场景（转录组预测分析、胶质瘤患者纵向建模）。
- **数据量**：
  - 超过 6,400 个事件记录；
  - 17 条独立谱系；
  - 超过 30,000 张影像；
  - 来自约 100,000 个单细胞的分子档案。
- **充分性评估**：
  - 涉及跨时间、跨系统（临床、体内、体外）的完整演示；
  - 实验规模大且覆盖多模态数据，设计较充分；
  - 但尚未见大规模统计测试或与其他数据库框架的定量比较。

---

## 六、主要结论与发现

- CLONEID 能在时间维度上**保留表型与分子数据的上下文关系**；
- 在密度适应实验中：
  - r-选择条件下出现**四倍体化与染色体加倍**现象；
  - K-选择条件下出现**特定染色体丢失模式（如10与14号染色体）**；
  - 表型演化可被长期追踪并与核型状态匹配；
- 框架可扩展至临床和模型系统中，成为可溯源的多维数据研究基础。

---

## 七、优点与亮点

- **结构创新**：首次提出事件驱动、上下文保留的数据组织模型；
- **可复现性高**：每个数据层均记录溯源、版本与关联属性；
- **跨模态融合**：兼容影像、分子、时序等不同数据类型；
- **实践验证充分**：在真实长期实验中成功应用；
- **开放生态**：提供 web portal 与 R 包，支持数据共享与再分析。

---

## 八、不足与局限

- **缺乏性能量化**：未与其他系统（如传统数据库或 LIMS）做定量比较；
- **算力与复杂度未明确描述**：难以评估可扩展性；
- **生物学验证深度有限**：仅在单一细胞系与两种培养条件展示；
- **潜在偏差风险**：表型推断依赖影像质量与自动分割结果，存在算法差异敏感性；
- **应用限制**：临床数据的隐私保护与标准化尚未完整解决。

---

（完）
