---
title: Combinatorial Reinforcement Learning with Preference Feedback
title_zh: 基于偏好反馈的组合强化学习
authors: "Joongkyu Lee, Min-hwan Oh"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=qib0e91UcC"
tags: ["query:rl-comb-opt"]
score: 7.0
evidence: 组合强化学习与偏好反馈用于推荐系统，处理组合动作空间
tldr: 该论文针对推荐系统中用户长期参与的场景，提出了一种组合强化学习（RL）框架，其中智能体每次推荐一组物品，用户提供偏好反馈（基于多项逻辑模型）。该方法解决了两个关键挑战：物品价值未知（传统MNL bandit仅单步）和确保乐观性同时保持组合动作空间的可处理性。通过设计新的算法，在理论保证下实现了高效学习。实验表明该方法在模拟和真实推荐场景中有效提升了长期用户参与度。这项工作将组合RL应用于推荐系统，为序列决策提供了新视角。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-qib0e91ucc/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1768, \"height\": 449, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-qib0e91ucc/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1775, \"height\": 455, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-qib0e91ucc/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1437, \"height\": 580, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-qib0e91ucc/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1554, \"height\": 1135, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-qib0e91ucc/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1016, \"height\": 222, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-qib0e91ucc/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1437, \"height\": 2307, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-qib0e91ucc/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1338, \"height\": 1505, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-qib0e91ucc/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1105, \"height\": 236, \"label\": \"Table\"}]"
motivation: 现有推荐系统多考虑单步反馈，无法建模长期用户参与，且组合动作空间带来优化挑战。
method: 提出组合强化学习框架，在MNL偏好模型下处理未知物品价值和组合动作选择，结合乐观原则设计高效算法。
result: 在模拟和真实推荐场景中，该方法有效提升长期用户参与度，并具有理论收敛保证。
conclusion: 组合RL可有效建模推荐中的序列决策，为长期用户参与优化提供了可行方案。
---

## Abstract
In this paper, we consider combinatorial reinforcement learning with preference feedback, where a learning agent sequentially offers an action—an assortment of multiple items—to a user, whose preference feedback follows a multinomial logistic (MNL) model. This framework allows us to model real-world scenarios, particularly those involving long-term user engagement, such as in recommender systems and online advertising. However, this framework faces two main challenges: (1) the unknown value of each item, unlike traditional MNL bandits that only address single-step preference feedback, and (2) the difficulty of ensuring optimism while maintaining tractable assortment selection in the combinatorial action space with unknown values. In this paper, we assume a contextual MNL preference model, where the mean utilities are linear, and the value of each item is approximated by a general function. We propose an algorithm, MNL-VQL, that addresses these challenges, making it both computationally and statistically efficient. As a special case, for linear MDPs (with the MNL preference feedback), we establish the first regret lower bound in this framework and show that MNL-VQL achieves near-optimal regret. To the best of our knowledge, this is the first work to provide statistical guarantees in combinatorial RL with preference feedback.

---

## 论文详细总结（自动生成）

# 基于偏好反馈的组合强化学习论文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：现实推荐系统、在线广告等场景中，智能体需要向用户**逐个展示一组物品（组合动作）**，用户提供**偏好反馈**（选择某个物品），且用户状态会随时间变化（长期影响）。传统方法（如MNL bandit）仅考虑单步即时奖励，忽视状态转移和长期用户参与度。现有组合RL工作在理论上存在空白。
- **核心问题**：
    1. 每个物品的**长期价值未知**（不同于MNL bandit假设已知奖励且外选项价值为零）。
    2. 在组合动作空间中如何**高效保证乐观性**（探索与利用平衡）且保持计算可行性。
- **整体含义**：首次在**组合RL + 偏好反馈**框架下给出统计学习保证，证明存在计算和样本效率均优的算法，并在线性MDP特例下达到**极小化最优遗憾**。

## 2. 论文提出的方法论

- **核心思想**：
    - 采用**上下文MNL偏好模型**（线性效用函数）建模用户选择概率。
    - 物品的长期Q值（Item-level Q-value）用**通用函数近似**（满足完备性和可实现性）进行估计，并引入**广义Eluder维度**刻画探索复杂度。
    - 算法**MNL-VQL**通过**交替使用乐观/悲观效用**构造乐观选择概率，将组合优化转化为线性规划（LP）求解，保证计算高效。

- **关键技术细节**：
    - **参数估计**：使用在线镜像下降（Online Mirror Descent）实时更新MNL模型参数θ，构建置信区间Cₖₕ。
    - **Q值回归**：使用**方差加权回归**（第3步）和**第二矩回归**（第4步）估计Q值及方差上界。
    - **乐观构造**：基于fₖₕ,₁（乐观值）、fₖₕ,₂（过度乐观值）、fₖₕ,₋₂（过度悲观值）和**乐观/悲观效用**（υ̃, υ̂），定义乐观选择概率P̃ₖₕ⁽ʲ⁾，确保探索充分且保持乐观性（Lemma D.15）。
    - **组合优化**：通过Charnes-Cooper变换将分数混合整数规划转化为线性规划（LP），多项式时间内求解（注：原问题递归形式见算法1行15-16及附录C）。
    - **遗憾分析**：利用**总方差定律**（Law of Total Variance）将MNL偏好模型的遗憾降低√H倍，获得紧界。

## 3. 实验设计

- **数据集/场景**：
    - **合成环境**：“在线购物预算”线性MDP，状态表示预算等级，选择高价值物品可能导致预算消费，最终状态影响回报。
    - **真实数据集**：**MovieLens 25M**，用用户观看电影数量定义状态，引入“垃圾物品”（导致用户离开系统），模拟长期用户疲劳。

- **基准方法**：
    - **Myopic**（改编自OFU-MNL+）：仅基于即时奖励选择组合，忽略长期价值。
    - **LSVI-UCB**（Jin et al., 2020）：将每个组合视为原子动作，需枚举所有组合。
    - **Optimal**：最优策略（理论参考）。

- **评估指标**：**每轮累积回报（Episodic Return）**，运行10次取平均值。

## 4. 资源与算力

- **文中未明确说明**所使用的GPU型号、数量或训练时长。仅在表G.1中报告了**每集平均运行时间**（CPU时间），显示MNL-VQL随物品数N增长仍保持近线性耗时（如N=40时0.620秒/集），而LSVI-UCB则急剧增长（N=40时453.641秒/集）。未提及任何GPU资源。

## 5. 实验数量与充分性

- **合成实验**：3种物品数（N=10,20,40），对应不同组合空间大小（637~760,098）。每组10次独立运行，报告均值±标准差。包含完整Optimal曲线。
- **真实实验**：3种物品数（N=50,100,200），各运行10000轮。同样10次重复。因LSVI-UCB在大N下无法完成，用虚线估计。
- **充分性**：覆盖多种规模、包含真实场景、与强基线对比、多次重复、结果清晰。消融实验（如不同方差估计策略）未单独做，但算法本身包含多个组件（乐观/悲观估计、方差加权等）整体验证有效。
- **公平性**：Myopic和LSVI-UCB均为已有代表性方法，对比合理。

## 6. 论文的主要结论与发现

- **MNL-VQL**在合成和真实场景中均**显著优于** Myopic 和 LSVI-UCB，且接近最优策略。
- Myopic策略因忽视长期价值而**收敛到次优解**，说明在具有状态转移的环境中考虑长期收益至关重要。
- LSVI-UCB因枚举所有组合，计算开销极大，且性能最差，验证了**组合优化的必要性**。
- 理论方面：首次给出组合RL+偏好反馈的**统计遗憾上界**（Õ(d√HK + √(d_ν HK) + d²H²/κ + ...)），在线性MDP特例下**匹配下界**（Ω(d√HK + d_lin√HK)），达到**极小化最优**。

## 7. 优点

- **理论创新**：第一次为组合RL与偏好反馈建立统计保证，且线性MDP下达到**极小化最优**，遗憾界紧。
- **算法高效**：通过LP转化避免了组合枚举（指数级），每步更新复杂度为O(Md³)，与物品数N多项式相关。
- **实验扎实**：同时包含**合成和真实数据**，验证算法在不同规模、不同场景下的有效性；对比基线涵盖短视和暴力枚举方法。
- **技术贡献**：提出**乐观/悲观效用交替策略**解决未知物品价值下的乐观性难题；应用**方差加权回归**和**总方差定律**获得紧界。

## 8. 不足与局限

- **实验覆盖有限**：未在更多真实推荐系统或更复杂状态空间上进行测试（例如包含用户画像、时间动态等）。消融实验不足（如各组件贡献未单独验证）。
- **假设限制**：需要MNL偏好模型的**线性效用**假设、函数类的**完备性与可实现性**（包括二阶矩），以及常数κ的下界。在非线性偏好或高维特征下可能不成立。
- **计算依赖**：需访问**一致的bonus oracle**（附录B通过在线子采样实现），其复杂度与广义Eluder维度相关，可能在某些函数类下仍较大。
- **偏差风险**：合成环境手动设计可能偏向算法优势；MovieLens实验中“垃圾物品”比例固定，未分析敏感性。
- **实际部署**：未考虑用户反馈延迟、非平稳用户兴趣、冷启动等问题。

（完）
