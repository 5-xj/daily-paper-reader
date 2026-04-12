---
title: "From nucleotides to semantics: genomic representation learning via joint-embedding predictive architecture"
title_zh: 从核苷酸到语义：通过联合嵌入预测架构的基因组表示学习
authors: "Wang, C., Qi, Q., Sun, H., Zhuang, Z., He, B., Liu, S., Liao, J., Wang, J."
date: 2026-04-06
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.02.716255v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 基因组表示学习与解码调控语法
tldr: 本研究针对现有基因组模型在表示学习和计算效率上的不足，提出GenoJEPA框架，将优化目标转向潜空间的语义对齐，通过连续片段化提升特征表达与泛化能力，在55项任务中展现出高效的表示性能及GPU-free分类能力，为构建更实用的基因组基础模型提供新方案。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-716255-v1/fig-001.webp\", \"caption\": \"Fig. 3 GenoJEPA achieves competitive performance with end-to-end finetuning. Each task is evaluated through 10-fold cross-validation, and the mean test score is used as the representative result. (a) shows the overall performance of GenoJEPA and the baselines across all benchmarks. The average performance across 55 tasks from three benchmarks is reported from these mean scores. (b) and (c) show the critical difference diagrams for finetuning and probing performance across all benchmarks. Statistical significance is summarized with the Friedman test at p = 0.05 followed by the Nemenyi post-hoc test at p = 0.05 on the task-level representative scores. The average rank and significance are reported from these mean scores. Black horizontal lines indicate no significant difference between methods. (d), (e), and (f) show finetuning performance for each task within the three benchmarks. Blue circles denote the mean score for each task, and red diamonds denote the average performance across all tasks within each benchmark.\", \"page\": 7, \"index\": 1, \"width\": 813, \"height\": 570}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-716255-v1/fig-002.webp\", \"caption\": \"Fig. 5 GenoJEPA exhibits strong few-shot capabilities and feature versatility. Each task is evaluated through 10-fold cross-validation, and the mean test score is used as the representative result. (a) shows probing performance for GenoJEPA and the baselines at different training-data scales across all benchmarks. Within each fold, the training and validation sets are stratified at proportions from 10% to 50% for each label while the test set is kept unchanged. Logistic regression with average pooling is used to assess the data efficiency of each method. The average performance across 55 tasks from three benchmarks is reported from these mean scores. (b) and (c) show probing performance under different pooling strategies and classifiers across all benchmarks. The boxplots summarize the distribution of representative scores across 55 tasks from all benchmarks. The center line denotes the median. The box limits denote the first and third quartiles. The whiskers denote the full data range.\", \"page\": 10, \"index\": 2, \"width\": 812, \"height\": 428}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-716255-v1/fig-003.webp\", \"caption\": \"Fig. 4 GenoJEPA demonstrates favourable computational and memory efficiency. (a), (c), (e), and (g) report training time in ms, training memory in MB, inference time in ms, and inference memory in MB, respectively, for GenoJEPA and baselines with fewer than 10M parameters across different sequence lengths. (b), (d), (f), and (h) report the same metrics for GenoJEPA and baselines with more than 50M parameters. Experiments are conducted with a batch size of 1 on an A800 80 GB GPU. Each experiment is repeated for 10 epochs, and mean values are reported. In each epoch, the first 10 steps are excluded to remove cold-start effects. Average metrics are then computed over the next 100 steps. Both axes are shown on a logarithmic scale. Vertical dashed lines indicate sequence lengths that exceed model support or require memory beyond GPU capacity.\", \"page\": 8, \"index\": 3, \"width\": 815, \"height\": 574}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-716255-v1/fig-004.webp\", \"caption\": \"Fig. 1 GenoJEPA learns genomic representations via joint-embedding prediction. (a) shows the pretraining framework. The input DNA sequence is split into non-overlapping patches, linearly projected into dense embeddings, and processed by a Transformer encoder. Token embeddings are then averaged to obtain a sequence representation. Following the LeJEPA formulation, the sequence is augmented into multiple local and global views through random cropping. GenoJEPA is optimized with an invariance loss that aligns semantic features across views together with a SIGReg loss that prevents representation collapse. (b) shows the downstream adaptation strategies for genomic tasks such as functional element identification. In resourcelimited settings, the pretrained encoder is frozen and the resulting sequence embeddings are passed to a lightweight task head for probing. In accuracy-sensitive settings, the entire GenoJEPA model is finetuned end to end together with a task head.\", \"page\": 4, \"index\": 4, \"width\": 815, \"height\": 469}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-716255-v1/fig-005.webp\", \"caption\": \"Fig. 2 GenoJEPA maintains highly discriminative features under probing evaluation. Each task is evaluated through 10-fold cross-validation, and the mean test score is used as the representative result. (a) shows the probing win-loss comparison between GenoJEPA and the baselines across all benchmarks. A paired Wilcoxon signed-rank test at p = 0.05 is applied to the fold-wise test scores as a stability-aware paired comparison. The number of wins, ties, and losses is reported across 55 tasks from three benchmarks. (b) shows probing performance for each benchmark. The average and median performance across all tasks within each benchmark are reported from the representative scores. (c) shows task-level probing performance. On the horizontal axis, blue labels denote the Genomic Benchmarks, red labels denote the GUE Benchmarks, and green labels denote the Nucleotide Transformer Tasks.\", \"page\": 5, \"index\": 5, \"width\": 815, \"height\": 645}]"
motivation: 当前基因组模型受限于DNA序列缺乏语义边界及进化噪声，导致表示能力有限且需昂贵微调。
method: 提出GenoJEPA框架，结合连续片段化与语义对齐，通过潜空间语义预测替代碱基级重建。
result: GenoJEPA在55个下游任务中表现优异，降低了参数与算力需求，实现了在冻结状态下的高效分类性能。
conclusion: 该研究表明，GenoJEPA为构建高效、可广泛应用的基因组基础模型提供了新的可行路径。
---

## 摘要
解码基因组序列中蕴含的调控语法是计算生物学的核心目标。现有的大多数基因组基础模型将 DNA 视为一种语言，并采用来自自然语言处理的预训练目标。然而，DNA 序列缺乏明确的语义边界，并包含大量的进化噪声。因此，在低维输入空间中进行核苷酸级别的重建可能增加计算负担，并可能产生区分能力有限的表示。下游任务通常依赖于昂贵的微调，这限制了在许多生物实验室的实际使用。本文提出 GenoJEPA，一种基于联合嵌入预测架构的基因组表示学习框架。GenoJEPA 将连续分块与语义对齐相结合，将优化目标从局部碱基重建转向潜在空间中的语义对齐。跨越 55 个下游任务，GenoJEPA 显示出强大的表示能力和稳健的泛化性能，同时减少了参数数量和计算成本。由冻结的 GenoJEPA 生成的语义向量支持轻量级的无 GPU 分类器以实现具有竞争力的准确率。这些结果表明了一条实现高效训练并广泛应用大型基因组基础模型的可行路径。

## Abstract
Decoding the regulatory syntax encoded in genomic sequences is a central objective in computational biology. Most existing genomic foundation models treat DNA as a language and adopt pretraining objectives from natural language processing. DNA sequences, however, lack explicit semantic boundaries and contain substantial evolutionary noise. Nucleotide-level reconstruction in a low-dimensional input space can therefore increase computational overhead and may yield representations with limited discriminative capacity. Downstream tasks often depend on expensive finetuning, which restricts practical use in many biology laboratories. Here we present GenoJEPA, a genomic representation learning framework based on joint-embedding predictive architecture. GenoJEPA combines continuous patching with semantic alignment, shifting the optimization from local base reconstruction to semantic alignment in latent space. Across 55 downstream tasks, GenoJEPA shows strong representational capacity and robust generalization while reducing parameter count and computational cost. The resulting semantic vectors from frozen GenoJEPA support lightweight GPU-free classifiers to achieve competitive accuracy. These results suggest a practical route towards efficient training and broad application of larger-scale genomic foundation models.

---

## 论文详细总结（自动生成）

# 从核苷酸到语义：通过联合嵌入预测架构的基因组表示学习 — 论文结构化总结

---

## 一、研究问题与背景

- **核心问题**：传统的基因组基础模型通常将 DNA 序列视为“生物语言”，采用来自自然语言处理（NLP）的预训练目标，如掩码语言建模（MLM）或下一个碱基预测（NTP）。然而，DNA 与人类语言在结构上存在根本差异：
  - DNA 缺乏明确的语义边界；
  - 含有大量自然进化噪声；
  - 低信噪比导致局部重建目标难以捕捉功能规律。
- **研究动机**：现有基因组模型在表示学习上过度强调碱基级重建，造成训练成本高、模型泛化性弱、下游任务需大规模微调。该研究希望构建一种“语义层面理解基因组”的新框架，使模型在冻结状态下即可产生高质量特征，有助于低算力实验室的使用。

---

## 二、方法论：GenoJEPA 框架

### 核心思想
- 将基因组建模从**碱基级重建**转向**潜空间语义对齐**。
- 借鉴“联合嵌入预测架构”（Joint-Embedding Predictive Architecture, JEPA），打造**无生成重建的自监督学习体系**。

### 关键技术与算法结构

1. **连续片段化（Continuous Patching）**：
   - 将输入 DNA 序列分割为非重叠的片段（如 16 bp 一片）。
   - 每片经线性投影映射到连续向量空间，避免传统 k-mer 或 BPE 编码的离散膨胀问题。

2. **Transformer 编码器（ModernBERT 骨干）**：
   - 使用改良版 BERT（ModernBERT）架构，包括 Rotary Position Embedding（RoPE）和预归一化机制；
   - 支持长序列输入与稳定梯度传播。

3. **多视图对齐（Multi-view Alignment）**：
   - 对同一 DNA 序列生成多个“视图”（global 与 local），通过随机裁剪实现不同尺度上下文；
   - 优化目标是让各视图在潜空间中语义对齐，而非在输入空间中重建碱基。

4. **语义对齐损失 + 高斯正则化损失**：
   - **Invariance Loss**：最小化不同视图之间的潜空间均方误差，使其收敛于全局语义中心；
   - **SIGReg (Sketched Isotropic Gaussian Regularization)**：约束表征接近各向同性高斯分布，避免特征塌陷；
   - 总损失：  
     \[
     L_{total} = (1 - \alpha)L_{Invariance} + \alpha L_{SIGReg}
     \]
     其中 α = 0.05。

5. **预训练目标与流程**：
   - 将 DNA 片段经连续嵌入、Transformer 编码、平均池化、非线性投影至潜空间；
   - 通过上述联合损失进行优化以学习稳定而具有生物语义的表征。

---

## 三、实验设计

### 数据集与场景
- **预训练数据**：来自 Nucleotide Transformer 的 850 个物种基因组（约 1930 亿碱基），涵盖细菌、真菌、脊椎动物与无脊椎动物等多类。
- **下游任务**：55 个任务，分属三个基准：
  1. **Genomic Benchmarks** — 9 个任务，如增强子、启动子、跨物种分类；
  2. **GUE Benchmarks** — 28 个任务，涉及转录因子结合、表观修饰多类别预测；
  3. **Nucleotide Transformer Tasks** — 18 个任务，集中于人类染色质状态与 RNA 剪接检测。
  
### 对比方法
- 五个代表性基因组模型：
  - **HyenaDNA (7M)**：Hyena 算子；
  - **CaduceusPh (8M)**：Mamba 状态空间模型；
  - **GROVER (87M)**：BPE + MLM；
  - **DNABERT-2 (117M)**：多物种 BERT；
  - **NT-v2 (494M)**：多物种 Transformer + 6-mer。
  
### 评价指标与协议
- 使用 **Matthews Correlation Coefficient (MCC)** 衡量各任务准确性；
- **10 折交叉验证**；
- 性能统计包括平均分、Wilcoxon 检验（稳定性）、Friedman + Nemenyi 排名检验（显著性分析）。

---

## 四、资源与算力配置

- **模型规模**：
  - GenoJEPA-T（轻量版）：6M 参数；
  - GenoJEPA-B（基础版）：52M 参数。
- **训练设备与时间**：
  - GenoJEPA-T：单 RTX 3090（24GB），批量 256，100,000 步，约 **12 小时**；
  - GenoJEPA-B：单 A800（80GB），批量 256，500,000 步，约 **150 小时**。
- **结论**：预训练计算负担明显低于同规模 Transformer 模型，实现“单卡即可训练”的实际可用性。

---

## 五、实验充分性与客观性

- **实验覆盖**：
  - 三大 benchmark 共 55 项任务；
  - 对比五种主流模型。
- **消融实验**：
  - 论文附带 23 项架构与超参数敏感性分析：包括 patch 大小、SIGReg 权重、嵌入维度、数据增强策略等；
  - 每项参数均用多基准验证，结果较全面。
- **公平性**：
  - 所有对比模型均使用官方预训练参数；
  - 评估协议统一（冻结探针、微调、few-shot、效率分析）。
- **实验充分性结论**：实验数量丰富、评价维度全面、对照公平，支撑结论可信。

---

## 六、主要结论与发现

1. **表示能力**：GenoJEPA 在冻结状态下即可生成高判别性的表示，在 55 项任务中整体优于所有基线模型（最高 MCC）。
2. **微调性能**：GenoJEPA-B 微调后性能仍强于 NT-v2（参数少 10 倍但平均提升约 2.9%）。
3. **计算效率**：训练和推理阶段显著降低内存与运行时间，超越 HyenaDNA 与 CaduceusPh 的理论复杂度。
4. **数据效率**：在仅 10% 训练样本下，性能接近完整训练下的最佳水平，展现强 few-shot 能力。
5. **特征普适性**：潜空间特征支持线性逻辑回归分类器，无需 GPU，也能达到高准确度。

---

## 七、优点与创新点

- **理论创新**：将 JEPA/LeJEPA 融入基因组，首次将“语义对齐”用于 DNA 表征学习；
- **算法创新**：
  - 提出连续片段输入方法；
  - 引入 SIGReg 理论正则避免表示塌陷；
  - 全程无生成、无动量教师；
- **实用性突出**：
  - 支持冻结推理与轻量级分类；
  - 对资源受限的实验室极具可行性；
- **系统性实验**：
  - 覆盖效率、few-shot、finetuning、任务分布等多维度验证；
  - 模型展示出良好的扩展性与稳定性。

---

## 八、不足与局限

- **序列长度限制**：
  - 预训练最大仅 4,096 bp，无法处理更长的基因调控区域如 TAD 边界。
- **模型规模较小**：
  - 最大版仅 52M 参数，尚未探索大规模扩展的表现和潜在 scaling law。
- **部分任务表现不均**：
  - 在人类特定调控任务（如 H4ac）上仍低于部分专门架构。
- **理论与生物学解释性**：
  - 虽有潜空间语义对齐的抽象机制，但尚未明确连接至可解释的生物调控语义。
- **数据偏差风险**：
  - 大量多物种数据可能引入物种特异性偏差，虽总体平衡但未细化物种权重。

---

**（完）**
