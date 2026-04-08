---
title: A scalable genomic framework for programmable strain tagging in a diverse bacterial genus
title_zh: 用于多样化细菌属中可编程菌株标记的可扩展基因组框架
authors: "Mehmetoglu Boz, E., Barajas, H. R., Yu, T.-T., Thigulla, M., Nazir, N., Gervers, K. A., Hussain, S., Carot Hernandez, L., Lundberg, D. S."
date: 2026-04-06
pdf: "https://www.biorxiv.org/content/10.64898/2026.02.24.707161v3.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 用于可编程菌株标记和追踪的基因组框架
tldr: 本研究开发了一种可扩展的基因组框架，利用CRISPR相关转座系统在Sphingomonas属细菌中实现可编程菌株标记。研究确定并验证了新的中性插入位点，开发了tagIM seq技术快速筛选转座子插入位置，实现了对复杂群体中菌株的高效标记和追踪。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-02-24-707161-v3/fig-001.webp\", \"caption\": \"Figure 4. Tagged Sphingomonas colonization of plants\", \"page\": 11, \"index\": 1, \"width\": 938, \"height\": 457}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-02-24-707161-v3/fig-002.webp\", \"caption\": \"Figure 2. Tagging construct insertion locations\", \"page\": 7, \"index\": 2, \"width\": 957, \"height\": 709}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-02-24-707161-v3/fig-003.webp\", \"caption\": \"Figure 5. Safer integration loci for high-throughput tagging\", \"page\": 13, \"index\": 3, \"width\": 938, \"height\": 456}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-02-24-707161-v3/fig-004.webp\", \"caption\": \"Figure 3. Quantitative validation using DNA mixtures\", \"page\": 9, \"index\": 4, \"width\": 938, \"height\": 334}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-02-24-707161-v3/fig-005.webp\", \"caption\": \"Figure 1. Design and planning of mutation constructs\", \"page\": 5, \"index\": 5, \"width\": 938, \"height\": 435}]"
motivation: 现有转座系统缺乏可定向插入能力，限制了在多样细菌属中的可控菌株标记研究。
method: 利用CRISPR相关转座系统定向插入特征标签，并通过tagIM seq方法筛选正确标记的菌株。
result: 研究成功在Sphingomonas属细菌中实现了可编程的基因插入与菌株标记，并验证了新选定的中性位点的有效性。
conclusion: 该方法为研究细菌群体变异和建立高通量合成群落提供了有效工具。
---

## 摘要
转座子是将 DNA 插入细菌基因组的便利载体，但常用的转座子如 Tn7、Tn5 和 Mariner 无法实现定制靶点。近年来，CRISPR 相关转座子（CASTs）被开发为能够通过短引导序列将转座子定向插入至选定位点的工具。我们将该系统改编用于广泛分布的植物相关属 Sphingomonas，在多个不同位点上对遗传多样的菌株进行独特标记，并展示了这种标记在复杂细菌群落中进行定量菌株追踪的实用性。尽管我们最初选择了 Tn7 的整合保守位点作为温和的转座位置，但基因组学搜索显示在该位点的插入常会破坏基因，不仅在 Sphingomonas 中如此，在广泛研究的 Pseudomonas 中亦然。因此，我们鉴定了位于收敛终止基因之间的改进属级保守位点作为替代方案。我们在 Sphingomonas 中实验验证了一个改进的中性位点，并将该位点作为目标应用于一个异质、未表征的 Sphingomonas 群体。利用本文介绍的一种新型快速转座子定位方法 tagIM seq，我们筛查了所得转化菌落中的非靶向转座子插入，从而能够优先选择正确标记的新品株，加速了完全标记的合成群落的创建，以进行高通量细尺度细菌自然变异研究。

## Abstract
Transposons are a convenient vehicle for inserting DNA into a bacterial genome, but widely-used transposons such as Tn7, Tn5, and Mariner do not hit custom targets. Recently, CRISPR-associated transposons (CASTs) have been developed as tools to direct the insertion of a transposon to a chosen site with a short guide sequence. We adapted this system for use in the widespread plant-associated genus Sphingomonas, uniquely tagging genetically diverse strains in several different sites, and we demonstrate the utility of the tags for quantitative strain tracking in complex bacterial populations. Although we initially targeted the conserved site into which Tn7 integrates as a benign transposition location, a genomics search revealed insertions at this site would frequently disrupt genes not only in Sphingomonas but also in widely studied Pseudomonas. Therefore we identified improved genus-wide conserved sites between convergently terminating genes as alternatives. We experimentally validated an improved neutral site in Sphingomonas, and then targeted this site in a heterogeneous uncharacterized Sphingomonas population. Using a tagIM seq, a novel rapid transposon mapping method introduced here, we screened resulting transformant colonies for off-target transposon insertions. This enabled prioritization of correctly tagged novel strains, accelerating the creation of fully tagged synthetic communities for the high-throughput study of fine-scale bacterial natural variation.

---

## 论文详细总结（自动生成）

# 用于多样化细菌属中可编程菌株标记的可扩展基因组框架  
**作者：** Mehmetoğlu Boz, E. 等  
**来源：** bioRxiv, 2026-04-06  
**链接：** [https://www.biorxiv.org/content/10.64898/2026.02.24.707161v3.full.pdf](https://www.biorxiv.org/content/10.64898/2026.02.24.707161v3.full.pdf)

---

## 一、研究动机与核心问题

- **研究背景：**  
  在细菌生态学与群落研究中，准确追踪特定菌株在复杂环境中的动态变化是核心任务。传统的菌株区分依赖自然基因差异或表型特征，但当菌株间高度相似时（例如同属内多株近缘菌），此方法难以区分。  

- **问题所在：**  
  1. 常用转座系统（Tn7、Tn5、Mariner）插入位点随机或固定，**无法定制目标位点**。  
  2. 现有“标签化”手段（荧光蛋白、抗性标记、DNA条形码）受限于可选数量或会引入代谢负担。  
  3. 缺乏适用于**非模式细菌（如Sphingomonas 属）**的高通量、精确定点插入工具。

- **研究目标：**  
  作者旨在开发一种可**编程、稳健且可扩展**的基因组标记系统，能在多样细菌中实现定点插入和条形码标记，以支持对自然群落的多菌株定量追踪。

---

## 二、方法论与技术框架

### 1. 核心思想

- 基于 **CRISPR关联转座子（CAST, CRISPR-associated transposons）** 的定向插入原理，通过人工设计的 guide RNA，使转座元件在细菌染色体的预定位置插入特定DNA标签。

- 提出一种**最简构型“标签式转座子”**，整合抗性基因、随机条形码和16S rDNA通用扩增引物区以实现：
  - 可通过PCR或扩增测序统一检测。
  - 无荧光蛋白等额外代谢负担。

### 2. 关键技术构建

- **pSPIN-LL 向量系统：**
  - 融合VchCAST转座系统与自主设计的条形码构造。
  - 包含可移除的四环素抗性基因（flippase flt 位点环切）。
  - 含16S rDNA通用扩增区（V4区域），方便与常规16S测序兼容。

- **引导序列设计：**
  - 分析保守基因（glmS, crtI, rpoZ 等）上下游序列，确定属于属级保守、无功能干扰的“中性插入位点”。
  - 设计有容错性的 guide RNA 家族，实现跨菌株兼容性。

- **tagIMseq 技术创新：**
  - 提出“**Tagmentation Transposon Insertion site Mapping by Sequencing**”方法。
  - 结合Tn5酶切和PCR扩增，实现从单菌落或菌群内快速识别插入位置及条形码序列。
  - 相较传统全基因组测序更高效、更经济。

---

## 三、实验设计与场景设置

### 1. 系统验证对象
- **目标属：** *Sphingomonas*（广泛存在于植物叶面、土壤等生态位）。  
- **测试菌株：** 8株来自不同系统发育分支的株系。  
- 在 glmS 和 crtI 两个位点分别插入转座构建体，并检测插入精度与生理中性。

### 2. 验证步骤
- **分子水平验证：**
  - 通过长读长测序（Oxford Nanopore）精确定位插入点；
  - PCR验证去除供体质粒；
  - 通过差异性表型（如crtI突变导致色素缺失）确认功能性插入。

- **表型与适应性测试：**
  - 竞争实验：标记与野生型共培养于拟南芥叶片，比较生长竞争力，检测插入位点是否中性。

- **定量追踪实验：**
  - 构建5株合成群落（Mix5），单独和与自然群落（WaterCom）混合后接种植物；
  - 利用16S rDNA与标签并行扩增测序（含hamPCR方法）评估定量精度。

### 3. 新生策略与扩展
- 基于 138 个参考基因组与 250 株环境分离株的 pangenome 分析，评估潜在“安全插入区”。
- 在 *rpoZ* 基因下游发现较为保守且无功能干扰的新位点，并利用该位点进一步扩展标记到异质群体。

---

## 四、资源与算力

- 文中未涉及训练模型或GPU计算。  
- 分析主要依赖生物信息学工具（MASH、PPanGGOLiN、Bakta等）及常规高通量测序平台（Illumina MiSeq、PacBio HiFi、Oxford Nanopore）。  
- 计算资源由瑞典国家高性能计算平台（NAISS）提供，但未具体说明CPU/GPU数量。

---

## 五、实验数量与充分性

- **实验层次丰富：**
  1. **工程验证**：不同菌株中插入效率与位点精度检测；
  2. **表型与适应性测试**：glmS 与 rpoZ 位点插入的生长竞争实验；
  3. **定量验证**：人工 DNA 混合样本的线性/指数系列；
  4. **生态场景**：合成群落 + 自然群落共生体系的动态追踪；  
  5. **基因组级评估**：>380 个 Sphingomonas 与 Pseudomonas 基因组架构统计。

- **实验充分性与公平性：**
  - 具备跨菌株与跨环境的多层验证；
  - 对控制变量（如同位点比较、16S 校准因子）有清晰说明；
  - 存在合理的生物重复与统计分析（Kruskal–Wallis检验等）。

---

## 六、主要结论与发现

1. 成功实现基于 CRISPR 相关转座系统的多菌株、定点 DNA 标签插入；  
2. 发现传统 Tn7 插入位点（glmS 下游）在多地细菌属中并非中性，易影响下游基因；  
3. 鉴定并验证了更安全的中性插入位置（rpoZ 下游区）；  
4. 开发 tagIMseq 技术，实现从单菌落到群体的高速插入映射；  
5. 建立了标签量化校正体系，可与16S rDNA共扩增测序量化对照；  
6. 在复杂叶面群落中实现了多菌株共存量化追踪，无显著适应性偏差。

---

## 七、主要优点与创新

- 🔹 **技术创新性高：** 首次在 Sphingomonas 属实现 CAST 系统的可编程插入。  
- 🔹 **通用性与可扩展性：** guide RNA 的错配容忍度高，支持跨菌株应用。  
- 🔹 **生物中性设计：** 经系统比较选定基因间腺苷缺省区（rpoZ 3’UTR）等中性位点。  
- 🔹 **tagIMseq 快速筛查：** 无需DNA提取即可定位插入，显著提升效率。  
- 🔹 **测序兼容性好：** 标记设计包含16S引物区，可与常规微生物群落测序整合。  
- 🔹 **高通量潜力：** 适用于构建大规模“全标签合成群落”，助力功能基因与生态表现的关联分析。

---

## 八、不足与局限

- ⚠️ **系统适用范围：** 尽管在Sphingomonas中表现良好，但在其他属（如Pseudomonas）尚需重新选点验证。  
- ⚠️ **导向序列特异性与异常：** 存在约1/3的转座事件偏离目标位点，说明CAST系统在非模式菌中仍不够稳定。  
- ⚠️ **效率依赖菌种背景：** 某些菌株对转化和选择较不敏感，需要更多优化。  
- ⚠️ **生态验证仍有限：** 未涵盖土壤、根际等复杂环境，仅限叶面系统测试。  
- ⚠️ **转座效率改进空间：** 作者提到后续可借助λ-Red系统提升效率。  

---

**（完）**
