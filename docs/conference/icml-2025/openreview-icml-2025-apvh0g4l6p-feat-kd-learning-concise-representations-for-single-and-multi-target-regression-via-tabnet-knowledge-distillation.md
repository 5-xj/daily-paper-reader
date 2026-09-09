---
title: "FEAT-KD: Learning Concise Representations for Single and Multi-Target Regression via TabNet Knowledge Distillation"
title_zh: FEAT-KD：通过TabNet知识蒸馏学习单目标及多目标回归的简洁表示
authors: "Kei Sen Fong, Mehul Motani"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=ApVH0G4l6P"
tags: ["query:sr"]
score: 4.0
evidence: 使用遗传规划构建符号特征用于回归问题，与遗传编程符号回归有一定关联。
tldr: FEAT-KD针对基于遗传编程的特征工程方法FEAT效率低的问题，引入TabNet知识蒸馏，通过对训练后的TabNet进行分段蒸馏，学习一组简洁的符号特征的加权线性组合。该方法兼顾了TabNet的深度特征选择能力和符号特征的强可解释性。在单目标和多目标回归任务上的分析表明，FEAT-KD能够以较低复杂度获得可解释且性能良好的回归表示，为可解释回归与符号特征发现提供了新思路。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: FEAT利用遗传编程优化符号特征但效率低，希望兼顾可解释性与回归性能。
method: 结合TabNet的知识蒸馏，对训练好的TabNet分段蒸馏，学习简洁符号特征的加权线性组合。
result: 在回归任务中验证了该方法能在保持可解释性的同时高效产生简洁的回归表示。
conclusion: 为基于遗传编程的符号特征回归与知识蒸馏的结合提供了可行范例。
---

## Abstract
In this work, we propose a novel approach that combines the strengths of FEAT and TabNet through knowledge distillation (KD), which we term FEAT-KD. FEAT is an intrinsically interpretable machine learning (ML) algorithm that constructs a weighted linear combination of concisely-represented features discovered via genetic programming optimization, which can often be inefficient. FEAT-KD leverages TabNet's deep-learning-based optimization and feature selection mechanisms instead. FEAT-KD finds a weighted linear combination of concisely-represented, symbolic features that are derived from piece-wise distillation of a trained TabNet model. We analyze FEAT-KD on regression tasks from two perspectives: 
(i) compared to TabNet, FEAT-KD significantly reduces model complexity while retaining competitive predictive performance, effectively converting a black-box deep learning model into a more interpretable white-box representation, (ii) compared to FEAT, our method consistently outperforms in prediction accuracy, produces more compact models, and reduces the complexity of learned symbolic expressions. In addition, we demonstrate that FEAT-KD easily supports multi-target regression, in which the shared features contribute to the interpretability of the system. Our results suggest that FEAT-KD is a promising direction for interpretable ML, bridging the gap between deep learning's predictive power and the intrinsic transparency of symbolic models.

---

## 论文详细总结（自动生成）

# 论文详细中文总结：FEAT-KD

> 说明：以下总结基于所提供的论文提取文本与元数据生成。原文仅包含摘要和元数据字段，未提供完整正文，因此部分细节（如具体数据集名称、超参数、算力配置等）无法核实，已在相应位置注明，建议结合原文完整阅读。

## 1. 论文的核心问题与整体含义

- **背景与动机**：可解释机器学习（Interpretable ML）是 AI 落地应用中的重要议题。论文关注的是如何在回归任务中获得“既准确又可解释”的模型。
  - **FEAT** 是一种内在可解释的方法，它通过遗传编程（Genetic Programming）搜索一组简洁的符号特征，并构建其加权线性组合。虽然可解释性好，但遗传编程的优化过程往往较为低效。
  - **TabNet** 是基于深度学习的表格数据模型，预测性能强且具备特征选择机制，但其本质仍是黑箱模型，较难解释。
- **核心问题**：能否结合 FEAT 的可解释性与 TabNet 的深度特征学习能力，在提升回归性能的同时降低模型复杂度，获得可解释、简洁的回归表示？
- **整体含义**：本文提出 **FEAT-KD**，通过知识蒸馏将训练好的 TabNet 模型转化为一组简洁符号特征的加权线性组合，使黑箱深度模型转换为可解释的白箱表示，为“深度学习预测能力”与“符号模型透明性”之间的鸿沟提供了一座桥梁。

## 2. 论文提出的方法论

- **核心思想**：
  - 不直接使用低效的遗传编程来搜索符号特征，而是利用训练好的 TabNet 模型来指导特征构建。
  - 从 TabNet 中“分段蒸馏”（piece-wise distillation）出若干简洁的符号特征，然后用这些特征的加权线性组合来逼近/替代原模型。
- **关键技术细节**：
  - 该方法属于一种 **通用特征构建方法**，可以应用于回归任务，包括**单目标回归**与**多目标回归**。
  - 特征具有**符号表示形式**，因此最终模型具有很强的可解释性。
  - 与 FEAT 的“遗传编程 + 随机搜索”不同，FEAT-KD 的优化过程借助 TabNet 的深度特征选择机制，从而更加高效稳定。
  - 对于多目标回归，方法支持学习/共享一组相同特征，这一特性有助于提升整个可解释系统的紧凑性和一致性。
- **算法流程（文字描述）**：
  1. 在目标回归任务上训练一个 TabNet 模型；
  2. 将训练好的 TabNet 视为“教师模型”；
  3. 对教师模型进行分段式蒸馏，逐段提取知识，用于指导符号特征的生成或选择；
  4. 生成一组简洁的符号特征；
  5. 学得这些符号特征的加权线性组合，作为最终可解释模型；
  6. 在单目标场景得到单个输出回归模型，在多目标场景共享特征组合并解释多个目标。
- **公式层面**：摘要未给出具体公式，总体形态可理解为：
  - 最终模型 ≈ 若干简洁符号特征 \(f_1(x), f_2(x), \dots, f_k(x)\) 的加权线性组合 \(y = w_0 + \sum_i w_i f_i(x)\)；
  - 其中符号特征的发现不是通过遗传编程，而是通过对 TabNet 的分段蒸馏完成。

## 3. 实验设计

- **任务类型**：回归任务，包括**单目标回归**与**多目标回归**两种场景。
- **Benchmark / 对比方法**：
  - **与父代方法 FEAT 对比**：
    - FEAT-KD 的预测精度更好；
    - 生成的模型更紧凑；
    - 学习到的符号表达式复杂度更低。
  - **与 TabNet（黑箱深度模型）对比**：
    - FEAT-KD 在显著降低模型复杂度的同时保持了有竞争力的预测性能；
    - 把原本不可解释的深度模型转成白箱表示。
- **受限说明**：由于提供的材料中不包含完整正文，摘要未列出更具体的实验数据集名称与数量。从摘要措辞“We analyze … on regression tasks”可看出实验涵盖了多组对比，但**精确的数据集清单、统计显著性检验、消融实验设置以及基线方法的超参数细节在现有材料中无法核实**。

## 4. 资源与算力

- **原文提供的信息**：在所给的论文提取文本和元数据中，**未明确提及**具体算力配置，如 GPU 型号、GPU 数量、训练耗时、能耗等；
- **待核实**：如需了解 TabNet 训练与蒸馏过程的资源开销，建议查阅原文实验部分。

## 5. 实验数量与充分性

- **从摘要看**，论文至少包含三类实验线索：
  1. FEAT-KD 与 TabNet 的对比（验证“白箱化”代价是否可接受）；
  2. FEAT-KD 与 FEAT 的对比（验证精度和复杂度是否有优势）；
  3. 多目标回归场景的分析（验证共享特征的扩展能力）。
- **充分性评价**：
  - 摘要中同时给出了“以 FEAT 和 TabNet 两条线作为参照”的对比框架，这对于说明方法的相对优劣势是有利的。
  - 但若缺少消融分析（如蒸馏分段数的影响、特征数量对精度和可解释性的权衡）、数据集多样性分析以及仅凭摘要总结的证据，则难以全面判断实验的完备性、统计可靠性与公平性；
  - 能否复现的关键因素（教师模型设置、蒸馏具体损失函数等）属于论文细节，元数据中并没有给出，这一点在评估实验充分性时需要注意。

## 6. 论文的主要结论与发现

- **相比 TabNet**：FEAT-KD 可以大幅降低模型复杂度，同时保持与 TabNet 相近的竞争性预测表现，即验证了“可解释代理模型”的有效性；可以把黑箱深度模型转化为更透明的白箱表示。
- **相比 FEAT**：FEAT-KD 的精度更高，生成的模型更紧凑，学习到的符号表达式更简单，避免了遗传编程的低效性。
- **多目标回归**：FEAT-KD 易于扩展至多目标预测场景，并借助“共享特征”增进系统整体可解释性。
- **总体评价**：作者认为 FEAT-KD 是可解释机器学习领域一个有潜力的方向，在**深度学习预测能力**和**符号模型内在透明度**之间实现了有效折中。

## 7. 优点

- **方法层面**：
  - 巧妙地使用 TabNet 的深度特征选择能力替代遗传编程的盲目搜索，缓解了符号特征学习效率低下的瓶颈；
  - 最终输出的模型是“简洁符号特征的加权线性组合”，保持了白箱属性；
  - 提出“分段蒸馏”的方式，让教师模型（TabNet）在构建符号特征时更加可控。
- **实验与贡献层面**：
  - 同时对标了可解释方法（FEAT）和深度学习方法（TabNet），立足点较清晰；
  - 考虑单目标回归与多目标回归两个场景，覆盖面较好；
  - 引入“共享特征”的思路并在多目标场景中体现，凸显符号系统相比黑箱模型在可解释性上特有的结构性优势。
- **方向意义**：论文尝试建立知识蒸馏与符号回归/特征构建之间的桥梁，具有交叉创新的特点。

## 8. 不足与局限

- **材料有限带来的局限**：
  - 现有材料只包含摘要和元数据；对具体数据集的规模与类型，以及任务中的特征维度、样本数量等信息无从得知；
  - 缺少消融实验信息（例如不同特征数量、蒸馏分段策略、教师模型复杂度等变量如何影响结果）；
  - 缺少对符号表达式复杂性与实际泛化误差之间权衡的量化结果。
- **方法本身可能存在的问题**：
  - 虽然避免了遗传编程，但 TabNet 的训练依然需要标签以及算力资源，教师模型训练好坏会影响蒸馏效果；
  - 符号特征的表达能力有限，面对非常复杂的回归曲面时，性能损失可能明显；
  - “分段蒸馏”这一过程本身超参数较多，其稳定性和收敛性需要更多实验证据；
  - 只讨论了回归问题，对分类、生存分析等其它任务的支持情况尚未说明；
  - 论文中的方法可能仍然需要较多重训练与选择过程，实际生产环境下的效率、可扩展性等仍需进一步观察。

（完）
