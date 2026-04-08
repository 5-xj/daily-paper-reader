---
title: FunctionaL Assigning Sequence Homing (FLASH) maps phenotype to sequence with deep and machine learning
title_zh: 功能分配序列归巢（FLASH）：利用深度与机器学习将表型映射到序列
authors: "Cotter, D. J., Harrison, M.-C., Rustagi, A., Wang, P. L., Kokot, M., Carey, A. F., Deorowicz, S., Salzman, J."
date: 2026-04-07
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.04.715981v1.full.pdf"
tags: ["query:gene"]
score: 9.5
evidence: 利用深度学习将遗传变异映射到表型
tldr: 本文提出FLASH，一种结合统计模型与深度学习的可解释框架，可直接在原始测序数据上进行表型预测。其在超过3.5万微生物样本中实现高精度表型识别，能发现新的耐药基因和毒力因子，并扩展至GWAS无法处理的表型任务。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-04-715981-v1/fig-001.webp\", \"caption\": \"Figure 1C. Size of data and scope of metadata. Datasets, species and number of isolates analyzed in this study.\", \"page\": 38, \"index\": 1, \"width\": 979, \"height\": 1074}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-04-715981-v1/fig-002.webp\", \"caption\": \"Fig 5A. FLASH models predict host range with 96%% accuracy on RNA viruses, like H5N1, with high-mutation rates. Host (chicken, turkey, cattle) is predicted in H5N1 with 96% accuracy. The 1st top predictor indicates that in cattle, for PB2, the samples are entirely missing any anchors from this cluster. On x axis: magnitude of the embedding prediction; y axis represents sequence edit distance between each embedded sequence; color represents fraction of metadata class with that label; blast Coverage (C) and identity (I) are indicated. The value at -1 indicates the samples that are missing any target variation. The MSA represents the turkey/chicken variation (blue) and one sequence present in cattle and chicken (purple). * indicates a stop codon. Within-cattle variation that is not missing is only present in ~30 of 950 cattle samples. In the 7th cluster, annotated hemagglutinin HA2, the prediction is also driven by an anchor which is not detected, but in this case the anchor is not detected in birds.\", \"page\": 53, \"index\": 2, \"width\": 979, \"height\": 754}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-04-715981-v1/fig-003.webp\", \"caption\": \"Fig 4E. Variation in β-1,3-glucan synthases highlights high levels of resistance-associated sequence diversity across Saccharomycotina evolution. Fluconazole resistance in Saccharomycotina is predicted by sequence variation with blast hits to β-1,3-glucan synthases (top). These hits are across many different anchor-target combinations across a diverse set of Orders. At the protein level, these nucleotide changes occur in only four consecutive amino acids with certain changes enriched in resistant relative to susceptible isolates and seemingly unrelated to phylogenetic relationships (red box). The rest of the sequence has high conservation (the region indicated by the asterisk is the anchor region used for clustering and will bias the sequences here to be more conserved). The domain is observed in both FKS1 (Uniprot: P38631) and GSC2 (Uniprot: P40989) (alpha fold structure predictions in S. cerevisiae with anchor-target region highlighted in red).\", \"page\": 52, \"index\": 3, \"width\": 979, \"height\": 593}]"
motivation: 现有GWAS和传统机器学习方法在预测新变异表型和整合结构变异方面存在局限。
method: 提出了基于统计与深度学习的FLASH框架，直接处理原始测序数据进行表型预测。
result: "FLASH在35,000多个细菌、真菌和病毒样本中表现出高准确度，并能识别新的耐药与毒力相关因子。"
conclusion: FLASH为基因功能与表型预测提供了一种高效、可解释且跨物种通用的新方法。
---

## 摘要
全基因组关联研究（GWAS）将遗传变异映射到参考基因组，并将变异与表型相关联。然而，GWAS及类似方法存在局限性，包括无法预测在发现阶段未曾见过的变异对应的表型，以及难以整合结构变异。深度学习和机器学习的替代方案在抗性表型的一致预测方面未取得成功（Hu 等，2024）。在此，我们介绍 FLASH：一种新的可解释的、基于统计的深度学习框架，可直接作用于原始测序读段。在超过 35,000 个细菌、真菌和病毒的分离株上，FLASH 在独立测试数据中实现了均匀的高精度预测，包括对训练集中未见变异的高准确度预测，性能达到或超过定制的最新方法。FLASH 能够从头识别经典的药物靶点，并发现跨物种的新型毒力预测因子，包括那些缺乏注释或仅与 NCBI 参考数据库部分比对的序列。此外，FLASH 能预测超出 GWAS 能力范围的表型，例如噬菌体的细菌宿主范围——据我们所知，这一任务目前尚不可行。FLASH 运行简单、高效，构成了一种在生命之树上预测基因功能与表型的新方法。尤其在生物伦理限制及病原微生物遗传复杂性极高、实验验证难以实现的情况下，其价值尤为突出。

## Abstract
Genome-wide association studies (GWAS) map genetic variation to a reference genome and correlate variants to phenotypes. Yet, GWAS and similar procedures have limitations, including an inability to predict phenotype on variants never seen during the discovery phase and difficulty integrating structural variants. Deep and machine learning alternatives have not been successful at consistent prediction of resistance phenotypes (Hu et al. 2024). Here, we introduce FLASH: a new interpretable, statistically-based deep learning framework that operates directly on raw sequencing reads. In over 35,000 isolates of bacteria, fungi and viruses, FLASH achieves uniformly high accuracy on independent test data, including on variation never seen in training, meeting or exceeding bespoke state of the art methods. FLASH identifies canonical drug targets ab initio and new pan-species predictors of virulence, including those lacking annotation and those only partially aligned to NCBI reference databases. Further, FLASH can predict phenotypes beyond the possibility of GWAS, such as bacterial host range of phage, a task that to our knowledge is impossible today. FLASH is simple to run, highly efficient and constitutes a new approach for predicting gene function and phenotype across the tree of life. It is especially valuable when bioethical concerns and the vast genetic complexity of pathogenic microbes limit the feasibility of experimental validation.

---

## 论文详细总结（自动生成）

# 功能分配序列归巢（FLASH）论文详细总结

---

## 一、研究动机与核心问题

- **背景困境**  
  - 传统的全基因组关联研究（GWAS）用于将变异与表型相关联，但存在明显局限：
    - 无法预测训练集中未见过的变异；
    - 难以一体化建模结构变异、插入缺失等复杂变化；
    - 仅提供相关性不具备预测能力；
    - 对基因缺乏或异源序列无法处理；
    - 在微生物和病毒等高塑性基因组中效果差。
  - 深度学习虽然理论上能捕捉复杂关系，但在抗性预测等任务中的泛化性与解释性不足。
- **核心问题**  
  - 如何在无参考基因组条件下，从原始测序读段直接建立“序列 → 表型”的预测模型；
  - 同时保证模型的可解释性、跨物种泛化性和高效性。
- **研究意义**  
  - FLASH 旨在建立一个统一的、跨生物界（细菌、真菌、病毒）通用的表型预测框架；
  - 能辅助发现未知功能基因、耐药机制以及病原体–病毒互作的基因基础。

---

## 二、方法论与核心算法

### 1. 方法概览

- 提出 **FLASH（FunctionaL Assigning Sequence Homing）** 框架；
- 核心思想：  
  直接从原始测序数据中提取 k-mer 特征，通过统计聚类和深度嵌入建模，将基因变异与表型直接映射；
- **目标**：在无需参考基因组或比对的前提下，对个体样本的表型（如耐药性、毒力、宿主范围等）进行预测，并确定驱动这些表型的序列片段。

### 2. 算法流程（核心三步）

1. **特征聚类（Anchor Clustering）**
   - 输入：原始序列中的 k-mer（默认长度 27 bp），由 SPLASH 算法事先提取；
   - 核心操作：基于编辑距离或氨基酸翻译相似性，将相近的 k-mer 聚类成“锚点簇（anchor clusters）”；
   - 理念：类似于多序列比对，但更高效、参考无关。

2. **样本表示（Representative Selection）**
   - 对每个样本在每个簇中选取最具代表性的序列（即出现频率最高的目标序列 target）；
   - 若缺失，则以包含 N 的虚拟序列表示；
   - 构建样本 × 特征矩阵。

3. **嵌入与建模（Embedding & Modeling）**
   - 嵌入模型：采用 **HyenaDNA** 预训练核苷酸语言模型（8 层、128 维，基于约 5 万细菌样本训练）；
   - 数值化：每个 anchor-target 序列生成 256 维向量；
   - 监督学习：基于嵌入的多项式广义线性模型（multinomial elastic net, 实现于 `adelie`），预测表型；
   - 可解释性：模型系数大小即为每个序列簇的重要性，便于溯源基因功能。

---

## 三、实验设计与数据集

### 1. 数据来源与规模

- 覆盖 **>35,000** 个基因组样本，涵盖：
  - **细菌**：E. faecium、E. coli、S. pneumoniae、M. tuberculosis、M. abscessus、K. pneumoniae；
  - **真菌**：Candida tropicalis、C. auris、Aspergillus fumigatus、Saccharomycotina 亚门；
  - **病毒**：H5N1 高致病流感病毒；
  - **噬菌体–宿主交互**：Vibrio cholerae 与 ICP1 系列噬菌体。
- 所有数据均来自公共存档（SRA 等），部分经过重新比对（例如 Y1000 dataset, Hyun et al. 2023）。

### 2. 对比方法

- 与多个“定制化”或“最新的”基线研究对比：
  - E. faecium（Coll et al. 2024）；
  - M. tuberculosis 抗药预测（Carter et al. 2024）；
  - Fungal drug resistance (Harrison et al. 2025)；
  - 以及 GWAS 与传统机器学习模型。
- 对照方法类型：
  - 基于参考基因组的 GWAS；
  - 基于 k-mer 的统计学习；
  - 一个热编码（One-Hot）模型；
  - 深度语言模型嵌入 vs. 传统特征比较。

### 3. 任务场景
- 抗生素/抗真菌药物耐药预测；
- 跨物种抗性机制发现；
- 复杂表型（如感染组织、致病力、发病型）分类；
- 病毒宿主预测、噬菌体–宿主互作推断。

---

## 四、资源与算力

- **算法效率**  
  - 分析 1 万份 *M. tuberculosis* 样本仅需约 **4.1 小时**（单命令管线）；
  - 研究未报告 GPU / CPU 型号，但描述“模块化、可在 24 小时内完成数千样本分析”；
  - HyenaDNA 模型是在约 5 万样本上预训练完成；
  - 无明确训练显卡或算力统计，说明算法设计追求**高计算效率、低依赖性**。

---

## 五、实验数量与充分性

- **分类概况**
  - 涉及 16 个公开研究数据集；
  - 覆盖 9 种细菌、4 种真菌及 1 种病毒；
- **实验维度**
  - 每种生物体系均包含独立测试集；
  - 进行了嵌入模型、聚类方式、k-mer 长度等多维度对比；
  - 含零样本预测（Zero-shot）验证；
  - 含异域数据集泛化性（跨平台和读长）。
- **总体判断**
  - 实验数量充足、覆盖面广；
  - 对照公平，测试集独立于训练集；
  - 数据与现有研究（GWAS、deep models）严格对齐。

---

## 六、主要结论与发现

- FLASH 在所有任务中均取得高准确度，超越或匹配专业化模型：
  - E. faecium 抗性预测准确率提升约 **3.4%**；
  - Fungal 抗真菌预测平均提升 **17%**；
  - M. tuberculosis 对Pyrazinamide 抗性预测达 **92%**（基线仅78–80%）；
  - H5N1 宿主预测准确率达 **95–96%**；
  - 噬菌体宿主互作准确率达 **97%**。
- 成功**再发现已知靶点**（如 PBP、gyrA、ERG11、PncA 等）；
- **发现新型候选基因与蛋白家族**：
  - 多种跨物种耐药驱动蛋白（如 DNA helicase PcrA、ABC转运体、CFEM结构域蛋白等）；
  - Candida tropicalis 中未注释、高度多态的外膜蛋白与耐药相关；
- 能解析 **基因结构变异**（重复扩增、拷贝数可变等）；
- 展示了对 **病毒宿主范围预测** 以及 **噬菌体共进化关系** 的新能力。

---

## 七、优点与亮点

- **完全参考无关**：无需参考基因组或比对；
- **跨物种通用**：同一框架适用于细菌、真菌、病毒；
- **可解释性强**：可溯源到核苷酸层级的序列和功能注释；
- **高计算效率**：适配海量数据分析；
- **泛化性佳**：可在未见变异与不同测序平台（Illumina/Nanopore）上准确预测；
- **广义任务扩展**：能预测GWAS无法处理的复杂表型（如宿主范围、毒力类型）；
- **开源可复现**：提供GitHub地址（github.com/djcotter/FLASH-smk）。

---

## 八、不足与局限

- **生物因果关系尚不明确**：模型提供相关性而非机制性因果；
- **簇聚类粒度问题**：不同基因或等位变体可能被聚合为同一特征，可能引入混淆；
- **参数未完全优化**：k-mer 长度固定为 27；仅测试部分阈值；
- **尚未利用互补信息**：未整合反向互补链、配对读段；
- **算力与可扩展性评测缺失**：缺乏硬件与超参数细节；
- **区分直接抗性机制与相关背景仍具挑战**；
- 主要数据来自公共数据库，可能存在测序偏差或标签噪声；
- 未包含复杂真核模型（如哺乳动物基因组）。

---

**（完）**
