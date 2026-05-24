---
title: "AutoDiscovery: Open-ended Scientific Discovery via Bayesian Surprise"
title_zh: "AutoDiscovery: 基于贝叶斯惊喜的开放式科学发现"
authors: "Dhruv Agarwal, Bodhisattwa Prasad Majumder, Reece Adamson, Megha Chakravorty, Satvika Reddy Gavireddy, Aditya Parashar, Harshit Surana, Bhavana Dalvi Mishra, Andrew McCallum, Ashish Sabharwal, Peter Clark"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=kJqTkj2HhF"
tags: ["query:ad"]
score: 9.0
evidence: 基于LLM的开放式科学发现，使用贝叶斯惊喜
tldr: 现有自动科学发现方法多依赖人类指定研究问题，限制了探索的开放性。本文提出AutoDiscovery，利用大语言模型生成假设，并基于贝叶斯惊喜度量假设的新颖性和信息量，实现开放式自驱动探索。在多个科学领域的实验表明，AutoDiscovery能发现有意义且新颖的科学假设，超越基于多样性的启发式方法。该方法为自主科学发现提供了全新范式，有望加速科研进程。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-kjqtkj2hhf/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 856, \"height\": 856}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kjqtkj2hhf/fig-002.webp\", \"caption\": \"\", \"page\": 2, \"index\": 2, \"width\": 1600, \"height\": 1600}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kjqtkj2hhf/fig-003.webp\", \"caption\": \"\", \"page\": 2, \"index\": 3, \"width\": 713, \"height\": 544}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kjqtkj2hhf/fig-004.webp\", \"caption\": \"\", \"page\": 2, \"index\": 4, \"width\": 713, \"height\": 544}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kjqtkj2hhf/fig-005.webp\", \"caption\": \"\", \"page\": 2, \"index\": 5, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kjqtkj2hhf/fig-006.webp\", \"caption\": \"\", \"page\": 2, \"index\": 6, \"width\": 2560, \"height\": 1536}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kjqtkj2hhf/fig-007.webp\", \"caption\": \"\", \"page\": 2, \"index\": 7, \"width\": 2560, \"height\": 1536}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kjqtkj2hhf/fig-008.webp\", \"caption\": \"\", \"page\": 21, \"index\": 8, \"width\": 5228, \"height\": 1624}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kjqtkj2hhf/fig-009.webp\", \"caption\": \"\", \"page\": 22, \"index\": 9, \"width\": 3840, \"height\": 2852}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kjqtkj2hhf/fig-010.webp\", \"caption\": \"\", \"page\": 24, \"index\": 10, \"width\": 3002, \"height\": 844}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kjqtkj2hhf/fig-011.webp\", \"caption\": \"\", \"page\": 24, \"index\": 11, \"width\": 3452, \"height\": 1930}]"
motivation: 现有自动科学发现方法依赖人类指定问题，限制了探索开放性，且多样性启发式难以有效导航巨大假设空间。
method: 利用LLM生成假设，通过贝叶斯惊喜量化假设的新颖性与信息量，驱动开放式自驱动探索。
result: 在多个科学领域，AutoDiscovery发现了有意义的、新颖的假设，优于基于多样性的基线方法。
conclusion: AutoDiscovery实现了真正开放式的自动科学发现，展示了LLM与贝叶斯方法结合的巨大潜力。
---

## Abstract
The promise of autonomous scientific discovery (ASD) hinges not only on answering questions, but also on knowing which questions to ask. Most recent works in ASD explore the use of large language models (LLMs) in goal-driven settings, relying on human-specified research questions to guide hypothesis generation. However, scientific discovery may be accelerated further by allowing the AI system to drive exploration by its own criteria. The few existing approaches in open-ended ASD select hypotheses based on diversity heuristics or subjective proxies for human interestingness, but the former struggles to meaningfully navigate the typically vast hypothesis space, and the latter suffers from imprecise definitions. This paper presents AutoDiscovery—a method for open-ended ASD that instead drives scientific exploration using Bayesian surprise. Here, we quantify the epistemic shift from the LLM’s prior beliefs about a hypothesis to its posterior beliefs after gathering experimental results. To efficiently explore the space of nested hypotheses, our method employs a Monte Carlo tree search (MCTS) strategy with progressive widening using surprisal as the reward function. We evaluate AutoDiscovery in the setting of data-driven discovery across 21 real-world datasets spanning domains such as biology, economics, finance, and behavioral science. Our results demonstrate that under a fixed budget, AutoDiscovery substantially outperforms competitors by producing 5-29% more discoveries deemed surprising by the LLM. Our human evaluation further reveals that two-thirds of discoveries made by our system are surprising to domain experts as well, suggesting this is an important step towards building open-ended ASD systems.

---

## 论文详细总结（自动生成）

# AutoDiscovery: 基于贝叶斯惊喜的开放式科学发现（论文总结）

## 1. 核心问题与整体含义（研究动机与背景）

- **现有局限**：当前自主科学发现（ASD）大多基于“目标驱动”模式，即需要人类指定研究问题（research question），LLM 仅在此问题内生成和验证假设。这种方法限制了 AI 系统的探索自由度。少有的开放式 ASD 工作依赖多样性启发式或主观“趣味性”代理指标，但多样性难以有效导航巨大假设空间，趣味性定义模糊且人类评审分歧大。
- **研究目标**：本文旨在构建一种**完全开放式**的 ASD 系统，使 AI 能自主决定探索哪些假设，并用一个**形式化、可自动计算的指标**（贝叶斯惊喜）来指导搜索，从而在固定预算下发现更多新颖且富有信息量的科学假设。

## 2. 方法论

### 2.1 核心思想
- **贝叶斯惊喜（Bayesian Surprise）**：一种度量观测数据前后信念变化程度的指标。本文将其应用于假设验证：对于假设 \(H\)，LLM 先验信念为 \(P(\theta_H)\)（\(\theta_H\) 表示假设为真的概率），在观察到实验证据（即验证过程 \(V_D(H)\)）后得到后验 \(P(\theta_H|V_D)\)，贝叶斯惊喜定义为后验与先验的 KL 散度 \(D_{KL}(P(\theta_H|V_D) \parallel P(\theta_H))\)。
- **定向信念转变**：进一步提出“有向贝叶斯惊喜”（\(BS_{\text{shift}}\)），仅当期望信念跨过决策阈值（例如 0.5）且发生方向性变化时才计入惊喜。惊喜指示函数 \(S(H, V_D)\) 表示是否发生了有向惊喜。

### 2.2 关键步骤
- **信念启发**：通过多次（n 次）向 LLM 询问“该假设是否为真？”（先验：仅给假设；后验：附加验证结果），获得布尔响应频率 \(k_{\text{prior}}, k_{\text{post}}\)，利用 Beta-Bernoulli 共轭，用 Beta(1+\(k_{\text{prior}}\), 1+\(n-k_{\text{prior}}\)) 和 Beta(1+\(k_{\text{prior}}+k_{\text{post}}\), 1+\(2n-k_{\text{prior}}-k_{\text{post}}\)) 分别估计先验与后验分布。
- **搜索策略：MCTS with Progressive Widening**：将假设空间构建为树，每个节点代表一个假设，根节点为空。搜索循环包含四个阶段：
    1. **选择（Selection）**：使用 UCT 公式 \(UCT(H) = \frac{\sum_{h \in \text{subtree}(H)} S(h, V_D(h))}{N(H)} + C \sqrt{\frac{2 \log N(H_{\text{parent}})}{N(H)}}\) 平衡探索与利用。
    2. **扩展（Expansion）**：当节点孩子数小于 \(k N(H)^\alpha\) 时（渐进加宽），基于根到父节点的路径（上下文）调用 LLM 生成一个新假设；否则选择 UCT 最大的孩子继续向下选择。
    3. **执行（Execution）**：对采样出的假设，通过多智能体框架（生成实验计划、写代码执行、分析结果）执行验证，并计算惊喜 \(S(H, V_D)\)。
    4. **反向传播（Backpropagation）**：将惊喜分数和访问计数沿路径向上更新。
- **去重（Deduplication）**：搜索结束后，使用 LLM 引导的层次凝聚聚类（HAC）合并语义等价的假设，得到唯一假设集。

### 2.3 发现智能体架构
- 使用多智能体架构（多轮对话），包括假设生成器、实验程序员、代码执行器、实验分析师、实验评审员、实验修订员等，由有限状态机控制流程，协作完成假设验证。

## 3. 实验设计

### 3.1 数据集
- 共 21 个真实数据集，来自：
    - **DiscoveryBench**（5 个子数据集：freshwater-fish、nls-bmi、nls-ses、nls-incarceration、requirement-engineering）
    - **BLADE**（全部 15 个数据集：affairs、amtl、boxes、caschools、conversation、crofoot、fertility、fish、hurricane、mortgage、panda_nuts、reading、soccer、teachingratings、toy）
    - **SEA-AD**（阿尔茨海默病多模态细胞图谱的供体级元数据）

### 3.2 基准方法（Baselines）
对比方法均在相同固定预算（500 次假设验证）下运行，使用相同的发现智能体（GPT-4o）：
- **Repeated Sampling**：独立重复采样，无上下文。
- **Linear Search**：仅使用最近 K 个节点作为上下文，形成单一路径。
- **Greedy Tree Search**：MCTS 变体，探索常数 \(C=0\)，只利用。
- **Beam Search**：每层保留 top-b 节点（宽度 8，分支因子 8）。
- **AutoDiscovery (MCTS)**：本文方法，使用贝叶斯惊喜作为奖励，渐进加宽。

### 3.3 评估指标
- **主要指标**：固定预算下发现的**惊喜假设数量**（LLM 认为意外的假设，即贝叶斯惊喜>0）。
- **人类评估**：招募 3 位 STEM 硕士/博士对 500+ 假设进行标注，评估人类惊喜、趣味性和实用性；计算与自动惊喜的相关性。
- **消融实验**：比较不同自动奖励函数（直接 LLM 惊喜、LLM 趣味性、LLM 实用性）在 MCTS 中的表现。
- **验证实验**：手工标注 175 个节点的实验有效性、代码实现忠实度和去重准确性。

## 4. 资源与算力

- 论文**未明确说明**所使用的 GPU 型号、数量或训练时长。所有 LLM 推理使用 OpenAI API（GPT-4o 和 o4-mini），未提及本地部署或训练过程。因此，算力消耗主要取决于 API 调用次数：每次假设验证包含多次 LLM 调用（智能体多轮对话 + 信念采样），平均每个节点约 75 秒，总预算 500 节点即约 10.4 小时（单数据集）。21 个数据集 × 5 种方法 × 2 种模型（?）≈ 总共数千小时 API 时间，但论文中仅报告 GPT-4o 主实验，未给出总计算量估算。

## 5. 实验数量与充分性

- **主实验**：21 个数据集 × 5 种方法 = 105 个独立运行（每个预算 500），结果平均报告，并附误差条（图 2）。MCTS 在 17/21 数据集上最优，结果具有统计显著性。
- **消融实验**：4 种自动奖励函数在 4 个数据集上运行，人类标注 1,620 个假设。
- **人类评估**：500+ 假设，3 位专家，覆盖多种 familiarity 水平，计算了置信区间（bootstrap）和内部协议。
- **验证实验**：175 个节点 × 2 位标注者，评估实验/代码有效性；120 对假设评估去重准确性。
- **额外实验**：使用推理模型 o4-mini 重复主实验（图 8-9）。
- **公平性**：所有方法共享相同智能体、相同预算、相同奖励函数（惊喜），并进行了去重后统计，对比公平。

**充分性评价**：实验设计全面，包含多领域大规模数据集、多种对比方法、消融和人工验证，统计可靠。但未报告多次运行的标准差（仅图中有误差条），且仅使用 GPT-4o 和 o4-mini 两种 LLM，可能受限于模型选择。

## 6. 主要结论与发现

1. **AutoDiscovery 在搜索效率上显著优于所有基线**，在 500 预算下比最佳基线（Beam Search）多发现 5-29% 的 LLM 惊喜假设（图 2a）。
2. **MCTS 的搜索效率下降最慢**，表明其能持续发现惊喜，适合更大规模预算（图 2b）。
3. **贝叶斯惊喜与人类惊喜高度相关**（67% 的一致性），远优于其他自动奖励（11-21%），证明其作为开放发现指导信号的有效性（表 2）。
4. **不同领域信念转变方向不同**：大部分惊喜来源于先验认为为真、实验后变为假（图 3），且反证时的 KL 散度往往更大。
5. **发现智能体的实验生成和代码实现具有高可靠性**（>98% 有效性和忠实度），去重准确性约 91%。
6. **推理模型（o4-mini）可进一步提升性能**，但 MCTS 与贪婪搜索的差距缩小，可能因推理模型本身更少产生重复。

## 7. 优点

- **创新性**：首次将贝叶斯惊喜形式化引入开放式科学发现，并提供自动计算方法，解决了“如何自主选择探索方向”这一核心问题。
- **鲁棒性**：通过 MCTS 与渐进加宽有效平衡探索-利用，避免陷入局部最优；去重策略保证了指标的真实性。
- **全面性**：覆盖 21 个跨领域数据集，人类评估验证了与实际科学惊喜的一致性，并系统对比了多种自动奖励。
- **可靠性验证**：手工标注实验/代码/去重，证明了智能体工作流的可靠性，减少了“垃圾进垃圾出”的担忧。
- **开源可复现**：提供 GitHub 代码仓库。

## 8. 不足与局限

- **LLM 惊喜作为代理**：尽管与人类惊喜有 67% 一致性，但仍存在差距；未来应引入文献引用/外部知识来更好地模拟人类专家。
- **算力和成本高**：每次假设验证需要多轮 LLM 调用和代码执行，平均 75 秒/节点，21 个数据集主实验即需大量 API 预算。未被提及的算力资源（可能依赖 OpenAI）也限制了可扩展性。
- **模型单一**：仅测试了 GPT-4o 和 o4-mini，未验证其他模型（如开源 LLaMA）的表现，可能受限于模型知识边界。
- **实验场景局限**：仅在数据驱动发现（Data-Driven Discovery）上评估，未覆盖文献驱动或真实湿实验场景。程序化搜索（programmatic search）作为潜在加速方法仅初步提及。
- **上下文窗口限制**：长路径搜索可能导致上下文溢出或智能体行为异常（附录提及）。
- **未报告多次运行统计**：图/表仅展示单次或平均结果，缺少完整的多重随机种子分析（虽有误差条但未详细说明）。
- **去重准确性约 91%** 虽高，但仍有误判风险，可能影响最终惊喜数量统计。

（完）
