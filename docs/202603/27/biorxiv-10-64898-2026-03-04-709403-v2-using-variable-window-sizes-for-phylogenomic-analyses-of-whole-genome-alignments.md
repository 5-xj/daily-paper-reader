---
title: Using Variable Window Sizes for Phylogenomic Analyses of Whole Genome Alignments
title_zh: 在全基因组比对的系统发育基因组学分析中使用可变窗口大小
authors: "Ivan, J., Lanfear, R."
date: 2026-03-19
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.04.709403v2.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 全基因组比对的系统发育基因组分析
tldr: 针对系统发育基因组学中固定窗口大小无法反映染色体不同区域重组率差异的问题，本研究提出了一种基于信息论的“拆分与合并”策略，实现了全基因组比对中的可变窗口划分。该方法在模拟数据中表现优于固定窗口法，并在蝴蝶和大猿基因组分析中验证了其有效性，为处理基因树不一致性提供了更精确的工具。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-04-709403-v2/fig-001.webp\", \"caption\": \"Figure 1. Overview of the splitting-and-merging approach proposed in this study. The 117 splitting step is iteratively applied to every window in the alignment – selecting split 118 configuration with the best AIC score for each window – until no further improvement can be 119 achieved from any new split. The merging step is then iteratively applied to every possible 120 pair of neighbouring windows in the alignment, prioritising merges with the biggest AIC 121 improvement for each iteration until no further improvement can be achieved from any new 122 merge. 123\", \"page\": 6, \"index\": 1, \"width\": 1018, \"height\": 952}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-04-709403-v2/fig-002.webp\", \"caption\": \"Figure 3. Site accuracy from running the non-overlapping window analyses with fixed and 322 variable window sizes across 7 simulation scenarios (Fig. 2). Colour denotes the set of 323 window sizes used when running the non-overlapping window method, either using a fixed 324 window size (Ivan et al. 2025) or the splitting-and-merging approach with different starting 325 window sizes. Black lines connect the same replicates. 326 327\", \"page\": 15, \"index\": 2, \"width\": 1016, \"height\": 519}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-04-709403-v2/fig-003.webp\", \"caption\": \"Figure 6. Comparison of unrooted tree topology frequency from the genomes of great apes 415 using different approaches: single gene tree inference and MAST (Wong et al. 2024), the 416 stepwise non-overlapping windows (NOW) that includes all gene trees and only highly-417 supported trees (Ivan et al. 2025), and the splitting-and-merging approach from this study. 418 For splitting-and-merging approach, the percentages reflect the proportions of sites that 419 support each topology, while the numbers in bracket reflect the proportions of windows that 420 support each topology. The number under each method reflects the total number of windows. 421 Topologies are visualised using FigTree v1.4.4 (http://tree.bio.ed.ac.uk/software/figtree) 422 without branch lengths. 423\", \"page\": 21, \"index\": 3, \"width\": 1016, \"height\": 531}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-04-709403-v2/fig-004.webp\", \"caption\": \"Figure 7. Inversion topologies on (a) chromosome 2 and (b) chromosome 15 of erato-sara 447 clade of Heliconius butterflies (Edelman et al. 2019). Colouring is based on Fig. S8. 448\", \"page\": 22, \"index\": 4, \"width\": 1016, \"height\": 194}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-04-709403-v2/fig-005.webp\", \"caption\": \"Figure 5. Comparison of topology frequency of the most common tree topologies from the 382 genomes of erato-sara clade of Heliconius between 50kb sliding windows (SW) and 10kb non-383 overlapping windows (NOW) from Edelman et al. (2019), stepwise NOW from Ivan et al. 384 (2025), and the splitting-and-merging approach from this study. For splitting-and-merging 385 approach, the percentages reflect the proportions of sites that support each topology, while the 386 numbers in bracket reflect the proportions of windows that support each topology. Topologies 387\", \"page\": 19, \"index\": 5, \"width\": 1018, \"height\": 1075}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-04-709403-v2/fig-006.webp\", \"caption\": \"Figure 2. Scenarios for simulating chromosome alignments. Simulated chromosomes with 175 homogenous recombination rates were derived from Ivan et al. (2025), while ones with 176 heterogeneous recombination rates were generated in this study. Gray: zero recombination 177 rate; green: low recombination rate; blue: intermediate recombination rate; red: high 178 recombination rate. 179\", \"page\": 9, \"index\": 6, \"width\": 1018, \"height\": 431}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-04-709403-v2/fig-007.webp\", \"caption\": \"Figure 4. RMSE from running the non-overlapping window analyses with fixed and variable 329 window sizes across 7 simulation scenarios (Fig. 2). Colour denotes the set of window sizes 330 used when running the non-overlapping window method, either using a fixed window size 331 (Ivan et al. 2025) or the splitting-and-merging approach with different starting window sizes. 332 Black lines connect the same replicates. 333 334 Full concatenation is preferable as starting window size for splitting-and-merging 335 approach 336 In general, our simulations show that there is very little difference in accuracy when using 337 different starting window sizes for the splitting-and-merging algorithm. On average, the two 338 methods differ in site accuracy by 0.1-1.4% (Fig. 3) and in RMSE by 0.01-0.23% (Fig. 4). 339 However, there is one simulated chromosome from Scenario 3 where using full concatenation 340 as the starting window size has 12.48% higher site accuracy and 2.34% lower RMSE 341 compared to using the fixed window sizes from AIC. This suggests that in certain cases, 342 starting the splitting-and-merging algorithm with a small window size can lead it to become 343 stuck in a local optimum. We also found that starting the splitting-and-merging approach with 344 short windows often fails to recover the long chromosomal regions with zero recombination 345\", \"page\": 16, \"index\": 7, \"width\": 1016, \"height\": 511}]"
motivation: 传统的固定窗口方法忽略了染色体沿线重组率的随机波动，限制了非重组区域基因树推断的准确性。
method: 提出一种“拆分与合并”策略，利用信息论方法动态调整窗口长度以适应不同区域的重组特征。
result: "新方法在模拟数据上优于固定窗口法，并在大猿基因组分析中发现主要拓扑结构比例达到约80%。"
conclusion: 研究强调了变长窗口在应对重组率变化时的优越性，为全基因组比对分析提供了更灵活且准确的方案。
---

## 摘要
许多系统发育基因组学研究使用非重叠窗口来解决一组比对基因组中的基因树不一致问题。最近，Ivan 等人 (2025) 提出了一种信息论方法，用于在给定比对的情况下选择最佳窗口大小。然而，该方法为每条染色体仅选择一个固定的窗口大小，这虽然是很有意义的第一步，但未能考虑到沿每条染色体的非重组区域大小的变化。这种变化预计会由于重组的随机性以及沿染色体重组率的变化而发生。在本研究中，我们扩展了 Ivan 等人 (2025) 的方法，允许窗口大小在染色体上发生变化，采用了一种允许每个窗口具有任意长度的分裂与合并策略。我们证明，在广泛的模拟数据集上，新方法在恢复基因树拓扑结构方面优于固定窗口方法。将新方法应用于七种袖蝶（Heliconius butterflies）的基因组，我们发现该群体的平均窗口大小在 538-808bp 之间，但与之前使用固定窗口大小的研究相比，基因树拓扑结构的分布非常相似。对于类人猿基因组，平均窗口大小在 4.2kb 到 6.2kb 之间，主要拓扑结构（即人类和黑猩猩归为一组）的比例达到约 80%。总之，我们的研究强调了当染色体重组率变化时使用固定窗口大小的局限性，并提出了一种允许在全基因组比对中使用可变窗口大小的分裂与合并方法。

## Abstract
AO_SCPLOWBSTRACTC_SCPLOWMany phylogenomic studies used non-overlapping windows to address gene tree discordance across a set of aligned genomes. Recently, Ivan et al. (2025) proposed an information theoretic approach to choose an optimal window size given the alignment. However, this approach selects only a single fixed window size per chromosome, which is a useful first step but fails to account for variation in the size of non-recombining regions along each chromosome. Such variation is expected to occur due to the stochastic nature of recombination as well as the variation in recombination rates along chromosomes. In this study, we extend the approach of Ivan et al. (2025) to allow window sizes to vary across the chromosome, using a splitting-and-merging strategy that allows for each window to be of an arbitrary length. We showed that the new method outperformed the fixed-window approach in recovering gene tree topologies on a wide range of simulated datasets. Applying the new method on the genomes of seven Heliconius butterflies, we found that the average window sizes for the group ranged between 538-808bp, but with a very similar distribution of gene tree topologies compared to previous studies that used fixed window sizes. For the genomes of great apes, the average window sizes ranged from 4.2kb to 6.2kb, with the proportion of the major topology (i.e., grouping human and chimpanzee together) reaching approximately 80%. In conclusion, our study highlights the limitations of using a fixed window size when recombination rates vary across the chromosomes, and proposes a splitting-and-merging approach that allows for variable window sizes across whole genome alignments.

---

## 论文详细总结（自动生成）

### 论文结构化总结：在全基因组比对中使用可变窗口大小进行系统发育基因组学分析

#### 1. 论文的核心问题与整体含义
在系统发育基因组学中，研究者通常将全基因组比对划分为非重叠窗口来推断基因树，以应对基因树不一致（Gene Tree Discordance）现象。然而，传统的固定窗口大小（Fixed Window Size）面临权衡：窗口过长会忽略重组事件，导致拓扑结构偏向主要树；窗口过短则因系统发育信号不足产生估计误差。
**研究动机：** 现有的信息论方法（如 Ivan et al. 2025）虽能选择最佳固定窗口，但忽略了重组率在染色体沿线的随机波动和系统性差异。本论文旨在提出一种**可变窗口大小**的方法，以更真实地反映基因组中非重组块（c-genes）的边界。

#### 2. 论文提出的方法论
论文提出了一种基于 **AIC（赤池信息准则）** 的“**拆分与合并（Splitting-and-Merging）**”策略：
*   **核心思想：** 利用 AIC 衡量模型拟合度与复杂度的平衡，动态调整窗口边界，使每个窗口尽可能代表一个单一的进化历史区域。
*   **拆分步骤（Splitting）：** 从初始窗口（如整条染色体）开始，尝试按 0.25:0.75、0.5:0.5 和 0.75:0.25 三种比例将其拆分为两个子窗口。如果两个子窗口的 AIC 总和优于原窗口，则保留拆分，并递归进行，直到 AIC 不再提升。
*   **合并步骤（Merging）：** 在拆分完成后，尝试合并相邻窗口。计算合并后的 AIC，若优于两个独立窗口的 AIC 总和，则记录该合并。
*   **关键算法：** 采用**贪婪算法（Greedy Algorithm）**处理合并冲突（即一个窗口可能与左右邻居合并都能提升 AIC），优先执行 AIC 提升最大的合并，直到无法进一步优化。
*   **工具集成：** 使用 IQ-TREE 2 进行最大似然树推断，并设置最小分支长度限制以惩罚信号不足的窗口。

#### 3. 实验设计
*   **模拟实验：**
    *   设计了 7 种场景（10Mb 比对）：4 种同质重组率场景，3 种异质重组率场景（模拟染色体末端高重组、中间低重组的分布）。
    *   **Benchmark：** 对比 Ivan et al. (2025) 提出的 AIC 选定的**固定窗口大小**方法。
    *   **评估指标：** 位点准确率（Site Accuracy）和拓扑分布的均方根误差（RMSE）。
*   **实证应用：**
    *   **袖蝶（Heliconius）：** 7 个物种的 21 条染色体比对。
    *   **大猿（Great Apes）：** 人类、黑猩猩、大猩猩、红毛猩猩的 25 条染色体（含线粒体和性染色体）。

#### 4. 资源与算力
论文**未明确说明**具体的硬件型号（如 GPU/CPU 核心数）或总训练时长。但文中提到，该方法使用贪婪算法而非遗传算法（如 GARD 软件），目的是为了提高在全基因组规模上的**可扩展性（Scalability）**，使其能在合理时间内处理大规模比对数据。

#### 5. 实验数量与充分性
*   **实验规模：** 模拟实验包含 7 种场景，每种场景进行 10 次独立重复（共 70 条模拟染色体）。实证研究覆盖了两个经典的生物学模型系统。
*   **充分性评价：** 实验设计较为充分。作者不仅对比了固定窗口，还测试了不同的**初始窗口大小**（全染色体连接 vs. AIC 最佳固定窗口）对算法结果的影响，验证了从全连接开始能有效避免局部最优并提高计算效率。实验涵盖了从零重组到高重组的多种极端情况，具有较强的说服力。

#### 6. 论文的主要结论与发现
*   **性能提升：** 在所有非零重组的模拟场景中，可变窗口法均优于固定窗口法。位点准确率平均提升 **3-8%**，RMSE 显著降低。
*   **实证发现（袖蝶）：** 平均窗口大小为 538-808bp，虽然比之前研究使用的 10kb/50kb 短得多，但拓扑分布基本一致，证明了结果的稳健性。
*   **实证发现（大猿）：** 发现主要拓扑结构（人与黑猩猩聚类）的比例约为 **80%**，高于此前 60-77% 的估计。这表明更精确的窗口划分能减少因错误连接不同历史区域而产生的噪声。
*   **生物学意义：** 该方法成功识别了袖蝶基因组中与控制翅膀颜色图案相关的反转区域（Inversion），证明了其捕捉生物学重要区域的能力。

#### 7. 优点
*   **生物学真实性：** 突破了固定窗口的局限，适应了重组率沿染色体变化的生物学现实。
*   **理论严谨：** 基于信息论（AIC）而非人为设定阈值，减少了分析的随意性。
*   **灵活性：** 能够自动识别长程非重组块（如反转区域）和短程高重组区域。
*   **效率优化：** 贪婪算法的设计兼顾了精度与大规模数据处理的需求。

#### 8. 不足与局限
*   **局部最优风险：** 尽管从全连接开始效果较好，但贪婪算法本质上仍可能陷入局部最优，无法保证找到全局最优的划分方案。
*   **信号依赖性：** 在缺失数据多或系统发育信号极弱的区域，算法可能无法有效拆分，导致过度连接（Concatenation）。
*   **计算成本：** 尽管比遗传算法快，但相比固定窗口法，仍需多次迭代运行 IQ-TREE，对于超大规模分类单元（Taxa）的数据集可能仍有计算压力。
*   **模型假设：** 依然基于“窗口内无重组”的假设，对于窗口内部极细微的重组事件仍无法完全消除偏差。

（完）
