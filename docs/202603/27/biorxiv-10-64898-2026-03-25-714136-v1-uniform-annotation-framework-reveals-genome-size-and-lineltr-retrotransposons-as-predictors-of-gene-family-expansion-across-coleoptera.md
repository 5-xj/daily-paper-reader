---
title: Uniform annotation framework reveals genome size and LINE/LTR retrotransposons as predictors of gene family expansion across Coleoptera
title_zh: 统一的注释框架揭示了基因组大小和 LINE/LTR 逆转录转座子是鞘翅目基因家族扩张的预测因子
authors: "Trabert, M., Boman, J., Immonen, E."
date: 2026-03-27
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.25.714136v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 基因组大小与基因家族扩张
tldr: 本研究针对鞘翅目昆虫基因组注释不一致导致的研究偏差，开发了统一的注释框架。通过对甲虫基因组的重新标注，发现基因家族演化与基因组大小及重复序列（如LINE和LTR）丰度显著正相关。研究识别出近500个快速演化的基因家族，涉及化学感知和解毒等关键生态功能，揭示了基因组架构和重复序列动态是决定基因家族演化能力的基础。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-25-714136-v1/fig-001.webp\", \"caption\": \"Figure 3: Orthofinder and CAFE5 results. (A): Scatterplot of repeat content vs. genome size of all species. The regression line and confidence interval are based on a linear regression of the plotted values, but the p-value was calculated based on a linear regression with the phylogenetically independent contrasts (PICs) of both variables. (B): Number of orthogroups and all genes in orthogorups in each species as identified by Orthofinder (genes not assigned to an orthogroup are not included). (C): Number of members each orthogroup has in each species (gene family size). Separated into significantly rapidly evolving (orange) and not rapidly evolving (gray) according to CAFE results. Two very high peaks in A. obtectus have been identified as transposases and are therefore not shown and removed from further analysis (see SI section 5.2). (D): We have calculated the Spearman correlation coefficient for every orthogroup: within the orthogorup, every species is a data point with GS correlated with species gene family sizes (for repeat content instead of GS see Fig. SR12). All gene family sizes, repeat proportions, and genome sizes are transformed to phylogenetically independent contrasts. Orthogroups with individual significant p-values from the correlation are highlighted before and after Benjamini-Hochberg correction for multiple testing. Individual orthogroups cover a wide range of correlation coefficients, both positive and negative, but after multiple-testing correction none are significant with repeat content, and only very few for GS (Flybase orthologs: FBgn0017414, FBgn0028931, FBgn0032456 and FBgn0259199). The mean correlation coefficient is above 0.\", \"page\": 11, \"index\": 1, \"width\": 950, \"height\": 858}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-25-714136-v1/fig-002.webp\", \"caption\": \"Figure 4: Repeat content in the surroundings of significantly expanding transcripts. (A, C): Abundance of different repeat classes according to repeatmasker annotations around transcripts that are part of significantly rapidly evolving orthogroups. All transcripts in an individual species are filtered to include only orthogroups that are actually expanding in this species (at least two gene family members) to only include transcripts potentially duplicated through TE activity. We show two exemplary species C. maculatus (A) and B. siliquastri (C), all species can be found in the Supplementary Figures section 2. All plots are based on the same number of significant and nonsignificant orthogroups from the CAFE5 analysis, but the gene family sizes within the orthogroups differ (see Fig. 1A), resulting in the different transcript numbers between species. (B, D): p-values form Wilcoxon tests for higher repeat content in expanding transcripts for C. maculatus (B) and B. siliquastri (D). Repeat content data was downsampled to only contain every 500th base, meaning 20 points before and 20 after the transcript, to increase the independence. See Supplementary Figures section 3 for Wilcoxon test results for all species, and plots of polynomial regressions of the significant repeat categories in all species.\", \"page\": 14, \"index\": 2, \"width\": 948, \"height\": 571}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-25-714136-v1/fig-003.webp\", \"caption\": \"Figure 2: Evaluation of the uniform annotation pipeline. (A): BUSCO evaluation of both annotation sets, red bars are the native annotation, and orange are the uniform annotation. For most assemblies the scores are very similar. (B): Number of genes annotated in three different annotation methods and proportion of which are single-exon. Red bars are the heterogeneous native annotations, yellow bars are the homogeneous annotations as described in Fig. 1B, and the blue bars are also the uniform annotation pipeline, but without uniform repeatmasking. (C): Histograms of protein length distribution for all species in both annotations. Native annotations (red) show variable shapes of the histograms, while uniform (orange) annotations show similar distributions in all assemblies. Note that all species are only shown up to 1000 AAs. (D): The two annotations are based on the same assembly, therefore their annotated features can be compared for position overlap. Visual representation of calculating the overlap of two annotations based on the same assembly. Each annotation is used as a query once, and for every exon in the query annotation the number of exons it overlaps with in the reference annotation are counted. (E): For each species, the overlap of annotated exons with native query (red) and uniform query (orange) is shown. A feature can overlap with features in the other annotation in three ways: 1-to-1, 1-to-many (multi-overlap), or no overlap. The number of exons that show 1-to-1 overlaps is the same for both annotations in a species, but this number makes up a different proportion of the total number of annotated exons for each annotation method.\", \"page\": 8, \"index\": 3, \"width\": 921, \"height\": 949}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-25-714136-v1/fig-004.webp\", \"caption\": \"Figure 1: Schematic visualizations of key concepts. (A): Visual representation of the difference between gene family and orthogroup. This is one possible scenario, the speciation and duplication events can occur in any order. (B): Flowchart of the computational pipeline used to create the uniform annotations. Highlighted are the aspects we have varied in different ways to explore how they affect genome annotation. (blue) All assemblies we have used were already repeatmasked, but we have masked them again with a de novo generated repeat library (referred to as re-masking) and used the repeat libraries for an additional filtering step. (red) Genome annotation can be supported by protein evidence (from a wide variety of species) and also RNA-seq evidence (species-specific, higher quality evidence than protein), and we test how these data impact genome annotation in different ways.\", \"page\": 4, \"index\": 4, \"width\": 852, \"height\": 533}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-25-714136-v1/fig-005.webp\", \"caption\": \"Figure 5: Functional evaluation of significantly rapidly evolving orthogroups. We have functionally clustered the significantly rapidly evolving orthogroups as described in the text and then evaluated them according to functional themes that have been found to be rapidly evolving in other insect orders. (A) We show the proportion of the identified functional themes in all the significantly rapidly evolving orthogroups. The proportion is higher when looking at the transcript numbers, compared to orthogroup numbers, showing that these functional categories are often in expanding gene families. (B, C, D, E) Gene family sizes of functional groups of interest. Each line is an individual orthogroup, showing the number of gene family members that orthogroup has in each species.\", \"page\": 16, \"index\": 5, \"width\": 950, \"height\": 904}]"
motivation: 旨在探究基因组大小和重复序列丰度如何影响基因家族的演化，并解决因注释方法不统一导致的比较分析偏差。
method: 开发并应用了一套统一的基因组重新注释框架，对鞘翅目昆虫的重复序列和基因家族进行了系统性的比较评估。
result: 识别出近500个涉及化学感知和解毒功能的快速演化基因家族，并证实基因组大小及重复序列丰度与基因家族扩张呈正相关。
conclusion: 研究证明了基因组架构和重复序列动态是决定基因家族演化能力和物种生态适应性的核心要素。
---

## 摘要
基因家族演化——即重复同源基因的更替——塑造了基因组结构并推动了表型创新。重复元件 (REs) 促进了基因重复和基因组扩张，但重复序列丰度和基因组大小 (GS) 的变异是否随物种间的基因家族演化而按比例变化仍不清楚。由于鞘翅目具有显著的生态多样化和广泛的基因组大小变异，它为研究这些动态过程提供了一个理想的系统。然而，由于异质的基因组注释扭曲了基因计数和直系同源组 (orthogroup) 的分配，这些关系的比较测试受到了阻碍。我们首先评估了重复序列和基因注释策略如何影响甲虫基因组中基因和直系同源组的检测。随后，我们对两者应用了统一的重新注释，以识别快速演化的基因家族，并测试 GS 和重复序列含量是否与基因家族大小的演化共变。鞘翅目中有近 500 个直系同源组正在快速演化，其中许多与化学感官知觉和解毒等关键生态功能相关。GS 与 RE 丰度相关，且平均而言与基因家族大小呈正相关。LINE 和 DNA 转座元件通常位于快速扩张的基因家族两侧，但存在显著的物种特异性差异。总之，这些发现将基因组结构和重复序列动态定位为基因家族可演化性的基本决定因素。

## Abstract
Gene family evolution - the turnover of duplicated homologous genes - shapes genome architecture and fuels phenotypic innovation. Repetitive elements (REs) facilitate gene duplication and genome expansion, yet whether variation in repeat abundance and genome size (GS) scales with gene family evolution across species remains unclear. Coleoptera provides a well-suited system for examining these dynamics because of its major ecological diversification and extensive genome size variation. Comparative tests of these relationships are however hindered by heterogenous genome annotations that distort gene counts and orthogroup assignments. We first evaluate how repeat- and gene-annotation strategies influence gene- and orthogroup-detection across beetle genomes. We then apply unified re-annotations of both to identify rapidly evolving gene families and test whether GS and repeat content covary with gene family size evolution. Nearly 500 orthogroups are rapidly evolving in Coleoptera, many of which are linked to ecologically crucial functions such as chemosensory perception and detoxification. GS and RE abundance are correlated, and on average scale positively with gene family sizes. LINE and DNA transposable elements commonly flank rapidly expanding gene families, but with pronounced species-specific variation. Together, these findings position genome architecture and repeat dynamics as fundamental determinants of gene family evolvability.

---

## 论文详细总结（自动生成）

这是一份关于论文《Uniform annotation framework reveals genome size and LINE/LTR retrotransposons as predictors of gene family expansion across Coleoptera》的结构化深入分析报告。

---

### 1. 论文的核心问题与整体含义
*   **研究动机**：基因家族的扩张（通过基因重复实现）是生物表型创新和生态适应的核心驱动力。虽然已知重复元件（TEs）和基因组大小（GS）可能促进基因重复，但在大尺度跨物种比较中，这种关联是否具有普遍规律仍不清楚。
*   **核心挑战**：现有的公共基因组注释存在严重的“异质性”（即不同物种使用不同的软件、参数或证据来源），这会人为导致基因计数偏差，从而扭曲对基因家族演化的推断。
*   **研究目标**：通过建立统一的注释框架，消除技术噪声，探究鞘翅目（甲虫）中基因组架构（GS 和 TEs）如何预测基因家族的演化动态。

### 2. 论文提出的方法论
*   **核心思想**：采用“统一化”策略，对所有目标基因组进行从头开始的标准化处理，确保物种间的差异源于生物学而非技术手段。
*   **关键技术流程**：
    1.  **统一重复序列处理**：不依赖现有库，使用 `RepeatModeler2` 对每个物种进行从头建模，并用 `RepeatMasker` 统一执行“重新掩盖”（Re-masking）。
    2.  **统一基因预测**：使用 `BRAKER3` 混合预测流程，仅依赖蛋白质同源证据（OrthoDB Arthropoda 库），刻意排除异质的 RNA-seq 数据以维持一致性。
    3.  **质量过滤**：利用 `AGAT` 提取最长异构体，并通过 `BLASTp` 过滤掉未能被掩盖的 TE 衍生蛋白模型。
    4.  **演化建模**：利用 `Orthofinder` 划分直系同源组，结合 `CAFE5` 识别快速演化的基因家族。
    5.  **统计校正**：使用系统发育独立对比（PIC）方法校正物种间的亲缘关系，确保统计分析的独立性。

### 3. 实验设计
*   **数据集**：选取了鞘翅目多食亚目（Polyphaga）的 13 个代表性基因组，涵盖 4 个总科和 6 个科，基因组大小跨度从 200Mb 到 1.2Gb。以黑腹果蝇（*D. melanogaster*）作为外群。
*   **对比场景（Benchmark）**：
    *   **原生 vs. 统一**：对比 NCBI 等数据库提供的“原生注释”与本研究生成的“统一注释”。
    *   **掩盖敏感性测试**：对比“统一掩盖”与“不充分掩盖”对基因预测数量的影响。
    *   **RNA-seq 偏差测试**：以豆象（*C. maculatus*）为例，测试使用三个不同地理种群的 RNA-seq 数据对同一组装结果进行注释产生的差异。
*   **评估指标**：BUSCO 完整性评分、蛋白质长度分布曲线、外显子位置重叠度。

### 4. 资源与算力
*   **算力来源**：论文明确提到计算工作是在瑞典国家学术超级计算基础设施（NAISS）的 **UPPMAX** 资源上完成的（项目编号 2026/1-8）。
*   **具体细节**：文中**未明确说明**具体的 GPU 型号、核心数量或总训练/计算时长。考虑到 `BRAKER3` 和 `RepeatModeler2` 的计算特性，这通常涉及大量的 CPU 核心时（Core hours）。

### 5. 实验数量与充分性
*   **实验规模**：对 13 个全基因组进行了完整的重新注释、直系同源分析和演化速率建模。
*   **充分性评估**：
    *   **充分**：论文通过 RNA-seq 来源偏差实验有力地证明了统一框架的必要性；`CAFE5` 运行了 20 次以确保结果收敛；使用了 PIC 统计校正，避免了系统发育偏差。
    *   **客观性**：通过对比原生注释的蛋白长度分布，客观展示了统一框架如何消除“短基因虚增”现象。
    *   **局限性**：虽然在方法论上非常充分，但 13 个物种对于拥有 30 万种以上的鞘翅目来说，样本量仍显单薄。

### 6. 主要结论与发现
*   **注释偏差的危害**：不统一的注释会导致基因数量虚增（最高达 2 万个），且多为短的、由 TE 衍生的错误模型。
*   **GS 与基因家族的关系**：基因组大小（GS）是基因家族平均大小的强预测因子；基因组越大，基因家族往往扩张越显著。
*   **TE 的局部效应**：LINE 和 LTR 逆转录转座子以及 DNA 转座子显著富集在快速扩张基因家族的侧翼（1-4kb 范围内），暗示了它们在介导基因重复中的直接作用。
*   **功能富集**：识别出 496 个快速演化家族，主要涉及**化学感知**（嗅觉受体、气味结合蛋白）、**解毒作用**（细胞色素 P450）、信息素合成和免疫，这些均与甲虫的生态位占据和宿主适应密切相关。

### 7. 优点
*   **方法论严谨**：深刻揭示了生物信息学分析中“垃圾进，垃圾出”的问题，强调了统一注释框架在比较基因组学中的基石作用。
*   **工具价值**：开发的 `ReVis` 软件包和统一流程为非模型生物的基因组比较研究提供了高标准的参考。
*   **多维度关联**：不仅关注基因组全局特征（GS），还深入到局部重复序列景观（Repeat Landscape），提供了更细致的演化机制解释。

### 8. 不足与局限
*   **物种覆盖度**：研究仅限于多食亚目，未包含鞘翅目其他亚目，结论的普适性有待进一步验证。
*   **证据权衡**：为了追求统一性而舍弃 RNA-seq 证据，可能会导致某些低表达、高度组织特异性或新起源基因（de novo genes）的漏检。
*   **因果机制**：研究揭示了 TEs 与基因扩张的空间相关性，但对于具体的分子机制（如逆转录转座 vs. 不等交换）仍停留在推论阶段，缺乏直接的实验验证。

---
（完）
