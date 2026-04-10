---
title: Alignment-Free Microhaplotype Genotyping for GT-seq (Genotyping-in-Thousands by Sequencing) Using a Diploid Abundance Model
title_zh: 基于二倍体丰度模型的GT-seq（Genotyping-in-Thousands by Sequencing）无比对微单体基因分型方法
authors: "Campbell, N. R., Campbell, A. R., Blair, S. K., Finger, A. J."
date: 2026-04-03
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.01.715880v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 用于高通量测序的无比对微单倍型基因分型
tldr: 本文针对GT-seq高通量扩增子基因分型提出一种无需比对的微单倍型分型新方法，基于双端测序读段丰度模型，从原始读取中识别二倍体等位基因，构建单倍型目录，并通过精确匹配获得稳定的微单倍型分型结果，为群体遗传分析提供高效可靠的解决方案。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715880-v1/fig-001.webp\", \"caption\": \"Figure 3:\", \"page\": 22, \"index\": 1, \"width\": 937, \"height\": 429}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715880-v1/fig-002.webp\", \"caption\": \"Figure 4:\", \"page\": 24, \"index\": 2, \"width\": 651, \"height\": 858}]"
motivation: 现有GT-seq分析流程多依赖单SNP或需比对的变异检测，限制了效率与准确性。
method: 研究提出了无需比对的微单倍型基因分型流程，通过读段丰度模型选择等位基因并构建单倍型目录。
result: 该流程通过读段精确匹配生成二倍型基因型，并能推断相位SNP与缩合插缺变异。
conclusion: 该方法能直接从高深度扩增子测序数据中稳定推断微单倍型基因型。
---

## 摘要
GT-seq（Genotyping-in-Thousands by Sequencing，千样本基因分型测序）被广泛应用于高通量扩增子基因分型，但大多数分析流程集中于单个SNP或依赖比对的变异检测。本文提出一种无比对的微单体（microhaplotype）基因分型方法，利用双端Illumina和Element测序通常具备的高覆盖度与低错误率特性。该流程首先识别由引物限定的reads，并将双端序列合并为完整的扩增子序列。在每个样本与位点内，根据reads丰度对唯一序列进行排序，保留丰度最高的一到两个序列作为候选二倍体等位基因。将这些等位基因在所有样本间汇总，以构建每个位点的唯一单倍型目录。在第二步中，通过精确序列匹配将reads分配到目录单倍型中，以生成二倍体基因型。最后，对目录单倍型序列进行位置比对，以识别具有相位的SNP和合并的indel变异，从而生成适用于群体遗传学分析的紧凑微单体表示。该方法能直接从高深度扩增子测序数据中实现稳健、无比对的微单体推断。

## Abstract
GT-seq (Genotyping-in-Thousands by Sequencing) is widely used for high-throughput amplicon genotyping, but most analytical pipelines focus on single SNPs or rely on alignment-based variant calling. Here we present an alignment-free approach for microhaplotype genotyping that leverages the high read depth and low error rates typical of paired-end Illumina and Element sequencing. The pipeline first identifies primer-bounded reads and resolves paired-end sequences into complete amplicon sequences. Within each sample and locus, unique sequences are ranked by read abundance and the top one or two sequences are retained as candidate diploid alleles. These alleles are aggregated across samples to construct a catalog of unique haplotypes for each locus. In a second pass, reads are assigned to catalog haplotypes by exact sequence matching to produce diploid genotypes. Finally, catalog haplotype sequences are positionally compared to identify phased SNP and collapsed indel variation, generating compact microhaplotype representations suitable for population genetic analysis. This approach enables robust, alignment-free microhaplotype inference directly from high-depth amplicon sequencing data.

---

## 论文详细总结（自动生成）

# 基于二倍体丰度模型的GT-seq无比对微单倍型基因分型方法 — 深度总结

---

## 一、研究动机与背景

- **核心问题**：传统的 GT-seq（Genotyping-in-Thousands by Sequencing）流程主要针对单个 SNP（单核苷酸多态性）进行检测，依赖参考序列比对的变异调用方法，难以充分利用扩增子测序的特点。每个扩增子实际上覆盖了多个相邻的多态位点，可直接观察到连锁的多态组合（微单倍型，microhaplotype），但现有管线未能有效利用这些信息。

- **研究动机**：
  - **生物学需求**：在亲缘关系分析、群体结构研究、种群监测等场景中，微单倍型可提供比单SNP更高的信息量和判别力。
  - **技术限制**：现有方法需进行读段比对和统计相位推断，计算复杂且易受错误匹配影响。
  - **目标**：开发一种完全“无比对”（alignment-free）、可直接从高深度扩增子测序数据中提取微单倍型的高效方法，简化流程并提高准确度。

---

## 二、方法论与算法框架

### 核心思想
- 直接从引物限定的扩增子测序读段中识别微单倍型，无需参考比对和SNP推断。
- 使用 **二倍体丰度模型（Diploid Abundance Model）** 区分真实等位基因与测序噪声。

### 工作流程（Pipeline）

1. **引物限定读段识别（Primer-Bounded Read Resolution）**  
   - 扫描双端 FASTQ 文件，识别以定义的前、后引物序列开始的读段。  
   - 验证正确的读段配对，并使用无比对重叠算法合并成完整扩增子序列。

2. **候选等位基因识别与目录构建（Allele Discovery and Catalog Construction）**  
   - 在每个样本和位点内统计唯一序列及其读数。  
   - 根据丰度排序——保留出现频率最高的1–2条序列作为候选等位基因。  
   - 通过跨样本聚合，建立唯一的 **单倍型目录（Haplotype Catalog）**。

3. **基因型推断（Genotype Inference）**  
   - 第二遍利用精确序列匹配将所有读段分配到目录中的单倍型。  
   - 计算两种主要等位基因的读数比例（A2 指标，第二高频基因比值）。  
   - 按 A2 阈值分类：A2 ≤ 10% → 同型合子；A2 约 25–50% → 杂合子。

4. **微单倍型提取（Microhaplotype Extraction）**  
   - 位置比对目录中单倍型序列，提取并相位化 SNP 和短插缺（indel）变异。  
   - 输出为相位化的多态组合，可直接用于亲缘、群体遗传分析。

### 技术特点
- 完全基于读段精确匹配，无需参考基因组比对或SNP调用。
- Python 实现：公开脚本 `gtseq_microhap_catalog_and_call.py`。
- 算法核心围绕 **丰度排序+阈值分类**，简化传统相位推断。

---

## 三、实验设计与数据集

- **生物材料**：使用 *delta smelt*（加州湾鳞虾 Hypomesus transpacificus）作为模型物种。
- **测序平台**：Element AVITI，双端 PE100 化学反应。
- **面板规模**：GT-seq 扩增子面板共 410 个靶向位点。
- **样本量**：96 个二倍体个体。
- **数据处理**：
  - 整体测序产出 2.35 亿读段对。
  - 平均每个样本 >240 万读段对。
  - 剔除无效读段后保留约 70%（共约1.71亿对）。
- **公共示例数据**：Zenodo（DOI：10.5281/zenodo.19069551），用于演示与复现。

- **Benchmark 或对比方法**：
  - 论文主要与传统 **比对型SNP调用流程** 作方法层面对比（如 microhaplot 软件）。
  - 无显式实验性能对比表格，但从原理上指出本方法效率与准确度提升的逻辑优势。

---

## 四、资源与算力说明

- 文中未提供 GPU、CPU 型号及运算耗时等细节。  
- 可推断该方法在普通计算环境（如工作站或服务器）上即可运行，无深度学习训练过程和高算力依赖。

---

## 五、实验数量与充分性

- **主要实验内容**：
  - 一个完整数据集（96个样本 × 410 loci）的大规模流程测试。
  - 详细单位点示例（如位点 NC_061065.1_5347094）展示结果。
  - 对引物识别率、读段保留率（69.9%）进行了统计。
- **实验充分性**：
  - 针对真实生物样本的实测数据验证了方法可用性与稳健性。
  - 但缺乏跨物种或不同面板的数据验证；未展示与传统方法的定量对比指标（如准确率、时间效率）。

---

## 六、主要结论与发现

- 成功实现了 **无比对的微单倍型分型**。
- 从原始读段直接重建相位化等位基因，提高了信息保持与分析效率。
- 二倍体丰度模型对高深度数据有效，能区分真实等位基因与测序误差。
- 输出的微单倍型结果显著增强群体遗传与亲缘分析的分辨力。
- 现有 GT-seq 面板可直接应用此算法，无需实验室操作改动。

---

## 七、方法与实验亮点

- **无需参考比对**：彻底消除比对误差与复杂的变异调用过程。
- **充分利用高覆盖度特性**：通过丰度模型判定真实变异，提升稳健性。
- **全相位化输出**：生成完整微单倍型结构，而非独立 SNP 集合。
- **通用性强**：适应现有 GT-seq 面板，适合生态学与保育遗传学大规模样本分析。
- **开源实现**：公开 Python 管线及示例数据，便于验证与复用。

---

## 八、不足与局限

- **实验覆盖有限**：仅验证单物种单面板数据，缺乏跨物种或多测序平台评估。
- **模型假设限制**：二倍体丰度模型仅适用于二倍体生物，无法处理多倍体或重复基因组。
- **可能的偏差风险**：
  - 多重扩增位点或引物非特异性可能导致假阳性序列。
  - 当等位基因比例偏离理想值（如文库偏倚）时，A2 阈值判定可能误分类。
- **性能指标未量化**：未展示计算效率、准确率等定量评估。

---

（完）
