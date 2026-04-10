---
title: "GMIP-PLSR: A Nextflow Pipeline for GWAS and Multi-Omics Integration in Gene Prioritization Using PLSR"
title_zh: GMIP-PLSR：一种基于 Nextflow 的 GWAS 与多组学整合基因优先排序流程，采用偏最小二乘回归（PLSR）方法
authors: "Kanchwala, M. S., Xing, C., Xuan, Z."
date: 2026-04-09
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.06.716845v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 用于基因优先级排序的GWAS与多组学整合流程
tldr: 本研究开发了GMIP-PLSR，一种基于Nextflow的可扩展GWAS与多组学整合管道，通过引入PLSR解决PoPS的多重共线性问题，提升了基因优先排序的准确性，在NAFLD案例中验证了其性能优越。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-06-716845-v1/fig-001.webp\", \"caption\": \"Figure 3: Tau Score Comparison Across Different Methods for various GWAS\", \"page\": 25, \"index\": 1, \"width\": 1019, \"height\": 747}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-06-716845-v1/fig-002.webp\", \"caption\": \"Figure 5: Comparison of GMIP and PoPS with Hyperparameter Optimization\", \"page\": 30, \"index\": 2, \"width\": 926, \"height\": 1233}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-06-716845-v1/fig-003.webp\", \"caption\": \"Figure 7: Overlap of NAFLD GWAS and Re-prioritization Gene Lists\", \"page\": 33, \"index\": 3, \"width\": 702, \"height\": 543}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-06-716845-v1/fig-004.webp\", \"caption\": \"Figure 8: Pathway Enrichment Analysis of NAFLD Gene Lists\", \"page\": 35, \"index\": 4, \"width\": 979, \"height\": 1293}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-06-716845-v1/fig-005.webp\", \"caption\": \"Figure 2: Condition Index (CI) distribution for features selected by marginal OLS\", \"page\": 23, \"index\": 5, \"width\": 964, \"height\": 533}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-06-716845-v1/fig-006.webp\", \"caption\": \"Table 1: Results of GMIP evaluation for various traits\", \"page\": 28, \"index\": 6, \"width\": 974, \"height\": 1293}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-06-716845-v1/fig-007.webp\", \"caption\": \"Figure 1: Overview of GMIP Framework\", \"page\": 19, \"index\": 7, \"width\": 574, \"height\": 765}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-06-716845-v1/fig-008.webp\", \"caption\": \"Figure 6: Comparison of Normalized Tau Scores Between PoPS and GMIP-PLSR\", \"page\": 32, \"index\": 8, \"width\": 958, \"height\": 768}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-06-716845-v1/fig-009.webp\", \"caption\": \"Figure 4: Heritability of Different GWAS Traits\", \"page\": 27, \"index\": 9, \"width\": 926, \"height\": 545}]"
motivation: 为克服GWAS在因果基因识别和通路解释上的局限，并解决PoPS方法的多重共线性问题。
method: 提出了GMIP-PLSR管道，利用偏最小二乘回归（PLSR）整合GWAS与多组学数据以改善基因优先排序。
result: GMIP-PLSR在多个GWAS数据集中表现优于PoPS，并在NAFLD的研究中识别出具有更高遗传力和已知通路富集的基因集。
conclusion: GMIP-PLSR为后GWAS分析提供了高效、稳健、可扩展的基因再优先化解决方案。
---

## 摘要
全基因组关联研究（GWAS）极大地推动了我们对复杂性状和疾病的理解，但其解释能力仍受限于识别因果基因和通路的挑战。将 GWAS 与多组学数据（如基因表达、蛋白质互作及基因-通路网络）相结合，有望增强生物学洞察并改进基因优先排序。为满足这一潜力与需求，我们开发了 GWAS 与多组学整合流程（GMIP），这是一个灵活且可扩展的框架，整合了 PoPS、MAGMA 和 benchmarker 等常用工具，以丰富 GWAS 结果。然而，PoPS 在特征中存在多重共线性问题，可能影响性能。为克服这一问题，我们提出了 GMIP-PLSR，这是 GMIP 的扩展版本，使用偏最小二乘回归（PLSR）有效管理多重共线性。我们将 GMIP-PLSR 应用于多个 GWAS 数据集，结果显示其在大多数情况下优于 PoPS。在非酒精性脂肪肝病（NAFLD）的案例研究中，GMIP-PLSR 结合疾病特异性的 scRNA-seq 特征和通用 PoPS 特征，识别出遗传力更高、在已知 NAFLD 通路中富集程度更强的基因集，从而验证了其增强 GWAS 发现的能力。GMIP 基于 Nextflow 构建，具备计算高效、适应性强的特点，能在不同研究环境中提供稳健的基因再优先化解决方案。GMIP-PLSR 可在 https://github.com/mohammedmsk/GMIP 获取。

## Abstract
Genome-wide association studies (GWAS) have significantly advanced our understanding of complex traits and diseases, but their interpretive power remains limited due to challenges in identifying causal genes and pathways. Integrating GWAS with multi-omics data - such as gene expression, protein-protein interactions, and gene-pathway networks have the potential to enhance biological insights and improve gene prioritization. To fulfill this potential and need, we developed the GWAS & Multi-omics Integration Pipeline (GMIP), a flexible and scalable framework that incorporates widely used tools such as PoPS, MAGMA, and benchmarker to enrich GWAS findings. However, PoPS suffers from multicollinearity in its features, which can impact performance. To overcome this, we introduce GMIP-PLSR, an extension of GMIP that uses Partial Least Squares Regression (PLSR) to manage multicollinearity effectively. We applied GMIP-PLSR across multiple GWAS datasets, demonstrating superior performance over PoPS in most cases. In a case study on NAFLD, GMIP-PLSR, using features derived from both disease-specific scRNA-seq and general PoPS features, identified gene sets with higher heritability and stronger enrichment in known NAFLD pathways, confirming its ability to enhance GWAS findings. Built on Nextflow, GMIP is computationally efficient, adaptable to diverse research environments, and provides a robust solution for gene reprioritization in post-GWAS analyses. GMIP-PLSR is available at https://github.com/mohammedmsk/GMIP.

---

## 论文详细总结（自动生成）

# GMIP-PLSR：一种基于 Nextflow 的 GWAS 与多组学整合基因优先排序流程

---

## 一、核心问题与研究背景

- **研究动机**：  
  全基因组关联研究（GWAS）虽然揭示了大量与复杂疾病相关的遗传信号，但在因果基因识别和通路解释方面仍存在显著局限。GWAS 通常停留在统计层面，而缺乏生物学可解释性。  

- **研究挑战**：  
  传统的后 GWAS 基因优先排序方法（如 PoPS）在整合多组学特征时面临多重共线性问题，这会导致特征权重不稳定，从而降低预测准确度。

- **研究意义**：  
  作者旨在开发一套能够高效整合 GWAS 与多组学数据的自动化管道，通过解决特征共线性问题，实现更稳健、可扩展的基因再优先化，从而提升疾病机制研究和靶点发现的可靠性。

---

## 二、方法论：GMIP-PLSR 核心思想与流程

- **总体框架**：  
  GMIP-PLSR 基于 Nextflow 实现，是扩展自 GMIP（GWAS & Multi-Omics Integration Pipeline）的变体，专注于引入偏最小二乘回归（PLSR）来解决 PoPS 的多重共线性问题。

- **核心思想**：  
  利用 PLSR 将高维、多重共线性的特征空间投影到低维潜变量空间，既保持特征间的主要变异信息，又提高模型稳定性。

- **关键技术结构**：
  1. **输入模块**：接收 GWAS summary statistics、基因表达数据、蛋白互作网络数据、通路注释、scRNA-seq 等。
  2. **特征整合模块**：通过标准化和降维组合多组学特征，与 GWAS 映射的基因集合对齐。
  3. **偏最小二乘回归模型**：
     - 建立基因得分 \( y_i \) 与特征矩阵 \( X \) 的映射：  
       \[
       y_i = \sum_{k} w_k t_{ik} + \epsilon
       \]
       其中 \( t_k \) 为 PLSR 提取的潜变量，\( w_k \) 为对应权重系数。
     - 使用交叉验证确定最佳潜变量数量，确保稳健性。
  4. **结果输出模块**：生成基因优先级列表，并提供通路富集与特征重要性分析结果。

- **与 PoPS 的差异**：  
  PoPS 使用 OLS 模型，易受多重共线性影响；GMIP-PLSR 通过 PLSR 特征压缩与正则化显著减轻该问题，从而提高性能。

- **软件实现**：  
  Nextflow 使 GMIP-PLSR 模块化、并行化，支持多环境部署与 reproducibility。

---

## 三、实验设计与对照方案

- **数据集与场景**：
  - 多个 GWAS 数据集，包括代谢性状、免疫性疾病、心血管疾病等。
  - 案例研究聚焦于 **非酒精性脂肪肝病（NAFLD）**，结合疾病特异性 scRNA-seq 特征。

- **对照方法**：
  - 与 **PoPS**（基于 OLS 的特征整合模型）主要对比。
  - 参考了 **MAGMA** 和 **benchmarker** 工具的结果用于验证。

- **评估指标**：
  - Tau score 比较（不同方法间的基因相关性度量）。
  - 基因遗传力与通路富集分析。
  - 超参数优化后性能比较（见 Figure 5）。

---

## 四、资源与算力使用情况

- 论文未提及具体的算力配置。  
  没有说明使用的 GPU 或 CPU 型号、节点数量及运行时长。  
  可推测由于 Nextflow 管道的模块化特性，计算需求主要来自多组学特征整理与 PLSR 拟合阶段，属于中等复杂度。

---

## 五、实验数量与充分性

- **实验覆盖度**：
  - 多个 GWAS 数据集横向比较（如 Figure 3、4、6、7 所示）。
  - NAFLD 案例中的通路富集和遗传力分析验证（Figures 7–8）。
  - 特征条件指数（Condition Index, CI）评估（Figure 2）展示模型稳健性。
  
- **实验充分性与公平性**：
  - 设计包含跨数据集验证与疾病特异性分析，覆盖度较广；
  - 对比方法均为当前业内通用方案（PoPS、MAGMA），实验具有客观性；
  - 然而未见消融实验细节（例如特征来源权重或参数敏感性分析），略有不足。

---

## 六、主要结论与发现

- GMIP-PLSR 减轻了多重共线性带来的模型不稳定问题，提升了基因优先排序的准确性。
- 在 NAFLD 案例中，识别出的基因集具备更高的遗传力，并显著富集于已知的疾病相关通路。
- GMIP 框架可在不同研究环境下复用与扩展，具有高计算效率与可伸缩性。
- 整个流程的结果表明：PLSR 是后 GWAS 多组学整合分析中一种有效的特征建模策略。

---

## 七、优点与亮点

- ✅ **创新性**：首次将 PLSR 引入基因优先排序的多组学整合流程。
- ✅ **稳健性**：成功针对 PoPS 的共线性问题提出有效改进，提高模型可解释性。
- ✅ **可扩展性**：基于 Nextflow，可跨平台运行并支持自动化分析。
- ✅ **实践价值**：在 NAFLD 及其他复杂性状分析中展现出优于传统方法的性能。

---

## 八、不足与局限

- ⚠️ **算力信息缺失**：未说明具体硬件与计算成本，影响复现性评估。
- ⚠️ **缺乏消融实验**：未系统检验不同特征来源或 PLSR 参数对性能的影响。
- ⚠️ **应用范围限制**：验证集中于部分 GWAS 数据集，尚需扩展至更多复杂疾病。
- ⚠️ **结果可解释性**：相较于简单线性特征模型，PLSR 的潜变量解释仍需形象化方法来增强理解。

---

（完）
