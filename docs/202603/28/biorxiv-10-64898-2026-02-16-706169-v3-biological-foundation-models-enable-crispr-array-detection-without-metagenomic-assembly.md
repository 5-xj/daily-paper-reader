---
title: Biological Foundation Models Enable CRISPR Array Detection Without Metagenomic Assembly
title_zh: 生物基础模型实现无需宏基因组组装的 CRISPR 阵列检测
authors: "Schroeder, L. D., Koeksal, R., Mitrofanov, A., Uhl, M., Backofen, R."
date: 2026-03-24
pdf: "https://www.biorxiv.org/content/10.64898/2026.02.16.706169v3.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 用于宏基因组数据中CRISPR序列检测的基因组基础模型
tldr: 针对现有CRISPR检测工具在处理短读长数据和退化重复序列方面的局限性，本研究提出了一种基于基因组大模型的检测方法。通过LoRA微调，模型可直接对原始DNA序列进行逐核苷酸分类。该方法包含长短两种上下文模型，不仅能识别传统工具漏掉的退化重复，还能在无需宏基因组组装的情况下直接从Illumina读段中提取CRISPR阵列信息，显著提升了检测的鲁棒性和召回率。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-02-16-706169-v3/fig-001.webp\", \"caption\": \"Fig. 2 Zero-shot next-nucleotide prediction confidence highlights CRISPR repeat structure by Evo. Next-nucleotide prediction probabilities from the pretrained Evo model are shown across a genomic region containing a CRISPR array detected by CRISPRidentify (genome accession number APZF01000100, positions 167,361– 168,247). Nucleotides are colored by CRISPRidentify annotation, with repeats shown in red, spacers in blue, and non-array regions in grey. Prediction confidence closely matches the annotated intervals, with consistently elevated values in repeat regions and reduced values in spacers and flanking genomic background and pronounced drops at array boundaries. This alignment is consistent with the conserved and structurally constrained nature of CRISPR repeats and suggests that Evo’s pretrained representations encode CRISPR-associated sequence structure even without CRISPR-specific supervision.\", \"page\": 6, \"index\": 1, \"width\": 777, \"height\": 469}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-02-16-706169-v3/fig-002.webp\", \"caption\": \"Table 2 An example of a CRISPR array detected in accession CASA01000002 (positions 108,834–109,415), illustrating repeat and spacer organization. Repeats are shown on the left and spacers or intervening sequences on the right. Differences from the consensus repeat (as defined by CRISPRidentify) are indicated in red to mark a candidate degenerated repeat. Only nucleotide positions that deviate from the consensus are displayed for clarity.\", \"page\": 15, \"index\": 2, \"width\": 706, \"height\": 269}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-02-16-706169-v3/fig-003.webp\", \"caption\": \"Fig. 3 Per-nucleotide classification accuracy of Evo models fine-tuned to label repeat, spacer, and non-array regions is shown for different input sequence lengths. Model accuracy increases with available sequence context, indicating that longer-range information improves resolution of CRISPR array structure and boundaries. Nevertheless, the short-context model (150 nt) achieves high accuracy of 90.03%, demonstrating that CRISPR array components can be reliably classified even in highly fragmented sequences such as individual short sequencing reads.\", \"page\": 7, \"index\": 3, \"width\": 775, \"height\": 475}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-02-16-706169-v3/fig-004.webp\", \"caption\": \"Fig. 4 Overlap of validated CRISPR spacers recovered from simulated metagenomic short-read data by the short-context (150 nt) model variant and MCAAT. While MCAAT achieves higher overall spacer recall (70.89 %), our fine-tuned Evo model recovers a distinct subset of validated spacers directly from individual reads without assembly, achieving a recall of 49.12 %. Notably, 12.57 % of spacers detected by our approach are not recovered by MCAAT. This demonstrates that combining both approaches increases the total number of recovered spacers and highlights their complementary strengths for metagenomic CRISPR analysis.\", \"page\": 9, \"index\": 4, \"width\": 775, \"height\": 675}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-02-16-706169-v3/fig-005.webp\", \"caption\": \"Table 3 An example of a CRISPR array detected in accession CP034192 (positions 1,672,883–1,674,884), illustrating repeat and spacer organization. Repeats are shown on the left and spacers or intervening sequences on the right. Differences from the consensus repeat (as defined by CRISPRidentify) are indicated in red to mark a candidate degenerated repeat. Only nucleotide positions that deviate from the consensus are displayed for clarity.\", \"page\": 16, \"index\": 5, \"width\": 785, \"height\": 315}]"
motivation: 现有的CRISPR阵列检测工具难以处理高度碎片化的宏基因组数据以及包含退化重复序列的阵列。
method: 利用低秩自适应（LoRA）微调基因组基础模型，实现对DNA序列中重复序列、间隔序列和非阵列区域的逐核苷酸分类。
result: "长上下文模型准确率达98.16%并能发现退化重复，短上下文模型在无需组装的情况下可从原始读段中恢复12.57%传统方法漏掉的间隔序列。"
conclusion: 基因组基础模型为CRISPR阵列检测提供了一种无需组装且鲁棒性强的新范式，是现有生物信息学工具的重要补充。
---

## 摘要
准确识别 CRISPR 阵列对于研究原核生物的适应性免疫至关重要，然而现有工具在处理短读长测序数据以及包含退化重复序列（degenerate repeats）的阵列时面临挑战。这些局限性限制了在宏基因组和碎片化基因组数据集中的 CRISPR 分析。我们提出了一种基于基础模型的 CRISPR 阵列检测方法，旨在解决上述挑战。我们利用参数高效微调（PEFT）方法中的低秩自适应（LoRA）技术，对大型基因组基础模型进行微调，从而直接从原始输入的核苷酸序列中，对 DNA 序列进行逐核苷酸分类，将其划分为重复序列（repeat）、间隔序列（spacer）和非阵列区域。我们针对不同的序列上下文长度开发了两种模型变体。支持高达 8,192 个核苷酸序列的长上下文模型实现了 98.16% 的测试准确率，并能识别出被基于相似性的 CRISPR 检测工具所遗漏的退化重复候选序列。短上下文模型支持高达 150 个核苷酸的序列，并针对 Illumina 读段进行了优化，其准确率达到 90.03%，能够直接对单个读段进行分析而无需组装。在模拟宏基因组数据上，该模型实现了 49.12% 的间隔序列召回率，并找回了 12.57% 无法被需要宏基因组组装的专用检测方法识别的间隔序列。总之，这些结果表明，基因组基础模型为 CRISPR 阵列检测提供了一种稳健且互补的新范式。

## Abstract
Accurate identification of CRISPR arrays is essential for studying prokaryotic adaptive immunity, yet existing tools struggle with short-read sequencing data and arrays containing degenerate repeats. These limitations restrict CRISPR analysis in metagenomic and fragmented genomic datasets. We present a foundation model-based approach for CRISPR array detection that addresses both these challenges. We fine-tune a large genomic foundation model using the Parameter-Efficient Fine-Tuning (PEFT) method, Low-Rank Adaptation (LoRA) to perform per-nucleotide classification of DNA sequences into repeat, spacer, and non-array regions directly from raw input nucleotide sequences. We develop two model variants for different sequence context lengths. The long-context model supporting sequences of up to 8,192 nucleotides achieves 98.16% test accuracy and identifies degenerate repeat candidates missed by similarity-based CRISPR detection tools. The short-context model supports sequences of up to 150 nucleotides, optimized for Illumina reads, reaches 90.03% accuracy and enables direct analysis of individual reads without assembly. On simulated metagenomic data, it achieves a spacer recall of 49.12% and recovers 12.57% of spacers that are otherwise not detected by dedicated metagenomic CRISPR array detection methods which require metagenomic assembly. Together, these results demonstrate that genomic foundation models provide a robust and complementary paradigm for CRISPR array detection.

---

## 论文详细总结（自动生成）

以下是对论文《Biological Foundation Models Enable CRISPR Array Detection Without Metagenomic Assembly》的深度结构化总结：

### 1. 论文的核心问题与整体含义
*   **研究背景**：CRISPR-Cas系统是原核生物的关键适应性免疫机制。准确识别CRISPR阵列（由重复序列 Repeat 和间隔序列 Spacer 组成）对于基因编辑工具开发和微生物进化研究至关重要。
*   **核心问题**：现有的CRISPR检测工具（如CRISPRidentify, PILER-CR等）高度依赖序列相似性和共识序列比对。这导致了两个主要痛点：
    1.  **退化重复序列（Degenerate Repeats）**：当阵列中的重复序列发生突变时，基于相似性的工具往往无法识别，导致阵列截断。
    2.  **宏基因组组装依赖性**：在处理宏基因组数据时，通常需要先进行复杂的组装。组装过程不仅耗时，且容易丢失低丰度物种或复杂区域的CRISPR信息。
*   **整体含义**：本研究证明了预训练的基因组基础模型（Foundation Models）能够学习到DNA序列的深层结构特征，从而实现无需组装、对突变鲁棒的CRISPR检测新范式。

### 2. 论文提出的方法论
*   **核心思想**：利用预训练的大型基因组模型 **Evo**，通过微调使其具备逐核苷酸（Per-nucleotide）分类的能力，将DNA序列标注为“重复序列”、“间隔序列”或“非阵列区域”。
*   **关键技术细节**：
    *   **基础模型**：选用 Evo 模型，这是一个基于长序列建模架构（如 StripedHyena）的基因组大模型。
    *   **微调策略**：采用 **LoRA（低秩自适应）** 技术。这种参数高效微调（PEFT）方法仅更新极少量的额外参数，保留了预训练模型的通用生物学知识，同时降低了算力需求。
    *   **模型变体**：
        *   **长上下文模型（Long-context, 8,192 nt）**：用于分析完整的基因组片段，擅长捕捉阵列的全局结构和识别退化重复。
        *   **短上下文模型（Short-context, 150 nt）**：专门针对 Illumina 短读长测序数据优化，旨在实现无需组装的直接检测。
*   **算法流程**：输入原始DNA序列 -> Evo模型特征提取 -> LoRA微调层分类 -> 输出每个碱基的类别标签。

### 3. 实验设计
*   **数据集**：
    *   使用从 RefSeq 和 GenBank 中提取并经 CRISPRidentify 标注的高质量数据集作为基准（Ground Truth）。
    *   使用 **CAMISIM** 模拟宏基因组短读长数据，模拟真实的测序场景。
*   **Benchmark（基准测试）**：
    *   **CRISPRidentify**：作为长序列检测的黄金标准。
    *   **MCAAT**：作为宏基因组分析中基于组装的典型检测工具。
*   **对比维度**：分类准确率（Accuracy）、召回率（Recall）、间隔序列恢复数量、对退化重复序列的识别能力。

### 4. 资源与算力
*   **算力说明**：论文提到使用了 LoRA 微调技术以提高效率，但**未在摘要和核心文本中明确列出具体的 GPU 型号、数量或具体的训练总时长**。通常此类规模的模型（Evo）微调需要 A100 或 H100 等级别的显卡支持。

### 5. 实验数量与充分性
*   **实验规模**：
    *   进行了不同上下文长度（从 150 nt 到 8,192 nt）的消融实验，验证了上下文长度对准确率的影响。
    *   开展了零样本（Zero-shot）分析，通过模型预测置信度证明了预训练模型本身已内化了CRISPR结构知识。
    *   在模拟宏基因组数据集上进行了大规模测试。
*   **充分性评价**：实验设计较为全面，涵盖了从纯序列分类到实际宏基因组应用场景的转化。通过与现有最强工具的对比，证明了其在特定场景（如碎片化数据）下的优越性，实验结果具有较强的说服力。

### 6. 论文的主要结论与发现
*   **高准确性**：长上下文模型在测试集上达到了 **98.16%** 的逐碱基分类准确率。
*   **无需组装的突破**：短上下文模型（150 nt）在处理单个读段时准确率达 **90.03%**。在模拟宏基因组实验中，它成功找回了 **12.57%** 传统组装方法（MCAAT）漏掉的间隔序列。
*   **鲁棒性**：模型能够识别出传统工具因相似度过低而忽略的退化重复序列，从而提供更完整的CRISPR阵列视图。
*   **互补性**：基础模型方法与传统生物信息学工具具有互补性，结合使用可显著提升CRISPR系统的发现率。

### 7. 优点
*   **范式创新**：摆脱了对序列比对和共识序列的依赖，利用深度学习捕捉复杂的结构模式。
*   **效率提升**：跳过宏基因组组装步骤，直接从原始读段中提取生物学信息，极大地简化了分析流程。
*   **灵活性**：通过 LoRA 微调，模型可以快速适配不同的测序长度和特定的生物学任务。

### 8. 不足与局限
*   **短序列精度损失**：虽然 150 nt 模型表现不错，但相比长序列模型，其准确率仍有下降（从 98% 降至 90%），在处理极短或高度重复区域时可能存在假阳性。
*   **计算成本**：尽管使用了 LoRA，但运行大型基础模型进行逐碱基推理的计算开销仍高于传统的正则匹配或简单算法工具。
*   **黑盒特性**：作为深度学习模型，其识别退化重复的具体生物学逻辑尚不如传统工具透明，需要进一步的实验验证。

（完）
