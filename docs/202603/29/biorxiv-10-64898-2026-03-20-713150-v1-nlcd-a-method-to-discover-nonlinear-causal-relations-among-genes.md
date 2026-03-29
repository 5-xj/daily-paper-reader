---
title: "NLCD: A method to discover nonlinear causal relations among genes"
title_zh: NLCD：一种发现基因间非线性因果关系的方法
authors: "Easwar, A., Narayanan, M."
date: 2026-03-23
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.20.713150v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 发现基因间的非线性因果关系
tldr: 区分相关性与因果关系是生物学研究的挑战，现有基于孟德尔随机化的方法多假设线性关系，限制了基因网络发现。本文提出NLCD方法，利用非线性回归和条件特征重要性评分扩展了因果推理检验（CIT）。在模拟数据中，NLCD在检测非线性关系方面优于现有工具（如Findr、MRPC），并在酵母和人类基因组数据中成功识别出已知的和潜在的因果基因对，为复杂生物系统中的非线性因果发现提供了有效工具。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-20-713150-v1/fig-001.webp\", \"caption\": \"Fig. 3. Comparison of NLCD with SOTA methods on simulated benchmark datasets. Simulated benchmarks comprising data on independent triplets vs. causal triplets (with linear, sine, or sawtooth causal relationship) were used to determine the classification performance (AUPRC) of different causal discovery methods (see also Fig. S1a for the underlying PR curves). NLCD and CIT were run using 500 permutations (see also Fig. S1b for results using 100 permutations). Sample size of n = 500 is used here.\", \"page\": 10, \"index\": 1, \"width\": 248, \"height\": 645}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-20-713150-v1/fig-002.webp\", \"caption\": \"Fig. 2. NLCD on simulated benchmark datasets. a. Example plots of the simulated A and B genes illustrate different types of gene-gene relationships, linear and nonlinear (sine and sawtooth). Shaded grey marks the overlap region between the two gene expression distributions: (A | L = 0) and (A | L = 1), with endpoints of this overlap region obtained by setting P (L = 0 | A) to 0.2 and to 0.8 and solving for A (see formula derived in Supplementary Section 1.4). b. Performance of NLCD on benchmarks, each comprising data simulated on 100 causal vs. 100 independent triplet models, on a binary (causal vs. independent) classification task is reported as Precision-Recall (PR) curves. Sample size of n = 500 is used here.\", \"page\": 9, \"index\": 2, \"width\": 481, \"height\": 641}]"
motivation: 现有的基因因果关系发现方法大多基于线性假设，难以捕捉生物系统中普遍存在的非线性相互作用。
method: NLCD通过结合非线性回归建模和条件特征重要性评分，扩展了传统的因果推理检验（CIT）框架。
result: 模拟实验显示NLCD在处理非线性关系时表现优异，且在酵母和人类真实基因组数据中展现出良好的因果识别能力。
conclusion: NLCD是一种能够有效识别基因间非线性因果关系的稳健方法，有助于更准确地构建复杂的生物调控网络。
---

## 摘要
区分相关性与因果关系是包括生物学在内的许多科学领域的一项基本挑战，特别是在随机对照试验等干预手段不可行且仅有观测数据的情况下。孟德尔随机化（Mendelian Randomization）框架下基于条件独立性统计检验的方法，可以检测两个均与第三个工具变量相关的观测变量之间的因果关系。然而，这些用于检测性状间因果关系的方法（例如，在同一群体中观察到的与遗传变异相关的两个基因表达或临床性状）通常假设线性关系，从而阻碍了从基因组数据中发现因果基因网络。我们开发了 NLCD，这是一种基于非线性回归建模和条件特征重要性评分的基因组数据非线性因果发现（NonLinear Causal Discovery）方法。NLCD 利用这些技术扩展了现有线性因果发现方法——因果推断检验（Causal Inference Test, CIT）中的统计检验。我们将 NLCD 与当前最先进的方法（CIT、Findr 和 MRPC）进行了基准测试。在模拟数据集上，NLCD 在检测线性关系方面的表现与大多数方法相当（NLCD 的平均 AUPRC（精准率-召回率曲线下面积）= 0.94，CIT = 0.94，Findr = 0.94，MRPC = 0.99），而在检测两个基因之间的非线性（正弦和锯齿型）关系方面优于它们（NLCD 的平均 AUPRC = 0.76，CIT = 0.60，Findr = 0.56，MRPC = 0.73）。当在酵母基因组数据集的非线性子集上进行测试以恢复涉及转录因子的已知因果关系时，NLCD 和 CIT 的表现相当，且略优于 Findr 和 MRPC（NLCD 的平均 AUPRC = 0.82，CIT = 0.81，Findr = 0.71，MRPC = 0.54）。在应用于人类基因组数据集时，NLCD 揭示了肌肉组织中活跃的因果基因对（IRF1 [->] PSME1 和 HLA-C [->] HLA-T），并阐明了在活体人类环境下的组织中发现因果基因网络的机遇与挑战。可用性：实现我们方法的代码可在以下网址获取：https://github.com/BIRDSgroup/NLCD。

## Abstract
Distinguishing correlation from causation is a fundamental challenge in many scientific fields, including biology, especially when interventions like randomized controlled trials are infeasible and only observational data are available. Methods based on statistical tests of conditional independence within the Mendelian Randomization framework can detect causality between two observed variables that are each associated with a third instrumental variable. However, these methods for detecting causal relationships between traits (e.g., two gene expression or clinical traits associated with a genetic variant, all observed in the same population) often assume a linear relationship, thereby hindering the discovery of causal gene networks from genomics data.We have developed NLCD, a method for NonLinear Causal Discovery from genomics data based on nonlinear regression modeling and conditional feature importance scoring. NLCD uses these techniques to extend the statistical tests in an existing linear causal discovery method called the Causal Inference Test (CIT). We benchmarked NLCD against current state-of-the-art methods: CIT, Findr, and MRPC. On simulated datasets, NLCD performs comparably to most methods in detecting linear relations (Average AUPRC (Area Under the Precision-Recall Curve) of NLCD=0.94, CIT=0.94, Findr=0.94, and MRPC=0.99), and outperforms them in detecting nonlinear (sine and sawtooth type) relations between two genes (Average AUPRC of NLCD=0.76, CIT=0.60, Findr=0.56, and MRPC=0.73). When tested on a nonlinear subset of a yeast genomic dataset to recover known causal relations involving transcription factors, NLCD and CIT performed comparable to each other and slightly better than Findr and MRPC (Average AUPRC of NLCD=0.82, CIT=0.81, Findr=0.71, and MRPC=0.54). On application to a human genomic dataset, NLCD revealed active causal gene pairs (IRF1 [-&gt;] PSME1 and HLA-C [-&gt;] HLA-T) in the muscle tissue, and clarified the promises and challenges in discovering causal gene networks in tissues under in vivo human settings.

AvailabilityThe code implementing our method is available at: https://github.com/BIRDSgroup/NLCD.

---

## 论文详细总结（自动生成）

这是一份关于论文《NLCD: A method to discover nonlinear causal relations among genes》的结构化深入总结：

### 1. 核心问题与整体含义（研究动机和背景）
在生物信息学中，区分基因间的**相关性**与**因果关系**至关重要（如识别药物靶点 vs. 诊断标志物）。**孟德尔随机化（MR）**框架利用遗传变异（SNP）作为工具变量来推断因果，但现有的主流工具（如 CIT, Findr, MRPC）大多假设基因间的关系是**线性**的。
然而，生物系统普遍存在非线性相互作用（如昼夜节律基因、复杂的转录调控）。如果强制使用线性模型拟合非线性数据，会导致因果识别的效力下降或产生误报。因此，本研究提出了 **NLCD（NonLinear Causal Discovery）**，旨在通过非线性建模提升基因因果网络发现的准确性。

### 2. 方法论：核心思想与技术细节
NLCD 扩展了经典的因果推理检验（CIT）框架，将其从线性推广到非线性领域。
*   **核心思想**：给定三元组 $(L, A, B)$，其中 $L$ 是 SNP，$A$ 和 $B$ 是基因表达量。NLCD 通过四个统计检验来验证因果链 $L \to A \to B$：
    1.  **Test 1**: $L$ 与 $B$ 是否相关。
    2.  **Test 2**: 在给定 $B$ 的情况下，$L$ 与 $A$ 是否相关（条件相关性）。
    3.  **Test 3**: 在给定 $L$ 的情况下，$A$ 与 $B$ 是否相关（验证 $A, B$ 关联）。
    4.  **Test 4 (核心创新)**: **条件独立性检验**，即在给定 $A$ 的情况下，$L$ 是否与 $B$ 独立（$L \perp B | A$）。
*   **关键技术**：
    *   **非线性回归 (NLR)**：使用核岭回归 (KRR)、支持向量回归 (SVR) 或人工神经网络 (ANN) 来捕捉 $f(A)$ 的非线性形式。
    *   **条件特征重要性 (CFI) 评分**：这是 NLCD 的核心指标。它衡量在控制 $A$ 的情况下，改变 $L$ 的取值对预测 $B$ 的影响。如果 $A$ 确实是 $B$ 的唯一直接原因，那么 CFI 应该很低。
    *   **置换检验 (Permutation Test)**：通过多次随机打乱数据生成经验 p 值，最终取四个检验中最大的 p 值作为综合因果 p 值。

### 3. 实验设计
*   **数据集/场景**：
    1.  **模拟数据**：构建了线性、正弦 (Sine)、锯齿 (Sawtooth)、抛物线 (Parabola) 等多种因果关系模型，以及独立模型作为负样本。
    2.  **酵母数据**：使用 1012 个酵母分离株的基因组和转录组数据，以 YEASTRACT+ 数据库中的转录因子 (TF) 到靶基因 (TG) 的调控关系作为金标准。
    3.  **人类数据**：使用 GTEx (v8) 多组织数据（重点分析样本量最大的肌肉组织，$n=706$）。
*   **对比方法 (Baselines)**：CIT（线性基准）、Findr（基于贝叶斯推理）、MRPC（基于 PC 算法的 MR 扩展）。

### 4. 资源与算力
*   **算力说明**：文中未明确提及具体的 GPU 型号或训练时长。
*   **算法复杂度**：作者指出 NLCD (KRR) 的运行时间随样本量 $n$ 呈**立方增长** ($O(n^3)$)，并随置换次数线性增长。
*   **软件实现**：使用 Python 的 `scikit-learn` 实现非线性模型，并使用 MATLAB 的 `EPEPT` 优化小 p 值的估计分辨率。

### 5. 实验数量与充分性
*   **实验规模**：
    *   模拟实验涵盖了不同样本量（100, 300, 500, 1000）和多种函数类型，每组包含 100 个因果和 100 个独立三元组。
    *   酵母实验包含 1752 对正样本和等量的负样本，并根据非线性程度（$\delta$）进行了子集划分。
    *   人类实验覆盖了 GTEx 的 10 个主要组织。
*   **充分性评价**：实验设计较为全面，不仅验证了非线性场景下的优越性，还证明了在传统线性场景下 NLCD 依然稳健（不输于线性方法）。通过对不同非线性指标（BCMI, Spearman）的敏感性分析，增强了结果的可信度。

### 6. 主要结论与发现
1.  **模拟数据**：在非线性（正弦、锯齿）关系中，NLCD 的 AUPRC 显著高于 CIT 和 Findr（例如在锯齿模型中，NLCD 0.76 vs CIT 0.60）。在线性模型中，NLCD 与 SOTA 方法表现持平。
2.  **酵母数据**：在高度非线性的基因对子集中，NLCD 和 CIT 表现优于 Findr 和 MRPC。
3.  **人类数据**：在肌肉组织中识别出 $IRF1 \to PSME1$ 等已知因果对，并发现许多涉及伪基因（Pseudogenes）的潜在调控关系。
4.  **方向性**：NLCD 能够有效区分因果方向（$A \to B$ vs $B \to A$）。

### 7. 优点
*   **灵活性**：模型无关（Model-agnostic），可以灵活嵌入 KRR、SVR 或神经网络。
*   **非线性捕捉能力**：通过 CFI 评分解决了线性模型在处理复杂生物关联时的失效问题。
*   **稳健性**：能够处理不同基因型下的异方差性（Unequal variance），这在真实遗传数据中很常见。

### 8. 不足与局限
*   **计算开销**：由于涉及多次置换检验和核矩阵运算，在大样本量（如数万人的生物样本库）下计算成本较高。
*   **样本量依赖**：在人类 GTEx 数据应用中发现，样本量较小时（低于 500）很难通过严格的统计校正，限制了其在小规模临床研究中的应用。
*   **映射偏倚风险**：真实数据中的基因序列相似性（Mappability）可能导致假阳性，虽然文中进行了过滤，但这仍是所有此类方法的共同挑战。
*   **金标准稀缺**：在人类组织中缺乏大规模的活体因果金标准，导致真实数据的结果验证主要依赖于文献支持。

（完）
