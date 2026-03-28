---
title: "PRISM-G: an interpretable privacy scoring method for assessing risk in synthetic human genome data"
title_zh: PRISM-G：一种用于评估合成人类基因组数据风险的可解释隐私评分方法
authors: "Correa Rojo, A., Moreau, Y., Ertaylan, G."
date: 2026-03-25
pdf: "https://www.biorxiv.org/content/10.1101/2025.10.17.682995v4.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 合成人类基因组数据的隐私评分
tldr: 随着合成基因组数据的广泛应用，其隐私风险评估变得至关重要。本文提出PRISM-G框架，通过邻近性、亲缘关系和性状关联三个维度量化合成数据的隐私暴露风险，并将其整合为0-100的可解释评分。该方法不依赖特定生成模型，为评估合成基因组数据的安全性提供了多维度的标准化工具，有效弥补了单一指标评估的局限性。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-682995-v4/fig-001.webp\", \"caption\": \"Figure 4. Mean PRISM-G scores for synthetic data generators with 휀 = 0.02, 𝜆 = 0.75, and 𝛾 = 10−3 as model hyperparameters. A) 10,000 SNPs panel datasets. B) 65,535 panel datasets.\", \"page\": 26, \"index\": 1, \"width\": 943, \"height\": 279}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-682995-v4/fig-002.webp\", \"caption\": \"Table 2. Summary statistics of the Kendall ranking stability using 휀 = 0.02, 𝜆 = 0.75, and 𝛾 = 10−3 as model hyperparameters. SD: standard deviation, LCI: lower confidence interval, UCI: upper confidence interval.\", \"page\": 26, \"index\": 2, \"width\": 952, \"height\": 287}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-682995-v4/fig-003.webp\", \"caption\": \"Figure 8. Privacy-utility trade-off curves. A) 10,000 SNPs panel datasets. B) 65,535 panel datasets.\", \"page\": 30, \"index\": 3, \"width\": 943, \"height\": 291}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-682995-v4/fig-004.webp\", \"caption\": \"Figure 7. Performance metrics for population structure preservation and ancestry inference utility. A) 10,000 SNPs panel datasets. B) 65,535 panel datasets.\", \"page\": 30, \"index\": 4, \"width\": 943, \"height\": 304}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-682995-v4/fig-005.webp\", \"caption\": \"Table 1. Conceptual overview of the PRISM-G components, the genomic representations they probe, and the types of privacy leakage they are designed to detect. Formal definitions and implementation details are provided in the Materials and Methods section.\", \"page\": 7, \"index\": 5, \"width\": 921, \"height\": 425}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-682995-v4/fig-006.webp\", \"caption\": \"Figure 6. Mean PRISM-G scores for synthetic data generators and pairwise comparisons using the optimal model hyperparameters obtained using grid search. A) 10,000 SNPs panel datasets. B) 65,535 panel datasets.\", \"page\": 29, \"index\": 6, \"width\": 1018, \"height\": 375}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-682995-v4/fig-007.webp\", \"caption\": \"Figure 1. PRISM-G submetrics for the 10,000 SNPs panel dataset. Each barplot shows A) Proximity leakage components: proximity quantile and adversarial distance signals. B) Kinship replay components: replay, internal kinship excess, micro haplotype collision, and spectral anomaly. C) Trait leakage components: membership-inference performance, uniqueness and rarity match.\", \"page\": 22, \"index\": 7, \"width\": 943, \"height\": 631}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-682995-v4/fig-008.webp\", \"caption\": \"Figure 2. PRISM-G submetrics for the 65,535 SNPs panel dataset. Each barplot shows A) Proximity leakage components: proximity quantile and adversarial distance signals. B) Kinship replay components: replay, internal kinship excess, micro haplotype collision, and spectral anomaly. C) Trait leakage components: membership-inference performance, uniqueness and rarity match.\", \"page\": 23, \"index\": 8, \"width\": 943, \"height\": 509}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-682995-v4/fig-009.webp\", \"caption\": \"Table 3. Summary statistics of the Kendall ranking stability using the optimal model hyperparameters obtained from grid search. SD: standard deviation, LCI: lower confidence interval, UCI: upper confidence interval.\", \"page\": 28, \"index\": 9, \"width\": 946, \"height\": 342}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-682995-v4/fig-010.webp\", \"caption\": \"Figure 5. Sensitivity analysis plot to assess the estimated effect of model hyperparameters on PRISMG scores. Mean PRISM-G scores are shown as a function of the calibration parameter 𝜆 for different values of 휀. Shaded regions indicate the interquartile range of PRISM-G scores across bootstrap replicates, while dashed horizontal lines denote the minimum and maximum scores observed across\", \"page\": 27, \"index\": 10, \"width\": 1018, \"height\": 404}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2025-10-17-682995-v4/fig-011.webp\", \"caption\": \"Figure 3. PRISM-G components. Each radar plot shows A) Metrics for the 10,000 SNPs panel dataset. B) Metrics for the 65,535 SNPs panel dataset.\", \"page\": 24, \"index\": 11, \"width\": 943, \"height\": 462}]"
motivation: 现有的合成基因组数据隐私评估缺乏统一且多维度的量化标准，难以全面衡量不同生成模型带来的隐私泄露风险。
method: 提出PRISM-G框架，从遗传坐标邻近性、家族/群体结构重现以及稀有变异/成员推理信号三个维度计算归一化风险评分并进行聚合。
result: 在GAN、RBM和Genomator等模型上的测试表明，隐私漏洞在不同模型和标记密度下呈现出不同的分布特征，证明了多维度评估的必要性。
conclusion: 单一的相似性指标不足以全面评估隐私风险，PRISM-G通过多维度整合评分提供了更全面且可解释的隐私风险评估方案。
---

## 摘要
合成基因组数据的日益广泛使用有望提供更广泛的数据访问，但也引发了关于隐私风险的尚未解决的担忧。我们介绍了 PRISM-G，这是一个与模型无关的框架，它通过三个互补的组件来总结合成基因组的隐私暴露：(i) 邻近性视角（proximity view），探究合成个体在遗传坐标空间中是否异常接近真实基因组；(ii) 亲缘关系视角（kinship view），检测超出随机预期的家族或群体结构模式的重现；(iii) 性状关联视角（trait-linked view），通过罕见变异和简单的成员推理信号捕捉暴露。每个组件都会产生一个归一化的风险评分，并通过风险规避聚合将其映射为 0-100 的 PRISM-G 分数。我们在由生成对抗网络 (GAN)、受限玻尔兹曼机 (RBM) 和基于逻辑的 SAT 求解器 (Genomator) 生成的合成队列上评估了 PRISM-G。我们的结果表明，隐私漏洞在不同模型和标记密度下集中在不同的轴线上，这强调了单一的基于隐私的相似性指标是不够的。

## Abstract
The growing use of synthetic genomic data promises broader data access but raises unresolved concerns about privacy risk. We introduce PRISM-G, a model-agnostic framework that summarizes privacy exposure of synthetic genomes across three complementary components: (i) a proximity view that asks whether synthetic individuals lie unusually close to real genomes in genetic-coordinate space; (ii) a kinship view that detects replay of familial or population-structure patterns beyond what is expected by chance; and (iii) a trait-linked view that captures exposure through rare variants and simple membership-inference signals. Each component yields a normalized risk score and a risk-averse aggregation maps these to a 0--100 PRISM-G score. We evaluated PRISM-G on synthetic cohorts generated by a generative adversarial network (GAN), a restricted Boltzmann machine (RBM), and a logic-based SAT-solver (Genomator). Our results show that privacy vulnerabilities concentrate along different axes across models and marker densities, underscoring that a single privacy-based similarity metric is insufficient.

---

## 论文详细总结（自动生成）

### 论文总结：PRISM-G——合成人类基因组数据的可解释隐私评分方法

#### 1. 核心问题与整体含义（研究动机和背景）
随着精准医疗的发展，共享人类基因组数据对于科研至关重要，但直接共享真实数据面临严峻的隐私和法律挑战。**合成基因组数据（Synthetic Genomic Data）**被视为一种平衡数据效用与隐私的潜在方案。然而，现有的隐私评估方法往往过于单一（如仅关注欧氏距离），无法捕捉基因组数据特有的生物学特征（如亲缘关系、单倍型结构和稀有变异）。
本文提出了 **PRISM-G** 框架，旨在建立一个多维度、可解释且与生成模型无关的标准评分系统，量化合成基因组数据在泄露真实个体身份方面的风险。

#### 2. 方法论：核心思想与关键技术
PRISM-G 的核心思想是从三个互补的生物学维度（Views）评估隐私暴露，并将其整合为一个 0-100 的标准化分数：
*   **邻近性视角 (Proximity View)：** 评估合成个体在遗传坐标空间中是否与真实个体异常接近。利用“对抗距离信号”和“邻近分位数”来检测合成样本是否只是真实样本的微小变体。
*   **亲缘关系视角 (Kinship View)：** 检测合成数据是否重现了真实数据中的家族或群体结构。通过计算亲缘关系过剩、微单倍型碰撞（Micro-haplotype collision）和谱异常（Spectral anomaly）来识别结构性信息的泄露。
*   **性状关联视角 (Trait-linked View)：** 关注稀有变异和成员推理攻击（Membership Inference）。通过评估合成样本中稀有等位基因的匹配度以及成员推理攻击的成功率，衡量特定个体是否被“记住”。
*   **聚合算法：** 采用**风险规避聚合（Risk-averse aggregation）**方法（广义平均值），确保如果任何一个维度出现高风险，最终得分都会显著提升，从而避免低风险维度稀释了严重的安全漏洞。

#### 3. 实验设计
*   **数据集：** 使用 1000 Genomes Project 中的欧洲人群（EUR）数据作为真实参考。
*   **实验场景：** 分别在 10,000 个 SNP 和 65,535 个 SNP 两种标记密度下进行测试。
*   **对比方法（生成模型）：**
    1.  **GAN (Generative Adversarial Network)：** 深度学习生成模型。
    2.  **RBM (Restricted Boltzmann Machine)：** 基于能量的概率模型。
    3.  **Genomator：** 基于逻辑和 SAT 求解器的合成器，旨在保持等位基因频率和连锁不平衡。
*   **基准测试：** 通过网格搜索（Grid Search）和自助法（Bootstrap）评估评分的稳定性和灵敏度。

#### 4. 资源与算力
论文中**未明确说明**具体的硬件配置（如 GPU 型号、数量）或具体的训练时长。但提到该框架使用 Python 开发，并利用了标准生物信息学工具（如 PLINK）和机器学习库（如 PyTorch 用于 GAN/RBM 训练）。由于涉及 65k SNP 的矩阵运算和多次自助法重采样，推测需要中等规模的计算集群支持。

#### 5. 实验数量与充分性
*   **实验规模：** 论文在两种不同的 SNP 密度下对比了三种主流生成模型，并进行了详尽的参数敏感性分析（针对校准参数 $\lambda$ 和 $\epsilon$）。
*   **充分性：** 实验设计较为充分。作者不仅评估了隐私得分，还对比了**数据效用（Utility）**（如群体结构保持、祖先推理准确性），展示了隐私与效用之间的权衡（Trade-off）。
*   **客观性：** 通过 Kendall 秩相关系数验证了评分在不同随机种子下的稳定性，证明了该方法不是随机波动的，具有统计学上的鲁棒性。

#### 6. 主要结论与发现
*   **隐私漏洞的异质性：** 不同的生成模型在不同维度上表现出隐私风险。例如，某些模型在邻近性上安全，但在亲缘关系重现上存在高风险。
*   **单一指标的局限：** 传统的单一相似性指标无法全面覆盖隐私风险，PRISM-G 的多维度评估能发现被传统方法忽略的隐患。
*   **标记密度的影响：** 随着 SNP 数量增加，隐私风险通常会上升，因为高维空间中个体的唯一性更强。
*   **效用-隐私权衡：** 实验量化了在追求更高数据质量（效用）时，隐私风险如何随之增加，为数据发布者提供了决策依据。

#### 7. 优点
*   **多维度与生物学相关性：** 结合了遗传学特有的亲缘关系和单倍型特征，比通用的机器学习隐私指标更切合基因组学实际。
*   **可解释性：** 0-100 的评分直观易懂，且可以拆解到三个子维度，帮助开发者定位模型缺陷。
*   **模型无关性：** 无论使用何种生成算法，PRISM-G 都可以作为通用的“审计工具”。

#### 8. 不足与局限
*   **计算开销：** 随着 SNP 数量增加到全基因组级别（数百万 SNP），计算亲缘关系矩阵和成员推理信号的开销将呈指数级增长。
*   **参考群体依赖：** 评分结果可能受到所选参考群体（背景人群）的影响，如果参考群体选择不当，可能导致风险评估偏差。
*   **未涵盖所有变异类型：** 目前主要针对 SNP 数据，尚未扩展到结构变异（SV）或插入/缺失（Indels）。
*   **静态评估：** 该方法提供的是静态快照，无法应对未来可能出现的更高级的针对性攻击手段。

（完）
