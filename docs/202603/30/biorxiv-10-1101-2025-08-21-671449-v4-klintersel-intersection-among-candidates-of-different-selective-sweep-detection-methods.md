---
title: "KLinterSel: Intersection among candidates of different selective sweep detection methods"
title_zh: KLinterSel：不同选择性清除检测方法候选位点间的交集
authors: "Carvajal-Rodriguez, A., Rocha, S., Pampin, M., Martinez, P., Caballero, A."
date: 2026-03-25
pdf: "https://www.biorxiv.org/content/10.1101/2025.08.21.671449v4.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 检测基因组数据中的自然选择信号
tldr: 在基因组自然选择检测中，研究者常结合多种方法并取交集以增强结果可靠性，但这种重叠是否显著往往缺乏统计验证。本文推出了 KLinterSel 软件，通过参数化超几何检验和蒙特卡洛模拟两种互补方法，评估不同检测手段所得候选位点的重叠是否超出随机预期。该工具考虑了基因组非独立性及 SNP 分布，支持多尺度一致性评估，并能识别跨方法的候选位点簇，为筛选真正的选择信号提供了严谨的统计支持。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-21-671449-v4/fig-001.webp\", \"caption\": \"Figure 1. Histogram of observed (left) and expected by chance (right) distances between candidate sites for chromosome 18, obtained using four different selection detection methods. M: median measured in Mb units.\", \"page\": 26, \"index\": 1, \"width\": 950, \"height\": 706}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-21-671449-v4/fig-002.webp\", \"caption\": \"Table 1. Chromosomes from RAD-seq data with significant overlaps between candidates of the four selection detection methods. The significance level is 0.05.\", \"page\": 22, \"index\": 2, \"width\": 948, \"height\": 375}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-21-671449-v4/fig-003.webp\", \"caption\": \"Figure 4. Power analysis of the HGkI and TKL tests for RAD-seq and DEG data. Simulations were performed under a uniform null scenario and under a compression model of spatial SNP clustering with 8 clusters, δ = 1.8 Mb and a shared fraction φ = 0.9, which generates sparse localized concentrations of candidate SNPs along the chromosome. Statistical power was evaluated across increasing window sizes (W) used in the HGkI test to explore the saturation of detection power, with W ranging up to 107. Each point represents the mean power across all chromosomes, calculated as the proportion of simulations in which the test detected a significant overlap between candidate sets. Standard errors were negligible and are not shown. Note that T KL does not depend on the window size; therefore its power values are identical across W and are shown repeatedly for comparison.\", \"page\": 33, \"index\": 3, \"width\": 785, \"height\": 540}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-21-671449-v4/fig-004.webp\", \"caption\": \"Table 3. Spearman correlations between statistical power and chromosome length (ρ ), and between ₁ statistical power and the number of SNPs (ρ ), across chromosomes for DEGs and RAD-seq under the ₂ empirical scenario and hotspot and compression models (2 and 8 clusters). For the HGkI test, results correspond to a window size of 1 Mb.\", \"page\": 35, \"index\": 4, \"width\": 948, \"height\": 222}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-21-671449-v4/fig-005.webp\", \"caption\": \"Table 2. Chromosomes from DEGs data with significant overlaps between candidates of the four selection detection methods. The significance level is 0.05.\", \"page\": 23, \"index\": 5, \"width\": 948, \"height\": 404}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-21-671449-v4/fig-006.webp\", \"caption\": \"Figure 2. Calibration of the false-positive rates (FPR) of the HGkI and TKL tests under different null scenarios (uniform, empirical, and related variants; see Methods) for RAD-seq and DEG data. The FPR was evaluated across different window sizes (W) used in the HGkI test to detect coincident signals between datasets. Each point represents the mean per-chromosome FPR across all chromosomes, calculated as the proportion of simulations in which the test detected a significant overlap between candidate sets. Standard errors were negligible and are not shown. Note that TKL does not depend on window size; therefore, its FPR values are constant across W and are shown repeatedly for comparison.\", \"page\": 28, \"index\": 6, \"width\": 950, \"height\": 975}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-08-21-671449-v4/fig-007.webp\", \"caption\": \"Figure 3. Power analysis of the HGkI and TKL tests for RAD-seq and DEG data under different null scenarios (uniform, empirical, and related variants; see Methods) and two alternative spatial models of SNP clustering (hotspot and compression). In the hotspot model, candidate SNPs are concentrated within a single localized genomic region, whereas in the compression model they are distributed across two localized clusters shared by the different methods. Statistical power was evaluated across window sizes (W) used in the HGkI test. Each point represents the mean power across chromosomes, defined as the proportion of simulations in which the test detected significant overlap between candidate sets. Standard errors were negligible and are not shown. Note that TKL does not depend on window size; therefore, its power values are constant across W and are shown repeatedly for comparison.\", \"page\": 31, \"index\": 7, \"width\": 950, \"height\": 1086}]"
motivation: 针对多方法检测自然选择时，候选位点重叠往往缺乏正式统计评估且易受基因组结构干扰的问题，提出显著性检验方案。
method: 引入了基于顺序条件超几何框架的参数检验和基于蒙特卡洛模拟的距离剖面检验，并集成于 Python 程序 KLinterSel 中。
result: 该方法能够有效区分真正的跨方法一致性与随机重叠，并在普通鸟蛤抗寄生虫相关的候选位点分析中展示了其实用性。
conclusion: KLinterSel 为评估不同选择压力检测方法之间的一致性提供了可靠的统计工具，有助于提高基因组扫描结果的准确性。
---

## 摘要
在基因组数据中检测自然选择信号通常涉及并行应用多种方法。由多种方法共同识别的区域通常被视为强有力的候选区域，因为方法间的一致性通常被视为支持性证据。然而，这种重叠在多大程度上超出了随机预期，很少得到正式评估。当基因组元件不独立时，重合的候选位点可能源于数据的底层结构，而非真正的方法论一致性。为了解决这一问题，我们引入了两个互补的统计检验，旨在评估不同方法检测到的候选位点之间的观测重叠是否超出了偶然预期的范围。第一个是基于顺序条件超几何框架的快速参数检验，用于评估基因组窗口内候选集之间的 k 路交集。第二个依赖于蒙特卡洛模拟，并将观测到的方法间距离分布与随机关联下的预期分布进行比较，同时考虑了基因组中 SNP 的经验分布。通过捕捉一致性的不同方面，这些方法允许在多个空间尺度上评估方法间的一致性。这两个检验均在 KLinterSel 程序中实现，该程序还能识别在用户定义距离阈值内由多种方法共享的候选位点簇。我们利用与普通鸟蛤（Cerastoderma edule）对寄生虫 Marteilia cochillia 的抗性相关的候选位点说明了其应用。该软件采用 Python 编写，可在 GitHub 上获取，并附带文档和适用于主要操作系统的预编译可执行文件。

## Abstract
Detecting signals of natural selection in genomic data often involves applying several methods in parallel. Regions identified by multiple approaches are usually considered strong candidates, as agreement among methods is often taken as supporting evidence. However, the extent to which such overlaps exceed random expectations is rarely evaluated formally. When genomic elements are not independent, coincident candidate sites may arise from the underlying structure of the data rather than from genuine methodological concordance. To address this problem, we introduce two complementary statistical tests designed to evaluate whether the observed overlap among candidate sites detected by different methods exceeds what would be expected by chance. The first is a fast parametric test based on a sequentially conditioned hypergeometric framework that evaluates k-way intersections among candidate sets across genomic windows. The second relies on Monte Carlo simulations and compares the observed inter-method distance profiles with those expected under random association, taking into account the empirical distribution of SNPs along the genome. By capturing different aspects of concordance, these approaches allow agreement among methods to be assessed across multiple spatial scales. Both tests are implemented in the program KLinterSel, which also identifies clusters of candidate sites shared by multiple methods within a user-defined distance threshold. We illustrate its application using candidate loci associated with resistance of the common cockle (Cerastoderma edule) to the parasite Marteilia cochillia. The software is written in Python and is available on GitHub together with documentation and precompiled executables for major operating systems.

---

## 论文详细总结（自动生成）

### KLinterSel：不同选择性清除检测方法候选位点间的交集统计评估

#### 1. 核心问题与整体含义（研究动机和背景）
在群体基因组学研究中，检测自然选择信号（如选择性清除）通常需要并行使用多种统计方法（如基于 $F_{ST}$、单倍型长度或等位基因频率的方法）。研究者通常假设，被多种方法共同识别的区域是更可靠的候选位点。然而，这种“重叠”往往缺乏严谨的统计验证。由于基因组中 SNP 分布不均、连锁不平衡以及数据本身的结构特征，不同方法在空间上的重合可能仅仅是随机偶然或数据结构导致的，而非真正的生物学一致性。本文旨在提供一个正式的统计框架，评估不同检测方法所得候选位点之间的空间一致性是否显著超过随机预期。

#### 2. 方法论：核心思想与技术细节
论文提出了两种互补的统计检验方法，并集成在 **KLinterSel** 软件中：

*   **HGkI（参数化超几何 k 路交集检验）：**
    *   **核心思想：** 将基因组划分为固定大小的离散窗口（$W$），评估 $k$ 种方法在相同窗口内同时出现候选位点的概率。
    *   **技术细节：** 采用顺序条件超几何框架。对于 $k > 2$ 的情况，通过迭代条件概率构建联合分布。该方法计算效率极高，不需要重采样。
    *   **多尺度评估：** 支持从单个 SNP（$W=1$）到大跨度窗口（如 2 Mb）的分析，通过观察不同尺度下的一致性来增强结果可靠性。

*   **$T_{KL}$（类 Kullback-Leibler 蒙特卡洛检验）：**
    *   **核心思想：** 关注不同方法候选位点之间的**物理距离分布**，而非简单的位置重合。
    *   **技术细节：** 计算所有方法间候选位点的成对距离剖面（$D_o$）。通过在原始 SNP 背景下进行多次随机置换（默认 10,000 次），生成经验分布下的预期距离剖面（$D_e$）。
    *   **统计量：** 使用一种类似于 KL 散度的指标来衡量观测分布与预期分布的差异。该检验考虑了基因组中 SNP 的实际密度分布，比假设均匀分布的检验更保守且准确。

#### 3. 实验设计
*   **数据集：**
    *   **真实数据：** 普通鸟蛤（*Cerastoderma edule*）的 RAD-seq 数据（6,077 个 SNP）和差异表达基因（DEGs）数据（13,004 个 SNP），涉及对寄生虫的抗性研究。
    *   **对比方法：** 比较了四种检测方法：Pampín23（基于分化）、XP-EHH、XP-nSL 和 JHAC（基于单倍型）。
*   **Benchmark 与模拟场景：**
    *   **零假设模型：** 模拟了四种 SNP 空间分布：均匀分布、两端聚集、中心聚集以及基于真实数据的经验分布。
    *   **备择假设模型（效能分析）：** 引入了“热点模型”（候选位点集中在特定区域）和“距离压缩模型”（候选位点形成多个簇）。

#### 4. 资源与算力
*   **软件实现：** 使用 Python 编写，支持多进程并行计算。
*   **算力说明：** 文中未提及具体的 GPU 型号，因为该算法主要依赖 CPU 进行统计计算和蒙特卡洛模拟。对于 $T_{KL}$ 检验，默认进行 10,000 次置换。作者提到在 SNP 数量巨大时，1,000 次置换即可获得稳定的结果。

#### 5. 实验数量与充分性
*   **实验规模：**
    *   **假阳性率（FPR）分析：** 每个场景进行了 10,000 次（HGkI）或 5,000 次（$T_{KL}$）重复模拟。
    *   **统计效能（Power）分析：** 每个场景采用 20 个不同的 SNP 宇宙，每个宇宙进行 50 次重复，共 1,000 次模拟。
*   **充分性评价：** 实验设计非常充分。作者不仅测试了不同数量的 SNP 和染色体长度，还考虑了多种窗口大小对参数检验的影响，并对比了不同空间分布模型，确保了统计工具在各种基因组背景下的客观性和公平性。

#### 6. 主要结论与发现
*   **统计特性：** HGkI 表现得非常保守（假阳性率低于名义水平）；而 $T_{KL}$ 在实验范围内校准良好，其假阳性率与预设的显著性水平一致。
*   **检测效能：** HGkI 对局部高度集中的“热点”信号更敏感；$T_{KL}$ 则在处理全基因组范围内的距离偏移（即使没有精确重合）时表现更稳健。
*   **生物学发现：** 在鸟蛤数据中，发现 18 号染色体在两种数据集和两种统计检验中均表现出显著的一致性，并识别出一个约 0.3 Mb 的核心候选区域。

#### 7. 优点
*   **考虑了基因组结构：** 相比于简单的交集计数，该方法考虑了 SNP 的实际分布密度，避免了因 SNP 密集区导致的伪一致性。
*   **多尺度分析：** 允许用户在不同窗口大小下观察信号的稳定性，有助于识别不同演化压力下的选择特征。
*   **工具集成化：** 提供了易用的 Python 程序，支持多种输入格式，并能自动识别和排除方法论过于接近（冗余）的输入文件。

#### 8. 不足与局限
*   **窗口依赖性：** HGkI 的结果受窗口大小（$W$）影响较大，用户需要尝试多个尺度。
*   **多重比较问题：** $T_{KL}$ 检验在全基因组扫描时需要额外的多重测试校正（如 FDR），否则可能存在假阳性风险。
*   **功能定位：** 该工具本身不具备“检测”选择信号的能力，它是一个**后处理验证工具**，其结果的有效性高度依赖于前端检测方法的质量。

（完）
