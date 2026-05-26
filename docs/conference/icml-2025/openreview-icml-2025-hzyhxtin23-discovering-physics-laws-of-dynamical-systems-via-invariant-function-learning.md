---
title: Discovering Physics Laws of Dynamical Systems via Invariant Function Learning
title_zh: 通过不变函数学习发现动力系统的物理定律
authors: "Shurui Gui, Xiner Li, Shuiwang Ji"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=hzYHxtIn23"
tags: ["query:sr"]
score: 9.0
evidence: 通过不变函数学习发现物理定律
tldr: 该论文针对跨环境发现动力系统内在物理定律的难题，提出不变函数学习。即使环境改变函数形式（如阻尼或外力），方法仍能提取出理想摆的固有运动方程。通过不变性约束分离环境特定机制，实验成功发现多个系统的物理定律。直接对应科学数据中的方程发现需求。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-hzyhxtin23/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1440, \"height\": 686, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hzyhxtin23/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 701, \"height\": 474, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hzyhxtin23/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1428, \"height\": 442, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hzyhxtin23/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1396, \"height\": 403, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hzyhxtin23/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1431, \"height\": 426, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hzyhxtin23/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 728, \"height\": 495, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hzyhxtin23/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1753, \"height\": 715, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hzyhxtin23/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1755, \"height\": 705, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hzyhxtin23/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1753, \"height\": 1054, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hzyhxtin23/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1743, \"height\": 498, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hzyhxtin23/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1746, \"height\": 499, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hzyhxtin23/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1746, \"height\": 498, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hzyhxtin23/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1740, \"height\": 506, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hzyhxtin23/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1746, \"height\": 361, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hzyhxtin23/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 550, \"height\": 838, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-hzyhxtin23/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1426, \"height\": 154, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-hzyhxtin23/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1425, \"height\": 738, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-hzyhxtin23/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1258, \"height\": 1732, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-hzyhxtin23/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1762, \"height\": 438, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-hzyhxtin23/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1770, \"height\": 320, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-hzyhxtin23/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1761, \"height\": 342, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-hzyhxtin23/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1774, \"height\": 1216, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-hzyhxtin23/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1771, \"height\": 297, \"label\": \"Table\"}]"
motivation: 跨环境发现动力系统内在定律时，环境改变可能完全改变函数形式。
method: 提出不变函数学习，从多个环境观测中分离不变部分，发现底层ODE。
result: 在摆、振子等系统中成功恢复理想物理方程，鲁棒于环境变化。
conclusion: 为从科学数据中自动发现物理定律提供了有效新方法。
---

## Abstract
We consider learning underlying laws of dynamical systems governed by ordinary differential equations (ODE). A key challenge is how to discover intrinsic dynamics across multiple environments while circumventing environment-specific mechanisms. Unlike prior work, we tackle more complex environments where changes extend beyond function coefficients to entirely different function forms. For example, we demonstrate the discovery of ideal pendulum's natural motion $\alpha^2 \sin{\theta_t}$ by observing pendulum dynamics in different environments, such as the damped environment $\alpha^2 \sin(\theta_t) - \rho \omega_t$ and powered environment $\alpha^2 \sin(\theta_t) + \rho \frac{\omega_t}{\left|\omega_t\right|}$. Here, we formulate this problem as an *invariant function learning* task and propose a new method, known as **D**isentanglement of **I**nvariant **F**unctions (DIF), that is grounded in causal analysis. We propose a causal graph and design an encoder-decoder hypernetwork that explicitly disentangles invariant functions from environment-specific dynamics. The discovery of invariant functions is guaranteed by our information-based principle that enforces the independence between extracted invariant functions and environments. Quantitative comparisons with meta-learning and invariant learning baselines on three ODE systems demonstrate the effectiveness and efficiency of our method. Furthermore, symbolic regression explanation results highlight the ability of our framework to uncover intrinsic laws.

---

## 论文详细总结（自动生成）

### 1. 核心问题与整体含义
- **研究动机**：跨多个环境发现动力系统的内在物理定律。传统方法局限于系数层面的环境变化，而现实场景中环境可能完全改变函数形式（例如摆从阻尼到有外力）。
- **问题定义**：提出**不变函数学习**（Invariant Function Learning, IFL）任务：从不同环境观测的轨迹中提取出在所有环境中共享的**不变函数**（对应物理定律），同时排除环境特定机制（如摩擦、外力）。
- **意义**：为自动从观测数据中发现可解释、可泛化的物理规律提供新框架，可应用于科学发现（如从实验图像/视频中提取定律）。

### 2. 方法论
- **核心思想**：基于因果图（图2）将动力系统的导数函数分解为**不变函数** \(f_c\) 和**环境特定函数** \(f_e\)；\(f_c\) 与 \(f_e\) 通过函数组合得到实际观测函数 \(f\)。通过**信息论原理**（定理3.1）识别 \(f_c\)：在要求 \(f_c\) 与环境独立的条件下，最大化 \(f_c\) 与真实全函数 \(f\) 的条件互信息。
- **关键技术**：
    - **超网络（Hypernetwork）框架**：编码器（Transformer）将观测轨迹编码为潜表示，经MLP分离出不变嵌入 \(z_c\) 和环境嵌入 \(z_e\)，相加后由解码MLP生成函数网络参数（\(f_c\) 和 \(f\)）。
    - **训练目标**（公式3）：三个损失项：① 全函数预测的导数MSE；② 不变函数预测的导数MSE（权重 \(\lambda_c\)）；③ 对抗性损失：环境判别器 \(g_\phi\) 区分 \(z_c\) 和 \(z_e\) 的环境来源，通过对抗迫使 \(z_c\) 与环境无关（权重 \(\lambda_{adv}\)）。
    - **高效实现**：提出“参考指针”超网络实现，避免每次前向传递参数拷贝，加速16.8倍。

### 3. 实验设计
- **数据集**：三个多环境ODE系统
    - **ME-Pendulum**：4种环境（阻尼、外力、弹簧、空气摩擦），每个环境200样本，共800训练；测试集200样。
    - **ME-Lotka-Volterra**：4种环境（保存、战斗、资源限制、杂食），类似划分。
    - **ME-SIREpidemic**：4种环境（原始、扩大、循环、负数）。
- **评价指标**：归一化均方根误差（NRMSE）比较预测的不变轨迹 \(X_c\) 与真实不变轨迹。
- **对比方法**：将四种方法适配到IFL任务：
    - Meta-learning：MAML、CoDA
    - Invariant learning：IRM、VREx
- **实验充分性**：
    - 每种方法在80+超参数组合上运行，总计1200+模型。
    - 全部结果以Boxen图展示中位数、分位数，对比分布。
    - 包含消融实验（移除f或fc分支）、输入长度分析、环境数量影响、符号回归解释（PySR）。

### 4. 资源与算力
- 硬件：Ubuntu 20.04，48核 Intel Xeon Silver 4214R CPU @ 2.40GHz，755GB RAM，NVIDIA RTX 2080Ti GPU。
- 训练：每个run 2000 epochs，batch size 32，即约50,000迭代。未明确报告总GPU小时数或模型数量。

### 5. 实验数量与充分性
- 数量：三个数据集，每种baseline 80+超参数，总计超过1200模型。
- 充分性：使用分布比较（而非单点），包含消融、灵敏度、符号回归，覆盖了主要对比组件。但缺少真实世界物理系统或噪声更大的场景，因此**充分但可更广泛**。

### 6. 主要结论与发现
- **性能优势**：DIF在三个数据集上的中位数NRMSE均低于所有baseline。例如ME-Pendulum 0.3561 vs. 第二好的IRM 0.7042。
- **符号回归结果**：DIF提取的不变函数接近真实物理公式（如摆：\(d\omega/dt = -0.97\alpha^2\sin\theta_t\)），而baseline产生混乱表达式。
- **消融验证**：完整的DIF模型优于只输出全函数或只输出不变函数的分支，证明分离策略有效。
- **鲁棒性**：输入长度和环境数量对性能影响有限，但在某些情况下（如ME-SIREpidemic）添加环境可提升最佳候选。

### 7. 优点
1. **任务创新**：首次提出从函数形式改变的跨环境数据中学习物理不变定律，比系数级变化更复杂。
2. **理论严谨**：基于因果图的信息论原则（定理3.1）提供识别不变函数的必要性&充分性证明。
3. **方法有效**：超网络分离+对抗训练成功解耦环境因素，性能大幅领先基线。
4. **效率优化**：参考指针超网络实现大幅加速（16.8倍），实用性强。
5. **可解释性**：符号回归能还原近似的物理公式，辅助科学发现。

### 8. 不足与局限
1. **应用范围**：目前仅限ODE系统，尚未扩展至PDE（缺少多环境PDE数据集，且存在多尺度、连续空间等挑战）。
2. **依赖性**：需要领域专家精心设计多环境数据集（函数形式差异明确），真实场景中环境变量可能未知。
3. **可解释性部分**：符号回归在复杂系统（如Lotka-Volterra、SIR）上提取的公式与真实略有偏差（如系数不精确），解释器本身有局限。
4. **实验覆盖**：缺少高噪声、高维状态或图像输入等更具挑战的场景，无法完全证明鲁棒性。
5. **计算资源**：尽管有加速，但超网络仍需要较大显存，对普通GPU可能不友好。

（完）
