---
title: EMS Mutation and SNP Detection in Intracellular Wolbachia Genomes
title_zh: 胞内沃尔巴克氏体基因组中的 EMS 突变与 SNP 检测
authors: "Penunuri, G. A., Pepper-Tunick, E. A., McBroome, J., Corbett-Detig, R., Russell, S."
date: 2026-03-31
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.29.714874v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 基因组中的分子研究和化学诱变
tldr: "针对专性胞内共生菌 Wolbachia 遗传操作困难的问题，本研究利用 EMS 化学诱变处理感染了 wMel 菌株的果蝇细胞系，并结合超低错误率的环状测序技术，成功在复杂的细胞群体中检测到了极低频率的诱导突变（主要是 C/G>T/A 转换）。该研究证明了在胞内基因组中进行化学诱变的可行性，并建立了突变率预测模型，为未来 Wolbachia 的功能基因组学研究和定向编辑奠定了基础。"
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-29-714874-v1/fig-001.webp\", \"caption\": \"Figure 1. Treating wMel-infected JW18 cells with EMS induces C>T and G>A mutations in the wMel genome. Representative tissue culture micrographs of wMel-infected JW18 cells A) after the control treatment and B) after EMS treatment. C) EMS mutation spectra demonstrating a large difference between control (grey) and treatment (orange-red gradient by experiment) at the canonical EMS transitions types of C>T and G>A.\", \"page\": 11, \"index\": 1, \"width\": 979, \"height\": 458}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-03-29-714874-v1/fig-002.webp\", \"caption\": \"Figure 3. EMS mutations in the wMel genome exhibit biased sequence context. A)\", \"page\": 14, \"index\": 2, \"width\": 991, \"height\": 1033}]"
motivation: 解决 Wolbachia 因专性胞内寄生导致难以进行遗传扰动和功能基因验证的挑战。
method: 采用 EMS 对感染 Wolbachia 的果蝇细胞进行诱变，并利用环状测序技术检测大规模细胞群中的低频单核苷酸多态性。
result: "成功识别出显著的 EMS 诱导突变信号（C/G>T/A 转换），并建立了不同序列背景下的基因组突变率模型。"
conclusion: 证明了 EMS 诱变结合高精度测序可有效检测胞内共生菌基因组突变，为实现 Wolbachia 的定向遗传编辑提供了可能。
---

## 摘要
沃尔巴克氏体（Wolbachia）等内共生细菌由于其专性胞内生活方式和复杂的生长需求，给遗传学和分子研究带来了重大挑战。目前对其蛋白质生物学的理解主要依赖于通过同源性推断的功能分配，这可能无法反映内共生蛋白在宿主体内发挥的具体作用。本研究通过在稳定感染的黑腹果蝇（Drosophila melanogaster）JW18 细胞系中生长的沃尔巴克氏体 wMel 菌株基因组中，成功应用并检测了化学诱变，从而解决了对稳健遗传扰动的需求。为了在突变等位基因频率极低的大型未分选细胞培养群体中准确检测 EMS 诱导的突变，我们采用了一种超低错误率的测序策略——环状测序（circle sequencing）。该技术能够可靠地检测 EMS 诱导的单核苷酸多态性（SNPs），而这些多态性通常会被标准二代测序固有的错误率所掩盖。环状测序文库构建成功揭示了处理细胞中清晰的 EMS 突变信号，其特征是经典的 C/G>T/A 转换显著富集。此外，我们提出了一个模型，用于解释在不同序列背景下观察到的全基因组 EMS 突变率。这些研究结果表明，EMS 处理可以成功地在胞内基因组中留下可检测的突变信号，并为未来开发沃尔巴克氏体基因组靶向编辑方案提供了前景。

## Abstract
Endosymbiotic bacteria such as Wolbachia pose significant challenges to genetic and molecular investigation due to their obligate intracellular lifestyle and complex growth requirements. Current understanding of their protein biology relies heavily on functional assignments inferred by homology, which may not reflect the specific roles endosymbiont proteins play within the host. This work addresses the need for robust genetic perturbation by demonstrating the successful application and detection of chemical mutagenesis in the genome of the wMel strain of Wolbachia grown within a stably infected Drosophila melanogaster JW18 cell line. To accurately detect EMS-induced mutations in a large, unsorted cell culture population, in which mutations remain at very low allele frequency, we implemented an ultra-low error rate sequencing strategy, circle sequencing. This technique enables confident detection of EMS-induced single nucleotide polymorphisms (SNPs) that would be swamped by the inherent error rates of standard next-generation sequencing. Circle sequencing library preparations successfully revealed a clear EMS mutation signal in treated cells, characterized by a significant enrichment of canonical C/G>T/A transitions. Furthermore we present a model explaining observed EMS mutation rates across the genome for different sequence contexts. These findings show that EMS-treatment can successfully leave detectable mutation signals in intracellular genomes, and offer promise for the future development of protocols to make targeted edits in Wolbachia genomes.

---

## 论文详细总结（自动生成）

这是一份关于论文《EMS Mutation and SNP Detection in Intracellular Wolbachia Genomes》的结构化深度总结：

### 1. 核心问题与整体含义（研究动机和背景）
*   **核心问题**：如何对专性胞内共生菌——沃尔巴克氏体（*Wolbachia*）进行有效的遗传扰动和功能基因组学研究。
*   **研究背景**：*Wolbachia* 在生物防治（如控制蚊媒疾病）中具有巨大潜力，但由于其必须在宿主细胞内生存，传统的遗传操作（如基因敲除）极难实现。目前对其基因功能的认知大多基于同源性推断，缺乏直接的实验证据。
*   **研究动机**：验证化学诱变剂甲磺酸乙酯（EMS）是否能在胞内环境诱导 *Wolbachia* 基因组突变，并开发一种能够从高背景测序噪声中识别极低频率诱变信号的检测技术。

### 2. 方法论
*   **核心思想**：结合 **EMS 化学诱变**与**环状测序（Circle Sequencing）**技术。由于 EMS 诱导的突变频率远低于标准二代测序（NGS）的固有错误率，研究者通过物理手段降低测序误差。
*   **关键技术细节**：
    *   **诱变处理**：使用 0.5% v/v EMS 处理感染了 *wMel* 菌株的果蝇 JW18 细胞系。
    *   **环状测序（Circle Sequencing）**：将基因组 DNA 剪切并环化，利用滚环扩增（RCA）产生包含多个串联重复单元的 DNA 分子。
    *   **共识序列构建**：通过比对同一原始分子的多个重复拷贝，构建“共识序列”。只有在所有重复中均出现的变异才被视为真实突变，从而将测序错误率降低了几个数量级。
    *   **生物信息流程**：开发了基于 Snakemake 的自动化流程，使用 BWA-MEM 进行参考基因组比对，并利用自定义脚本进行变异调用。
*   **统计模型**：采用**负二项广义线性模型（Negative Binomial GLM）**来估计样本间的突变率，并使用 log(depth) 作为偏移量（offset）来校正测序深度差异。

### 3. 实验设计
*   **实验对象**：稳定感染 *wMel* 沃尔巴克氏体的黑腹果蝇 JW18 永生化细胞系。
*   **实验分组**：
    *   **处理组**：EMS 处理 3 天、5 天、7 天（共 18 个样本）。
    *   **对照组**：模拟处理（Mock treatment，共 10 个样本）。
*   **Benchmark/对比**：
    *   以对照组的背景突变率（包含自发突变和残留的测序错误）作为基准。
    *   对比了不同的序列背景模型（Positional, 3-mer, 5-mer, 7-mer, Positional-3-mer）以评估 EMS 突变的序列偏好性。
    *   结合已发表的 RNA-seq 数据分析突变率与基因转录水平的相关性。

### 4. 资源与算力
*   **测序平台**：使用两条 Illumina HiSeq 4000 通道（Lanes），进行 150-bp 双端测序。
*   **数据规模**：总计产生约 46.9 亿条原始读段（Reads），估计来源于约 6.2 亿个 RCA 产物。
*   **算力说明**：文中未明确提及具体的 GPU 型号或训练时长。由于主要涉及序列比对和统计建模（GLM），其计算压力主要集中在 CPU 集群和内存上，而非深度学习所需的 GPU 算力。

### 5. 实验数量与充分性
*   **实验规模**：共使用了 28 个独立文库（18 处理 + 10 对照），样本量对于此类高深度测序研究较为充分。
*   **验证方法**：采用了 **5 折交叉验证（5-fold Cross-Validation）** 来评估不同序列背景模型的预测性能，确保了模型评估的客观性。
*   **公平性**：通过背景减除（Background Subtraction）和 5-mer 含量标准化，排除了基因组不同区域（如编码区 vs 非编码区）因碱基组成不同而导致的统计偏差。

### 6. 主要结论与发现
*   **突变信号显著**：EMS 处理组的突变率比对照组高出约 **4.73 倍**，且主要表现为经典的 **C/G > T/A** 转换。
*   **剂量效应**：突变率随 EMS 处理时间的增加而显著升高（3d < 5d < 7d）。
*   **分布特征**：EMS 诱导的突变在全基因组范围内基本呈**随机分布**，在编码区、非编码区、同义突变和非同义突变位点之间的绝对突变率差异极小。
*   **转录无关性**：未发现突变率与基因表达水平（TPM）之间存在显著相关性，说明 EMS 诱变不依赖于染色质的开放程度或转录活性。
*   **序列偏好**：5-mer 模型在预测突变偏好性方面表现最佳，发现突变位点上游倾向于富集 A/T 碱基。

### 7. 优点（亮点）
*   **技术突破**：首次证明了可以在胞内环境下对 *Wolbachia* 进行可检测的化学诱变，克服了专性胞内菌难以遗传操作的长期障碍。
*   **高精度检测**：成功应用环状测序技术解决了“信号被噪声淹没”的问题，为检测极低频突变提供了标准范式。
*   **模型化分析**：不仅检测到了突变，还通过多种 GLM 模型深入探讨了序列背景对诱变的影响，具有较高的学术严谨性。

### 8. 不足与局限
*   **预测能力有限**：尽管 5-mer 模型是最佳的，但其对突变位置的整体预测能力（R²）仍然较低，表明除了局部序列背景外，还有其他未被模型捕获的因素影响 EMS 诱变。
*   **应用限制**：目前仅在细胞系（*in vitro*）中完成验证，尚未在活体昆虫（*in vivo*）中演示如何筛选和稳定遗传这些突变。
*   **突变频率**：虽然检测到了信号，但对于构建饱和突变库而言，目前的突变频率可能仍需进一步优化给药方案。

（完）
