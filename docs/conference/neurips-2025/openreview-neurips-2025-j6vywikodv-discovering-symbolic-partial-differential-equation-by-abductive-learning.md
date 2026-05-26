---
title: Discovering Symbolic Partial Differential Equation by Abductive Learning
title_zh: 基于溯因学习的符号偏微分方程发现
authors: "En-Hao Gao, Cunjing Ge, Yuan Jiang, Zhi-Hua Zhou"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=j6vywikodV"
tags: ["query:sr"]
score: 9.0
evidence: 从数据中自动发现符号偏微分方程
tldr: 该论文提出ABL-PDE方法，利用溯因学习框架从观测数据中自动发现符号偏微分方程。通过引入一阶逻辑知识库，有效约束假设空间且保持表达力，克服了维度爆炸和噪声干扰。实验表明，该方法能准确还原经典物理方程，为科学发现提供可解释的符号模型。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-j6vywikodv/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 801, \"height\": 370, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-j6vywikodv/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1228, \"height\": 597, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-j6vywikodv/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1413, \"height\": 405, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-j6vywikodv/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 517, \"height\": 354, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-j6vywikodv/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1379, \"height\": 361, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-j6vywikodv/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1450, \"height\": 307, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-j6vywikodv/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1275, \"height\": 377, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-j6vywikodv/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1378, \"height\": 175, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-j6vywikodv/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1225, \"height\": 483, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-j6vywikodv/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1383, \"height\": 227, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-j6vywikodv/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1302, \"height\": 213, \"label\": \"Table\"}]"
motivation: 从数据中发现符号PDE面临假设空间指数爆炸和测量噪声问题。
method: 结合溯因学习与一阶逻辑知识库，约束假设空间并保持表达力。
result: 在多个基准方程上准确发现符号形式，优于现有方法。
conclusion: 为科学发现中符号方程自动提取提供了有效范式。
---

## Abstract
Discovering symbolic Partial Differential Equation (PDE) from data is one of the most promising directions of modern scientific discovery.
    Effectively constructing an expressive yet concise hypothesis space and accurately evaluating expression values, however, remain challenging due to the exponential explosion with the spatial dimension and the noise in the measurements.
    To address these challenges, we propose the ABL-PDE approach that employs the Abductive Learning (ABL) framework to discover symbolic PDEs.
    By introducing a First-Order Logic (FOL) knowledge base, ABL-PDE can represent various PDEs, significantly constraining the hypothesis space without sacrificing expressive power, while also facilitating the incorporation of problem-specific knowledge.
    The proposed consistency optimization process establishes a synergistic interaction between the knowledge base and the neural network learning module, achieving robust structure identification, accurate coefficient estimation, and enhanced stability against hyperparameter variation.
    Experimental results on three benchmarks across different noise levels demonstrate the effectiveness of our approach in PDE discovery.

---

## 论文详细总结（自动生成）

好的，请查收基于您提供的论文内容生成的详细中文总结。

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题：** 从观测数据中自动发现描述物理现象的符号偏微分方程（Partial Differential Equation, PDE）。这是一项极具前景的科学发现任务，但面临着两大核心挑战：
    - **假设空间指数爆炸：** 构建一个既能充分表达复杂模式又足够紧凑以支持高效搜索的候选项库非常困难。随着问题维度的增加，候选方程的数量呈指数级增长。
    - **噪声干扰下的精确评估：** 实际测量数据往往包含噪声，这使得对导数或积分等表达式值的准确估算变得极具挑战。
- **研究意义：** 符号 PDE 是科学和工程领域描述物理现象的基础数学工具，其显式形式对于需要高可靠性的应用至关重要。自动发现这些方程能够推动科学发现，为复杂系统提供可解释的模型。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想：** 提出一种名为 **ABL-PDE (Abductive Learning for PDE Discovery)** 的新方法，基于 **溯因学习 (Abductive Learning, ABL)** 框架。该框架的核心是建立一个**数据驱动的神经网络学习模块**与一个**知识驱动的逻辑推理模块**之间的双向增强循环。
- **关键技术细节：**
    1.  **逻辑知识库 (Logic-based Knowledge Base, KB):**
        - 采用**一阶逻辑 (First-Order Logic, FOL)** 程序来表示各种 PDE。这通过引入**规范形 (Canonical Form)** 和**完整性约束 (Integrity Constraints, IC)** 来有效约束假设空间，在不牺牲表达能力的条件下显著降低冗余。
        - **规范形**定义了表达式项的标准化结构，消除了数学上等价但语法形式不同的冗余项。
        - **完整性约束**可以编码通用约束（如独特的运算顺序、无相交变量）和领域特定知识（如连续性方程），进一步缩小搜索空间。
    2.  **一致性优化过程 (Consistency Optimization Process):**
        - 通过最大化一个**一致性度量**来协同优化神经网络和逻辑知识库。该度量平衡了物理信息残差（Residual）和数据拟合误差（MSE）。
        - **单调子集选择 (Monotone Subset Selection, MSS):** 一个两阶段算法，用于高效地从候选库中识别真实存在项。
            - **第一阶段：** 使用帕累托优化子集选择 (POSS) 进行快速粗选，缩小候选库规模。
            - **第二阶段：** 在缩小的库中通过二分搜索寻找满足给定**边际阈值**的最小项集，从而确定方程结构。
        - **基于有限元法的训练 (FEM-based Training, FEMTrain):** 在用 MSS 确定方程的结构后，采用有限元方法 (FEM) 的弱形式代替传统的点式残差来联合优化网络参数和方程系数。这增强了对超参数的稳定性，并提高了系数估计的准确性。
    3.  **算法流程：**
        1.  **预训练神经网络**，使其初步拟合物理场并计算导数。
        2.  **迭代加深搜索：** 逐步增加表达式中允许的算子数量。
        3.  **溯因扩展：** 在当前算子数限制下，利用逻辑知识库通过溯因推理生成新的候选项。
        4.  **评估：** 将候选项通过神经网络转换为数值。
        5.  **MSS选择：** 应用 MSS 算法筛选出非零系数的项。
        6.  **FEMTrain联合优化：** 估算选定项的系数并联合优化神经网络。
        7.  重复步骤 3-6，直到发现的方程稳定且系数收敛。

### 3. 实验设计：数据集、基准与对比方法

- **数据集：** 使用了三个公开的 PDE 基准数据集，涵盖不同类型和维度的方程：
    - 一维 PDE：**Burgers 方程**
    - 一维 PDE 系统：**Schrödinger 方程**
    - 二维 PDE 系统：**Navier-Stokes 方程**
- **噪声水平：** 在数据中加入了 5% 和 10% 的高斯噪声，以模拟不准确的测量。
- **对比方法：**
    - **PDERidge:** 一个强基线方法，假设已知真实的 PDE 结构，仅使用岭回归估计系数。这代表了大多数方法在结构识别上的最佳性能。
    - **DL-PDE++:** 一种代表性的同步方法（基于神经网络与稀疏回归）。
    - **ABL-PDE (w/o CO):** ABL-PDE 的消融版本，不使用一致性优化过程。
    - **ABL-PDE (w/o FEM):** ABL-PDE 的消融版本，在优化中使用传统的点式残差而不是 FEM 残差。

### 4. 资源与算力

论文在附录F.3节中明确说明：
- **算力资源：** 所有实验均在一台配备 **4 块 NVIDIA A6000 GPU**（每块拥有 48 GB 内存）的服务器上进行。
- **训练细节（隐式算力消耗）：**
    - 预训练周期因任务而异：Burgers 和 Schrödinger 方程训练 5,000 个 epoch，Navier-Stokes 方程训练 100,000 个 epoch。
    - 训练数据量也不同：Burgers 1e4 点，Schrödinger 2e4 点，Navier-Stokes 2e5 点。
    - 网络结构：8 层 MLP，Burgers 和 Schrödinger 每层 20 个神经元，Navier-Stokes 每层 40 个神经元。

**总结：** 论文明确说明了 GPU 型号和数量，但未直接给出总训练时长或总 GPU 小时数，仅能从网络规模和迭代次数中推测其算力消耗属于较大的范围。

### 5. 实验数量与充分性

- **实验数量：**
    - **主实验：** 在 3 个基准数据集的 2 个噪声水平（5%, 10%）下进行，共 6 种场景。与 3 个对比方法及 2 个消融版本进行了比较（见表2）。
    - **消融实验：**
        - 验证 **FEMTrain** 的效果：比较 ABL-PDE 与 ABL-PDE (w/o FEM) 在系数估计和泛化误差上的性能。
        - 验证 **KB** 的效果：对比 Full Space、Canonical Form 和 KB 三种假设空间的候选项数量随算子数目增长的变化趋势（图4）。
    - **稳定性实验：** 针对 λ 超参数进行了 5 组实验（0.5λ, 0.75λ, λ, 1.25λ, 1.5λ），以评估方法对超参数变化的鲁棒性（表2，图3）。
- **充分性与客观性分析：**
    - **充分性：** 实验覆盖了不同类型的方程（标量、系统）、不同维度（1D, 2D）、多种噪声水平，并进行了全面的消融和稳定性分析。这组实验是充分的，能够有力地支撑论文的核心主张。
    - **公平性：** 论文声明为了公平比较，对比方法使用了与 ABL-PDE 相同的预训练神经网络来计算导数。同时，PDERidge 作为“已知结构”的理想化基线，为评估结构发现能力提供了一个清晰的上限。

### 6. 论文的主要结论与发现

1.  **卓越的结构发现与系数估计能力：** ABL-PDE 在三个不同难度的 PDE 发现任务中，**全部正确识别了方程结构**，并且在 9 个案例中的 8 个中取得了最佳的系数估计精度（L2RE 最低），仅在有结构化先验的 PDERidge 基线之后。
2.  **强大的鲁棒性：**
    - **对噪声的鲁棒性：** 在不同噪声水平下均能稳定工作。
    - **对超参数的鲁棒性：** 与没有 FEMTrain 的版本相比，ABL-PDE 对平衡物理和数据的超参数 λ 的变化表现出**显著更低的方差**，稳定性提升近一个数量级。这使其在实际应用中对超参数选择不敏感。
3.  **逻辑知识库的有效性：** 实验表明，提出的规范形和一阶逻辑知识库能有效约束假设空间（图4），将候选项数量从指数级降低到一个可计算的水平，而不牺牲表达能力。
4.  **网格增强：** 作为一种副产品，ABL-PDE 的一致性优化过程能利用发现的物理信息回传改进神经网络，从而使其在测试集上的**泛化能力**优于单纯依赖监督学习的模型。

### 7. 优点

- **方法创新性强：** 创造性地将**溯因学习**框架应用于 PDE 发现，将传统的数据驱动流程转变为数据与知识协同进化的双向增强循环，从根本上改变了解决该问题的思路。
- **知识赋能的假设空间：** 首次引入**一阶逻辑知识库**来构建假设空间，既保证了**表达能力**，又通过**规范形**和**完整性约束**大幅压缩了搜索空间，并能无缝集成**领域先验知识**。
- **算法稳定高效：** 提出了 MSS 和 FEMTrain 的一致性优化流程。MSS 高效地从庞大候选库中筛选目标，而 FEMTrain 通过弱形式增强了训练的稳定性和系数估计的准确性，特别是对超参数的鲁棒性。
- **实验全面且证据有力：** 实验设计考虑了多种方程类型、多种噪声水平和全面的消融研究，方法论优点和有效性都得到了充分支持。

### 8. 不足与局限

- **应用范围受限：** 该方法目前**局限于发现线性组合的系数**，即方程形式为 \(u_t = \sum_i \xi_i f_i\)。对于存在非线性未知参数（如分数幂、指数内的参数）的结构，无法直接处理。（论文作者在结论中已明确指出）。
- **依赖性与复杂性：** 该方法依赖于**预训练的神经网络**，其质量和泛化能力对后续步骤至关重要。同时，整个流程（预训练 -> 迭代搜索 -> 联合优化）的计算复杂度较高。
- **实验覆盖有限：** 论文中的实验主要集中在经典的、结构相对简单的 PDE 上（Burgers, Schrödinger, Navier-Stokes）。对于更复杂、高度非线性或耦合变量更多的真实世界极端系统，其有效性和计算效率尚需进一步验证。
- **潜在偏差：** 方法在 Navier-Stokes 方程上的性能相对于 Burgers 和 Schrödinger 方程明显较差（L2RE 仍在 15%-21% 区间），暗示该方法在处理二维、多变量、复杂耦合系统时仍存在挑战。该方法对噪声的鲁棒性主要在中低噪声水平（10% 以下）验证，更高噪声水平下的表现未知。

（完）
