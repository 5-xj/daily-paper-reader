---
title: Adaptive Gradient Masking for Balancing ID and MLLM-based Representations in Recommendation
title_zh: 自适应梯度掩码用于平衡ID和基于MLLM的推荐表示
authors: "Yidong Wu, Siyuan Chen, Binrui Wu, Fan Li, Jiechao Gao"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=Ykg7dr6c1Y"
tags: ["query:llm-sr"]
score: 9.0
evidence: 基于MLLM的推荐表示
tldr: 大规模推荐系统中ID表示与多模态大语言模型表示的收敛不一致限制了性能。本文提出自适应梯度掩码方法，通过两阶段框架先学习MLLM表示再联合优化，有效平衡两种表示。实验表明该方法在多个数据集上提升了推荐效果。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: ID和MLLM表示收敛速度不同导致联合训练性能受限。
method: 提出两阶段框架：第一阶段微调MLLM生成统一表示，第二阶段通过自适应梯度掩码平衡ID和MLLM梯度。
result: 在多个推荐数据集上取得了优于现有方法的性能。
conclusion: 自适应梯度掩码能有效融合ID和MLLM表示，提升推荐系统泛化能力。
---

## Abstract
In large-scale recommendation systems, multimodal (MM) content is increasingly introduced to enhance the generalization of ID features.
The rise of Multimodal Large Language Models (MLLMs) enables the construction of unified user and item representations.
However, the semantic distribution gap between MM and ID representations leads to \textit{convergence inconsistency} during joint training: the ID branch converges quickly, while the MM branch requires more epochs, thus limiting overall performance.
To address this, we propose a two-stage framework including MM representation learning and joint training optimization.
First, we fine-tune the MLLM to generate unified user and item representations, and introduce collaborative signals by post-aligning user ID representations to alleviate semantic differences.
Then, we propose an Adaptive Gradient Masking (AGM) training strategy to dynamically regulate parameter updates between ID and MLLM branches.
AGM estimates the contribution of each representation with mutual information, and applies non-uniform gradient masking at the sub-network level to balance optimization.
We provide theoretical analysis of AGM's effectiveness and further introduce an unbiased variant, AGM*, to enhance training stability.
Experiments on offline and online A/B tests validate the effectiveness of our approach in mitigating convergence inconsistency and improving performance.

---

## 论文详细总结（自动生成）

# 论文总结：Adaptive Gradient Masking for Balancing ID and MLLM-based Representations in Recommendation

## 1. 核心问题与整体含义（研究动机和背景）

- **研究背景**：大规模推荐系统传统上依赖ID特征（如用户ID、物品ID）来建模用户-物品交互，这些特征具有强记忆能力但泛化性差，尤其在长尾物品、冷启动场景下表现不足。多模态内容（如图像、文本）的引入可以丰富语义表示，而多模态大语言模型（MLLM）能够生成统一的高层次语义嵌入，有望提升推荐性能。
- **核心问题**：ID表示与MLLM表示在联合训练时存在**收敛不一致**问题：ID分支收敛快，而多模态分支需要更多轮数才能收敛。这源于两者之间的语义分布差距（ID编码共现模式，MLLM编码高层语义）以及优化不平衡（ID参数可训练，MLLM参数通常冻结）。导致ID分支主导训练，梯度偏向ID，多模态分支被抑制，最终限制整体性能。
- **整体意义**：本文旨在解决ID与MLLM表示联合训练时的收敛不一致问题，提出一种新的训练策略来平衡两类表示的优化，从而提升推荐系统的泛化能力和性能。

## 2. 提出的方法论：核心思想、关键技术细节

### 2.1 整体框架
- 两阶段框架：
  1. **多模态表示学习阶段**：微调MLLM生成统一的用户和物品多模态表示，并通过后对齐（post-alignment）引入协同信号，缓解ID与MM表示的语义差异。
  2. **联合训练优化阶段**：联合训练ID和MLLM表示，使用自适应梯度掩码（AGM）动态调节两个分支的参数更新。

### 2.2 多模态表示学习
- **物品嵌入**：使用特定提示模板（"Integrate text and visual information into an embedding representation. Textual: [Text], Visual: [Image/video]."），微调MLLM并引入特殊token `[Item_cls]`，其隐藏状态作为物品的多模态嵌入。微调时采用三个对齐任务：
  - 文本-图像对齐：掩码20%文本令牌，重建原始文本，迫使模型利用视觉信息推断文本。
  - 元数据处理：从结构化元数据预测详细的物品描述。
  - 用户行为理解：基于用户历史交互预测下一交互物品。
- **用户嵌入**：提出用户嵌入生成器（UEG），聚合用户历史物品的多模态表示，并通过对齐损失 \( L_{\text{align}} = \|e_u^{\text{id}} - e_u^{\text{mm}}\|_2^2 \) 使其与预训练ID表示一致（冻结ID参数）。

### 2.3 自适应梯度掩码（AGM）
- **动机**：ID分支收敛快，主导预测和梯度，导致多模态分支欠优化。
- **关键步骤**：
  1. **贡献度计算**：定义贡献分数 \( s = y \cdot p + (1-y)(1-p) \)，其中 \( p = \sigma(W \cdot g(e_u, e_v; \theta) + b/2) \)。对每批次计算相对贡献比 \( \rho_{\text{id}} = \sum s_{\text{id}} / \sum s_{\text{mm}} \)，\( \rho_{\text{mm}} = 1/\rho_{\text{id}} \)，并用指数移动平均平滑。
  2. **更新比例确定**：通过softmax归一化得到 \( \gamma_{\text{id}} = \exp(\rho_{\text{mm}}) / (\exp(\rho_{\text{id}}) + \exp(\rho_{\text{mm}})) \)，\( \gamma_{\text{mm}} = 1 - \gamma_{\text{id}} \)。高γ表示该分支冻结较少参数，更新较多。
  3. **Fisher信息矩阵**：估计参数重要性 \( \pi_j = F_j(\theta) / \sum F_j(\theta) \)，其中 \( F_j(\theta) = \frac{1}{|B|} \sum_i (\partial \log p(\hat{y}_i|x_i;\theta) / \partial \theta_j)^2 \)。
  4. **非均匀自适应采样**：根据参数重要性分布 \( \pi \) 和更新比例 \( \gamma \)，生成二进制掩码 \( m(t) \in \{0,1\}^{|\theta|} \)，1表示更新，0表示冻结。梯度更新：\( \theta(t+1) = \theta(t) - \eta \cdot \nabla L(\theta(t)) \odot m(t) \)。

### 2.4 无偏变体 AGM*
- 为解决原始AGM的梯度偏差（0/1掩码导致有偏梯度），引入重要性权重：\( \hat{m}_j(t) = 1/(\pi_j + c) \)（若 \( m_j(t) = 1 \)），否则0。更新规则：\( \theta(t+1) = \theta(t) - \eta \nabla L(\theta(t)) \odot \hat{m}(t) \)。理论分析证明AGM*消除了分母中的 \( (1-\delta^2) \) 项，实现更快的收敛。

## 3. 实验设计

### 3.1 数据集与场景
- **离线数据集**：四个公开数据集：
  - **Microlens**：用户-视频交互，包含视频介绍和封面图像。
  - **Amazon Baby、Sports、Electronics**：用户-物品交互，包含产品描述和图像。所有数据经过5-core预处理。
- **工业场景**：大型短视频平台（服务数亿用户），进行14天在线A/B测试。

### 3.2 Benchmark与对比方法
- **对比方法**：
  - 传统多模态推荐方法：VBPR、FREEDOM、BM3、AlignRec、MGCN、LGMRec、GUME、MM-Rec。
  - 不同骨干网络（MLP、DCN、Fibinet）下的消融基线：仅ID、仅MM、ID+MM。
- **指标**：AUC（越高越好）、LogLoss（越低越好）。

### 3.3 实验设置
- **MLLM微调**：使用Qwen2vl-2b，4块A100 GPU，batch size 128，训练5轮。
- **AGM训练**：TensorFlow 2.15.0，单块RTX 4090 GPU，Adam优化器，batch size搜索{256,512,1024,2048}，学习率搜索{1e-3,1e-4,1e-5}，早停法耐心值5。

## 4. 资源与算力
- **MLLM微调**：4×A100 GPU，batch size 128，5个epoch。
- **AGM离线实验**：单块RTX 4090 GPU。
- 未明确给出微调总时长或AGM训练具体时间，但可推断使用了中等规模算力。

## 5. 实验数量与充分性
- **核心实验**：在4个数据集上对比8种基线方法，报告AUC和LogLoss。
- **骨干网络泛化实验**：在MLP、DCN、Fibinet三种架构上测试AGM*与ID、MM、ID+MM的对比，共12组结果。
- **消融实验**：对AGM和AGM*各去除随机掩码、主干掩码、融合掩码进行对比，共8组结果。
- **工业A/B测试**：报告主观看视频时长、应用使用时长、长/短视频观看时间变化。
- **额外分析**：零样本推荐实验（Recall@20/50）、收敛曲线可视化、理论收敛性证明。
- **充分性评估**：实验覆盖离线标准数据集和工业真实场景，与多个SOTA方法对比，消融实验验证各组件贡献，理论证明支持方法有效性。实验设计较为充分、客观且公平。

## 6. 主要结论与发现
1. AGM/AGM*显著缓解ID与MLLM表示的收敛不一致，提升推荐性能，在4个离线数据集上AUC和LogLoss均优于所有基线。
2. 无偏变体AGM*在多数设置下优于有偏AGM，尤其在大型数据集上，验证了重要性加权策略的有效性。
3. 仅使用多模态特征效果最差，ID+MM简单组合效果有限，AGM的动态梯度调节至关重要。
4. 工业A/B测试中，AGM*使主观看视频时长+0.175%，应用使用时长+0.124%，长视频观看+0.678%，短视频观看-0.235%（可能因推荐内容改变），整体正向提升。
5. 去除主干掩码导致最大性能下降，说明早期梯度调节对平衡特征提取至关重要。

## 7. 优点
- **问题新颖且实际**：识别了推荐系统中ID与MLLM表示联合训练的收敛不一致问题，并给出系统性解决方案。
- **方法创新**：首次将自适应梯度掩码（基于Fisher信息矩阵和贡献比）用于多模态推荐，平衡不同分支优化。
- **理论支撑**：为AGM/AGM*提供了收敛性分析，证明无偏变体能消除偏差项，加速收敛。
- **实验全面**：涵盖离线多种数据集、多种骨干网络、工业级A/B测试，消融实验清晰。
- **工业落地**：已在腾讯级短视频平台全量部署，服务数亿用户，证明实用价值。

## 8. 不足与局限
- **依赖MLLM质量**：方法性能受MLLM微调质量影响，对多模态数据质量敏感。
- **实验覆盖有限**：仅使用四个公开数据集和一个工业平台，未在更多领域（如新闻、音乐）验证。
- **计算开销**：AGM需计算Fisher信息矩阵和每步重要性采样，可能增加训练时间复杂度，文中未详细对比训练速度。
- **未讨论偏差与公平性**：虽提及多样性推荐，但未评估潜在偏见（如对某些用户群体或物品类型的系统性偏好）。
- **理论假设**：收敛性分析基于L-smooth、有界方差等假设，实际场景可能不完全符合。

（完）
