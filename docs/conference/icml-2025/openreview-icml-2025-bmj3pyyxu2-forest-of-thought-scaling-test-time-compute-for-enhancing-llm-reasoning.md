---
title: "Forest-of-Thought: Scaling Test-Time Compute for Enhancing LLM Reasoning"
title_zh: 思维森林：扩展测试时计算以增强大语言模型推理
authors: "Zhenni Bi, Kai Han, Chuanjian Liu, Yehui Tang, Yunhe Wang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=BMJ3pyYxu2"
tags: ["query:automatic-discovery"]
score: 4.0
evidence: 大语言模型推理增强用于复杂问题
tldr: 提出思维森林方法，集成多个推理树提升大模型推理能力。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-001.webp\", \"caption\": \"\", \"page\": 6, \"index\": 1, \"width\": 3600, \"height\": 2400}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-002.webp\", \"caption\": \"\", \"page\": 7, \"index\": 2, \"width\": 287, \"height\": 949}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-003.webp\", \"caption\": \"\", \"page\": 7, \"index\": 3, \"width\": 1000, \"height\": 949}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-004.webp\", \"caption\": \"\", \"page\": 7, \"index\": 4, \"width\": 1089, \"height\": 949}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-005.webp\", \"caption\": \"\", \"page\": 7, \"index\": 5, \"width\": 1042, \"height\": 949}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-006.webp\", \"caption\": \"\", \"page\": 7, \"index\": 6, \"width\": 1600, \"height\": 1200}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-007.webp\", \"caption\": \"\", \"page\": 8, \"index\": 7, \"width\": 640, \"height\": 480}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-008.webp\", \"caption\": \"\", \"page\": 14, \"index\": 8, \"width\": 1039, \"height\": 816}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-009.webp\", \"caption\": \"\", \"page\": 14, \"index\": 9, \"width\": 1039, \"height\": 816}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-010.webp\", \"caption\": \"\", \"page\": 14, \"index\": 10, \"width\": 1039, \"height\": 816}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-bmj3pyyxu2/fig-011.webp\", \"caption\": \"\", \"page\": 14, \"index\": 11, \"width\": 1039, \"height\": 816}]"
motivation: 现有链式思维和树式思维方法无法回溯错误路径，导致准确率受限。
method: 构建多个推理树并通过稀疏激活策略选择最优路径进行集体决策。
result: 提高了复杂逻辑问题的求解效率与准确率。
conclusion: 集成多树推理能有效提升LLM推理能力，但未直接用于科学发现。
---

## Abstract
Large Language Models (LLMs) have demonstrated remarkable abilities across various language tasks, but solving complex reasoning problems remains a significant challenge. While existing methods, such as Chain-of-Thought (CoT) and Tree-of-Thought (ToT), enhance reasoning by decomposing problems or structuring prompts, they typically perform a single pass of reasoning and may fail to revisit flawed paths, compromising accuracy. To address this limitation, we propose a novel reasoning framework called Forest-of-Thought (FoT), which integrates multiple reasoning trees to leverage collective decision-making for solving complex logical problems. FoT employs sparse activation strategies to select the most relevant reasoning paths, improving both efficiency and accuracy. Additionally, we introduce a dynamic self-correction strategy that enables real-time error correction, along with consensus-guided decision-making strategies to optimize both correctness and computational resources. Experimental results demonstrate that the FoT framework, combined with these strategies, significantly enhances the reasoning capabilities of LLMs, enabling them to solve complex tasks with greater precision and efficiency.

---

## 论文详细总结（自动生成）

# 论文中文总结：Forest-of-Thought: Scaling Test-Time Compute for Enhancing LLM Reasoning

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：现有的大语言模型推理增强方法（如 Chain-of-Thought、Tree-of-Thought）通常执行**单次推理路径**，无法在发现错误时回溯或探索其他分支，导致复杂逻辑问题的解答准确率受限。
- **背景**：CoT 通过逐步推理提升性能，但线性结构难以处理非线性问题；ToT 通过树状搜索探索多条路径，但容易过早放弃备选分支，且计算开销随深度指数增长。
- **动机**：受人类反复多角度验证的启发，提出**思维森林（Forest-of-Thought, FoT）**——集成多个推理树，利用集体决策和动态校正来弥补单一路径的不足，从而在测试时扩展计算资源以增强推理能力。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

### 核心思想
- 构建 **n 个独立的推理树**（如 ToT 或 MCTSr），每棵树从不同角度出发进行推理。
- 通过**稀疏激活（Sparse Activation）** 筛选出最有前景的推理路径，提升效率与准确性。
- 引入**动态自校正（Dynamic Self-Correction）** 实时检测并修正错误。
- 采用**共识引导专家决策（CGED）** 在多个树的结果中选出最优答案。

### 关键技术细节
#### a) 稀疏激活
- 在每个推理层，对每个树的所有节点进行评估，仅保留**得分最高的候选节点**（基于 log‑likelihood 或启发式正确性得分）。
- 若某树在某层产生无效输出（语法错误、语义矛盾等），则**提前终止**该树，不参与最终聚合。
- 激活指示器：
  ```
  φᵢ = 1  if ∀ layer, F(sₗ) = valid output; else 0
  ```
- 作用：减少噪声、避免级联错误、降低推理深度与计算成本。

#### b) 输入数据增强
- 从公开数据集中构建知识库 B，检索与输入 x 最相关的问题，并将其拼接至输入：
  ```
  i_max = argmax_i Sim(x, B_i)
  x' = B_{i_max} ⊕ x
  ```
- 增强有助于模型从“快思考”转向“慢思考”，引用先验知识。

#### c) 动态自校正
- 监控每个推理步骤的预测 logits 分数，若低于预设阈值，则自动触发校正。
- 校正方式：
  - 若有预定义的数学规则（如 Game of 24 中检查剩余数字来源），则**规则驱动校正**。
  - 若无规则，则基于先验知识和上下文重新生成。
- **算法2**：计算分数 → 若 < threshold → 通过规则或 LLM 自校正 ← 更新结果。

#### d) 共识引导专家决策 (CGED)
- 当多个激活树产生不同答案时，首先进行**多数投票**。
- 若不一致，则由 **LLM 专家** 比较各树的推理过程与结果，基于领域知识做出最终判断。
- 优势：结合集体智慧与专家判断，提升鲁棒性。

### 算法流程（Algorithm 1）
1. 初始化结果集 S₀ = {}
2. 对每个树 i = 1..n：
   - 输入增强 ε(x)
   - 运行树 Ti 得到结果 si 和激活指示 φᵢ
   - 动态自校正获得 s'ᵢ
   - 若 φᵢ = 1，则将 s'ᵢ 加入结果集
3. 调用 CGED 从最终结果集 Sₙ 中选出最终答案。

## 3. 实验设计：数据集 / 场景、基准、对比方法

### 使用的数据集与场景
| 数据集 | 类型 | 规模/说明 |
|--------|------|----------|
| **Game of 24** | 算术组合游戏 | 95 个去重可解问题 |
| **GSM8K** | 数学文字题 | 小学级别，约 8.5K 题 |
| **MATH** | 竞赛级数学题 | 含 MATH500 子集和 AIME 2024 |
| **AIME 2024** | 奥林匹克级数学 | 15 道高难度题 |

### 基准对比方法
- **基本方法**：IO、CoT、CoT-SC、GoT、ToT、BoT、XoT
- **最新方法**：rStar-Math（7B SLM + 7B PPM）、GPT-4o
- **消融变体**：仅有 FoT、FoT + 自校正、FoT + 增强、FoT + 全部

### 基础模型
- **Llama3-8B-Instruct**、**Mistral-7B**、**GLM-4-9B**
- **Qwen2.5-Math-7B-Instruct**、**QwQ-32B-preview**

### 评估指标
- **准确率（Success%）**，部分报告错误率

## 4. 资源与算力

- **文中未明确说明**使用的 GPU 型号、数量、训练时长等具体算力信息。
- 仅在致谢中提到使用了 **MindSpore**、**CANN**（Compute Architecture for Neural Networks）和 **Ascend AI Processor**。
- 稀疏激活和动态自校正设计旨在**降低测试时推理成本**，但未给出绝对计算量对比表格（如 FLOPs）。

## 5. 实验数量与充分性

### 实验组数（主要实验）
| 实验类型 | 数量/设置 | 是否充分 |
|----------|-----------|---------|
| **Game of 24 消融** | 4 种配置（表1） | 是 |
| **Game of 24 与 SOTA 对比** | 8 种方法（表2） | 是 |
| **GSM8K 缩放分析** | 4 种基线 + 多子树数量（图2） | 充分 |
| **不同基座缩放** | 3 个模型（Mistral, Llama, GLM）各 2~8 子树（图3） | 充分 |
| **MATH 层级对比** | FoT vs MCTSr 在 Level 1~4（图4） | 充分 |
| **停止策略消融** | 3 种策略 × 2~5 子树（表3） | 充分 |
| **阈值消融** | 4 个阈值（表13） | 充分 |
| **决策方法对比** | Random vs Score vs CGED（表12） | 充分 |
| **基座扩展到 Qwen、QwQ** | 多个子树（表4） | 充分 |

### 充分性评价
- **覆盖范围广**：从简单算术到奥林匹克数学，从多个基座到多种消融。
- **公平性**：所有对比方法均在相同设置下运行，报告了调用次数与成功率。
- **潜在偏差**：Game of 24 仅有 95 个问题，样本量较小；AIME 2024 只有 15 题，统计意义有限。GSM8K 和 MATH 为标准基准，结果可信。

## 6. 论文的主要结论与发现

1. **FoT 显著提升推理准确率**：
   - Game of 24：FoT (n=8) 达到 **96.84%**，远超 ToT (74%) 和 BoT (82.4%)。
   - GSM8K（Qwen2.5-7B）：FoT (n=8) 达 **96.89%**，超越 rStar-Math (95.2%)。
   - MATH500（QwQ-32B）：FoT (n=4) 达 **91.20%**，超过 GPT-4o (76.6%)。
   - AIME 2024（QwQ-32B）：FoT (n=4) 达 **53.33%**，明显优于 rStar-Math (46.7%)。

2. **缩放定律有效**：随着激活子树数量增加，错误率单调下降（图2、图3、图6），且 DNN 多样性比单树深度扩展更有效。

3. **三个组件均重要**：
   - 自校正：准确率从 10.58% → 60.24%（Game of 24）
   - 输入增强：进一步提升至 77.98%
   - 稀疏激活：保持准确率的同时，调用次数从 32.32 降至 26.99

4. **CGED 策略最优**：在 5 个子树时比 Majority Vote 和 Math Expert 高约 2%（表3）。

5. **FoT 在不同模型上泛化良好**：Llama3-8B、Mistral-7B、GLM-4-9B 均观察到一致缩放趋势。

## 7. 优点：方法或实验设计上的亮点

- **创新性**：首次提出“思维森林”概念，直觉清晰——集成多树优于单树扩展。
- **高效性**：稀疏激活机制有效裁剪无效路径，动态自校正避免冗余计算，降低测试时开销。
- **自校正模块**：不仅基于 LLM 置信度，还结合领域规则（如数学运算验证），实用性强。
- **决策机制**：CGED 融入了集体投票与专家评判，解决了多树结果冲突的问题。
- **实验充分**：涵盖多个基准、多个基座、多种消融与超参数分析，结论可信度高。
- **开源承诺**：代码将在 GitHub 公开（https://github.com/iamhankai/Forest-of-Thought）。

## 8. 不足与局限

- **计算成本未详细量化**：虽然稀疏激活降低了调用次数，但多棵树并行仍可能增加总延迟；缺少 GPU 耗时对比。
- **数据集覆盖有限**：主要聚焦数学推理（GSM8K、MATH、Game of 24），未在常识推理、科学问答、代码生成等任务上验证。
- **小样本敏感性**：Game of 24 仅 95 例，AIME 2024 仅 15 题，统计波动风险存在。
- **动态自校正阈值依赖**：阈值 0.5 为经验值，不同任务可能需要调优，通用性存疑。
- **知识库构建偏弱**：输入增强仅从公开数据集检索，未实现增量学习或动态知识更新。
- **可扩展性隐患**：当 n 很大时（如 32 棵树），计算开销将线性增长，文中未探讨极限情况。

---

（完）
