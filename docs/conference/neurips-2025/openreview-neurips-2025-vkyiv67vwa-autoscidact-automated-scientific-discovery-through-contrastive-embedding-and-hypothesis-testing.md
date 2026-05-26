---
title: "AutoSciDACT: Automated Scientific Discovery through Contrastive Embedding and Hypothesis Testing"
title_zh: AutoSciDACT：基于对比嵌入与假设检验的自动化科学发现
authors: "Samuel Bright-Thonney, Christina Reissel, Gaia Grosso, Nathaniel S. Woodward, Katya Govorkova, Andrzej Novak, Sang Eon Park, Eric A. Moreno, Philip Harris"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=vKyiv67VWa"
tags: ["query:ad"]
score: 7.0
evidence: 自动化科学发现流程
tldr: 该论文提出AutoSciDACT，一个自动化科学发现流程，用于在高维噪声数据中检测新颖性。结合对比嵌入和统计假设检验，输出的异常点具有统计学上的可信度。在多个科学数据集上验证了有效性，为自动发现未知现象提供了稳健框架。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-vkyiv67vwa/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1451, \"height\": 737, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vkyiv67vwa/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1421, \"height\": 689, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vkyiv67vwa/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1408, \"height\": 1066, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vkyiv67vwa/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1421, \"height\": 711, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vkyiv67vwa/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1417, \"height\": 521, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vkyiv67vwa/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1317, \"height\": 447, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vkyiv67vwa/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1320, \"height\": 306, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vkyiv67vwa/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1425, \"height\": 665, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vkyiv67vwa/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1405, \"height\": 1061, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vkyiv67vwa/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1408, \"height\": 1053, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vkyiv67vwa/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1428, \"height\": 1534, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vkyiv67vwa/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1378, \"height\": 526, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vkyiv67vwa/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 710, \"height\": 716, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vkyiv67vwa/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1410, \"height\": 1050, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vkyiv67vwa/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1387, \"height\": 1148, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vkyiv67vwa/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1398, \"height\": 1548, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-vkyiv67vwa/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 872, \"height\": 334, \"label\": \"Table\"}]"
motivation: 现有异常检测方法缺乏统计严谨性，无法支持科学发现声明。
method: 构建对比嵌入空间，结合假设检验量化异常显著性。
result: 在多个科学数据集上实现了高精确率且统计可靠的异常发现。
conclusion: 为自动化科学发现提供了兼顾准确性与统计保证的框架。
---

## Abstract
Novelty detection in large scientific datasets faces two key challenges: the noisy and high-dimensional nature of experimental data,
and the necessity of making *statistically robust* statements about any observed outliers. While there is a wealth of literature on anomaly detection via dimensionality reduction, most methods do not produce outputs compatible with quantifiable claims of scientific discovery. In this work we directly address these challenges, presenting the first step towards a unified pipeline for novelty detection adapted for the rigorous statistical demands of science. We introduce AutoSciDACT (Automated Scientific Discovery with Anomalous Contrastive Testing), a general-purpose pipeline for detecting novelty in scientific data. AutoSciDACT begins by creating expressive low-dimensional data representations using a contrastive pre-training, leveraging the abundance of high-quality simulated data in many scientific domains alongside expertise that can guide principled data augmentation strategies. These compact embeddings then enable an extremely sensitive machine learning-based two-sample test using the New Physics Learning Machine (NPLM) framework, which identifies and statistically quantifies deviations in observed data relative to a reference distribution (null hypothesis). We perform experiments across a range of astronomical, physical, biological, image, and synthetic datasets, demonstrating strong sensitivity to small injections of anomalous data across all domains.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **核心问题**：大型科学数据集中的新颖性检测面临两大挑战：一是实验数据的高维性和噪声；二是需要做出**统计上稳健**的声明来支撑科学发现。现有异常检测方法（如基于降维的）大多不能输出与科学发现可量化的统计声明兼容的结果。
- **动机**：现代科学数据集规模庞大，传统特征工程依赖人工且领域特定，缺乏自动化和可扩展性。自动化工具需要既能智能地优先选择信息丰富的区域，又能进行严格的假设检验。
- **整体含义**：论文提出了第一个端到端科学新颖性发现管道，将对比嵌入与假设检验结合，旨在为不同科学领域提供通用、统计严谨的自动化发现框架。

## 2. 方法论：核心思想、关键技术细节
- **核心思想**：将数据降维（对比学习）与统计假设检验（NPLM）串联，实现“数据约简→假设制定→统计检验”的自动化流程，模拟科学方法步骤。
- **两阶段流程**：
  1. **预训练阶段**：使用**监督对比学习（SupCon）** 训练编码器 $f_\theta$，将高维输入映射到低维嵌入空间（固定为4维）。损失函数为：
     $$L = L_{\text{SupCon}} + \lambda_{\text{CE}} L_{\text{CE}}$$
     其中 $L_{\text{SupCon}}$ 为监督对比损失，$L_{\text{CE}}$ 为交叉熵损失，$\lambda_{\text{CE}} \sim 0.1\text{-}0.5$ 使分类目标次主导。利用高质量模拟数据或专家标注标签定义正负对，可选数据增强注入领域知识。
  2. **发现阶段**：使用**新物理学习机（NPLM）** 进行两样本假设检验。NPLM通过核方法（Nyström近似高斯核）学习一个可训练函数 $f_w(x)$ 来参数化备择假设与零假设的密度比。训练通过加权二元交叉熵最小化，最终计算检验统计量 $t_{\text{NP}}$，并通过伪实验（玩具）校准p值和Z-score。采用六种不同核宽度并取平均p值以增加鲁棒性。
- **关键技术细节**：
  - 嵌入维度固定为4，确保NPLM统计可处理。
  - 核宽度根据嵌入空间成对距离的百分位数自动选择。
  - 参考样本 $R$ 远大于观测样本 $D$，并支持对形状和归一化偏差都敏感。

## 3. 实验设计：数据集、基准、对比方法
- **数据集**（5个主要+2个附录）：
  1. **合成数据**：高斯混合簇+噪声维度，验证降维必要性。
  2. **天文学（LIGO）**：引力波时间序列，保留白噪声暴发（WNB）作为异常。
  3. **粒子物理（JetClass）**：喷注数据，保留希格斯玻色子衰变（$H\to b\bar{b}$）为异常。
  4. **组织学（Histology）**：小鼠组织切片图像，非酒精性脂肪肝（NAFLD）为异常。
  5. **图像（CIFAR-10）**：保留类别1（汽车）为异常，补充CIFAR-5m。
  6. 附录：基因组学（蝴蝶杂交图像）和真实LHC希格斯玻色子搜索（CMS开放数据）。
- **基准方法**：
  - **全监督基线**：在嵌入空间用MLP分类器（分“监督”和“理想监督”两级，后者训练时已见异常）。
  - **马氏距离基线**：基于各背景类均值和协方差的马氏距离作为异常分数。
  - **MMD和Fréchet距离**（附录中补充）。
- **评估指标**：**统计显著性Z-score**（基于p值转换），每组实验通过500次伪实验校准。

## 4. 资源与算力
- 论文在附录A中说明：所有实验在学术集群上运行。
  - **对比预训练**：单张NVIDIA A100 GPU，每个训练任务数小时。
  - **NPLM测试**：使用GPU加速的Falkon包，单张GPU运行100个玩具约10-20分钟（典型设置 $|R|=10000, |D|=2000$）。
  - 马氏距离等其他基线在CPU上运行，无显著计算瓶颈。

## 5. 实验数量与充分性
- **实验数量**：
  - 在每个数据集上扫描多种注入分数（从0.5%到20%），每个点进行500次伪实验。
  - 额外进行了嵌入维度消融（d=4,8,16,32）、标签噪声消融（1%-10%）、不同NPLM核宽度比较。
  - 附录中包括基因组学和LHC真实数据实验。
- **充分性与公平性**：
  - 对比了多种基线，包括理论上限的“理想监督”，确保评估客观。
  - 使用统计显著性而非原始异常分数，结果具有统计意义。
  - 但部分数据集（组织学、基因组学）样本量较小，统计稳定性略逊；且未严格考虑系统不确定性和域迁移，可能导致实验偏差。

## 6. 主要结论与发现
- AutoSciDACT能在低至**1%信号注入率**下达到**3σ以上**的统计显著性，在多个领域均有效。
- 对比学习降维成功保留了异常信息，使NPLM能够检测到与背景重叠的异常（如LIGO中的过密度），传统方法难以识别。
- NPLM在大多数情况下优于马氏距离、MMD和Fréchet距离，接近甚至达到理想监督基线。
- 嵌入维度低至4维已足够；更高维度（d=32）性能稳定，但未显著提升。
- 标签噪声会降低敏感性，但10%噪声时仍能检测。
- 在真实LHC数据中，AutoSciDACT无需指定信号即可将最异常事件聚集在希格斯质量附近，展示了发现未知现象的能力。

## 7. 优点
- **端到端通用性**：同一管道适用于天文学、粒子物理、生物学、图像等不同领域，只需更换编码器架构。
- **统计严谨性**：输出p值和Z-score，可与科学发现标准（如3σ、5σ）对接，超越简单二分类。
- **有效利用领域知识**：通过监督对比学习利用模拟数据和标签，以及通过数据增强注入物理不变性。
- **对异常类型鲁棒**：能检测过密度、形状畸变、尾部异常等多种分布偏移，而非仅离群点。
- **自动核选择**：基于嵌入空间距离分布自适应选择核宽度，减少调参。

## 8. 不足与局限
- **依赖高质量标签**：监督对比学习需要大量正确标注的训练数据，手工标注成本高。
- **嵌入维度限制**：固定为4维可能限制表达力，尤其是类别多时（如LIGO含9类），导致“理想监督”反而不如标准监督（图3e）。
- **未处理域迁移**：假设参考分布准确代表背景，实际中模拟与数据可能存在差异，增加假阳性风险。
- **小样本场景表现**：在组织学等数据量少的实验中，NPLM不如马氏距离；统计能力受样本大小制约。
- **计算成本**：NPLM需要大量伪实验校准p值，高显著性时所需玩具数量极大（依赖渐近近似）。
- **未集成系统不确定性**：未考虑源于模拟不完备或探测器效应等系统误差。

（完）
