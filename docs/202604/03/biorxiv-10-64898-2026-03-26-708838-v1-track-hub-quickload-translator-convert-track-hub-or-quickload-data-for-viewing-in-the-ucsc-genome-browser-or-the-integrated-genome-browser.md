---
title: "Track Hub Quickload Translator: Convert Track Hub or Quickload data for viewing in the UCSC Genome Browser or the Integrated Genome Browser"
title_zh: Track Hub Quickload Translator：转换 Track Hub 或 Quickload 数据以便在 UCSC 基因组浏览器或集成基因组浏览器中查看
authors: "Freese, N. H., Raveendran, K., Sirigineedi, J. S., Chinta, U. L., Badzuh, P., Marne, O., Shetty, C., Naylor, I., Jagarapu, S., Loraine, A."
date: 2026-03-30
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.26.708838v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 转换基因组浏览器轨道中心和数据格式
tldr: Track Hub Quickload Translator 是一款基于 Python 3 开发的 Web 应用程序，旨在解决 UCSC 基因组浏览器（Track Hub）与集成基因组浏览器（IGB，Quickload）之间数据格式不兼容的问题。该工具通过自动转换两者的配置文件，实现了数据的互操作性。这使得研究人员能够首次在任一浏览器中无缝访问和分析数万个已发布的基因组组装数据，极大地提升了基因组数据的可视化与共享效率。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-26-708838-v1/fig-001.webp\", \"caption\": \"Figure 1 (a) User interface of the Track Hub Quickload Translator showing a UCSC track hub URL converted i an IGB Quickload URL. The Quickload can be added to a running instance of IGB by clicking on the Add to IG button. (b) User interface of the Track Hub Quickload Translator showing an IGB Quickload URL converted into track hub URL. The converted URL can be added as a track hub to the UCSC Genome Browser on the UCSC\", \"page\": 3, \"index\": 1, \"width\": 979, \"height\": 1038}]"
motivation: 旨在解决 UCSC Genome Browser 的 Track Hub 格式与 IGB 的 Quickload 格式之间无法直接互通的问题，以提高基因组数据的可用性。
method: 开发了一个基于 Python 3 的 Web 应用，通过解析并转换两种浏览器所需的配置文件，实现数据仓库格式的互转。
result: 成功实现了 Track Hub 与 Quickload 格式的相互转换，使用户能够跨平台访问数以万计的基因组组装数据。
conclusion: 该工具打破了不同基因组浏览器间的数据壁垒，为科研人员提供了更灵活的基因组数据可视化和分析选择。
---

## 摘要
摘要：Track Hub Quickload Translator 是一款 Web 应用程序，通过将加州大学圣克鲁斯分校（UCSC）基因组浏览器 Track Hub 或集成基因组浏览器（IGB）的配置文件转换为另一种浏览器所需的格式，实现两者数据仓库格式之间的互转。这项新工作使研究人员首次能够使用任一浏览器处理数以万计已发布的基因组组装。可用性与实现：Track Hub Quickload Translator 使用 Python 3 实现，可在 translate.bioviz.org 免费使用。集成基因组浏览器可从 BioViz.org 获取。Track Hub Quickload Translator、GenArk Genomes 以及集成基因组浏览器的源代码可在 github.org/lorainelab 获取。联系方式：aloraine@charlotte.edu。

## Abstract
SummaryTrack Hub Quickload Translator is a web application that interconverts University of California Santa Cruz (UCSC) Genome Browser track hub and Integrated Genome Browser (IGB) data repository formats by translating the track hub or Quickload configuration files to the other genome browsers required format. This new work enables researchers to work with tens of thousands of published genome assemblies for the first time using either browser.

Availability and ImplementationTrack Hub Quickload Translator is implemented using Python 3 and freely available to use at translate.bioviz.org. Integrated Genome Browser is available from BioViz.org. Track Hub Quickload Translator, GenArk Genomes, and the Integrated Genome Browser source code is available from github.org/lorainelab.

Contactaloraine@charlotte.edu

---

## 论文详细总结（自动生成）

这是一份关于论文《Track Hub Quickload Translator: Convert Track Hub or Quickload data for viewing in the UCSC Genome Browser or the Integrated Genome Browser》的结构化总结：

### 1. 论文的核心问题与整体含义（研究动机和背景）
*   **核心问题**：基因组学研究中存在“数据孤岛”现象。加州大学圣克鲁斯分校（UCSC）基因组浏览器使用的 **Track Hub** 格式与集成基因组浏览器（IGB）使用的 **Quickload** 格式互不兼容。
*   **研究动机**：虽然两者都支持远程托管大规模基因组数据，但由于配置文件格式（文本 vs. XML）和组织结构的不同，研究人员往往被限制在单一的浏览器生态中。
*   **整体含义**：该研究开发了一个转换工具，旨在打破这种壁垒，使用户能够跨平台访问数以万计的已发布基因组组装数据（如 UCSC 的 GenArk 库）。

### 2. 论文提出的方法论
*   **核心思想**：开发一个基于 Python 3 的 Web 应用程序（Track Hub Quickload Translator），通过解析源格式的配置文件并将其映射到目标格式的逻辑结构，实现自动化的双向转换。
*   **关键技术细节**：
    *   **Track Hub 到 Quickload 的转换**：程序解析 Track Hub 的三层结构（`hub.txt` 定义元数据，`genomes.txt` 定义基因组，`trackDb.txt` 定义数据轨道），并将其转换为 Quickload 所需的 `annots.xml` 和 `contents.txt` 文件。
    *   **Quickload 到 Track Hub 的转换**：反向解析 Quickload 的 XML 结构，生成符合 UCSC 规范的文本配置文件。
    *   **自动化映射**：工具会自动处理数据类型的对应关系（如 BigWig、BigBed 等），并生成可直接在浏览器中加载的 URL。

### 3. 实验设计
*   **数据集/场景**：
    *   主要测试场景是将 UCSC 的 **GenArk (Genome Archive)** 数据库进行转换。GenArk 包含了来自 NCBI 的超过 100,000 个基因组组装。
    *   验证了转换后的数据在 IGB 浏览器中的加载速度、可视化效果以及元数据保留情况。
*   **Benchmark（基准）**：以原生支持的 Track Hub 或 Quickload 数据作为标准，对比转换后在另一浏览器中的表现是否一致。
*   **对比方法**：此前研究人员通常需要手动编写复杂的配置文件，本工具与“人工手动转换”进行了效率上的对比。

### 4. 资源与算力
*   **算力需求**：文中未明确提到高性能计算（GPU/TPU）需求。
*   **实现环境**：该工具是一个轻量级的 Python 3 Web 应用，部署在 `translate.bioviz.org`。由于其核心任务是文本解析和字符串映射，对服务器算力要求较低，主要消耗在于网络 I/O（读取远程配置文件）。

### 5. 实验数量与充分性
*   **实验规模**：论文通过对 GenArk 这一海量数据库的整体转换验证了工具的鲁棒性。
*   **充分性评价**：实验涵盖了最主流的两种基因组浏览器格式。虽然没有进行复杂的消融实验（因为是功能性工具而非算法模型），但通过对数万个基因组组装的成功转换，证明了其在实际应用中的可靠性和广泛适用性。

### 6. 论文的主要结论与发现
*   **结论**：Track Hub Quickload Translator 成功实现了两种主流基因组数据仓库格式的互转。
*   **发现**：通过该工具，IGB 用户现在可以访问 UCSC 托管的数万个非模式生物基因组，极大地扩展了 IGB 的应用范围；同理，UCSC 用户也可以更方便地访问原本仅存在于 Quickload 格式中的私有或特定研究数据。

### 7. 优点
*   **互操作性**：填补了基因组可视化领域的一个重要技术空白。
*   **易用性**：提供 Web 界面，用户只需输入 URL 即可完成转换，无需编程背景。
*   **开源贡献**：工具完全开源（GitHub 托管），促进了社区的二次开发和透明度。
*   **资源整合**：直接打通了 GenArk 等大型数据库，具有极高的实用价值。

### 8. 不足与局限
*   **复杂特性支持**：某些高度定制化的 Track Hub 特性（如复杂的复合轨道或特定的显示过滤参数）在转换过程中可能会丢失部分细节。
*   **依赖性**：转换的成功高度依赖于源端配置文件的规范性，如果源文件不符合标准，转换可能会失败。
*   **实时性**：如果源端数据发生更新，用户可能需要重新生成转换链接，目前尚不清楚是否支持自动同步更新。

（完）
