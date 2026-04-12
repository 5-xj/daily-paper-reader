---
title: "AEGIS: an annotation extraction and genomic integration resource"
title_zh: AEGIS：注释提取与基因组整合资源
authors: "Navarro-Paya, D., Santiago, A., Velt, A., Moretto, M., Rustenholz, C., Matus, J. T."
date: 2026-04-11
pdf: "https://www.biorxiv.org/content/10.64898/2025.12.04.692274v2.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 旨在解析、验证和标准化基因组注释文件的工具包
tldr: AEGIS 是一个面向基因组注释文件的命令行工具套件，旨在解决 GTF/GFF3 文件格式不统一的问题。它可自动解析、验证并标准化注释文件，支持序列提取、启动子区定义及基因间比较分析，显著提高注释数据的一致性与后续分析的可靠性。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2025-12-04-692274-v2/fig-001.webp\", \"caption\": \"\", \"page\": 5, \"index\": 1, \"width\": 2048, \"height\": 354}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2025-12-04-692274-v2/fig-002.webp\", \"caption\": \"\", \"page\": 5, \"index\": 2, \"width\": 2048, \"height\": 353}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2025-12-04-692274-v2/fig-003.webp\", \"caption\": \"\", \"page\": 8, \"index\": 3, \"width\": 1882, \"height\": 528}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2025-12-04-692274-v2/fig-004.webp\", \"caption\": \"\", \"page\": 8, \"index\": 4, \"width\": 1882, \"height\": 528}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2025-12-04-692274-v2/fig-005.webp\", \"caption\": \"\", \"page\": 9, \"index\": 5, \"width\": 1355, \"height\": 432}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2025-12-04-692274-v2/fig-006.webp\", \"caption\": \"\", \"page\": 14, \"index\": 6, \"width\": 1638, \"height\": 468}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2025-12-04-692274-v2/fig-007.webp\", \"caption\": \"\", \"page\": 14, \"index\": 7, \"width\": 1638, \"height\": 468}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2025-12-04-692274-v2/fig-008.webp\", \"caption\": \"\", \"page\": 16, \"index\": 8, \"width\": 1882, \"height\": 496}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2025-12-04-692274-v2/fig-009.webp\", \"caption\": \"\", \"page\": 16, \"index\": 9, \"width\": 1882, \"height\": 496}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2025-12-04-692274-v2/fig-010.webp\", \"caption\": \"\", \"page\": 16, \"index\": 10, \"width\": 1882, \"height\": 496}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2025-12-04-692274-v2/fig-011.webp\", \"caption\": \"\", \"page\": 16, \"index\": 11, \"width\": 1882, \"height\": 493}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2025-12-04-692274-v2/fig-012.webp\", \"caption\": \"\", \"page\": 26, \"index\": 12, \"width\": 2511, \"height\": 390}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2025-12-04-692274-v2/fig-013.webp\", \"caption\": \"\", \"page\": 26, \"index\": 13, \"width\": 2511, \"height\": 390}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2025-12-04-692274-v2/fig-014.webp\", \"caption\": \"\", \"page\": 26, \"index\": 14, \"width\": 2511, \"height\": 390}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2025-12-04-692274-v2/fig-015.webp\", \"caption\": \"\", \"page\": 26, \"index\": 15, \"width\": 2511, \"height\": 390}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2025-12-04-692274-v2/fig-016.webp\", \"caption\": \"\", \"page\": 26, \"index\": 16, \"width\": 2511, \"height\": 389}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2025-12-04-692274-v2/fig-017.webp\", \"caption\": \"\", \"page\": 28, \"index\": 17, \"width\": 1882, \"height\": 507}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2025-12-04-692274-v2/fig-018.webp\", \"caption\": \"\", \"page\": 28, \"index\": 18, \"width\": 1882, \"height\": 507}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2025-12-04-692274-v2/fig-019.webp\", \"caption\": \"\", \"page\": 28, \"index\": 19, \"width\": 1882, \"height\": 505}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2025-12-04-692274-v2/fig-020.webp\", \"caption\": \"\", \"page\": 29, \"index\": 20, \"width\": 2048, \"height\": 423}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2025-12-04-692274-v2/fig-021.webp\", \"caption\": \"\", \"page\": 29, \"index\": 21, \"width\": 2048, \"height\": 423}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2025-12-04-692274-v2/fig-022.webp\", \"caption\": \"\", \"page\": 29, \"index\": 22, \"width\": 2048, \"height\": 422}]"
motivation: 不同来源的 GTF/GFF3 注释文件格式不一致严重影响下游生物信息分析，因此需要一种统一、可靠的工具进行标准化处理。
method: 作者开发了基于 Python 的命令行工具 AEGIS，集成文件标准化、序列提取和比较基因组学模块。
result: AEGIS 能够有效解析与标准化基因组注释文件，发现并纠正结构与格式错误，同时支持基因、CDS与蛋白序列提取及复杂基因比较分析。
conclusion: 该工具为注释质量控制、特征提取和比较基因组学分析提供了一体化解决方案，简化流程并提升研究稳定性。
---

## 摘要
GTF/GFF3 格式是存储和交换基因组注释的标准。然而，由于其灵活性，不同来源的文件往往存在不一致和格式不佳的问题，从而成为下游生物信息学分析的主要瓶颈。在此，我们介绍注释提取与基因组整合套件（Annotation Extraction and Genomic Integration Suite, AEGIS），这是一款全面且易于使用的命令行工具包，用于解析、验证和标准化基因组注释文件。AEGIS 能够稳健地纠正常见的结构和格式错误，确保与下游工具的兼容性。除了标准化功能，该套件还提供高级分析模块，例如可灵活处理异构体的序列提取（如基因、CDS、蛋白质），可定制的启动子区域定义，以及特定 DNA 基序搜索。AEGIS 的核心特色之一是其集成的比较基因组学工作流程，该流程结合了多种证据线索（如序列同源性、共线性以及基于坐标的 lift-over），以实现稳健的基因 ID 对应和直系同源关系评估。我们通过比较两个主要的拟南芥（Arabidopsis thaliana）基因组注释（TAIR10 与 Araport11），展示了 AEGIS 的实用性，成功识别并定量分析了基因分裂与融合等复杂结构变化。AEGIS 为注释质量控制、特征提取和比较基因组分析提供了一体化解决方案，简化复杂工作流程并提升生物信息学研究的可靠性。该软件为开源项目，以 Python 实现，可在 GitHub、PyPI 上获取，并提供 Docker 容器版本以保障可访问性和可重复性。

## Abstract
The GTF/GFF3 formats are the standard for storing and exchanging genome annotations. However, their flexibility often results in inconsistent and poorly formatted files across different sources, creating a major bottleneck for downstream bioinformatics analyses. Here, we present Annotation Extraction and Genomic Integration Suite (AEGIS), a comprehensive and user-friendly command-line toolkit designed to parse, validate and standardise genome annotation files. AEGIS robustly corrects common structural and formatting errors, ensuring interoperability with downstream tools. Beyond standardisation, the suite provides advanced modules for analysis, such as flexible sequence extraction (e.g. genes, CDS, proteins) with isoform handling, customisable promoter region definitions and targeted DNA motif searches. A key feature of AEGIS is its integrated workflow for comparative genomics, which combines multiple lines of evidence (i.e., sequence homology, synteny and coordinate-based lift-overs) to enable a robust gene ID correspondence and orthology assessment. We demonstrate the utility of AEGIS by comparing two major Arabidopsis thaliana annotations (TAIR10 vs. Araport11), successfully identifying and quantifying complex structural changes such as gene splits and fusions. AEGIS provides a unified solution for annotation quality control, feature extraction and comparative genomic analysis, simplifying complex workflows and enhancing reliability in bioinformatic research. The software is open-source, implemented in Python and is available on GitHub, PyPI, and as a Docker container to ensure accessibility and reproducibility.

---

## 论文详细总结（自动生成）

# AEGIS：注释提取与基因组整合资源 — 论文总结

## 一、研究动机与背景

- **问题背景**：  
  当前广泛使用的基因组注释文件格式为 **GTF**（Gene Transfer Format）和 **GFF3**（General Feature Format Version 3），它们是存储和交换基因注释数据的主流标准。然而，GFF3 格式的灵活性导致了不同数据库或分析软件生成的文件之间存在显著的不一致和语法偏差，如字段缺失、标识符不匹配、层级关系错误、相同生物学实体使用不同标记符号等。
  
- **主要困境**：  
  这种非标准化使得注释文件难以直接被下游分析工具解析，造成：
  - 解析错误和工具崩溃；
  - 序列提取或统计计算的偏差；
  - 跨版本或跨物种比较时结构不兼容；
  - 用户需编写大量自定义脚本以适配特定文件。

- **研究目的**：  
  为解决上述问题，作者开发了 **AEGIS（Annotation Extraction and Genomic Integration Suite）**，一个集 **注释文件解析、验证、标准化、特征提取及比较基因组学分析** 于一体的命令行工具。

---

## 二、方法论与技术核心

- **总体设计**：  
  AEGIS 是基于 **Python** 实现的模块化命令行工具套件，既可独立运行，也可作为 **Python 函数库** 嵌入自定义分析流程。  
  系统划分为三个层级：
  1. **文件预处理与标准化模块**：格式转换、语法校验、错误修正；
  2. **注释分析模块**：序列提取、统计报告、特征汇总；
  3. **比较与整合模块**：结构重叠检测与直系同源基因识别。

- **关键模块与算法逻辑：**

  1. **tidy / reformat**：  
     - 自动识别输入文件格式（GTF 或 GFF3）；  
     - 检查并纠正标签不匹配、坐标错误、相位（phase）计算异常等；
     - 若缺少子特征（如 UTR/exon），可自动补全；
     - 支持不同 exon 表达风格的互换输出。

  2. **merge / prune / subset**：  
     - 多文件合并时自动避免 ID 冲突；
     - 通过坐标重叠阈值去除冗余；
     - 支持按 ID 列表删除部分基因或生成小型测试集。

  3. **extract**：  
     - 可抽取基因、CDS、蛋白或启动子等序列；  
     - 提供多种异构体处理模式：  
       - *main*（最长 CDS 为代表）、*all*（所有转录本）、*unique*（全基因组去重）、*unique per gene*；  
     - 支持多种启动子定义方式（TSS 上游固定长度、ATG 上游区段或混合模式）。

  4. **overlap**（重叠分析算法）：  
     - 逐级比较 **gene / exon / CDS** 层次的空间重叠；
     - 构建层级评分系统（0–11 分），依据 CDS→exon→gene 层次依次计算；
     - 针对互为父子结构缺失的注释，智能回退到可比层级；
     - 结果可量化为“结构一致性分数”，用于版本间模型对齐。

  5. **orthology（直系同源分析工作流）**：  
     集成四类互补证据源：
     - **序列同源比对**（DIAMOND RBH/RBBH）；
     - **共线性分析**（JCVI/MCscan）；
     - **坐标 lift-over 与结构重叠验证**（Liftoff、LiftOn）；
     - **跨物种正交聚类**（OrthoFinder）。  
     最终汇总为一张包含置信度分级的同源基因表（高/中/低），可筛选高置信度组用于系统发育比较。

---

## 三、实验设计

- **数据与场景**：
  1. **同物种版本比较（拟南芥）**：  
     - 比较 TAIR10 与 Araport11 两个主流注释版本；
     - 目标：检测基因结构一致、分裂和融合情况。  
     - 使用 overlap 模块量化结构重叠，生成基因对应表。
  
  2. **跨物种比较（拟南芥–番茄–葡萄）**：  
     - 注释版本：Araport11、ITAG4.0、Vitis v5.1；
     - 组合 orthology 工具运行，计算每对物种间的直系同源基因；
     - 对比单独工具（RBH、MCscan、OrthoFinder、LiftOff）与融合结果表现。

- **Benchmark 对比**：
  - 在计算性能方面，对比 **AGAT**（现有主流注释工具包）；
  - 测试任务包括：
    - GFF 清理（tidy）；
    - GTF 转换；
    - 蛋白序列提取；
  - 使用三种规模基因组：*Chlamydomonas reinhardtii*（小）、*Arabidopsis thaliana*（中）、*Homo sapiens*（大）。

---

## 四、资源与算力

- **计算资源**：
  - 使用工作站配置：**Intel Core i9-10900 CPU、32 GB 内存**；
  - 所有性能测试通过 **Docker 容器**实现，未使用 GPU；
  - 未提及训练模型或大规模分布式计算，主要关注命令行任务性能。

---

## 五、实验数量与充分性

- **实验覆盖：**
  - 核心功能实验：9 个主要命令模块均在不同场景测试；
  - 注释比较实验：1 份物种内版本比较 + 1 份跨物种比较；
  - 性能评估：3 个基因组 × 3 项任务 × 2 套工具（AEGIS vs. AGAT）；
  - 对比实验：不同 orthology 工具组合与交集分析（UpSet 图表示）。
- **充分性与客观性**：  
  覆盖多种规模、格式、来源的注释文件；对比工具为公认主流（AGAT、OrthoFinder等）；采用容器统一环境以保公平。实验设计合理且复现性较高。

---

## 六、主要结论与发现

1. **文件标准化性能卓越**：  
   AEGIS 能自动识别并修复常见格式错误，大幅提高与外部工具的兼容性。
2. **注释一致性量化分析**：  
   在 TAIR10 与 Araport11 比较中，高分一致基因达 31,733 条；成功检测出基因“分裂”和“合并”等变动。
3. **跨物种直系同源关系拓展**：  
   AEGIS 综合四类证据后获得的直系同源基因数显著多于任一单独工具；如番茄–葡萄对比的同源基因数提升约 50%。
4. **运行效率高**：  
   比起 AGAT，AEGIS 平均快 **3–6 倍**，尤其在人类基因组处理上提升显著（GTF 转换时间：194 秒 vs. 1101 秒）。
5. **内存管理更优**：  
   达峰快、维持短、任务结束后立即释放资源。

---

## 七、优点与亮点

- **统一化设计**：集成多项常用功能（解析、转换、提取、比较）于同一套 CLI；
- **模块可复用**：Python 面向对象架构，支持开发者自定义流程；
- **强健的错误处理机制**：能修正多层次注释错误，减少人工脚本编写；
- **比较基因组模块创新**：结合 lift-over、同源搜索与共线性分析，提供置信度分层的综合直系同源结果；
- **容器化与可复现性**：完整依赖封装于 Docker 环境；
- **通用性广**：除植物外，适用于动物及其他真核生物注释分析。

---

## 八、不足与局限

- **性能上限受语言限制**：  
  Python 实现虽灵活，但与 C/C++ 工具（如 GenomeTools）相比，理论性能较低；
- **GTF 格式灵活性处理略逊**：  
  与 AGAT 相比，在一些非标准化 GTF 风格兼容性上略显不足；
- **计算资源测试仅限 CPU 环境**：  
  缺乏对高并行体系结构（如 HPC 集群或 GPU）的性能评估；
- **验证物种局限于植物**：  
  主要案例为 *A. thaliana*、*S. lycopersicum* 和 *V. vinifera*，其他生物类群（如哺乳动物或真菌）未展示；
- **未涉及下游功能性验证**：  
  分析结果（如检测到的基因分裂或融合）未进一步结合实验数据进行生物学验证。

---

**（完）**
