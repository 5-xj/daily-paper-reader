---
title: "Actinomarina, resolved"
title_zh: 放线菌属 Actinomarina 的解析
authors: "Nielsen, T. N., Lui, L. M."
date: 2026-04-07
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.03.716425v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: Actinomarinales目完整基因组研究
tldr: 本研究首次从旧金山湾的宏基因组中获得84个完整的Actinomarina基因组，定义9个物种并发现其独特的硒蛋白系统和代谢缺失，为了解这种微小海洋细菌的遗传结构和生物学特征提供了突破性资料。
source: biorxiv
selection_source: fresh_fetch
motivation: 由于Actinomarina类群的完整基因组尚未发表，限制了对其生态和进化特征的理解。
method: 利用Oxford Nanopore宏基因组组装及深度学习预测硒蛋白，结合系统发育和代谢路径分析。
result: 研究获得了84个完整和29个高质量的Actinomarina基因组，鉴定出9个物种并发现新的硒蛋白相关特征。
conclusion: 该研究揭示了Actinomarina的基因组特征和广泛的代谢依赖性，填补了该类群的基因组空白。
---

## 摘要
“Candidatus Actinomarina minuta”是已知最小的自由生活细菌之一，同时也是海洋表层水体中最丰富的光异养细菌之一。然而，目前尚未有任何放线菌目（Actinomarinales）成员的完整基因组发表。本文基于旧金山河口（San Francisco Estuary, SFE）样品的 Oxford Nanopore 宏基因组数据构建了 84 个完整的 Actinomarina 基因组，以及 29 个额外的高质量（≥95% 完整度、<5% 污染度、单一 contig）非环状组装。这些基因组在 95% 平均核苷酸相似度（ANI）水平上定义了 9 个物种，其中 3 个为新物种，并据我们所知，代表了整个放线菌目首批完整基因组。结合 23 个 NCBI 高质量基因组和一个 Casp-actino5 外群的扩展系统发育分析结果，确认了物种边界，并将 NCBI 基因组定位在 SFE 系群中。由 9,278 个簇组成的泛基因组接近闭合状态（衰减比 0.55），其中核心基因组包含 227 个单拷贝基因（占 2.4%）。单拷贝基因（3,858 个簇，占 42%）集中在染色体上距 dnaA 位置 85–90% 的 tRNA 边界超变区（HVR），该区域与最近在 Pelagibacter 中描述的 HVR 具有相似的复制距离（距 dnaA 7–15%；Lui & Nielsen，准备中），但位于相反的复制臂上。该 HVR 两侧由 tRNA 基因夹持，在 84 个基因组中的 32 个中，硒代半胱氨酸 tRNA（selC）实际位于 HVR 内部。所有 84 个基因组均编码 selC 以及硒代半胱氨酸生物合成基因 selA 和 selD；延伸因子 selB 存在但发生了分化。这一点此前未在 Actinomarina 中报道。基于深度学习的硒蛋白预测（deep-Sep）在每个基因组中识别出约 5 种硒蛋白，分属 69 个家族，其中包括 selD 本身的硒蛋白形式。在约 1.1 Mbp 的基因组中保留服务于多个靶标的专用 Sec 合成机制，表明硒代半胱氨酸相对于半胱氨酸的催化优势足以抵消其代谢代价。KofamScan 途径重建显示，这些自由生活的海洋细菌完整基因组中记录到了迄今为止最广泛的营养缺失：精氨酸、组氨酸、色氨酸和硫胺素生物合成功能完全缺失，生物素合成途径在最后一步失效，仅保留标准检测阈值下三羧酸（TCA）循环的 8 步中的 5 步。不同物种间的基因顺序发生了广泛重排：在全部 84 个基因组中，没有任何基因邻近关系是普遍存在的。目前 NCBI 列出的 396 个 Actinomarina 基因组中，没有一个是完整基因组；其中 39 个符合质量标准的基因组中，有 41% 被 NCBI 错误分类，经 GTDB-Tk 重新分类后隶属于其他属。

## Abstract
Candidatus Actinomarina minuta is among the smallest known free-living bacteria and among the most abundant photoheterotrophs in ocean surface waters, yet not a single complete genome has been published for any member of the order Actinomarinales. Here we present 84 complete Actinomarina genomes assembled from Oxford Nanopore metagenomes of the San Francisco Estuary (SFE), together with 29 additional high-quality (>=95% complete, <5% contamination, single contig) non-circular assemblies. These genomes define 9 species at 95% ANI, three of which are novel, and represent, to our knowledge, the first complete genomes for the entire Actinomarinales order. An expanded phylogeny incorporating 23 high-quality NCBI genomes and a Casp-actino5 outgroup confirms species boundaries and places NCBI genomes among SFE clades. The pangenome of 9,278 clusters is approaching closure (decay ratio 0.55), with a core genome of 227 single-copy genes (2.4%). Singletons (3,858 clusters, 42%) are concentrated in a tRNA-bounded hypervariable region (HVR) at 85-90% of the chromosome from dnaA -- a similar replicative distance to the HVR recently described in Pelagibacter (7-15% from dnaA; Lui & Nielsen, in preparation) but on the opposite replichore. The HVR is flanked by tRNA genes at both boundaries, and in 32 of 84 genomes, the selenocysteine tRNA (selC) is physically located inside the HVR. All 84 genomes encode selenocysteine tRNA (selC) and the selenocysteine biosynthesis genes selA and selD; the elongation factor selB is present but divergent. This has not been previously reported for Actinomarina. Deep learning selenoprotein prediction (deep-Sep) identifies ~5 selenoproteins per genome in 69 families, including a selenoprotein form of selD itself. Retention of dedicated Sec biosynthetic machinery serving multiple targets in a genome of ~1.1 Mbp implies that the catalytic advantage of selenocysteine over cysteine is large enough to justify the cost. KofamScan pathway reconstruction reveals the most extensive set of auxotrophies yet documented from complete genomes in a free-living marine bacterium: arginine, histidine, tryptophan, and thiamine biosynthesis are universally absent, biotin biosynthesis is non-functional (final step absent), and only 5 of 8 TCA cycle steps are retained at the standard detection threshold. Gene order is extensively rearranged between species: no gene adjacency is universal across all 84 genomes. NCBI currently lists 396 Actinomarina genomes, none complete; of the 39 that pass quality thresholds, 41% are misclassified by NCBI, belonging to other genera by GTDB-Tk reclassification.

---

## 论文详细总结（自动生成）

# 《Actinomarina, resolved》论文详细总结

## 1. 核心问题与研究背景
- **研究动机**：  
  Actinomarina（放线菌属中一种极小型、自由生活的海洋细菌）被认为是海洋表层光异养菌的重要组成部分，但此前没有任何一个放线菌目（Actinomarinales）成员拥有完整基因组。  
- **关键问题**：  
  缺乏完整基因组限制了对其进化、生态作用以及代谢适应性的理解。  
- **研究目标**：  
  本文旨在通过宏基因组组装揭示 Actinomarina 属的完整基因组结构、物种多样性、代谢特征及其独特的硒蛋白系统，从而填补 Actinomarinales 目基因组空白。  

## 2. 方法论
- **核心思想**：  
  借助新一代测序技术（Oxford Nanopore）对环境样品进行宏基因组组装，结合系统发育与代谢重建，深入解析 Actinomarina 的基因组组织与功能构成。  
- **关键技术流程**：
  1. **样品采集与测序**：选取旧金山河口（San Francisco Estuary, SFE）水样，使用 Oxford Nanopore 平台生成宏基因组数据。  
  2. **宏基因组组装与质量评估**：  
     - 利用长读长数据组装完整基因组；  
     - 评价组装完整度（≥95%）和污染度（<5%）。  
  3. **物种划分与系统发育分析**：  
     - 以 95% 平均核苷酸相似度（ANI）为阈值界定物种；  
     - 结合 23 个 NCBI 高质量基因组构建扩展系统发育树；  
     - 使用 Casp-actino5 作为外群定位物种关系。  
  4. **泛基因组分析**：  
     - 利用聚类方法识别 9,278 个基因簇；  
     - 评估基因组“闭合度”（衰减比 0.55）；  
     - 识别核心基因（227 个单拷贝）。  
  5. **硒蛋白预测**：  
     - 使用深度学习工具 **deep-Sep** 预测硒代半胱氨酸（Sec）相关蛋白；  
     - 同时检测 selA、selB、selC、selD 等关键基因。  
  6. **代谢路径重建**：  
     - 用 **KofamScan** 进行 KEGG 功能注释与代谢映射。  

## 3. 实验设计
- **数据来源**：  
  - 旧金山河口宏基因组样品是主要数据集。  
  - 与公共数据库中的 23 个 NCBI 高质量 Actinomarina 基因组作比较。  
- **Benchmark 与对照**：  
  - GTDB-Tk 用于物种重分类，与 NCBI 注释结果对比确认分类准确性。  
  - 与 Pelagibacter（海洋最小基因组之一）进行基因组结构和 HVR 位置的对比分析。  

## 4. 资源与算力
- **算力说明**：  
  论文未提供具体的计算资源信息。  
  但推测涉及：
  - 高性能计算集群用于宏基因组装配与 pangenome 聚类计算；
  - 深度学习预测采用 GPU（但型号、时长、数量未说明）。  

## 5. 实验数量与充分性
- **实验规模**：
  - 组装 **84 个完整基因组** 与 **29 个高质量基因组**，涵盖广泛种群。
  - 泛基因组分析与系统发育树各包含数十个参考基因组。
  - 深度学习硒蛋白预测覆盖 84 个样本，每基因组约 5 个硒蛋白。
- **实验充分性评估**：
  - 数据数量远高于以往 Actinomarina 研究；
  - 包含物种多样性、代谢分析与结构比较多个层面；
  - 虽无多中心环境验证，但在同一生态样区内深度覆盖良好。  

## 6. 主要结论与发现
- **基因组与分类学突破**：
  - 首次获得放线菌目 **84 个完整基因组**；
  - 确定 9 个物种，其中 3 个为新物种。  
- **基因组结构特征**：
  - 泛基因组趋于闭合，存在一个 tRNA 边界超变区（HVR）；
  - selC（硒代 tRNA）在 32 个基因组的 HVR 内部。  
- **硒代系统发现**：
  - 所有基因组均具备 **selA, selB, selC, selD**；
  - deep-Sep 预测出 69 类硒蛋白，包括 selD 的硒蛋白形式；
  - 指示硒代半胱氨酸机制在极精简基因组中仍具有显著优势。  
- **代谢与生态适应**：
  - 缺失精氨酸、组氨酸、色氨酸、硫胺素合成；
  - 生物素合成途径不完全；
  - TCA 循环部分残缺；
  - 显示极端营养依赖特征。  
- **基因组重排性**：
  - 84 个基因组间无共通邻近基因顺序，表明基因排列高度动态化。  
- **数据库修正**：
  - NCBI 中 41% 的 Actinomarina 高质量基因组经 GTDB-Tk 纠正后被归入其他属。  

## 7. 优点与创新点
- **完整基因组突破**：填补 Actinomarinales 目无完整基因组的历史空白。  
- **方法融合性强**：结合纳米孔测序、系统发育、代谢分析与深度学习预测。  
- **硒代机制新发现**：揭示小基因组菌中持有完整硒代系统的生态适应意义。  
- **数据质量高**：84 个闭合基因组提供强支撑，为环境基因组研究树立新标准。  

## 8. 不足与局限
- **生态局限性**：样品全部源自旧金山河口，缺乏跨洋区的验证。  
- **函数验证缺失**：硒蛋白预测主要依赖计算，缺少实验验证。  
- **算力与 reproducibility 信息缺失**：未说明计算资源与参数细节。  
- **生理层面的对应研究缺乏**：虽揭示代谢缺陷，但缺少培养或生化验证。  

---

（完）
