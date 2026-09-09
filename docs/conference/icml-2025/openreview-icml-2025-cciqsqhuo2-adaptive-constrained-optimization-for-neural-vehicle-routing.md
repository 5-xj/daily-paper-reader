---
title: Adaptive Constrained Optimization for Neural Vehicle Routing
title_zh: 面向神经车辆路径问题的自适应约束优化
authors: "Chengrui Gao, Haopu Shang, Yuyang Jiang, Ke Xue, Chao Qian"
date: 2025-01-21
pdf: "https://openreview.net/pdf?id=cCIQSqhuo2"
tags: ["query:atsp"]
score: 4.0
evidence: 非ATSP专属；针对带约束的神经车辆路径问题，属于相近的组合路由优化。
tldr: 该文指出现有神经组合优化求解器在处理带复杂约束的车辆路径问题时，统一对偶变量难以适应不同实例的难度差异。为此提出实例级自适应约束优化框架，为每个实例引入自己的对偶变量，并设计了基于对偶变量条件的优化算法。实验显示该方法能改善约束满足率与解的质量，推动神经求解器在复杂约束组合优化中的应用。
source: ICML-2025-Rejected-Public
selection_source: conference_retrieval
motivation: 神经求解器在复杂约束车辆路径问题中的表现仍受限，统一对偶变量忽略实例间约束难度差异，导致次优求解。
method: 提出实例级自适应约束优化，重写拉格朗日对偶问题使每个实例独立匹配对偶变量，并设计相应的高效优化算法。
result: 论文通过带复杂约束的车辆路径实验验证了自适应约束优化框架的有效性，并展示了其在解质量和约束满足上的优势。
conclusion: 实例级自适应对偶变量为约束化神经组合优化提供了一条更通用且高效的路径，对ATSP等路由问题的约束求解也有潜在借鉴意义。
---

## Abstract
Neural solvers have shown remarkable success in tackling Vehicle Routing Problems (VRPs). However, their application to scenarios with complex real-world constraints is still at an early stage. Recent works successfully employ variants of the Lagrange multiplier method to handle such constraints, but their limitation lies in the use of a uniform dual variable across all problem instances, overlooking the fact that the difficulty of satisfying constraints varies significantly across instances. To address this limitation, we propose an instance-level adaptive constrained optimization framework that reformulates the Lagrangian dual problem by assigning each instance its own dual variable. To efficiently optimize this new problem, we design a dual variable-conditioned policy that solves instances with a controllable level of constraint awareness, which effectively decouples policy optimization from the optimization of dual variables. By leveraging this conditioned policy, we customize the optimization of dual variables for each test instance by adapting to its particular constraint violations. Experimental results on the Travelling Salesman Problem with Time Window (TSPTW) and TSP with Draft Limit (TSPDL) show that our method exhibits advantages compared to the strong solver LKH3 and significantly outperforms state-of-the-art neural methods.

---

## 论文详细总结（自动生成）

# 面向神经车辆路径问题的自适应约束优化：论文总结

## 1. 核心问题与整体含义（研究动机与背景）

神经网络求解器在**车辆路径问题（VRP）** 上已取得显著成功，但在处理**具有现实复杂约束**的场景时仍处于早期阶段，例如带时间窗的旅行商问题（TSPTW）和带装载限制的TSP（TSPDL）等。

- **现有方法的不足**：近期研究采用拉格朗日乘子法将约束纳入神经求解器的训练目标中，但其关键局限在于——**对所有问题实例使用统一（uniform）的对偶变量**。
- **被忽视的关键事实**：不同实例的约束满足难度差异巨大。一个固定的对偶变量无法反映不同实例对约束违反程度的差异化需求，导致约束处理不够精细，最终影响解的可行性与质量。
- **研究意义**：如何让对偶变量的调整过程**适应实例本身的特征**，是提升神经求解器在约束路由问题中表现的核心突破口，也是组合优化（CO）从无约束走向现实约束场景的关键一步。

## 2. 方法论：核心思想、关键技术细节与算法流程

### 核心思想

提出**实例级自适应约束优化框架（Instance-level Adaptive Constrained Optimization）**，核心主张是：**每个问题实例应该拥有自己独立的对偶变量**，而非所有实例共享一个全局对偶变量。

### 关键技术细节

1. **重写拉格朗日对偶问题**：
   - 将原始对偶目标分解为按实例解耦的形式。
   - 每个实例根据自己的约束违反情况独立调整对偶变量，从而动态平衡可行性与目标优化之间的关系。

2. **对偶变量条件化策略（Dual variable-conditioned policy）**：
   - 策略网络以对偶变量为额外条件输入。
   - 这样模型可以在**不同约束感知强度（constraint awareness）** 下求解同一个实例。
   - 关键好处：将“策略优化”与“对偶变量优化”充分解耦——策略只需学会在每个给定对偶变量下做决策，而对偶变量的搜索在下游单独完成。

3. **测试时自适应优化**：
   - 针对每个待求解的测试实例，灵活调整其专属对偶变量，使其适应该实例的具体约束违反情况，实现推理阶段的定制化求解。

### 算法流程（文字描述）

> 初始化策略网络 → 在每个训练实例上配置专属对偶变量 → 策略在条件化对偶变量下学习生成路径 → 交替/联合更新策略参数与对偶变量以最小化增广拉格朗日目标 → 在推理阶段，针对新实例初始化对偶变量，并通过迭代更新使其匹配该实例的约束特征，最终以该对偶变量条件下的策略完成求解。

*注：原文文本中未给出完整公式步骤，以上流程根据论文摘要逻辑归纳。*

## 3. 实验设计：数据集、Benchmark 与对比方法

### 使用场景（Benchmark）

- **TSPTW**：带时间窗的旅行商问题
- **TSPDL**：带装载限制（Draft Limit）的旅行商问题

两者均为带复杂约束的路由优化经典测试场景。

### 对比方法

- **LKH3**：经典的强启发式求解器，可处理带约束的 TSP/VRP 变体，作为强基线参考。
- **最新的神经方法（state-of-the-art neural methods）**：用于同类型算法对比，评估神经网络求解器的水平提升。

### 原文可获取的实验信息有限

原摘要中仅描述了基本的实验设置和总体效果，没有列出具体实例规模、生成方式或约束参数配置等细节。

## 4. 资源与算力

- 原文文本及摘要中**未明确说明**所使用的算力资源。
- 未提供：GPU 型号、数量、训练时长、能耗或参数量等信息。

> 说明：若论文全文中包含训练环境的说明，需进一步查阅原文获取；在当前提供的文本范围内无法确知。

## 5. 实验数量与充分性评估

### 实验数量

- 从摘要看，实验覆盖 **2 个任务场景**（TSPTW、TSPDL）。
- 未提及消融实验、不同实例规模测试、约束紧度变化实验或对偶变量自适应效果的单独分析等。

### 充分性与客观性分析

- **正面**：与强启发式方法（LKH3）及神经 SOTA 方法进行对比，能在一定程度上说明算法的有效性与竞争力。
- **不足**：
  - 缺乏对消融设计的描述（例如使用统一对偶变量 v.s. 实例级对偶变量的对比）。
  - 缺乏大规模或多样化约束组合下的实验验证。
  - 在缺少重复实验次数与方差等信息时，难以判断结果的统计显著性。
  - 作为一篇投稿（ICML 2025 拒稿论文），实验覆盖范围可能未能充分支撑论文结论的普适性。

## 6. 主要结论与发现

- 在 TSPTW 与 TSPDL 两个问题上，所提出的实例级自适应约束优化方法**在解质量上优于强启发式求解器 LKH3**。
- 与最新的神经方法相比，该方法**显著更好地平衡了约束满足率与解的质量**。
- 说明“实例级专属对偶变量 + 可条件化策略”的设计思路，能够更灵活地处理约束难度跨实例差异问题，为构建更通用的约束神经组合优化求解器提供了有效路径。

## 7. 优点

- **问题定位精准**：指出现有拉格朗日乘子方法中“统一对偶变量”忽略了实例差异这一核心缺陷，切中要害。
- **方法设计有新颖性**：将对偶变量从“全局共享”转为“实例专属”，并引入条件化策略以解耦策略与对偶变量的优化，结构清晰、思路自然。
- **具备实际意义**：面向现实世界中约束难度因实例而异的场景，有明确的应用价值。
- **对约束化神经组合优化领域有启示意义**：实例级自适应思路可推广至 TSP/VRP 之外的其他约束路由问题。

## 8. 不足与局限

- **实验覆盖相对有限**：仅涉及两个任务，且缺少对更大规模实例和更多约束类型的扩展分析。
- **消融不充分**：从摘要来看，缺少对本文各组件（实例级对偶变量、条件策略、自适应更新策略）的单独效果验证。
- **细节披露受限**：无公式、无实验设置细节、无超参数与算力信息，难以从当前文本评估方法的复现难度与工程成本。
- **可行性未讨论**：实例级对偶变量的引入会增加优化空间维度，可能带来收敛速度与训练稳定性方面的挑战，但文中在现有文本范围内未涉及这些分析。
- **与 LKH3 对比的细节不明**：如何设定时间预算、是否使用相同初始解等关键公平性问题在现有文本中无法确证。
- **未讨论失败案例或适用范围边界**：当实例约束极强（几乎不可行）或约束极弱时，自适应机制的表现是否依然稳健，缺乏相关讨论。
- **模型在测试时实例级自适应是否需要额外算力**：推理阶段对偶变量的迭代更新可能带来额外开销，文中未对此做出权衡分析。

---

（完）
