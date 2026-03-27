---
title: The enhanced multi-tissue atlas of regulatory effects in cattle
title_zh: 牛多组织调控效应增强图谱
authors: "Li, H., Zhang, H., Zhu, D., Zhao, P., Wei, Z., Lu, J., Gong, M., Zhang, Q., Zheng, W., Liu, X., GUAN, D., Teng, J., Lin, Q., Tang, Y., Gao, Y., Zhao, S., Zhang, Z., Du, J., Fang, C., An, B., Lin, B., Tian, M., Tian, J., Chen, S., Liu, W., Wang, Y., Wang, M.-S., Ibeagha-Awemu, E. M., Crooijmans, R., Derks, M., Godia, M., Madsen, O., Pausch, H., Leonard, A. S., Frantz, L., MacHugh, D. E., Grady, J. F. O., Ionita-Laza, I., Zhao, X., Guan, L., Zhou, H., Marmol-Sanchez, E., van der Wijst, M., Lu, X., Jiang, H., Yang, Z., Yang, Q., Liu, Q., Xu, C., Li, M., Hou, Y., Pan, Z., Chen, Y., Xian"
date: 2026-03-20
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.18.712441v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 多组织调控效应图谱与遗传映射
tldr: "本研究推出了CattleGTEx第一阶段资源，通过分析43个组织、82个品种的12,422个RNA-seq样本，构建了迄今为止最全面的牛多组织调控效应图谱。研究识别了超过43万个主要调控效应，解释了44个复杂性状中75%的GWAS信号，填补了家畜“缺失调控”的空白。该资源不仅揭示了牛品种演化与人工选择的分子机制，还为人类复杂疾病的致病变异识别提供了跨物种参考，是功能基因组学和精准育种的重要里程碑。"
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-18-712441-v1/fig-001.webp\", \"caption\": \"Fig. 5 | Liking molQTL to selection signatures between subspecies and breeds.\", \"page\": 46, \"index\": 1, \"width\": 1008, \"height\": 1164}]"
motivation: 旨在深入理解牛复杂性状的分子架构，解决家畜遗传研究中调控机制不明及“缺失调控”的问题。
method: "利用来自82个品种、43个组织的12,422份RNA-seq数据，对七种分子表型的调控效应进行大规模表征与建模。"
result: "成功解析了44个复杂性状中75%的GWAS信号，并阐明了牛属进化、人工选择及人类疾病相关的遗传调控机制。"
conclusion: CattleGTEx第一阶段为功能基因组学、精准育种及跨物种比较遗传学研究提供了一个变革性的框架和数据资源。
---

## 摘要
牛对全球粮食安全至关重要，但其复杂性状的分子架构仍不清楚。在此，我们展示了牛基因型-组织表达（CattleGTEx）第一阶段资源（https://cattlegtex.farmgtex.org/），这是对初步研究的重大扩展。通过利用涵盖43个组织和82个品种的12,422个RNA-seq图谱，我们鉴定了跨越七个分子表型的433,972个主要调控效应和161,428个非主要调控效应。这一高分辨率图谱解析了44个复杂性状中75%的GWAS信号，显著解决了家畜中“缺失的调控”问题。我们提出了一个遗传调控模型，展示了多个生物层面的变异如何与特定的生物背景相互作用，从而塑造表型变异。此外，CattleGTEx阐明了普通牛（Bos taurus）与瘤牛（Bos indicus）之间适应性进化的机制，以及奶牛和肉牛品种中的人工选择机制。最后，通过绘制这些调控效应的进化约束图谱，我们展示了该资源在优先筛选人类复杂疾病因果变异方面的转化价值。总之，CattleGTEx第一阶段为功能基因组学、精准育种和比较遗传学提供了一个变革性的框架。

## Abstract
Cattle are integral to global food security, yet the molecular architecture of their complex traits remains poorly understood. Here, we present the Cattle Genotype-Tissue Expression (CattleGTEx) Phase 1 resource (https://cattlegtex.farmgtex.org/), a substantial expansion of the pilot study. By leveraging 12,422 RNA-seq profiles across 43 tissues and 82 breeds, we characterized 433,972 primary and 161,428 non-primary regulatory effects spanning seven molecular phenotypes. This high-resolution atlas resolves 75% of GWAS signals for 44 complex traits, significantly addressing the "missing regulation" in livestock. We propose a genetic regulatory model demonstrating how variants across multiple biological layers interact with specific biological contexts to shape phenotypic variation. Furthermore, CattleGTEx elucidates mechanisms underlying adaptive evolution between Bos taurus and Bos indicus, as well as artificial selection in dairy and beef breeds. Finally, by mapping evolutionary constraints on these regulatory effects, we demonstrate the translational value of this resource for prioritizing causal variants in human complex diseases. Together, Phase 1 of CattleGTEx provides a transformative framework for functional genomics, precision breeding, and comparative genetics.

---

## 论文详细总结（自动生成）

这是一份关于论文《The enhanced multi-tissue atlas of regulatory effects in cattle》（牛多组织调控效应增强图谱）的深度结构化总结：

### 1. 核心问题与研究动机
*   **核心问题**：尽管牛在全球粮食安全中地位显赫，但其复杂性状（如产奶量、抗病性、生长速度等）的分子调控架构仍不清晰。
*   **研究背景**：早期的“牛基因型-组织表达”（CattleGTEx）试点研究受限于样本量小、组织覆盖不足及分子表型单一，导致大部分全基因组关联分析（GWAS）信号无法与调控变异关联，存在严重的“缺失调控（missing regulation）”现象。
*   **研究目的**：通过大规模扩展样本和组织维度，构建高分辨率的调控图谱，解析复杂性状的遗传机制，并探索进化选择对调控效应的影响。

### 2. 方法论：核心思想与技术细节
*   **核心思想**：整合大规模转录组（RNA-seq）与基因型数据，从多个生物学层面（丰度与结构）系统表征遗传变异对基因表达的调控作用。
*   **关键技术流程**：
    *   **数据整合与归一化**：收集了12,422份RNA-seq样本，涵盖43个组织和82个品种。利用3,530头牛的高深度全基因组测序（WGS）构建参考面板进行基因型填充。
    *   **七类分子表型量化**：包括4种丰度表型（基因、外显子、异构体、增强子表达）和3种结构表型（替代剪接、RNA稳定性、3'UTR多聚腺苷酸化）。
    *   **调控效应映射（molQTL）**：使用线性混合模型（OmiGA软件）进行顺式调控效应映射，并利用SuSiE算法进行精细映射（Fine-mapping）以识别因果变异。
    *   **条件分析**：区分“主要效应（Primary effects）”和“非主要效应（Non-primary effects）”，揭示基因调控的复杂层次。
    *   **跨物种比较**：利用LiftOver将牛的eQTL映射至人类基因组，结合人类GTEx数据评估进化保守性。

### 3. 实验设计与基准对比
*   **数据集**：12,422个RNA-seq样本，涉及43个组织（如免疫、消化、神经系统等）。
*   **对比基准（Benchmark）**：
    *   **试点研究对比**：相比试点阶段，样本量从4,889增至12,422，组织从23个增至43个，分子表型从2种增至7种。
    *   **GWAS集成**：整合了44个牛复杂性状（涵盖体型、生产、繁殖、健康）的2,070个GWAS位点。
    *   **进化场景**：对比了普通牛（*Bos taurus*）与瘤牛（*Bos indicus*）的适应性进化，以及奶牛与肉牛的人工选择差异。

### 4. 资源与算力
*   **算力说明**：论文未明确列出具体的GPU/CPU型号及总算力时长。
*   **软件资源**：使用了STAR（比对）、GATK（变异检测）、GLIMPSE2（填充）、OmiGA（QTL映射）、MashR（多组织共享分析）等生物信息学工具。
*   **数据共享**：所有处理后的数据和结果通过 [CattleGTEx 门户网站](https://cattlegtex.farmgtex.org/) 公开。

### 5. 实验数量与充分性
*   **实验规模**：分析了超过43万个主要调控效应和16万个非主要效应。针对44个复杂性状进行了共定位分析。
*   **充分性评价**：实验设计非常充分且具有高度的客观性。研究不仅在组织和样本维度上达到了家畜研究的巅峰，还通过内部验证（拆分样本）、外部验证（独立群体）以及等位基因特异性表达（ASE）分析确保了结果的可靠性。

### 6. 主要结论与发现
*   **解析“缺失调控”**：该图谱成功解析了75%的牛复杂性状GWAS信号，远高于试点研究的13%。
*   **调控模型提出**：提出了一个遗传调控模型，证明跨多个生物层面的变异（垂直多效性）比单一层面的变异更容易影响复杂表型。
*   **进化选择特征**：发现长期适应性进化（如瘤牛抗热）主要影响免疫和代谢组织的调控，而短期人工选择（如奶牛产奶）则集中在神经内分泌和生长调节途径。
*   **跨物种转化**：证明牛的调控变异在人类基因组中具有进化约束性，可用于辅助识别人类复杂疾病的因果变异（如中性粒细胞计数相关基因）。

### 7. 优点与亮点
*   **高分辨率与多维度**：首次在家畜中系统整合了七类分子表型，提供了极高的调控解析精度。
*   **非主要效应的挖掘**：通过大样本量识别出大量“细微调节”的非主要效应，这在以往研究中常被忽略。
*   **进化视角深刻**：将调控图谱与牛的驯化、品种改良历史相结合，揭示了不同选择压力下的分子靶点。

### 8. 不足与局限
*   **变异类型限制**：目前主要关注常见的单核苷酸多态性（SNPs），未充分探讨结构变异（SVs）和稀有变异的影响。
*   **品种偏差**：样本仍偏向于商业品种（如荷斯坦牛），对全球地方品种的遗传多样性覆盖尚显不足。
*   **技术局限**：基于二代短读长测序，在量化复杂异构体和剪接事件时可能存在精度瓶颈（未来需三代长读长数据补充）。
*   **空间分辨率**：目前为大块组织（Bulk）水平，无法完全解析细胞类型特异性的调控异质性。

（完）
