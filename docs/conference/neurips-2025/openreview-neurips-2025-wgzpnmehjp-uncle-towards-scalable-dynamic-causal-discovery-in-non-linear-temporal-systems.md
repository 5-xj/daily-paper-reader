---
title: "UnCLe: Towards Scalable Dynamic Causal Discovery in Non-linear Temporal Systems"
title_zh: UnCLe：面向非线性时序系统的可扩展动态因果发现
authors: "Tingzhu Bi, Yicheng Pan, Xinrui Jiang, Huize Sun, Meng Ma, Ping Wang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=wGZPNMEHjP"
tags: ["query:sr"]
score: 6.0
evidence: 从时间序列数据中发现因果关系
tldr: 该论文提出UnCLe方法，用于非线性时间序列中的动态因果发现。通过拆解和重构网络解耦语义表征，并利用时序扰动估计因果影响。在多个基准上展示了可扩展性和准确性，为从观测数据中发现因果关系提供了新工具。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-wgzpnmehjp/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1457, \"height\": 426, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wgzpnmehjp/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1169, \"height\": 300, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wgzpnmehjp/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1448, \"height\": 593, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wgzpnmehjp/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 407, \"height\": 362, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wgzpnmehjp/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 611, \"height\": 256, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wgzpnmehjp/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1445, \"height\": 578, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wgzpnmehjp/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1442, \"height\": 583, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wgzpnmehjp/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 956, \"height\": 547, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wgzpnmehjp/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 956, \"height\": 289, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wgzpnmehjp/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 307, \"height\": 506, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wgzpnmehjp/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1293, \"height\": 258, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wgzpnmehjp/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1049, \"height\": 560, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wgzpnmehjp/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1436, \"height\": 966, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wgzpnmehjp/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1172, \"height\": 324, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wgzpnmehjp/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 974, \"height\": 242, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-wgzpnmehjp/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1446, \"height\": 447, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wgzpnmehjp/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 761, \"height\": 245, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wgzpnmehjp/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 366, \"height\": 215, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wgzpnmehjp/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 885, \"height\": 238, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wgzpnmehjp/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1076, \"height\": 572, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wgzpnmehjp/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 618, \"height\": 552, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wgzpnmehjp/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 770, \"height\": 576, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wgzpnmehjp/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 850, \"height\": 271, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wgzpnmehjp/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 974, \"height\": 371, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wgzpnmehjp/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 963, \"height\": 370, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wgzpnmehjp/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1006, \"height\": 448, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-wgzpnmehjp/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1160, \"height\": 371, \"label\": \"Table\"}]"
motivation: 现有因果发现方法多假设静态图，但真实系统因果关系随时间动态变化。
method: 提出UnCLe，包含Uncoupler和Recoupler网络，学习语义表征并估计动态因果矩阵。
result: 在模拟和真实数据上，UnCLe有效捕捉了时变因果关系，且计算可扩展。
conclusion: 为时间序列中的动态因果发现提供了深度学习解决方案。
---

## Abstract
Uncovering cause-effect relationships from observational time series is fundamental to understanding complex systems. While many methods infer static causal graphs, real-world systems often exhibit *dynamic causality*—where relationships evolve over time. Accurately capturing these temporal dynamics requires time-resolved causal graphs. We propose UnCLe, a novel deep learning method for scalable dynamic causal discovery. UnCLe employs a pair of Uncoupler and Recoupler networks to disentangle input time series into semantic representations and learns inter-variable dependencies via auto-regressive Dependency Matrices. It estimates dynamic causal influences by analyzing datapoint-wise prediction errors induced by temporal perturbations. Extensive experiments demonstrate that UnCLe not only outperforms state-of-the-art baselines on static causal discovery benchmarks but, more importantly, exhibits a unique capability to accurately capture and represent evolving temporal causality in both synthetic and real-world dynamic systems (e.g., human motion). UnCLe offers a promising approach for revealing the underlying, time-varying mechanisms of complex phenomena.

---

## 论文详细总结（自动生成）

# 论文结构化总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：现实世界中的复杂系统（如气候、生物、经济、人体运动等）往往表现出**动态因果关系**——即变量之间的因果影响会随时间演变。然而，现有的大多数时序因果发现方法专注于推断**静态因果关系图**，无法捕捉因果关系的时变特性。一些方法虽然能够处理滞后效应或提供全局摘要图，但未能显式建模并输出随时间变化的因果图。因此，亟需一种可扩展的方法来从观测时序数据中发现并表征动态因果结构。

- **关键挑战**：非线性系统中因果关系的时变性和高维数据带来的可扩展性问题。

- **核心目标**：提出一种新颖的深度学习方法 **UnCLe** (UnCoupLing causality)，能够从观测时序数据中可扩展地发现和表征动态因果图，同时保持对静态因果发现的竞争力。

## 2. 方法论

### 2.1 核心思想
UnCLe 基于**神经Granger因果性**原理，通过以下两个阶段实现动态因果发现：
1. **训练阶段**：使用一对参数共享的 **Uncoupler 和 Recoupler 网络**（基于TCN自动编码器）将多变量时序解耦为多通道语义表示，并通过**自回归依赖矩阵** (Dependency Matrices) 建模变量间依赖关系。
2. **事后分析阶段**：对单个时间序列进行**时序扰动**（如排列），通过分析扰动前后预测误差的逐点变化来量化动态因果强度，生成时间分辨的因果图；也可以直接聚合依赖矩阵得到静态因果图。

### 2.2 关键技术细节

- **Uncoupler 和 Recoupler**：采用共享参数的TCN自动编码器架构，将每个单变量时序映射为C通道的潜在序列，再重构回原始空间。参数共享提升了高维数据的效率和稳定性。
- **自回归依赖矩阵**：每个通道c有一个N×N的矩阵Ψc，在潜在空间线性预测下一时刻：$\hat{z}^c_{:,t+1} = \sigma(\Psi^c z^c_{:,t})$。这种线性化假设潜在空间可近似非线性动态。
- **训练目标**：包括重构损失 $L_{Recon}$、预测损失 $L_{Pred}$ 和稀疏性正则化 $L_{L1}$（施加在依赖矩阵上）。训练分为预训练（仅重构）和联合训练两个阶段。
- **动态因果发现**：对每个源序列 $x_j$ 进行时间排列扰动，计算在扰动下目标序列 $x_i$ 在每时刻的预测误差增益 $\Delta \epsilon_{j,i,t}$，作为因果强度。
- **静态因果发现**：对依赖矩阵Ψ的系数跨通道取L2范数，聚合得到静态因果图。

## 3. 实验设计

### 3.1 数据集与场景
- **合成数据集**：
  - **Lorenz96**：模拟气候动态的ODE模型，设三种配置（Lorenz#1/#2/#3），变量数p=20/20/100，时长T=250/250/500，强迫常数F=10/10/40。
  - **NC8**：非线性常量交互，8变量，包含多种非线性函数和长滞后。
  - **TVSEM**：双变量时变结构方程模型，因果关系每400步切换一次，共2000步。
  - **ND8**：动态版NC8，部分连接每500步切换方向，8变量。
  - **fMRI**：功能性磁共振成像的模拟数据（15变量）。
  - **FINANCE**：金融时间序列（20/40变量）。

- **真实世界数据集**：
  - **MoCap**（CMU人体运动捕捉）：包含31个关节的3轴角度，选取前跳等7种动作。
  - **METR-LA** 和 **PEMS-BAY**：交通速度数据，分别含207和325个传感器，时长10240。

### 3.2 基准方法
对比了9种基线方法，涵盖统计方法和神经方法：
- VAR (Granger因果F检验)
- PCMCI（约束法）
- cMLP、TCDF、GVAR、VAR-LiNGAM、DYNOTEARS、CUTS+、JRNGC。
其中GVAR是唯一能生成动态因果图的基线。

### 3.3 评估指标
- 主要使用AUROC、AUPRC（加权图），部分报告ACC（二值化图）。
- 不考虑自因果关系，仅评价非对角线元素。

## 4. 资源与算力

**论文未明确说明使用的GPU型号、数量、训练时长等具体算力信息**。仅在附录提及软件/硬件配置的说明存在于论文中（但在提供的文本中未见具体数值）。仅提到使用随机种子和网格搜索调参。因此，算力开销不可量化。

## 5. 实验数量与充分性

- **实验数量**：涉及**10+数据集**（3个Lorenz变体、NC8、TVSEM、ND8、fMRI、FINANCE、MoCap（7种动作）、METR-LA、PEMS-BAY），**共约12个实验场景**。每个实验通常使用5或8个副本报告均值和置信区间。
- **消融实验**：针对高维Lorenz#3数据集进行了3项消融：
  - 移除参数共享 → AUROC从0.951降至0.813
  - 移除依赖矩阵（同时移除参数共享） → AUROC降至0.498（接近随机）
  - 移除预测任务（仅重构） → AUROC降至0.493
- **扰动策略对比**：对比了时序排列、零掩码、噪声注入、无扰动四种，证明排列最优。
- **滞后阶数消融**（附录）：比较lag=1/2/4，结论为lag=1最优。
- **定性分析**：MoCap上可视化6个快照，并与GVAR、JRNGC对比；可视化交通网络图。
- **充分性与公平性**：超参数通过网格搜索以最大化AUROC；结果报告均值和置信区间；基线方法使用相同或推荐设置。总体实验设计较充分、客观。

## 6. 主要结论与发现

- **动态因果发现能力**：UnCLe在TVSEM和ND8上显著优于GVAR（唯一能输出动态图的基线），能准确追踪因果方向的切换；在MoCap上能捕获与生物力学阶段一致的可解释动态图，缺失率更低。
- **静态因果发现竞争力**：在Lorenz96、NC8上取得最佳AUROC/AUPRC；在FINANCE上第二；在fMRI上ACC与JRNGC相当。
- **可扩展性**：在100变量的Lorenz#3上仍保持高精度，且运行时间合理（比TCDF、Dynotears更快，与CUTS+相当）。
- **消融确认**：参数共享、依赖矩阵、预测任务均不可或缺；时序排列是最优扰动策略。

## 7. 优点

- **创新性**：首次将语义解耦和扰动后逐点误差分析结合，实现动态因果发现，输出时间分辨因果图。
- **有效性**：在多种静态和动态数据集上均达到领先水平，特别是能准确捕捉时变因果结构。
- **可解释性**：依赖矩阵的通道可视化、扰动误差分析提供直观的因果解释；MoCap案例展示与生物力学阶段一致的图结构。
- **可扩展性**：参数共享的TCN架构+轻量线性依赖矩阵，支持高维系统，计算效率高于许多神经方法。
- **双模式输出**：既可通过扰动获得动态因果图，也可通过聚合依赖矩阵快速获得静态图。

## 8. 不足与局限

- **缺乏理论保证**：论文明确承认没有提供因果可辨识性的理论证明，仅依赖经验性能。断言潜在空间线性化足够忠实因果结构，但未理论证明。
- **假设依赖**：方法假设无隐藏混杂因素、充分观测、模型正确设定等，这些在实际中可能不成立。
- **实验覆盖**：动态因果评价仅在小规模（TVSEM双变量、ND8 8变量）上进行；高维动态场景缺失验证。MoCap分析为定性，且仅展示前跳动作。
- **基线对比动态维度**：仅GVAR能输出动态图，对比不完全。其他基线作为静态基线参与ND8对比（附录），但总体动态因果基线性不足。
- **超参数敏感性**：需要调节多个超参数（通道数C、架构深度、正则化系数等），网格搜索成本高，论文未直接分析鲁棒性。
- **算力消耗不透明**：未报告GPU型号、训练时间等，难以评估实际资源需求。

（完）
