---
title: Neural Genetic Search in Discrete Spaces
title_zh: 离散空间中的神经遗传搜索
authors: "Hyeonah Kim, Sanghyeok Choi, Jiwoo Son, Jinkyoo Park, Changhyun Kwon"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=u8kFBce69J"
tags: ["query:automatic-discovery"]
score: 9.0
evidence: 结合遗传算法和神经生成模型进行搜索
tldr: 提出神经遗传搜索，将遗传算法融入深度生成模型，实现跨域高效搜索。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 改善深度生成模型在测试时的搜索效率。
method: 将遗传算法的交叉操作定义为父代条件生成，利用训练好的生成模型生成后代。
result: 在路径规划、对抗提示生成和分子设计三个领域验证了方法的有效性。
conclusion: 神经遗传搜索是一种通用且易实现的搜索算法，可提升深度生成模型性能。
---

## Abstract
Effective search methods are crucial for improving the performance of deep generative models at test time. In this paper, we introduce a novel test-time search method, Neural Genetic Search (NGS), which incorporates the evolutionary mechanism of genetic algorithms into the generation procedure of deep models. The core idea behind NGS is its crossover, which is defined as parent-conditioned generation using trained generative models. This approach offers a versatile and easy-to-implement search algorithm for deep generative models. We demonstrate the effectiveness and flexibility of NGS through experiments across three distinct domains: routing problems, adversarial prompt generation for language models, and molecular design.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：如何提升深度生成模型在测试时的搜索效率，尤其是在离散空间中寻找高质量解。
- **背景**：传统的遗传算法（GA）在离散搜索空间中表现出色，但需要针对具体问题设计算子（交叉、变异），难以通用。同时，深度生成模型（如基于序列生成的模型）虽有强大的生成能力，但单次采样或简单的解码策略（如贪心、束搜索）往往无法充分探索解空间。
- **动机**：将遗传算法的种群进化机制融入深度生成模型的生成过程，提出一种通用、易实现的测试时搜索算法，既保留深度模型的生成能⼒，又利用GA的迭代搜索优势。

## 2. 方法论：核心思想、关键技术细节、算法流程

### 核心思想
- **神经遗传搜索（NGS）**：在预训练好的序列生成模型（策略 \(p_{\theta^*}\)）基础上，通过定义一种**问题无关的交叉和变异算子**，使模型在生成序列时受所选父代染色体（token集）的约束，从而迭代进化种群，逐步提升解的质量。

### 关键技术细节
1. **交叉（Crossover）**：定义为**父条件生成**。给定两个父代序列 \(s_1, s_2\)，将模型的词汇表限制为两个父代中出现过的 token 集合 \(V_{s_1,s_2}\)，即每一步只能从该集合中采样，表达式为：
   \[
   p_{\text{cross}}^{(s_1,s_2)}(s_t | s_{<t}) \propto I(s_t \in V_{s_1,s_2}) \cdot p_{\theta^*}(s_t | s_{<t})
   \]
   这样生成的新序列自动继承父代的“遗传物质”。

2. **变异（Mutation）**：分为两种情况：
   - **约束强制变异**：当所有父代token都无法满足当前约束（如路由中的节点重复）时，自动取消限制，允许模型自由采样。
   - **随机变异**：以概率 \(\mu\) 随机取消限制，增加多样性。
   最终采样分布为：
   \[
   p_{\text{NGS}}^{(s_1,s_2,\mu)}(s_t | s_{<t}) = M \cdot p_{\theta^*}(s_t | s_{<t}) + (1-M) \cdot p_{\text{cross}}^{(s_1,s_2)}(s_t | s_{<t})
   \]
   其中 \(M\) 由约束条件和伯努利采样决定。

3. **选择与替换**：采用基于排名的优先级采样（rank-based prioritized sampling），以平衡精英主义和探索性。排名由奖励函数（或加权的奖励与新颖性）决定。

4. **算法流程**（Algorithm 1）：
   - 初始化种群 \(P\)：用预训练策略采样 \(N_{\text{pop}}\) 个序列。
   - 迭代 \(N_{\text{iter}}\) 代：
     - 对 \(N_{\text{off}}\) 次：
       - 从 \(P\) 中按排名概率选择两个父代。
       - 用式 (4) 生成后代，并评估奖励。
     - 将后代加入集合 \(O\)，然后从 \(P \cup O\) 中按排名概率采样 \(N_{\text{pop}}\) 个个体替换种群。

### 关键特点
- 问题无关：交叉和变异只依赖于父代的token集合，不需要领域知识。
- 兼容任意序列生成模型（自动回归或热图式），仅需模型支持分步条件概率。

## 3. 实验设计：数据集/场景、benchmark、对比方法

### 三个实验场景

| 场景 | 任务 | 数据集/生成方式 | Benchmark | 对比方法 |
|------|------|----------------|-----------|----------|
| **路由问题** | TSP, CVRP, PCTSP, OP（节点规模200/500/1000） | 使用GNN生成边热图作为策略（非自回归）；针对真实实例TSPLib/CVRPLib也做了测试 | 最优解：Concorde (TSP), PyVRP (CVRP), LKH3 | 同策略下的Sampling (best-of-N)、Beam Search、MCTS、ACO；以及长预算版本（Sampling long, ACO long, MCTS long） |
| **红队语言模型** | 生成对抗性提示使目标LLM产生有毒输出 | 攻击者模型：GPT-2微调（GFlowNets + MLE）；受害者：Llama-3.2-3B-Instruct等 | 平均毒性（分类器概率） + 多样性（余弦距离） | 常规解码：Sampling、温度采样、top-k、top-p、Beam Search；以及跨模型迁移测试（Llama-3.1-8B, Llama-3.3-70B, Gemma2, Qwen2.5, phi-4） |
| **分子设计** | 优化10个分子属性（单属性/QED、多属性MPO、结构相似跳转等） | SMILES表示，LSTM策略（先预训练后GFlowNets微调），总评价次数限制10,000次 | 平均Top-10分数 | 专门GA方法：Graph GA, SMILES GA, STONED, SynNet |

### 对比公平性
- 路由问题中所有搜索方法均使用**同一预训练神经网络**，仅搜索过程不同。
- 分子设计中NGS采用与基线相同的评价预算（10K次评估），其中8K用于训练，2K用于NGS搜索。
- 红队实验中，攻击者模型微调后，解码策略比较是在相同模型下进行的。

## 4. 资源与算力

- **未明确列出具体训练资源**：论文仅在附录B中说明使用了“A server with two sockets of AMD EPYC 7542 32-Core Processor, and a single NVIDIA RTX A6000”用于路由和分子设计实验；红队语言模型实验使用了“a cloud server with four NVIDIA A100 HBM2e 80GB PCIe gpus”。
- **训练时长**：未报告具体小时数，但提到每个路由问题训练采用Kim et al. (2025)的方法，分子设计使用8K评价步数进行GFlowNets训练。红队微调采用Lee et al. (2024a)的两阶段流程。
- **结论**：论文未系统性分析训练或推理的计算开销，仅提及NGS的额外时间主要来自种群维护和多次生成（附D中有简单复杂度讨论）。

## 5. 实验数量与充分性

- **实验数量丰富**：路由问题覆盖4个经典变体、3种节点规模（200/500/1000），并包含真实世界实例（TSPLib和CVRPLib）的迁移测试；红队任务使用6种不同受害者模型评估迁移能力；分子设计涵盖10个不同目标（单属性、多属性、结构优化）。
- **消融与敏感性分析**：路由问题中给出了种群大小、后代数量、变异率对性能的影响（附录E.3，图6）。红队任务中未做明确消融，但比较了多种解码超参数。分子设计中比较了“全部训练” vs “训练+ NGS”（附录G，表8）。
- **公平性**：路由问题中所有对比方法使用相同种子和预训练模型；红队任务中攻击模型相同，仅改变解码方式；分子设计中评价预算相等。但某些场景（如路由中的ACO）可能存在超参数未完全对齐的风险（如蚂蚁数与后代数设为相同，但迭代次数可能不同）。整体实验设计较为公平。

## 6. 主要结论与发现

1. **路由问题**：NGS在所有问题（TSP, CVRP, PCTSP, OP）和所有节点规模上**显著优于**Sampling、Beam Search、MCTS、ACO等基线，甚至在预算减少10倍时仍接近或超过基线的长预算结果。在真实世界实例上也保持了领先。
2. **红队语言模型**：NGS在源模型上能**平衡毒性和多样性**（与温度采样、top-k等方法相当），但在跨模型迁移时**毒性显著更高且更鲁棒**，说明种群迭代自适应搜索有助于应对分布偏移。
3. **分子设计**：NGS在10个任务中**8个取得最优**，平均Top-10分数0.835，超过所有传统GA方法。即使只用2K评价进行搜索，也比全训练（8K训练+0搜索）略优，证明NGS可作为有效的替代GA。
4. **通用性**：NGS可同时用于非自回归（热图）和自回归（LEHD）策略，且仅需少量超参数调整即可跨域工作。

## 7. 优点

- **问题无关性**：交叉和变异算子无需领域知识，只需预训练模型是顺序生成即可，易于迁移。
- **简单易实现**：仅需在原有生成过程中增加种群和父条件掩码，工程成本低。
- **高效且鲁棒**：在相同预算下性能优于传统搜索（如ACO、采样），对分布偏移更具鲁棒性（红队迁移实验）。
- **双重视角新颖性**：既可作为深度模型的解码策略，也可作为自动化的遗传算法（用神经网络学习算子）。
- **实验范围广泛**：覆盖三个完全不同领域，且每种场景都提供了充分的对比和迁移测试，增强了方法可信度。

## 8. 不足与局限

- **依赖预训练策略质量**：若策略分布中不包含高质量解，NGS的提升有限。论文提及可结合微调，但未实验验证。
- **额外超参数**：引入了种群大小、后代数量、变异率、排名权重等，虽展示了一定鲁棒性，但实践中仍需调整。
- **理论分析缺失**：缺乏对生成分布或收敛性的理论保证（深度模型+GA本身难分析）。
- **计算开销不透明**：未给出完整的训练资源和时间对比，仅附简单复杂度分析，实践中若批处理大小小于后代数量会显著增加迭代次数。
- **部分实验细节不足**：例如红队任务中多样性指标的具体计算公式、分子设计中“训练+ NGS”的搜索步数是否最优等未深入探讨。
- **局限性声明**：论文作者明确列出上述局限，并指出未来可扩展至模型优化、保守代理等方向。

（完）
