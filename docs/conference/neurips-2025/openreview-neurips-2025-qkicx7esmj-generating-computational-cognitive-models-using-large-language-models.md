---
title: Generating Computational Cognitive models using Large Language Models
title_zh: 使用大语言模型生成计算认知模型
authors: "Milena Rmus, Akshay Kumar Jagadish, Marvin Mathony, Tobias Ludwig, Eric Schulz"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=QKICx7eSMJ"
tags: ["query:ad"]
score: 8.0
evidence: 使用大语言模型自动生成认知模型
tldr: 本文针对传统认知模型手工构建需要大量领域知识和编程技能的问题，提出一种利用大语言模型自动生成计算认知模型的流程。该方法利用LLM的上下文模式识别能力和多领域知识，从行为数据中自动生成可执行的代码模型。在多个认知建模任务上的实验表明，该流程能够生成与数据相吻合的模型，并大幅减少人力投入，为自动化科学发现提供了新范式。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-qkicx7esmj/fig-001.webp\", \"caption\": \"\", \"page\": 30, \"index\": 1, \"width\": 508, \"height\": 381}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qkicx7esmj/fig-002.webp\", \"caption\": \"\", \"page\": 30, \"index\": 2, \"width\": 500, \"height\": 375}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qkicx7esmj/fig-003.webp\", \"caption\": \"\", \"page\": 30, \"index\": 3, \"width\": 800, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qkicx7esmj/fig-004.webp\", \"caption\": \"\", \"page\": 30, \"index\": 4, \"width\": 800, \"height\": 500}]"
motivation: 传统认知模型依赖人工构建，耗时且需大量领域知识，限制了认知科学的自动化探索。
method: 提出利用大语言模型的模式识别和代码生成能力，自动从行为数据生成计算认知模型的流程。
result: 实验验证该流程能有效生成与数据吻合的认知模型，显著降低建模所需的人力与专业知识。
conclusion: 该工作展示了LLM在自动化科学发现中的潜力，为认知模型构建提供了新范式。
---

## Abstract
Computational cognitive models, which formalize theories of cognition, enable researchers to quantify cognitive processes and arbitrate between competing theories by fitting models to behavioral data. Traditionally, these models are handcrafted, which requires significant domain knowledge, coding expertise, and time investment. However, recent advances in machine learning offer solutions to these challenges. In particular, Large Language Models (LLMs) have demonstrated remarkable capabilities for in-context pattern recognition, leveraging knowledge from diverse domains to solve complex problems, and generating executable code that can be used to facilitate the generation of cognitive models. 
Building on this potential, we introduce a pipeline for Guided generation of Computational Cognitive Models (GeCCo). Given task instructions, participant data, and a template function, GeCCo prompts an LLM to propose candidate models, fits proposals to held-out data, and iteratively refines them based on feedback constructed from their predictive performance. We benchmark this approach across four different cognitive domains -- decision making, learning, planning, and memory -- using three open-source LLMs, spanning different model sizes, capacities, and families. On four human behavioral data sets, the LLM generated models that consistently matched or outperformed the best domain-specific models from the cognitive science literature. 
To validate these findings, we performed control experiments that investigated (1) the contribution of the different LLM features (model size, model family, capacities); (2) the causal role of different prompt components; (3) the effect of data contamination; (4) the ability to recover ground truth models from simulated data; and (5) the total explainable variance in human behavior captured by LLM-generated models. 
Taken together, our results suggest that LLMs can rapidly generate cognitive models with conceptually plausible theories that rival -- or even surpass -- the best models from the literature across diverse task domains.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **研究动机**：计算认知模型是形式化认知理论、量化认知过程、并通过拟合行为数据在竞争理论间进行仲裁的关键工具。然而，传统模型构建完全依赖人工，需要深厚的领域知识、编程技能和大量时间投入，且研究者自身的理论偏好可能限制模型探索空间，遗漏更优解释。
- **整体含义**：本文旨在利用大语言模型（LLM）在上下文模式识别、多领域知识整合和代码生成方面的能力，自动化生成计算认知模型，从而提高效率、减少偏见，并拓展模型搜索空间。作者提出 GeCCo 管道，能够仅通过任务描述和行为数据，快速生成可执行的、可解释的认知模型。

## 2. 方法论
- **核心思想**：将 LLM 作为“模型提案引擎”，通过迭代优化生成候选认知模型，并利用传统优化方法对模型进行拟合和评估，最终自动得到性能优异的认知模型。
- **关键技术细节**：
  - **管道流程**：每个运行包含 10 次采样迭代，共进行 5 次独立运行；每次迭代向 LLM 提供包含任务描述、部分参与者数据、指令约束、代码模板和上一轮反馈的提示；LLM 输出三个不同的候选模型（Python 函数）；这些函数被解析为可执行代码，通过 SciPy 的 `minimize` 优化器（20个随机起点）拟合到留出的验证集，计算 BIC；将当前最佳模型和已用参数名加入下一轮提示；迭代结束后，用留出测试集评估最终最佳模型。
  - **LLM 规格**：使用三个开源 LLM：Llama-3.1-Instruct-70B、DeepSeek-R1-Distill-Llama-3.1-70B（R1）、Qwen2.5-72B-Instruct。温度分别设为 0.2、0.1、0.15。
  - **评估指标**：主要使用 BIC（平衡拟合度和模型复杂度）；还使用 exceedance probability (EXP) 量化模型优于竞争者的后验概率；此外进行后验预测检验（posterior predictive checks）。
  - **算法流程（文字描述）**：
    1. 初始化：提供任务描述、参与者数据、代码模板、指令。
    2. 迭代循环：
       a. 向 LLM 发送完整提示（包含反馈）。
       b. LLM 生成三个模型函数。
       c. 解析函数，提取参数名。
       d. 用最小化方法拟合每个模型到验证集，计算 BIC。
       e. 更新最佳模型和已用参数名。
       f. 重复至迭代结束。
    3. 选择所有迭代中 BIC 最小的模型作为最终模型。

## 3. 实验设计
- **数据集与场景**：四个认知域的人类行为数据集：
  - 决策制定：Hilbig & Moshagen (2014) 的多特征选项选择任务（79名参与者）。
  - 学习：Chambon et al. (2020) 的两臂老虎机任务（24名参与者），包含全反馈和部分反馈条件。
  - 规划：Feher da Silva & Hare (2020) 的两阶段任务（Daw任务变体）。
  - 工作记忆：Rmus et al. (2023) 的 RL-WM 任务（不同 set size 下学习刺激-动作关联）。
- **基准模型**：每个域都有文献中最佳的手工模型作为对照：
  - 决策：pWADD（概率加权加性模型）。
  - 学习：RW 4α（四学习率 Rescorla-Wagner 模型）。
  - 规划：Hybrid 模型（模型基/模型无关混合）。
  - 工作记忆：RL-WM 模型（强化学习-工作记忆混合）。
- **对比方法**：
  - 主实验：将三个 LLM（Llama, Qwen, R1）生成的模型与基准模型比较。
  - 控制实验：
    1. LLM 特征贡献分析：线性混合效应模型检验推理能力、模型家族、模型大小的影响。
    2. 提示组件消融：逐一移除反馈、代码模板、任务描述、参与者数据，观察 BIC 变化。
    3. 数据污染分析：使用 LogProber 方法检测提示中是否存在数据泄漏。
    4. 合成数据恢复：在决策制定和学习域生成已知 ground truth 模型的数据，检验 GeCCo 能否恢复。
    5. 可解释方差比较：将 LLM 模型的负对数似然与 CENTAUR（认知科学基础模型）比较。

## 4. 资源与算力
- 文中明确说明：**每个任务域在四块 Nvidia A100（40GB 显存）上最多耗时 8 小时**。所有实验均基于开源 LLM 进行上下文学习，无需微调。

## 5. 实验数量与充分性
- **主实验**：覆盖 4 个认知域，每个域使用 3 个 LLM，每个 LLM 运行 5 次独立运行（每次 10 次迭代），结果以均值 ± 标准误报告。
- **控制实验**：共 5 组，包括：
  - 1 个混合效应模型分析 LLM 特征。
  - 1 个提示消融（5 种条件 × 域）。
  - 1 个数据污染分析（5 个提示集）。
  - 2 个合成数据实验（决策和学习域，多种噪声水平）。
  - 1 个与 CENTAUR 的对比（4 个域）。
- **充分性与公平性**：实验设计较为全面，包括统计显著性检验（t 检验、exceedance probability）、后验预测检验、消融分析、数据泄漏检测等。基准均选自文献中公认的获胜模型，对比公平。合成数据实验提供了 ground truth 恢复的验证，增强了结果可信度。

## 6. 主要结论与发现
- **性能**：在四个域中，LLM 生成的模型在 BIC 上均匹配或超越文献最佳模型；其中 Llama 和 R1 表现最好，Qwen 稍弱。例如决策域 LLM 模型 BIC 显著低于 pWADD；学习域 Llama 模型 BIC 略低于 RW 4α；规划域 R1 模型 BIC 略低于 Hybrid，且 EXP 显著更高；记忆域 Llama 模型 BIC 显著低于 RL-WM。
- **后验预测检验**：LLM 生成模型模拟的行为与人类数据高度一致，表明其能够捕捉关键行为模式。
- **控制实验**：
  - 模型家族影响显著（Llama > Qwen），但推理能力（R1）贡献接近显著。
  - 所有提示组件均有显著贡献，其中**反馈**是最强的预测因子（β = -17.04, p < 0.05）。
  - 未发现数据污染（所有 Log B 远低于阈值 1）。
  - 合成数据中，GeCCo 成功恢复 ground truth 模型（学习域 95% 准确识别 RW+α±）。
  - 与 CENTAUR 比较，LLM 模型在学习和记忆域负对数似然显著更低，在决策和规划域无显著差异，说明捕获了大部分可解释方差。

## 7. 优点
- **方法论创新**：将 LLM 的上下文学习与经典优化方法结合，实现自动化的认知模型发现，无需手工编程或领域专家介入。
- **效率**：每个域仅需 ~8 小时即可完成模型搜索，远快于传统手工尝试。
- **可解释性**：生成的模型是清晰的 Python 代码，包含有意义的参数（如学习率、逆温度、衰减等），可直接用于理论分析和科学洞察。
- **泛化性**：成功应用于四个不同的认知域，且使用同一通用提示结构。
- **透明性**：所有实验使用开源 LLM，代码和数据均公开，便于复现和扩展。
- **安全性控制**：通过数据污染分析、合成数据恢复等验证，确保结果非偶然记忆，增强了结论的可靠性。

## 8. 不足与局限
- **领域覆盖**：仅考察了决策、学习、规划、记忆四个经典领域，未涵盖语言处理、感知等更广泛认知过程，通用性有待进一步验证。
- **模板偏差风险**：虽然消融实验显示代码模板影响最小，但提示中使用了手工模板（或 LLM 自生成模板），可能引导生成特定类模型。作者也尝试了 LLM 生成模板并取得类似效果，但仍需更多探索。
- **反馈形式**：当前反馈仅基于 BIC 和已用参数，未来可引入语义反馈（如理论合理性、代码质量），可能进一步提升模型质量和减少人类监督。
- **高维数据挑战**：本文数据维度较低（离散特征、有限动作），应用于图像、语言等高维数据时，参数空间增大可能导致优化困难，文中未涉及。
- **自然场景**：实验基于实验室任务，需进一步在更自然、真实的人类行为数据集上验证，以确保实用价值。
- **计算资源**：虽然相对高效，但 4×A100 8 小时仍需要一定基础设施，可能对资源有限的研究组构成障碍。

（完）
