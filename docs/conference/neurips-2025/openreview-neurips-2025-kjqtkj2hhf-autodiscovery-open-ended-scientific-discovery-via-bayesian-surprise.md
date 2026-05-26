---
title: "AutoDiscovery: Open-ended Scientific Discovery via Bayesian Surprise"
title_zh: AutoDiscovery：通过贝叶斯惊奇进行开放式科学发现
authors: "Dhruv Agarwal, Bodhisattwa Prasad Majumder, Reece Adamson, Megha Chakravorty, Satvika Reddy Gavireddy, Aditya Parashar, Harshit Surana, Bhavana Dalvi Mishra, Andrew McCallum, Ashish Sabharwal, Peter Clark"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=kJqTkj2HhF"
tags: ["query:ad"]
score: 9.0
evidence: 使用贝叶斯惊奇和大语言模型进行自主科学发现
tldr: 自动科学发现面临如何自主选择研究问题的挑战。本文提出AutoDiscovery方法，利用贝叶斯惊奇度量化假设的新颖性，结合大语言模型生成和筛选假设，实现无需人工指定研究问题的开放式科学发现。在多个科学领域实验中，该方法自主发现了具有潜在重要性的新假设，展现了AI驱动科学发现的潜力。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-kjqtkj2hhf/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1439, \"height\": 726, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kjqtkj2hhf/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1447, \"height\": 803, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kjqtkj2hhf/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 714, \"height\": 488, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kjqtkj2hhf/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 795, \"height\": 726, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kjqtkj2hhf/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1563, \"height\": 1160, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kjqtkj2hhf/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1152, \"height\": 568, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kjqtkj2hhf/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1460, \"height\": 818, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kjqtkj2hhf/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1437, \"height\": 418, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-kjqtkj2hhf/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 763, \"height\": 466, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-kjqtkj2hhf/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 745, \"height\": 242, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-kjqtkj2hhf/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1372, \"height\": 261, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-kjqtkj2hhf/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 571, \"height\": 212, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-kjqtkj2hhf/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1067, \"height\": 759, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-kjqtkj2hhf/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1453, \"height\": 584, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-kjqtkj2hhf/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 766, \"height\": 2432, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-kjqtkj2hhf/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1082, \"height\": 166, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-kjqtkj2hhf/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1450, \"height\": 171, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-kjqtkj2hhf/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1442, \"height\": 1192, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-kjqtkj2hhf/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1289, \"height\": 135, \"label\": \"Table\"}]"
motivation: 现有自主科学发现依赖人工指定问题，缺乏开放式探索能力。
method: 利用贝叶斯惊奇度作为探索驱动力，结合大语言模型生成假设，并基于惊奇度选择最有前景的假设进行验证。
result: 在化学和物理学数据集上，AutoDiscovery自主发现了多个新颖且合理的科学假设。
conclusion: 该方法开启了AI系统主动、开放式科学发现的新途径。
---

## Abstract
The promise of autonomous scientific discovery (ASD) hinges not only on answering questions, but also on knowing which questions to ask. Most recent works in ASD explore the use of large language models (LLMs) in goal-driven settings, relying on human-specified research questions to guide hypothesis generation. However, scientific discovery may be accelerated further by allowing the AI system to drive exploration by its own criteria. The few existing approaches in open-ended ASD select hypotheses based on diversity heuristics or subjective proxies for human interestingness, but the former struggles to meaningfully navigate the typically vast hypothesis space, and the latter suffers from imprecise definitions. This paper presents AutoDiscovery—a method for open-ended ASD that instead drives scientific exploration using Bayesian surprise. Here, we quantify the epistemic shift from the LLM’s prior beliefs about a hypothesis to its posterior beliefs after gathering experimental results. To efficiently explore the space of nested hypotheses, our method employs a Monte Carlo tree search (MCTS) strategy with progressive widening using surprisal as the reward function. We evaluate AutoDiscovery in the setting of data-driven discovery across 21 real-world datasets spanning domains such as biology, economics, finance, and behavioral science. Our results demonstrate that under a fixed budget, AutoDiscovery substantially outperforms competitors by producing 5-29% more discoveries deemed surprising by the LLM. Our human evaluation further reveals that two-thirds of discoveries made by our system are surprising to domain experts as well, suggesting this is an important step towards building open-ended ASD systems.

---

## 论文详细总结（自动生成）

# 论文总结：AutoDiscovery：通过贝叶斯惊奇进行开放式科学发现

## 1. 核心问题与整体含义（研究动机和背景）

- **问题**：当前自主科学发现（ASD）系统主要依赖人类指定的研究问题（目标驱动），缺乏开放式探索——即系统自主决定“该问什么问题”。现有开放式方法要么基于多样性启发式（难以有效导航巨大假设空间），要么基于主观的人类趣味性代理（定义不精确、不可靠）。
- **动机**：希望通过一种原则性度量——贝叶斯惊奇（Bayesian surprise）——来量化实验证据对LLM信念的冲击，从而驱动系统自主寻找新颖、有趣的假设，无需人工指定研究方向。
- **意义**：迈向真正开放式的AI科学发现，能够主动扩展知识边界，并可能加速科学进程。

## 2. 方法论：核心思想、关键技术细节

### 2.1 核心思想
- **贝叶斯惊奇（Bayesian surprise）**：定义为LLM对某个假设的先验信念分布与后验信念分布之间的KL散度，但仅限于发生方向性信念转变（从支持到不支持或反之）的情况。计算公式：
  - 先验和后验通过Beta-Bernoulli共轭估计：对假设的真假值进行多次LLM采样，统计“真”的次数，构造Beta分布。
  - `BS_shift(H, V_D)` = D_KL(后验 || 先验) 当先验期望与后验期望位于决策阈值δ=0.5两侧且不相等，否则为0。
  - 惊奇（surprisal）为指示函数：`S(H, V_D) = 1[BS_shift > 0]`。

### 2.2 关键技术
- **信念采样**：对每个假设，先让LLM（无实验结果）给出n次布尔判断（先验），再提供实验结果后同样给出n次判断（后验），用频率估计Beta分布。
- **蒙特卡洛树搜索（MCTS） + 渐进扩宽（Progressive Widening）**：
  - 树中每个节点为一个假设，搜索分四步：选择（用UCT平衡探索-利用）、扩展（根据渐进扩宽策略动态添加子节点，LLM基于路径上的历史生成新假设）、执行（验证并计算惊奇）、反向传播（更新惊奇和访问计数）。
  - UCT公式：`UCT(H) = 平均惊奇 + C * sqrt(2 log N(parent) / N(H))`。
- **去重（Deduplication）**：基于LLM的层次凝聚聚类（HAC），使用文本嵌入和LLM判断语义等价性，避免重复假设。

### 2.3 发现代理（Discovery Agent）
- 多智能体架构，包含：假设生成器、实验程序员、代码执行器、分析员、评审员、修订员等，协同完成假设验证。

## 3. 实验设计

### 3.1 数据集与场景
- **21个真实数据集**，来自三个基准：
  - **DiscoveryBench**（5个数据集）：freshwater-fish, nls-bmi, nls-ses, nls-incarceration, requirement-engineering。
  - **BLADE**（15个数据集）：affairs, amtl, boxes, caschools, conversation, crofoot, fertility, fish, hurricane, mortgage, panda_nuts, reading, soccer, teachingratings, toy。
  - **SEA-AD**（1个数据集）：阿尔茨海默病多模态细胞图谱。
- **场景**：数据驱动发现（DDD），输入为数据集和编程环境，无指定研究问题，系统在固定预算（500次验证）内自主探索。

### 3.2 基线方法
- **重复独立采样**（Repeated Sampling）：无上下文的并行假设生成。
- **线性搜索**（Last-K线性采样）：仅基于最近K个假设进行顺序采样。
- **贪婪树搜索**（Greedy）：UCT中探索常数C=0，纯利用。
- **束搜索**（Beam Search）：束宽8，分支因子8，广度优先并剪枝。
- **程序化搜索**（Programmatic Search，附录）：穷举上下文的确定性统计搜索，作为非LLM替代（仅用于对照）。

### 3.3 评价指标
- **主要指标**：在固定预算内发现的惊奇（surprisal）数量。
- **人类评估**：来自STEM硕士/博士的评分，评估假设对人类是否惊奇、有趣、有用。

## 4. 资源与算力
- **论文中未明确说明使用的GPU型号、数量或训练时长**。所有实验基于LLM API调用（GPT-4o和o4-mini），属于推理而非训练。推理使用OpenAI API，无本地GPU训练开销。
- 附录提及平均每个节点/假设耗时75秒，最长600秒，但未统计总计算量。

## 5. 实验数量与充分性
- **主实验**：21个数据集 × 5种搜索方法（MCTS、贪婪、束、重复采样、线性） → 约105组运行（每数据集1次，共21次×5方法=105次）。但需注意有些基线可能重复运行，论文未说明多次运行取均值，图表显示的是单一运行结果（可能未多次重复以给出方差）。
- **消融实验**：替换惊奇奖励为LLM趣味性、LLM实用性、直接LLM惊奇，对比人类惊奇性（4种奖励 × 4个数据集 = 16组）。
- **人类评估**：1620个假设（来自4个数据集×4种奖励的MCTS输出），由3名标注者评分，共涉及500+独特假设。
- **推理模型对比**：用o4-mini替代GPT-4o重复主实验（21个数据集 × 5方法）。
- **验证实验**：采样175个节点验证实验有效性和实现忠实度；120对假设验证去重有效性。
- **评价**：实验覆盖广泛，数据集多样，基线对比全面，消融和人类评估增强了结论可靠性。但缺乏多次重复的统计显著性检验和误差线（除部分图表外）。总体上充分且客观。

## 6. 主要结论与发现
- **AutoDiscovery (MCTS)** 在所有21个数据集上平均比最优基线多发现5-29%的惊奇假设，并且搜索效率随时间衰减最小。
- **贝叶斯惊奇与人类惊奇高度相关**：人类评估中，67%的AutoDiscovery发现的假设对专家也是惊奇的，远超其他自动奖励（直接LLM惊奇仅11%）。
- **不同领域信念转变方向不同**：更多情况下信念从“支持”转向“不支持”（证伪），且证伪的KL散度通常更高。
- **推理模型（o4-mini）**在同样预算下与GPT-4o相比无明显优势，但生成假设更复杂。
- **去重有效性**：HAC方法以90.76%的准确率识别语义重复假设。

## 7. 优点
- **方法创新性**：首次将贝叶斯惊奇形式化地用于驱动开放式科学发现，并设计MCTS搜索框架，结合渐进扩宽解决假设空间爆炸问题。
- **原则性与可解释性**：惊奇度量有信息理论基础，方向性转变避免了假性惊奇。
- **评估全面**：涵盖多领域、多基线、人类验证，且对验证流程进行人工核查（实验有效性98.58%、实现忠实度98.01%）。
- **开源与可复现**：提供GitHub仓库。

## 8. 不足与局限
- **LLM惊奇与人类惊奇的差距**：尽管67%相关，但仍存在33%的偏差，且贝叶斯惊奇仅反映LLM自身信念变化，可能不等同科学前沿。
- **上下文窗口限制**：随着树深度增加，历史上下文过长可能导致性能下降或混乱。
- **生成未基于数据的假设**：LLM可能创建数据集中不存在的变量或分析，产生伪发现，且提示约束不完全有效。
- **计算成本与实时性**：每个假设需要多次LLM调用（信念采样+实验代码），平均75秒/节点，预算500下总时间约10小时，不适合超大规模探索。
- **实验重复性**：未报告多次运行的标准差，结果可能受单次随机过程影响。
- **领域覆盖有限**：主要覆盖社会科学、行为科学、生物医学，缺少物理、化学等需要模拟或实验的科学。
- **安全性**：Agent在涉及种族/性别数据时可能被API安全策略拒绝，有虚假发现风险，需要人类监督。
- **资源与算力未量化**：未提供总API调用次数或费用估算，不利于其他研究者评估开销。

（完）
