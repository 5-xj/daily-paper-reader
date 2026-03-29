---
title: "MEIsensor: a deep-learning method for mobile element insertion discovery"
title_zh: MEIsensor：一种用于转座元件插入发现的深度学习方法
authors: "Wang, Y., Zhang, P., Wan, S., Zhang, Z., Sun, P., Xu, T., Jia, P., Ye, K., Yang, X."
date: 2026-03-27
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.25.714113v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 用于基因组移动元件插入发现的深度学习方法
tldr: 移动元件插入（MEI）是人类基因组结构变异的重要来源，但传统方法依赖重复序列库比对，在复杂区域检测效率和准确性有限。本文提出MEIsensor，一种基于深度学习的框架，可直接从长读长测序数据中识别和分类Alu、LINE1和SVA插入。实验证明其在检测精度和计算效率上均优于现有工具，并能发现高度重复区域中隐藏的MEI，为基因组演化研究提供了高效工具。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-25-714113-v1/fig-001.webp\", \"caption\": \"Fig. 3. MEIsensor identifies bona fide MEIs in complex genomic regions missed by 664 current benchmarks. a. Distribution of manually curated MEIs. The distribution of 665 LINE1, Alu, and SVA insertions among the putative false-positive events in HG00512. 666 Manual curation via IGV visualization and RepeatMasker annotation confirmed these 667 as bona fide MEIs that were absent from the original benchmark due to their complex 668 genomic contexts. b. Example of a bona fide LINE1 insertion. A genuine LINE1 669 insertion present in HG00512 but missing from the original benchmark dataset. The 670 insertion resides in a structurally complex and highly repetitive region, which likely 671 resulted in its prior exclusion. RepeatMasker annotations of this locus reveal two 672 fragmented LINE1 elements (2, 949 bp and 378 bp in length), further validating the 673 authenticity of the insertion event. c-e. Performance comparison of MEIsensor, xTea, 674 and TLDR on the HG00512 sample using the updated benchmark that incorporates the 675 34 manually curated events. Results are shown for LINE1 (c), Alu (d), and SVA (e) 676 insertions. 677\", \"page\": 22, \"index\": 1, \"width\": 943, \"height\": 497}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-25-714113-v1/fig-002.webp\", \"caption\": \"Fig. 4. MEIsensor enables profiling of mobile element insertions within 680 centromeric regions. a. Distribution of centromeric MEIs detected by MEIsensor 681 using CHM13 as the reference genome. The number of MEIs detected across different 682 centromere satellite classes (α-sat, β-sat, and HSAT) in G3 and G4 individuals from the 683 CEPH1463 pedigree. b. Example of a centromeric LINE1 insertion. An ~6.1 kb full-684 length LINE1 insertion identified by MEIsensor within the chromosome 3 centromeric 685 region of sample NA12885. IGV visualization and centromere annotations demonstrate 686 that the insertion resides deep within a higher-order repeat (HOR) array. c. A 687 comparison of HiCAT-annotated HOR structures between NA12885 and the CHM13 688 reference at the chromosome 3 centromeric region. The alignment reveals that the 689 LINE1 insertion occurs directly within the HOR array, disrupting a 17-mer HOR 690 structure. d. A dot plot comparison between the CHM13 reference (x-axis) and the 691 corresponding contig-level assembly of NA12885 (y-axis), providing orthogonal 692 validation of a full-length LINE1 insertion at this highly repetitive locus. 693\", \"page\": 23, \"index\": 2, \"width\": 943, \"height\": 746}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-25-714113-v1/fig-003.webp\", \"caption\": \"Fig. 2. Performance evaluation of MEIsensor. a-d. Average detection performance 640 of MEIsensor, xTea, TLDR, and MEHunter using HiFi long-read sequencing data from 641 the HG00512, HG00513, and HG00514 trio. Panels display results for all MEIs (a), as 642 well as specific Alu (b), LINE1 (c), and SVA (d) insertions. Each point represents the 643 overall precision and recall under a unified filtering scheme, with dashed curves 644 indicating iso-F1 contours. MEIsensor achieves a superior precision–recall balance for 645 all MEIs combined, as well as for Alu and SVA insertions. For LINE1 insertions, xTea 646 attains a slightly higher recall, whereas MEIsensor maintains higher precision. Note 647 that MEHunter does not natively report MEI type annotations, and TLDR annotates 648 only Alu insertions by default. e. Comparison of SVA insertions detected by MEIsensor 649 and xTea in the HG00512 sample. Venn diagrams illustrate the overlap for complex 650 (left) and simple (right) SVA insertions. The numbers indicate unique and shared events, 651 demonstrating that MEIsensor detects numerous SVA insertions missed by xTea, 652 particularly complex events. f. Dot plot visualization of a representative complex SVA 653 insertion detected by MEIsensor but missed by xTea. The complex internal structure of 654 the insertion highlights MEIsensor’s ability to resolve intact and structurally intricate 655\", \"page\": 20, \"index\": 3, \"width\": 943, \"height\": 802}]"
motivation: 传统MEI检测方法过度依赖重复序列库比对，导致在处理复杂结构和高度重复基因组区域时效率低下且准确性不足。
method: 开发了名为MEIsensor的深度学习框架，通过直接对长读长测序序列进行标注，实现对Alu、LINE1和SVA等插入的自动分类。
result: 在HGSVC基准测试中，MEIsensor在各类MEI检测上均优于现有工具，显著提升了计算效率，并成功识别出着丝粒等区域中此前未被发现的插入。
conclusion: MEIsensor为长读长测序数据的MEI分析提供了一个高效且精准的解决方案，有助于深化对人类基因组结构和进化的理解。
---

## 摘要
转座元件插入（MEIs）是人类基因组结构变异的重要来源，但其准确检测仍具挑战性，特别是在重复区域和结构复杂的插入中。虽然长读长测序能够直接恢复插入序列，但目前的分析流程严重依赖于重复序列库比对，这限制了计算效率和准确性。在此，我们提出了 MEIsensor，这是一个旨在直接从长读长测序数据中检测和分类 MEI 的深度学习框架。与传统方法不同，MEIsensor 对 Alu、LINE1 和 SVA 插入进行直接的、基于序列的注释。在使用 HiFi 长读长数据集针对 HGSVC 基准进行的评估中，MEIsensor 在主要 MEI 类别上的表现始终优于现有工具，同时显著提高了计算效率，在结构复杂的 SVA 插入方面表现尤为突出。此外，人工校核证实 MEIsensor 成功识别了隐藏在高度重复基因组区域（包括着丝粒高阶重复序列）中的 MEI，这些 MEI 此前在基准数据集中是缺失的。总之，这些进展使 MEIsensor 成为一个高效的 MEI 分析框架，有望显著推进我们对人类基因组结构和进化的理解。

## Abstract
Mobile element insertions (MEIs) are a critical source of structural variation in the human genome, yet their accurate detection remains challenging, particularly within repetitive regions and for structurally complex insertions. While long-read sequencing enables the direct recovery of inserted sequences, current analytical pipelines rely heavily on repeat-library alignment, which can limit both computational efficiency and accuracy. Here, we present MEIsensor, a deep learning framework designed to detect and classify MEIs directly from long-read sequencing data. Unlike conventional methodologies, MEIsensor performs direct, sequence-based annotation of Alu, LINE1, and SVA insertions. Evaluated against HGSVC benchmarks using HiFi long-read datasets, MEIsensor consistently outperformed existing tools across major MEI classes while substantially improving computational efficiency, demonstrating particularly pronounced gains for structurally complex SVA insertions. Furthermore, manual curation confirmed that MEIsensor successfully identifies MEIs hidden in highly repetitive genomic regions, including centromeric higher-order repeats, that were previously absent from benchmark datasets. Together, these advancements establish MEIsensor as an efficient framework for MEI analysis that promises to significantly advance our understanding of human genomic architecture and evolution.

---

## 论文详细总结（自动生成）

### MEIsensor：基于深度学习的移动元件插入发现方法论文总结

#### 1. 核心问题与整体含义
移动元件插入（Mobile Element Insertions, MEIs）如 Alu、LINE1 和 SVA，是人类基因组结构变异（SV）的重要组成部分，与基因调控、基因组稳定性和多种疾病密切相关。尽管长读长测序（LRS）技术提升了检测能力，但现有分析流程（如 xTea、TLDR）高度依赖于预定义的重复序列库比对（如 RepeatMasker）。这种方法在处理序列相似性高的元素、截断或重排的复杂插入以及高度重复区域（如着丝粒）时，存在计算效率低、分类模糊和漏检率高等问题。本文提出的 **MEIsensor** 旨在通过深度学习实现直接的、基于序列的 MEI 检测与分类，摆脱对重复序列库的依赖。

#### 2. 方法论
MEIsensor 采用了一个三阶段的分析框架：
*   **候选位点发现**：解析长读长比对（BAM文件），提取软切除（soft-clipped）信号、拆分比对（split alignments）和 CIGAR 字符串中的大片段插入操作。通过 100-bp 基因组窗口聚类和长度过滤，确定候选插入位置。
*   **序列预处理**：从支持读段中提取插入序列，统一填充（Padding）至 7kb 固定长度，并进行 One-hot 编码（A/C/G/T/N 转换为矩阵），作为模型输入。
*   **深度学习分类（核心）**：
    *   **架构**：采用轻量级的 **ResNet（残差网络）** 架构。包含一维卷积层、残差块（结合 Batch Normalization 和 ReLU）、自适应池化层（最大池化捕捉局部基序，平均池化整合全局上下文）。
    *   **输出**：通过 SoftMax 分类器输出四个类别的概率：Alu、LINE1、SVA 和 Non-MEI（非移动元件插入）。
    *   **基因型鉴定**：基于最大似然框架，结合观察到的变异读段和参考读段计数，对检测到的位点进行分型（0/0, 0/1, 1/1）。

#### 3. 实验设计
*   **数据集**：
    *   **训练/测试集**：来自 HGSVC v3 的 60 个样本（包含 8,781 个 Alu, 1,412 个 LINE1, 664 个 SVA 等）。
    *   **独立验证集**：HGSVC 的 HG00512 三人子代家系（Trio）数据。
    *   **家系分析**：CEPH1463 谱系的 15 个家系（用于孟德尔遗传一致性评估）。
*   **Benchmark（基准）**：以 HGSVC 官方发布的高置信度非参考 MEI 调用集为金标准。
*   **对比方法**：**xTea**（基于库比对）、**TLDR**（基于库比对）、**MEHunter**（基于 Transformer 的大模型方法）。

#### 4. 资源与算力
*   **硬件配置**：使用单张 **NVIDIA GeForce RTX 2080 Ti GPU** 和 4 个 CPU 核心。
*   **训练细节**：训练 40 个 epoch，batch size 为 64，使用 Adam 优化器，学习率为 0.000001。
*   **运行效率**：在 HG00512 数据集上，MEIsensor 的运行时间仅为 **1.1 小时**，显著优于 xTea（10.8 小时）、TLDR（6.2 小时）和 MEHunter（2.2 小时）。

#### 5. 实验数量与充分性
论文进行了多维度的实验：
*   **性能评估**：在三个独立样本上测试了 Precision、Recall 和 F1-score。
*   **复杂结构分析**：专门针对 SVA 插入（结构最复杂）进行了对比，证明了其在处理 VNTR 结构方面的优势。
*   **遗传一致性**：通过 15 个家系的孟德尔不一致率（Mendelian Inconsistency Rate）验证了基因型分型的准确性。
*   **区域扩展**：在着丝粒（Centromere）等极难区域进行了检测实验。
*   **手动校核**：对假阳性结果进行了 IGV 手动检查和 RepeatMasker 验证，证明了许多“假阳性”实际上是基准集漏掉的真阳性。
实验设计全面、客观，通过独立验证集和生物学遗传规律验证，确保了结果的公平性。

#### 6. 主要结论与发现
*   **性能领先**：MEIsensor 的平均 F1 分数约为 0.91，在 Alu 和 SVA 类别上显著优于现有工具。
*   **SVA 检测突破**：在结构复杂的 SVA 插入检测中表现优异，能够识别出 xTea 漏掉的具有复杂内部 VNTR 结构的完整逆转录转座事件。
*   **发现新位点**：成功识别了 34 个此前被基准集忽略的真 MEI，这些位点多处于高度重复区域。
*   **着丝粒应用**：证明了 MEIsensor 能够解析着丝粒高阶重复（HOR）阵列中的 LINE1 插入及其对基因组结构的破坏。
*   **高可靠性**：孟德尔不一致率显著低于 MEHunter（0.07 vs 0.26）。

#### 7. 优点
*   **Library-free（无库化）**：直接学习序列特征，避免了传统方法中因库比对歧义导致的分类错误。
*   **计算高效**：轻量级 ResNet 架构在保证精度的同时，大幅降低了算力需求和运行时间。
*   **鲁棒性强**：对截断、重排及位于高度重复区域（如着丝粒、α-卫星序列）的 MEI 具有极高的敏感度。
*   **端到端**：集成了候选位点发现、分类和分型，流程完整。

#### 8. 不足与局限
*   **复杂架构建模**：目前主要关注单位点插入，对于多断点或复杂的嵌套插入（Nested insertions）尚未进行显式建模。
*   **比对依赖**：虽然分类不依赖库，但候选位点的发现仍依赖于初始的读段比对质量，在极度复杂的区域可能受限于比对软件（如 minimap2）的表现。
*   **元素覆盖**：目前仅针对 Alu、LINE1 和 SVA 三种主要活跃元件，对于其他低频或非活跃移动元件的覆盖有限。

（完）
