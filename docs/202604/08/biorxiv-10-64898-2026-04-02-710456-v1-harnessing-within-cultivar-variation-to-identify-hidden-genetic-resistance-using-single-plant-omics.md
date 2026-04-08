---
title: Harnessing within-cultivar variation to identify hidden genetic resistance using single plant-omics
title_zh: 利用品种内变异通过单株组学识别隐蔽的遗传抗性
authors: "Redmond, E. J., Li, M., Holden, S., Awan, M. J. A., Zhang, Y., Gill, J. S., Virhia, J., Hargreaves, J., Danks, P., Sleath, B., Subramaniam, R., Hicks, C., Overy, D. P., Brar, G. S., Ezer, D."
date: 2026-04-06
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.02.710456v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 利用植物组学识别遗传抗性变异
tldr: 本研究针对小麦赤霉病菌感染大麦时同品种个体间反应差异的问题，利用单株转录组学解析121株大麦的早期感染过程，重建了时间序列的调控机制，并发现多种与抗病相关的基因变异，为育种提供了潜在靶标。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-710456-v1/fig-001.webp\", \"caption\": \"Figure 5. Variants can be used to predict disease-related traits. (A) Spearman’s correlation between traits across pairs of heads. (B) Spearman’s correlations between principal components and traits. (C) Loadings of principal components (PCs), with several genes with high values highlighted. PRR kinase refers to profile-rich receptor-like kinase and CDC48 refers to a cell division cycle protein 48. The ranks of (D) the Area under the disease progression curve (AUDPC) (E) Total DON toxin concentration and (F) % fungal RNA are used to colour-code a principal component analysis (PCA) plot, with percentage of variance explained by each PC indicated in brackets.\", \"page\": 21, \"index\": 1, \"width\": 899, \"height\": 1150}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-710456-v1/fig-002.webp\", \"caption\": \"Figure 2. Differentially expressed genes under Fusarium infection. Panel (A) shows representative Gene Ontology (GO) terms associated with genes that were more highly expressed in the top 25% Area Under the Disease Progressive Curve (AUDPC) plants than the bottom 25%. Panel (B) shows the Spearman’s correlation between dry weight, fungal load (% fungal RNA), and disease-related traits, specifically the disease progression index (DPI) on days 7-20, AUDPC, and alternative measures of DON toxin concentrations. Panel (C) shows the distribution of Spearman’s correlations between gene expression values and each trait shown in (B), calculated separately for each set of differentially expressed genes (genes whose expressions go up and down in the plants with the top vs bottom 25% AUDPC and those whose expressions go up or down in treatment vs control barley plants). Boxplots indicate the median, interquartile ranges, and range, with outliers lying >1.5*IQR away from the median. Panel (D) shows the overlap between these gene sets, with numbers indicating gene counts.\", \"page\": 18, \"index\": 2, \"width\": 954, \"height\": 975}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-710456-v1/fig-003.webp\", \"caption\": \"Figure 3. Transcriptional trajectory among genes that go up and down under Fusarium treatment. First, a pseudotime was inferred using differentially expressed genes whose expression was higher under fusarium treatment than mock-treated plants. Panel (A) shows the expression of these genes over pseduotime, with clusters determined by complete linkage, and expression patterns scaled between 0 (minimum expression) and 1 (maximum expression). GO enrichment analysis was performed on each cluster of genes, with two clusters showing primary enrichment for ribosomes, one cluster showing only enrichment for hydrolases, and the three remaining large clusters (labelled early, medium, and late) showing enrichment for various GO terms, with representative examples shown in (B). In (C), the same analysis as in (A) was performed using only genes that had higher expression under the treatment, but this showed fewer distinct clusters. (D) highlights the Spearman’s correlation between each pseudotime and associated traits.\", \"page\": 19, \"index\": 3, \"width\": 924, \"height\": 906}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-710456-v1/fig-004.webp\", \"caption\": \"Figure 1. Workflow for using single plant -omics for identifying early markers of Fusarium infection in barley.\", \"page\": 17, \"index\": 4, \"width\": 960, \"height\": 548}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-710456-v1/fig-005.webp\", \"caption\": \"Figure 4. Proposed mechanism of how endemic genetic heterogeneity in AAC Synergy contributes to variation in Fusarium head blight progression. Here we summarise the previously known fusarium response pathways in cereals, overlaying symbols to indicate which proteins have endemic SNPs associated with disease traits in AAC Synergy based on a Genome-Wide Association Study (GWAS). Note that over 60% of all variants that were found to be associated with disease traits are shown in this figure, so most variants are directly within the gene bodies of known components of plant immunity. Yellow stars indicate variants within genes that are associated with the pseudotime made from genes up-regulated during infection and the red stars are for variants associated with the pseudotime made from genes that were down-regulated during infection. Red letters designate variants within genes associated with other key disease-related traits: A for AUDPC, D for total DON concentration, and F for percent fungal RNA in the sample. All other named genes within this figure were found to be differentially expressed between treatment and control barley plants.\", \"page\": 20, \"index\": 5, \"width\": 918, \"height\": 712}]"
motivation: 同一品种大麦中个体间病害进展差异大，影响早期抗病反应的准确识别。
method: 采用单株转录组学分析F. graminearum感染的121株麦芽大麦群体，重建感染早期的调控过程。
result: 发现了与抗病性相关的多个已在高产大麦品种中存在的遗传变异。
conclusion: 单株转录组学能有效利用种群内异质性来揭示隐藏的抗病遗传潜力。
---

## 摘要
禾谷镰孢菌（Fusarium graminearum）是一种真菌病原体，会在小粒谷物中引起穗腐病或赤霉病，威胁全球谷物生产。即使在同一品种中，个体植株间的病害进展也存在显著差异，反映了遗传和环境的异质性。这使得早期宿主反应的识别变得复杂，因为群体中的每一株植物在病害进展中都处于略有不同的阶段。本文采用单株转录组学对121株暴露于禾谷镰孢菌的麦芽大麦进行分析，从而重建了早期感染中的调控过程时间序列。我们鉴定出若干与抗病性相关的遗传变异，这些变异已存在于该高产品种中，显示出作为育种目标的潜力。这些变异分布在与活性氧（ROS）爆发产生相关的蛋白、凝集素-激酶型模式识别受体（PRR）以及具有脱毒黄曲霉毒素（DON）活性的酶中。单株转录组学为刻画植物与病原体早期互作提供了一种新策略，将群体内异质性从实验障碍转化为研究优势。

## Abstract
Fusarium graminearum is a fungal pathogen that causes scab or head blight in small grain cereals and threatens global cereal production. Disease progression varies widely among individual plants of the same cultivar, reflecting both genetic and environmental heterogeneity. This complicates the identification of early host responses, because each individual plant in a population is at a slightly different phase of disease progression. Here we apply single plant-transcriptomics to a population of 121 malt-barley exposed to F. graminearum, enabling us to reconstruct a temporal sequence of regulatory processes during early infection. We identified several disease-resistance associated genetic variants that are already endemic in this high-yielding cultivar, suggesting potential as breeding targets. These variants were within proteins involved in ROS-burst production, a lectin-kinase PRR, and enzymes with DON-detoxification activity. Single plant-transcriptomics offers a novel strategy for characterising early plant-pathogen interactions, turning intra-population heterogeneity from an experimental barrier into an asset.

---

## 论文详细总结（自动生成）

# 《利用品种内变异通过单株组学识别隐蔽的遗传抗性》论文总结

---

## 一、研究核心问题与整体背景

- **研究动机**：  
  *禾谷镰孢菌*（*Fusarium graminearum*）引起的穗腐病（Fusarium Head Blight, FHB）严重危害全球小麦、大麦等谷物生产，导致产量损失及毒素污染（尤其是 DON 毒素）。  
  然而，即使在遗传上相同的作物品种内，不同个体对感染反应差异巨大，导致难以准确定位早期的宿主防御机制与抗性基因。

- **问题本质**：  
  研究者试图解决“如何在同一农作物品种内，利用个体间自然差异识别潜在的抗病遗传变异”，克服个体异步感染带来的实验噪声。

- **研究目标**：  
  通过单株转录组学（single plant-transcriptomics）解析大麦在早期感染阶段的异步响应，将群体内异质性转化为可用于重建时间动态与筛选抗病变异的优势。

---

## 二、研究方法论

### 1. 核心思想

- 借鉴**单细胞转录组学中的伪时间（pseudotime）分析思路**：  
  将同一时间采样但反应阶段不同的个体进行排序，重建出类似时间序列的感染响应轨迹。
- 通过**单株 RNA-seq** 分析每株植物的基因表达与遗传变异，进而推测感染进程的时间顺序，并将其与抗病特征关联。

### 2. 技术流程

1. **单株 RNA 测序**：对感染 *F. graminearum* 的 121 株 AAC Synergy 麦芽大麦进行测序。  
2. **变异识别**：在表现为纯合的育种材料中识别出3910个编码区SNP。  
3. **伪时间重建**：  
   - 针对感染组中的上调与下调基因分别构建伪时间序列；  
   - 通过多次随机划分（300 个基因集）验证结果稳健性。  
4. **基因功能富集分析（GO）**：识别不同阶段富集的防御相关通路，例如：
   - 早期：钙信号、几丁质酶、UDP-糖基转移酶；
   - 中期：激素信号（茉莉酸）与外源物运输；
   - 晚期：生物碱合成与细胞外防御机制。
5. **GWAS 分析**：在单一品种内部（near-isogenic population）对表型–基因型关联进行简化的全基因组关联分析，挖掘潜在因果变异。
6. **验证**：使用独立的28株验证集验证关键变异与抗病性指标（AUDPC、DON含量、真菌RNA百分比）的相关性。

### 3. 方法创新点

- 将**群体内天然异质性**视作时间差异信号源；
- 在**单一栽培品系内**执行类似 GWAS 的分析，识别微小遗传变异；
- 实现了**单株水平的“时空重建+变异关联”**的整合分析框架。

---

## 三、实验设计

- **作物对象**：加拿大高产品种麦芽大麦 *AAC Synergy*。
- **样本规模**：121株感染样本 + 41株对照。
- **处理方式**：喷施禾谷镰孢菌孢子液（6×10⁴ spores/mL），对照为蒸馏水。  
  在开花期（anthesis）进行，5天取样测序，20天量化疾病指标。
- **表型测量**：
  - 病害进展曲线面积（AUDPC）；
  - DON 毒素含量；
  - 真菌RNA比例（感染负荷）。
- **验证实验**：独立实验集进行重复采样（2个穗头/株），验证 GWAS 变异与表型间的稳定相关。

---

## 四、算力与资源使用

- RNA-Seq分析在英国约克大学高性能计算平台 **Viking Cluster** 上运行。  
- 尽管明确提到使用高性能集群，但论文未具体说明 GPU/CPU 数量、运行时长或核心数量。  
- 测序使用 **Illumina NovaSeq** 平台，单样本约 6000 万条双端150 bp测序数据。

---

## 五、实验数量与充分性

- **主要实验**：
  1. 121株大麦的单株RNA测序分析；
  2. 3组差异表达分析（处理 vs 对照 / 高低AUDPC / 高低DON）；
  3. 双向伪时间分析（上调系、下调系）与稳健性检验；
  4. GWAS 与验证集预测分析；
  5. 功能注释与GO富集分析。
- **实验充分性**：样本数充足，涵盖多层指标；使用独立验证集支持稳健性；
  但仅限于单一品种与单一病原株系，外推性仍有限。

---

## 六、主要结论与发现

1. **异步感染轨迹重建成功**，揭示了早期防御的时序特征：  
   - 初期：Ca²⁺信号、几丁质防御、毒素脱毒；
   - 中期：茉莉酸途径驱动系统性信号；
   - 末期：生物碱合成与结构性防御。
2. 发现多个**抗病关键变异**，包括：
   - 活性氧产生相关基因（ROS burst oxidase）；
   - 讲糖基化酶（UDP-glycosyltransferase）；
   - 识别蛋白激酶与Lectin-kinase PRR；
   - DON 解毒酶等。
3. 验证表明：
   - 这些变异与病斑进展（AUDPC）、DON 和真菌负荷显著相关；
   - 在验证集中仍可预测病害形态差异。
4. 提出**单株组学可作为抗病育种筛选新工具**，在高产品种内直接发掘潜在有益SNP。

---

## 七、亮点与创新

- 将**时间异步植株反应**转化为**伪时间序列分析**框架；
- **单品种内 GWAS** 创新性地揭示了育种材料中原位遗传多样性；
- 结合表达和变异层面的多重关联分析，提升了抗病基因鉴定的分辨率；
- 实验设计兼具大样本与独立验证，结果稳健。

---

## 八、不足与局限

- **外推性有限**：仅在一个高产品种（AAC Synergy）和单一病原菌株中完成，不能直接推广至其他作物。  
- **环境因素干扰**：喷雾接种造成的孢子负荷差异仍存在环境噪声。  
- **算力描述不全**：缺乏运行参数与计算资源使用明细，不利于完全复现实验。  
- **单组学限制**：未联合代谢组或蛋白组信息，功能解释仍需后续整合验证。  
- **因果推断仍假设性**：多数SNP虽位于免疫相关基因，但未进行功能实验确认。

---

**（完）**
