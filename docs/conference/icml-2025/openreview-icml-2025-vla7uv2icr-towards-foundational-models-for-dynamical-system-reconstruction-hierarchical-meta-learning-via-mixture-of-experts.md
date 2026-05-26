---
title: "Towards Foundational Models for Dynamical System Reconstruction: Hierarchical Meta-Learning via Mixture of Experts"
title_zh: 迈向动态系统重建的基础模型：基于混合专家的层次元学习
authors: "Roussel Desmond Nzoyem, David A.W. Barton, Tom Deakin"
date: 2025-01-23
pdf: "https://openreview.net/pdf?id=VLA7Uv2IcR"
tags: ["query:sr"]
score: 4.0
evidence: 通过层次元学习重建动态系统
tldr: 动态系统重建面临跨系统层次学习的瓶颈，现有元学习难以处理稀疏松散数据集。本文提出基于混合专家（MoE）的层次元学习方法，通过改进门控机制实现高效路由，在多个系统重建任务上取得更好性能。
source: ICML-2025-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-vla7uv2icr/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 783, \"height\": 351, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vla7uv2icr/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 778, \"height\": 791, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vla7uv2icr/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1692, \"height\": 520, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vla7uv2icr/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 797, \"height\": 369, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vla7uv2icr/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 795, \"height\": 552, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vla7uv2icr/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 850, \"height\": 450, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vla7uv2icr/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 829, \"height\": 247, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vla7uv2icr/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1599, \"height\": 917, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vla7uv2icr/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1885, \"height\": 1980, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vla7uv2icr/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1618, \"height\": 1478, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-vla7uv2icr/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1619, \"height\": 1428, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-vla7uv2icr/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 852, \"height\": 202, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vla7uv2icr/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 863, \"height\": 208, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vla7uv2icr/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 864, \"height\": 436, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vla7uv2icr/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1465, \"height\": 313, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vla7uv2icr/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1404, \"height\": 282, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vla7uv2icr/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1755, \"height\": 343, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vla7uv2icr/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1763, \"height\": 1053, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-vla7uv2icr/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 716, \"height\": 297, \"label\": \"Table\"}]"
motivation: 现有元学习方法难以从稀疏松散相关数据中学习动态系统的层次结构。
method: 提出基于混合专家的层次元学习，并改进梯度门控更新机制以解决路由冲突。
result: 在多个动态系统重建任务中表现优于现有方法。
conclusion: 该方法为构建动态系统基础模型迈出了重要一步。
---

## Abstract
As foundational models reshape scientific discovery, a bottleneck persists in dynamical system reconstruction (DSR): the ability to learn across system hierarchies. Many meta-learning approaches have been applied successfully to single systems, but falter when confronted with sparse, loosely related datasets requiring multiple hierarchies to be learned. Mixture of Experts (MoE) offers a natural paradigm to address these challenges. Despite their potential, we demonstrate that naive MoEs are inadequate for the nuanced demands of hierarchical DSR, largely due to their gradient descent-based gating update mechanism which leads to slow updates and conflicted routing during training. To overcome this limitation, we introduce MixER: Mixture of Expert Reconstructors, a novel sparse top-1 MoE layer employing a custom gating update algorithm based on $K$-means and least squares. Extensive experiments validate MixER's capabilities, demonstrating efficient training and scalability to systems of up to ten parametric ordinary differential equations. However, our layer underperforms state-of-the-art meta-learners in high-data regimes, particularly when each expert is constrained to process only a fraction of a dataset composed of highly related data points. Further analysis with synthetic and neuroscientific time series suggests that the quality of the contextual representations generated by MixER is closely linked to the presence of hierarchical structure in the data.

---

## 论文详细总结（自动生成）

# 论文《Towards Foundational Models for Dynamical System Reconstruction: Hierarchical Meta-Learning via Mixture of Experts》详细总结

## 1. 核心问题与整体含义

- **研究背景**：基础模型在语言和视觉领域取得成功后，科学发现领域也在寻求类似范式。动态系统重建（DSR）面临的核心瓶颈是**无法跨系统层次学习**——即当数据来自多个“家族”（family），每个家族内部环境（environment）彼此相似但家族之间关系稀疏甚至无关时，现有元学习方法难以同时学习多个层次。
- **问题重要性**：在临床、神经科学等数据稀缺领域，模型需要从有限且异构的观测中快速适应新环境。传统经验风险最小化（ERM）假设每个环境有充足样本；多任务学习缺乏快速适应机制；元学习（如 NCF、CoDA、GEPS）虽能适应新环境，但在跨家族场景下因缺乏显式层次路由而性能退化。
- **研究目标**：提出一种能够同时学习**多个任意相关家族**的动态系统重建模型，实现层次化元学习（Hierarchical Meta-Learning），从而向领域无关的科学基础模型迈进一步。

## 2. 方法论：核心思想、关键技术细节

### 核心思想
- 采用**稀疏混合专家（Mixture of Experts, MoE）**框架，将不同专家网络分配给不同“家族”的环境，每个专家负责一类动力学模式。关键创新点在于**路由机制**：不是基于输入状态，而是基于**环境上下文向量**（context vector）进行路由，且路由更新不使用梯度下降，而是通过 **K‑means 聚类 + 最小二乘法** 显式优化。

### MixER 层结构
- 输入：状态向量 \(x_t\) 和上下文向量 \(\xi^e\)（环境特定）。
- 门控网络：线性映射 \(g^e = \xi^e W\)，输出 M 个 logits，采用 **top‑1 路由**（每个环境仅激活一个专家）。
- 专家网络：每个专家是一个完整的元学习器（如 NCF、CoDA 或 GEPS），独立运行。
- **与标准 MoE 的关键区别**：
  - 门控输入仅包含上下文，不包含状态点 → 避免点级歧义。
  - 不使用 softmax 加权聚合专家输出 → 专家可独立使用，便于门控更新。

### 优化算法（Proximal Alternating Minimization）
- 交替优化全局参数 \(\Theta\)（所有专家权重）和环境上下文 \(\Xi\)。
- 损失函数：MSE 损失（式 7）。
- **门控网络更新（Algorithm 1）**：每轮（或若干轮）交替优化后执行一次，包含 4 步：
  1. **K‑means 聚类**（Algorithm 2）：对上下文 \(\Xi\) 聚成 M 簇。
  2. **计算损失矩阵**：每个专家 e 在每个环境 m 上的损失 \(\ell_{m,e}\)。
  3. **专家‑簇配对**：对每个簇，选择损失最小的专家（不重复），形成映射。
  4. **最小二乘拟合**：用聚类标签作为代理标签，求解线性门控权重 \(W\)（式 8），并加入噪声增强鲁棒性。
- **关键优化**：K‑means 复用上一次的质心加速收敛；噪声加入防止早期过拟合。

### 适应新环境
- 仅优化上下文向量 \(\xi\)（梯度下降），门控 \(W\) 和专家参数 \(\Theta\) 固定 → 快速 one‑shot 适应。

## 3. 实验设计

### 使用的数据集与场景
| 数据集 | 类型 | 家族数 | 环境数 | 用途 |
|--------|------|--------|--------|------|
| ODEBench‑2 | 2D ODE（2个家族） | 2 | 5+5 | 动机示例（松散相关） |
| ODEBench‑10A | 2D ODE（10个家族） | 10 | 5/家族 | 松散相关、少数据 |
| ODEBench‑10B | 同上，更多环境 | 10 | 16/家族 | 松散相关、中等数据 |
| Lotka‑Volterra (LV) | 2D ODE（经典DSR） | 1（紧密相关） | 多个 | 高数据量、紧密相关 |
| Glycolytic Oscillator (GO) | 同上 | 1 | 多个 | 同上 |
| Sel’kov Model (SM) | 同上 | 1 | 多个 | 同上 |
| Synthetic Control Chart (SCCTS) | 6类时间序列 | 隐含3个超类 | 600 | 下游聚类 |
| Epilepsy2 | EEG（2类） | 2 | 80训练 | 下游分类（紧密相关+噪声） |

### Benchmark 与对比方法
- **基础元学习器**：NCF（Neural Context Flow）、CoDA（Context‑informed Dynamics Adaptation）、GEPS（Gradient‑based Parameter Subspace）、CAVIA。
- **对比配置**：
  - 单专家（MixER‑1）：等同于标准元学习器。
  - 朴素 MoE（Naive MoE）：标准 MoE 门控（梯度下降更新）。
  - MixER‑M（M=3,10,20）：本文方法。
- **评估指标**：相对 MSE（Rel. MSE）、阈值百分比相对 MSE（TPRMSE）、分类准确率、PCA 聚类可视化。

## 4. 资源与算力

- **硬件**：NVIDIA RTX 4080（16GB VRAM） 和 四个 NVIDIA GH200（共480GB 显存）。
- **训练时间**（最大 ODEBench‑10B，500 外循环）：
  - hier‑shPLRNN（用于 SCCTS 和 Epilepsy2）：<5 分钟。
  - CoDA：约 20 分钟。
  - GEPS：约 30 分钟。
  - NCF：约 25 分钟。
- **说明**：文中未明确报告所有实验的总 GPU 小时数，但可推算中等规模。

## 5. 实验数量与充分性

- **主要实验组**：
  1. **动机实验**（图2）：ODEBench‑2，对比单专家、朴素 MoE、MixER，验证门控问题。
  2. **松散相关大数据**（表2、表3、图5）：ODEBench‑10A 和 10B，对比 3 种骨干 × 3 种 MoE 模式，共 9 种配置，每个 3 种子。
  3. **紧密相关经典 DSR**（表4、图9）：LV/GO/SM 各 3 种骨干 × MixER‑3，与原始论文结果对比。
  4. **下游聚类/分类**（图6、图7）：SCCTS（3专家无监督）和 Epilepsy2（2专家），对比 vanilla K‑means 和单专家。
  5. **消融/分析**：门控热力图、训练过程路由演化（附录图8、图9）。
- **充分性**：实验覆盖松散/紧密、合成/真实、少数据/多数据、训练/适应、聚类/分类等多种场景。对比方法包括 SoTA。但缺少在更多家族（如 >10）或更高维系统的验证。消融实验不够深入（如未单独分析噪声、K‑means 初始化等的影响）。

## 6. 主要结论与发现

1. **朴素 MoE 不足**：梯度下降门控更新在 DSR 中导致路由冲突和缓慢收敛（图8）；MixER 的 K‑means+最小二乘门控能有效学习专家‑家族映射。
2. **松散相关数据上有效**：在 ODEBench‑2 和 ODEBench‑10B 中，MixER 训练损失低于单专家，适应效果因骨干而异（GEPS 最鲁棒）。
3. **紧密相关数据上退步**：在 LV/GO/SM 等高数据量、高度相关场景中，MixER 性能劣于单专家（表4），因为每个专家只能看到部分数据。
4. **上下文表征质量依赖层次结构**：SCCTS（含明显层次）上聚类效果好；Epilepsy2（紧邻+噪声）上路由模糊，分类准确率下降。
5. **计算开销大**：所有专家需同时装载在内存中，训练时间高于单专家。

## 7. 优点

- **方法创新性**：首次将上下文路由与 K‑means 聚类结合，解决了 MoE 在 DSR 中的门控失效问题。
- **设计简洁**：不依赖辅助损失（负载均衡），门控更新无需二阶导。
- **实验全面**：涵盖了从松散到紧密、从合成到真实、从重建到下游任务的多维度评估，对比了多个 SoTA 骨干。
- **开源**：代码已公开（https://anonymous.4open.science/r/MixER），促进可复现性。
- **可解释性**：门控热力图直观展示了专家‑家族的分配关系。

## 8. 不足与局限

- **紧密相关高数据场景下性能倒退**：当数据高度相似且总量大时，每个专家仅接触部分数据，导致欠拟合。作者承认这是“主要局限性”。
- **计算资源需求高**：所有专家常驻内存，M 较大时显存/内存开销线性增长。
- **消融实验不充分**：未系统分析 K‑means 初始化、噪声水平、专家数等超参数影响；未对比不同聚类方法（如 GMM）。
- **真实数据表现有限**：Epilepsy2 上路由精度低，分类准确率不如单专家；说明方法对噪声和类间接近程度敏感。
- **扩展性问题**：仅在 2D ODE 和最多 10 个家族上验证，未测试更高维系统或更多家族；未评估在连续学习或在线设置下的表现。
- **公平性讨论**：作者提及可能加剧计算资源不平等，但未提出具体缓解措施。

（完）
