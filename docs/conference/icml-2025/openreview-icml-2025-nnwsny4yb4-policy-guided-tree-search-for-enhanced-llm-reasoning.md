---
title: Policy Guided Tree Search for Enhanced LLM Reasoning
title_zh: 策略引导的树搜索增强大模型推理
authors: Yang Li
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=NNWSNy4YB4"
tags: ["query:automatic-discovery"]
score: 4.0
evidence: 学习策略替代手动启发式进行树搜索
tldr: 策略引导的树搜索学习何时扩展或回溯以增强推理
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-nnwsny4yb4/fig-001.webp\", \"caption\": \"\", \"page\": 3, \"index\": 1, \"width\": 2928, \"height\": 1182}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-nnwsny4yb4/fig-002.webp\", \"caption\": \"\", \"page\": 8, \"index\": 2, \"width\": 1200, \"height\": 350}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-nnwsny4yb4/fig-003.webp\", \"caption\": \"\", \"page\": 8, \"index\": 3, \"width\": 400, \"height\": 300}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-nnwsny4yb4/fig-004.webp\", \"caption\": \"\", \"page\": 8, \"index\": 4, \"width\": 400, \"height\": 300}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-nnwsny4yb4/fig-005.webp\", \"caption\": \"\", \"page\": 18, \"index\": 5, \"width\": 2972, \"height\": 2866}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-nnwsny4yb4/fig-006.webp\", \"caption\": \"\", \"page\": 19, \"index\": 6, \"width\": 2962, \"height\": 3688}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-nnwsny4yb4/fig-007.webp\", \"caption\": \"\", \"page\": 20, \"index\": 7, \"width\": 2986, \"height\": 4142}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-nnwsny4yb4/fig-008.webp\", \"caption\": \"\", \"page\": 21, \"index\": 8, \"width\": 2736, \"height\": 4556}]"
motivation: 现有树搜索依赖固定启发式，效率低。
method: 结合强化学习训练决策策略，动态控制搜索过程。
result: 在数学推理和逻辑推演任务上优于基线。
conclusion: 自动学习搜索策略可取代手动启发式，提升推理效率。
---

## Abstract
Despite their remarkable capabilities, large language models often struggle with tasks requiring complex reasoning and planning. While existing approaches like Chain-of-Thought prompting and tree search techniques show promise, they are limited by their reliance on predefined heuristics and computationally expensive exploration strategies. We propose Policy-Guided Tree Search (PGTS), a framework that combines reinforcement learning with structured tree exploration to efficiently navigate reasoning paths. Our key innovation is a learned policy that dynamically decides between expanding, branching, backtracking, or terminating exploration, eliminating the need for manual heuristics or exhaustive search. Experiments across mathematical reasoning, logical deduction, and planning benchmarks demonstrate that PGTS achieves superior reasoning performance while significantly reducing computational costs compared to existing methods. These results establish PGTS as a scalable and effective solution for tackling complex reasoning tasks with LLMs.

---

## 论文详细总结（自动生成）

# 策略引导的树搜索增强大模型推理（PGTS）详细总结

## 1. 核心问题与整体含义（研究动机和背景）
大型语言模型在需要复杂推理和规划的任务上表现不佳，虽已有 Chain-of-Thought（CoT）提示和树搜索（如 ToT、MCTS）等方法，但这些方法依赖于预定义的启发式规则（如固定搜索策略）或计算昂贵的穷举探索，难以兼顾效率与性能。  
作者提出 **Policy-Guided Tree Search（PGTS）**，旨在通过**强化学习训练的决策策略**来动态引导树搜索，替代手动设计的启发式，从而在提升推理质量的同时显著降低计算成本。

## 2. 方法论：核心思想、关键技术细节
### 2.1 整体框架
- 将推理过程建模为**树搜索马尔可夫决策过程（TS-MDP）**，策略网络 \(\pi_\phi\) 基于当前已探索的部分推理树，动态选择下一步操作。
- 四种基本操作：
  - **Expand**：从当前节点生成下一个推理步骤。
  - **Branch**：切换到当前节点的兄弟节点（探索其他路径）。
  - **Backtrack**：回退若干步，重新探索之前的分支。
  - **Terminate**：结束搜索，输出当前路径的答案。
- 通过限制树的深度和宽度（如最大4个子节点）保证计算可行性，并使用有效性掩码确保动作合法。

### 2.2 策略网络设计
- 采用 **Graph Transformer（GPS 架构）**，结合局部消息传递和全局注意力，捕获树的结构信息。
- 节点特征来自目标 LLM 最后一层隐藏状态；边特征编码中间步骤的即时奖励 \(R(s,a)\)。
- 输出层产生动作分布和值函数估计。无效动作被掩码屏蔽。

### 2.3 奖励设计
- 即时奖励 = 步骤质量（如生成步骤的似然） - 动作成本 \(C(a)\)。
- 成本设定：Expand=0.1，Branch=0.2，Backtrack=0.5（回退步数相关），Terminate=0.0。成本鼓励高效搜索，避免过多回溯或分支。

### 2.4 训练算法
- 使用 **PPO（Proximal Policy Optimization）** 训练策略和值网络。
- 训练数据：每个数据集最多 1000 个样本（无需人工标注推理链，奖励最终答案与真实答案对比即可）。
- 策略从随机初始化开始，与环境（推理树）交互，收集轨迹进行优化。

## 3. 实验设计
### 3.1 数据集与场景
| 类型 | 数据集 | 测试设置 |
|------|--------|----------|
| 数学推理 | GSM8K、MATH500、AQUA | 数学应用题和代数问题 |
| 常识推理 | StrategyQA | 二值问答 |
| 逻辑推理 | PrOntoQA、GPQA（研究生级） | 逻辑推理和多项选择 |
| 规划 | Blocksworld（4步、8步） | 块世界规划 |
- 每个推理步骤定义为一句话。
- 树深度限制保证能到达终端节点；广度限制为4；最大推理步数根据数据集设定（如MAX_STEPS=256 for MATH）。

### 3.2 对比方法
- **CoT**（基础）及其自洽性版本 CoT-SC（多链投票）。
- **MCTS**（最佳路径 / 加权投票 / Oracle 版本，Oracle 使用真实答案做奖励）。
- PGTS 及其自洽性版本 PGTS-SC（加权投票）。

### 3.3 评估指标
- 准确率（Acc）。
- token 消耗量（反映推理成本）。

## 4. 资源与算力
论文**未明确报告 GPU 型号、数量或训练时长**。  
仅提到使用 LLaMA3.1-8B 和 LLaMA3.1-70B 两种模型，训练 PGTS 策略最多使用 1000 个样本。  
计算开销主要在 LLM 生成步骤，策略网络本身轻量（仅两层 GPS + 线性层），其开销可忽略。

## 5. 实验数量与充分性
- **主实验**：两个模型（8B/70B） × 8个数据集 × 多种变体（CoT, CoT-SC, MCTS Best/Agg/Oracle, PGTS, PGTS-SC），共 80+ 组结果对比。
- **消融实验**：
  - 训练样本量：在 AQUA 和 GSM8K 上绘制奖励曲线，显示 1000 样本收敛。
  - 树宽度（2 / 4 / 8）：在 AQUA 上比较，宽度增大会提升准确率但也增加 token，实验选择 4 作为平衡。
  - 策略网络架构：对比 GPS、SAN、小语言模型（SLM）、LLM Agent，证明 GPS 最优（表3）。
- **评估充分性**：涵盖了数学、逻辑、常识、规划等多个领域，对比了主流树搜索方法，消融实验系统。不足在于缺乏对奖励函数敏感性、不同成本设定、更大模型（如 70B）上训练规模等更深入分析。整体实验公平、客观。

## 6. 主要结论与发现
1. **性能优势**：PGTS 在多数数据集上显著优于 CoT（如 MATH：PGTS 41.00% vs CoT 34.40%），且自洽投票后（PGTS-SC）进一步提升，甚至超过 MCTS（Best/Agg）。
2. **效率优势**：PGTS token 消耗远低于 MCTS（例如 MATH 上 PGTS 为 MCTS 的 1/3），接近 CoT 的 1.29~5.28 倍，而 MCTS 为 CoT 的 13~16 倍。
3. **样本效率**：仅需 1000 个训练样本即可学习有效策略。
4. **可扩展性**：GPS 架构有效捕捉树结构，优于纯语言或简单图网络。
5. **解决“过度思考”**：Terminate 动作允许适时停止，避免无效推理。

## 7. 优点
- **创新性**：将强化学习策略用于指导树搜索，替代手动启发式，实现了动态平衡探索与利用。
- **实用性**：在保持高准确率的同时大幅降低计算成本（token 节约 50%～90%），更适合实际部署。
- **灵活性**：训练无需人工标注推理步骤，奖励可复用任务级真实答案。
- **架构设计**：图 Transformer 有效处理树结构，支持局部和全局信息的融合。

## 8. 不足与局限
- **GPQA 表现不佳**：在研究生级问答任务上，PGTS 落后于 MCTS，作者归因于任务复杂且训练样本有限（1000 个可能不足）。
- **奖励简单**：当前中间奖励仅使用步骤似然，未用更复杂的自评价或领域特定指标，可能限制引导效果。
- **未解决推理忠实性**：生成的推理链可能与真实逻辑不一致（忠实性问题），在高风险应用中有潜在误导。
- **实验覆盖有限**：缺乏对更大模型（如 70B 上更多消融）、不同成本设定、跨任务迁移学习的分析；未在代码生成、科学问题等更多推理场景测试。
- **可能的风险**：依赖 RL 训练，策略可能学到捷径而非真正推理；需要任务真实答案作为奖励，无法适用于无 GT 的开放式任务。

（完）
