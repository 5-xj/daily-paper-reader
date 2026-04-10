---
title: Temporal shifts in polygenic traits track major epidemics in Western Eurasia
title_zh: 多基因性状的时间变化追踪西欧亚地区的主要疫情
authors: "De Angelis, F., Fehren-Schmitz, L., G. Amorim, C. E."
date: 2026-04-08
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.07.717059v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 利用GWAS研究多基因性状和遗传易感性
tldr: 本研究通过整合现代与古代基因数据，利用多基因风险评分追踪西欧亚人群一万年来的免疫相关性状变化，发现这些多基因性状的时间变化与多次重大瘟疫事件相对应，表明传染病对人类基因组的演化产生了深远影响。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-717059-v1/fig-001.webp\", \"caption\": \"\", \"page\": 66, \"index\": 1, \"width\": 10000, \"height\": 16000}]"
motivation: 本研究旨在探究传染病对人类遗传结构的长期选择压力及其在西欧亚人群中的演化影响。
method: 研究结合现代欧洲大型生物样本库的GWAS统计数据与3500多例古人类基因组数据，利用多基因风险评分（PRS）分析过去一万年中免疫相关性状的时间动态。
result: 结果显示，抗病多基因性状在历史上呈显著时间变化，三次重大瘟疫（查士丁尼瘟疫、安东尼瘟疫和中世纪早期麻疹）与遗传性状转变密切相关。
conclusion: 研究指出历史瘟疫事件驱动了免疫相关多基因性状的演化调整，反映人类基因组对疾病选择压力的动态响应。
---

## 摘要
传染病被认为是最强大的选择压力之一，对人类群体的遗传构成在时间尺度上产生了深远影响。近年来，大规模免疫学性状的全基因组关联研究（GWAS）强调了这样一种观点：对传染病的遗传易感性可能源于人类基因组中数千个位点的共同作用。为了建模这些性状的多基因遗传结构，可以将多个变异组合为多基因风险评分（PRS），用于估计个体对某一性状的遗传易感性。通过将来自大型欧洲生物银行的当代 GWAS 统计数据与超过 3,500 名西欧亚古代个体的基因组数据相结合，我们描绘了与传染病高度可遗性相关的四种性状在过去 10,000 年中的时间变化。在此过程中，我们考虑了这些性状随时间、空间及遗传祖源的变异，并证明观察到的模式不能仅由遗传漂变解释。我们的研究结果表明，人类历史上的重大疾病爆发与人群多基因性状的变化相关。具体而言，三次事件——查士丁尼瘟疫、安东宁瘟疫以及早期中世纪麻疹暴发——与这些性状在多基因轮廓上的显著转变相吻合。通过基因本体富集分析，我们展示了这些变化涉及多个系统性生物过程，并持续强调代谢通路在直接和间接调控免疫反应中的作用。

## Abstract
Infectious diseases are recognized as one of the strongest selective forces, exerting a profound influence on the genetic makeup of human populations over time. Recently, large-scale genome-wide association studies (GWAS) on immunological traits have underscored the notion that genetic predisposition to infectious diseases likely stems from the contribution of several thousand loci across the human genome. To model the polygenic inheritance of these traits, multiple variants can be combined into polygenic risk scores (PRS), which estimate an individual's genetic predisposition for a trait. By combining present-day GWAS statistics from large European biobanks with genomic data from more than 3,500 ancient individuals from Western Eurasia, we characterize temporal changes in four highly heritable infectious disease-related traits over a span of 10,000 years. In doing so, we account for variation in these traits across time, space, and genetic ancestries, and demonstrate that the observed patterns cannot be explained by genetic drift alone. Our findings suggest that major disease outbreaks in human history are associated with shifts in polygenic traits in human populations. Specifically, three events (the Justinian Plague, Antonine Plague, and early medieval measles outbreaks) coincide with significant shifts in the polygenic profiles of these traits. Using a Gene Ontology enrichment approach, we show that these shifts involve multiple systemic biological processes, with a consistent emphasis on metabolic pathways modulating immunological responses both directly and indirectly.

---

## 论文详细总结（自动生成）

# 《多基因性状的时间变化追踪西欧亚地区的主要疫情》论文中文总结

---

## 一、核心问题与研究背景

- **研究动机**：  
  传染病长期被认为是人类进化史上最强的自然选择压力之一。感染性疾病不仅短期影响人口生存率，还会在遗传层面塑造群体基因结构。  
- **核心问题**：  
  作者关注的是——人类基因组中与免疫相关的“多基因性状”（polygenic traits）是否随历史疫情事件而发生系统性变化。  
- **总体目标**：  
  通过整合古人类基因组和现代 GWAS 数据，描绘过去 10,000 年西欧亚人群中多基因风险分布的动态演化，检验主要疫情是否对人类遗传易感性产生可检测的遗传信号。

---

## 二、方法论与技术路线

- **核心思想**：  
  将现代大型 GWAS（全基因组关联研究）所揭示的免疫相关性状的多基因位点效应，应用于古代个体的基因组数据上，计算每个古代样本的多基因风险评分（Polygenic Risk Score, PRS），并分析其随时间的变化趋势。  
- **主要技术流程**：
  1. **GWAS 结果整合**：选取来自欧洲大型生物样本库的 4 种高遗传力免疫相关性状的 GWAS 汇总统计数据。  
  2. **古代样本处理**：从公开数据库与研究采样获得约 3,500 个西欧亚地区、跨越新石器时代至中世纪的古人类基因组。  
  3. **PRS 计算**：根据 GWAS 数据中的 SNP 效应量，对每个古代样本的对应位点进行加权求和，获得多基因风险评分。  
  4. **时间序列建模**：将 PRS 按时间分段，利用线性与非线性回归方法探测时间趋势，并引入地理与祖源变量进行多变量控制。  
  5. **验证与归因分析**：利用模拟与遗传漂变模型对照，排除随机遗传波动解释；再结合基因本体（Gene Ontology, GO）富集分析，解析潜在的生物学通路变化。  

---

## 三、实验设计

- **数据集**：
  - **现代数据**：欧洲大型生物银行的 GWAS 统计结果，用于计算各性状的遗传权重。  
  - **古代数据**：涵盖过去 10,000 年、覆盖西欧亚地区的 3,500+ 个古人类基因组（覆盖新石器时代、青铜时代、铁器时代至中世纪）。  
- **分析场景**：
  - 时间维度：按公元前至中世纪分段分析多基因风险变动。  
  - 空间维度：对古代欧洲不同地理区间（地中海、东欧、西欧等）的 PRS 进行比较。  
- **Benchmark 与比较对象**：
  - 与基于遗传漂变的随机模型对比，用以验证趋势的非随机性。  
  - 未进行与其他研究团队的直接方法比较，而是以统计显著性与信号稳定性作为内在评估。
  
---

## 四、资源与算力

- 文中**未明确提及硬件或算力配置**。  
- 由于主要基于统计重分析和 PRS 计算，预计使用常规 CPU 集群或生物信息分析平台即可完成，无大规模深度学习训练需求。

---

## 五、实验数量与充分性

- **实验维度**：
  - 时间趋势分析：4 个主要免疫性状的时间序列回归；
  - 空间/祖源校正测试：在地理与遗传成分控制下的统计重估；
  - 模拟对照实验：基于遗传漂变模拟的负对照；
  - GO 富集分析：探查相关生物学通路。  
- **充分性评估**：
  - 实验量在古基因组研究领域属于较大规模；
  - 控制变量（空间、祖源）和统计对照较为充分；
  - 但由于古代样本的时间与地理分布存在不均匀性，结果仍可能受到样本偏差影响。

---

## 六、主要结论与发现

1. 西欧亚地区的免疫相关多基因性状在过去一万年中呈显著时间变化趋势；
2. 这些变化无法由遗传漂变直接解释；
3. 三个重大疫情时期与性状转变高度重合：  
   - 查士丁尼瘟疫（约 6 世纪）  
   - 安东尼瘟疫（约 2 世纪）  
   - 中世纪早期麻疹暴发  
4. 基因本体分析表明，相关变异富集于免疫反应与代谢调控通路中，揭示代谢系统在免疫适应中的关键作用；
5. 研究提供了古代瘟疫对人类基因组长期影响的直接量化证据。

---

## 七、研究优点

- **数据规模创新**：整合超过 3500 份古人类基因组，为时间序列分析提供充分样本量；
- **方法融合性强**：将当代 GWAS 与古代基因组研究结合，展示多学科交汇的分析范式；
- **控制严谨**：考虑时间、空间及遗传祖源等混杂因素；
- **生物学解释丰富**：通过基因本体富集揭示潜在机制，而非仅呈现统计趋势；
- **对人类进化学的意义**：证明传染病对基因组多基因调控层面具有长期驱动力。

---

## 八、不足与局限

- **样本分布偏差**：古代样本在时间与地理上仍不均衡，某些时期数据稀缺；
- **PRS 外推问题**：现代 GWAS 的效应估计可能无法完全适用于古代人群；
- **因果推断有限**：无法直接证明疫情造成了基因频变，仅能观察关联；
- **表型推估不确定性**：古代个体的真实免疫表型难以直接验证；
- **缺乏算力透明度**：未报告计算平台与计算开销，使可重复性略受影响。

---

**（完）**
