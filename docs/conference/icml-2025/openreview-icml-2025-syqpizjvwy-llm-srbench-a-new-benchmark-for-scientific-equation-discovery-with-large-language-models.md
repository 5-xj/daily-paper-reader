---
title: "LLM-SRBench: A New Benchmark for Scientific Equation Discovery with Large Language Models"
title_zh: "LLM-SRBench: 基于大语言模型的科学方程发现新基准"
authors: "Parshin Shojaee, Ngoc-Hieu Nguyen, Kazem Meidani, Amir Barati Farimani, Khoa D Doan, Chandan K. Reddy"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=SyQPiZJVWY"
tags: ["query:automatic-discovery"]
score: 9.0
evidence: 大语言模型科学方程发现基准，直接针对数学公式自动发现
tldr: 提出了包含239个挑战性问题的基准，评测大模型科学方程发现能力。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 2400, \"height\": 1350}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-002.webp\", \"caption\": \"\", \"page\": 2, \"index\": 2, \"width\": 926, \"height\": 266}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-003.webp\", \"caption\": \"\", \"page\": 6, \"index\": 3, \"width\": 999, \"height\": 999}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-004.webp\", \"caption\": \"\", \"page\": 6, \"index\": 4, \"width\": 1010, \"height\": 1006}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-005.webp\", \"caption\": \"\", \"page\": 8, \"index\": 5, \"width\": 1536, \"height\": 1368}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-006.webp\", \"caption\": \"\", \"page\": 8, \"index\": 6, \"width\": 1306, \"height\": 1379}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-007.webp\", \"caption\": \"\", \"page\": 16, \"index\": 7, \"width\": 1141, \"height\": 283}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-008.webp\", \"caption\": \"\", \"page\": 21, \"index\": 8, \"width\": 4751, \"height\": 1862}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-009.webp\", \"caption\": \"\", \"page\": 22, \"index\": 9, \"width\": 7713, \"height\": 3456}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-010.webp\", \"caption\": \"\", \"page\": 28, \"index\": 10, \"width\": 1987, \"height\": 1569}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-011.webp\", \"caption\": \"\", \"page\": 28, \"index\": 11, \"width\": 1851, \"height\": 822}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-012.webp\", \"caption\": \"\", \"page\": 29, \"index\": 12, \"width\": 2130, \"height\": 1389}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-013.webp\", \"caption\": \"\", \"page\": 31, \"index\": 13, \"width\": 2236, \"height\": 195}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-014.webp\", \"caption\": \"\", \"page\": 33, \"index\": 14, \"width\": 2346, \"height\": 265}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-015.webp\", \"caption\": \"\", \"page\": 35, \"index\": 15, \"width\": 1236, \"height\": 286}]"
motivation: 现有基准多采用常见方程，大模型易记忆导致评价失真。
method: 设计四个科学领域的239个难题构建基准，系统评测发现能力。
result: 揭示了现有方法在真正发现任务上的局限性。
conclusion: 新基准为评估大模型的科学方程发现能力提供了更可靠的参考。
---

## Abstract
Scientific equation discovery is a fundamental task in the history of scientific progress, enabling the derivation of laws governing natural phenomena. Recently, Large Language Models (LLMs) have gained interest for this task due to their potential to leverage embedded scientific knowledge for hypothesis generation. However, evaluating the true discovery capabilities of these methods remains challenging, as existing benchmarks often rely on common equations that are susceptible to memorization by LLMs, leading to inflated performance metrics that do not reflect actual discovery. In this paper, we introduce LLM-SRBench, a comprehensive benchmark with 239 challenging problems across four scientific domains specifically designed to evaluate LLM-based scientific equation discovery methods while preventing trivial memorization. Our benchmark comprises two main categories: LSR-Transform, which transforms common physical models into less common mathematical representations to test reasoning beyond memorization, and LSR-Synth, which introduces synthetic, discovery-driven problems requiring data-driven reasoning. Through extensive evaluation of several state-of-the-art methods on LLM-SRBench, using both open and closed LLMs, we find that the best-performing system so far achieves only 31.5% symbolic accuracy.
These findings highlight the challenges of scientific equation discovery, positioning LLM-SRBench as a valuable resource for future research.

---

## 论文详细总结（自动生成）

# 论文中文详细总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：科学方程发现（symbolic regression）是科学进步的核心任务，LLM凭借其内嵌的科学知识被认为有潜力用于假设生成。然而现有基准（如SRBench的Feynman方程、SRSD）中的问题多是教科书中的常见方程，LLM可通过记忆而非真正的数据驱动推理来“解决”，导致性能指标虚高，无法反映真实发现能力。
- **核心问题**：如何构建一个能有效评估LLM科学方程发现能力、避免记忆作弊的基准？现有基准缺乏对抗记忆的机制，且缺少科学上下文（变量名、问题描述），不利于LLM发挥知识。
- **整体含义**：首次提出专门针对LLM的方程发现基准，揭示当前方法在真正发现任务上的局限性（最佳性能仅31.5%），为未来方法评估提供标准化平台。

## 2. 方法论

### 核心思想
设计两类数据集，分别对抗两类记忆风险：
- **LSR-Transform**：将Feynman常见方程通过符号变换（交换输入输出变量并解析求解）转化为不常见的数学形式，迫使模型执行数据驱动推理而非背诵标准形式。
- **LSR-Synth**：结合已知科学项与人为创造的新奇项（synthetic terms）生成全新的方程，要求模型必须依赖数据来发现，无法记忆。

### 关键技术细节
- **LSR-Transform生成流程**（七步）：
  1. 收集Feynman原方程及变量、问题描述
  2. 选择输入特征作为新目标变量
  3. 特征-目标变换（交换角色）
  4. 用SymPy求解新方程符号形式
  5. 可解性检查（仅保留解析可解者）
  6. 数据集精炼（滤除超出新方程定义域的点）
  7. 用LLM（GPT-4o）生成新问题的自然语言描述
- **LSR-Synth生成流程**（七步）：
  1. 选择科学问题（化学、生物、物理、材料科学）
  2. 生成已知项（如动力学中的一阶、二阶项）
  3. 生成合成项（如非线性饱和、量子隧穿项）
  4. 可解性检查
  5. 新颖性检查（用GPT-4o评估）
  6. 数据点生成（数值求解器）
  7. 领域专家验证

### 评估指标
- 数据保真度：Accτ（容忍度τ下的准确率）、NMSE（归一化均方误差），包括域内和域外（OOD）评估。
- 符号准确率：用GPT-4o作为评估器判断预测方程与真值方程数学等价性（去除参数后）。经人工验证，与人类评估者一致率94.6%。

## 3. 实验设计

### 数据集/场景
- **LLM-SRBench**：共239个问题，分为：
  - LSR-Transform：111个问题（源自Feynman方程的变换）
  - LSR-Synth：128个问题，涵盖四个科学领域：化学(36)、生物(24)、物理(43)、材料科学(25)
- **对比方法**：
  - Direct Prompting (DataBlind)：仅依赖LLM知识，无数据访问
  - SGA (Ma et al., 2024)：双层优化框架，LLM生成离散假设+PyTorch优化连续参数
  - LaSR (Grayeli et al., 2024)：概念学习+进化搜索（PySR）+LLM引导搜索
  - LLM-SR (Shojaee et al., 2024b)：程序搜索+多岛进化搜索+数据反馈
- **LLM骨干**：
  - Llama-3.1-8B-Instruct（开源）
  - GPT-3.5-turbo（闭源）
  - GPT-4o-mini（闭源）
- **资源控制**：所有方法每问题均限制1k次LLM调用，保持公平。

## 4. 资源与算力

- **未明确说明具体GPU型号、数量、训练时长**。论文仅在实现细节中给出了方法参数（如LLM调用次数、温度、种群大小等），但未报告硬性算力开销。对于LLM推理，使用的是商用API（GPT-4o-mini, GPT-3.5-turbo）和本地部署的Llama-3.1-8B，未披露具体训练或推理资源。

## 5. 实验数量与充分性

- **实验数量**：在239个问题上对4种方法×3种LLM骨干进行了全面评测，共计约12组主要对比（表1），以及附加的域内/域外比较（图5）、复杂度分析（图4）、符号准确率与OOD关联分析（图6）、复杂度分布对比（图8、10）、定性案例（图14-17）等。
- **消融/分析实验**：
  - LSR-Transform vs. 原始Feynman在不同复杂度水平下的性能对比（图4）
  - 域内与域外泛化对比（图5）
  - 符号准确率与OOD性能相关性（图6）
  - 复杂度分布（图8、10）
  - 附加标准SR基线PySR对比（表3，附录F）
- **充分性与公平性**：
  - 方法对比：统一LLM调用次数（1k次），各方法保留核心设计。
  - 评估指标：同时采用数值指标和符号指标，且符号评估经人工验证（94.6%一致率），减少偏见。
  - 域外评估：专门生成OOD测试集，检验泛化能力。
  - 覆盖：四个科学领域，两类数据，多种LLM骨干（开闭源）。
  - 不足：仅评估了三种LLM骨干，未测试更大模型（如GPT-4, Llama-3-70B）；未做关于合成项数量或变换复杂度的系统消融。

## 6. 主要结论与发现

1. **现有LLM方法在真正发现任务上性能有限**：最佳方法（LLM-SR + GPT-4o-mini）在LSR-Transform上符号准确率仅31.5%，在LSR-Synth上仅28.1%。
2. **Direct Prompting（无数据）表现极差**，说明纯知识记忆不足以完成方程发现，数据驱动推理不可或缺。
3. **LaSR在数值精度（Acc0.1）上领先，LLM-SR在符号准确率上领先**，不同问题类型最优方法不同。
4. **LSR-Transform比原始Feynman难得多**，即使在相同复杂度水平下也如此，表明记忆不是主要因素。
5. **OOD泛化与符号准确率强正相关**，验证了符号准确性对泛化的重要性，也验证了GPT-4o评估的有效性。
6. **不同科学领域难度不同**：材料科学问题相对更容易（LaSR符号准确率28.1%），而生物学/化学更难。

## 7. 优点

- **创新性**：首次构建专门针对LLM科学方程发现的反记忆基准，填补了现有评估空白。
- **严谨性**：
  - 提供两类互补的数据集（变换+合成），全面对抗记忆。
  - 符号准确率评估采用GPT-4o+人工验证，保证可靠性。
  - 包含域内和域外评估，符合科学方程泛化要求。
  - 控制LLM调用次数，确保方法间公平。
- **实用性**：代码和基准公开（GitHub），有利于后续研究。
- **规模**：239个问题、四领域、多种方法，可支撑系统性比较。
- **分析深度**：通过复杂度、域内外、相关分析等深入揭示模型行为。

## 8. 不足与局限

- **实验覆盖有限**：仅测试了三种LLM骨干（8B规模的Llama、GPT-3.5、GPT-4o-mini），未评估更大模型（如GPT-4、Llama-70B、DeepSeek等），结论的普适性可能受限。
- **合成项生成依赖LLM**：LSR-Synth的已知项和合成项由GPT-4o生成，可能存在偏差或覆盖不足。
- **符号评估依赖GPT-4o**：尽管有94.6%人工一致率，但仍存在被GPT-4o误判的风险，且对等价形式（如优化后参数）的处理可能不完美。
- **复杂度控制**：LSR-Transform过滤掉了复杂度过高的变换（出于公平性考虑），但这可能掩盖了LLM处理长表达的能力。
- **缺乏对非LLM方法的系统对比**：仅在附录中与PySR做了简要比较，未与更广泛的SR方法（如基于Transformer的E2E方法）对比。
- **现实应用距离**：基准仍为人工构造问题，能否反映真实科学发现场景（如实验噪声、缺失变量、非解析方程）有待验证。
- **未报告算力消耗**：无法评估实际部署成本。

（完）
