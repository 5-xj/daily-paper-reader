---
title: "FEAT-KD: Learning Concise Representations for Single and Multi-Target Regression via TabNet Knowledge Distillation"
title_zh: FEAT-KD：通过TabNet知识蒸馏学习单目标和多目标回归的简洁表示
authors: "Kei Sen Fong, Mehul Motani"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=ApVH0G4l6P"
tags: ["query:sr"]
score: 9.0
evidence: FEAT中使用遗传编程发现特征
tldr: 该论文提出FEAT-KD方法，将基于遗传编程的符号特征发现算法FEAT与TabNet深度学习结合，通过知识蒸馏获得简洁的可解释特征。FEAT本身通过遗传编程优化符号表达式，直接对应遗传编程符号回归需求。实验证明FEAT-KD在回归任务上有效平衡可解释性与性能。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-apvh0g4l6p/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1263, \"height\": 1405, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-apvh0g4l6p/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1540, \"height\": 429, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apvh0g4l6p/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 864, \"height\": 232, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apvh0g4l6p/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 767, \"height\": 159, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apvh0g4l6p/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 358, \"height\": 249, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apvh0g4l6p/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 407, \"height\": 292, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apvh0g4l6p/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 500, \"height\": 245, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apvh0g4l6p/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1566, \"height\": 782, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apvh0g4l6p/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 843, \"height\": 762, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apvh0g4l6p/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1682, \"height\": 816, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apvh0g4l6p/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 831, \"height\": 491, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apvh0g4l6p/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 813, \"height\": 1956, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apvh0g4l6p/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 724, \"height\": 460, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apvh0g4l6p/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1769, \"height\": 576, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apvh0g4l6p/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1769, \"height\": 568, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-apvh0g4l6p/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 858, \"height\": 676, \"label\": \"Table\"}]"
motivation: FEAT的遗传编程优化效率低，且难以利用深度学习表示能力。
method: FEAT-KD通过知识蒸馏从TabNet中蒸馏符号特征，保持可解释性。
result: 在回归任务上FEAT-KD获得简洁可解释特征，性能优于原FEAT。
conclusion: 将遗传编程符号回归与深度学习结合，提升效率和可解释性。
---

## Abstract
In this work, we propose a novel approach that combines the strengths of FEAT and TabNet through knowledge distillation (KD), which we term FEAT-KD. FEAT is an intrinsically interpretable machine learning (ML) algorithm that constructs a weighted linear combination of concisely-represented features discovered via genetic programming optimization, which can often be inefficient. FEAT-KD leverages TabNet's deep-learning-based optimization and feature selection mechanisms instead. FEAT-KD finds a weighted linear combination of concisely-represented, symbolic features that are derived from piece-wise distillation of a trained TabNet model. We analyze FEAT-KD on regression tasks from two perspectives: 
(i) compared to TabNet, FEAT-KD significantly reduces model complexity while retaining competitive predictive performance, effectively converting a black-box deep learning model into a more interpretable white-box representation, (ii) compared to FEAT, our method consistently outperforms in prediction accuracy, produces more compact models, and reduces the complexity of learned symbolic expressions. In addition, we demonstrate that FEAT-KD easily supports multi-target regression, in which the shared features contribute to the interpretability of the system. Our results suggest that FEAT-KD is a promising direction for interpretable ML, bridging the gap between deep learning's predictive power and the intrinsic transparency of symbolic models.

---

## 论文详细总结（自动生成）

# 论文总结：FEAT-KD: Learning Concise Representations for Single and Multi-Target Regression via TabNet Knowledge Distillation

## 1. 核心问题与整体含义（研究动机和背景）
- **动机**：可解释机器学习中，FEAT（Feature Engineering Automation Tool）通过遗传编程（GP）发现简洁符号特征，构建加权线性组合，具有内在可解释性；但遗传编程优化效率低，难以利用深度学习的表示能力。相反，TabNet作为深度学习模型在表格数据上预测性能优异，但属于黑盒模型，缺乏内在可解释性。
- **整体目标**：结合两者优势，提出FEAT-KD，通过知识蒸馏将TabNet的深度学习能力转化为FEAT风格的简洁、可解释符号模型，在保持竞争性预测性能的同时大幅降低模型复杂度，并支持单目标和多目标回归。

## 2. 方法论：核心思想、关键技术细节
- **核心思想**：对已训练的TabNet模型进行逐片（piece-wise）知识蒸馏，将每个决策步骤（Step）中的变换特征（transformed features）通过非遗传编程的穷举搜索符号回归（DistilSR）转化为简洁符号表达式，最后通过线性回归组合所有符号特征得到最终模型。
- **5个主要阶段**：
  1. **训练TabNet**：在数据集上训练回归TabNet模型。
  2. **提取变换特征**：从TabNet的每个Step的ReLU单元中提取 \(N_d \times N_{\text{steps}}\) 个变换特征（每个Step输出 \(N_d\) 维）。
  3. **掩码特征选择**：对每个Step，从TabNet的稀疏掩码中选出最显著的3个原始特征（即平均掩码值最小的3个特征），只保留这些特征用于后续蒸馏。
  4. **知识蒸馏（符号回归）**：对每个变换特征，使用DistilSR（穷举搜索）在仅包含所选原始特征的子空间中搜索长度≤5的符号表达式（原语集：`+`, `-`, `*`, `/`, `exponent`，不含复杂函数），优化目标为仿射不变均方误差（AFI-MSE），以允许后续线性回归中的尺度和平移调整。
  5. **线性回归拟合**：将所有蒸馏得到的符号特征作为输入，对目标变量进行普通线性回归，得到最终模型 \(\hat{y}(x) = \phi(x)^T \hat{\beta}\)。

## 3. 实验设计
- **单目标回归数据集**：
  - 来自TabNet原文：6个合成数据集（Syn1-6）和Rossmann商店销售数据。
  - 来自FEAT原文：8个PMLB数据集（bodyfat, cpu_act_197, cpu_act_573, cpu_small, house_8L, houses, pm10, puma8NH）。
- **多目标回归数据集**：
  - 来自TabNet原文：SARCOS（7个目标）。
  - 来自多目标回归基准：atp1d（6个目标）、enb（2个目标）、oes10（8个目标）、rf1（16个目标）、scm1d（16个目标）。
- **基准方法**：FEAT、FEAT-Corr、FEAT-CN、TabNet。此外，在SRBench的88个PMLB数据集上与15种符号回归算法（如DSR、GP-GOMEA、Operon、gplearn等）进行比较。还有分类扩展（cFEAT-KD）和InterpreTabNet变体的对比。
- **评估指标**：R²分数、模型大小（符号总数），并使用Wilcoxon符号秩检验（Bonferroni校正）进行统计显著性检验。
- **实验设置**：每个数据集100次随机60-20-20训练-验证-测试分割，结果报告均值和标准差。

## 4. 资源与算力
- **硬件**：Intel Xeon CPU E5-2627 v4 @ 2.30GHz，128GB RAM。未明确提及使用GPU。
- **运行时间限制**：每个随机种子实验的最大壁钟时间为3600秒（1小时）。
- **软件**：使用开源的DistilSR、FEAT、TabNet等库，具体版本未详述。

## 5. 实验数量与充分性
- **实验量**：非常充分。
  - 单目标回归：15个数据集×100次随机分割 = 1500次实验（每个方法）。
  - 多目标回归：6个数据集（共54个目标）×100次随机分割 = 5400次实验。
  - SRBench：88个数据集×10个随机种子 = 880次实验。
  - 分类扩展：11个数据集×100次随机分割 = 1100次实验。
  - 消融实验：替换DistilSR为其他SR算法（5种）、替换TabNet为InterpreTabNet等。
- **充分性与客观性**：
  - 使用多样化的真实和合成数据集，覆盖不同规模、维度、噪声水平。
  - 严格统计检验（Wilcoxon + Bonferroni校正），有效避免多重比较问题。
  - 与多种基线方法（包括原始FEAT所有变体、TabNet、SRBench中的主流算法）对比。
  - 结果报告均值、标准差和p值，提供了公平比较的基础。

## 6. 主要结论与发现
- **优于FEAT系列**：FEAT-KD在预测性能（R²）上一致优于FEAT、FEAT-Corr、FEAT-CN，38/45个比较统计显著（p<0.05），模型尺寸更小（40/45显著），且使用更简单的原语集。
- **逼近TabNet**：在单目标回归中，FEAT-KD预测性能接近TabNet（TabNet略优），但模型尺寸从数千符号降至约49符号，实现了从黑盒到白盒的转换。
- **多目标回归优势**：FEAT-KD天然支持多目标回归，共享符号特征，在54个目标中32个优于TabNet，反映了其正则化效果（TabNet容易过拟合）。
- **Pareto最优**：在SRBench的88个数据集上，FEAT-KD在62%的场景中是Pareto最优（平衡R²与模型大小），远高于FEAT的23%，且优于除DSR、GP-GOMEA外的所有SR算法。
- **可扩展性**：可扩展到分类任务（通过逻辑回归替换线性回归），性能优于cFEAT变体。

## 7. 优点
- **方法创新性**：首次将TabNet的深度表示能力与知识蒸馏、穷举符号搜索结合，避免遗传编程的低效，为可解释ML提供了新范式。
- **强可解释性**：输出为加权线性组合的简洁符号表达式（长度≤5），符合人类认知极限，且支持多目标共享特征，提升系统透明性。
- **实验严谨性**：大规模多数据集实验，统计检验完善，消融实验充分（替换蒸馏算法、教师模型变体）。
- **实际应用价值**：在保持接近顶尖深度学习性能的同时，模型尺寸降低两个数量级，适用于医疗等对可解释性要求高的领域。

## 8. 不足与局限
- **预测性能差距**：在单目标回归中，FEAT-KD平均R²仍低于TabNet约1-5个百分点，存在性能-可解释性权衡。
- **依赖TabNet预处理**：蒸馏质量受限于TabNet训练结果（如过拟合、掩码选择），若TabNet表现差则FEAT-KD也会受限。
- **超参数敏感性**：需手动选择 \(N_d\) 和 \(N_{\text{steps}}\)（文中通过小规模预实验确定），对未见数据集可能需额外调参。
- **计算开销**：虽然比遗传编程快，但TabNet训练和DistilSR穷举搜索仍有一定时间成本（每种子最多1小时），未测试大规模高维数据。
- **原语集限制**：仅使用基本算术和指数运算，可能无法捕捉复杂非线性关系（如三角函数、对数），若需要则需扩展原语集但会降低可解释性。
- **未讨论模型鲁棒性**：如对抗样本、分布偏移下的稳定性未被评估。
- **可复现性**：代码和超参数细节虽在附录提及，但未提供官方开源仓库链接（截至论文发表时）。

（完）
