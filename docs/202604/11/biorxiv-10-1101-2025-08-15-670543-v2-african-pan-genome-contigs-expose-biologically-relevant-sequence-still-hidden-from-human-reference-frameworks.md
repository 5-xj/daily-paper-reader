---
title: African Pan Genome Contigs Expose Biologically Relevant Sequence Still Hidden from Human Reference Frameworks
title_zh: 非洲泛基因组 Contig 揭示在人类参考框架中仍隐藏的具有生物学意义的序列
authors: "Martini, R., Tijjani, A., Founta, K., Cha, D., Awai, A., Maurice, S., White, J., Mason, C., Cortes-Ciriano, I., Robine, N., Balogun, O., Chambwe, N., Davis, M. B."
date: 2026-04-11
pdf: "https://www.biorxiv.org/content/10.1101/2025.08.15.670543v2.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 表征非洲泛基因组重叠群以定义序列和功能图谱
tldr: 本研究针对现有人类参考基因组偏重欧洲人群的问题，构建并分析了296.5 Mb的非洲泛基因组contigs，揭示这些序列中仍有部分功能重要且与人群祖源相关的基因区未被现有参考覆盖，为改进参考基因组及精准医学研究提供依据。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-15-670543-v2/fig-001.webp\", \"caption\": \"Figure 1. Study Design 470\", \"page\": 18, \"index\": 1, \"width\": 835, \"height\": 810}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-15-670543-v2/fig-002.webp\", \"caption\": \"Figure 2. Summary of APG Contig Alignment to T2T-CHM13 483\", \"page\": 19, \"index\": 2, \"width\": 972, \"height\": 1179}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-15-670543-v2/fig-003.webp\", \"caption\": \"Figure 5. Functional characterization of APG contigs weakly or unmapped to gapless 534 reference assemblies 535\", \"page\": 24, \"index\": 3, \"width\": 823, \"height\": 1027}]"
motivation: 现有的人类参考基因组以欧洲人群为主，限制了对非洲等人群遗传变异的理解。
method: 通过分析296.5 Mb的非洲泛基因组contigs，比较其与T2T-CHM13及47个HPRC组装体的比对结果。
result: 发现大量contigs与参考基因组比对成功但富集于含重复序列区，另有742条未能比对的功能序列具潜在蛋白编码能力。
conclusion: 该研究表明当前人类基因组参考仍缺失具有功能潜力的、与祖源相关的序列，应丰富参考以更好支持精确医学。
---

## 摘要
人类参考基因组是生物医学研究的基石，但其仍然不完整，并偏向于欧洲人群，这限制了对代表性不足人群遗传变异的解释。在本研究中，我们对总计 296.5 Mb 的非洲泛基因组（African Pan Genome，APG）contig 进行表征，以界定当前参考基因组中缺失的基因组区域的序列和功能特征。大多数 contig 可与端粒到端粒（telomere-to-telomere, T2T-CHM13）基因组以及 47 个由人类泛基因组参考联盟（Human Pangenome Reference Consortium, HPRC）获得的单倍型分辨组装相对应，其中 T2T-CHM13 的定位在着丝粒和卫星重复区域显著富集，且与 373 个基因重叠，包括与疾病相关的位点。对 HPRC 组装结果的比对揭示了与祖源相关的 contig 富集，特别是在非洲基因组中。值得注意的是，有 742 个 contig 在严格和宽松标准下均未能比对成功。这些序列主要为非重复性序列，并表现出显著的功能潜力，包括预测的蛋白质编码基因、CpG 岛和转录活性。总体而言，这些结果表明当前参考基因组仍缺失具有功能相关性、祖源富集的基因组序列，这对疾病变异的解释和精准医学具有重要意义。

## Abstract
Human reference genomes underpin biomedical discovery but remain incomplete and biased toward European populations, constraining interpretation of genetic variation in underrepresented populations. Here we characterize African Pan Genome (APG) contigs totaling 296.5 Mb to define the sequence and functional landscape of genomic regions absent from current references. Most contigs align to the telomere-to-telomere (T2T-CHM13) genome and across 47 haplotype-resolved Human Pangenome Reference Consortium (HPRC) assemblies, with T2T-CHM13 placements enriched in centromeric and satellite repeats and overlapping 373 genes, including disease-associated loci. Mapping across HPRC assemblies revealed ancestry-associated contig enrichment, particularly in African genomes. Notably, 742 contigs remained unmapped under both stringent and relaxed criteria. These sequences are largely nonrepetitive and exhibit strong functional potential, including predicted protein-coding genes, CpG islands and transcriptional activity. Together, these results demonstrate that functionally relevant, ancestry-enriched genomic sequences remain absent from current references, with important implications for disease variant interpretation and precision medicine.

---

## 论文详细总结（自动生成）

# 非洲泛基因组 Contig 揭示在人类参考框架中仍隐藏的功能序列 —— 中文结构化总结

---

## 一、研究背景与核心问题

- **核心问题**：现有人类参考基因组（如 GRCh37、GRCh38）及其升级版本（如 T2T-CHM13）在序列层面虽趋于完整，但仍主要基于欧洲人群构建，导致对非洲等高遗传多样性人群的基因检测与疾病关联研究存在系统性偏差。  
- **研究动机**：弥补长期存在的“参考偏倚”（reference bias），验证非洲泛基因组（African Pan-Genome, APG）中的 contig 序列，探究其中仍未被更现代的基因组参考如 T2T-CHM13 和 HPRC（Human Pangenome Reference Consortium）所涵盖的功能性基因区域。  
- **总体目标**：评估这些未纳入参考基因组的序列是否具有真实的生物功能及祖源差异，对遗传疾病解释和精准医学的影响。

---

## 二、方法论与技术路线

- **整体思路**：  
  通过重新比对与全面注释分析，确定 124,240 条来自非洲人群的 APG contig 是否被现代参考基因组框架正确覆盖，并评估仍未覆盖序列的功能潜力。

- **关键步骤**：  
  1. **数据获取**：从 GenBank 获取 Sherman 等人（2019）构建的 APG contig 共 296.5 Mb（共 125,715 条，其中有效 124,240 条）。
  2. **比对分析**：使用 `bwa-mem v0.7.17` 对比这些 contig 至三类参考构架：
     - GRCh38（基准）
     - T2T-CHM13（端粒到端粒参考）
     - 47 个 HPRC 单倍型分辨线性组装（涵盖多族群）
  3. **比对质量标准**：
     - “Reasonably Good（RG）”：覆盖 ≥50%，同源性 ≥80%；  
     - “Nearly Perfect（NP）”：覆盖 ≥80%，同源性 ≥90%。  
  4. **功能注释**：
     - 使用 `RepeatMasker` 判定重复序列类型（卫星、LINE、SINE、LTR）。
     - 基因预测采用 `AUGUSTUS v3.5.0`。
     - CpG 岛检测采用 `CpGplot v6.6.0.0（EMBOSS）`。
     - 蛋白质域分析使用 `Pfam` 和 `BLASTP`。
  5. **表达验证**：
     - 使用 RNAseq 数据对 GRCh38 未比对 reads 重新比对至预测 gene 模型以验证是否转录活跃。

- **计算公式（简要描述）**：  
  比对覆盖率与一致性通过以下公式定义：
  - 覆盖率：`Coverage = Aligned_length / Query_sequence_length`
  - 一致性：`Identity = (Aligned_length - Distance) / Aligned_length`

---

## 三、实验设计与数据场景

- **数据来源**：
  - APG 数据集：来源于 910 名非洲后裔的泛基因组组装。
  - 参考基因组：GRCh38、T2T-CHM13、HPRC v1（47 组装体，其中 24 个为非洲祖源）。
  - 功能验证数据：
    - **1000 Genomes Project**（AFR 52人、EUR 48人）
    - **TCGA BRCA**（乳腺癌样本，AFR 50人、EUR 50人）
    - **Martini et al. African Cohort**（非洲裔乳腺癌样本，44人）

- **Benchmark 对照**：与历史版本 GRCh38 比较映射率；参考 T2T-CHM13 与 HPRC 的覆盖提升。

- **对比方法**：  
  通过三层参考比对（GRCh38 → T2T → HPRC）依次评估“覆盖提升”与“祖源富集”效果。

---

## 四、资源与算力

- 文中未报告具体 GPU 型号或算力使用情况。  
- 指出研究依托 **Cold Spring Harbor Laboratory 高性能计算集群（HPC）**，由 NIH 资助项目（S10OD028632-01 等）支持，说明为高算力环境但未披露时间成本或节点数。

---

## 五、实验数量与充分性

- **层次丰富的实验设计**：
  1. 三种参考构架比对（GRCh38、T2T-CHM13、HPRC）。
  2. 两种比对质量门槛（RG、NP）。
  3. 功能层面实验：
     - 重复序列、CpG、基因预测。
     - RNAseq 覆盖度与人群差异。
  4. 祖源层次统计分析（χ²检验与 Odds Ratio 分析）。
  5. 表达实验涉及三大独立人群队列。

- **充分性评价**：覆盖从比对、功能注释到表达验证的完整链路，数据来源跨多祖源、疾病与常规样本，实验充分且客观；但部分预测结果尚未经生物实验验证（见局限）。

---

## 六、主要结论与发现

- **比对覆盖**：
  - 约 40% APG contig 能在 T2T-CHM13 中找到对应位置，94% 属于 GRCh38 缺失区域。
  - 在 HPRC 框架中近乎全部被恢复（RG 99.4%，NP 82.9%），其中 AFR 祖源代表的组装体富集最显著。

- **功能性分析**：
  - T2T 回收序列广泛位于着丝粒和卫星重复区，通过 373 个基因的重叠揭示免疫与神经相关基因（如 HLA、PPFIA1）。
  - 742 条未能比对的 “Below Threshold Contigs (BTCs)” 中 63% 含有功能特征、60% 预测可编码蛋白，40% 同时存在 CpG 岛与基因结构。
  - RNAseq 验证显示多条 BTC 基因在真实人群中有转录活性（如 g325 在多样本中高表达）。

- **人群相关性**：  
  Contig 显著富集于非洲基因组，比其他族群高 7–8倍；部分序列与 GWAS 疾病相关位点（哮喘、精神类疾病）重叠。

- **核心结论**：即便在 T2T 和 HPRC 的框架下，仍有功能性、祖源特异的序列未被完整表示；这些缺口限制了跨族群遗传解析与疾病关联研究的精确度。

---

## 七、研究亮点与优点

- **方法创新**：
  - 首次系统性比较非洲泛基因组 contig 与两种现代参考（T2T 与 HPRC）的一致性。
  - 建立了功能性补全评估体系（结构比对 → 基因预测 → 表达验证）。
- **数据广度**：涵盖多祖源组装与真实 RNA 表达队列。
- **定量统计扎实**：使用分类阈值（RG/NP）与显著性检验（χ²、OR、FDR）保证结果可信。
- **实践意义**：直指参考基因组的“不可见部分”问题，为精准医学中的种族公平提供坚实量化证据。

---

## 八、不足与局限性

- **功能验证缺乏**：  
  对 BTC 基因仅有计算预测与转录信号，缺少实验性验证（如蛋白质功能、结构确认）。
- **人群代表性有限**：  
  APG 数据多源于非洲裔美国人，未覆盖所有非洲大陆族群；不同祖源间分布估计可能偏差。
- **参考样本不平衡**：  
  HPRC v1 数据集中 AFR 样本较多，可能放大祖源富集结果。
- **应用限制**：  
  当前分析以线性参考为基础，未全面纳入图谱化（graph-based）参考分析，影响复杂结构识别。

---

**（完）**
