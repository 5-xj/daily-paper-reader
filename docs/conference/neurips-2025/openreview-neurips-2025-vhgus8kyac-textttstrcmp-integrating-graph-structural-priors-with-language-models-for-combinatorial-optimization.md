---
title: "$\\texttt{STRCMP}$: Integrating Graph Structural Priors with Language Models for Combinatorial Optimization"
title_zh: STRCMP：整合图结构先验与语言模型的组合优化算法发现
authors: "Xijun Li, Jiexiang Yang, Jinghao Wang, Bo Peng, Jianguo Yao, Haibing Guan"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=VhGUS8kyaC"
tags: ["query:ad"]
score: 9.0
evidence: 使用神经网络（基于大模型）的算法发现
tldr: 针对现有LLM在组合优化中忽略问题结构先验导致次优解的问题，STRCMP提出结构感知的LLM算法发现框架，系统整合图结构先验来引导LLM生成更优的解决方案和专用代码。实验表明该方法在多个NP难问题上的解质量和搜索效率显著优于现有LLM方法，为自动算法发现提供了可借鉴的结构化范式。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-vhgus8kyac/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 800, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vhgus8kyac/fig-002.webp\", \"caption\": \"\", \"page\": 1, \"index\": 2, \"width\": 488, \"height\": 386}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vhgus8kyac/fig-003.webp\", \"caption\": \"\", \"page\": 4, \"index\": 3, \"width\": 336, \"height\": 371}]"
motivation: 现有LLM在组合优化中忽视问题结构先验，导致解质量低且迭代效率差。
method: 提出STRCMP框架，通过整合图结构先验到LLM的提示和微调过程中，实现结构感知的算法自动发现。
result: 实验证明STRCMP在多个NP难问题上生成更优解并提高搜索效率。
conclusion: STRCMP验证了结构先验在LLM算法发现中的关键作用，为自动发现算法开辟了新路径。
---

## Abstract
Combinatorial optimization (CO) problems, central to operation research and theoretical computer science, present significant computational challenges due to their $\mathcal{NP}$-hard nature. While large language models (LLMs) have emerged as promising tools for CO—either by directly generating solutions or synthesizing solver-specific codes—existing approaches often $\textit{neglect critical structural priors inherent to CO problems}$, leading to suboptimality and iterative inefficiency. Inspired by human experts’ success in leveraging CO structures for algorithm design, we propose $\texttt{STRCMP}$, a novel structure-aware LLM-based algorithm discovery framework that systematically integrates structure priors to enhance solution quality and solving efficiency. Our framework combines a graph neural network (GNN) for extracting structural embeddings from CO instances with an LLM conditioned on these embeddings to identify high-performed algorithms in the form of solver-specific codes. This composite architecture ensures syntactic correctness, preserves problem topology, and aligns with natural language objectives, while an evolutionary refinement process iteratively optimizes generated algorithm. Extensive evaluations across Mixed Integer Linear Programming and Boolean Satisfiability problems, using nine benchmark datasets, demonstrate that our proposed $\texttt{STRCMP}$ outperforms five strong neural and LLM-based methods by a large margin, in terms of both solution optimality and computational efficiency. The code is publicly available in the repository: https://github.com/Y-Palver/L2O-STRCMP.

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：组合优化（CO）问题（如混合整数线性规划 MILP、布尔可满足性 SAT）大多为 NP 难问题，传统精确求解代价高昂。近期大型语言模型（LLM）被用于直接生成解或生成求解器专用代码，然而现有方法**普遍忽视了 CO 问题本身固有的结构先验**（如二部图拓扑、约束稀疏性等），导致生成的解质量次优且搜索迭代效率低下。
- **核心背景**：人类专家在设计高效 CO 算法时往往充分利用问题的结构特征。受此启发，论文提出 **STRCMP**（Structure-aware CoMPosite model）——首个**系统整合图结构先验**的 LLM 驱动算法发现框架，旨在提升解的质量和求解效率。

## 2. 论文提出的方法论

- **核心思想**：将 CO 实例转换为二部图，用图神经网络（GNN）提取结构嵌入，再将结构嵌入与自然语言提示一起输入 LLM，生成求解器可执行的代码算法。随后通过进化算法进行迭代优化，进一步提升代码性能。
- **关键技术细节**：
    1. **结构提取**：构建二部图（节点为约束和变量，边为系数），使用三层图卷积网络（GCN）生成表示实例结构的嵌入 $h_q$。GNN 通过分类任务（预测问题来源领域）预训练。
    2. **结构感知代码生成**：冻结 GNN，将其嵌入与文本嵌入拼接后送入 LLM（基于 Qwen2.5-Coder-7B-Instruct），使 LLM 在生成求解器代码时感知问题拓扑。采用两阶段后训练：先进行监督微调（SFT），再进行直接偏好优化（DPO）。
    3. **进化代码精炼**：将训练好的复合模型嵌入进化算法框架（选择、交叉、变异），通过多轮迭代（基于求解器执行反馈）持续提升代码质量。
- **理论支撑**：基于信息论证明，引入额外结构先验不会降低生成模型的性能上界；若该先验为“性能增强先验”，忽略它将会降低性能上界。

## 3. 实验设计

- **数据集**：覆盖两大 CO 领域共 **9 个基准数据集**：
    - **MILP**：Set Covering、Maximum Independent Set、Multiple Knapsack（易）；MIK、CORLAT（中）；Load Balancing、Anonymous（难）。
    - **SAT**：Chromatic-Number-of-the-Plane (CNP)、CoinsGrid、Profitable-Robust-Production (PRP)、Zamkeller。
- **对比方法**：
    - **神经组合优化**：L2B、HEM（MILP）；NeuroSAT（SAT）。
    - **LLM 进化代码优化**：AutoSAT（SAT）、LLM4Solver（MILP，调整优化目标为割选择）。
- **指标**：MILP 用求解时间、原始对偶 (PD) 积分；SAT 用 PAR-2、超时数、求解时间。
- **实验设置**：训练实例与测试实例分离，使用 SCIP 8.0.0（MILP）和 EasySAT（SAT）作为后端求解器。

## 4. 资源与算力

- **硬件平台**：双 AMD EPYC 9534 64 核处理器（2.45GHz） + 两块 NVIDIA H800 80GB GPU，通过 PCIe 连接。
- **训练耗时**：GNN 训练 3–4 个 epoch，LLM 后训练每个领域 3 个 epoch（LoRA 微调），具体总时长未明确给出，但提及使用 8k（MILP）和 4k（SAT）后训练样本。

## 5. 实验数量与充分性

- **实验数量**：在 9 个数据集上对比 5 种基线，进行了主结果、收敛速度、消融实验（移除 GNN、仅 SFT、仅 DPO）、两阶段 vs. 端到端训练、底层 LLM 大小影响等多组实验。
- **充分性**：实验覆盖易、中、难不同规模的问题；报告了统计显著性（见图 12 含方差）；消融实验指向明确结论。总体上**实验设计较为全面、客观、公平**，但未涉及 TSP、VRP 等其他典型 CO 问题。

## 6. 论文的主要结论与发现

- **性能优势**：STRCMP 在 SAT 和 MILP 领域**普遍优于所有基线**，尤其是在 SAT 域超时数降低显著（如 Zamkeller 从 18 降至 5）。
- **效率提升**：相比 AutoSAT 和 LLM4Solver，STRCMP 在更少迭代次数内达到更优收敛点且波动更小。
- **结构先验关键**：消融表明移除 GNN 后性能明显下降，验证了结构先验的有效性。
- **训练策略**：两阶段训练（SFT+DPO）比端到端联合训练更稳定有效；但在某些数据集上，仅 SFT 或仅 DPO 的变体可能超过完整模型，揭示了两阶段数据分布存在冲突。
- **底层 LLM 依赖**：需要足够强的代码生成 LLM（如 Qwen2.5-7B 及以上）；结构嵌入在不同规模 LLM 上均带来一致增益。

## 7. 优点

- **创新性**：首次将图结构先验显式整合到 LLM 驱动的算法发现中，填补了现有 LLM 方法忽视问题拓扑的空白。
- **理论支撑**：给出信息论层面的理论分析，证明引入结构先验不会降低而非提升性能上界。
- **方法可扩展**：复合模型与进化算法兼容，可嵌入现有 LLM+演化框架中。
- **实验全面**：涵盖多种难度、两个领域、多个指标，消融和对比充分。

## 8. 不足与局限

- **训练策略冲突**：完整的两阶段后训练（SFT+DPO）不一定优于单一策略，暗示了训练数据分布的不一致性。
- **端到端训练困难**：联合训练 GNN 和 LLM 不稳定，梯度难以协调，目前只能采用分离训练。
- **泛化性局限**：实验仅覆盖 MILP 和 SAT，未验证在路径规划、调度等其他 CO 问题上的效果。
- **LLM 选择制约**：底层 LLM 需要具备强大的代码生成能力（如 7B 参数以上），限制了低资源场景的应用。
- **可解释性随着问题复杂度下降**：虽然代码可审查，但复杂算法仍需要专家进一步分析，并非完全透明。
- **计算开销**：进化迭代中反复调用求解器进行评估，整体计算成本仍较高（文中未详细量化）。

（完）
