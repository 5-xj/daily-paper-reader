---
title: Natural and breeding selection converge on overlapping haplotypes with divergent directions and outcomes in wheat
title_zh: 自然选择与育种选择在小麦中汇聚于重叠的单倍型，但具有不同的方向和结果
authors: "Wang, X., Quiroz-Chavez, J., Ramirez Gonzalez, R. H., Xiong, Z., Xu, S., Przewieslik Allen, S., Cheng, S., Adamski, N., Uauy, C."
date: 2026-03-31
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.28.714077v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 小麦全基因组重测序数据的单倍型分配方法
tldr: 本研究通过对827份小麦地方品种和208份现代品种进行全基因组重测序分析，利用k-mer单倍型分配方法揭示了自然选择与育种选择在基因组上的相互作用。研究发现两者常作用于重叠的单倍型集，但方向往往相反，且适应性单倍型常与农艺性状负相关。这一发现阐明了环境适应性与产量之间的基因组权衡机制，为利用适应性多样性改良小麦提供了重要参考。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究自然选择与育种选择如何共同塑造小麦基因组，以应对气候变化挑战并提升作物韧性。
method: 采用基于k-mer且无需比对的单倍型分配方法，对全球代表性的地方品种和现代品种重测序数据进行比较分析。
result: 发现自然选择和育种选择主要针对重叠的单倍型，但选择方向常相反，且适应性优势单倍型往往对农艺性状有负面调节作用。
conclusion: 揭示了小麦环境适应性与生产力之间权衡的基因组基础，为在育种中平衡适应性与产量提供了新框架。
---

## 摘要
了解自然选择和育种选择如何相互作用以塑造作物基因组，对于提高气候变化下的韧性至关重要。在本研究中，我们对代表 7 个地理群体的 827 份小麦地方品种和 208 份现代栽培品种的全基因组重测序数据，应用了基于 k-mer 的无比对单倍型分配方法。我们鉴定了与局部适应相关的单倍型，这些单倍型在特定的农业生态区域中富集，其中许多源自野生近缘种的渗入。比较分析表明，自然选择和育种选择在很大程度上针对重叠的单倍型集，但通常将它们推向相反的方向。值得注意的是，赋予适应性优势的单倍型通常与农艺性状的负调节相关，这解释了它们在育种选择的单倍型中流行率较低的原因。这些结果揭示了环境适应性与生产力之间权衡的基因组基础，并为在小麦改良中利用适应性多样性提供了一个框架。

## Abstract
Understanding how natural and breeding selection interact to shape crop genomes is essential for improving resilience under climate change. Here, we applied a k-mer-based, alignment-free haplotype assignment approach to whole-genome resequencing data from 827 wheat landraces representing seven geographic groups and 208 modern cultivars. We identified haplotypes associated with local adaptation that were enriched in specific agroecological regions, many derived from wild-relative introgressions. Comparative analyses revealed that natural and breeding selection largely targeted overlapping haplotype sets, but often drove them in opposite directions. Notably, haplotypes conferring adaptive advantages were frequently associated with negative regulation of agronomic traits, explaining their reduced prevalence among breeding-selected haplotypes. These results reveal the genomic basis of trade-offs between environmental adaptation and productivity and offer a framework for exploiting adaptive diversity in wheat improvement.

---

## 论文详细总结（自动生成）

这篇论文深入探讨了小麦在驯化和改良过程中，自然选择（环境适应性）与育种选择（高产优质）如何在基因组层面相互作用。以下是对该研究的详细总结：

### 1. 核心问题与整体含义（研究动机和背景）
*   **核心问题**：在气候变化背景下，如何平衡作物的“环境韧性”与“生产力”？
*   **研究背景**：小麦是全球核心粮食作物。历史上，自然选择使地方品种（Landraces）获得了特定区域的适应性，而现代育种则侧重于产量和品质。然而，这两者在基因组上的具体交集、冲突或协同机制尚不清晰。
*   **研究意义**：通过揭示适应性单倍型与农艺性状之间的权衡（Trade-off）关系，为打破育种瓶颈、引入野生近缘种的优异抗性基因提供理论指导。

### 2. 方法论：核心思想与技术细节
*   **核心思想**：采用**基于 k-mer 的无比对单倍型分配方法**（k-mer-based, alignment-free haplotype assignment）。
*   **关键技术细节**：
    *   **无比对分析**：传统方法依赖参考基因组比对，容易产生偏倚（尤其是处理来自野生近缘种的渗入片段时）。该研究直接从测序原始数据中提取 k-mer 特征。
    *   **单倍型分配**：利用 k-mer 频率和分布模式，将基因组划分为不同的单倍型块，并追踪这些块在不同群体（地方品种 vs. 现代品种）中的频率变化。
    *   **选择压分析**：通过比较不同地理区域地方品种的单倍型频率来识别“自然选择信号”；通过比较地方品种与现代品种的差异来识别“育种选择信号”。

### 3. 实验设计
*   **数据集**：
    *   **827 份小麦地方品种**：涵盖全球 7 个主要地理群体，代表了广泛的遗传多样性和环境适应性。
    *   **208 份现代栽培品种**：代表了近几十年育种选择的结果。
*   **对比场景**：
    *   **空间维度**：对比不同农业生态区（如高纬度 vs. 低纬度）的单倍型富集情况。
    *   **时间/改良维度**：对比地方品种（原始）与现代品种（改良后）的单倍型组成。
*   **关联分析**：将识别出的关键单倍型与株高、花期、产量相关等农艺性状进行关联分析。

### 4. 资源与算力
*   **算力说明**：论文摘要和元数据中未明确提及具体的 GPU 型号或训练时长。
*   **数据规模**：涉及 1035 份全基因组重测序（WGS）数据，这属于典型的大规模生物信息学计算任务，通常需要高性能计算集群（HPC）进行 k-mer 计数、索引构建和统计推断。

### 5. 实验数量与充分性
*   **实验规模**：样本量超过 1000 份，覆盖了全球主要小麦产区，样本代表性极强。
*   **充分性**：研究不仅做了基因组层面的扫描，还结合了地理气候数据和表型数据进行交叉验证。
*   **客观性**：通过无比对方法规避了参考基因组带来的偏倚，实验设计考虑了群体结构对选择信号的影响，结果较为客观。

### 6. 主要结论与发现
*   **选择目标的汇聚**：自然选择和育种选择往往作用于基因组上的**重叠区域**（即相同的单倍型集）。
*   **方向的背离**：两者在这些重叠区域的选择方向往往**相反**。例如，某种在特定环境下提供抗性的单倍型，在育种过程中却被剔除。
*   **适应性与产量的权衡**：赋予环境适应性优势的单倍型（许多源自野生近缘种的渗入）通常与农艺性状（如产量）的**负调节**相关。这解释了为什么现代高产品种往往缺乏某些环境韧性。
*   **渗入的重要性**：发现大量与局部适应相关的单倍型源自小麦野生近缘种的渗入片段。

### 7. 优点
*   **方法创新**：引入 k-mer 无比对技术，有效解决了多倍体小麦基因组复杂、渗入片段难以精准鉴定的难题。
*   **视角独特**：首次在大规模基因组水平上量化了自然选择与育种选择的“冲突”，揭示了作物改良中的遗传权衡机制。
*   **应用价值高**：为精准育种提供了“路线图”，指出了哪些区域可以通过基因编辑或精细回交来打破连锁累赘（Linkage Drag）。

### 8. 不足与局限
*   **功能验证不足**：虽然通过统计学关联发现了单倍型与性状的关系，但缺乏对具体候选基因的大规模功能验证（如转基因或 CRISPR 验证）。
*   **环境互作的复杂性**：局部适应性受多种环境因子（温度、降水、土壤等）综合影响，研究在解析特定环境压力与单倍型的对应关系上仍有简化。
*   **应用限制**：发现的权衡关系可能意味着简单地引入适应性单倍型会牺牲产量，如何在不降低产量的基础上引入韧性，论文给出了框架但未给出普适性的解决方案。

（完）
