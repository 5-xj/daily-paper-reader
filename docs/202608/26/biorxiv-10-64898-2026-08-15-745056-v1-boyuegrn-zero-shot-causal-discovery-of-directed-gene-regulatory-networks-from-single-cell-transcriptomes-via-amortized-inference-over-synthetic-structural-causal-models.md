---
title: "BoYueGRN: Zero-shot causal discovery of directed gene regulatory networks from single-cell transcriptomes via amortized inference over synthetic structural causal models"
title_zh: BoYueGRN：通过合成结构因果模型的摊销推断，从单细胞转录组零样本因果发现定向基因调控网络
authors: "Wu, J., Shen, Y.-Q."
date: 2026-08-20
pdf: "https://www.biorxiv.org/content/10.64898/2026.08.15.745056v1.full.pdf"
tags: ["query:ad"]
score: 8.0
evidence: 从单细胞转录组进行因果发现的算法，属于数据自动发现
tldr: 单细胞转录组的基因调控网络推断通常需针对每个数据集重新优化，且多数方法无法推断调控方向。BoYueGRN提出基于合成结构因果模型的摊销因果发现框架，仅训练一次即可零样本应用于新数据集，并通过TF滑动窗口实现全转录组覆盖。在BEELINE基准及CRISPRi Perturb-seq筛选中取得高方向准确性，成功重建跨疾病细胞类型特异网络。该工作将定向GRN推断转变为训练一次、多数据集复用的范式，助力图谱级调控动态解析。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有GRN推断方法需为每个数据集重新拟合，且难以推断因果调控方向，缺乏可复用的零样本框架。
method: "在10,000个合成结构因果模型上训练摊销推断模型，单次前向传播输出边概率和方向，并用TF滑动窗口扩展至全转录组。"
result: BEELINE基准上零样本表现强，两个CRISPRi筛选中保留边方向准确率达0.86和0.95，重建五疾病27万细胞网络。
conclusion: 将GRN推断转为训练一次、跨数据集复用范式，为疾病调控动态的系统性图谱绘制开辟道路。
---

## 摘要
从单细胞RNA-seq推断基因调控网络（GRN）传统上依赖于每个数据集的优化。现有工具必须针对每个新数据集重新拟合，且大多数无法推断因果调控方向。在此，我们提出BoYueGRN，一个仅在10,000个合成结构因果模型上训练的摊销因果发现框架。对于任何未见过的数据集，单次前向传播即可返回边概率和调控方向，而TF中心滑动窗口与非对称融合将此固定大小模型扩展至全转录组覆盖。BoYueGRN在BEELINE基准测试中展现出强大的零样本性能。在两个独立的全基因组CRISPRi Perturb-seq筛选中，保留边上的方向准确率分别达到0.86和0.95。跨五个疾病、涵盖超过270,000个细胞的重建细胞类型和阶段特异性GRN动态，产生了可实验验证的生物学假设。BoYueGRN将定向GRN推断重新定义为一次训练、跨数据集复用的范式。通过将网络重建与每个数据集的优化解耦，该范式为跨人类疾病的系统性、图谱级调控动态映射打开了大门。

## Abstract
Gene regulatory network (GRN) inference from single-cell RNA-seq conventionally relies on per-dataset optimization. Existing tools must be refit for every new dataset, and the majority fail to infer causal regulatory directions. Here we present BoYueGRN, an amortized causal discovery framework trained exclusively on 10,000 synthetic structural causal models. For any unseen dataset, a single forward pass returns edge probabilities and regulatory directions, while TF-centric sliding windows with asymmetric fusion extend this fixed-size model to full-transcriptome coverage. BoYueGRN demonstrates strong zero-shot performance across BEELINE benchmarks. On two independent genome-wide CRISPRi Perturb-seq screens, directional accuracy on retained edges reaches 0.86 and 0.95. Reconstructed cell-type- and stage-specific GRN dynamics across five diseases spanning more than 270,000 cells yield experimentally testable biological hypotheses. BoYueGRN reframes directed GRN inference as a train-once, reuse-across-datasets paradigm. By decoupling network reconstruction from per-dataset optimization, this paradigm opens the door to systematic, atlas-scale mapping of regulatory dynamics across human diseases.