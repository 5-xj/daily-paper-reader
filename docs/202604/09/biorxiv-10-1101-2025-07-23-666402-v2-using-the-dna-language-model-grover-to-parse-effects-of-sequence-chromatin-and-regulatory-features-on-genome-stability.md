---
title: "Using the DNA language model, GROVER, to parse effects of sequence, chromatin and regulatory features on genome stability"
title_zh: 利用DNA语言模型GROVER解析序列、染色质与调控特征对基因组稳定性的影响
authors: "Joubert, P. M., Sanabria, M., Poetsch, A. R."
date: 2026-04-04
pdf: "https://www.biorxiv.org/content/10.1101/2025.07.23.666402v2.full.pdf"
tags: ["query:gene"]
score: 8.5
evidence: 用于解析基因组稳定性和序列特征的DNA语言模型
tldr: 本研究利用DNA语言模型GROVER分析DNA序列、染色质与调控特征对基因组稳定性的影响。结果表明GC富集、启动子和SINE区域更易发生DSB，序列中包含影响敏感性的特定短片段。模型整合染色质信息后性能提升，展示其可揭示细胞类型特异性和序列对稳定性的编码作用。
source: biorxiv
selection_source: fresh_fetch
motivation: 研究者希望厘清DNA序列与染色质环境对双链断裂（DSB）敏感性的相对影响。
method: 采用GROVER语言模型预测DSB分布，并融合染色质与调控特征进行综合建模分析。
result: 整合序列与染色质调控特征的模型取得最佳预测性能，揭示两者的协同作用。
conclusion: DSB模式的形成主要受DNA序列编码控制，染色质提供细胞类型特异性补充信息。
---

## 摘要
基因组稳定性由DNA序列和染色质环境共同塑造，但它们对双链断裂（DSB）敏感性的相对贡献仍不清楚。我们展示了DNA语言模型GROVER可以根据序列推断DSB的位置。DSB热点往往包含富GC序列，这些序列通常位于启动子、基因及短散在核元件（SINEs）中。此外，我们识别出若干与调节DSB敏感性相关的特定短序列（token）。使用染色质和基因组调控特征的另一模型在性能上超过仅依赖序列的模型，显示出二者互补性及细胞类型特异性信息。整合序列与基因组生物学特征可获得最佳性能，证明其协同作用。对该模型的分析表明，取决于样本，H3K36me3和DNase-seq中编码的基因组稳定性信息可从序列中学习到，而H3K27ac或H3K9me3则不能。将染色质数据直接嵌入GROVER架构能够实现细胞类型特异的建模，其性能与全染色质特征模型相当。我们的结果表明，虽然染色质和调控环境提供了如细胞类型特异性等重要信息，但决定DSB图谱的许多信息已编码在DNA序列本身中。我们提出的综合建模方法不仅揭示了DSB模式，也提供了一种可推广的策略，用于追踪基因组数据中的预测。

## Abstract
AbstractGenome stability is shaped by DNA sequence and chromatin context, but their relative contributions to double-strand break (DSB) sensitivity remain unclear. We show that the DNA language model, GROVER, can infer DSB location based on sequence. DSB hotspots tend to contain GC-rich sequences that belong to promoters, genes and short interspersed nuclear elements (SINEs). Additionally, we identified several specific short sequences (tokens) that are associated with modulating DSB sensitivity. Another model using chromatin and genome regulatory features outperforms the sequence-only model, highlighting complementary and cell-type specific information. Integrating sequence and genome biological features yields the best performance, demonstrating their synergy. Analyzing this model revealed that, dependent on the sample, genome stability information encoded in H3K36me3 and DNase-seq can be learned from the sequence, but not H3K27ac or H3K9me3. Embedding chromatin data directly into the GROVER architecture enabled cell-type specific modeling with performance matching the full chromatin feature model. Our results suggest that while chromatin and regulatory context provides important information, such as cell-type specificity, much of the information shaping DSB patterns is already encoded in the DNA sequence itself. Our integrative modeling approach not only reveals DSB patterns but also provides a generalizable strategy for tracing predictions in genomic data.



O_FIG O_LINKSMALLFIG WIDTH=195 HEIGHT=200 SRC="FIGDIR/small/666402v2_ufig1.gif" ALT="Figure 1">
View larger version (40K):
org.highwire.dtl.DTLVardef@4926acorg.highwire.dtl.DTLVardef@89eb7aorg.highwire.dtl.DTLVardef@c2bbcaorg.highwire.dtl.DTLVardef@b6f746_HPS_FORMAT_FIGEXP  M_FIG C_FIG