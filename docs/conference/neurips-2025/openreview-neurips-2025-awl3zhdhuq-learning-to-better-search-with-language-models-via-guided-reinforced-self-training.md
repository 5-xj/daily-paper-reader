---
title: Learning to Better Search with Language Models via Guided Reinforced Self-Training
title_zh: 通过引导强化自训练让大语言模型更好地搜索
authors: "Seungyong Moon, Bumsoo Park, Hyun Oh Song"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=Awl3ZhDHuQ"
tags: ["query:ad"]
score: 8.0
evidence: 通过强化自训练的语言模型引导启发式搜索
tldr: 针对语言模型在复杂推理中利用搜索轨迹训练时存在的次优轨迹和测试时计算效率低下问题，Guided-ReST提出基于最优解逐步引导的强化自训练算法，通过指导模型在推理过程中进行更有效的搜索。实验表明该方法在数学推理和多跳问答任务上显著提升性能，同时降低计算开销，为将启发式搜索与语言模型结合提供了实用的训练范式。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 现有方法依赖有噪或次优的搜索轨迹训练LLM，导致测试时计算效率低下。
method: 提出Guided-ReST微调算法，利用最优解作为逐步指导来改进LLM的推理搜索能力。
result: 实验显示Guided-ReST在数学推理和多跳问答上提升性能并降低计算开销。
conclusion: Guided-ReST验证了最优解引导在LLM搜索训练中的有效性，推动了启发式搜索与语言模型的融合。
---

## Abstract
While language models have shown remarkable performance across diverse tasks, they still encounter challenges in complex reasoning scenarios. Recent research suggests that language models trained on linearized search traces toward solutions, rather than solely on the final solutions, exhibit improved generalization, despite the search traces being potentially noisy or suboptimal. However, relying on such imperfect traces can result in inefficient use of test-time compute. To address this, we propose guided reinforced self-training (Guided-ReST), a fine-tuning algorithm designed to improve the model’s capability for effective search during inference. The key insight behind Guided-ReST is that optimal solutions can serve as valuable step-by-step landmarks to guide the model’s search process. Based on this insight, we introduce a novel data generation method that seamlessly incorporates optimal solutions into the model’s search procedure, enabling the generation of high-quality search traces. By fine-tuning the model on these search traces, we effectively distill improved search strategies into the model. Our method significantly enhances the search capabilities of language models on arithmetic reasoning and code self-repair tasks, including Countdown, CodeContests, and CodeForces. We release the source code at https://github.com/snu-mllab/guided-rest.

---

## 论文详细总结（自动生成）

# 中文详细总结

## 1. 核心问题与研究动机
- **背景**：大语言模型（LLM）在多种任务上表现出色，但在需要复杂规划和推理的任务中仍面临挑战。近期工作（如 Stream of Search, SoS）表明，将模型训练在线性化的搜索轨迹（包括探索和回溯）上，而非仅训练最终解，能显著提升泛化能力。但这些搜索轨迹可能存在噪声和次优性，导致测试时计算资源（token）的低效利用。
- **核心问题**：如何利用最优解作为指导信号，高效地生成高质量搜索轨迹，从而提升模型的搜索能力并降低测试时计算开销？
- **动机**：最优解虽然不适合直接模仿（行为克隆），但可以作为逐步的“里程碑”来引导模型的搜索过程。受 Jump-Start 强化学习（JSRL）启发，作者提出一种渐进式整合最优解到模型自生成搜索轨迹中的方法。

## 2. 方法论
### 核心思想：Guided Reinforced Self-Training (Guided-ReST)
- **关键洞察**：最优解中的每一步（子目标节点）可以为模型提供准确的回溯点。在模型搜索失败时，利用最优解中的正确子目标替换模型探索到的错误节点，然后让模型继续搜索，从而生成高质量、高似然度且成功的搜索轨迹。
- **核心技术**：**子目标增强 (subgoal augmentation)** 算法。
  - 对于一条未成功的搜索轨迹，找到模型当前已探索到的位置（距离上一个子目标最近的失败节点）。
  - 随机选择一个被探索过的孩子节点，用最优解中对应的正确子目标节点替换它。
  - 截断该节点之后的搜索历史（因为后续路径不再有效），然后让模型从该修正节点继续搜索。
  - 迭代执行，直到所有子目标节点都被纳入，最终得到一条成功的搜索轨迹。
- **算法流程（简化版）**：
  1. 使用基础模型（经 SoS 预训练）生成一条搜索轨迹。
  2. 如果轨迹不成功，从第一个子目标开始，循环执行子目标增强：替换节点→截断→模型继续搜索。
  3. 成功后的轨迹用于监督学习微调模型。
  4. 重复多轮自训练（论文中使用 3 轮）。
- **进一步强化学习微调**：在 Guided-ReST 微调之后，使用操作级别（operation-level）的 PPO 进一步优化。这里将每个树操作（探索、验证、回溯等）定义为一个动作（token 序列），而不是 token 级的 MDP，以更好地对齐搜索策略优化。
- **针对代码自修复任务的简化版**：由于无法精确定义子目标，采用 episode 级别的方法：在每一轮修复中，将用户反馈中附加最优解作为提示，并截断失败 episode 后重新生成后续回合。

## 3. 实验设计
- **数据集与场景**：
  - **Countdown**：基础算术推理基准。每个问题给定多个输入数字和一个目标数字，要求用四则运算组合得到目标。实验分为 **seen targets**（目标数字出现在训练中，但输入数字不同）和 **unseen targets**（目标数字完全未见）。
  - **代码自修复**：CodeContests 和 CodeForces 基准。模型首先生成代码，然后根据公共测试结果进行多轮修复。
- **对比方法**：
  - 行为克隆（BC）
  - Stream of Search (SoS)
  - Reinforced Self-Training (ReST)
  - PPO（token-level 和 operation-level 均有对比）
  - 密集奖励 PPO（使用子目标奖励）
- **评估指标**：准确率 vs token 预算曲线；pass@k 准确率（k=1,2,4,8,16,32）。
- **基准模型**：Countdown 使用 Llama-3.2-1B-Instruct；代码任务使用 Qwen2.5-7B-Instruct。

## 4. 资源与算力
- 论文中**没有明确说明具体的 GPU 型号、数量或训练时长**，仅提及在 Countdown 上使用 200K 训练样本、每轮 2 epoch，共 3 轮自训练；代码任务使用 16K 问题、每轮 2 epoch，共 3 轮。未提及硬件配置。

## 5. 实验数量与充分性
- **覆盖范围**：涵盖两个不同领域的任务（算术推理和代码自修复），每个任务均包含分布内和分布外评估。
- **消融实验**：对比了 ReST vs Guided-ReST、token-level vs operation-level PPO、密集奖励 vs 稀疏奖励等，验证了每个模块的有效性。
- **统计可靠性**：Countdown 实验中报告了多个 token 预算下的准确率曲线；pass@k 使用了 32 或 128 个样本（随机种子），结果具有统计意义。
- **公平性**：与 SoS、ReST、PPO 等强基线在相同设置下对比，控制模型和训练数据规模，实验设计较为客观。
- 总体而言，实验数量充分，消融实验覆盖主要设计点，验证了方法在不同场景下的有效性和泛化能力。

## 6. 主要结论与发现
1. **Guided-ReST 显著提升搜索准确率**：在 Countdown 上，最大 token 预算下准确率达 87%，超过第二名 PPO 10% 以上，且未见目标上也表现优异，说明泛化能力强。
2. **测试时计算效率大幅提升**：达到相同准确率所需的 token 数仅为 PPO 的一半左右。
3. **与 PPO 协同效果显著**：Guided-ReST 增大了 pass@k 的覆盖率（尤其高 k 时），为 PPO 提供了更多正确的候选解答，从而带来更大提升。而 ReST 没有这种协同效应。
4. **操作级 MDP 优于 token 级 MDP**：在 PPO 中使用 operation-level 的 MDP 进一步提升了性能和 token 效率（约 2 倍提升）。
5. **直接使用密集奖励效果有限**：即使用子目标奖励进行 PPO 也无法达到 Guided-ReST 的效果，说明引导式的数据生成比奖励塑形更关键。
6. **代码自修复任务上同样有效**：Guided-ReST 在 CodeContests 和 CodeForces 上 pass@k 一致优于 ReST 和 base 模型，且差距随 k 增大而扩大。

## 7. 优点
- **创新性**：首次将 Jump-Start RL 的思想引入语言模型搜索轨迹的生成，提出基于最优解子目标逐步替换的增强算法，概念清晰且有效。
- **实用性**：方法不需要额外符号系统或手工规则，直接基于模型自身的生成和最优解进行轨迹修复，易于实现。
- **计算高效**：在测试时能更少 token 达到更高准确率，对实际部署友好。
- **充分验证**：在两种不同类型的任务（形式化算术搜索与开放式代码修复）上验证了泛化性，并通过详细消融实验拆解了每个组件的贡献。
- **论文写作清晰**：方法和动机阐述明了，图表辅助理解。

## 8. 不足与局限
- **依赖最优解**：方法假设训练时每道题都有最优解可用，这在真实场景中不一定成立。虽然作者提出可以用更强的模型生成替代，但未在实验中验证。
- **Countdown 中的强假设**：使用了 oracle 来精确定位第一个错误步骤并回溯，这在复杂任务中可能无法实现（特别是当无法直接获得步骤级验证时）。
- **代码修复任务的局限性**：简化版的子目标增强（直接附加最优解到反馈）可能不如原版精细，且代码修复任务上的提升不如算术推理显著（可能由于数据量少和任务复杂性）。
- **资源消耗未明确**：论文未报告训练所需的 GPU 种类、数量及时间，难以判断计算成本。
- **仅测试了 Instruct 模型**：未在纯基座模型或更大规模模型（如 7B 以上）上验证方法在算术推理上的效果，可能影响结论的普适性。
- **潜在偏差**：训练数据分布可能影响子目标增强的效果，若最优解与模型分布差异过大，可能导致训练不稳定（文中提到了 loss 增大的现象，但方法试图缓解）。

（完）
