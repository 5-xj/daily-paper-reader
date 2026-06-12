---
title: "Stack: In-Context Learning of Single-Cell Biology"
title_zh: Stack：单细胞生物学的上下文学习
authors: "Dong, M., Adduri, A., Gautam, D., Wu, L., Kernick, C., Coons, M. M., Chih, Y.-C., Carpenter, C., Shah, R., Ricci-Tam, C., Tung, P.-Y., Li, N., Dobin, A., Kluger, Y., Burke, D. P., Roth, T., Roohani, Y. H."
date: 2026-06-08
pdf: "https://www.biorxiv.org/content/10.64898/2026.01.09.698608v2.full.pdf"
tags: ["query:ad"]
score: 7.0
evidence: 利用上下文学习的单细胞基础模型，实现零样本生物学发现；直接使用类大模型架构进行科学发现任务。
tldr: 单细胞转录组基础模型受限于监督训练任务，限制了生物学发现。本文提出STACK，在1.49亿人类单细胞上训练，利用表格注意力在上下文中生成细胞表示，零样本下显著优于基线。STACK可从无标签细胞进行上下文学习，预测任意条件（如化学扰动、不同供体）对目标细胞群的影响，无需微调。基于此构建Perturb Sapiens，首个全生物体扰动细胞图谱（28组织、40细胞类型、892种扰动），并在40供体14疾病T细胞数据上验证了供体特异性扰动优先排序能力。STACK建立了以细胞为上下文示例的通用学习框架，解锁单细胞生物学上下文学习能力。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有单细胞基础模型仅能执行监督训练任务，无法灵活适应新生物条件，限制了生物学发现。
method: STACK在1.49亿人类单细胞上训练，采用表格注意力机制，使每个细胞表示受其上下文细胞影响。
result: 零样本下性能超越基线；构建Perturb Sapiens全生物体图谱，涵盖28组织、40细胞类型、892种扰动；验证供体特异性扰动效果。
conclusion: STACK提出以细胞为上下文示例的通用学习框架，实现单细胞生物学上下文学习，无需任务特定微调。
---

## 摘要
基于单细胞转录组数据训练的基础模型有望识别和预测跨物种、疾病及其他生物学条件下细胞表型的多样性。然而，当前模型仅限于其监督训练条件和任务，这限制了它们在生物学发现中的应用。在此，我们提出STACK，一个在1.49亿个统一预处理的人类单细胞上训练的基础模型，该模型利用表格注意力机制，根据其上下文中的细胞信息为每个细胞生成表征。与基线模型（无论是零样本、微调还是在目标数据集上从头训练）相比，STACK在零样本设置下的下游任务中表现出显著提升。STACK能够从未标记的细胞（代表任意条件，如化学扰动或不同供体）中进行上下文学习，并预测这些条件对目标细胞群体的影响，而无需特定数据的微调。我们应用STACK生成了Perturb Sapiens——首个涵盖28种组织、40种细胞类型以及892种药物、细胞因子和遗传扰动的人类全生物体扰动细胞图谱。我们利用体外刺激谱验证了Perturb Sapiens的子集。STACK独特地实现了对供体特异性扰动效应的优先排序，我们在新收集的DiseasePert-3M数据中验证了这一能力，该数据包含来自40名供体、14种疾病的T细胞，并用11种细胞因子刺激。总体而言，STACK提出了一种新的建模框架，其中细胞本身在推理时作为指导示例，释放了单细胞生物学的通用上下文学习能力。

## Abstract
Foundation models trained on single-cell transcriptomic data offer the promise of identifying and predicting the diversity of cellular phenotypes across species, diseases, and other biological conditions. However, the current models are limited to their supervised training conditions and tasks, which limits their utility for biological discovery. Here, we present STACK, a foundation model trained on 149 million uniformly preprocessed human single cells that leverages tabular attention to generate representations for each cell informed by the cells in its context. STACK offers substantial improvements for downstream tasks in the zero-shot setting compared to baselines, whether they are zero-shot, fine-tuned, or trained from scratch on the target dataset. STACK can perform in-context learning from unlabeled cells representing arbitrary conditions, such as a chemical perturbation or a different donor, and predict the effect of those conditions on a target cell population without requiring data-specific fine-tuning. We apply STACK to generate Perturb Sapiens, the first human whole-organism atlas of perturbed cells, spanning 28 tissues, 40 cell types, and 892 drug, cytokine, and genetic perturbations. We validated subsets of Perturb Sapiens using in vitro stimulation profiles. STACK uniquely empowers prioritization of donor-specific perturbation effects, a capability we validated in our newly collected DiseasePert-3M data, comprising T cells from 40 donors across 14 diseases, stimulated with 11 cytokines. Overall, STACK presents a new modeling framework where cells themselves act as guiding examples at inference time, unlocking general-purpose in-context learning capabilities for single-cell biology.