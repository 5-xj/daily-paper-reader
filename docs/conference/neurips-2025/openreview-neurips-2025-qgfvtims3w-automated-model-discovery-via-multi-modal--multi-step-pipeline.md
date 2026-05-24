---
title: "Automated Model Discovery via Multi-modal & Multi-step Pipeline"
title_zh: 通过多模态多步流水线自动发现模型
authors: "Lee Jung-Mok, Nam Hyeon-Woo, Moon Ye-Bin, Junhyun Nam, Tae-Hyun Oh"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=qGFvTIMS3W"
tags: ["query:ad"]
score: 9.0
evidence: 直接使用多模态多步流水线进行自动模型发现
tldr: 针对自动模型发现中难以平衡细节捕捉与泛化能力的问题，本文提出多模态多步流水线，利用AnalyzerVLM自主规划多步分析以提出候选模型，EvaluatorVLM评估模型。方法在多个数据集上自动发现高性能模型，减少了人工干预，体现了大模型（VLM）在自动发现算法中的应用，符合用户对大模型启发式自动发现的需求。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-001.webp\", \"caption\": \"\", \"page\": 6, \"index\": 1, \"width\": 2004, \"height\": 560}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-002.webp\", \"caption\": \"\", \"page\": 7, \"index\": 2, \"width\": 1080, \"height\": 483}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-003.webp\", \"caption\": \"\", \"page\": 7, \"index\": 3, \"width\": 2093, \"height\": 965}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-004.webp\", \"caption\": \"\", \"page\": 7, \"index\": 4, \"width\": 2203, \"height\": 965}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-005.webp\", \"caption\": \"\", \"page\": 7, \"index\": 5, \"width\": 1000, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-006.webp\", \"caption\": \"\", \"page\": 7, \"index\": 6, \"width\": 1000, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-007.webp\", \"caption\": \"\", \"page\": 7, \"index\": 7, \"width\": 640, \"height\": 480}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-008.webp\", \"caption\": \"\", \"page\": 7, \"index\": 8, \"width\": 1000, \"height\": 500}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-009.webp\", \"caption\": \"\", \"page\": 8, \"index\": 9, \"width\": 692, \"height\": 242}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-010.webp\", \"caption\": \"\", \"page\": 8, \"index\": 10, \"width\": 692, \"height\": 242}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-011.webp\", \"caption\": \"\", \"page\": 8, \"index\": 11, \"width\": 1778, \"height\": 478}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-012.webp\", \"caption\": \"\", \"page\": 8, \"index\": 12, \"width\": 1778, \"height\": 478}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-013.webp\", \"caption\": \"\", \"page\": 8, \"index\": 13, \"width\": 484, \"height\": 384}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-014.webp\", \"caption\": \"\", \"page\": 8, \"index\": 14, \"width\": 484, \"height\": 384}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-015.webp\", \"caption\": \"\", \"page\": 8, \"index\": 15, \"width\": 726, \"height\": 573}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-016.webp\", \"caption\": \"\", \"page\": 8, \"index\": 16, \"width\": 742, \"height\": 574}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-017.webp\", \"caption\": \"\", \"page\": 9, \"index\": 17, \"width\": 1384, \"height\": 483}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-018.webp\", \"caption\": \"\", \"page\": 9, \"index\": 18, \"width\": 1384, \"height\": 483}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-019.webp\", \"caption\": \"\", \"page\": 10, \"index\": 19, \"width\": 5352, \"height\": 3552}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-020.webp\", \"caption\": \"\", \"page\": 23, \"index\": 20, \"width\": 2009, \"height\": 560}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-021.webp\", \"caption\": \"\", \"page\": 23, \"index\": 21, \"width\": 2004, \"height\": 560}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-022.webp\", \"caption\": \"\", \"page\": 23, \"index\": 22, \"width\": 1996, \"height\": 560}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-023.webp\", \"caption\": \"\", \"page\": 23, \"index\": 23, \"width\": 2007, \"height\": 560}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-024.webp\", \"caption\": \"\", \"page\": 23, \"index\": 24, \"width\": 2004, \"height\": 560}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-025.webp\", \"caption\": \"\", \"page\": 24, \"index\": 25, \"width\": 749, \"height\": 701}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-026.webp\", \"caption\": \"\", \"page\": 24, \"index\": 26, \"width\": 748, \"height\": 702}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-027.webp\", \"caption\": \"\", \"page\": 26, \"index\": 27, \"width\": 1395, \"height\": 245}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-028.webp\", \"caption\": \"\", \"page\": 26, \"index\": 28, \"width\": 1395, \"height\": 245}]"
motivation: 现有自动模型发现方法难以平衡细粒度细节与泛化能力，且模型复杂度控制困难。
method: 提出多模态多步流水线，使用两个视觉语言模型（AnalyzerVLM和EvaluatorVLM）分别进行候选模型生成和评估。
result: 在多个数据集上自动发现高精度模型，且模型复杂度合理，泛化性能良好。
conclusion: 验证了大模型在自动模型发现中的有效性，为自动化科学发现提供了新范式。
---

## Abstract
Automated model discovery is the process of automatically searching and identifying the most appropriate model for a given dataset over a large combinatorial search space. Existing approaches, however, often face challenges in balancing the capture of fine-grained details with ensuring generalizability beyond training data regimes with a reasonable model complexity. In this paper, we present a multi-modal \& multi-step pipeline for effective automated model discovery. Our approach leverages two vision-language-based modules (VLM), AnalyzerVLM and EvaluatorVLM, for effective model proposal and evaluation in an agentic way. AnalyzerVLM autonomously plans and executes multi-step analyses to propose effective candidate models. EvaluatorVLM assesses the candidate models both quantitatively and perceptually, regarding the fitness for local details and the generalibility for overall trends. Our results demonstrate that our pipeline effectively discovers models that capture fine details and ensure strong generalizability. Additionally, extensive ablation studies show that both multi-modality and multi-step reasoning play crucial roles in discovering favorable models.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：自动模型发现旨在从庞大的组合搜索空间中自动为给定数据集寻找最优模型结构，但现有方法难以同时兼顾**细粒度细节的捕捉**（局部拟合）与**超出训练数据区域的泛化能力**（全局趋势），且往往需要在模型复杂度与可解释性之间做出权衡。
- **研究动机**：传统手动模型发现依赖领域专家，成本高且不适用于现代大规模数据集；已有的自动化方法（如基于预定义语法的核搜索）缺乏灵活性，且评估指标（如BIC）仅依赖数值度量，忽略了人类专家通过可视化获得的全局结构判断。
- **整体含义**：本文提出利用**视觉语言模型（VLM）** 构建智能代理，模拟人类专家的多步分析过程，从而更灵活、更有效地自动发现泛化性能强的模型。

### 2. 方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：构建一个**多模态（文本+视觉）和多步推理**的流水线，包含四个迭代阶段：模型提议、模型拟合、模型评估、模型选择。引入两个VLM模块：
  - `AnalyzerVLM`：负责通过自主规划、代码执行、结果观察等**多步分析**，从数据和当前模型中发现缺失模式，提出改进的候选模型结构及初始化参数。
  - `EvaluatorVLM`：基于**可视化图表**对候选模型进行双维度评分（视觉拟合度与视觉泛化能力），并与传统BIC结合形成新的**视觉信息准则（VIC）**。

- **关键技术细节**：
  - **AnalyzerVLM的动作空间**包括三个子空间：
    - 语言空间（L）：自然语言分析推理。
    - 代码空间（C）：生成Python代码（如使用NumPy、Matplotlib）执行分析并获取可视化输出。
    - 模型空间（2^Σ）：最终提出多个候选模型。
  - **多步推理流程**：每步由VLM选择动作（分析/执行代码/提议），执行代码获得的观察（包括图表）更新上下文，直至模型提议触发终止。
  - **Visual Information Criterion (VIC)**：
    \[
    \text{VIC}(M, D) = \alpha \cdot \text{EvaluatorVLM}(M, \theta^*, D) - \text{BIC}
    \]
    其中EvaluatorVLM评分包括视觉拟合（均值预测相似度+不确定性区域大小）和视觉泛化性（预测结构在外推区域的一致性），每项0-50分，总分0-100。α用于平衡视觉项与BIC，实验设为50。

- **算法流程**（见原文Algorithm 1）：
  1. 输入数据集D，轮数R，模型池P。
  2. 初始化最佳模型M*。
  3. 每一轮：
     - AnalyzerVLM基于当前M*和D提议多个候选模型Mr。
     - 对每个候选模型进行参数优化（基于边际似然，多起点）。
     - 计算VIC分数：α·EvaluatorVLM - BIC。
     - 将候选模型加入池P，选择VIC最高的模型作为新的M*。
  4. 重复直到达到最大轮数。

### 3. 实验设计：数据集、benchmark、对比方法

- **数据集**：7个真实世界单变量时间序列数据集：Airline Passenger, Solar Irradiance, Mauna Loa, Wheat, Call-Center, Radio, Gas Production。
- **Benchmark**：训练集与测试集（划分比例未明确说明，文中提到使用9:1验证分割），评估指标为RMSE。
- **对比方法**：
  - 高斯过程回归（SE核）
  - ARIMA (p=2,d=1,q=2)
  - Facebook Prophet（multiplicative seasonality）
  - Automatic Statistician（基于GPy-ABCD的贪婪搜索）
  - BoxLM（基于GPT-4v的LLM方法，本文更新为GPT-4o-mini保证公平）
- **额外实验**：将方法扩展到符号回归，对比SGA、ICSR-V、LLM-SR等方法；并在真实世界数据上进行了符号回归实验（见表A6）。

### 4. 资源与算力

- 文中说明：实验使用**CPU（16核）** 进行精确计算，未使用GPU。运行时间约为**多个小时**（multiple hours）。
- 未明确说明GPU型号、数量或具体训练/推理时长，也未提及云服务提供商。由于使用闭源VLM（GPT-4o-mini、GPT-4o、Qwen2.5-VL），API调用依赖外部服务，本地仅运行优化代码。

### 5. 实验数量与充分性

- **实验数量**：
  - 主实验：7个数据集 × 5种对比方法 + 本文3种VLM变体 = 共约7×8=56组（含多种超参数设置）。
  - 消融实验：AnalyzerVLM和EvaluatorVLM的逐个去除（表2），多模态 vs 单模态（图3），单步 vs 多步（图5），不同α值（表3）。
  - 额外分析：VIC与似然/泛化差距的相关性、人类评分相关性、不同初始化效果等。
  - 符号回归扩展：4个合成benchmark（R, Constant, Keijzer, Nguyen）及7个真实数据集。

- **充分性与公平性**：
  - 对比方法覆盖传统统计（ARIMA、Prophet）、贝叶斯非参数（GP、Automatic Statistician）、LLM方法（BoxLM），种类丰富。
  - 对BoxLM使用相同LLM版本（GPT-4o-mini）确保公平。
  - 消融实验系统验证了各模块贡献，超参数α的敏感性分析显示存在合理范围（α≈50为断点）。
  - 实验设计较为充分，但缺少对文本-only VLM的更多对比，且未在更高维数据上测试泛化性。

### 6. 主要结论与发现

1. **性能领先**：在7个时间序列上，本文方法（GPT-4o-mini版）平均测试RMSE为0.1070，显著低于其他方法（如BoxLM 0.3474, Automatic Statistician 0.3017）。
2. **泛化能力突出**：训练集与测试集RMSE差距小，而对比方法存在过拟合（训练误差低但测试误差高）。
3. **多模态和多步推理均不可或缺**：消融实验显示，移除AnalyzerVLM或EvaluatorVLM均导致性能下降（表2）；使用视觉表示相比纯文本显著降低MSE（图3）；多步分析优于单步（图5）。
4. **VIC有效替代纯BIC**：VIC能惩罚外推区域不合理的模型（如预测突然变平），而BIC无法区分；VIC与人类评分高度相关（Spearman ρ≈0.8）。
5. **分析器（AnalyzerVLM）的高效初始化**：通过数据驱动的初始化（例如周期估计）显著改善了非凸参数优化的效果（图10）。
6. **扩展到符号回归**：本文方法在符号回归上也取得有竞争力结果，且和GP混合后（Ours (SR+GP)）达到最佳。

### 7. 优点

- **创新性**：首次将VLM的多步推理与视觉评估系统应用于自动模型发现，替代传统人工专家判断。
- **灵活性**：AnalyzerVLM可自主选择分析方式（代码、可视化、统计），无须人工预设分析流程。
- **评估全面**：Visual Information Criterion结合了数值似然与视觉感知，同时考虑拟合度和结构泛化性，比单一BIC更鲁棒。
- **通用性**：方法支持不同VLM（开源Qwen2.5-VL、商业GPT-4o系列），且可扩展到符号回归等不同模型类。
- **实验分析深入**：通过相关性分析、人类评估、可视化案例充分解释了VIC的有效性。

### 8. 不足与局限

- **数据维度限制**：当前流水线仅针对一维时间序列数据，未涉及多变量或高维数据（如图像、文本），缺乏对变量间关系的建模能力。
- **依赖可视化质量**：VLM的评估效果受输入图表的分辨率、刻度、颜色等绘制参数影响，文中未探讨不同可视化质量下的鲁棒性。
- **闭源模型依赖**：主要使用GPT-4o-mini等商业模型，可能带来可重复性问题和成本；虽尝试了开源模型，但性能较低。
- **计算资源说明不充分**：未报告具体CPU负载、内存消耗、API调用次数和费用，给实际部署带来不确定性。
- **超参数α的敏感性**：虽然存在最佳点（α=50），但不同数据集可能需要调整，文中仅给出粗略指导（从较小α开始）。
- **缺乏统计显著性测试**：未报告多次运行的置信区间或显著性检验，消融实验结果仅展示单次或平均MSE。
- **符号回归实验偏弱**：在真实数据集上，纯符号回归方法表现较差，本文方法需结合GP才最佳，通用性有待验证。

（完）
