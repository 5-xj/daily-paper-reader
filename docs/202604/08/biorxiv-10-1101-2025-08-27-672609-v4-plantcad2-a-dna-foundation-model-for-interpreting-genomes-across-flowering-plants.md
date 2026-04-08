---
title: "PlantCAD2: a DNA foundation model for interpreting genomes across flowering plants"
title_zh: PlantCAD2：一种用于解析被子植物基因组的 DNA 基础模型
authors: "Zhai, J., Gokaslan, A., Hsu, S.-K., Chen, S.-P., Liu, Z.-Y., Marroquin, E., Czech, E., Cannon, B., Berthel, A., Romay, C., Pennell, M., Kuleshov, V., Buckler, E. S."
date: 2026-04-03
pdf: "https://www.biorxiv.org/content/10.1101/2025.08.27.672609v4.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 用于解释开花植物基因组的DNA基础模型
tldr: 本研究推出PlantCAD2，一个针对被子植物的DNA语言基础模型，通过在65个植物基因组上的预训练实现高效的进化保守性捕捉和功能预测，在多种基因组任务上表现优异，为植物基因组解析提供了强大工具。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-27-672609-v4/fig-001.webp\", \"caption\": \"Table 2. Fine-tuning evaluation summary compared with the best-performing benchmark 103 models. For each task, the bold and underscored value indicates the highest score. 104\", \"page\": 6, \"index\": 1, \"width\": 978, \"height\": 730}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-27-672609-v4/fig-002.webp\", \"caption\": \"Table 3. Inference throughput and GPU memory usage of PlantCAD2 models on an NVIDIA H100 80 164 GB PCIe GPU. 165\", \"page\": 9, \"index\": 2, \"width\": 862, \"height\": 689}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-27-672609-v4/fig-003.webp\", \"caption\": \"Table 1. Zero-shot evaluation summary compared with the best-performing benchmark models. 98 For each task, the bold and underscored value indicates the highest score. 99\", \"page\": 5, \"index\": 3, \"width\": 934, \"height\": 1127}]"
motivation: 被子植物具有复杂的基因组和多样的生物化学特性，亟需专门的DNA模型来理解基因组编码的功能。
method: 提出了PlantCAD2，一个基于65种被子植物基因组预训练的、具有单核苷酸分辨率和8192bp上下文窗口的DNA语言模型。
result: PlantCAD2在12项零样本任务中有10项性能超过Evo2，并在跨物种任务中优于AgroNT，显著提升染色质可及性预测。
conclusion: PlantCAD2证明了长程上下文和植物特异性预训练在基因组建模中的有效性，成为植物基因组学的强大基础模型。
---

## 摘要
理解 DNA 序列如何编码生物功能仍然是生物学中的一个基本挑战。被子植物（angiosperms）是优势的陆生谱系，表现出最高的生化复杂性、非凡的物种多样性（超过 10 万个物种）、相对较近的起源（约 1.6 亿年前）、约 200 倍的基因组大小差异以及相比其他真核生物更紧凑的编码区。这些特征为预训练 DNA 语言模型以理解植物特有的进化保守性、调控架构和基因组功能带来了独特的挑战与机遇。在此，我们提出了 PlantCAD2，这是一种具有单核苷酸分辨率、扩展上下文的植物特异性 DNA 语言模型，基于 65 个被子植物基因组进行预训练，并配套提供了一系列公共基准用于评估。全面的零样本测试表明，PlantCAD2（6.76 亿参数）能够高效捕捉进化保守性，在 12 项任务中有 10 项超过了拥有 70 亿参数的 Evo2 模型。通过参数高效微调，PlantCAD2 还在包括染色质可及区、基因表达和蛋白质翻译在内的七个跨物种任务中优于拥有 10 亿参数的 AgroNT。此外，其 8,192 bp 的上下文窗口显著提升了对玉米等大型基因组中染色质可及区的预测性能（AUPRC 从 0.587 提高到 0.711），突显了长程上下文在模拟远距离调控中的重要性。综上所述，这些结果确立了 PlantCAD2 作为一种强大、高效且多用途的植物基因组基础模型的地位，为多种植物物种提供了精确的基因组注释能力。

## Abstract
Understanding how DNA sequence encodes biological function remains a fundamental challenge in biology. Flowering plants (angiosperms), the dominant terrestrial clade, exhibit maximal biochemical complexity, extraordinary species diversity (over 100,000 species), relatively recent origins ([~]160 million years), [~]200-fold variation in genome size and relative compact coding regions compared with other eukaryotes. These features present both a unique challenge and opportunity for pre-training DNA language models to understand plant-specific evolutionary conservation, regulatory architectures and genomic functions. Here, we introduce PlantCAD2, an extended context, plant-specific DNA language model with single-nucleotide resolution, pre-trained on 65 angiosperm genomes, together with a series of public benchmarks for evaluation. Comprehensive zero-shot testing shows that PlantCAD2 (676 million parameters) efficiently captures evolutionary conservation, surpassing the 7-billion-parameter Evo2 model in 10 of 12 tasks. With parameter-efficient fine-tuning, PlantCAD2 also outperforms the 1-billion-parameter AgroNT across seven cross-species tasks including chromatin accessible region, gene expression and protein translation. Moreover, its 8,192bp context window substantially improves accessible chromatin prediction in large genomes such as maize (AUPRC increasing from 0.587 to 0.711), underscoring the importance of long-range context for modeling distal regulation. Together, these results establish PlantCAD2 as a powerful, efficient, and versatile foundation model for plant genomics, enabling accurate genome annotation across diverse species.

---

## 论文详细总结（自动生成）

# PlantCAD2：用于解析被子植物基因组的 DNA 基础模型 — 深度总结

---

## 一、研究背景与核心问题

- **核心问题**：理解 DNA 序列如何编码功能仍是生物学中的根本挑战，尤其对被子植物（angiosperms）而言，因其基因组复杂、物种多样（约 30 万种）、基因组大小差异高达 200 倍。  
- **研究动机**：现有 DNA 语言模型多集中在人或动物基因组，缺乏能够捕获植物特异进化与调控信息的模型；植物基因组功能注释严重不足，仅少数模式物种有较完善标签数据。  
- **整体目标**：建立一个针对开花植物的、高效可泛化的 DNA 基础模型，从原始序列出发，实现进化保守性与功能解读的统一建模。

---

## 二、方法论与技术路线

### 1. 模型概念
- **PlantCAD2** 是一种长上下文 DNA 语言模型，具备：
  - 单核苷酸分辨率；
  - 双链双向处理；
  - 反向互补等变性（reverse-complement equivariance）；
  - 可扩展的输入窗口（8,192 bp）。

### 2. 核心结构
- 基于 **Caduceus 架构**（来源于 Mamba/Mamba2 的状态空间模型，SSM）：
  - 使用 **Mamba2 block** 替换旧版 Mamba1，计算线性复杂度（对序列长度线性扩展而非 Transformer 的平方增长）。
  - 通过结构化状态空间双重性（structured state space duality）提升并行计算与显存效率。
  - 实现双向处理和参数共享，确保更高效的表示学习。

### 3. 关键训练策略
- **预训练目标**：标准 Masked Language Modeling（15% masking概率），预测被遮蔽的碱基。
- **数据采样**：从 **65 个被子植物基因组** 均衡采样，避免谱系偏差；对重复序列进行**下采样与损失加权**。
  - 损失权重公式：  
    \( \mathcal{L} = \sum w_i \cdot \ell(y_i, \hat{y}_i) / \sum w_i \)，  
    其中重复区域的权重 \(w_i=0.1\)，普通区域 \(w_i=1.0\)。

### 4. 模型规模
- 三个版本：
  - **PlantCAD2-S**：88M 参数；  
  - **PlantCAD2-M**：311M 参数；  
  - **PlantCAD2-L**：694M 参数。  

- 对比基线：PlantCAD（16基因组），GPN（Brassicales属），AgroNT（48基因组），Evo2（7B参数，跨生命域DNA模型）。

---

## 三、实验设计与评估体系

### 1. 数据来源
- **训练数据**：Phytozome 数据库中筛选的 65 个被子植物代表基因组，每属一物种。  
- **评测任务**：
  - **12 项零样本任务**：评估进化保守性、关键转录/剪接位点识别、结构变异效应。  
  - **7 项下游微调任务**：染色质可及性、基因表达、蛋白质翻译等跨物种预测。

### 2. Benchmark 对比
- **零样本对比模型**：
  - PlantCAD（旧版）
  - GPN（植物专属模型）
  - Evo2（通用DNA语言模型）
- **微调对比模型**：
  - AgroNT（植物多物种预训练）
  - CNN+LSTM（传统卷积复合模型）
  - 各模型在相同输入长度与任务设置下进行对照（公平对比）。

### 3. 微调方法
- 使用 **LoRA（Low-Rank Adaptation）** 参数高效微调，仅更新 2% 左右参数；
- 分类任务采用二元交叉熵，回归任务采用均方误差；
- 对比：
  - 从头训练（Supervised PlantCAD2）
  - 冻结权重 + 线性层
  - LoRA 精调。

---

## 四、算力与训练资源

- **硬件**：64 张 NVIDIA H100 80GB PCIe GPU。  
- **训练时长**：
  - 最大模型（676M参数）约 **28 天**；
  - 最小模型约 **3 天**。
- **批大小与优化器**：
  - Batch size 2048，AdamW，余弦学习率调度（lr 2e-4 → 4e-6）。  

> 文中明确给出了 GPU 数量与时长，算力细节较为完备。

---

## 五、实验规模与充分性

- 实验涵盖：
  - 零样本评测（12项）；
  - 微调任务（7项）；
  - 消融与上下文长度实验（512bp→8192bp）；
  - 多物种跨验证（包括未参与预训练的 Solanaceae、tomato、rice）。
- 总体超过 **20+ 独立任务场景**，覆盖从进化建模到功能预测，实验数量充足。
- 对照基线全面，参数规模差异显著（几十M到七B），保证比较公平性。

---

## 六、主要结论与发现

1. **长上下文与植物特异性预训练显著提升保守性建模**：
   - 在 12 项零样本任务中 **10 项优于 7B 参数的 Evo2**。  
   - 特别在进化保守性和剪接位点预测上表现卓越。

2. **跨物种功能预测能力突出**：
   - 在 7 项微调任务中全面超过 AgroNT（1B 参数），  
     其中染色质可及性 AUPRC 提升平均 0.07~0.17。

3. **长窗口效应显著**：
   - 将上下文从 600bp 延伸至 4600bp，玉米染色质可及性预测从 0.587→0.711。

4. **高效与泛化性并存**：
   - 参数仅约 1/10 的通用模型，却在植物特定任务中表现更优；
   - 对未见谱系（如 Solanaceae）仍有良好迁移效果。

---

## 七、研究优点与创新亮点

- **生物学方向创新**：首个专为被子植物设计的长上下文 DNA 基础模型。  
- **技术创新**：
  - 使用 Mamba2 状态空间模型实现线性复杂度；
  - 双链反向互补等变性提高生物学一致性。  
- **数据策划合理**：按属选择代表物种，避免训练数据偏向特定谱系。  
- **效率与可扩展性**：在保持计算可行性的基础上实现 8kb 上下文。  
- **模型可应用性强**：支持零样本泛化与参数高效微调（LoRA），适用于植物非模式种基因组解析。

---

## 八、局限与不足

1. **上下文限制**：8kb 虽为现阶段长窗口，但仍难覆盖超远调控元件（如万级bp增强子）。  
2. **模型规模与使用门槛**：大型模型（>600M参数）对计算设备仍有较高要求。  
3. **数据偏差风险**：尽管平衡了谱系，但植物公共基因组仍偏重于禾本科和十字花科。  
4. **尚未解决的挑战**：
   - 等位基因特异性建模能力有限；
   - 跨层级的调控机制（如表观修饰）尚未纳入。  
5. **应用限制**：对于资源匮乏的实验室或育种机构，部署仍需计算与技术支持。

---

## 九、总体评价

- **PlantCAD2** 作为针对被子植物的 DNA 基础模型，在架构、数据选择和性能上均有突破。
- 实验证明其在进化和功能预测上超过目前最强的通用模型 Evo2 与 AgroNT，体现出“领域特异性 + 长上下文”在植物基因组学中的巨大潜力。
- 未来可望作为植物生物信息学和基因调控研究的基础平台进一步拓展到多模态和生成任务。

---

（完）
