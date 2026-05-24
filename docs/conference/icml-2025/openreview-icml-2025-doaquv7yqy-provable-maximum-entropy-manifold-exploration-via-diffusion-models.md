---
title: Provable Maximum Entropy Manifold Exploration via Diffusion Models
title_zh: 可证明的最大熵流形探索：基于扩散模型
authors: "Riccardo De Santi, Marin Vlastelica, Ya-Ping Hsieh, Zebang Shen, Niao He, Andreas Krause"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=DoaqUv7YQy"
tags: ["query:automatic-discovery"]
score: 7.0
evidence: 通过流形上熵最大化的科学发现探索
tldr: 使用扩散模型进行熵最大化探索，为科学发现生成新颖设计。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-doaquv7yqy/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 3291, \"height\": 1906}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-doaquv7yqy/fig-002.webp\", \"caption\": \"\", \"page\": 3, \"index\": 2, \"width\": 3132, \"height\": 1195}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-doaquv7yqy/fig-003.webp\", \"caption\": \"\", \"page\": 3, \"index\": 3, \"width\": 2877, \"height\": 1102}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-doaquv7yqy/fig-004.webp\", \"caption\": \"\", \"page\": 8, \"index\": 4, \"width\": 1621, \"height\": 418}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-doaquv7yqy/fig-005.webp\", \"caption\": \"\", \"page\": 8, \"index\": 5, \"width\": 2572, \"height\": 1556}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-doaquv7yqy/fig-006.webp\", \"caption\": \"\", \"page\": 20, \"index\": 6, \"width\": 737, \"height\": 461}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-doaquv7yqy/fig-007.webp\", \"caption\": \"\", \"page\": 20, \"index\": 7, \"width\": 6482, \"height\": 1665}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-doaquv7yqy/fig-008.webp\", \"caption\": \"\", \"page\": 21, \"index\": 8, \"width\": 737, \"height\": 461}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-doaquv7yqy/fig-009.webp\", \"caption\": \"\", \"page\": 21, \"index\": 9, \"width\": 737, \"height\": 461}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-doaquv7yqy/fig-010.webp\", \"caption\": \"\", \"page\": 22, \"index\": 10, \"width\": 737, \"height\": 461}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-doaquv7yqy/fig-011.webp\", \"caption\": \"\", \"page\": 22, \"index\": 11, \"width\": 737, \"height\": 461}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-doaquv7yqy/fig-012.webp\", \"caption\": \"\", \"page\": 23, \"index\": 12, \"width\": 737, \"height\": 461}]"
motivation: 科学发现需要生成真正新颖的设计，而非模仿现有数据分布。
method: 将探索建模为在预训练扩散模型隐含流形上的熵最大化问题，提出新颖的探索框架。
result: 实现了可扩展的探索方法，无需显式不确定性量化。
conclusion: 该框架为科学发现中的探索提供了新原理。
---

## Abstract
Exploration is critical for solving real-world decision-making problems such as scientific discovery, where the objective is to generate truly novel designs rather than mimic existing data distributions.  In this work, we address the challenge of leveraging the representational power of generative models for exploration without relying on explicit uncertainty quantification. We introduce a novel framework that casts exploration as entropy maximization over the approximate data manifold implicitly defined by a pre-trained diffusion model. Then, we present a novel principle for exploration based on density estimation, a problem well-known to be challenging in practice. To overcome this issue and render this method truly scalable, we leverage a fundamental connection between the entropy of the density induced by a diffusion model and its score function. Building on this, we develop an algorithm based on mirror descent that solves the exploration problem as sequential fine-tuning of a pre-trained diffusion model. We prove its convergence to the optimal exploratory diffusion model under realistic assumptions by leveraging recent understanding of mirror flows. Finally, we empirically evaluate our approach on both synthetic and high-dimensional text-to-image diffusion, demonstrating promising results.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

科学发现等决策问题要求生成**真正新颖的设计**，而非简单模仿现有数据分布。已有的生成模型（如扩散模型）擅长学习数据流形并生成逼真样本，但缺乏**主动探索流形上低密度区域**的能力。传统探索方法依赖不确定性量化，在高维空间难以扩展。本文旨在回答：**如何利用预训练扩散模型的表现力来引导其自身进行流形探索？** 核心思路是**将探索建模为在预训练模型隐含流形上的熵最大化**，从而绕过显式不确定性估计。

## 2. 方法论

### 核心思想
- **最大熵流形探索问题**：在预训练扩散模型隐含的近似数据流形 \(\Omega_{\text{pre}}\) 上，寻找使终端分布熵最大的新扩散模型。
- **探索原则**：正则化熵一阶变分最大化，即最大化 \(\langle \delta H(p_{\text{pre}}^T), p_\pi^T \rangle - \alpha D_{\text{KL}}(p_\pi^T \parallel p_{\text{pre}}^T)\)，其中 \(\delta H\) 是熵的一阶变分，等于 \(-\log p_{\text{pre}}^T\)。
- **关键技巧**：利用扩散模型得分函数与熵梯度的关系：\(\nabla_x \delta H(p_\pi^T) = -\nabla_x \log p_\pi^T \approx -s_\pi(x,T)\)。从而无需显式密度估计，直接使用预训练得分网络作为奖励梯度。

### 算法（S-MEME）
- **多步镜像下降**：每一轮迭代 \(k\)，以当前模型 \(\pi_{k-1}\) 为参考，线性化熵泛函（即使用 \(-\log p_{k-1}^T\) 作为奖励），并加入KL正则化，通过一阶随机最优控制求解器（如 Adjoint Matching）微调，得到 \(\pi_k\)。
- **流程**：初始化 \(\pi_0 = \pi_{\text{pre}}\)；对 \(k=1,\dots,K\)：设置 \(\nabla_x f_k = -s_{k-1}\)；调用线性微调求解器得到 \(\pi_k\)；输出 \(\pi_K\)。

### 理论保证
- **一步收敛（理想假设下）**：当精确得分估计且精确优化时，单步微调即可达到最优探索模型。
- **一般收敛**：在噪声与偏差假设下，S-MEME 的迭代几乎必然收敛到最大熵分布（利用镜像流理论与渐近伪轨迹）。

## 3. 实验设计

### 场景与数据集
| 场景 | 描述 | 数据来源 |
|------|------|----------|
| 合成数据（2D） | 人为构造不平衡密度：高密度区域（黄色）+ 宽低密度区域（绿色） | 从该分布均匀采样 10K 样本预训练 |
| 文本到图像 | 使用 Stable Diffusion 1.5（LAION-5B 预训练）在提示“A creative architecture.”上微调 | 预训练模型本身，微调仅用梯度 |

### Benchmark 与对比方法
- 合成数据：对比预训练模型与 S-MEME 各迭代（K=1~4）的熵值。
- 文本到图像：对比预训练模型（\(\pi_{\text{pre}}\)）与 S-MEME 第1、2、3步的生成图像，使用 FID、CLIP 分数、交叉熵（特征空间）作为代理指标。
- 未与其他探索方法（如随机搜索、粒子引导、其他多样性采样）进行直接对比。

## 4. 资源与算力
- 合成数据：未明确说明 GPU 型号与数量，仅提及微调共 6000 梯度步。
- 文本到图像：使用 **单张 Nvidia H100 GPU**，K=3 轮迭代，每轮 20 次内循环，每次内循环 10 Adam 步，批大小 8。总训练时长未给出。

## 5. 实验数量与充分性
- **实验数量**：
  - 合成数据：4 轮迭代，仅展示一次运行结果，无多次重复或误差棒。
  - 文本到图像：K=3 轮，分析了 FID/CLIP/交叉熵；附加了 Vendi 分数评估（3 种子）；还展示了“创意印象派绘画”“创意家具”“创新汽车设计”等多个提示下的可视化结果（附录 G）。
- **充分性与客观性**：
  - 优点：在两种不同维度（2D 与高维图像）上验证了方法可行性，可视化直观，代理指标趋势合理。
  - 不足：
    - 缺乏与基线方法的公平对比（如无随机搜索、无其他多样性增强方法）。
    - 仅使用一个预训练模型（SD 1.5），未在多种数据集或任务（如分子生成）上验证。
    - 熵的估计在合成数据上通过 ODE 路径计算，但文本到图像只能使用代理指标，无法直接验证熵是否真正最大化。
    - 实验未研究超参数（如正则化系数 \(\alpha\)、步长 \(\gamma_k\)）的敏感性。
    - 未提供多次运行的统计显著性检验。

## 6. 主要结论与发现
- **结论**：提出的 S-MEME 算法能够有效引导预训练扩散模型探索其隐含流形上的低密度区域，增加生成样本的多样性，同时保持语义一致性（通过 CLIP 分数保持）。
- **理论贡献**：首次为最大熵流形探索问题提供了收敛性证明，将探索问题与镜像下降、镜像流理论建立联系。
- **实践验证**：合成实验显示熵随迭代显著提升；文本到图像实验显示 FID 增大、CLIP 稳定，表明分布向低密度区域偏移。

## 7. 优点
- **新颖的问题形式化**：将探索定义为流形上的熵最大化，具有明确数学目标。
- **无需密度估计**：利用得分函数代替密度梯度，解决了高维熵估计的难题，使方法可扩展。
- **理论扎实**：给出了一步最优性证明和一般收敛性分析，建立在相对光滑/凸性和镜像流理论之上。
- **算法简洁**：基于现有镜像下降和随机最优控制框架，易于实现。
- **控制探索程度**：通过正则化系数 \(\alpha\) 可调节探索与保真度之间的权衡。

## 8. 不足与局限
- **实验覆盖有限**：仅两个任务（2D 合成 + 文本到图像），未在真实科学发现任务（如分子生成、材料设计）上验证，限制了实际应用论证。
- **缺乏充分基准对比**：未与现有探索方法（如随机采样、粒子引导、谱多样性、直接最大化熵的替代方法）进行定量比较。
- **代理指标风险**：文本到图像的 FID 和交叉熵仅反映分布距离，不直接证明熵最大化；Vendi 分数依赖核选择，结果可能不稳定。
- **假设较强**：
  - 理论分析要求精确得分与精确优化，实际中近似误差与噪声可能影响性能。
  - 需要流形紧致性（支持假设），对某些非紧流形可能不适用。
- **计算成本**：每次微调需要多步采样和逆时ODE求解，对于大模型（如 SD 1.5）可能昂贵；实验仅用单张 H100，未系统评估扩展性。
- **超参数未深入消融**：未系统研究 \(\alpha\)、迭代次数 \(K\)、内循环步数等对结果的影响。

（完）
