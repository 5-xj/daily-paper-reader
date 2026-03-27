---
title: "REMAG: recovery of eukaryotic genomes from metagenomic data using contrastive learning"
title_zh: REMAG：利用对比学习从宏基因组数据中恢复真核生物基因组
authors: "Gomez-Perez, D., Raguideau, S., Warring, S., James, R., Hildebrand, F., Quince, C."
date: 2026-03-23
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.05.709928v2.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 利用基础模型从宏基因组数据中恢复真核生物基因组
tldr: 针对宏基因组中真核生物基因组组装（MAG）回收率低且现有工具多针对原核生物优化的现状，本研究开发了REMAG工具。该工具专为长读长数据设计，利用微调的HyenaDNA模型筛选真核重叠群，并结合对比学习（Barlow Twins）融合序列组成与覆盖度特征，最后通过受约束的Leiden聚类提取高质量基因组。实验证明REMAG在回收近乎完整的真核基因组方面显著优于现有工具，为复杂生态系统研究提供了高效的自动化方案。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-05-709928-v2/fig-001.webp\", \"caption\": \"Figure 4. Eukaryotic MAGs recovered from plankton datasets\", \"page\": 6, \"index\": 1, \"width\": 1008, \"height\": 714}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-05-709928-v2/fig-002.webp\", \"caption\": \"Table 1. Recall and F1 score performance of HyenaDNA models on simulated datasets grouped by biome, sequencing technology (Oxford Nanopore Technologies [ONT], Illumina and PacBio) and tool (Tiara (Karlicki et al., 2022), 4- CAC (Pu and Shamir, 2024) and REMAG). Best results for each dataset and technology are bolded.\", \"page\": 2, \"index\": 2, \"width\": 502, \"height\": 902}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-05-709928-v2/fig-003.webp\", \"caption\": \"Figure 1. REMAG workflow\", \"page\": 3, \"index\": 3, \"width\": 1008, \"height\": 472}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-05-709928-v2/fig-004.webp\", \"caption\": \"Figure 2. Eukaryotic MAG recovery performance across simulated long-read sequencing datasets\", \"page\": 4, \"index\": 4, \"width\": 1008, \"height\": 747}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-05-709928-v2/fig-005.webp\", \"caption\": \"Figure 3. Eukaryotic MAG recovery performance on real plankton datasets\", \"page\": 5, \"index\": 5, \"width\": 1008, \"height\": 520}]"
motivation: 现有的宏基因组分箱工具主要依赖原核生物参考库且针对小基因组优化，导致真核生物基因组回收效率低下且碎片化严重。
method: REMAG结合了HyenaDNA基因组基础模型进行序列过滤，并利用基于Barlow Twins对比损失的双编码器网络与受真核单拷贝核心基因约束的Leiden聚类进行分箱。
result: 在模拟和真实数据集的基准测试中，REMAG比现有最先进工具回收了更多近乎完整的真核生物基因组。
conclusion: REMAG提供了一种可扩展的自动化真核生物分箱方法，能够有效应对日益增长的宏基因组数据规模和测序深度。
---

## 摘要
宏基因组组装基因组（MAGs）是探索微生物群落的核心。然而，尽管原生生物和真菌与多种生态系统密切相关，但真核生物 MAG 的恢复仍滞后于原核生物。一个主要的瓶颈在于，大多数最先进的分箱（binning）流程完全依赖于原核生物单拷贝核心基因参考数据库，并且是针对较小的基因组进行优化的。为了填补这一空白，我们提出了 REMAG（Recovery of Eukaryotic MAGs），这是一种旨在从长读段宏基因组数据中恢复高质量真核生物基因组的工具。REMAG 利用微调后的 HyenaDNA 基因组基础模型来高效筛选真核生物重叠群（contigs）。随后，它采用通过 Barlow Twins 对比损失训练的双编码器孪生网络（Siamese network），通过整合重叠群组成和差异覆盖度来学习共享嵌入空间。最后，利用受真核生物单拷贝核心基因约束优化的贪婪迭代 Leiden 聚类提取高质量分箱。在基于模拟的原核/真核混合群落以及不同规模和来源的真实数据集的基准测试中，我们证明了 REMAG 相比现有最先进工具能够恢复更多近乎完整的真核生物基因组，而现有工具通常会产生高度碎片化的真核生物分箱。REMAG 提供了一种自动化的真核生物分箱方法，能够随着宏基因组数据集规模和测序深度的增加而有效扩展。

## Abstract
Metagenome-assembled genomes (MAGs) are central to exploring microbial communities. Yet, despite the relevance of protists and fungi to diverse ecosystems, eukaryotic MAG recovery lags behind that of prokaryotes. A major bottleneck is that most state-of-the-art binning pipelines exclusively rely on prokaryotic single-copy core gene reference databases and are optimized for smaller genomes. To address this gap, we present REMAG (Recovery of Eukaryotic MAGs), a tool designed to recover high-quality eukaryotic genomes suited for longread metagenomic data. REMAG leverages finetuned HyenaDNA genomic foundation models to efficiently filter eukaryotic contigs. It then employs a dual-encoder Siamese network trained with Barlow Twins contrastive loss to learn a shared embedding space by integrating contig composition and differential coverage. Finally, high-quality bins are extracted using greedy iterative Leiden clustering optimized with eukaryotic single-copy core gene constraints. In benchmarks based on simulated mixed prokaryotic/eukaryotic communities and real datasets of varying sizes and origin, we demonstrate REMAGs ability to recover more near-complete eukaryotic genomes than existing state-of-the-art tools, which often produce highly fragmented eukaryotic bins.

REMAG provides an automated eukaryotic binning method that scales effectively with the increasing size and sequencing depth of metagenomic datasets.

---

## 论文详细总结（自动生成）

这是一份关于论文《REMAG: recovery of eukaryotic genomes from metagenomic data using contrastive learning》的结构化深度总结：

### 1. 核心问题与整体含义（研究动机和背景）
在宏基因组研究中，从混合群落中恢复高质量的“宏基因组组装基因组”（MAGs）是理解微生物功能的关键。然而，现有的分箱（Binning）工具主要针对原核生物（细菌和古菌）设计，面临以下挑战：
*   **参考偏差：** 现有工具依赖原核生物特有的单拷贝核心基因（SCG）数据库。
*   **基因组复杂性：** 真核生物基因组通常更大、基因密度低、含有大量内含子和重复序列，且在环境样本中丰度较低。
*   **分箱碎片化：** 传统方法在处理真核生物时往往导致基因组高度碎片化，回收率极低。
**研究动机：** 开发一种专门针对真核生物、利用深度学习（特别是对比学习）和长读长测序优势的自动化分箱工具 REMAG。

### 2. 方法论：核心思想与关键技术
REMAG 包含一个七阶段的集成流程，核心思想是结合基因组基础模型进行预筛选，并利用对比学习融合多模态特征：
1.  **真核序列过滤：** 使用微调后的 **HyenaDNA**（一种基因组基础模型）作为分类器，从原始组装结果中筛选出真核重叠群（Contigs），显著降低后续计算量并减少原核污染。
2.  **数据增强与特征提取：** 通过随机掩码和切割生成重叠群的多个视图（正样本对）。提取**四核苷酸频率（组成特征）**和**差异覆盖度（丰度特征）**。
3.  **对比学习嵌入（Barlow Twins）：** 采用双编码器孪生网络，利用 **Barlow Twins 损失函数**进行训练。该损失函数仅需正样本对，通过减少嵌入维度的冗余来学习特征，避免了负样本采样带来的噪声。
4.  **多模态融合：** 使用**双向交叉注意力机制（Cross-attention）**和门控融合层，动态调整组成和丰度特征的权重。
5.  **贪婪迭代聚类：** 构建 k-NN 图，使用 **Leiden 算法**进行多分辨率聚类。利用真核生物特有的 133 个单拷贝核心基因（来自 OrthoDB）作为约束，挑选 F1 分数最高的分箱。
6.  **卫星分箱救助（Satellite Rescue）：** 基于嵌入空间的质心相似度，将碎片化的小分箱合并到核心分箱中，前提是不显著增加 SCG 重复率。

### 3. 实验设计
*   **数据集：**
    *   **模拟数据：** 涵盖人类肠道、海洋、土壤和植物相关四个生物群落，模拟了 Illumina（短读长）、ONT 和 PacBio（长读长）三种测序技术。
    *   **真实数据：** Tara Oceans 海洋样本（短读长）、浮游生物样本（ONT 和 PacBio HiFi 长读长）。
*   **基准测试（Benchmark）：** 对比了 CONCOCT、SemiBin2 和 COMEBin 等当前最先进的通用或对比学习分箱工具。
*   **评估指标：** 恢复的高质量（HQ, >90% 完整度）和中等质量（MQ, >50% 完整度）MAG 数量、调整兰德指数（eARI）。

### 4. 资源与算力
*   **硬件配置：** 使用单节点，配备 32 核 CPU、128 GB RAM 和 **1 张 NVIDIA A100 GPU (80 GB)**。
*   **运行效率：** 在模拟数据集的协同组装（co-assembly）测试中，REMAG 平均运行时间仅为 **26 分钟**，约为第二快工具 CONCOCT 的一半，比 COMEBin 快约 25 倍。

### 5. 实验数量与充分性
*   **实验规模：** 进行了多维度测试，包括 4 种生物群落、3 种测序技术、单样本 vs 协同组装、模拟 vs 真实数据。
*   **消融实验：** 专门测试了“真核过滤步骤”和“卫星救助步骤”对性能的影响，证明了过滤步骤能提升 11.3% 的 HQ MAG 回收率并提速 6 倍。
*   **客观性：** 实验设计考虑了不同环境的复杂度和测序技术的差异，使用了标准的第三方评估工具（BUSCO, EukCC），对比方法均采用默认参数，实验较为充分且公平。

### 6. 主要结论与发现
*   **长读长优势显著：** 在长读长模拟数据中，REMAG 回收的高质量真核 MAG 数量是第二名（COMEBin）的两倍以上。
*   **分类准确度高：** REMAG 的真核生物调整兰德指数（eARI）平均为 0.79，远高于 CONCOCT 的 0.44。
*   **真实样本表现：** 在浮游生物长读长数据中，REMAG 成功恢复了 26 个独特的真核 MAG，涵盖绿藻、海藻等多样化类群，并揭示了不同类群在碳水化合物代谢上的功能差异。
*   **短读长表现持平：** 在短读长数据上，REMAG 表现与 CONCOCT 相当，但在真实复杂样本中略有优势。

### 7. 优点
*   **专为真核设计：** 引入了真核 SCG 约束和基础模型过滤，填补了领域空白。
*   **算法创新：** 采用 Barlow Twins 损失函数，解决了大基因组分箱中负样本难以定义的难题；交叉注意力机制有效融合了非线性特征。
*   **高效且可扩展：** 运行速度极快，能够处理大规模、高深度的宏基因组数据集。
*   **鲁棒性：** 在不同测序平台（ONT/PacBio）和不同环境（海洋/土壤）下均表现稳定。

### 8. 不足与局限
*   **短读长限制：** 在短读长组装中，由于重叠群较短，SCG 标注不准确，导致 REMAG 的优势不如在长读长数据中明显。
*   **参考库依赖：** 尽管减少了依赖，但聚类阶段仍需真核 SCG 标注，对于与已知参考库差异极大的极度新颖物种，性能可能受限。
*   **环境真核生物挑战：** 真实环境样本中真核生物丰度极低，即便使用 REMAG，整体回收率依然面临组装质量的底层限制。

（完）
