---
title: "VicMAG, an open-source tool for visualizing circular metagenome-assembled genomes highlighting bacterial virulence and antimicrobial resistance"
title_zh: VicMAG：一种开源工具，用于可视化环状宏基因组组装基因组，突出显示细菌的毒力和抗菌药物耐药性
authors: "Tsuda, Y., Tanizawa, Y., Vu, T. M. H., Nishimura, Y., Shintani, M., Abe, H., Hasebe, F., Kasuga, I., Nagao, M., Suzuki, M."
date: 2026-04-01
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.31.714378v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 可视化环状宏基因组组装基因组和遗传元件
tldr: 本研究开发了VicMAG这一开源可视化工具，用于展示由长读长宏基因组组装得到的环状宏基因组（cMAG）。该工具集成细菌毒力因子、抗菌耐药基因及可移动遗传元件的注释，能够全面、直观地展示复杂微生物群落中这些功能基因的分布与传播。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-714378-v1/fig-001.webp\", \"caption\": \"Figure 1\", \"page\": 18, \"index\": 1, \"width\": 889, \"height\": 954}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-714378-v1/fig-002.webp\", \"caption\": \"Figure 2\", \"page\": 19, \"index\": 2, \"width\": 889, \"height\": 914}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-714378-v1/fig-003.webp\", \"caption\": \"Figure 3\", \"page\": 20, \"index\": 3, \"width\": 889, \"height\": 889}]"
motivation: 当前缺乏能全面展示环状宏基因组及其功能注释的可视化工具。
method: 研究者利用PacBio HiFi测序数据开发并验证VicMAG，以可视化353个来源于废水样品的cMAG。
result: VicMAG实现了细菌染色体与质粒的尺寸感知可视化，直观显示毒力因子及耐药基因在复杂微生物群中的分布。
conclusion: VicMAG有助于在临床、环境及“一体健康”框架下实现细菌毒力与耐药性的整合监测。
---

## 摘要
细菌病原体在临床和环境中传播，质粒和噬菌体等可移动遗传元件（MGEs）介导了细菌群落之间毒力因子基因（VFGs）和抗菌药物耐药基因（ARGs）的转移。利用高精度长读长测序技术（如 PacBio HiFi 测序）对环境和废水样品进行宏基因组分析，可为监测 VFGs 和 ARGs 的区域传播提供有价值的见解，包括由 MGEs 介导的扩散。目前尚无可用于全面展示大量带有功能基因注释的环状宏基因组组装基因组（cMAGs）的可视化工具。在此，我们开发了 VicMAG，这是一种用于可视化源自长读长宏基因组组装的复杂 cMAGs 的工具，这些 cMAGs 使用更新的 VFG、ARG 和 MGE 数据库进行注释。通过对废水样品进行 PacBio HiFi 测序获得的 353 个 cMAGs，我们展示了 VicMAG 在宏基因组可视化中的实用性。VicMAG 提供了全面的、考虑尺寸的 cMAGs 可视化，展示了细菌染色体和质粒，并附带 VFGs、ARGs 和噬菌体的注释。通过在同一框架下同时可视化所有 cMAGs，VicMAG 有助于全面理解复杂微生物群落中 VFGs 和 ARGs 的分布与基因组背景。该工具支持在临床、环境及“同一健康”（One Health）背景下对与毒力和抗菌药物耐药性相关的细菌进行综合监测。

## Abstract
Bacterial pathogens spread in clinical and environmental settings, and mobile genetic elements (MGEs), such as plasmids and phages, mediate the transfer of virulence factor genes (VFGs) and antimicrobial resistance genes (ARGs) among bacterial communities. Metagenomic analysis of environmental and wastewater samples using highly accurate long-read sequencing technologies, such as PacBio HiFi sequencing, provides valuable insights into monitoring the regional spread of VFGs and ARGs, including dissemination mediated by MGEs. No visualization tool is currently available for the comprehensive display of numerous resulting circular metagenome-assembled genomes (cMAGs) with functional gene annotations. Here, we developed VicMAG, a visualization tool for highly complex cMAGs derived from long-read metagenome assemblies annotated using updated databases of VFGs, ARGs, and MGEs. Using 353 cMAGs from PacBio HiFi sequencing of a wastewater sample, we demonstrated the utility of VicMAG for metagenome visualization. VicMAG provides comprehensive, size-aware visualization of cMAGs representing bacterial chromosomes and plasmids, annotated with VFGs, ARGs, and phages. By simultaneously visualizing all cMAGs in a framework, VicMAG facilitates a holistic understanding of the distribution and genomic context of VFGs and ARGs across complex microbial communities. This tool supports integrated surveillance of bacteria associated with virulence and antimicrobial resistance across clinical, environmental, and One Health contexts.

---

## 论文详细总结（自动生成）

# VicMAG：环状宏基因组可视化工具的研究综述  

---

## 一、核心问题与研究动机

- **研究背景**  
  抗菌耐药性（AMR）已成为全球公共卫生危机，细菌的毒力因子基因（VFGs）和抗菌耐药基因（ARGs）常通过可移动遗传元件（MGEs）在细菌群落中传播。  
  环境与医院废水是耐药基因的重要储库，利用宏基因组学可以有效监测其传播。近年来，**长读长高精度测序技术（如PacBio HiFi）**的应用，使得复杂微生物群落中环状宏基因组（circular MAGs, cMAGs）的组装成为可能。  

- **核心问题**  
  当前缺乏一款可全面展示大量带注释的cMAGs的可视化工具。现有工具如Bandage、Circos或GenoVi存在功能覆盖不足、可扩展性差、需要编程技能等限制。  
  因此，作者提出开发一种**综合性、可扩展、直观的cMAGs可视化工具**，以支持跨临床、环境和“One Health”背景下的综合耐药与毒力监测。

---

## 二、方法论：VicMAG 的设计与实现

- **核心思想**  
  VicMAG旨在通过自动化流程，将来自长读长宏基因组组装的cMAGs进行功能注释（VFGs、ARGs、噬菌体、质粒等），并利用比例缩放算法在一个统一框架下可视化多个环状基因组的结构与功能分布。  

- **主要技术流程**  

  1. **输入准备**  
     - cMAGs来源于长读长组装工具：`hifiasm-meta` 或 `metaMDBG`。  
     - 环状基因组标识：“c” 或 “circular=yes”。  

  2. **功能注释**  
     - 使用 **DFAST** 进行基因预测与注释。  
     - 调用 **VFDB**、**CARD** 数据库识别VFGs与ARGs。  
     - 运用 **geNomad** 识别质粒分类和噬菌体序列。  

  3. **图形生成与可视化**  
     - 基于 Python3 实现，使用 **Biotite** 库绘制圆形基因图。  
     - 每个cMAG以环形表示：  
        - 红色：VFGs  
        - 绿色：ARGs  
        - 淡紫色：噬菌体序列  
        - 浅青色背景：非质粒cMAG  
     - 颜色与显示参数可通过命令行自定义。  

  4. **关键算法（尺寸缩放公式）**  
     为避免不同基因组间长度差异过大导致视觉失真，采用**立方比例缩放（cubic scaling）**：  
     \[
     R_{each} = R_{max} \times \left( \frac{L_{each}}{L_{max}} \right)^{1/3}
     \]
     其中 \(L_{max}\) 为最大基因组长度，\(R_{max}\)为其显示半径。该方法保证了从小型质粒到大型染色体的视觉平衡。  

  5. **输出**  
     - 自动生成高分辨率图像与汇总CSV文件；  
     - 可选过滤功能（如仅显示含ARG/VFG的cMAGs）。  

---

## 三、实验设计

- **数据来源**  
  - 样本采自越南河内一家医院周边受污染河流（2021年）。  
  - 使用含4 mg/L多黏菌素（colistin）的培养基富集多黏菌素耐药细菌。  
  - DNA经酶法提取，在 PacBio Sequel II 平台上进行 HiFi 测序。  
  - 数据量：约 **40.4 Gb**；SRA编号：**DRX553298**。  

- **组装工具比较**  
  - 采用 `metaMDBG v1.0` 与 `hifiasm-meta v0.13` 进行组装。  
  - 结果对比如下：  
    - hifiasm-meta：44,300 个MAGs，其中 347 个cMAGs  
    - metaMDBG：28,857 个MAGs，其中 353 个cMAGs（用于后续分析）  

- **注释与分类**  
  - 注释工具：DFAST（含CARD与VFDB模块）  
  - 分类与噬菌体检测：geNomad  

- **可视化评估**  
  - 重点分析 **353个cMAGs**（其中226个质粒）。  
  - 比较显示效果与信息完整性，并通过Figshare发布可下载高分辨率结果。

---

## 四、资源与算力

- 论文未说明使用的GPU型号或计算时长。  
- 仅提到：
  - 使用 **Python 3** 环境实现VicMAG。  
  - 图形计算依托普通CPU即可完成。  
  - 计算资源部分由 **名古屋大学信息技术中心的超级计算机“Flow”** 提供。  

---

## 五、实验数量与充分性

- **组装数量**：约70,000个MAGs（两种算法总和）。  
- **重点展示**：353个metaMDBG生成的cMAGs。  
- **功能注释结果汇总**：  
  - 含ARG的cMAGs：93个  
  - 含VFG的cMAGs：25个  
  - 含mcr基因者：6个  
  - 含噬菌体序列：11个  
- **实验充分性评价**：  
  - 数据量充足，验证了工具的可扩展性；  
  - 尽管未与其他可视化工具定量对比，但针对性演示了其在“批量cMAG可视化”上的优势。  

---

## 六、主要结论与发现

- 提出了首个可批量、尺寸感知地展示环状宏基因组（cMAGs）的可视化工具——**VicMAG**。  
- 该工具成功整合了毒力基因、耐药基因、噬菌体及质粒信息。  
- 实验展示了**ARGs与VFGs在不同基因组规模中的分布趋势**，揭示其在质粒与染色体间的共现模式。  
- 支持在临床、环境与“One Health”框架下实现综合监测，为区域AMR分析和生态学研究提供可视化支撑。

---

## 七、优点与创新点

- **方法创新**：使用立方比例缩放算法，实现不同尺度cMAG的视觉平衡。  
- **易用性高**：无需编程知识即可生成可视化结果。  
- **整合分析**：联合展示VFG、ARG、MGE，支持基于功能注释的宏观比较。  
- **可扩展性**：支持多组样本及多GenBank文件输入。  
- **开放资源**：代码与数据均在GitHub与Figshare上公开，符合FAIR数据原则。  

---

## 八、不足与局限

- **功能限制**：  
  - 当前仅输出静态图像，缺乏交互与缩放功能。  
  - 未纳入其它常见基因特征（如GC skew、tRNA分布）。  

- **适用范围**：  
  - 实验主要基于PacBio HiFi数据，对ONT数据的支持尚未充分验证。  

- **比较分析匮乏**：  
  - 未与GenoVi、Circos等现有工具进行定量性能对比。  

- **计算性能指标缺失**：  
  - 论文未报告可视化生成的运行时间、内存消耗或并行性能。  

- **生态意义分析有限**：  
  - 虽展示VFG与ARG分布，但缺少对传播机制或生态驱动因子的深入生物学分析。  

---

**（完）**
