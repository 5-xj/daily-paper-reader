---
title: "Soft Reasoning: Navigating Solution Spaces in Large Language Models through Controlled Embedding Exploration"
title_zh: 软推理：通过控制嵌入探索导航大语言模型的解空间
authors: "Qinglin Zhu, Runcong Zhao, Hanqi Yan, Yulan He, Yudong Chen, Lin Gui"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=4gWE7CMOlH"
tags: ["query:automatic-discovery"]
score: 7.0
evidence: 基于嵌入的搜索与贝叶斯优化改进LLM推理
tldr: 软推理通过嵌入扰动和贝叶斯优化优化LLM生成。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-4gwe7cmolh/fig-001.webp\", \"caption\": \"\", \"page\": 7, \"index\": 1, \"width\": 1720, \"height\": 1120}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-4gwe7cmolh/fig-002.webp\", \"caption\": \"\", \"page\": 7, \"index\": 2, \"width\": 1720, \"height\": 1120}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-4gwe7cmolh/fig-003.webp\", \"caption\": \"\", \"page\": 7, \"index\": 3, \"width\": 2370, \"height\": 330}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-4gwe7cmolh/fig-004.webp\", \"caption\": \"\", \"page\": 7, \"index\": 4, \"width\": 1362, \"height\": 1135}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-4gwe7cmolh/fig-005.webp\", \"caption\": \"\", \"page\": 7, \"index\": 5, \"width\": 1148, \"height\": 1144}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-4gwe7cmolh/fig-006.webp\", \"caption\": \"\", \"page\": 8, \"index\": 6, \"width\": 2977, \"height\": 2376}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-4gwe7cmolh/fig-007.webp\", \"caption\": \"\", \"page\": 16, \"index\": 7, \"width\": 979, \"height\": 780}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-4gwe7cmolh/fig-008.webp\", \"caption\": \"\", \"page\": 17, \"index\": 8, \"width\": 2377, \"height\": 1777}]"
motivation: LLM推理多样性不足且搜索效率低。
method: 提出软推理框架，扰动首个token嵌入并使用贝叶斯优化引导生成。
result: 在推理准确性和连贯性上优于现有方法，计算量小。
conclusion: 软推理是提升LLM推理的通用高效方法。
---

## Abstract
Large Language Models (LLMs) struggle with complex reasoning due to limited diversity and inefficient search. We propose Soft Reasoning, an embedding-based search framework that optimises the embedding of the first token to guide generation. It combines (1) embedding perturbation for controlled exploration and (2) Bayesian optimisation to refine embeddings via a verifier-guided objective, balancing exploration and exploitation. This approach improves reasoning accuracy and coherence while avoiding reliance on heuristic search. Experiments demonstrate superior correctness with minimal computation, making it a scalable, model-agnostic solution.

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：大语言模型（LLMs）在复杂推理任务中面临两大挑战：（1）生成多样性不足——常用的温度缩放会盲目平坦化概率分布，引入噪声而非有意义的探索；（2）现有规划与搜索方法（如链式思维、树搜索）依赖启发式策略和表面提示变化，未直接调整模型内部表示，导致搜索低效、如同“盲人摸象”。
- **整体含义**：本文提出 **Soft Reasoning**，一种基于嵌入搜索的框架，通过**可控的嵌入扰动**和**贝叶斯优化**引导模型生成，在不需要访问模型内部参数或额外验证器的情况下，提升推理准确性和效率。

## 2. 论文提出的方法论
- **核心思想**：将搜索空间从离散的 token 序列转移到连续的首 token 嵌入空间。通过向首 token 的原始嵌入添加高斯噪声得到多个候选嵌入；每个候选嵌入对应一条完整的生成轨迹（因使用贪心解码，嵌入唯一决定输出序列）。随后利用贝叶斯优化（高斯过程代理 + 预期改进采集函数）在嵌入空间中高效搜索，最大化一个兼顾正确性与连贯性的奖励函数。
- **关键技术细节**：
  - **嵌入扰动**：首 token 嵌入 \( z \) 生成后，构造 \( k \) 个扰动嵌入 \( x_i = z + \sigma \varepsilon_i, \varepsilon_i \sim \mathcal{N}(0,I) \)。每个 \( x_i \) 被注入词汇表作为特殊 token，从此 token 开始贪心解码得到完整答案 \( y_i \)。
  - **目标函数**：\( f(x) = r_{\text{verifier}}(y) + r_{\text{coherence}}(y) \)，其中 \( r_{\text{verifier}} \) 是验证器（同模型）对候选答案与聚合后输出是否一致的二进制指示；\( r_{\text{coherence}} \) 是生成序列的对数概率之和，用以惩罚不流畅输出。
  - **贝叶斯优化**：将 \( f(\cdot) \) 视为黑箱函数，使用高斯过程建模先验，每轮根据后验分布计算预期改进（Expected Improvement, EI）并选择下一采样点。收敛条件为连续两次目标函数变化小于阈值 \( \epsilon=0.01 \) 或达到最大迭代次数 \( K=4 \)。
  - **降维**：由于嵌入维度高（768–8192），使用随机投影矩阵 \( A \in \mathbb{R}^{D\times d} \) 将优化限制在低维空间（\( d=50 \)），最后映射回原空间。
- **算法流程**（文字说明）：
  1. 给定问题，生成首 token 嵌入 \( z \)。
  2. 从 \( z \) 周围采样 \( k \) 个扰动嵌入 \( x_1,\dots,x_k \)，经贪心解码得答案 \( y_1,\dots,y_k \)。
  3. 使用验证器（Multi-Generate）对 \( y_{1:k} \) 生成最终答案 \( y_v \)，并计算每个 \( y_i \) 的目标函数值。
  4. 用观测数据 \((x_i, f(x_i))\) 更新高斯过程后验。
  5. 最大化 EI 得到下一个采样点 \( x_{k+1} \)，重复步骤 2–4 直到收敛或达到最大迭代次数。
  6. 返回目标函数值最高的嵌入对应的答案。

## 3. 实验设计
- **数据集/场景**：四个数学/常识推理基准：**GSM8K、GSM-Hard、SVAMP、StrategyQA**。额外对 Qwen2-70B-Instruct 使用 **AIME-2024**。
- **Benchmark**：每数据集随机采样 200 个测试样本，输出长度上限 300 token。
- **对比方法**：
  - 基础：零样本/少样本 CoT。
  - 多样性方法：Self-Consistency（温度 0.4/0.6/0.8）、FIRE（首 token 温度 30）、CoT-Decoding（top-k 首 token）。
  - 搜索方法：RAP（蒙特卡洛树搜索）。
  - 可控生成方法：Trainable Prefix Scorers、Constrained Fine-tuning（仅部分对比）。
- **模型**：LLaMA3-8B-Instruct、Qwen2-7B/70B-Instruct、Mistral-7B-Instruct。
- **设置**：零样本和少样本（1/2/4/8个示例）。每个配置重复 5 次不同随机种子，报告均值和标准差。

## 4. 资源与算力
- 论文中**未明确说明**使用的 GPU 型号、数量、训练时长。仅提及使用了 King’s College London 的 CREATE 集群。由于 Soft Reasoning 不需要额外训练（仅推理），且与 RAP 相比推理时间平均仅为 RAP 的 14.3%，算力需求较低。

## 5. 实验数量与充分性
- **实验数量**：大量对比实验（共约 200 余个表格项），包括：
  - 4 个数据集 × 4 个模型 × 零样本/少样本 × 多种基线 → 表 1（主表）、表 12（70B）、表 13（全 shot 数）。
  - 覆盖率分析（表 14）。
  - 神经元激活分析（图 3、4）。
  - 收敛速度分析（表 2、图 5）。
  - 效率对比（表 3、10、11）。
  - 消融实验：
    - 目标函数分量（表 1 中 w/o 版本）。
    - 采集函数选择（表 4）。
    - 优化 token 数量（表 5）。
    - 降维维度（图 6）。
    - 特殊 token 位置（表 6）。
    - 验证器策略（表 7、8）。
    - 样本数量 \( k \)（图 8）。
    - 随机投影稳定性（图 7）。
- **充分性与公平性**：实验设计较为全面，覆盖多种模型、多种设置、多种对比方法，且报告均值和标准差（5 次重复）。基线超参数按照原论文设定。与 RAP 相比，Soft Reasoning 在相同实验条件下显著更快。但数据集规模（200 样本）相对较小，可能影响泛化结论的稳健性。

## 6. 论文的主要结论与发现
- Soft Reasoning 在所有任务上持续优于最强基线，尤其在零样本设置下（GSM8K 平均提升 5%，GSM-Hard 提升 3%）。
- 覆盖率分析表明，该方法生成正确答案的概率最高（GSM8K 零样本达 91.8%）。
- 神经元激活分析显示，嵌入扰动激活了更多神经元，且贝叶斯优化迭代中关键神经元激活率稳步上升。
- 贝叶斯优化收敛快：多数样本在 1–2 次迭代内终止，无需大规模搜索。
- 效率显著：输入 token 量为 RAP 的 6.19%，输出 token 量 63.28%，推理时间仅 14.3%。
- 消融实验证实，验证器奖励和连贯性奖励均不可缺少；预期改进（EI）采集成略优于其他采集函数；优化单 token 嵌入效果最好；特殊 token 置于 prompt 末尾最佳。

## 7. 优点
- **模型无关**：无需访问 LLM 内部参数或梯度，即插即用于主流开源模型。
- **高效**：无需额外训练，计算开销小（相比 RAP 减少 85%+ 时间）。
- **可控性强**：通过首 token 嵌入的单射映射实现生成序列的确定性控制，结合贝叶斯优化系统性地平衡探索与利用。
- **创新性**：首次将连续嵌入扰动与贝叶斯优化结合用于 LLM 推理搜索，提供了一种新的视角和工具。
- **可解释性尝试**：通过神经元激活率分析初步揭示了方法的工作原理。

## 8. 不足与局限
- **验证器可靠性**：方法依赖 LLM 自身作为验证器，且实际验证器准确率非 100%，论文虽引入噪声自适应 EI，但未深入探讨验证器错误对优化收敛的负面影响。
- **优化范围有限**：仅优化第一个 token 的嵌入，扩展到多个 token 时性能下降（表 5），表明方法在处理长序列复杂推理时可能受限于起点搜索。
- **可解释性不足**：神经元分析仅初步，尚未清晰解释扰动如何具体影响推理链条，以及如何保证语义一致性。
- **实验规模**：每数据集只采用 200 个测试样本，且仅在基础模型（7B–8B）上全面测试，70B 模型仅部分基准，未在更大模型（如 70B+）或更多样化任务（如代码、科学推理）上验证泛化性。
- **公平性**：与 RAP 对比时，RAP 的某些参数（如搜索深度、迭代次数）可能未充分调优；基线 RAP 在某些设置（如 Mistral+StrategyQA）效果异常（表 13 中 RAP 结果部分缺失或低），导致对比可能不完整。
- **实际部署成本**：虽然推理时间远少于 RAP，但每次问题需多次生成（k=5）和迭代（最多 4 轮），总 token 消耗仍高于简单 CoT。

（完）
