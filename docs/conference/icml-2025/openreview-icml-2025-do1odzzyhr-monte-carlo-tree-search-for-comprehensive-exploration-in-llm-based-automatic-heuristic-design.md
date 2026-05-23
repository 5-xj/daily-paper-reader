---
title: Monte Carlo Tree Search for Comprehensive Exploration in LLM-Based Automatic Heuristic Design
title_zh: 基于LLM的自动启发式设计中蒙特卡洛树搜索的全面探索
authors: "Zhi Zheng, Zhuoliang Xie, Zhenkun Wang, Bryan Hooi"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=Do1OdZzYHr"
tags: ["query:automatic-discovery"]
score: 9.0
evidence: 基于LLM的自动启发式设计结合MCTS探索
tldr: 将MCTS与LLM结合用于全面自动启发式设计。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-do1odzzyhr/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 372, \"height\": 340}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-do1odzzyhr/fig-002.webp\", \"caption\": \"\", \"page\": 3, \"index\": 2, \"width\": 672, \"height\": 651}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-do1odzzyhr/fig-003.webp\", \"caption\": \"\", \"page\": 35, \"index\": 3, \"width\": 1830, \"height\": 988}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-do1odzzyhr/fig-004.webp\", \"caption\": \"\", \"page\": 35, \"index\": 4, \"width\": 902, \"height\": 536}]"
motivation: 现有基于LLM的自动启发式设计方法易陷入局部最优。
method: 引入蒙特卡洛树搜索对每个启发式进行深入探索，避免早熟收敛。
result: 在复杂优化任务中生成更优的启发式规则。
conclusion: MCTS增强了LLM自动启发式设计的全局搜索能力。
---

## Abstract
Handcrafting heuristics for solving complex optimization tasks (e.g., route planning and task allocation) is a common practice but requires extensive domain knowledge. Recently, Large Language Model (LLM)-based automatic heuristic design (AHD) methods have shown promise in generating high-quality heuristics without manual interventions. Existing LLM-based AHD methods employ a population to maintain a fixed number of top-performing LLM-generated heuristics and introduce evolutionary computation (EC) to iteratively enhance the population. However, these population-based procedures cannot fully develop the potential of each heuristic and are prone to converge into local optima. To more comprehensively explore the space of heuristics, this paper proposes to use Monte Carlo Tree Search (MCTS) for LLM-based heuristic evolution. The proposed MCTS-AHD method organizes all LLM-generated heuristics in a tree structure and can better develop the potential of temporarily underperforming heuristics. In experiments, MCTS-AHD delivers significantly higher-quality heuristics on various complex tasks. Our code is available.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：为复杂优化任务（如路线规划、任务分配）手工设计启发式算法需要大量领域知识。近期基于大语言模型（LLM）的自动启发式设计（AHD）方法（如 EoH、Funsearch）通过种群进化（EC）迭代优化启发式，但存在两个关键缺陷：
  - 种群结构直接丢弃暂时表现较差的启发式，无法开发其潜力。
  - 种群容易陷入局部最优，无法全面探索启发式空间。
- **整体目标**：解决上述缺陷，实现更全面的启发式空间探索，从而生成更高质量的启发式算法。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：引入蒙特卡洛树搜索（MCTS）替代传统种群进化，将所有已生成的启发式函数组织成树结构，利用 MCTS 的选择-扩展-模拟-回传机制，允许对暂时表现不佳的节点进行开发，从而跳出局部最优。

- **关键技术细节**：
  1. **LLM-based Actions**：定义六种动作，用于生成新启发式节点：
     - `i1`：从零初始化生成。
     - `m1` / `m2`：对父节点进行变异（添加新机制/修改参数）。
     - `e1` / `e2`：交叉（从多个父节点生成全新启发式；或基于父节点并学习参考节点优点）。
     - `s1`：树路径推理，利用节点到根路径上的所有启发式进行综合分析生成改进版。
  2. **Thought-Alignment 过程**：在 LLM 输出代码后，额外一次调用生成更准确的语言描述，避免幻觉导致的代码-描述不匹配。
  3. **MCTS 设置**：
     - **选择**：使用 UCT 公式（归一化质量值 + 探索项）。
     - **扩展**：对选中节点同时生成多个子节点（2次 m1、2次 m2、1次 e2、1次 s1，共 2k+2 个）。
     - **模拟**：在评估数据集 D 上计算启发式性能作为节点质量。
     - **回传**：更新父节点的 Q 值为子节点最大 Q，N 值为子节点 N 之和。
  4. **渐进增宽（Progressive Widening）**：对已访问较多的非叶子节点，当满足条件时添加新子节点（根节点用 e1，其他节点用 e2），以利用不断更新的精英集。
  5. **探索衰减（Exploration-Decay）**：线性降低 UCT 中的探索因子 λ，早期鼓励探索，后期注重利用。
  6. **精英集 E**：动态维护性能前 10 的启发式，用于 e2 动作的参考采样。

- **整体流程**（伪代码略）：初始化 NI 个节点 → 循环进行选择、扩展（含渐进增宽）、模拟、回传，直到总评估次数达到预算 T → 输出历史最优启发式。

### 3. 实验设计：数据集/场景、Benchmark、对比方法

- **应用场景**：
  - NP-hard 组合优化问题：TSP、KP、CVRP、MKP、BPP（在线/离线）、ASP。
  - 其他优化任务：Cost-aware 贝叶斯优化（CAF 设计）、MountainCar-v0 策略优化。
- **框架**：步进式构造、蚁群优化（ACO）、引导局部搜索（GLS）、贝叶斯优化框架。
- **评估数据集**：每个任务使用 64 个实例（TSP 等）或特定实例（ASP 单实例），评价预算 T 通常为 1,000。
- **基准方法**：
  - 手动启发式：Nearest-greedy、ACO、EI 等。
  - 传统 AHD：GHPP（GP-based）。
  - 神经组合优化（NCO）：POMO、DeepACO、VRP-DACT、NeuOpt、NeuralGLS 等。
  - 现有 LLM-based AHD：Funsearch、EoH、ReEvo、HSEvo。
- **LLM 后端**：GPT-3.5-turbo、GPT-4o-mini、Claude-3.5-sonnet、DeepSeek-v3、Qwen2.5-Coder-32b-Instruct。
- **实验设置**：每个方法运行 3 次（部分任务 5-10 次），报告平均性能（Gap to optimal 或目标值）。

### 4. 资源与算力

- **计算资源**：文中明确说明所有实验在单个 Intel(R) i7-12700 CPU 上运行，未使用 GPU。
- **时间开销**：以 KP 构架框架为例，MCTS-AHD 运行 T=1,000 约需 3 小时，输入约 1M tokens，输出约 0.2M tokens，成本约 0.3 美元（GPT-4o-mini）。与其他 LLM-based AHD 方法相比无显著效率下降或成本增加。
- **未提及**：未说明电力消耗、多节点分布式等细节。

### 5. 实验数量与充分性

- **实验数量**：覆盖 8 种以上优化任务、4 种以上通用框架、多种 LLM 后端；主实验 + 消融 + 参数敏感性 + p 值检验 + 多框架对比，总计 20+ 组实验。
- **充分性**：实验设计较为充分：
  - 在多个不同难度的 NP-hard 问题（TSP、KP、CVRP、MKP、BPP、ASP）上均验证优势。
  - 消融实验验证了渐进增宽、Thought-Alignment、探索衰减、各动作的必要性。
  - 参数 λ₀ 的敏感性分析显示默认值 0.1 表现稳健。
  - 对 p 值（单尾 t 检验）的补充验证了改进的统计显著性。
  - 在黑盒设置下也进行了测试，指出 MCTS-AHD 在描述少的场景优势减弱。
- **客观性和公平性**：对比方法采用了相同种子（当需要时）、相同评估预算、相同 LLM 模型，且表格中标注了多次运行的标准差（部分）。但未公布所有运行的具体随机种子，可能引入微小偏差。

### 6. 论文的主要结论与发现

- 核心结论：MCTS-AHD 在几乎所有测试任务上均显著优于手动启发式、NCO 方法和现有 LLM-based AHD 方法（EoH、ReEvo、HSEvo、Funsearch）。
- 优势来源：MCTS 结构能开发暂时表现不佳的启发式，避免种群方法早熟收敛；树路径推理（s1 动作）进一步增强了启发式生成质量。
- 适用范围：在启发式空间复杂度高（更多子函数组合）的场景以及具有较多语言描述的场景中优势更明显；在黑盒场景（无任务描述）优势减弱。

### 7. 优点：方法或实验设计上的亮点

- **方法创新**：首次将 MCTS 应用于 LLM-based AHD，提出完整的节点构建、动作定义、渐进增宽、探索衰减、thought-alignment 等组件。
- **实验设计亮点**：
  - 覆盖多类框架（构造/ACO/GLS/BO），验证框架无关性。
  - 消融实验系统性强，拆解每个重要组件的影响。
  - 使用 p 值量化优势的统计显著性。
  - 在真实世界基准 TSPLib 上对比 GP-based 方法 GHPP，体现实际效用。
- **可复现性**：代码已开源，附带了详细的 prompt 示例和算法伪代码。

### 8. 不足与局限

- **收敛速度**：MCTS-AHD 的收敛速度仍有改进空间，文中在限制和未来工作中指出可考虑混合 MCTS-种群方法。
- **黑盒场景性能**：在无任务描述的黑盒设置下，MCTS-AHD 的优势减弱，表明对 LLM 生成质量依赖较高。
- **LLM 后端固定**：虽然测试了多个 LLM，但所有实验在同一代 LLM（GPT-4o-mini 等）上进行，未测试更强大模型（如 GPT-4）或更小模型的泛化性。
- **评估数据集大小**：部分任务评价数据集只有 64 个实例甚至单个实例（ASP），可能存在过拟合风险。
- **未覆盖所有优化类型**：仅涉及 CO 和 BO，未涉及连续优化、多目标优化等更广泛场景。
- **计算资源说明**：实验在 CPU 上进行，但与使用 GPU 的 NCO 方法对比时，未明确说明 NCO 训练的时间成本，可能存在不公平比较隐患（但主要对比是 LLM-based 方法）。

（完）
