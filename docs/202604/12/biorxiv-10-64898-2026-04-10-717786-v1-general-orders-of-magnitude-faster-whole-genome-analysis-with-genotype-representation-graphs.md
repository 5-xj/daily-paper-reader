---
title: "General, orders-of-magnitude faster whole-genome analysis with genotype representation graphs"
title_zh: 基于Genotype Representation Graphs的数量级加速全基因组分析
authors: "DeHaas, D., Adonizio, C., Pan, Z., Wei, X."
date: 2026-04-11
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.10.717786v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 基于基因型表示图的全基因组分析
tldr: 本研究针对生物银行级全基因组测序数据提出基因型表示图（GRG）v2及Python库grapp，通过图结构实现紧凑无损的基因型编码与直接计算，使得数据分析速度提升数十至数百倍，显著降低存储与计算成本。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-10-717786-v1/fig-001.webp\", \"caption\": \"Table 1: Constructing a GRG vs. constructing PGEN.\", \"page\": 6, \"index\": 1, \"width\": 967, \"height\": 245}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-10-717786-v1/fig-002.webp\", \"caption\": \"Figure 3: PCA runtime performance and example applications. a. Comparing times to obtain top 10 PCs on unfiltered simulated data of different sample sizes. Datasets contain between 14.5 and 23.7 million variants. b. The same tests as panel a, but showing RAM usage. c. Comparing times to obtain top 10 PCs on simulated data filtered such that derived allele frequency >0.05. Datasets contain about 440,000 variants. d. The same tests as panel c, but showing RAM usage. For panels a-d, the y-axis is log scale. e. Time to run PCA on the UK Biobank dataset with 490,541 individuals and 137,116,837 variants over 22 autosomes with 22 threads. f. Same as panel e, except RAM usage.\", \"page\": 7, \"index\": 2, \"width\": 979, \"height\": 296}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-10-717786-v1/fig-003.webp\", \"caption\": \"Figure 5: grapp usage examples. a. Example workflow using a simulated phenotype and PCA covariates as input to GWAS with GRG and grapp. b. Principal Component Analysis (PCA) implemented with a grapp linear operator and scipy: eigen decomposition of on the standardized genotype matrix . Meant to illustrate the simplicity and power of the linear operators; 𝑋𝑋𝑇 𝑋 for PCA, users can just use the grapp.linalg.PCs() method (which has additional options).\", \"page\": 10, \"index\": 3, \"width\": 979, \"height\": 491}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-10-717786-v1/fig-004.webp\", \"caption\": \"Figure 4: GWAS with covariates. a. Time to perform the same GWAS (with 10 PCs as covariates) on simulated data for GRG and PLINK2 PGEN. GRG uses 1 thread (GRG T1), PLINK2 was given 1 (PGEN T1) or 25 (PGEN T25) threads. b. Same as panel a, but RAM usage. c. PLINK2 vs. grapp p-values for the same GWAS (PCA covariates) on simulated data and phenotype. d. GWAS p-values for body mass index (BMI) on UK Biobank chromosome 8, unrelated white British individuals, covariates are the top 20 PCs and sex. Each Manhattan plot uses PCs from a different PCA method: PCA on all autosomes (ALL), leave-one-chromosome out (LOCO) PCA, or the LD-pruned PCA (PRUNE, from UK Biobank field 22009). e. Correlation between PC10 (PC11) and the chromosome 8 genotypes, with PCs computed from PCA on all autosomes (ALL). f. p-values from GWAS using covariate PCs from LOCO (y-axis), vs. from ALL (x-axis, left) or PRUNE (x-axis, right).\", \"page\": 8, \"index\": 4, \"width\": 979, \"height\": 741}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-10-717786-v1/fig-005.webp\", \"caption\": \"Figure 1: Graph-based matrix representation and multiplication. a. A GRG represents the same genotype matrix as tabular formats, and can be constructed from VCF or IGD. Matrix multiplication against GRG integrates with numpy and scipy to enable\", \"page\": 4, \"index\": 5, \"width\": 979, \"height\": 591}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-10-717786-v1/fig-006.webp\", \"caption\": \"Figure 2: Improved GRG results on UK Biobank. a. Illustration of GRG Build algorithm, where H(i) is the haplotype (i.e., set of variants) shared by all samples beneath node i. In this example, node p captures the common set of variants between node i and j, where H(i) H(j) represents the set intersect. The green nodes become roots and capture the “residual haplotypes” that do ∩ not reach the parent of nodes i and j, or the set differences (H(i)\\\\H(j), and H(j)\\\\H(i)). Because {H(i)\\\\H(j)} {H(i) H(j)}= H(i), ∪ ∩ the graph emitted from Build contains all the haplotype to variant information. b. After the tree is constructed, all root nodes (green) are connected to the relevant mutation nodes (light blue) for the haplotypes they capture. c. Improvement of GRG v2 over v1 on the UK Biobank 200,000 phased individuals WGS dataset, reflecting how much smaller, faster, or cheaper our improved GRG construction and file format are. d. GRG file sizes for both the 490,541 (500k) and 200,011 (200k) phased individuals WGS datasets. e. Elapsed time for constructing GRGs from IGD with 64 threads (500K dataset) and 70 threads (200K dataset). f. Cost, in GBP, of constructing GRGs.\", \"page\": 5, \"index\": 6, \"width\": 979, \"height\": 598}]"
motivation: 传统的基因型表格格式难以高效存储和分析生物银行级别的全基因组测序数据。
method: 研究提出GRG v2格式及构建算法，并开发grapp库以实现基于图的高效计算操作。
result: GRG v2相较传统格式在存储、内存及加载效率上提升显著，结合grapp实现数百倍速度提升的分析性能。
conclusion: GRG v2和grapp工具显著提升了基因组数据分析的效率与可扩展性，为群体和统计遗传学研究提供了高性能基础设施。
---

## 摘要
生物样本库规模队列的全基因组测序（WGS）已生成了数据集，而传统的表格型基因型格式无法高效地存储或分析这些数据。Genotype Representation Graphs（GRG，基因型表示图）提供了一种具有生物学动机的分层图结构替代方案，可紧凑且无损地编码基因型，并支持直接在图上进行计算，而无需将基因型矩阵物化。本文提出了两项重大进展，使GRG成为生物样本库规模人群和统计遗传学的实际基础。第一，我们介绍了GRG v2，一个在格式与构建算法上显著改进的版本，可将构建时间缩短10至20倍，使生成文件的磁盘与内存占用减半，并将加载时间提升超过20倍。应用于最近完成相位的UK Biobank全基因组测序数据集（490,541位个体，706,556,181个变异）时，GRG v2生成的文件比.vcf.gz小25倍，比PLINK2的PGEN格式小8倍以上，构建成本不足90英镑。第二，我们介绍了grapp，一个Python库和命令行工具，可利用GRG的计算优势用于常规分析与新方法开发。grapp提供了变异与样本过滤、伴随协变量的全基因组关联分析（GWAS）、主成分分析（PCA）及数据导出等标准流程，所有操作均以基于图的方式实现。此外，它还提供了与numpy与scipy稀疏线性代数生态系统集成的线性算子，可通过底层GRG进行隐式矩阵乘法，用于标准化基因型矩阵、连锁不平衡矩阵及遗传相关矩阵。借助这些算子，可在四行Python代码中实现基于scipy的PCA，运行速度比现有方法快51–492倍且占用更少内存。在UK Biobank上对89,988,512个变异进行PCA的计算仅需2至4小时。这种可扩展性使我们能够引入留一染色体（LOCO）GWAS协变量构建方法，在无需进行连锁不平衡修剪（LD pruning）的情况下避免LD伪影。总体而言，GRG v2与grapp共同实现了传统基因型格式难以达到的可扩展性与方法灵活性。

## Abstract
Whole-genome sequencing (WGS) of biobank-scale cohorts have generated datasets that traditional tabular genotype formats cannot efficiently store or analyze. Genotype Representation Graphs (GRGs) offer a compelling alternative: a biologically-motivated, hierarchical, graph-based representation that compactly and losslessly encodes the genotypes, and that supports computation directly on the graph rather than on a materialized genotype matrix. Here we introduce two advances that together make GRG a practical foundation for biobank-scale population and statistical genetics. First, we present GRG v2, a substantially improved format and construction algorithm that reduces construction time by 10-20x, halves the disk and RAM footprint of the resulting files, and improves load time by more than 20x. Applied to the recently phased UK Biobank WGS dataset (490,541 individuals, 706,556,181 variants), GRG v2 produces files 25 times smaller than .vcf.gz and more than 8 times smaller than PLINK2's PGEN format, while costing less than 90 GBP to construct. Second, we introduce grapp, a Python library and command-line tool that exploits the computational advantages of GRG for both routine analyses and new method development. grapp provides standard pipelines for variant and sample filtering, genome-wide association studies (GWAS) with covariates, principal component analysis (PCA), and data export, all implemented as graph-based operations. Moreover, it provides linear operators that integrate with the numpy and scipy sparse linear algebra ecosystem, enabling implicit matrix multiplication against the standardized genotype matrix, the linkage disequilibrium matrix, and the genetic relatedness matrix all via an underlying GRG. Using these operators, scipy-based PCA can be implemented in four lines of Python and runs 51-492x faster than existing methods while using less RAM. PCA on 89,988,512 variants in the UK Biobank runs in two to four hours. This scalability allows us to introduce a leave-one-chromosome-out (LOCO) approach to GWAS covariate construction that avoids LD artifacts without requiring LD pruning. Together, GRG v2 and grapp enable a level of scalability and methodological flexibility that is not achievable with traditional genotype formats.

---

## 论文详细总结（自动生成）

# 基于 Genotype Representation Graphs 的数量级加速全基因组分析 — 论文总结

---

## 一、研究背景与核心问题

- **问题背景**：  
  随着生物样本库（Biobank）规模的全基因组测序（WGS）数据急剧膨胀，传统的 **表格型基因型格式**（如 VCF、PLINK PGEN）在存储、加载与计算上均表现出严重的性能瓶颈。  
  生物样本库级别的分析涉及数十万个体与数亿至数十亿变异位点，传统方法需在磁盘与内存中物化完整的基因型矩阵，既造成资源浪费，也阻碍了统计遗传学中如 PCA（主成分分析）、GWAS（全基因组关联分析）等高维计算任务。

- **研究动机**：  
  为解决这一“可扩展性危机”，论文提出一种基于图结构的基因型表示方法 **Genotype Representation Graphs (GRG)**，旨在以压缩、无损、可计算的图形式存储基因型信息，从而在大型数据集上实现数量级的速度与效率提升。

- **整体含义**：  
  本研究通过改进 GRG（推出 **GRG v2**）与配套 Python 工具库 **grapp**，提出了一个既是数据表示标准又是算法计算基础的高性能遗传分析框架，为生物银行数据的计算基础设施提供了新方案。

---

## 二、方法论：核心思想与技术实现

### 1. 核心思想
- 将基因型矩阵重新表示为 **分层图结构（hierarchical graph）**：  
  每个节点表示一组共享变异的样本（即共享的“haplotype”），边表示样本及变异之间的层次包含关系。
- 使用图结构实现对基因型矩阵的 **无损压缩与隐式计算**：  
  无需物化矩阵即可完成线性代数运算（如矩阵乘法、协方差计算等）。

### 2. 关键技术细节
- **GRG v2 algorithm（构建算法）**：
  - 通过对 haplotype 集合进行 **集合交（∩）与差（\\）操作** 构建共享层次的图。
  - 优化节点合并与缓存逻辑，从而在构建阶段减少重复数据。
  - 输出文件包含完整的 haplotype–variant 映射信息，保证数据无损。

- **grapp 库（计算框架）**：
  - 提供一组与 numpy/scipy 接口兼容的 **线性算子（linear operators）**。
  - 支持隐式矩阵乘法，例如：
    - \( GX \)：标准化基因型矩阵；
    - \( X X^T \)：样本间的遗传相关矩阵；
    - \( LD(X) \)：连锁不平衡矩阵。
  - 能直接通过图结构执行 PCA、GWAS 等任务，不需显式加载庞大矩阵。

### 3. 算法流程（文字描述）
1. 从 VCF 或 IGD 格式读取数据；
2. 构建 GRG 图：节点代表 haplotype 集群，边表示继承关系；
3. 输出紧凑二进制文件（GRG v2 格式）；
4. 在 grapp 框架中通过线性算子执行 PCA、GWAS 或矩阵运算；
5. 输出分析结果或可用于进一步计算的矩阵。

---

## 三、实验设计与对比

- **数据集**：
  - UK Biobank WGS 数据：490,541 个体，706,556,181 个变异。
  - 模拟数据集：用于性能测试（含 14.5–23.7 百万变异，以及子集 440,000 变异）。
  - 子数据集：200,011 个体的 UKBB 相位数据用于格式构建评估。

- **对比基线方法**：
  - **PLINK2 PGEN 格式**
  - **传统 VCF.gz 格式**

- **Benchmark 指标**：
  - 文件大小  
  - 数据加载时间  
  - 主成分分析（PCA）时间与内存占用  
  - 全基因组关联分析（GWAS）时间与内存占用  
  - 构建成本（货币计量，英镑）

---

## 四、资源与算力

- 文中未描述 GPU 或特定硬件配置。  
- 算力信息仅提到使用 **多线程 CPU** 环境：
  - 构建阶段：64–70 线程；
  - PCA 和 GWAS 计算阶段：最多 22 线程（如 Figure 3、4 所示）。
- 计算成本示例：
  - UK Biobank 500k 数据集的构建成本 **不足 90 英镑**。
- 未报告 GPU 类型或训练时间，因此该项信息 **不详**。

---

## 五、实验数量与充分性

- **性能评估实验**：
  - 比较 GRG v1 与 v2 构建性能（多线程、文件大小、成本）。
  - 在不同数据规模下进行 PCA 与 GWAS 运行时间和内存对比。
  - UK Biobank 实际应用验证（包含 PCA、GWAS、LOCO 协变量计算）。

- **实验多样性**：
  - 包括模拟数据与真实人类群体数据。
  - 测试了不同线程数、数据规模与算法模式。

- **充分性与公平性**：
  - 对比方法覆盖当前主流工具（VCF、PLINK）。  
  - 所有实验指标量化完整，计算环境可比。  
  - 虽未进行消融实验，但性能提升幅度支持其结论，实验充分性较高。

---

## 六、主要结论与发现

1. **性能提升显著**：  
   - 构建时间缩短 10–20 倍；文件大小减少 25 倍（vs VCF.gz）。  
   - 加载速度提升 20 倍以上；内存占用减半。

2. **计算效率突破**：  
   - PCA 运行速度快 51–492 倍；UK Biobank 89,988,512 变异的 PCA 仅需 2–4 小时。
   - RAM 使用远低于传统方法。

3. **方法应用扩展**：  
   - 支持 LOCO GWAS 协变量构建法，无需 LD 修剪即可避免连锁伪影。
   - 与 Python 科学计算生态无缝整合，简化复杂遗传建模流程。

---

## 七、优点与创新点

- **图结构基因型表示**：突破了传统矩阵存储方式，兼具紧凑性与可计算性。  
- **算法与系统层创新结合**：不仅改进了存储格式，还提供可直接计算的 Python 接口。  
- **广泛可扩展性**：在百万级样本、亿级变异的数据环境下仍保持高效。  
- **与现有生态兼容**：grapp 可与 numpy、scipy 线性代数库协作，方便研究者集成。

---

## 八、不足与局限

- **硬件信息不足**：论文未明确说明 CPU 型号、内存规格或 GPU 资源，限制了复现透明度。  
- **测试范围局限**：主要集中于 UK Biobank 与模拟数据，未验证在非人类或多种测序平台上的适用性。  
- **方法复杂性**：GRG 构建算法较为抽象，对非图算法背景的科研人员可能有一定使用门槛。  
- **消融或误差分析缺失**：论文重视性能指标，但对算法正确性或统计偏差的系统验证较少。

---

（完）
