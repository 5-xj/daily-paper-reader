---
title: "BioWorldModel: a single architecture predictsphenotype from genotype across four kingdoms of life"
title_zh: BioWorldModel：一种在生命四大界中可从基因型预测表型的统一架构
authors: "Shaik, K. H. B., Sahu, A."
date: 2026-03-31
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.27.714912v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 跨界预测基因型到表型的映射
tldr: 本文提出BioWorldModel，一种统一架构可从基因型动态预测表型，通过模拟生物调控、表达、代谢途径和细胞层过程，捕捉环境与时间的影响，在多个生命界的表型预测上取得显著提升。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714912-v1/fig-001.webp\", \"caption\": \"Figure 2: Comprehensive evaluation across all four kingdoms. (Row A) Point prediction accuracy: BioWorldModel outperforms Ridge (GBLUP) and Random Forest baselines in all organisms. E. coli : mean r = 0.678 (+207% vs ridge); S. cerevisiae: r = 0.915 (+167%); D. melanogaster : r = 0.499 (+760%); O. sativa: r = 0.995 (+49%). (Row B) Calibration quality: Expected calibration error (ECE) varies across organisms. Rice shows excellent calibration (ECE = 0.054), Drosophila moderate (ECE = 0.192), while bacteria and yeast require improvement (ECE > 0.47). Prediction interval coverage plotted against target coverage with perfect calibration shown as diagonal. (Row C) Uncertainty decomposition: Epistemic (model) vs aleatoric (irreducible) uncertainty. Epistemic-error correlation indicates model’s awareness of its limitations: rice r = 0.652, Drosophila r = 0.110, E. coli r = 0.078, yeast r = 0.060. Epistemic/aleatoric ratio shows relative contribution of model uncertainty.\", \"page\": 7, \"index\": 1, \"width\": 904, \"height\": 799}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714912-v1/fig-002.webp\", \"caption\": \"Figure 4: Uncertainty decomposition across all four organisms. (Row A) Epistemic (model) vs aleatoric (irreducible) uncertainty in stacked bars for each organism. Epistemic/aleatoric ratio varies: yeast shows highest ratio (0.777, model-dominated), E. coli lowest (0.235, noisedominated), rice and Drosophila intermediate (0.604 and 0.142 respectively). (Row B) Epistemic uncertainty correlates with prediction error in all organisms, demonstrating model awareness of its limitations. Strongest correlation in rice (r = 0.652), moderate in Drosophila (r = 0.110), weaker in E. coli (r = 0.078) and yeast (r = 0.060). Scatter plots show simulated data with fitted regression lines. High epistemic uncertainty reliably indicates regions where predictions are less trustworthy.\", \"page\": 10, \"index\": 2, \"width\": 905, \"height\": 602}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714912-v1/fig-003.webp\", \"caption\": \"Figure 3: Cross-kingdom performance and generalization. (A) Sample size effects: Performance vs test sample count. Small-sample strength demonstrated in Drosophila (N=41, r=0.499). Saturation approaches in rice (N=83, r=0.995). (B) Trait dimensionality: Performance vs number of traits. High-dimensional regime (E. coli : 214 traits, D. melanogaster : 199 traits) shows biological structure stabilizes learning. (C) Covariance structure recovery: Correlation between predicted and empirical trait covariances. Rice shows strongest recovery (r=0.594), E. coli moderate (r=0.387), suggesting learned pleiotropy structure captures real biology.\", \"page\": 8, \"index\": 3, \"width\": 903, \"height\": 716}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714912-v1/fig-004.webp\", \"caption\": \"Table 3: Extended Data Table 1: Ablation study on E. coli confirms each component contributes.\", \"page\": 19, \"index\": 4, \"width\": 818, \"height\": 361}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714912-v1/fig-005.webp\", \"caption\": \"Table 2: Probabilistic quality varies across organisms.\", \"page\": 9, \"index\": 5, \"width\": 940, \"height\": 226}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714912-v1/fig-006.webp\", \"caption\": \"Table 4: Extended Data Table 2: Comprehensive baseline comparison across all four organisms. We evaluated five classical methods on the same train/test splits. Ridge regression (GBLUP) and Random Forest are shown in main text as representative baselines; BayesB (ElasticNet proxy) and Lasso provide additional benchmarks. All baselines trained per-trait with hyperparameter tuning. BioWorldModel trained once per organism with fixed architecture, predicting all traits jointly.\", \"page\": 20, \"index\": 6, \"width\": 960, \"height\": 860}]"
motivation: 现有模型通常静态映射基因到表型，忽视生物过程的动态性，导致预测准确性不足。
method: 模型采用冻结的基因嵌入并经生物过程层和状态注意机制生成动态表型表征。
result: 在细菌、真菌、动物和植物四大类生命体系中，模型在不同表型预测任务上均显著超越传统方法。
conclusion: 动态模拟生物过程的神经架构能更准确地揭示基因与表型间的关系。
---

## 摘要
相同的基因组在不同条件下会产生不同的表型——然而，现有的预测模型通常对基型进行一次编码，并将每个性状独立处理。本文展示了，将表型生成过程表征为动态生物过程，可以显著提升对细菌、真菌、动物和植物的预测准确性。

BioWorldModel 学习生物体如何解读其基因组：冻结的基因嵌入（代表物种背景）经由个体差异调制，通过四个生物过程层（调控 [→] 表达 [→] 代谢通路 [→] 细胞）传播，这些层对环境与时间产生响应。一个状态条件的注意力机制在此动态表征上进行再次读取，从而预测完整的多变量性状分布。

在无需修改的情况下，该架构在 214 项细菌生长性状上达到了平均相关系数 r = 0.678（比岭回归高 207%），在 35 项酵母适应度性状上达到 r = 0.915（高 167%），在小样本条件下的 199 项果蝇表型上为 r = 0.499（高 760%），以及在 36 项水稻性状上为 r = 0.995（高 49%）。消融实验表明，性能提升源于对生物过程的建模，而非模型规模。当神经网络架构表征生物如何生成表型，而不仅仅是将基因型与结果关联时，它们能够捕捉到静态方法所忽视的信息。

## Abstract
The same genome produces different phenotypes in different conditions--yet predictive models encode genotype once and treat each trait independently. Here we show that representing phenotype generation as a dynamic biological process transforms predictive accuracy across bacteria, fungi, animals and plants.

BioWorldModel learns how organisms interpret their genome: frozen gene embeddings (species context) modulated by individual variation pass through four biological process layers (regulation [-&gt;] expression [-&gt;] pathway [-&gt;] cellular) that respond to environment and time. A state-conditioned attention mechanism rereads this dynamic representation, predicting full multivariate trait distributions.

Without modification, the architecture achieves mean correlation r = 0.678 on 214 bacterial growth traits (207% better than ridge regression), r = 0.915 on 35 yeast fitness traits (167% better), r = 0.499 on 199 fly phenotypes in small-sample regime (760% better), and r = 0.995 on 36 rice traits (49% better). Ablations confirm that modeling biological process--not model size--drives performance. When neural architectures represent how biology generates phenotype rather than merely associating genotype with outcome, they capture what static methods miss.

---

## 论文详细总结（自动生成）

# BioWorldModel 论文详细总结

## 一、研究问题与背景

- **核心问题**：目前的基因型-表型预测模型通常将基因型进行一次性静态编码，并为每个表型独立建模。这忽视了表型生成的动态生物学机制，即相同的基因组在不同环境、时间和生理状态下可能表现出截然不同的表型。
- **研究动机**：作者认为，生物体的表型不是基因“解码”的结果，而是基因在特定生物学上下文中被“解读”的结果。因此，若能以神经网络的动态结构模拟这种“基因解释过程”，模型的泛化性能和生物学真实性都有望显著提升。
- **总体目标**：构建一个统一的神经架构，使其能够在细菌、真菌、动物、植物四个生命界中，从基因型预测多变量表型分布，且无需针对每个物种重新设计模型。

---

## 二、方法论与技术细节

### 1. 核心思想
BioWorldModel 将表型生成过程视为**动态的生物解释机制**，而非静态的统计映射。模型模拟了从基因调控到细胞层的四层级生物过程，并在环境与时间条件下动态更新基因表达状态。

### 2. 模型结构与关键组件
四大创新设计：
1. **冻结的进化上下文 + 个体变异调制**  
   - 每个基因由两部分组成：  
     \( h_i^{individual} = h_{ref,i}^{species} + \delta h_i^{variants} \)。  
   - 其中 \( h_{ref,i} \) 为来自 Evo2-7B 基因语言模型的 4096 维嵌入（冻结，不训练），\(\delta h_i\) 为根据个体 SNP 特征学习的扰动。  
   - 表征“基因功能的普遍性”与“个体变异的特异性”。

2. **环境调制的生物过程栈（BioProcessStack）**  
   - 四层结构：调控 (Regulation) → 表达 (Expression) → 通路 (Pathway) → 细胞 (Cellular)。  
   - 各层通过环境与时间条件（\(e_t, t\)）的信号门控残差连接实现动态变化：  
     \(z_{out} = z_{in} + gate(e_t, t) \odot f_{layer}(z_{in})\)。

3. **状态条件化的基因读取（ReadGate）**  
   - 从当前环境、记忆与状态生成查询向量，对基因嵌入进行注意力读取，模拟“在不同状态下解读不同基因”。

4. **四通道生物记忆模块**  
   - 模拟不同时序尺度的生理信息积累：  
     - *CA*：稳态记忆（homeostatic）  
     - *CB*：发育阶段记忆（developmental）  
     - *CC*：突发事件记忆（episodic）  
     - *CD*：群体背景（population）
   - 各通道经门控融合为综合状态 \(m_t\)。

### 3. 输出与优化
- 输出：预测表型的**多变量高斯分布**（均值 + 协方差矩阵），以捕捉基因多效性（pleiotropy）。  
- 协方差结构使用 Cholesky 参数化；优化目标为多变量负对数似然（NLL）。  
- 采用 GRU 动态更新状态，用 **AdamW 优化器** 进行训练。

---

## 三、实验设计

### 1. 数据集与范围
覆盖四个生命界的代表性数据集：
| 物种 | 生命界 | 个体数 (训练/测试) | 特征数 (SNPs/基因) | 表型任务 |
|------|---------|------------------|------------------|-----------|
| *Escherichia coli* | 细菌 | 542 / 136 | 3,221 | 214项化学环境生长性状 |
| *Saccharomyces cerevisiae* | 真菌 | 776 / 195 | 83,343 | 35项适应度性状 |
| *Drosophila melanogaster* | 动物 | 164 / 41 | 34,006 | 199项形态与行为性状 |
| *Oryza sativa* | 植物 | 330 / 83 | 35,404 | 36项农艺性状 |

- 所有表型经标准化处理，训练/测试划分考虑群体结构（通过基因型 PCA 分层）。  
- 模型在四类生物上以相同架构、固定超参数独立训练。

### 2. 对比基线
- **传统方法**：Ridge 回归 (GBLUP)、随机森林 (RF)、Lasso、BayesB（ElasticNet 近似）及均值基线。  
- BioWorldModel 作为统一模型与这些单性状模型对比。

### 3. 消融实验
- 共五个版本用于剖析关键模块贡献：  
  1. 去除 BioProcessStack  
  2. 去除 ReadGate  
  3. 仅预测对角协方差  
  4. 同时去掉上述三项（静态编码器）  
  5. 用 SNP one-hot 替代 Evo2 基因嵌入  
- 对应性能下降 13–25%，验证生物结构建模的必要性。

---

## 四、资源与算力

- **硬件配置**：4 × NVIDIA H100 GPU（80GB显存）。  
- **训练框架**：JAX + Haiku。  
- **训练时间**：E. coli（12小时）、酵母（2天）、果蝇（3小时）、水稻（4天）。  
- **推理时间**：每个个体每时间步 1–3 秒（CPU）。
- 算法批次：有效 batch size 512，梯度累计优化。  
- 作者公开了代码（GitHub 链接将在正式发表后开放）。

---

## 五、实验数量与充分性

- **主实验**：四个生物体系（各一个预测任务）+ 四种基线模型 × 5折验证。  
- **消融实验**：5种结构变体。  
- **总实验量级**：约 20+ 次完整训练与评估（含统计检验、置信区间、NLL、ECE等多指标）。  
- **客观性**：各基线均在相同数据划分与调参条件下运行，保证可比性；BioWorldModel超参数固定未调优，显示泛化性。

---

## 六、主要结论与发现

1. **预测性能显著提升**：  
   - *E. coli*：r = 0.678（比 Ridge 高 207%）  
   - *Yeast*：r = 0.915（高 167%）  
   - *Drosophila*：r = 0.499（高 760%）  
   - *Rice*：r = 0.995（高 49%）
2. **生物过程建模优于模型规模**：消融实验表明性能提升主要源自生物结构层设计，而非参数数量。
3. **模型捕捉到真实的多效性结构**：预测的性状协方差与实测协方差在水稻中达到 r = 0.59。
4. **小样本优势突出**：在果蝇小样本（N = 41）条件下仍能维持显著相关。
5. **模型具备不完全但可解释的校准性能与不确定性感知**。

---

## 七、方法优点与创新亮点

- **统一跨生命界架构**：无须为不同生物重新设计模型，体现广泛生物通用性。
- **生物学启发式结构设计**：四层生物过程栈 + 状态条件化读出，直观映射分子生物学逻辑。
- **利用基础模型知识**：将大型基因语言模型（Evo2-7B）的知识冻结注入，促进低样本学习。
- **多变量建模**：捕捉性状间相关性（pleiotropy），并输出完整协方差矩阵，而非独立预测。
- **结构驱动的泛化能力**：无需调参即在不同生物上保持高性能。
- **透明的不确定性评估**：区分 epistemic / aleatoric 不确定性并与误差显著相关。

---

## 八、不足与局限

- **校准不均一**：在细菌与酵母中预测区间过于自信 (ECE > 0.47)，分布层训练不足。  
- **时间尺度未验证**：尽管设计了递归更新机制，所有实验仍为静态时间点数据，未测试真实的时间序列预测能力。  
- **跨种群迁移未完全验证**：目前仅报告组织内（intra-species）训练-测试结果，跨群体零样本预测尚在进行。  
- **计算成本高**：训练耗时数小时至数天，对算力依赖较大。  
- **解释性仍需深化**：虽具生物启发，但部分模块如记忆门控的生物学意义需要更多实证支持。

---

**（完）**
