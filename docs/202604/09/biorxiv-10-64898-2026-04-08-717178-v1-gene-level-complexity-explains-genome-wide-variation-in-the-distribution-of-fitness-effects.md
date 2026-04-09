---
title: Gene-level complexity explains genome-wide variation in the distribution of fitness effects
title_zh: 基因层面复杂性解释了适应度效应分布在全基因组范围内的变异
authors: "Yildirim, B., James, J."
date: 2026-04-09
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.08.717178v1.full.pdf"
tags: ["query:gene"]
score: 9.5
evidence: 全基因组变异与基因组组织研究
tldr: 本研究探讨基因层面复杂性对基因组范围内突变适应度效应分布的影响，结合群体遗传和机器学习分析发现，基因的保守性、结构与表达等特征能有效预测选择约束，基因层面的复杂性比物种层面的差异更能解释DFE变异。
source: biorxiv
selection_source: fresh_fetch
motivation: 研究旨在揭示基因组组织结构如何驱动不同物种中适应度效应分布（DFE）的变异。
method: 研究结合群体遗传学与基于多种基因特征的机器学习方法推断小鼠、果蝇和酿酒酵母的基因选择约束。
result: 结果显示保守性、基因结构和表达水平最能解释选择约束，高连接和高表达基因具有更强且更集中负选择效应。
conclusion: 研究表明，反映基因复杂性的特征比物种层级的差异更能解释适应度效应的分布差异。
---

## 摘要
适应度效应分布（DFE）——描述新突变是有害的、中性的还是有益的——是理解种群如何进化的核心。尽管 DFE 在不同基因组和物种间存在差异，但哪些基因组组织特征驱动了这种差异仍不清楚。本研究结合群体遗传学与机器学习方法（基于多种基因特征进行训练），推断了小家鼠（Mus musculus castaneus）、黑腹果蝇（Drosophila melanogaster）和酿酒酵母（Saccharomyces cerevisiae）基因组水平的选择性约束。结果表明，许多基因特征对选择性约束具有贡献，其中保守性、基因结构与表达水平最具信息性。这些约束将基因划分为具有不同 DFE 的类别。具有更高连通性和表达水平的基因——这些特征反映了基因影响多少性状——经历了更强且分布更窄的有害效应，而适应速率在中等程度的选择性约束下达到峰值。在 Fisher 几何模型（FGM）框架下进行比较时，这种差异与基于基因水平复杂性（而非生物体水平复杂性）的预测一致，而仅在物种之间的比较中一致性较低。我们的结果表明，以基因组特征为代理的基因层面复杂性，比生物体层面的分类更能解释 DFE 的变异，并强调了在研究基因组结构与适应度景观及分子进化模式之间关系时，建模基因特征综合效应的重要性。

## Abstract
The distribution of fitness effects (DFE)- describing how harmful, neutral, or beneficial new mutations are - is central to understanding how populations evolve. Although the DFE varies across genomes and species, it remains unclear which aspects of genomic organization drive this variation. Here, we inferred gene-level selective constraints across the genomes of Mus musculus castaneus, Drosophila melanogaster and Saccharomyces cerevisiae using a combination of population genetics and machine learning trained on diverse gene features. Many gene features contributed to selective constraint, with conservation, gene structure, and expression being the most informative. These constraints delineated gene classes with distinct DFEs. Genes with higher connectivity and expression - features reflecting how many traits a gene influences - experienced stronger and less dispersed deleterious effects, and the rate of adaptation peaked at intermediate levels of selective constraint. When compared in a Fisher's geometric model (FGM) framework, this variation was consistent with predictions based on complexity considered at the gene level rather than at the organism level, whereas between-species comparisons alone were less consistent with FGM. Our results suggest gene-level complexity, captured by genomic feature proxies, better explains DFE variation than organism-level labels and highlight the value of modeling the combined effects of gene features when linking genomic architecture to fitness landscape and patterns of molecular evolution.

---

## 论文详细总结（自动生成）

# 基因层面复杂性解释了适应度效应分布在全基因组范围内的变异 — 深度总结

---

## 一、研究核心问题与整体含义
- **研究背景与动机**  
  - 适应度效应分布（DFE）是进化生物学中的关键参数，描述新突变对生物适应度的影响（有害、中性或有益）。  
  - 以往工作主要关注 DFE 在不同物种之间的差异，但对驱动这种差异的**基因组组织因素**缺乏系统性理解。  
  - 本研究关注的问题是：**哪些基因级特征能解释整个基因组层面的 DFE 变异？**  
- **整体含义**  
  - 作者认为，与直接从物种复杂度出发相比，基因层面的复杂性（如保守性、表达水平、连通性等）更能解释突变效应的分布模式。  
  - 研究的核心贡献是从基因为单位重新审视“选择约束”及其对适应度效应的塑造机制。

---

## 二、方法论：核心思想与技术流程
- **核心思想**  
  - 以基因为分析单位，建立一个整合群体遗传学数据与机器学习模型的框架，用于推断不同基因在选择性约束上的差异。  
  - 通过多维基因特征（如保守性、结构、表达水平等）训练模型，推断每个基因的 DFE 分布特征。  
- **关键技术细节**
  - **统计推断部分**：基于群体遗传学参数（如突变频率谱、选择系数分布）估算选择约束。  
  - **机器学习部分**：使用多特征输入（含结构长度、表达量、连通性、功能类别等），训练一个预测模型输出“选择约束权重”。  
  - **模型框架**：与 **Fisher 几何模型（FGM）** 对比，验证预测结果是否符合复杂性与适应度地形的理论预期。  
- **算法流程（文字描述）**
  1. 从三个模式生物基因组中提取突变和遗传变异数据；
  2. 定义每个基因的多维特征；
  3. 基于群体遗传学模型计算选择性约束指标；
  4. 训练并验证机器学习模型以预测 DFE 分布；
  5. 在 FGM 理论框架下分析模型预测与复杂性假说的一致性。

---

## 三、实验设计
- **数据集与物种**  
  - 小家鼠（*Mus musculus castaneus*）  
  - 黑腹果蝇（*Drosophila melanogaster*）  
  - 酿酒酵母（*Saccharomyces cerevisiae*）  
- **场景设计**
  - 对这三种不同复杂度的生物进行统一的基因层面 DFE 推断；
  - 比较基因特征与选择性约束之间的一致性和跨物种差异。  
- **对比与检验**
  - 与传统基于物种层级复杂度的 DFE 解释模型对比；
  - 在 FGM 框架下检验“基因复杂性 vs. 生物体复杂性”的解释力。  

---

## 四、资源与算力
- 文中**未明确说明**所使用的计算资源或算力配置。  
- 未提及 GPU 型号、数量、训练时间或服务器规模。  
- 可能使用常规计算资源进行机器学习模型训练和参数拟合（推测为中等算力）。

---

## 五、实验数量与充分性
- 虽无明确数值，但推测包含：
  - 三个物种的基因组分析（跨物种比较实验）；
  - 多组基因特征的回归或分类实验；
  - 基于 FGM 理论的模型验证与消融分析。  
- **充分性与公平性**  
  - 覆盖了不同生物类型（哺乳类、昆虫、真菌），体现样本广度；
  - 使用统一的推断方法，减少模型偏差；
  - 实验设计具有跨系统一致性，具备较高的公平性与对比价值。

---

## 六、主要结论与发现
- 基因层面复杂性（如保守性、结构特征、表达水平）能显著预测选择约束。  
- 高表达、高连通基因的 DFE 分布更集中且负选择更强。  
- 适应速率在中等选择约束水平下达到峰值，显示“过弱或过强选择”都会降低适应潜力。  
- 跨物种对比显示，这些结果更符合**Fisher 几何模型**中基于基因复杂性的预测，而物种层级差异解释力较弱。  
- 总体结论：**基因特征驱动的复杂性是解释 DFE 变异的更核心机制**，优于生物体分类或系统发育层级解释。

---

## 七、优点与创新点
- **概念创新**：从“基因复杂性”角度统一解释跨物种 DFE 变异。  
- **方法整合性强**：结合群体遗传学与机器学习，实现定量化、可预测的约束分析。  
- **理论与数据结合**：在 FGM 框架下验证模型结果，提高理论一致性。  
- **适用范围广**：可扩展至更多基因组数据，用于预测突变效应或适应潜力。

---

## 八、不足与局限
- **数据层面**：仅涵盖三种模式生物，物种覆盖有限，难以推广到更复杂或非模型生物。  
- **算力与模型说明不足**：未明确机器学习模型类型及训练细节，不利于可复现性。  
- **复杂性定义的抽象性**：基因层面复杂性的定量指标仍存在主观定义风险。  
- **实验验证缺失**：未进行功能实验验证预测的 DFE 与真实生理效应之间的对应关系。  
- **潜在偏差**：不同基因组数据质量及注释深度可能影响约束估计的准确性。

---

（完）
