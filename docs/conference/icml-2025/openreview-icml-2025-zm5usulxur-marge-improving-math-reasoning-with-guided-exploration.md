---
title: "MARGE: Improving Math Reasoning with Guided Exploration"
title_zh: MARGE：通过引导探索改进数学推理
authors: "Jingyue Gao, Runji Lin, Keming Lu, Bowen Yu, Junyang Lin, Jianyu Chen"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=ZM5usuLxur"
tags: ["query:automatic-discovery"]
score: 4.0
evidence: LLM引导探索用于数学推理，可应用于发现任务
tldr: MARGE通过引导探索中间推理状态提升LLM数学推理。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-zm5usulxur/fig-001.webp\", \"caption\": \"\", \"page\": 4, \"index\": 1, \"width\": 627, \"height\": 587}]"
motivation: LLM在数学推理中受限于高质量查询不足，现有方法探索不足导致虚假相关。
method: 提出MARGE方法，对自生成解的中级推理状态进行击中引导探索。
result: 提升了数学推理中的探索效率和信用分配。
conclusion: MARGE有效增强LLM数学推理能力。
---

## Abstract
Large Language Models (LLMs) exhibit strong potential in mathematical reasoning, yet their effectiveness is often limited by a shortage of high-quality queries.
This limitation necessitates scaling up computational responses through self-generated data, yet current methods struggle due to spurious correlated data caused by ineffective exploration across all reasoning stages.
To address such challenge, we introduce **MARGE**: Improving **Ma**th **R**easoning with **G**uided **E**xploration, a novel method that enhances mathematical reasoning through hit-guided exploration.
MARGE systematically explores intermediate reasoning states derived from self-generated solutions, enabling adequate exploration and improved credit assignment throughout the reasoning process.
Notably, MARGE improves both single-shot accuracy and exploration diversity, mitigating a common trade-off in alignment methods.
These results demonstrate MARGE's effectiveness in enhancing mathematical reasoning capabilities and unlocking the potential of scaling self-generated training data.

---

## 论文详细总结（自动生成）

# 论文中文总结

## 1. 核心问题与整体含义（研究动机和背景）

大型语言模型在数学推理方面展现出潜力，但受限于高质量训练数据的稀缺。现有自训练方法通过模型自生成数据来缓解数据不足，但由于在推理的所有阶段探索不足，导致生成的数据中存在虚假相关性（spurious correlations），模型性能很快饱和甚至下降。论文的核心问题是：**如何增强对推理各阶段的探索，以生成更高质量的训练数据、改善信用分配，并使得自生成训练数据能够有效扩展**。

## 2. 方法论：核心思想、关键技术细节与算法流程

**核心思想**：MARGE（Math Reasoning with Guided Exploration）利用已有的正确或错误解决方案（称为“guidance hit”）作为引导，从中等推理状态出发继续生成完整的响应，从而将指数级复杂的探索问题分解为多个可控的子问题，实现更全面的状态空间覆盖和更好的信用分配。

**关键技术细节**：

- **输出奖励蒙特卡洛（Output Reward MC）价值估计**：从每个中间状态 \(s\) 出发，采样 \(n\) 个完整序列并计算正确率，作为该状态价值的估计 \(\hat{V}^\pi(s)\)，避免训练额外的价值模型。
- **命中引导探索（Hit-guided Exploration）**：
  - 为每个问题选择一个引导解（guidance hit）。对于估计价值 > 0.5 的“简单”问题，随机选择一个错误解；对于估计价值 ≤ 0.5 的“困难”问题，随机选择一个正确解。
  - 从引导解的每个中间状态出发，采样多个完成序列，获得共享前缀的数据，从而更容易识别正确与错误步骤的差异。
- **迭代改进**：
  - 在每个迭代中更新引导解以保持同策略性（on-policy）。
  - 收集所有探索得到的响应形成数据集 \(\mathcal{D}\)。
  - 对于 DPO 训练：为每个中间状态构造一个偏好对（正确 vs. 错误）。
  - 对于 RL 训练：使用 REINFORCE 风格损失，结合组相对优势（group relative advantage）和 KL 散度惩罚。

**算法流程**（文字描述）：
1. 用当前策略生成 \(n_1\) 个候选响应作为初始引导解候选。
2. 对每个问题按启发式规则选择一个引导解。
3. 从引导解的每个中间状态采样 \(n\) 个完成序列，估计状态价值。
4. 用收集的数据训练策略（DPO 或 RL 目标函数）。
5. 更新引导解候选池（用最新生成的响应替代旧候选）。
6. 重复步骤 2-5 共 \(M\) 个轮次。

## 3. 实验设计

**数据集**：
- 训练集：MetaMathQA 和 AQuA 的子集；对于 Qwen2.5 系列模型，使用 Omni-Math 和 Big-Math 的训练集子集。
- 评估集：MATH（含 MATH500 子集）、GSM8k、CollegeMath、OlympiadBench。

**基准方法**：
- SFT、DPO、PPO、REINFORCE++、GRPO（均为 vanilla 探索）。
- StepDPO（需要 GPT-4 外部监督）、MCTS-DPO（基于蒙特卡洛树搜索）。
- 还比较了两个同期的先进工作：ACEMath-7B、PRIME-EURUS-7B。

**模型骨干**：
- Qwen2-7B-Instruct、Qwen2.5-7B-Instruct、LLaMA3.1-8B-Instruct、MetaMath-Mistral-7B、Qwen2.5-Math-7B-Instruct。

## 4. 资源与算力

论文提到实验在 **8 块 A100-80GB GPU** 上完成。使用 vLLM 进行推理，训练框架基于 TRL 和 DeepSpeed。未明确说明总训练时长，但提及跑了 10 个 episode 并应用 early stopping。

## 5. 实验数量与充分性

- 主实验覆盖 **5 种骨干模型 × 4 个评估数据集 × 多项指标（pass@1, pass@64）**，共约 20+ 组对比结果。
- 消融实验：
  - 引导选择策略（Ours vs. Random vs. Succ vs. No Update）。
  - 训练数据量缩放实验（SFT、DPO、REINFORCE 在相同数据量下的表现）。
  - 控制计算量实验（MARGE 使用更少计算与基线公平对比）。
  - 训练集熵分析、状态价值随推理步的变化分析。
- 还进行了迭代训练实验（继续在 MARGE 训练后的模型上跑 REINFORCE++）。
- 实验数量充足，覆盖了不同模型、不同难度数据集、不同优化算法，消融设计全面。对比基准包括近期最先进的方法，公平性较好（控制数据量、计算量等变量）。但未在非数学领域测试泛化性。

## 6. 论文的主要结论与发现

1. **MARGE 显著提升数学推理准确率**：例如在 Qwen2-7B-Instruct 上，MATH 提升 +7.90%，GSM8k +3.03%，CollegeMath +13.64%，OlympiadBench +5.23%。
2. **同时提升单次准确率（pass@1）和探索多样性（pass@k）**：与传统 RLHF/DPO 方法中 pass@1 提升往往伴随多样性下降不同，MARGE 能同时改善两者，说明它学会了更多样的解题策略。
3. **引导探索能够发现更多有效的正-负偏好对**：训练集熵更高，生成更多有效训练数据。
4. **同策略（on-policy）引导解至关重要**：不更新引导解（off-policy）会显著降低性能。
5. **MARGE 训练的模型可进一步通过标准 RL 训练继续提升**：表明 MARGE 不仅提升了推理能力，还扩充了模型可探索的响应空间。

## 7. 优点

- **方法简洁高效**：仅需在基础 LLM 上进行推理，无需训练额外的价值模型或外部监督，实现简单。
- **系统性探索所有推理阶段**：通过从引导解的每个中间状态出发采样，有效覆盖了长推理链中的后期步骤，改善了信用分配。
- **缓解了准确率与多样性之间的权衡**：这是很多对齐方法未能解决的关键问题。
- **理论支撑充分**：论文提供了命题 C.1（引导解增加正确/错误响应比例）、C.2（引导选择策略增加有效配对）、C.3（降低梯度估计方差）等理论分析，增强了方法说服力。
- **实验全面且结果扎实**：多个骨干模型、多个难度基准、多组消融，稳定地显示优势。

## 8. 不足与局限

- **性能增益最终收敛**：经过足够迭代后改进停滞，可能因优化过程中生成质量下降，论文未提供有效缓解方案。
- **仅在数学推理领域验证**：未在代码生成、常识推理等其他需要逐步推理的任务上测试，泛化性未知。
- **计算成本相对更高**：由于要从每个中间状态采样，总生成量约为 vanilla 方法的数倍（论文报告约 3.3-4.9 倍），但这也正是其扩展能力的代价。
- **引导解选择策略仍较简单**：仅基于正确/错误二元分类，未利用更细粒度的步骤级错误信息，可能错过更优的引导。
- **对状态价值饱和的情况无效**：当某些中间状态价值迅速达到 0 或 1 时，无法再发现新的有效配对（见附录 G 失败案例）。
- **未与其他最新的过程监督方法（如 Process Reward Model）进行直接对比**：只对比了 MCTS-DPO 和 StepDPO，但未对比 SPIN、V-STaR 等近期方法。

（完）
