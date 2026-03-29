---
title: Mining functional genes and characterizing cellular transcriptomic profiles in the single-cell atlas of adult Spodoptera litura ovary
title_zh: 成年斜纹夜蛾卵巢单细胞图谱中的功能基因挖掘与细胞转录组特征表征
authors: "Sun, Z., Jiang, L., Dong, X., Yi, X., Nystul, T. G., Zhong, G."
date: 2026-03-27
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.25.713648v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 全面的单细胞转录组图谱和遗传分析
tldr: 本研究构建了重大农业害虫斜纹夜蛾成虫卵巢的首个单细胞转录组图谱。通过整合单细胞测序、跨物种比较及原位杂交技术，鉴定了生殖细胞和体细胞群，并利用RNA干扰验证了关键基因在卵巢发育中的功能。该研究揭示了卵子发生过程中的转录调控和细胞间通讯，为鳞翅目昆虫生殖生物学研究提供了重要资源，并为害虫防治提供了潜在靶点。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-25-713648-v1/fig-001.webp\", \"caption\": \"\", \"page\": 28, \"index\": 1, \"width\": 1750, \"height\": 1396}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-25-713648-v1/fig-002.webp\", \"caption\": \"\", \"page\": 29, \"index\": 2, \"width\": 1749, \"height\": 2032}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-25-713648-v1/fig-003.webp\", \"caption\": \"\", \"page\": 30, \"index\": 3, \"width\": 1750, \"height\": 1741}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-25-713648-v1/fig-004.webp\", \"caption\": \"\", \"page\": 31, \"index\": 4, \"width\": 1750, \"height\": 2113}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-25-713648-v1/fig-005.webp\", \"caption\": \"\", \"page\": 32, \"index\": 5, \"width\": 1749, \"height\": 903}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-25-713648-v1/fig-006.webp\", \"caption\": \"\", \"page\": 33, \"index\": 6, \"width\": 1750, \"height\": 1853}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-25-713648-v1/fig-007.webp\", \"caption\": \"\", \"page\": 34, \"index\": 7, \"width\": 1750, \"height\": 1054}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-25-713648-v1/fig-008.webp\", \"caption\": \"\", \"page\": 35, \"index\": 8, \"width\": 1750, \"height\": 1010}]"
motivation: 旨在解决非模式生物生殖生物学研究中高分辨率分子资源匮乏的问题，深入了解斜纹夜蛾的卵巢发育机制。
method: 采用单细胞RNA测序技术，结合跨物种比较、原位杂交、RNA干扰及轨迹推断等生物信息学分析方法。
result: 成功定义了卵巢主要细胞群及其分子标记，并证实了Hsc70-4等关键基因对卵巢发育和繁殖力的重要贡献。
conclusion: 该研究建立了鳞翅目昆虫卵子发生的系统级资源，为比较生殖生物学提供了框架，并为害虫防治提供了潜在靶点。
---

## 摘要
由于高分辨率分子资源的匮乏，理解非模式生物的生殖生物学仍然具有挑战性。在本研究中，我们展示了斜纹夜蛾（Spodoptera litura）成年卵巢的全面单细胞转录组图谱。斜纹夜蛾是一种具有多滋式滋养型卵巢的高食性农业害虫。通过将单细胞RNA测序与黑腹果蝇（Drosophila melanogaster）的跨物种比较相结合，我们定义了主要的生殖系和体细胞群，并描绘了卵巢细胞组成的保守性和物种特异性特征。为了增强该数据集的可解释性和重用性，我们将转录组分析与原位杂交相结合，以验证卵巢细胞类型中簇特异性的分子标记。我们进一步应用RNA干扰（RNAi）来评估生殖系富集基因（Hsc70-4、Wech、Polo、Path）对卵巢发育和繁殖力的贡献。轨迹推断结合SCENIC和CellChat分析，提供了斜纹夜蛾卵子发生过程中转录调节程序和预测的细胞间通讯途径的系统级视图。总之，这项工作为研究鳞翅目昆虫的卵子发生建立了宝贵的资源，为非模式昆虫的生殖生物学提供了比较框架，并突出了基于RNAi的害虫防治策略的潜在靶点。

## Abstract
Understanding the reproductive biology of non-model organisms remains challenging due to the limited availability of high-resolution molecular resources. Here, we present a comprehensive single-cell transcriptomic atlas of the adult ovary of Spodoptera litura (S. litura), a highly polyphagous agricultural pest with a polytrophic meroistuc ovary. By integrating single-cell RNA sequencing with cross-species comparison to Drosophila melanogaster (D. melanogaster), we define major germline and somatic cell populations and delineate conserved and species-specific features of ovarian cell composition. To enhance the interpretability and reuse of this dataset, we combine transcriptomic profiling with in situ hybridization to validate cluster-specific molecular markers across ovarian cell types. We further apply RNA interference (RNAi) to assess the contributions of germline-enriched genes (Hsc70-4, Wech, Polo, Path) to ovarian development and fecundity. Trajectory inference, together with SCENIC and CellChat analyses, provides a system-level view of transcriptional regulatory programs and predicted intercellular communication pathways during oogenesis in S. litura. Collectively, this work establishes a valuable resource for studying lepidopteran insect oogenesis, offering a comparative framework for reproductive biology in non-model insects and highlighting potential targets for RNAi-based pest control strategies.

---

## 论文详细总结（自动生成）

这是一份关于论文《Mining functional genes and characterizing cellular transcriptomic profiles in the single-cell atlas of adult *Spodoptera litura* ovary》（成年斜纹夜蛾卵巢单细胞图谱中的功能基因挖掘与细胞转录组特征表征）的深度结构化总结：

### 1. 论文的核心问题与整体含义
*   **研究动机**：斜纹夜蛾（*Spodoptera litura*）是一种极具破坏性的全球性农业害虫，具有极强的繁殖能力和广泛的抗药性。尽管其生态学研究较多，但在单细胞水平上调节其卵巢发育和卵子发生的分子机制仍不清楚。
*   **核心问题**：由于非模式生物缺乏高分辨率的分子资源和明确的细胞标记物，如何系统地定义其卵巢细胞异质性、鉴定关键发育调控基因，并寻找潜在的害虫防治靶点？
*   **整体含义**：本研究构建了首个斜纹夜蛾成年卵巢的单细胞转录组图谱，填补了鳞翅目昆虫生殖生物学研究的空白，并为基于RNA干扰（RNAi）的害虫防治提供了理论依据。

### 2. 论文提出的方法论
*   **核心思想**：采用“单细胞测序 + 跨物种比对 + 空间定位 + 遗传干扰”的综合策略。
*   **关键技术细节**：
    *   **单细胞测序**：利用 10x Genomics Chromium 平台对羽化48小时的成年雌蛾卵巢进行测序。
    *   **跨物种注释**：将斜纹夜蛾数据与模式生物黑腹果蝇（*D. melanogaster*）的卵巢数据集进行整合比对，利用同源性预测细胞类型。
    *   **生物信息学分析**：使用 Seurat 进行聚类分析，Monocle 2 进行细胞分化轨迹推断，SCENIC 分析转录因子调控网络，CellChat 预测细胞间通讯（配体-受体相互作用）。
    *   **实验验证**：通过全整装原位杂交（WISH）对标记基因进行空间定位，并利用 dsRNA 注射进行 RNAi 功能缺失实验。

### 3. 实验设计
*   **数据集/场景**：采集斜纹夜蛾成年卵巢组织，经过酶解消化制备单细胞悬液。
*   **Benchmark（基准）**：以黑腹果蝇已知的卵巢细胞类型和标记基因作为参照。
*   **对比方法**：
    *   **跨物种对比**：通过 Pearson 相关性分析和桑基图（Sankey plot）对比斜纹夜蛾与果蝇的细胞组成。
    *   **功能对比**：对比生殖细胞与体细胞在 GO 功能富集和 KEGG 代谢通路上的差异。
    *   **RNAi 对比**：以注射 GFP dsRNA 作为对照组，对比靶基因敲低后的卵巢重量、卵巢管长度及产卵量。

### 4. 资源与算力
*   **软件工具**：Cell Ranger 2.0.0, Seurat v4.0.4, Monocle v2.22.0, SCENIC v1.2.4, CellChat V2.1.0。
*   **算力说明**：文中**未明确说明**具体的硬件配置（如 GPU 型号、数量）或具体的训练/计算时长。这在生物信息学论文中较为常见，通常依赖高性能计算集群完成。

### 5. 实验数量与充分性
*   **实验规模**：
    *   成功捕获并分析了 4,915 个高质量单细胞。
    *   鉴定出 14 个不同的细胞簇（包括 9 个体细胞簇和 4 个生殖细胞簇）。
    *   对 14 个以上的标记基因进行了原位杂交验证。
    *   对 5 个关键生殖富集基因（*Hsc70-4, Wech, PPn, Polo, Path*）进行了 RNAi 功能验证。
*   **充分性评价**：实验设计较为充分，通过“计算预测 + 实验验证”的闭环逻辑，确保了结论的客观性。跨物种比对增强了细胞注释的可靠性，RNAi 实验则直接证明了基因的生物学功能。

### 6. 论文的主要结论与发现
*   **细胞图谱**：定义了包括早/晚期滋养细胞（Nurse cells）、卵母细胞（Oocytes）、滤泡细胞（Follicle cells）和柄细胞（Stalk cells）在内的精细细胞分类。
*   **发育轨迹**：揭示了生殖细胞从无差别状态向滋养细胞和卵母细胞分化的动态转录路径。
*   **调控机制**：识别了不同细胞簇特异性的转录因子（如 E2F5, TFAP4, MYB 等）和信号通路（如 Laminin 和 Collagen 通路）。
*   **防治靶点**：证实敲低 *Hsc70-4, Wech, PPn, Polo, Path* 等基因会显著抑制卵巢发育并降低产卵量，这些基因可作为高效的害虫防治靶点。

### 7. 优点
*   **高分辨率**：首次在单细胞水平解析斜纹夜蛾卵巢，提供了远超传统组织学研究的分子细节。
*   **跨物种策略**：巧妙利用果蝇成熟的研究体系解决非模式生物注释难的问题，具有较强的借鉴意义。
*   **实用性强**：不仅是基础科学研究，还直接筛选并验证了具有应用潜力的 RNAi 靶基因。

### 8. 不足与局限
*   **稀有细胞缺失**：由于液滴法单细胞测序的局限性，未能捕获到数量极少的生殖干细胞（GSCs）。
*   **测序深度与样本量**：4,915 个细胞对于复杂的卵巢组织来说样本量尚不算巨大，可能遗漏某些极细微的细胞状态。
*   **缺乏多组学整合**：研究主要集中在转录组，若能结合空间转录组或蛋白质组学，将能更精确地描绘卵巢的空间异质性。
*   **应用限制**：RNAi 实验是在实验室环境下通过注射完成的，实际田间应用（如喷雾诱导的基因沉默）仍需克服 dsRNA 稳定性等挑战。

（完）
