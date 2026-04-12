---
title: "FM-GPT: Bayesian fine mapping for phenome-wide transcriptome-wide association studies"
title_zh: FM-GPT：用于全表型范围转录组关联研究的贝叶斯精细定位方法
authors: "Canida, T., Ye, Z., Wang, S.-H., Huang, H.-H., Pan, Y., Liang, M., Chen, S., Ma, T."
date: 2026-04-11
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.07.717122v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 全转录组关联研究的精细映射与因果基因
tldr: 该研究提出了FM-GPT，一种用于表型广泛的转录组关联研究的贝叶斯细粒度映射方法，可同时处理多种类型表型，通过基因引导的表型降维有效辨别多效性或特异性基因，在UK Biobank应用中显著提高因果基因识别精度并揭示关键生物调控机制。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-717122-v1/fig-001.webp\", \"caption\": \"Figure 3. Simulation results for scenario 2 with heterogeneous causality. (A) AUCs of all methods with varying number of factors for both continuous phenotypes only and phenotypes of mixed data types. (B) AUCs of all methods with varying heritability levels for both continuous phenotypes only and phenotypes of mixed data types. (C) Number of true positives vs false positives detected by all methods at same FDR cutoff (0.1) with varying number of factors for both continuous phenotypes only and phenotypes of mixed data types. (D) Number of true positives vs false positives detected by all methods at same FDR cutoff (0.1) with varying heritability levels for both continuous phenotypes only and phenotypes of mixed data types. *mvSuSIE is removed from mixed outcome plots as they cannot handle mixed data types.\", \"page\": 21, \"index\": 1, \"width\": 1037, \"height\": 593}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-717122-v1/fig-002.webp\", \"caption\": \"Fig 4. TWAS and fine mapping results for genetic study of 66 regional cortical thickness (CT) measures from UKB. (A) The Phenotypic correlation of the 66 regional CT measures; (B) 3D Manhattan plot of TWAS p-values (most significant genomic regions highlighted); (C) Proportion of regions that harbor different number of causal genes by different methods; (D) Manhattan plot of meta-TWAS Fisher’s method p-values and the putative causal genes identified by each fine mapping method; (E) Brain regions with the largest factor loadings; (F) Pathway enrichment analysis on FM-GPT selected genes results (p<0.05).\", \"page\": 22, \"index\": 2, \"width\": 1062, \"height\": 1056}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-717122-v1/fig-003.webp\", \"caption\": \"Figure 1. (A) A schematic overview of the FM-GPT method. (B) A directed acyclic graph (DAG) of the FM-GPT method. (C) Demonstration of phenome-wide TWAS results, highlighted regions are where we will apply fine mapping. (D-E) Main outputs from the FM-GPT method: the putatively causal genes for the phenotype factors (D); the loadings of phenotypes on each phenotype factor (E).\", \"page\": 18, \"index\": 3, \"width\": 1041, \"height\": 579}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-717122-v1/fig-004.webp\", \"caption\": \"Table 2. Summary of fine mapping results for the 355 regions by different methods in the cortical thickness example\", \"page\": 23, \"index\": 4, \"width\": 980, \"height\": 1302}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-717122-v1/fig-005.webp\", \"caption\": \"Table 1. A comparison of main characteristics of representative GWAS/TWAS fine mapping methods/tools\", \"page\": 19, \"index\": 5, \"width\": 978, \"height\": 1348}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-717122-v1/fig-006.webp\", \"caption\": \"Fig 5. TWAS and fine mapping results for genetic study of EHR-derived phenotypes from UKB. (A) 3D Manhattan plot of TWAS p-values (most significant genomic regions highlighted); (B) The Phenotypic correlation of the 39 EHR-derived medical conditions; (C) Manhattan plot of meta-TWAS Fisher’s pvalues and the putative causal genes identified by each fine mapping method; (D) Pathway enrichment analysis on FM-GPT selected genes results (p<0.05); (E) Heatmap of identified putative causal genes and the loadings of phenotypes they target at.\", \"page\": 24, \"index\": 6, \"width\": 1087, \"height\": 1031}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-717122-v1/fig-007.webp\", \"caption\": \"Figure 2. Simulation results for scenario 1 with homogeneous causality. (A) AUCs of all methods with varying number of factors for both continuous phenotypes only and phenotypes of mixed data types. (B) AUCs of all methods with varying heritability levels for both continuous phenotypes only and phenotypes of mixed data types. (C) Number of true positives vs false positives detected by all methods at same FDR cutoff (0.1) with varying number of factors for both continuous phenotypes only and phenotypes of mixed data types. (D) Number of true positives vs false positives detected by all methods at same FDR cutoff (0.1) with varying heritability levels for both continuous phenotypes only and phenotypes of mixed data types. *mvSuSIE is removed from mixed outcome plots as they cannot handle mixed data types.\", \"page\": 20, \"index\": 7, \"width\": 1026, \"height\": 587}]"
motivation: 由于连锁不平衡和基因表达相关性会导致虚假关联，需要新的细粒度方法在表型广泛的TWAS中解析真实因果基因。
method: 提出一种名为FM-GPT的贝叶斯细粒度映射方法，用于在多种相关表型中优先识别因果基因。
result: FM-GPT在模拟与UK Biobank数据中均准确识别因果基因，揭示神经形态及免疫代谢功能的基因调控轴。
conclusion: FM-GPT展示了在大规模表型数据中准确定位因果基因的能力，有助于揭示复杂基因-表型关系和共享生物机制。
---

## 摘要
转录组范围关联研究（TWAS）将全基因组关联研究（GWAS）与表达数量性状基因座（eQTL）参考数据整合，以识别与目标性状相关的基因。然而，连锁不平衡和相关的基因表达可能产生伪阳性的 TWAS 信号，这促使人们发展精细定位方法，以在关联区间内优先识别潜在的因果基因。大型表型资源（例如电子健康记录（EHR））的快速增长使遗传研究从单一性状分析转向联合评估多个密切相关表型的全表型范围研究。我们提出了 FM-GPT（Fine-mapping of causal Genes for Phenome-wide Transcriptome-wide association studies，即全表型范围转录组关联研究的因果基因精细定位），一种新的贝叶斯精细定位方法，用于在全表型范围 TWAS 中优先识别跨多个相关表型（可能包括混合结果类型，如二元、计数或连续）的因果基因。FM-GPT 进行基因引导的表型降维，并揭示所识别基因的多效性或表型特异性效应。在模拟实验中，FM-GPT 在控制假阳性的同时，比其他精细定位方法更准确地识别出真实的因果基因。我们将 FM-GPT 应用于来自英国生物样本库（UK Biobank）的两个研究场景：一是基于脑 MRI 数据导出的区域皮质厚度测量的全脑遗传分析；二是基于 EHR 数据导出的临床表型的全表型遗传分析。FM-GPT 大幅缩小了潜在因果基因的集合规模，并识别出：1. 在整个大脑皮层区域皮质厚度上具有多效应的基因，包括位于染色体 17 上的 BCAS3、LRRC37A、NOS2P3、ARL17B 和 UBB，这些基因调控神经元形态和皮质结构；2. 影响循环、代谢、消化、呼吸和泌尿生殖系统多种疾病的基因，揭示了这些疾病间的两个主要变异轴，指向免疫与代谢功能之间潜在的基因调控权衡。这些结果突显了 FM-GPT 在大型全表型范围研究中解析复杂基因-表型关系的能力，揭示了跨多种人类性状的共同生物学机制，并推动了转化研究与共病研究的发展。

## Abstract
Transcriptome-wide association studies (TWAS) integrate genome wide association studies with expression quantitative trait locus reference panels to identify genes associated with traits of interest. However, linkage disequilibrium and correlated gene expression can induce spurious TWAS signals, motivating fine mapping methods to prioritize putatively causal genes within associated loci. The rapid growth of large-scale phenomic resources (e.g. electronic health records (EHRs)) has shifted genetic studies from single-trait analyses to phenome-wide investigations that jointly evaluate many closely related phenotypes. We introduce FM-GPT (Fine-mapping of causal Genes for Phenome-wide Transcriptome-wide association studies), a novel Bayesian fine mapping method for prioritizing causal genes across multiple correlated phenotypes with potentially mixed outcome types (e.g., binary, count or continuous) in phenome-wide TWAS. FM-GPT performs gene-guided dimension reduction of the phenotypes and reveals pleiotropic or phenotype-specific effects of the identified genes. In simulations, FM-GPT identified true causal genes more accurately than other fine mapping methods while controlling false positives. We applied FM-GPT to two applications using data from UK Biobank: a brain-wide genetic analysis of MRI data derived regional cortical thickness measures and a phenome-wide genetic analysis of clinical phenotypes derived from EHR data. FM-GPT greatly narrowed down the set size of putatively causal genes and identified: 1. genes with pleiotropic effects on regional cortical thickness across the cerebral cortex, including five genes BCAS3, LRRC37A, NOS2P3, ARL17B and UBB on chromosome 17 regulating neuronal morphology and cortical organization; and 2. genes that influence multiple medical conditions across the circulatory, metabolic, digestive, respiratory and genitourinary systems, revealing two major axes of variation among these conditions that point to a potential trade-off in gene regulation between immune and metabolic functions. These results highlight FM-GPT's power to disentangle complex gene-phenotype relationships in large-scale phenome-wide studies, uncovering shared biological mechanisms across diverse human traits and advancing translational and comorbidity research.

---

## 论文详细总结（自动生成）

# FM-GPT：用于全表型范围转录组关联研究的贝叶斯精细定位方法 — 中文总结

---

## 一、研究问题与整体背景

- **研究动机**  
  转录组范围关联研究（TWAS）通过整合全基因组关联研究（GWAS）与表达数量性状基因座（eQTL）数据，识别与表型相关的基因。然而，TWAS 的传统方法面临两个主要挑战：  
  1. **连锁不平衡（LD）与共表达结构**导致虚假关联，难以区分真正的因果基因。  
  2. 现有精细定位方法大多针对**单一表型**，无法同时处理多种相关或混合类型表型。  

- **研究意义**  
  随着电子健康记录（EHR）和多模态表型数据的快速增长，遗传学研究逐渐转向**全表型范围（phenome-wide）**分析。论文旨在提出一种新的统计框架，可：
  - 在成百上千个相关表型中联合分析；
  - 在多种表型数据类型（连续、二元、计数等）中识别真正的因果基因；
  - 揭示共享的基因调控机制与多效性生物学基础。

---

## 二、方法论：FM-GPT 框架

- **核心思想**  
  FM-GPT（Fine-Mapping of causal Genes for Phenome-wide TWAS）是一种**贝叶斯精细定位模型**，通过**基因引导的表型降维**在多个相关表型的联合分析中优先识别因果基因。

- **模型结构**  
  FM-GPT 基于三个关键层次的联合建模：
  1. **基因层**：利用 eQTL 参考数据训练基因表达预测权重（γ），并在 GWAS 队列中生成基因预测表达（GReX）。  
  2. **因果层（基因-潜在表型因子层）**：通过贝叶斯稀疏变量选择模型估计基因对多个潜在表型因子的效应（β），并以后验包含概率（PIP）识别因果基因。  
  3. **表型层**：采用**稀疏监督因子分析（sparse supervised factor analysis）**，将高维表型空间投影至较低维潜在表型因子空间（Λ），并让基因信号引导因子形成。

- **技术要点**
  - 使用**Spike-and-Slab稀疏先验**对 γ 与 β 实施确切特征选择；
  - **Gamma Process Shrinkage Prior** 约束因子载荷矩阵 Λ，保持模型可解释性；
  - **Pólya-Gamma 数据增强**策略统一处理连续、二元和计数性状。
  - 通过 **Bayesian False Discovery Rate (BFDR)** 控制多重检验错误率。  

- **算法流程（文字形式）**
  1. 在 eQTL 数据中训练基因表达预测模型（得到 γ）；
  2. 在 GWAS 数据中生成每个基因的预测表达（GReX）；
  3. 对每个 LD 区间进行联合建模：GReX → 潜在表型因子 → 表型；
  4. 使用 Gibbs 采样更新模型参数；
  5. 计算 PIP 和 BFDR，选取因果基因并分析对应表型因子。

---

## 三、实验设计

- **数据集与场景**
  1. **仿真实验**：
     - 模拟三种场景：同质（共享因果基因）、异质（因果基因不一致）和零假设（无因果基因）。
     - 使用典型 TWAS 配置：eQTL 训练样本量 n₁=250，GWAS 样本量 n₂=5000。
     - 每个仿真包含 10 个基因区、每区 10 个基因、表型数 q=50。
  2. **真实数据应用**（UK Biobank）：
     - **脑 MRI 数据场景**：分析 66 个脑皮层区域的皮质厚度表型（n=26,124）。
     - **EHR 数据场景**：从 ICD-10 派生的 1,403 个混合类型临床表型（选取 169 个高频表型，n=245,687）。

- **对比方法（Benchmark）**
  - TWAS 精细定位方法：**GIFT、MVIWAS**；
  - GWAS 精细定位方法：**PAINTOR、CAVIAR**；
  - 多变量贝叶斯方法：**mvSuSIE**；
  - 对比指标包括：AUC、真阳性数、假阳性率、F-score 等。

---

## 四、资源与算力

- **算力说明**  
  论文未明确给出使用的 GPU 或计算节点信息。只提到：
  - 方法通过 Gibbs Sampling 实现；
  - 提供高效的 R + C++ 集成实现（Rcpp）。
  - 未报告训练时间、硬件型号或资源规模。

---

## 五、实验数量与充分性

- **仿真实验**：设计了三大场景（同质、异质、零假设），各场景下又进行了不同潜变量数与遗传力（1%、3%、5%）设置的多组实验。
- **真实数据实验**：两大应用场景（脑 MRI、EHR 表型），均对比了多个主流方法。
- **消融分析**：通过与传统因子分析（EFA）对比验证了稀疏载荷恢复精度。
- **充分性与公平性**：  
  - 涵盖连续与混合类型表型；
  - 包括多种基因和表型规模；
  - 对比的 baseline 方法公认且经广泛使用；
  ⇒ **实验设计较为充分且公平**。

---

## 六、主要结论与发现

- FM-GPT 在仿真中具备：
  - 更高因果基因识别准确度（最高 AUC）；
  - 更好假阳性控制；
  - 对混合表型类型的优异泛化能力。

- 在 UK Biobank 应用中：
  1. **MRI 场景**：识别 18 个因果基因（如 BCAS3、LRRC37A 等），揭示一个控制 46 个脑区皮质厚度的共享潜在因子。  
  2. **EHR 场景**：识别 60 个跨系统疾病的因果基因，揭示两个显著的调控轴：  
     - 轴一：心血管–炎症相关基因（ARID4A、SRSF3 等）；  
     - 轴二：代谢–免疫调节基因（IL33、FCGR3A 等）；  
     → 提示潜在的**免疫代谢调控权衡机制**。

---

## 七、方法与实验亮点

- **创新性框架**：首次在 TWAS 中结合**贝叶斯变量选择 + 稀疏监督因子分析**；
- **混合表型兼容性**：通过 Pólya-Gamma 增强统一连续与离散表型；
- **联合建模能力**：可同时进行多基因、多表型、潜因子层次选择；
- **可解释性提升**：稀疏载荷矩阵阐明基因影响的具体表型集合；
- **高精度与低假阳性率**：显著优于代表性基线方法；
- **开源实现**：提供 R 包（github.com/tacanida/fm-gpt）便于复现与扩展。

---

## 八、不足与局限性

- **算力与规模未说明**：缺乏对模型计算复杂度和资源需求的量化；
- **表型维度限制**：目前仅在中等规模（数百表型）中验证，大规模（>10^4 表型）可扩展性未知；
- **潜因子方向性任意性**：作者指出因子载荷方向不保证生物学解释明确；
- **因果关系未建模**：模型不考虑表型之间的因果依赖；
- **多组学拓展仍待验证**：仅使用 eQTL，未涵盖甲基化或剪接 QTL 等层面；
- **混合数据比重差异可能影响推断**：离散与连续表型混合可能导致参数收敛速度不同。

---

**（完）**
