---
title: "LLM-SRBench: A New Benchmark for Scientific Equation Discovery with Large Language Models"
title_zh: LLM-SRBench：面向大语言模型科学方程发现的新基准
authors: "Parshin Shojaee, Ngoc-Hieu Nguyen, Kazem Meidani, Amir Barati Farimani, Khoa D Doan, Chandan K. Reddy"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=SyQPiZJVWY"
tags: ["query:ad"]
score: 9.0
evidence: 大模型用于科学方程发现的基准
tldr: 现有大模型方程发现方法因基准简单导致虚高性能，为此提出LLM-SRBench，包含239个跨领域难题，旨在评测模型真正的发现能力而非记忆。该基准为后续研究提供了可靠评估标准。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 800, \"height\": 452, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1571, \"height\": 811, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1596, \"height\": 836, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 859, \"height\": 438, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1686, \"height\": 552, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 851, \"height\": 411, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1385, \"height\": 931, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1045, \"height\": 628, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1055, \"height\": 1102, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1058, \"height\": 633, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1744, \"height\": 813, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1593, \"height\": 628, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1592, \"height\": 718, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1383, \"height\": 1299, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1398, \"height\": 2191, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1398, \"height\": 891, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1392, \"height\": 925, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-syqpizjvwy/fig-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1397, \"height\": 1126, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-syqpizjvwy/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1766, \"height\": 832, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-syqpizjvwy/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1409, \"height\": 970, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-syqpizjvwy/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1422, \"height\": 368, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-syqpizjvwy/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1740, \"height\": 289, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-syqpizjvwy/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1737, \"height\": 2267, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-syqpizjvwy/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1754, \"height\": 2252, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-syqpizjvwy/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1711, \"height\": 2266, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-syqpizjvwy/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1758, \"height\": 1928, \"label\": \"Table\"}]"
motivation: 现有大模型方程发现评估因基准简单、公式易被记忆而无法反映真实能力。
method: 构建覆盖四个科学领域的239个难题的基准LLM-SRBench，用于严格评测大模型发现能力。
result: 该基准能有效区分模型记忆与真实发现，揭示了当前方法的局限性。
conclusion: LLM-SRBench为评估大模型科学方程发现提供了可靠平台，推动该领域发展。
---

## Abstract
Scientific equation discovery is a fundamental task in the history of scientific progress, enabling the derivation of laws governing natural phenomena. Recently, Large Language Models (LLMs) have gained interest for this task due to their potential to leverage embedded scientific knowledge for hypothesis generation. However, evaluating the true discovery capabilities of these methods remains challenging, as existing benchmarks often rely on common equations that are susceptible to memorization by LLMs, leading to inflated performance metrics that do not reflect actual discovery. In this paper, we introduce LLM-SRBench, a comprehensive benchmark with 239 challenging problems across four scientific domains specifically designed to evaluate LLM-based scientific equation discovery methods while preventing trivial memorization. Our benchmark comprises two main categories: LSR-Transform, which transforms common physical models into less common mathematical representations to test reasoning beyond memorization, and LSR-Synth, which introduces synthetic, discovery-driven problems requiring data-driven reasoning. Through extensive evaluation of several state-of-the-art methods on LLM-SRBench, using both open and closed LLMs, we find that the best-performing system so far achieves only 31.5% symbolic accuracy.
These findings highlight the challenges of scientific equation discovery, positioning LLM-SRBench as a valuable resource for future research.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：大语言模型（LLM）在科学方程发现（也称为符号回归）中展示出潜力，因为它们能利用内嵌的科学知识生成假设。然而，现有的评估基准（如基于费曼物理方程的SRBench和SRSD）主要以已知的常见方程构成，容易被LLM通过记忆（memorization）而非真正的数据驱动发现来解决，导致性能虚高，无法反映真实的科学推理能力。  
- **整体含义**：为了推动LLM在科学发现中的可靠评估，需要一个新的基准，能够排除记忆效应，迫使模型依赖数据驱动的推理和科学知识来发现方程。作者因此提出LLM-SRBench，旨在严格评测LLM的发现能力，并揭示当前方法的局限性。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：构建两大类难题：  
  - **LSR-Transform**：将常见的物理方程（源于费曼基准）通过符号变换转换为不常见的数学形式。例如，将能量E的方程转为求解质量m、角频率ω等，从而改变输入输出角色，迫使模型不能直接背诵，必须进行推理。  
  - **LSR-Synth**：针对四个科学领域（化学、生物、物理、材料科学），在已知科学项的基础上添加新颖的合成项，生成完全新颖的方程，要求模型结合领域知识和数据进行发现。  
- **关键技术细节**：  
  - **LSR-Transform生成流程**（共7步）：收集原方程 → 选择枢轴变量 → 特征-目标变换 → 使用SymPy符号求解 → 可解性检查（仅保留解析可解的变换）→ 数据集精炼（过滤无效数据域）→ 问题改写（用GPT-4o生成自然语言描述）。  
  - **LSR-Synth生成流程**（共7步）：选择科学问题 → 生成已知项（通过GPT-4o）→ 生成合成项 → 可解性检查 → 新颖性检查（LLM评估是否新颖）→ 数据点生成（数值求解）→ 专家验证。  
  - **评估方法**：  
    - **数据保真度**：采用Accτ（在一定容忍度内的最大相对误差）和归一化均方误差NMSE，包括域内和域外测试。  
    - **符号准确率**：使用GPT-4o作为评估器，对比预测方程与真实方程的数学等价性（去常数和参数后）；人工验证显示与人类判断的一致性达94.6%。  

### 3. 实验设计

- **基准数据集**：  
  - LSR-Transform：111个问题，源自100个费曼方程的变换。  
  - LSR-Synth：128个问题，分布为化学36个、生物24个、物理43个、材料科学25个。  
- **对比方法**：  
  - LLM-based方法：Direct Prompting (DataBlind，无数据访问)、SGA（LLM+双层级优化）、LaSR（概念学习+PySR混合搜索）、LLM-SR（编程搜索+多岛进化）。  
  - Non-LLM基线：PySR（基于遗传编程的符号回归，仅用数据）。  
- **LLM骨干**：开源模型Llama-3.1-8B-Instruct，闭源模型GPT-3.5-turbo和GPT-4o-mini。  
- **计算资源设置**：每个方法统一分配1000次LLM调用，保持公平。方法自身的超参数按原实现，仅调整调用次数。具体GPU型号、数量、训练时长未明确说明。  

### 4. 资源与算力

- 论文未明确给出GPU型号、数量、总训练时长等具体算力信息。  
- 仅提到：每个方法在每个问题上使用1000次LLM调用；LLM-SR中每个程序执行有时间限制30秒和2GB内存；使用BFGS优化器等。  
- 未说明训练资源意味着无法直接评估实验的总成本。

### 5. 实验数量与充分性

- **实验数量**：主要结果表（Table 1）包含了4种LLM-based方法×3种LLM骨干×5个数据集（1个LSR-Transform + 4个LSR-Synth领域），共约60组实验。  
- **充分性**：额外进行了：  
  - 复杂度分析（对比原费曼与LSR-Transform在不同节点数下的性能差距）。  
  - 域内vs域外性能对比（Figure 5）。  
  - 符号准确率与域外性能的相关性分析（Figure 6）。  
  - 与PySR的对比（Table 3）。  
  - 定性案例展示（图14-17）。  
- **公平性**：各方法统一调用次数，使用相同LLM骨干，prompt和超参数尽量遵循原文。但存在偏差风险：  
  - 仅测试了三个LLM（未包括GPT-4、Claude、DeepSeek等）。  
  - LLM作为评估器可能存在自身偏见或错误。  
  - LSR-Synth的生成依赖于GPT-4o，可能引入偏见。  

### 6. 论文的主要结论与发现

- 最佳方法（LLM-SR with GPT-4o-mini）在LLM-SRBench上符号准确率仅31.5%（LSR-Transform）和28.1%（LSR-Synth），远低于在原始费曼基准上的表现，表明该基准有效排除了记忆效应。  
- LSR-Transform比相同复杂度的原费曼问题困难得多，说明形式变换本身对LLM构成挑战。  
- 符号准确率与域外泛化性能呈强正相关，验证了符号评估的有效性和域外评测的重要性。  
- 不同方法优势互补：LaSR数值准确率最高，LLM-SR符号准确率最高。  
- 纯粹依赖知识的Direct Prompting表现最差，说明数据驱动推理不可或缺。  
- 非LLM方法PySR在某些数值指标上接近甚至超越LLM方法，但符号准确率极低，尤其在需要领域知识的领域为0%。  

### 7. 优点

- **基准设计创新**：通过变换形式和合成新项，有效避免记忆问题，真正评测数据驱动发现能力。  
- **多维度评估**：结合符号准确率、数值保真度（域内/域外），更全面地衡量方程发现质量。  
- **系统化生成流程**：包含可解性、新颖性检查以及专家验证，确保问题质量和可解性。  
- **评估可靠性验证**：GPT-4o作为符号评估器与人工判断一致率94.6%，提供低成本且合理的替代方案。  
- **覆盖多学科**：化学、生物、物理、材料科学四个领域，增加了基准的多样性和实用性。  

### 8. 不足与局限

- **规模有限**：仅239个问题，可能无法全面覆盖各类科学方程或难度层次。  
- **领域覆盖不全**：仅四个领域，缺少如天文学、经济学、工程学等其他重要领域。  
- **LLM评估器偏差**：GPT-4o本身可能对某些形式判断不准确，且替换常数后可能遗漏部分等价形式。  
- **计算资源未报告**：缺乏对GPU小时、成本等的量化，不利于复现和对比效率。  
- **未测试更强模型**：如GPT-4、Claude-3.5、Gemini等，最佳性能上限可能更高。  
- **某些变换的科学意义存疑**：LSR-Transform中的部分变换（如求解角频率得到平方根差）可能物理意义较弱，不适合直接作为发现任务。  
- **合成项的新颖性依赖LLM判断**：可能漏掉真正新颖但被误判的项，或包含过于简单的合成项。

（完）
