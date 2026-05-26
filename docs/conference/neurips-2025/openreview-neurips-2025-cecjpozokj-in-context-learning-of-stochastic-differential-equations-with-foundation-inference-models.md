---
title: In-Context Learning of Stochastic Differential Equations with Foundation Inference Models
title_zh: 随机微分方程的上下文学习：基于基础推理模型
authors: "Patrick Seifner, Kostadin Cvejoski, David Berghaus, Cesar Ojeda, Ramses J Sanchez"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=ceCJPoZOKJ"
tags: ["query:sr"]
score: 7.0
evidence: 通过上下文学习估计随机微分方程的漂移和扩散函数，属于科学数据中的方程发现。
tldr: 针对随机微分方程函数发现依赖先验知识和复杂训练的问题，提出FIM-SDE基础推理模型，通过上下文学习实现零样本估算低维SDE的漂移和扩散函数。在多个合成和实测数据上，FIM-SDE显著优于传统方法，为动态系统方程发现提供了轻量且通用的解决方案。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-cecjpozokj/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1456, \"height\": 418, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cecjpozokj/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1409, \"height\": 400, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cecjpozokj/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1452, \"height\": 378, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cecjpozokj/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1265, \"height\": 372, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cecjpozokj/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1004, \"height\": 2260, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cecjpozokj/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1396, \"height\": 2004, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-cecjpozokj/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1443, \"height\": 636, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cecjpozokj/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 840, \"height\": 177, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cecjpozokj/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1290, \"height\": 212, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cecjpozokj/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 777, \"height\": 175, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cecjpozokj/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 724, \"height\": 283, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cecjpozokj/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 631, \"height\": 283, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cecjpozokj/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1425, \"height\": 590, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cecjpozokj/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1470, \"height\": 590, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cecjpozokj/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1365, \"height\": 958, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cecjpozokj/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1347, \"height\": 431, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cecjpozokj/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1247, \"height\": 449, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cecjpozokj/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1259, \"height\": 450, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cecjpozokj/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 796, \"height\": 317, \"label\": \"Table\"}]"
motivation: 从数据中发现随机微分方程的函数形式通常需要大量先验知识或复杂训练过程，限制了其广泛应用。
method: 设计预训练的基础推理模型FIM-SDE，利用上下文学习直接从含噪时间序列中零样本估计漂移和扩散函数。
result: 在多种低维SDE上，FIM-SDE实现高精度函数估计，且无需微调即可适应新系统。
conclusion: FIM-SDE展示了基础模型在科学方程发现中的潜力，提供了一种高效、无需先验知识的方法。
---

## Abstract
Stochastic differential equations (SDEs) describe dynamical systems where deterministic flows, governed by a drift function, are superimposed with random fluctuations, dictated by a diffusion function. The accurate estimation (*or discovery*) of these functions from data is a central problem in machine learning, with wide application across the natural and social sciences. Yet current solutions either rely heavily on prior knowledge of the dynamics or involve intricate training procedures. We introduce FIM-SDE (Foundation Inference Model for SDEs), a pretrained recognition model that delivers accurate *in-context* (or zero-shot) estimation of the drift and diffusion functions of *low-dimensional* SDEs, from noisy time series data, and allows rapid *finetuning* to target datasets. Leveraging concepts from amortized inference and neural operators, we (pre)train FIM-SDE in a supervised fashion to map a large set of noisy, discretely observed SDE paths onto the space of drift and diffusion functions. We demonstrate that FIM-SDE achieves robust *in-context* function estimation across a wide range of synthetic and real-world processes --- from canonical SDE systems (*e.g*., double-well dynamics or weakly perturbed Lorenz attractors) to stock price recordings and oil-price and wind-speed fluctuations --- while matching the performance of symbolic, Gaussian process and Neural SDE baselines trained on the target datasets. When *finetuned* to the target processes, we show that FIM-SDE consistently outperforms all these baselines.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义
- **研究动机与背景**：从含噪时间序列数据中准确发现（估计）随机微分方程（SDE）的漂移函数和扩散函数，是机器学习在自然科学与社会科学中的一个核心难题。现有方法要么强烈依赖关于动力学过程的先验知识（例如符号回归、高斯过程回归），要么涉及复杂且昂贵的训练流程（例如神经SDE）。这些方法在面对新的观测系统时通常需要从头开始训练或调整，实用性受限。
- **整体含义**：作者提出一种基础推理模型 **FIM-SDE**，通过“上下文学习”（或称零样本估计）直接从含噪稀疏观测中恢复低维SDE的漂移和扩散函数，且可快速微调至目标数据集。该工作展示了“预训练于合成数据 → 零样本泛化 → 快速微调”范式在科学方程发现中的潜力，为自动科学发现提供了一种高效、少先验的解决方案。

### 2. 论文提出的方法论
- **核心思想**：将SDE函数估计问题视为一个小样本元学习（或上下文学习）任务。通过构造一个覆盖多种低维多项式型SDE的合成数据生成分布，并训练一个Transformer+神经算子结构的神经网络，在给定一组含噪观测序列（上下文）后直接输出对应位置的漂移和扩散函数值。
- **关键技术细节**：
  1. **合成数据生成**（生成模型）：
     - 漂移函数采样自最多3次的多项式（系数随机），扩散函数采样自最多2次的正值多项式（通过截断保证非负）。
     - 使用Euler-Maruyama方法模拟SDE路径，随后通过子采样和添加高斯噪声生成含噪、不规则时间间隔的观测序列 \( \mathcal{D} = \{y_i, \Delta y_i, \Delta y_i^2, \Delta\tau_i\} \)。
  2. **FIM-SDE 架构**：
     - 将上下文数据 \( \tilde{\mathcal{D}} \) 中的每个单步转移通过线性投影得到嵌入，再经自注意力编码器（linear attention Transformer）得到“上下文矩阵”。
     - 利用“功能注意力机制”（类比DeepONet的主干网络）：将待估计位置 \( x \) 的嵌入作为查询，上下文矩阵作为键和值，经过多层注意力网络得到位置相关的表示，并投影得到 \( \hat{f}_θ(x|\tilde{\mathcal{D}}) \) 和 \( \hat{G}_θ(x|\tilde{\mathcal{D}}) \)。
     - 输出前通过实例归一化（空间和时间）与反归一化处理，使模型能处理不同尺度的系统。
  3. **训练损失**：
     - 基本损失为估计函数与真实函数的均方误差（MSE）。为平衡不同区域贡献，引入可学习的不确定性权重 \( U_θ \)，形成加权损失：\( \mathcal{L}_θ = \mathbb{E}_{x,\tilde{\mathcal{D}},f,G}[ e^{-U_θ} \mathcal{L}_θ^1 + U_θ ] \)。
  4. **微调**：
     - 对稠密数据：最大化短时转移对数似然。
     - 对稀疏数据：模拟推断的SDE多步后与观测比较MSE。

### 3. 实验设计
- **数据集/场景**：
  - **规范SDE**（8个）：双阱系统、2D合成系统、阻尼线性振荡子、阻尼三次振荡子、Duffing振荡子、Selkov糖酵解、Hopf分岔、弱扰动Lorenz吸引子。每个系统设置不同噪声水平（\( \rho=0,0.05 \)）和观测间隔（\( \Delta\tau=0.002,0.02,0.025 \)）。
  - **真实世界系统**（4个）：Facebook和Tesla股票价格、油价波动、风速记录（均来自Wang et al., 2022）。采用五折交叉验证。
- **Benchmark与对比方法**：
  - **SparseGP**：高斯过程回归（Batz et al., 2018）。
  - **BISDE**：符号回归（Wang et al., 2022）。
  - **LatentSDE**：神经SDE（Li et al., 2020），需在目标数据上从头训练。
  - 所有对比方法均在目标数据上训练/调优；FIM-SDE则先零样本使用，再（可选）微调。

### 4. 资源与算力
- 文中明确说明：使用4张 **NVIDIA A100 (40GB)** GPU，以 **batch size 64** 训练 **1.3M步**，历时约 **6天**。模型参数量约为 **2000万**。
- 合成训练数据集包含 **600K个低维SDE**（1D/2D/3D比例为1:2:3），另加60K验证集。

### 5. 实验数量与充分性
- **实验数量**：
  - 规范SDE部分：7个系统×4种实验配置（噪声/观测间隔组合）×5次重复 = 140个主要实验（加上Lorenz实验额外三种初始条件）。
  - 真实世界部分：4个数据集×5折交叉验证 = 20个实验。
  - 消融研究：模型规模与数据量（2个较小模型 vs 完整模型）、漂移多项式次数（3 vs 4）、上下文大小（500–50000）的影响。
  - 对比了三种不同类别基线（GP、符号、神经SDE），并报告了均值和标准差。
- **充分性与公平性**：
  - 实验覆盖了不同噪声、稀疏度、维度和实际应用场景，较为全面。
  - 基线方法均使用作者提供的官方实现或公认设置，且允许从头训练（而FIM-SDE做零样本时无需训练，微调步数也远少于基线）。
  - 消融研究验证了模型规模和数据量的影响，结果符合预期（更大模型/更多数据更好）。
  - **潜在偏差**：所有规范SDE均属于训练分布（多项式漂移≤3次，扩散≤2次）的范畴；真实数据虽非合成，但隐含假设这些数据可以被低次多项式SDE近似刻画。此外，仅限于低维系统（1–3维），且仅处理对角扩散矩阵。

### 6. 论文的主要结论与发现
- **零样本性能**：FIM-SDE在绝大多数实验中的零样本估计效果与在有目标数据上训练的基线方法相当，甚至更好（特别是在含噪或稀疏情况下）。
- **微调优势**：仅需少量迭代（通常100步以内）即可显著提升性能，且收敛速度比LatentSDE快5–50倍，全面超越所有基线。
- **泛化能力**：训练于合成数据（低次多项式）的模型能够泛化到真实世界数据集（股票、油价、风速），表明该先验分布编码了有用的归纳偏置。
- **稳定性**：相比BISDE和SparseGP，FIM-SDE几乎不产生无效SDE估计（如发散或数值不稳定），鲁棒性更强。

### 7. 优点
- **方法创新**：将上下文学习与神经算子结合，用于SDE函数发现，属首次尝试。避免了传统方法对先验知识的强依赖和复杂训练。
- **零样本快速推断**：一次性预训练后，对新系统无需重新训练，仅需一次前向传播即可获得函数估计。
- **快速微调**：可在稀疏/稠密数据上快速适应，迭代次数远少于神经SDE基线。
- **处理噪声和稀疏数据能力强**：在含噪、不规则时间间隔的数据上表现尤为突出。
- **架构设计精巧**：通过实例归一化和反归一化处理不同尺度的系统，通过可学习不确定性权重平衡损失，提高了训练稳定性和泛化能力。

### 8. 不足与局限
- **先验分布局限**：仅覆盖最多3次多项式漂移和最多2次多项式扩散，且限于低维（≤3维）。对于更复杂（如高度非多项式、高维）的SDE，模型可能失效。未来需扩展至更灵活的函数族（如随机函数组合）和更高维度。
- **高维数据生成困难**：生成有效SDE的拒绝率随维度急剧上升（1D:50%, 2D:78%, 3D:92%），导致训练数据偏向低维系统。未来可考虑设计保证全局Lipschitz和线性增长的条件来降低拒绝率。
- **扩散矩阵限制为对角形式**：目前仅推断对角扩散，虽然可扩展至非对角，但未做验证。
- **实验覆盖维度有限**：仅测试1-3维系统，对更高维（如4维以上）未评估；真实数据也仅限一维（股票、油价）或三维（Lorenz）。
- **对纯确定性或弱随机系统的偏置**：训练数据中多数SDE具有非零扩散，导致在漂移主导的系统（如Lorenz）上零样本性能较弱（但微调可快速纠正）。
- **消融研究仅使用小模型**：消融模型参数仅为5M和10M，完整模型为20M，未探索更大规模的效果。另外，消融实验的限制（仅30k或100k训练数据）也可能影响结论的一般性。

（完）
