---
title: New genetic codes in bacteria and archaea identified with a fast k-mer based algorithm
title_zh: 利用快速的k-mer算法识别细菌和古菌中的新遗传密码
authors: "Melnykov, A. V."
date: 2026-04-06
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.02.715157v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 基于k-mer的快速算法，用于从基因组中推断遗传密码
tldr: 本研究针对现有遗传密码检测工具计算量大的问题，提出一种基于k-mer的快速推断算法，将速度提升百倍，应用于数千个细菌和古菌基因组，发现多个遗传密码变异，包括古菌首次的有义密码子重新分配，推进了对遗传密码演化的理解。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-715157-v1/fig-001.webp\", \"caption\": \"Figure 1. Illustration of the process used by KACI to construct the reference and infer decodings for a query. A. Reference construction for a hypothetical protein family based on the set of sequences available for that family. B. References from several protein families are combined into a single reference to be used for inferring the genetic code. C. Evaluation of a query by breaking up all possible translations into k-mers (only forward translations are shown for simplicity) and comparing these k-mers to the reference.\", \"page\": 13, \"index\": 1, \"width\": 902, \"height\": 1041}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-715157-v1/fig-002.webp\", \"caption\": \"Figure 2. Comparison between KACI and Codetta. A. Percent of sense codons for which KACI and Codetta infer the same amino acid (aaC=aaK), different amino acids (aaC≠aaK), inference is uncertain for KACI (aaC / ?), Codetta (? / aaK) or both (? /?). B. Same as A but for stop codons (TAA, TAG, TGA) of the standard code. C. Computation time required to infer the genetic code for several representative genomes by Codetta and KACI.\", \"page\": 14, \"index\": 2, \"width\": 902, \"height\": 250}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-715157-v1/fig-003.webp\", \"caption\": \"Figure 4. Reassignment of CGG codon from arginine to tryptophan in two archaea genome assemblies. A. Secondary structures of tRNACCU and tRNACCG from GCA_964414255.1. The absent arginine identity element A20 and the unusual acceptor stem bulge in tRNACCG are shown with red arrows. B. Alignment of short sequence motifs from two ribosomal proteins characteristic of eukaryota and archaea but not bacteria. The motifs are compared to sequences from budding yeast and two model archaea. The tryptophans encoded by CGG are shown in red.\", \"page\": 17, \"index\": 3, \"width\": 902, \"height\": 270}]"
motivation: 现有工具发现替代遗传密码计算代价高，难以应用于大量新测序物种。
method: 研究者开发了一种基于k-mer的快速算法，用于从组装基因组直接推断遗传密码。
result: 应用该算法于数千个细菌和古菌基因组，发现多个新的遗传密码变化，包括古菌中的首例有义密码子重新分配。
conclusion: 该研究揭示了细菌和古菌中新的遗传密码变异，首次发现古菌中的有义密码子重新分配，为遗传密码进化和蛋白质数据库准确性提供了新的见解。
---

## 摘要
遗传密码在生命的各个领域中都是保守的，通常被认为是普遍的。然而，迄今为止已记录到许多偏离“通用”遗传密码的例外，大多数是通过对高度保守基因的人工或半自动检查发现的。现代生物信息学工具提高了我们发现替代遗传密码的能力，但仍然计算量大，限制了其在成千上万从环境样本测序获得的新物种中的广泛应用。本研究报告了一种速度提高百倍以上的直接从组装基因组推断遗传密码的方法，并将其应用于数千个此前未被表征的古菌和细菌组装序列中。我描述了这两个领域中新发现的候选遗传密码变异，其中包括第一个古菌的感受密码子重编码。识别遗传密码的变异对于理解标准遗传密码的进化，以及提高蛋白质数据库和开放阅读框识别的准确性具有重要意义。

## Abstract
The genetic code is conserved across all domains of life and is often described as universal. Nevertheless, many exceptions to the "universal" code have now been documented, most of these through manual or semiautomated inspection of highly conserved genes. Modern bioinformatics tools improved our ability to find alternative genetic codes but remain computationally expensive preventing widespread use on thousands of new species identified by sequencing environmental samples. Here I report a >100 fold accelerated method for inferring the genetic code directly from assembled genomes and apply it to thousands of previously uncharacterized assemblies from archaea and bacteria. I describe new candidate genetic code variations in both domains, including the first archaea sense codon reassignment. Identifying genetic code variations is important for understanding evolution of the standard code and improving accuracy of protein databases and open reading frame identification.

---

## 论文详细总结（自动生成）

# 论文总结：利用快速的 k-mer 算法识别细菌和古菌中的新遗传密码

---

## 一、研究核心问题与整体背景

- **研究动机**：  
  遗传密码是从 mRNA 到蛋白质翻译的基本规则，传统观点认为在生命三域中高度保守。然而，随基因组测序技术进步，研究者已发现越来越多偏离标准遗传密码的例外实例。  
- **现实问题**：  
  当前主流计算方法（如 *Codetta*）在推断遗传密码时，依赖于大规模序列比对和保守位点分析，精度高但计算量巨大，难以扩展到数百万个尚未培养的细菌与古菌基因组。  
- **研究目标**：  
  本文提出一种**基于 k-mer 模式匹配的快速遗传密码推断算法（K-mer Assisted Code Inference, KACI）**，致力于以极低计算开销自动解析基因组潜在的遗传密码变化，并验证其在大规模基因组分析中的可行性。

---

## 二、方法论：KACI 算法核心思想与流程

- **核心理念**：  
  用短肽序列片段（amino acid k-mers）代替全序列比对，通过统计保守区域中氨基酸的分布概率来推断密码子的解码倾向，最终计算出每个三联体的可能翻译氨基酸。

- **关键技术细节**：  
  1. **参考库构建**：  
     - 将 *Pfam v37.2* 数据库中的蛋白家族分解为长度固定的重叠 k-mer（最佳 k=11）。  
     - 对每个 k-mer 的单一位置设为“不确定位”，并记录该位置出现各氨基酸的概率分布。  
     - 仅保留出现频率高（link number ≥ 20）的保守 k-mer，用以代表家族特征。  
  2. **匹配与推断过程**：  
     - 将待分析基因组用标准遗传表翻译为六个开放阅读框，分割为 k-mer 片段。  
     - 对每个 k-mer 替换一次“?”位以进行参考匹配，若命中则将该位置对应的三联体代入概率计算。  
     - 汇总所有匹配后，通过概率归一化获得每个密码子的最可能解译氨基酸。  
  3. **与 Codetta 的区别**：  
     - Codetta 依赖隐马尔可夫模型（HMM）全序列比对；  
     - KACI 直接基于 k-mer 查找，无需比对，因此速度提高达 144 倍。

---

## 三、实验设计与对比

- **数据集来源**：  
  - 使用了 **约 270 万份** NCBI 公布的细菌和古菌基因组装配体（截至 2025 年 7 月）。  
  - 额外使用 >200,000 个已由 Codetta 分析的基因组作为 KACI 的基准验证集。  

- **对比方法**：  
  - **Codetta**：作为当前被公认最准确的计算工具，用于对比精度和敏感度。  
  - 对比维度包括：  
    - 各密码子的氨基酸推断一致性；  
    - 对停码子的推断准确性；  
    - 计算时间。

- **实验步骤**：
  - 在验证集上计算 KACI 与 Codetta 输出的一致性（Figure 2A, 2B）。  
  - 分析跨域（细菌、古菌）计算时长比例（Figure 2C）。  
  - 针对发现的异常结果（可能的遗传密码变化）进一步用 tRNA 序列结构和系统发育树作交叉验证。

---

## 四、资源与算力配置

- **计算资源**：  
  - 所有计算在单台 **Xeon E5-2699 v3** 工作站完成。  
  - 内存占用：约 15 GB（载入 4 GB 参考库所需）。  
  - 未使用 GPU 或大规模计算集群。  
  - 对比：Codetta 在原论文中需使用 30,000 核心的高性能集群，可见算力节约极大。  

---

## 五、实验数量与充分性

- **实验规模**：  
  - >200,000 个基因组用于性能对比。  
  - >2,700,000 个基因组用于全局搜索新遗传密码。  
  - 另外对特定疑似重编码谱系进行了 tRNA 序列比对与系统发育树分析。  
- **实验充分性与客观性**：  
  - 从数量和多样性上覆盖极广，兼顾多种环境来源（人类肠道、矿区、海洋热泉）。  
  - 大多数发现经过 Codetta 重验证及 tRNA evidence 支持，提升了可靠性。  
  - 作者明确讨论了伪阳性来源（污染、模型偏差），总体而言分析较为谨慎。

---

## 六、主要结论与发现

- **算法层面成果**：  
  - KACI 与 Codetta 对 sense codon 的一致性达 **99.85%**，但计算速度平均提高 **144 倍**。  
  - 可在普通工作站上运行上百万级别基因组分析。

- **生物学发现**：  
  - 发现 3 个新的有义密码子重新分配（sense codon reassignment）：  
    1. **ACA**：由 *苏氨酸 (Thr)* → *天冬氨酸 (Asp)*（细菌 RAAP-2 科）。  
    2. **CGG**：由 *精氨酸 (Arg)* → *丙氨酸 (Ala)*（细菌 RGIG3102 属）。  
    3. **CGG**：由 *精氨酸 (Arg)* → *色氨酸 (Trp)*（古菌 Njordarchaeales 目）。  
  - 这是迄今为止**古菌首次被发现的有义密码子重新分配**。  
  - 重编码常与 tRNA 结构突变、GC 含量偏倚及耐性进化过程有关。

---

## 七、研究优点与亮点

- **计算创新**：
  - 以 k-mer 概率模型取代比对模型，实现数量级的加速。
- **可扩展性强**：
  - 仅需单机计算即可分析数百万基因组，适合大规模宏基因组项目。
- **跨验证体系**：
  - 联合 Codetta、tRNA 扫描与系统发育分析，强化生物学解释。
- **生物学突破**：
  - 首次揭示古菌中的有义密码子变异，拓展了对遗传密码演化机制的理解。
  - 发现新的 tRNA-氨酰化识别结构变化模式。

---

## 八、不足与局限性

- **灵敏度略低**：  
  - 比 Codetta 稍低约 0.13% 的识别率，部分罕见重编码未被检测。  
- **假阳性风险**：  
  - 在 GC 偏倚极端或受污染的 MAG（宏基因组组装）中易出现伪信号。  
  - 特别是停止密码子重新定义的结果需谨慎解释。  
- **停码子推断限制**：  
  - KACI 无法直接判定停码子（TAA/TAG/TGA）的解码功能，需要间接证据。  
- **缺乏实验验证**：  
  - 所有推断均为计算预测，尚需生化实验确认。  

---

**（完）**
