---
title: "Brieflow: An Integrated Computational Pipeline for High-Throughput Analysis of Optical Pooled Screening Data"
title_zh: Brieflow：一种用于光学混合筛选数据高通量分析的集成计算流程
authors: "Di Bernardo, M., Kern, R., Dia, A. K. C., Mallar, A., Choi, S. J., Nutter-Upham, A., Lourido, S., Blainey, P., Cheeseman, I. M."
date: 2026-03-25
pdf: "https://www.biorxiv.org/content/10.1101/2025.05.26.656231v2.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 用于功能基因组学和CRISPR-Cas9筛选分析的计算流水线
tldr: 本研究开发了Brieflow，一个用于光学混合筛选（OPS）数据端到端分析的集成计算流水线。针对OPS数据量大、整合难的挑战，Brieflow结合了MozzareLLM大模型框架，实现了从原始图像到生物学解释的高效处理。通过对5072个基因、7000万个细胞的重分析，成功发现了原研究遗漏的线粒体子程序，显著提升了高内涵表型筛选的分析效率和发现能力。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-05-26-656231-v2/fig-001.webp\", \"caption\": \"Table 1: Comparison of existing optical pooled screening analysis pipelines and their capabilities. Features are compared across four computational frameworks for OPS data analysis. Periscope relies on CellProfiler-based architecture requiring integration of multiple separate analytical pipelines. OpticalPooledScreens provides basic phenotype and sequencing analysis components but lacks comprehensive integration and documentation for end-to-end workflows. PerturbView focuses specifically on tissue spatial alignment applications with limited broader analytical scope. Brieflow provides the first unified framework encompassing complete analysis from raw data to biological interpretation. Extensive benchmarking of alternative pipelines was not feasible due to limited accessibility and the time-intensive nature of adapting existing frameworks to perform the comprehensive end-to-end analysis demonstrated with Brieflow.\", \"page\": 51, \"index\": 1, \"width\": 1099, \"height\": 616}]"
motivation: 针对光学混合筛选（OPS）中海量数据处理复杂、缺乏标准化分析框架以及多模态整合困难等挑战。
method: 开发了模块化、开源的计算流水线Brieflow，并集成MozzareLLM大模型框架用于表型聚类的生物学解释。
result: 成功处理了超过7000万个细胞的数据，并发现了原研究中未识别出的五个核心线粒体生物学子程序。
conclusion: Brieflow为高内涵表型筛选提供了高效、可重复且具备深度生物学解释能力的标准化分析工具。
---

## 摘要
光学混合筛选（OPS）已成为功能基因组学的一项强大技术，使研究人员能够以前所未有的规模将遗传扰动与复杂的细胞形态表型联系起来。然而，由于数据集庞大、复杂的多模态整合需求以及缺乏标准化框架，OPS 数据分析面临着挑战。在此，我们介绍了 Brieflow，这是一个用于固定细胞光学混合筛选数据端到端分析的计算流程。我们通过重新分析一项包含 5,072 个适应性相关基因的 CRISPR-Cas9 筛选，展示了 Brieflow 的能力，处理了超过 7000 万个具有多种表型标记的细胞。为了加速生物学解释，我们还提出了 MozzareLLM，这是一个利用大语言模型识别表型簇内的生物过程并优先排序候选基因以进行实验验证的框架。我们的综合分析找回了现有分析方法遗漏的连贯生物模块，包括原始研究中缺失的五个核心线粒体子程序。Brieflow 的模块化设计和开源实现促进了新型分析组件的集成，同时确保了计算的可重复性，并提高了高内涵表型筛选在生物发现中的应用性能。

## Abstract
Optical pooled screening (OPS) has emerged as a powerful technique for functional genomics, enabling researchers to link genetic perturbations with complex cellular morphological phenotypes at unprecedented scale. However, OPS data analysis presents challenges due to massive datasets, complex multi-modal integration requirements, and the absence of standardized frameworks. Here, we present Brieflow, a computational pipeline for end-to-end analysis of fixed-cell optical pooled screening data. We demonstrate Brieflows capabilities through reanalysis of a CRISPR-Cas9 screen encompassing 5,072 fitness-conferring genes, processing more than 70 million cells with multiple phenotypic markers. To accelerate biological interpretation, we additionally present MozzareLLM, a framework leveraging large language models to identify biological processes within phenotypic clusters and prioritize gene candidates for experimental validation. Our combined analysis recovered coherent biological modules missed by existing analytical approaches, including five core mitochondrial sub-programs that were absent from the original study. The modular design and open-source implementation of Brieflow facilitates the integration of novel analytical components while ensuring computational reproducibility and improved performance for the use of high-content phenotypic screening in biological discovery.

---

## 论文详细总结（自动生成）

### 论文结构化深度总结：Brieflow 与 MozzareLLM

#### 1. 核心问题与整体含义（研究动机和背景）
光学混合筛选（Optical Pooled Screening, OPS）结合了大规模遗传扰动（如 CRISPR）与高分辨率细胞成像，是功能基因组学的强大工具。然而，该技术面临三大挑战：
*   **数据规模巨大：** 涉及数 TB 的多通道图像和数千万个单细胞。
*   **多模态整合困难：** 需要将原位测序（确定基因身份）与表型成像（提取形态特征）精确匹配。
*   **缺乏标准化流程：** 现有分析方法多为实验室自用、碎片化且难以复现，导致从原始图像到生物学发现的转化效率低下。

本研究开发了 **Brieflow**（集成计算流水线）和 **MozzareLLM**（大模型解释框架），旨在提供一个标准化、端到端且具备深度生物学解释能力的 OPS 分析方案。

#### 2. 方法论：核心思想与关键技术
**Brieflow** 采用模块化架构，基于 Snakemake 工作流管理系统实现：
*   **Preprocess（预处理）：** 格式转换、元数据提取及光照校正。
*   **Sequencing-by-Synthesis（原位测序分析）：** 包含对齐、斑点检测（支持传统算法与深度学习 Spotiflow）、碱基识别及细胞分配。
*   **Phenotype（表型提取）：** 利用 Cellpose 等模型进行细胞分割，提取形态、强度、纹理等数千个特征。
*   **Merge（数据整合）：** **核心技术：** 使用**三角形哈希（Triangle Hashing）**算法。利用细胞的空间分布模式作为天然“基准点”，通过 Delaunay 三角剖分匹配不同倍率下的图像，实现基因型与表型的单细胞级关联。
*   **Classify（细胞分类）：** 训练机器学习分类器（如 XGBoost）区分细胞状态（如间期与有丝分裂）。
*   **Aggregate（数据聚合）：** 将单细胞特征聚合为扰动级（基因级）特征，采用典型变异归一化（TVN）消除批次效应。
*   **Cluster（聚类）：** 使用 PHATE 降维和 Leiden 算法识别功能相关的基因簇。

**MozzareLLM** 框架：
*   利用大语言模型（如 Claude 4.6）对聚类结果进行自动化生物学标注。
*   将基因分类为“已证实”、“潜在新功能”或“未表征”，并根据证据强度给出优先排序分数。

#### 3. 实验设计与 Benchmark
*   **核心数据集：** 重新分析了“Vesuvius”数据集（Funk et al. 2022），包含 5,072 个适应性基因，涉及超过 7,000 万个 HeLa 细胞。
*   **验证数据集：** 使用独立的 T7 测序数据集和 RPE1 细胞数据集验证通用性。
*   **Benchmark（基准）：**
    *   **生物学基准：** STRING（蛋白质相互作用）、CORUM（蛋白复合物）、KEGG（代谢通路）。
    *   **方法对比：** 对比了原研究（Funk et al.）的分析结果；对比了不同分割工具（Cellpose vs. StarDist）和斑点检测工具（Spotiflow vs. 传统方法）。
    *   **LLM 对比：** 对比了 Claude Opus、GPT-5.2 和 Gemini 3 Pro 在标注准确性上的表现。

#### 4. 资源与算力
*   **算力需求：** 论文提到支持多级并行化处理（样本、孔、视野级）和 GPU 加速（用于深度学习分割）。
*   **具体说明：** 虽然未给出总的 GPU 小时数，但提到在处理 Vesuvius 这种 20TB 级别的原始数据时，使用了高性能计算（HPC）集群。
*   **效率对比：** 例如，提到传统斑点检测方法每张图耗时 0.87 秒，而深度学习方法 Spotiflow 需 40.3 秒；特征提取模块比传统 CellProfiler 快约 125 倍。

#### 5. 实验数量与充分性
*   **实验规模：** 处理了超过 7000 万个细胞，提取了 1651 个形态特征，规模极具代表性。
*   **消融与对比：** 针对分割、测序识别、数据聚合等关键步骤均做了详细的算法对比实验。
*   **客观性：** 引入了随机打乱（Shuffled）的负对照实验，证明 MozzareLLM 的发现并非随机幻觉，而是基于真实的生物信号。实验设计覆盖了从底层图像处理到高层生物发现的全链路，论证较为充分。

#### 6. 主要结论与发现
*   **性能提升：** Brieflow 在间期细胞聚类的生物学富集度（CORUM/KEGG）上均优于原始分析。
*   **新生物学发现：** 成功识别出 **5 个核心线粒体子程序**（包括 OXPHOS 组装、线粒体核糖体等），而这些模块在原研究中因信号微弱被遗漏。
*   **解释能力：** MozzareLLM 将高置信度标注的基因数量提升了 68%，并识别出数百个具有潜在新功能的候选基因。

#### 7. 优点
*   **端到端集成：** 解决了 OPS 分析长期存在的工具链断裂问题。
*   **空间匹配创新：** 三角形哈希算法有效解决了跨显微镜、跨倍率的图像配准难题。
*   **可解释性强：** 引入 LLM 极大地降低了生物学家理解复杂表型聚类的门槛。
*   **高度可复现：** 基于 Snakemake 和标准化配置，便于社区共享和二次开发。

#### 8. 不足与局限
*   **硬件依赖：** 处理 TB 级数据仍需较强的计算资源（尤其是内存和 GPU）。
*   **图像假设：** 目前假设测序轮次与表型轮次的视野（Tile）是一一对应的，对于极特殊的非标准拍摄模式可能需额外调整。
*   **特征提取局限：** 尽管开发了 Python 版模拟器，但单细胞图像特征提取的标准化（如深度学习特征 vs. 手工特征）仍是整个领域面临的持续挑战。
*   **LLM 成本：** 大规模调用前沿 LLM API 可能产生一定的经济成本。

（完）
