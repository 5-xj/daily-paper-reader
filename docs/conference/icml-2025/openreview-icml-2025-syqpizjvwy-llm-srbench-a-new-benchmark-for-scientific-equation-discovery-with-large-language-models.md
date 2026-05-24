---
title: "LLM-SRBench: A New Benchmark for Scientific Equation Discovery with Large Language Models"
title_zh: LLM-SRBench：面向大语言模型科学方程发现的新基准
authors: "Parshin Shojaee, Ngoc-Hieu Nguyen, Kazem Meidani, Amir Barati Farimani, Khoa D Doan, Chandan K. Reddy"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=SyQPiZJVWY"
tags: ["query:automatic-discovery"]
score: 9.0
evidence: 基于大语言模型的科学方程发现基准
tldr: 提出一个基准以评估大模型自动发现科学公式的能力
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 2400, \"height\": 1350}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-002.webp\", \"caption\": \"\", \"page\": 2, \"index\": 2, \"width\": 926, \"height\": 266}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-003.webp\", \"caption\": \"\", \"page\": 6, \"index\": 3, \"width\": 999, \"height\": 999}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-004.webp\", \"caption\": \"\", \"page\": 6, \"index\": 4, \"width\": 1010, \"height\": 1006}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-005.webp\", \"caption\": \"\", \"page\": 8, \"index\": 5, \"width\": 1536, \"height\": 1368}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-006.webp\", \"caption\": \"\", \"page\": 8, \"index\": 6, \"width\": 1306, \"height\": 1379}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-007.webp\", \"caption\": \"\", \"page\": 16, \"index\": 7, \"width\": 1141, \"height\": 283}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-008.webp\", \"caption\": \"\", \"page\": 21, \"index\": 8, \"width\": 4751, \"height\": 1862}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-009.webp\", \"caption\": \"\", \"page\": 22, \"index\": 9, \"width\": 7713, \"height\": 3456}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-010.webp\", \"caption\": \"\", \"page\": 28, \"index\": 10, \"width\": 1987, \"height\": 1569}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-011.webp\", \"caption\": \"\", \"page\": 28, \"index\": 11, \"width\": 1851, \"height\": 822}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-012.webp\", \"caption\": \"\", \"page\": 29, \"index\": 12, \"width\": 2130, \"height\": 1389}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-013.webp\", \"caption\": \"\", \"page\": 31, \"index\": 13, \"width\": 2236, \"height\": 195}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-014.webp\", \"caption\": \"\", \"page\": 33, \"index\": 14, \"width\": 2346, \"height\": 265}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-015.webp\", \"caption\": \"\", \"page\": 35, \"index\": 15, \"width\": 1236, \"height\": 286}]"
motivation: 现有方程发现基准多包含常见公式，大模型容易记忆，导致性能虚高，需要更严格的评测。
method: 构建一个包含239个跨领域挑战性问题的基准，专门设计以避免记忆效应。
result: 该基准能更真实地评估大模型在科学方程发现中的表现。
conclusion: LLM-SRBench为评估大模型在科学发现中的实际能力提供了重要工具。
---

## Abstract
Scientific equation discovery is a fundamental task in the history of scientific progress, enabling the derivation of laws governing natural phenomena. Recently, Large Language Models (LLMs) have gained interest for this task due to their potential to leverage embedded scientific knowledge for hypothesis generation. However, evaluating the true discovery capabilities of these methods remains challenging, as existing benchmarks often rely on common equations that are susceptible to memorization by LLMs, leading to inflated performance metrics that do not reflect actual discovery. In this paper, we introduce LLM-SRBench, a comprehensive benchmark with 239 challenging problems across four scientific domains specifically designed to evaluate LLM-based scientific equation discovery methods while preventing trivial memorization. Our benchmark comprises two main categories: LSR-Transform, which transforms common physical models into less common mathematical representations to test reasoning beyond memorization, and LSR-Synth, which introduces synthetic, discovery-driven problems requiring data-driven reasoning. Through extensive evaluation of several state-of-the-art methods on LLM-SRBench, using both open and closed LLMs, we find that the best-performing system so far achieves only 31.5% symbolic accuracy.
These findings highlight the challenges of scientific equation discovery, positioning LLM-SRBench as a valuable resource for future research.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：现有科学方程发现基准（如Feynman方程、SRSD等）多包含教科书中的常见物理公式，大语言模型（LLM）容易通过记忆而不是真实的数据驱动推理来解决这些任务，导致性能指标虚高，无法反映LLM在科学发现中的真实能力。
- **核心问题**：需要构建一个能够防止LLM记忆、真正评估其结合科学知识和数据推理发现新方程能力的基准。
- **总体意义**：提出了第一个专门针对LLM科学方程发现的综合性基准**LLM-SRBench**，包含239个跨4个科学领域的挑战性问题，用于评估当前方法的局限性并推动未来研究。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：通过两种方式避免LLM记忆已知方程：
  1. **LSR-Transform**：将常见物理模型（如Feynman方程）变换为不同的数学表示（例如交换输入输出变量，用SymPy符号求解），使熟悉的物理问题以陌生形式呈现。
  2. **LSR-Synth**：结合已知项（如化学反应中的一级、二级动力学项）与合成的新奇但可行的项（如非线性饱和、量子隧穿等），创造全新且需要数据驱动推理的问题。

- **关键技术细节**：
  - **LSR-Transform流程**：
    1. 收集原始Feynman方程及其变量和问题描述。
    2. 选择输入特征作为新目标变量。
    3. 交换角色，对数据集进行特征-目标变换。
    4. 使用SymPy解析表达式并符号求解新目标变量。
    5. 仅保留可解析求解的变换。
    6. 过滤掉导致无效数据点（如平方根下负值）的样本。
    7. 使用GPT-4o生成新问题描述。
    8. 限制变换后方程的复杂度（表达式树节点数），使其与原Feynman分布一致，并排除LLM直接采样可解的问题。
  - **LSR-Synth流程**：
    1. 从化学、生物、物理、材料科学四个领域选取典型科学问题。
    2. GPT-4o生成已知项列表（如`-kA`、`-kA²`）。
    3. GPT-4o生成合成新颖项（如`kA²/(1+βA⁴)`、`kA exp(-γt)/t²`）。
    4. 组合已知项和合成项，用数值求解器（SciPy`solve_ivp`）验证可解性。
    5. 使用GPT-4o评估方程的新颖性。
    6. 生成数据点（时域动态系统用RK45积分，静态关系直接计算）。
    7. 两名领域专家交叉验证方程和数据的合理性。
  - 最终得到111个LSR-Transform问题，128个LSR-Synth问题。

### 3. 实验设计：使用的数据集/场景、benchmark、对比方法

- **数据集**：
  - **LLM-SRBench** 包含两个子集：
    - **LSR-Transform**：111个问题，来源于100个Feynman方程的变换。
    - **LSR-Synth**：128个问题，分布在化学（36）、生物（24）、物理（43）、材料科学（25）。
  - 每个问题提供科学背景描述、变量名含义和数值数据。
- **评估指标**：
  - 数据保真度：**Acc_0.1**（相对误差≤0.1的样本比例）、**NMSE**（归一化均方误差），包括域内（ID）和域外（OOD）测试。
  - 符号准确率（SA）：使用GPT-4o作为评估器，判断生成方程与真实方程（去参数后的结构）的数学等价性，经人类验证达94.6%一致性。
- **对比方法**：
  - **Direct Prompting (DataBlind)**：仅基于问题描述和变量名生成，不访问数据。
  - **SGA (Ma et al., 2024)**：双级优化框架，LLM提出离散假设，PyTorch模拟进行参数优化。
  - **LaSR (Grayeli et al., 2024)**：概念学习+进化搜索（PySR）结合LLM引导。
  - **LLM-SR (Shojaee et al., 2024b)**：多岛进化搜索，LLM生成Python函数形式的方程骨架，通过数据反馈迭代。
  - 附加实验：对比非LLM的PySR（遗传编程）。
- **LLM骨干**：开源 Llama-3.1-8B-Instruct，闭源 GPT-3.5-turbo、GPT-4o-mini。
- **标准化**：所有方法限制为每个问题1000次LLM调用。

### 4. 资源与算力

- **未明确说明**：文中未列出GPU型号、数量、训练或推理时长等具体算力信息。仅提及每个方法限制1k LLM调用/问题，以及某些方法有30秒超时、内存2GB限制等实现细节。未提供计算资源开销的具体数据。

### 5. 实验数量与充分性

- **主要实验**：主表（Table 1）展示了4种方法×3种LLM在5个数据集（LSR-Transform + 4领域LSR-Synth）上的综合表现，共4×3×5×3个指标（SA, Acc_0.1, NMSE）。
- **分析实验**：
  - 复杂度对比（图4）：LSR-Transform vs. Feynman在不同复杂度下的性能差距。
  - OOD分析（图5）：各方法在ID和OOD上的NMSE对比。
  - 符号准确率与OOD性能相关性（图6）。
  - 附加实验：对比非LLM方法PySR（Table 3）。
  - 定性分析（附录）：展示多个领域方程的示例和输出假设。
- **充分性与公平性**：
  - 控制LLM调用次数，统一评估框架。
  - 采用多种指标并从符号和数值两个角度评估。
  - 包含人类验证符号评估指标。
  - 但可能未覆盖更多LLM骨干（如更大的LLaMA、GPT-4等），且未探索超参数调优。

### 6. 论文的主要结论与发现

1. **当前LLM方法在科学方程发现上表现有限**：最好方法（LLM-SR + GPT-4o-mini）在LSR-Transform上仅31.5%符号准确率，在LSR-Synth上更低（28.1%）。
2. **LSR-Transform比原始Feynman问题更难**：即使相同复杂度，性能显著下降，证明基准有效防止记忆。
3. **数值精度高的方法不一定符号准确率高**：LaSR在数值指标上领先，但符号准确率不如LLM-SR，说明存在“拟合而非发现”的现象。
4. **OOD性能与符号准确率强相关**：验证了OOD评估可辅助判断发现的方程是否通用，也验证了LLM符号评估器的有效性。
5. **Direct Prompting表现最差**：仅靠记忆无法解决基准问题，数据驱动推理必不可少。

### 7. 优点

- **创新性基准设计**：系统性地通过方程变换和合成新项防止LLM记忆，真正考验科学推理能力。
- **多领域覆盖**：涵盖化学、生物、物理、材料科学，提高了评估的泛化性。
- **全面的评估体系**：同时评估符号准确率、数值精度和OOD泛化，且使用LLM评估符号等价性并经过人类验证。
- **基于现有SOTA方法的公平对比**：标准化计算资源（1k calls），考虑了不同方法的核心机制。
- **开放性和可复现**：提供网站和代码仓库。

### 8. 不足与局限

- **算力与开销未报告**：未给出具体GPU使用量、推理时间等，难以评估实际计算成本。
- **基准规模有限**：239个问题虽多，但相比真实科学发现任务的多样性仍有差距；合成数据的物理真实性和新颖性可能有限，专家验证仅依赖少量评估。
- **LLM符号评估器依赖GPT-4o**：可能存在偏差，且未与其他自动符号等价检查工具（如SymPy简化）充分对比。
- **未探索更多LLM骨干**：仅使用三种LLM，未包含更大模型（如GPT-4、Llama-70B）或专门针对数学推理的模型。
- **方法未考虑纯符号搜索的潜力**：仅对比了基于LLM的方法和PySR，未比较其他非LLM的深度学习符号回归方法。
- **任务定义限制**：基准要求从固定变量名和科学描述中还原方程，与现实世界变量发现（需识别哪些变量重要）仍有距离。

（完）
