---
title: Mechanistic PDE Networks for Discovery of Governing Equations
title_zh: 用于控制方程发现的机制性PDE网络
authors: "Adeel Pervez, Efstratios Gavves, Francesco Locatello"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=7w1YGBPDMw"
tags: ["query:sr"]
score: 8.0
evidence: 从数据中发现偏微分方程
tldr: 该论文针对从时空数据中发现控制方程的问题，提出了机制性PDE网络。该方法将数据表示为神经网络隐藏空间中的线性偏微分方程，并设计了GPU兼容的并行稀疏可微分多重网格求解器来实现高效求解。实验表明，该方法能够准确发现潜在的控制方程，为科学知识发现提供了新工具。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-7w1ygbpdmw/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 700, \"height\": 479, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7w1ygbpdmw/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 783, \"height\": 353, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7w1ygbpdmw/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 726, \"height\": 343, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7w1ygbpdmw/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 829, \"height\": 328, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7w1ygbpdmw/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 829, \"height\": 328, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7w1ygbpdmw/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 828, \"height\": 335, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7w1ygbpdmw/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 832, \"height\": 331, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7w1ygbpdmw/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 190, \"height\": 130, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7w1ygbpdmw/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 718, \"height\": 603, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7w1ygbpdmw/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 708, \"height\": 605, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-7w1ygbpdmw/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 706, \"height\": 593, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-7w1ygbpdmw/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 805, \"height\": 350, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-7w1ygbpdmw/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 603, \"height\": 226, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-7w1ygbpdmw/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 711, \"height\": 235, \"label\": \"Table\"}]"
motivation: 现有神经网络模型难以直接发现可解释的控制方程，需要一种可微分且高效的PDE发现方法。
method: 提出Mechanistic PDE Networks，在神经网络隐藏层中表示线性PDE，并开发了可微分的多重网格求解器进行求解。
result: 在多个时空数据集上成功发现了潜在的控制方程，且计算效率高。
conclusion: 该工作为从数据中自动发现科学方程提供了有效且可扩展的框架。
---

## Abstract
We present Mechanistic PDE Networks -- a model for discovery of governing *partial differential equations* from data.
Mechanistic PDE Networks represent spatiotemporal data as space-time dependent *linear* partial differential equations in neural network hidden representations. The represented PDEs are then solved and decoded for specific tasks. The learned PDE representations naturally express the spatiotemporal dynamics in data in neural network hidden space, enabling increased modeling power. Solving the PDE representations in a compute and memory-efficient way, however, is a significant challenge. We develop a native, GPU-capable, parallel, sparse and differentiable multigrid solver specialized for linear partial differential equations that acts as a module in Mechanistic PDE Networks. Leveraging the PDE solver we propose a discovery architecture that can discovers nonlinear PDEs in complex settings, while being robust to noise. We validate PDE discovery on a number of PDEs including reaction-diffusion and Navier-Stokes equations.

---

## 论文详细总结（自动生成）

# Mechanistic PDE Networks 论文详细总结

## 1. 核心问题与整体含义（研究动机与背景）

- **核心问题**：从时空数据中自动发现控制方程（partial differential equations, PDEs）是科学机器学习的重要目标。已有方法（如SINDy、Physics-Informed Neural Networks）在处理复杂非线性、高噪声、缺失数据时存在局限，且多局限于线性组合的固定基函数形式。本文旨在提出一种可微分、可扩展且对噪声鲁棒的PDE发现方法。
- **整体含义**：提出 **Mechanistic PDE Networks**，将时空数据表示为神经网络隐藏空间中的线性PDE，并嵌入专用的并行可微分多网格求解器，实现PDE的端到端学习与发现。该方法不仅能够发现非线性PDE，还能处理难以用固定基函数表示的方程（如多孔介质方程），同时保持对噪声的鲁棒性。

## 2. 方法论

### 核心思想
- 将PDE发现建模为一个可微分的优化问题：使用编码器（Encoder）将输入数据转换为PDE的系数（时间空间变化的系数），然后通过求解器获得解，最后与真实数据对比计算损失，反向传播更新参数。
- PDE表示为 **线性时变系数形式**：  
  \[
  \sum_{m\in\mathcal{M}} c_m(t, x; u_{\text{data}}) u_m = b(t, x; u_{\text{data}})
  \]
  其中\(u_m\)为偏导数，\(c_m, b\)由神经网络参数化。
- **非线性处理**：通过将输入数据经过神经网络变换 \(\tilde{u} = \text{NN}(u_{\text{data}})\)，再构建关于\(\tilde{u}\)的PDE表达式（如多项式组合），从而表达非线性方程。

### 关键技术细节
- **PDE求解器 NeuRLP-PDE**：
  - 将PDE求解转化为约束优化问题，离散化后得到线性系统 \(Az = d\)，通过最小二乘求解。
  - 为应对高维度带来的内存爆炸（如32x32x32网格需780GB），开发了**稀疏多重网格预条件FGMRES迭代求解器**，其中多重网格V-cycle作为预条件器，使用Gauss-Seidel松弛和线性插值限制/延拓算子。
  - 整个求解过程在GPU上批量并行，且支持自动微分（通过可微优化技术，如OptNet方法）。
- **发现架构**：
  - 编码器输出PDE系数、边界条件、步长等。
  - 使用简单树结构表达式（如多项式基函数）保证简洁性，同时用神经网络参数化输入以增加灵活性。
  - 损失函数包括：数据拟合损失（\(u\)与\(u_{\text{data}}\)）、变换一致性损失（\(\tilde{u}\)与\(u\)）、稀疏性L1正则项。
  - 训练后通过阈值化得到简洁PDE。

## 3. 实验设计

### 数据集/场景
- **1D PDEs**：扩散方程、粘性Burgers方程、无粘Burgers方程（含激波）。
- **2D PDEs**（空间2维+时间）：
  - Ginzburg-Landau反应-扩散方程（复杂螺旋模式：简单案例和困难案例）。
  - 不可压缩Navier-Stokes方程（小粘度\(\nu=0.001\)）。
- **非线性超越固定基函数**：多孔介质方程（\(u_t = \nabla^2(u^m)\)，发现指数\(m\)）。

### Benchmark与对比方法
- 基线方法：**PDEFIND**（Rudy et al., 2017）、**WeakSINDy**（Reinbold et al., 2020），使用PySINDy实现。
- 评估指标：
  - **TPR**（True Positive Ratio）：正确识别非零项的比例。
  - **E∞**（最大相对误差）：发现系数与真实系数的最大相对误差。

## 4. 资源与算力

- 论文中**未明确说明**使用的GPU型号、数量以及具体训练时长。
- 仅提及使用Adam优化器，学习率固定为\(10^{-5}\)，并未提供训练迭代次数或总时间。
- 在多重网格求解器性能测试中，给出了2D Laplace方程在不同网格大小下的GPU内存占用和时间（例如128x128网格：16.7 GB，33.9秒），但未说明具体GPU型号。
- **需指出**：论文未提供完整算力描述，这可能是复现时需要额外信息的地方。

## 5. 实验数量与充分性

### 实验数量
- **主要实验**：涉及7种PDE，覆盖1D和2D（空间）场景，以及简单/困难两种反应扩散设置。
- **噪声实验**：对大部分PDE进行了不同噪声水平（0%~80%）的测试，在反应扩散和Navier-Stokes上与基线进行了对比。
- **消融实验**：未单独设置消融实验，但通过不同PDE类型（尤其是非线性、复杂模式）验证了方法的泛化性。
- **多重网格超参数分析**：对FGMRES迭代次数、V-cycle数量、Gauss-Seidel步数进行了参数影响评估。

### 充分性与公平性
- **充分性**：实验覆盖了线性、非线性、复杂模式、噪声鲁棒性等多个维度，较全面。
- **公平性**：与基线方法（WeakSINDy、PDEFIND）在同一数据集、相同噪声设置下比较，TPR和E∞指标合理。但基线方法在硬反应扩散案例上完全失败，对比仍算客观。
- **局限**：未进行大规模消融研究（如不同网络架构、损失权重的影响），也未讨论计算时间对比。

## 6. 主要结论与发现

- **发现能力**：MechNN-PDE能够在无噪声或中度噪声下准确发现多种PDE（TPR=1或接近1），且系数误差较小。
- **鲁棒性**：在噪声高达40%-80%时仍保持较高TPR，显著优于PDEFIND，在困难案例中优于WeakSINDy。
- **非线性表达**：成功发现无法用固定基函数表示的多孔介质方程指数（真实值2.675，发现值2.64±0.03）。
- **Navier-Stokes发现**：在极低粘度（ν=0.001）下成功恢复方程，而WeakSINDy无法发现。
- **可扩展性**：稀疏多网格求解器可在GPU上处理较大网格（128x128），内存和时间可接受。

## 7. 优点

- **创新性**：将可微线性PDE求解器嵌入神经网络，实现端到端方程发现；利用多网格方法解决高维稀疏线性系统，是可微分深度学习与数值线性代数的巧妙结合。
- **灵活性**：通过参数化输入神经网络，可表达任意可微函数，超越固定基函数限制。
- **鲁棒性**：对噪声和缺失数据有较好的容忍度，源于数值求解与神经网络的协同。
- **并行与GPU**：设计真正的批并行稀疏求解器，可在GPU上高效运行。
- **简洁性**：通过稀疏正则化和阈值化得到简洁方程，易于解释。

## 8. 不足与局限

- **可扩展性限制**：网格方法本质受维度灾难影响，虽然稀疏求解器缓解了内存问题，但高维（如3D+时间）仍可能面临挑战。作者提出可结合无网格技术。
- **精度与速度权衡**：为追求速度，有时会牺牲求解精度（尤其中等网格下误差在10⁻³~10⁻⁴量级），可能影响系数发现的精确度。
- **未考虑可识别性**：未讨论PDE的可辨识性条件（即是否存在多个参数集对应同一数据），可能导致发现非唯一解。
- **实验复现信息不足**：缺少详细算力描述和训练超参数（迭代次数、批次大小等），不利于复现。
- **固定表达式结构**：虽然允许参数化输入，但PDE的树结构仍需预先指定（如多项式阶数），未实现完全结构学习。
- **仅处理单个PDE发现**：在耦合方程组中一次只发现一个方程，联合发现多个方程需进一步扩展。
- **偏差风险**：可能偏向于低阶多项式形式的方程；实验未涉及实际复杂物理场景（如湍流或气候数据），在真实噪声分布下的表现未知。

（完）
