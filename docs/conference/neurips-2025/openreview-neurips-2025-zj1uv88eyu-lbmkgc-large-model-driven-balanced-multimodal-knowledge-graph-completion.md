---
title: "LBMKGC: Large Model-Driven Balanced Multimodal Knowledge Graph Completion"
title_zh: "LBMKGC: 大模型驱动的平衡多模态知识图谱补全"
authors: "Yuan Guo, Qian Ma, Hui Li, Qiao Ning, Furui Zhan, Yu Gu, Ge Yu, Shikai Guo"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=Zj1uV88eYU"
tags: ["query:ad"]
score: 7.0
evidence: 大模型驱动多模态知识图谱补全，自动发现新事实
tldr: 多模态知识图谱补全旨在自动发现新事实，但面临模态信息不平衡等挑战。本文提出LBMKGC，利用大模型驱动平衡多模态融合，通过增强对齐和自适应机制缓解异质性。实验表明，该方法在多个数据集上显著提升了补全性能，成功自动发现了更多未观察到的知识。该工作验证了大模型在自动知识发现中的强大能力，为知识图谱完善提供了新方案。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-zj1uv88eyu/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 1857, \"height\": 849}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-zj1uv88eyu/fig-002.webp\", \"caption\": \"\", \"page\": 4, \"index\": 2, \"width\": 8943, \"height\": 3165}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-zj1uv88eyu/fig-003.webp\", \"caption\": \"\", \"page\": 9, \"index\": 3, \"width\": 11923, \"height\": 4716}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-zj1uv88eyu/fig-004.webp\", \"caption\": \"\", \"page\": 9, \"index\": 4, \"width\": 4584, \"height\": 1896}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-zj1uv88eyu/fig-005.webp\", \"caption\": \"\", \"page\": 21, \"index\": 5, \"width\": 1332, \"height\": 1270}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-zj1uv88eyu/fig-006.webp\", \"caption\": \"\", \"page\": 21, \"index\": 6, \"width\": 1390, \"height\": 590}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-zj1uv88eyu/fig-007.webp\", \"caption\": \"\", \"page\": 22, \"index\": 7, \"width\": 1790, \"height\": 590}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-zj1uv88eyu/fig-008.webp\", \"caption\": \"\", \"page\": 22, \"index\": 8, \"width\": 1989, \"height\": 590}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-zj1uv88eyu/fig-009.webp\", \"caption\": \"\", \"page\": 23, \"index\": 9, \"width\": 1189, \"height\": 790}]"
motivation: 多模态知识图谱补全面临模态间信息不平衡和异质性挑战，影响自动知识发现效果。
method: 提出大模型驱动的平衡多模态融合方法，通过增强模态对齐和自适应融合来解决不平衡问题。
result: 在多个基准数据集上，LBMKGC显著提升了知识图谱补全性能，自动发现了更多潜在事实。
conclusion: LBMKGC验证了大模型在多模态知识图谱补全中的有效性，推进了自动知识发现技术。
---

## Abstract
Multi-modal Knowledge Graph Completion (MMKGC) aims to predict missing entities, relations, or attributes in knowledge graphs by collaboratively modeling the triple structure and multimodal information (e.g., text, images, videos) associated with entities.
This approach facilitates the automatic discovery of previously unobserved factual knowledge.
However, existing MMKGC methods encounter several critical challenges: (i) the imbalance of inter-entity information across different modalities; (ii) the heterogeneity of intra-entity multimodal information; and (iii) for a given entity, the informational contributions of different modalities are inconsistent across contexts.
In this paper, we propose a novel **L**arge model-driven **B**alanced **M**ultimodal **K**nowledge **G**raph **C**ompletion framework, termed LBMKGC.
Subsequently, to bridge the semantic gap between heterogeneous modalities, LBMKGC aligns the multimodal embeddings of entities semantically by using the CLIP (Contrastive Language-Image Pre-Training) model.
Furthermore, LBMKGC adaptively fuses multimodal embeddings with relational guidance by distinguishing between the perceptual and conceptual attributes of triples.
Finally, extensive experiments conducted against 21 state-of-the-art baselines demonstrate that LBMKGC achieves superior performance across diverse datasets and scenarios while maintaining efficiency and generalizability.
Our code and data are publicly available at: https://github.com/guoynow/LBMKGC.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

多模态知识图谱补全（MMKGC）旨在通过协同建模三元组结构与实体关联的多模态信息（文本、图像、视频等），预测知识图谱中缺失的实体、关系或属性，从而自动发现先前未观测到的事实知识。然而，现有 MMKGC 方法面临三个关键挑战：

- **模态间信息不平衡**：不同实体在模态分布上差异明显，部分实体多模态信息丰富，部分实体（如仅含文本）模态稀缺，导致缺失模态可能遗漏关键知识。
- **模态内信息异质性**：不同模态的数据结构与语义表征存在显著差异（如图像为2D像素矩阵，文本为符号序列），现有方法常分别用单模态预训练模型提取特征，缺乏跨模态对齐。
- **同一实体在不同上下文中模态贡献不一致**：实体在不同三元组（如感知型 vs. 概念型）中，各模态信息的重要性不同。现有方法难以根据三元组的感知/概念属性动态调整模态权重。

论文提出 **LBMKGC** 框架，旨在同时解决上述不平衡、异质性和不一致性问题，实现更高性能、更鲁棒的多模态知识图谱补全。

### 2. 论文提出的方法论：核心思想、关键技术细节

LBMKGC 由三个核心模块组成：

- **LvMC（Large Generative Visual Model-based Modality Completion）**：利用大型生成视觉模型 SDXL（Stable Diffusion XL）为缺失视觉模态的实体生成图像，以缓解模态间信息不平衡。具体流程：将实体文本描述输入 SDXL（结合 Base 和 Refiner 两阶段），通过 DDIM 采样生成高分辨率图像，再通过 VAE 解码得到最终视觉信息。

- **CMoA（Cross-Modality Alignment）**：采用预训练 CLIP 模型对齐同一实体的图像和文本语义。先分别用 BERT 提取文本特征、ViT 提取视觉特征，计算余弦相似度矩阵，再使用对称对比损失（带可学习温度参数 τ）进行跨模态对齐，最后通过 MLP 投影层将对齐后的特征映射到同一嵌入空间。

- **CGuAF（Context-Guided Adaptive Fusion）**：根据三元组的感知/概念属性动态调整各模态权重。首先按公式计算各模态权重 ω_m(e)，得到融合多模态嵌入 h_mm；然后引入关系温度 ζ_r，融合结构嵌入与多模态嵌入得到联合嵌入 h_joint。该方法使得同一实体在不同关系上下文中采用不同的模态权重，实现细粒度自适应融合。

最终，采用 RotatE 评分函数（基于复数空间旋转操作）评估三元组合理性，并使用负采样损失训练。

### 3. 实验设计

- **数据集**：使用三个公开基准数据集：DB15K、MKG-W、MKG-Y。均包含结构三元组及模态信息（文本、图像）。
- **基准对比**：对比了 21 个 SOTA 基线，分为三类：
  - 单模态 KGC：TransE、DistMult、ComplEx、RotatE、PairRE、GC-OTE
  - 多模态 KGC：IKRL、TBKGC、TransAE、MMKRL、RSME、OTKGE、IMF、AdaMF、QEB、VISTA、AdaMF-MAT、MyGO
  - 负采样方法：KBGAN、MANS、MMRNS
- **评估指标**：MRR、Hit@1、Hit@3、Hit@10（采用过滤设置）

### 4. 资源与算力

论文明确说明：实验在 **Linux 服务器（Ubuntu 24.04.01）** 上运行，使用 **单张 NVIDIA GeForce 4090 GPU**。训练 epoch 从 {1000,1250,1500} 中选择，嵌入维度在 {300,400,500} 中调优，负采样数 K ∈ {32,64,128}。未提供具体训练时长，但指出额外计算时间主要来自模态权重分配和上下文调节，但仍可接受。

### 5. 实验数量与充分性

论文进行了多组实验，包括：
- **主实验结果**（表1）：在三个数据集上对比 21 个基线，LBMKGC 在所有指标上达到 SOTA。
- **消融实验**（表2）：分别去除 LvMC、CMoA、CGuAF 模块，以及去除结构/文本/视觉模态，验证各组件有效性。
- **模态缺失鲁棒性实验**（图3）：在 DB15K 上以不同缺失率 η∈{0.25,0.5,0.75,1.0} 丢弃视觉模态，LBMKGC 性能下降最小。
- **案例研究**（图4）：展示 CGuAF 对不同实体（概念型 vs. 感知型）的权重分配，验证动态调整能力。
- **泛化实验**（附录A.2）：将 LvMC+CMoA 提取的特征用于其他 MMKGC 模型（TBKGC、IKRL、AdaMF、QEB），均获得性能提升。
- **统计显著性测试**（附录A.3）：在三个数据集上各运行5次，标准差均低于0.0026，说明稳定性好。
- **超参数敏感性**（附录A.4）：对嵌入维度、负样本数、margin 进行调优，性能波动小。
- **时间效率**（附录A.5）：比较 LBMKGC 与 TBKGC、QEB、RSME、IKRL 的训练时间，指出额外时间开销在可接受范围内。

实验设计全面，覆盖主性能、模块贡献、鲁棒性、泛化性、稳定性、效率，且使用了公开基准和代码，公平性和充分性良好。

### 6. 论文的主要结论与发现

- LBMKGC 在三个基准数据集上均超越 21 个基线，尤其在 MRR、Hit@3、Hit@10 上提升显著（如在 MKG-W 上 MRR 提升 6.6%，MKG-Y 上 MRR 提升 3.5%）。
- 消融实验证实每个模块 (LvMC、CMoA、CGuAF) 均不可或缺；去除任一模态（结构/文本/视觉）均导致性能下降。
- 模态缺失场景下，LBMKGC 因 LvMC 生成真实图像而非随机初始化，性能保持稳定。
- CGuAF 能根据实体在三元组中的感知/概念属性动态分配模态权重，提高信息利用效率。
- LvMC+CMoA 可作为通用组件提升其他 MMKGC 模型性能。

### 7. 优点

- **创新性**：首次利用大型生成模型 SDXL 解决模态缺失问题，替代传统对抗训练；首次考虑三元组感知/概念属性进行自适应融合。
- **鲁棒性**：在模态缺失场景下性能稳定；跨数据集和多种基线均表现优异。
- **可泛化性**：LvMC+CMoA 模块可即插即用于其他模型，提升其性能。
- **实验详尽**：21个基线，多维度消融，稳定性测试，超参数敏感性分析，泛化实验，时间效率对比，证明方法全面有效。
- **代码开源**：所有代码和数据公开，便于复现。

### 8. 不足与局限

- **模态覆盖范围有限**：当前仅处理文本和图像两种模态，未纳入音频、视频等更丰富模态。
- **领域适应性未验证**：实验仅在通用领域数据集（DB15K、MKG-W、MKG-Y）上进行，未在生物医学、社交网络等专业领域检验。
- **计算效率**：引入 SDXL 生成图像和 CLIP 对齐会带来额外计算开销，虽然论文认为可接受，但在大规模实时场景可能受限。
- **生成偏差风险**：SDXL 生成的图像可能不完全反映实体真实视觉特征，对依赖视觉判别的关系（如颜色、形状）可能引入误差。
- **假设局限**：论文假设文本模态总是存在（实体名称也算文本），但实际中可能连文本描述都完全缺失（如纯视觉实体），未讨论此类极端情况。

（完）
