---
title: Inferring somatic mutation dynamics from genomic variation across branches within long-lived tropical trees
title_zh: 从长寿热带树木分枝间的基因组变异推断体细胞突变动力学
authors: "Tomimoto, S., Satake, A."
date: 2026-04-04
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.02.716038v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 树木体细胞突变动力学和基因组变异的数学模型
tldr: 本研究通过建立数学模型，从四种东南亚长寿热带树种的基因组分支差异中推断体细胞突变的动态过程，揭示了茎尖分生组织中干细胞动态及其对体细胞遗传漂变和突变率的影响，为理解树木遗传镶嵌结构提供了新视角。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-716038-v1/fig-001.webp\", \"caption\": \"Figures 792\", \"page\": 34, \"index\": 1, \"width\": 863, \"height\": 447}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-716038-v1/fig-002.webp\", \"caption\": \"Table 2. Topological congruence between phylogenetic and physical trees 862\", \"page\": 42, \"index\": 2, \"width\": 935, \"height\": 290}]"
motivation: 传统研究仅描述树木体细胞突变的静态模式，缺乏对动态积累过程的解析。
method: 研究构建数学模型，结合树枝尖端基因组数据，对干细胞替代和突变率进行参数估计与随机模拟。
result: 模型分析和实证数据表明，枝条伸长及分枝过程中的干细胞谱系替代导致适度体细胞遗传漂变，并使突变率估计略低于以往结果。
conclusion: 研究揭示了树木长期生长中干细胞动态塑造体细胞突变积累的机制。
---

## 摘要
树木在其漫长的生命过程中不断积累体细胞突变，从而导致不同分枝之间出现遗传镶嵌现象。尽管近期的基因组学研究已经量化了这些突变，但大多仅限于描述静态的变异模式。在本研究中，我们建立了一个数学模型，从对四株生长于东南亚热带雨林中占优势的龙脑香科（Dipterocarpaceae）树木获得的快照式基因组数据中，推断出体细胞突变累积的动态过程。该模型聚焦于枝顶分生组织（shoot apical meristems, SAMs）之间的遗传差异，并在枝条伸长与分枝过程中显式地纳入了SAM内干细胞的动态，从而使我们能够量化由干细胞谱系替换引起的体细胞遗传漂变。通过将模型预测与龙脑香科树木的实测数据进行比较，我们估计了控制干细胞动态与体细胞突变率的关键参数。结果表明，枝条的伸长与分枝过程都会导致干细胞谱系的替换，从而产生中等程度的体细胞遗传漂变。考虑干细胞动态后，所得突变率估计值略低于忽略这些过程的先前方法。利用所估计的参数，我们进一步进行了随机模拟，以预测体细胞突变的模式，包括一些在取样树中未直接观测到的特征，如体细胞突变系统发育与物理结构之间的偶然偏离。总体而言，我们的建模框架揭示了热带树木内部遗传镶嵌形成的机制，并揭示了其长期生长及体细胞突变积累过程中干细胞动态的作用。

## Abstract
Trees accumulate somatic mutations throughout their long lifespan, resulting in genetic mosaicism among branches. While recent genomic studies quantified these mutations, they were largely limited to describing static patterns of variation. In this study, we developed a mathematical model to infer the dynamic processes of somatic mutation accumulation from snapshot genomic data obtained from four tropical trees (Dipterocarpaceae), which dominate tropical rain forests in Southeast Asia. Our model focus on genetic differences between shoot apical meristems (SAMs) at branch tips and explicitly incorporate stem cell dynamics within SAMs during shoot elongation and branching, enabling us to quantify somatic genetic drift arising from stem cell lineage replacement. By comparing model predictions with empirical data from Dipterocarpaceae trees, we estimated key parameters governing stem cell dynamics and somatic mutation rates. Our results indicate that both shoot elongation and branching involve replacement of stem cell lineages, leading to a moderate degree of somatic genetic drift. Accounting for stem cell dynamics resulted in slightly lower mutation rate estimates than previous approaches that ignored these processes. Using the estimated parameters, we further performed stochastic simulations to predict patterns of somatic mutations, including features not directly observed in the sampled trees, such as occasional deviations of somatic mutation phylogenies from physical architecture. Together, our modeling framework provides insights into how genetic mosaicism is shaped within tropical trees and reveals the stem cell dynamics underlying their long-term growth and accumulation of somatic mutations. (236 words)

Highlights- We built mathematical models to predict the genetic differences between branch tips by somatic mutations.
- The model considers the varying dynamics of stem cells in shoot meristem during shoot elongation and branching.
- We compared the model prediction with empirical data from tropical trees, Dipterocarpaceae, and estimated the dynamics of stem cells and mutation rate.
- Somatic mutation dynamics were shaped by somatic genetic drift arising from stem cell lineage replacement during shoot elongation and branching.
- Accounting for stem cell dynamics led to slightly smaller estimates of mutation rates compared with previous estimates that ignored the dynamics.
- Our models offer insights into how genetic variability is shaped in the tropical trees and the stem cell dynamics underlying their long-term growth.

---

## 论文详细总结（自动生成）

# 从长寿热带树木分枝间的基因组变异推断体细胞突变动力学 - 深度总结

---

## 一、核心问题与研究背景

- **研究动机**：  
  长寿树木在数百年乃至更长的生命周期中持续积累体细胞突变，导致其体内形成复杂的**遗传镶嵌结构（genetic mosaicism）**。然而，现有研究多停留在静态测量阶段，仅观察分枝间的基因组差异，而缺乏对这些突变**动态产生过程和干细胞层面机制**的建模理解。

- **核心科学问题**：  
  如何根据不同枝条间的基因组变异模式，**反推出体细胞突变的动态过程及其在干细胞层面上的演化规律**？  
  作者认为，理解这一过程不仅揭示树木长期生长中的组织遗传漂变机制，也对植物进化和基因稳定性研究具有启发作用。

---

## 二、方法论：模型设计与原理

- **总体思路**：  
  建立一个数学模型，描述树木在生长过程中茎尖分生组织（Shoot Apical Meristem, SAM）内干细胞的动态，包括：
  - 干细胞分裂；
  - 干细胞谱系替换（lineage replacement）；
  - 突变在分枝结构中的传播与积累。

- **关键技术特征**：
  1. **显式建模干细胞动态**：  
     不再假设干细胞群体静态不变，而是考虑在枝条伸长和分枝过程中干细胞的丢失、替换和竞争。
  2. **体细胞遗传漂变量化**：  
     使用分枝间基因组差异估计“有效干细胞群体大小”与漂变强度。
  3. **参数估计与似然匹配**：  
     通过将模型预测的分枝间遗传差异分布与实际测序数据对比，反推出突变率（μ）、干细胞替换速率（λ）等关键参数。
  4. **随机模拟（Stochastic Simulation）**：  
     对参数空间进行蒙特卡洛式模拟，生成可能的突变谱系树并与物理分枝拓扑进行比较。

- **公式框架（描述性）**：
  - 模型核心由一组随机过程方程组成：  
    \[
    P_{t+\Delta t} = P_t + \mu \Delta t - \lambda(P_t - \bar{P})
    \]
    其中 \( \mu \) 表示突变引入速率，\( \lambda \) 描述干细胞谱系替代率。
  - 枝条间遗传差异以突变积累距离（genetic distance）表征，独立分枝的系统发育拓扑与物理拓扑间的偏离被用于评估漂变影响。

---

## 三、实验设计

- **研究对象与数据来源**：
  - 取样自东南亚热带雨林的**四株龙脑香科（Dipterocarpaceae）树木**；
  - 每棵树从多个枝条末端（branch tip）采集样品，进行全基因组重测序；
  - 获得的体细胞变异被用于估算枝条间差异谱。

- **比较与验证**：
  1. **模型预测 vs. 实测基因组差异**：  
     对比突变分布、分枝拓扑一致性及遗传距离矩阵。
  2. **与不考虑干细胞动态的模型对比**：  
     验证干细胞替代机制对突变率估计的影响。

- **Benchmark 方向**：  
  无通用基准数据集，验证依赖于实测树木样本的**分枝—基因组对应关系**。

---

## 四、资源与算力

- 文中未报告使用的计算资源细节。  
  根据研究性质推测，主要计算任务为**参数估计与随机模拟**，可能可在普通 CPU 集群或高性能工作站环境下完成。  
  **未涉及 GPU 加速或深度学习框架**。

---

## 五、实验数量与充分性

- **实验组次**：
  - 四个不同树体样本；
  - 各样本多分枝比对；
  - 参数扫描与蒙特卡洛随机模拟；
  - 对比含 / 不含干细胞动态的模型。  

- **充分性与客观性**：
  - 针对单一科属（龙脑香科）树种的代表性较高；
  - 然而样本数量（n=4）有限，对跨物种普适性结论的外推仍需谨慎；
  - 参数估计通过拟合与仿真交叉验证，具有较强内部一致性。

---

## 六、主要结论与发现

1. **干细胞动态塑造突变积累模式**：  
   在枝条伸长和分枝过程中，干细胞谱系会被替换，从而引发中等强度的体细胞遗传漂变。
2. **突变率下调修正**：  
   纳入干细胞替代后，估计的体细胞突变率略低于忽略动态过程的传统方法。
3. **遗传漂变导致的系统发育偏离**：  
   体细胞突变谱系树不总与物理分枝树一致，表明内部谱系演化存在随机性。
4. **模型可预测未观测特征**：  
   经由随机模拟能推演潜在突变模式，为理解树木遗传镶嵌提供机制性解释。

---

## 七、优点与亮点

- ✅ **将群体遗传学思想引入植物个体生长模型**；
- ✅ **显式描述干细胞动态与突变过程的耦合机制**；
- ✅ **数学建模与实证数据结合紧密，具备可重复推断框架**；
- ✅ **为解释长寿植物的体细胞遗传漂变提供量化理论基础**。

---

## 八、不足与局限

- ❌ **样本规模有限**：仅分析四株树，缺乏跨生态系统验证；
- ❌ **数据为静态快照**：虽建模为动态过程，但真实时间序列缺失；
- ❌ **突变检测精度依赖测序深度与误差率**，潜在存在低频变异漏检；
- ❌ **模型假设简化**：未考虑环境因子、表观遗传变化或组织修复过程；
- ❌ **计算资源未披露**，可重复性透明度有限。

---

**（完）**
