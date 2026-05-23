---
title: "Self-Improving Language Models for Evolutionary Program Synthesis: A Case Study on ARC-AGI"
title_zh: 用于进化程序合成的自改进语言模型：ARC-AGI案例研究
authors: "Julien Pourcel, Cédric Colas, Pierre-Yves Oudeyer"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=z4IG090qt2"
tags: ["query:automatic-discovery"]
score: 9.0
evidence: LLM自改进进化循环用于程序合成
tldr: SOAR将LLM集成到自改进进化循环中进行程序合成。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-z4ig090qt2/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 965, \"height\": 969}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-z4ig090qt2/fig-002.webp\", \"caption\": \"\", \"page\": 2, \"index\": 2, \"width\": 800, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-z4ig090qt2/fig-003.webp\", \"caption\": \"\", \"page\": 2, \"index\": 3, \"width\": 1454, \"height\": 989}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-z4ig090qt2/fig-004.webp\", \"caption\": \"\", \"page\": 2, \"index\": 4, \"width\": 405, \"height\": 485}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-z4ig090qt2/fig-005.webp\", \"caption\": \"\", \"page\": 2, \"index\": 5, \"width\": 370, \"height\": 469}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-z4ig090qt2/fig-006.webp\", \"caption\": \"\", \"page\": 2, \"index\": 6, \"width\": 1084, \"height\": 1027}]"
motivation: LLM单次生成难以解决复杂程序合成任务。
method: 提出SOAR，交替进行进化搜索和事后学习微调LLM。
result: 提升了程序合成成功率和LLM的采样能力。
conclusion: 结合LLM和进化计算可实现有效程序发现。
---

## Abstract
Many program synthesis tasks prove too challenging for even state-of-the-art language models to solve in single attempts. Search-based evolutionary methods offer a promising alternative by exploring solution spaces iteratively, but their effectiveness remain limited by the fixed capabilities of the underlying generative model. 
We propose SOAR, a method that learns program synthesis by integrating language models into a self-improving evolutionary loop. 
SOAR alternates between (1) an evolutionary search that uses an LLM to sample and refine candidate solutions, and (2) a hindsight learning phase that converts search attempts into valid problem-solution pairs used to fine-tune the LLM's sampling and refinement capabilities—enabling increasingly effective search in subsequent iterations.
On the challenging ARC-AGI benchmark, SOAR achieves significant performance gains across model scales and iterations, leveraging positive transfer between the sampling and refinement finetuning tasks. These improvements carry over to test-time adaptation, enabling SOAR to solve 52\% of the public test set.

---

## 论文详细总结（自动生成）

## 论文详细中文总结

### 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：当前最先进的语言模型在单次生成中难以解决复杂的程序合成任务（如ARC-AGI）。基于搜索的进化方法虽能迭代探索解空间，但其底层生成模型的固定能力限制了性能上限——仅靠增加搜索次数或模型参数会遭遇收益递减。
- **整体含义**：本文提出SOAR（Self-improving Operators for Automated program Refinements），将LLM集成到自改进进化循环中，使模型能从自身的搜索经验中学习采样和细化能力，从而突破性能天花板，实现持续的自我提升。

### 2. 论文提出的方法论
- **核心思想**：循环交替执行（1）进化搜索阶段（使用LLM采样和细化候选程序）和（2）学习阶段（从搜索轨迹中构造训练数据微调LLM）。这形成良性循环：更好的模型→更有效的搜索→更丰富的训练数据→更好的模型。
- **关键技术细节**：
  - **程序采样**：给定输入–输出示例和测试输入，LLM生成候选Python程序。
  - **程序细化**：利用执行反馈（正确/错误标注）引导LLM对现有程序进行改进。
  - **Sample&Refine搜索算法**：首先独立采样3k个候选程序；然后进行3k步细化，使用REX（结合Thompson采样与探索奖励）在细化过程中平衡探索与利用。
  - **加权多数投票**：将6k个程序按测试输出网格分组，以每个组内程序在训练示例上的准确率之和作为权重，选取得分最高的网格作为最终答案。
  - **学习阶段**：
    - *采样能力微调*：对每个搜索程序，如果它对原始任务错误，则将其产生的输出视为新任务的正确输出（事后重新标记），从而构造（任务, 正确程序）对。按greedy-diverse策略每任务选择最多50个样本。
    - *细化能力微调*：收集成功细化案例（即从错误程序细化到正确程序），按父程序训练准确率分桶平衡采样，每任务最多50个样本。
  - **迭代自改进**：每轮迭代用微调后的模型替换原LLM，重复搜索与学习步骤。测试时训练：在测试任务上仅使用采样微调（根据训练准确率选择候选程序），不依赖真值。
- **算法流程**（文字说明）：
  1. 初始化LLM θ₀。
  2. 对于迭代 i = 0,1,…：
     - 搜索阶段：用θᵢ对每个训练任务执行Sample&Refine（3k采样+3k细化），得到搜索轨迹。
     - 学习阶段：从轨迹中事后重新标记构造采样训练集和细化训练集，用RS-LoRA/RS-QLoRA微调基模型（使用Unsloth）获得θᵢ₊₁。
  3. 训练阶段结束后，将所有迭代和模型产生的解决方案去重、子采样，微调一个基模型作为测试时起点。
  4. 测试时训练：在测试任务上重复类似迭代（仅使用采样微调），持续提升性能。

### 3. 实验设计
- **数据集与基准**：Abstraction and Reasoning Corpus (ARC-AGI)，包含400个训练任务和400个测试任务。每个任务需从少量输入–输出示例中推断隐式变换，作用于测试输入。
- **评估指标**：任务解决率（% solved），通过加权多数投票输出两个候选解，与真值比较。
- **对比方法**：
  - 单次采样（1-shot）的性能（包括Qwen-2.5-Coder系列、Mistral-Large-2、GPT-4.1、Claude-4-Sonnet、o3-mini、Gemini-2.5-Pro）。
  - 纯采样6k次（Sample-6k）和采样+细化6k次（Sample&Refine-6k）的基础搜索方法。
  - 以往的归纳方法：CodeIt、BARC-induction、Icecuber、Greenblatt（2024）等。
  - 自身消融：不同数据选择策略（correct-only, uniform, greedy, greedy-diverse）、联合微调 vs. 独立微调、迭代次数、模型集成等。

### 4. 资源与算力
- 文中提到使用**单张H100 GPU**进行微调，采用RS-LoRA（7B/14B）和RS-QLoRA（更大模型），LoRA rank=256, α=32，训练3个epoch，学习率5e-5。使用Unsloth库。
- 搜索阶段使用SGLang引擎，并行采样（每任务50个并行响应），并运行4个并行的REX实例（类似岛遗传算法）。部分计算资源来自IDRIS HPC（GENCI分配A0171011996）。
- 总FLOPs分析：微调仅占搜索阶段FLOPs的约5%，但未给出具体GPU小时数。因此**文中未明确报告总训练时长或精确算力消耗**，但指出计算成本相对可控。

### 5. 实验数量与充分性
- **实验数量**：涵盖5种模型大小（7B、14B、32B、72B、123B），每种模型进行4轮训练迭代和2轮测试时训练。此外还进行了：
  - 数据选择策略消融（4种）
  - 联合学习 vs. 独立学习消融（8种组合）
  - 缩放定律分析（不同搜索预算下的性能曲线）
  - 模型集成组合（多种模型组合的多数投票）
- **公平性**：所有对比均在相同搜索预算（6k次尝试）下进行；与闭源模型比较时注明单次或给定预算；报告了不同设置下的性能标准差（未明确给出，但曲线平滑）。消融实验设计合理，能清晰验证各组件贡献。
- **充分性**：实验覆盖了方法核心组件、迭代效果、模型规模扩展、计算预算、以及同领域先前方法的对比。整体充分且客观，支持主要结论。但仅在ARC-AGI单一基准上评估，泛化性测试不足。

### 6. 论文的主要结论与发现
1. **SOAR显著提升程序合成性能**：在ARC-test上，经过4轮训练后，各模型得分增量达+19%至+27%（相对原始搜索），最终集成最高达到52%。
2. **突破模型规模和搜索预算瓶颈**：仅增加参数或搜索次数会饱和，而SOAR通过提升模型自身持续超越这些瓶颈。例如7B模型（36.25%）甚至超越闭源大模型（o3-mini 33%，Claude-4-Sonnet 20.75%）。
3. **联合学习采样和细化具有正迁移**：单一模型同时学习两项任务优于两个独立模型，证明共享知识结构。
4. **不同模型互补**：集成多个模型的解决方案可进一步突破个体上限（52% vs. 最佳单模型45.5%）。
5. **事后重新标记有效利用失败尝试**：greedy-diverse数据选择策略平衡了成功与失败经验，优于仅用正确样本。
6. **测试时训练能带来额外提升**：在测试集上继续迭代可再提升约5%的性能。

### 7. 优点
- **完全自改进**：无需人工预先设计的领域特定语言（DSL）、外部演示或训练数据，仅从自身搜索经验学习。
- **利用失败尝试**：通过事后重新标记将失败程序转化为有效训练样本，显著扩展数据集。
- **域无关性**：框架可泛化到其他程序合成问题（理论上），仅在ARC上验证。
- **开源与可复现**：代码在GitHub上公开，使用开放权重模型。
- **效率平衡**：微调成本仅占搜索的5%，计算开销相对较低。
- **提出测试时训练范式**：使得模型在未知目标问题上也能持续适应。

### 8. 不足与局限
- **计算成本仍高**：每任务每迭代需6k次合成尝试（含搜索），虽比纯搜索更高效，但对大规模部署仍有门槛。
- **性能提升递减**：随着迭代增加，增益逐渐减小，暗示可能存在内在极限或需更先进策略（如自适应预算分配、显式多样性优化）。
- **多样性下降风险**：在已解决任务上，程序多样性降低；未解决任务上多样性维持但不足以持续进步。需结合质量-多样性方法。
- **仅评估单一基准**：仅在ARC-AGI上验证，在更广泛的程序合成（如代码生成、数学发现）上的泛化性未知。
- **测试时训练不完整**：当前仅实现了采样能力的测试时适应，细化能力未适配，可能限制了进一步提升。
- **集成依赖**：达到最佳性能需多模型集成（5×6k样本），增加了系统复杂度。单个模型的性能上限低于集成结果。
- **无显式安全性讨论**：虽在Impact Statement中提及，但未实际分析自改进系统可能的安全风险（如奖励黑客、错误模式固化）。

（完）
