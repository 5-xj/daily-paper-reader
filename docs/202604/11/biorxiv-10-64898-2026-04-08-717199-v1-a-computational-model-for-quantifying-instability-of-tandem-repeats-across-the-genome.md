---
title: A computational model for quantifying instability of tandem repeats across the genome
title_zh: 一种用于量化基因组范围内串联重复不稳定性的计算模型
authors: "Dolzhenko, E., English, A., Mokveld, T., de Sena Brandine, G., Kronenberg, Z., Wright, G., Drogemoller, B., Rowell, W. J., Wenger, A. M., Bennett, M. F., Weisburd, B., Erwin, G. S., Jin, P., Nelson, D. L., Dashnow, H., Sedlazeck, F., Eberle, M. A."
date: 2026-04-10
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.08.717199v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 量化全基因组串联重复序列不稳定性的计算模型
tldr: 本研究针对基因组中普遍存在的串联重复不稳定性问题，开发了一个可适用于复杂位点的通用计算模型，通过长读测序数据量化每个位点的等位基因不稳定性；实验表明该模型能准确解析全基因组TR不稳定特征并识别出异常不稳定重复，为重复扩增疾病研究提供新工具。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-08-717199-v1/fig-001.webp\", \"caption\": \"Figure 1: Overview of tandem repeat instability profiling. (A) Definition of a tandem repeat locus. (B) A cohort of HiFi samples was used to estimate baseline repeat instability. (C) For each locus, TRGT identifies the full-length consensus sequence of each repeat allele together with the reads supporting that allele. (D) For each supporting read, a divergence rate is computed as the length-normalized edit distance to the consensus allele sequence, then these read-level rates are binned to generate an allele instability profile. (E) Instability profiles are collected for all alleles of the repeat across the cohort. (F) A Dirichlet-multinomial model is fitted to these allele instability profiles to capture the baseline instability distribution of the repeat. (G) Instability of a query allele is assessed by comparing its profile to the fitted repeat-specific model.\", \"page\": 4, \"index\": 1, \"width\": 984, \"height\": 471}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-08-717199-v1/fig-002.webp\", \"caption\": \"Figure 2: Repeat instability across HPRC. (A) Spearman correlation between repeat purity and instability rate stratified by motif length. (B) Distribution of repeat instability rates stratified by the mean repeat lengths. (C) Histogram of mean spans of perfect repeat tracts identified in repeat alleles in our catalog. (D) Mean repeat purity stratified by mean repeat length.\", \"page\": 5, \"index\": 2, \"width\": 984, \"height\": 640}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-08-717199-v1/fig-003.webp\", \"caption\": \"Figure 3: Repeat instability across pathogenic tandem repeats (A) Instability rates of known pathogenic repeats. Fitted mean allele instability profiles for (B) PRNP, (C) DMPK, and (D) FMR1 repeats.\", \"page\": 6, \"index\": 3, \"width\": 976, \"height\": 623}]"
motivation: 串联重复在基因组中表现出高度体细胞嵌合性，但缺乏一种可在全基因组范围内稳健量化其不稳定性的计算框架。
method: 研究提出了一个通用模型，通过分析每个位点的读段与共识序列偏差分布来量化长读测序数据中的串联重复不稳定性。
result: "模型在256个HPRC样本的617,007个TR位点上拟合良好，揭示不稳定性水平受重复组成的影响大于重复长度，并成功检测到已知病理性重复的嵌合现象。"
conclusion: 该模型为全基因组范围内定量分析和检测异常不稳定串联重复提供了实用的新方法。
---

## 摘要
串联重复（Tandem repeats, TRs）表现出高度的体细胞嵌合性，而这种现象越来越被认为是影响重复扩增相关疾病的重要调节因子。长读长测序能够捕获全长重复等位基因，但目前仍缺乏可在全基因组范围内稳健量化TR不稳定性的框架。本研究提出了一种通用模型，可在给定的长读长测序数据集中量化TR不稳定性，无需明确区分生物学嵌合性与技术噪声，且适用于简单和结构复杂的位点。该模型通过表征每个等位基因的reads到共识序列偏差分布，精确刻画了每个TR位点的等位基因不稳定性。我们使用来自256个HPRC细胞系样本的HiFi测序数据，对617,007个TR位点（包括已知致病重复序列）进行了模型拟合。结果显示，总体上不稳定性水平较低，但在不同TR之间变化显著，并且更受重复序列组成的影响，而非整体重复长度。此外，我们将该方法应用于具有已知重复扩增的样本的PureTarget长读长数据，发现大多数扩增等位基因存在显著的嵌合性。我们的模型为量化基因组范围内串联重复的不稳定性以及检测异常不稳定的重复等位基因提供了一种实用方法。

## Abstract
Tandem repeats (TRs) exhibit high levels of somatic mosaicism, which is increasingly recognized as an important modifier of repeat expansion disorders. Long-read sequencing can capture full-length repeat alleles, yet robust frameworks for quantifying instability across TRs genome-wide are still needed. Here, we introduce a general-purpose model for quantifying TR instability in a given long-read sequencing dataset, without explicitly distinguishing biological mosaicism from technical noise, and which is broadly applicable to both simple and structurally complex loci. This model accurately characterizes allelic instability at each TR locus by representing the distribution of read-to-consensus deviations for each allele. Using HiFi sequencing data from 256 HPRC cell line samples, we fitted models for 617,007 TR loci, including known pathogenic repeats. We observe that instability levels are generally low, but vary substantially across individual TRs, and are driven more strongly by repeat composition than overall repeat length. Furthermore, we applied our method to targeted PureTarget long-read data from samples with known repeat expansions and identified significant mosaicism in the majority of expanded alleles. Our model offers a practical way to quantify instability of tandem repeats across the genome and to detect unusually unstable repeat alleles.

---

## 论文详细总结（自动生成）

# 《一种用于量化基因组范围内串联重复不稳定性的计算模型》论文总结

---

## 1. 研究背景与核心问题

- **研究动机**  
  串联重复（Tandem repeats, TRs）是基因组中广泛存在的重复序列单元，长度和序列复制次数在个体之间以及体细胞之间常有差异。部分 TR 的扩增与多种遗传疾病（如神经退行性疾病）密切相关。  
- **核心问题**  
  尽管长读长测序技术（如 PacBio HiFi）能捕获全长重复等位基因，但目前缺乏一种稳健、通用的计算模型，可在全基因组范围内量化每个 TR 位点的不稳定性——即测量其等位基因序列在群体与细胞层面的可变性。  
- **研究意义**  
  本研究提出的计算框架旨在统一刻画 TR 的“基线不稳定性”水平，为研究重复扩增疾病、体细胞嵌合性机制以及测序噪声区分提供工具。

---

## 2. 方法论：模型与算法流程

- **总体思想**  
  利用长读测序数据中 reads 与每个等位基因的共识序列（consensus sequence）之间的差异分布来量化其不稳定性。模型无需区分真实的生物学变异与测序产生的技术噪声，而是引入统计模型捕捉“总体偏差分布”。

- **关键步骤：**
  1. **TR 位点识别与等位基因构建：**  
     利用工具 TRGT（Tandem Repeat Genotyping Tool）在测序数据中识别 TR 区，并提取每个等位基因及其支持的所有 reads。
  2. **读取偏差计算：**  
     对每个支持 read，计算其与共识序列的归一化编辑距离（edit distance / length），作为该 read 对应的“偏差率”。
  3. **等位基因不稳定性分布：**  
     将一组 reads 的偏差率进行分箱（binning），得到等位基因的不稳定性分布曲线。
  4. **群体级模型拟合：**  
     从多个样本中收集同一 TR 位点的所有等位基因不稳定性分布，通过 **Dirichlet–Multinomial 模型** 拟合每个位点的基线不稳定性。这一模型可以捕捉不同 TR 的特征性波动pattern。
  5. **新样本不稳定性检测：**  
     对待检样本的等位基因分布进行对比，计算偏离已拟合模型的程度，从而判定哪些 TR 表现出“异常不稳定”特征。

- **输出结果：**  
  对每个 TR 位点给出估计的不稳定性参数、显著性统计量及可视化分布。

---

## 3. 实验设计

- **数据集与样本来源：**
  - 使用 **HPRC（Human Pangenome Reference Consortium）** 的 256 个细胞系样本。
  - 测序平台为 **PacBio HiFi long-read sequencing**。
  - 共分析 **617,007 个 TR 位点**，覆盖整个人类基因组。
  - 在部分实验中，额外使用 **PureTarget** 定向长读测序数据集，以验证在致病性扩增位点（如 *FMR1*、*DMPK*、*PRNP* 等）上的模型表现。

- **对比或参照方法：**
  - 未与特定竞品算法（如 ExpansionHunter 或 STRetch）直接比较，而是以模型内部统计特征（如重复长度、纯度、motif 组成）之间的相关性作为 benchmark。
  - 重点评估与 **repeat purity（重复单元一致性）**、**motif 长度**、**重复长度** 的相关性。

- **性能指标：**
  - TR 不稳定性分布的 Spearman 相关系数。
  - 模型拟合优度与生物学合理性分析。
  - 致病性重复的异常检测准确性。

---

## 4. 计算资源与算力说明

- 文中未明确描述计算资源配置。  
- 由于分析规模为 256 样本 × 617,007 位点，推测模型拟合依赖高性能多核 CPU 环境（可能为 HPC 级服务器），但未报告 GPU 使用或训练时长。  
- 假设分析主要以统计建模与数据挖掘为主，而非深度学习训练，因此 GPU 计算需求有限。

---

## 5. 实验数量与充分性

- **实验内容：**
  - 全基因组 TR 分布统计；
  - 不同 motif 长度与序列纯度对不稳定性的影响；
  - 致病性位点（如 *FMR1*, *C9orf72*, *PRNP* 等）的不稳定性剖析；
  - 模型对个体级与群体级不稳定性差异的拟合评估。
- **实验层次：**
  - **全基因组层面**：数十万 TR 位点；
  - **位点特异层面**：若干已知病理位点；
  - **参数层面**：涉及多维统计拟合（Dirichlet–Multinomial）。
- **充分性评估：**
  - 在样本数量与位点覆盖方面已非常充分；
  - 缺少与现有方法的量化对比，但内部验证较为系统；
  - 未报告跨物种验证或个体间变异稳定性测试。

---

## 6. 主要结论与发现

- **全局结论：**
  - 大多数 TR 位点在群体层面表现出低不稳定性；
  - TR 不稳定性变化主要由 **重复序列组成（purity、motif complexity）** 驱动，而非重复长度本身；
  - TR 在某些致病性区域表现出显著偏高的不稳定性和体细胞嵌合性；
  - 模型可精确识别异常扩增的 TR，并刻画其群体分布特征。
- **重要发现：**
  - 基线不稳定性可作为新的基因组特征，用于辅助识别潜在病理性重复区域；
  - Dirichlet–Multinomial 框架适用于建模不同层级的测序误差和真实嵌合性。

---

## 7. 方法优点与创新点

- **通用性强：**  
  模型不依赖特定重复结构，可处理复杂和非典型 TR。
- **无需人工区分“噪声”与“生物变异”：**  
  通过统计建模自动吸收测序偏差。
- **长读长数据适配性好：**  
  充分利用 HiFi 测序覆盖的长重复区。
- **高通量可扩展性：**  
  可同时量化数十万个位点的基线不稳定性。
- **为疾病研究奠定基础：**  
  能揭示体细胞层面的重复变异模式。

---

## 8. 局限与不足

- **缺乏直接对比实验：**  
  未系统比较现有工具（如 ExpansionHunter、GangSTR）在同一数据集上的性能。
- **计算消耗未知：**  
  未报告建模的时间与资源需求，实际可扩展性有待量化验证。
- **生物学验证有限：**  
  仅以统计指标为主，缺乏湿实验或功能学验证。
- **模型假设受限：**  
  Dirichlet–Multinomial 模型假设读段偏差服从平滑分布，可能不足以描述极端扩增或重复折叠结构。
- **群体异质性考虑不足：**  
  仅基于 HPRC 细胞系样本，未包含实际组织样本或多样性人群。

---

**（完）**
