---
title: Language Models as Implicit Tree Search
title_zh: 语言模型作为隐式树搜索
authors: "Ziliang Chen, Zhao-Rong Lai, Yufeng Yang, Liangda Fang, ZHANFU YANG, Liang Lin"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=bEqMmGu6qg"
tags: ["query:automatic-discovery"]
score: 5.0
evidence: 隐式树搜索用于语言模型推理，类似于AlphaZero
tldr: 提出一种无强化学习方法，使大模型推理等价于AlphaZero式搜索。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-beqmmgu6qg/fig-001.webp\", \"caption\": \"\", \"page\": 4, \"index\": 1, \"width\": 5956, \"height\": 1960}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-beqmmgu6qg/fig-002.webp\", \"caption\": \"\", \"page\": 7, \"index\": 2, \"width\": 1675, \"height\": 1269}]"
motivation: 直接偏好优化在推理任务上不如强化学习方法，需要提升推理过程。
method: 训练额外的语言模型实现隐式树搜索，无需显式价值网络和奖励模型。
result: 在偏好对齐和推理任务上优于现有DPO变体。
conclusion: 隐式树搜索能提升大模型推理能力，但未直接应用于科学发现。
---

## Abstract
Despite advancing language model (LM) alignment, direct preference optimization (DPO) falls short in LM reasoning with the free lunch from reinforcement learning (RL). As the breakthrough, this work proposes a new RL-free preference optimization method aiming to achieve DPO along with learning another LM, whose response generation policy holds the asymptotic equivalence with AlphaZero-like search, the apex of algorithms for complex reasoning missions like chess Go. While circumventing explicit value and reward modeling, the neural implicit tree search executed by the extra LM remains seeking to equip DPO with reasoning procedure technically akin to AlphaZero. Our experiments demonstrate that our methodology outperforms both regular DPO variants in human preference alignment, and MCTS-based LMs in mathematical reasoning and planning tasks.

---

## 论文详细总结（自动生成）

# 论文结构化解构与深度总结

## 1. 核心问题与整体含义（研究动机与背景）

- **研究背景**：直接偏好优化（DPO）在大语言模型对齐中因无需强化学习（RL）而更高效稳定，但在复杂推理任务（如数学推理、规划）上表现不足。传统方法通常结合蒙特卡洛树搜索（MCTS）和RL的价值函数来提升推理能力，但这与DPO“免RL”的核心优势相冲突。
- **核心问题**：如何在保持DPO免RL特性的同时，让语言模型获得类似AlphaZero式树搜索的推理能力，而不需要显式的价值网络和奖励模型。
- **整体含义**：提出一种新的免RL偏好优化方法——隐式树搜索偏好优化（IT-PO），通过额外学习一个语言模型φ，使其响应生成策略与AlphaZero式MCTS渐近等价，从而在偏好对齐和推理任务上同时超越现有DPO变体和MCTS类方法。

## 2. 方法论：核心思想、关键技术细节

### 核心思想
- 将AlphaZero式树搜索重新解释为一个正则化的随机策略优化问题（源自Grill et al., 2020b），其解即为隐式树搜索（ITS）策略π。
- 该ITS策略π本身不依赖显式的访问计数（visit counts），避免了传统MCTS的冷启动表达性差和稀疏动作改进问题。
- 但π无法直接用于LM，因其每个状态需通过二分搜索求解超参数α，状态空间随token数量指数增长。
- 因此，**训练另一个语言模型φ作为π的通用近似器**，无需二分搜索和显式Q函数，实现端到端推理。

### 关键技术细节
1. **初始化**：同一起始的SFT模型得到三个策略：参考策略π_ref、token选择策略π_θ、ITS近似策略π_φ。
2. **两步训练流程**：
   - 先用cDPO（保守DPO）更新π_θ（冻结π_ref）。
   - 再固定π_θ，用IT-PO损失更新π_φ。
3. **IT-PO损失设计**：
   - **步同步IT-PO（SS-IT-PO）**：用于token级MDP，计算偏好差异U_ss，由三项组成：μ_w、μ_l（来自π_φ的探索项）和δ_θ（来自π_θ与π_ref的比率）。损失函数为cDPO形式的sigmod交叉熵。
   - **步异步IT-PO（SA-IT-PO）**：用于句子级MDP（更大动作空间），将token级策略分解为句子级策略，类似地计算U_sa。
4. **梯度分析**：IT-PO梯度中包含π_θ/π_φ的比例，实现自适应“保守-激进”更新，并从偏好/非偏好节点中采样更多样化的上下文。
5. **自改进训练与解码**：
   - **偏好策略增强**：用π_φ生成多条响应，基于U_ss或U_sa排序构造增强数据集D⁺，与原始D一起再训练π_θ。
   - **ITS-α解码**：使用π_φ的指数版本作为随机树搜索策略。
   - **ITS-rollout解码**：对未见过状态，通过少量元更新（式20）调整π_φ后使用ITS-α。
   - **与GRPO的联系**：提出了基于隐式优势函数的BFS解码，与Group Relative Policy Optimization（Shao et al., 2024）相关。

## 3. 实验设计

### 数据集与场景
- **人类偏好对齐**：Anthropic HH数据集（170k对话），评估准确率、多样性熵、GPT-4胜率。
- **数学推理**：GSM8K（7.5k训练/1.3k测试）、Game24（1k训练/0.5k测试）——句子级树搜索。
- **高难度数学推理**：MATH数据集（使用Qwen1.5-32B为基础模型）。
- **其他推理**：ProofWriter（演绎逻辑推理）、Chess Endgame（多轮决策）。

### Benchmark与对比方法
- **偏好对齐**：DPO、RTO、TDPO1、TDPO2。
- **推理任务**：CoT-greedy、BFS-V、MCTS-α、MCTS-rollout、CoT-SC-MAJ、CoT-SC-ORM、BFS-V-ORM、MCTS-ORM等（均来自Feng et al., 2023）。
- **自对比**：IT-PO θ、IT-PO φ、ITS-α、ITS-rollout。

### 评价指标
- 准确率、多样性熵（token级）、GPT-4胜率（偏好对齐）。
- Path@1、Equal-Token（数学、规划、逻辑、棋类）。

## 4. 资源与算力

- **未明确说明**：论文中未提及GPU型号、数量、训练时长等具体硬件信息。仅提及“使用LLaMA-2-7B、Qwen1.5-32B、LLaMA3-8B等基础模型”，但未给出训练所需的计算资源细节。这可能使得复现成本难以预估。

## 5. 实验数量与充分性

### 实验数量
- **核心实验**：在6个数据集（HH、GSM8K、Game24、MATH、ProofWriter、Chess Endgame）上进行，覆盖偏好对齐和推理两类任务。
- **消融实验**：
  - 不同温度下的胜率（图2(a)）。
  - 交替策略蒸馏轮次的影响（图2(b)）。
  - 不同树宽/节点规模的Game24性能（表3）。
  - LMφ规模替换（Qwen1.5-32B vs LLaMA3-8B）的MATH结果（表4）。
  - ϵ不同取值对GSM8K的影响（附录提及）。
- **总实验组数**：约20-25组主要结果，加上附录中的额外推理任务。

### 充分性与公平性
- **充分**：覆盖主流DPO变体和MCTS基线，设置单路径（Path@1）和等计算量（Equal-Token）两种对比。在多个推理任务上均展示一致优势。
- **公平性**：与基线使用相同基础模型、相同搜索参数（如树宽、深度）进行控制变量。但未对比基于RL的RLHF方法（论文目标即免RL），这合理。
- **潜在偏差**：所有基线均来自先前已发表工作，复现时可能存在实现差异；胜率评估依赖GPT-4，可能引入额外偏好噪声。

## 6. 论文的主要结论与发现

1. **方法有效性**：IT-PO同时实现了：
   - 在Anthropic HH上，IT-PO φ的准确率（69.12%）和多样性熵（5.315）均超过所有DPO变体（最优TDPO2为67.33%/4.915）。
   - 在GSM8K Path@1上，ITS-α/ITS-rollout（53.2%/51.6%）优于MCTS-α（51.9%）和BFS-V（52.5%）。
   - 在Game24上，ITS-rollout（73.2%）优于MCTS-rollout（71.3%），且随树宽增加优势更大。
   - 在MATH上，IT-PO（φ=Qwen-32B）的ITS-α/rollout（39.8%/40.2%）大幅优于MCTS（36.0%/36.7%）。
2. **免RL的MCTS等价性**：通过LMs近似隐式树搜索，可以在不学习价值函数的情况下获得AlphaZero式搜索的益处。
3. **自改进机制**：交替训练π_θ和π_φ能显著提升胜率（图2(b)），梯度分析表明该机制鼓励从非偏好节点进行更多样化的探索。
4. **轻量φ可行性**：使用更小模型（LLaMA3-8B）作为φ仍能提升MATH性能，表明方法可扩展。

## 7. 优点

- **理论创新**：首次将AlphaZero式MCTS转化为可被神经LM近似的随机策略，并给出渐近等价性证明。
- **实用性强**：完全免RL，无需价值网络、奖励模型、二分搜索，训练稳定。
- **泛化能力**：在多种不同性质任务（对话对齐、数学推理、逻辑推理、规划）上均优于或持平最强基线。
- **自改进框架**：设计了交替蒸馏和偏好增强机制，形成了自我强化的循环。
- **可扩展性**：LMφ可使用较小模型，减少开销。
- **解码策略**：ITS-α和ITS-rollout直接利用π_φ进行推理，无需在线MCTS模拟，效率更高。

## 8. 不足与局限

- **计算资源未明确**：缺乏对GPU型号、训练时间等信息的报告，影响可复现性。
- **额外LM开销**：需要同时维护两个LM（θ和φ），训练和推理内存/计算成本约为标准DPO的2倍。
- **数学推理天花板**：在MATH上尽管优于MCTS基线，但整体分数仍较低（40%左右），离SOTA（如使用过程奖励模型的DeepSeekMath）有差距。
- **任务覆盖有限**：未在更广泛的下游应用（如代码生成、工具使用）上验证。
- **依赖GPT-4评估**：胜率评估可能受GPT-4自身偏好影响，引入评估偏差。
- **与GRPO的联系未深入探索**：提出的与GRPO的关联仅停留在分析层面，未做实验验证。
- **LMs近似误差**：π_φ对π的近似存在理论边界，实际训练中如何保证鲁棒性未充分讨论。
- **长序列推理**：在Chess Endgame上表现优秀，但未测试极长序列（如多步对话）中的效果。

（完）
