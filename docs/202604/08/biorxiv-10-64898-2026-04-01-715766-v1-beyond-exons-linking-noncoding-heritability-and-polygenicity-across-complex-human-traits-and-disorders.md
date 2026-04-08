---
title: "Beyond Exons: Linking Noncoding Heritability and Polygenicity across Complex Human Traits and Disorders"
title_zh: 超越外显子：关联非编码遗传力与复杂人类性状和疾病中的多基因性
authors: "Fuhrer, J., Shadrin, A. A., Hughes, T., Parker, N., Hindley, G., Frei, E., Nguyen, D., Smeland, O. B., Djurovic, S., Andreassen, O., Dale, A., Frei, O."
date: 2026-04-03
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.01.715766v1.full.pdf"
tags: ["query:gene"]
score: 9.5
evidence: 研究基因组范围内的遗传结构和遗传力
tldr: 本文研究复杂人类性状的基因多效性与非编码遗传力的关系，利用MiXeR框架在34种性状中划分外显子、内含子和基因间区的遗传力，发现外显子遗传贡献随多效性增加而下降，而基因间区贡献相反，揭示了基因调控架构随多效性系统变化的规律。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715766-v1/fig-001.webp\", \"caption\": \"Figure 3: Contribution of individual functional annotations relative to the full model with 74 annotations. Phenotypes are ordered by their polygenicity remaining after pruning with 𝑟g=0.3, favoring phenotypes with higher heritability. Annotations are sorted by their Euclidean distance. On the left, next to relative numbers of nucleotides (genome, exon, intron, intergenic), the Spearman rank correlation value between ACS and polygenicity across phenotypes is indicated. The symbols following each functional annotation on the right indicate the significance after Bonferroni correction for the Spearman correlation (significance: ***: p<0.001, **: p<0.01, *: p <0.05, n.s.: p≥0.05).\", \"page\": 7, \"index\": 1, \"width\": 970, \"height\": 1011}]"
motivation: 复杂性状的多效性如何与基因组不同功能区域的遗传力分布相关尚不清楚。
method: 作者使用MiXeR框架和基于似然的注释贡献评分对34种性状的遗传力进行功能区域划分与分析。
result: 结果显示外显子遗传力占比在多效性强的性状中显著下降，而基因间区贡献增加，且不同功能注释在多效性轴上呈系统性差异。
conclusion: 研究表明性状多效性与遗传力的功能分布密切相关，从基因近端调控向分散调控模式转变是多效性差异的关键。
---

## 摘要
复杂性状的遗传结构涵盖了一个连续的多基因性谱，但目前仍不清楚多基因性差异如何与全基因组中单核苷酸多态性（SNP）遗传力的功能定位相关。我们采用基于 MiXeR 的框架，将34种性状的遗传力划分为外显子、内含子和基因间区，并提出了一个基于似然的注释贡献评分，用以量化特定注释对遗传力的影响。结果显示，外显子仅解释了少部分遗传力，且随着多基因性增加，其贡献逐渐减少——在多基因性较低的躯体疾病和生物标志物中平均为22%，而在多基因性较高的精神和认知表型中仅为13%。与之相反，基因间区域所占比例随多基因性增加而上升，而内含子区域比例相对稳定。对更广泛的功能注释集的分析揭示了沿多基因性轴线的系统性差异：高多基因性性状在比较基因组学和变异效应评分方面表现出更强的贡献，而低多基因性性状则在启动子、转录和染色质注释方面表现出更强的贡献。这些结果共同表明，遗传力的功能分区随着多基因性系统性变化，暗示从基因邻近的调控结构向由众多分散调控效应塑造的结构转变，是性状间多基因性差异的关键决定因素。

## Abstract
The genetic architecture of complex traits spans a continuum of polygenicity, yet it remains unclear how differences in polygenicity relate to the functional localization of SNP heritability across the genome. We use a MiXeR-based framework to partition heritability across exonic, intronic, and intergenic regions for 34 traits and introduce a likelihood-based annotation contribution score that quantifies annotation-specific impact on heritability. Exons explain a minority of heritability, and their contribution decreases with increasing polygenicity, from an average of 22% in less polygenic somatic diseases and biomarkers to 13% in highly polygenic psychiatric and cognitive phenotypes. Intergenic fractions show the opposite trend, whereas intronic fractions remain relatively stable. Analysis of a broader set of functional annotations reveals systematic differences along the polygenicity axis: highly polygenic traits show stronger contributions from comparative genomics and variant-effect scores, whereas less polygenic traits show stronger contributions in promoter, transcription, and chromatin annotations. Together, these results indicate that the functional partitioning of heritability systematically varies with polygenicity, pointing to a shift from gene-proximal regulatory architectures to architectures shaped by numerous dispersed regulatory effects as a key determinant of differences in polygenicity across traits.

---

## 论文详细总结（自动生成）

# 超越外显子：关联非编码遗传力与复杂性状多基因性的系统分析  
（Beyond Exons: Linking Noncoding Heritability and Polygenicity across Complex Human Traits and Disorders）

---

## 一、研究问题与背景

- **核心问题**：复杂人类性状呈现连续的多基因性谱系（polygenicity continuum），即不同性状由不同数量和效应大小的遗传变异驱动。但至今尚不清楚，不同性状的多基因性差异与基因组功能区域（如外显子、内含子、基因间区）中遗传力（SNP heritability）的空间分布之间的关系。
- **研究动机**：传统的全基因组关联研究（GWAS）往往聚焦于外显子或启动子附近的变异，而忽略了非编码区（尤其是远距调控元件）的潜在重要性。作者希望揭示：
  - 不同性状的多基因性如何决定遗传力的空间分布；
  - 非编码遗传变异在高多基因性性状（如精神与认知表型）中的作用；
  - 基因调控网络在多基因性谱系上的结构性转变。
- **整体含义**：论文提出一种新的量化框架，从基因组功能注释角度系统刻画性状间多基因性结构差异，为理解复杂性状的遗传学基础和其调控层次提供新的视角。

---

## 二、方法论

### 1. 基本思路
- 利用 **MiXeR 框架**（一种基于高斯混合模型的遗传架构推断工具），估计不同性状的多基因性和SNP遗传力。
- 开发了一种基于似然估计的新指标——**Annotation Contribution Score (ACS)**，用于衡量特定功能注释对遗传力解释度的相对贡献。
- 在此基础上，分析外显子、内含子和基因间区的遗传力占比及其与多基因性的系统相关性。

### 2. 核心技术与算法流程
- **步骤 1：数据预处理与遗传力建模**
  - 输入GWAS summary statistics。
  - 采用MiXeR模型估计每个性状的：  
    - 遗传力 \( h^2 \)  
    - 多基因性参数 \( \pi \)（指显著贡献的因果变异比率）  
- **步骤 2：遗传力分区**
  - 按照功能注释（外显子、内含子、基因间区以及更细粒度的74类注释）进行SNP划分；
  - 为每种注释计算独立的遗传力贡献 \(\Delta h^2_{anno}\)。
- **步骤 3：定义注释贡献评分（ACS）**
  - 采用基于对数似然比的模型比较，推导每个注释类别的相对贡献；
  - 通过Spearman相关分析，计算ACS与多基因性参数间的关系；
  - 应用 Bonferroni 校正评估显著性。
- **步骤 4：系统映射与可视化**
  - 将34种性状按多基因性排序；
  - 比较各注释贡献随多基因性的变化趋势。

---

## 三、实验设计

- **数据来源**：共分析了 **34 种人类性状**，涵盖三大类：
  1. 躯体类疾病与生理表型（如脂质水平、免疫性疾病）；
  2. 生物标志物（如血细胞计数、激素水平）；
  3. 精神与认知性状（如精神分裂症、教育年限）。
- **分析框架**：
  - GWAS summary data 由英国生物库、精神基因联盟等公开数据库获得；
  - 所有性状在统一的MiXeR管线下进行估计，确保可比性。
- **对比方法**：
  - 与标准的 **LD Score Regression (LDSC)** 分区遗传力分析进行结果一致性比较；
  - 检验ACS评分与传统功能富集分析之间的关联。
- **评估指标**：
  - 不同注释类别的遗传力占比；
  - 注释贡献与多基因性参数的相关系数；
  - 统计显著性（p值、Bonferroni校正）。

---

## 四、资源与算力

- 论文未具体报告计算资源的使用细节（如GPU型号、CPU节点数量或计算时长）。
- 按照MiXeR和LDSC常规计算量估计，该类分析主要依赖CPU并行计算，而非深度学习GPU加速。
- 因此推测其算力需求中等，核心瓶颈在于数据预处理和全基因组回归矩阵的计算。

---

## 五、实验数量与充分性

- 共分析 **34 个性状**，覆盖医学、心理学、生物标志物等不同领域，具有广泛代表性；
- 包含多类功能注释（基础类别3种+扩展注释74种），进行系统比较；
- 包括：
  - 功能分区对照分析；
  - 多基因性相关分析；
  - 多注释相比的全局相关矩阵。
- **充分性与客观性**：
  - 实验规模较大，涵盖多领域；
  - 方法统计上可复现；
  - 但由于使用公开GWAS结果，可能受限于不同研究设计和样本规模差异。

---

## 六、主要结论与发现

- **非编码遗传力是主导**：
  - 外显子仅贡献总体遗传力的少部分（13%–22%），其占比随多基因性升高而显著降低；
  - 基因间区域的遗传力占比则随多基因性上升而增加。
- **调控架构随多基因性系统转变**：
  - 高多基因性性状偏向由**分散的远距调控**效应主导；
  - 低多基因性性状更依赖于**基因邻近或启动子区域**的调控。
- **功能注释信号的规律性**：
  - 高多基因性性状与比较基因组学保守性、变异效应评分（如CADD）关联更强；
  - 低多基因性性状在染色质可及性和启动子相关注释上富集。
- **总体结论**：
  - 多基因性不仅反映变异数量的多寡，也对应了遗传调控结构从“集中特定基因”到“分散广泛调控”的演化转变。

---

## 七、优点

- **创新的视角**：首次从多基因性与功能遗传力分布的交互角度系统建模；
- **方法性贡献**：引入了新的ACS指标，可扩展用于其他注释框架；
- **数据覆盖广**：性状种类多、数据来源权威；
- **结果具有解释力**：发现了跨领域的调控结构转变规律；
- **统计控制严谨**：采用Bonferroni校正、多层相关校验，避免假阳性。

---

## 八、不足与局限

- **数据层面**：
  - 依赖公开GWAS summary数据，部分样本的异质性和测量误差可能影响估计准确性；
  - 未考虑群体特异性遗传结构（如非欧洲人群）。
- **模型层面**：
  - MiXeR假设效应独立且分布高斯化，可能低估稀有变异影响；
  - ACS作为相对指标，仅捕捉线性贡献，未反映因果调控层级。
- **实验层面**：
  - 未报告计算资源及时间成本；
  - 缺少验证性实验（如功能验证、eQTL整合）。
- **应用限制**：
  - 主要为宏观遗传结构推断框架，难直接指导具体疾病基因筛选或功能解析。

---

**（完）**
