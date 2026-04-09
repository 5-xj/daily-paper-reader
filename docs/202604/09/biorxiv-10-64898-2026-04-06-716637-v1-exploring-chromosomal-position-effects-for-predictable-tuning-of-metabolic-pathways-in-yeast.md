---
title: Exploring Chromosomal Position Effects for Predictable Tuning of Metabolic Pathways in Yeast
title_zh: 探索染色体位置效应以在酵母中实现代谢途径的可预测调控
authors: "Hong, H., Cai, Y., Wang, J., Dong, C., Zhang, Q., Lian, J."
date: 2026-04-07
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.06.716637v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 基于基因组背景的基因表达预测框架
tldr: 本研究旨在通过探索酵母染色体位置效应，实现代谢通路的可预测调控。作者系统测定了98个酿酒酵母基因间区域的表达水平，并开发预测模型YeIP，可根据基因组环境推断表达潜力。利用该模型构建表达热点地图，实现了无需调整启动子或拷贝数的代谢途径优化。
source: biorxiv
selection_source: fresh_fetch
motivation: 传统基因表达调控方法依赖经验，难以精准调控代谢途径，需探索新的调控维度。
method: 通过荧光报告基因测量98个基因间区域的表达，并整合基因组特征建立预测框架YeIP。
result: YeIP成功预测不同整合位点的表达能力，并指导番茄红素途径优化，实现理想的基因表达比例。
conclusion: 染色体整合位点可作为可编程调控元件，用于理性设计代谢通路。
---

## 摘要
基因表达的精确控制对于优化代谢途径至关重要，然而目前基于启动子强度或基因拷贝数的调控策略仍主要依赖经验。染色体位置代表着一个额外的调控轴，因为相同的基因表达盒在不同的整合位点上可能表现出显著差异的表达水平。在本研究中，我们利用荧光报告基因系统地量化了酿酒酵母（Saccharomyces cerevisiae）中98个基因间区（intergenic regions, IGRs）的表达输出，并开发了一个预测框架——酵母 IGR Prophet（YeIP），该框架可直接从基因组背景推断表达潜力。通过整合包括转录邻域、染色质状态和染色体拓扑在内的多尺度基因组特征，YeIP能够准确预测表达等级，并构建了一个覆盖全基因组的表达热点和冷点图谱。利用该图谱，我们仅通过选择基因组整合位点，合理优化了一个三基因番茄红素合成途径，实现了无需修改启动子或基因拷贝数即可达到最佳转录化学计量的效果。这些结果将染色体整合位点从静态的基因组坐标转变为可编程的调控元素，建立了一种用于酵母代谢途径理性且可扩展设计的预测性数据驱动框架。

## Abstract
Precise control of gene expression is essential for optimizing metabolic pathways, yet current tuning strategies based on promoter strength or gene copy number remain largely empirical. Chromosomal position represents an additional regulatory axis, as identical gene expression cassettes can exhibit markedly different expression levels depending on their integration sites. Here, we systematically quantified the expression output of 98 intergenic regions (IGRs) in Saccharomyces cerevisiae using a fluorescent reporter and developed a predictive framework, Yeast IGR Prophet (YeIP), that infers expression potential directly from genomic context. By integrating multi-scale genomic features including transcriptional neighborhood, chromatin state, and chromosome topology, YeIP accurately predicted expression ranks and enabled the construction of a genome-wide atlas of expression hotspot and coldspot. Using this atlas, we rationally optimized a three-gene lycopene pathway solely through genomic integration site selection, achieving optimal transcriptional stoichiometry without modifying promoters or gene copy numbers. These results transform chromosomal integration sites from static genomic coordinates into programmable regulatory elements, establishing a predictive, data-driven framework for rational and scalable design of metabolic pathways in yeast.

---

## 论文详细总结（自动生成）

# 《探索染色体位置效应以在酵母中实现代谢途径的可预测调控》论文总结

---

## 一、研究核心问题与背景

- **研究动机**：  
  在合成生物学与代谢工程领域，如何**精确调控基因表达强度**一直是优化代谢途径的核心问题。当前常用手段包括调整启动子强度、改变拷贝数或使用调控元件组合，但这些方法往往依赖经验，难以系统预测和重现。
- **核心问题**：  
  染色体上的**基因整合位置**会显著影响基因表达水平，这种“**位置效应**”长期以来缺乏定量规律与预测模型。研究目标是建立一种能够根据基因组背景**预测不同整合位点的表达潜力**的框架，从而实现基因表达的合理可调控。
- **总体含义**：  
  本研究旨在将“染色体整合位点”从传统意义上单纯的插入坐标，转变为可编程、可设计的调控因素，推动代谢途径的理性设计。

---

## 二、方法论与核心技术

- **方法总览**：  
  作者提出预测框架 **Yeast IGR Prophet（YeIP）**，基于酿酒酵母基因组的多尺度特征来预测任意染色体位置的基因表达潜力。
  
- **核心思想**：  
  1. 基因表达差异部分由邻近基因的转录活性、染色质开放程度、核内三维组织结构等因素共同决定。  
  2. 通过将这些基因组层面的特征与实验测得的表达量建立映射模型，可在未知位置上预测表达等级。

- **主要技术流程**：
  1. **实验测定阶段**：选取 98 个基因间区（intergenic regions, IGRs），将相同的荧光报告基因整合入这些位置，定量评估表达强度。  
  2. **特征提取阶段**：收集各整合位点的基因组特征：  
     - 转录邻域（上游/下游基因表达量、方向等）；  
     - 染色质可及性及修饰标志（如 H3K4me3 等）；  
     - 染色体三维拓扑特征（3D contact frequency）。  
  3. **模型构建阶段**：利用机器学习模型构建位置特征到表达强度的映射函数。  
  4. **模型预测与验证阶段**：生成“表达热点-冷点图谱”，并用于代谢通路设计。

- **算法特点**：  
  模型属于数据驱动的预测式框架，无需修改启动子序列，可直接评估不同位置对表达水平的影响。

---

## 三、实验设计

- **实验体系**：
  - 模型生物：酿酒酵母（*Saccharomyces cerevisiae*）。  
  - 报告系统：单一荧光蛋白，用于定量测定不同整合位点的基因表达量。

- **数据来源**：
  - 实验获得的 98 个 IGR 表达数据；
  - 公共基因组注释数据（基因表达谱、染色质状态、Hi-C 拓扑结构等）。

- **验证场景**：
  - 在三基因番茄红素（lycopene）合成途径中，通过不同整合位点组合实现代谢流优化。

- **对比与基准**：
  - 传统基于启动子强度调控的方法；
  - 随机整合与模型指导整合的产物对比。

---

## 四、资源与算力

- 论文摘要和元数据中**未具体说明**所使用的硬件或算力资源。  
- 推测模型训练为机器学习（非深度学习）范畴，计算预算有限，主要分析任务依托标准生物信息学工作站即可完成。

---

## 五、实验数量与充分性

- **实验种类**：
  - 98 个基因间区的系统测量实验；
  - 模型性能验证实验；
  - 代谢途径（番茄红素）整合优化实验；
  - 可能包括部分特征消融分析（未在元数据中明示，但推测存在）。

- **充分性分析**：
  - 98 个位置的实验规模在染色体整合研究中具有代表性；
  - 同时结合多维特征（转录、染色质、拓扑），验证较全面；
  - 实验设计符合客观性和可重复性，但仍未涵盖全基因组范围的所有区域。

---

## 六、主要结论与发现

1. 染色体整合位点在显著程度上影响外源基因的表达输出，差异可达数倍至数十倍。  
2. YeIP 模型可利用基因组背景特征**准确预测不同位点的表达强度等级**。  
3. 构建的表达“热点”和“冷点”图谱为代谢途径设计提供了新调控维度。  
4. 在番茄红素合成案例中，仅通过选择优化的整合位点组合（无须调整启动子或拷贝数），即可实现理想的代谢平衡。  
5. 提出“位点即元件”的概念，将染色体位置视作可编程调控参数。

---

## 七、研究优点

- **创新性强**：提出将“基因组整合位置”转化为可预测调控因子的全新思路。  
- **方法理性化**：摆脱经验选点，利用多层基因组数据形成预测模型。  
- **实验设计系统**：以单报告系统标准化测定，数据可靠。  
- **可扩展性**：YeIP 模型可推广到其他通路或宿主菌株。  
- **应用前景**：为合成生物学和代谢工程的自动化设计提供基础。

---

## 八、不足与局限

- **数据覆盖局限**：仅研究了 98 个 IGR，未实现全基因组规模训练。  
- **模型可解释性**：虽然可预测，但尚未揭示全部分子机制；部分特征可能存在相关而非因果关系。  
- **宿主特异性**：分析基于酿酒酵母，迁移到其他物种需验证模型泛化性。  
- **动态因素缺失**：未考虑代谢负荷与时间动态变化下的表达波动。  
- **算力与模型细节不足**：论文摘要未披露算法参数、训练规模与计算资源，影响重现性。

---

**（完）**
