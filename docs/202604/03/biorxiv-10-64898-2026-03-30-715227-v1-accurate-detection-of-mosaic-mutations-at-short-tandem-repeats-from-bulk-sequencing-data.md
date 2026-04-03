---
title: Accurate detection of mosaic mutations at short tandem repeats from bulk sequencing data
title_zh: 从大体测序数据中准确检测短串联重复序列的嵌合突变
authors: "Wang, W., Li, W., Wang, C., Fan, W., Xia, Y., Yang, X., Chu, C., Dou, Y."
date: 2026-04-01
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.30.715227v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 检测人类基因组短串联重复序列中的突变
tldr: 短串联重复序列（STR）是基因组中极易突变的区域，但由于测序噪声和高度多态性，检测其体细胞嵌合突变极具挑战。本研究开发了BulkMonSTR计算框架，通过结合STR特异性误差建模与机器学习分类，实现了从大体测序数据中精确识别STR嵌合突变（包括插入、缺失和单核苷酸变异）。该工具在模拟和真实数据中均表现出优异的精确度和召回率，为探索STR突变与衰老及疾病的关系提供了有力支持。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-30-715227-v1/fig-001.webp\", \"caption\": \"\", \"page\": 5, \"index\": 1, \"width\": 795, \"height\": 596}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-30-715227-v1/fig-002.webp\", \"caption\": \"\", \"page\": 7, \"index\": 2, \"width\": 1333, \"height\": 337}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-30-715227-v1/fig-003.webp\", \"caption\": \"\", \"page\": 7, \"index\": 3, \"width\": 1333, \"height\": 349}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-30-715227-v1/fig-004.webp\", \"caption\": \"\", \"page\": 10, \"index\": 4, \"width\": 2398, \"height\": 360}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-30-715227-v1/fig-005.webp\", \"caption\": \"\", \"page\": 12, \"index\": 5, \"width\": 1150, \"height\": 727}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-30-715227-v1/fig-006.webp\", \"caption\": \"\", \"page\": 12, \"index\": 6, \"width\": 1254, \"height\": 723}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-30-715227-v1/fig-007.webp\", \"caption\": \"\", \"page\": 12, \"index\": 7, \"width\": 1254, \"height\": 721}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-30-715227-v1/fig-008.webp\", \"caption\": \"\", \"page\": 12, \"index\": 8, \"width\": 1254, \"height\": 718}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-30-715227-v1/fig-009.webp\", \"caption\": \"\", \"page\": 12, \"index\": 9, \"width\": 537, \"height\": 237}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-30-715227-v1/fig-010.webp\", \"caption\": \"\", \"page\": 15, \"index\": 10, \"width\": 1810, \"height\": 494}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-30-715227-v1/fig-011.webp\", \"caption\": \"\", \"page\": 16, \"index\": 11, \"width\": 1110, \"height\": 192}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-30-715227-v1/fig-012.webp\", \"caption\": \"\", \"page\": 16, \"index\": 12, \"width\": 2096, \"height\": 446}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-30-715227-v1/fig-013.webp\", \"caption\": \"\", \"page\": 16, \"index\": 13, \"width\": 1184, \"height\": 188}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-30-715227-v1/fig-014.webp\", \"caption\": \"\", \"page\": 17, \"index\": 14, \"width\": 1992, \"height\": 406}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-30-715227-v1/fig-015.webp\", \"caption\": \"\", \"page\": 17, \"index\": 15, \"width\": 916, \"height\": 248}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-30-715227-v1/fig-016.webp\", \"caption\": \"\", \"page\": 17, \"index\": 16, \"width\": 1972, \"height\": 996}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-30-715227-v1/fig-017.webp\", \"caption\": \"\", \"page\": 18, \"index\": 17, \"width\": 2300, \"height\": 674}]"
motivation: 由于STR区域存在高度多态性和测序噪声，现有技术难以准确区分真实的体细胞嵌合突变与技术伪影。
method: 开发了BulkMonSTR框架，结合STR特异性误差建模与随机森林分类器，支持对插入、缺失及单核苷酸变异的检测。
result: 基准测试显示BulkMonSTR在精确度、F1分数和验证率方面显著优于现有方法，能捕获更广泛的STR突变谱。
conclusion: BulkMonSTR为全基因组范围内系统性研究STR嵌合突变及其在衰老和疾病中的作用提供了高效、可扩展的工具。
---

## 摘要
短串联重复序列 (STR) 是人类基因组中突变率最高的区域之一，但由于在区分真实突变与高度内在多态性及测序噪声方面存在技术挑战，其体细胞嵌合现象仍未得到充分表征。在此，我们介绍了 BulkMonSTR，这是一个结合了 STR 特异性误差建模与机器学习分类的计算框架，能够从大体二代测序数据中准确检测嵌合 STR 突变。BulkMonSTR 可识别核苷酸分辨率的突变——包括插入、缺失和单核苷酸变异 (SNV)——并支持无对照和病例对照研究设计。利用源自家系验证和计算机模拟加标 (in silico spike-in) 的全面训练数据集，我们的随机森林分类器能有效区分真实的嵌合事件与生殖系变异及技术伪影。在模拟和真实数据集上的基准测试表明，BulkMonSTR 在不同覆盖度和变异等位基因频率下均实现了显著提高的精确率和 F1 分数。在正常样本、癌症样本和受控的计算机模拟混合实验中，BulkMonSTR 的表现始终优于现有方法，在实现高验证率的同时，捕获了更广泛的 STR 突变谱——包括发生在非参考等位基因上的突变。通过实现对 STR 嵌合现象的系统性全基因组探究，BulkMonSTR 为研究体细胞 STR 突变对衰老和疾病的贡献提供了可扩展的基础。

## Abstract
Short tandem repeats (STRs) are among the most mutable regions of the human genome, yet their somatic mosaicism remains poorly characterized due to the technical challenges of distinguishing genuine mutations from high intrinsic polymorphism and sequencing noise. Here, we introduce BulkMonSTR, a computational framework that combines STR-specific error modelling with machine-learning classification to enable accurate detection of mosaic STR mutations from bulk next-generation sequencing data. BulkMonSTR identifies nucleotide-resolution mutations--including insertions, deletions, and single-nucleotide variants (SNVs)--and supports both control-independent and case-control study designs. Leveraging a comprehensive training dataset derived from pedigree-based validation and in silico spike-in simulations, our random forest classifier effectively discriminates true mosaic events from germline variants and technical artifacts. Benchmarking on simulated and real datasets demonstrates that BulkMonSTR achieves substantially improved precision and F1 scores across diverse coverages and variant allele frequencies. In normal samples, cancer samples and controlled in silico mixing experiments, BulkMonSTR consistently outperforms existing methods, capturing a broader spectrum of STR mutations--including those arising on non-reference alleles--while achieving high validation rates. By enabling systematic, genome-wide interrogation of STR mosaicism, BulkMonSTR provides a scalable foundation for investigating the contributions of somatic STR mutations to aging and disease.

---

## 论文详细总结（自动生成）

这篇论文介绍了一个名为 **BulkMonSTR** 的计算框架，旨在解决从大体测序（Bulk Sequencing）数据中准确检测短串联重复序列（STR）嵌合突变的难题。以下是对该论文的深度结构化总结：

### 1. 核心问题与研究背景
*   **研究动机**：STR 是基因组中突变率极高的区域（比 SNV 高 100-1000 倍），与基因调控、神经系统疾病及癌症密切相关。
*   **技术挑战**：
    *   **低频信号**：非克隆性嵌合突变的变异等位基因频率（VAF）极低。
    *   **高噪声**：PCR 扩增产生的“口吃”误差（Stutter errors）、测序错误和比对错误极易掩盖真实突变。
    *   **高度多态性**：STR 区域存在复杂的生殖系变异，现有工具往往局限于参考基因组序列，难以区分嵌合突变与生殖系多态性。
*   **整体含义**：BulkMonSTR 通过结合 STR 特异性的误差建模和机器学习，填补了在大体测序数据中系统性、高精度检测 STR 嵌合突变的空白。

### 2. 方法论：核心思想与关键技术
BulkMonSTR 的工作流程分为三个主要阶段：
*   **候选等位基因识别**：
    *   将 STR 视为统一的单倍型单元，提取完全跨越 STR 区域的读段（Spanning reads）。
    *   采用两级过滤：读段级（过滤低质量比对）和等位基因级（利用碱基质量和链偏好性过滤重复出现的错配伪影）。
*   **基于似然的基因分型（核心算法）**：
    *   **Stutter 模型估计**：利用期望最大化（EM）算法，从群体数据中估计每个 STR 位点的特异性 Stutter 误差参数（包括插入/缺失概率及步长分布）。
    *   **嵌合比例推断**：再次使用 EM 算法，在考虑 Stutter 噪声的情况下，迭代估计嵌合比例（$f$）并推断最大似然基因型。
*   **机器学习分类**：
    *   **随机森林（RF）分类器**：整合了 51-60 个特征，包括常规特征（VAF、比对质量、链偏好）和 STR 特异性特征（Stutter 似然值、侧翼错配数等）。
    *   **分类目标**：将候选位点分类为“嵌合突变”、“生殖系杂合变异”或“技术伪影”。

### 3. 实验设计
*   **数据集**：
    *   **GIAB 标准品**：HG002（用于训练）、HG005（用于验证）、HG008（肿瘤-正常配对样本）。
    *   **真实临床数据**：170 例 TCGA 结直肠癌患者的血液样本。
    *   **模拟数据**：使用 BamSurgeon 生成的加标（Spike-in）模拟数据，涵盖不同深度（30x-300x）和 VAF。
*   **对比方法（Benchmark）**：
    *   **无对照模式**：对比 prancSTR（目前唯一的同类工具）。
    *   **病例对照模式**：对比 Mutect2、Strelka2、Lancet、ClairS 和 DeepSomatic。
*   **验证手段**：家系验证（Trio-based）、跨平台验证（Illumina vs. Element Avidity 测序）、读段相位分析（Read-based phasing）。

### 4. 资源与算力
*   **算力说明**：论文中未明确给出具体的 GPU 型号、数量或训练总时长。
*   **软件实现**：BulkMonSTR 使用 Python 编写，代码已在 GitHub 开源。由于其核心算法涉及 EM 迭代和随机森林预测，通常在标准 CPU 集群上即可运行，具有良好的可扩展性。

### 5. 实验数量与充分性
*   **实验规模**：
    *   构建了包含超过 117 万个位点的大规模训练集。
    *   在 170 个真实血液样本中进行了全基因组范围的检测。
    *   进行了多维度的模拟实验，测试了 6 种肿瘤纯度和 6 种测序深度的组合。
*   **充分性评价**：实验设计非常充分且严谨。通过家系数据和跨平台测序数据的交叉验证，极大地提高了结果的可信度。消融实验（如特征重要性分析）和 PCA 分析也证明了其机器学习模型的有效性。

### 6. 主要结论与发现
*   **性能卓越**：BulkMonSTR 的精确度和 F1 分数显著优于 prancSTR，尤其在排除生殖系变异方面表现突出（错误率从 15% 降至 3%）。
*   **全谱检测能力**：能够检测发生在非参考等位基因上的突变（占 Indel 的 15% 以上），并能识别 STR 内部的单核苷酸变异（SNV）。
*   **生物学意义**：在 TCGA 样本中发现 STR 突变符合 COSMIC ID1/ID2 签名（与复制滑动相关），并识别出多个位于编码区和顺式作用元件（cCREs）的功能性突变。

### 7. 优点与亮点
*   **核苷酸级分辨率**：不同于以往仅关注长度变化的工具，BulkMonSTR 能同时处理 Indel 和 SNV。
*   **多态性感知**：通过建模全等位基因池，能够捕捉复杂背景下的突变，不依赖于参考基因组。
*   **高验证率**：在病例对照模式下，其敏感性比传统小变异调用工具高出约 5 倍，且保持了极高的验证率。

### 8. 不足与局限
*   **平台依赖性**：模型主要基于 Illumina 短读段数据训练。虽然在 Element 平台上表现良好，但对于长读段（PacBio/ONT）数据的支持尚需进一步优化。
*   **训练集偏差**：尽管使用了模拟数据，但真实的、经过金标准验证的 STR 嵌合突变样本量仍然有限，可能存在一定的模型过拟合风险。
*   **复杂区域限制**：对于极长或位于高度重复区域（如节段重复区）的 STR，短读段测序本身的比对局限性仍会限制检测能力。

（完）
