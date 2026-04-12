---
title: Near perfect identification of half sibling versus niece/nephew avuncular pairs without pedigree information or genotyped relatives
title_zh: 无需家系信息或已基因分型亲属的情况下近乎完美地区分半兄弟姐妹与舅甥/姑侄配对
authors: "Sapin, E., Kelly, K., Keller, M. C."
date: 2026-04-08
pdf: "https://www.biorxiv.org/content/10.64898/2026.01.06.697070v6.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 基因组生物库及利用基因型数据识别亲属
tldr: 本文提出一种用单凭基因型数据即可区分二级亲属（半同胞与叔侄/姑侄）的新方法，通过跨染色体单倍型共享特征和高斯混合模型，实现接近完美的分类效果，为大规模基因组数据库中谱系重建提供高效方案。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-01-06-697070-v6/fig-001.webp\", \"caption\": \"Figure 1: Example pedigree with two half-siblings (half-sib1, half-sib2) sharing a mother and each having a paternal first cousin (FC1, FC2), illustrating a configuration that is incompatible with an avuncular relationship between half-sib1 and half-sib2.\", \"page\": 3, \"index\": 1, \"width\": 1012, \"height\": 206}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-01-06-697070-v6/fig-002.webp\", \"caption\": \"Figure 2: Example pedigree showing that a first cousin (CA) of an avuncular relative A must also be related to the niece/nephew N .\", \"page\": 3, \"index\": 2, \"width\": 631, \"height\": 227}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-01-06-697070-v6/fig-003.webp\", \"caption\": \"Figure 4: Distribution of the posterior probability P (half − sibling) for ground-truth and unlabeled second-degree relative candidates. The dashed line indicates the threshold for half-sibling identification (P (half − sibling) > 0.5).\", \"page\": 5, \"index\": 3, \"width\": 857, \"height\": 675}]"
motivation: 当前基因组数据库中二级亲属关系难以仅凭 SNP 或年龄区分，亟需无需谱系信息的精确识别方法。
method: 研究利用跨染色体相位得到的单倍型共享特征，并用多变量高斯混合模型进行分类。
result: 研究通过验证集证明其算法能在无谱系信息情况下精确区分同父异母兄弟姐妹和叔侄/姑侄关系，准确率近乎完美。
conclusion: 该方法为大规模基因组研究中亲缘关系推断和隐性相关控制提供了稳健且可扩展的解决方案。
---

## 摘要
动机 大规模基因组生物银行包含数以千计的二级亲属，但缺乏家系谱系数据。准确区分同父异母或同母异父的半兄弟姐妹与舅甥/姑侄（avuncular）配对——它们均共享大约25%的基因组——仍然是一个重大挑战。目前基于SNP的方法依赖于总体的同源片段（Identical-By-Descent, IBD）计数和年龄差异，但这些分布间的显著重叠导致较高的错误分类率。迫切需要一种可扩展的、仅基于基因型的方法，能够在不依赖观察到的家系或表型信息的情况下解决这些二级亲缘关系中的模糊问题。

结果 我们提出了一种新颖的计算框架，利用跨染色体相位推断得到的单倍型层级共享特征，实现了对半兄弟姐妹与舅甥/姑侄配对的几乎完全区分。这些特征还可进一步区分舅甥/姑侄配对中的侄甥与叔舅/姑姨。通过使用多变量高斯混合模型（GMM）对这些特征建模，我们在生物银行规模的数据中展示了卓越的分类性能。验证的真实标注通过在高置信度的一度亲属关系构成的家系图中进行多步骤推理得到。395个真实的舅甥/姑侄配对均被正确分类，61个半兄弟姐妹配对中有60个被正确识别。以半兄弟姐妹状态为正类计算，这对应于98.4%的灵敏度和100%的特异度。我们的结果表明，该框架在其他规模相似的数据集上也能取得相当的表现。该方法为大规模基因组研究中的家谱重建及隐性亲缘关系控制提供了一种稳健、可扩展的解决方案。

联系方式 emmanuel.sapin@colorado.edu, kristen.kelly@colorado.edu, matthew.c.keller@colorado.edu

## Abstract
MotivationLarge-scale genomic biobanks contain thousands of second-degree relatives without pedigree data. Accurately distinguishing half-siblings from avuncular pairs-both sharing approximately 25% of the genome-remains a significant challenge. Current SNP-based methods rely on aggregate Identical-By-Descent (IBD) segment counts and age differences, but substantial overlap in these distributions leads to high misclassification rates. There is a need for a scalable, genotype-only method that can resolve these second-degree ambiguities without requiring observed pedigrees or phenotypic information.

ResultsWe present a novel computational framework that achieves near-complete separation of half-siblings and avuncular pairs using haplotype-level sharing features derived from across-chromosome phasing. These features also allow differentiation of nieces/nephews from aunts/uncles within avuncular pairs. By modeling these features with a multivariate Gaussian mixture model (GMM), we demonstrate exceptional classification performance in biobank-scale data. Ground-truth labels for validation were established through a multi-step inference process within a family graph constructed from high-confidence first-degree relationships. All 395 ground-truth avuncular pairs were correctly classified, and 60 of 61 half-sibling pairs were correctly identified. Treating (e.g.) half-sibling status as the positive class, this corresponds to 98.4% sensitivity and 100% specificity. Our results suggest that the framework could perform comparably on other datasets of similar size. This method provides a robust, scalable solution for pedigree reconstruction and the control of cryptic relatedness in large-scale genomic studies.

Contactemmanuel.sapin@colorado.edu, kristen.kelly@colorado.edu, and matthew.c.keller@colorado.edu

---

## 论文详细总结（自动生成）

# 论文总结  
**题目：** 无需家系信息或已基因分型亲属的情况下近乎完美地区分半兄弟姐妹与舅甥/姑侄配对  
**原文标题：** *Near perfect identification of half sibling versus niece/nephew avuncular pairs without pedigree information or genotyped relatives*  
**作者：** Sapin, E., Kelly, K., Keller, M. C.  
**日期：** 2026-04-08  
**来源：** bioRxiv  

---

## 一、核心问题与研究背景

- **研究动机：**  
  大规模基因组生物库（如 UK Biobank）中存在大量未标注的二级亲属（即整体共享约25%基因组的个体对），这些包括：
  - 半兄弟姐妹（half siblings）
  - 舅甥/姑侄（avuncular）配对  
  二者在传统SNP层面上共享IBD（Identical By Descent，按血缘同源）比例极为接近，因此难以区分。

- **科学挑战：**  
  - 目前常用方法依赖 IBD 段数量、年龄差或性别推断。
  - 但这些特征的分布重叠显著，导致高误判率。
  - 缺乏可 **仅基于基因型数据**、不依赖家系或表型辅助信息的自动化区分框架。

- **研究意义：**  
  精确识别半同胞与舅甥/姑侄对于：
  - 生物库家谱自动重建；
  - 控制隐性亲缘引入的统计偏倚；
  - 研究遗传结构与家族病风险传播模式  
  均具有重要价值。

---

## 二、方法论：核心思想与技术细节

- **核心思想：**  
  通过**跨染色体相位推断的单倍型共享模式**，提取能反映血缘关系差异的高维特征，再以**多变量高斯混合模型（GMM）**进行分类，实现二级亲属的高精度识别。

- **关键技术步骤：**  
  1. **全基因组相位（phasing）：**  
     对全样本进行跨染色体相位推断，获得单倍型信息。  
  2. **特征提取：**  
     - 统计在不同染色体上共享的单倍型片段；
     - 考察其分布形态、长度模式与跨染色体独立性；
     - 构造嵌入特征（embedding），形成个体配对的多维描述矩阵。  
  3. **特征建模：**
     - 使用多元高斯混合模型 (GMM)，假定“半同胞”和“舅甥/姑侄”各自为一个分布簇；
     - 训练时估计每一类的均值与协方差矩阵；
     - 基于后验概率 \( P(\text{half-sibling}) > 0.5 \) 阈值进行分类。  
  4. **后验推断：**  
     输出每个配对的概率值，可进一步用于不确定性分析与阈值调节。  

- **方法特征：**
  - 完全基于基因型，无需年龄、性别或家系谱。
  - 可扩展至区分舅甥/姑侄中“叔舅-侄（男）”与“姑姨-甥（女）”的方向性差异。

---

## 三、实验设计

- **数据来源：**  
  未具体指明是哪一个生物银行，但作者说明是在**大规模生物银行级别数据**上测试，数据中包含高置信度的一度亲属（parent-offspring、siblings）。
  
- **真实标注（Ground Truth）生成：**  
  - 从确知一度关系的家系网络中通过逻辑推演（关系传播）推断出可信的二级关系；
  - 最终得到：
    - 395 个真实舅甥/姑侄配对；
    - 61 个半兄弟姐妹配对。  

- **对比与验证：**
  - 与现有的IBD分布区分方法（基于SNP段长度和数量的判别）相比；
  - 使用相同的二级关系集进行性能对比。

- **评价指标：**  
  - 灵敏度（Sensitivity）；
  - 特异度（Specificity）；
  - 分类误差率；
  - 后验概率分布（如 Figure 4 所示）。

---

## 四、资源与算力情况

- **算力说明：**  
  论文文本未提供具体硬件、GPU型号、计算时间或内存需求等信息。  
  仅提及该框架可在生物库规模数据上“可扩展”运行，暗示算法计算效率较高。

---

## 五、实验数量与充分性

- **实验概况：**
  - 主要实验在一个大型基因组数据库中展开，样本包含多个已知一度亲缘的家系。
  - 共分析超过 450 组真实标注的二级配对（395 + 61）。
  - 模型性能通过后验分布全面验证。
  - 额外进行了“未标注样本”的模型预测结果展示，以测试模型泛化。
  
- **充分性分析：**
  - 尽管样本数量有限，但覆盖了关键二级关系类型；
  - 验证过程使用高置信度推理标注，风险较低；
  - 然而缺乏跨种群或不同人群的验证，可能影响普适性。

---

## 六、主要结论与发现

- 使用相位信息提取的单倍型共享特征能**几乎完美地区分**半兄弟姐妹与舅甥/姑侄配对。
- 在已验证数据中：
  - 半同胞识别灵敏度达 **98.4%**；
  - 特异度达 **100%**；
  - 所有395个舅甥/姑侄配对均正确分类。  
- 模型还可进一步区分“叔/舅–侄”关系方向性。
- 证明该框架在不依赖谱系表或辅助信息下即可用于家系结构重建与亲缘消隐控制。

---

## 七、研究优点

- **技术创新：**
  - 首次利用跨染色体单倍型共享模式解决长期存在的二级关系辨识难题。
- **模型可解释性高：**
  - GMM 提供了后验概率输出，可对不确定配对进行量化评估。
- **可扩展性与实用性：**
  - 可应用于任意生物库或基因组关联研究；
  - 不依赖年龄、性别等元数据，灵活性高。
- **性能卓越：**
  - 在真实数据中达到近乎完美的分类表现。

---

## 八、不足与局限

- **样本局限：**
  - 实验仅包含少量真实标注配对，尤其是半同胞样本数较少（61对），统计置信有限。
- **种群泛化未验证：**
  - 未展示不同族群、遗传背景或技术平台（芯片/测序方法）上的鲁棒性。
- **算力与效率未知：**
  - 论文未报告算法在大规模数据集上的具体计算开销。
- **方法边界：**
  - 仅验证了半同胞与舅甥/姑侄关系区分，对其他二级或三代关系（如堂表兄弟姐妹）未测试。

---

**（完）**
