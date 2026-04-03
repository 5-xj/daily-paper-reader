---
title: Effect of population structure and stabilizing selection on quantitative genetic variation
title_zh: 群体结构和稳定选择对数量遗传变异的影响
authors: "Li, J., Hermisson, J., Sachdeva, H."
date: 2026-04-01
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.29.714437v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 数量遗传变异与稳定选择
tldr: 本研究探讨了在空间均匀稳定选择下，群体结构对多基因性状遗传变异的影响。利用无限岛屿模型和个体模拟，分析了突变-选择-迁移-漂变平衡下的变异水平。研究发现存在关键迁移阈值，低于该值时群体结构显著增加基因变异，且该阈值决定了亚群间GWAS结果的可移植性。研究提出的基于单位点扩散近似的均值场方法能准确预测各项遗传指标。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-29-714437-v1/fig-001.webp\", \"caption\": \"Figure 2. Effect of stabilizing selection and population structure on genic variance, genetic variance, FST and QST , for an additive trait influenced by equal-effect loci. The expected (a) total genic variance across the full population, V (gen)\", \"page\": 16, \"index\": 1, \"width\": 911, \"height\": 635}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-29-714437-v1/fig-002.webp\", \"caption\": \"Figure 1. Genetic diversity at a single underdominant locus under the island model. (a) Mean allele frequency across the full population, p, as a function ofNm for differentNs values (colors), at equilibrium. There is a critical migration threshold Nmcrit (marked by a ∗), such that there is only one stable equilibrium p = 1/2 for Nm < Nmcrit, but two alternative equilibria p+ > 1/2 and p− < 1/2 for Nm > Nmcrit. (b)-(c) Equilibrium probability density, ψ[p], of the allele frequency p in a single deme, for different values of Nm (colors), including Nmcrit (dashed black curve), for Nµ = 0.01 and scaled selection coefficient (b) Ns = 1 or (c) Ns = 0.1. The probability density is symmetric around p = 1/2 if Nm < Nmcrit but biased towards p (which we assume to be equal to p−) if Nm > Nmcrit. All solid lines in (a)-(c) are obtained from the diffusion approximation (eq. 7). (d) The scaled critical migration rate Nmcrit as a function of µ/s for Nµ = 0.01, and different values of Ns. Symbols show Nmcrit as obtained from the diffusion approximation; the solid line shows the ‘weak selection’ approximation for Nmcrit (eq. S.4) which is independent of Ns (for a given µ/s); the dashed line shows the ‘strong selection’ approximation for Nmcrit (eq. S.11) for Ns = 5. (e) Total heterozygosity across the full population, HT = 2p q (f) Within-deme heterozygosity, HW = E[2pq] and (g) expected FST at selected locus as a function of Nm, for different values of Ns, and Nµ = 0.01. Solid lines show predictions of the diffusion approximation (eq. 7); dashed lines represents the neutral prediction, and circles show results of individual-based simulations with D = 100 demes and N = 200 diploids per deme, where each simulation is run for 5 × 105 generations. Each circle shows the mean obtained by averaging over 10 simulation replicates and over the last 104 generations (at intervals of 103 generations) within each replicate; error bars show 1.96 times the standard error (SE). For reference, we also indicate Nmcrit thresholds (as predicted by the diffusion approximation) using vertical lines in panels (e) and (f).\", \"page\": 13, \"index\": 2, \"width\": 926, \"height\": 542}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-29-714437-v1/fig-003.webp\", \"caption\": \"Figure 3. Variation in traits influenced by loci of unequal effect. (a)-(b) Proportion of (a) total genic variance and (b) within-deme genic variance contributed by small-effect (Ns = 0.25), medium-effect (Ns = 1) and large-effect (Ns = 4) loci, for a trait influenced by L = 200 unlinked loci, of which 60%, 30% and 10% have small, medium and large effects respectively. The three colors correspond to the three different effect sizes. (c)-(e) Expected contribution of each trait locus to (c) within-deme genic variance and (d) total genic variance across the full population, and (e) expected FST at each trait locus, as a function of the scaled selection coefficient (Ns) of the locus, for a trait influenced by L = 200 loci with effect sizes drawn from an exponential distribution with N s = 2. Here, per-locus variance contributions are scaled by the deterministic expectation, v∗ = 4µVs. Different colors correspond to different migration rates; dashed black line shows LE prediction in the limit Nm → ∞, i.e., for a single panmictic population with population size Ntot = ND. Circles (in (a)-(b)) and points in (c)-(e)) show results of individual-based simulations with D = 100 demes and N = 200 diploid individuals per deme, with scaled mutation rate Nµ = 0.01 per locus. The dashed lines show LE predictions based on the diffusion approximation for an underdominant locus; solid lines show LD predictions using effective parameters. In (c)-(e) and for Nm = 0.1, loci with the largestNs values have not yet equilibrated in simulations run for 5×105 generations and initialised with allele frequencies at each locus in each deme drawn independently from a beta distribution Beta[4Nµ, 4Nµ].\", \"page\": 20, \"index\": 3, \"width\": 911, \"height\": 633}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-29-714437-v1/fig-004.webp\", \"caption\": \"Figure 4. Distribution of the within-deme variance contributions of trait loci. (a),(c) Cumulative probability F (v) that the variance contributed by a locus exceeds v, and (b),(d) proportion of within-deme genic variance V (gen)\", \"page\": 22, \"index\": 4, \"width\": 911, \"height\": 628}]"
motivation: 探究在稳定选择和群体结构共同作用下，多基因性状在亚群内外的遗传变异维持机制及其对GWAS可移植性的影响。
method: 结合无限岛屿模型的解析近似与个体水平模拟，并应用基于单位点扩散近似的均值场理论进行预测。
result: 发现存在关键迁移阈值，低于此值时变异显著增加，且亚群间遗传基础的相似性在阈值附近最高，随后随迁移率增加而降低。
conclusion: 群体结构与稳定选择的交互作用显著影响遗传多样性分布，该理论框架为跨群体GWAS分析和复杂性状演化研究提供了重要参考。
---

## 摘要
我们研究了可以想象的最简单的多基因选择场景之一：在空间均匀的稳定选择下，表达加性性状的二倍体个体组成的细分群体。我们关注在突变-选择-迁移-漂变平衡状态下，在单个位点和性状水平上，亚群内部及亚群之间可以维持的变异量。在无限岛屿模型的假设下，我们推导了方差分量和汇总统计量（如 FST 和 QST）的解析近似值，并将其与基于个体的模拟进行了比较。我们发现：(i) 存在一个临界迁移阈值（取决于性状位点的效应大小），低于该阈值时，群体结构会强烈增加细分群体中的基因方差，使其远高于随机交配群体中的水平。每个亚群内的变异在接近临界迁移率时达到最大值。(ii) 跨亚群性状变异的遗传基础在接近该迁移阈值时最为相似，并且（违反直觉地）随着迁移率的提高而降低。这对亚群间全基因组关联研究（GWAS）的“可移植性”具有影响，即在一个亚群中对方差贡献较大的位点在多大程度上能解释其他亚群的方差。(iii) 一种基于单位点扩散近似的解析平均场方法，结合有效迁移和选择参数（以考虑位点间的关联），能够非常准确地预测各种指标。

## Abstract
We study one of the simplest scenarios of polygenic selection that can be imagined: a subdivided population of diploid individuals expressing an additive trait under spatially homogeneous stabilizing selection. We are interested in the amounts of variation that can be maintained at mutation-selection-migration-drift equilibrium, at individual loci and at the level of the trait, within and among subpopulations. We derive analytical approximations for variance components and summary statistics such as FST and QST under the assumptions of the infinite-island model and compare these with individual-based simulations. We find that: (i) There is a critical migration threshold (which depends on effect sizes of trait loci) below which population structure strongly inflates genic variance in the subdivided population to levels well above those in a panmictic population. Variation within each subpopulation is maximized close to the critical migration rate. (ii) The genetic basis of trait variation across subpopulations is most similar close to this migration threshold and (counter-intuitively) decreases for higher migration rates. This has consequences for the `portability' of Genome-Wide Association Studies (GWAS) between subpopulations, i.e, the extent to which loci with large contributions to variance in one subpopulation explain variance in other subpopulations. (iii) An analytical mean-field approach based on the single-locus diffusion approximation, together with effective migration and selection parameters (to account for associations between loci), very accurately predicts various quantities.

---

## 论文详细总结（自动生成）

这是一份关于论文《Effect of population structure and stabilizing selection on quantitative genetic variation》（群体结构和稳定选择对数量遗传变异的影响）的深度结构化总结：

### 1. 论文的核心问题与整体含义
*   **研究动机**：尽管自然群体中存在高度的分子和表型变异，但我们仍不完全清楚这些变异是如何在突变、选择、迁移和漂变的共同作用下维持的。
*   **核心问题**：在空间均匀的**稳定选择**（Stabilizing Selection）下，**群体结构**（细分群体间的基因流）如何影响多基因性状在位点层面（基因方差）和性状层面（遗传方差）的变异分布？
*   **整体含义**：论文试图建立一个解析理论框架，解释为什么某些群体结构会显著放大遗传变异，并探讨这些发现对跨群体表型预测（如 GWAS 的可移植性）的意义。

### 2. 论文提出的方法论
*   **核心思想**：将多基因性状的稳定选择简化为单个位点上的**超显性/杂合子劣势选择**（Underdominant Selection）。当性状均值接近最优值时，稳定选择主要表现为对变异的选择，这在位点层面等同于对杂合子的选择压力。
*   **关键技术细节**：
    *   **扩散近似（Diffusion Approximation）**：利用单位点扩散理论描述无限岛屿模型（Infinite-island model）下的等位基因频率分布。
    *   **有效参数法（Effective Parameters）**：为了考虑位点间的连锁不平衡（LD），引入了“有效选择系数 ($s_{eff}$)”和“有效迁移率 ($m_{eff}$)”：
        *   $s_{eff}$：修正了由于 Bulmer 效应（负 LD）导致的位点间相互作用。
        *   $m_{eff}$：修正了由于迁移导致的 LD，即移民后代因表型偏离最优值而受到的间接选择。
    *   **均值场近似**：通过迭代计算，使有效参数与群体内的基因方差达到自洽平衡。
*   **公式流程**：从单位点平衡分布 $\Phi(p)$ 出发，推导亚群内方差 ($V_W$)、总方差 ($V_T$) 以及分化指标 $F_{ST}$ 和 $Q_{ST}$。

### 3. 实验设计
*   **场景设置**：
    *   **单通路模型**：验证单位点在超显性选择下的行为。
    *   **等效应多基因模型**：假设 $L=200$ 个效应相同的位点。
    *   **指数效应分布模型**：更符合生物实际，位点效应大小服从指数分布。
*   **Benchmark（基准）**：以**随机交配的大群体（Panmictic Population）**在突变-选择平衡下的变异量 ($V^*$) 作为参照。
*   **对比方法**：将**解析预测（LE 预测和 LD 预测）**与**基于个体的随机模拟（Individual-based Simulations, IBM）**进行对比，验证理论的准确性。

### 4. 资源与算力
*   **算力说明**：论文中**未明确说明**具体的硬件配置（如 GPU 型号）。
*   **软件工具**：使用了 Mathematica 进行数值计算，Python 进行个体水平的离散代际模拟。模拟运行了高达 $10^6$ 代以确保达到平衡状态。

### 5. 实验数量与充分性
*   **实验规模**：
    *   模拟了 $D=100$ 个亚群，每个亚群 $N=200$ 个个体。
    *   覆盖了广泛的参数空间：不同的迁移率 ($N_m$)、选择强度 ($N_s$) 和突变率 ($N_\mu$)。
    *   进行了初始条件的灵敏度测试（从不同初始频率开始演化）。
*   **充分性评价**：实验设计非常**充分且客观**。通过对比单效应和分布效应，验证了理论的普适性；通过增加亚群数量（$D$）的消融实验，证明了模拟结果向无限岛屿模型预测值的收敛性。

### 6. 论文的主要结论与发现
1.  **临界迁移阈值 ($N m_{crit}$)**：存在一个关键迁移率，低于此值时，群体结构会极大地膨胀总基因方差（远超随机交配群体）。
2.  **亚群内变异最大化**：亚群内部的遗传变异在迁移率接近临界阈值时达到峰值，这是“迁移带来的变异输入”与“迁移导致的同质化”之间的平衡点。
3.  **GWAS 可移植性悖论**：跨亚群的遗传基础相似性在临界迁移率附近最高。令人惊讶的是，当迁移率进一步提高时，由于相同等位基因在全局趋于固定，共享的**多态性**反而减少，导致 GWAS 的跨群体预测能力下降。
4.  **$Q_{ST}$ 与 $F_{ST}$ 关系**：在均匀稳定选择下，$Q_{ST}$ 始终低于中性 $F_{ST}$，且该差异主要受总突变输入（$N\mu L$）影响，而非选择强度。

### 7. 优点：亮点与创新
*   **理论完备性**：成功将复杂的 Bulmer 效应和迁移诱导的 LD 整合进简单的单位点扩散框架中，提供了极高精度的解析预测。
*   **跨学科桥梁**：将群体遗传学（等位基因频率）与数量遗传学（性状方差）紧密结合，解释了“隐性变异”如何在结构化群体中维持。
*   **现实指导意义**：对人类群体遗传学中 GWAS 结果在不同族裔间失效的问题提供了深刻的理论解释。

### 8. 不足与局限
*   **模型简化**：采用了简单的**岛屿模型**，未考虑更复杂的空间结构（如距离隔离 IBD）或连续空间模型。
*   **连锁假设**：假设位点间是**自由重组**的（Unlinked），未探讨紧密连锁位点在强选择下的表现。
*   **突变偏好**：未考虑突变偏好（Mutation Bias），这在现实中可能导致性状均值偏离最优值，从而引入定向选择压力。
*   **平衡态限制**：研究集中在长期演化的平衡状态，未深入探讨环境剧烈变化时的瞬态动力学。

（完）
