---
title: Benchmarking SNP-Calling Accuracy Against Known Citrus Pedigrees Reveals Pangenome Advantages Over Linear References
title_zh: 以已知柑橘谱系为基准评估 SNP 调用准确性揭示泛基因组较线性参考的优势
authors: "Kuster, R. D., Sisler, P., Sandhu, K., Yin, L., Niece, S., Krueger, R., Dardick, C., Keremane, M., Ramadugu, C., Staton, M. E."
date: 2026-04-09
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.07.716967v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 在柑橘育种谱系中基准测试SNP调用准确性和泛基因组优势。
tldr: 该研究构建了四种柑橘物种的超泛基因组，用杂交谱系样本比较泛基因组与线性参考的SNP检测性能，结果显示泛基因组能显著改善单倍型重建精度，减少参考偏倚影响，为非模式物种的变异检测提供了更可靠的方法。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-716967-v1/fig-001.webp\", \"caption\": \"Figure 7. MIER rates increase in regions where parental haplotypes are clipped from the pangenome graph. On the x-axis, Citrus trios are grouped by the Australian lime founder line. MIER was calculated for SNPs originating from parts of the pangenome graph where zero, one, or two (both) Australian lime haplotypes were clipped in the super pangenome graph for (A) F1 hybrids and (B) advanced hybrids. Significant pairwise group differences (p < 0.05) were calculated post-hoc using Dunn’s test.\", \"page\": 43, \"index\": 1, \"width\": 904, \"height\": 827}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-716967-v1/fig-002.webp\", \"caption\": \"Figure 12. Schematic of hypothetical read mapping scenarios involving hybrid parental reads derived from either of two parental genomes (green or orange). Diverged regions that do not align are visualized as green “bubbles” (top). Where reads cannot be surjected to the reference, those are visualized as grey “bubbles” (middle). SNPs are represented as dots within reads. (Column A) SNP calls derived from accurate read mapping to a single origin represented in the full graph (top row), after surjection (middle row) and from linear alignment (bottom row). (Column B) Reads that originate from an insertion (green), which would map correctly to the graph (top) and be lost during surjection (middle), may mismap in the linear reference (bottom) to produce incorrect heterozygous calls. (Column C) Reads align to the correct target in the full graph. Surjection to a private allele in the reference produces false homozygous interpretation of this locus. Mismapping to the linear reference also creates false calls. (Column D) Clipping in the graph (scissors delineate clipped regions) produces a similar set of false heterozygous calls similar to linear B,C,D.\", \"page\": 47, \"index\": 2, \"width\": 904, \"height\": 479}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-716967-v1/fig-003.webp\", \"caption\": \"Table 1. Number and percent of clipped bases in each haplotype. ‘Fortune’ primary is never clipped as the reference path for the graph.\", \"page\": 7, \"index\": 3, \"width\": 696, \"height\": 629}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-716967-v1/fig-004.webp\", \"caption\": \"Figure 1. (Top) Citrus phylogeny. Bold values at cladogram nodes represent bootstrap values and branch labels represent phylogenetic distance. (Bottom) Visual summary of breeding program with F1s on the left and advanced hybrids on the right.\", \"page\": 39, \"index\": 4, \"width\": 904, \"height\": 612}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-716967-v1/fig-005.webp\", \"caption\": \"Figure 2: (A) Growth curve of nodes in the Citrus super-pangenome found in one or more, two or more, three or more, or all twelve haplotypes (core). (B) New nodes contributed by the addition of each sample with sample labels of ”1” referencing the primary haplotype, and “2” referencing the alternate haplotype.\", \"page\": 39, \"index\": 5, \"width\": 904, \"height\": 323}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-716967-v1/fig-006.webp\", \"caption\": \"Figure 5. Agreement of genotype calls of F1s at shared SNP positions across the six SNP calling approaches.\", \"page\": 42, \"index\": 6, \"width\": 904, \"height\": 454}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-716967-v1/fig-007.webp\", \"caption\": \"Figure 6. Plot comparing the mean alternate allele frequency across 30 F1 and six parental lines present on the pangenome when aligned with BWA-MEM versus vg giraffe. In an unbiased scenario, allelic ratios at putative heterozygous sites should center at 0.5.\", \"page\": 42, \"index\": 7, \"width\": 904, \"height\": 233}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-716967-v1/fig-008.webp\", \"caption\": \"Figure 11. Post-masking parental haplotypes reconstructed from (A) linear-alignment based variants, (B) graph-alignment based variants, and (C) smoothed graph-alignment based variants. Ten subsets of each of the three hybrid families studied are denoted with the F1 parent (black = 475_01; brown = 246_01) and P3 outcrossed parent (blue = ‘Algerian Clementine’; pink = ‘Kiyomi Tangor’). Orange blocks indicate the presence of a mandarin grandparent source and the Australian lime contribution is indicated by either green (C. australasica) or dark teal (C. australis).\", \"page\": 46, \"index\": 8, \"width\": 904, \"height\": 854}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-716967-v1/fig-009.webp\", \"caption\": \"Figure 10. Parental haplotypes reconstructed from (A) linear-BCFtools-based variants and (B) vg-surject-BCFtools variants. Ten subsets of each of the three hybrid families studied are denoted with the F1 parent (right boxes, black = F1 hybrid 475_01 [‘Wilking’ x C. australasica]; brown = F1 hybrid 246_01 [‘Wilking’ x C. australis]) and outcrossed parent (right boxes, blue = ‘Algerian Clementine’; pink = ‘Kiyomi Tangor-H12’). Orange blocks indicate the presence of a mandarin grandparent source and the Australian lime contribution is indicated by either green (C. australasica) or dark teal (C. australis). Miscalled variants within blocks (small regions of opposite color within otherwise congruent color blocks) met Mendelian inheritance expectations. Visualizations of all chromosomes available in Supplemental Figures 30-38.\", \"page\": 45, \"index\": 9, \"width\": 904, \"height\": 569}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-716967-v1/fig-010.webp\", \"caption\": \"Figure 8. Summary comparison of genotype call types from linear-BCFtools (solid line) and vg-surject-BCFtools (dotted line) across 100 kb windows on chromosome 1 (additional chromosomes in Supplemental Figures 12-20). Panels from top to bottom: incorrect homozygous reference (yellow), incorrect heterozygous (green), incorrect homozygous alternate (blue), incorrect total (red), correct (dark blue), missing (black).\", \"page\": 44, \"index\": 10, \"width\": 904, \"height\": 524}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-716967-v1/fig-011.webp\", \"caption\": \"Figure 9. Relationship of founder presence in the graph nodes per 100 kb windows along chromosome 1. (A) The node presence of pedigree founders (orange = mandarin; green = Australian lime) vs. the frequency of genotypes per window that are correct (green line). (B) The\", \"page\": 44, \"index\": 11, \"width\": 904, \"height\": 454}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-07-716967-v1/fig-012.webp\", \"caption\": \"Table 2. Performance summary table of SNP calling approaches.\", \"page\": 9, \"index\": 12, \"width\": 920, \"height\": 410}]"
motivation: 为了评估泛基因组在减少参考偏倚和提高跨物种变异检测精度方面的可靠性。
method: 构建基于四种柑橘物种的Minigraph-Cactus超泛基因组，并对两套具有谱系的杂交群体进行全基因组测序和SNP检测比较。
result: 泛基因组检测的SNP数量少于线性参考，但在重建杂交后代的单倍型区块时表现更好。
conclusion: 研究表明，利用谱系验证的方式，泛基因组比线性参考在处理复杂或偏离参考的区域更具优势，可提升变异检测的准确性。
---

## 摘要
背景：泛基因组是基因组学中的一种有前景的新方法，能够减少基因分型中的参考偏差，但这种数据模型在跨物种变异追踪中的可靠性尚不明确。为测试基于图的泛基因组在种间育种中的适用性，我们开发了一个基于 Minigraph-Cactus 的超级泛基因组，代表了柑橘育种项目中四个柑橘种的创始系。为了以图模型和线性参考模型对比评估 SNP 调用的准确性，我们对两组具有谱系关系的后代进行了全基因组短读长测序：30 个 F1 杂交种，以及由一个 F1 与未包含在泛基因组中的亲本杂交得到的 244 个高级杂交种。

结果：线性参考方法检测到更多的 SNP 调用，但两种方法在工具依赖的情况下表现出相似的孟德尔遗传错误率（MIER）。对高级杂交种的亲本单倍型区块重建显示，基于泛基因组图的调用在性能上有显著提升，这表明当参考偏差影响到亲本和后代基因型调用时，MIER 易受误差影响。对偏离参考路径的区域进行掩蔽可提升线性方法和图模型方法的 MIER 准确性指标以及单倍型区块重建性能。

结论：在非模式系统中，从有谱系的杂交后代观察到的遗传模式可为基于泛基因组的变异检测准确性评测提供框架。来自偏离区域的 SNP 误检可能会错误地满足 MIER 筛选标准，因此我们建议采用单倍型区块。泛基因组图的固有结构在去除映射质量不可靠的区域方面具有潜在应用，而这些区域无法通过传统过滤指标可靠地去除。

## Abstract
BackgroundPangenomes are a promising new approach to genomics that can reduce reference bias in genotyping, but the reliability of such a data model remains unclear in tracking variation across species. To test the utility of graph-based pangenomes for interspecific breeding, we developed a Minigraph-Cactus super-pangenome representing four Citrus species derived from the founder lines of a citrus breeding program. To benchmark SNP calling accuracy using graph and linear-based approaches, we performed whole genome short read sequencing for two sets of pedigreed progeny: 30 F1 hybrids and 244 advanced hybrids from an F1 crossed with a parent not included in the pangenome.

ResultsThe linear approach yielded more SNP calls than the graph-based approach, however, both methods exhibited similar Mendelian Inheritance Error Rates (MIER) in a tool-dependent manner. Reconstruction of parental haplotype blocks in the advanced hybrids revealed a striking improvement in performance in the pangenome graph-based calls, suggesting MIER is vulnerable to error when reference bias influences both parental and progeny genotype calls. Masking of regions diverged from the reference path improved MIER accuracy metrics and haplotype block reconstruction in both the linear and graph-based SNP calls.

ConclusionsIn non-model systems, inheritance patterns observed from pedigreed hybrids provide a framework for benchmarking variant-calling accuracy using pangenomes. SNP miscalls originating from diverged regions can falsely satisfy MIER filters, thus we recommend haplotype blocks. The inherent structure of the pangenome graph has promising applications for removing regions of unreliable mapping quality, which cannot otherwise be reliably removed using traditional filtering metrics.

---

## 论文详细总结（自动生成）

# 以已知柑橘谱系为基准评估 SNP 调用准确性揭示泛基因组较线性参考的优势 — 中文总结

---

## 一、核心问题与研究背景

- **研究动机**  
  传统基因组研究多依赖单一线性参考基因组，但这会带来严重的“参考偏倚”（reference bias）问题，尤其在跨物种或高多样性个体中。偏倚导致有变异的序列片段无法正确比对，进而影响 SNP（单核苷酸多态性）调用的准确性。  
- **核心问题**  
  本研究旨在评估“图结构泛基因组”（graph-based pangenome）相较于线性参考基因组在跨种柑橘杂交育种中的 SNP 调用准确性，通过谱系验证方式建立一个严谨的基准：已知亲本与后代的遗传模式（Mendelian inheritance）是否被算法正确重建。  
- **研究意义**  
  泛基因组已在人体、家畜及作物等体系中被验证，但其跨物种的准确性尚存疑。本研究通过构建跨四个柑橘物种的**超级泛基因组（super-pangenome）**，深入测试其在杂交群体基因分型中的应用潜力，为高异质性植物育种提供了新的技术路径。

---

## 二、方法论：核心思想与技术实现

- **总体思路**
  - 通过构建基于 **Minigraph-Cactus (MC)** 管线的柑橘超泛基因组，将多个物种的参考基因组整合成一个图结构；
  - 利用图模型的多样化路径表示多物种差异，从而减少短读长比对时的参考偏倚；
  - 通过**谱系验证（trio-based benchmarking）**计算“孟德尔遗传错误率（Mendelian Inheritance Error Rate，MIER）”作为SNP调用准确性的核心指标；
  - 进一步利用杂交后代的**单倍型区块（haplotype block）重构**验证泛基因组在跨代遗传信号传递中的一致性。
  
- **关键技术要点**
  - **泛基因组构建**：  
    采用六个已分相（haplotype-resolved）柑橘基因组（共12条单倍型）构建MC图，总节点数5160万、边7060万。
  - **比对与变异检测流程**：  
    - 线性参考比对：`BWA-MEM` → `BCFtools / GATK / DeepVariant`。  
    - 图参考比对：`vg giraffe` → `vg pack` + `vg call`。  
    - 混合型流程：`vg giraffe` → `vg surject`（将图比对投影回线性坐标） → `BCFtools / GATK` 调用。  
  - **评估指标**：  
    - 主要：MIER（排除或包含缺失数据两种计算方式）；  
    - 辅助：基因型一致性、缺失率、等位基因比例（allele balance）衡量参考偏倚；  
    - 辅助结构评估：图“剪切率”（clipping amount）与MIER相关性。
  - **掩蔽策略（masking）**：  
    使用图结构信息，屏蔽所有在参考路径中缺失父母物种双倍体路径的区域，以去除潜在高错误区域。

---

## 三、实验设计与对比方案

- **数据来源**
  - 六个创始系：包括三株野生澳洲酸橙种（*C. australis, C. australasica, C. inodora*）与三种栽培柑橘（‘Fortune’, ‘Wilking’, ‘Fallglo’）。
  - 两套谱系实验群体：
    1. **30 个 F1 杂交个体**（亚种间交配，为主要SNP准确性基准）；  
    2. **244 个高级杂交个体（Advanced Hybrids, AD）**，由F1与未在泛基因组中的两个栽培种（‘Algerian Clementine’, ‘Kiyomi Tangor-H12’）进行回交所得。
    
- **比较方法**
  - 共六个SNP调用流程：
    1. linear-BCFtools  
    2. linear-GATK  
    3. linear-DeepVariant  
    4. vg-surject-BCFtools  
    5. vg-surject-GATK  
    6. vg-pack-and-call  
  - 设计对比维度：
    - **SNP数与独特变异数量**
    - **基因型一致性**
    - **缺失率**
    - **MIER**
    - **等位基因平衡（反映参考偏倚）**
    - **图剪切区域与错误率关联**
    - **单倍型区块一致性（跨代验证）**
    
- **Benchmark指标**
  - 以已知谱系的孟德尔遗传规律为基准；
  - 在AD群体中进一步使用“真实单倍型区块”验证 SNP 调用的生物学合理性。

---

## 四、资源与算力情况

- 文中**未明确给出**具体计算资源信息（如GPU型号、CPU核心数、内存或运行时间）。  
- 仅说明使用的主要软件工具版本（如 Minigraph-Cactus v2.9.3，vg v1.64.0，ODGI v0.9.2，BWA-MEM 0.7.18等）；
- 鉴于样本规模（>250个个体全基因组测序）及高复杂度图结构，可推测实验运行需要高性能计算环境（但未注明硬件规格）。

---

## 五、实验数量与充分性分析

- **实验数量**：
  - SNP 调用流程 × 三种代际群体（F1, AD, AD-masked）× 多指标交叉对比；
  - 图剪切与错误率统计（3~5组物种对比×3种剪切类别）；
  - 掩蔽参数扫描（2–1024 bp 阈值范围）；
  - 单倍型重建一致性验证（全基因组 244 个样本）。
- **充分性评价**：
  - 覆盖多代谱系、多个SNP调用器、线性/图/混合模型三类模式；
  - 既有统计指标（MIER、缺失率）也有结构生物学验证（haplotype blocks）；
  - 实验设计全面、对照合理，结论具备统计与生物学双重依据；
  - 唯一不足是DeepVariant模型未重新在植物数据上训练，导致结果偏弱。

---

## 六、主要结论与发现

1. **泛基因组减少参考偏倚：**  
   图对齐（vg giraffe）平均等位基因比为 0.489，更接近理论0.5，而线性BWA比对为0.4569，显示pangenome在异源片段上更好地平衡参考与非参考等位基因的检测。
2. **SNP 总量差异：**  
   线性BCFtools检测约1900万SNP，图模型（vg-pack-and-call）仅491万，但MIER最低（≈1.2%），显示其更保守但更准确。
3. **MIER对比：**  
   - 线性与图混合（vg-surject）方法表现相近（约7–9%）。  
   - 图方法在高“剪切”区域MIER显著增加，反映结构复杂度对图精准度的影响。
4. **高级杂交验证：**  
   图法在单倍型重建中错误率（区块内错配率）为2.11%，优于线性法的5.14%，显示在跨代遗传追踪中泛基因组更可靠。
5. **掩蔽策略有效：**  
   通过屏蔽参考路径缺乏父母贡献的区域，线性与图SNP的MIER分别下降1.3–1.4个百分点，同时 haplotype block 辨识显著改善。

---

## 七、研究优点与创新点

- **设计创新：**
  - 使用真实谱系杂交个体作为“天然真值集”，避免依赖模拟或人为标签；
  - 首次以“单倍型区块继承一致性”作为SNP准确性验证的二级指标；
  - 图结构特征（clipping、founder path presence）与误差率关联分析方法具有普适意义。
- **算法创新：**
  - 构建基于Minigraph-Cactus的跨物种柑橘超泛基因组；
  - 提出“图结构驱动掩蔽（graph-aware masking）”策略，可补充传统质量过滤。
- **实践价值：**
  - 为杂交育种提供泛基因组化的SNP检测规范；
  - 证明泛基因组优势不仅在捕获多样性，也在提升遗传准确性。

---

## 八、不足与局限性

- **算力与可重复性问题：**  
  图构建及分析复杂度高，计算资源未公开，不利于复现。
- **实测偏倚：**  
  使用‘Fortune’作为参考骨架可能对澳洲酸橙类物种存在残余偏倚。
- **模型局限：**  
  DeepVariant未进行植物特异性再训练；vg-pack-and-call在识别小变异时表现过于保守。
- **泛化能力：**  
  研究基于特定跨种杂交体系，尚需验证在其他非模式植物或更高倍体物种中的表现。
- **图剪切问题：**  
  目前必须在图构建阶段剪切高差异片段以保持计算可行，但这会损失部分有效变异信息。

---

**（完）**
