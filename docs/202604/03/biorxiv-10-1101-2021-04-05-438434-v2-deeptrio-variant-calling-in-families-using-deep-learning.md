---
title: "DeepTrio: Variant Calling in Families Using Deep Learning"
title_zh: DeepTrio：基于深度学习的家系变异检测
authors: "Brambrink, L., Kolesnikov, A., Goel, S., Nattestad, M., Yun, T., Baid, G., Yang, H., McLean, C., Shafin, K., Chang, P.-C., Carroll, A."
date: 2026-04-02
pdf: "https://www.biorxiv.org/content/10.1101/2021.04.05.438434v2.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 用于变异检测和理解亲本遗传的深度学习
tldr: DeepTrio是一个基于深度学习的家系变异检测工具，通过联合分析父母与子女的测序数据，在无需显式编码遗传先验的情况下，自动学习测序误差和新发突变率。该工具在Illumina和PacBio HiFi数据上均优于DeepVariant，尤其在低覆盖度下表现卓越，显著提升了家系遗传分析的准确性并降低了测序成本。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2021-04-05-438434-v2/fig-001.webp\", \"caption\": \"Figure 2. Variant calling accuracy across different pipelines and sequencing depths.\", \"page\": 6, \"index\": 1, \"width\": 902, \"height\": 904}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2021-04-05-438434-v2/fig-002.webp\", \"caption\": \"Table 4. HG002 Indel accuracy at 20x Coverage (all trio members).\", \"page\": 15, \"index\": 2, \"width\": 908, \"height\": 258}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2021-04-05-438434-v2/fig-003.webp\", \"caption\": \"Table 3. HG002 SNP accuracy at 20x Coverage (all trio members).\", \"page\": 15, \"index\": 3, \"width\": 908, \"height\": 258}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2021-04-05-438434-v2/fig-004.webp\", \"caption\": \"Table 1. HG002 SNP accuracy at 35x Coverage (all trio members).\", \"page\": 15, \"index\": 4, \"width\": 908, \"height\": 258}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2021-04-05-438434-v2/fig-005.webp\", \"caption\": \"Table 2. HG002 Indel accuracy at 35x Coverage (all trio members).\", \"page\": 15, \"index\": 5, \"width\": 908, \"height\": 258}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2021-04-05-438434-v2/fig-006.webp\", \"caption\": \"Figure 1. DeepTrio inputs channels and processing pipeline\", \"page\": 3, \"index\": 6, \"width\": 832, \"height\": 1050}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2021-04-05-438434-v2/fig-007.webp\", \"caption\": \"Figure 6. Example of a variant called correctly by DeepTrio but not DeepVariant\", \"page\": 18, \"index\": 7, \"width\": 902, \"height\": 646}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2021-04-05-438434-v2/fig-008.webp\", \"caption\": \"Figure 3. Performance of de novo variant calling across different pipelines and sequencing depths. (Top) Recall (left) and precision (right) for de novo variants (child 0/1, parents 0/0 ) on chromosome 20 (HG002) as a function of sequencing coverage. (Bottom) Breakdown of call accuracy (True Positives (TP), False Negatives (FN), and False Positives (FP)) by read depth for trio-aware pipelines (DeepTrio, GATK4, and Octopus) on Illumina WGS data. De novo sites are defined using Genome in a Bottle (GIAB) v4.2.1 benchmarks. DeepTrio demonstrates superior performance, particularly maintaining higher recall at lower read depths compared to GATK4 and Octopus.\", \"page\": 8, \"index\": 8, \"width\": 902, \"height\": 890}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2021-04-05-438434-v2/fig-009.webp\", \"caption\": \"Figure 7. Example of a variant called correctly by DeepTrio but not DeepVariant\", \"page\": 19, \"index\": 9, \"width\": 902, \"height\": 645}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2021-04-05-438434-v2/fig-010.webp\", \"caption\": \"Figure 5. Time required to run DeepTrio and other pipelines.\", \"page\": 17, \"index\": 10, \"width\": 902, \"height\": 604}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2021-04-05-438434-v2/fig-011.webp\", \"caption\": \"Figure 8. Variant calling accuracy for Oxford Nanopore long-reads.\", \"page\": 20, \"index\": 11, \"width\": 902, \"height\": 904}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-1101-2021-04-05-438434-v2/fig-012.webp\", \"caption\": \"Figure 4. Variant calling accuracy of DeepTrio varying only parent coverage.\", \"page\": 16, \"index\": 12, \"width\": 902, \"height\": 904}]"
motivation: 旨在解决传统家系变异检测中难以充分利用原始序列信息以及对显式遗传先验依赖的问题。
method: 利用深度学习模型直接从三联体的联合序列信息中学习，自动权衡测序误差、比对误差和新发突变率。
result: 在Illumina和PacBio平台上，DeepTrio的准确率显著高于DeepVariant，且20x覆盖度的表现即可媲美30x的单样本检测。
conclusion: DeepTrio通过端到端学习提升了家系变异检测的精度，并能灵活扩展至全外显子组等多种应用场景。
---

## 摘要
每个人都从母亲和父亲那里各继承一份基因组拷贝。亲代遗传有助于我们理解性状和遗传病的传递，这些疾病通常涉及新发变异（de novo variants）和罕见隐性等位基因。在此，我们提出了 DeepTrio，它能够从联合序列信息中学习分析“子-母-父”三人组（trios），而无需显式编码遗传先验。DeepTrio 直接从序列数据中学习如何权衡测序误差、比对误差、新发变异率以及基因组背景。与 DeepVariant 相比，DeepTrio 在 Illumina 和 PacBio HiFi 数据上均具有更高的准确性。在低覆盖度下，改进尤为显著（20x 的 DeepTrio 大致相当于 30x 的 DeepVariant）。由于 DeepTrio 直接从数据中学习，我们还展示了仅通过更改训练数据即可扩展到外显子组检测。DeepTrio 包含了针对 Illumina 全基因组测序（WGS）、Illumina 外显子组和 PacBio HiFi 的预训练模型。

## Abstract
Every human inherits one copy of the genome from their mother and another from their father. Parental inheritance helps us understand the transmission of traits and genetic diseases, which often involve de novo variants and rare recessive alleles. Here we present DeepTrio, which learns to analyze child-mother-father trios from the joint sequence information, without explicit encoding of inheritance priors. DeepTrio learns how to weigh sequencing error, mapping error, and de novo rates and genome context directly from the sequence data. DeepTrio has higher accuracy on both Illumina and PacBio HiFi data when compared to DeepVariant. Improvements are especially pronounced at lower coverages (with 20x DeepTrio roughly equivalent to 30x DeepVariant). As DeepTrio learns directly from data, we also demonstrate extensions to exome calling solely by changing the training data. DeepTrio includes pre-trained models for Illumina WGS, Illumina exome, and PacBio HiFi.

---

## 论文详细总结（自动生成）

以下是对论文《DeepTrio: Variant Calling in Families Using Deep Learning》的结构化深入总结：

### 1. 核心问题与整体含义（研究动机和背景）
*   **核心问题**：如何在人类基因组测序中，利用家系（通常是“父-母-子”三联体，Trio）的遗传关联信息，提高变异检测（Variant Calling）的准确性，特别是针对罕见病研究中的新发突变（de novo variants, DNMs）和低覆盖度数据。
*   **研究背景**：传统的变异检测工具（如 GATK）通常针对单样本设计，虽然有些工具通过显式的孟德尔遗传概率模型进行联合检测，但难以捕捉复杂的测序误差模式。DeepVariant 虽然在单样本检测中表现优异，但未利用家系信息。DeepTrio 旨在通过深度学习，在不显式设定遗传规则的情况下，自动从原始序列数据中学习遗传规律和误差权重。

### 2. 方法论
*   **核心思想**：将 DeepVariant 的图像识别框架扩展到三联体数据。DeepTrio 不依赖硬编码的孟德尔定律，而是通过将三人的测序读段（Reads）堆叠在一起形成多通道“图像”，让卷积神经网络（CNN）自行学习亲子间的序列特征。
*   **关键技术细节**：
    *   **输入表示（Pileup Images）**：将 221bp 窗口内的比对信息转化为张量。对于 Illumina 数据包含 7 个通道，PacBio 包含 8-9 个通道（碱基、质量值、比对质量、链信息等）。
    *   **三联体堆叠**：在图像中，子代、父亲、母亲的读段按固定高度排列。
    *   **双模型策略**：
        *   **子代模型（Child Model）**：子代读段置于中间，父母在上下，模型学习利用父母信息辅助子代检测。
        *   **亲代模型（Parent Model）**：待检测的亲代读段置于顶部，通过调整排列顺序来检测父亲或母亲。
    *   **候选提取优化**：在 `make_examples` 阶段，合并三人的读段以降低候选变异的阈值，确保低频但受遗传支持的变异不被漏掉。
    *   **性能优化**：引入了多层感知机（MLP）分类器作为前置过滤，只有不确定的候选位点才会进入深层 CNN，显著降低了计算开销。

### 3. 实验设计
*   **数据集**：使用了 Genome in a Bottle (GIAB) 的 Ashkenazi Jewish 三联体（HG002, HG003, HG004）。
*   **测序技术**：涵盖了 Illumina WGS（PCR-free 和 PCR+）、Illumina Exome、PacBio HiFi 以及 Oxford Nanopore (ONT)。
*   **Benchmark**：以 GIAB v4.2.1 真值集为基准，使用 `hap.py` 进行评估。
*   **对比方法**：
    *   **单样本**：DeepVariant, GATK4 HaplotypeCaller。
    *   **家系感知**：GATK4 CalculateGenotypePosteriors, dv-trio, Octopus, Clair3-trio。
*   **场景模拟**：进行了覆盖度梯度实验（15x 到 35x），以及父母低覆盖度、子女高覆盖度的非对称实验。

### 4. 资源与算力
*   **推理算力**：论文提到在 Google Cloud Platform 的 16 核 CPU 实例（n1-standard-16）上运行。
*   **训练算力**：文中未明确给出训练的具体 GPU 型号和总时长，但指出 DeepTrio 训练使用了染色体 1-19，21-22 用于调优，20 号染色体完全保留用于测试。
*   **效率提升**：由于三联体图像高度是单样本的三倍，计算量理论上会增加，但通过 MLP 预分类器，DeepTrio 的运行速度虽慢于 DeepVariant，但显著快于 GATK4 和 Octopus。

### 5. 实验数量与充分性
*   **实验规模**：实验设计非常全面，不仅对比了不同算法，还跨越了多种测序平台（长读段 vs 短读段）和多种覆盖度配置。
*   **客观性**：使用了独立的 20 号染色体进行验证，避免了训练集污染。通过对新发突变（DNM）的专门分析，验证了模型在违反孟德尔定律情况下的鲁棒性。
*   **公平性**：对比方法均使用了各自的最佳实践参数，且在相同的硬件环境下评估耗时。

### 6. 主要结论与发现
*   **准确率提升**：DeepTrio 在所有平台上的表现均优于 DeepVariant。在低覆盖度下优势更明显：**20x 的 DeepTrio 准确率与 30x 的 DeepVariant 相当**。
*   **新发突变（DNM）**：DeepTrio 在保持高精度的同时，显著提升了 DNM 的召回率（Recall），解决了传统家系工具往往为了降低假阳性而过度过滤真实 DNM 的问题。
*   **亲代检测受益**：即使是检测父母的变异，利用子女的信息也能提升准确率，尽管提升幅度小于子女检测。
*   **长读段表现**：在 PacBio HiFi 数据上，DeepTrio 达到了极高的 F1 分数（SNP > 0.999, Indel > 0.994）。

### 7. 优点
*   **端到端学习**：无需人工设定复杂的遗传概率公式，能够自动适应不同测序技术的误差特征。
*   **成本效益**：通过提升低覆盖度数据的表现，允许研究人员在不牺牲准确性的前提下降低测序深度，从而节省经费。
*   **灵活性**：模型可以轻松扩展到全外显子组（WES）等特定应用场景，只需更换训练数据。

### 8. 不足与局限
*   **计算成本**：尽管有优化，但处理三联体数据的计算资源消耗仍高于单样本检测。
*   **ONT 平台的局限**：在 Oxford Nanopore 数据上，DeepTrio 在 Indel 检测上的表现仍面临挑战，主要是因为 ONT 的系统性误差在家庭成员间具有相关性，容易误导模型。
*   **家系结构限制**：目前主要针对标准的三口之家（Trio），对于更复杂的大家系（如兄弟姐妹、祖父母）尚未实现直接的联合建模。

（完）
