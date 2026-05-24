---
title: Autoformulation of Mathematical Optimization Models Using LLMs
title_zh: 使用大语言模型自动制定数学优化模型
authors: "Nicolás Astorga, Tennison Liu, Yuanzhang Xiao, Mihaela van der Schaar"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=33YrT1j0O0"
tags: ["query:automatic-discovery"]
score: 8.0
evidence: 使用LLM从自然语言自动生成优化模型，探索假设空间
tldr: 使用LLM从自然语言自动生成求解器就绪的优化模型，解决探索和评估挑战。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-33yrt1j0o0/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 678, \"height\": 398}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-33yrt1j0o0/fig-002.webp\", \"caption\": \"\", \"page\": 2, \"index\": 2, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-33yrt1j0o0/fig-003.webp\", \"caption\": \"\", \"page\": 2, \"index\": 3, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-33yrt1j0o0/fig-004.webp\", \"caption\": \"\", \"page\": 2, \"index\": 4, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-33yrt1j0o0/fig-005.webp\", \"caption\": \"\", \"page\": 2, \"index\": 5, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-33yrt1j0o0/fig-006.webp\", \"caption\": \"\", \"page\": 2, \"index\": 6, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-33yrt1j0o0/fig-007.webp\", \"caption\": \"\", \"page\": 2, \"index\": 7, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-33yrt1j0o0/fig-008.webp\", \"caption\": \"\", \"page\": 2, \"index\": 8, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-33yrt1j0o0/fig-009.webp\", \"caption\": \"\", \"page\": 5, \"index\": 9, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-33yrt1j0o0/fig-010.webp\", \"caption\": \"\", \"page\": 5, \"index\": 10, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-33yrt1j0o0/fig-011.webp\", \"caption\": \"\", \"page\": 5, \"index\": 11, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-33yrt1j0o0/fig-012.webp\", \"caption\": \"\", \"page\": 5, \"index\": 12, \"width\": 512, \"height\": 512}]"
motivation: 将现实问题转化为优化模型需要专业知识，自动化有挑战。
method: 利用LLM探索假设空间，进行多样搜索并评估公式正确性。
result: 能够从问题描述自动生成优化模型。
conclusion: LLM可自动制定优化模型，降低专业门槛。
---

## Abstract
Mathematical optimization is fundamental to decision-making across diverse domains, from operations research to healthcare. Yet, translating real-world problems into optimization models remains a difficult task, often demanding specialized expertise. This paper approaches the problem of $\textit{autoformulation}$: the automated creation of solver-ready optimization models from natural language problem descriptions.
We identify three core challenges of autoformulation: $\textit{(1)}$ the vast, problem-dependent hypothesis space, $\textit{(2)}$ efficient and diverse exploration of this space under uncertainty, and $\textit{(3)}$ evaluation of formulation correctness against problem description.
To address these challenges, we present a novel method leveraging $\textit{Large Language Models}$ (LLMs) with $\textit{Monte-Carlo Tree Search}$, exploiting the hierarchical nature of optimization modeling to generate and systematically explore possible formulations. To enhance search efficiency, we introduce symbolic pruning to eliminate trivially equivalent search paths (branches), and employ LLM-based evaluation of partial formulations to guide search.
Empirical analysis on linear and mixed-integer programming benchmarks demonstrates our method's effectiveness, with significant performance gains from both LLM-based value estimation and symbolic pruning techniques.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）
- **研究动机**：将现实世界的优化问题（如供应链管理、医疗资源分配）转化为数学优化模型通常需要深厚的专业知识，这一过程耗时且易错。论文旨在实现“自动制定”（autoformulation）——从自然语言描述自动创建可直接由求解器处理的优化模型。
- **核心挑战**：作者识别出三大挑战：  
  (1) **问题依赖的假设空间庞大**：变量、约束、目标函数及其依赖关系随问题变化，无法手动枚举。  
  (2) **高效且多样化的搜索**：好的公式稀疏，存在公式等价性（语法不同但功能相同）导致的冗余，以及需求模糊带来的不确定性。  
  (3) **公式正确性评估**：求解器只能评估计算效率，无法判断公式是否忠实反映问题需求。

---

### 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：将自动形式化视为搜索问题，利用优化建模固有的层次结构，结合大语言模型（LLM）和蒙特卡洛树搜索（MCTS）进行探索，并使用符号剪枝消除冗余。
- **关键技术细节**：
  - **层次分解**：将数学建模分解为4个阶段：`m1`参数和决策变量、`m2`目标函数、`m3`等式约束、`m4`不等式约束。每个阶段依赖之前的部分公式。
  - **MCTS搜索**：构建深度为4的搜索树，每层对应一个建模阶段。迭代执行选择（UCT）、扩展、评估、反向传播。
  - **扩展（Expansion）**：对未扩展节点，用LLM生成H个候选子节点（条件于部分公式和问题描述），然后通过SMT求解器进行符号剪枝，删除语法不同但功能等价的公式（例如`2x+3y`与`3y+2x`），保留I个最优候选（基于LLM对比排序）。
  - **评估（Evaluation）**：
    - 对部分公式：LLM对候选子节点进行相对排名（1到N），归一化为[0,1]作为先验价值$V_{\text{prior}}$。
    - 对完整公式（终端节点）：采用双重奖励 $r = \mathbb{I}( \text{solver成功} ) \cdot \text{LLM正确性评分}$。LLM评分采用与一组基线模型比较的相对评估，避免孤立打分的不稳定性。
  - **反向传播**：更新路径上每个节点的价值$V_{\text{bp}}$和访问次数$N$，最终节点价值为$V = \lambda V_{\text{prior}} + (1-\lambda)V_{\text{bp}}$。
  - **选择（Selection）**：使用UCT公式平衡探索与利用。
- **公式等价性检测**：利用SMT求解器，对目标函数、等式/不等式约束集进行逻辑等价性检查（如$\forall x: f^{(i)}(x)=f^{(j)}(x)$），不可判定时保守保留。

---

### 3. 实验设计：数据集、基准、对比方法
- **数据集**：
  - **NL4OPT**：244个线性规划问题（来自NeurIPS竞赛）。
  - **IndustryOR**：100个线性/整数/混合整数规划问题，分Easy/Medium/Hard。
  - **MAMO (ComplexLP)**：211个复杂线性规划问题。
  - **ComplexOR**：37个实际运营研究问题（可公开获取18个）。
- **评估指标**：准确率（执行正确率，允许5%误差），Pass@N和Best-of-N。
- **对比方法**：
  - **Finetuned方法**：ORLM（基于Llama3-8B微调）。
  - **GPT-4基础方法**：Standard（零样本）、Reflexion（反思）、Chain-of-Experts（多智能体）、OptiMUS（多智能体）。
  - **消融对比**：Tree-of-Thought（深度优先搜索）、Sequential（无结构化搜索）。

---

### 4. 资源与算力
- 原文**未明确说明**使用的GPU型号、数量、训练时长等算力信息。仅指出所有实验均基于GPT4-0613（API调用），未涉及自身模型的预训练或微调。对于ORLM等微调方法，论文引用了原始文献，但未复现其训练开销。因此，该部分信息缺失。

---

### 5. 实验数量与充分性
- **实验数量**：主实验在4个基准上对比了7种方法（含自身变体）；消融实验包括：评估正确性（图3、图4）、搜索效率（图5）、细粒度分析（表2、表3）。整体实验较充分。
- **充分性与公平性**：
  - 使用统一的GPT4-0613作为基础LLM，对比基线均采用相同设置（或引用原论文结果）。
  - 在IndustryOR上进行了额外的Pass@N和Best-of-N分析，证实结构化搜索优于朴素采样。
  - 专家对18个ComplexOR问题进行了错误来源分析，验证了目标值评估的可靠性（82%一致）。
  - 局限：仅测试LP/MILP类型，未覆盖非线性、非凸或需要创造性重形式的问题；未与其他LLM（如Llama、Claude）对比；SMT剪枝在非线性混合整数情况下可能低效。

---

### 6. 论文的主要结论与发现
- **性能超越**：Autoformulator在Pass@3下超越所有基线（包括微调模型ORLM），在NL4OPT上达92.21%，IndustryOR上42%，MAMO上61.4%，ComplexOR上72.2%。
- **搜索效率**：符号剪枝使候选数减少约20%，层次化探索相比非层次方案可减少1000倍生成量。
- **评估有效性**：LLM的比较式评估（对比基线）与专家判断的相关性（biserial r=0.48）显著高于直接评分（r=0.23）。
- **错误模式**：约束建模（尤其不等式）是主要错误源（占54%），目标变量和等式约束错误较少。目标值匹配并非完全等价于语义正确（18个案例中有4个不一致）。

---

### 7. 优点：方法或实验设计上的亮点
- **方法创新**：
  - 首次将MCTS与LLM结合用于优化模型自动制定，利用层次结构逐步探索。
  - 符号剪枝（SMT）有效消除琐碎等价公式，提升搜索多样性。
  - 双重评估（求解器+LLM比较）提供更可靠的奖励信号，部分公式的先验价值引导早期搜索。
- **实验设计**：
  - 覆盖多个公开基准，包含不同难度和类型（LP/IP/MIP）。
  - 提供细粒度错误分析，揭示模型弱点。
  - 消融实验清晰展示各组件贡献（剪枝、评估、层次搜索）。

---

### 8. 不足与局限
- **实验覆盖**：
  - 仅涉及线性/整数规划，未测试非线性、凸优化或需要重形式的问题（如二阶锥规划、半定规划）。
  - 仅使用GPT4，缺乏对多个LLM（如Llama、Claude、Gemini）的横向对比。
- **技术局限**：
  - SMT剪枝在非线性或混合整数域可能不可判定（论文中采取保守保留，可能仍有冗余）。
  - LLM评估仍非完美，与专家判断有约18%不一致，存在幻觉风险。
  - 方法依赖多次LLM调用（H=10, I=3, T=16），计算成本较高，但论文未报告具体开销。
- **应用限制**：
  - 未讨论部署于关键决策场景时的安全性和可解释性。
  - 自动生成的错误公式可能误导用户，需要人工验证。
- **多样性不足**：当前基准多来自学术或竞赛，现实世界问题可能更复杂（如隐式约束、多目标、随机性）。

---

（完）
