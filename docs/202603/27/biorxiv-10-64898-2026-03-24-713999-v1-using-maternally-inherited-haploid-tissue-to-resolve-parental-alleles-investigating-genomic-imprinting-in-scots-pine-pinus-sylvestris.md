---
title: "Using Maternally Inherited Haploid Tissue to Resolve Parental Alleles: Investigating Genomic Imprinting in Scots Pine (Pinus sylvestris)"
title_zh: 利用母系遗传的单倍体组织解析亲本等位基因：研究欧洲赤松 (Pinus sylvestris) 中的基因组印迹
authors: "Kesälahti, R., Cervantes, S., Niskanen, A., Pyhäjärvi, T."
date: 2026-03-27
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.24.713999v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 研究基因组印记和亲本等位基因遗传
tldr: 本研究旨在探究欧洲赤松中是否存在基因组印迹现象。研究者通过正反交实验，并创新性地利用母本遗传的单倍体雌配子体组织进行外显子捕获，从而精准区分胚胎中的双亲等位基因并过滤旁系同源干扰。虽然在当前数据下未发现明显的基因组印迹证据，但该方法为针叶树及具有类似单倍体组织物种的等位基因解析提供了高效的遗传学框架，具有重要的参考价值。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-24-713999-v1/fig-001.webp\", \"caption\": \"Figure 2: Genome-wide distribution of parent-of-origin expression bias across reciprocal crosses. Manhattan-style plots showing log fold change (logFC) values for all expressed genes across chromosomes in three reciprocal crosses. Each point represents an individual gene positioned according to its genomic coordinate (x-axis) and colored by chromosome. The y-axis shows the logFC between maternal and paternal allele expression, where positive values indicate maternal-biased expression and negative values indicate paternal-biased expression. The dashed horizontal line marks logFC = 0, corresponding to equal parental expression. Chromosomes are displayed sequentially along the x-axis, with the pseudochromosome presented last. This pseudochromosome contains contigs that could not be assigned to any of the established chromosomes.\", \"page\": 8, \"index\": 1, \"width\": 933, \"height\": 223}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-24-713999-v1/fig-002.webp\", \"caption\": \"Figure 3: Distribution of raw P-values from genomic imprinting analysis across reciprocal crosses. Histograms show the distribution of raw P-values obtained from edgeR likelihood ratio tests (LRT) for each reciprocal cross (Cross 1, Cross 2, and Cross 3). Each subplot represents one reciprocal cross, with bars indicating the number of genes within a given P-value bin (bin width = 0.05).\", \"page\": 8, \"index\": 2, \"width\": 933, \"height\": 222}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-24-713999-v1/fig-003.webp\", \"caption\": \"Figure 1: Biological coefficient of variation (BCV) plots from edgeR for three reciprocal crosses. BCV plots show the relationship between the square root of the biological coefficient of variation (y-axis) and the average log-counts per million (log-CPM) for each heterozygous SNP (x-axis). Each plot includes the estimated common BCV (red line), which provides a global dispersion measure used in downstream genomic imprinting analyses. The blue line represents the trended dispersion estimate, capturing the mean–variance relationship across het-SNPs.\", \"page\": 7, \"index\": 3, \"width\": 854, \"height\": 302}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-24-713999-v1/fig-004.webp\", \"caption\": \"Table 2: Top edgeR hits. The table lists the ten heterozygous SNPs with the lowest P-values from each reciprocal cross, together with log fold change (logFC), average log counts per million (logCPM), likelihood ratio (LR), P-value, false discovery rate (FDR), and protein annotations from eggNOG and InterPro. Het-SNPs may overlap with multiple mRNAs, but the best matches are shown here.\", \"page\": 7, \"index\": 4, \"width\": 941, \"height\": 369}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-24-713999-v1/fig-005.webp\", \"caption\": \"Table 1: Summary of maternal allele identification and genotype filtering results.\", \"page\": 6, \"index\": 5, \"width\": 944, \"height\": 660}]"
motivation: 探究针叶树种中是否存在基因组印迹，以填补该表观遗传现象在演化起源研究中的空白。
method: 利用母本遗传的单倍体雌配子体组织进行外显子捕获，以此识别母本等位基因并推断胚胎中的父本来源。
result: 成功开发出一种区分亲本等位基因并去除旁系同源变异的分析框架，但在欧洲赤松中未检测到基因组印迹信号。
conclusion: 该研究证明了利用单倍体组织解析复杂基因组的有效性，为未来针叶树种的遗传与表观遗传研究提供了新路径。
---

## 摘要
基因组印迹是动植物中一种罕见的表观遗传现象，其定义为亲本来源特异性的基因表达。其分子机制和进化意义尚未得到完全理解。在本研究中，我们调查了欧洲赤松以及延伸至其他针叶树中是否存在基因组印迹，以深入了解印迹的进化起源。我们进行了正反交实验以评估种子胚中的印迹情况，并采用了一种独特的方法，即利用来自单倍体、母系遗传的雌配子体组织的外显子组捕获数据来鉴定母本等位基因，从而推断同一颗种子胚中的父本等位基因。我们的研究结果表明，母系遗传的单倍体雌配子体组织为解析后代中的亲本等位基因提供了一种有效的策略，同时能够从数据集中去除大量的旁系同源变异。该框架广泛适用于其他针叶树物种以及具有类似母源单倍体组织的分类群。研究中未检测到基因组印迹的证据。尽管外显子组捕获与 RNA 测序数据集之间的重叠有限，且严格的旁系同源过滤显著减少了可分析的数据量，但未检测到印迹也可能反映了针叶树中印迹信号确实微弱或不存在。我们确定了这项初步研究中的几项局限性，并提出了未来工作的建议以克服这些问题，仍需进一步研究来确定针叶树中是否存在基因组印迹。

## Abstract
Genomic imprinting is a rare epigenetic phenomenon in plants and animals, defined by parent-of-origin specific gene expression. Its molecular mechanisms and evolutionary significance remain incompletely understood. In this study, we investigated whether genomic imprinting occurs in Scots pine and, by extension, in other conifers to gain insight into the evolutionary origins of imprinting. We performed reciprocal crosses to assess imprinting in seed embryos and applied a unique approach that used exome?capture data from the haploid, maternally inherited megagametophyte tissue to identify maternal alleles, thereby allowing us to infer paternal alleles in the embryos of the same seeds. Our findings show that maternally inherited haploid megagametophyte tissue offers an effective strategy for resolving parental alleles in offspring while simultaneously removing extensive paralogous variation from the dataset. This framework is broadly applicable to other conifer species and to taxa that possess comparable maternally derived haploid tissues. No evidence of genomic imprinting was detected. Although the limited overlap between the exome?capture and RNA?sequencing datasets and the stringent paralog filtering reduced the amount of analyzable data considerably, the absence of detectable imprinting may also reflect genuinely weak or absent imprinting signals in conifers. We identified several limitations in this preliminary study and outline recommendations for future work to overcome them, and additional research will be necessary to determine whether genomic imprinting occurs in conifers.

---

## 论文详细总结（自动生成）

这篇论文探讨了在针叶树种——欧洲赤松（*Pinus sylvestris*）中是否存在基因组印迹（Genomic Imprinting）现象，并提出了一套利用单倍体组织解析亲本等位基因的新型实验框架。

### 1. 核心问题与整体含义（研究动机和背景）
*   **核心问题**：在裸子植物（如针叶树）中是否存在基因组印迹（即基因表达仅取决于其来自父亲还是母亲）？
*   **研究背景**：基因组印迹在哺乳动物和被子植物中已被广泛研究，但在演化地位特殊的裸子植物中仍是空白。了解针叶树的印迹情况有助于揭示这一表观遗传现象的演化起源。
*   **整体含义**：针叶树基因组极其庞大且复杂（充满重复序列和旁系同源基因），传统方法难以区分双亲等位基因。本研究旨在建立一种可靠的遗传学框架来解决这一技术瓶颈。

### 2. 论文提出的方法论
*   **核心思想**：利用针叶树种子特有的生物学结构——**单倍体雌配子体（Megagametophyte）**。由于雌配子体与胚胎中的母本基因组完全一致且为单倍体，它可以作为“天然的母本参考”，从而精准区分胚胎（二倍体）中的母本和父本等位基因。
*   **关键技术流程**：
    1.  **正反交实验**：进行 A×B 和 B×A 的杂交，以排除基因型效应，锁定亲本来源效应。
    2.  **外显子捕获（Exome Capture）**：对单倍体雌配子体进行 DNA 测序，确定母本的 SNP 位点。
    3.  **RNA 测序（RNA-seq）**：对同一颗种子的胚胎进行转录组测序。
    4.  **等位基因解析与过滤**：利用雌配子体的单倍体特性，识别并过滤掉由于旁系同源基因（Paralogs）导致的“伪杂合”位点，确保分析的准确性。
    5.  **统计分析**：使用 `edgeR` 等工具计算母本与父本等位基因的表达差异（logFC）。

### 3. 实验设计
*   **数据集/场景**：研究使用了 3 组不同的正反交组合（共 6 个杂交方向），涵盖了多个欧洲赤松个体。
*   **对比方法**：主要对比了胚胎中来自母本和父本的等位基因表达量。
*   **Benchmark**：该研究属于探索性实验，主要参考了被子植物（如拟南芥、玉米）中成熟的印迹分析流程，并针对针叶树的高旁系同源性进行了算法优化。

### 4. 资源与算力
*   **算力说明**：论文中**未明确说明**具体的硬件配置（如 GPU 型号或训练时长）。
*   **软件工具**：提到了使用 BWA 进行比对，GATK 进行变异检测，以及 R 语言环境下的 `edgeR` 包进行差异表达分析。这类生物信息学分析通常依赖 CPU 集群而非大规模 GPU 算力。

### 5. 实验数量与充分性
*   **实验规模**：共分析了 3 组正反交，每组包含多个生物学重复。
*   **充分性评价**：
    *   **优点**：正反交设计非常严谨，能够有效区分遗传效应和印迹效应。
    *   **局限**：由于外显子捕获数据与 RNA-seq 数据之间的重叠有限，加上极其严格的旁系同源过滤，导致最终能用于统计检验的基因数量显著减少（从数万个缩减至几百个）。这可能导致一些微弱的印迹信号因样本量不足而无法被检测到。

### 6. 主要结论与发现
*   **未发现印迹证据**：在所分析的欧洲赤松胚胎基因中，没有检测到显著的基因组印迹信号。
*   **方法论成功**：证明了利用单倍体雌配子体来解析亲本等位基因是极其有效的，尤其是在过滤旁系同源干扰方面表现优异。
*   **演化启示**：针叶树胚胎中可能确实不存在强烈的印迹现象，或者印迹仅存在于特定的发育阶段或组织（如胚乳类似物）中。

### 7. 优点
*   **创新性视角**：巧妙利用了针叶树单倍体雌配子体这一生物学特性，解决了复杂基因组中等位基因解析的难题。
*   **严谨的过滤机制**：开发了一套针对旁系同源基因的过滤流程，这对于非模式植物的大基因组研究具有重要的参考价值。
*   **填补空白**：为裸子植物表观遗传学研究提供了宝贵的初步数据和技术框架。

### 8. 不足与局限
*   **数据损失严重**：严格的过滤虽然提高了准确性，但也导致大量基因被排除在分析之外，可能存在“假阴性”风险。
*   **组织/时间局限性**：研究仅关注了成熟种子中的胚胎，可能错过了早期发育阶段或其他组织（如雌配子体本身）中存在的印迹。
*   **参考基因组限制**：受限于欧洲赤松参考基因组的组装质量，部分基因定位和注释可能存在偏差。

（完）
