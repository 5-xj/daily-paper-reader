---
title: "DiMa: Understanding the Hardness of Online Matching Problems via Diffusion Models"
title_zh: DiMa：通过扩散模型理解在线匹配问题的难度
authors: "Boyu Zhang, Aocheng Shen, Bing Liu, Qiankun Zhang, Bin Yuan, Jing Wang, Shenghao Liu, Xianjun Deng"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=I9DSsCBwG0"
tags: ["query:ad"]
score: 4.0
evidence: 使用扩散模型理解在线匹配的难度，属于AI增强的组合优化理论
tldr: 该论文探索利用扩散模型来生成在线二分图匹配问题的困难实例，以提升对算法性能上界的理解。传统上，困难实例由理论计算机专家手工设计，而本文提出数据驱动的方法，通过扩散模型自动生成实例，从而获得更紧的硬性界限。实验表明，该方法在多个在线匹配模型上发现了新的上界结果，超越了现有理论发现。这项工作展示了生成模型在组合优化理论发现中的潜力，属于自动发现算法的一个实例。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-i9dsscbwg0/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1510, \"height\": 953, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-i9dsscbwg0/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 692, \"height\": 755, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-i9dsscbwg0/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1684, \"height\": 706, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-i9dsscbwg0/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 755, \"height\": 457, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-i9dsscbwg0/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 765, \"height\": 428, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-i9dsscbwg0/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 734, \"height\": 491, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-i9dsscbwg0/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 767, \"height\": 428, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-i9dsscbwg0/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 644, \"height\": 377, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-i9dsscbwg0/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1050, \"height\": 622, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-i9dsscbwg0/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1049, \"height\": 624, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-i9dsscbwg0/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1051, \"height\": 622, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-i9dsscbwg0/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1318, \"height\": 791, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-i9dsscbwg0/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1773, \"height\": 1542, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-i9dsscbwg0/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1778, \"height\": 1547, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-i9dsscbwg0/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1090, \"height\": 320, \"label\": \"Table\"}]"
motivation: 传统在线匹配问题的困难实例依赖人工设计，缺乏系统性和扩展性，难以发现更紧的理论界限。
method: 提出DiMa框架，利用扩散模型训练生成困难实例，通过优化实例特征来提升算法性能上界。
result: 在多种在线匹配模型上，DiMa自动发现了比人工设计更紧的硬性上界，展示了AI辅助理论发现的可行性。
conclusion: 扩散模型可有效辅助组合优化理论中的硬性实例发现，为自动理论探索开辟新途径。
---

## Abstract
We explore the potential of \emph{AI-enhanced combinatorial optimization theory}, taking online bipartite matching (OBM) as a case study.
In the theoretical study of OBM, the \emph{hardness} corresponds to a performance \emph{upper bound} of a specific online algorithm or any possible online algorithms.
Typically, these upper bounds derive from challenging instances meticulously designed by theoretical computer scientists.
Zhang et al. (ICML 2024) recently provide an example demonstrating how reinforcement learning techniques enhance the hardness result of a specific OBM model.
Their attempt is inspiring but preliminary.
It is unclear whether their methods can be applied to other OBM problems with similar breakthroughs.
This paper takes a further step by introducing DiMa, a unified and novel framework that aims at understanding the hardness of OBM problems based on denoising diffusion probabilistic models (DDPMs).
DiMa models the process of generating hard instances as denoising steps, and optimizes them by a novel reinforcement learning algorithm, named \emph{shortcut policy gradient} (SPG).
We first examine DiMa on the classic OBM problem by reproducing its known hardest input instance in literature.
Further, we apply DiMa to two well-known variants of OBM, for which the exact hardness remains an open problem, and we successfully improve their theoretical state-of-the-art upper bounds.

---

## 论文详细总结（自动生成）

# 中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：在线二分图匹配（OBM）问题的难度（hardness）通常表现为算法的竞争比（competitive ratio）上界。传统上，这些上界依赖于理论计算机科学家精心构造的困难实例，但手工构造费力且难以推广到更复杂场景。
- **研究动机**：探索AI增强的组合优化理论，利用数据驱动的方法自动生成困难实例，以发现更紧的理论上界。此前 Zhang et al. (ICML 2024) 用强化学习在特定OBM模型上取得了初步突破，但方法泛化性差、需人工干预、且只能处理小规模实例。
- **整体含义**：本文提出统一框架 DiMa，基于扩散模型（DDPM）生成困难实例，并在多个OBM问题上取得了优于现有理论的上界改进，展示了生成模型在理论计算机科学发现中的潜力。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：将生成困难实例视为一个去噪过程：预训练一个DDPM使其学会近似已知困难实例的分布，然后通过强化学习（RL）微调DDPM，使其生成的实例在给定算法上获得更低的竞争比（即更“难”）。微调过程中，提出了一种新颖的强化学习算法——Shortcut Policy Gradient (SPG)。
- **关键技术细节**：
  1. **实例表示**：将二部图 G = (L ∪ R, E) 表示为 N×N 的邻接矩阵 I（|L|=|R|=N）。训练时使用实数矩阵，生成后通过阈值 0.5 二值化。
  2. **DDPM预训练**：定义 q 为已知困难实例的分布（如 thick-z 图加上随机翻转）；训练 pθ 通过最小化预测噪声与真实噪声的 MSE 损失来逼近 q。
  3. **RL微调**：将反向去噪过程建模为 T 步 MDP，状态 s_t = (I_{T-t}, T-t)，动作 a_t = I_{T-t-1}，奖励 r(I0) = λ(1 - CR(I0))，CR 为竞争比。目标是最小化期望 CR。
  4. **Shortcut Policy Gradient (SPG)**：为克服 DDPO 在长轨迹上收敛慢的问题，SPG 在计算策略梯度时跳步采样，利用 DDIM 的隐式采样思想，只考虑子序列 [I_t, I_{t-k}, ..., I_0]。梯度公式为 S(θ) = E[∑_t r(I0) ∑_{m=1}^M ∇_θ log pθ(I_{t-mk}|I_{t-(m-1)k})]，其中 k 为跳跃步长（通常设为 T）。
- **算法流程**（Algorithm 1）：
  1. 预训练 DDPM 至收敛；
  2. 微调：每个 epoch 采样 N 条完整轨迹，计算每个实例的奖励，用 SPG 更新模型参数 θ。

## 3. 实验设计：使用了哪些数据集 / 场景，它的 benchmark 是什么，对比了哪些方法

- **数据集/场景**：
  - 经典（分数）在线二分匹配（Fractional OBM）：已知最困难实例为上三角图。使用 Water-filling 算法。
  - 随机到达在线匹配（OMRA）：已知上界 0.727（Karande et al., 2011）。使用 Ranking 算法。
  - 随机奖励在线匹配（OMSR）：已知上界 0.597（Zhang et al., 2024a）。使用 Balance 算法，且假设概率 p 为常数且 p→0。
- **Benchmark**：对于每个场景，已有文献中最优上界作为基准。DiMa 的目标是发现更紧的上界（即更小的竞争比）。
- **对比方法**：
  - 在 Fractional OBM 中，对比了 DDPO（Black et al., 2023）作为 RL 微调基线。
  - 在 OMRA 和 OMSR 中，与现有已知上界（0.727 和 0.597）对比。
  - 还有消融实验对比不同 k、N、γ 的效果。

## 4. 资源与算力

- 文中提到使用“24GB GPU”进行 SPG 推理测试（Table 1），但**未明确具体GPU型号、训练时长**。
- 预训练：Diffusion Transformer (DiT) 模型，3个 DiT block，patch size 4，embedding size 32。训练 epoch 1000，batch size 4。
- 微调：epoch 100，每 epoch 采样 N=100（或 90）条轨迹，k=100。对于 N=80 的图，单 epoch 约 45s（Table 1）。
- 总体算力需求不高，但论文未报告完整训练的时长。

## 5. 实验数量与充分性

- **主要实验**：
  - Fractional OBM：重现上三角图（图3）；比较 SPG vs DDPO 的奖励曲线（图4）；消融实验：k 值（图9）、N（图10）、γ（图11）、不同初始化分布（图12）。
  - OMRA：生成新实例（图6）并理论上证明上界 0.723（Theorem 5.1）；展示了预训练和微调过程实例演变（图13）。
  - OMSR：生成新实例（图8）并理论上证明上界 0.594（Theorem 5.2）；展示了预训练和微调实例演变（图14）。
- **充分性评价**：实验覆盖了经典问题和两个 open 问题，消融实验较为全面（k、N、γ、初始分布）。但**对比方法较少**（仅对比 DDPO 和现有理论值），未与 Zhang et al. 的 RL 方法进行直接实验对比（仅在 OMSR 上比较了数值结果）。此外，对于 OMRA 和 OMSR，只报告了一个代表性实例的定理证明，未提供多组实例的统计分布。总体而言，实验设计合理且能支撑主要结论，但可进一步补充更多对比和统计分析。

## 6. 论文的主要结论与发现

- DiMa 能够在经典 Fractional OBM 上成功收敛到已知最困难实例（上三角图），验证了方法的有效性。
- 在 OMRA 中，DiMa 发现了比 Karande et al. (2011) 更紧的上界：从 0.727 改进至 0.723。
- 在 OMSR 中，DiMa 发现了比 Zhang et al. (2024a) 更紧的上界：从 0.597（在 N=10 时实际为 0.599）改进至 0.594。
- SPG 在收敛速度和内存效率上显著优于 DDPO，且能处理更大规模实例（如 N=80）。

## 7. 优点

- **方法论创新**：首次将 DDPM+RL 框架用于生成组合优化理论中的困难实例，具有统一性和可扩展性。
- **技术贡献**：提出 SPG 算法，有效解决长轨迹下的 RL 收敛问题，并利用 DDIM 加速梯度计算，实现性能与效率的良好平衡。
- **理论贡献**：对两个开放问题给出了新的、更紧的理论上界，并给出了严谨的定理证明（附录 F），表明生成实例可被理论验证。
- **实用性**：相比已有 RL 方法，DiMa 能生成大规模实例（如 N=80），且训练过程基本端到端，减少了对专家经验的依赖。
- **消融实验充分**：深入分析了跳步大小、采样轨迹数、初始分布噪声等超参数的影响。

## 8. 不足与局限

- **实验对比不够全面**：仅在 Fractional OBM 中与 DDPO 对比，未与其他生成模型（如 GAN、VAE）或直接优化方法比较。在 OMRA 和 OMSR 中仅与已有理论值对比，未复现 Zhang et al. 的 RL 方法进行公平比较。
- **统计验证不足**：对于 OMRA 和 OMSR，只呈现了一个代表性实例的定理证明，未报告多次运行的均值和方差，也未展示生成实例的多样性。
- **可重复性限制**：未公开代码（虽然文中说 Supplementary Material 提供，但未实际链接），且算力资源描述模糊（GPU 型号未指定）。
- **假设限制**：OMSR 问题中假设 p→0，这是一个理论简化；实际 p 有限时方法是否有效未验证。
- **扩展性**：目前仅应用于 OBM 相关变体，是否能推广到其他在线组合优化问题（如在线背包、AdWords）尚待验证。
- **依赖已知困难实例**：预训练需要提供已知困难实例的分布，若完全未知域，初始分布设计可能影响结果。

（完）
