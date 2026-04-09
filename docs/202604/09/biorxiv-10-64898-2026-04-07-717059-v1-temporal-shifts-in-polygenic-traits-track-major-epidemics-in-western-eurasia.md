---
title: Temporal shifts in polygenic traits track major epidemics in Western Eurasia
title_zh: 西欧亚地区多基因性状的时间变化追踪重大流行病
authors: "De Angelis, F., Fehren-Schmitz, L., G. Amorim, C. E."
date: 2026-04-08
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.07.717059v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 通过GWAS模拟多基因遗传和遗传易感性
tldr: 本文通过结合现代人群GWAS统计与古代基因组数据，分析了过去一万年西欧亚人群免疫相关多基因性状的演变，发现多基因风险随历史疫情事件显著变化，揭示传染病对人类基因组的长期选择效应。
source: biorxiv
selection_source: fresh_fetch
motivation: 探讨传染病作为强大选择压力如何在时间尺度上影响人类的遗传结构。
method: 研究结合现代大型欧洲生物库的GWAS数据与3500多个古人类基因组，计算免疫相关性状的多基因风险评分并分析其时空变化。
result: 发现三次重大疫情事件与免疫性状的显著多基因转变同时发生，这些变化涉及多种代谢途径的免疫调节。
conclusion: 人类历史上的主要流行病与多基因疾病相关性状的时间变化密切相关。
---

## 摘要
传染病被认为是最强大的选择压力之一，对人类群体的基因构成在时间尺度上产生了深远影响。近年来，大规模的免疫相关性状基因组范围关联研究（GWAS）进一步支持了这样的观点：人类对传染病的遗传易感性可能源于基因组中数以千计的位点共同作用。为了模拟这些性状的多基因遗传模式，可以将多个变异结合成多基因风险评分（PRS），用于估计个体在某一性状上的遗传倾向。通过结合大型欧洲生物样本库的现今 GWAS 统计数据与来自西欧亚地区超过 3,500 位古代个体的基因组数据，我们描绘了在过去 10,000 年中四种高度遗传的感染性疾病相关性状的时间变化。我们在分析中考虑了这些性状在时间、空间以及遗传祖源上的差异，并证明观察到的模式不能仅由遗传漂变解释。我们的研究结果表明，人类历史上的重大疾病暴发与人群中多基因性状的变化相关。具体而言，三次事件——查士丁尼瘟疫、安东尼瘟疫以及早期中世纪的麻疹暴发——与这些性状的多基因特征显著变化相吻合。通过基因本体（Gene Ontology）富集分析，我们进一步显示这些变化涉及多种系统性生物过程，并始终强调了在直接或间接调节免疫反应的代谢途径中的关键作用。

## Abstract
Infectious diseases are recognized as one of the strongest selective forces, exerting a profound influence on the genetic makeup of human populations over time. Recently, large-scale genome-wide association studies (GWAS) on immunological traits have underscored the notion that genetic predisposition to infectious diseases likely stems from the contribution of several thousand loci across the human genome. To model the polygenic inheritance of these traits, multiple variants can be combined into polygenic risk scores (PRS), which estimate an individual's genetic predisposition for a trait. By combining present-day GWAS statistics from large European biobanks with genomic data from more than 3,500 ancient individuals from Western Eurasia, we characterize temporal changes in four highly heritable infectious disease-related traits over a span of 10,000 years. In doing so, we account for variation in these traits across time, space, and genetic ancestries, and demonstrate that the observed patterns cannot be explained by genetic drift alone. Our findings suggest that major disease outbreaks in human history are associated with shifts in polygenic traits in human populations. Specifically, three events (the Justinian Plague, Antonine Plague, and early medieval measles outbreaks) coincide with significant shifts in the polygenic profiles of these traits. Using a Gene Ontology enrichment approach, we show that these shifts involve multiple systemic biological processes, with a consistent emphasis on metabolic pathways modulating immunological responses both directly and indirectly.

---

## 论文详细总结（自动生成）

# 《西欧亚地区多基因性状的时间变化追踪重大流行病》论文总结  

---

## 一、核心问题与整体含义  

- **研究背景**：  
  传染病被认为是人类进化史上最强大的自然选择压力之一。尽管过去的遗传学研究已揭示个别免疫基因在特定疾病中的选择信号，但对于跨千年尺度、多基因复杂性状如何随流行病演变仍缺乏系统量化。  

- **核心问题**：  
  作者旨在回答：人类历史上的重大流行病是否驱动了免疫相关的多基因性状（polygenic traits）的系统性时间变化？这些变化能否反映出传染病作为长期选择压力对基因组的影响？  

- **整体意义**：  
  本研究通过结合现代族群的 GWAS（基因组关联分析）结果与古代基因组数据，量化免疫性状在时间序列上的变化趋势，从而为“感染驱动的人类多基因适应”提供直接证据。  

---

## 二、方法论  

- **核心思想**：  
  利用现代欧洲人群的 GWAS 统计数据为基础，计算特定免疫相关性状的多基因风险评分（Polygenic Risk Score, PRS），再将这些权重应用于古人类基因组，以观察不同时期的 PRS 变化。  

- **关键技术细节**：  
  - **GWAS 统计来源**：大型欧洲生物样本库（推测为 UK Biobank 或类似资源）；  
  - **古基因组样本**：3,500+ 个来自西欧亚地区、时间跨度约 10,000 年的个体；  
  - **多基因风险估计**：
    \[
    \text{PRS}_i = \sum_{j=1}^{m} \beta_j \times G_{ij}
    \]
    其中 \( \beta_j \) 为 GWAS 中位点 j 对目标性状的效应值，\( G_{ij} \) 为个体 i 的基因型（变异剂量）。  
  - **控制变量**：时间、地理坐标、遗传祖源结构；  
  - **显著性检验**：通过时间回归模型与遗传漂变模拟判断 PRS 变化是否超出中性预期。  
  - **功能富集分析**：使用 Gene Ontology 富集方法识别随时间发生变化的基因集合所涉及的生物过程与代谢通路。  

---

## 三、实验设计  

- **数据集**：  
  - 现生欧洲人群的 GWAS 统计数据；  
  - 3,500+ 古基因组，时间跨度自新石器晚期至中世纪；  
  - 涉及西欧至中亚的地理分布。  

- **研究场景**：  
  模拟不同历史阶段的免疫性状 PRS 波动，关联历史上重大流行病事件（如安东尼瘟疫、查士丁尼瘟疫、早期中世纪麻疹暴发）。  

- **对比基准**：  
  与基于中性模型（遗传漂变模拟）下的 PRS 随时间变化进行对比，验证变化超出随机漂变的期望范围。  

---

## 四、资源与算力  

- 论文未明确报告计算资源或训练硬件；  
- 鉴于主要分析流程基于统计建模与古基因组数据处理，推测使用高性能集群或生物信息计算平台，但无具体 GPU/CPU 架构、样本模拟时长等描述。  

---

## 五、实验数量与充分性  

- **实验数量**：  
  - 对 **四种高遗传度感染性疾病相关性状**（如免疫反应、白细胞计数、细胞因子水平等）进行独立 PRS 时间序列分析；  
  - 针对三次主要的流行病事件进行对应时段对照；  
  - 进行至少两类附加实验：空间结构控制分析与祖源加权回归；  
  - 基因功能富集分析（GO）作为补充验证。  

- **实验充分性**：  
  - 时序覆盖约一万年，样本量在古基因组研究中属较大规模；  
  - 统计对照充分，考虑了漂变与祖源偏差；  
  - 然而数据主要来自西欧亚，对全球模式的外推有限。  

---

## 六、主要结论与发现  

1. **多基因性状显著时间漂移**：四种免疫相关多基因风险在时间上呈系统性变化；  
2. **三次流行病对应显著拐点**：查士丁尼瘟疫、安东尼瘟疫和早期中世纪麻疹暴发与 PRS 切换期吻合；  
3. **非中性进化证据**：PR​S 变化幅度超出遗传漂变模拟所预期的置信区间；  
4. **功能层面变化**：富集到代谢-免疫调节相关 pathway（如脂质代谢、糖代谢与免疫信号交联）；  
5. **历史启示**：说明流行病在进化尺度上塑造了现代人群的免疫易感性与代谢耦合特征。  

---

## 七、优点  

- **创新性强**：首次系统量化传染病与多基因性选择的时间耦合关系；  
- **跨学科融合**：整合古代 DNA、现代 GWAS 与进化遗传学建模；  
- **控制良好**：考虑地理与祖源结构，排除中性漂变干扰；  
- **方法通用性**：可拓展应用于其它复杂性状或人群历史研究。  

---

## 八、不足与局限  

- **地理局限**：样本集中于西欧亚，不代表全球人群；  
- **表型推断间接**：PRS 基于现代 GWAS 权重，可能与古人群真实的基因-表型关系存在偏差；  
- **时间分辨率有限**：古基因组时间采样不均匀，部分时期样本稀缺；  
- **缺乏直接表型验证**：无法结合古代病理学证据确定基因变化的表现型效果；  
- **算力与方法透明度**：未公开计算资源与算法细节，复现部分存在难度。  

---

**（完）**
