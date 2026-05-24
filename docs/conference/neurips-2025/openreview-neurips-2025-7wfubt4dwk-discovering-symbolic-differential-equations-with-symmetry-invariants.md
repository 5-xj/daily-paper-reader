---
title: Discovering Symbolic Differential Equations with Symmetry Invariants
title_zh: 利用对称不变量发现符号微分方程
authors: "Jianke Yang, Manu Bhat, Bryan Hu, Yadi Cao, Nima Dehmamy, Robin Walters, Rose Yu"
date: 2025-04-16
pdf: "https://openreview.net/pdf?id=7WfubT4dwK"
tags: ["query:ad"]
score: 9.0
evidence: 利用对称不变量进行符号微分方程发现，缩小搜索空间
tldr: 该论文针对符号微分方程发现中搜索空间巨大且易违反物理定律的问题，提出利用对称不变量作为原子实体来约束方程形式。核心思想是利用微分方程如果具有对称群则可表示为对称变换的不变量组合，从而在发现过程中自动保证方程满足指定对称性。该方法可与现有方程发现方法无缝集成，实验证明在多种动力系统数据上能更高效地恢复出正确且具有物理意义的方程，显著降低了搜索复杂度。
source: NeurIPS-2025-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-7wfubt4dwk/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 2604, \"height\": 1292}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-7wfubt4dwk/fig-002.webp\", \"caption\": \"\", \"page\": 29, \"index\": 2, \"width\": 373, \"height\": 373}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-7wfubt4dwk/fig-003.webp\", \"caption\": \"\", \"page\": 29, \"index\": 3, \"width\": 373, \"height\": 373}]"
motivation: 从数据中发现微分方程时，传统方法搜索空间庞大且可能生成违反物理定律的方程。
method: 引入对称不变量概念，将微分方程表示为对称变换不变量的函数，作为方程发现的原子实体，约束搜索空间并保证物理一致性。
result: 在多个动力系统数据集上，该方法以更少的搜索步数恢复出正确且保持物理对称性的微分方程，优于基线。
conclusion: 利用对称性先验可有效提升符号方程发现的效率与可靠性，为物理感知的自动建模提供了新范式。
---

## Abstract
Discovering symbolic differential equations from data uncovers fundamental dynamical laws underlying complex systems. However, existing methods often struggle with the vast search space of equations and may produce equations that violate known physical laws.
In this work, we address these problems by introducing the concept of \textit{symmetry invariants} in equation discovery. We leverage the fact that differential equations admitting a symmetry group can be expressed in terms of differential invariants of symmetry transformations. Thus, we propose to use these invariants as atomic entities in equation discovery, ensuring the discovered equations satisfy the specified symmetry. Our approach integrates seamlessly with existing equation discovery methods such as sparse regression and genetic programming, improving their accuracy and efficiency. We validate the proposed method through applications to various physical systems, such as fluid and reaction-diffusion, demonstrating its ability to recover parsimonious and interpretable equations that respect the laws of physics.

---

## 论文详细总结（自动生成）

## 论文详细中文总结

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：从观测数据中自动发现象征性微分方程（符号微分方程发现）是科学建模的重要目标。然而，现有的方法（如稀疏回归、遗传编程）面临两大挑战：一是方程的搜索空间极其庞大，导致效率低下；二是发现出的方程可能违反已知的物理定律（如对称性），缺乏物理可解释性。
- **研究动机**：物理系统中的对称性（如旋转、平移、缩放）是普遍存在的自然约束，能有效缩小搜索空间并保证解的正确性。现有工作虽然尝试引入对称性，但多局限于特定方程类型（如代数方程、ODE）或特定算法（如仅适用于稀疏回归）。因此，需要一个通用框架，能将对称性约束无缝集成到各种符号回归算法中。
- **整体含义**：本文提出利用**对称不变量（symmetry invariants）** 作为方程发现的基本原子实体。根据微分不变量理论，如果一个偏微分方程（PDE）容许一个对称群，那么它可以完全由该群的不变量函数表达。因此，在符号回归中直接使用不变量代替原始变量和导数，可以自动保证发现的方程满足指定对称性，从而提升搜索效率和结果的物理合理性。

### 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：将对称群的不变量（微分不变量）作为符号回归的变量集合，而不是原始变量和偏导数。这样可以精确保留对称约束，自动排除违反对称性的方程。
- **关键技术细节**：
  - **微分不变量定义**：设对称群 \(G\) 作用在空间 \(X \times U\) 上，微分不变量 \(\eta\) 是 jet 空间上的光滑函数，在 \(G\) 的延长群作用下保持不变。对于由无穷小生成元 \(\{v_a\}\) 生成的连续群，有 \(v_a^{(n)}(\eta)=0\)。
  - **关键定理（Thm 3.2）**：若一个 \(n\) 阶 PDE 容许对称群 \(G\)，则它等价于一个仅关于一组完备的 \(n\) 阶微分不变量的方程 \(\tilde{F}(\eta_1,\dots,\eta_k)=0\)。
  - **构造不变量**：利用无穷小生成元求解一阶线性偏微分方程 \(v^{(n)}(\eta)=0\)，并结合提议的递推公式（Prop 3.3）从低阶不变量构造高阶不变量。文中给出了 SO(2) 旋转对称和缩放平移对称的例子。
  - **集成到现有算法**：
    - **通用显式符号回归（如遗传编程）**：对每个不变量依次作为标签，其余不变量作为特征，使用基础算法学习方程 \(\eta_k = f_k(\eta_{-k})\)，然后选择拟合误差最小的方程（算法 1）。
    - **稀疏回归（SINDy）**：有两种方式：① 直接使用不变量作为变量，构建函数库进行线性回归（算法 2）；② 将对称约束转化为对原参数 \(W\) 的线性约束（Prop 3.4），从而保持原始 SINDy 的优化形式，便于与弱 SINDy 等变体结合。
  - **约束松弛（处理非完美对称）**：采用 Residual Pathway Prior 方法，将参数分解为对称保持部分和对称破坏部分，并对破坏部分施加更强的正则化，从而允许轻微的对称破缺出现在方程中。
- **算法流程（文字描述）**：
  1. 给定对称群的无穷小生成元和所需阶数，计算完备的微分不变量集。
  2. 在数据上评估所有不变量。
  3. 对于每个不变量作为标签，其余作为特征，使用基础符号回归算法（如 SINDy 或 GP）学习方程。
  4. 选出一个误差最小的方程作为最终结果；可选地，将不变量展开回原始变量。

### 3. 实验设计：数据集、基准、对比方法

- **数据集与场景**（三个 PDE 系统，涵盖不同挑战）：
  - **Boussinesq 方程（水波）**：四阶非线性方程，具有缩放和时间/空间平移对称性。挑战：不包含标准 SINDy 库中的项（如 \(u_x^2\)），需要高阶导数。
  - **Darcy 流动**：稳态二维达西流，具有旋转对称性（SO(2)），方程含有指数项 \(e^{-4(x^2+y^2)}\)，不适合稀疏回归的线性组合形式。
  - **反应-扩散系统**：二维两变量系统，具有相位旋转对称性。还测试了噪声数据和非完美对称（扩散系数不等、外力扰动）。
- **基准（ground truth）**：每个系统都通过数值模拟生成清洁数据，并保留测试集用于评估预测误差。
- **对比方法**：
  - 基础方法：稀疏回归（PySINDy）、遗传编程（PySR）、符号 transformer（E2E）。
  - 增强版本：每个基础方法加上对称不变量（SI）版本。
  - 额外变体：PySINDy*（扩展库）、SI-aligned（线性约束版）、弱 SINDy（处理噪声）。
- **评估指标**：
  - **成功概率（Success Probability, SP）**：100 次独立运行中，发现的方程与真实方程完全匹配（项对齐）的比例。
  - **预测误差（Prediction Error, PE）**：对演化方程，从相同初始条件模拟至终时刻，计算 RMSE；对稳态方程，计算残差 RMSE。

### 4. 资源与算力

- 论文在附录 E 中提到：实验使用 **12 个 INTEL(R) XEON(R) PLATINUM 8558 CPU**，无提及 GPU。每个实验在数分钟内可重现。因此，算力需求较低，未涉及大规模分布式训练。

### 5. 实验数量与充分性

- **实验数量**：
  - 主实验（表 1）：对每个 PDE 系统，每个方法均运行 100 次，统计成功概率和预测误差。
  - 补充实验：
    - 不同稀疏回归变体（PySINDy*, SI-aligned）对比（表 3）。
    - 基因编程在不同迭代次数下的成功率曲线（图 5）。
    - 噪声数据实验（图 3 左）：两种噪声水平 × 两种测试函数数量。
    - 非完美对称实验（图 3 中/右）：两种破缺类型（不等扩散系数、外部强迫） × 不同破缺强度。
    - 预测误差随时间演化曲线（图 6、7）。
- **充分性**：实验覆盖多种 PDE 类型、多种对称破缺场景、多种基础算法、干净及含噪数据，且重复 100 次保证统计可靠性。对比公平（相同数据集、相同超参设置、同一随机种子下比较）。整体充分且客观。

### 6. 论文的主要结论与发现

- **主要发现**：
  - 使用对称不变量显著降低搜索空间复杂度（参数/变量数减少），并提高成功概率。例如，Boussinesq 方程中 SI（SINDy+不变集）成功率 100%，而原始 PySINDy 为 0%。
  - 在遗传编程中，SI 方法能以更少迭代次数恢复正确方程（如 Boussinesq：SI 5 次迭代即 100% 成功，PySR 15 次迭代才 90%）。
  - 在噪声数据下，结合弱 SINDy 和对称约束，SI 方法在相同测试函数数量下成功率始终高于无约束版本。
  - 在非完美对称系统中，严格的对称约束（SI）会降低成功率，但松弛版本（SI-relaxed）仍优于无对称约束的基线，表明即使部分正确的对称先验也能带来收益。
- **核心结论**：微分不变量是一种通用的、有效的物理先验，可以无缝集成到多种符号回归算法中，提升方程发现准确性、效率和鲁棒性。

### 7. 优点

- **通用性强**：方法不依赖特定方程形式或算法，可与稀疏回归、遗传编程、Transformer 等任意符号回归方法结合。
- **理论坚实**：基于微分不变量理论的严格数学基础，确保发现的方程必然满足指定对称性。
- **处理噪声和非完美对称**：通过弱公式和松弛约束，方法在实际噪声和对称破缺场景下依然表现良好。
- **计算开销小**：计算不变量是一次性工作，且对计算机资源要求低（仅需 CPU）。
- **实验充分**：多数据集、多算法、多场景的对比，结果可信。

### 8. 不足与局限

- **对称群需已知**：方法假设对称群事先给定。若对称未知或错误指定，将无法应用或产生错误结果。论文指出未来可结合自动对称发现方法解决，但当前未实现。
- **不变量计算复杂**：高阶不变量的推导可能复杂，尤其当对称群结构复杂时。虽可借助符号计算工具，但用户需要一定数学背景进行简化和调整，增加了应用门槛。
- **实验覆盖有限**：只测试了三个 PDE 系统，且均为单一方程或简单耦合系统。未验证在高维、复杂边界条件或大型方程系统上的可扩展性。
- **对算法依赖**：虽然通用，但具体实现仍需根据基础算法的形式做适配（例如，SINDy 要求线性形式，条件较为严格）。
- **未公开代码与数据**（论文审稿版本可能未提供，但实际评审时要求补全）。文中提到提供了代码和指令，但需确保可复现。

（完）
