---
title: Discovering Symbolic Differential Equations with Symmetry Invariants
title_zh: 利用对称不变量发现符号微分方程
authors: "Jianke Yang, Manu Bhat, Bryan Hu, Yadi Cao, Nima Dehmamy, Robin Walters, Rose Yu"
date: 2025-04-16
pdf: "https://openreview.net/pdf?id=7WfubT4dwK"
tags: ["query:sr"]
score: 9.0
evidence: 具有对称约束的符号微分方程发现
tldr: 从数据中发现符号微分方程是揭示动力学定律的关键，但搜索空间巨大且结果可能违反物理规律。本文引入对称不变量概念，将微分方程表示为对称变换下微分不变量，以此作为原子单元进行方程发现，确保结果满足预设对称性。该方法可无缝集成到现有方程发现算法中，在多个基准上显著提升搜索效率和方程可解释性，为科学知识发现提供了新范式。
source: NeurIPS-2025-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-7wfubt4dwk/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1296, \"height\": 646, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-7wfubt4dwk/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 614, \"height\": 420, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-7wfubt4dwk/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1452, \"height\": 422, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-7wfubt4dwk/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1376, \"height\": 1324, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-7wfubt4dwk/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1459, \"height\": 395, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-7wfubt4dwk/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1376, \"height\": 572, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-7wfubt4dwk/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1384, \"height\": 599, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-7wfubt4dwk/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1444, \"height\": 350, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-7wfubt4dwk/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1457, \"height\": 1904, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-7wfubt4dwk/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 845, \"height\": 263, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-7wfubt4dwk/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1444, \"height\": 480, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-7wfubt4dwk/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1108, \"height\": 245, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-7wfubt4dwk/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1440, \"height\": 715, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-7wfubt4dwk/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1424, \"height\": 264, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-7wfubt4dwk/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1303, \"height\": 331, \"label\": \"Table\"}]"
motivation: 现有方程发现方法搜索空间大且可能违反物理定律。
method: 利用对称不变量作为构建块，将方程发现转化为不变量组合优化问题，确保结果满足对称性约束。
result: 在多个动力学系统数据上，该方法发现的方程不仅准确度更高，而且天然符合物理对称性。
conclusion: 对称不变量为符号方程发现提供了强有力的归纳偏置，有助于更可靠的科学知识提取。
---

## Abstract
Discovering symbolic differential equations from data uncovers fundamental dynamical laws underlying complex systems. However, existing methods often struggle with the vast search space of equations and may produce equations that violate known physical laws.
In this work, we address these problems by introducing the concept of \textit{symmetry invariants} in equation discovery. We leverage the fact that differential equations admitting a symmetry group can be expressed in terms of differential invariants of symmetry transformations. Thus, we propose to use these invariants as atomic entities in equation discovery, ensuring the discovered equations satisfy the specified symmetry. Our approach integrates seamlessly with existing equation discovery methods such as sparse regression and genetic programming, improving their accuracy and efficiency. We validate the proposed method through applications to various physical systems, such as fluid and reaction-diffusion, demonstrating its ability to recover parsimonious and interpretable equations that respect the laws of physics.

---

## 论文详细总结（自动生成）

好的，作为一名资深学术论文分析助手，以下是对给定论文《Discovering Symbolic Differential Equations with Symmetry Invariants》的结构化、深入、客观的中文总结。

### 1. 核心问题与整体含义 (研究动机和背景)

*   **核心问题**：从观测数据中自动发现物理系统的符号微分方程（PDE）是科学发现的关键，但现有方法面临两大挑战：
    1.  **搜索空间巨大**：符号回归（如遗传编程）需要从海量的表达式组合中搜索，效率低下且容易过拟合。
    2.  **违反物理常识**：找到的数学表达式虽然在数值上拟合数据，但可能不符合基本的物理定律（如守恒律、对称性），缺乏可解释性和泛化能力。
*   **整体含义**：为了克服这些困难，论文提出了一种通用框架，通过将**对称性**这一核心物理归纳偏置**强制**嵌入到方程发现过程中。其核心思想是利用**微分不变量**（Differential Invariants）来构建新的变量空间，确保在该空间中搜索出的方程天然满足预设的对称性，从而大幅缩小搜索空间、提升准确性和可解释性。

### 2. 方法论 (核心思想、关键技术细节、算法流程)

*   **核心思想**：利用李群理论中的一个基本定理：如果一个微分方程承认一个对称群，那么该方程可以被等价地表示为该群**微分不变量**的函数。因此，用这些不变量代替原始变量进行符号回归，就能保证输出方程自动满足对称性。
*   **关键技术细节**：
    1.  **微分不变量的构建**：给定一个对称群的无穷小生成子（向量场），通过求解一阶线性偏微分方程 \( pr^{(n)}v(\eta) = 0 \) 来获得不变量。为了高效计算高阶不变量，论文利用了Proposition 3.3中给出的递归公式，可以从低阶不变量通过行列式运算构造出高阶不变量。
    2.  **与不同符号回归方法的整合**:
        *   **稀疏回归 (SINDy)**:
            *   **方案一（直接法）**：将方程的左端（LHS）和右端（RHS）库函数都替换为微分不变量，如 Algorithm 2 所示。
            *   **方案二（参数约束法）**：通过 Proposition 3.4 证明，对称性约束可以转化为对原始SINDy参数 \( W \) 的线性子空间约束。这允许在优化过程中直接约束原始参数，更易于与弱形式SINDy（处理噪声数据）结合。
        *   **遗传编程 (GP) & 符号Transformer**：采用 Algorithm 1 的通用策略。将微分不变量集合作为新的变量集。通过遍历每个不变量作为标签（LHS），其余作为特征（RHS）进行回归，选择误差最小的方程。
    3.  **松弛约束处理不完全对称**：对于存在微小对称性破缺的现实系统（如扩散系数不同或外部干扰），论文借鉴了“残差路径先验”（RPP）的思想。将参数 \( W \) 分解为严格对称部分 \( A \) 和破缺部分 \( B \)，并对破缺部分施加更强的正则化（\( L2 \) 惩罚），允许模型在必要时学习轻微的对称性破缺，但会付出更高代价。

### 3. 实验设计 (数据集、基准、对比方法)

*   **数据集/场景**：选取了三个具有不同挑战的物理系统：
    1.  **Boussinesq方程**：描述浅水波，包含高阶导数和非线性项，用于测试处理复杂方程形式的能力。
    2.  **Darcy流**：稳态方程，具有旋转对称性（SO(2)），涉及非多项式项，用于测试处理非标准方程结构的能力。
    3.  **反应-扩散系统**：包含多个因变量（\( u, v \)）和方程的方程组，用于测试更复杂的系统。
    *   **额外挑战**：在反应-扩散系统上，进一步测试了**噪声数据**和**不完全对称**（通过不均匀扩散系数或外部强迫实现）等鲁棒性场景。
*   **基准与方法对比**：
    *   **对比方法**：对每一类符号回归算法，都对比了**原版算法**和论文提出的使用**对称不变量（SI）** 的版本。
        *   **稀疏回归**: PySINDy vs. SI-SINDy (及变种)。
        *   **遗传编程**: PySR vs. SI-GP。
        *   **符号Transformer**: E2E vs. SI-E2E。
    *   **评估指标**：
        *   **成功率 (SP)**：在100次随机运行中，正确发现方程的比例。
        *   **预测误差 (PE)**：对于演化方程，用发现的方程模拟未来状态与真解的均方根误差（RMSE）；对于稳态方程，评估方程在测试点上的残差。

### 4. 资源与算力

*   论文在附录E开头提到：“我们的实验使用12个Intel(R) Xeon(R) Platinum 8558 CPU进行，并且应该可以在任何现代CPU上在几分钟内重现。”
*   **关键点**：论文**未提及使用GPU**，所有实验均基于CPU完成。这表明该方法在计算资源需求上是相对经济的。

### 5. 实验数量与充分性

*   **实验数量**：
    *   **主实验(Table 1)**：在三个系统上，对三种方法的原版和SI版进行对比，重复100次，共3 (systems) × 3 (methods) × 2 (versions) × 100 (runs) = 1800次实验。
    *   **消融与鲁棒性实验(Fig. 3, Fig. 5)**：包括不同迭代次数的GP实验（3 levels × 100 runs）、不同噪声等级实验（5 levels × 2 methods × 100 runs）、不同对称性破缺强度的实验（多组 × 3 methods × 100 runs）。实验数量丰富。
*   **充分性与客观性**：
    *   **充分性**：实验覆盖了不同的方程类型、不同的底层算法、以及噪声和不完全对称等实际挑战，设计较为全面。
    *   **客观/公平**：对比是直接在同一类算法（如GP-SI vs GP）中进行的，控制变量法做得较好。成功率基于大量随机种子计算，结果统计意义较强。选择中位数而非平均数报告预测误差，能有效排除异常值影响，处理方式恰当。

### 6. 主要结论与发现

*   **提升准确性与效率**：在几乎所有实验场景中，使用对称不变量的方法（SI）在成功率和预测误差上都显著优于同类基础方法。特别是在遗传编程中，SI方法能用更少的迭代次数找到正确方程，效率更高。
*   **自动识别有效库函数**：在Boussinesq方程实验中，原版PySINDy因库函数不包含 \( u_x^2 \) 而失败，但SI-SINDy通过使用不变量自动构建了包含所需项的库，成功发现了方程。这凸显了对称性作为强大归纳偏置的优势。
*   **对噪声的鲁棒性**：在反应-扩散系统的高噪声实验中，SI方法始终优于传统的SINDy方法。
*   **对不完全对称的处理**：当系统存在轻微对称性破缺时，严格强制对称性（SI）会降低性能，但采用松弛约束的版本（SI-relaxed）仍能保持高水平表现，远优于完全没有对称性知识的SINDy基线。这表明该方法具有很好的实用弹性。

### 7. 优点 (方法与实验创新亮点)

*   **理论优雅、通用性强**：该方法基于坚实的李群理论，提供了一个统一、通用的框架，可以无缝集成到几乎所有主流的符号回归算法中，而不限制方程的具体形式。
*   **自动确保物理合理性**：最核心的优点是，产生的方程天然满足预设的物理对称性，这是很多黑箱方法无法保证的，极大提升了发现结果的可信度和可解释性。
*   **实验验证充分且有针对性**：实验设计不仅证明了方法在标准情况下的优越性，还特别针对了噪声和对称性破缺这两个实际应用中常见且棘手的挑战，验证了方法的鲁棒性，增强了结论的说服力。
*   **处理不完全对称的机制**：提出的约束松弛机制非常巧妙，解决了“完美对称”假设在现实世界中的局限性，提高了方法的实用价值。

### 8. 不足与局限

*   **对称性需预先设定**：该方法一个根本性的局限是**必须预先知道系统的对称性**。如果对称性未知或指定错误（例如，误以为有旋转对称性但实际上没有），则方法会失败或得到错误结果。论文也承认，这通常需要物理学家首先提出假设。
*   **不变量的构建可能复杂**：虽然论文给出了构建不变量的一般流程（Proposition 3.3），但对于复杂的、多参数的对称群，手动或程序化地计算和简化不变量仍然可能是一个困难且需要专业知识的过程。论文承认，可能需要“ad-hoc adjustment”来获得更简单、更适合算法实现的表达式。
*   **实验覆盖的局限性**：
    *   **系统规模**：论文主要验证了单因变量和二维空间/相空间的系统。对于更高维、包含更多因变量或更复杂耦合的系统，其扩展性和有效性未经测试。
    *   **算法覆盖**：虽然声称通用，但论文重点测试了SINDy和GP。对于符号Transformer，其效果提升远不如前两者显著（甚至在部分任务中SI版也失败），表明该方法对不同算法的影响程度差异很大，特别是在处理高度复杂的神经网络模型时可能遇到瓶颈。
*   **应用限制**：该方法旨在“发现”方程，而非“求解”方程。它不能提高已发现方程的数值求解精度。

（完）
