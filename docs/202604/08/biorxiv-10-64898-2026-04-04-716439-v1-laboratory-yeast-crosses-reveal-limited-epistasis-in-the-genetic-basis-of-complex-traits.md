---
title: Laboratory yeast crosses reveal limited epistasis in the genetic basis of complex traits
title_zh: 实验室酵母交配揭示复杂性状遗传基础中的有限上位性
authors: "Gupta, M., Holmes, C. M., Belousova, J., Gopalakrishnan, S., Rego-Costa, A., Desai, M. M."
date: 2026-04-06
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.04.716439v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 绘制复杂性状的遗传基础并研究上位性
tldr: 本研究利用带条形码的酵母菌株群体，覆盖广泛的遗传相关性范围，量化上位效应对复杂性状遗传结构的影响，结果显示虽然上位效应存在，但其对表型变异的贡献有限，为理解复杂性状遗传基础提供了证据。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-04-716439-v1/fig-001.webp\", \"caption\": \"Figure 1. We built a panel of barcoded segregants from an F1 cross and by back-crossing these segregants to their parents. A. Construction of the segregant panel involved mating barcoded haploid F1 segregants with either the BY or RM parent, sporulating the diploids and selecting for haploids with the barcode maintained. B. Comparison of putatively inferred genome of a single segregant (sequenced at 35x coverage), the inferred genome from data downsampled to 1.5x coverage (minimum threshold for panel) and 0.1x for comparison. Full panel errors in genotyping can be seen in Fig. S1. C. Fraction of RM alleles in each of the two backcrosses and the original F1 cross. D. Repeatability of phenotypic measurements in all environments combined. See Fig. S2 for analogous plots for each environment individually.\", \"page\": 5, \"index\": 1, \"width\": 713, \"height\": 504}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-04-716439-v1/fig-002.webp\", \"caption\": \"Figure 2. A. Predicted and experimentally measured fitness show slight systematic deviations from the 1:1 line (dashed black). The density-weighted best-fit line (red) differs marginally in slope; the offset reflects an inference artifact and differences in mean population fitness. Within each condition, the segregant with median fitness was set to zero, with all other values shifted accordingly. Normalized RMSE to the best-fit line is reported. B. Residuals between measured fitness values and fitness values predicted by the epistatic model in a particular fitness bin (calculated as the mean of the bin). If a given bin has fewer than 5 points, it is faded out. The gray dashed line shows the null distribution, computed by shuffling strain labels within predicted-fitness bins over 1,000 iterations (F1-R shown; shuffled BY-BX and RM-BX are equivalent). GuCl and YNB show systematic differences in model performance between the different genetic backgrounds. Since each bin has been sliced by predicted fitness value, this accounts for the systematic differences in the fitness values of BY-BX and RM-BX. C. The linear model explains the majority of variance in phenotypic covariance as a function of a kinship coefficient, across all conditions with higher-order terms contributing minimally, as reported by the incremental variance explained R2 inc. Any bin with less than 100 pairs of points was excluded from plotting and fitting.\", \"page\": 6, \"index\": 2, \"width\": 469, \"height\": 897}]"
motivation: 旨在探究复杂性状的遗传基础中上位效应的真实作用。
method: 使用带条形码的酵母基因型组合，分析七种复杂性状的遗传结构及上位效应。
result: 研究发现表明，在七种酵母复杂性状中，基因间的上位效应对表型差异的贡献较小。
conclusion: 尽管存在额外的上位效应，但其在酵母系统中对表型差异的影响微弱。
---

## 摘要
复杂性状的遗传基础解析因位点间的上位性相互作用而变得复杂。尽管分子遗传学研究已识别出许多具体的遗传相互作用，但定量性状的统计分析常常得出这样的结论，即加性（非上位性）模型解释了大部分可遗传变异。然而，这些结论通常受限于狭窄的遗传相关性范围（例如亲本双交或环状交配的 F1 子代）。在本研究中，我们使用了一个带条形码的酿酒酵母（Saccharomyces cerevisiae）基因型面板，其涵盖了广泛的遗传相关性范围，以量化上位性对七种复杂性状遗传结构的影响。我们发现，上位性对这些性状的遗传基础仅有有限的影响。这些结果表明，在标准酵母交配中未检测到的上位性可能存在，但它对这些系统中的表型方差贡献甚微。

## Abstract
Mapping the genetic basis of complex traits is complicated by the presence of epistatic interactions between loci. While work in molecular genetics identifies numerous specific genetic interactions, statistical analyses of quantitative traits frequently conclude that additive (nonepistatic) models explain most heritable variation. However, these conclusions are typically limited by the narrow range of genetic relatedness(e.g. in F1 offspring of a biparental or circular cross). Here, we use a barcoded panel of Saccharomyces cerevisiae genotypes with a broad range of relatedness to quantify the effects of epistasis on the genetic architecture of seven complex traits. We find limited contributions of epistasis to the genetic basis of these traits. These results indicate that epistasis beyond that detected in standard yeast crosses may exist, yet it contributes little to phenotypic variance in these systems.

---

## 论文详细总结（自动生成）

# 实验室酵母交配揭示复杂性状遗传基础中的有限上位性 —— 论文详细总结

---

## 一、研究核心问题与背景

- **核心问题**：复杂性状通常受多基因调控，其中基因间相互作用（上位性，epistasis）可能使遗传结构和表型预测复杂化。  
- **研究背景**：  
  - 分子遗传学大量揭示个体基因间存在显著互作；然而，定量遗传学（QTL 分析）普遍认为大多数性状的可遗传变异主要由“加性效应”解释。  
  - 已有研究的样本通常局限于遗传相关性较窄的 F1 代或有限交配群体，可能低估了上位性的重要性。  
- **研究目标**：通过在更广泛遗传相关性范围内构建酵母群体，重新评估上位性对复杂性状的实际贡献，验证“表型变异主要由加性模型解释”的命题是否仍然成立。

---

## 二、方法论：核心思想与技术路线

- **总体思路**：  
  构建一个带有条形码（barcode）的酿酒酵母（*Saccharomyces cerevisiae*）广谱基因型面板，包括 F1 交配子代及其双向回交个体，通过测定多环境下的生长速率表型来量化上位性效应。
  
- **关键技术流程**：  
  1. **构建群体**：  
     - 基于 BY4741（实验室株）与 RM11-1a（葡萄酒株）交配得到 F1 杂交子代。  
     - 从中选择约 1480 个带条形码的单倍体后代，其中部分个体回交至 BY 或 RM 亲本。  
     - 最终得到三类基因型群体：
       - F1-R（732 个）
       - BY-BX 回交群体（332 个）
       - RM-BX 回交群体（332 个）
  2. **基因型推断**：  
     - 对每个个体进行全基因组测序。  
     - 采用**隐马尔可夫模型（HMM）**根据重组结构推断低覆盖度数据（≥1.5×）的完整基因型，确保基因型的准确性。
  3. **表型测定**：  
     - 在 7 种不同培养条件下测量相对生长速率（包括 YNB、YPD 多温度点、LiAc 与 GuCl）。  
     - 通过条形码测序追踪群体中每个个体的相对丰度变化，结合最大似然估计计算相对适应度（fitness）。
  4. **上位性分析方法**：  
     - **模型预测比较法**：利用先前从 10 万 F1 代推得的线性与双基因互作模型，对新群体进行预测。若存在未捕获的上位性，则模型预测将在新背景下显著失效。  
     - **亲缘关系与表型协方差法（kinship–covariance 分析）**：  
       - 计算基因组哈明距离构建亲缘系数矩阵 \( K_{ij} \)。  
       - 用加权多项式回归估计表型协方差与亲缘关系间的关系。  
       - 若存在显著上位性，关系应呈非线性偏离。  
     - 通过 \( R^2 \) 与增量方差 \( R^2_{\text{inc}} \) 评估非线性贡献。

---

## 三、实验设计与比较基准

- **数据与实验场景**：  
  - 数据：共约 1,480 个单倍体酵母分离株（含 F1 与双向回交个体），每个拥有唯一 DNA 条形码。  
  - 表型：七个生长速率性状，覆盖营养条件与环境胁迫。  
  - 评价指标：预测误差（标准化 RMSE）、拟合优度（\( R^2 \)）、增量方差 \( R^2_{\text{inc}} \)。  

- **对比模型**：  
  - **训练集模型**：基于以往 10 万 F1 个体估计的加性+双基因互作模型。  
  - **验证集**：本研究新构建的 F1-R、BY-BX、RM-BX 群体，用以检验模型泛化性能。  

- **基准参照**：  
  若上位性在不同遗传背景间普遍存在，则 F1 模型在回交群体中表现应明显劣化。反之，若表现稳定，则说明高阶上位性贡献有限。

---

## 四、资源与算力说明

- 文中未明确指出使用的计算硬件（如 GPU/CPU 型号、核数、内存、训练时长等）。  
- 计算任务主要依赖哈佛大学 FASRC Cannon 集群运行基因型推断与大规模条形码序列分析；未报告具体资源数量或耗时。

---

## 五、实验数量与充分性

- **实验量级**：  
  - 表型测量：1480 个个体 × 7 种环境 × 2 次生物重复 ≈ 20,000 次测定。  
  - 分析：  
    - 模型预测对比分析 × 7 环境  
    - 亲缘关系–协方差分析 × 7 环境  
  - 共进行多环境、多背景、多方法统计验证，实验数量充足。  

- **实验充分性与公平性**：  
  - 涵盖了不同遗传多样性（F1、回交至不同亲本）的背景。  
  - 使用统一的表型测量方法和一致的统计分析流程。  
  - 对潜在测量误差进行了重复验证（文中报告表型重复性良好，参见 Fig.1D）。  
  => **整体实验设计较为全面、客观、公平。**

---

## 六、主要结论与研究发现

1. **上位性贡献有限**：  
   - 大多数环境下，加性模型能够解释 >94% 的表型方差；高阶项仅增加 <3% 的解释力。  
2. **模型预测跨群体表现一致**：  
   - 在控制适应度水平后，不同遗传背景（F1 与回交群体）的预测准确度相似。  
3. **局部例外案例**：  
   - GuCl 与 YNB 环境下，高阶上位性交互导致模型预测偏离，提示存在特定条件依赖的上位性。  
4. **总体推论**：  
   - 酿酒酵母的复杂性状遗传结构以加性效应为主，强上位性虽存在但影响微小；  
   - 表型预测的误差更多来自弱相互作用、环境噪声或测量误差，而非系统性高阶上位性。

---

## 七、研究优点与亮点

- **创新的群体设计**：  
  - 通过 F1 与双向回交结合，大幅扩展了遗传相关性的范围，为上位性效应检测提供更广泛背景。
- **定量的多层验证框架**：  
  - 结合预测误差和亲缘–协方差非线性两种独立方法，增强结论稳健性。  
- **高通量条形码测定**：  
  - 条形码追踪可同时测定上千基因型，显著提高了测量效率和统计能力。  
- **明确的统计度量**：  
  - 定量使用 \( R^2_{\text{inc}} \) 评估非线性贡献，提供可重复性强的上位性量化指标。

---

## 八、不足与局限

- **环境局限性**：  
  - 仅包含七种实验室环境，可能无法代表自然或工业条件下的复杂生态情境。  
- **测量维度单一**：  
  - 所测性状仅为生长速率指标，未覆盖代谢或表达层面；上位性可能在其他表型中更显著。  
- **上位性检测深度有限**：  
  - 主要考察双基因互作层级，难以捕获真正高阶（>2 位点）互作的综合效应。  
- **群体规模与多样性**：  
  - 总体样本数（1480）虽丰富但相较自然群体仍有限，难以估计超稀有等位基因或罕见互作效应。
- **资源说明不详**：  
  - 缺乏明确的计算资源与时间成本描述，重现实验可能需额外推测基础设施要求。

---

**（完）**
