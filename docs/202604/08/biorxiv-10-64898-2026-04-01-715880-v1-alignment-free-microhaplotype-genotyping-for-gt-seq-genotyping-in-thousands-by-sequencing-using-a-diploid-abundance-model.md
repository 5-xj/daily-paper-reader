---
title: Alignment-Free Microhaplotype Genotyping for GT-seq (Genotyping-in-Thousands by Sequencing) Using a Diploid Abundance Model
title_zh: 基于二倍体丰度模型的 GT-seq（通过测序实现成千上万基因分型）无比对微单倍型基因分型方法
authors: "Campbell, N. R., Campbell, A. R., Blair, S. K., Finger, A. J."
date: 2026-04-03
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.01.715880v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 无比对微单倍型基因分型
tldr: 本文提出一种无需序列比对的微单倍型分型方法，用于改进GT-seq高通量扩增子测序分析。该方法利用Illumina与Element测序的高深度和低误差特性，通过双端读段拼接、丰度排序选取候选等位基因、建立单倍型目录并精确匹配读段，实现快速、准确的微单倍型分型。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715880-v1/fig-001.webp\", \"caption\": \"Figure 3:\", \"page\": 22, \"index\": 1, \"width\": 937, \"height\": 429}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715880-v1/fig-002.webp\", \"caption\": \"Figure 4:\", \"page\": 24, \"index\": 2, \"width\": 651, \"height\": 858}]"
motivation: 现有GT-seq分析流程主要针对单个SNP或依赖比对，限制了微单倍型的准确推断。
method: 通过识别引物界定的双端读段，聚合高丰度序列构建等位基因目录并进行精确匹配得到双倍型分型。
result: 该方法实现了高通量无比对的微单倍型推断，生成适用于群体遗传分析的紧凑表示。
conclusion: 该研究提出的无比对微单倍型基因分型方法能有效提升GT-seq分析效率和准确性。
---

## 摘要
GT-seq（通过测序实现成千上万基因分型）广泛应用于高通量扩增子分型，但大多数分析流程集中于单个 SNP 或依赖于比对的变异检测。在此，我们提出一种无比对的微单倍型基因分型方法，利用双端 Illumina 和 Element 测序通常具有的高读长深度和低错误率。该流程首先识别由引物界定的读段，并将双端序列解析为完整的扩增子序列。在每个样本和位点内，根据读段丰度对唯一序列进行排序，并保留排名前一或前二的序列作为候选二倍体等位基因。这些等位基因被跨样本聚合，用于构建每个位点的唯一单倍型目录。在第二步中，通过精确序列匹配将读段分配到目录单倍型上，从而生成二倍体基因型。最后，对目录单倍型序列进行位置比较，以识别相位化 SNP 和合并的插入缺失变异，生成适用于群体遗传分析的紧凑微单倍型表示。该方法能够直接从高深度扩增子测序数据中实现稳健的、无比对的微单倍型推断。

## Abstract
GT-seq (Genotyping-in-Thousands by Sequencing) is widely used for high-throughput amplicon genotyping, but most analytical pipelines focus on single SNPs or rely on alignment-based variant calling. Here we present an alignment-free approach for microhaplotype genotyping that leverages the high read depth and low error rates typical of paired-end Illumina and Element sequencing. The pipeline first identifies primer-bounded reads and resolves paired-end sequences into complete amplicon sequences. Within each sample and locus, unique sequences are ranked by read abundance and the top one or two sequences are retained as candidate diploid alleles. These alleles are aggregated across samples to construct a catalog of unique haplotypes for each locus. In a second pass, reads are assigned to catalog haplotypes by exact sequence matching to produce diploid genotypes. Finally, catalog haplotype sequences are positionally compared to identify phased SNP and collapsed indel variation, generating compact microhaplotype representations suitable for population genetic analysis. This approach enables robust, alignment-free microhaplotype inference directly from high-depth amplicon sequencing data.

---

## 论文详细总结（自动生成）

# 基于二倍体丰度模型的 GT-seq 无比对微单倍型基因分型方法 —— 深度总结  

---

## 一、研究背景与核心问题  

- **研究动机**：  
  当前 GT-seq（Genotyping-in-Thousands by Sequencing）是一种高通量定向扩增子测序技术，被广泛用于生态学、保护遗传学以及种群监测等领域。现有的 GT-seq 分析流程大多聚焦于单个 SNP 位点或依赖于比对到参考基因组的变异检测。  
  然而，GT-seq 所产生的读段往往完整覆盖扩增区域，可直接观察到多个紧密连锁的多态位点，形成更具信息量的 **微单倍型（microhaplotype）**。传统比对和独立 SNP 调用策略忽视了这种结构特征，造成信息损失与计算复杂度上升。  

- **核心问题**：  
  本研究旨在解决 GT-seq 数据中微单倍型的准确解析问题，提出一种无需参考比对、可直接从高深度序列中恢复相位化等位基因的 **“无比对微单倍型分型框架”**。  

---

## 二、方法论与算法流程  

### 核心思想  
该方法以“读段丰度”代替传统的变异比对，通过推断二倍体丰度分布及序列精确匹配实现分型：  
> 将 GT-seq 扩增数据直接视为高质量的短序列池，利用引物界定的序列结构与读段数量分布识别候选等位基因。

### 分析流程（四步法）  

1. **读段解析与扩增子重建**  
   - 从双端 FASTQ 文件中识别出含有已知引物的读段对。  
   - 验证读段首尾分别匹配前向和反向引物序列。  
   - 合并双端读段形成完整的“引物界定扩增子序列”。  

2. **候选等位基因识别与目录构建**  
   - 在每个样本与位点内归纳唯一序列并统计对应读数。  
   - 根据二倍体模型，选取最高丰度的前一或前二序列为候选等位基因。  
   - 基于等位基因丰度比例（如第二丰度 A₂ 阈值区间 10%–50%）判断杂合 / 纯合型。  
   - 汇总所有样本的候选序列，生成全局单倍型目录。  

3. **二倍体丰度模型与基因分型推断**  
   - 将所有读段与目录单倍型进行精确匹配。  
   - 按读段计数排序，确定样本的两个最高丰度单倍型并计算 A₂ 比例：  
     - A₂ < 10%：纯合型  
     - A₂ ≥ 25%–50%：杂合型  
     - 低深度或模糊比例：no-call。  

4. **微单倍型提取与相位化表示**  
   - 比较目录单倍型内部的差异位置，提取 SNP 与 indel。  
   - 保持序列相位（由扩增子连贯性决定），输出相位化的紧凑微单倍型。  
   - 生成可用于种群结构分析与亲缘关系推断的多等位微单倍型矩阵。  

> 实现形式：Python 脚本 **`gtseq_microhap_catalog_and_call.py`**，无需参考序列比对，可直接运行于高深度 GT-seq 数据。  

---

## 三、实验设计与数据集  

- **研究对象**：  
  加州三角洲鲥鱼（_Hypomesus transpacificus_）；该物种为二倍体，适合验证二倍体丰度模型。  

- **数据集与实验设定**：  
  - 使用 GT-seq 扩增 panel，包含 **410 个靶向位点**。  
  - 样本量：**96 个个体样本**。  
  - 测序平台：Element AVITI，双端 PE100。  
  - 总读段对数：约 **2.35×10⁸**。  
  - 平均读深度：约 **2.45×10⁶** 对 / 样本。  
  - 有效引物界定读段占总读段的 69.9%。  

- **benchmark 与对比**：  
  未使用传统 alignment-based 基准工具直接对比，而是将结果与现有基于 SNP 调用的 GT-seq 分析框架进行概念性比较（如 Microhaplot R 包、alignment workflows）。其主要目标是展示无比对法在效率和简洁性上的优势。  

---

## 四、资源与算力使用情况  

- 论文中未提及 GPU、CPU 型号或算力环境。  
- 算法基于 Python 脚本和读段字符串匹配，可在普通工作站运行；无深度学习或模型训练步骤。  
- 因此推测算力消耗较低，属于轻量级高通量数据处理任务。  

---

## 五、实验数量与充分性  

- **实验数量**：  
  - 主要基于一个完整物种的 96 个样本与 410 个位点。  
  - 还提供一个公开子集（每个个体 150,000 读段对）以验证可重复性。  

- **实验内容**：  
  - 读段解析率统计。  
  - 单个位点（如 NC_061065.1_5347094）的详细实例展示：从丰度分布推断二倍体型。  
  - 微单倍型提取的可视化示例。  

- **充分性与客观性**：  
  实验覆盖了从读段解析、等位识别、分型到单倍型提取的全过程，验证了算法有效性；但未涵盖跨物种或不同测序平台的泛化测试，也缺乏定量性能对比（如准确率、召回率）。因此实验在验证概念上充分，但在严格统计验证上仍较有限。  

---

## 六、主要结论与发现  

1. **提出了完整的无比对微单倍型分型框架**，能够直接从高深度 GT-seq 扩增数据推断微单倍型。  
2. **二倍体丰度模型** 能有效区分真实等位基因与测序噪声，通过读数比例简化分型决策。  
3. **相位化 SNP 表达形式** 能完整保存连锁信息，相较独立 SNP 显著提升信息量。  
4. 该方法可以应用于现有 GT-seq 数据分析中，无需修改实验室流程和引物设计。  
5. 输出结果更适用于亲缘关系分析、种群结构推断等高分辨率遗传研究。  

---

## 七、方法与设计亮点  

- **无比对、高效率**：完全跳过参考基因组比对与变异调用步骤。  
- **读段丰度驱动模型**：利用 GT-seq 的高深度特性，实现简洁、鲁棒的等位选择。  
- **自动相位保留**：读段天然覆盖整个扩增片段，无需统计相位算法。  
- **通用可移植性**：适用于任何包含引物表的 GT-seq 数据集，不依赖物种特异参考。  
- **实践友好**：公开 Python 实现与 Zenodo 示例数据，利于复现。  

---

## 八、不足与局限  

- **数据范围限制**：仅验证单一物种与单测序平台，缺乏跨物种与跨平台泛化评估。  
- **缺乏定量比较**：未与 alignment-based 工具在准确率或错误率上直接对比。  
- **模型假设**：采用二倍体模型，对多倍体或重复扩增位点处理能力有限。  
- **缺乏大规模性能评测**：未报告计算时间、内存使用或在上千样本上的运行效率。  
- **真实应用验证不足**：尚未在复杂群体亲缘关系推断中展示实际性能提升。  

---

**（完）**
