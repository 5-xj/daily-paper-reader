---
title: Language Models as Implicit Tree Search
title_zh: 语言模型作为隐式树搜索
authors: "Ziliang Chen, Zhao-Rong Lai, Yufeng Yang, Liangda Fang, ZHANFU YANG, Liang Lin"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=bEqMmGu6qg"
tags: ["query:automatic-discovery"]
score: 8.0
evidence: 隐式树搜索用于推理，类似大模型引导的启发式搜索
tldr: 免强化学习方法使语言模型策略等价于类AlphaZero树搜索
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-beqmmgu6qg/fig-001.webp\", \"caption\": \"\", \"page\": 4, \"index\": 1, \"width\": 5956, \"height\": 1960}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-beqmmgu6qg/fig-002.webp\", \"caption\": \"\", \"page\": 7, \"index\": 2, \"width\": 1675, \"height\": 1269}]"
motivation: 直接偏好优化在复杂推理任务中不足，需融入搜索机制。
method: 额外训练一个语言模型，使其生成策略渐近等价于AlphaZero搜索。
result: 在偏好对齐和推理任务上优于现有方法。
conclusion: 隐式树搜索能有效提升语言模型的推理能力。
---

## Abstract
Despite advancing language model (LM) alignment, direct preference optimization (DPO) falls short in LM reasoning with the free lunch from reinforcement learning (RL). As the breakthrough, this work proposes a new RL-free preference optimization method aiming to achieve DPO along with learning another LM, whose response generation policy holds the asymptotic equivalence with AlphaZero-like search, the apex of algorithms for complex reasoning missions like chess Go. While circumventing explicit value and reward modeling, the neural implicit tree search executed by the extra LM remains seeking to equip DPO with reasoning procedure technically akin to AlphaZero. Our experiments demonstrate that our methodology outperforms both regular DPO variants in human preference alignment, and MCTS-based LMs in mathematical reasoning and planning tasks.

---

## 论文详细总结（自动生成）

# 论文中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **动机**：直接偏好优化（DPO）虽然免去了强化学习的复杂性，在人类对齐中表现高效，但在复杂推理任务（如数学推理、规划）中能力不足。现有将蒙特卡洛树搜索（MCTS）与LM结合的方法通常需要显式的价值函数（通过RL学习），这违背了DPO的“免RL”核心优势。
- **整体含义**：本文提出一种**免强化学习的隐式树搜索（Implicit Tree Search, ITS）**方法，通过另一个LM来全局近似类AlphaZero的树搜索策略，使DPO在保持原有优点的同时，具备MCTS级别的推理能力。

## 2. 论文提出的方法论
### 核心思想
- 基于Grill等人（2020b）的理论：AlphaZero类MCTS可视为一种**正则化策略优化**，其搜索策略可等价于一个随机策略π。但π的求解需要每个状态进行二分搜索，无法直接用于LM。
- 本文训练另一个语言模型πφ来**通用近似**π，无需显式的价值函数或二分搜索。通过推导出基于DPO的IT-PO损失函数，使πφ的生成策略渐近等价于AlphaZero树搜索。

### 关键技术细节
- **步骤同步IT-PO（token级）**：对于每个状态st，从πφ采样替代动作，构造偏好差异Uss，使用保守DPO（cDPO）训练πφ。
- **步骤异步IT-PO（句子级）**：将MDP提升到句子层，使用类似公式Usa训练πφ，适用于推理任务。
- **自改进训练**：通过πφ生成多个响应，利用Uss或Usa排序构建改进数据集D+，联合原始数据更新主策略πθ。
- **ITS引导解码**：包括ITS-α（使用指数化πφ概率）和ITS-rollout（测试时微调πφ以适应新状态），后者与GRPO相关。

## 3. 实验设计
### 数据集/场景
1. **人类偏好对齐**：Anthropic HH数据集（17万对话），评估准确率、多样性、GPT-4胜率。
2. **数学推理**：GSM8K、Game24（数学规划）、MATH。
3. **附加实验**：ProofWriter（逻辑推理）、Chess Endgame（长期多步决策）。

### Benchmark与对比方法
- **偏好对齐**：DPO、RTO、TDPO1、TDPO2。
- **数学推理**：CoT-greedy、BFS-V（带价值函数）、MCTS-α、MCTS-rollout、CoT-SC等。
- **模型**：Pythia 2.8B（对齐）、LLAMA-7B（GSM8K/Game24）、Qwen1.5-32B（MATH），也尝试LLAMA3-8B作为φ。

## 4. 资源与算力
- 论文**未明确**说明完整训练所需的GPU型号、数量、总时长。仅提及ITS-rollout解码时每个测试提示生成8个响应需0.5~1小时作为预热阶段。其他训练细节（如单卡还是多卡、训练时间）均未报告。

## 5. 实验数量与充分性
- **实验数量**：包含三组主要实验（对齐、数学推理、数学规划）及两组额外实验（ProofWriter、Chess Endgame）。在GSM8K和Game24上进行了Path@1和Equal-Token对比，以及不同树宽/节点大小的消融（表3）。在偏好对齐中进行了多个温度（10个）、5次迭代的消融。
- **充分性与公平性**：对比了多个强基线，包括DPO变体和MCTS变体，实验设计较全面。但部分任务（如MATH）仅与MCTS方法对比，未与最新推理增强方法（如自一致性）对比；此外，所有实验基于中等规模模型（最大32B），未在更大模型（70B+）上验证。

## 6. 主要结论与发现
- IT-PO在**人类偏好对齐**上显著优于DPO、RTO、TDPO等变体，在准确率、多样性和GPT-4胜率上均领先。
- 在**数学推理和规划**任务（GSM8K、Game24、MATH）上，ITS-α和ITS-rollout超越MCTS-based方法，且对树宽、节点大小的敏感性更低。
- ITS策略（πφ）通过梯度分析表明能同时提升生成多样性和对齐性，且可通过自改进训练持续增强。
- 较小的LM（LLAMA3-8B）作为φ也能提升较大LM（Qwen1.5-32B）的推理性能，表明计算开销可部分缓解。

## 7. 优点
- **理论新颖**：将AlphaZero类MCTS等价于随机策略，并利用LM直接近似，无需RL价值函数，保持了DPO的简洁性。
- **方法通用**：提供token级和句子级两个版本，分别适用于对齐和推理任务。
- **自改进机制**：通过生成数据+偏好排序实现自我蒸馏，不依赖外部奖励模型。
- **解码策略创新**：ITS-α和ITS-rollout连接了搜索与策略优化，且与GRPO有理论关联。
- **实验全面**：覆盖多个领域（对齐、推理、规划），消融实验充分。

## 8. 不足与局限
- **未报告完整算力**：缺乏训练所需的GPU数量、总时间等关键资源指标，可复现性受限。
- **实验覆盖有限**：未在更大模型（如70B+）上验证；未在更多样化的人类对齐场景（如安全性、无害性）下测试；MATH任务仅与基础MCTS对比，缺少与最新PRM或过程奖励方法的比较。
- **计算开销**：需要额外训练一个LM φ，且ITS-rollout需要测试时微调（0.5-1小时），不适合实时或低延迟场景。
- **数据构建风险**：数学推理中通过否定对数概率构造负样本，可能引入噪声或偏差。
- **理论保证有限**：渐近等价性要求模拟次数足够大，实际中可能不完全满足；梯度分析中log比例可能不稳定（虽已做对数缩放）。

（完）
