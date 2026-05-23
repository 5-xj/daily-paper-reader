---
title: "MAGELLAN: Metacognitive predictions of learning progress guide autotelic LLM agents in large goal spaces"
title_zh: MAGELLAN：元认知学习进度预测引导自驱大模型智能体
authors: "Loris Gaven, Thomas Carta, Clément ROMAC, Cédric Colas, sylvain lamprier, Olivier Sigaud, Pierre-Yves Oudeyer"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=hRMAo5N66M"
tags: ["query:automatic-discovery"]
score: 5.0
evidence: 大模型智能体结合元认知预测进行开放学习
tldr: 元认知框架让大模型智能体在大目标空间中预测学习进度
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 1237, \"height\": 743}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-002.webp\", \"caption\": \"\", \"page\": 6, \"index\": 2, \"width\": 1108, \"height\": 760}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-003.webp\", \"caption\": \"\", \"page\": 7, \"index\": 3, \"width\": 800, \"height\": 600}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-004.webp\", \"caption\": \"\", \"page\": 7, \"index\": 4, \"width\": 1554, \"height\": 1197}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-005.webp\", \"caption\": \"\", \"page\": 7, \"index\": 5, \"width\": 2400, \"height\": 1600}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-006.webp\", \"caption\": \"\", \"page\": 8, \"index\": 6, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-007.webp\", \"caption\": \"\", \"page\": 8, \"index\": 7, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-008.webp\", \"caption\": \"\", \"page\": 9, \"index\": 8, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-009.webp\", \"caption\": \"\", \"page\": 9, \"index\": 9, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-010.webp\", \"caption\": \"\", \"page\": 17, \"index\": 10, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-011.webp\", \"caption\": \"\", \"page\": 17, \"index\": 11, \"width\": 1189, \"height\": 790}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-012.webp\", \"caption\": \"\", \"page\": 22, \"index\": 12, \"width\": 885, \"height\": 801}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-013.webp\", \"caption\": \"\", \"page\": 22, \"index\": 13, \"width\": 882, \"height\": 801}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-014.webp\", \"caption\": \"\", \"page\": 22, \"index\": 14, \"width\": 882, \"height\": 801}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-015.webp\", \"caption\": \"\", \"page\": 22, \"index\": 15, \"width\": 882, \"height\": 801}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-016.webp\", \"caption\": \"\", \"page\": 23, \"index\": 16, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-017.webp\", \"caption\": \"\", \"page\": 23, \"index\": 17, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-018.webp\", \"caption\": \"\", \"page\": 23, \"index\": 18, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-019.webp\", \"caption\": \"\", \"page\": 23, \"index\": 19, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-020.webp\", \"caption\": \"\", \"page\": 24, \"index\": 20, \"width\": 1589, \"height\": 1277}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-021.webp\", \"caption\": \"\", \"page\": 24, \"index\": 21, \"width\": 1589, \"height\": 1277}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-022.webp\", \"caption\": \"\", \"page\": 25, \"index\": 22, \"width\": 1589, \"height\": 1277}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-023.webp\", \"caption\": \"\", \"page\": 25, \"index\": 23, \"width\": 2354, \"height\": 1197}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-024.webp\", \"caption\": \"\", \"page\": 26, \"index\": 24, \"width\": 2354, \"height\": 710}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-025.webp\", \"caption\": \"\", \"page\": 26, \"index\": 25, \"width\": 2354, \"height\": 1197}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-026.webp\", \"caption\": \"\", \"page\": 27, \"index\": 26, \"width\": 1554, \"height\": 1207}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-027.webp\", \"caption\": \"\", \"page\": 28, \"index\": 27, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-028.webp\", \"caption\": \"\", \"page\": 28, \"index\": 28, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-029.webp\", \"caption\": \"\", \"page\": 28, \"index\": 29, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-030.webp\", \"caption\": \"\", \"page\": 29, \"index\": 30, \"width\": 1590, \"height\": 1270}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-031.webp\", \"caption\": \"\", \"page\": 29, \"index\": 31, \"width\": 1590, \"height\": 1270}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-032.webp\", \"caption\": \"\", \"page\": 29, \"index\": 32, \"width\": 1590, \"height\": 1270}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-033.webp\", \"caption\": \"\", \"page\": 31, \"index\": 33, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-034.webp\", \"caption\": \"\", \"page\": 31, \"index\": 34, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-035.webp\", \"caption\": \"\", \"page\": 31, \"index\": 35, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-036.webp\", \"caption\": \"\", \"page\": 31, \"index\": 36, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-037.webp\", \"caption\": \"\", \"page\": 32, \"index\": 37, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-038.webp\", \"caption\": \"\", \"page\": 32, \"index\": 38, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-039.webp\", \"caption\": \"\", \"page\": 34, \"index\": 39, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-040.webp\", \"caption\": \"\", \"page\": 34, \"index\": 40, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-041.webp\", \"caption\": \"\", \"page\": 34, \"index\": 41, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-042.webp\", \"caption\": \"\", \"page\": 34, \"index\": 42, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-043.webp\", \"caption\": \"\", \"page\": 34, \"index\": 43, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-044.webp\", \"caption\": \"\", \"page\": 34, \"index\": 44, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-045.webp\", \"caption\": \"\", \"page\": 34, \"index\": 45, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-046.webp\", \"caption\": \"\", \"page\": 34, \"index\": 46, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-047.webp\", \"caption\": \"\", \"page\": 34, \"index\": 47, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-048.webp\", \"caption\": \"\", \"page\": 34, \"index\": 48, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-049.webp\", \"caption\": \"\", \"page\": 34, \"index\": 49, \"width\": 1800, \"height\": 800}]"
motivation: 开放学习智能体需有效优先级目标以最大化学习进度。
method: 利用语义关系在线预测能力和学习进步。
result: 实现了高效的学习进度估计和目标动态调整。
conclusion: 元认知方法提升了智能体在复杂环境中的探索效率。
---

## Abstract
Open-ended learning agents must efficiently prioritize goals in vast possibility spaces, focusing on those that maximize learning progress (LP). When such autotelic exploration is achieved by LLM agents trained with online RL in high-dimensional and evolving goal spaces, a key challenge for LP prediction is modeling one’s own competence, a form of metacognitive monitoring. Traditional approaches either require extensive sampling or rely on brittle expert-defined goal groupings. We introduce MAGELLAN, a metacognitive framework that lets LLM agents learn to predict their competence and learning progress online. By capturing semantic relationships between goals, MAGELLAN enables sample-efficient LP estimation and dynamic adaptation to evolving goal spaces through generalization. In an interactive learning environment, we show that MAGELLAN improves LP prediction efficiency and goal prioritization, being the only method allowing the agent to fully master a large and evolving goal space. These results demonstrate how augmenting LLM agents with a metacognitive ability for LP predictions can effectively scale curriculum learning to open-ended goal spaces.

---

## 论文详细总结（自动生成）

根据提供的论文 PDF 提取文本，以下是基于 MAGELLAN 论文的详细中文总结。

---

## 1. 论文的核心问题与整体含义（研究动机和背景）

**研究动机**：  
开放学习（open-ended learning）智能体需要在高维、演化的大规模目标空间中高效地选择目标，优先追求学习进度（Learning Progress, LP）最大的目标。传统方法通过定期评估（Eval-ALP）或在线更新（Online-ALP）来估计能力，但前者计算成本高，后者无法捕捉目标间的能力迁移。部分方法依赖专家定义的目标分组（EK-Online-ALP），但分组脆弱且无法适应语义相似度的动态变化。

**核心问题**：  
如何利用大语言模型（LLM）智能体的语义理解能力，实现样本高效的 LP 估计，并自动适应演化目标空间，从而让智能体在大型自然语言目标空间中自主构建最优学习课程。

**整体含义**：  
MAGELLAN 是一种元认知框架，让 LLM 智能体在线学习预测自身能力和 LP，通过语义关系在目标间泛化，从而高效导航目标空间。这是首个无需专家分组即可让 LLM 智能体在大型演化目标空间中达到 90%+ 成功率的 LP 方法。

---

## 2. 论文提出的方法论

### 核心思想
MAGELLAN 将 LLM 作为能力估计器的骨干网络，通过训练一个基于 LLM 隐藏表征的 MLP（多层感知机）输出目标 g 的成功概率 C_θ(g)，并利用近期经验（目标-结果对）对估计器进行更新。通过比较不同时间点的能力估计（绝对差值）来近似绝对学习进度（Absolute Learning Progress, ALP）。

### 关键技术与流程
- **能力估计器 C_θ(g)**：  
  对每个目标 g（状态 s₀ 和自然语言指令 i），将 (s₀, i) 转换为文本提示（prompt），输入 LLM。取最后一个 token 的隐藏表示，通过一个 1 层 128 单元的 MLP（Tanh 激活）输出成功概率（0-1）。LLM 本身也通过 LoRA 适配器进行微调，以动态调整语义空间。

- **训练方式**：  
  维护大小为 M 的近期经验缓冲区 D_t（最近 M 个 episode 的目标与结果对），以二元交叉熵（BCE）损失训练能力估计器。每 32 次策略更新更新一次能力估计器，缓冲区采样时按时间顺序加权（越新的数据权重越大）。同时维护大小为 N 的历史权重缓冲区 B_t，用于计算 ALP。

- **学习进度（ALP）估计**：  
  ALP_π_t(g) = |C_θ_t(g) - C_θ_{t-N}(g)|，即当前能力估计与 N 步前能力估计的绝对值差（N = 100 次更新 × 32 更新频率 = 3200 个 episode）。该信号既反映进步也反映遗忘。

- **目标选择**：  
  采用多臂老虎机方案，按每个目标的 ALP 成比例采样，初始 ϵ-greedy 的 ϵ 从 1 退火至 0.2。

- **架构选择**：  
  训练两个独立的 LoRA 适配器（分别用于策略网络和能力估计器），共享同一个预训练 LLM 骨干。消融实验表明，共享适配器或冻结 LLM 表现较差。

---

## 3. 实验设计

### 环境
- **Little-Zoo**：专门设计的全文本环境，包含家具、植物、草食动物、肉食动物等隐藏类别。目标空间由约 2000 万个组合构成，实验中采样 25000 个目标，其中 80% 为不可能目标，16% 为抓取，3.2% 为种植物，0.7% 为养草食动物，0.1% 为养肉食动物。环境提供文本观察和 8 个动作。
- **OpenR1-Math-220k**（模拟学习场景）和 **BabyAI-Text**（额外验证）用于泛化实验。

### 基线方法（共 5 个基线 + 均匀采样）
1. **Eval-ALP**（低效）：每 N 个 episode 对所有目标单独评估，用前后差值计算 ALP。
2. **EK-Eval-ALP**（低效）：按专家分组评估，计算组平均能力。
3. **Online-ALP**（高效）：仅更新被采样目标的在线缓冲。
4. **EK-Online-ALP**（高效+专家知识）：按专家分组更新缓冲。
5. **Uniform**（均匀采样）。

### 实验安排（针对 Q1-Q4 共四个科学问题）
- **Q1（能力估计）**：固定 LLM 智能体（使用 EK-Eval-ALP 指导采样）在 25k/50k/100k 目标上训练 50k episode，对比 MAGELLAN、Online-ALP 与 EK-Eval-ALP 的估计误差和成本。8 个随机种子。
- **Q2（课程学习效果）**：LLM 智能体在 25k 目标上训练 500k episode，分别使用 MAGELLAN、Online-ALP、EK-Online-ALP、Uniform 作为目标选择器。每 5000 episode 评估 64 个目标/类别。8 个种子。
- **Q3（泛化到未见目标）**：在 Q2 训练过程中，用未见测试集评估能力估计误差。8 个种子。
- **Q4（演化目标空间适应）**：取 Q2 的一个 MAGELLAN 训练种子（500k episode），每 50k episode 替换所有目标为未见目标，再继续训练 50k episode，比较各方法的适应速度。8 个种子 × 10 个时间段。
- **消融实验**：4 种架构变体（A/B/C/D）在 500k episode 下的比较，8 个种子。

### Benchmark 与评价指标
- 成功率（Success Rate, SR，即成功概率）
- 能力估计误差（绝对差）
- 适应效率（样本效率累计曲线）

---

## 4. 资源与算力

**明确提及**：
- LLM：Flan-T5 248M（Flan-T5-base，约 2.48 亿参数），使用 4-bit 量化（QLoRA）降低 VRAM。
- 训练配置：2 个 Nvidia H100 80GB GPU，分别运行策略和 MAGELLAN 的 LLM 实例（数据并行 + 模型垂直并行）。
- 每个 seed 的 500k episode 训练耗时约 **80 GPU 小时**（2 × H100）。
- 未统计总实验所需总时数，但根据 8 seed × 4 方法 × 500k + 各类消融和适应实验，总资源消耗较大（可能数千 GPU 小时）。

---

## 5. 实验数量与充分性

**数量**：
- Q1 实验：3 种目标空间规模 × 8 seed = 24 run。
- Q2 实验：4 种 method × 8 seed = 32 run（500k episode）。
- Q3 实验：在 Q2 评估中提取测试集误差。
- Q4 适应实验：10 个时间点 × 4 种 method × 8 seed = 320 run（每个 50k episode）。
- 消融实验：4 种架构 × 8 seed = 32 run（500k episode）。
- 额外环境验证：OpenR1-Math-220k 和 BabyAI-Text 的模拟实验（seed 数未明确，但图表显示有误差条）。

**充分性评价**：
- **正面**：每个实验重复 8 个随机种子，统计显著性检验（p < 8×10⁻⁴），实验覆盖 Q1-Q4 四个核心问题，消融实验完善。
- **中性**：消融实验仅在 Little-Zoo 上做，未在 BabyAI-Text 或 OpenR1 上做架构消融。
- **公平性**：基线方法参数合理（如 ϵ 退火策略相同，缓冲大小一致），专家知识基线（EK-Online-ALP）采用了最有利的假设（仅包含可行目标），MAGELLAN 与 expert-free 的 Online-ALP 公平对比。但 EK-Online-ALP 获得额外信息优势，论文明确指出这点。

---

## 6. 论文的主要结论与发现

- **MAGELLAN 能力估计准确且高效**：在 25k/50k/100k 目标下，MAGELLAN 的估计误差接近 Eval-ALP（零额外评估成本），而 Online-ALP 误差显著更大。在 OpenR1-Math-220k 模拟中，MAGELLAN 也准确追踪了不同数学子领域的能力变化。
- **MAGELLAN 使智能体完整掌握所有目标**：在 500k episode 训练后，只有 MAGELLAN 在 Grasp、Grow Plant、Grow Herbivore、Grow Carnivore 四类任务上都达到 90%+ 成功率，且平均掌握速度显著快于 Online-ALP 和 Uniform。EK-Online-ALP（专家知识）更快，但需要预定义分组。
- **MAGELLAN 能泛化到未见目标**：在测试集上，MAGELLAN 的能力估计误差（平均 0.11）接近 EK-Online-ALP（0.09），远优于 Online-ALP（0.53）。表明它通过语义聚类自动学习了目标结构。
- **MAGELLAN 快速适应演化目标空间**：在替换目标后，MAGELLAN 能利用之前学到的语义关系迅速恢复高成功率，尤其在 LP 较高的场景下优于 Online-ALP，并与 EK-Online-ALP 相当。
- **嵌入空间可视化**：MAGELLAN 的训练动态重构了目标嵌入空间，将相似目标（如可行抓取、可生长植物）聚为一类，并将不可能目标推离。

---

## 7. 优点

### 方法亮点
- **无需专家知识**：自动学习目标间的语义关系，无需人工分组。
- **样本高效的能力估计**：利用 LLM 的语义表征和 LoRA 微调，仅需在线反馈（不用额外评估）即可实现接近全评估方法的精度。
- **动态适应演化空间**：通过泛化，新目标出现时能立即提供有效 LP 估计。
- **与策略训练解耦**：独立 LoRA 适配器防止两者互相干扰，同时共享 LLM 骨干以保持表征一致。

### 实验亮点
- **精心设计的 Little-Zoo 环境**：具有隐藏类别、层次性难度、大量不可能目标，能有效测试语义泛化。
- **多维度对比**：对比 4 种基线 + 均匀采样，区分了专家知识、在线/评估等因素。
- **可视化分析**：t-SNE 投影展示了训练过程中嵌入空间的重构，直观验证了语义聚类。
- **消融实验完善**：验证了共享/独立 LoRA、冻结 LLM 等设计选择。

---

## 8. 不足与局限

### 实验覆盖
- **环境单一**：主要实验在 Little-Zoo 上完成，尽管有 OpenR1-Math-220k 和 BabyAI-Text 的模拟/额外实验，但完整的 RL 训练泛化仅在一个环境中验证。
- **目标空间规模有限**：最大 100k 目标（模拟估计）和 25k 目标（实际训练），未验证数百万目标的更大空间。
- **LLM 规模较小**：仅使用了 Flan-T5-base（248M），未测试更大模型（如 7B/13B）下的表现和资源需求。
- **未涉及连续目标空间**：Little-Zoo 是离散目标，LLM 表征擅长处理离散语义，但连续空间（如参数化物理控制）未测试。

### 潜在偏差风险
- **专家知识基线的优势被低估**：论文中 EK-Online-ALP 的专家分组仅包含可行目标，且忽略不可能目标分组，这在真实应用场景中很难预先获取。论文虽承认这一点，但在对比中仍将其作为上界参考。
- **随机种子数 8 虽合理但不算极高**，统计显著性依赖大样本。

### 应用限制
- **小规模 LLM 和模拟环境**：作者明确表示“不推荐泛化到真实开放学习场景”。
- **仅评估自主学习**：未测试对人类学习者的适用性（尽管教育技术有潜力）。
- **计算成本**：每个 seed 80 小时 H100 对于大规模使用仍较高，但相比 Eval-ALP 已大幅降低。
- **无法处理完全无关的目标**：如果新目标与已有目标语义差距极大，MAGELLAN 的泛化可能失效（实验中的“Grow carnivore”误差相对较大，说明有过估计）。

（完）
