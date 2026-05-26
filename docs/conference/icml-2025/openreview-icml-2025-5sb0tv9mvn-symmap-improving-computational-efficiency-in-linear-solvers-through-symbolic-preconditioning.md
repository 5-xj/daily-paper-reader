---
title: "SymMaP: Improving Computational Efficiency in Linear Solvers through Symbolic Preconditioning"
title_zh: SymMaP：通过符号预条件提升线性求解器的计算效率
authors: "Hong Wang, Jie Wang, Minghao Ma, Haoran Shao, Haoyang Liu"
date: 2025-01-24
pdf: "https://openreview.net/pdf?id=5sb0tv9MVn"
tags: ["query:ad"]
score: 5.0
evidence: 符号发现框架用于矩阵预条件
tldr: 矩阵预条件参数选择对线性系统求解效率至关重要，但传统方法依赖专家知识，机器学习方法推理成本高。本文提出符号发现框架SymMaP，通过学习符号表达式自动生成预条件，结合两者优势。实验表明SymMaP在多个问题上提升了求解效率，且保持了可解释性，为符号发现方法在科学计算中开辟了新场景。
source: ICML-2025-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-5sb0tv9mvn/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 841, \"height\": 582, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-5sb0tv9mvn/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 845, \"height\": 626, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-5sb0tv9mvn/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1472, \"height\": 849, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-5sb0tv9mvn/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1779, \"height\": 384, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-5sb0tv9mvn/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1778, \"height\": 348, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-5sb0tv9mvn/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1776, \"height\": 349, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-5sb0tv9mvn/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 679, \"height\": 176, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-5sb0tv9mvn/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 876, \"height\": 307, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-5sb0tv9mvn/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 882, \"height\": 346, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-5sb0tv9mvn/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 730, \"height\": 499, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-5sb0tv9mvn/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1094, \"height\": 377, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-5sb0tv9mvn/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1055, \"height\": 681, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-5sb0tv9mvn/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 831, \"height\": 326, \"label\": \"Table\"}]"
motivation: 传统预条件参数选择依赖专家知识且无法适应实例特征，机器学习方法推理成本高。
method: 提出符号发现框架SymMaP，通过学习符号表达式自动生成高效的预条件参数。
result: 在多个线性系统上验证了SymMaP能有效提升求解效率并保持可解释性。
conclusion: 符号发现方法能有效结合传统和机器学习优势，为科学计算提供新思路。
---

## Abstract
Matrix preconditioning is a critical technique to accelerate the solving of linear systems, where performance heavily depends on the selection of preconditioning parameters.
Traditional parameter selection approaches often define fixed constants for specific scenarios.
However, they rely on domain expertise and fail to consider the instance-wise features for individual problems, limiting their performance. 
In contrast, machine learning (ML) approaches, though promising, are hindered by high inference costs and limited interpretability. 
To combine the strengths of both approaches, we propose a symbolic discovery framework—namely, **Sym**bolic **Ma**trix **P**reconditioning (**SymMaP**)—to learn efficient symbolic expressions for preconditioning parameters. 
Specifically, we employ a large neural network to search the high-dimensional discrete space for expressions that can accurately predict the optimal parameters. 
The learned expression allows for high inference efficiency and excellent interpretability (expressed in concise symbolic formulas), making it simple and reliable for deployment. 
Experimental results show that SymMaP consistently outperforms traditional strategies across various benchmarks.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：矩阵预条件是加速线性系统求解的关键技术，其性能高度依赖于预条件参数（如SOR中的松弛因子ω、AMG中的阈值参数θT）的选择。传统方法依赖专家经验设定固定常量，无法适应不同问题实例的特征，导致性能受限。机器学习方法虽能学习实例级参数，但存在两大缺陷：一是在纯CPU环境中推理效率低下（线性求解器通常部署在CPU上）；二是“黑箱”特性缺乏可解释性，难以被科学计算社区信任。
- **整体含义**：本文旨在结合传统方法的可靠性/高效部署与机器学习方法的自适应能力，提出一个**符号发现框架SymMaP**，通过学习简洁的符号表达式来预测最优预条件参数，从而在保持低计算开销的同时提升求解性能，并具备良好的可解释性。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：利用深度强化学习在符号表达式的高维离散空间中进行搜索，找到能够准确预测最优预条件参数的符号公式（例如 `1.0 + 1.0/(x2+1.2)`）。这些公式可直接编译为轻量代码，集成到PETSc等求解库中，几乎无额外计算成本。
- **关键技术细节**：
  1. **训练数据生成**：对每个参数化PDE生成的线性系统，通过自适应网格搜索（粗搜+细搜）找到最优预条件参数（如最小化求解时间或条件数），构建数据集（输入：PDE系数；输出：最优参数）。典型规模：1200个样本（1000训练，200测试）。
  2. **符号表达式生成**：使用一个单层32单元的LSTM作为RNN，以前缀（prefix）表示法生成符号表达式。每个token的生成依赖父节点和兄弟节点信息，保证语法有效性。token库包含 `+, -, ×, ÷, sqrt, exp, log, pow, 1.0`（排除三角函数以减少训练开销）。
  3. **常数优化**：对每个生成的表达式中的常数占位符，使用非线性优化（如BFGS）最大化奖励函数。
  4. **奖励函数**：采用归一化均方根误差（NRMSE），并通过挤压函数 `R = 1/(1+NRMSE)` 映射到[0,1]。
  5. **训练算法**：采用**风险寻求策略梯度（Risk-Seeking Policy Gradient）**，仅关注奖励最高的前ε%样本（ε=0.05），优化目标为条件风险值 `J(θ,ε)`。梯度通过蒙特卡洛采样估计，重点提升最佳解的质量。
  6. **部署**：将学到的符号表达式编译为动态链接库，直接嵌入PETSc，在求解每个线性系统前快速计算参数。

## 3. 实验设计：数据集、场景、基准和对比方法

- **数据集**：5类PDE生成的线性系统
  - Darcy Flow问题（非对称矩阵较小规模）
  - 二阶椭圆型PDE（含对称/非对称变体）
  - 双调和方程（非对称，仅适用于SOR）
  - Poisson方程（对称）
  - 热传导稳态方程（对称）
- **预条件器及优化目标**：
  - SOR：优化松弛因子ω，目标最小化求解时间
  - SSOR：优化ω，目标最小化求解时间与迭代次数的组合指标
  - AMG：优化阈值参数θT，目标最小化预条件后矩阵的条件数
- **对比方法**（Baselines）：
  - 无预条件
  - PETSc默认参数（SOR/SSOR ω=1，AMG θT=0）
  - 固定常数（ω=0.2或1.8，θT=0.2或0.8）
  - 最优固定常数（通过网格搜索得到的最佳单一常量）
- **评估指标**：平均求解时间（秒）或平均条件数（越低越好）。

## 4. 资源与算力

- 论文明确提供了计算环境：
  - **训练环境（Env2）**：Ubuntu 18.04，Intel Xeon Gold 6246R CPU @3.40GHz，GeForce RTX 3090 24GB，CUDA 11.3。符号发现训练在此环境进行。
  - **求解性能测试环境（Env1）**：Windows 11 WSL，AMD Ryzen 9 5900HX CPU @3.30GHz（纯CPU环境）。
- **训练时长**：
  - 数据集生成耗时：Darcy Flow和椭圆PDE各约40小时，双调和方程约100小时，Poisson和热问题各约6小时。
  - SymMaP训练：每次运行1000次迭代，不含多项式token库约800秒，含多项式约2600秒。
- 未明确指出使用的GPU型号数量（仅说明RTX 3090一张），但训练时间较短，算力需求相对适中。

## 5. 实验数量与充分性

- **主实验**：3类预条件器 × 5类数据集中的适用子集（共约11组实验），对比4种基线，给出两个最好表达式结果（SymMaP 1和2）。
- **对比NN实验**：一组对比MLP推理时间和预测性能。
- **可解释性分析**：定性分析符号表达式与物理规律的一致性。
- **消融实验**：6种不同算子集对比，考察对条件数和训练时间的影响。
- **超参数分析**：学习率、batch size、数据集大小对性能的影响（各一组实验）。
- **充分性评价**：实验覆盖了多种预条件器、优化目标、PDE类型，对比了传统和最优固定常量，并补充了消融和超参数分析，基本充分。但缺少与ML方法的全面对比（仅与MLP对比推理时间，未与更先进的神经网络预条件方法如GNN-based AMG比较性能），也未在更大规模矩阵或工业场景中验证。实验设计客观公平，所有比较在同一硬件和PETSc框架下完成。

## 6. 论文的主要结论与发现

- SymMaP学习到的符号表达式在所有预条件器和数据集上**一致优于**PETSc默认参数和最优固定常数。
  - SOR：求解时间减少最高达40% vs 默认，10% vs 最优固定常数。
  - SSOR：求解时间减少最高达27% vs 默认，11% vs 最优固定常数。
  - AMG：条件数降低最高达40% vs 默认，32% vs 最优固定常数。
- 符号表达式推理速度是MLP的5倍（1.1e-5s vs 5.1e-5s），且预测性能相当。
- 符号表达式具有可解释性，例如椭圆PDE的SOR最优ω仅依赖于耦合系数x2，且物理上合理（x2越大，对角占优越弱，ω越小）。
- 删减不必要算子（如三角函数）可平衡性能与训练效率。

## 7. 优点：方法或实验设计上的亮点

- **创新性**：首次将符号发现（symbolic discovery）应用于矩阵预条件参数选择，结合了深度强化学习的高表达能力和符号公式的简洁高效。
- **实用性**：学习到的表达式可直接编译为轻量函数，极易集成到现有科学计算库（如PETSc），几乎无额外部署成本。
- **可解释性**：符号公式清晰揭示参数与问题特征的关系，有助于理论分析和信任建立。
- **实验全面性**：覆盖多种预条件器（SOR/SSOR/AMG）和多种优化目标（时间/条件数），并在多类PDE基准上验证。
- **消融分析**：细致考察了算子集、超参数、数据集大小的影响。

## 8. 不足与局限

- **实验覆盖不够广**：
  - 仅验证了参数化PDE场景，未涉及其他来源的线性系统（如电路仿真、结构力学等）。
  - 矩阵规模相对较小（最大约4.2×10³），未测试大规模稀疏矩阵（如>10⁶）。
  - 未与当前最先进的ML预条件方法（如GNN-based AMG coarsening、CNN-based block Jacobi）在性能上直接对比，仅与MLP对比推理效率。
- **训练数据生成成本高**：每个PDE类型需40-100小时的网格搜索生成数据集，限制了方法的快速迁移。
- **符号表达式的适用范围有限**：仅针对连续参数预条件器（如SOR的ω），无法直接处理离散参数（如ILU填充级别）。且表达式可能依赖于特定问题族，跨问题族泛化能力未验证。
- **风险寻求策略的局限性**：仅关注最优样本，可能忽略次优但更鲁棒的表达式，导致在异常实例上性能不稳定。
- **可解释性分析较浅**：仅对少数表达式做了物理含义解读，未系统验证符号表达式的理论正确性或误差界。

（完）
