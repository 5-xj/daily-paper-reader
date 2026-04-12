---
title: "EVEE: Interpretable variant effect prediction from genomic foundation model embeddings"
title_zh: EVEE：基于基因组基础模型嵌入的可解释变异效应预测
authors: "Pearce, M. T., Dooms, T., Yamamoto, R., Meehl, J., Molnar, C., Bissell, M., Hazra, D., Fang, C., Nguyen, N., Anderson, M., Osborne, C., Duffy, P., Toomey, B., Klee, E., Myasoedova, E., Ryu, A., Ayanian, S., Korfiatis, P., Redlon, M., Jain, A., Balsam, D., Wang, N. K."
date: 2026-04-11
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.10.717844v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 用于跨变异类型致病性预测的基因组基础模型
tldr: 本研究提出EVEE系统，通过利用7亿参数的基因组基础模型Evo 2的嵌入进行变异效应预测，实现跨变异类型统一且可解释的致病性分析；其分类器在ClinVar数据集上取得业界领先性能，并提供面向全体ClinVar变异的交互式预测与解释资源。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-10-717844-v1/fig-001.webp\", \"caption\": \"Figure 1. Evo 2 covariance probe achieves state-of-the-art variant effect prediction across variant types. (a) Experimental design. Evo 2 processes reference and alternate DNA sequences, producing per-position embeddings. The difference between the embeddings are then input into a covariance probe that is trained to predict pathogenicity. For each input, the covariance probe computes a compressed covariance along the sequence dimension that is flattened and passed through a linear layer to obtain the prediction logits. (b) ClinVar pathogenicity prediction across SNV consequence types. AUROC heatmap for Evo 2 covariance probe, Evo 2 mean probe, Evo 2 loss, CADD v1.7, AlphaMissense, GPN-MSA, NTv3, and AlphaGenome composite on 833,970 variants from genes ≤100 kb with ≥1 star review status. Blank cells indicate methods without predictions for that variant type. (c) Zero-shot generalization to indels. AUROC for Evo 2 covariance probe, Evo 2 mean probe, CADD v1.7, and NTv3 probe on 73,961 ClinVar indels stratified by consequence type and insertion vs. deletion. (d) Performance robustness across conservation levels. AUROC by phyloP100way conservation tier for Evo 2 probes, AlphaMissense, CADD v1.7, Evo 2 loss, and GPN-MSA. Evo 2 probes and AlphaMissense maintain performance across all bins, while loss-based and annotation-based approaches show degraded performance at conservation extremes. (e) UMAP of variant covariance embeddings colored by ClinVar pathogenicity label (benign, VUS, pathogenic) for SNVs and indels. (f) UMAP of variant covariance embeddings colored by VEP consequence type, showing organized structure by variant class for both SNVs and indels. (g) DMS generalization. Spearman |ρ| between predicted scores and continuous DMS functional readouts for BRCA1, BRCA2, TP53, and LDLR. Methods compared: CADD, AlphaMissense, Evo 2 loss, ClinVar-trained mean-pooled probe (ClinVar probe), ClinVar-trained covariance probe (ClinVar cov probe), DMS-trained mean-pooled probe from held-out genes (DMS probe), and DMS covariance probe (DMS cov probe). Error bars show 95% bootstrap confidence intervals.\", \"page\": 3, \"index\": 1, \"width\": 870, \"height\": 1068}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-10-717844-v1/fig-002.webp\", \"caption\": \"Figure 2. Interpretable predictions through annotation disruption profiling and LLM-based synthesis. (a) Schematic of the interpretability framework. Supervised annotation probes are trained on Evo 2 reference-sequence embeddings to predict a panel of biological annotations. For each variant, disruptions (∆ between variant and reference predictions) are computed across all annotations. Top disruptions are synthesized into natural-language explanations by an LLM. (b) Annotation probe performance across annotation categories. Horizontal boxplot with jittered scatter of per-head AUROC values, grouped by annotation category for 357 binary annotation probes. (c, e) Evaluation of variant interpretations using an LLM-as-a-judge approach against ClinVar (≥3 star) expert review summaries. (c) shows composite scores across cumulative context configurations for three Claude model tiers (Haiku 4.5, Sonnet 4.6, Opus 4.6); (e) shows the breakdown by individual criteria: mechanism coverage, biological accuracy, and specificity. Error bars show 95% confidence intervals. (d) Example interpretation for a BRCA1 splice-disrupting intronic variant. Disruption profile showing predicted changes in exon–intron boundaries, splicing donor, zinc finger domain, and variant effect annotations, with LLM-generated natural-language explanation contextualizing the disruption profile against known biology.\", \"page\": 5, \"index\": 2, \"width\": 918, \"height\": 987}]"
motivation: 当前临床上大量基因变异仍被归类为意义不明的变异，亟需统一且可解释的预测框架。
method: 作者利用Evo 2模型生成的嵌入，训练分类器预测变异致病性，并通过监督注释探针和语言模型生成自然语言解释。
result: 该方法在ClinVar数据集上取得0.997 AUROC，并在零样本indel预测中达0.991 AUROC，表现优于现有模型。
conclusion: 研究表明基因组基础模型的表示可以同时实现高精度变异效应预测和可解释性分析，为计算基因组学中的解释性提供新的范式。
---

## 摘要
预测遗传变异的临床意义仍然是基因组医学中的核心挑战，因为大多数观察到的变异被分类为意义不明的变异。在此，我们展示了来自 Evo 2（一个拥有70亿参数的基因组基础模型）的表征能够在单一框架下实现跨变异类型的准确且可解释的致病性预测。基于嵌入的分类器（即“probe”）在 Evo 2 的嵌入上训练后，在单核苷酸变异的不同后果类型中实现了最先进的性能（在 83.9 万 ClinVar 变异上的总体 AUROC 为 0.997），并能零样本泛化至插入缺失变异（AUROC 为 0.991），优于生物信息学元预测器、蛋白模型以及现有的基础模型方法。其性能在不同的保守性水平上保持稳健，并可迁移至 BRCA1、BRCA2、TP53 和 LDLR 的深度突变扫描数据集。为实现预测结果的可解释性，我们训练了监督的注释 probe，用以量化每个变异导致的预测功能破坏，然后利用前沿推理模型将这些破坏谱综合为自然语言解释。我们通过 Evo Variant Effect Explorer (EVEE) 向科研社区提供全部 420 万 ClinVar 变异的预计算预测结果及按需解释的交互式网络资源。本研究表明，基因组基础模型的表征可以作为兼具高准确度变异效应预测与机制解释的统一基础，从而将计算基因组学中对可解释性的理解，从一种精度与透明度之间的权衡，重新定义为源自学习到的生物学结构的互补成果。

## Abstract
Predicting the clinical significance of genetic variants remains a central challenge in genomic medicine, with most observed variants classified as variants of uncertain significance. Here we show that representations from Evo 2, a 7-billion-parameter genomic foundation model, support accurate and interpretable pathogenicity prediction across variant types from a single framework. An embedding-based classifier, or "probe", trained on Evo 2 embeddings achieves state-of-the-art performance across single nucleotide variant consequence types (0.997 overall AUROC on 839k ClinVar variants) and generalizes zero-shot to indels (0.991 AUROC), outperforming bioinformatic meta-predictors, protein models, and existing foundation model approaches. Performance is robust across conservation levels and transfers to deep mutational scanning datasets for BRCA1, BRCA2, TP53, and LDLR. To make these predictions interpretable, we train supervised annotation probes to quantify predicted disruptions caused by each variant, then synthesize these disruption profiles into natural language explanations using a frontier reasoning model. We provide pre-computed predictions and on-demand explanations for all 4.2 million ClinVar variants through the Evo Variant Effect Explorer (EVEE), an interactive web resource for the community. This work establishes that representations from genomic foundation models can serve as a unified substrate for both accurate variant effect prediction and mechanistic interpretation, reframing interpretability in computational genomics from a trade-off into a complementary product of learned biological structure.

---

## 论文详细总结（自动生成）

# EVEE：基于基因组基础模型嵌入的可解释变异效应预测 — 中文论文深入总结

---

## 一、核心问题与整体含义

- **研究动机**：  
  在临床基因组学中，大量检测到的基因变异仍被归类为“意义不明的变异（VUS）”，缺乏明确的致病性解释。这导致基因诊断与精准治疗受到限制。
- **核心问题**：  
  现有变异预测模型往往局限于特定类型（如单核苷酸变异，SNV），且解释性不足，难以揭示潜在的生物学机制。
- **研究目标**：  
  作者希望在一个统一的框架下，利用大规模基因组基础模型的表示，既实现跨变异类型的高精度预测，又能提供机制层面的可解释性。
- **整体意义**：  
  该研究试图重新定义计算基因组学中“精度与解释性之间的权衡”，提出可兼得的模型范式，推动从黑箱式预测迈向生物学结构驱动的透明推理。

---

## 二、方法论

### 1. 核心思想

- 基于**Evo 2**（一个拥有约 **70亿参数的基因组基础模型**）生成序列嵌入，用于表示基因组序列的语义与结构信息。
- 通过设计多种**“probe”（探针）分类器**，在这些嵌入上进行变异效应预测。
- 利用带监督的**注释探针（annotation probes）**以及语言模型，将预测结果转换为自然语言解释，实现可解释性分析。

### 2. 技术结构与算法流程

- **输入处理**：模型分别接受参考序列与变异后的序列输入，生成每个碱基位置的嵌入向量。
- **嵌入差异计算**：计算变异嵌入与参考嵌入之间的差值，用于表征变异引起的语义扰动。
- **协方差探针（Covariance Probe）**：
  - 沿序列维度计算嵌入的压缩协方差；
  - 将结果展平后输入线性层，输出预测 logits；
  - 该结构在跨变异类型预测中表现出最优性能。
- **解释模块**：
  - 针对 Evo 2 的嵌入，训练一系列**监督注释探针**（约357个），用于预测特定生物学功能标签，如剪接位点、结构域变化、调控元件等；
  - 计算变异与参考序列在这些注释上的差异（Δ值），形成“功能破坏谱”；
  - 使用大型语言模型（例如 Claude 系列）将破坏谱转换为自然语言机制解释。

---

## 三、实验设计

- **数据集**：
  - 主测试集：**ClinVar 数据库**，共约 **83.9万个具有 ≥1星评审状态的变异**；
  - 扩展测试：包含 **约7.4万条插入缺失变异（indels）**；
  - 泛化验证：**深度突变扫描（DMS）数据集**，涵盖 BRCA1、BRCA2、TP53、LDLR 四个基因。
- **Benchmark 对比方法**：
  - 传统注释方法：CADD v1.7；
  - 蛋白模型：AlphaMissense；
  - 基因组模型：GPN-MSA、NTv3、AlphaGenome composite；
  - Evo 2 的多种探针结构（mean probe、covariance probe、loss-based probe）。
- **评价指标**：  
  使用 **AUROC**（曲线下面积）衡量预测准确度，并通过**Spearman |ρ|**评价连续评分与 DMS 功能读数的相关性。

---

## 四、资源与算力

- 论文摘要与实验描述中 **未明确披露算力配置或计算资源细节**（未提及 GPU 型号、数量或训练耗时）。
- 仅说明使用了 Evo 2 模型的预训练嵌入（该模型已有约70亿参数，属重型基础模型），表明算力需求较高，推测由大型集群支撑。

---

## 五、实验数量与充分性

- **实验构成**：
  - ClinVar SNV 预测（跨7种变异后果类型）；
  - ClinVar indel 零样本泛化测试；
  - 跨保守性层级（phyloP100way）鲁棒性分析；
  - DMS 泛化测试（四个经典基因）；
  - 注释探针性能评估（357个类别）；
  - LLM 解释质量评估（通过 LLM-as-a-judge 方法）。
- **充分性评估**：
  - 涵盖不同变异类型、性能维度和解释层次；
  - 包含主流对比方法与多数据源验证；
  - 总体上实验数量充足且对比合理，具备较强公平性与客观性。

---

## 六、主要结论与发现

- **性能结果**：
  - ClinVar 全体变异预测 AUROC 达 **0.997**；
  - 插入缺失（indel）零样本泛化 AUROC 达 **0.991**；
  - 泛化至 DMS 数据时仍保持显著正相关。
- **解释性结果**：
  - 注释探针实现对功能层破坏的量化；
  - 与语言模型生成的解释在专家评估中表现出高机制覆盖率和生物学准确性。
- **总体发现**：
  - 基因组基础模型的嵌入表示可作为统一底层结构，既支撑高精度预测，又实现有机的可解释性；
  - 改变了传统“高性能与可解释性冲突”的认知框架。

---

## 七、优点与创新点

- **统一框架**：在同一个模型架构下实现跨 SNV 和 indel 的预测。
- **高泛化能力**：零样本预测能力强，能直接迁移到新变异类型。
- **可解释性设计**：结合监督注释探针与语言模型输出自然语言机制解释。
- **开源资源**：推出交互式平台 **EVEE**，提供 420万条 ClinVar 变异的预测结果与解释访问。
- **科学影响力**：将基因组基础模型引导至临床应用与机制推理层面。

---

## 八、不足与局限

- **算力成本高**：Evo 2 参数量巨大，训练和推理成本高昂，不适合一般实验室部署。
- **依赖已有预训练模型**：模型依赖于 Evo 2 的预训练质量及语料覆盖度，潜在偏差难以消除。
- **数据偏倚风险**：ClinVar 标注质量不一，部分“1星”变异可能存在主观性。
- **解释模块评估难度**：LLM 生成解释虽可读，但其生物真实性和一致性仍需人工验证。
- **临床应用尚未验证**：目前仅停留在计算层验证，尚缺临床病例级测试。

---

（完）
