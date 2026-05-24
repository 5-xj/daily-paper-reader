---
title: "From Euler to AI: Unifying Formulas for Mathematical Constants"
title_zh: 从欧拉到AI：数学常数的公式统一
authors: "Tomer Raz, Michael Shalyt, Elyasheev Leibtag, Rotem Kalisch, Shachar Weinbaum, Yaron Hadad, Ido Kaminer"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=cNqMAmpZh4"
tags: ["query:ad"]
score: 9.0
evidence: 使用LLM自动统一数学公式，包含验证反馈循环
tldr: 该论文针对数学常数公式之间深层联系难以发现的普遍问题，提出一个自动化统一框架，利用大语言模型（LLM）系统化地采集各类数学常数公式，并构建LLM-代码反馈循环进行验证。框架进一步采用新颖的方法检测公式间的等价与变换关系，发现此前未知的跨世纪公式连接。实验不仅统一了大量已知公式，还揭示了新的统一结构，为数学知识的自动整合与发现提供了强大工具，展示了AI在数学研究中的变革潜力。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 1371, \"height\": 436}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-002.webp\", \"caption\": \"\", \"page\": 2, \"index\": 2, \"width\": 1400, \"height\": 353}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-003.webp\", \"caption\": \"\", \"page\": 2, \"index\": 3, \"width\": 1400, \"height\": 255}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-004.webp\", \"caption\": \"\", \"page\": 2, \"index\": 4, \"width\": 674, \"height\": 482}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-005.webp\", \"caption\": \"\", \"page\": 2, \"index\": 5, \"width\": 900, \"height\": 360}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-006.webp\", \"caption\": \"\", \"page\": 2, \"index\": 6, \"width\": 1024, \"height\": 373}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-007.webp\", \"caption\": \"\", \"page\": 2, \"index\": 7, \"width\": 1024, \"height\": 236}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-008.webp\", \"caption\": \"\", \"page\": 2, \"index\": 8, \"width\": 1024, \"height\": 192}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-009.webp\", \"caption\": \"\", \"page\": 2, \"index\": 9, \"width\": 1024, \"height\": 194}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-010.webp\", \"caption\": \"\", \"page\": 2, \"index\": 10, \"width\": 1024, \"height\": 300}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-011.webp\", \"caption\": \"\", \"page\": 2, \"index\": 11, \"width\": 1862, \"height\": 230}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-012.webp\", \"caption\": \"\", \"page\": 2, \"index\": 12, \"width\": 751, \"height\": 256}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-013.webp\", \"caption\": \"\", \"page\": 2, \"index\": 13, \"width\": 1800, \"height\": 1200}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-014.webp\", \"caption\": \"\", \"page\": 2, \"index\": 14, \"width\": 1293, \"height\": 860}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-015.webp\", \"caption\": \"\", \"page\": 2, \"index\": 15, \"width\": 938, \"height\": 654}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-016.webp\", \"caption\": \"\", \"page\": 2, \"index\": 16, \"width\": 640, \"height\": 790}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-017.webp\", \"caption\": \"\", \"page\": 2, \"index\": 17, \"width\": 610, \"height\": 445}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-018.webp\", \"caption\": \"\", \"page\": 2, \"index\": 18, \"width\": 1181, \"height\": 234}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-019.webp\", \"caption\": \"\", \"page\": 2, \"index\": 19, \"width\": 1275, \"height\": 875}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-020.webp\", \"caption\": \"\", \"page\": 2, \"index\": 20, \"width\": 1349, \"height\": 949}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-021.webp\", \"caption\": \"\", \"page\": 2, \"index\": 21, \"width\": 1493, \"height\": 1093}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-022.webp\", \"caption\": \"\", \"page\": 2, \"index\": 22, \"width\": 1739, \"height\": 1339}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-023.webp\", \"caption\": \"\", \"page\": 2, \"index\": 23, \"width\": 2121, \"height\": 1721}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-024.webp\", \"caption\": \"\", \"page\": 2, \"index\": 24, \"width\": 1541, \"height\": 364}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-025.webp\", \"caption\": \"\", \"page\": 2, \"index\": 25, \"width\": 1024, \"height\": 1305}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-026.webp\", \"caption\": \"\", \"page\": 2, \"index\": 26, \"width\": 400, \"height\": 400}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-027.webp\", \"caption\": \"\", \"page\": 4, \"index\": 27, \"width\": 566, \"height\": 566}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-028.webp\", \"caption\": \"\", \"page\": 6, \"index\": 28, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-029.webp\", \"caption\": \"\", \"page\": 9, \"index\": 29, \"width\": 776, \"height\": 603}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-030.webp\", \"caption\": \"\", \"page\": 9, \"index\": 30, \"width\": 677, \"height\": 582}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-031.webp\", \"caption\": \"\", \"page\": 9, \"index\": 31, \"width\": 870, \"height\": 620}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-032.webp\", \"caption\": \"\", \"page\": 9, \"index\": 32, \"width\": 901, \"height\": 629}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-033.webp\", \"caption\": \"\", \"page\": 9, \"index\": 33, \"width\": 889, \"height\": 594}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-034.webp\", \"caption\": \"\", \"page\": 9, \"index\": 34, \"width\": 821, \"height\": 570}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-035.webp\", \"caption\": \"\", \"page\": 9, \"index\": 35, \"width\": 777, \"height\": 665}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-036.webp\", \"caption\": \"\", \"page\": 9, \"index\": 36, \"width\": 983, \"height\": 665}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-037.webp\", \"caption\": \"\", \"page\": 9, \"index\": 37, \"width\": 903, \"height\": 497}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-038.webp\", \"caption\": \"\", \"page\": 9, \"index\": 38, \"width\": 1224, \"height\": 792}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-039.webp\", \"caption\": \"\", \"page\": 47, \"index\": 39, \"width\": 1393, \"height\": 1294}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-040.webp\", \"caption\": \"\", \"page\": 47, \"index\": 40, \"width\": 1206, \"height\": 1268}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-041.webp\", \"caption\": \"\", \"page\": 47, \"index\": 41, \"width\": 1393, \"height\": 1272}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-cnqmampzh4/fig-042.webp\", \"caption\": \"\", \"page\": 47, \"index\": 42, \"width\": 1159, \"height\": 1266}]"
motivation: 数学常数公式虽多但深层联系常被掩盖，缺乏统一理论，阻碍了数学知识的整合与深入理解。
method: 提出结合LLM公式采集、LLM-代码反馈验证和公式关系检测的自动化框架，系统性地发现并统一数学常数公式。
result: 成功统一了π、e等常数的大量公式，揭示了跨世纪的新联系，验证了方法的有效性和扩展性。
conclusion: 该工作表明LLM可有效辅助数学知识的自动化整合与发现，为AI驱动的数学研究开辟新路径。
---

## Abstract
The constant $\large \pi$ has fascinated scholars throughout the centuries, inspiring numerous formulas for its evaluation, such as infinite sums and continued fractions. Despite their individual significance, many of the underlying connections among formulas remain unknown, missing unifying theories that could unveil deeper understanding. The absence of a unifying theory reflects a broader challenge across math and science: knowledge is typically accumulated through isolated discoveries, while deeper connections often remain hidden. In this work, we present an automated framework for the unification of mathematical formulas. Our system combines large language models (LLMs) for systematic formula harvesting, an LLM-code feedback loop for validation, and a novel symbolic algorithm for clustering and eventual unification. We demonstrate this methodology on the hallmark case of $\large \pi$, an ideal testing ground for symbolic unification. Applying this approach to 455,050 arXiv papers, we validate 385 distinct formulas for $\large \pi$ and prove relations between 360 (94\%) of them, of which 166 (43\%) can be derived from a single mathematical object—linking canonical formulas by Euler, Gauss, Brouncker, and newer ones from algorithmic discoveries by the Ramanujan Machine.
  Our method generalizes to other constants, including $e$, $\zeta(3)$, and Catalan’s constant, demonstrating the potential of AI-assisted mathematics to uncover hidden structures and unify knowledge across domains.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：数学常数（如π、e、ζ(3)等）在历史上产生了大量计算公式（无穷级数、连分数等），这些公式表面上形式各异，但许多之间存在潜在的等价关系。然而，由于知识发现往往是孤立的，这些深层联系长期未被揭示，缺乏统一的数学理论来整合它们。
- **整体含义**：这种孤立状态不仅导致重复发现（如Lange公式早被Lord Brouncker得到），也阻碍了对常数本质的深入理解。作者希望建立一个自动化框架，系统性地收集、验证并统一这些公式，从而揭示隐藏的数学结构，推动AI辅助数学发现。

### 2. 论文提出的方法论：核心思想、关键技术细节、算法流程（文字说明）

- **核心思想**：整合大语言模型（LLM）与符号计算工具，自动完成公式的收集、验证、聚类和统一。
- **关键技术细节**：
  - **公式采集（Harvesting）**：从arXiv的455,050篇论文中提取LATEX数学表达式。先通过正则表达式过滤含π符号的等式，再用GPT-4o mini进行零样本分类（是否计算π），然后用GPT-4o进一步分类为级数或连分数，并提取其组件（如求和项、部分分子/分母）。
  - **验证（Validation）**：将提取的公式转换为SymPy代码执行，通过LLM-代码反馈循环修正错误；然后利用PSLQ整数关系算法验证公式的极限值是否与π（或其它常数）满足有理线性关系。
  - **规范化（Canonical form）**：将验证后的公式转换为线性递推关系（companion matrix形式），并利用RISC工具和Maple包找到阶数最小的多项式递推（PCF），作为公式的规范形式。
  - **聚类（Clustering）**：基于动力学度量（收敛率r和无理测度δ）对规范形式进行聚类。δ相近的公式可能相关，r比值提示是否需要“折叠”（取子序列）来对齐收敛速度。
  - **统一（Unification via UMAPS）**：提出UMAPS算法（Unification via Mapping Across Symbolic Structures），利用共边界等价（coboundary equivalence）的概念。给定两个递推矩阵A(n)和B(n)，算法寻找多项式矩阵U(n)和多项式pA, pB，使得pA(n)·A(n)·U(n+1)=pB(n)·U(n)·B(n)。通过拟合U(1)到U(N)的数值测量值来恢复U(n)，从而证明两个公式等价。最终将所有等价公式嵌入到保守矩阵场（CMF）中，实现统一。

### 3. 实验设计：数据集/场景、基准、对比方法

- **数据集与场景**：
  - 主数据集：从arXiv的455,050篇论文（math.CA, math.NT等类别）中提取π相关公式，最终验证得到385个独特π公式。
  - 扩展场景：同样方法用于e、ζ(3)和Catalan常数。
- **基准（Benchmark）**：由于该工作首次系统解决符号统一问题，没有现成基准。作者手动构建了10对等价公式（已知由UMAPS证明）作为测试集。
- **对比方法**：
  - LLM等价检测与证明：对比GPT-4o和Gemini 2.5 Pro Preview在10对公式上的表现。
  - LLM提取器选择：对比GPT-4o、Claude 3.7 Sonnet、GPT-4o mini作为提取器的成功率。

### 4. 资源与算力

- 论文未明确提及GPU型号、数量或训练时长。主要算力消耗来自：
  - LLM API调用（分类、提取）：使用OpenAI GPT-4o mini和GPT-4o，总体成本低于50美元。
  - 符号计算：使用RISC的Mathematica包、Maple包，以及自研Python代码，运行在13th Gen i5-13500H CPU的个人机器上；超参数敏感性研究在Technion HPC集群上进行。
  - 未使用大规模GPU训练，资源需求适中。

### 5. 实验数量与充分性

- **实验数量**：
  - 公式采集：从455,050篇文章中提取到121,662个含π等式，经LLM分类得1,656个候选，最终验证385个π公式。
  - 统一结果：360/385（94%）公式被证明有联系，166/385（43%）可归因于单一CMF。
  - 超参数敏感性：测试了不同δ聚类粒度、相似度阈值、UMAPS拟合深度对链接率和运行时间的影响（附录D表7-10）。
  - LLM提取对比：在三种提取器上统计了成功率（表3）。
- **充分性**：实验覆盖了主要环节，并提供了敏感性分析。但LLM对比数据集较小（10对），且未在更广的公式空间上验证UMAPS的失败率。总体而言，实验设计合理，结果可信。

### 6. 论文的主要结论与发现

- **统一成果**：系统成功验证385个π公式，其中94%可被证明等价，43%可统一到同一个π-CMF中。著名公式（如Ramanujan 1914公式、Lord Brouncker公式、Euler公式、Gauss公式）之间发现了新的等价关系。
- **方法通用性**：该框架可推广到e、ζ(3)、Catalan常数，同样发现了等价关系和CMF统一。
- **CMF生成新公式**：从π-CMF随机生成了1,693个不同收敛率的π公式，其中57个具有最佳归一化收敛率1.76，优于已知统一公式的最大值0.88。
- **LLM局限性**：GPT-4o和Gemini 2.5 Pro Preview在等价检测和证明上表现不佳（Gemini成功8/10检测和5/10证明，GPT-4o仅1/10检测和2/10证明），说明UMAPS等符号方法不可或缺。

### 7. 优点

- **方法创新性**：首次将LLM、符号计算和共边界等价结合用于符号数学统一，构建端到端自动化框架。
- **系统完整性**：覆盖从原始论文抓取到最终证明的全流程，包含LLM-代码反馈验证和多项式拟合等实用技术。
- **结果显著**：统一了跨越多个世纪的著名公式，揭示了隐藏联系，并展示了CMF作为统一结构的强大能力。
- **可扩展性**：方法不局限于π，对其他常数同样有效；且UMAPS算法理论上可处理更高阶递推。

### 8. 不足与局限

- **LLM依赖**：公式提取阶段依赖LLM对LATEX的理解，可能出现误分类或提取错误，尤其在变量替换、多项式序列识别等方面。虽然PSLQ可部分纠正，但仍存在假阴性和假阳性。
- **公式类型限制**：目前主要处理级数和连分数（二阶递推）。虽然UMAPS能推广到高阶，但实验主要集中在二阶，更高阶公式（如某些Ramanujan公式）处理较少。
- **手动干预**：部分公式因包含上下文定义的变量需要手动替换才能验证，自动化程度有待提高。
- **CMF覆盖不全**：仍有11%的规范形式未能通过UMAPS关联到CMF或相互关联，可能需扩大CMF维度或改进算法。
- **LLM对比样本小**：等价检测和证明对比仅用10对公式，统计显著性有限。
- **计算资源未完全公开**：未报告符号计算的总运行时间、内存占用等详细资源消耗。

（完）
