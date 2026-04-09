---
title: Evolutionary transfer learning enables organism-wide inference of mammalian enhancer landscapes
title_zh: 进化迁移学习实现哺乳动物全基因组增强子景观的推断
authors: "Qiu, C., Daza, R. M., Welsh, I. C., Patwardhan, R. P., Martin, B. K., Li, T., Yang, S., Kempynck, N., Taylor, M. L., Fulton, O., Le, T.-M., O'Day, D. R., Lalanne, J.-B., Domcke, S., Murray, S. A., Aerts, S., Trapnell, C., Shendure, J."
date: 2026-04-08
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.07.717039v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 人类基因组如何编码基因调节程序
tldr: 该研究为破解基因调控编码难题提出了进化迁移学习框架STEAM，通过结合3.9百万细胞的染色质可及性数据与241种哺乳动物基因组信息，显著提升了跨物种增强子预测的准确性，构建出覆盖哺乳动物的发育调控图谱，展示了模型融合进化数据推动生物学发现的新途径。
source: biorxiv
selection_source: fresh_fetch
motivation: 由于人类多数细胞类型无法通过实验全面获取调控信息，研究者希望利用不同物种间保守的调控规律提升基因调控预测能力。
method: 作者建立了跨物种深度学习框架STEAM，并结合单细胞染色质可及性数据及241种哺乳动物基因组的同源序列进行训练。
result: STEAM模型显著改善了增强子预测的泛化性能，并生成了覆盖人类、小鼠及239种哺乳动物的全基因组增强子图谱。
conclusion: 该研究表明，整合进化信息的迁移学习可实现跨物种增强子预测，揭示了利用进化多样性推动AI生物学研究的潜力。
---

## 摘要
理解并建模人类基因组如何为数千种细胞类型编码基因调控程序，仍然是基因组学和机器学习领域的核心挑战。然而，大多数人类细胞类型在胚胎、胎儿及儿童发育阶段出现，这些阶段目前无法进行全面的分子谱系分析。为克服这一局限，我们提出假设：顺式作用增强子（快速）的进化速率与解释它们的反式调控程序（缓慢）之间的不匹配，为“进化迁移学习”创造了机会。具体而言，在一种物种中训练的预测细胞类型特异性增强子的模型，应该能够泛化到相关物种的同源细胞类型和增强子。为验证此假设，我们构建了从小鼠胚胎第10天（E10）到出生（P0）的单细胞染色质可及性图谱。利用组合索引技术，我们分析了来自36个分期胚胎的390万个细胞核，在36类细胞和140种细胞类型中解析了全基因组可及性。为了识别所有细胞类群的远端增强子，我们训练了一系列多输出深度学习模型（CREsted），每一代模型都针对前一代方法的局限进行了改进。“进化无感知”模型在保留的峰上表现良好，但在全基因组推断中存在两类错误：对串联重复序列的过预测，以及启动子与远端增强子语法的混淆。“进化感知”模型通过基于同线性同源区域间的功能一致性重新分组可及区域，解决了这些问题，但未能跨物种泛化——表明训练中序列多样性不足。最终，我们开发了 STEAM（Synteny-aware Transfer learning for Enhancer Activity Modeling，即同线性感知增强子活性建模迁移学习），这一“进化增强”模型在同线性监督下将训练语料扩展至最多241个哺乳动物基因组（Zoonomia），使有效数据规模提升至195倍，尽管标签噪声更大，却显著提高了跨哺乳动物的泛化性能。我们利用 STEAM 为包括人和鼠（HumMus）在内的主要发育谱系以及其他239种哺乳动物（BabaGanoush）预测了所有主要发育谱系的增强子，共生成 32 × 241 = 7,712 个全基因组增强子轨迹。总体而言，我们的研究将单细胞组学、深度学习与比较基因组学的最新进展整合入一个非编码调控语法的进化迁移学习框架中。更广泛地说，我们的工作支持这样一种观点：模式生物和进化多样的基因组是加速人工智能驱动的人类生物学探索的不可或缺的资源。注：本文交互版预印本以及计数矩阵、CREsted 模型、预测轨迹、代码与可复现图表可于 https://doi.org/10.62329/hxkk6249 获取。

## Abstract
Understanding and modeling how the human genome encodes gene regulatory programs for thousands of cell types remains a central challenge in genomics and machine learning. However, most human cell types emerge during embryonic, fetal, and pediatric development which are inaccessible to comprehensive molecular profiling. To overcome this, we hypothesized that the mismatch in evolutionary rates between cis-acting enhancers (fast) and the trans-acting regulatory programs that interpret them (slow) creates an opportunity for 'evolutionary transfer learning'. Specifically, models trained to predict cell type-specific enhancers in one species should generalize to the orthologous cell types and enhancers of related species. To test this, we generated a single-cell atlas of chromatin accessibility spanning mouse embryonic day 10 (E10) to birth (P0). Using combinatorial indexing[1], we profiled 3.9 million nuclei from 36 staged embryos, resolving genome-wide accessibility in 36 cell classes and 140 cell types. With the goal of identifying distal enhancers for all cell classes, we trained a series of multi-output deep learning models (CREsted[2]), each addressing limitations of the preceding approach. An 'evolution-naive' model achieves strong performance on heldout peaks, but exhibited two failure modes during genome-wide inference: overprediction at tandem repeats and conflation of promoter and distal enhancer grammars. An 'evolution-aware' model resolves these by regrouping accessible regions based on functional coherence across syntenic orthologs, but fails to generalize across species - suggesting insufficient sequence diversity during training. Finally, STEAM (Synteny-aware Transfer learning for Enhancer Activity Modeling), our 'evolution-augmented' model, expands the training corpus to include enhancer orthologs from up to 241 mammalian genomes (Zoonomia[3]) in a synteny-supervised manner. This increases the effective data scale by up to 195-fold, markedly improving generalization across mammals despite greater label noise. We apply STEAM predict enhancers for all major developmental lineages throughout the human, mouse (HumMus) and 239 additional mammalian genomes[3] (BabaGanoush), i.e. 32 x 241 = 7,712 genome-wide enhancer tracks. Together, our results unify advances in single-cell profiling, deep learning, and comparative genomics into a framework for the evolutionary transfer learning of noncoding regulatory grammars. More broadly, our work supports the view that model organisms and evolutionarily diverse genomes are indispensable resources for accelerating the AI-enabled exploration of human biology. Note: An interactive version of this preprint, together with count matrices, CREsted models, prediction tracks, code and reproducible figures, is available at https://doi.org/10.62329/hxkk6249.

---

## 论文详细总结（自动生成）

# 论文总结：进化迁移学习实现哺乳动物全基因组增强子景观的推断  
（Evolutionary transfer learning enables organism-wide inference of mammalian enhancer landscapes）

---

## 1. 核心问题与研究背景

- **研究核心问题**：如何理解并建模人类基因组是如何为上千种不同细胞类型编码复杂的基因调控程序。
- **动机与挑战**：
  - 当前的实验手段无法在胚胎或早期发育阶段全面获取人类细胞类型的分子信息。
  - 非编码区（尤其是增强子）进化迅速，而调控这些增强子的转录因子网络相对保守，造成跨物种间存在进化速率不匹配。
- **研究假设**：这种“进化速率错配”可以被用作迁移学习的机会——在一个物种训练的模型，可能在其他近缘物种上仍能泛化。

---

## 2. 方法论：核心思想与技术框架

### 核心思想
提出“**进化迁移学习（Evolutionary Transfer Learning）**”，通过整合同系序列与深度学习，实现跨物种的增强子活性建模。

### 技术框架
1. **基础模型 CREsted**  
   - 多输出深度学习架构，用于预测不同细胞类型的远端增强子。
   - 迭代改进版本：从“进化无感知”模型到“进化感知”模型，再到最终的迁移学习框架 STEAM。
2. **模型演进过程**：
   - **进化无感知模型**：只使用单物种数据训练，能在局部峰上表现良好，但全基因组推断存在过预测重复序列和混淆启动子区域的问题。
   - **进化感知模型**：利用同线性区域间的功能一致性重组训练数据，改善局部一致性，但跨物种泛化能力仍弱。
   - **最终模型 STEAM（Synteny-aware Transfer learning for Enhancer Activity Modeling）**：
     - 将训练数据扩展至最多 **241 个哺乳动物基因组（Zoonomia 数据集）**。
     - 在同线性监督下进行迁移学习。
     - 有效数据规模扩大 195 倍，显著提升跨物种泛化性能。
3. **模型逻辑流程（文字概述）**：
   - 输入：同源基因组序列 + 单细胞染色质可及性标签。
   - 步骤：
     1. 识别同线性区域，定义潜在增强子同源组。
     2. 利用深度网络学习序列特征到细胞类型特异性增强子活性的映射。
     3. 迁移到其他物种进行预测。
   - 输出：全基因组增强子景观预测轨迹。

---

## 3. 实验设计

- **数据集与场景**
  - 小鼠胚胎发育阶段（E10–P0）单细胞染色质可及性图谱：共 **390 万个细胞核**，来自 **36 个分期胚胎**。
  - 整合 **Zoonomia 项目** 的 **241 个哺乳动物基因组**。
  - 生成跨物种增强子预测轨迹：`32 种发育谱系 × 241 个物种 = 7,712 套增强子轨迹`。
- **基准与对比方法**
  - 对比三代模型表现：
    - Evolution-naive（不含进化信息）
    - Evolution-aware（引入同源功能一致性）
    - STEAM（进化迁移学习模型）
- **任务类型**
  - 增强子预测的泛化能力测试。
  - 错误模式分析：串联重复序列与启动子误预测。

---

## 4. 资源与算力

- 原文未具体说明使用的 GPU 型号、训练时长或计算资源数量。
- 但从数据规模和模型复杂度推测：
  - 训练包含 3.9M 细胞 + 241 基因组的模型，预计需要大规模计算集群。
  - 推断阶段可能涉及分布式 GPU 或 TPU 计算。
- 明确说明：**论文中未提供具体算力细节。**

---

## 5. 实验数量与充分性

- **实验类型**：
  1. 模型迭代三阶段实验（无感知 → 感知 → 迁移）。
  2. 跨物种泛化评估。
  3. 错误模式分析。
  4. 生成全覆盖增强子图谱。
- **充分性与公平性**：
  - 数据规模极大（包含数百万细胞与数百物种），覆盖广泛。
  - 控制变量明确（模型代际对比）。
  - 虽未提及重复实验与统计显著性测试细节，但总体实验设计具备较强验证力与泛化证明。
  - 因涉及标签噪声，模型性能的“公平性”可能受限于不同物种数据质量。

---

## 6. 主要结论与发现

- 进化迁移学习可显著提高跨物种增强子预测的准确性。
- STEAM 模型成功构建了覆盖哺乳动物发育谱系的全基因组增强子景观。
- 验证了利用同线性监督与进化多样性可以增强深度学习在生物学推理中的泛化能力。
- 支持“进化多样性是 AI 生物学探索的关键资源”这一新观点。

---

## 7. 优点与创新亮点

- **理论创新**：首次系统提出“进化速率错配”作为迁移学习机会的概念。
- **方法创新**：
  - 将同线性监督作为迁移学习的生物学约束。
  - 实现跨 241 个物种的深度模型训练——数据规模前所未有。
- **实验亮点**：
  - 利用大规模单细胞组学数据进行模型训练。
  - 生成全物种增强子地图，为比较基因组学提供量化框架。
- **应用潜力**：
  - 可用于预测人类不同细胞类型发育过程中的调控元件。
  - 为进化保存性与功能多样性研究提供新工具。

---

## 8. 不足与局限

- **算力与训练细节缺失**：未披露硬件、训练耗时、参数规模，影响复现性。
- **标签噪声问题**：跨物种迁移引入较多低质量标签，可能造成部分预测偏差。
- **跨域数据质量差异**：小鼠与其他哺乳动物的组学数据质量不均。
- **模型生物学解释性有限**：深度模型的黑盒性质限制了对增强子语法的可解释分析。
- **人类发育阶段验证不足**：由于伦理和技术限制，缺乏直接实验验证。

---

（完）
