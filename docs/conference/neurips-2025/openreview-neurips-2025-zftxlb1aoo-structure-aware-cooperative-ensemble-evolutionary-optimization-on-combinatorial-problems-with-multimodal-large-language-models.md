---
title: Structure-Aware Cooperative Ensemble Evolutionary Optimization on Combinatorial Problems with Multimodal Large Language Models
title_zh: 基于多模态大语言模型的结构感知协同集成进化优化方法
authors: "Jie Zhao, Kang Hao Cheong"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=zftxlb1AOo"
tags: ["query:ad"]
score: 8.0
evidence: 多模态大语言模型作为进化算子用于组合优化
tldr: 该论文针对传统进化算法在组合优化中难以捕捉图结构的问题，提出了利用多模态大语言模型作为进化算子的协同集成进化优化框架。通过图像编码保留拓扑上下文，并采用图稀疏化技术处理大规模网络。实验表明该方法在多个组合优化问题上取得了更优的效果。这一工作为将大语言模型嵌入进化计算实现自动发现提供了有效范式。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-zftxlb1aoo/fig-001.webp\", \"caption\": \"\", \"page\": 6, \"index\": 1, \"width\": 512, \"height\": 512}]"
motivation: 传统进化算法编码难以捕捉图结构特性，限制了对大规模组合优化问题的求解效果。
method: 利用多模态大语言模型作为进化算子，通过图像编码保留拓扑信息，并结合图稀疏化与协同集成策略进行结构感知优化。
result: 在多个图结构组合优化基准上，所提方法优于传统进化算法和部分启发式方法。
conclusion: 多模态大语言模型作为进化算子能有效提升图结构问题的优化性能，为自动发现算法开辟新路径。
---

## Abstract
Evolutionary algorithms (EAs) have proven effective in exploring the vast solution spaces typical of graph-structured combinatorial problems. However, traditional encoding schemes, such as binary or numerical representations, often fail to straightforwardly capture the intricate structural properties of networks. Through employing the image-based encoding to preserve topological context, this study utilizes multimodal large language models (MLLMs) as evolutionary operators to facilitate structure-aware optimization over graph data. To address the visual clutter inherent in large-scale network visualizations, we leverage graph sparsification techniques to simplify structures while maintaining essential structural features. To further improve robustness and mitigate bias from different sparsification views, we propose a cooperative evolutionary optimization framework that facilitates cross-domain knowledge transfer and unifies multiple sparsified variants of diverse structures. Additionally, recognizing the sensitivity of MLLMs to network layout, we introduce an ensemble strategy that aggregates outputs from various layout configurations through consensus voting. Finally, experiments on real-world networks through various tasks demonstrate that our approach improves both the quality and reliability of solutions in MLLM-driven evolutionary optimization.

---

## 论文详细总结（自动生成）

# 论文结构化中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：传统进化算法（EAs）在处理图结构组合优化问题（如影响力最大化）时，通常采用二进制或数值编码，难以直接捕捉网络的拓扑结构和上下文信息，导致搜索操作盲目、效率低下。
- **研究动机**：多模态大语言模型（MLLMs）能同时处理视觉和文本信息，通过图像编码可以保留网络的结构细节，从而作为一种“结构感知”的进化算子。但直接对大规模网络可视化会产生视觉混乱，且MLLM对布局敏感，单次结果存在偏差。
- **整体含义**：论文旨在构建一个**协同集成进化优化框架**，利用图稀疏化降低复杂度，通过多稀疏化视图协同与多布局集成提升优化质量和鲁棒性，从而为复杂网络组合优化提供一种新范式。

## 2. 论文提出的方法论

### 2.1 核心思想
- 使用**图像编码**将网络和候选解同时渲染为图片，MLLM基于视觉输入执行初始化、交叉、变异等进化操作，实现结构感知的搜索。
- 针对大规模网络，采用**图稀疏化**（度-based、社区-based）生成简化子图，保留关键结构并控制节点/边数（固定50节点、100边）。
- 构建**主从架构的协同进化**：多个子处理器各自在不同稀疏化网络上独立进化，通过主单元（Master）收集精英解并实现跨域知识迁移（投影-注入机制）。
- 针对布局敏感问题，引入**集成策略**：对同一网络生成多种布局（KK、FR、GraphOpt）的图片，分别调用MLLM生成候选解，通过**共识投票**聚合结果。

### 2.2 关键技术细节
- **图稀疏化算子**：S(G; θ)输出G_s，支持度-based和社区-based两种策略。
- **跨域映射**：
  - 投影：ϕ_i: V_s → V，将稀疏化节点映射回原图。
  - 注入：ϕ_i⁻¹: V → V_s，将原图精英解映射回稀疏化域，若节点数不足k则用填充策略补齐。
- **主单元精英池**：存储子处理器传来的最佳解(包含生成代数)，通过老化阈值Δg淘汰旧解，池大小限制为N_E。
- **MLLM-based操作**：
  - 初始化：MLLM_init( I_init(G, Θ); N_p )
  - 交叉：MLLM_crossover( I(G,Θ,s_i), I(G,Θ,s_j) )，集成版本对L个布局分别调用后共识投票。
  - 变异：MLLM_mutate( I(G,Θ,s) )，同样支持集成。
- **共识投票**：节点按出现频率投票，选取满足阈值的节点；若不足k，按未覆盖邻居数贪心补充。

### 2.3 算法流程（文字说明）
1. **稀疏化**：生成n_s个不同稀疏化网络G_s。
2. **初始化**：在每个稀疏化域内用MLLM初始化种群。
3. **协同进化循环**：
   - 每代：各子处理器独立执行交叉/变异（基于集成MLLM）生成子代，评估适应度（在原图上用EDV代理）。
   - 每T代：各子处理器将精英解投影到原图发送给Master，Master更新精英池（去旧、保留Top N_E）。
   - 子处理器从Master接收精英解，注入到本地种群。
4. **输出**：最终精英池中的最优解。

## 3. 实验设计

### 3.1 数据集/场景
- **8个真实网络**：USAir (332节点)、Netscience (379)、Polblogs (1222)、Facebook (4039)、WikiVote (7066)、MSU24 (24568)、Texas84 (36365)、Rutgers89 (32361)。覆盖从小到大规模。
- **任务**：主任务为影响力最大化；附加任务包括网络拆解、网络免疫、TSP（15/20节点实例）。

### 3.2 Benchmark
- **对比方法**：
  - 单域稀疏化进化：Spars-D-EO（度稀疏）、Spars-C-EO（社区稀疏）。
  - 先进进化算法：SAEP（自适应）、CoeCo（分治）、SSR（搜索空间缩减）。
  - 单布局MLLM变体：MLLM-KK、MLLM-FR、MLLM-GraphOpt。
  - 概率型进化（Vanilla EO）。

### 3.3 实验设置
- 稀疏化后图：|V|=50, |E|=100。
- 种群大小20，交叉概率0.2，变异概率0.1，种子大小k根据不同网络设定（文中未统一给出，依赖网络规模）。
- MLLM：gpt-4o-2024-11-20。
- 每实验10次独立运行取均值和标准差；部分实验30次运行。

## 4. 资源与算力
- **未明确说明使用的GPU型号、数量及训练时长**。论文仅提供了MLLM API调用时间（表6、图10），如gpt-4o-2024-11-20每次交叉约3.5秒，变异约2.4秒；Gemini-2.0-flash-lite更快。但整体计算成本未系统报告。

## 5. 实验数量与充分性
- **实验组数**：至少包括：
  - 协同优化与单域对比（表2，8个网络×5个对比方法）。
  - 集成策略与单布局对比（表4，8个网络×5个对比方法）。
  - 初始化分布分析（图6，2种稀疏化×3种布局×8网络）。
  - 布局/稀疏化对验证率的影响（图11、12，多维度热图）。
  - 变异操作中移除/添加节点度数对比（图13）。
  - 额外任务：网络拆解（图7）、TSP（图8）、免疫（图14）。
  - 消融：知识迁移间隔（表3）、填充策略（表5）。
- **充分性评价**：**充分且客观**。统计检验（Wilcoxon符号秩检验）标定显著差异；报告均值、标准差和标准误；覆盖多种网络规模、多种任务、多种MLLM布局变体，对比基线包括传统经典方法和近期先进方法。

## 6. 主要结论与发现
1. **协同框架有效性**：Co-MLLM(KK)在8个网络中平均排名1.38，显著优于单域稀疏化方法和传统EA（SAEP等），证明跨域知识迁移能提升优化性能。
2. **集成策略优势**：MLLM-Ensemble在多数网络上表现最佳，平均排名1.13，优于任何单布局MLLM，说明共识投票可缓解布局敏感性。
3. **MLLM结构感知能力**：变异操作中添加的节点度数显著高于移除的节点（图13），表明MLLM能基于视觉理解结构重要性。
4. **泛化性**：在影响最大化、网络拆解、免疫、TSP四种任务上均验证了MLLM-based进化优化的潜力。

## 7. 优点
- **方法创新性**：首个系统性将MLLM作为结构感知进化算子、结合图稀疏化与协同集成框架的工作，为LLM辅助进化优化提供新思路。
- **跨域知识迁移机制**：通过投影-注入解决不同稀疏化域间的异构性问题，设计精巧。
- **鲁棒性增强**：多布局集成投票有效克服MLLM对布局的敏感，提高了优化的稳定性和可靠性。
- **实验全面**：涵盖多种图规模（332~36365节点）、多种任务类型（子集选择、顺序决策、排列优化），验证充分。

## 8. 不足与局限
- **图稀疏化的固有局限**：
  - 子集选择问题：可视化节点上限约200，当候选解规模或必要节点数超过此上限时方法失效。
  - 置换问题（如TSP）：不能应用稀疏化，需完整图，限制了方法在排列优化上的直接推广。
- **MLLM幻觉风险**：MLLM输出可能违反约束（如节点不存在、重复选择），尽管论文设计了验证机制（T1~T3），但仍需额外后处理，增加复杂性。
- **计算成本**：依赖商业MLLM API，有调用延迟和费用；论文未量化完整优化过程的算力消耗。
- **布局和稀疏化的交互影响**：不同布局/稀疏化组合下验证率存在差异（图11/12），虽集成缓解了偏差，但未完全消除。
- **实验仅覆盖有限任务**：主要围绕图结构组合问题，未能验证在其他类型（如连续优化）上的适用性。

（完）
