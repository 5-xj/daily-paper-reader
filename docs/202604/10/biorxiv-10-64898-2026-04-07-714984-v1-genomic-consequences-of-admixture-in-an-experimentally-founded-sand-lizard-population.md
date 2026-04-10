---
title: Genomic consequences of admixture in an experimentally founded sand lizard population
title_zh: 实验建立的沙蜥种群杂合的基因组后果
authors: "Bracamonte, S. E., Olsson, M., Wapstra, E., Lindsay, W., Lillie, M."
date: 2026-04-09
pdf: "https://www.biorxiv.org/content/10.64898/2026.04.07.714984v1.full.pdf"
tags: ["query:gene"]
score: 9.0
evidence: 沙蜥种群混合的基因组后果和遗传多样性研究
tldr: 本研究通过分析瑞典一座岛上实验性构建的沙蜥混交种群的基因组，评估基因救援对遗传多样性与适应性的影响。结果显示，与原始种群相比，混交群体遗传多样性提高、遗传负荷减少，并且引入的南瑞典基因显著促进了种群的繁殖成功，证明基因救援在保护濒危物种中的潜在长期价值。
source: biorxiv
selection_source: fresh_fetch
motivation: 研究旨在探讨基因救援对小种群遗传多样性和适应潜能的长期影响。
method: 研究者通过对瑞典一处人工混交的沙蜥种群进行低覆盖度全基因组测序和遗传谱系分析。
result: 结果显示，混交种群遗传多样性提高、遗传负荷降低，并且有更多来自南瑞典的有益遗传贡献。
conclusion: 研究表明，基因救援通过引入外来遗传多样性可长期改善受威胁种群的适应力与繁殖力。
---

## 摘要
在受到人口数量下降和人类活动导致的隔离影响而濒危的物种中，保护干预措施的需求日益迫切。小而孤立的种群尤其容易出现遗传多样性的丧失、近亲繁殖的增加以及有害突变的积累。为了促进种群的持续存在并提高其适应潜力，通过转移或补充异域个体进行遗传救援，可能是唯一可以增加遗传多样性的方法。在此，我们以瑞典一座小岛上的实验性混合种群——沙蜥群体——作为遗传救援的宝贵研究模型。该种群建成约20年前（约5-6代），其繁殖力和孵化幼体的存活率均有所提高。该种群由近岸大陆上一个近交种群的个体与来自瑞典南部多个种群的个体杂交而成。低覆盖度全基因组测序结果显示，与来源种群相比，该混合种群具有更高的遗传多样性和较低的实际遗传负担。种源分析表明，瑞典南部遗传变异的贡献较大，可能反映了来自这一地区的有利适应性变异对种群积极效应的支持作用。该体系为我们在这一模式脊椎动物种群中理解遗传救援的长期基因组后果提供了宝贵的实证见解。

## Abstract
Conservation interventions are increasingly required for species threatened by population declines and isolation due to anthropogenic pressures. Small, isolated populations are particularly vulnerable to the loss of genetic diversity, increased inbreeding, and the accumulation of deleterious mutations. Translocations or supplementation of allopatric individuals for genetic rescue may be the only way to increase genetic diversity to increase population persistence via increased adaptive potential. Here, we use an experimentally admixed population of sand lizards on a small island in Sweden as a valuable model of genetic rescue. This population was established approximately 20 years ago (5-6 generations) resulting in increased fecundity and hatchling viability. This population was founded from crossings between individuals from an inbred population from the nearby mainland and individuals sourced from populations in southern Sweden. Low-coverage whole-genome sequencing revealed elevated genetic diversity and reduced realized genetic load in this admixed population relative to the source populations. Ancestry analyses indicated a greater contribution of southern Swedish genetic variation, potentially reflecting contribution of beneficial adaptive variation from this region that may underlie the positive population effects. This system provides valuable empirical insights into the long-term genomic consequences of genetic rescue in this model vertebrate population.

---

## 论文详细总结（自动生成）

# 《实验建立的沙蜥种群杂合的基因组后果》论文总结

---

## 一、研究核心问题与背景

- **核心问题**：探讨“基因救援”（genetic rescue）在小种群保护中的长期基因组后果。具体而言，本研究评估了人为建立的沙蜥（*Lacerta agilis*）杂交种群，在约 20 年（5–6 代）后遗传多样性、遗传负荷及适应性变化情况。  
- **研究动机**：  
  - 全球生境破碎化和人为干扰导致物种种群规模下降、基因流阻断、近交增多；  
  - 小种群常积累有害突变且缺乏适应潜力；  
  - “转移/补充异源个体”是一种提高遗传多样性的保护策略，但其长期结果尚不清楚。  
- **研究对象**：瑞典西南海岸一座岛屿（Stora Keholmen）上的实验混交沙蜥种群，由高度近交的大陆种群 Asketunnan 与来自南瑞典的外来个体杂交建立。

---

## 二、方法论与技术路线

### 1. 核心思路

- 利用低覆盖度全基因组测序，比较实验混交种群与源种群在**遗传多样性、种群结构、遗传分化、遗传负荷**等方面的差异；
- 分析“遗传救援”在 5–6 代后是否仍维持较高遗传多样性；
- 追踪南瑞典与本地基因在杂交群体中的相对贡献。

### 2. 关键技术流程（文字说明）

- **采样范围**：两地取样——Asketunnan（大陆近交源种）与 Stora Keholmen（混交群体）；同时引入南瑞典多个参考群体（Löderup、Drakamöllan、Taberg）。
- **测序与预处理**：Illumina NovaSeq 6000 平台，平均测序深度约 2.16×；数据去重、比对至沙蜥参考基因组（GCF_009819535.1）。
- **变异推断与基因型填补**：
  - 采用 ANGSD 生成基因型似然；  
  - 使用 STITCH 与 Beagle 进行低覆盖深度的基因型插补和缺失填充；  
  - 保留信息评分 > 0.4、Hardy–Weinberg p > 1e-6 的位点。
- **群体遗传结构分析**：
  - PCAngsd 主成分分析；  
  - NGSadmix 推断混合比例，evalAdmix 评估模型拟合；  
  - PCadapt 检测与群体分化相关的基因组窗口。
- **遗传多样性分析**：
  - 使用 ANGSD 和 realSFS 估算异质度、核苷酸多样性 (π)、Tajima’s D；  
  - 在 50 kb 滑动窗口中扫描选择信号与分化异常区段。  
- **遗传负荷评估**：
  - 通过 SnpEff / SnpSift 注释变异影响，分别计算“掩盖负荷”（杂合突变比例）和“实现负荷”（有害突变纯合比例）。
- **功能富集（GO）分析**：对分化或选择的异常窗口进行 GO 富集，识别相关生物过程。

---

## 三、实验设计

- **数据来源与分组**：
  - Asketunnan 历史样本（1998/99，n=130）、现代样本（2011/12）；  
  - Stora Keholmen 混交种群样本（2017/18，n=112）；  
  - 南瑞典参考群体数据来源于早期研究（Lillie et al., 2025）。  
- **时间跨度**：覆盖沙蜥混交种群成立约 20 年后的现状。  
- **Benchmark 与对比策略**：
  - 以原大陆种群（Asketunnan）为主要对照；  
  - 以多南瑞典群体为辅助参考，比对基因渊源与混合比例。  
- **统计衡量指标**：异质度、核苷酸多样性、Tajima’s D、FST、遗传负荷比例、祖源成分比例。

---

## 四、资源与算力

- **测序平台**：Illumina NovaSeq 6000（S2 lane，单次可加载 65 个样品）；  
- **计算平台**：分析依托瑞典国家高性能计算资源（NAISS/UPPMAX）；  
- **算力细节**：论文未具体说明 GPU/CPU 型号、节点数或耗时，但提到“对 RAM 和 CPU 要求极高”，表明计算量较大；无明确训练或运行时间报告。

---

## 五、实验数量与充分性

- **主要分析模块**包括：
  1. 群体结构分析（多 K 值测试、多次重复取样）；
  2. 祖源比例推断；
  3. 遗传多样性、π、Tajima’s D 统计；
  4. FST 分化扫描与窗口级 outlier 检测；
  5. 功能富集分析；
  6. 遗传负荷评估（不同突变影响等级）。  
- **实验充分性评估**：  
  - 多时段、两种群比较 + 多参照群，实验设计完整且可复现；  
  - 采用多统计工具交叉验证结果；  
  - 图表丰富（PCA、Admixture、基因组分布、负荷分析等）；  
  - 未包含严格的“实验重复”或时间序列验证，对动态变化的结论需进一步跟踪。

---

## 六、主要结论与发现

1. **显著提高的遗传多样性**：  
   - 混交群体异质度与核苷酸多样性约为原种群的两倍。  

2. **遗传负荷下降**：  
   - 混交种群中有害突变在杂合与纯合状态的比例更平均，表现为更低的“实现负荷”；  
   - 原大陆种群的突变多数已纯合化，负荷更高。

3. **种群结构结果**：  
   - PCA/Admixture 显示混交群体与原种群清晰分离，但保留部分 Asketunnan 血统；  
   - 南瑞典基因群的贡献较大（约占 >50% 片段）。

4. **选择与进化状态**：  
   - Stora Keholmen 群体 Tajima’s D 接近 0，提示处于突变–漂变平衡；  
   - 负 Tajima’s D 窗口较多，可能反映近期选择与稀有等位基因积累。

5. **生态与繁殖实证对应**：  
   - 混交群体在近 20 年后仍保持高生存率、无形态畸形，繁殖成功率显著提升。

---

## 七、研究优点与创新点

- **实证样本稀有性高**：少见的长期（>20 年）实验性混交野生脊椎动物模型；  
- **低覆盖全基因组方案成本效益优良**：验证低深度测序在保护生物学中的可行性；  
- **综合分析框架**：结合结构、选择、负荷、功能注释等多尺度评估；  
- **现实保护启示强**：为遗传救援策略提供可量化的基因组证据支持；  
- **计算与生物学结合紧密**：通过祖源“基因组涂绘”（ancestry painting）直观展示遗传贡献分布。

---

## 八、不足与局限

- **时间序列局限**：缺乏创始代（F0）和中间代遗传数据，无法直接追踪演化动态；  
- **样本范围有限**：主要集中于一个岛屿与一个大陆源种群，代表性受限；  
- **低覆盖测序限制**：虽然成本低，但会降低部分变异检测的准确性；  
- **计算资源门槛高**：虽然经济，但计算需求大，对普通保护机构应用造成障碍；  
- **生态因子未量化**：未系统分析环境（捕食、资源）变化在基因多样性维持中的作用。

---

**结论总体评价**：  
该研究以沙蜥实验群为模型，证明基因救援能够在生态时间尺度上有效增加遗传多样性、降低有害突变，实现长期且稳定的适应潜力提升；为濒危物种保护中的基因混交提供了可验证的实证模板。

---

（完）
