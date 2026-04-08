---
title: "The fate of mutations on Y chromosomes andautosomes: a unified Wright-Fisher frameworkaccounting for segregation time"
title_zh: Y 染色体与常染色体上突变的命运：一个考虑分离时间的统一 Wright-Fisher 框架
authors: "Offenstadt, A., Billiard, S., Giraud, T., Veber, A., Jay, P."
date: 2026-04-03
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.01.715871v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 性染色体突变演化的Wright-Fisher框架
tldr: 本文提出一个统一的两性二倍体Wright-Fisher模型，系统分析Y染色体与常染色体上突变的进化命运，综合考虑选择效应与分离时间，并通过解析与数值方法揭示染色体特异性如何影响突变固定与演化动力学。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715871-v1/fig-001.webp\", \"caption\": \"Figure 3: Mean segregation times (a, b and c) and fixation probabilities (d, e and f) obtained from the diffusion (pt)t≥0 (2.10) started at p0 = 1/(2N), with N = 10000. For each pair of parameters h and s0, they approximate the mean segregation time and fixation probability of a single mutation appearing on an autosome of an individual within a population of size N , where the selection parameters induce differences in fitness given by 1 for the genotype AA, 1+hs0/N for the genotype Aa and 1+s0/N for the genotype aa in accordance with (2.1). The mean segregation time is expressed in terms of number of generations (denoted gen. in the Figure). Each panel presents the results obtained for different values of s0 and fixed h (h = −2 in panels a and d, h = 0.1 in panels b and e, h = 2 in panels c and f); the black dots correspond to the results obtained with our diffusion approximations, and the orange dots to the results of the individual-based simulations described in Section 2.5. The four scenarios described in Table 1 are made explicit by the coloured backgrounds (green for beneficial, red for deleterious, yellow for overdominant and blue for underdominant). The mean segregation times in the individual-based model and in the diffusion approximation mainly differ when the diffusion approximation predicts segregation times that can potentially be much larger than the 100,000 generation cut-off used in the simulations; likewise, the differences in fixation probabilities appear in situations where the fixation probability is too small to be correctly inferred from 10,000 simulations.\", \"page\": 15, \"index\": 1, \"width\": 763, \"height\": 688}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715871-v1/fig-002.webp\", \"caption\": \"Table A.3: Comparison between the fixation probability ratio computed in Charlesworth et al. (1987) and that computed with our diffusion approximations, in the deleterious mutation scenario.\", \"page\": 30, \"index\": 2, \"width\": 769, \"height\": 544}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715871-v1/fig-003.webp\", \"caption\": \"Figure 1: Illustration of the reproduction step between one generation and the next in our two-sex diploid Wright-Fisher model with selection. For each gamete or individual, we represent the X and Y chromosomes and an autosomal locus L. The autosomal locus can carry two alleles (orange and green) and so does the Y chromosome (red and blue). An infinite number of juveniles from each sex are created by fusing gametes of different genotypes. These gametes are created in proportions that depend on the allele frequency in the parental generation (see main text). Juveniles are then separated between those that received a paternal Y chromosome and those that received a paternal X chromosome. Finally, N/2 individuals are drawn from each subgroup to form the next adult generation, ensuring that the sex ratio remains balanced. This schematic representation encompasses the two chromosomal contexts of interest: if the focal mutation is located on the Y chromosome, then the alleles at the autosomal locus have no impact on the juvenile sampling probabilities (as only the mutant or ancestral allele carried by Y chromosome affects the selection coefficient); if the mutation is carried by an autosome, then the Y-chromosome alleles do not affect the juvenile sampling probabilities (as selection is supposed to only act on locus L).\", \"page\": 7, \"index\": 3, \"width\": 771, \"height\": 568}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715871-v1/fig-004.webp\", \"caption\": \"Figure 4: Fixation probabilities (a) and mean segregation times (c) obtained from the diffusion (pt) (2.10) started at p0 = 1/(2N) (left) and from the diffusion (qt) (2.11) started at q0 = 2/N (right), with N = 1000. For each pair of parameters h and s0, they approximate the mean segregation time and fixation probability of a single mutation appearing on an autosome of an individual within a population of size N , where the selection parameters induce differences in fitness given by 1 for the genotype AA, 1 + hs0/N for the genotype Aa and 1 + s0/N for the genotype aa in accordance with (2.1). The mean segregation times are expressed in the diffusion timescale and can be multiplied by N to recover a scale in generations. Panel b displays, for each parameter set (h, s0), the ratio of the fixation probability on Y chromosomes (pYh,s0) and that on autosomes (pAh,s0). When this ratio is above 1, a single mutation is more likely to fix on the Y chromosome than on autosomes. When it is above 4, the substitution rate (see main text) is higher on the Y chromosome than on autosomes.\", \"page\": 18, \"index\": 4, \"width\": 753, \"height\": 804}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715871-v1/fig-005.webp\", \"caption\": \"Figure 2: Mean segregation times (a) and fixation probabilities (b) obtained from the diffusion (qt) (2.11) started at q0 = 2/N , with N = 1000. For each pair of parameters h and s0, they approximate the mean segregation time and fixation probability of a single mutation appearing on a Y chromosome of an individual within a population of size N , where the selection parameters induce differences in fitness given by 1 for the genotype AA and 1 + hs0/N for the genotype Aa in accordance with (2.1). The mean segregation time is expressed in terms of number of generations (denoted gen. in the Figure). For each value of the product hs0, the black dots correspond to the results obtained with our diffusion approximations, and the orange dots to the results of the individual-based simulations described in Section 2.5.\", \"page\": 13, \"index\": 5, \"width\": 759, \"height\": 224}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-01-715871-v1/fig-006.webp\", \"caption\": \"Figure A.1: Comparison between the fixation probabilities obtained from the diffusions (pt)t≥0 (2.10) and (qt)t≥0 (2.11) and the results of 100,000 individual-based simulations described in Section 2.5. We study three population sizes N = 100, N = 1000 and and N = 10000, for which each set of parameter (h,s0) induces differences in fitness given by 1 for the genotype AA, 1 + hs0/N for the genotype Aa and 1 + s0/N for the genotype aa, in accordance with (2.1). For each N , the simulations start with a single mutation in a diploid population of size N , and the diffusions start at initial frequencies p0 = 1/(2N) and q0 = 2/N . White (resp., gray) triangles represent the fixation probabilities obtained with the simulations for a mutation appearing on an autosome (resp., on a Y chromosome), while white (resp., gray) circles represent the fixation probabilities computed with the diffusion approximations for a mutatiton appearing on an autosome (resp., on a Y chromosome). The parameter sets studied include the four scenarios described in Table 1, which are made explicit by the coloured backgrounds (green for beneficial, red for deleterious, yellow for overdominant and blue for underdominant).\", \"page\": 31, \"index\": 6, \"width\": 767, \"height\": 448}]"
motivation: 为理解Y染色体突变的进化动态及其与常染色体的差异。
method: 采用两性二倍体Wright-Fisher模型结合扩散近似及个体模拟计算突变固定概率与分离时间。
result: 模型显示在有限时间尺度上，Y染色体上的超显性突变相比常染色体更易固定。
conclusion: 研究建立了统一框架，揭示染色体结构特性对突变固定与演化时间的系统影响。
---

## 摘要
理解 Y 染色体上突变的演化过程是解释性染色体的起源、多样性和持久性问题的核心。在有性繁殖群体中，发生在 Y 染色体上的突变由于有效群体大小减小，以及存在包含永久杂合状态等位基因的大范围非重组区域，其选择动态与常染色体上的突变显著不同。这些特征使得 Y 染色体群体中的基因传递方式相较常染色体发生变化，即便在同一个家系内亦如此。在本文中，我们提出了一个双性二倍体 Wright-Fisher 模型，在统一的群体框架下明确地同时纳入性染色体与常染色体，以捕捉这些特征对突变命运的影响，不仅考虑固化概率（fixation probabilities），还包括分离时间（segregation times）。我们采用扩散近似方法（diffusion approximations），并提供解析和数值工具，用于在广泛的参数与选择范围内计算这些量。我们重现了不同情景下的经典固化概率结果，包括纯有利、有害或超显性（overdominant）突变，并在此基础上结合平均分离时间这一关键却常被忽视的进化结果决定因素进行了扩展。特别地，我们的分析表明，在可观测时间尺度内，超显性突变在 Y 染色体上比在常染色体上更有可能被固定。个体水平模拟验证了我们的近似，并突出了理论方法特别适用的参数范围，尤其是那些导致长分离时间或极低固化概率、从而使直接模拟变得不可行的情况。我们的结果提供了一个全面且易于运用的框架，用以阐明染色体特异性特征如何在超越固化概率的层面上塑造进化动力学。

## Abstract
Understanding how mutations evolve on Y chromosomes is central to explaining the origin, diversity and persistence of sex chromosomes. Mutations occurring on the Y chromosome in sexual populations experience selective dynamics that differ markedly from those on autosomes, due to a reduced effective population size and the presence of large non-recombining regions containing alleles maintained in a permanently heterozygous state. These specific features alter gene transmission in the Y chromosome population compared to autosomes, even within the same pedigree. Here, we provide a two-sex diploid Wright-Fisher model that explicitly incorporates both sex chromosomes and autosomes within a unified population framework, in order to capture the influence of these specificities on the fate of mutations, not only considering fixation probabilities but also segregation times. We use diffusion approximations and provide analytical and numerical tools to compute these quantities across a wide range of parameters and selection regimes. We recover classical results on fixation probabilities in various scenarios, including purely beneficial, deleterious or overdominant mutations, and extend them in the light of mean segregation time, a key but often overlooked determinant of evolutionary outcomes over finite timescales. In particular, our analyses show that overdominant mutations are overall more likely to fix in observable time windows on the Y chromosome than on autosomes. Individual-based simulations corroborate our approximations and highlight parameter regimes where the theoretical approach is particularly useful, especially for parameter values inducing long segregation times or small fixation probabilities, for which simulations are impractical. Our results provide a comprehensive and tractable framework for clarifying how chromosome-specific features shape evolutionary dynamics beyond fixation probabilities alone.

---

## 论文详细总结（自动生成）

## 一、核心问题与研究背景

- **研究动机：**  
  本文旨在揭示 *Y 染色体上突变* 的演化命运如何与 *常染色体* 不同，从而解释性染色体在起源、分化、退化与多样性演化中的机制。  
  由于 Y 染色体：
  - 有效群体大小较小；
  - 存在大范围非重组区；
  - 维持等位基因的永久杂合状态；  
  所以其突变的固定概率、分离时间（segregation time）及演化轨迹与常染色体显著不同。  
  现有模型多关注固定概率，但忽略了突变在被固定前的分离时间。本文通过统一的理论框架将两者同时考虑。

- **主要目标：**  
  建立一个能同时描述 *Y 染色体与常染色体* 突变过程的统一 *两性二倍体 Wright–Fisher 模型*，并系统分析选择（selection）与遗传漂变（genetic drift）在不同染色体类型中的影响。

---

## 二、方法论与理论框架

- **总体框架：**  
  提出 **双性二倍体 Wright–Fisher 模型**，显式建模 XY 性决定系统中的基因遗传。  
  模型同时包含两个染色体场景：
  - **常染色体（autosome）**：突变可能出现在任意个体中。
  - **Y 染色体（Y chromosome）**：突变仅在雄性亚群体传递，无重组。

- **核心思想：**  
  在统一的种群层面上比较两类染色体的突变：
  - 将代际变迁建模为离散的马尔可夫链；
  - 使用连续极限得到扩散近似（diffusion approximation）；
  - 在相同时间尺度（以 N 为单位）下同时推导出突变频率的扩散方程。

- **关键方程（文字说明）：**
  - 对常染色体突变的等位基因频率 \( p_t \)：  
    \[
    dp_t = s_0 p_t (1 - p_t) [h + p_t(1 - 2h)]dt + \frac{1}{\sqrt{2}} \sqrt{p_t (1 - p_t)} dB_t
    \]
  - 对 Y 染色体突变的等位基因频率 \( q_t \)：  
    \[
    dq_t = h s_0 q_t (1 - q_t)dt + \sqrt{2 q_t (1 - q_t)} dB_t
    \]
  两个扩散过程共享统一的时间尺度，使得可直接比较固定概率与分离时间。

- **分析方法：**
  - 通过扩散常微分方程求解突变的**固定概率**与**平均吸收时间**（即分离时间）；
  - 在解析难以计算的区域提供数值解；
  - 采用 SLiM 4.3 平台进行个体层面模拟验证。

---

## 三、实验设计与仿真方案

- **模拟平台：** 使用 **SLiM 4.3** 进行个体基础模拟（individual-based simulation）。
- **种群设置：**
  - 模拟群体为固定大小 N = 100、1000、10,000；
  - 种群为 XY 性系统：雄性 XY、雌性 XX；
  - 每个个体包含两对非重组染色体（性染色体 + 常染色体）。
- **突变引入：**
  - 每次模拟在单个个体中引入一份突变；
  - 突变可出现在 Y 染色体或常染色体；
  - 模拟参数包括选择系数 \( s_0 \) 与显隐性参数 \( h \)。
- **选择情景：**
  四类典型进化模式（见论文表 1）：
  1. 有利突变（beneficial）  
  2. 有害突变（deleterious）  
  3. 超显性（overdominant）  
  4. 亚显性（underdominant）
- **对比基准：**
  - 与经典 Wright-Fisher 分析结果及 Haldane、Kimura 的理论结果对比；
  - 验证 Charlesworth 等（1987）研究中的特定解析情况；
  - 通过模拟数据比对模型预测精度。

---

## 四、资源与算力

- 文中**未提及任何 GPU、CPU 型号或并行计算资源**；
- 模拟数量较大（每组参数 10,000 重复模拟），但运行资源未详细说明，因此算力未知。

---

## 五、实验数量与充分性

- **实验规模：**
  - 每个参数组合进行了 **10,000 次独立模拟**；
  - 不同人口规模（N = 100 / 1000 / 10000）；
  - 四类选择场景 × 多个 (h, s0) 参数组合；
  - 共覆盖数十种参数组合与数十万个模拟样本。
- **充分性与客观性：**
  - 模拟样本量大，涵盖多种选择强度；
  - 设置对称、使用统一时间尺度，确保公平比较；
  - 对理论结果与模拟结果进行了系统一致性验证，实验充分且结果收敛性良好。

---

## 六、主要结论与发现

- **核心发现：**
  1. Y 染色体上的有效群体规模较小 → 漂变更强 → 固定概率整体更高；
  2. 在有限时域内，**超显性（overdominant）突变更可能在 Y 染色体上固定**；
  3. 固定概率之外，**分离时间（mean segregation time）是决定可观察进化结果的关键量**；
  4. 常染色体突变的分离时间对显隐性 h 极度敏感，而 Y 染色体仅取决于 \( h s_0 \)；
  5. 模型精确再现了 Haldane 与 Kimura 的经典极限情况；
  6. 分离时间能跨数量级影响实际观测到的固定事件频率。

- **定量结果：**
  - 有利突变随 s₀ 增大而更快固定；
  - 有害突变在 Y 染色体上更易存续；
  - 超显性突变在常染色体上产生巨大的长期分离期，而在 Y 染色体上可较快固定；
  - 亚显性突变快速消除。

---

## 七、研究优点与创新点

- **统一模型：**
  - 首次在同一 Wright–Fisher 框架中**统一推导 Y 染色体与常染色体的突变动力学**；
  - 采用相同时间尺度，确保可直接比较。

- **理论与模拟兼备：**
  - 解析结果与个体模拟高度一致；
  - 在极长分离时间或极低固定概率区间提供可靠理论估计，突破模拟局限。

- **方法可高度推广：**
  - 扩散近似可延伸至多维（多突变、其他性染系统）；
  - 可为性染色体演化乃至基因组结构演化过程提供通用分析工具。

---

## 八、不足与局限

- **模型假设局限：**
  - 未考虑：
    - 基因间相互作用与连锁（Hill-Robertson 效应）；
    - 群体规模变动、性比例偏离等因素；
    - 适应度随时间变化的情况。
- **实验层面：**
  - 所有结果为理论推演与模拟验证，**无实证或真实生物数据集**；
  - 长期演化（>10⁵ 代）模拟有时间截断，可能低估极慢分离突变的固定率；
  - 算力未说明，无法评估效率可复现性。

- **应用限制：**
  - 模型目前仅适用于单突变、二倍体、随机交配系统；
  - 不直接支持性拮抗选择或多位点平衡的分析。

---

**（完）**
