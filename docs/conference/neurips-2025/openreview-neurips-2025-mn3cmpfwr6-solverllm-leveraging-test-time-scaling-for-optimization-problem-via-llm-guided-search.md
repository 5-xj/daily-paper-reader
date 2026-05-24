---
title: "SolverLLM: Leveraging Test-Time Scaling for Optimization Problem via LLM-Guided Search"
title_zh: "SolverLLM: 利用测试时缩放通过LLM引导搜索解决优化问题"
authors: "Dong Li, Xujiang Zhao, Linlin Yu, Yanchi Liu, Wei Cheng, Zhengzhang Chen, Zhong Chen, Feng Chen, Chen Zhao, Haifeng Chen"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=mN3CMpfWR6"
tags: ["query:ad"]
score: 8.0
evidence: LLM引导的MCTS生成数学形式化和求解器代码，解决优化问题
tldr: 现有LLM求解优化问题的方法泛化性差或训练成本高。本文提出SolverLLM，一个无需训练的框架，通过改进的蒙特卡洛树搜索（MCTS）引导LLM生成问题的数学形式化描述，并自动转化为求解器代码。在多个优化基准上，SolverLLM显著优于提示工程方法，显示了测试时缩放策略在复杂推理任务中的潜力。该工作为利用LLM进行自动化优化问题求解提供了新思路，可推广至更广泛的科学发现场景。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-mn3cmpfwr6/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-mn3cmpfwr6/fig-002.webp\", \"caption\": \"\", \"page\": 2, \"index\": 2, \"width\": 512, \"height\": 512}]"
motivation: 现有LLM求解优化问题时，提示工程泛化性差且监督训练成本高，亟需无需训练的方法。
method: 提出SolverLLM框架，利用MCTS引导LLM生成数学形式化描述并翻译为可执行代码，无需额外训练。
result: 实验表明，SolverLLM在多种优化问题上的表现显著优于提示工程基线，验证了测试时缩放的潜力。
conclusion: SolverLLM为LLM解决通用优化问题提供了高效无训练范式，推进了LLM在科学计算中的应用。
---

## Abstract
Large Language Models (LLMs) offer promising capabilities for tackling complex reasoning tasks, including optimization problems. However, existing methods either rely on prompt engineering, which leads to poor generalization across problem types, or require costly supervised training. We introduce SolverLLM, a training-free framework that leverages test-time scaling to solve diverse optimization problems. Rather than solving directly, SolverLLM generates mathematical formulations and translates them into solver-ready code, guided by a novel Monte Carlo Tree Search (MCTS) strategy. To enhance the search process, we modify classical MCTS with (1) dynamic expansion for adaptive formulation generation, (2) prompt backpropagation to guide exploration via outcome-driven feedback, and (3) uncertainty backpropagation to incorporate reward reliability into decision-making. Experiments on six standard benchmark datasets demonstrate that SolverLLM outperforms both prompt-based and learning-based baselines, achieving strong generalization without additional training.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

优化问题（如线性规划、整数规划等）在工程、能源、经济、医疗等领域应用广泛。传统求解流程包括“问题形式化→代码生成→程序执行”三个阶段，其中“问题形式化”需要领域知识和数学建模能力，限制了自动化。大语言模型（LLM）的出现为自然语言描述到数学形式化的转化提供了可能，但现有方法存在两大缺陷：
- **提示工程方法**（如Chain-of-Experts、OptiMUS）依赖精心设计的agent角色和模板，泛化能力差；
- **学习方法**（如ORLM、LLMOPT）需要大规模高质量标注数据和监督微调，成本高昂且泛化受限。

本文提出**SolverLLM**，一种无需训练的测试时缩放（test-time scaling）框架，利用**蒙特卡洛树搜索（MCTS）**引导LLM逐步生成并优化数学形式化，再翻译为求解器代码，在不增加训练成本的前提下显著提升求解准确性和泛化能力。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

### 核心思想
将问题形式化过程视为一个搜索问题，通过LLM驱动的MCTS在“元素级”形式化空间中进行探索。每个节点代表部分形式化（如类型、集合、参数、变量、目标、约束），完整路径定义完整模型。搜索过程中不断利用求解器反馈、推理信号和不确定性估计来指导后续扩展。

### 关键技术细节
- **六元素形式化**：在传统五元素（集合、参数、变量、目标、约束）基础上增加了**Type**（问题类型如LP/MILP/NLP），提供全局指导。
- **改进的MCTS四个阶段**：
  1. **Selection（选择）**：采用UCT（Upper Confidence Bound for Trees）平衡探索与利用，可选择叶节点或**活跃的非叶节点**（由触发信号决定）。
  2. **Dynamic Expansion（动态扩展）**：使用LLM而非预定义动作空间生成新子节点；可扩展非叶节点，允许回溯修正早期元素。
  3. **Simulation（仿真）**：从节点rollout完整形式化，翻译为代码并执行，获得**奖励**（可行性、最优性、错误惩罚）和**每层推理信号**（触发标志、原因、局部指导）。
  4. **Backpropagation（反向传播）**：包含两项创新：
     - **Prompt Backpropagation**：将每层推理信号反向传播，更新节点状态和知识库，用于后续扩展提示。只有局部不确定性（基于预测熵）超过阈值且触发时才激活节点。
     - **Uncertainty Backpropagation**：全局不确定性（语义熵）用于加权奖励更新：$\rho_s = \exp(-U_s^{global})$，确保高置信度评价主导搜索。

### 关键公式
- UCT选择子节点：$s_{child} = \arg\max_{s'\in Child(s)} \left[ Q_{s'} + c \cdot \sqrt{\frac{2\log N_s}{N_{s'}}} \right]$
- 奖励函数：$R(f_s, x^*) = \alpha \cdot I_{feasible} + \beta \cdot \text{objective\_score}(f_s, x^*) - \gamma \cdot I_{error}$
- 语义熵（全局不确定性）：$SE(x) = -\sum_m p(m|x)\log p(m|x)$
- 加权更新：$Q_{s'} \leftarrow Q_{s'} + \rho_s \cdot \frac{\bar{R}(f_s, x^*) - Q_{s'}}{N_{s'}}$

### 算法流程
1. 初始化根节点，进入MCTS循环（最多20次迭代）。
2. 选择阶段从上至下选择节点（可提前终止于活跃非叶节点）。
3. 动态扩展阶段：LLM生成候选子节点（最多3个成分），经过去重剪枝后添加。
4. 仿真阶段：从扩展节点rollout至完整形式化，执行代码获得奖励和每层推理信号。
5. 反向传播阶段：更新路径上节点的访问次数、平均奖励、知识库和不确定性加权值。
6. 最终选择奖励最高的完整形式化路径作为输出。

## 3. 实验设计：数据集、Benchmark、对比方法

### 数据集（6个标准基准）
| 数据集 | 难度等级 | 问题数 | 描述 |
|--------|----------|--------|------|
| MamoEasy | 易（平均难度1.97） | 100 | 入门级线性/MILP问题 |
| NL4Opt | 中（平均难度2.16） | 100 | 自然语言优化问题（投资、广告等） |
| NLP4LP | 中（平均难度2.32） | 100 | 经典LP教材问题 |
| ComplexOR | 较难（平均难度2.61） | 19 | 高复杂度运筹问题（物流、调度） |
| MamoComplex | 难（平均难度3.14） | 100 | 高级MILP问题，含TSP等 |
| IndustryOR | 难（平均难度3.24） | 100 | 13个行业的工业优化问题 |

### 对比方法
- **Prompt-based**：GPT-4 Directly、GPT-4o Directly、Reflexion、Chain-of-Experts、OptiMUS、AutoFormulation（同为测试时缩放方法）
- **Learning-based**：ORLM（基于Mistral-7B、Deepseek-Math-7B、LLaMa3-8B）、LLMOPT（基于Qwen1.5-14B）
- **SolverLLM变体**（消融实验）：w/o Prompt Backpropagation (PB)、w/o Uncertainty Backpropagation (UB)、w/o Type Element (TE)

### 评估指标
- **Solving Accuracy (SA)**：成功求解的比例
- **Execution Rate (ER)**：代码无错误运行的比例
- **Average Generation Time (AGT)**：平均生成时间（分钟）
- **Token数量**（用于token budget分析）

## 4. 资源与算力

论文未明确说明使用的GPU型号、数量或训练时长。因为SolverLLM是训练无关框架，所有实验均通过调用LLM API（GPT-4、GPT-4o、GPT-4o-mini）完成，不涉及本地模型训练。推理时使用了OpenAI的API，算力消耗主要体现在API调用和本地代码执行（Pyomo求解器）。文中未提供具体的硬件配置信息。

## 5. 实验数量与充分性

实验较为充分，包括：
- **主对比实验**：在6个数据集上与7种prompt-based方法和3种learning-based方法对比SA。
- **消融实验**：对PB、UB、TE三个核心组件分别去除，在6个数据集上报告SA、ER、AGT。
- **Token预算分析**：在MamoComplex上改变搜索迭代次数（10~50次），对比SolverLLM和AutoFormulation的token消耗和SA。
- **轻量模型实验**：将LLM替换为GPT-4o-mini，在6个数据集上验证鲁棒性。
- **案例研究**：对TSP和IP问题展示搜索树和指导效果。

实验设计公平：基线结果尽量引用原文，SolverLLM与基线在不同难度数据集上均有比较，消融实验验证了各组件贡献。但部分基线结果来自原论文，可能存在实现细节差异；另外ComplexOR数据集仅19个问题，结果可能波动较大。

## 6. 论文的主要结论与发现

1. **SolverLLM显著优于prompt-based方法**：在NL4Opt、NLP4LP、ComplexOR上SA分别达97%、87%、77.8%，比OptiMUS提升10%以上。
2. **无需训练即可匹配甚至超过learning-based方法**：在MamoEasy和NL4Opt上SA与LLMOPT持平（96%/97% vs 97%/93%），在MamoComplex和IndustryOR上分别提升8和10个百分点（76% vs 68%、56% vs 46%）。
3. **动态扩展（PB）是关键**：去除PB后SA显著下降，尤其复杂问题（如TSP），因无法回溯修正早期错误。
4. **不确定性反向传播（UB）提升效率**：UB在保持SA的同时降低AGT，尤其在复杂数据集上，通过剪枝低置信度节点加速搜索。
5. **Type元素提供全局指导**：TE在复杂问题（如MamoComplex）上提升显著，对图问题（TSP）尤为重要，提供全局指令（如子环消除）。
6. **Token效率优于AutoFormulation**：同等迭代次数下，SolverLLM消耗更少token但SA更高。

## 7. 优点：方法或实验设计上的亮点

- **无需训练**：完全基于测试时缩放，避免了昂贵的标注和微调，直接利用冻结的LLM。
- **模块化搜索**：六元素分解使搜索语义清晰，支持局部修正和全局指导。
- **创新的MCTS改进**：
  - 动态扩展允许非叶节点扩张，适应形式化的非线性依赖；
  - Prompt反向传播将推理信号作为知识库，实现持续学习；
  - 不确定性反向传播通过语义熵量化可靠性，提高搜索稳定性。
- **全面的实验设计**：覆盖6个难度递增的数据集，对比多种基线，包含消融、token分析、轻量模型验证和案例研究，论证充分。

## 8. 不足与局限

- **推理延迟较高**：MCTS需要多次LLM调用和代码执行，平均生成时间在2~4分钟/问题，复杂问题更长，不适合实时场景。
- **LLM输出噪声**：奖励估计和推理信号依赖LLM评判，尽管不确定性机制缓解，但本质仍受LLM能力限制，可能引入偏差。
- **数据集覆盖有限**：当前评估限于结构良好的优化问题，对高度非结构化、模糊、对抗性描述的鲁棒性未知。
- **ComplexOR数据集规模小**（19个问题），统计显著性存疑。
- **未与更先进的测试时缩放方法（如O1-like models）对比**：作为NeurIPS 2025论文，该工作可能稍早，但仍有对比缺失。
- **Code generation依赖Pyomo/Gurobi**：若求解器不可用或问题需特殊格式，可能限制适用范围。

（完）
