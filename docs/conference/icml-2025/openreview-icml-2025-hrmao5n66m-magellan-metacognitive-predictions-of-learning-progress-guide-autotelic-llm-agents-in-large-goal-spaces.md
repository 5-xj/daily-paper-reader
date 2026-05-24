---
title: "MAGELLAN: Metacognitive predictions of learning progress guide autotelic LLM agents in large goal spaces"
title_zh: MAGELLAN：元认知学习进度预测引导自主大模型智能体在庞大目标空间中的探索
authors: "Loris Gaven, Thomas Carta, Clément ROMAC, Cédric Colas, sylvain lamprier, Olivier Sigaud, Pierre-Yves Oudeyer"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=hRMAo5N66M"
tags: ["query:automatic-discovery"]
score: 7.0
evidence: 使用大语言模型智能体进行自主探索和目标发现
tldr: 提出MAGELLAN元认知框架，让大模型智能体预测学习进度，优先探索最有价值的目标。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 1237, \"height\": 743}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-002.webp\", \"caption\": \"\", \"page\": 6, \"index\": 2, \"width\": 1108, \"height\": 760}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-003.webp\", \"caption\": \"\", \"page\": 7, \"index\": 3, \"width\": 800, \"height\": 600}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-004.webp\", \"caption\": \"\", \"page\": 7, \"index\": 4, \"width\": 1554, \"height\": 1197}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-005.webp\", \"caption\": \"\", \"page\": 7, \"index\": 5, \"width\": 2400, \"height\": 1600}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-006.webp\", \"caption\": \"\", \"page\": 8, \"index\": 6, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-007.webp\", \"caption\": \"\", \"page\": 8, \"index\": 7, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-008.webp\", \"caption\": \"\", \"page\": 9, \"index\": 8, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-009.webp\", \"caption\": \"\", \"page\": 9, \"index\": 9, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-010.webp\", \"caption\": \"\", \"page\": 17, \"index\": 10, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-011.webp\", \"caption\": \"\", \"page\": 17, \"index\": 11, \"width\": 1189, \"height\": 790}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-012.webp\", \"caption\": \"\", \"page\": 22, \"index\": 12, \"width\": 885, \"height\": 801}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-013.webp\", \"caption\": \"\", \"page\": 22, \"index\": 13, \"width\": 882, \"height\": 801}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-014.webp\", \"caption\": \"\", \"page\": 22, \"index\": 14, \"width\": 882, \"height\": 801}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-015.webp\", \"caption\": \"\", \"page\": 22, \"index\": 15, \"width\": 882, \"height\": 801}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-016.webp\", \"caption\": \"\", \"page\": 23, \"index\": 16, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-017.webp\", \"caption\": \"\", \"page\": 23, \"index\": 17, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-018.webp\", \"caption\": \"\", \"page\": 23, \"index\": 18, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-019.webp\", \"caption\": \"\", \"page\": 23, \"index\": 19, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-020.webp\", \"caption\": \"\", \"page\": 24, \"index\": 20, \"width\": 1589, \"height\": 1277}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-021.webp\", \"caption\": \"\", \"page\": 24, \"index\": 21, \"width\": 1589, \"height\": 1277}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-022.webp\", \"caption\": \"\", \"page\": 25, \"index\": 22, \"width\": 1589, \"height\": 1277}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-023.webp\", \"caption\": \"\", \"page\": 25, \"index\": 23, \"width\": 2354, \"height\": 1197}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-024.webp\", \"caption\": \"\", \"page\": 26, \"index\": 24, \"width\": 2354, \"height\": 710}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-025.webp\", \"caption\": \"\", \"page\": 26, \"index\": 25, \"width\": 2354, \"height\": 1197}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-026.webp\", \"caption\": \"\", \"page\": 27, \"index\": 26, \"width\": 1554, \"height\": 1207}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-027.webp\", \"caption\": \"\", \"page\": 28, \"index\": 27, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-028.webp\", \"caption\": \"\", \"page\": 28, \"index\": 28, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-029.webp\", \"caption\": \"\", \"page\": 28, \"index\": 29, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-030.webp\", \"caption\": \"\", \"page\": 29, \"index\": 30, \"width\": 1590, \"height\": 1270}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-031.webp\", \"caption\": \"\", \"page\": 29, \"index\": 31, \"width\": 1590, \"height\": 1270}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-032.webp\", \"caption\": \"\", \"page\": 29, \"index\": 32, \"width\": 1590, \"height\": 1270}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-033.webp\", \"caption\": \"\", \"page\": 31, \"index\": 33, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-034.webp\", \"caption\": \"\", \"page\": 31, \"index\": 34, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-035.webp\", \"caption\": \"\", \"page\": 31, \"index\": 35, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-036.webp\", \"caption\": \"\", \"page\": 31, \"index\": 36, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-037.webp\", \"caption\": \"\", \"page\": 32, \"index\": 37, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-038.webp\", \"caption\": \"\", \"page\": 32, \"index\": 38, \"width\": 1200, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-039.webp\", \"caption\": \"\", \"page\": 34, \"index\": 39, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-040.webp\", \"caption\": \"\", \"page\": 34, \"index\": 40, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-041.webp\", \"caption\": \"\", \"page\": 34, \"index\": 41, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-042.webp\", \"caption\": \"\", \"page\": 34, \"index\": 42, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-043.webp\", \"caption\": \"\", \"page\": 34, \"index\": 43, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-044.webp\", \"caption\": \"\", \"page\": 34, \"index\": 44, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-045.webp\", \"caption\": \"\", \"page\": 34, \"index\": 45, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-046.webp\", \"caption\": \"\", \"page\": 34, \"index\": 46, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-047.webp\", \"caption\": \"\", \"page\": 34, \"index\": 47, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-048.webp\", \"caption\": \"\", \"page\": 34, \"index\": 48, \"width\": 1000, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-hrmao5n66m/fig-049.webp\", \"caption\": \"\", \"page\": 34, \"index\": 49, \"width\": 1800, \"height\": 800}]"
motivation: 让开放式学习智能体在巨大可能性空间中高效优先探索最有学习进度的目标。
method: 利用语义关系使得大模型智能体在线学习预测自身能力和学习进度。
result: 实现了样本高效的学习进度估计和动态目标优先级调整。
conclusion: 元认知框架能有效引导大模型智能体进行自主发现。
---

## Abstract
Open-ended learning agents must efficiently prioritize goals in vast possibility spaces, focusing on those that maximize learning progress (LP). When such autotelic exploration is achieved by LLM agents trained with online RL in high-dimensional and evolving goal spaces, a key challenge for LP prediction is modeling one’s own competence, a form of metacognitive monitoring. Traditional approaches either require extensive sampling or rely on brittle expert-defined goal groupings. We introduce MAGELLAN, a metacognitive framework that lets LLM agents learn to predict their competence and learning progress online. By capturing semantic relationships between goals, MAGELLAN enables sample-efficient LP estimation and dynamic adaptation to evolving goal spaces through generalization. In an interactive learning environment, we show that MAGELLAN improves LP prediction efficiency and goal prioritization, being the only method allowing the agent to fully master a large and evolving goal space. These results demonstrate how augmenting LLM agents with a metacognitive ability for LP predictions can effectively scale curriculum learning to open-ended goal spaces.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

开放式学习智能体（如人类）在无限且不断变化的目标空间中，需要高效地优先选择那些能最大化学习进步（Learning Progress, LP）的目标，从而实现自我驱动的课程学习（autotelic learning）。当前，大型语言模型（LLM）智能体通过在线强化学习（RL）与环境交互，能够学习目标导向行为。然而，将基于LP的自动课程学习扩展到高维、离散的自然语言目标空间面临关键困难：如何高效估计智能体对每个目标的当前能力和预期LP，即元认知监控（metacognitive monitoring）。传统LP方法要么需要大量采样（如定期全面重新评估），要么依赖脆弱的专家定义目标分组（expert-defined goal groupings），忽略了语义相似目标间的能力迁移，且无法适应不断变化的目标空间。

**本文提出MAGELLAN框架**，让LLM智能体在线学习一个元认知模块，通过捕获目标之间的语义关系，高效估计自身能力和LP，从而在庞大且动态演化的目标空间中自主组织学习课程。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

### 核心思想

MAGELLAN利用LLM自身的语义理解能力，学习一个条件于目标（goal-conditioned）的当前能力估计器，该估计器将目标文本映射到潜空间中，并利用语义相似性实现能力估计在相关目标之间的泛化。通过维护历史权重缓冲，计算绝对学习进步（Absolute Learning Progress, ALP）作为目标选择依据。

### 关键技术细节

- **能力估计器**：将目标文本（包括场景描述）输入LLM，取其最后token的隐藏表示，通过一个MLP输出估计的成功概率 \(C_{\theta_t}(g) \approx P_{\pi_t}(g)\)。该估计器使用缓冲 \(D_t\) 中最近M个训练回合的目标-结果对，以二值交叉熵损失进行训练，同时微调LLM的LoRA适配器和MLP。
- **学习进步（ALP）估计**：维护一个权重缓冲 \(B_t\)，保存最近N次更新时的能力估计器参数。对于每个目标 \(g\)，计算当前权重和N步前权重的能力估计之差的绝对值作为ALP：\(\widehat{ALP}_{\pi_t}(g) = |C_{\theta_t}(g) - C_{\theta_{t-N}}(g)|\)。
- **目标选择**：采用多臂老虎机方案，每个目标对应一个臂，其效用为MAGELLAN估计的ALP。目标按比例采样（比例于ALP），结合退火ε-贪心算法（ε从1降至0.2）。
- **实现细节**：策略网络和能力估计器分别训练独立的LoRA适配器（共享同一基础LLM）。更新频率：能力估计器每32次策略更新训练一次；缓冲大小 \(M=5000\)，权重缓冲大小 \(N=100\)。

### 与经典方法的对比

论文将MAGELLAN与四类经典方法比较：

- **Eval-ALP**：每隔N步停止训练，对所有目标重新评估能力，计算ALP。低效。
- **EK-Eval-ALP**：使用专家定义分组，在每组内抽样评估，计算组级ALP。依赖专家知识。
- **Online-ALP**：仅基于在线采样到的目标，用每个目标历史结果缓冲计算ALP。无迁移，无分组。
- **EK-Online-ALP**：使用专家定义分组，在线更新组级能力估计并计算组级ALP。

MAGELLAN兼具高效率（无额外评估）、动态捕获能力迁移（通过LLM语义聚类）且无需专家知识。

## 3. 实验设计：使用的数据集/场景、benchmark、对比方法

### 环境与目标空间

论文引入**Little-Zoo**环境，一个全文本交互环境，包含各种物品（家具、植物、草食动物、肉食动物）以及水。目标空间由指令（如“抓取X”“生长X”）和场景初始化的组合构成，约2000万种组合（大部分不可行）。目标按难度分为四类：Grasp、Grow plant、Grow herbivore、Grow carnivore，另有80%不可能目标。实验中使用子采样目标集（训练/测试各25k、50k、100k），保持与原空间的比例。

### 基准对比方法

- Uniform（均匀采样）
- Online-ALP
- EK-Online-ALP（使用专家定义组）
- Eval-ALP和EK-Eval-ALP仅用于能力估计误差比较（因成本过高，不用于完整课程学习训练）

LLM智能体使用SAC-GLAM算法微调Flan-T5 248M模型。

### 实验设计（四个科学问题Q1-Q4）

- **Q1（能力估计误差与缩放性）**：固定LLM智能体训练（50k回合），由EK-Eval-ALP采样子目标，比较MAGELLAN、Online-ALP、Eval-ALP（视为零误差）对组级能力的估计误差，改变目标空间大小（25k/50k/100k）。
- **Q2（课程学习效果）**：训练LLM智能体500k回合，25k目标空间，比较MAGELLAN、Online-ALP、EK-Online-ALP、Uniform的成功率（SR）。
- **Q3（泛化到未见目标）**：在Q2训练过程中，每5k回合评估对测试集（未见目标）的成功率，并比较能力估计误差。
- **Q4（适应演化目标空间）**：使用MAGELLAN训练500k回合，每50k回合替换所有目标为测试集中的新目标，用各方法再训练50k回合，比较初始适应速度和最终性能。

此外，论文还进行了消融实验（MAGELLAN架构选择）和在OpenR1-Math-220k、BabyAI-Text环境上的额外验证（模拟学习曲线）。

## 4. 资源与算力

文中明确提到：

- LLM使用Flan-T5 250M（248M参数）模型，通过4位量化（QLoRA）优化显存。
- 使用32个并行环境实例（向量化环境）。
- 使用Lamorel部署2个LLM实例进行数据并行训练。
- 每个LLM实例分布在1块Nvidia H100 80GB GPU上，总共需要2块H100 GPU运行一个实验。
- 单个种子（seed）运行500k训练回合约需80 GPU小时（H100）。

论文在主要实验中使用了8个随机种子，因此在资源消耗上具有良好可重复性。

## 5. 实验数量与充分性

实验数量与设计：

- **主要实验**：每个比较使用8个种子（随机初始化和采样子目标），结果报告均值和标准差，统计显著性（t检验，p<8×10^{-4}）标注在图中。
- **Q1**：3种目标空间大小，3种方法对比（MAGELLAN、Online-ALP、Eval-ALP基准）。
- **Q2**：4种方法（MAGELLAN、Online-ALP、EK-Online-ALP、Uniform），8种子，500k回合。
- **Q3**：基于Q2的评估，报告测试集误差。
- **Q4**：10个时间点替换目标空间，每种方法8种子，共80组适应实验。
- **其他**：消融实验（4种架构，8种子）；额外环境验证（OpenR1-Math-220k、BabyAI-Text，模拟学习曲线，8种子？）；LLM规模比较（Flan-T5-small/base、Qwen2.5-0.5B）。

**充分性评价**：实验设计较为全面，覆盖了能力估计、课程学习、泛化和动态适应四个核心方面，并包含消融和额外环境验证。使用多随机种子，统计检验合理。但主要实验仅在Little-Zoo一个复杂环境上进行，泛化到其他实际场景尚需验证。另外，模拟学习曲线实验（OpenR1-Math等）未使用真实在线RL智能体，削弱了直接说服力。

## 6. 论文的主要结论与发现

1. **Q1**：MAGELLAN的能力估计误差与消耗大量计算资源的Eval-ALP相当（视为接近真值），且随着目标空间增大保持稳定，而Online-ALP误差明显增大。MAGELLAN的估计误差近似于使用了专家知识的EK-Online-ALP，说明其自动学习的语义聚类有效。
2. **Q2**：在250k目标空间、500k回合条件下，MAGELLAN是唯一在所有目标类别上达到90%以上成功率的非专家知识方法。它比Online-ALP和Uniform更快掌握所有类别，且与依赖专家知识的EK-Online-ALP性能接近但无需先验分组。
3. **Q3**：MAGELLAN能够泛化能力估计到未见目标，测试集误差显著小于Online-ALP（0.11 vs 0.53），接近EK-Online-ALP（0.09），而后者依赖专家分组信息。t-SNE可视化显示MAGELLAN的LLM潜空间训练后形成有意义的聚类（不同目标类型分离，不可能的类与可解的类分离），且测试目标被正确映射到相应簇。
4. **Q4**：在动态替换目标空间的测试中，MAGELLAN表现出最快的适应速度，尤其在智能体尚有高LP（例如正在学习Grow carnivore）时，能通过泛化迅速在新目标上继续进步，性能与EK-Online-ALP相当。当LP为零时，MAGELLAN通过退火ε-贪心也能逐步发现新LP区域。

## 7. 优点

- **方法创新性**：将元认知预测与LLM语义理解结合，自动学习目标间的迁移关系，无需专家定义分组，解决了传统LP方法在离散、高维、结构化目标空间中的瓶颈。
- **高效性**：仅利用在线交互数据（无额外评估回合），即可准确估计能力与LP，计算效率远高于Eval-ALP。
- **动态适应能力**：能泛化到未见目标，并迅速适应目标空间演化，具有很强的开放世界学习潜力。
- **实验设计严谨**：多种子、统计检验、多维度对比（能力误差、课程效果、泛化、适应），并包含消融和额外环境验证，可信度高。
- **可解释性**：通过t-SNE可视化展示了MAGELLAN训练后潜空间的结构化重组，揭示了方法内部工作机制。

## 8. 不足与局限

1. **环境局限性**：主要实验仅在Little-Zoo一个专门设计的文本环境中进行，该环境虽然控制性好，但相对简化。尽管有OpenR1-Math和BabyAI-Text的模拟验证，但未在更复杂的真实开放环境（如Minecraft、真实机器人）中进行验证。
2. **模拟学习实验的局限**：论文中OpenR1-Math和BabyAI-Text的能力估计实验是模拟学习的，并非使用真实在线RL智能体，因此不能完全代表MAGELLAN在实际LLM智能体训练中的表现。
3. **计算资源**：虽然MAGELLAN本身高效，但训练LLM智能体（Flan-T5 250M）仍需2块H100和80 GPU小时/种子，规模稍大，可能限制在资源有限的团队中应用。
4. **未探索更大规模LLM**：实验仅采用250M参数的模型，论文中消融显示不同小LLM效果接近，但更大模型（如7B）下的表现和泛化能力未研究。
5. **专家知识对比的公平性**：EK-Online-ALP使用了不可获得的先验分组信息，虽然在比较中展现了上限，但MAGELLAN在未使用这些信息的情况下达到了接近的性能，反而凸显了其优势。然而，文中未充分讨论在分组不准确或目标空间变化剧烈时专家知识方法可能失效的问题。
6. **长期稳定性和遗忘问题**：论文未讨论智能体在非常长时间训练（如数百万回合）下MAGELLAN可能出现的遗忘或能力估计漂移问题，也未与持续学习方法对比。
7. **开放性与通用性声明**：论文声称方法可应用于人类教育、代码生成等场景，但未提供任何实际跨域实验，仅停留在理论推测。

（完）
