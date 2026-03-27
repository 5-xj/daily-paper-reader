---
title: Improved chromatin quantitative trait loci mapping withCACTI
title_zh: 利用 CACTI 改进染色质数量性状位点（cQTL）图谱绘制
authors: "Wang, L., Qi, Z., Liu, X."
date: 2026-03-25
pdf: "https://www.biorxiv.org/content/10.1101/2025.06.06.657866v2.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 组蛋白标记的全面cQTL图谱
tldr: "针对染色质定量性状位点（cQTL）检测效能受限及依赖峰值调用的问题，本文提出CACTI方法。该方法利用相邻调控元件间的相关性，在多种组蛋白修饰中识别出的cQTL信号比传统方法多51%-255%。通过与GWAS位点共定位分析，CACTI揭示了大量eQTL无法解释的调控机制，显著提升了复杂性状的功能解释能力。"
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-06-06-657866-v2/fig-001.webp\", \"caption\": \"Figure 2. Performance comparison of CACTI versus standard single-peak–based methods.\", \"page\": 9, \"index\": 1, \"width\": 1020, \"height\": 979}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-06-06-657866-v2/fig-002.webp\", \"caption\": \"Figure 4. Colocalization of GWAS loci of 36 blood related traits and 8 immune diseases with cQTLs versus eQTLs.\", \"page\": 18, \"index\": 2, \"width\": 1020, \"height\": 1208}]"
motivation: 现有的cQTL映射方法由于样本量限制和对峰值调用的依赖，导致检测效能不足且信号丢失。
method: 开发了名为CACTI的新方法，通过整合相邻调控元件之间的相关性信息来优化cQTL的映射过程。
result: "CACTI在多种组蛋白修饰中识别出的信号量提升了51%-255%，并显著增加了与GWAS位点的共定位发现。"
conclusion: CACTI能够揭示eQTL分析难以发现的调控机制，极大地增强了对复杂性状遗传基础的功能解释。
---

## 摘要
绘制染色质数量性状位点（cQTL）图谱对于阐明调控基因表达和复杂性状的机制至关重要。然而，目前的 cQTL 绘图方法检测效能有限，特别是在现有样本量下，且受限于峰值调用（peak-calling）的准确性。为解决这些局限性，我们提出了 CACTI，这是一种通过利用相邻调控元件之间的相关性来改进 cQTL 绘图的新方法。在多种组蛋白修饰（H3K4me1、H3K4me3、H3K27ac、H3K27me3 和 H3K36me3）和细胞类型中，与传统的基于单峰的方法相比，CACTI 识别出的 cQTL 信号增加了 51%-255%。利用 CACTI，我们为多种细胞类型中的五种组蛋白修饰生成了全面的 cQTL 图谱，并对来自 44 种复杂性状的 GWAS 位点进行了共定位分析。CACTI cQTL 与 6%-47% 的 GWAS 位点共定位，在不同修饰中，这比标准 cQTL 绘图方法平均多出 15%-424%。24%-75% 的共定位 GWAS 位点未显示出与 eQTL 的共定位。这突显了 CACTI 揭示调控机制的独特能力，而这些机制仅靠 eQTL 分析是无法检测到的，从而显著提高了对 GWAS 发现的功能解释。

## Abstract
Mapping chromatin quantitative trait loci (cQTLs) is crucial for elucidating the regulatory mechanisms governing gene expression and complex traits. However, current cQTL mapping methods suffer from limited detection power, particularly at existing sample sizes, and are constrained by peak-calling accuracy. To address these limitations, we present CACTI, a novel method that improves cQTL mapping by leveraging correlations between neighboring regulatory elements. Across diverse histone marks (H3K4me1, H3K4me3, H3K27ac, H3K27me3 and H3K36me3) and cell types, CACTI identifies 51%-255% more cQTL signals compared to traditional single-peak-based approaches. Using CACTI, we generate a comprehensive cQTL map for the five histone marks across multiple cell types and perform colocalization analyses with GWAS loci from 44 complex traits. CACTI cQTLs colocalize with 6%-47% of GWAS loci, which is on average 15%-424% more than the standard cQTL mapping method across different marks. 24%-75% of colocalized GWAS loci show no colocalization with eQTLs. This underscores CACTI's unique ability to uncover regulatory mechanisms that would otherwise remain undetected by eQTL analysis alone, significantly improving the functional interpretation of GWAS findings.

---

## 论文详细总结（自动生成）

这是一份关于论文《Improved chromatin quantitative trait loci mapping with CACTI》的结构化总结：

### 1. 核心问题与整体含义（研究动机和背景）
*   **核心问题**：大多数疾病相关的 GWAS 位点位于非编码区，通过 eQTL（表达数量性状位点）仅能解释一小部分遗传力。染色质 QTL（cQTL）能揭示更底层的调控机制，但现有 cQTL 映射方法面临两大挑战：
    1.  **统计效能不足**：受限于表观遗传学实验的高成本，样本量通常较小。
    2.  **峰值调用（Peak-calling）依赖性**：对于分布较宽或信噪比较低的组蛋白修饰（如 H3K36me3），准确定义“峰”非常困难，导致信号丢失。
*   **整体含义**：本文开发了 **CACTI** 方法，旨在通过利用相邻调控元件之间的相关性，在不增加样本量的情况下显著提升 cQTL 的检测效能，并解决宽峰修饰的映射难题。

### 2. 论文提出的方法论
*   **核心思想**：利用三维基因组结构中物理邻近的调控元件往往受共同遗传控制且具有相关性的特点，采用**多变量关联测试**代替传统的单变量测试。
*   **关键技术细节**：
    *   **步骤一：分组（Grouping）**：将固定窗口（默认 50kb）内的相邻峰或片段聚类。
    *   **步骤二：多变量测试（PCO）**：使用基于主成分的综合测试（PC-based Omnibus test, PCO）。该方法将相关的染色质信号分解为正交的主成分（PCs），并结合六种统计测试（如 PCMinP、PCFisher、Wald 等）来捕捉不同遗传架构下的信号。
    *   **CACTI-S（片段版）**：针对宽峰修饰，跳过峰值调用，直接将基因组划分为 5kb 的非重叠片段（Segments）进行映射，从而规避了峰值调用不准带来的偏差。

### 3. 实验设计
*   **数据集**：
    *   **LCL（淋巴母细胞系）**：78 个个体的 ChIP-seq 数据（H3K27ac, H3K4me1, H3K4me3）及 95 个个体的 CUT&TAG 数据（H3K36me3）。
    *   **巨噬细胞**：35 个个体在感染流感病毒前后的四种组蛋白标记数据。
    *   **eGTEx**：脑、心、肺、肌肉等组织的 H3K27ac 数据。
*   **Benchmark（基准）**：传统的基于单峰的单变量映射方法（如 QTLtools）。
*   **对比与验证**：
    *   与 **eQTLGen**（>30,000 样本的血液 eQTL）进行富集分析。
    *   与 **44 种 GWAS 性状**（36 种血液性状，8 种免疫疾病）进行共定位分析。
    *   利用 **ABC maps**（活动-接触图谱）验证增强子-启动子相互作用。

### 4. 资源与算力
*   论文提到计算工作部分在芝加哥大学的**研究计算中心（RCC）**完成。
*   **具体参数**：文中**未明确说明**具体的 GPU/CPU 型号、核心数量或具体的训练/运行总时长。但由于 PCO 测试涉及矩阵运算和主成分分解，其计算效率通常高于大规模置换检验。

### 5. 实验数量与充分性
*   **实验规模**：涵盖了 5 种不同的组蛋白标记、多种细胞类型及 44 种复杂性状，实验设计非常全面。
*   **充分性验证**：
    *   **置换检验（Permutation）**：进行了 10 次独立置换，证明 I 类错误（假阳性）控制良好。
    *   **样本拆分复制（Split-sample replication）**：通过随机拆分样本验证了信号的稳健性。
    *   **敏感性分析**：测试了不同窗口大小（10kb 到 100kb）和窗口起始位置偏移对结果的影响，证明方法具有鲁棒性。
*   **客观性**：通过与大规模 eQTL 数据集对比和功能注释（ChromHMM）富集分析，客观证明了新增信号的生物学真实性。

### 6. 主要结论与发现
*   **效能提升**：CACTI 识别出的 cQTL 信号比传统方法多出 **51% 至 255%**。
*   **GWAS 解释力**：CACTI cQTL 解释了 6%-47% 的 GWAS 位点，比标准方法平均多发现 15%-424% 的共定位信号。
*   **超越 eQTL**：在共定位的 GWAS 位点中，有 **24%-75% 无法被 eQTL 解释**，说明 cQTL 能捕捉到特定细胞状态或“启动（Priming）”阶段的调控效应。
*   **宽峰优势**：CACTI-S 在处理 H3K27me3 等宽峰标记时表现极佳，几乎所有共定位信号都是传统方法无法检测到的。

### 7. 优点
*   **算法鲁棒**：PCO 测试不需要预先假设遗传效应的方向或架构，适应性强。
*   **摆脱依赖**：CACTI-S 解决了表观遗传学中长期存在的“峰值调用难”问题。
*   **功能挖掘**：成功识别出如 *TNFAIP3* 和 *IRF2* 等基因在特定免疫背景下的染色质调控机制，为 GWAS 机制研究提供了新工具。

### 8. 不足与局限
*   **窗口定义**：虽然对窗口大小不敏感，但固定窗口可能无法完美匹配所有动态的顺式调控域（cis-regulatory domains）。
*   **信号归属**：在包含多个峰的窗口中，虽然能确定该区域有 QTL，但具体是哪个峰在起主导作用可能需要结合单变量分析进一步细化。
*   **数据质量敏感**：在信噪比较低的数据集（如 eGTEx 混合组织数据）中，多变量模型的提升效果有限。
*   **因果推断**：共定位并不等同于因果关系，仍需后续实验验证。

（完）
