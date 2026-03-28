---
title: Adaptive sampling-based enrichment enables genome reconstruction of intracellular symbionts despite host background and reference divergence
title_zh: 基于自适应采样的富集技术能够在存在宿主背景和参考基因组差异的情况下实现胞内共生体的基因组重构
authors: "Huang, W.-K., Yang, C.-H., Chung, H., Lee, Y.-C., Wu, Y.-C., Chen, Y.-T., Wan, M.-H., Yeh, W.-S., Hong, Y.-P., Wu, T.-H., Li, J.-C., Liu, W.-L., Chen, C.-H."
date: 2026-03-27
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.25.714109v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 胞内共生体的基因组重建
tldr: "从宿主占主导的样本中提取胞内共生菌基因组极具挑战。本研究首次利用牛津纳米孔（Oxford Nanopore）自适应采样（AS）技术，在蚊子组织中实现了沃尔巴克氏体（Wolbachia）基因组的实时富集与从头组装。该方法将目标读数比例从不足1%提升至约90%，成功构建了近乎完整的基因组，并揭示了大规模染色体重排和特异性原噬菌体区域，证明了该技术在参考基因组存在差异时依然稳健高效。"
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-25-714109-v1/fig-001.webp\", \"caption\": \"\", \"page\": 12, \"index\": 1, \"width\": 1175, \"height\": 871}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-25-714109-v1/fig-002.webp\", \"caption\": \"\", \"page\": 14, \"index\": 2, \"width\": 1269, \"height\": 792}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-25-714109-v1/fig-003.webp\", \"caption\": \"\", \"page\": 17, \"index\": 3, \"width\": 1269, \"height\": 1324}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-25-714109-v1/fig-004.webp\", \"caption\": \"\", \"page\": 20, \"index\": 4, \"width\": 1270, \"height\": 391}]"
motivation: 针对胞内微生物在宿主样本中丰度低、难以培养且受宿主DNA干扰严重的问题，寻求一种高效的非培养基因组回收方法。
method: 采用牛津纳米孔自适应采样（AS）技术，对感染沃尔巴克氏体的埃及伊蚊组织进行实时富集测序。
result: "目标菌株读数占比从1%提升至90%，组装出1.5 Mb的近完整基因组，并识别出参考基因组中缺失的结构变异和功能基因。"
conclusion: 自适应采样是一种稳健且可扩展的策略，即使在参考基因组存在显著差异的情况下，也能高效实现宿主系统中胞内细菌的基因组解析。
---

## 摘要
从宿主占主导地位的样本中恢复胞内微生物基因组仍然是微生物基因组学中的一个主要挑战，原因在于目标丰度低、宿主 DNA 含量极高以及无法独立培养这些生物。尽管人们对沃尔巴克氏体（Wolbachia）有着广泛的兴趣，但由于宿主占主导的测序效率低下以及现有富集策略的限制，直接从宿主组织中高效恢复基因组仍然受到限制。在此，我们证明了 Oxford Nanopore 自适应采样（AS）能够直接从复杂的宿主组织中实现目标 DNA 的高效、实时富集，为这类系统中的基因组恢复提供了一种无需培养的方法。据我们所知，这是首次应用富集模式自适应采样在蚊子系统中实现胞内内共生体基因组的从头重构。利用感染了本地来源 wAlbB 样菌株的埃及伊蚊（Aedes aegypti），我们应用富集模式 AS 选择性地对沃尔巴克氏体 DNA 进行测序。这使得沃尔巴克氏体 reads 的比例从传统鸟枪法数据中的不足 1% 增加到自适应采样下的约 90%。对 AS 富集的长读段进行从头组装，得到了一个近乎完整的基因组（约 1.5 Mb），由两个重叠群（contigs）组成，完整度超过 96-99%。比较分析显示，相对于参考 wAlbB 基因组，存在多个大规模染色体重排，这表明自适应采样不会强加依赖于参考基因组的基因组结构。注释进一步鉴定了三个原噬菌体相关区域，包括两个在参考基因组中缺失的菌株特异性扩增区域。值得注意的是，在其中一个区域附近鉴定了胞质不相容性基因（cifA 和 cifB），这与其已知的与原噬菌体元件的基因组关联一致。重要的是，尽管参考基因组与目标基因组之间存在显著的结构差异，自适应采样仍然有效，揭示了该方法在超出其预设运行条件下的出人意料的稳健应用。总之，这些结果确立了富集模式自适应采样作为一种稳健且可扩展的策略，用于宿主相关系统中胞内细菌的基因组解析分析。

## Abstract
Recovering genomes of intracellular microbes from host-dominated samples remains a major challenge in microbial genomics, due to low target abundance, overwhelming host DNA, and the inability to culture these organisms independently. Despite extensive interest in Wolbachia, efficient genome recovery directly from host tissues remains limited by the inefficiency of host-dominated sequencing and the constraints of existing enrichment strategies. Here, we demonstrate that Oxford Nanopore adaptive sampling (AS) enables efficient, real-time enrichment of target DNA directly from complex host tissues, providing a culture-free approach for genome recovery in such systems. To our knowledge, this represents the first application of enrichment-mode adaptive sampling to achieve de novo reconstruction of an intracellular endosymbiont genome in a mosquito system. Using Aedes aegypti mosquitoes infected with a locally derived wAlbB-like strain, we applied enrichment-mode AS to selectively sequence Wolbachia DNA. This resulted in an increase from <1% Wolbachia reads in conventional shotgun data to ~90% under adaptive sampling. De novo assembly of AS-enriched long reads yielded a near-complete genome (~1.5 Mb) in two contigs with >96-99% completeness. Comparative analyses revealed multiple large-scale chromosomal rearrangements relative to the reference wAlbB genome, demonstrating that adaptive sampling does not impose reference-dependent genome structure. Annotation further identified three prophage-associated regions, including two strain-specific expansions absent from the reference genome. Notably, cytoplasmic incompatibility genes (cifA and cifB) were identified adjacent to one of these regions, consistent with their known genomic association with prophage elements. Importantly, adaptive sampling remained effective despite substantial structural divergence between the reference and target genomes, revealing an unexpectedly robust application of this approach beyond its presumed operating conditions. Together, these results establish enrichment-mode adaptive sampling as a robust and scalable strategy for genome-resolved analysis of intracellular bacteria in host-associated systems.

---

## 论文详细总结（自动生成）

### 论文总结：基于自适应采样的富集技术实现胞内共生体基因组重构

#### 1. 核心问题与整体含义（研究动机和背景）
*   **核心问题**：如何从宿主 DNA 占据绝对主导（通常 >99%）且无法独立培养的复杂样本中，高效、低成本地回收胞内微生物（如沃尔巴克氏体 *Wolbachia*）的完整基因组。
*   **背景**：*Wolbachia* 对昆虫生理和疾病控制具有重要意义，但其基因组小（~1.5 Mb）、宿主基因组大（~1.4 Gb），导致传统鸟枪法测序效率极低。现有方法（如细胞系培养、物理富集或生物信息挖掘）存在操作复杂、耗时长、依赖特定实验室设备或组装碎片化等局限。

#### 2. 方法论
*   **核心思想**：利用 **Oxford Nanopore 自适应采样（Adaptive Sampling, AS）** 技术的“富集模式”，在测序过程中实时识别并保留目标序列，剔除宿主序列。
*   **关键技术细节**：
    *   **实时决策**：当 DNA 链通过纳米孔时，MinKNOW 软件对前 200–400 bp 进行实时碱基识别并比对至参考基因组（本研究使用 *Ae. albopictus* 的 *wAlbB* 基因组）。
    *   **富集与剔除**：若匹配，则继续测序；若不匹配，则通过反转电压将该链从孔中弹出，释放孔位给下一条链。
    *   **长读段过滤**：由于决策窗口限制，短于 400 bp 的非目标片段会被误留。研究采用 `filtlong` 过滤掉 <5 kb 的读段，以消除组装图中的干扰边缘。
    *   **从头组装**：使用 Flye 算法对富集后的长读段进行 *de novo* 组装，而非依赖参考基因组进行重构。

#### 3. 实验设计
*   **数据集/场景**：感染了台湾本地 *wAlbB* 样菌株的埃及伊蚊（*Aedes aegypti*）全蚊 DNA 提取物。
*   **Benchmark（基准）**：在同一张 R10.4 芯片上，一半孔位运行 AS 模式，另一半运行传统鸟枪法（non-AS）作为对照。
*   **对比维度**：
    *   **分类组成**：对比 AS 与 non-AS 产生的读段中 *Wolbachia* 与宿主的比例。
    *   **组装质量**：评估组装出的 Contig 数量、N50、基因组完整度（BUSCO/QUAST）。
    *   **覆盖度需求**：通过下采样（Subsampling）分析，确定实现近完整基因组回收所需的最低覆盖深度。

#### 4. 资源与算力
*   **硬件设备**：Oxford Nanopore MinION Mk1B 测序仪，R10.4 流量槽。
*   **计算资源**：
    *   **GPU**：NVIDIA RTX 4000 Ada（用于 Dorado 软件的超高精度 SUP 模式碱基识别加速）。
    *   **操作系统**：Ubuntu 22.04 LTS。
*   **软件**：MinKNOW v24.11.8, Dorado v7.6.7, Flye v2.9, Kraken2 等。
*   **时长**：文中未明确单次运行的总时长，但通常 Nanopore 运行为 48-72 小时。

#### 5. 实验数量与充分性
*   **实验规模**：
    *   进行了一组严谨的同芯片对照实验（AS vs non-AS）。
    *   进行了一次完整的 AS 专用运行以获取深度数据进行组装。
    *   进行了 1% 到 100% 梯度的下采样模拟实验（10 组以上）。
    *   进行了详细的比较基因组学分析（共线性点图、原噬菌体注释）。
*   **充分性评价**：实验设计较为充分，通过同库对照排除了样本差异干扰。下采样实验为后续研究提供了实用的深度参考（~50x 即可稳定组装），具有较高的客观性和参考价值。

#### 6. 主要结论与发现
*   **富集效果显著**：AS 技术将 *Wolbachia* 读段占比从不足 1% 提升至约 90%，实现了超过两个数量级的富集。
*   **高质量组装**：仅用两个 Contig 就还原了 ~1.5 Mb 的基因组，完整度 >96-99%。
*   **突破参考差异限制**：尽管目标菌株与参考基因组存在显著的染色体重排和序列差异（如新增的原噬菌体区域），AS 依然能捕获这些“非参考”序列。
*   **功能基因发现**：成功识别出与胞质不相容性相关的 *cifA* 和 *cifB* 基因，并发现这些基因位于参考基因组所没有的菌株特异性扩增区。

#### 7. 优点
*   **无需培养与预处理**：直接从全蚊 DNA 中提取，省去了复杂的物理富集或细胞培养步骤。
*   **实时性与灵活性**：通过软件配置即可改变目标，无需定制引物或探针。
*   **结构解析能力强**：结合长读段优势，能够解析高度重复的原噬菌体区域和复杂的基因组重排。
*   **稳健性**：证明了该技术对参考基因组的偏离具有较强的容忍度，适合研究进化快速的共生菌。

#### 8. 不足与局限
*   **短片段污染**：由于 AS 的决策窗口限制，大量短于 500 bp 的宿主片段无法被剔除，必须依赖后期生物信息学过滤。
*   **覆盖度不均**：在与参考基因组差异极大的区域（如新增插入段），AS 的富集效率会有所下降（覆盖度从 ~110x 降至 ~5x），虽然能组装，但深度较低。
*   **依赖初始比例**：如果目标菌株初始丰度极低（如低于 0.01%），AS 的提升空间可能受限于芯片的总通量。
*   **算力门槛**：实时 AS 和 SUP 模式碱基识别对 GPU 算力有一定要求。

（完）
