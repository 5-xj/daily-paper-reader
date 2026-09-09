---
title: Mechanistic PDE Networks for Discovery of Governing Equations
title_zh: 用于控制方程发现的机制性PDE网络
authors: "Adeel Pervez, Efstratios Gavves, Francesco Locatello"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=7w1YGBPDMw"
tags: ["query:sr"]
score: 8.0
evidence: 从时空数据中发现控制偏微分方程，匹配科学数据方程发现需求。
tldr: 针对从数据中发现控制偏微分方程的需求，论文提出机制性PDE网络：在神经网络的隐表示中把时空数据表达为空间、时间依赖的线性偏微分方程组，并通过求解与解码完成具体任务。为此开发了GPU并行、稀疏且可微的多重网格求解器，以高效求解隐空间PDE。实验显示这种表示能自然刻画数据中的时空动力学，提升建模能力。该网络为高维科学数据中的方程发现提供了神经网络驱动的新方法。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 从数据中自动发现控制偏微分方程是科学知识发现的重要目标，但高维时空数据建模困难。
method: 在隐表示中把时空数据建模为线性PDE，并开发可微GPU多网格求解器进行求解和解码。
result: 提升了动态建模能力，可自然地表达并发现数据背后的时空动力学。
conclusion: 为方程发现提供了一种神经网络驱动的通用框架。
---

## Abstract
We present Mechanistic PDE Networks -- a model for discovery of governing *partial differential equations* from data.
Mechanistic PDE Networks represent spatiotemporal data as space-time dependent *linear* partial differential equations in neural network hidden representations. The represented PDEs are then solved and decoded for specific tasks. The learned PDE representations naturally express the spatiotemporal dynamics in data in neural network hidden space, enabling increased modeling power. Solving the PDE representations in a compute and memory-efficient way, however, is a significant challenge. We develop a native, GPU-capable, parallel, sparse and differentiable multigrid solver specialized for linear partial differential equations that acts as a module in Mechanistic PDE Networks. Leveraging the PDE solver we propose a discovery architecture that can discovers nonlinear PDEs in complex settings, while being robust to noise. We validate PDE discovery on a number of PDEs including reaction-diffusion and Navier-Stokes equations.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机与背景）

- **研究问题**：如何从观测时空数据中自动发现控制该数据背后的偏微分方程（Partial Differential Equations, PDEs），即“控制方程发现”（governing equation discovery）。
- **背景动机**：科学知识发现的核心目标之一，是从数据中推断物理系统的演化规律，而许多自然现象（如流体运动、化学反应扩散）均由PDE刻画，因此自动发现这些方程具有重大科学意义。
- **核心挑战**：高维时空数据往往规模大、噪声多、动力学复杂，现有方法难以在保持可解释性的同时有效建模和提取控制规律。
- **核心解决方案路线**：将神经网络的隐表示与PDE数学结构结合，使模型以PDE作为内部的“机制表示”，在隐空间中通过求解PDE完成任务的建模方式，从而在数据中发现/逼近其背后的控制方程。

## 2. 方法论：核心思想、关键技术细节与流程

- **总体框架（Mechanistic PDE Networks）**：
  - 该模型的核心思想是：将时空数据编码为**空间和时间依赖的线性PDE**，该PDE在神经网络的隐表示空间中被表达和求解。最终通过解码器将隐空间中的解解码，以完成特定任务（如预测、重建等）。
  - 系统中的PDE在隐空间中自然表达数据中的时空动力学结构，从而为建模能力带来提升。
  
- **关键创新：GPU驱动、稀疏、可微的多重网格（Multigrid）求解器**：
  - 现存数值PDE求解器通常无法直接嵌入到神经网络中进行反向传播；该论文为此专门开发了一个**原生、GPU并行、稀疏且可微**的多重网格求解器。
  - 该求解器专用作**线性PDE求解模块**，集成在Mechanistic PDE Network中，完成隐空间中PDE的求解与梯度的反向传播。

- **公式/流程逻辑**：
  - 设网络隐空间状态为 $h(x,t)$，将其建模为满足线性PDE的形式：
    $$ \mathcal{L}\big(\{ \xi_i(x,t) \}, h(x,t)\big) = 0 $$
    其中系数 $\xi_i(x,t)$ 可以是时空依赖的（由网络生成），而 $\mathcal{L}$ 是线性（或局部线性）微分算子组合的表示。
  - 流程大致为：输入时空数据 → 编码生成隐状态和PDE系数 → 通过可微的多重网格求解器求解隐空间PDE → 解码所得解以执行任务 → 计算任务损失 → 梯度经可微PDE求解器回传并更新模型参数。

- **非线性PDE的发现策略**：
  - 虽然求解器面向线性PDE，论文提出的发现架构能够利用线性PDE的组合和局部化处理，发现复杂设置下的非线性PDE，并且提升了对噪声的鲁棒性。

## 3. 实验设计

- **数据/场景**：论文验证所用PDE包括：
  - **反应-扩散方程（Reaction-diffusion equations）**
  - **纳维-斯托克斯方程（Navier-Stokes equations）**
- **Benchmark设置**：其评估重点是在复杂和有噪声的动态系统环境中发现或重建控制方程的能力；文件并未详细说明通过与具体哪一种已有方法进行数值指标对比。
- **方法对比**：提供的摘要未具体列出对比的基线（baselines）或替代模型，也没有给出具体误差指标（如符号方程发现准确率、预测误差等）。

## 4. 资源与算力

- 论文的文本信息中没有明确说明训练所使用的GPU型号、数量、训练时长或总计算量（如FLOPs）。
- 文中仅指出其多重网格求解器为“native, GPU-capable, parallel, sparse, differentiable”，因此可判断训练在GPU环境下进行，但对硬件规模和耗时并无披露。
- 若需完整了解算力成本，须参阅论文全文的实验配置章节。

## 5. 实验数量与充分性

- **实验数量**：论文验证了至少两类经典PDE（反应-扩散方程和Navier-Stokes方程）以及其他若干PDE（原文称“a number of PDEs”），但其范围大小、是否含消融实验，在摘要中并未完整反映。
- **充分性评估**：
  - 从摘要能看到对新方法在复杂和噪声条件下进行了测试，说明实验设置有现实意义。
  - 但是否进行了充分、客观和公平的对比，例如和基于符号回归的方程发现方法（如SINDy）相比，或做多重网格求解器的效率/准确率消融等在摘要中无法验证。
  - 因此只能判定实验设置了真实挑战，但其系统完备性与公平性需结合论文全文进一步核实。

## 6. 论文的主要结论与发现

- 隐空间中自然表达的时空PDE能够提升模型的动态建模能力，帮助神经网络更好地刻画和学习时空数据背后的动力学。
- 专用的可微、稀疏、GPU平行的多重网格求解器是让PDE可嵌入深度学习流程的关键保障，兼顾计算效率与内存效率。
- 该方法在真实复杂数据和噪声扰动下，可从数据中“发现”非线性PDE——包括反应-扩散方程和纳维-斯托克斯方程——说明该框架是一个可供通用方程发现使用的神经网络驱动方法，并被证明具备鲁棒性。

## 7. 优点

- **方法论创新强**：用PDE而不是单纯向量的变换作为网络潜空间的表征机制，赋予深度模型以明确的物理意义结构和数学可解释性。
- **求解器工程贡献显著**：提出的GPU型多重网格求解器是“原生为反向传播设计”的，填补了数值求解器与神经网络集成之间的空洞。
- **可扩展到非线性系统**：即便核心算子针对线性PDE，架构通过局部近似与组合可以覆盖非线性动力学情形，提升了适用范围。
- **物理先验植入灵活**：时空依赖的PDE系数由神经网络生成，兼具“从数据中学到规律”的灵活性。
- **鲁棒性与现实性**：强调在噪声条件下进行测试，所选取的两个方程有代表性，可用于真实科学问题验证。

## 8. 不足与局限

- **算力信息不透明**：没有公开GPU型号、数量与训练时长，不利于领域内对方法资源成本的比较和可复现性评估。
- **对比实验未在文字材料中展示**：对需要“公平对照”的方程发现要求来讲，缺乏与其他典型方程发现方法（如SINDy、符号回归）的明确对比，客观性有待全文验证。
- **线性PDE的基础局限**：所有内部推导基于线性PDE求解器，对于许多真实世界中的强非线性、间断或混沌系统，近似是否足够精确需要更多维度的验证。
- **稳健性测试范围**：摘要只提到噪声下的表现，对缺失数据、不同分辨率输入、时间外推等泛化风险场景没有显式反映。
- **高维可扩展性的证据有限**：虽然目标是解决高维科学数据问题，但验证范例（反应-扩散、Navier-Stokes）维度规模和相应性能收益在摘录信息中并未见到。
- **完整性与细节不足**：由于仅提供了摘要级内容，对完整架构细节、损失函数构成、消融研究和量化指标的分析无法展开，所以存在较多不可评细节。

（完）
