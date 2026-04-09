---
title: Laboratory yeast crosses reveal limited epistasis in the genetic basis of complex traits
title_zh: 实验室酵母杂交揭示复杂性状遗传基础中上位性作用有限
authors: "Gupta, M., Holmes, C. M., Belousova, J., Gopalakrishnan, S., Rego-Costa, A., Desai, M. M."
date: 2026-04-06
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.04.716439v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 绘制复杂性状的遗传基础并量化上位性效应
tldr: 本研究通过构建带有条形码的酵母基因型群体，涵盖广泛的遗传相关性，系统量化了七种复杂性状的上位效应。结果发现，上位性在这些性状中的作用较小，说明复杂性状的遗传主要由加性效应解释。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-04-716439-v1/fig-001.webp\", \"caption\": \"Figure 1. We built a panel of barcoded segregants from an F1 cross and by back-crossing these segregants to their parents. A. Construction of the segregant panel involved mating barcoded haploid F1 segregants with either the BY or RM parent, sporulating the diploids and selecting for haploids with the barcode maintained. B. Comparison of putatively inferred genome of a single segregant (sequenced at 35x coverage), the inferred genome from data downsampled to 1.5x coverage (minimum threshold for panel) and 0.1x for comparison. Full panel errors in genotyping can be seen in Fig. S1. C. Fraction of RM alleles in each of the two backcrosses and the original F1 cross. D. Repeatability of phenotypic measurements in all environments combined. See Fig. S2 for analogous plots for each environment individually.\", \"page\": 5, \"index\": 1, \"width\": 713, \"height\": 504}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-04-716439-v1/fig-002.webp\", \"caption\": \"Figure 2. A. Predicted and experimentally measured fitness show slight systematic deviations from the 1:1 line (dashed black). The density-weighted best-fit line (red) differs marginally in slope; the offset reflects an inference artifact and differences in mean population fitness. Within each condition, the segregant with median fitness was set to zero, with all other values shifted accordingly. Normalized RMSE to the best-fit line is reported. B. Residuals between measured fitness values and fitness values predicted by the epistatic model in a particular fitness bin (calculated as the mean of the bin). If a given bin has fewer than 5 points, it is faded out. The gray dashed line shows the null distribution, computed by shuffling strain labels within predicted-fitness bins over 1,000 iterations (F1-R shown; shuffled BY-BX and RM-BX are equivalent). GuCl and YNB show systematic differences in model performance between the different genetic backgrounds. Since each bin has been sliced by predicted fitness value, this accounts for the systematic differences in the fitness values of BY-BX and RM-BX. C. The linear model explains the majority of variance in phenotypic covariance as a function of a kinship coefficient, across all conditions with higher-order terms contributing minimally, as reported by the incremental variance explained R2 inc. Any bin with less than 100 pairs of points was excluded from plotting and fitting.\", \"page\": 6, \"index\": 2, \"width\": 469, \"height\": 897}]"
motivation: 研究旨在探讨基因间互作（上位性）在复杂性状遗传基础中的作用程度。
method: 研究者利用带有条形码的酵母基因型群体，涵盖广泛的遗传相关性，以定量分析七种复杂性状中的上位效应。
result: 结果显示，上位效应对这些复杂性状的遗传基础贡献有限。
conclusion: 尽管可能存在未被检测出的上位效应，但其对表型变异的贡献在该系统中较小。
---

## 摘要
由于不同基因座之间存在上位性相互作用，对复杂性状的遗传基础进行定位十分复杂。尽管分子遗传学的研究鉴定出了许多特定的基因相互作用，定量性状的统计分析却常常得出加性（非上位性）模型能够解释绝大部分的可遗传变异。然而，这些结论通常受限于较狭窄的遗传相关性范围（例如，双亲交配或环状交配的 F1 后代）。在本研究中，我们使用带有条形码的酿酒酵母（Saccharomyces cerevisiae）基因型面板，该面板涵盖广泛的遗传相关性范围，用以定量分析上位性对七种复杂性状遗传结构的影响。我们发现，上位性对这些性状的遗传基础的贡献有限。研究结果表明，标准酵母杂交中检测到的上位性之外的相互作用可能存在，但在这些系统中，它对表型变异的贡献很小。

## Abstract
Mapping the genetic basis of complex traits is complicated by the presence of epistatic interactions between loci. While work in molecular genetics identifies numerous specific genetic interactions, statistical analyses of quantitative traits frequently conclude that additive (nonepistatic) models explain most heritable variation. However, these conclusions are typically limited by the narrow range of genetic relatedness(e.g. in F1 offspring of a biparental or circular cross). Here, we use a barcoded panel of Saccharomyces cerevisiae genotypes with a broad range of relatedness to quantify the effects of epistasis on the genetic architecture of seven complex traits. We find limited contributions of epistasis to the genetic basis of these traits. These results indicate that epistasis beyond that detected in standard yeast crosses may exist, yet it contributes little to phenotypic variance in these systems.

---

## 论文详细总结（自动生成）

# 实验室酵母杂交揭示复杂性状遗传基础中上位性作用有限 — 深度总结

---

## 一、研究核心问题与背景

- **研究动机：**  
  遗传学中一个长期存在的核心问题是：复杂性状（如生长速率、抗逆性等）的表型变异究竟由加性效应（各基因独立贡献）还是上位性效应（基因间互作）主导？  
  传统的定量遗传学研究常发现，加性模型能解释大部分的遗传方差，而上位性效应虽在分子层面被广泛观察到，但在统计上对群体表型差异的贡献有限。

- **理论背景：**  
  以往研究多基于双亲交配（F1 代）或有限遗传背景的系统，因此难以充分捕捉不同基因组合间的互作效应。  
  本研究旨在利用一个**广泛覆盖遗传相关性的酵母群体系统**，全面定量分析上位性在七种复杂性状中的作用。

---

## 二、方法论：核心思想与关键技术

- **核心思想：**  
  通过构建**带有条形码的酿酒酵母（Saccharomyces cerevisiae）基因型群体**，使每个分离株（segregant）都能被唯一标识，在实验中可高通量追踪其表型变化，从而系统估计基因型间相互作用对性状的贡献。

- **关键实验设计流程：**
  1. **杂交与回交：**  
     以标准实验酵母 BY 株和野生 RM 株为双亲，生成 F1 单倍体后再与双亲分别回交，以扩大遗传多样性。
  2. **条形码标记：**  
     在每个分离株基因组中插入唯一条形码，用于在混合培养中监测其适应度变化。
  3. **低深度测序与基因分型校正：**  
     采用低覆盖率测序（~1.5x–35x）鉴定各分离株的基因组成，并校验分型误差。
  4. **表型测量与建模：**  
     在多种培养条件下测定菌株生长速率，比较**线性加性模型**与**包含上位性项的模型**对表型方差的解释度差异。

- **统计分析思路：**
  - 使用广义线性模型（GLM）估计每个位点和位点间互作对表型的贡献；
  - 通过拟合优度 (R²) 和残差分布检验，量化上位项对总体方差解释的增量；
  - 计算表型协方差与遗传亲缘系数 (kinship coefficient) 的函数关系，以评估模型的解释充分性。

---

## 三、实验设计与对比

- **数据来源与对象：**  
  实验使用自建的**酵母分离株群体**，由 F1 及其回交后代组成，涵盖不同程度的遗传相关性。
  
- **研究的表型性状：**  
  针对七种环境条件下的复杂性状（如不同培养基、代谢应激等）进行测量。

- **模型比较：**
  - 基线模型：**加性模型**（无互作项）
  - 对照模型：**包含上位性项的交互模型**
  - 对比的核心指标：方差解释率 (R²)、预测误差 (RMSE)、以及预测残差分布的系统性偏差。

- **Benchmark 与验证：**  
  并非标准机器学习 benchmark，而是通过重复实验和遗传群体建模的稳健性检验进行验证。不同遗传背景组合（BY 回交、RM 回交等）作为天然 benchmark。

---

## 四、资源与算力

- 论文中**未明确提到 GPU、CPU 或计算资源**的具体情况。  
  实验主要依赖高通量敲入和测序平台，以及后续的统计建模，推测使用的算力以 CPU 统计分析为主，而非大规模机器学习训练。

---

## 五、实验数量与充分性

- **实验规模：**
  - 构建多个酵母群体（F1 交配与双向回交群体）；
  - 在**七种不同环境条件**下测定适应度；
  - 对每个条件进行多轮重复测量（文中提及高重复性验证）。
  
- **分析层面：**
  - 包括对各遗传区间间的关联与上位性统计分析；
  - 残差再抽样和模型性能对照实验。

- **充分性评价：**
  - 数据点数量和遗传背景的多样性相对以往研究显著增加；
  - 七个性状的实验覆盖度较高，验证充分；
  - 然而研究仍仅限于酵母模型系统，外推到多细胞生物时需谨慎。

---

## 六、主要结论与发现

- 上位性效应对表型和性状遗传变异的**总体贡献有限**；
- 多数表型方差可由加性遗传模型解释；
- 尽管在特定遗传背景或特定环境下可观测到上位性效应，但这些效应对总体遗传架构的影响较小；
- 表型协方差主要由亲缘相关性解释，表明复杂性状的遗传结构在群体层面趋于线性可加。

---

## 七、研究亮点与优点

- **方法创新性：**
  - 使用条形码技术构建了大规模、可追踪的基因型面板，兼顾实验可控性与数据量丰富性；
  - 通过广泛相关性样本扩展了典型 F1 交配思路。

- **实验设计的科学性：**
  - 同时考虑不同遗传距离、不同环境、不同重复实验；
  - 系统比较加性与上位性模型的统计表现，结果稳健。

- **对遗传学理论的贡献：**
  - 以实验证据支持“复杂性状遗传方差主要由加性效应贡献”的理论；
  - 为解释定量性状的遗传基础提供了更广泛的实证数据。

---

## 八、不足与局限

- **生物学层面限制：**
  - 仅使用单一物种（酿酒酵母），跨物种普适性有限；
  - 研究集中于实验室可控条件，与自然群体的生态复杂性存在差距。

- **统计与实验限制：**
  - 上位性效应较弱时可能被测量噪声淹没；
  - 低覆盖率测序（1.5x）虽节省成本，但可能影响位点精确分型；
  - 模型主要解析二阶互作，较高阶（>3 基因）互作未深入探索。

- **应用层面：**
  - 无法直接推广至人类或多细胞生物复杂性状；
  - 未考虑表观遗传调控或基因表达动态变化。

---

**（完）**
