---
title: "BioWorldModel: a single architecture predicts phenotype from genotype across four kingdoms of life"
title_zh: BioWorldModel：一种能够跨越生命四界，从基因型预测表型的统一架构
authors: "Shaik, K. H. B., Sahu, A."
date: 2026-04-01
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.27.714912v2.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 跨界预测基因型到表型的关联
tldr: 该研究提出BioWorldModel，一种统一架构可跨细菌、真菌、动物和植物预测由基因型到表型的转化。通过模拟生物过程（调控、表达、通路、细胞）和环境动态，该模型大幅超越传统静态方法，展示了过程驱动的基因表型预测新范式。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714912-v2/fig-001.webp\", \"caption\": \"Figure 2: Comprehensive evaluation across all four kingdoms. (Row A) Point prediction accuracy: BioWorldModel outperforms Ridge (GBLUP) and Random Forest baselines in all organisms. E. coli : mean r = 0.678 (+207% vs ridge); S. cerevisiae: r = 0.915 (+167%); D. melanogaster : r = 0.499 (+760%); O. sativa: r = 0.995 (+49%). (Row B) Calibration quality: Expected calibration error (ECE) varies across organisms. Rice shows excellent calibration (ECE = 0.054), Drosophila moderate (ECE = 0.192), while bacteria and yeast require improvement (ECE > 0.47). Prediction interval coverage plotted against target coverage with perfect calibration shown as diagonal. (Row C) Uncertainty decomposition: Epistemic (model) vs aleatoric (irreducible) uncertainty. Epistemic-error correlation indicates model’s awareness of its limitations: rice r = 0.652, Drosophila r = 0.110, E. coli r = 0.078, yeast r = 0.060. Epistemic/aleatoric ratio shows relative contribution of model uncertainty.\", \"page\": 7, \"index\": 1, \"width\": 904, \"height\": 799}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714912-v2/fig-002.webp\", \"caption\": \"Figure 4: Uncertainty decomposition across all four organisms. (Row A) Epistemic (model) vs aleatoric (irreducible) uncertainty in stacked bars for each organism. Epistemic/aleatoric ratio varies: yeast shows highest ratio (0.777, model-dominated), E. coli lowest (0.235, noisedominated), rice and Drosophila intermediate (0.604 and 0.142 respectively). (Row B) Epistemic uncertainty correlates with prediction error in all organisms, demonstrating model awareness of its limitations. Strongest correlation in rice (r = 0.652), moderate in Drosophila (r = 0.110), weaker in E. coli (r = 0.078) and yeast (r = 0.060). Scatter plots show simulated data with fitted regression lines. High epistemic uncertainty reliably indicates regions where predictions are less trustworthy.\", \"page\": 10, \"index\": 2, \"width\": 905, \"height\": 602}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714912-v2/fig-003.webp\", \"caption\": \"Figure 3: Cross-kingdom performance and generalization. (A) Sample size effects: Performance vs test sample count. Small-sample strength demonstrated in Drosophila (N=41, r=0.499). Saturation approaches in rice (N=83, r=0.995). (B) Trait dimensionality: Performance vs number of traits. High-dimensional regime (E. coli : 214 traits, D. melanogaster : 199 traits) shows biological structure stabilizes learning. (C) Covariance structure recovery: Correlation between predicted and empirical trait covariances. Rice shows strongest recovery (r=0.594), E. coli moderate (r=0.387), suggesting learned pleiotropy structure captures real biology.\", \"page\": 8, \"index\": 3, \"width\": 903, \"height\": 716}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714912-v2/fig-004.webp\", \"caption\": \"Table 3: Extended Data Table 1: Ablation study on E. coli confirms each component contributes.\", \"page\": 19, \"index\": 4, \"width\": 818, \"height\": 361}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714912-v2/fig-005.webp\", \"caption\": \"Table 2: Probabilistic quality varies across organisms.\", \"page\": 9, \"index\": 5, \"width\": 940, \"height\": 226}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714912-v2/fig-006.webp\", \"caption\": \"Table 4: Extended Data Table 2: Comprehensive baseline comparison across all four organisms. We evaluated five classical methods on the same train/test splits. Ridge regression (GBLUP) and Random Forest are shown in main text as representative baselines; BayesB (ElasticNet proxy) and Lasso provide additional benchmarks. All baselines trained per-trait with hyperparameter tuning. BioWorldModel trained once per organism with fixed architecture, predicting all traits jointly.\", \"page\": 20, \"index\": 6, \"width\": 960, \"height\": 860}]"
motivation: 现有模型无法有效刻画不同环境下基因型与表型的动态关系。
method: 采用包含四个生物过程层的深度架构，并结合状态条件注意机制学习基因动态表达。
result: 模型在细菌、酵母、果蝇和水稻等四大生物类群上均显著优于基准方法，验证了其跨界泛化能力。
conclusion: 以生物过程为核心的动态建模能够更准确地捕捉基因到表型的关系。
---

## 摘要
相同的基因组在不同条件下会产生不同的表型——然而，以往的预测模型通常对基因型进行一次编码，并将每个性状独立处理。本文表明，将表型生成表示为一个动态的生物过程，可以显著提高在细菌、真菌、动物和植物中的预测准确性。

BioWorldModel 学习生物体如何解读自己的基因组：冻结的基因嵌入（物种上下文）在个体变异的调制下，通过四个生物过程层（调控 [->] 表达 [->] 代谢通路 [->] 细胞）传递，这些层会随环境和时间产生响应。一个依赖状态的注意力机制重新读取这种动态表示，从而预测完整的多变量性状分布。

在无需修改的情况下，该架构在 214 个细菌生长性状上达到平均相关系数 r = 0.678（比岭回归高 207%）、在 35 个酵母适应度性状上 r = 0.915（高 167%）、在少样本条件下的 199 个果蝇表型上 r = 0.499（高 760%），以及在 36 个水稻性状上 r = 0.995（高 49%）。消融实验表明，性能提升来自对生物过程的建模，而非模型规模。当神经架构表示生物生成表型的过程，而非仅仅关联基因型与结果时，它能够捕捉到静态方法所忽略的生物规律。

## Abstract
The same genome produces different phenotypes in different conditions--yet predictive models encode genotype once and treat each trait independently. Here we show that representing phenotype generation as a dynamic biological process transforms predictive accuracy across bacteria, fungi, animals and plants.

BioWorldModel learns how organisms interpret their genome: frozen gene embeddings (species context) modulated by individual variation pass through four biological process layers (regulation [-&gt;] expression [-&gt;] pathway [-&gt;] cellular) that respond to environment and time. A state-conditioned attention mechanism rereads this dynamic representation, predicting full multivariate trait distributions.

Without modification, the architecture achieves mean correlation r = 0.678 on 214 bacterial growth traits (207% better than ridge regression), r = 0.915 on 35 yeast fitness traits (167% better), r = 0.499 on 199 fly phenotypes in small-sample regime (760% better), and r = 0.995 on 36 rice traits (49% better). Ablations confirm that modeling biological process--not model size--drives performance. When neural architectures represent how biology generates phenotype rather than merely associating genotype with outcome, they capture what static methods miss.

---

## 论文详细总结（自动生成）

# BioWorldModel：跨界动态生物过程建模的统一框架论文总结

---

## 一、核心问题与研究背景

- **问题定位**：传统的基因型到表型预测方法（如岭回归、随机森林、普通深度网络）通常将基因型一次编码、每个表型独立预测，忽视了生物表型受环境、时间和细胞状态等动态因素影响的事实。  
- **核心动机**：同一基因组在不同环境或时间下可表现出不同表型，这种动态解释过程反映了真正的生物机制，而非噪声。作者假设，如果神经架构能够显式地模拟这一“生物生成过程”，则预测性能和生物合理性都将显著提升。  
- **总体目标**：建立一个统一架构，能够跨越细菌、真菌、动物和植物四大类群，在无需模型结构调整的情况下，从基因型预测表型分布。

---

## 二、方法论与关键技术细节

### 2.1 核心思想

- **思想概述**：BioWorldModel 不只是建立静态映射，而是将表型生成过程建模为“动态生物解释”过程。  
- **总体结构**：  
  - 基因嵌入分为两部分：物种层面的“冻结”演化知识（Evo2 基因嵌入）与个体层面的变异调制。  
  - 经四级“生物过程栈”（BioProcessStack）逐层转换，模拟调控 → 表达 → 通路 → 细胞级响应。  
  - 状态条件注意机制（ReadGate）根据环境与生理状态重新“读取”基因表达。  
  - 结合四通道生物记忆模块（稳态、发育、事件、种群），实现跨时间状态整合。  
  - 输出为多变量性状分布（完整协方差矩阵），而非单一数值预测。

### 2.2 关键公式与机制

- **个体基因表示**：  
  \( h_i = h^{ref}_i + \delta h_i \)，其中 \( h^{ref}_i \) 为固定的 Evo2 嵌入，\( \delta h_i \) 为根据 SNP 特征（六维：杂合数、缺失数等）经门控投影计算的调制项。

- **环境调控过程层**：  
  每个生物过程层通过 Sigmoid 门控对环境和时间信号响应：  
  \( z_{out} = z_{in} + gate(e_t, t) \odot f_{layer}(z_{in}) \)。

- **条件注意机制（ReadGate）**：  
  根据当前环境、状态和记忆构造查询向量，对基因表达向量进行加权检索，并通过 sigmoid 门控整合，模拟“生物上下文解读”。

- **多通道记忆模块**：捕捉不同时间尺度的信息  
  - CA：稳态（指数平均）  
  - CB：发育阶段累积  
  - CC：突发事件（Gumbel-softmax）  
  - CD：种群基线偏差  

- **训练与目标函数**：多变量高斯负对数似然（NLL），Cholesky 参数化协方差以保证数值稳定性。

---

## 三、实验设计与对比基准

### 3.1 数据集与场景

覆盖四大类群、共四个数据集：

| 生物体 | 界 | 特征数 (SNPs) | 表型数 | 样本数 (测试集) | 表型类型 |
| ------- | ---- | --------------- | -------- | ---------------- | ------------ |
| *E. coli* | 细菌 | 3,221 | 214 | 136 | 化学环境下的生长 |
| *S. cerevisiae* | 真菌 | 83,343 | 35 | 195 | 酵母在不同条件下的适应度 |
| *D. melanogaster* | 动物 | 34,006 | 199 | 41 | 果蝇形态与生理性状 |
| *O. sativa* | 植物 | 35,404 | 36 | 83 | 水稻产量与农艺性状 |

### 3.2 对比基线

- 岭回归（GBLUP）
- 随机森林
- BayesB (ElasticNet代理)
- Lasso
- 均值基线  
→ 均为**每个表型独立训练**的基线模型。

---

## 四、资源与算力

- 使用 **4 × NVIDIA H100 GPU (80GB)**，通过 **JAX + Haiku 框架**实现。  
- 有效批大小 512（梯度累积方式），训练步骤各类群约在 100–2000 次步之间。  
- 训练时间：E. coli 约 12 小时；酵母 2 天；果蝇 3 小时；水稻 4 天。  
- 硬件和时间资源都在文中明确说明，算力配置较高，尤其用于跨界统一模型训练。  

---

## 五、实验数量与充分性

- **主实验**：四大类群，各自独立训练一次，共四组主实验。  
- **消融实验**（共五组）：验证每个关键模块的重要性。  
  - 去除生物过程层、去除条件注意、仅对角协方差、三者同时去除、取消 Evo2 基因嵌入。  
- **对比实验**：五种经典基线算法 × 四分类群。  
- **附加评价**：校准性（ECE、PICP）、不确定性拆分（epistemic/aleatoric）、协方差恢复（pleiotropy捕获）。  
→ 实验覆盖全面，指标多样，设计较为客观；同一数据划分和超参数条件下对比，具备公平性。

---

## 六、主要结论与发现

- 在四大类群中均显著超越基线方法：  
  - E. coli：r=0.678（+207%）  
  - Yeast：r=0.915（+167%）  
  - Fly：r=0.499（+760%，在小样本情境下尤为突出）  
  - Rice：r=0.995（+49%）。  
- 生物结构驱动性能：消融实验表明性能提升并非来自模型容量，而是来自生物过程与条件性结构。  
- 模型能学习**表型间协同变异（pleiotropy）**，在高维性状下也能稳定预测。  
- 在数据稀疏场景下（N有限）表现优越，显示结构学习对低样本的补偿能力。  

---

## 七、方法与实验亮点

- **架构创新**：显式模拟生物层级（调控→表达→通路→细胞），实现环境响应的动态建模。  
- **跨物种泛化能力**：四界统一架构、无需针对物种调参，体现生物结构的通用性。  
- **融合进化知识**：利用 Evo2 基因嵌入冻结演化语义，提高对物种功能的先验理解。  
- **多变量输出**：输出完整协方差矩阵，可解释多性状共变关系。  
- **不确定性与校准分析**：区分 epistemic / aleatoric 不确定性并测试校准程度，增强预测可信度。  

---

## 八、不足与局限

- **校准性能不一**：部分类群存在过/欠信问题（如酵母过信、细菌欠信）。  
- **时间动态未实测**：模型具备时序结构，但目前数据均为单时间点，未验证动态预测能力。  
- **跨群体迁移尚未验证**：未展示种群间零样本迁移实验。  
- **数据规模差异显著**：不同类群样本数差距较大，可能影响泛化比较的统计稳健性。  
- **实用场景未覆盖**：仍基于公共数据集，尚未触及真实育种或医学应用验证。  

---

**（完）**
