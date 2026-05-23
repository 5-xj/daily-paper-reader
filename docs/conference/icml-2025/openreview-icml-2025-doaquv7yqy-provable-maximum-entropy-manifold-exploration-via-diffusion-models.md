---
title: Provable Maximum Entropy Manifold Exploration via Diffusion Models
title_zh: 通过扩散模型的可证明最大熵流形探索
authors: "Riccardo De Santi, Marin Vlastelica, Ya-Ping Hsieh, Zebang Shen, Niao He, Andreas Krause"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=DoaqUv7YQy"
tags: ["query:automatic-discovery"]
score: 7.0
evidence: 扩散模型通过熵最大化探索用于科学发现
tldr: 扩散模型的最大熵流形探索用于科学发现中的新颖性。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-doaquv7yqy/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 3291, \"height\": 1906}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-doaquv7yqy/fig-002.webp\", \"caption\": \"\", \"page\": 3, \"index\": 2, \"width\": 3132, \"height\": 1195}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-doaquv7yqy/fig-003.webp\", \"caption\": \"\", \"page\": 3, \"index\": 3, \"width\": 2877, \"height\": 1102}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-doaquv7yqy/fig-004.webp\", \"caption\": \"\", \"page\": 8, \"index\": 4, \"width\": 1621, \"height\": 418}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-doaquv7yqy/fig-005.webp\", \"caption\": \"\", \"page\": 8, \"index\": 5, \"width\": 2572, \"height\": 1556}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-doaquv7yqy/fig-006.webp\", \"caption\": \"\", \"page\": 20, \"index\": 6, \"width\": 737, \"height\": 461}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-doaquv7yqy/fig-007.webp\", \"caption\": \"\", \"page\": 20, \"index\": 7, \"width\": 6482, \"height\": 1665}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-doaquv7yqy/fig-008.webp\", \"caption\": \"\", \"page\": 21, \"index\": 8, \"width\": 737, \"height\": 461}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-doaquv7yqy/fig-009.webp\", \"caption\": \"\", \"page\": 21, \"index\": 9, \"width\": 737, \"height\": 461}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-doaquv7yqy/fig-010.webp\", \"caption\": \"\", \"page\": 22, \"index\": 10, \"width\": 737, \"height\": 461}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-doaquv7yqy/fig-011.webp\", \"caption\": \"\", \"page\": 22, \"index\": 11, \"width\": 737, \"height\": 461}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-doaquv7yqy/fig-012.webp\", \"caption\": \"\", \"page\": 23, \"index\": 12, \"width\": 737, \"height\": 461}]"
motivation: 科学发现需要生成真正新颖的设计，而非模仿现有分布。
method: 将探索视为在预训练扩散模型隐式定义的流形上的熵最大化问题。
result: 实现了可扩展的密度估计方法，用于探索。
conclusion: 为使用生成模型进行探索提供了可证明的理论框架。
---

## Abstract
Exploration is critical for solving real-world decision-making problems such as scientific discovery, where the objective is to generate truly novel designs rather than mimic existing data distributions.  In this work, we address the challenge of leveraging the representational power of generative models for exploration without relying on explicit uncertainty quantification. We introduce a novel framework that casts exploration as entropy maximization over the approximate data manifold implicitly defined by a pre-trained diffusion model. Then, we present a novel principle for exploration based on density estimation, a problem well-known to be challenging in practice. To overcome this issue and render this method truly scalable, we leverage a fundamental connection between the entropy of the density induced by a diffusion model and its score function. Building on this, we develop an algorithm based on mirror descent that solves the exploration problem as sequential fine-tuning of a pre-trained diffusion model. We prove its convergence to the optimal exploratory diffusion model under realistic assumptions by leveraging recent understanding of mirror flows. Finally, we empirically evaluate our approach on both synthetic and high-dimensional text-to-image diffusion, demonstrating promising results.

---

## 论文详细总结（自动生成）

### 1. 核心问题与整体含义（研究动机和背景）
- **问题**：科学发现等现实决策任务需要生成**真正新颖**的设计，而非仅仅模仿现有数据分布。然而，预训练的扩散模型虽然能捕捉复杂低维数据流形，但生成的样本通常集中在高密度区域，缺乏对低密度区域的探索。
- **背景**：扩散模型凭借其强大的表征能力，可隐式定义近似数据流形（通常远低于环境空间维度），但现有微调方法只能优化线性奖励函数，无法直接处理非线性的熵目标。
- **目标**：提出一种可证明的框架，将探索形式化为在预训练扩散模型隐式定义的**近似数据流形上的熵最大化**，并利用扩散模型自身的得分函数实现可扩展的自引导探索。

### 2. 方法论：核心思想、关键技术细节与算法流程
- **核心思想**：将探索问题建模为连续时间强化学习中的**最大熵流形探索**，即寻找一个策略（新扩散模型），使其生成的边际分布 \(p_T^\pi\) 在近似流形 \(\Omega_{\text{pre}}\) 上熵最大。
- **关键技术细节**：
  - **熵与得分的连接**：熵函数的一阶变分 \(\delta H(p_T)\) 的梯度等于负的得分函数：\(\nabla_x \delta H(p_T^\pi) = -\nabla_x \log p_T^\pi \approx -s^\pi(\cdot, T)\)。因此，无需显式估计密度，只需使用预训练模型的得分作为奖励梯度。
  - **探索原则**：通过 KL 正则化的线性微调问题近似熵最大化：\(\arg\max_\pi \langle \delta H(p_T^{\text{pre}}), p_T^\pi \rangle - \alpha D_{\text{KL}}(p_T^\pi, p_T^{\text{pre}})\)，其中 \(\delta H(p_T^{\text{pre}}) = -\log p_T^{\text{pre}}\)。
- **算法流程（S-MEME）**：
  - 输入：预训练扩散模型 \(\pi_{\text{pre}}\)、迭代次数 \(K\)、正则化系数序列 \(\{\alpha_k\}\)。
  - 对 \(k = 1\) 到 \(K\)：
    1. 设置奖励梯度 \(\nabla f_k = -s_{k-1}\)（\(s_{k-1}\) 是前一步模型的得分函数）。
    2. 使用一阶线性微调求解器（例如 Adjoint Matching）求解式 (9)，得到新策略 \(\pi_k\)。
    3. 更新当前模型为 \(\pi_k\)。
  - 输出最终策略 \(\pi_K\)。
- **理论保证**：
  - 在理想假设（精确得分和精确优化）下，一步微调即可达到最优熵。
  - 在现实假设（噪声和有偏近似）下，基于镜像流理论证明序列 \(\{p_T^{\pi_k}\}\) 几乎必然弱收敛到最优最大熵分布。

### 3. 实验设计：数据集 / 场景、基准、对比方法
- **场景一：示意性示例**
  - 数据：二维不平衡密度分布（一个高密度黄色区域和一个广低密度绿色区域），训练预训练模型 \(\pi_{\text{pre}}\)。
  - 实验：使用 S-MEME 迭代 4 步，评估熵值变化。
  - 基准：预训练模型自身（\(\pi_{\text{pre}}\)）。
  - 对比方法：无（仅比较不同迭代次数的 S-MEME）。
- **场景二：文本到图像流形探索**
  - 数据：LAION-5B 数据集预训练的 Stable Diffusion 1.5 模型，提示词为"A creative architecture."。
  - 实验：K=3 次 S-MEME 迭代，生成图像。
  - 基准：预训练模型 \(\pi_{\text{pre}}\)。
  - 对比方法：无（仅比较 S-MEME 不同迭代步 \(k=1,2,3\)）。
  - 评估指标：FID、CLIP 分数、高斯交叉熵（在 Inception-v3 特征空间）；附录中还报告了 Vendi 分数。

### 4. 资源与算力
- 文本到图像实验：在**单个 Nvidia H100 GPU** 上运行。
- 具体步骤：每次 S-MEME 迭代中，采样 4 条 DDPM 轨迹（长度 60），进行 10 次 Adam 更新，批大小 8，初始学习率 \(3\times 10^{-7}\)。总迭代数：\(K=3\)，每次内循环 20 次线性求解器迭代。
- 示意实验：每次迭代采样 20 条轨迹（长度 400），进行 2 次梯度步，批大小 2048，学习率 \(4\times 10^{-4}\)。
- 论文未明确报告总训练时长或详细算力消耗。

### 5. 实验数量与充分性
- **实验数量**：两组实验（示意 + 图像），图像实验仅使用单一提示词。附录提供了额外的提示词（如 "creative impressionist painting"、"innovative car design"）和 Vendi 分数结果。
- **充分性**：
  - 作为方法学论文，实验展示了熵提升和语义保持的基本能力，但**缺乏与现有多样性方法（如粒子引导、条件退火采样）或直接优化熵的基线比较**。
  - 未进行消融实验（如不同 \(\alpha\) 值、不同 K 的详细影响）。
  - 评估指标（FID、CLIP）能反映分布变化和语义一致性，但不能直接衡量流形探索的“新颖性”。
  - 总体实验规模较小，但理论贡献较强，实验作为补充验证是合理的，但不够全面。

### 6. 主要结论与发现
- S-MEME 能够**增加生成分布的熵**，使模型倾向于探索预训练模型概率较低的区域，同时保持语义忠实度（CLIP 分数几乎不变）。
- 理论上证明了在合理假设下，算法**几乎必然收敛到最优探索模型**。
- 在示意示例中，经过 4 次迭代后熵显著提升；在图像生成中，生成的建筑图像复杂度增加、风格更独特，FID 增大（与预训练分布距离变大），但 CLIP 分数保持稳定。

### 7. 优点
- **理论完备性**：提供了相对光滑性分析和镜像流收敛保证，首次将最大熵探索问题与扩散模型得分函数理论关联。
- **方法新颖性**：将非线性的熵优化转化为一系列线性微调问题，利用得分函数避免密度估计，实现高维可扩展。
- **实践简便**：不依赖显式不确定性量化，可直接利用现有扩散模型的得分网络。
- **可扩展性**：适用于高维连续空间（文本到图像），且能通过调节 \(\alpha\) 控制探索-有效性权衡。

### 8. 不足与局限
- **实验覆盖不足**：仅验证了图像领域，未涉及科学发现（如分子生成、材料设计）等更直接的激励场景。
- **缺乏对比基线**：未与现有多样性采样方法（如粒子引导、条件退火）或直接熵最大化方法比较，公平性不足。
- **评估指标局限性**：FID 和 CLIP 无法直接反映“流形探索”的极致新颖性；熵估计在高维空间仍依赖代理指标（特征空间交叉熵）。
- **计算成本**：S-MEME 需要多次迭代微调，每次内循环需采样大量轨迹并求解伴随 ODE，资源消耗较大。
- **假设限制**：理论分析依赖于支持兼容性、紧致性等条件，实际中预训练模型可能不完美满足这些假设。
- **未讨论失败案例**：当预训练模型本身流形表示存在偏差时，探索可能受限于错误流形。

（完）
