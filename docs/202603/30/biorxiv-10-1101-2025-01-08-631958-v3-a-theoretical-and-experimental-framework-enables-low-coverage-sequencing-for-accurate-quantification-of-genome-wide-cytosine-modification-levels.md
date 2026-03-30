---
title: A theoretical and experimental framework enables low-coverage sequencing for accurate quantification of genome-wide cytosine modification levels
title_zh: 一个理论与实验框架实现了利用低覆盖度测序准确量化全基因组胞嘧啶修饰水平
authors: "Loo, C. E., Fowler, J. M., Zhu, H., Krapp, C., Zhu, R., Bartolomei, M., Zhou, W., Kohli, R. M."
date: 2026-03-23
pdf: "https://www.biorxiv.org/content/10.1101/2025.01.08.631958v3.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 全基因组胞嘧啶修饰水平量化框架
tldr: "本研究针对大规模队列研究中5mC和5hmC定量成本高、效率低的问题，提出了Sparse-Seq低深度测序框架。通过建立测序深度、修饰水平与测量误差之间的理论模型，证明了极低覆盖度（<0.24%）即可实现高精度定量。Sparse-Seq在准确性上优于质谱法，且能保留基因组背景，为表观遗传景观的经济型初步分析提供了新工具。"
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-01-08-631958-v3/fig-001.webp\", \"caption\": \"Figure 2. Computational downsampling confirms the theoretical viability of Sparse-Seq for cytosine modification measurement. A) Data from whole-genome sequencing in various murine cell types with either BS-Seq or TAB-Seq were randomly downsampled to various levels of sparse genomic coverage. Box plots represent the cytosine modification levels determined across 100 replicates at each sparse coverage level for each whole-genome dataset. Dashed lines mark the cytosine modification levels from the complete, deeply sequenced whole-genome dataset. Analogous analyses of whole-genome data sets obtained by enzymatic methods are shown in Figures S1 and S2. B) Shown is the calculated total analytical error (TAE) at each level of downsampling from the whole-genome datasets. The TAE gives the error in measurement of the true mean relative to the measured value for a single measurement at a given level of downsampling C) For 18 total whole-genome data sets (5 BS-Seq, 5 TAB-Seq, 4 ACE-Seq, and 4 EM-Seq), the genomic coverage in downsampling, the percent modification, and the associated TAE were taken as a base data set. LOESS regression was performed, and the regression model was then used to interpolate the TAE for genome coverage input ranging from 0.001% to 1% and total cytosine modification from 0% to 5%. The resulting model can be accessed in our TAE calculator tool at: https://zhou-lab.github.io/TAE_calculator/.\", \"page\": 26, \"index\": 1, \"width\": 974, \"height\": 901}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-01-08-631958-v3/fig-002.webp\", \"caption\": \"Figure 1. Methods for detecting cytosine modifications. Structures of the nucleobase cytosine and its two most common mammalian genomic variants, 5-methylcytosine and 5- hydroxymethylcytosine (left). Common methods for quantifying cytosine modifications in the genome and their potential strengths and limitations are noted (right).\", \"page\": 25, \"index\": 2, \"width\": 979, \"height\": 185}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-01-08-631958-v3/fig-003.webp\", \"caption\": \"Figure 3. The accuracy, precision, and generalizability of Sparse-Seq is confirmed with comparison to LC-MS/MS. A) Workflow for experimental validation of Sparse-Seq using BSSeq, bACE-Seq, and EM-Seq pipelines via comparison to LC-MS/MS using murine cortex gDNA. Abbreviations: CMS, cytosine 5-methylenesulfonate; C*, modified cytosine protected from enzymatic deamination. B) Biological variance comparison of 5mC and 5hmC quantification using LC-MS/MS (left) and BS/bACE-Seq (right). Each of the three biological replicates is shown (points), with bars representing the average of measurements and standard deviations listed above the bars. C) Technical variance comparison of LC-MS/MS and Sparse-Seq. Data are from three technical replicates from a single sample from (B) at either P0 and 20 weeks using LCMS/MS, BS-Seq, or EM-Seq at either of two sample inputs (200 ng or 20 ng), with mean and standard deviation provided for each set of technical replicates. A one-way ANOVA with Tukey’s range test, n=3; significant differences between groups are denoted using different letters, while groups with no significant differences share the same letter.\", \"page\": 27, \"index\": 3, \"width\": 979, \"height\": 577}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-01-08-631958-v3/fig-004.webp\", \"caption\": \"Figure 4. Sparse-Seq reveals 5mCpH and 5hmCpG dynamics during murine development. A) The developing mouse brain is known to accumulate 5mC in non-CpG (CpH) contexts and 5hmC in CpG contexts. Three biological replicates of brain specimens (whole brain for fetal and P0 stages and isolated cortex thereafter) taken every two weeks from E16 through 10 weeks were analyzed by Sparse BS/bACE-Seq and quantified for the level of modifications in each context. B) Levels (%) of 5mCpH and 5hmCpG in the developing mouse brain detected by Sparse BS/bACE-Seq. Data from the replicates at each time point are shown as the mean, with standard deviation provided by error bars. Error bars are not shown if they are smaller than the symbol representing the mean value. At the bottom is a heat map depicting the relationship between 5hmCpG and 5mCpG from minimal to maximal values over time. C) Shown are ternary plots representing the level of C, 5mC, and 5hmC measured for the whole genome or specific genomic elements. Each data point represents the measurement from a single biological replicate, with different time points represented by different colors.\", \"page\": 28, \"index\": 4, \"width\": 979, \"height\": 463}]"
motivation: 现有的高深度测序和质谱法在进行大规模样本的胞嘧啶修饰定量时，面临成本高、通量低或准确性不足的挑战。
method: 开发了Sparse-Seq框架，通过对深度测序数据进行下采样分析，建立了测序覆盖度与测量误差之间的数学关系，并提供了在线误差计算工具。
result: "实验证明仅需小于0.24%的基因组覆盖度即可将5mC和5hmC的测量误差控制在5%以内，且在小鼠脑发育研究中发现了新的表观遗传动态特征。"
conclusion: Sparse-Seq是一种高可及性、低成本且精确的表观遗传定量方法，特别适用于大规模队列研究和初步假设生成。
---

## 摘要
5-甲基胞嘧啶 (5mC) 和 5-羟甲基胞嘧啶 (5hmC) 调节基因表达，并在发育和疾病过程中表现出动态水平。虽然高深度、碱基分辨率的研究提供了表观遗传图谱最详尽的视图，但许多科学问题可以通过调查大规模队列中 5mC/5hmC 水平的变化来解答。然而，目前的全局量化方法（包括质谱法）通常在可及性、准确性或通量方面存在局限。本研究为了评估低覆盖度测序作为替代方案的可行性，首先通过对深度测序数据进行计算下采样，解析了测序覆盖度、修饰水平与测量误差之间的三方关系。基于此关系，我们开发了一个简便的在线误差计算工具并确定了实验目标：小于 0.24% 的基因组覆盖度即可量化 5mC 和低丰度的 5hmC，且误差极小且可预测（<5%）。重要的是，在直接对比中，低深度测序 (Sparse-Seq) 展现出比质谱法更高的准确性和更低的变异性，同时独特地保留了基因组背景信息。通过对发育中的小鼠大脑进行序列化应用，Sparse-Seq 揭示了 5hmCpG 较 5mCpH 更早出现，并发现了此前被忽视的、具有基因组特征特异性的表观遗传变化。这项工作为将 Sparse-Seq 作为一种高度可及的 5mC/5hmC 量化方法奠定了严谨的理论基础，实现了适用于大队列研究和新假设生成的经济型表观遗传图谱初步分析。

## Abstract
5-methylcytosine (5mC) and 5-hydroxymethylcytosine (5hmC) regulate gene expression and exhibit dynamic levels during development and disease. While high-depth, base-resolution studies offer the most detailed view of epigenetic landscapes, many open questions are answered by surveying changes in 5mC/5hmC levels across larger cohorts. Nonetheless, current global quantification methods, including mass spectrometry, are typically limited in accessibility, accuracy, or throughput. Here, to evaluate the viability of low-coverage sequencing as an alternative, we first computationally downsampled deeply sequenced data to resolve the three-way relationship between sequencing coverage, modification levels, and measurement error. This relationship allowed us to develop a facile online tool for error calculation and to define experimental targets: <0.24% genome coverage can quantify 5mC and low-abundance 5hmC with minimal and predictable errors (<5%). Importantly, in direct comparisons, low-depth sequencing (Sparse-Seq) demonstrated high accuracy and less variability than mass spectrometry, while distinctively preserving genomic context. Applied serially to developing mouse brains, Sparse-Seq revealed an earlier emergence of 5hmCpG compared to 5mCpH and uncovered previously overlooked, genomic feature-specific epigenetic changes. This work establishes a rigorous foundation for employing Sparse-Seq as a highly accessible approach for 5mC/5hmC quantification, enabling economical first-pass analysis of epigenetic landscapes suited for large cohort studies and new hypothesis generation.

---

## 论文详细总结（自动生成）

### 论文结构化总结：Sparse-Seq 框架下的全基因组胞嘧啶修饰定量研究

#### 1. 核心问题与整体含义（研究动机和背景）
胞嘧啶修饰（如 5mC 和 5hmC）是关键的表观遗传标记，调节基因表达并参与发育与疾病过程。目前，获取这些修饰全局水平的主流方法存在显著局限：
*   **高深度全基因组测序（WGBS）**：虽然分辨率高，但成本极其昂贵，难以应用于大规模临床队列。
*   **液相色谱-串联质谱（LC-MS/MS）**：被视为“金标准”，但需要大量 DNA 输入（>500ng），且由于需将 DNA 降解为单核苷酸，会**彻底丢失基因组位置和序列上下文信息**（如 CpG 与非 CpG 背景）。
*   **研究动机**：探索低覆盖度测序（Sparse-Seq）是否能在保证精度的前提下，作为一种经济、高效且保留基因组背景的替代方案。

#### 2. 论文提出的方法论
核心思想是建立**测序深度、修饰丰度与测量误差**之间的定量关系模型。
*   **Sparse-Seq 框架**：通过极低深度的测序（目标覆盖度 <0.24%，约 4.5万条比对序列）来估算全局修饰水平。
*   **TAE（总分析误差）模型**：利用 LOESS 回归分析 18 个深度测序数据集的下采样结果，定义了 `TAE = 偏倚(Bias) + 1.96 × 变异系数(CV)`。
*   **关键技术细节**：
    *   **bACE-Seq 流程**：结合亚硫酸氢盐处理（BS）与 APOBEC3A 酶脱氨，通过对比 BS-Seq（显示 5mC+5hmC）和 bACE-Seq（仅显示 5hmC）来分离两种修饰。
    *   **在线工具**：开发了 [TAE 计算器](https://zhou-lab.github.io/TAE_calculator/)，允许用户输入读长、读数和观察到的修饰比例，自动输出带有置信区间的定量结果。
    *   **基因组特征分析**：利用 ChromHMM 注释，将稀疏读段映射到特定基因组元件（如增强子、启动子），实现元件特异性的修饰定量。

#### 3. 实验设计
*   **数据集**：使用了 18 个公开的高深度数据集（包括 BS-seq, TAB-seq, ACE-seq, EM-seq），涵盖小鼠胚胎干细胞（ESC）、小鼠大脑及人类细胞系。
*   **Benchmark（基准）**：以 **LC-MS/MS（质谱法）** 作为主要的实验对照基准。
*   **对比场景**：
    *   **技术对比**：对比了 Sparse-Seq（基于 BS/bACE 流程）与 LC-MS/MS 在同一批小鼠皮层样本中的表现。
    *   **流程通用性**：对比了化学法（BS-Seq）与全酶法（EM-Seq）在低深度下的表现。
    *   **生物学应用**：追踪小鼠大脑从胚胎期（E16）到成年期（10周）的表观遗传动态。

#### 4. 资源与算力
*   **计算资源**：论文使用了标准的生物信息学工具（Picard, Bismark, Trim Galore!, BEDtools, R 语言等）。
*   **算力说明**：**文中未明确提及 GPU 型号或具体的训练时长**。由于该研究主要涉及统计学下采样分析和常规的序列比对，而非深度学习模型训练，因此对高性能 GPU 算力的需求较低，主要依赖 CPU 集群进行并行化比对和数据处理。

#### 5. 实验数量与充分性
*   **实验规模**：
    *   **计算模拟**：对 18 个全基因组数据集进行了 100 次独立的随机下采样模拟，以验证理论模型的稳健性。
    *   **生物学重复**：所有实验均包含至少 3 个独立的生物学重复（n=3）。
    *   **时间序列**：小鼠发育实验涵盖了 8 个连续的时间点。
*   **充分性评价**：实验设计非常充分且客观。作者不仅在理论上通过大规模模拟证明了可行性，还通过跨平台（质谱 vs 测序）和跨流程（化学 vs 酶法）的交叉验证，确保了结论的可靠性。

#### 6. 主要结论与发现
*   **精度达标**：仅需 **0.24% 的基因组覆盖度**，即可将 5mC 和低丰度 5hmC 的测量误差控制在 **5% 以内**。
*   **优于质谱**：在直接对比中，Sparse-Seq 的技术变异性比 LC-MS/MS 低 2 到 6 倍，且与不同测序流程（BS-Seq, EM-Seq）高度一致。
*   **生物学新见解**：
    *   发现 5hmCpG 在产前（E16）已开始积累，而非 CpG 甲基化（5mCpH）主要在出生后迅速增加。
    *   揭示了不同基因组元件（如增强子与多梳抑制区）在发育过程中具有截然相反的修饰动态，这是质谱法无法观察到的。

#### 7. 优点
*   **经济性与可及性**：极大地降低了表观遗传组学研究的门槛，使大规模样本的初步筛选变得可行。
*   **信息完整性**：在极低深度下依然保留了序列上下文（CpG/CpH）和基因组定位信息。
*   **工具化**：提供了易用的在线 TAE 计算器，使研究者能根据所需精度自主设计实验深度。
*   **无缝衔接**：Sparse-Seq 的文库制备与深度测序完全一致，发现感兴趣样本后可直接追加测序深度。

#### 8. 不足与局限
*   **稀有修饰限制**：该方法不适用于定量极低丰度的修饰（如 5fC 或 5caC，其比例通常低于 1/10^5）。
*   **转化效率依赖**：结果高度依赖于亚硫酸氢盐或酶促转化的完全性，转化不全会直接引入系统误差。
*   **元件分辨率**：对于占比极小的基因组元件（如特定的小型增强子），仍需要相对较高的深度才能维持较低的 TAE。
*   **偏倚风险**：虽然全局水平准确，但在极低深度下，重复序列或高度压缩染色质区域的比对偏倚可能影响局部估算。

（完）
