---
title: Dissecting oligogenic and polygenic indirect genetic effects through the lens of neighbor genotypic identity
title_zh: 通过邻居基因型身份视角解析寡基因与多基因间接遗传效应
authors: "Sato, Y., Hamazaki, K."
date: 2026-04-03
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.31.715746v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 间接遗传效应的基因组预测和全基因组关联研究
tldr: 该研究关注个体表型受邻体基因型影响的间接遗传效应问题，提出利用Ising模型的多核混合模型统一分析寡基因与多基因间接效应。通过模拟和在杨树、苹果树及葡萄藤中的应用发现该方法能揭示群体内竞争关系与相关遗传变异，为群体性状遗传解析提供新工具。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-31-715746-v1/fig-001.webp\", \"caption\": \"Figures 528\", \"page\": 19, \"index\": 1, \"width\": 852, \"height\": 594}]"
motivation: 个体表型受邻体基因型影响，但现有方法难以统一解析直接与间接遗传效应。
method: 研究引入一个多核混合模型，结合Ising模型，将寡基因与多基因的间接遗传效应统一到同一框架中。
result: 模拟显示新模型性能与旧模型相当且能推断DGEs与IGEs的权衡，并在苹果树中发现竞争相关遗传变异。
conclusion: 该研究为群体性状的遗传架构解析提供了一种有效工具，统一分析直接和间接遗传效应。
---

## 摘要
个体表型常常依赖于群体中其他个体的基因型。这类现象被称为间接遗传效应（indirect genetic effects, IGEs），并通过数量遗传学模型与直接遗传效应（direct genetic effects, DGEs）区分开来。近年来，研究人员利用高分辨率的多态性数据开展了IGEs的基因组预测（genomic prediction, GP）和全基因组关联研究（genome-wide association study, GWAS），但统一的方法仍较为匮乏。本研究将多基因与寡基因IGEs进行整合，采用包含两个随机效应且仅有一个协方差参数的多核混合模型（multi-kernel mixed model）。在此实现的基础上，我们借助铁磁学中的伊辛模型（Ising model）来简化位点层面和背景层面的IGEs，分别用于GWAS和GP。模拟结果表明，尽管先前模型与本模型性能相似，本模型能够推断DGEs与IGEs之间的权衡关系。将该方法应用于三种木本植物后，我们在白杨和苹果树中发现了基因型间竞争的证据，而在爬山葡萄中证据有限。基于GWAS分析，我们在苹果树干生长中检测到与竞争性IGEs显著相关的变异位点。本研究为IGEs的GWAS/GP提供了一种灵活实现方法，从而为解析群体表现的遗传结构提供了有效工具。

## Abstract
Individual phenotypes often depend on the genotypes of other individuals within a group. These phenomena are termed  indirect genetic effects (IGEs) and have been distinguished from direct genetic effects (DGEs) using quantitative genetic models. Recent studies have utilized high-resolution polymorphism data to enable genomic prediction (GP) and genome-wide association study (GWAS) of IGEs, but unified methods remain limited. Here we integrate polygenic and oligogenic IGEs using a multi-kernel mixed model incorporating two random effects with a single covariance parameter. Underlying this implementation, the Ising model of ferromagnetics enabled us to simplify locus-wise and background IGEs for GWAS and GP, respectively. Our simulations demonstrated that, while the previous and present models exhibited similar performance, the present model can infer a trade-off between DGEs and IGEs. By applying this method to three species of woody plants, we found evidence for intergenotypic competition in aspen and apple trees, but limited evidence in climbing grapevines. Based on GWAS, we also detected significant variants associated with the competitive IGEs on the apple trunk growth. Our study offers a flexible implementation for GWAS/GP of IGEs, thereby providing an effective tool to dissect the genetic architecture of group performance.

---

## 论文详细总结（自动生成）

# 通过邻居基因型身份视角解析寡基因与多基因间接遗传效应 —— 中文结构化总结

## 一、研究核心问题与整体意义

- **核心问题**：个体的表型往往不仅由自身基因型（直接遗传效应, DGE）决定，还受到邻近个体基因型（间接遗传效应, IGE）的影响。尽管已有数理遗传模型可区分DGE与IGE，但目前缺乏一个能够**同时处理多基因（polygenic）与寡基因（oligogenic）水平的统一框架**。
- **研究动机**：  
  - 传统IGE模型在群体中解析邻体效应时，要么忽略位点层次的遗传结构，要么缺乏灵活的统计实现；
  - 在植物中，尤其是固定生长的个体（如树木），邻体基因型的空间互动显著且可测；
  - 需要一种既能进行**全基因组关联分析（GWAS）**、又能进行**基因组预测（GP）**的统一模型，以解析基因型间竞争与群体性状之间的遗传机制。
- **总体目标**：构建一个“多核混合模型（multi-kernel mixed model）”，通过整合伊辛模型（Ising model）的邻体相互作用机制，实现对**寡基因和多基因IGEs的统一表征**。

---

## 二、方法论与核心技术

### 1. 基本思想

- 研究提出了一个**基于邻体基因型的多核混合模型**，整合：
  - **寡基因效应（位点级，固定效应）**；
  - **多基因效应（背景级，随机效应）**；
  - 并在这两种效应之间引入一个**协方差参数（ρ_DGE,IGE）**，捕捉直接与间接效应之间的线性相关关系。

### 2. 数学框架（文字说明）

- 模型表达为：

  \[
  y = Xβ + Z u + e
  \]

  其中随机效应向量 \( u \) 服从多元正态分布：

  \[
  \begin{pmatrix} u_D \\ u_I \end{pmatrix} \sim MVN(0, 
  \begin{pmatrix}
  σ_D^2 K_D & ρ_{DI} σ_D σ_I K_{12} \\
  ρ_{DI} σ_D σ_I K_{21} & σ_I^2 K_I
  \end{pmatrix})
  \)

  - \( K_D \)：直接遗传效应的亲缘矩阵；
  - \( K_I \)：邻体间接效应的关系矩阵（由邻居基因型相似度计算）；
  - \( ρ_{DI} \)：捕捉DGE与IGE的遗传协方差；
  - \( 𝛽_{DGE}, 𝛽_{IGE} \)：位点层面的固定效应（对应GWAS回归系数）。

- 为描述个体间相互作用，研究类比伊辛模型（Ising model）：邻近个体的等位基因相似度被视为“磁矩排列”，符号化地刻画**等位基因趋同或对立带来的促进或竞争效应**。

### 3. 实现与算法

- 采用 **RAINBOWR 算法** 进行方差组分优化，通过权重 \(w_D + w_I = 1\) 自动平衡直接与间接效应；
- 引入**单一协方差参数**实现同时建模 DGEs、IGEs 及其交互；
- GWAS 使用**似然比检验（LRT）**比较包含与不包含目标SNP的模型；
- 方差组分估计使用 **REML + 近似正定矩阵处理**（nearPD），保证数值稳定性。

---

## 三、实验设计与数据集

### 1. 仿真试验（Benchmark）

- **目的**：验证方差组分估计与GWAS / GP性能；
- **数据**：基于SLiM模拟的2,000代×三染色体×2,000个体的群体；
- **实验变量**：DGE–IGE协方差 \(ρ = −0.6, −0.3, 0, 0.3, 0.6\)；
- **指标**：
  - 参数估计误差（MAE）；
  - 基因组预测准确性（R²、MAE）；
  - GWAS检测能力（ROC曲线与AUC）。

### 2. 实际生物数据应用

| 物种 | 数据量 | 主要性状 | 数据来源 | 发现 |
|------|---------|-----------|-----------|------|
| **白杨 (Populus tremuloides)** | ~800个体、17万SNP | 生长/防御性状 | WisAsp项目 | 晚期生长阶段出现负DGE–IGE协方差，指示竞争效应 |
| **苹果 (Malus × domestica)** | ~2万个体、28万SNP | 花期、干径、生长量 | REFPOP欧洲多点试验 | 在干增量上发现显著负协方差及两个竞争相关SNP |
| **葡萄 (Vitis vinifera)** | ~3,600个体、9万SNP | 产量与代谢物 | INNOVINE项目 | 竞争效应弱或不存在，示例对照种 |

### 3. 对比模型

- 与**原始Neighbor GWAS模型**及**不含协方差参数的版本**进行对比；
- 测试新模型在有/无 ρ_DGE,IGE 时的预测与检测性能。

---

## 四、资源与算力

- 计算资源使用说明：
  - 使用 **东京大学人类基因组中心（HGC Shirokane）**的计算集群；
  - 明确提到使用该中心资源，但**未说明GPU型号、数量或训练耗时**；
  - 算法实现与数据分析全部通过 **R语言包 RAINBOWR / rNeighborGWAS / gaston** 完成；
  - 无深度学习训练环节，资源消耗相对较低。

---

## 五、实验数量与充分性

- **仿真实验**：30次独立重复 × 5组协方差参数；
- **真实数据分析**：3个物种 × 至少30个性状 × 多年度 × 多地点；
- **统计检验**：
  - 协方差参数显著性基于LRT；
  - GWAS多重检验使用**FDR控制（<0.05）**；
- **充分性评估**：
  - 仿真实验覆盖正/负/零协方差情形，验证模型鲁棒性；
  - 多物种、多环境数据保证了结果的普遍性；
  - 对比分析较完整，评价体系客观。

---

## 六、主要结论与发现

1. **模型验证结果**  
   - 模拟显示：模型能准确估计方差组分与协方差参数，预测效果与原模型相当；
   - 当DGE与IGE协方差为正时，新模型预测力略优；
   - 在负协方差时，预测精度下降，但仍维持稳定性。
2. **实际应用发现**  
   - 杨树与苹果树表现出**负DGE–IGE协方差**，即个体生长越快，对邻体抑制越强，符合群体竞争；
   - 葡萄藤未检测到明显负协方差，表明攀缘生长形态减弱了竞争；
   - 苹果树第7号染色体上发现了两个**显著竞争性IGE位点**（与生长QTL区重叠，候选基因为蛋白激酶与MYB转录因子）。
3. **理论意义**：  
   - 揭示了群体内“个体表现–邻体影响”的遗传权衡；
   - 提供统一框架链接进化频率依赖选择模型与数量遗传学。

---

## 七、优点

- **方法创新性**：首次将伊辛模型与多核混合模型结合，捕捉空间基因型相互作用；
- **统一框架**：在一个模型中同时实现GWAS与GP分析；
- **参数解释性强**：ρ参数直观反映个体与群体表现间的遗传权衡；
- **应用广泛性**：既适用于林木群落，也可延展至畜牧群体；
- **开源可复现**：完整代码在GitHub与Zenodo公开，配套R包“rNeighborLMM”。

---

## 八、不足与局限

- **估计稳定性**：当DGE–IGE协方差为负时，矩阵半正定性问题需近似处理（可能导致偏差）；
- **计算细节**：缺少GPU/CPU配置、运行时间，可重复性信息略有限；
- **生物解释性**：位点注释及因果机制仍停留在推测层面；
- **空间尺度敏感性**：模型假设邻体范围固定（最近邻），未充分探讨不同距离权重下的鲁棒性；
- **实验证据分布不均**：葡萄数据未显著检测竞争效应，提示模型在特定生态情况下灵敏度受限。

---

**（完）**
