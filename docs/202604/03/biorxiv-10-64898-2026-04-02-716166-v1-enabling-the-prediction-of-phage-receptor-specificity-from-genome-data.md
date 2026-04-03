---
title: Enabling the prediction of phage receptor specificity from genome data
title_zh: 实现基于基因组数据的噬菌体受体特异性预测
authors: "Moriniere, L., Noonan, A. J. C., Kazakov, A., Pena, M., Svab, M., Rivera-Lopez, E. O., Maucourt, F., Johnson, M. S., Roux, S., Koskella, B., Deutschbauer, A. M., Dudley, E. G., Mutalik, V. K., Arkin, A. P."
date: 2026-04-02
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.02.716166v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 从基因组序列数据预测噬菌体受体特异性
tldr: 本研究针对从基因组序列预测噬菌体受体特异性这一难题，通过对255种大肠杆菌噬菌体进行1050次全基因组遗传筛选，建立了大规模表型数据集。利用比较基因组学、AlphaFold3建模及机器学习，实现了无需预先注释即可从序列预测受体。该模型在独立验证中表现优异，并成功应用于NCBI数据库。研究还通过结构域交换和单氨基酸突变验证了预测的准确性，为噬菌体治疗和微生物组工程提供了重要工具。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-716166-v1/fig-001.webp\", \"caption\": \"Figure 1. Overview of the experimental workflow, biological resources, and genome-wide-screen datasets generated. (A) Schematic of the experimental and computational workflow developed to characterize and predict phage receptor specificity from genome data. A collection of 255 phages has been tested in high-throughput liquid assays on 3 genome-wide libraries. Results were interpreted to assign one or multiple host receptors to each phage, and subsets of readouts were validated by determining the EOP on single-gene deletion or overexpression mutants. Phenotype-informed comparative genomics was then used to identify putative receptor-binding protein (RBP) genes in the phage genomes, while an unsupervised machine learning-based strategy was applied to identify predictive k-mer features in phage proteomes associated with specificity towards 13 of the 19 receptor classes. Interactions between the putative RBPs and outer membrane protein (OMP) host receptors were modelled with AlphaFold3 and predictive k-mers were mapped on cognate RBP-receptor pairs. Receptors were predicted on phage genomes retrieved from the NCBI database, and a subset of phages were acquired to experimentally validate the predictions and improve the models. Receptor-switching experiments were conducted by swapping RBPs between phages to demonstrate causality and show that receptor specificity can be rationally reprogrammed. (B) vConTACT2 gene-sharing network of 1,875 E. coli dsDNA phages from the NCBI GenBank database and the 255 phages in our collection. Phages used in this study are circled in black, and colored by their taxonomy\", \"page\": 3, \"index\": 1, \"width\": 979, \"height\": 635}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-716166-v1/fig-002.webp\", \"caption\": \"Figure 3. Modeling strategy and predictions across 1,875 NCBI E. coli phages. (A) Schematic of the iterative modeling strategy. An initial set of 206 phage proteomes was split into k-mer features and host receptor(s) were assigned to phages based on RB-TnSeq data. Unsupervised modeling of 13 independent binary classifiers selected predictive features for each receptor class. Predictions were made in 18,398 Caudoviricetes phage genomes from the NCBI GenBank database, and a testing subset of 49 new phages was acquired to experimentally validate the predictions. The resulting RB-TnSeq and genome data were used to re-train the final models on a set of 255 phages. (B) Receiver operating characteristic (ROC) curves showing the sensitivity (true positive rate) and specificity (true negative rate) of the 8 OMP-specific and the NGR-specific binary classifiers. (C) vConTACT2 gene-sharing network displaying predictions of 9 binary classifiers (8 OMPs and NGR) across 1,875 E. coli dsDNA phages from the NCBI GenBank database and the 255 phages in our collection. Phages included in the initial training set (206 phages) are represented with a circle, while phages selected for the testing subset (49 phages) are indicated by a diamond. Colors indicate the predicted receptor for NCBI phages or experimentally determined receptor for phages in the training and testing subsets.\", \"page\": 12, \"index\": 2, \"width\": 979, \"height\": 825}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-04-02-716166-v1/fig-003.webp\", \"caption\": \"Figure 4. Receptor-switching experiments through RBP swapping in Straboviridae phages. (A) Schematic representation of the Gp38 and Gp12 variant combinations in the wild-type (CM8,\", \"page\": 13, \"index\": 3, \"width\": 979, \"height\": 516}]"
motivation: 由于缺乏大规模实验表型数据，从基因组序列直接预测噬菌体结合的受体一直是一个极具挑战性的难题。
method: 通过对255种大肠杆菌噬菌体进行1050次全基因组遗传筛选，并结合AlphaFold3结构建模与机器学习构建预测模型。
result: "模型在独立验证中实现了100%的精确率和超过80%的召回率，并成功为NCBI中1050个噬菌体基因组分配了受体。"
conclusion: 研究证明了大规模系统表型分析可实现基于序列的分子相互作用预测，对噬菌体医学和微生物组工程具有重要价值。
---

## 摘要
仅凭基因组序列预测噬菌体结合的受体一直是一项棘手的挑战，这主要是因为训练和验证预测模型所需的实验表型数据规模不足。在本研究中，我们通过对 255 种分类学上多样化的大肠杆菌（Escherichia coli）双链 DNA（dsDNA）噬菌体进行 1,050 次全基因组遗传筛选，解决了这一问题，并将 193 种噬菌体分配到了 19 个受体类别的宿主受体中。比较基因组学和 AlphaFold3 结构建模将特异性的序列决定因素解析为特定的受体结合蛋白结构域和单个残基。在该数据集上训练的机器学习模型仅凭噬菌体基因组序列即可预测宿主受体身份，无需预先标注受体结合基因。在 49 种独立验证的噬菌体上实现了完美的精确率和超过 80% 的召回率，并为 NCBI 中 1,875 个大肠杆菌噬菌体基因组中的 1,050 个提供了预测结果。结构域交换按预期重定向了受体特异性，且单个氨基酸替换被证明对于在两种不同孔蛋白之间切换识别既是必要的也是充分的。这些结果表明，大规模的系统表型分析使基于序列的分子相互作用特异性预测变得可行，这对基于噬菌体的医学、微生物组工程以及从序列推断宿主-病原体相互作用结果的更广泛挑战具有直接意义。

## Abstract
Predicting which receptor a phage binds to from genome sequence alone has remained an intractable challenge, principally because the experimental phenotypic data required to train and validate predictive models have not been available at sufficient scale. Here we address this by conducting 1,050 genome-wide genetic screens across 255 taxonomically diverse Escherichia coli dsDNA phages, assigning host receptors to 193 phages across 19 receptor classes. Comparative genomics and AlphaFold3 structural modelling resolved the sequence determinants of specificity to defined receptor-binding protein domains and individual residues. Machine learning models trained on this dataset predicted host receptor identity from phage genome sequence alone without prior annotation of receptor-binding genes, achieving perfect precision and greater than 80% recall on 49 independently validated phages, and yielding predictions for 1,050 of 1,875 E. coli phage genomes in NCBI. Domain swaps redirected receptor specificity as predicted, and a single amino acid substitution proved both necessary and sufficient to switch recognition between two distinct porins. These results demonstrate that systematic phenotyping at scale makes sequence-based prediction of molecular interaction specificity tractable, with direct implications for phage-based medicine, microbiome engineering and the broader challenge of inferring host-pathogen interaction outcomes from sequence.

---

## 论文详细总结（自动生成）

这篇论文题为《实现基于基因组数据的噬菌体受体特异性预测》（Enabling the prediction of phage receptor specificity from genome data），由加州大学伯克利分校和劳伦斯伯克利国家实验室的研究团队发表。以下是对该论文的结构化总结：

### 1. 核心问题与研究动机
*   **核心问题**：如何仅通过基因组序列准确预测噬菌体识别并结合的宿主受体。
*   **研究动机**：噬菌体与细菌的相互作用始于受体结合蛋白（RBP）对细菌表面受体的识别。虽然这一过程决定了噬菌体的宿主范围和治疗潜力，但由于缺乏大规模、系统性的实验表型数据来训练预测模型，从序列推断受体特异性一直是一个未解决的难题。

### 2. 方法论
*   **核心思想**：通过高通量遗传筛选建立“基因型-表型”关联库，结合结构建模和机器学习实现自动化预测。
*   **关键技术细节**：
    *   **全基因组筛选**：利用随机条形码转座子位点测序（RB-TnSeq）和双条形码鸟枪法表达库测序（Dub-seq）技术，在大肠杆菌 BW25113 和 BL21 库中进行大规模筛选，识别影响噬菌体感染的关键宿主基因。
    *   **比较基因组学与结构建模**：利用 AlphaFold3 对预测的 RBP 与宿主外膜蛋白（OMP）的相互作用进行建模，定位结合界面。
    *   **机器学习模型（GenoPHI 框架）**：将噬菌体蛋白质组表示为氨基酸 k-mer 特征矩阵，采用递归特征消除（RFE）和梯度提升决策树（Gradient-Boosted Decision Trees）训练 13 个独立受体类别的二元分类器。
    *   **无需注释预测**：模型直接以全基因组序列为输入，无需预先标注 RBP 基因。

### 3. 实验设计
*   **数据集**：
    *   **训练集**：255 种分类多样的大肠杆菌 dsDNA 噬菌体（涵盖 10 个科、50 个属）。
    *   **验证集**：从 NCBI 数据库中筛选并新获取的 49 种独立噬菌体。
    *   **应用集**：NCBI GenBank 中的 1,875 个大肠杆菌噬菌体基因组。
*   **Benchmark/对比**：
    *   通过效率滴定实验（EOP）对筛选出的高分基因进行交叉验证（超过 2,000 次观察）。
    *   将机器学习预测的特征与比较基因组学识别的结构域进行对比验证。

### 4. 资源与算力
*   **算力说明**：文中提到使用了 AlphaFold Server 进行结构建模，测序采用了 Illumina MiSeq 和 Oxford Nanopore 技术。
*   **明确性**：论文**未明确说明**具体的 GPU 型号、数量或机器学习模型的总训练时长。

### 5. 实验数量与充分性
*   **实验规模**：进行了 **1,050 次全基因组筛选**（763 次 RB-TnSeq 和 287 次 Dub-seq），测试了超过 190 万个独特的“基因-噬菌体”组合。
*   **充分性评价**：实验设计非常充分且具有高度客观性。研究不仅涵盖了广泛的分类学多样性，还通过独立验证集（49 种新噬菌体）和合成生物学手段（RBP 交换和单点突变实验）验证了预测特征的因果关系。

### 6. 主要结论与发现
*   **预测精度**：模型在独立验证集中实现了 **100% 的精确率（Precision）**和超过 **80% 的召回率（Recall）**。
*   **受体图谱**：解析了 193 种噬菌体的受体，涵盖 19 类受体（包括 OMP、LPS 核心糖和多糖）。
*   **关键决定因素**：发现受体特异性编码在模块化序列中。通过实验证明，**单个氨基酸替换（如 Q206L）**足以改变噬菌体对不同孔蛋白（OmpF 与 OmpW）的识别。
*   **大规模应用**：成功为 NCBI 中 1,050 个此前缺乏标注的大肠杆菌噬菌体基因组分配了受体预测。

### 7. 优点与亮点
*   **规模化表型分析**：通过高通量筛选解决了训练数据匮乏的瓶颈。
*   **多维度验证**：结合了遗传筛选、计算建模、机器学习和基因编辑工程，形成闭环验证。
*   **端到端预测**：无需人工注释 RBP 即可从原始序列预测功能，具有极强的实用性。
*   **交互式资源**：建立了 [Phage Datasheets](https://iseq.lbl.gov/PhageDataSheets/Ecoli_phages/) 平台，开放了所有实验数据。

### 8. 不足与局限
*   **宿主范围限制**：目前主要集中在大肠杆菌及其衍生菌株，对于具有复杂 O-抗原或荚膜多糖的其他致病菌（如肺炎克雷伯菌、铜绿假单胞菌）的覆盖尚在起步阶段。
*   **模型泛化风险**：虽然在 49 种噬菌体上表现优异，但对于训练集中未包含的极少数稀有噬菌体类群，预测召回率仍有提升空间。
*   **环境因素**：实验主要在实验室标准条件下完成，未考虑复杂环境（如肠道或土壤）对受体表达和结合的影响。

（完）
