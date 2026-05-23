---
title: Autoformulation of Mathematical Optimization Models Using LLMs
title_zh: 使用大语言模型自动公式化数学优化模型
authors: "Nicolás Astorga, Tennison Liu, Yuanzhang Xiao, Mihaela van der Schaar"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=33YrT1j0O0"
tags: ["query:automatic-discovery"]
score: 8.0
evidence: LLM从自然语言自动构建数学优化模型
tldr: 自动公式化使用LLM从描述自动创建求解器就绪优化模型。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-33yrt1j0o0/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 678, \"height\": 398}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-33yrt1j0o0/fig-002.webp\", \"caption\": \"\", \"page\": 2, \"index\": 2, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-33yrt1j0o0/fig-003.webp\", \"caption\": \"\", \"page\": 2, \"index\": 3, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-33yrt1j0o0/fig-004.webp\", \"caption\": \"\", \"page\": 2, \"index\": 4, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-33yrt1j0o0/fig-005.webp\", \"caption\": \"\", \"page\": 2, \"index\": 5, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-33yrt1j0o0/fig-006.webp\", \"caption\": \"\", \"page\": 2, \"index\": 6, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-33yrt1j0o0/fig-007.webp\", \"caption\": \"\", \"page\": 2, \"index\": 7, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-33yrt1j0o0/fig-008.webp\", \"caption\": \"\", \"page\": 2, \"index\": 8, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-33yrt1j0o0/fig-009.webp\", \"caption\": \"\", \"page\": 5, \"index\": 9, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-33yrt1j0o0/fig-010.webp\", \"caption\": \"\", \"page\": 5, \"index\": 10, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-33yrt1j0o0/fig-011.webp\", \"caption\": \"\", \"page\": 5, \"index\": 11, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-33yrt1j0o0/fig-012.webp\", \"caption\": \"\", \"page\": 5, \"index\": 12, \"width\": 512, \"height\": 512}]"
motivation: 将现实问题转化为优化模型需要专业知识，难度大。
method: 提出基于LLM的自动公式化方法，在广阔假设空间中高效探索并验证正确定性。
result: 能够从自然语言描述生成求解器就绪的优化模型。
conclusion: LLM可以自动化优化建模，降低专业门槛。
---

## Abstract
Mathematical optimization is fundamental to decision-making across diverse domains, from operations research to healthcare. Yet, translating real-world problems into optimization models remains a difficult task, often demanding specialized expertise. This paper approaches the problem of $\textit{autoformulation}$: the automated creation of solver-ready optimization models from natural language problem descriptions.
We identify three core challenges of autoformulation: $\textit{(1)}$ the vast, problem-dependent hypothesis space, $\textit{(2)}$ efficient and diverse exploration of this space under uncertainty, and $\textit{(3)}$ evaluation of formulation correctness against problem description.
To address these challenges, we present a novel method leveraging $\textit{Large Language Models}$ (LLMs) with $\textit{Monte-Carlo Tree Search}$, exploiting the hierarchical nature of optimization modeling to generate and systematically explore possible formulations. To enhance search efficiency, we introduce symbolic pruning to eliminate trivially equivalent search paths (branches), and employ LLM-based evaluation of partial formulations to guide search.
Empirical analysis on linear and mixed-integer programming benchmarks demonstrates our method's effectiveness, with significant performance gains from both LLM-based value estimation and symbolic pruning techniques.

---

## 论文详细总结（自动生成）

### 论文详细中文总结

#### 1. 论文的核心问题与整体含义（研究动机和背景）

数学优化在运筹学、医疗、供应链等领域至关重要，但将现实世界问题转化为精确的优化模型（变量、约束、目标函数）需要深厚的专业知识，成为瓶颈。本文聚焦 **autoformulation（自动公式化）**：即从自然语言问题描述自动创建求解器就绪的优化模型。其动机是让领域专家无需深入优化知识也能使用优化工具，同时辅助建模人员快速原型迭代。作者指出自动公式化面临三大挑战：  
- **[C1] 问题相关的巨大假设空间**：不同问题需要不同的变量、约束结构、目标函数，且相互依赖，难以手动枚举。  
- **[C2] 高效搜索**：好公式稀疏，存在冗余（语法不同但功能等价的公式），且需要平衡开发与探索。  
- **[C3] 公式正确性评估**：求解器只能评估可解性和最优性，无法判断公式是否忠实反映问题意图。

#### 2. 论文提出的方法论

**核心思想**：将自动公式化视为搜索问题，利用优化建模的层次结构，结合 **Monte-Carlo Tree Search (MCTS)** 与 **Large Language Models (LLMs)** 进行系统探索。

**关键技术细节**：
1. **层次分解**：将完整公式分解为四个顺序组件：  
   - `m1`：参数与决策变量  
   - `m2`：目标函数  
   - `m3`：等式约束  
   - `m4`：不等式约束  
   搜索树深度为4，每条路径对应一个完整公式。
2. **MCTS 流程**：
   - **扩展（Expansion）**：到达未展开节点时，用 LLM 生成 `H=10` 个候选子节点（条件于部分公式和问题描述）。  
   - **剪枝（Pruning）**：使用 SMT 求解器检测逻辑等价公式，消除冗余分支；对于决策变量，用 LLM 判断等价。  
   - **评估（Evaluation）**：对新子节点，用 LLM 进行对比排序（rank from 1 to |Child|），归一化后作为初始值 `V_prior`；保留排名前 `I=3` 的节点。  
   - **选择（Selection）**：使用 UCB1 (UCT) 公式选择最有前景的子节点。  
   - **回传（Backpropagation）**：终端节点获得完整公式奖励 `r = I(solver_success) * E_LLM(formulation)`，其中 `E_LLM` 采用对比评估（与基线模型比较）。奖励加权平均回传至路径上所有节点，更新 `V_bp`；最终节点值 `V = λ·V_prior + (1-λ)·V_bp`。
3. **双奖励机制**：同时考虑求解器能否成功求解（二进制）和 LLM 对公式正确性的评估（连续分数）。
4. **最终输出**：执行 `T=16` 次 rollout，返回最多 `M` 个功能不同的公式及奖励值。

#### 3. 实验设计

**数据集/场景**（四个基准）：  
- **NL4OPT**：244 个线性规划问题（来自 NeurIPS 竞赛）。  
- **IndustryOR**：100 个真实行业问题（LP/IP/MILP，含难度分级）。  
- **MAMO（ComplexLP）**：211 个复杂线性规划问题。  
- **ComplexOR**：37 个真实运筹问题（实验中用其中 18 个公开问题）。

**评估指标**：执行准确率（公式求解得到的最优值与真实值误差≤5%），报告 Pass@1, Pass@3, Pass@All。

**对比方法**：  
- Standard（零样本 GPT-4）  
- Reflexion（反思增强）  
- Chain-of-Experts（多智能体框架）  
- OptiMUS（多智能体）  
- ORLM（基于 Llama3-8B 微调）

所有基线使用 GPT4-0613 作为 LLM（ORLM 除外）。

#### 4. 资源与算力

论文未明确说明使用的 GPU 型号、数量或训练时长。仅提及所有实验基于 GPT4-0613 API，属于在线推理。MCTS 搜索共 16 次 rollout，每次展开调用 LLM（生成候选+评估）。未给出总 token 消耗或计算成本。

#### 5. 实验数量与充分性

主要实验包括：  
- **基准对比**（Table 1）：在 4 个数据集上与 5/6 种基线对比。  
- **消融分析**：  
  - 公式正确性评估的两种方式（对比评估 vs 直接评分）的比较（biserial correlation 0.48 vs 0.23）。  
  - 部分公式初始值评估（贪心路径 vs 随机路径，Figure 3）。  
  - 搜索效率分析（剪枝与排名保留的累计减少，Figure 4）。  
  - 发现率曲线（Figure 5）。  
  - 细粒度表现按问题难度和类型（Table 2）。  
  - 错误来源分析（专家评估 18 个错误公式，Table 3）。  
- **额外对照**：Appendix A 中的 Tree-of-Thought 和 Sequential 基线。  
- **Pass@N vs Best-of-N 对比**（Appendix A Tables 4-5）。

实验较为充分：覆盖了主要基准、多次消融、专家评审。公平性方面，所有基线使用相同 LLM 设置（GPT-4），ORLM 微调模型单独列出。对比标准一致（执行准确率）。不足之处在于未进行不同 LLM（如 Claude、Llama）的泛化实验，且未测试更大规模或非线性问题。

#### 6. 论文的主要结论与发现

1. **Autoformulator（N=3）在全部四个基准上超越所有基线**：NL4OPT 92.21%（ORLM 85.7%）、IndustryOR 42%（ORLM 38%）、MAMO 61.4%（ORLM 39.3%）、ComplexOR 72.2%（ORLM 44.4%）。
2. **LLM 对比评估有效**：对比评估的 biserial correlation 0.48（p<0.01），远高于直接评分的 0.23（不显著）。
3. **SMT 剪枝显著减少搜索空间**：累积生成量可减少数千倍（Figure 4）。
4. **贪心选择（高初始值节点）可显著提高正确率**（Figure 3）。
5. **错误主要来自约束建模**：不等式/等式约束错误占 54%，LLM 评估与专家判断一致率 82%。
6. **更多 rollout 持续发现新公式**，但边际收益递减。

#### 7. 优点

1. **结构化层次分解**：将复杂公式化过程分解为有序组件，降低搜索难度，允许条件生成。
2. **MCTS 系统探索**：比一次性生成或简单迭代更有效，平衡开发与探索。
3. **双奖励评估**：结合求解器二值反馈和 LLM 语义正确性评估，弥补单一信号的不足。
4. **SMT 剪枝**：自动检测语法不同但等价公式，有效避免冗余搜索，提升多样性。
5. **对比评估替代绝对评分**：提高 LLM 评估的稳定性和区分度。
6. **公开代码**：提供可复现仓库。

#### 8. 不足与局限

1. **实验覆盖有限**：仅测试线性与混合整数规划，未覆盖非线性、凸优化或需高级重公式化的问题（论文提及，但未实验）。
2. **算力与成本隐忧**：未报告实际 GPU 小时或 API 成本；MCTS 每步多次调用 LLM，可能昂贵。
3. **依赖 LLM 评估可靠性**：尽管对比评估优于直接评分，但 LLM 仍有误判可能（专家检查显示 18% 不一致）。
4. **SMT 剪枝的局限性**：对于非线性或混合整数域，SMT 可能不可判定，需保守处理，可能保留冗余。
5. **错误模式集中**：约束建模错误（尤其不等式）仍高达 54%，说明 LLM 在复杂约束理解上存在系统性缺陷。
6. **未与强化学习或交互式人类反馈结合**：当前方法完全自动化，缺少主动纠正机制。
7. **Benchmark 规模问题**：IndustryOR 仅 100 题，ComplexOR 仅 18 题公开，统计稳定性有限。

（完）
