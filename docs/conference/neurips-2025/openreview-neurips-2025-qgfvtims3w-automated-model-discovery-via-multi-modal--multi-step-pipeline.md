---
title: "Automated Model Discovery via Multi-modal & Multi-step Pipeline"
title_zh: 基于多模态多步骤管道的自动化模型发现
authors: "Lee Jung-Mok, Nam Hyeon-Woo, Moon Ye-Bin, Junhyun Nam, Tae-Hyun Oh"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=qGFvTIMS3W"
tags: ["query:ad"]
score: 8.0
evidence: 使用视觉语言模型进行自动化模型发现
tldr: 该论文提出多模态多步骤自动化模型发现流程，利用两个视觉语言模型模块——AnalyzerVLM负责自主分析并提议候选模型，EvaluatorVLM进行评估。在多个数据科学任务中，该方法高效找到了泛化性强的模型，展示了大型模型在自动发现中的应用潜力。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1439, \"height\": 560, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 479, \"height\": 229, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 478, \"height\": 224, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 480, \"height\": 217, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1450, \"height\": 320, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 483, \"height\": 360, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 430, \"height\": 352, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1435, \"height\": 253, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 426, \"height\": 293, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1434, \"height\": 1903, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1089, \"height\": 1989, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1436, \"height\": 539, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 492, \"height\": 278, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 594, \"height\": 272, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 470, \"height\": 281, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-qgfvtims3w/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 512, \"height\": 286, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-qgfvtims3w/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 726, \"height\": 545, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-qgfvtims3w/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1451, \"height\": 299, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-qgfvtims3w/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 726, \"height\": 243, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-qgfvtims3w/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 675, \"height\": 135, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-qgfvtims3w/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 956, \"height\": 232, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-qgfvtims3w/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1447, \"height\": 216, \"label\": \"Table\"}]"
motivation: 现有自动模型发现难以兼顾细节捕捉与泛化能力。
method: 采用AnalyzerVLM和EvaluatorVLM两个视觉语言模块，协同进行模型提议与评估。
result: 在多个数据集上，该流程发现了比之前方法更优且更简洁的模型。
conclusion: 工作展示了大型视觉语言模型在自动化科学模型发现中的有效作用。
---

## Abstract
Automated model discovery is the process of automatically searching and identifying the most appropriate model for a given dataset over a large combinatorial search space. Existing approaches, however, often face challenges in balancing the capture of fine-grained details with ensuring generalizability beyond training data regimes with a reasonable model complexity. In this paper, we present a multi-modal \& multi-step pipeline for effective automated model discovery. Our approach leverages two vision-language-based modules (VLM), AnalyzerVLM and EvaluatorVLM, for effective model proposal and evaluation in an agentic way. AnalyzerVLM autonomously plans and executes multi-step analyses to propose effective candidate models. EvaluatorVLM assesses the candidate models both quantitatively and perceptually, regarding the fitness for local details and the generalibility for overall trends. Our results demonstrate that our pipeline effectively discovers models that capture fine details and ensure strong generalizability. Additionally, extensive ablation studies show that both multi-modality and multi-step reasoning play crucial roles in discovering favorable models.

---

## 论文详细总结（自动生成）

# 论文总结：《Automated Model Discovery via Multi-modal & Multi-step Pipeline》

## 1. 核心问题与整体含义（研究动机和背景）

- **问题**：自动模型发现旨在从庞大的组合搜索空间中自动找到最适合给定数据的模型结构。现有方法（如基于预定义语法的核搜索、传统贝叶斯信息准则等）往往难以同时兼顾**局部细节的精确捕获**和**全局趋势的泛化能力**，且模型复杂度难以平衡。
- **背景**：传统模型发现依赖人类专家，随着数据规模增长，手动方式愈发不可行。已有自动方法（如Automatic Statistician、BoxLM）虽能减少人工，但要么搜索空间受限，要么评估指标单一（仅依赖量化指标如BIC），缺乏人类专家那样的动态灵活性和视觉感知能力。

## 2. 方法论：核心思想、关键技术细节

- **核心思想**：利用**视觉语言模型（VLM）** 的推理、规划和评估能力，构建一个**多模态、多步骤的自动模型发现流水线**，替代人类专家在分析、提案和评估中的角色。
- **整体流程**（每轮迭代四步）：
  1. **模型提议**：AnalyzerVLM 通过多步推理（分析、代码执行、观测结果）自主分析数据和当前模型，提出候选模型结构及初始参数。
  2. **模型拟合**：基于边际似然优化（L-BFGS-B）确定最优参数，支持多初始点随机重启。
  3. **模型评估**：EvaluatorVLM 对模型进行**视觉评估**，结合**视觉信息准则（VIC）** 与BIC。
  4. **模型选择**：从模型池中按VIC排序，选择最佳模型进入下一轮。
- **关键模块**：
  - **AnalyzerVLM**：可执行三种动作——自然语言分析（`Analyze`）、生成并执行代码（`Execute`，输出包括数值和可视化图）、提议新模型（`Propose`）。通过迭代直到获得足够信息，然后生成候选模型。
  - **EvaluatorVLM**：从两个维度评分：
    - **视觉拟合度**：对比数据图与模型预测均值图的相似性，以及置信区间大小。
    - **视觉泛化性**：评估预测结构在外推区域是否保持一致性（是否突然变平或置信区间剧增）。
  - **VIC 公式**：VIC(M, D) = α · EvaluatorVLM(M, θ*, D) - BIC。其中α为平衡超参数，使视觉评分贡献约10-30%。
- **算法流程**：Algorithm 1 和 Algorithm 2 详细描述了多轮迭代和 AnalyzerVLM 的决策过程。

## 3. 实验设计

- **数据集**：
  - 主要实验：7个真实世界单变量时间序列数据集：Airline Passenger, Solar Irradiance, Mauna Loa, Wheat, Call-Center, Radio, Gas Production（来自 Lloyd et al. 2014）。
  - 符号回归实验：4个合成/标准函数集：R, Constant, Keijzer, Nguyen。
- **对比方法**：
  - 核发现任务：GP with SE kernel, ARIMA, Facebook Prophet, Automatic Statistician, BoxLM。
  - 符号回归任务：SGA, ICSR-V, LLM-SR。
- **评测指标**：RMSE（训练集和测试集），R²（符号回归）。训练/测试划分按数据时序分割（如20%外推区域）。
- **实验规模**：
  - 核发现：每轮5轮迭代，10次随机重启，使用L-BFGS-B优化，每次选top-3模型。
  - 符号回归：20轮迭代，5次随机重启。
  - 消融实验：对比有无AnalyzerVLM、有无EvaluatorVLM、单步vs多步、文本vs视觉、不同α值、不同VLM基模型（GPT-4o, GPT-4o-mini, Qwen2.5-VL）。
  - 人类评估：邀请人类评估者按相同标准对模型评分，与VLM评分进行相关性比较（Spearman's ρ）。

## 4. 资源与算力

- 论文明确提到：实验在**CPU（16核）** 上进行，并说明**“可能耗时数小时”**。具体GPU型号、训练时长没有详细说明，也未涉及大规模分布式训练。对于依赖VLM API（GPT-4o等）的部分，使用了闭源商业模型，未报告API调用成本或延迟。总体而言，算力需求属于中等水平，但未提供精确量化数据。

## 5. 实验数量与充分性

- **实验数量**：覆盖7个核发现数据集 + 4个符号回归数据集，总共**11个数据集**。核发现任务中与5种方法对比，符号回归中与3种方法对比。消融实验包括：模块消融（4种设置）、模态消融（视觉vs文本）、步骤消融（多步vs单步）、参数α网格搜索（5个值）、不同VLM基模型（3种）、人类相关性分析（2个维度）。
- **充分性与公平性**：
  - 实验设计比较全面，覆盖了主要变体。对标方法使用相同评估设置（如BoxLM也使用GPT-4o-mini）。
  - 消融实验有力地证明了多模态和多步骤的关键作用。
  - 人类评估验证了VLM评估结果与人类判断的一致性，增强了生态效度。
  - 但数据集均为单变量1D序列，未测试多变量或更复杂数据，可能存在选择偏差。对比方法中未包含近年流行的深度时间序列模型（如Transformer-based），可能不够全面。

## 6. 主要结论与发现

- 提出的多模态多步骤流水线在**所有7个核发现数据集上平均测试RMSE最低**，显著优于Automatic Statistician、BoxLM等基线。
- AnalyzerVLM和EvaluatorVLM各自贡献显著：仅使用BIC而不用VIC时，测试RMSE上升，说明VIC有效避免了过拟合并提升了泛化性。
- 多步分析比单步分析更有效（MSE降低明显），视觉模态比纯文本模态更好（图3、图4、图5）。
- AnalyzerVLM提议的初始参数初始化比随机初始化显著提升优化质量（图10）。
- VIC与边际似然、泛化差距高度相关（Spearman's ρ在0.58~0.84），且与人类评估一致（ρ≈0.78~0.80）。
- 符号回归任务中，方法在合成数据集上取得竞争结果，且在真实世界数据上通过混合框架（SR+GP）进一步提升了性能。

## 7. 优点

- **创新性**：首次将VLM作为自主分析和评估代理引入自动模型发现，取代传统静态搜索流程。
- **方法完整性**：设计了完整的流水线（提议-拟合-评估-选择），每个组件都有明确支撑。
- **多模态与多步骤结合**：通过视觉化数据与模型，克服了纯文本的数字序列局限，使模型能“看”到整体趋势和局部细节。
- **评估指标新颖**：VIC融合人类视觉感知和传统统计指标，更贴近实际科学发现需求。
- **实验论证充分**：大量消融实验和人类验证，证明了各模块的必要性和有效性。
- **通用性**：代码开源，可部署于不同VLM模型（包括开源），具有较好的可迁移性。

## 8. 不足与局限

- **数据局限性**：仅测试了1D单变量时间序列和简单函数合成数据，未涉及**多变量数据**或**图像/文本等高维数据**，限制了方法的适用范围。
- **输入可视化依赖**：VLM的性能可能受可视化图的质量影响（如分辨率、颜色、坐标轴范围），论文未对此进行系统分析。
- **计算效率**：每轮需要调用VLM API进行多步推理和代码执行，时间成本较高，且论文未详细报告总运行时长或API费用。
- **对比方法不够全面**：未与最先进的深度时间序列模型（如TimesNet, PatchTST等）或更现代的自动模型发现方法（如基于贝叶斯优化的结构搜索）进行比较。
- **超参数敏感性**：α的设定虽有不敏感区间，但仍需网格搜索，未给出自动调节建议。
- **可解释性**：VLM的决策过程（如“为什么选这个模型”）仍缺乏清晰解释，黑箱特性可能影响科学发现的信任度。

（完）
