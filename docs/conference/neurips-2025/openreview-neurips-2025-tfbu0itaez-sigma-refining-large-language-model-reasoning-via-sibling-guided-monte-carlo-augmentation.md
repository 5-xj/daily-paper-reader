---
title: "SIGMA: Refining Large Language Model Reasoning via Sibling-Guided Monte Carlo Augmentation"
title_zh: SIGMA：通过兄弟引导的蒙特卡洛增强优化大语言模型推理
authors: "Yanwei Ren, Haotian Zhang, Fuxiang Wu, Jiayan Qiu, Jiaxing Huang, Baosheng Yu, Liu Liu"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=tfbu0ITAez"
tags: ["query:ad"]
score: 7.0
evidence: 使用MCTS作为大模型引导的启发式搜索
tldr: 针对大语言模型推理数据生成中传统MCTS仅保留最优轨迹而丢弃兄弟节点导致信息浪费的问题，本文提出SIGMA框架，通过保留并利用搜索树中的兄弟节点（包含部分见解、错误模式等）来增强数据质量。方法在多个推理任务上提升了模型性能，展示了将启发式搜索（MCTS）与语言模型推理结合的潜力，为自动发现算法中的启发式搜索提供了新思路。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-tfbu0itaez/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 7292, \"height\": 4008}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-tfbu0itaez/fig-002.webp\", \"caption\": \"\", \"page\": 4, \"index\": 2, \"width\": 10630, \"height\": 4920}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-tfbu0itaez/fig-003.webp\", \"caption\": \"\", \"page\": 5, \"index\": 3, \"width\": 14140, \"height\": 6200}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-tfbu0itaez/fig-004.webp\", \"caption\": \"\", \"page\": 6, \"index\": 4, \"width\": 8022, \"height\": 4440}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-tfbu0itaez/fig-005.webp\", \"caption\": \"\", \"page\": 16, \"index\": 5, \"width\": 5127, \"height\": 3787}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-tfbu0itaez/fig-006.webp\", \"caption\": \"\", \"page\": 16, \"index\": 6, \"width\": 5221, \"height\": 3787}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-tfbu0itaez/fig-007.webp\", \"caption\": \"\", \"page\": 16, \"index\": 7, \"width\": 5221, \"height\": 3787}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-tfbu0itaez/fig-008.webp\", \"caption\": \"\", \"page\": 16, \"index\": 8, \"width\": 5221, \"height\": 3791}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-tfbu0itaez/fig-009.webp\", \"caption\": \"\", \"page\": 16, \"index\": 9, \"width\": 5221, \"height\": 3791}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-tfbu0itaez/fig-010.webp\", \"caption\": \"\", \"page\": 16, \"index\": 10, \"width\": 5221, \"height\": 3791}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-tfbu0itaez/fig-011.webp\", \"caption\": \"\", \"page\": 16, \"index\": 11, \"width\": 5221, \"height\": 3787}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-tfbu0itaez/fig-012.webp\", \"caption\": \"\", \"page\": 16, \"index\": 12, \"width\": 5127, \"height\": 3787}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-tfbu0itaez/fig-013.webp\", \"caption\": \"\", \"page\": 16, \"index\": 13, \"width\": 5127, \"height\": 3787}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-tfbu0itaez/fig-014.webp\", \"caption\": \"\", \"page\": 16, \"index\": 14, \"width\": 5127, \"height\": 3791}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-tfbu0itaez/fig-015.webp\", \"caption\": \"\", \"page\": 16, \"index\": 15, \"width\": 5127, \"height\": 3791}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-tfbu0itaez/fig-016.webp\", \"caption\": \"\", \"page\": 16, \"index\": 16, \"width\": 5127, \"height\": 3791}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-tfbu0itaez/fig-017.webp\", \"caption\": \"\", \"page\": 17, \"index\": 17, \"width\": 5576, \"height\": 4172}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-tfbu0itaez/fig-018.webp\", \"caption\": \"\", \"page\": 17, \"index\": 18, \"width\": 5576, \"height\": 4172}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-tfbu0itaez/fig-019.webp\", \"caption\": \"\", \"page\": 17, \"index\": 19, \"width\": 5576, \"height\": 4176}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-tfbu0itaez/fig-020.webp\", \"caption\": \"\", \"page\": 17, \"index\": 20, \"width\": 5576, \"height\": 4176}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-tfbu0itaez/fig-021.webp\", \"caption\": \"\", \"page\": 17, \"index\": 21, \"width\": 5576, \"height\": 4176}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-tfbu0itaez/fig-022.webp\", \"caption\": \"\", \"page\": 17, \"index\": 22, \"width\": 5722, \"height\": 4172}]"
motivation: 现有MCTS推理数据生成方法仅保留最优轨迹，丢弃大量包含有价值信息的兄弟节点，造成数据浪费。
method: 提出SIGMA框架，在MCTS搜索树中保留所有节点，利用兄弟节点信息进行数据增强，从而丰富训练数据。
result: 在多个推理基准上，SIGMA生成的训练数据显著提升了语言模型的推理准确率。
conclusion: 该方法证明利用搜索树中的非最优分支可以有效提升数据质量，为启发式搜索与语言模型结合提供了新范式。
---

## Abstract
Enhancing large language models by simply scaling up datasets has begun to yield diminishing returns, shifting the spotlight to data quality. Monte Carlo Tree Search (MCTS) has emerged as a powerful technique for generating high-quality chain-of-thought data, yet conventional approaches typically retain only the top-scoring trajectory from the search tree, discarding sibling nodes that often contain valuable partial insights, recurrent error patterns, and alternative reasoning strategies. This unconditional rejection of non-optimal reasoning branches may waste vast amounts of informative data in the whole search tree. We propose SIGMA (Sibling Guided Monte Carlo Augmentation), a novel framework that reintegrates these discarded sibling nodes to refine LLM reasoning. SIGMA forges semantic links among sibling nodes along each search path and applies a two-stage refinement: a critique model identifies overlooked strengths and weaknesses across the sibling set, and a revision model conducts text-based backpropagation to refine the top-scoring trajectory in light of this comparative feedback. By recovering and amplifying the underutilized but valuable signals from non-optimal reasoning branches, SIGMA substantially improves reasoning trajectories. On the challenging MATH benchmark, our SIGMA-tuned 7B model achieves 54.92\% accuracy using only 30K samples, outperforming state-of-the-art models trained on 590K samples. This result highlights that our sibling-guided optimization not only significantly reduces data usage but also significantly boosts LLM reasoning.

---

## 论文详细总结（自动生成）

# 详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：现有使用蒙特卡洛树搜索（MCTS）生成链式思维（Chain-of-Thought）推理数据的方法，通常只保留搜索树中评分最高的单条轨迹，而丢弃了大量“兄弟节点”（即同一父节点下的其他分支）。这些兄弟节点中常常包含部分正确的推理步骤、常见的错误模式、以及替代推理策略，具有丰富的信息价值。简单地抛弃它们导致了巨大的数据浪费，限制了从搜索过程中提取结构化反馈的潜力。
- **整体含义**：随着单纯扩大数据集规模带来的收益递减，数据质量成为提升大语言模型（LLM）推理能力的关键。本文提出 SIGMA 框架，通过重新利用 MCTS 中废弃的兄弟节点，以自然语言“梯度”的形式进行符号优化，从而生成更高质量的推理路径。这有望大幅降低高质量训练数据所需的计算资源和数据量，为更高效的数据合成提供新范式。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：利用 MCTS 搜索树中未被选中的兄弟节点，作为“符号梯度”来改进选定的最优推理路径。每个步骤上，比较选定节点和它的兄弟节点，生成自然语言的批评（类似梯度方向），然后用于修订该步骤。
- **关键技术细节**：
  1. **MCTS 推理路径选择**：以问题为初始状态，通过 UCT（Upper Confidence bound for Trees）选择子节点，进行模拟和奖励回传，最终选出累积 Q 值最高的路径 \( T^* = {p^{(1)}, p^{(2)}, ..., p^{(D)}} \)。
  2. **符号损失与梯度生成**：在每个深度 \( d \)，计算选定节点 \( T_p \) 与其兄弟节点集合 \( \{T_s\} \) 之间的“符号损失” \( \mathcal{L}_{\text{text}} = \Phi(T_p, \{T_s\}) \)。然后使用一个批判模型（Critique LLM, CLLM）生成自然语言梯度 \( G = \frac{\partial \mathcal{L}_{\text{text}}}{\partial T_p} = \text{CLLM}(T_p, \{T_s\}) \)。
  3. **文本梯度下降（TGD）修订**：利用一个修订模型（Revise LLM, RLLM）进行一步文本梯度更新：\( \tilde{T}_p \leftarrow \text{TGD.step}(T_p, G) = \text{RLLM}(T_p, G) \)。在所有深度依次执行此操作，相当于对推理链进行一次坐标下降。
- **算法流程**（文字说明）：
  1. 使用 MCTS 为每个问题构建搜索树，提取最优路径 \( T^* \)。
  2. 对于路径中的每个步骤 \( d = 1...D \)：
     - 获取该步的选定节点和同父兄弟节点。
     - 批判模型对比生成批评（自然语言梯度）。
     - 修订模型根据批评将该步骤改写。
  3. 输出完整的修订后路径 \( T^\dagger \)。

## 3. 实验设计：使用的数据集、基准、对比方法

- **数据集**：
  - **领域内（In-domain）**：GSM8K、MATH。
  - **领域外（Out-of-domain）**：CollegeMath、DeepMind Mathematics、OlympiadBench-Math、TheoremQA（共6个数学推理基准）。额外在常识推理任务（CommonsenseQA、StrategyQA、ARC-Challenge）上评估泛化能力。
- **基准（Benchmark）**：六个数学推理任务的精确匹配准确率（pass@1），零样本贪婪解码。
- **对比方法**：
  - 大规模基线：MetaMath (400K)、WizardMath (418K)、MMIQC (2.3M)、MathScale、RefAug、DART-Math (590K)、MathFusion (30K/60K) 等。
  - 消融基线：仅使用 MCTS 最优路径（MCTS-15K）、黑盒 GPT-4o-mini 生成 CoT（Blackbox-15K）。
- **基模型**：DeepSeekMath-7B（数学专用）、LLaMA3-8B、Mistral-7B-v0.1（通用模型），以及附录中的 Qwen2.5-Math-7B。

## 4. 资源与算力（论文中明确提及）

- **SIGMA 合成成本**（附录 D）：
  - MCTS 生成阶段：使用 Qwen2.5-Math-7B，15K 样本需要约 42 GPU 小时（RTX 4090）。
  - 修订阶段：使用 GPT-4o-mini 处理 15K 样本需要 33.6M 提示 token 和 11.4M 完成 token，API 成本 11.7 美元；处理 60K 样本总 API 成本 47.6 美元。
  - 若替换为 Qwen2.5-7B-Instruct（开源模型），总成本降至约 70 美元。
- **对比 DART-Math**：在 A100 上需要 3840 GPU 小时（约 3456 美元）。SIGMA 总成本降低超过 30 倍。
- **微调阶段**：在 4 块 H100 GPU 上进行全微调，DeepSpeed ZeRO-2，混合精度（FP16），序列长 4096，每设备批大小 8，梯度累积步 4，训练 3 个 epoch。学习率分别调优。

## 5. 实验数量与充分性

- **主要实验**：Table 1 在三个基模型上比较了不同数据量（15K、30K、60K）的 SIGMA 与多个基线，覆盖 6 个数据集，共约 \( 3 \times (3+多个基线) \) 组结果。
- **消融实验**：
  - Table 2：对比 vanilla MCTS 路径、黑盒 CoT 生成，证明 Sibling 改进有效。
  - Table 3：更换教师模型（Qwen2.5-7B/72B-Instruct、GPT-4o-mini）验证泛化性。
- **额外实验**：
  - 附录 Table 4：在 Qwen2.5-Math-7B 上进一步验证。
  - 附录 Table 5：在常识推理任务（CommonsenseQA、StrategyQA、ARC-Challenge）上评估泛化能力。
- **充分性与公平性**：实验覆盖了多种架构（专用/通用）、多种数据量级、多种基线方法，并且使用官方公开的评估脚本（DART-Math 评估协议），保证了公平性。消融实验设计合理，逐步剥离组件的影响。

## 6. 论文的主要结论与发现

- **数据高效性**：SIGMA-15K（15K 样本）在所有三个基模型上超过了所有 30K 样本的基线，例如 DeepSeekMath 上平均 47.0 vs MathFusion 45.7。
- **超越大规模基线**：SIGMA-30K 与 60K 的基线相当或更好；SIGMA-60K 在 DeepSeekMath 上达到 49.3 平均准确率，超过 DART-Math-60K（47.4）和 MathFusion-60K（47.5）。
- **泛化性**：SIGMA 在多个模型（LLaMA3、Mistral、DeepSeekMath、Qwen2.5）和多个任务（数学、常识推理）上一致提升，验证了方法不依赖于特定模型或领域。
- **成本效益**：合成数据所需的计算成本仅为 DART-Math 的 1/30，API 成本极低。

## 7. 优点：方法或实验设计上的亮点

- **创新性**：首次系统性地利用 MCTS 中被丢弃的兄弟节点进行符号优化，将搜索树的“副作用”转化为高质量监督信号。
- **模型无关性**：不需要访问基模型的内部梯度或参数，所有更新在自然语言空间中进行，可灵活替换批判/修订模型。
- **简便集成**：不额外需要 rollout 或外部奖励模型，可直接插到现有 MCTS 数据生成流水线中。
- **实验设计全面**：覆盖多种基模型、多个数据规模、多种任务类型（数学+常识），并进行了系统的消融和更换教师实验，验证了方法的稳健性和可扩展性。

## 8. 不足与局限

- **教师模型限制**：当前使用 GPT-4o-mini 作为批判和修订模型，其自身能力限制可能成为瓶颈，使用更强模型（如 GPT-4）可能进一步提升效果（作者提及）。
- **规模探索有限**：仅对 7B 参数级别模型进行全微调，未探索更大模型（如 13B、70B）下的表现。
- **领域覆盖**：主要聚焦数学推理，虽然附录扩展到常识推理，但其他复杂任务（如科学问答、多步规划）的效果未知。
- **依赖 MCTS 质量**：框架效果受限于 MCTS 树的覆盖度与多样性，如果 MCTS 探索不足，兄弟节点可能缺乏有用信号。
- **评估偏差风险**：零样本贪婪解码可能不能充分反映模型泛化能力，缺少多次采样、温度扫描等更全面的评估。

（完）
