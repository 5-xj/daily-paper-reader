---
title: "From Euler to AI: Unifying Formulas for Mathematical Constants"
title_zh: 从欧拉到人工智能：统一数学常数的公式
authors: "Tomer Raz, Michael Shalyt, Elyasheev Leibtag, Rotem Kalisch, Shachar Weinbaum, Yaron Hadad, Ido Kaminer"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=cNqMAmpZh4"
tags: ["query:ad"]
score: 9.0
evidence: 基于大语言模型的数学公式统一自动框架，与符号回归中的启发式搜索相关
tldr: 针对数学公式间隐含联系未被挖掘的问题，本文提出自动化框架，结合大语言模型进行公式收集、LLM-代码反馈循环验证以及新颖的对齐机制，成功发现了多个著名常数公式之间的深层统一关系，展示了LLM在数学发现和符号回归中的潜力。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1444, \"height\": 612, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 880, \"height\": 664, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 875, \"height\": 906, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 690, \"height\": 827, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1441, \"height\": 820, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1413, \"height\": 959, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1410, \"height\": 771, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1372, \"height\": 755, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1447, \"height\": 525, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 873, \"height\": 157, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1448, \"height\": 223, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1438, \"height\": 133, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1115, \"height\": 1341, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1442, \"height\": 602, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 997, \"height\": 594, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 963, \"height\": 594, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1135, \"height\": 498, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1444, \"height\": 443, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1450, \"height\": 630, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1061, \"height\": 360, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1461, \"height\": 606, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1428, \"height\": 619, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1302, \"height\": 1869, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1441, \"height\": 2320, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1431, \"height\": 2069, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1407, \"height\": 1435, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 1414, \"height\": 2299, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-020.webp\", \"caption\": \"\", \"page\": 0, \"index\": 20, \"width\": 1448, \"height\": 532, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-021.webp\", \"caption\": \"\", \"page\": 0, \"index\": 21, \"width\": 1301, \"height\": 1760, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-022.webp\", \"caption\": \"\", \"page\": 0, \"index\": 22, \"width\": 1266, \"height\": 2251, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-023.webp\", \"caption\": \"\", \"page\": 0, \"index\": 23, \"width\": 1363, \"height\": 2334, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-024.webp\", \"caption\": \"\", \"page\": 0, \"index\": 24, \"width\": 1428, \"height\": 1642, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-025.webp\", \"caption\": \"\", \"page\": 0, \"index\": 25, \"width\": 1403, \"height\": 1998, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-026.webp\", \"caption\": \"\", \"page\": 0, \"index\": 26, \"width\": 1442, \"height\": 1722, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-027.webp\", \"caption\": \"\", \"page\": 0, \"index\": 27, \"width\": 1417, \"height\": 2259, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-028.webp\", \"caption\": \"\", \"page\": 0, \"index\": 28, \"width\": 1443, \"height\": 2639, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-029.webp\", \"caption\": \"\", \"page\": 0, \"index\": 29, \"width\": 1450, \"height\": 658, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-030.webp\", \"caption\": \"\", \"page\": 0, \"index\": 30, \"width\": 1453, \"height\": 1352, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-031.webp\", \"caption\": \"\", \"page\": 0, \"index\": 31, \"width\": 1429, \"height\": 2673, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-032.webp\", \"caption\": \"\", \"page\": 0, \"index\": 32, \"width\": 1434, \"height\": 1287, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-cnqmampzh4/table-033.webp\", \"caption\": \"\", \"page\": 0, \"index\": 33, \"width\": 1450, \"height\": 1648, \"label\": \"Table\"}]"
motivation: 数学常数公式多为孤立发现，缺乏统一理论联系。
method: 利用LLM系统化收集公式，通过代码反馈循环验证，并采用对齐机制进行统一。
result: 在π等常数公式上成功发现了隐藏的统一关系。
conclusion: 该框架展示了LLM在自动化数学发现中的有效性，为符号回归和启发式搜索提供了新方法。
---

## Abstract
The constant $\large \pi$ has fascinated scholars throughout the centuries, inspiring numerous formulas for its evaluation, such as infinite sums and continued fractions. Despite their individual significance, many of the underlying connections among formulas remain unknown, missing unifying theories that could unveil deeper understanding. The absence of a unifying theory reflects a broader challenge across math and science: knowledge is typically accumulated through isolated discoveries, while deeper connections often remain hidden. In this work, we present an automated framework for the unification of mathematical formulas. Our system combines large language models (LLMs) for systematic formula harvesting, an LLM-code feedback loop for validation, and a novel symbolic algorithm for clustering and eventual unification. We demonstrate this methodology on the hallmark case of $\large \pi$, an ideal testing ground for symbolic unification. Applying this approach to 455,050 arXiv papers, we validate 385 distinct formulas for $\large \pi$ and prove relations between 360 (94\%) of them, of which 166 (43\%) can be derived from a single mathematical object—linking canonical formulas by Euler, Gauss, Brouncker, and newer ones from algorithmic discoveries by the Ramanujan Machine.
  Our method generalizes to other constants, including $e$, $\zeta(3)$, and Catalan’s constant, demonstrating the potential of AI-assisted mathematics to uncover hidden structures and unify knowledge across domains.

---

## 论文详细总结（自动生成）

## 论文总结：从欧拉到人工智能：统一数学常数的公式

### 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：数学常数（如π）的公式发现历经数百年，涌现出无穷级数、连分数等多种形式，但这些公式之间的深层联系往往未被揭示，缺乏统一的理论框架。这种“孤立发现、隐藏联系”的现象在数学和科学中普遍存在，阻碍了知识的系统性整合。
- **研究动机**：作者旨在开发一种自动化的方法，从大规模文献中收集、验证并统一数学公式，进而挖掘它们之间的隐含关系，为数学知识提供结构化的统一视角。
- **整体含义**：该工作首次将大语言模型（LLM）与符号计算工具深度集成，实现数学公式的自动化统一，展示了AI辅助数学发现（特别是符号回归与启发式搜索）的巨大潜力，并可能推广到其他科学领域。

### 2. 方法论：核心思想、关键技术细节与算法流程

- **核心思想**：将不同形式（级数、连分数等）的数学常数公式转换为统一的规范形式（最小多项式线性递推），然后利用“保守矩阵场”（Conservative Matrix Fields, CMF）和“上边界等价”（coboundary equivalence）的概念，通过符号算法证明公式之间的等价关系，最终实现统一。
- **关键技术细节与流程**：
  1. **公式采集（Harvesting）**：
     - 从arXiv上455,050篇论文中提取LATEX公式，使用正则表达式和LLM（GPT-4o mini、GPT-4o）筛选出可能计算π的公式（共385个验证通过的公式）。
     - 利用LLM-code反馈循环：将LATEX公式转译成可执行SymPy代码，通过数值计算和整数关系算法（PSLQ）验证其极限值，纠正LLM错误。
  2. **规范形式转换（Clustering）**：
     - 将每个公式转换为规范形式——最小多项式线性递推（对于二阶递推称为多项式连分数PCF）。
     - 利用RISC的Guess工具拟合递推，再用Maple包保证阶数最小性。
     - 计算每个公式的动力学度量：趋近率（convergence rate r）和无理性度量（irrationality measure δ），用于聚类和匹配。
  3. **统一算法UMAPS（Unification via Mapping Across Symbolic Structures）**：
     - 基于上边界等价（coboundary equivalence）概念：若两个递推矩阵A(n)和B(n)存在矩阵U(n)及多项式pA(n), pB(n)满足 `pA(n)·A(n)·U(n+1) = pB(n)·U(n)·B(n)`，则它们等价。
     - UMAPS算法先利用极限关系求解U(1)，再通过递推关系传播得到U(1..N)的测量值，最后用有理函数拟合得到U(n)，并验证精确满足上边界条件。
     - “折叠”（Folding）操作：将递推步长合并，使两个公式的趋近率匹配，以便应用UMAPS。
  4. **统一框架**：
     - 通过构建保守矩阵场（CMF）生成大量代表性公式，将文献中的公式与CMF中的轨迹对应，从而证明它们都源于同一个数学结构。
- **关键创新**：首次提出并实现了自动化上边界等价求解器，解决了非线性符号方程问题。

### 3. 实验设计：数据集、场景与对比方法

- **数据集**：
  - 主数据集：arXiv上455,050篇论文（类别涵盖数学、计算机科学等），从中提取出121,662个包含π符号的等式，经LLM分类后得到3367个候选，最终验证得到385个不同的π公式。
  - 其他常数：同样方法用于e、ζ(3)、Catalan常数，各验证了多个公式并发现等价关系。
- **场景**：主要场景是π公式的统一，作为概念验证；其次展示了该方法对另外三个常数的通用性。
- **基准对比**：
  - 与当前主流LLM（GPT-4o和Gemini 2.5 Pro Preview）进行能力对比：给定10对已证明等价的公式，要求LLM识别并证明等价性。结果：GPT-4o仅成功识别1对、正确证明2对；Gemini 2.5 Pro Preview识别8对、证明5对，均远不如本文自动化方法（可证明所有等价关系），说明纯LLM无法替代符号算法。
  - 对比不同LLM作为提取器的性能：GPT-4o提取成功率97.6%，远优于Claude 3.7 Sonnet（89.9%）和GPT-4o mini（69.6%）。

### 4. 资源与算力

- 文中未明确说明使用的GPU型号、数量或训练时长。LLM调用全部通过API（OpenAI、Anthropic、Google AI Studio）完成，总费用低于50美元。符号算法（UMAPS、RISC工具等）运行在13代i5-13500H CPU的个人机器上，敏感度实验运行在大学HPC集群（Zeus）上。未提及大规模GPU训练。

### 5. 实验数量与充分性

- **实验数量**：
  - 主实验：从455,050篇论文中系统化采集，最终验证385个π公式，其中360个（94%）被证明存在关系，166个（43%）归入同一个CMF。
  - 规范形式聚类：385个公式转化为153个规范形式（149个二阶递推、4个三阶递推），其中136个（89%）被证明存在关系，81个（53%）归入同一个CMF。
  - 超参数敏感度实验：对δ聚类粒度、相似度阈值、UMAPS拟合深度、RISC拟合深度等进行了系统地改变参数并观察链接率与运行时间（附录D表7-10）。
  - 对比实验：10对公式等价性检测（表2）、LLM提取器性能对比（表3）、以及扩展到其他常数的示例。
- **充分性**：实验设计较为充分，覆盖了主要变量，敏感性分析合理，基准对比选取了当前最强LLM。但未进行大规模随机采样统计（如多次运行取平均值），尤其LLM调用是确定性的（temperature=0），因此结果稳定。实验结论可靠。

### 6. 主要结论与发现

- **统一能力**：提出的自动化框架能成功统一大部分π公式（94%有关联，43%归入同一CMF），并将欧拉、高斯、布隆克等经典公式以及近年计算机发现的新公式联系起来。
- **跨常数通用性**：方法同样适用于e、ζ(3)、Catalan常数，证明了其通用性。
- **LLM有效但有限**：LLM在公式分类和提取上表现出色，但独立完成等价推理和证明的能力远逊于符号系统。
- **CMF作为统一基础**：保守矩阵场被证明是许多π公式的深层数学结构，可作为统一框架的核心。
- **新等价关系发现**：自动发现了多个之前未知的公式等价关系，例如Ramanujan 1914公式与Sun 2020公式的等价性。

### 7. 优点

- **系统化自动化程度高**：从海量文献中全自动采集、验证、聚类到统一，端到端流程，减少人工干预。
- **方法创新性强**：首次将LLM与符号算法结合用于数学公式统一，提出UMAPS算法解决上边界等价这一非线性问题。
- **数学深度好**：基于保守矩阵场（CMF）和动力学度量（δ、r）等理论，既有实用性又有严谨理论基础。
- **结果可验证**：每个等价关系都生成明确的代数证明（上边界矩阵和多项式），不是黑盒预测。
- **开源可复现**：代码、数据、结果全部公开。

### 8. 不足与局限

- **依赖LLM可靠性**：公式提取依赖LLM理解LATEX的能力，可能存在遗漏和错误；文中也提到需手动处理部分额外参数。
- **公式类型局限**：主要处理级数和连分数，对于其他类型（如无穷乘积、积分表达式等）未充分覆盖，但方法理论上可扩展。
- **CMF覆盖不全**：仍有约6%的公式（11个规范形式）未找到与其他公式的关系，可能需扩大CMF维度或改进UMAPS。
- **超参数选择依赖经验**：δ相似度阈值、折叠策略等参数需根据问题调整，缺乏自适应方案。
- **计算开销可优化**：UMAPS拟合深度增大时运行时间显著增长，对于复杂矩阵可能成为瓶颈。
- **可扩展性未验证**：仅测试了π、e、ζ(3)、Catalan常数四个案例，面对更广泛的数学常数或非线性结构时效果未知。

（完）
