---
title: "BioWorldModel: a single architecture predicts phenotype from genotype across four kingdoms of life"
title_zh: BioWorldModel：一种跨越四个生物界的从基因型预测表型的单一架构
authors: "Shaik, K. H. B., Sahu, A."
date: 2026-04-01
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.27.714912v2.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 跨界预测基因型到表型的关联
tldr: BioWorldModel是一个跨物种的表型预测框架，通过模拟从基因组到表型的动态生物过程（调控、表达、通路、细胞层级），实现了对细菌、真菌、动物和植物四大界生物性状的高精度预测。该模型整合了基因变异、环境和时间因素，显著优于传统的静态关联方法，证明了模拟生物生成过程在表型预测中的核心价值。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714912-v2/fig-001.webp\", \"caption\": \"Figure 2: Comprehensive evaluation across all four kingdoms. (Row A) Point prediction accuracy: BioWorldModel outperforms Ridge (GBLUP) and Random Forest baselines in all organisms. E. coli : mean r = 0.678 (+207% vs ridge); S. cerevisiae: r = 0.915 (+167%); D. melanogaster : r = 0.499 (+760%); O. sativa: r = 0.995 (+49%). (Row B) Calibration quality: Expected calibration error (ECE) varies across organisms. Rice shows excellent calibration (ECE = 0.054), Drosophila moderate (ECE = 0.192), while bacteria and yeast require improvement (ECE > 0.47). Prediction interval coverage plotted against target coverage with perfect calibration shown as diagonal. (Row C) Uncertainty decomposition: Epistemic (model) vs aleatoric (irreducible) uncertainty. Epistemic-error correlation indicates model’s awareness of its limitations: rice r = 0.652, Drosophila r = 0.110, E. coli r = 0.078, yeast r = 0.060. Epistemic/aleatoric ratio shows relative contribution of model uncertainty.\", \"page\": 7, \"index\": 1, \"width\": 904, \"height\": 799}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714912-v2/fig-002.webp\", \"caption\": \"Figure 4: Uncertainty decomposition across all four organisms. (Row A) Epistemic (model) vs aleatoric (irreducible) uncertainty in stacked bars for each organism. Epistemic/aleatoric ratio varies: yeast shows highest ratio (0.777, model-dominated), E. coli lowest (0.235, noisedominated), rice and Drosophila intermediate (0.604 and 0.142 respectively). (Row B) Epistemic uncertainty correlates with prediction error in all organisms, demonstrating model awareness of its limitations. Strongest correlation in rice (r = 0.652), moderate in Drosophila (r = 0.110), weaker in E. coli (r = 0.078) and yeast (r = 0.060). Scatter plots show simulated data with fitted regression lines. High epistemic uncertainty reliably indicates regions where predictions are less trustworthy.\", \"page\": 10, \"index\": 2, \"width\": 905, \"height\": 602}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714912-v2/fig-003.webp\", \"caption\": \"Figure 3: Cross-kingdom performance and generalization. (A) Sample size effects: Performance vs test sample count. Small-sample strength demonstrated in Drosophila (N=41, r=0.499). Saturation approaches in rice (N=83, r=0.995). (B) Trait dimensionality: Performance vs number of traits. High-dimensional regime (E. coli : 214 traits, D. melanogaster : 199 traits) shows biological structure stabilizes learning. (C) Covariance structure recovery: Correlation between predicted and empirical trait covariances. Rice shows strongest recovery (r=0.594), E. coli moderate (r=0.387), suggesting learned pleiotropy structure captures real biology.\", \"page\": 8, \"index\": 3, \"width\": 903, \"height\": 716}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714912-v2/fig-004.webp\", \"caption\": \"Table 3: Extended Data Table 1: Ablation study on E. coli confirms each component contributes.\", \"page\": 19, \"index\": 4, \"width\": 818, \"height\": 361}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714912-v2/fig-005.webp\", \"caption\": \"Table 2: Probabilistic quality varies across organisms.\", \"page\": 9, \"index\": 5, \"width\": 940, \"height\": 226}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714912-v2/fig-006.webp\", \"caption\": \"Table 4: Extended Data Table 2: Comprehensive baseline comparison across all four organisms. We evaluated five classical methods on the same train/test splits. Ridge regression (GBLUP) and Random Forest are shown in main text as representative baselines; BayesB (ElasticNet proxy) and Lasso provide additional benchmarks. All baselines trained per-trait with hyperparameter tuning. BioWorldModel trained once per organism with fixed architecture, predicting all traits jointly.\", \"page\": 20, \"index\": 6, \"width\": 960, \"height\": 860}]"
motivation: 传统模型通常将基因型与性状进行静态关联，忽略了环境影响以及生物体从基因到表型的复杂动态生成过程。
method: 设计了包含调控、表达、通路和细胞四个生物过程层的架构，利用状态条件注意力机制处理动态表征以预测多元性状分布。
result: "在细菌、酵母、果蝇和水稻的数百种性状预测中，该模型表现均大幅优于传统方法，相关性提升最高达760%。"
conclusion: 研究证明，模拟生物学产生表型的内在逻辑而非仅进行简单的统计关联，是提升基因型到表型预测准确性的关键。
---

## 摘要
相同的基因组在不同条件下会产生不同的表型，然而现有的预测模型通常仅对基因型进行一次编码，并将每个性状视为相互独立。在本文中，我们展示了将表型生成过程表示为一个动态生物过程，可以显著提升跨细菌、真菌、动物和植物的预测准确性。BioWorldModel 学习生物体如何解读其基因组：由个体变异调制的冻结基因嵌入（物种背景）通过四个响应环境和时间的生物过程层（调控 [->] 表达 [->] 通路 [->] 细胞）。一种状态条件注意力机制重新读取这种动态表示，从而预测完整的多元性状分布。在无需修改的情况下，该架构在 214 个细菌生长性状上实现了平均相关系数 r = 0.678（比岭回归提升 207%），在 35 个酵母适应性性状上 r = 0.915（提升 167%），在小样本情况下的 199 个果蝇表型上 r = 0.499（提升 760%），以及在 36 个水稻性状上 r = 0.995（提升 49%）。消融实验证实，驱动性能提升的是对生物过程的建模，而非模型规模。当神经架构能够表征生物学如何生成表型，而不仅仅是将基因型与结果相关联时，它们就能捕捉到静态方法所遗漏的信息。

## Abstract
The same genome produces different phenotypes in different conditions--yet predictive models encode genotype once and treat each trait independently. Here we show that representing phenotype generation as a dynamic biological process transforms predictive accuracy across bacteria, fungi, animals and plants.

BioWorldModel learns how organisms interpret their genome: frozen gene embeddings (species context) modulated by individual variation pass through four biological process layers (regulation [-&gt;] expression [-&gt;] pathway [-&gt;] cellular) that respond to environment and time. A state-conditioned attention mechanism rereads this dynamic representation, predicting full multivariate trait distributions.

Without modification, the architecture achieves mean correlation r = 0.678 on 214 bacterial growth traits (207% better than ridge regression), r = 0.915 on 35 yeast fitness traits (167% better), r = 0.499 on 199 fly phenotypes in small-sample regime (760% better), and r = 0.995 on 36 rice traits (49% better). Ablations confirm that modeling biological process--not model size--drives performance. When neural architectures represent how biology generates phenotype rather than merely associating genotype with outcome, they capture what static methods miss.

---

## 论文详细总结（自动生成）

### BioWorldModel：跨越四大生物界的基因型到表型预测架构总结

#### 1. 论文的核心问题与整体含义
*   **研究动机**：传统的基因组预测方法（如岭回归、随机森林）通常将基因型视为静态编码，并独立预测每个性状。然而，生物学本质是动态的：相同的基因组在不同环境、时间和生理状态下会产生截然不同的表型。
*   **核心问题**：论文探讨了如果神经架构能够模拟生物体“解读”基因组的过程（即从调控到细胞层级的动态转化），是否能比单纯建立统计关联的方法更准确地预测复杂性状。
*   **整体含义**：BioWorldModel 证明了通过引入生物过程层级和环境调制机制，单一架构可以在不针对特定物种调优的情况下，在细菌、真菌、动物和植物四大界中实现远超传统方法的预测精度。

#### 2. 方法论
BioWorldModel 的核心思想是将表型生成视为一个受环境影响的动态解释过程，包含四大创新：
*   **因子化基因表征**：将基因表示分为两部分：
    1.  **物种背景（Frozen Reference）**：使用预训练的基因组大模型 Evo 2 (7B) 的冻结嵌入，捕捉进化的功能约束。
    2.  **个体变异（Learned Modulation）**：通过学习个体 SNP 特征（如剂量、缺失等）来调制参考嵌入。
*   **生物过程栈（BioProcessStack）**：设计了四个顺序层（调控 $\to$ 表达 $\to$ 通路 $\to$ 细胞），每一层都通过环境和时间信号进行门控调制，模拟基因表达的条件性。
*   **状态条件读取（ReadGate）**：利用注意力机制，根据生物体当前的状态、环境和记忆，从 64 个动态基因组向量中选择性地读取相关信息。
*   **四通道生物记忆**：模拟生物体整合信息的时间尺度，包括稳态（慢速）、发育（时间门控）、偶发（冲击事件）和群体（物种基准）四个记忆通道。
*   **多元输出头**：使用 Cholesky 参数化预测完整的性状协方差矩阵，从而捕捉基因多效性（Pleiotropy）。

#### 3. 实验设计
*   **数据集与场景**：
    *   **细菌 (*E. coli*)**：678 个菌株，214 个生长适应性性状。
    *   **真菌 (*S. cerevisiae*)**：971 个分离株，35 个适应性性状。
    *   **动物 (*D. melanogaster*)**：205 个果蝇系，199 个形态、行为和生活史性状（极小样本场景）。
    *   **植物 (*O. sativa*)**：413 个水稻品种，36 个产量和品质性状。
*   **Benchmark 与对比方法**：
    *   **基准方法**：岭回归 (GBLUP)、随机森林 (Random Forest)、BayesB (ElasticNet)、Lasso。
    *   **评估指标**：Pearson 相关系数 ($r$)、均方根误差 (RMSE)、负对数似然 (NLL)、校准误差 (ECE)。

#### 4. 资源与算力
*   **硬件设备**：使用了 **4 × NVIDIA H100 (80GB)** GPU 集群。
*   **训练时长**：
    *   细菌：12 小时（500 步）。
    *   酵母：2 天（2000 步）。
    *   果蝇：3 小时（100 步，早停）。
    *   水稻：4 天（1000 步）。
*   **软件框架**：基于 JAX 和 Haiku 实现。

#### 5. 实验数量与充分性
*   **实验规模**：涵盖了四大生物界，涉及从 35 到 214 个不等的性状维度，样本量从 205 到 971 不等。
*   **消融实验**：在 *E. coli* 数据集上进行了 5 组消融实验，分别验证了生物过程栈、ReadGate、多元协方差输出以及 Evo 2 预训练嵌入的贡献。
*   **客观性与公平性**：所有物种使用完全相同的架构和超参数，基准方法则经过了充分的超参数搜索（5 折交叉验证），确保了对比的公正性。

#### 6. 主要结论与发现
*   **性能飞跃**：BioWorldModel 在所有物种上均大幅领先。在细菌上提升 207%，酵母提升 167%，果蝇（小样本）提升 760%，水稻提升 49%。
*   **结构胜过规模**：消融实验显示，移除生物过程层会导致性能下降 23%，移除预训练嵌入下降 25%。这证明性能提升源于对生物逻辑的模拟，而非单纯增加参数量。
*   **多效性捕捉**：模型能够成功恢复性状间的协方差结构（水稻中相关性达 0.59），证明其学习到了真实的生物关联。
*   **不确定性感知**：模型产生的认识不确定性（Epistemic Uncertainty）与预测误差呈正相关，表明模型具有一定的“自知之明”。

#### 7. 优点
*   **跨界通用性**：单一架构无需修改即可适配从原核生物到高等植物的极广谱生物。
*   **小样本鲁棒性**：在果蝇实验中（N=41），传统统计方法失效，但该模型凭借生物结构先验仍能保持较好的预测力。
*   **可解释性框架**：通过显式的调控、表达等层级设计，为深度学习模型在基因组学中的应用提供了生物学上的合理性。

#### 8. 不足与局限
*   **校准质量不均**：虽然在水稻上校准良好，但在酵母和细菌上表现出过度自信或信心不足，概率预测的成熟度有待提高。
*   **时间动态未充分验证**：尽管架构支持递归处理，但目前测试的数据集多为静态快照，尚未在真正的纵向时间序列数据上验证记忆通道的威力。
*   **跨群体迁移待证**：目前主要报告了物种内的预测性能，跨地理区域或不同育种群体的“零样本”迁移能力尚在研究中。

（完）
