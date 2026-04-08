---
title: "SCCmecExtractor: A tool for extracting Staphylococcal Cassette Chromosome elements from Whole Genome Sequences"
title_zh: SCCmecExtractor：一种用于从全基因组序列中提取葡萄球菌盒式染色体元件的工具
authors: "MacFadyen, A. C."
date: 2026-03-31
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.31.715619v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 从全基因组组装中提取遗传元件
tldr: 该研究开发了SCCmecExtractor，一种可从葡萄球菌和哺乳葡萄球菌全基因组中自动识别、提取并分类SCC元件的轻量级工具，揭示非耐药SCC在非金黄色葡萄球菌中广泛存在，为研究SCC多样性提供了新的分析手段。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-715619-v1/fig-001.webp\", \"caption\": \"Table 4. Feature comparison with existing SCCmec tools 471\", \"page\": 25, \"index\": 1, \"width\": 1329, \"height\": 802}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-715619-v1/fig-002.webp\", \"caption\": \"Table 1: mec and ccr gene references for gene level typing analysis. 257 258 SCCmecExtractor uses bundled reference databases for mec and ccr gene detection via 259 BLAST. The table lists all reference allotypes with their GenBank accessions and classification 260 thresholds. 261 262\", \"page\": 8, \"index\": 2, \"width\": 979, \"height\": 237}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-715619-v1/fig-003.webp\", \"caption\": \"Table 3: SCC element extraction performance across three datasets 388\", \"page\": 19, \"index\": 3, \"width\": 1381, \"height\": 898}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-715619-v1/fig-004.webp\", \"caption\": \"Table 2: SCCmec Type references and typing concordance by SCCmecExtractor 302 303 SCCmecExtractor gene detection results on 32 reference sequences from the sccmec test suite. Four partial references (marked P) 304 correctly show no mec detected because their sequences do not include the mec complex region. Composite elements (marked C) 305 show additional ccr genes beyond the primary type definition. 306 307\", \"page\": 12, \"index\": 4, \"width\": 1310, \"height\": 762}]"
motivation: 现有SCCmec分析工具无法提取完整的SCC元素或识别缺失耐甲氧西林基因的SCC，从而限制了对其多样性的研究。
method: 该研究开发了SCCmecExtractor工具，利用退化的附着位点模式匹配从全基因组组装中识别并提取完整的SCC元素，并分析其mec和ccr基因。
result: "在7297个基因组的测试中，SCCmecExtractor与传统工具比较达成100%分型一致性，提取了1562个SCC元素，其中39.4%为无mec的非耐药SCC。"
conclusion: SCCmecExtractor为系统性提取与分析SCC元素提供了可靠方法，并揭示了非耐药SCC在多个种群中的广泛分布。
---

## 摘要
葡萄球菌盒式染色体（Staphylococcal cassette chromosome, SCC）是能够整合到 rlmH 基因处的移动遗传元件，主要负责葡萄球菌中甲氧西林抗性。尽管已有 SCCmec 分型工具，但目前尚无工具能够直接提取该元件的序列本身，或明确分类缺乏甲氧西林抗性基因的 SCC 元件。在此我们介绍 SCCmecExtractor，这是一款轻量级的 Python 工具包，通过退化的附着位点（attachment site, att）模式匹配识别 SCC 元件边界，从全基因组装中提取完整元件，并对其 mec 和 ccr 基因内容进行表征。在覆盖葡萄球菌属（Staphylococcus）和哺乳球菌属（Mammaliicoccus）70 个物种的 7,297 个基因组上进行基准测试，SCCmecExtractor 在 1,454 个金黄色葡萄球菌（S. aureus）基因组上与 sccmec 工具实现了 100% 的分型一致性。该工具共提取出 1,562 个 SCC 元件，来源于 1,454 个 S. aureus、5,295 个非 S. aureus 的葡萄球菌以及 548 个哺乳球菌基因组；在去除基因组装不完整和缺乏有效 ccr 对的样本后，有效提取率分别为：S. aureus 87.3%、非 S. aureus 葡萄球菌 58.8%、哺乳球菌 61.9%。值得注意的是，在提取的 1,562 个元件中，有 616 个（39.4%）为缺乏甲氧西林抗性基因的非 mec SCC 元件，这一类移动元件往往被忽视。非 mec SCC 的检出率从 S. aureus 的 12.2% 上升至非 S. aureus 葡萄球菌的 55.6% 和哺乳球菌的 76.0%，揭示了甲氧西林抗性之外丰富的 SCC 多样性。SCCmecExtractor 在 PyPI、Docker 和 Singularity 上以 MIT 许可协议免费提供。

影响声明：葡萄球菌盒式染色体（SCC）是导致葡萄球菌甲氧西林抗性的移动遗传元件，也是耐甲氧西林金黄色葡萄球菌（MRSA）流行病学的核心。现有工具主要从组装基因组中进行 SCCmec 分型，但无法提取元件本身，限制了我们系统监测和研究这些元件的能力。SCCmecExtractor 是一个轻量级、可移植的工具，能够检测 SCC 元件整合到基因组所需的附着位点，提取包含或不包含 mec 基因的 SCC 元件，并对其基因内容进行表征。通过应用于跨两个属（Staphylococcus 与 Mammaliicoccus）的 7,297 个基因组，我们发现非 mec SCC 元件是 S. aureus 以外物种中占主导的 SCC 类别，而这一发现得益于对 SCC 元件（无论是否含 mec 基因）系统性的提取与分类。SCCmecExtractor 为科研社区提供了一种基于生物学的、以置信度为核心的方法，可用于所有葡萄球菌与哺乳球菌物种的 SCC 元件分析。

数据摘要：该流程的代码可在：https://github.com/AlisonMacFadyen/SCCmecExtractor 获取；Docker 镜像可从：https://hub.docker.com/repository/docker/alisonmacfadyen/sccmecextractor 下载；PyPI 软件包位于：https://pypi.org/project/sccmecextractor/。所有参考数据库均已与工具一同打包。基准测试中使用的基因组包括：1,454 个 S. aureus、5,295 个非 S. aureus 葡萄球菌和 548 个哺乳球菌基因组，均来自 NCBI。完整的基因组登录号列表见补充数据（补充表 S1）。从 Zenodo（10.5281/zenodo.19355206）可获取提取的 SCC 元件。

## Abstract
Staphylococcal cassette chromosome (SCC) elements are mobile genetic elements that integrate at the rlmH gene and are predominantly responsible for methicillin resistance in staphylococci. Although SCCmec typing tools exist, none can extract the element sequence itself or explicitly classify SCC elements that lack methicillin resistance genes. Here we present SCCmecExtractor, a lightweight Python toolkit that identifies SCC element boundaries through degenerate attachment site (att) pattern matching, extracts complete elements from whole-genome assemblies and characterises their mec and ccr gene content. Benchmarking on 7,297 genomes spanning 70 species across Staphylococcus and Mammaliicoccus demonstrated 100% typing concordance with the sccmec tool1 on 1,454 S. aureus genomes. The tool extracted 1,562 SCC elements, from 1,454 S. aureus, 5,295 non-aureus Staphylococcus and 548 Mammaliicoccus genomes, achieving effective extraction rates (excluding assembly-limited genomes and those lacking valid ccr pairs) of 87.3% for S. aureus, 58.8% for non-aureus Staphylococcus, and 61.9% for Mammaliicoccus. Notably, 616 of the 1,562 extracted elements (39.4%) were non-mec SCC elements lacking methicillin resistance genes, a class of mobile element often overlooked. Non-mec SCC prevalence increased from 12.2% in S. aureus to 55.6% in non-aureus Staphylococcus and 76.0% in Mammaliicoccus, revealing a substantial reservoir of SCC diversity beyond methicillin resistance. SCCmecExtractor is freely available via PyPI, Docker and Singularity under an MIT licence.

Impact StatementStaphylococcal cassette chromosome (SCC) elements are mobile genetic elements responsible for methicillin resistance in staphylococci and are central to methicillin resistant Staphylococcus aureus (MRSA) epidemiology. Existing tools focus on typing SCCmec from assemblies but cannot extract the element itself, limiting our ability to comprehensively monitor and examine these elements. SCCmecExtractor is a lightweight, portable tool that detects the attachment sites, required by SCC elements to integrate into the genome, extracts the SCC element, both mec gene carrying and not, and characterises their gene content. Applied across 7,297 genomes spanning two genera, we demonstrate that non-mec SCC elements are the dominant SCC class outside S. aureus, a finding enabled by systematic extraction and classification of SCC elements regardless of mec gene content. SCCmecExtractor provides the research community with an accessible, confidence-first approach (based on biology) to SCC element analysis across all staphylococci and mammaliicocci species.

Data SummaryThe code for this pipeline is available at: https://github.com/AlisonMacFadyen/SCCmecExtractor, with a Docker image available at: https://hub.docker.com/repository/docker/alisonmacfadyen/sccmecextractor and PyPi package at: https://pypi.org/project/sccmecextractor/. All reference databases are bundled with the tool. Benchmarking genome accessions: 1,454 S. aureus, 5,295 non-aureus Staphylococcus, and 548 Mammaliicoccus genomes from NCBI. A complete list of genome accessions is provided as supplementary data (Supplementary Table S1). Extracted SCC elements can be obtained from Zenodo: 10.5281/zenodo.19355206

---

## 论文详细总结（自动生成）

# SCCmecExtractor：一种用于从全基因组序列中提取葡萄球菌盒式染色体元件的工具  
**作者：** MacFadyen, A. C.  
**来源：** bioRxiv（2026 年 3 月 31 日）

---

## 一、核心问题与研究动机

- **研究背景：**  
  葡萄球菌盒式染色体（Staphylococcal Cassette Chromosome, SCC），尤其是其中携带甲氧西林抗性基因的 SCCmec 元件，是耐药性金黄色葡萄球菌（MRSA）产生与传播的关键遗传因素。  
  现有的生物信息学工具（如 *sccmec tool*）仅能进行 **SCCmec 分型**，不能直接提取元素序列，也无法识别缺乏 mec 基因的“非耐药”SCC 元件。

- **核心问题：**  
  如何从大规模全基因组装中**自动识别、提取并分类** SCC 元件（包含或不包含 mec 基因），以便系统性研究其多样性与进化关系。

- **研究意义：**  
  通过开发可通用的自动化工具，为理解 **SCC 的水平转移、耐药基因创新** 与 **物种间传播模式** 提供新的研究手段。

---

## 二、方法论：SCCmecExtractor 工具的设计与原理

### 核心思想

- 开发一个轻量级、可移植的 Python 工具：**SCCmecExtractor**。
- 不局限于抗性分型，而是基于**基因组结构特征**来识别 SCC 元件的边界与内容。

### 关键技术路线

1. **附着位点识别：**  
   通过识别葡萄球菌基因组中整合位点 *rlmH* 附近的 **退化型附着位点（att）序列模式**，确定 SCC 元件的两端边界。

2. **基因检测与注释：**  
   - 对提取的序列使用内置的 **mec（抗性基因）** 和 **ccr（整合酶基因）** 参考数据库进行 BLAST 比对。  
   - 依据比对相似度和分类阈值进行分型。

3. **分类与输出：**  
   - 根据 mec、ccr 组合结果对 SCC 元件进行类型化（如 I–XII 型或非 mec SCC）。  
   - 输出完整序列与注释结果。

4. **实现与可用性：**  
   - 提供三种分发形式：PyPI、Docker、Singularity。  
   - 采用 MIT 开源许可。  
   - 含完整依赖与参考数据库。

---

## 三、实验设计与对比基准

- **数据范围：**  
  - 共分析 **7,297 个基因组**，覆盖 *Staphylococcus* 与 *Mammaliicoccus* 两个属、70 个物种。  
  - 数据来源于 NCBI 公共数据库。

- **样本构成：**  
  - **S. aureus（金黄色葡萄球菌）：** 1,454 个基因组  
  - **非 S. aureus 葡萄球菌：** 5,295 个基因组  
  - **哺乳球菌 (*Mammaliicoccus*)：** 548 个基因组

- **对比基准：**  
  与传统的 **sccmec tool** 进行分型一致性对比。  
  目标在于验证 SCCmecExtractor 是否在标准 mec 型别分型上无偏差。

- **评估指标：**
  - 分型一致性（Typing concordance）
  - 元件提取率（Extraction rate）
  - 非 mec SCC 比例

---

## 四、资源与算力使用

- 论文未提及具体算力设备（如 GPU 型号或数量）。
- 推测该工具主要基于常规 CPU 运行的 BLAST 分析，可在轻量计算环境或 Docker 容器中完成。
- 未涉及模型训练，因此算力需求较低。

---

## 五、实验数量与充分性

- **实验广度：**  
  - 涵盖两个属、70 个物种、7,000 余份基因组，范围广泛，具备跨物种代表性。  
  - 包含 32 条参考序列分型验证与多物种批量分析。

- **实验充分性：**  
  - 与 sccmec 工具实现 100% 分型一致性，验证分类可靠性。  
  - 提供提取性能统计（每类物种提取率与 mec 状态分布）。  
  - 覆盖性与样本规模显示实验较为充分、结果稳健。

---

## 六、主要结论与发现

1. **工具性能：**
   - 在 1,454 个 *S. aureus* 样本中分型结果与传统工具完全一致。  
   - 整体共提取 **1,562 个完整 SCC 元件**。

2. **物种间提取率：**
   - *S. aureus*：87.3%  
   - 非 *S. aureus* 葡萄球菌：58.8%  
   - 哺乳球菌：61.9%

3. **发现非 mec SCC 的广泛性：**
   - 约 39.4%（616/1562）为不含 mec 的“非耐药”SCC 元件。  
   - 非 mec SCC 占比随物种增加而显著上升：  
     - *S. aureus*：12.2%  
     - 非 *S. aureus*：55.6%  
     - *Mammaliicoccus*：76.0%

4. **生物学意义：**
   - 非 mec SCC 元件可能是 SCC 进化与耐药性形成的重要“储备库”，这一类型在以往研究中常被忽视。

---

## 七、优点与创新点

- **方法创新：**
  - 首次实现自动提取 SCC 元件序列（而非仅分型），可分析完整结构特征。
- **通用性强：**
  - 支持所有葡萄球菌及哺乳球菌物种。
- **可移植性高：**
  - 轻量级实现，无需高性能计算环境。
- **定量与结构结果兼具：**
  - 提供 mec/ccr 基因检测、完整序列、提取统计。
- **促进研究开放性：**
  - 完全开源、可复现，配有统一参考数据库与 Zenodo 数据集。

---

## 八、不足与局限

- **算法局限：**
  - 依赖于已知附着位点模式，可能错过结构变异较大的 SCC。
- **物种覆盖性偏差：**
  - 数据集中 *S. aureus* 样本仍占主要比例，非主流物种数据可能有限。
- **外部验证缺乏：**
  - 缺少实验室层面的功能验证（如 PCR 验证提取边界）。
- **算力与性能评估未详述：**
  - 未提供运行效率、内存使用或大规模批处理时间等指标。
- **对比基准单一：**
  - 仅与 sccmec tool 比较，尚未与其他基因提取工具交叉验证。

---

**（完）**
