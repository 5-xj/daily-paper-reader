---
title: "Towards scientific discovery with dictionary learning: Extracting biological concepts from microscopy foundation models"
title_zh: 利用字典学习迈向科学发现：从显微镜基础模型提取生物概念
authors: "Konstantin Donhauser, Kristina Ulicna, Gemma Elyse Moran, Aditya Ravuri, Kian Kenyon-Dean, Cian Eastwood, Jason Hartford"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=fBn6om49Ur"
tags: ["query:ad"]
score: 4.0
evidence: 使用大语言模型和字典学习进行科学发现
tldr: 该论文将稀疏字典学习应用于显微镜基础模型，提取生物相关概念。结合PCA白化和迭代码本特征学习（ICFL），从视觉模型中获取可解释表征。方法涉及大语言模型和科学发现，但主要面向概念提取而非公式发现。对自动发现算法主题有一定参考价值。
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1761, \"height\": 568, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1768, \"height\": 435, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 864, \"height\": 240, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1767, \"height\": 292, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 851, \"height\": 550, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 852, \"height\": 503, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1687, \"height\": 598, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1776, \"height\": 249, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1609, \"height\": 428, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1747, \"height\": 1740, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1778, \"height\": 1879, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1753, \"height\": 1011, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1753, \"height\": 1010, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1754, \"height\": 1013, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1747, \"height\": 1004, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1754, \"height\": 1016, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1733, \"height\": 1467, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1728, \"height\": 1117, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-fbn6om49ur/fig-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 1673, \"height\": 1163, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-icml-2025-fbn6om49ur/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 802, \"height\": 202, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-fbn6om49ur/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 878, \"height\": 408, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-fbn6om49ur/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 835, \"height\": 445, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-icml-2025-fbn6om49ur/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 970, \"height\": 127, \"label\": \"Table\"}]"
motivation: 从黑盒科学模型（如显微镜基础模型）中提取有意义的语义概念。
method: 结合PCA白化和稀疏字典学习ICFL，从视觉模型特征中提取概念。
result: 成功从细胞显微镜模型提取出生物学相关的可解释概念。
conclusion: 字典学习可揭示科学模型内部概念，但尚未直接用于符号发现。
---

## Abstract
Sparse dictionary learning (DL) has emerged as a powerful approach to extract semantically meaningful concepts from the internals of large language models (LLMs) trained mainly in the text domain. In this work, we explore whether DL can extract meaningful concepts from less human-interpretable scientific data, such as vision foundation models trained on cell microscopy images, where limited prior knowledge exists about which high-level concepts should arise. We propose a novel combination of a sparse DL algorithm, Iterative Codebook Feature Learning (ICFL), with a PCA whitening pre-processing step derived from control data. Using this combined approach, we successfully retrieve biologically meaningful concepts, such as cell types and genetic perturbations. Moreover, we demonstrate how our method reveals subtle morphological changes arising from human-interpretable interventions, offering a promising new direction for scientific discovery via mechanistic interpretability in bioimaging.

---

## 论文详细总结（自动生成）

## 论文详细中文总结

### 1. 核心问题与整体含义（研究动机和背景）

- **研究背景**：稀疏字典学习已成功从大型语言模型（LLM）内部提取语义概念，但该方法在文本以外的科学领域是否有效尚不明确。细胞显微图像基础模型（如掩码自编码器MAE）能够学习到精确的细胞形态表征，但其内部表示缺乏人类可理解的概念映射，形成“黑盒”困境。
- **核心问题**：能否从完全无监督、缺乏人类先验知识的科学数据（如细胞显微图像）中解耦出语义上有意义的生物概念（如细胞类型、基因扰动）？这有助于揭示扰动导致的细微形态变化，推动科学发现。
- **整体含义**：若能成功提取，将为机制可解释性在生物成像领域的科学发现提供新范式，使研究者不仅能判断扰动是否相似，还能理解“为什么”相似（即扰动导致的形态变化方向）。

### 2. 方法论

- **核心思想**：基于“叠加假说”，即模型表征可由高维稀疏概念线性组合而成。本文提出将字典学习与PCA白化预处理结合，从MAE中间层token表示中提取稀疏特征，这些特征对应可解释的生物概念。
- **关键技术细节**：
  - **ICFL（Iterative Codebook Feature Learning）**：一种变种的匹配追踪字典学习算法。它交替执行：
    1. **批处理正交匹配追踪**：对每个输入表示x，初始化残差，每轮选择与残差最相关的top-L个字典列，求解稀疏编码z(t)，更新残差，重复J次，最终z为各轮z(t)的和，总稀疏度k = JL。
    2. **梯度下降更新字典**：固定z，通过最小化重建损失更新解码器参数W_dec和偏置b_pre。无需通过编码器反向传播，避免“死特征”问题。
  - **PCA白化预处理**：使用控制数据集（未扰动细胞）的表示进行PCA白化，将控制数据映射到零均值、单位协方差空间，从而削弱占主导的、与扰动无关的变异方向（如细胞周期），增强扰动相关信号。
  - **附加技巧**：每隔100步对余弦相似度>0.9的字典列进行随机重置，防止特征坍塌。
- **公式/算法流程（文字说明）**：
  - 输入：MAE中间层token表示x（维度d），字典W_dec（d×M），稀疏度参数J、L。
  - 对每个x：依次进行J次迭代，每轮选择L个与当前残差最相关的字典列，解最小二乘问题得到该轮稀疏编码，更新残差。
  - 累积所有轮的稀疏编码得到最终z（最大稀疏度k=JL）。
  - 通过梯度下降最小化重建损失（||x - W_dec z - b_pre||²）更新W_dec和b_pre。
  - 训练前对x进行PCA白化（基于控制数据），并归一化。

### 3. 实验设计

- **数据集与场景**：
  - 使用RxRx1和RxRx3细胞显微图像数据集，包含多种细胞类型、CRISPR/ siRNA基因扰动、不同实验批次。
  - 两个规模的基础模型：MAE-L（ViT-L/8，330M参数）和MAE-G（ViT-G/8，1.9B参数），均在Cell Painting图像上预训练。
  - 输入：256×256×6像素作物，patch size 8×8。每个作物得到1024个token（d=1024或1664）。实验从中层（MAE-L第16层、MAE-G第33层）提取表示。
- **基准任务（Benchmark）**：5个分类任务，用于线性探测评估：
  1. 23种细胞类型
  2. 272个实验批次
  3. 1138个siRNA扰动
  4. 5个CRISPR单基因敲除
  5. 39个功能基因群
- **对比方法**：
  - TopK稀疏自编码器（TopK SAE），是当前主流方法。
  - CellProfiler手工特征（964个），作为领域专家设计的基准。
  - 消融实验：对比有无PCA白化、不同模型大小、不同层（残差流 vs 注意力输出）、不同稀疏度/学习率。
- **评价指标**：平衡测试准确率（BTA）、特征选择性分数（平均/最大）、重建余弦相似度。

### 4. 资源与算力

- **文中未明确说明**：未提及使用的GPU型号、数量、训练时长等硬件信息。只提到训练ICFL/TopK模型使用了40M tokens（每个token对应一个作物），batch size 8192，训练300k步，学习率5e-5。但具体的计算资源（如GPU卡数、显存）未给出。

### 5. 实验数量与充分性

- **实验数量**：较为丰富，包括：
  - 主要对比：ICFL vs TopK SAE，有/无PCA白化，在5个任务上进行线性探测。
  - 模型规模对比：MAE-L vs MAE-G。
  - 层次对比：残差流 vs 注意力输出。
  - 超参数消融：稀疏度（50–150）、学习率（不同量级）。
  - 与CellProfiler的对比（仅部分任务）。
  - 定性分析：对选定特征的视觉化（热力图、通道特异性、单细胞分割验证）。
- **充分性与客观性**：
  - **优点**：任务覆盖从简单（细胞类型）到困难（功能基因群），消融较全面，且使用独立实验划分避免批次混淆；定性分析包含专家标注验证，增强了可信度。
  - **不足**：未报告多次重复实验的统计量（如标准差、置信区间），所有结果似乎基于单次运行；线性探测任务（尤其是siRNA和功能基因群）的准确率较低，可能受类别不平衡影响，虽使用平衡准确率但未完全消除；未与其他可解释性方法（如概念瓶颈、特征可视化）对比。

### 6. 主要结论与发现

1. **ICFL结合PCA白化能够从显微镜MAE中提取出生物上有意义的概念**，如细胞类型、遗传扰动等，且特征选择性优于TopK SAE。
2. 特征的方向可以区分特定扰动（如siRNA），且线性探测表明重建表示保留了大部分生物信号（简单任务几乎无损失，困难任务保留较多）。
3. 与CellProfiler手工特征相比，ICLF特征的选择性分数与之相当（Pearson相关系数0.71），表明无监督学习的特征性能接近专家设计。
4. ICFL比TopK SAE具有更少的死特征（表1）、更好的重建质量（图4C）和更高的选择性（图8）。
5. PCA白化显著提升了特征选择性，尤其是在高维任务中。
6. 通过单细胞热力图分析，ICFL特征能无监督地分离扰动细胞和未扰动细胞，且与人类专家标注的一致性达87%（表3），展示了其支持科学发现的潜力。

### 7. 优点

- **方法创新**：提出ICFL算法，通过批处理OMP自然避免死特征，无需辅助损失；PCA白化利用控制数据作为弱监督，降低无关变异干扰。
- **实验设计**：包含从简单到复杂的多级分类任务，量化了语义保留程度；与领域专家手工特征直接比较，增加了说服力。
- **定性深度分析**：不仅展示相关性，还通过热力图、通道特异性可视化、单细胞分割验证，揭示了具体形态变化（如黏附连接、线粒体形态等），体现了细粒度可解释性。
- **实用潜力**：能够在无标注情况下识别细胞亚群差异，为药物发现提供新工具。

### 8. 不足与局限

- **实验覆盖**：仅在两种MAE模型和一个数据集（RxRx）上验证，未在其他基础模型（如DINO、CLIP）或不同显微镜模态上测试。
- **评估局限性**：线性探测性能在细微变化任务（功能基因群）上仅有32%准确率（随机基线约2.5%），虽有提升但尚不足以替代专家分析。
- **缺乏统计严谨性**：未报告多次实验的标准差或显著性检验，结果可靠性存疑。
- **计算资源未披露**：无法评估方法的实际可复现性和成本。
- **概念解释依赖人工**：虽能提取特征，但语义标注仍需领域专家手动匹配，尚未实现完全自动化的科学发现。
- **PCA白化依赖控制数据**：在无清晰控制组的实验场景下（如疾病组织），该方法可能受限。
- **算法复杂度**：ICFL中J×L次迭代可能带来额外计算开销，且超参数（J、L）需手动调整。

（完）
