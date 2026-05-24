---
title: "Partition to Evolve: Niching-enhanced Evolution with LLMs for Automated Algorithm Discovery"
title_zh: 分区进化：面向自动算法发现的带有生态位增强进化的LLM
authors: "Qinglong Hu, Qingfu Zhang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=OEawM2coNT"
tags: ["query:ad"]
score: 9.0
evidence: 生态位增强进化结合LLM进行自动算法发现
tldr: LLM辅助进化搜索（LES）在自动算法发现中展现潜力，但抽象语言空间对传统进化策略构成挑战。本文提出PartEvo，一个通用LES框架，通过特征辅助的生态位构建将生态位搜索策略无缝集成到抽象语言空间中。PartEvo结合生态位协作搜索和高级提示技术，有效引导LLM探索算法空间。实验表明，PartEvo在多个算法发现基准上显著优于现有LES方法。该工作为结合进化计算与LLM进行自动发现提供了新范式，具有重要的方法论价值。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-oeawm2cont/fig-001.webp\", \"caption\": \"\", \"page\": 33, \"index\": 1, \"width\": 515, \"height\": 362}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-oeawm2cont/fig-002.webp\", \"caption\": \"\", \"page\": 33, \"index\": 2, \"width\": 497, \"height\": 365}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-oeawm2cont/fig-003.webp\", \"caption\": \"\", \"page\": 33, \"index\": 3, \"width\": 497, \"height\": 385}]"
motivation: 现有LLM辅助进化搜索在抽象语言空间中面临独特挑战，经典进化策略难以有效应用，亟需适应新空间的进化机制。
method: 提出PartEvo框架，通过特征辅助的生态位构建实现抽象空间中的生态位搜索，结合协作搜索与先进提示策略。
result: 在自动算法发现任务上，PartEvo相比基线方法取得了显著改进，证明了生态位进化在语言空间的有效性。
conclusion: PartEvo为LLM辅助进化搜索提供了通用框架，显著推动了自动算法发现领域的发展。
---

## Abstract
Large language model-assisted Evolutionary Search (LES) has emerged as a promising approach for Automated Algorithm Discovery (AAD). While many evolutionary search strategies have been developed for classic optimization problems, LES operates in abstract language spaces, presenting unique challenges for applying these strategies effectively. To address this, we propose a general LES framework that incorporates feature-assisted niche construction within abstract search spaces, enabling the seamless integration of niche-based search strategies from evolutionary computation. Building on this framework, we introduce PartEvo, an LES method that combines niche collaborative search and advanced prompting strategies to improve algorithm discovery efficiency. Experiments on both synthetic and real-world optimization problems show that PartEvo outperforms human-designed baselines and surpasses prior LES methods, such as Eoh and Funsearch. In particular, on resource scheduling tasks, PartEvo generates meta-heuristics with low design costs, achieving up to 90.1\% performance improvement over widely-used baseline algorithms, highlighting its potential for real-world applications.

---

## 论文详细总结（自动生成）

### 论文总结：Partition to Evolve: Niching-enhanced Evolution with LLMs for Automated Algorithm Discovery

#### 1. 核心问题与整体含义
- **研究动机**：LLM辅助进化搜索（LES）在自动算法发现（AAD）中展现出潜力，但语言空间的抽象性和缺乏显式结构使得传统进化计算（EC）中的高级搜索策略（如生态位、空间划分）难以直接应用。
- **整体含义**：本文旨在将EC中的生态位技术引入LES，通过特征辅助的抽象空间划分，实现结构化、可控的资源分配，从而提升算法发现效率。这是首次在LES框架中系统性地集成生态位搜索，为更高效的自动算法发现提供了新范式。

#### 2. 方法论
- **核心思想**：将语言搜索空间通过特征投影映射到可计算的向量空间，利用聚类方法间接划分空间，构建生态位，在此基础上设计基于生态位的协作搜索策略。
- **关键流程**：
  1. **种群初始化**：分批生成初始算法个体（包含代码和思想），利用历史引导避免重复。
  2. **特征空间投影**：采用两种特征表示——代码相似性向量（基于CodeBLEU）和思想嵌入（BERT语义向量）。
  3. **生态位构建**：使用K-means聚类将初始群体划分为K个生态位，K控制探索-利用平衡。
  4. **进化算子**：每个生态位内并行执行四类算子：
     - **反思驱动进化 (RE)**：用Reviewer生成反思反馈，结合个体作为少样本提示生成新个体。
     - **总结驱动进化 (SE)**：Summarizer分析历史档案，提供全局知识引导。
     - **生态位间交叉 (CN)**：随机选取多个生态位的代表个体与当前生态位个体配对交叉。
     - **局部全局引导进化 (LGE)**：将个体与生态位最优、全局最优配对作为提示。
  5. **资源分配**：各生态位均匀分配采样资源，内部采用精英保留概率选择（最优个体必选，其余按性能概率选择）。
  6. **种群管理**：每轮生成 \(N + 3mK\) 个新个体，通过无放回轮盘赌维持种群大小。

#### 3. 实验设计
- **Benchmark**：四个不同类型的优化问题——
  - P1：单峰优化（含6种函数，训练/测试实例不同移位与维度）。
  - P2：多峰优化（含8种函数，训练40维、测试50维）。
  - P3：移动边缘计算任务卸载（MINLP问题，6个实例）。
  - P4：异构工厂机器级调度（非线性整数规划，4个实例）。
- **对比方法**：
  - LES方法：Funsearch、EoH、ReEvo（所有方法均使用GPT-4o-mini，采样500次）。
  - 人类设计算法：增强版GA、DE、PSO（各经过30,000次评估）。
- **实验设置**：每个benchmark独立运行4次，报告最优值、均值±标准误；训练集上进化，测试集上评估泛化能力。

#### 4. 资源与算力
- 论文未明确给出具体GPU型号、训练时长或总计算量。提及所有实验在单个CPU（Intel i9-13980HX）和32GB RAM上执行，LLM通过API调用第三方服务（GPT-4o-mini）。
- 采样预算为500次LLM查询，每次查询涉及上下文构建和生成；算法评估每轮30,000次。

#### 5. 实验数量与充分性
- **实验组数**：主要包括——
  - 4个benchmark上的主对比实验（表1、表2、图2）。
  - 采样相似性分析（表3）。
  - 消融实验：生态位粒度（K=1,2,4,6）、特征选择（随机、代码相似性、思想嵌入）、算子移除（提示中心、EC启发、全部移除）、附加实验（相同初始种群、扩展预算至2000、不同LLM、不同聚类方法、在线装箱基准）。
- **充分性与公平性**：实验设计较为充分，覆盖了不同难度的问题类型与真实场景；考虑了训练/测试泛化；进行了多轮独立运行和统计检验；消融实验分解了各组件贡献。但未与Genetic Programming、RL等传统AAD范式进行系统对比。

#### 6. 主要结论与发现
- PartEvo在所有benchmark上一致优于对比的LES方法和人类设计算法，尤其在复杂真实问题（P4）上实现**90.1%的成本降低**。
- 生态位技术显著提升搜索效率：适当粒度（K=4）达到最佳平衡；特征辅助划分优于随机划分。
- 总结驱动进化（SE）和局部全局引导进化（LGE）等算子对性能贡献最大，结合提示工程与EC技术能显著提升效率。
- 在扩展预算（2000样本）下，PartEvo仍保持领先，且未过早起停滞。

#### 7. 优点
- **方法创新**：首次在LES中系统引入生态位机制，提出通用框架可集成多种特征和聚类方法。
- **实验严谨**：多benchmark、多对比、消融覆盖、训练/测试分离、多次独立运行。
- **实用价值**：在资源受限条件下（500次LLM查询）即可生成超越人类的高效算法，成本低、效果好。
- **可扩展性**：框架设计灵活，支持未来更精细的语言空间映射和EC策略集成。

#### 8. 不足与局限
- **对LLM依赖性强**：性能受限于底层LLM能力（如反思、总结的上下文推理能力），虽然EC算子部分缓解但未根本解决。
- **语言空间理解有限**：当前特征映射（代码相似性、BERT嵌入）仍粗糙，更精细的映射方法可能进一步提升性能（论文承认此局限）。
- **计算开销**：需要大量目标函数评估（每算法30,000次），不适于昂贵黑箱优化问题（如CFD、药物设计），作者建议使用代理模型或问题分解缓解。
- **生态位数需调参**：最佳K（如4）基于经验，缺乏自动确定机制；固定大小的初始种群也可能限制了灵活性。
- **未进行跨范式比较**：未与Genetic Programming、Deep Learning、Reinforcement Learning等其他AAD范式系统对比（仅提供定性讨论）。
- **潜在偏差**：所有实验基于同一LLM（GPT-4o-mini），不同LLM的性能变化未全面分析（仅简单验证了GPT-3.5/4o）。

（完）
