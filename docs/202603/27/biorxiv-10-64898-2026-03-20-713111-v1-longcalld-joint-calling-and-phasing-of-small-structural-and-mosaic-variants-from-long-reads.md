---
title: "LongcallD: joint calling and phasing of small, structural and mosaic variants from long reads"
title_zh: LongcallD：基于长读段的小变异、结构变异和嵌合变异联合检测与定相
authors: "Gao, Y., Liao, W.-W., Qin, Q., Hall, I. M., Li, H."
date: 2026-03-22
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.20.713111v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 长读长测序变异调用与分型的统一框架
tldr: LongcallD是一个针对长读长测序数据的统一分析框架，旨在解决现有工具将小变异、结构变异（SV）和分型割裂处理的问题。该工具利用局部多序列比对技术，实现了小变异与SV的同步检测与分型。通过整合生殖系分型和逆转录转座特征，它能高效识别低比例嵌合变异及单读长支持的移动元件插入。相比现有方法，LongcallD在提升SV和嵌合变异检测准确性的同时，保持了极高的小变异检测性能，为复杂遗传架构研究提供了有力支持。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-20-713111-v1/fig-001.webp\", \"caption\": \"Fig. 3 | Accuracy of SV calling. a, FDR and FNR of SVs on HiFi and T2T data. Metrics were 213 calculated using truvari in “refine” mode, with SVs stratified by genomic context (tandem repeats 214 vs. other regions). Dipcall, PAV, cuteSV-asm, and SVIM-asm were applied to long-read assembly 215 alignments, T2T-dipcall and T2T-PAV were applied to T2T assembly alignments. All other callers 216 were applied to long-read alignments. b, FDR and FNR of SVs on ONT data. 217\", \"page\": 11, \"index\": 1, \"width\": 1024, \"height\": 479}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-20-713111-v1/fig-002.webp\", \"caption\": \"Fig. 5 | Haplotype-aware alignment refinement by longcallD. Top, tandem repeat annotation 276 and reference genome sequence. Middle, HG002 raw HiFi long-read alignments displaying 277 fragmented, inconsistent insertions and clippings. Bottom, haplotype-phased and refined 278 alignments produced by longcallD. In this example, longcallD identified three large insertions on 279 both haplotypes, together with other small variants. 280\", \"page\": 15, \"index\": 2, \"width\": 968, \"height\": 548}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-20-713111-v1/fig-003.webp\", \"caption\": \"Fig. 4 | SV- and region-wise genotype and basepair F1 scores. a, SV-wise F1 scores in whole 266 confident and tandem repeat regions on HiFi and T2T data, measured by aardvark. Dipcall, PAV, 267 cuteSV-asm, and SVIM-asm were applied to long-read assembly alignments, T2T-dipcall and 268 T2T-PAV were applied to T2T assembly alignments, all other callers were applied to long-read 269 alignments. b, SV-wise F1 scores on ONT data. c, Region-wise F1 score distribution in tandem 270 repeats on HiFi and T2T data, merged calls are shown for SV-only callers. Curves represent the 271 fraction of tandem repeat regions (y-axis) achieving an F1 score above a given threshold (x-axis). 272 d, Region-wise F1 score distribution in tandem repeats on ONT data. 273\", \"page\": 14, \"index\": 3, \"width\": 967, \"height\": 579}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-20-713111-v1/fig-004.webp\", \"caption\": \"Fig. 6 | Low-VAF mosaic SNV and MEI calling. a, Precision and recall of mosaic SNV calls 354 on COLO829BLT50 in easy regions using HiFi and ONT data. Clair-Mosaic did not report any 355 mosaic SNVs on ONT dataset. b, Alternative allele depth of TP mosaic SNV calls on 356 COLO829BLT50 using HiFi data. LongcallD, detected exclusively by longcallD; DeepSomatic, 357 detected exclusively by DeepSomatic; LC&DS, detected by both longcallD and DeepSomatic 358 but not by Clair-Mosaic; Clair-Mosaic, detected exclusively by Clair-Mosaic; LC&DS&CM, 359 detected by all three callers. Wilcoxon rank-sum tests were used to compare the alternative allele 360\", \"page\": 19, \"index\": 4, \"width\": 1168, \"height\": 1013}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-20-713111-v1/fig-005.webp\", \"caption\": \"Fig. 2 | Characterization of noisy regions and small-variant calling accuracy. a, Fractions of 184 haplotype-aware and haplotype-agnostic noisy regions identified by longcallD on HG002. b, 185 Length distribution of noisy regions identified by longcallD on HG002. c, False positives per 186 million bases (FPPM) and false-negative rates (FNR) for SNPs on HG002 HiFi data and 187 corresponding T2T assemblies, evaluated using hap.py. Variants are stratified into all regions, 188 homopolymer regions, and non-homopolymer regions. LongcallD, DeepVariant, and Clair3 were 189 applied to long-read alignments, dipcall and PAV were applied to alignments of long-read 190 assemblies, T2T-dipcall and T2T-PAV were applied to alignments of T2T assemblies. d, FPPM 191 and FNR for indels on HG002 HiFi data. e, FPPM and FNR for SNPs on HG002 ONT data. f, 192 FPPM and FNR for indels on HG002 ONT data. 193\", \"page\": 9, \"index\": 5, \"width\": 768, \"height\": 686}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-20-713111-v1/fig-006.webp\", \"caption\": \"Fig. 1 | Illustration of the longcallD variant calling workflow. a, Classification of candidate 98 regions into clean and noisy categories. b, Local haplotagging of long reads using heterozygous 99\", \"page\": 5, \"index\": 6, \"width\": 987, \"height\": 516}]"
motivation: 现有长读长分析工具通常将小变异、结构变异检测与分型视为独立任务，未能充分利用长读长数据在跨越多种变异类型及携带分型信息方面的潜力。
method: 提出LongcallD框架，采用局部多序列比对同步进行变异检测与分型，并结合生殖系分型和逆转录转座特征来识别嵌合变异。
result: 该方法显著提升了结构变异发现和嵌合变异检测的准确性，同时在小变异检测方面保持了与现有顶尖工具相当的竞争力。
conclusion: LongcallD为临床和进化应用中解析复杂遗传架构提供了一个稳健且高效的统一分析基础。
---

## 摘要
长读段测序是一种强大的技术，能够在单个连续读段中捕捉多个变异。这种长度使得单个读段能够跨越小变异和结构变异，同时携带关键的定相信息。然而，目前的计算工具在很大程度上将小变异检测、结构变异（SV）检测和定相视为相互独立的问题，未能充分发挥长读段的潜力。在此，我们提出了 longcallD，这是一个利用局部多序列比对同时检测和定相小变异及结构变异的统一框架。通过整合生殖系定相和逆转录转座特征，longcallD 还能识别低比例的嵌合变异，并检测由单个读段支持的可移动元件插入。与现有方法相比，我们的统一方法在保持具有竞争力的小变异检测性能的同时，显著提高了 SV 发现和嵌合变异的准确性。我们预见 longcallD 将为临床和进化应用中解析复杂的遗传结构提供坚实的基础。

## Abstract
Long-read sequencing is a powerful technique capturing multiple variants within single continuous reads. This length allows individual reads to bridge small and structural variants while carrying crucial phasing information. However, current computational tools treat small variant calling, structural variant (SV) detection and phasing as largely disconnected problems, failing to unleash the full potential of long reads. Here, we present longcallD, a unified framework utilizing local multiple-sequence alignment to simultaneously call and phase small and structural variants. By integrating germline phasing and retrotransposition hallmarks, longcallD also identifies low-fraction mosaic variants and detects mobile element insertions supported by a single read. Compared to existing methods, our unified approach substantially improves SV discovery and mosaic variants accuracy while maintaining competitive small variant calling. We anticipate that longcallD will provide a robust foundation for resolving complex genetic architectures in clinical and evolutionary applications.

---

## 论文详细总结（自动生成）

以下是对论文《LongcallD: joint calling and phasing of small, structural and mosaic variants from long reads》的深度结构化总结：

### 1. 核心问题与研究动机
*   **核心问题**：尽管长读长测序（PacBio HiFi 和 ONT）能够跨越多个变异位点并提供天然的定相（Phasing）信息，但现有的生物信息学工具通常将**小变异检测（SNPs/Indels）**、**结构变异检测（SV）**和**定相**视为三个独立的计算问题。
*   **研究动机**：
    *   现有工具在处理复杂区域（如串联重复序列 LCRs）时，由于缺乏对 SV 的感知，容易产生错误的对齐，导致小变异检测假阳性。
    *   SV 检测工具往往忽略读段的定相信息，导致在重复序列中的检测精度受限。
    *   低频嵌合变异（Mosaic variants）的检测极易受到测序错误干扰，亟需利用单倍型信息进行过滤。

### 2. 方法论
LongcallD 提出了一个统一的框架，核心思想是**“分而治之”与“迭代定相”**：
*   **区域分类**：将基因组划分为“清洁区域”（对齐准确）和“噪声区域”（包含同聚物、STR、VNTR 或 SV 边界）。
*   **清洁区域检测**：直接通过等位基因计数调用高置信度的生殖系 SNPs 和小 Indels。
*   **噪声区域检测（核心技术）**：
    *   **局部多序列比对（MSA）**：利用 `abPOA` 和 `WFA` 算法，对噪声区域的读段进行局部重比对。
    *   **单倍型感知共识序列**：根据清洁区域的杂合变异对读段进行分组（Haplotagging），生成单倍型特异的共识序列，再与参考基因组比对以提取变异。
*   **迭代定相算法**：构建读段-变异兼容性矩阵，通过多数投票机制在变异分配和读段分配之间交替迭代，直至收敛，实现全基因组范围的联合定相。
*   **嵌合变异检测**：利用已建立的单倍型背景，要求嵌合变异的支撑读段必须严格一致地分布在单一单倍型上，并结合移动元件（MEI）的特征（如 TSD 和 polyA 尾部）进行高灵敏度检测。

### 3. 实验设计
*   **数据集**：
    *   **生殖系变异**：GIAB HG002 样本（PacBio HiFi 63x, ONT R10.4.1 50x）。
    *   **嵌合变异**：COLO829 肿瘤-正常混合样本（1:49 比例）、H2009 混合样本（1:10 比例）。
*   **Benchmark 标准**：
    *   使用最新的 T2T HG002 Q100 v1.1 作为生殖系变异的真集。
    *   使用 `hap.py` 评估小变异，`Truvari` 和 `aardvark`（基于序列的评估工具）评估 SV。
*   **对比方法**：
    *   **小变异**：Clair3, DeepVariant, dipcall, PAV。
    *   **SV**：cuteSV, Sniffles2, pbsv, sawfish, SVDSS 等 8 种工具。
    *   **嵌合变异**：DeepSomatic, Clair-Mosaic, Sniffles2 (mosaic mode)。

### 4. 资源与算力
*   **效率表现**：论文明确提到 LongcallD 具有极高的计算效率。
*   **具体数据**：在标准服务器上使用 **16 个线程**处理 40x HiFi 对齐文件仅需 **19 分钟**，峰值内存小于 **20GB**。
*   **对比**：相比之下，DeepVariant + HiPhase + Sniffles2 组合需要 218 分钟和 40GB 内存；基于组装的方法（如 hifiasm）则需要数倍的时间和内存。

### 5. 实验数量与充分性
*   **实验规模**：涵盖了两种主流长读长技术（HiFi/ONT）、两种变异类型（生殖系/嵌合）、多种基因组区域（全基因组/重复序列/同聚物）。
*   **充分性评估**：实验设计非常充分。作者不仅评估了变异调用的准确率（Precision/Recall），还通过 `aardvark` 进行了单倍型级别的序列一致性分析，这在 SV 评估中比传统的坐标匹配更客观、更严苛。此外，还进行了测序深度的下采样实验以测试稳健性。

### 6. 主要结论
*   **SV 检测领先**：在串联重复序列中，LongcallD 的 SV 检测准确率显著优于所有基于对齐的工具，达到了与基于组装的方法（PAV/dipcall）相当的水平。
*   **小变异性能稳健**：在非同聚物区域表现优异，但在同聚物区域略逊于基于深度学习的 DeepVariant。
*   **嵌合变异突破**：能够准确识别仅由 1-2 条读段支持的低频嵌合变异，假阳性率极低，尤其在 MEI 检测上表现突出。
*   **联合分析的价值**：证明了同时处理小变异和 SV 是重建准确单倍型的关键。

### 7. 优点与亮点
*   **统一框架**：打破了变异类型之间的壁垒，实现了真正的联合检测与定相。
*   **局部 MSA 策略**：有效解决了长读长在复杂区域对齐不一致的问题，无需进行昂贵的全基因组组装。
*   **极高性能**：运行速度极快，内存占用低，非常适合大规模临床样本分析。
*   **嵌合变异灵敏度**：通过单倍型约束，极大地提升了对极低频变异的检测信心。

### 8. 不足与局限
*   **同聚物 Indel 精度**：在 ONT 数据的同聚物区域，由于缺乏深度学习模型对特定测序错误的建模，Indel 检测精度仍有提升空间。
*   **变异类型覆盖**：目前尚未支持复杂的 SV 类型，如倒位（Inversions）和易位（Translocations）。
*   **嵌合小 Indel**：由于长读长测序错误模式与小 Indel 难以区分，目前 LongcallD 暂不报告嵌合小 Indel。
*   **应用限制**：主要针对人类基因组优化，在其他物种或极高倍性基因组中的表现尚未验证。

（完）
