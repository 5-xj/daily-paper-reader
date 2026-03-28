---
title: Parameterizing the genetic architecture under stabilizing selection
title_zh: 稳定选择下的遗传架构参数化
authors: "Lee, H., Terhorst, J."
date: 2026-03-27
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.27.714826v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 遗传结构参数化与进化理论
tldr: 针对复杂性状中大效应变异频率较低的现象，本研究提出了一种基于进化理论的遗传架构参数化方法。不同于传统的唯象α模型，该方法通过线性混合模型将突变方差、选择强度等进化参数直接引入，利用REML进行估计并结合BLUP进行预测。模拟实验证明，该模型能更准确地恢复性状方差并显著提升遗传预测性能，实现了进化机制与统计遗传学的有机结合。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-27-714826-v1/fig-001.webp\", \"caption\": \"Figure 2: REML estimates of σ2 b across forward-simulation replicates. Columns correspond to the true WS , rows correspond to the true ρ2ab, and the x-axis gives the true σ2 b . Horizontal reference lines indicate the true values.\", \"page\": 16, \"index\": 1, \"width\": 876, \"height\": 816}]"
motivation: 现有的α模型仅是唯象描述，缺乏明确的群体遗传学解释，难以直接反映进化机制对遗传架构的影响。
method: 基于适应度景观模型推导出一种新的线性混合模型，将频率依赖性表达为突变方差和选择强度等可解释进化参数的函数。
result: 前向模拟实验表明，该模型能准确估算性状方差，且在遗传预测准确度上普遍优于传统的α模型基准。
conclusion: 该框架成功将进化生物学理论与标准混合模型方法相结合，为推断进化参数和提升复杂性状预测提供了有力工具。
---

## 摘要
在许多复杂性状中，效应值较大的遗传变异往往以较低的频率出现，这通常被解释为稳定选择的特征。在统计遗传学中，所谓的 α 模型通过假设效应值方差与杂合度的幂（0 < α < 1）成反比来捕捉这种关系。尽管在经验上很有用，但 α 模型是现象学的而非机制性的，且缺乏直接的群体遗传学解释。在本文中，我们基于进化理论推导出了 α 模型的一个替代方案。我们的方法产生了一个线性混合模型，其中效应值的频率依赖性自然地表现为可解释的进化量的函数，这些进化量描述了突变方差、选择强度以及目标性状与受选性状之间的耦合。这些量通过两个可识别的方差分量进入模型，并可以通过限制最大似然法 (REML) 进行估计。由此产生的框架将适应度景观模型与标准的混合模型方法联系起来，既能进行进化参数的推断，也能通过最佳线性无偏预测 (BLUP) 进行下游预测。在正向模拟中，该模型准确地恢复了目标性状的方差，并且相对于传统的 α 模型基准，通常提高了遗传预测的准确性。

## Abstract
Across many complex traits, genetic variants with larger effect sizes tend to occur at lower frequencies, which is often interpreted as a signature of stabilizing selection. In statistical genetics, the so-called -model captures this relationship by assuming that effect size variance is inversely proportional to heterozygosity raised to a power 0 <  < 1. Although empirically useful, the -model is phenomenological rather than mechanistic and lacks a direct population-genetic interpretation. In this paper, we derive an alternative to the -model based on evolutionary theory. Our approach yields a linear mixed model in which the frequency dependence of effect size emerges naturally as a function of interpretable evolutionary quantities describing mutational variance, selection intensity, and coupling between the focal and selected traits. These quantities enter through two identifiable variance components that can be estimated by restricted maximum likelihood (REML). The resulting framework links a fitness-landscape model to standard mixed-model methodology, enabling both inference on evolutionary parameters and downstream prediction by best linear unbiased prediction (BLUP). In forward simulations, the model accurately recovers the focal-trait variance and generally improves genetic prediction relative to conventional -model baselines.

---

## 论文详细总结（自动生成）

这篇论文由 H. Lee 和 J. Terhorst 撰写，旨在通过进化生物学理论重新参数化复杂性状的遗传架构，从而改进统计遗传学中的性状预测和参数推断。以下是对该论文的详细总结：

### 1. 核心问题与整体含义（研究动机和背景）
*   **核心问题**：在人类复杂性状中，普遍观察到“效应值大小与等位基因频率成反比”的现象（即罕见变异往往具有更大的效应）。
*   **背景**：目前统计遗传学常用 **$\alpha$ 模型** 来描述这种关系，该模型假设效应方差与杂合度 $[2p(1-p)]^\alpha$ 成比例。
*   **研究动机**：$\alpha$ 模型是一个**唯象模型（Phenomenological）**，虽然在拟合数据上有效，但缺乏明确的群体遗传学解释，无法告诉我们关于突变、选择强度或性状进化历史的生物学信息。作者希望建立一个基于**进化机制（稳定选择）**的统计框架，将进化参数直接引入线性混合模型（LMM）。

### 2. 论文提出的方法论
*   **核心思想**：利用适应度景观模型（如 Fisher 几何模型）推导性状效应值的分布。在稳定选择下，性状效应的大小受限于其对适应度的影响。
*   **关键技术细节**：
    *   **理论推导**：作者推导出效应值 $\beta$ 的方差不再是简单的幂律函数，而是由**突变方差 ($\sigma^2_b$)**、**选择强度 ($w_S$)** 以及**目标性状与受选性状之间的相关性 ($\rho^2_{ab}$)** 共同决定的函数。
    *   **线性混合模型 (LMM) 整合**：将推导出的频率依赖关系嵌入到 LMM 的随机效应协方差矩阵中。
    *   **参数估计与预测**：
        *   使用**限制最大似然法 (REML)** 来估计模型中的进化方差分量。
        *   使用**最佳线性无偏预测 (BLUP)** 进行个体表型值的遗传预测。
*   **流程**：从进化理论出发 -> 推导效应方差与频率 $p$ 的函数关系 -> 构建亲缘关系矩阵 (GRM) -> REML 估计参数 -> BLUP 预测。

### 3. 实验设计
*   **数据集/场景**：使用了**前向进化模拟（Forward-time simulations）**。这种方法可以精确控制突变率、选择系数和群体历史，从而验证模型是否能找回“真实值”。
*   **Benchmark（基准）**：
    *   传统的 **$\alpha$ 模型**（通常设定 $\alpha = -1$ 或通过数据估计 $\alpha$）。
    *   忽略频率依赖性的标准 GBLUP 模型。
*   **对比维度**：
    *   **方差分量估计的准确性**：REML 估计的 $\sigma^2_b$ 是否接近模拟设定的真实值。
    *   **预测准确度**：比较不同模型在独立测试集上的预测 $R^2$ 或相关性。

### 4. 资源与算力
*   **算力说明**：论文中**未明确说明**具体的硬件配置（如 GPU 型号、数量）或具体的训练时长。
*   **推测**：由于该方法基于 REML 和 LMM，其计算开销主要集中在矩阵求逆和优化迭代上，通常在标准 CPU 集群上即可完成，但对于大规模样本（如 UK Biobank 级别）可能需要高效的算法优化。

### 5. 实验数量与充分性
*   **实验规模**：作者在不同的选择强度 ($w_S$)、性状相关性 ($\rho^2_{ab}$) 和突变方差 ($\sigma^2_b$) 组合下进行了多组重复模拟（如图 2 所示的网格实验）。
*   **充分性**：实验覆盖了从弱选择到强选择、从高度相关到不相关的多种进化场景。通过前向模拟验证了模型在不同遗传架构下的鲁棒性，实验设计较为严谨且具有客观性。

### 6. 主要结论与发现
*   **参数恢复准确**：新模型通过 REML 能够准确地恢复模拟实验中的真实进化参数（如突变方差），而 $\alpha$ 模型无法提供这些生物学解释。
*   **预测性能提升**：在存在稳定选择的情况下，新模型在遗传预测（Polygenic Prediction）的准确性上普遍优于传统的 $\alpha$ 模型。
*   **理论统一**：成功将进化生物学的“适应度景观”理论与统计遗传学的“混合模型”工具箱有机结合。

### 7. 优点
*   **机制性强**：赋予了统计模型明确的生物学意义，使研究者能从 GWAS 数据中推断进化选择的强度。
*   **预测更准**：通过更真实的频率依赖性建模，捕捉到了罕见变异对表型贡献的精细结构。
*   **兼容性好**：该框架可以无缝集成到现有的 LMM 软件流程中。

### 8. 不足与局限
*   **模型假设限制**：该方法假设性状处于稳定选择（Stabilizing Selection）下，如果性状受定向选择（Directional Selection）或中性进化主导，模型的适用性可能受限。
*   **计算复杂度**：虽然比 $\alpha$ 模型更精确，但引入了更多的非线性参数，在大规模数据集上的 REML 收敛速度和计算内存可能是个挑战。
*   **验证局限**：目前主要在模拟数据上验证，在真实复杂的人类表型数据（受环境、群体结构干扰）上的表现仍需进一步的大规模实证研究。

（完）
