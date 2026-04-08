---
title: The human pangenome reference reduces ancestry-related biases in somatic mutation detection
title_zh: 人类泛基因组参考可减少体细胞突变检测中的祖源相关偏倚
authors: "Pham, C. V. K., Abdelmalek, F. S. A., Hua, T., Apel, E., Bizjak, A., Schmidt, E. J., Houlahan, K. E."
date: 2026-04-01
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.30.715289v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 用于遗传变异和突变检测的人类泛基因组参考
tldr: 该研究评估了人类泛基因组参考在体细胞突变检测中的作用，发现与传统线性参考相比，泛基因组显著减少了参考偏倚，提高了突变检测准确性，尤其改善了东亚人群的结果，为更公平的基因组分析提供了依据。
source: biorxiv
selection_source: fresh_fetch
motivation: 传统线性参考基因组存在种群偏倚，导致不同祖源人群体细胞突变检测准确度不均。
method: 作者利用人类泛基因组参考，对30个不同祖源的膀胱肿瘤及匹配血液样本进行全外显子组测序的体细胞突变检测基准评估。
result: "泛基因组参考在体细胞突变检测中显著优于线性参考，尤其在东亚裔样本中检测准确率提升约20%。"
conclusion: 使用人类泛基因组参考可显著提高体细胞突变检测精度并减少祖源相关偏差，值得推广应用。
---

## 摘要
常用的人类参考基因组将大量的遗传变异压缩成单一的线性基因组，其中约 70% 的序列来源于同一位供体。这些线性基因组无法涵盖全部遗传变异谱系，导致在测序读段比对时，尤其是对于线性参考基因组中代表性不足的人群个体，可能会出现错配。为了解决这一局限，人类泛基因组参考联盟（Human Pangenome Reference Consortium）发布了首个基于图结构的人类泛基因组参考草稿，该参考整合了多样的单倍型。尽管研究表明人类泛基因组在检测遗传性 DNA 变异方面具有更高的准确性，但尚不清楚这种改进是否同样适用于体细胞突变检测。在本研究中，我们系统评估了利用人类泛基因组进行体细胞单核苷酸变异（SNV）检测的性能，数据来源于 30 例全外显子测序的膀胱肿瘤及相匹配的多种族血液样本。结果显示，基于人类泛基因组参考的体细胞 SNV 检测优于线性参考，尤其是在东亚血统个体中，检测准确率平均提高约 20%。而欧洲血统个体的准确率提升幅度较小。准确率的提升归因于种系污染的减少以及参考偏倚的降低。此外，我们还证明，泛基因组能提高 SNV 检测精度，从而减少依赖多个工具共识的高耗时、高计算量集成方法的需求。最后，我们在额外的 29 例肺腺癌肿瘤中验证了使用泛基因组比对所得的高精度结果，尤其是在东亚血统个体中仍保持一致。这些发现支持采用泛基因组以改进体细胞变异检测并减少与祖源相关的偏差。

## Abstract
Commonly used human reference genomes collapse extensive genetic variability into a single linear genome of which 70% is derived from one donor. These linear genomes fail to capture the full spectrum of genetic variation, which can lead to misalignment of sequencing reads particularly for individuals underrepresented by the linear reference genomes. To address this shortcoming, the Human Pangenome Reference Consortium released the first draft of the human pangenome reference, a graph-based reference that integrates diverse haplotypes. While the human pangenome reference has shown increased accuracy in detecting inherited DNA variants, it remains to be seen if the observed improvements extend to somatic mutation detection. Here, we systematically benchmarked somatic single nucleotide variant (SNV) detection leveraging the human pangenome in 30 whole exome sequenced bladder tumours with matched blood tissue of diverse ancestries. We found somatic SNV detection leveraging the human pangenome reference outperformed the linear reference, most notably in individuals of East Asian ancestry where we observed on average a 20% improvement in detection accuracy. Improvements to detection accuracy in individuals of European ancestry were marginal. The increase in accuracy was attributed to reduced germline contamination and reduced reference bias. Further, we demonstrate the pangenome increases SNV detection precision, mitigating the need for time and computationally expensive ensemble approaches that take the consensus across multiple tools. Finally, we demonstrate that the increased precision when aligned to the pangenome generalized to an additional 29 lung adenocarcinoma tumours, particularly for individuals of East Asian ancestry. These findings support adoption of the pangenome to improve somatic variant detection and reduce ancestry-related disparities.

---

## 论文详细总结（自动生成）

# 人类泛基因组参考可减少体细胞突变检测中的祖源相关偏倚 — 中文深度总结

---

## 一、研究核心问题与整体背景

- **核心问题**：传统的线性人类参考基因组（如 GRCh38）主要源自单一或少数供体（其中约 70% 来自一位欧洲血统供体），无法充分表达人类群体整体的遗传多样性。这种不充分的代表性导致不同祖源人群在 DNA 测序中的读段比对存在系统性偏差，从而引起体细胞突变检测的准确性差异，尤其对非欧洲裔人群不利。
- **研究动机**：为消除这种偏倚并提高各祖源人群的变异检测公平性，Human Pangenome Reference Consortium 推出了图结构的人类泛基因组参考，整合了来自多种族个体的 47 份二倍体组装。本研究旨在评估泛基因组在 **体细胞单核苷酸变异（Somatic SNVs）检测**中的表现，并验证其能否降低与祖源相关的检测偏倚。

---

## 二、方法论与技术思路

- **核心思想**：将肿瘤与匹配正常组织的测序数据同时比对到两种参考体系（传统线性参考 GRCh38 与图结构泛基因组参考 CHM13-T2T），比较体细胞突变检测的准确性与一致性。
- **关键技术环节**：
  1. **比对阶段**：利用图参考基因组进行序列对齐，以更好地匹配不同祖源的单倍型差异。
  2. **投影阶段**：由于现有的变异检测工具无法直接在图结构上运行，作者将泛基因组比对结果“投影”回线性坐标系，以保持改进的比对质量同时兼容现有算法。
  3. **突变检测**：在比对结果上运行 3 种主流体细胞变异检测工具：
     - Strelka2  
     - Mutect2  
     - SomaticSniper
  4. **基准验证（Benchmarking）**：以 TCGA 的 **MC3 高置信突变集**作为黄金标准，对比各工具的 **Precision、Recall、F1-score**。
  5. **误差分析**：进一步评估 **种系污染（germline contamination）** 和 **参考偏倚（reference bias）** 对结果的影响。
  6. **扩展验证**：在另一个独立的肺腺癌（LUAD）队列中验证泛基因组的普适性。

---

## 三、实验设计

- **数据来源**：
  - 30 个膀胱癌（Bladder carcinoma, BLCA）样本（肿瘤+匹配血液），均来自 TCGA。
  - 29 个肺腺癌（Lung adenocarcinoma, LUAD）样本，亦来自 TCGA。
- **祖源分布**：
  - 每个队列均包含 10 名欧洲血统、10 名非洲血统、10 名东亚血统个体（LUAD 队列中东亚人数为 9）。
- **评测流程**：
  - 使用相同的测序覆盖度、肿瘤纯度和分析流程。
  - 对比泛基因组参考与线性参考在 **对齐质量**（例如正确配对读段比例、“properly paired reads”）和突变检测指标（F1、Precision、Recall）上的差异。
- **Benchmark 基准集**：
  - 使用 TCGA MC3 共识突变集（综合 5 种算法的共识结果）作为“真值”。
- **对比方法**：
  - 单算法 vs 三算法共识。
  - 泛基因组 vs 线性参考。

---

## 四、资源与算力说明

- **文中未明确说明**任何 GPU 型号、数量或运行时长。
- 由于研究主要依赖外显子组数据比对和变异检测，而非模型训练，算力需求主要来自 CPU 运算与存储，相关参数未披露。
- 作者提及将提供 **Docker镜像**与 **GitHub代码**，方便在标准计算环境复现，但未公开具体硬件配置。

---

## 五、实验数量与充分性

- **实验数量与层次**：
  - 主实验：膀胱癌队列（30 样本），三种算法 × 两种参考。
  - 扩展实验：肺腺癌队列（29 样本），主要验证不同癌种与祖源的泛化性。
  - 衍生实验：
    - Germline contamination 分析。
    - Reference bias 评估。
    - Driver gene SNV 的覆盖性与真伪判断。
    - 连锁分析和肿瘤纯度控制等敏感性测试。
- **充分性与公平性**：
  - 涵盖三大祖源（欧洲、非洲、东亚），设计平衡。
  - 使用一致的处理与评估指标，较为公平。
  - 未探索拉美或南亚等更广谱人群，仍有局限。

---

## 六、主要结论与发现

1. **泛基因组参考改善了比对质量**：
   - 正确配对读段比例显著提升（p < 10⁻¹¹）。
2. **体细胞突变检测精度显著提高**：
   - Strelka2 在泛基因组环境下的 F1-score 最优。
   - 泛基因组下单算法精度可匹敌传统的多算法共识集，减少计算负担。
3. **祖源差异显著**：
   - 东亚人群的检测准确率平均提高约 **20%**；
   - 非洲人群中有中等改善；
   - 欧洲人群改进幅度最小。
4. **改进来源分析**：
   - 泛基因组有效降低了 **种系污染（约 1.8 倍减少）**；
   - 同时减少 **参考偏倚**，改善非参考等位基因的识别。
5. **跨癌种验证**：在肺腺癌队列中得到一致观察结果，说明改进具有广泛适用性。
6. **对临床的潜在意义**：使用泛基因组能减少因祖源差异导致的肿瘤突变负荷（TMB）误判，提高疾病标志物检测的公平性。

---

## 七、研究优点

- **创新性强**：首次系统评估泛基因组在体细胞突变检测中的表现。
- **设计平衡**：跨癌种、跨祖源样本设置，体现方法的普适性。
- **效率高**：减少了多算法集成的需求，提高临床检测的时间与资源效率。
- **可复现性好**：公开数据与代码容器化部署，利于复现。
- **机制解释清晰**：从比对质量、种系污染、参考偏倚三方面阐释改进来源。

---

## 八、不足与局限性

- **工具兼容性限制**：
  - 当下的体细胞突变检测算法无法直接运行于图结构比对结果，需额外投影回线性坐标，仍存在信息丢失风险。
- **应用范围有限**：
  - 研究仅聚焦于外显子组（约占全基因组 2%），对非编码区和结构变异的改进未充分评估。
- **样本覆盖有限**：
  - 未包含拉美、南亚或混合血统人群，泛化性尚待验证。
- **算法选择影响**：
  - 不同变异检测器使用不同外部资源（如 gnomAD），与泛基因组的匹配度不同，导致性能差异需进一步优化。
- **未报告算力与耗时**，难以评估实际部署成本。

---

（完）
