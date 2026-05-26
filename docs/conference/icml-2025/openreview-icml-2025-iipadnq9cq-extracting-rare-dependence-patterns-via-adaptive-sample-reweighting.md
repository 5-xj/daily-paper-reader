---
title: Extracting Rare Dependence Patterns via Adaptive Sample Reweighting
title_zh: 通过自适应样本重加权提取罕见依赖模式
authors: "Yiqing Li, Yewei Xia, Xiaofei Wang, Zhengming Chen, Liuhua Peng, Mingming Gong, Kun Zhang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=iIPAdNq9cq"
tags: ["query:sr"]
score: 4.0
evidence: 从数据中发现罕见依赖模式
tldr: 现有测试方法难以检测数据分布小区域内的微弱但关键的依赖模式，称为罕见依赖。本文提出结合核独立检验与自适应样本重加权的方法，通过赋予高依赖性样本更高权重放大模式，成功检测到这些模式，为因果发现提供有力工具。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-iipadnq9cq/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 857, \"height\": 240, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-iipadnq9cq/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 852, \"height\": 237, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-iipadnq9cq/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 852, \"height\": 423, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-iipadnq9cq/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1773, \"height\": 356, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-iipadnq9cq/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1772, \"height\": 328, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-iipadnq9cq/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1297, \"height\": 435, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-iipadnq9cq/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 827, \"height\": 391, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-iipadnq9cq/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 832, \"height\": 385, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-iipadnq9cq/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1293, \"height\": 438, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-iipadnq9cq/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 805, \"height\": 384, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-iipadnq9cq/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1040, \"height\": 338, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-iipadnq9cq/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1243, \"height\": 414, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-iipadnq9cq/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 856, \"height\": 602, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-iipadnq9cq/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1477, \"height\": 1259, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-iipadnq9cq/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 821, \"height\": 241, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-iipadnq9cq/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1195, \"height\": 626, \"label\": \"Table\"}]"
motivation: 现有独立检验方法常遗漏数据分布小区域内的关键依赖模式。
method: 结合核独立检验与自适应样本重要重加权，突出显示强依赖样本。
result: 理论上证明了检测能力，实验验证对罕见依赖的有效性。
conclusion: 该方法拓展了依赖模式检测的范围，对因果发现等任务有价值。
---

## Abstract
Discovering dependence patterns between variables from observational data is a fundamental issue in data analysis. However, existing testing methods often fail to detect subtle yet critical patterns that occur within small regions of the data distribution--patterns we term rare dependence. These rare dependencies obscure the true underlying dependence structure in variables, particularly in causal discovery tasks. 
To address this issue, we propose a novel testing method that combines kernel-based (conditional) independence testing with adaptive sample importance reweighting. By learning and assigning higher importance weights to data points exhibiting significant dependence, our method amplifies the patterns and can detect them successfully. Theoretically, we analyze the asymptotic distributions of the statistics in this method and show the uniform bound of the learning scheme. Furthermore, we integrate our tests into the PC algorithm, a constraint-based approach for causal discovery, equipping it to uncover causal relationships even in the presence of rare dependence. Empirical evaluation of synthetic and real-world datasets comprehensively demonstrates the efficacy of our method.

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义

- **研究动机**：传统统计独立性检验（如 HSIC）在检测“罕见依赖”时失效——依赖关系仅在数据分布的小区域内显著，而在全局上被噪声掩盖。这种模式常见于经济学、心理学、医学、自动驾驶等领域，误判为独立会导致严重后果，尤其在因果发现中（如 PC 算法）传播错误。
- **整体含义**：本文旨在提出一种能够自动识别并放大罕见依赖的信号检测方法，从而实现对微弱但关键依赖模式的可靠检验，并进一步用于因果结构学习。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：通过自适应样本重加权，赋予表现出更强依赖性的样本更高权重，从而放大依赖模式。权重由一个可学习的重加权函数 β(·) 生成，该函数以参考变量 C（通常为 X 或 Y）为输入。
- **关键技术细节**：
  - 定义重加权分布：`̃P(X,Y) = β(C)P(X,Y)`，要求 `E[β(C)]=1` 且 `β≥0`。
  - 提出重加权 HSIC（RHSIC）统计量 `HSIC_β`，其有偏估计为 `(1/n²) Tr[K_X H_β K_Y H_β]`，其中 `H_β = D_β(I - (1/n)11ᵀD_β)`。
  - 学习优化问题：最小化负对数归一化 RHSIC，加上 RKHS 平滑正则项和方差惩罚项，约束 `Σβ_i = n, β_i ≥ 0`。
  - 数据分割：将数据分为训练集（学习 β）和测试集（进行检验），避免过拟合。
  - 扩展条件检验（RKCIT）：通过核岭回归在重加权分布下估计条件残差，得到类似统计量 `JCI_β`。
  - 理论分析：给出 RHSIC 在原假设和备择假设下的渐近分布（定理 3.4、3.5），并证明重加权函数学习的一致性（定理 3.7 均匀界）。
  - 因果发现集成：提出 RD-PC 算法，利用 RKCIT 和校正规则（Rule 1、Rule 2）处理罕见依赖场景下的结构学习。

## 3. 实验设计：数据集、场景、对比方法

- **合成数据**：
  - 无条件检验：DG I（X～U(-20,20)，Y 在 X≈0 处有高斯噪声依赖）、DG II（通过阈值 τ 控制依赖区域）、DG III（类似但使用第三变量 Q）。
  - 条件检验：类似生成，控制条件集 Z 的维度和依赖比例 τ。
- **真实数据**：
  - Sachs 流式细胞仪数据集（11 个蛋白，853 样本），检验 pair (PKA, PJINK)。
  - 金融数据集（JPY/USD 汇率与联邦基金利率，251 样本）。
- **基准方法**：
  - 无条件：HSIC、RDC、FHSIC、LFHSIC、FisherScan。
  - 条件：KCIT、RCIT、CCIT、GCIT、GCM、NNLSCIT 等。
- **因果发现**：随机生成 6 节点 ER 图，非线性 SEM，与 PC+KCIT 对比 SHD 和 F1 分数。

## 4. 资源与算力

- **文中未明确说明所使用的 GPU 型号、数量或训练时长**。所有实验基于 Python 实现，优化使用 scipy 库，最大迭代 50 次，2000 次排列近似 null 分布。因此无法评估具体算力消耗。

## 5. 实验数量与充分性

- **实验数量**：包含多组独立检验实验（不同样本量 500~3000、不同稀罕度 τ 0.01~0.2、不同条件维数 1~10）、条件检验实验、因果发现实验（30 个图，样本量 300~700）、真实数据案例、消融实验（核函数选择、参考变量选择、分割比例）。
- **充分性**：覆盖了多种噪声类型（高斯、拉普拉斯）、不同依赖区域、不同样本量，Type I error 和 power 均系统报告。因果发现使用 SHD 和 F1 指标。消融实验较为全面。
- **公平性**：所有方法均使用相同显著性水平 α=0.05，基线按默认设置运行。但部分基线未做校准（如 KCIT 在 CI 实验中 Type I error 偏高），本文在变化条件维数时对自身方法做了校准（阈值 0.0375），可能存在细微不公平。整体对比客观。

## 6. 论文的主要结论与发现

- 提出的 RHSIC 在合成数据上始终控制 Type I error 在 0.05 附近，且 **power 显著优于所有基线**，尤其在依赖区域极小时（τ→0）优势更明显。
- RKCIT 在条件检验中同样保持较高 power（比 KCIT 提升约 50%），且受条件维数增加影响较小。
- 在 Sachs 数据上，HSIC 未能检测 (PKA, PJINK) 依赖（p=0.601），而 RHSIC 成功检测（p=0.004）。
- 在金融数据上，RHSIC 检测到汇率与利率在危机时期的罕见依赖，并赋予 2001 年、2008 年样本高权重，具有可解释性。
- RD-PC 算法在因果发现中恢复的图结构更接近真实，SHD 更低、F1 更高。

## 7. 优点

- **创新性**：首次系统定义并解决“罕见依赖”检验问题，提出自适应重加权框架。
- **理论扎实**：提供 RHSIC 渐近分布、均匀收敛界，以及 RD-PC 的正确性证明。
- **可扩展性**：方法自然推广到条件独立性检验和因果发现，算法设计清晰（Algorithm 1、2）。
- **可解释性**：学到的权重可指示哪些样本贡献了关键依赖，便于实际场景分析。
- **实验充分**：涵盖多种合成和真实场景，消融实验验证了设计选择（核函数、参考变量、分割比例）。

## 8. 不足与局限

- **参考变量 C 的选择**：方法依赖一个已知的参考变量（如 X 或 Y），在某些场景可能不明确或需要试错（文中建议测试 C=X 和 C=Y 取低 p-value，但缺乏理论指导）。
- **数据分割损失效率**：为保独立性，将样本一分为二（训练/测试），浪费一半信息；在小样本下性能可能下降。
- **核函数敏感性**：性能依赖核函数选择（高斯最佳），但文中未提供自适应核的机制；Laplace、多项式核表现较差。
- **条件检验理论不完全**：对于 RKCIT 的渐近分布和一致界仅做了定性讨论，未给出完整证明（附录 E.4 提及留作未来工作）。
- **计算复杂度**：每次检验需重复优化 β(·) 和排列检验，计算开销较传统方法高（scipy 优化最大 50 迭代，排列 2000 次），但未报告具体运行时间。
- **应用限制**：假设无隐藏混杂（因果充分性），在真实复杂系统中可能不满足；PC 算法依赖 Markov 和忠实性假设。

（完）
