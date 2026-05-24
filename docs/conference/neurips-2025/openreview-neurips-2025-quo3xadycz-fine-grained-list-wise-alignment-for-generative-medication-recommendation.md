---
title: Fine-grained List-wise Alignment for Generative Medication Recommendation
title_zh: 用于生成式药物推荐的细粒度列表级对齐
authors: "Chenxiao Fan, Chongming Gao, Wentao Shi, Yaxin Gong, Zhao Zihao, Fuli Feng"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=Quo3XadYcZ"
tags: ["query:llm-sr"]
score: 7.0
evidence: 利用LLM进行药物推荐，列表级对齐
tldr: 现有药物推荐系统忽视药物协同作用和相互作用，本文提出FLAME框架，利用LLM逐步生成药物列表，并设计基于GRPO的逐步奖励塑造来优化每步决策。实验证明该方法能有效降低药物相互作用的同时提高推荐准确性。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-quo3xadycz/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-quo3xadycz/fig-002.webp\", \"caption\": \"\", \"page\": 2, \"index\": 2, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-quo3xadycz/fig-003.webp\", \"caption\": \"\", \"page\": 2, \"index\": 3, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-quo3xadycz/fig-004.webp\", \"caption\": \"\", \"page\": 6, \"index\": 4, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-quo3xadycz/fig-005.webp\", \"caption\": \"\", \"page\": 6, \"index\": 5, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-quo3xadycz/fig-006.webp\", \"caption\": \"\", \"page\": 6, \"index\": 6, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-quo3xadycz/fig-007.webp\", \"caption\": \"\", \"page\": 6, \"index\": 7, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-quo3xadycz/fig-008.webp\", \"caption\": \"\", \"page\": 6, \"index\": 8, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-quo3xadycz/fig-009.webp\", \"caption\": \"\", \"page\": 6, \"index\": 9, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-quo3xadycz/fig-010.webp\", \"caption\": \"\", \"page\": 6, \"index\": 10, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-quo3xadycz/fig-011.webp\", \"caption\": \"\", \"page\": 6, \"index\": 11, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-quo3xadycz/fig-012.webp\", \"caption\": \"\", \"page\": 6, \"index\": 12, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-quo3xadycz/fig-013.webp\", \"caption\": \"\", \"page\": 6, \"index\": 13, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-quo3xadycz/fig-014.webp\", \"caption\": \"\", \"page\": 7, \"index\": 14, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-quo3xadycz/fig-015.webp\", \"caption\": \"\", \"page\": 7, \"index\": 15, \"width\": 512, \"height\": 512}]"
motivation: 点式预测忽略药物协同与相互作用，导致不安全的推荐。
method: 将推荐建模为序列决策，每步用LLM添加或移除药物，并用GRPO和奖励塑造优化。
result: 在真实医疗数据集上，FLAME降低了药物相互作用并提高了推荐准确率。
conclusion: 列表级对齐方法能提升药物推荐的安全性和有效性。
---

## Abstract
Accurate and safe medication recommendations are critical for effective clinical decision-making, especially in multimorbidity cases. However, existing systems rely on point-wise prediction paradigms that overlook synergistic drug effects and potential adverse drug-drug interactions (DDIs).  We propose FLAME, a fine-grained list-wise alignment framework for large language models (LLMs), enabling drug-by-drug generation of drug lists.  FLAME formulates recommendation as a sequential decision process, where each step adds or removes a single drug.  To provide fine-grained learning signals, we devise step-wise Group Relative Policy Optimization (GRPO) with potential-based reward shaping, which explicitly models DDIs and optimizes the contribution of each drug to the overall prescription. Furthermore, FLAME enhances patient modeling by integrating structured clinical knowledge and collaborative information into the representation space of LLMs. Experiments on benchmark datasets demonstrate that FLAME achieves state-of-the-art performance, delivering superior accuracy, controllable safety–accuracy trade-offs, and strong generalization across diverse clinical scenarios. Our code is available at https://github.com/cxfann/Flame.

---

## 论文详细总结（自动生成）

基于提供的论文，以下是详细的中文总结：

## 论文核心问题与整体含义（研究动机和背景）

- **问题**：现有药物推荐系统普遍采用**点式预测（point-wise）范式**，即独立评估每个药物的疗效，然后聚合高分药物形成最终处方。这种方法忽略了药物之间的**协同效应**和**潜在的不良药物相互作用（DDI）**，尤其是在多病症患者中，安全性和有效性难以兼顾。
- **背景**：随着大型语言模型（LLM）的发展，已有尝试利用其语言理解能力整合非结构化临床文本，但仍沿用点式预测逻辑，未能从根本上解决药物间依赖建模问题。因此，需要一种**列表级（list-wise）**的决策框架，将药物推荐视为生成一个**整体最优的药物集合**，同时平衡疗效与DDI风险。

## 方法论：核心思想、关键技术细节

- **核心思想**：将药物推荐转化为**序列决策过程**（drug-by-drug），每次决策添加或移除一种药物，并通过**细粒度的奖励分配**优化每一步的质量。
- **框架结构——两步式推荐**：
  1. **药物级过滤（πcls）**：基于LLM的二元分类器，为每个候选药物独立输出“是/否”，得到个性化候选子集Mp。
  2. **列表级精炼（πlist）**：基于指令（Add/Remove Drug）对Mp进行编辑，添加缺失药物、移除冗余或不安全药物，最终得到推荐列表。
- **关键技术——逐步组相对策略优化（Step-wise GRPO）**：
  - 将LLM生成的输出按药物名称分割为多个**决策步**，每步对应一个药物。
  - 定义**势函数φ(step)**，包含三部分：
    - 正确性：与真实处方集的Jaccard相似度。
    - 安全性：基于DDI图的交互风险。
    - 遵循性：候选药物集合的违规率。
  - 计算**步级优势**：$\hat{A}_{i,t} = \tilde{r}_i + \lambda (\phi(\text{step}(t)) - \phi(\text{step}(t)-1))$，其中$\tilde{r}_i$是整体列表奖励的归一化值。
  - 优势通过势差实现**基于势能的奖励塑造**，保证策略不变性（Theorem 4.1证明两种奖励公式等价）。
- **多源知识融合**：
  - 对结构化实体（诊断、手术、药物）构造**文本嵌入**和**协作嵌入**（来自RAREMed、MICRON、Mole-BERT等预训练模型）。
  - 通过可学习线性投影将协作嵌入映射到LLM表示空间，最终融合成**混合表示**输入LLM。

## 实验设计

- **数据集**：
  - 主要训练/验证/测试：**MIMIC-III**（分比4:1:1）。
  - 泛化测试：**MIMIC-IV**（时间分布偏移）和 **eICU**（外部多中心数据）。
  - DDI关系来源：**TWOSIDES**。
- **Benchmark**：对比了11种基线方法，包括：
  - 传统方法：LEAP、GAMENet、SafeDrug、COGNet、MICRON、MoleRec、RAREMed、NLA-MMR。
  - LLM方法：LAMO。
- **评估指标**：正确性（Jaccard相似度、F1分数）、安全性（DDI率）。
- **实验场景**：
  - 正确性对比（表1）。
  - 安全-准确率权衡控制（图5a）。
  - 时间泛化（图5b）和外部泛化（图5c）。
  - 消融研究（表2，12种变体）。
  - 案例分析（表3）和训练曲线（图6）。

## 资源与算力

- **硬件**：NVIDIA A100-SXM4-80GB GPU（未明确说明使用的卡数）。
- **软件**：Python 3.10, PyTorch 2.5.1, bf16 + LoRA量化, adamw_torch优化器, Unsloth + vLLM 0.7.3加速。
- **训练配置**：
  - SFT πcls：lr=5e-4, batch=128, 1 epoch。
  - SFT πlist：lr=5e-4, batch=64, 1 epoch。
  - 逐步GRPO：lr=1e-5, batch=16, num_generations=8, 1 epoch。
- **总训练时长未明确提及**，依赖1 epoch的训练设置，推测训练消耗中等。

## 实验数量与充分性

- **实验数量**：涵盖**主正确性对比（1张表，11方法）**、**安全控制（3个强基线）**、**泛化测试（2种偏移，4方法）**、**消融（12种变体）**、**案例分析（表3）**、**训练曲线**，以及附录中的数据集统计和提示模板。
- **充分性评价**：
  - 实验覆盖了多个真实数据集，基线方法全面，包括传统和LLM方法。
  - 消融实验分别检验了两步框架、逐步GRPO、多源融合的贡献，设计合理。
  - 安全控制实验展示了可调参数α对DDI的影响，泛化实验覆盖时间和机构变化。
  - 不足之处：未报告多次运行的标准差或统计显著性检验；未对超参数λ、β进行系统搜索；基线的超参数是否公平优化未详细说明。

## 主要结论与发现

1. **准确性与安全性**：FLAME在MIMIC-III上获得了最高的Jaccard（0.4836）和F1（0.6408），同时通过调整α实现可控的DDI率，优于所有基线。
2. **泛化能力**：在MIMIC-IV和eICU上，FLAME的Jaccard下降幅度小于传统方法，表明基于LLM的表示对代码漂移和机构变化更鲁棒。
3. **逐步GRPO的有效性**：相比于标准GRPO，逐步GRPO提供更密集的反馈，训练收敛更快、更稳定，且将πlist的相对提升从0.0028提高到0.0051（+82.1%）。
4. **多源融合的重要性**：同时使用结构化代码和非结构化文本显著优于只用其中一种；协作嵌入比随机嵌入提供更多有效知识。
5. **两步框架的必要性**：πcls提供个性化过滤，πlist通过列表级推理修正药物依赖关系，两者缺一不可。

## 优点

- **创新性**：将药物推荐形式化为列表级序列决策，并设计逐步GRPO实现细粒度奖励分配，突破了传统点式预测的局限。
- **理论支撑**：提供了势能奖励塑造下的策略不变性证明（Theorem 4.1）。
- **实用性**：两步框架增加了可控性（通过α调节安全-准确权衡）和可解释性（πlist的编辑操作具体可见）。
- **泛化验证**：不仅评估同分布性能，还专门设计了时间和外部泛化实验，证明了模型的鲁棒性。

## 不足与局限

- **计算成本高**：LLM的训练和推理开销大，在资源受限的临床场景（如实时、边缘设备）部署困难。
- **多模态数据处理依赖外部API**：非结构化文本（如临床笔记）的提取依赖GPT-4o，增加了不一致性和可重复性风险。
- **静态评估**：实验基于静态EHR快照，未考虑真实临床工作流的动态性（如患者状态变化、医生反馈）。
- **偏差风险**：训练数据来自美国ICU数据库，可能对特定人群（如罕见病、不同种族）存在性能偏差。
- **实验统计严谨性不足**：未报告误差棒或统计显著性检验，基线的超参数调优细节有限，可能影响结论的一般性。

（完）
