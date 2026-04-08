---
title: Evaluation of a multiplexed tiling PCR scheme for whole-genome amplification of hepatitis B virus using Oxford Nanopore sequencing
title_zh: 利用 Oxford Nanopore 测序评估用于乙型肝炎病毒全基因组扩增的多重铺片式 PCR 方案
authors: "Brate, J., Grande, E. G., Pedersen, B. N., Frengen, T. G., Stene-Johansen, K."
date: 2026-03-31
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.28.714721v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 乙肝病毒的全基因组扩增与测序
tldr: 本文评估了改编自Ringlander等2022年工作的乙肝病毒全基因组tiling PCR方案在纳米孔测序中的表现，比较了单池与双池多重PCR策略，并分析了不同样本和基因型的覆盖率及扩增效率，发现引物扩增表现不均影响全基因组恢复。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-28-714721-v1/fig-001.webp\", \"caption\": \"Table 1: Primer sequences and binding sites. “Original name” is the names used by Ringlander et al. 148 2022. “Name in this study” is the primer names we used in our analyses. “Amplicon number” is the 149 number given to the amplicons by Ringlander et al. 2022 and the number used in our analyses. “Primer 150 sequence (5’-3’) is the sequence of the primers we used in our study (i.e., IonTorrent adapters removed). 151 “Position on NC_003977.2” is the estimated primer binding site on the original reference sequence. 152 “Position on modified NC_003977.2” is the estimated primer binding site on the modified reference 153 sequence (see description in Materials and Methods). 154\", \"page\": 8, \"index\": 1, \"width\": 950, \"height\": 1125}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-28-714721-v1/fig-002.webp\", \"caption\": \"Table 3: Primer mismatch analysis. The mean number of mismatches against the different reference 395 sequences belonging to each genotype is shown (columns A-E), with the mean number of mismatches 396 across all genotypes shown in the “Total” column. The number of mismatches are shown across the entire 397 primer sequence (“Full primer”) and for the last 5 nucleotides (“3’ end”). Numbers are colored from white 398 (zero mismatches) to dark grey (highest number of mismatches) for visualization purposes. 399\", \"page\": 20, \"index\": 2, \"width\": 694, \"height\": 731}]"
motivation: 研究旨在验证已发表的HBV全基因组扩增引物方案在新的测序平台和不同多重PCR策略下的表现。
method: 评估并改编了Ringlander等2022年的HBV全基因组tiling PCR引物方案用于Oxford Nanopore测序，比较了单池与双池两种多重PCR策略。
result: "总体基因组覆盖率中位数约为50%，放大效率随样本Ct值变化显著，而两种池策略间差异不大。"
conclusion: 该方案可用于HBV的Nanopore测序，但引物扩增不均衡限制了全基因组一致恢复，需进一步优化。
---

## 摘要
本研究评估了 Ringlander 等人（2022）先前发表的铺片式 PCR 引物方案在结合 Oxford Nanopore 测序进行乙型肝炎病毒（HBV）全基因组扩增中的性能。该引物集最初为 Ion Torrent 测序开发，本研究去除了平台特异性接头后进行了改编，并使用提交用于常规 HBV 分型和耐药性检测的临床血清或血浆样本进行了测试。比较了两种多重 PCR 策略：一种为包含全部引物的单一 PCR 体系，另一种为非重叠扩增子的双体系策略。测序读数通过 Nanopore 分析流程进行处理，并在 Ct 值范围广泛、涵盖 HBV 基因型 A–E 的样本间比较基因组覆盖率和扩增子表现。

结果显示，在所有样本中基因组覆盖率的中位数约为 50%，但回收率差异较大，从完全失败到接近全基因组均有涉及。将所有引物合并为单次 PCR 反应或将重叠扩增子分入不同反应体系，对总体基因组回收的影响较小，两种混合策略间未观察到一致性差异。相比之下，不同扩增子间的扩增效率差异显著。扩增子 1–5 通常产生较高的测序深度，而扩增子 6–10 常出现低覆盖率，导致基因组回收不完整。基因组覆盖率与 Ct 值密切相关，Ct 值较低的样本显示出更高覆盖率，而不同基因型之间覆盖率总体相似。

这些结果表明，Ringlander 等人的引物方案可适用于 HBV 的多重 PCR 与 Nanopore 测序，但扩增子性能不均限制了稳定的全基因组回收，强调了进一步优化 HBV 铺片式 PCR 设计的必要性。

## Abstract
Here we evaluated the performance of a previously published tiling PCR primer scheme by Ringlander et al. (2022) for whole-genome amplification of Hepatitis B virus (HBV) in combination with Oxford Nanopore sequencing. The primer set originally developed for Ion Torrent sequencing was adapted by removing platform-specific adapters and tested using clinical serum or plasma samples submitted for routine HBV genotyping and resistance testing. Two multiplexing strategies were compared: a single PCR pool containing all primers and a two-pool strategy with non-overlapping amplicons. Sequencing reads were processed using a Nanopore analysis pipeline, and genome coverage and amplicon performance were compared across samples spanning a wide Ct range and representing HBV genotypes A-E.

Across all samples, the median genome coverage was approximately 50%, although recovery varied widely, ranging from complete failure to nearly full genomes. Combining all primers into a single PCR reaction, or separating overlapping amplicons into different reactions, had little overall impact on genome recovery, and no consistent differences between the two pooling strategies were observed. In contrast, amplification efficiency differed markedly between individual amplicons. Amplicons 1-5 generally produced higher sequencing depth, whereas amplicons 6-10 frequently showed low coverage and contributed to incomplete genome recovery. Genome coverage was strongly associated with Ct values, with higher coverage observed in samples with lower Ct values, while coverage was broadly similar across genotypes.

These results demonstrate that the Ringlander et al. primer scheme can be adapted for multiplex PCR and Nanopore sequencing of HBV, but uneven amplicon performance limits consistent full-genome recovery and highlights the need for further optimization of HBV tiling PCR designs.

---

## 论文详细总结（自动生成）

# 利用 Oxford Nanopore 测序评估用于乙型肝炎病毒全基因组扩增的多重铺片式 PCR 方案 — 中文总结

---

## 一、研究核心问题与背景

- **核心问题**：乙型肝炎病毒（HBV）全基因组测序对于分型、耐药性分析及分子监测极为关键，但现有方法多依赖部分区域扩增（如聚合酶与表面抗原基因），限制了病毒变异与重组的全面检测。  
- **研究动机**：解决在不同测序平台间引物适应性问题，并验证是否可以通过**多重铺片式（tiling）PCR**实现稳定的HBV全基因组扩增，同时评估这种方案在**Oxford Nanopore长读测序**平台上的可行性。  
- **整体目标**：验证并优化来自 Ringlander 等（2022）的已有引物方案，使之兼容高通量、长读长的 Nanopore 测序，提升 HBV 全基因组覆盖率与准确性。

---

## 二、方法论与技术路线

- **核心思想**：  
  将原为 Ion Torrent 平台设计的 10 对 HBV 重叠引物去除适配序列后重新应用于 Nanopore 平台，通过两种多重反应方式（单池 vs 双池）比较引物竞争与覆盖性能。

- **关键技术细节**：  
  1. **PCR设计**：10组约400bp的铺片引物覆盖整个HBV基因组；  
     - 单池策略：所有20条引物在一次PCR反应中混合；  
     - 双池策略：奇数扩增子与偶数扩增子分别放入两个非重叠反应体系。  
  2. **扩增酶与条件**：采用 Platinum SuperFi II DNA Polymerase；循环：98°C 30s → 35周次（98°C 10s，60°C 30s，72°C 3min）→ 延伸5min。  
  3. **测序与分析管线**：  
     - 库制备：ONT Rapid Barcoding Kit（SQK-RBK114-96），GridION Mk1，R10.4.1流动芯片；  
     - 分析管线：ARTIC Nanopore pipeline（v1.8.5）；使用Dorado进行高精度basecalling；  
     - read筛选：Guppyplex过滤读长100–4000 bp；  
     - 比对：minimap2对修改后的HBV参考序列；  
     - 共识生成：Clair3深度学习模型，设最小覆盖阈值20×；  
     - 杂污染检测：Kraken2进行分类，minimap2对齐人类参考 CHM13v2.0 去除宿主片段。  
  4. **引物失配分析**：通过滑动窗口计算每个引物与不同基因型（A–E）的错配数量及末端（3'）匹配度，用于解释扩增效率差异。

---

## 三、实验设计

- **样本来源**：  
  收集挪威公卫研究所用于常规HBV分型的临床血浆/血清样本共84份，涵盖基因型A–E。
  
- **实验分组**：
  - 36份样本既采用单池PCR又采用双池PCR对比，共执行**120次扩增及测序实验**；  
  - 其他样本用于评估不同Ct值与不同基因型的基因组恢复情况。

- **Benchmark与对比方案**：  
  - 对比 **单池 vs 双池** 扩增策略在覆盖率与均匀性上的差异；  
  - 与经典方法（Ion Torrent PCR方案）进行理论适配性比较。  
  - 内部参考：用 Sanger 测序结果验证部分区域（约扩增子1–3）的准确性。

---

## 四、资源与算力

- 文中**未提及GPU或计算资源具体信息**。  
  所有分析基于常规工作站运行 Nanopore 官方软件（MinKNOW、Dorado、Clair3、minimap2、Kraken2、SAMtools 等）。训练或大规模深度学习过程并非本研究重点。

---

## 五、实验数量与充分性

- **总体实验量**：约120次PCR及独立测序分析，涵盖五个HBV基因型与广泛Ct值区间。  
- **实验类型**：
  - 扩增策略比较实验（单池/双池）；
  - 不同Ct值敏感度评估；
  - 扩增子性能统计；
  - 引物错配算法分析；
  - 共识深度阈值（20× vs 10×）消融实验；
  - 人源污染检验与特异性分析。  
- **充分性点评**：实验覆盖全面，样本种类与Ct范围广，统计分析与相关性验证较完整，结论具可信度；但未与其他测序平台或方案（如Lumley 2025引物集）进行直接定量对比。

---

## 六、主要结论与发现

1. **总体表现**：  
   - 基因组覆盖率中位数约50%，但样本间差异显著（从0%到99%）；  
   - 基因型间覆盖率差异不显著（A–E均相近）。
2. **扩增子表现不均衡**：  
   - 前半段（扩增子1–5）表现良好，扩增深度高（部分>100×）；  
   - 后半段（6–10）扩增较低，常低于20×阈值，导致基因组中段缺失。  
3. **Ct值相关性**：  
   - 覆盖率与Ct值呈显著负相关（r=-0.59，p<0.001）；高病毒载量样本更容易获得完整基因组。  
4. **多重策略影响小**：  
   - 单池与双池实验在总体覆盖率上差异不显著（Pearson R=0.68，p<0.001）。  
5. **引物错配度**：平均错配数低（多在1个以内），3′末端匹配度良好，表明扩增不均主要不是序列不匹配引起。  
6. **共识深度阈值实验**：将阈值从20×降至10×，平均覆盖提升5.5个百分点，但引入轻微误差，改善有限。

---

## 七、研究优点

- **实验设计系统化**：从引物重设计到序列分析流程全面验证。  
- **方法复现性强**：所有工具和脚本基于开源Nanopore生态（ARTIC pipeline、Clair3等）。  
- **样本覆盖广**：包含五个主要HBV基因型与宽Ct范围，验证普适性。  
- **数据公开与透明**：所有分析数据与参考序列在 FigShare 和 ENA 公开。  
- **合理对照与统计**：采用Pearson相关、回归分析、质控过滤等，保证客观性。

---

## 八、不足与局限

- **引物性能失衡**：后半段扩增子效率低，导致全基因组恢复受限；需重新设计或引入冗余引物。  
- **策略比较局限**：只比较两种池模式，未与最新HEPTILE方案或探针捕获技术对比。  
- **算力与自动化评估缺失**：未提供pipeline运行效率或算力需求细节。  
- **样本量局限性**：虽数量较多，但未包含高降解或极低浓度样本的系统评估。  
- **临床验证范围有限**：尚未验证该方法在大规模监测或耐药突变检测中的临床使用性能。

---

**结论概述**：该研究证明去除Ion Torrent接头后的Ringlander引物集能在Nanopore平台实现多重铺片PCR扩增，但受限于扩增子性能不均，当前方案难以稳定恢复完整HBV基因组，后续需进一步优化引物覆盖及PCR条件。

---

（完）
