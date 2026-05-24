---
title: Language Modeling by Language Models
title_zh: 通过语言模型进行语言模型建模
authors: "Junyan Cheng, Peter Clark, Kyle Richardson"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=VrCdsZBbIg"
tags: ["query:ad"]
score: 9.0
evidence: 多智能体LLM系统结合遗传规划自动发现语言模型架构
tldr: 本文探索利用LLM自动发现新语言模型架构。提出Genesys系统，通过多智能体协作模拟完整研究流程，包括构思、文献搜索、代码生成、预训练和评估。结合遗传规划骨干和“尺度阶梯”策略，在逐渐增大的模型规模上选择性验证候选架构。实验表明，Genesys能够发现多个性能更优的小型语言模型架构。该工作为自动化算法发现提供了通用框架，展示了LLM与进化计算结合的强大能力。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 856, \"height\": 856}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-002.webp\", \"caption\": \"\", \"page\": 2, \"index\": 2, \"width\": 5395, \"height\": 2325}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-003.webp\", \"caption\": \"\", \"page\": 3, \"index\": 3, \"width\": 4710, \"height\": 1440}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-004.webp\", \"caption\": \"\", \"page\": 3, \"index\": 4, \"width\": 3890, \"height\": 1595}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-005.webp\", \"caption\": \"\", \"page\": 5, \"index\": 5, \"width\": 4650, \"height\": 1500}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-006.webp\", \"caption\": \"\", \"page\": 6, \"index\": 6, \"width\": 9870, \"height\": 3270}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-007.webp\", \"caption\": \"\", \"page\": 6, \"index\": 7, \"width\": 4765, \"height\": 1050}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-008.webp\", \"caption\": \"\", \"page\": 7, \"index\": 8, \"width\": 1110, \"height\": 1080}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-009.webp\", \"caption\": \"\", \"page\": 8, \"index\": 9, \"width\": 772, \"height\": 578}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-010.webp\", \"caption\": \"\", \"page\": 8, \"index\": 10, \"width\": 772, \"height\": 591}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-011.webp\", \"caption\": \"\", \"page\": 42, \"index\": 11, \"width\": 3245, \"height\": 1870}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-012.webp\", \"caption\": \"\", \"page\": 42, \"index\": 12, \"width\": 3245, \"height\": 1870}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-013.webp\", \"caption\": \"\", \"page\": 42, \"index\": 13, \"width\": 1460, \"height\": 1411}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-014.webp\", \"caption\": \"\", \"page\": 43, \"index\": 14, \"width\": 3456, \"height\": 2234}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-015.webp\", \"caption\": \"\", \"page\": 47, \"index\": 15, \"width\": 1107, \"height\": 1102}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-016.webp\", \"caption\": \"\", \"page\": 47, \"index\": 16, \"width\": 1158, \"height\": 1141}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-017.webp\", \"caption\": \"\", \"page\": 48, \"index\": 17, \"width\": 1472, \"height\": 840}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-018.webp\", \"caption\": \"\", \"page\": 48, \"index\": 18, \"width\": 1504, \"height\": 1108}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-019.webp\", \"caption\": \"\", \"page\": 48, \"index\": 19, \"width\": 1089, \"height\": 1025}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-020.webp\", \"caption\": \"\", \"page\": 48, \"index\": 20, \"width\": 1096, \"height\": 1011}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-021.webp\", \"caption\": \"\", \"page\": 48, \"index\": 21, \"width\": 1055, \"height\": 1004}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-022.webp\", \"caption\": \"\", \"page\": 49, \"index\": 22, \"width\": 1743, \"height\": 923}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-023.webp\", \"caption\": \"\", \"page\": 49, \"index\": 23, \"width\": 1308, \"height\": 940}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-024.webp\", \"caption\": \"\", \"page\": 49, \"index\": 24, \"width\": 1282, \"height\": 911}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-025.webp\", \"caption\": \"\", \"page\": 49, \"index\": 25, \"width\": 1381, \"height\": 1014}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-026.webp\", \"caption\": \"\", \"page\": 49, \"index\": 26, \"width\": 1364, \"height\": 1016}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-027.webp\", \"caption\": \"\", \"page\": 50, \"index\": 27, \"width\": 1222, \"height\": 1010}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-028.webp\", \"caption\": \"\", \"page\": 50, \"index\": 28, \"width\": 1184, \"height\": 1017}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-029.webp\", \"caption\": \"\", \"page\": 50, \"index\": 29, \"width\": 1218, \"height\": 1015}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-030.webp\", \"caption\": \"\", \"page\": 50, \"index\": 30, \"width\": 1610, \"height\": 1182}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-031.webp\", \"caption\": \"\", \"page\": 50, \"index\": 31, \"width\": 1134, \"height\": 757}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-032.webp\", \"caption\": \"\", \"page\": 50, \"index\": 32, \"width\": 1766, \"height\": 1099}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-033.webp\", \"caption\": \"\", \"page\": 50, \"index\": 33, \"width\": 1787, \"height\": 1157}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-034.webp\", \"caption\": \"\", \"page\": 51, \"index\": 34, \"width\": 7400, \"height\": 5920}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-035.webp\", \"caption\": \"\", \"page\": 51, \"index\": 35, \"width\": 7050, \"height\": 5640}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-036.webp\", \"caption\": \"\", \"page\": 51, \"index\": 36, \"width\": 1898, \"height\": 1518}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-037.webp\", \"caption\": \"\", \"page\": 51, \"index\": 37, \"width\": 1925, \"height\": 1540}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-038.webp\", \"caption\": \"\", \"page\": 51, \"index\": 38, \"width\": 1008, \"height\": 752}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-039.webp\", \"caption\": \"\", \"page\": 52, \"index\": 39, \"width\": 2206, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-040.webp\", \"caption\": \"\", \"page\": 53, \"index\": 40, \"width\": 2152, \"height\": 860}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-041.webp\", \"caption\": \"\", \"page\": 53, \"index\": 41, \"width\": 2248, \"height\": 653}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-042.webp\", \"caption\": \"\", \"page\": 54, \"index\": 42, \"width\": 2079, \"height\": 816}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-043.webp\", \"caption\": \"\", \"page\": 54, \"index\": 43, \"width\": 1252, \"height\": 946}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-044.webp\", \"caption\": \"\", \"page\": 54, \"index\": 44, \"width\": 1409, \"height\": 1123}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-045.webp\", \"caption\": \"\", \"page\": 55, \"index\": 45, \"width\": 1078, \"height\": 783}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-046.webp\", \"caption\": \"\", \"page\": 55, \"index\": 46, \"width\": 1889, \"height\": 986}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-047.webp\", \"caption\": \"\", \"page\": 56, \"index\": 47, \"width\": 857, \"height\": 763}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-048.webp\", \"caption\": \"\", \"page\": 57, \"index\": 48, \"width\": 1061, \"height\": 767}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-049.webp\", \"caption\": \"\", \"page\": 57, \"index\": 49, \"width\": 1047, \"height\": 776}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-050.webp\", \"caption\": \"\", \"page\": 57, \"index\": 50, \"width\": 1045, \"height\": 770}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-051.webp\", \"caption\": \"\", \"page\": 57, \"index\": 51, \"width\": 1054, \"height\": 767}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-052.webp\", \"caption\": \"\", \"page\": 58, \"index\": 52, \"width\": 1559, \"height\": 1564}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-053.webp\", \"caption\": \"\", \"page\": 86, \"index\": 53, \"width\": 1460, \"height\": 973}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-054.webp\", \"caption\": \"\", \"page\": 86, \"index\": 54, \"width\": 827, \"height\": 637}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-055.webp\", \"caption\": \"\", \"page\": 86, \"index\": 55, \"width\": 1123, \"height\": 923}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-056.webp\", \"caption\": \"\", \"page\": 86, \"index\": 56, \"width\": 1025, \"height\": 749}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-057.webp\", \"caption\": \"\", \"page\": 86, \"index\": 57, \"width\": 1074, \"height\": 693}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-058.webp\", \"caption\": \"\", \"page\": 86, \"index\": 58, \"width\": 1177, \"height\": 593}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-059.webp\", \"caption\": \"\", \"page\": 87, \"index\": 59, \"width\": 1301, \"height\": 1085}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vrcdszbbig/fig-060.webp\", \"caption\": \"\", \"page\": 87, \"index\": 60, \"width\": 1335, \"height\": 945}]"
motivation: 当前自动发现新型语言模型架构的效率低下，亟需能模拟人类研究过程的自动化系统。
method: 提出Genesys系统，采用多智能体LLM模拟从构思到验证的研究流程，结合遗传规划高效探索架构空间。
result: Genesys在多个复杂度级别上成功发现了性能优于基线的新语言模型架构。
conclusion: Genesys展示了LLM驱动自动化架构发现的可行性，为算法自动发现提供了新范式。
---

## Abstract
*Can we leverage LLMs to model the process of discovering novel language model (LM) architectures?* Inspired by real research, we propose a multi-agent LLM approach that simulates the conventional stages of research, from ideation and literature search (proposal stage) to design implementation (code generation), generative pre-training, and downstream evaluation (verification). Using ideas from scaling laws, our system *Genesys* employs a *Ladder of Scales* approach; new designs are proposed, adversarially reviewed, implemented, and selectively verified at increasingly larger model scales (14M$\sim$350M parameters) with a narrowing budget (the number of models we can train at each scale). To help make discovery efficient and factorizable, Genesys uses a novel genetic programming backbone, which we show has empirical advantages over commonly used direct prompt generation workflows (e.g., $\sim$86\% percentage point improvement in successful design generation, a key bottleneck). We report experiments involving 1,162 newly discovered designs (1,062 fully verified) and find the best designs to be competitive with known architectures (e.g., outperform GPT2, Mamba2, etc., on 6/9 common benchmarks).  We couple these results with comprehensive system-level ablations and formal results, which give broader insights into the design of effective autonomous discovery systems.

---

## 论文详细总结（自动生成）

### 论文详细中文总结

#### 1. 核心问题与整体含义（研究动机和背景）
- **研究动机**：当前自动科学发现（ASD）系统多聚焦于开放式研究，目标不明确、验证困难。作者希望探索**能否利用LLM自动发现新型语言模型架构**，这是一个具有清晰目标和可量化评估指标的挑战性任务。
- **背景**：Transformer仍是语言模型的主流架构，但替代架构（如Mamba2、RetNet等）的研究活跃。传统神经架构搜索（NAS）在固定操作空间内搜索，而本文希望建模更广泛的科学发现过程，包括文献调研、构思、实现、验证等完整研究流程。

#### 2. 方法论：核心思想、关键技术细节
- **核心思想**：构建一个多智能体LLM系统 **Genesys**，模拟人类研究流程：**提出→评审→实现→验证**。系统分为两部分：
  - **LMADE（语言模型架构发现环境）**：提供知识引擎（包含297篇论文的参考库、Semantic Scholar、ArXiv等）和验证引擎（提供自动化预训练和评估工具）。
  - **Genesys系统**：包含设计智能体（Proposer、Reviewer、Planner、Coder、Observer）和验证智能体（Verifier）。
- **关键技术细节**：
  - **遗传规划（GP）骨干**：将每个块设计表示为**GAU树**（广义自回归单元树），支持变异（修改单元）、交叉（合并单元）和从零开始设计。
  - **阶梯式验证（Ladder of Scales）**：在逐渐增大的模型规模（14M→31M→70M→125M→350M参数）上选择性验证，预算呈金字塔形分配，低规模更多试验，高规模更少。
  - **单元式代码生成**：采用Viterbi式搜索，逐步生成代码单元，每步成功后再进行下一步，相比直接生成显著提高成功率（约86个百分点的提升）。
  - **对抗性评审**：Proposer提出想法后，Reviewer进行评分，通过后进入实现阶段。
  - **符号检查器**：对代码进行静态（AST）和运行时（PyTorch）检查，确保可微性、因果性、数值稳定性等。

#### 3. 实验设计：数据集、Benchmark、对比方法
- **数据集**：基于SmolLM-1/8-Corpus（约34.78B token），由FineWeb-Edu、Cosmopedia-v2等子集混合而成，用于预训练。评估使用LM-Eval框架中的29个任务，最终筛选出9个有区分度的任务：Blimp、Wnli、RTE、WG、CoLA、SST2、WSC、IS、Mrpc。
- **Benchmark**：零样本下游任务准确率。
- **对比方法**：包括随机基线、GPT2、Mamba2、RWKV7、RetNet、TTT等5个人工设计的种子模型，以及Genesys发现的前5个设计（VQH、HMamba、Geogate、Hippovq、SRN）。
- **消融实验**：比较完整系统 vs. 去掉实验验证（w/o Exp.）、去掉文献搜索（w/o Lit.）、无进化（Base）、仅记忆（w/ Mem.）等变体。

#### 4. 资源与算力
- **硬件环境**：10台机器，其中：
  - 8台作为验证节点（V-Nodes）：3台搭载8×Nvidia A6000 48GB GPU（124 vCPU，512GB RAM），5台搭载8×Nvidia L40S 48GB GPU（256 vCPU，1TB RAM）。
  - 2台作为设计节点（D-Nodes）：3×Nvidia A6000 48GB GPU（34 vCPU，254GB RAM）。
- **训练规模**：共进行1162次设计，其中1062个完全验证；涉及>1B token、2.76M行代码、86K次智能体交互。
- **时间估算**：在单台8×A6000机器上，训练所有验证任务乐观估计约5.3天，中位估计约16.6天。

#### 5. 实验数量与充分性
- **实验数量**：
  - 进化实验：前300个设计（全配置及消融），前500和1000个设计（部分配置）。
  - 设计智能体分析：100个提议测试代码生成成功率。
  - 最终评估：5个最佳发现 vs. 5个种子模型，分别在125M和350M规模上训练和评估。
- **充分性**：
  - **充分**：消融实验覆盖多个关键组件（文献、验证、进化、代码生成策略），并使用了多种评估指标（平均性能、Sharpe比率、最大回撤等）。
  - **客观性**：采用标准评估框架（LM-Eval），对比基线使用官方实现或社区实现，超参数一致。但未报告多次运行的标准误差（受限于计算成本），部分结果可能受随机性影响。

#### 6. 主要结论与发现
- Genesys系统能够**自动发现性能优于或匹敌人工设计架构的语言模型**。在350M规模下，最佳发现（Geogate）在6/9个基准上超过GPT2和Mamba2，平均准确率最高（61.81%）。
- 进化实验表明：完整系统（Full）在平均性能提升（∆=4.10%）、稳定性（SR=0.69）等方面显著优于消融版本，验证了每个组件的必要性。
- 单元式代码生成（VS）相比直接生成，成功率提升约86个百分点，证实了结构化的生成策略对复杂代码有效。
- 进化树呈现“枢纽”模式，类似科研论文被引长尾分布。

#### 7. 优点
- **方法论创新**：将多智能体LLM与遗传规划结合，模拟真实研究流程，实现端到端的架构发现。
- **效率提升**：单元式Viterbi代码生成和阶梯式验证显著降低计算成本，使大规模发现可行。
- **可解释性**：GAU树分解使每个设计可分解、可比较，便于理解发现过程。
- **充分的消融与理论分析**：提供形式化证明（如VS指数级减少调用次数）和系统性实验，增强说服力。
- **公开资源**：代码、设计产物、交互日志全部开源，可复现。

#### 8. 不足与局限
- **硬件优化受限**：当前系统未集成FlashAttention等硬件级优化，因为其实现依赖复杂硬件评估。
- **规模限制**：由于计算资源有限，仅探索到350M参数，未验证更大规模（如1B+）上的泛化能力。
- **评估偏差**：验证任务选自LM-Eval，可能未覆盖所有重要能力维度；且未报告多次实验的统计误差。
- **设计多样性**：进化中部分设计（如GPT-4o作为Proposer时）倾向于产生保守的Transformer变体，可能限制探索。
- **成本**：尽管效率提升，单次设计平均成本约28.63美元，大规模运行仍昂贵。
- **版本与可重复性**：LLM模型（如GPT-4o、Claude）版本可能随时间变化，影响复现性。

（完）
