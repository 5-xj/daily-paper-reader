---
title: Neural Genetic Search in Discrete Spaces
title_zh: 离散空间中的神经遗传搜索
authors: "Hyeonah Kim, Sanghyeok Choi, Jiwoo Son, Jinkyoo Park, Changhyun Kwon"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=u8kFBce69J"
tags: ["query:automatic-discovery"]
score: 7.0
evidence: 进化搜索与生成模型集成用于发现
tldr: 神经遗传搜索将遗传算法与深度生成模型结合，实现灵活测试时搜索。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 现有的生成模型在测试时搜索方法效率低，需要更有效的搜索策略。
method: 提出神经遗传搜索（NGS），将遗传算法的交叉操作定义为由生成模型条件生成候选解。
result: 在路由、对抗提示生成和分子设计三个领域验证了有效性和灵活性。
conclusion: NGS是一种通用且易实现的搜索算法，可提升深度生成模型性能。
---

## Abstract
Effective search methods are crucial for improving the performance of deep generative models at test time. In this paper, we introduce a novel test-time search method, Neural Genetic Search (NGS), which incorporates the evolutionary mechanism of genetic algorithms into the generation procedure of deep models. The core idea behind NGS is its crossover, which is defined as parent-conditioned generation using trained generative models. This approach offers a versatile and easy-to-implement search algorithm for deep generative models. We demonstrate the effectiveness and flexibility of NGS through experiments across three distinct domains: routing problems, adversarial prompt generation for language models, and molecular design.

---

## 论文详细总结（自动生成）

# 中文详细总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：深度生成模型在测试时（test-time）的搜索方法对于提升性能至关重要，但现有方法（如简单采样、束搜索）在离散空间中的搜索效率有限。
- **核心问题**：如何将遗传算法（GA）强大的种群搜索能力融入深度生成模型的生成过程，同时避免传统GA需要针对具体问题设计交叉/变异算子的高成本？
- **整体含义**：论文提出了一种新颖的测试时搜索方法——神经遗传搜索（NGS），它通过**将遗传算法的交叉操作定义为“父本条件生成”**（利用预训练的生成模型限制词汇表为父本所用token），并结合突变操作，实现了问题无关、易于集成的搜索算法，适用于多种离散空间中的序列生成任务。

## 2. 方法论：核心思想、关键技术细节

- **核心思想**：NGS将GA的进化机制（选择、交叉、变异、替换）嵌入到深度生成模型的序列生成过程中，利用预训练策略（如GNN、LSTM、语言模型）提供条件概率分布，通过**词汇表限制**实现交叉，通过**解除限制**实现突变。
- **关键技术细节**：
  - **交叉（Crossover）**：给定两个父本序列 (s1, s2)，策略生成子代时，将词汇表限制为两个父本中出现的所有token的并集，即 `V_{s1,s2} = {s1^1,...,s1^T} ∪ {s2^1,...,s2^T}`。生成时按 `p_cross(st|s<t) ∝ I(st∈V_{s1,s2}) p_θ*(st|s<t)` 采样。
  - **突变（Mutation）**：当限制词汇表中无合法token（强制性突变）或以概率μ随机触发（随机突变）时，取消词汇表限制，恢复为原始策略分布 `p_θ*`。
  - **选择与替换**：基于排名的优先采样（rank-based prioritized sampling）进行精英选择，兼顾随机性与贪婪性。
  - **算法流程**：①初始化种群（采样Npop个序列）；②迭代Niter次：从种群中选择父本对，生成Noff个子代，评估奖励，替换种群中较低奖励的个体。
- **公式与算法**：详细流程见Algorithm 1，涉及概率公式(1)-(4)以及交叉/突变的组合概率 `p_NGS`。

## 3. 实验设计

- **实验场景与数据集**：
  - **路由问题**：TSP、CVRP、PCTSP、OP，节点数200/500/1000，以及真实世界基准TSPLib和CVRPLib-X。
  - **红队对抗语言模型（Red-teaming Language Models）**：使用GPT-2作为攻击者，受害模型包括Llama-3.2-3B/3.1-8B/3.3-70B-Instruct、Gemma-2-9b-it、Qwen2.5-7B-Instruct、phi-4，评估攻击提示的毒性和多样性。
  - **分子设计**：PMO基准（10个任务），属性优化（QED、JNK3、DRD2、GSK3β）、多属性优化（perindopril、ranolazine、sitagliptin）、结构优化（isomers、deco hop、scaffold hop），限制10,000次评估。
- **对比方法**：
  - 路由：采样、束搜索（BS）、蒙特卡洛树搜索（MCTS）、蚁群优化（ACO），以及专业求解器Concorde、LKH3、PyVRP。
  - 语言模型：采样、温度采样、top-k、top-p、束搜索。
  - 分子设计：SynNet、SMILES GA、STONED、Graph GA。
- **基准**：路由问题以最优性差距（Gap%）衡量，语言模型以毒性和多样性衡量，分子设计以Top-10平均得分衡量。

## 4. 资源与算力（文中提及）

- **硬件**：路由和分子设计实验使用“双路AMD EPYC 7542 32核处理器 + 单张NVIDIA RTX A6000 GPU”；语言模型实验使用“四张NVIDIA A100 HBM2e 80GB PCIe GPU”。
- **训练时长**：未给出具体训练时长，但路由问题的GNN训练遵循Kim et al. (2025)的离线强化学习流程；分子设计使用8K评估训练策略，然后2K评估运行NGS。
- **说明**：论文未提供详细的GPU小时或训练迭代次数。

## 5. 实验数量与充分性

- **实验数量**：非常充分，覆盖三大领域共数十种任务/数据集。
  - 路由：4种经典问题 × 3种规模（200/500/1000）+ 真实世界TSPLib（30+10+12实例）和CVRPLib（43+40+17实例），并进行了超参数敏感性分析（种群大小、后代数、突变率）。
  - 语言模型：1种攻击者（GPT-2），2种源受害模型（Llama-3.2-3B和Llama-3.1-8B），6种转移受害模型，每种条件下5个随机种子。
  - 分子设计：10个不同属性优化任务，每个任务独立运行。
- **充分性与公平性**：
  - 所有搜索方法基于相同的预训练策略，公平比较搜索算法本身。
  - 对比了多种权威基线（经典GA、专用求解器、其他测试时搜索方法）。
  - 报告了均值 ± 标准差（多数实验至少3-5次独立重复），可评估显著性。
  - 消融实验：超参数敏感性、NGS vs. 仅训练（分子设计表8）。
- **不足之处**：部分实验未报告统计误差（如表1路由问题“标准差可忽略”），但提供了图5展示误差带；语言模型多样性与转移毒性未在所有表格中完整显示标准误（但附录F补充了）。总体评价：实验设计周密、覆盖全面，结论可靠。

## 6. 主要结论与发现

- NGS显著优于所有对比的测试时搜索方法，在路由问题中尤其突出（如TSP500达到0.11% gap，而ACO long为1.16%）。
- NGS在语言模型红队任务中提升了攻击提示在未见模型上的迁移能力（毒性更高），且保持较高多样性。
- 在分子设计中，NGS作为GA替代方法，在10个任务中8个取得最佳Top-10平均分数，平均0.835 vs. 第二好的Graph GA 0.768。
- NGS可作为通用的解码策略（替代单次采样或束搜索），也可作为增强的GA（无需手工设计算子）。
- NGS对分布偏移具有鲁棒性（例如真实世界路由实例、语言模型转移场景）。

## 7. 优点

- **方法创新**：通过简单的词汇表限制实现问题无关的交叉操作，将GA与深度生成模型无缝结合，易于实现。
- **灵活性**：适用于任何序列生成模型（自回归、非自回归、GNN、LSTM、Transformer）。
- **有效性**：在多个高难度离散优化任务上显著提升性能，且计算开销合理（与ACO等持平）。
- **鲁棒性**：种群迭代生成机制使算法能自适应适应分布偏移（如真实世界实例、语言模型迁移）。
- **消融与敏感性分析**：详细探讨了超参数影响，证明方法对参数选择不敏感。

## 8. 不足与局限

- **依赖策略质量**：如果预训练模型分布不覆盖高质量解，NGS改进有限；论文提及可通过微调缓解，但未深入探索。
- **额外超参数**：引入了种群大小、后代数、突变率等GA超参数，虽然敏感度低，但实践中仍需调整。
- **缺乏理论保证**：深度生成模型和GA都难以理论分析，NGS缺乏收敛性或分布一致性保证。
- **实验覆盖**：未在其他类型生成任务（如文本生成、图像生成）上验证；分子设计仅使用了SMILES，未尝试其他表示。
- **计算成本**：虽然时间复杂度与采样相近，但在大模型（如LLM）上运行NGS需要进行多次模型前向传播，可能比单次采样更耗时（见附录D的复杂度分析）。
- **公平性局限**：路由问题的基线ACO（Kim et al. 2025）也是该方法提出的，可能存在一定程度上的有利比较；路由问题中使用了局部搜索后处理（2opt、Swap*），所有基线均采用相同后处理，但局部搜索可能部分掩盖差异（如CVRP1000结果）。

（完）
