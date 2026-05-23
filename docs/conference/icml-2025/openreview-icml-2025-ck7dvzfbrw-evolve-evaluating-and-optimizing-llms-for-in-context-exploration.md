---
title: "EVOLvE: Evaluating and Optimizing LLMs For In-Context Exploration"
title_zh: "EVOLvE: 评估和优化大语言模型的情境探索"
authors: "Allen Nie, Yi Su, Bo Chang, Jonathan Lee, Ed H. Chi, Quoc V Le, Minmin Chen"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=ck7dvZFbRW"
tags: ["query:automatic-discovery"]
score: 4.0
evidence: 评估大模型在赌博机环境中的探索能力，与启发式探索方法相关
tldr: 在大模型中进行赌博机任务的探索决策能力基准测试。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 大模型在不确定性下的最优决策能力尚未充分研究。
method: 开发了包含多种赌博机环境的测试套件，评估和优化探索策略。
result: 揭示了当前大模型在探索决策方面的不足。
conclusion: 该工作为提升大模型的主动探索和决策能力提供了基础。
---

## Abstract
Despite their success in many domains, large language models (LLMs) remain under-studied in scenarios requiring optimal decision-making under uncertainty. This is crucial as many real-world applications, ranging from personalized recommendations to healthcare interventions, demand that LLMs not only predict but also actively learn to make optimal decisions through exploration. In this work, we measure LLMs' (in)ability to make optimal decisions in bandits, a state-less reinforcement learning setting relevant to many applications. We develop a comprehensive suite of environments, including both context-free and contextual bandits with varying task difficulties, to benchmark LLMs' performance. Motivated by the existence of optimal exploration algorithms, we propose efficient ways to integrate this algorithmic knowledge into LLMs: by providing explicit algorithm-guided support during inference; and through algorithm distillation via in-context demonstrations and fine-tuning, using synthetic data generated from these algorithms. Impressively, these techniques allow us to achieve superior exploration performance with smaller models, surpassing larger models on various tasks. We conducted an extensive ablation study to shed light on various factors, such as task difficulty and data representation, that influence the efficiency of LLM exploration. Additionally, we conduct a rigorous analysis of the LLM's exploration efficiency using the concept of regret, linking its ability to explore to the model size and underlying algorithm.

---

## 论文详细总结（自动生成）

# EVOLvE 论文详细总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：大型语言模型（LLM）在需要不确定性下的最优决策任务中（如个性化推荐、医疗干预）是否具备主动探索和学习的能力？具体而言，LLM 能否在赌博机（bandit）环境中通过上下文交互实现探索-利用权衡，从而最大化累积奖励？
- **研究动机**：现有 LLM 研究多聚焦于预测任务，而忽略了动态决策中“探索”的必要性。许多实际应用（如新闻推荐、教育通知）本质上都是赌博机问题，需要 agent 主动试错、收集反馈并调整策略。
- **背景**：经典赌博机算法（如 UCB、Thompson Sampling）已有成熟理论保证，但 LLM 是否能自然习得这种探索行为尚不清楚。本文旨在系统评估 LLM 的“情境探索”（in-context exploration）能力，并探索如何利用最优算法知识提升 LLM 的性能。

## 2. 论文提出的方法论

### 核心思想
利用经典最优赌博机算法（UCB/LinUCB）的知识来增强 LLM，通过两种途径：
- **推理时算法引导支持（Algorithm-Guided Support, AG）**：在输入中显式提供每个动作的利用值（exploitation value）和探索奖励（exploration bonus），让 LLM 只需做简单的加法与 argmax，而非从原始历史中推导。
- **算法蒸馏（Algorithm Distillation）**：使用 UCB 生成的专家轨迹，通过少样本演示或微调（OFT）将最优探索行为教给 LLM。

### 关键技术细节
| 方法 | 描述 |
|------|------|
| **Raw History (RH)** | 直接列出所有历史 (动作, 奖励) 元组。 |
| **Summarized History (SH)** | 仅提供每个动作的平均奖励和选择次数（适用于 MAB）。 |
| **Algorithm-Guided (AG)** | 提供由 UCB 计算的 \( V_{\text{exploit}}(a,t) \) 和 \( V_{\text{explore}}(a,t) \)（MAB 及 CB 均适用）。 |
| **Few-shot Demonstration** | 在提示中插入 5 条 UCB 生成的完整轨迹作为示例。 |
| **Oracle Behavior Fine-Tuning (OFT)** | 以 UCB 轨迹为训练数据，最大化动作预测的对数似然：\( \mathcal{L}_{\text{OFT}} = -\mathbb{E}_{(\phi(H_t^{\text{UCB}}), a_t^{\text{UCB}}) \sim \mathcal{D}_{\text{OFT}}} \big[ \log \pi(a_t^{\text{UCB}} \mid \phi(H_t^{\text{UCB}})) \big] \)。 |

### 算法流程（文字说明）
1. 在每一回合 \(t\)，环境提供上下文 \(x_t\)（若为上下文赌博机）。
2. LLM 根据历史表示 \(\phi(H_t)\) 选择动作 \(a_t\)。
3. 环境返回奖励 \(r_{a_t}\)。
4. 更新历史 \(H_{t+1}\)。
5. 对于 AG 方法，LLM 输入中包含每动作的利用值与探索奖励（由外部 UCB 计算）；对于蒸馏方法，LLM 已通过微调或少样本示例学习了 UCB 的行为模式。

## 3. 实验设计

### 数据集 / 场景
- **BanditBench**：包含 16 种多臂赌博机（MAB）配置和 2 种上下文赌博机（CB）配置。
  - MAB：动作空间 K=5 或 20；奖励分布：Bernoulli（gap=0.5 或 0.2）或 Gaussian（σ=1 或 3）；动作描述：无意义视频名（如 "AA"）或语义服装名。
  - CB：基于 MovieLens-1M 数据集，构建线性奖励模型（SVD 低秩近似），K=10 或 30，每步提供用户特征（年龄、职业、偏好向量等）。

### 基准（Baselines）
- **原始历史 (RH)**、**摘要历史 (SH)**、**算法引导 (AG)**、**少样本演示 (Few-shot)**、**最优行为微调 (OFT)**。
- 对比传统最优算法：UCB / LinUCB。

### 模型
- Gemma-2B、Gemma-9B、Gemini 1.5 Flash、Gemini 1.5 Pro。

### 评估指标
- **胜率（Win-rate）**：基于 30 次独立运行的累积奖励，通过 t 检验（p<0.05）统计显著比较。
- **MinFrac**（最少选择动作占比）、**OptFrac**（最优动作选择占比）。
- **后悔函数拟合**：使用 \( f(T) = \lambda_1 \frac{\log(T)^\alpha}{\Delta_{\min}} + \beta T + \lambda_2 \) 拟合累积后悔曲线，参数 α（亚线性）和 β（线性）衡量探索效率。

## 4. 资源与算力

论文附录 A.9 提供了推理成本估算：
- MAB 全配置（16 配置 × 32 模型）：Gemini-1.5 Flash 约 $15,897.6（30 次试验 × 最长上下文 = RH 配置）。
- CB 配置（2 配置 × 14 模型）：Gemini-1.5 Flash 约 $14,491.12。
- 训练阶段（OFT）未明确说明 GPU 型号及数量，仅提到使用 API 调用进行微调。训练数据规模：MAB 每域 50 条轨迹，CB 200 条轨迹。

## 5. 实验数量与充分性

- **实验数量**：共执行 **16 MAB 配置 × 32 模型 × 30 次独立运行** + **2 CB 配置 × 14 模型 × 30 次运行**，总计超过 1.5 万次推理实验。
- **消融实验**：
  - 任务难度（易/难）、历史表示（RH vs SH vs AG）、轨迹表示对齐（RH vs AG in trajectory & inference）、训练数据领域泛化（易→难）。
  - 后悔参数分析（Figure 3, A5, A6）。
- **充分性与公平性**：所有对比均在相同环境、相同随机种子下进行，统计显著性检验（t 检验）确保结论可信。实验覆盖了不同模型大小、不同方法、不同难度，分析全面。

## 6. 论文的主要结论与发现

1. **LLM 原始探索能力弱**：仅使用 RH 时，LLM 表现远逊于 UCB，近乎线性后悔（β>0）。
2. **推理时算法引导（AG）显著提升性能**：对于复杂任务（大动作空间、CB）尤其有效，使 Gemini-1.5 Pro 获得接近 UCB 的亚线性后悔。
3. **算法蒸馏效果卓越**：
   - **OFT 优于少样本**，且能使小模型（Gemini-1.5 Flash）超越大模型（Gemini-1.5 Pro）。
   - 少样本演示对 Flash 有帮助，但对 Pro 反而有害（可能破坏其内部 CoT 结构）。
4. **轨迹表示的选择至关重要**：少样本偏好简洁的 SH，而 OFT 偏好丰富的 RH；CB 中加入 AG 表示可进一步提升 OFT 性能。
5. **易→难迁移可行**：在简单域上蒸馏的模型能泛化到困难域。
6. **后悔分析**：大模型（Pro）配合 AG 或 SH 可实现亚线性后悔（α>0, β≈0）；小模型（Gemma-2B/9B）几乎总是线性后悔（β>0）。

## 7. 优点（亮点）

- **基准设计全面**：BanditBench 覆盖多种难度、动作类型、奖励分布，且包含上下文赌博机，评估维度丰富。
- **方法创新性**：将经典最优算法（UCB）与 LLM 结合，提出两种互补策略（推理时引导 + 蒸馏），并系统对比了少样本与微调的效果。
- **深入分析**：不仅报告累积奖励，还使用 MinFrac/OptFrac 分析探索行为，并通过后悔函数拟合量化探索效率，提供理论洞察。
- **小模型超越大模型**：OFT 使 Gemini-1.5 Flash 超过 Gemini-1.5 Pro，证明了知识蒸馏的实用性，有助于降低推理成本。

## 8. 不足与局限

- **环境限制**：仅考虑无状态的赌博机，未扩展到完整马尔可夫决策过程（MDP）或更复杂的 RL 任务。
- **对超大模型的少样本效果不佳**：Gemini-1.5 Pro 在少样本条件下性能反而下降，说明需要更精细的示例设计或指令调整。
- **计算成本依赖外部算法**：AG 方法需要外部 UCB 计算探索/利用值，增加了系统复杂度；蒸馏方法需要预先生成大量 UCB 轨迹。
- **未讨论随机种子对结果的影响**：虽然每次试验使用不同种子，但未对种子空间进行系统评估（如方差分析）。
- **未见跨模型架构的泛化**：仅测试了 Gemma 和 Gemini 系列，其他架构（如 GPT-4）的结果未知。
- **未考虑奖励函数非平稳或对抗性场景**：所有实验均为随机平稳环境，实际应用中可能存在非平稳性。

（完）
