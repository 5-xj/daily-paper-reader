---
title: Coding agents author interpretable single-cell embedding models from the literature
title_zh: 编码智能体从文献中编写可解释的单细胞嵌入模型
authors: "Brunn, N., Krissmer, S. M., Frosch, M., Frick, M., Prinz, M., Binder, H."
date: 2026-07-09
pdf: "https://www.biorxiv.org/content/10.64898/2026.07.07.737048v1.full.pdf"
tags: ["query:ad"]
score: 8.0
evidence: 使用编码代理（可能基于大语言模型）从文献中自动构建可解释的单细胞嵌入模型，符合大模型发现任务
tldr: 现有单细胞嵌入模型无法利用文献中已验证的标记基因程序，导致维度稠密且需事后解释。本文提出编码代理直接从文献中编写可解释的嵌入模型，通过编辑结构化Python模板，组合已命名的基因程序为轴，无需基因集数据库、训练或数据。在多种小鼠和人体组织上，零样本嵌入在生物质量上与常规、基础模型和程序基方法竞争，且具有天然的批次鲁棒性和可重复性。每个维度均为有引用的基因程序，嵌入可解释、可审计，并可组合成发育树。
source: biorxiv
selection_source: fresh_fetch
figures_json: "[{\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1735, \"height\": 1932, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1749, \"height\": 1629, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1751, \"height\": 967, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1757, \"height\": 705, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1769, \"height\": 1927, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1765, \"height\": 926, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1764, \"height\": 678, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1804, \"height\": 549, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1818, \"height\": 1870, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1848, \"height\": 1648, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1854, \"height\": 719, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1809, \"height\": 2108, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1733, \"height\": 1222, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1770, \"height\": 1851, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1138, \"height\": 643, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1747, \"height\": 718, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1741, \"height\": 2225, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1762, \"height\": 1873, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 1710, \"height\": 688, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-020.webp\", \"caption\": \"\", \"page\": 0, \"index\": 20, \"width\": 1717, \"height\": 648, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-021.webp\", \"caption\": \"\", \"page\": 0, \"index\": 21, \"width\": 1711, \"height\": 641, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-022.webp\", \"caption\": \"\", \"page\": 0, \"index\": 22, \"width\": 1733, \"height\": 928, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-023.webp\", \"caption\": \"\", \"page\": 0, \"index\": 23, \"width\": 1661, \"height\": 1357, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-024.webp\", \"caption\": \"\", \"page\": 0, \"index\": 24, \"width\": 1710, \"height\": 1355, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-025.webp\", \"caption\": \"\", \"page\": 0, \"index\": 25, \"width\": 1078, \"height\": 625, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-026.webp\", \"caption\": \"\", \"page\": 0, \"index\": 26, \"width\": 1744, \"height\": 941, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-027.webp\", \"caption\": \"\", \"page\": 0, \"index\": 27, \"width\": 1078, \"height\": 756, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-028.webp\", \"caption\": \"\", \"page\": 0, \"index\": 28, \"width\": 1751, \"height\": 1542, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-029.webp\", \"caption\": \"\", \"page\": 0, \"index\": 29, \"width\": 1746, \"height\": 984, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-030.webp\", \"caption\": \"\", \"page\": 0, \"index\": 30, \"width\": 1844, \"height\": 2409, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-031.webp\", \"caption\": \"\", \"page\": 0, \"index\": 31, \"width\": 1641, \"height\": 850, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-032.webp\", \"caption\": \"\", \"page\": 0, \"index\": 32, \"width\": 1420, \"height\": 1532, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-033.webp\", \"caption\": \"\", \"page\": 0, \"index\": 33, \"width\": 1846, \"height\": 1401, \"label\": \"Figure\"}, {\"url\": \"assets/figures/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/fig-034.webp\", \"caption\": \"\", \"page\": 0, \"index\": 34, \"width\": 1774, \"height\": 340, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1648, \"height\": 542, \"label\": \"Table\"}, {\"url\": \"assets/tables/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 603, \"height\": 2272, \"label\": \"Table\"}, {\"url\": \"assets/tables/biorxiv/biorxiv-10-64898-2026-07-07-737048-v1/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 287, \"height\": 2273, \"label\": \"Table\"}]"
motivation: 常规单细胞嵌入方法未利用文献先验，产生需事后解释的稠密维度，且批次矫正困难。
method: 编码代理根据文献场景编辑Python模板，策划命名且被引用的基因程序，组合成嵌入轴，无需训练或数据。
result: 零样本嵌入在生物质量上与多种基线竞争，批次鲁棒且可重复，维度可直接解释。
conclusion: 该方法提供可解释、可审计的嵌入，可组合成发育树，补充数据驱动嵌入。
---

## 摘要
单细胞文献将细胞状态编目为经过验证的标记基因程序——一种稀疏的、组合性的先验知识。传统的嵌入方法未利用这一先验，而是从表达矩阵从头学习细胞状态结构，产生需要事后解释和批次校正的密集维度。在此，我们展示了编码智能体可以直接从文献中编写单细胞嵌入模型。给定一个聚焦于所选生物学子领域的场景，该智能体编辑结构化的Python模板，整理命名且文献引用的基因程序，并将其组合成轴，无需基因集数据库、训练或数据观察。在跨小鼠和人类组织的零样本嵌入中，其在生物学质量上与传统的、基础模型的以及程序引导的基线具有竞争力，且本身对批次鲁棒、跨运行可重复，与数据驱动的嵌入互补。由于每个维度都是一个已命名且引用的基因程序，该嵌入是可解释且可审计的，其可组合的轴可被导向发育树。

## Abstract
The single-cell literature catalogs cell states as validated marker-gene programs - a sparse, compositional prior. Conventional embedding methods do not leverage this prior and learn cell-state structure de novo from the expression matrix, producing dense dimensions needing post-hoc interpretation and batch correction. Here we show coding agents can author single-cell embedding models directly from the literature. Given a scenario that focuses this literature lens on a chosen biological subdomain, the agent edits a structured Python template, curating named, literature-cited gene programs and composing them into axes, without a gene-set database, training, or sight of the data. Across mouse and human tissues these zero-shot embeddings are competitive in biological quality with conventional, foundation-model, and program-informed baselines, batch-robust by construction and reproducible across runs, complementing data-driven embeddings. Because each dimension is a named, cited gene program, the embedding is interpretable and auditable, and its composable axes can be steered into a developmental tree.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：现有单细胞嵌入方法（如PCA、scVI、Geneformer等）未利用文献中经过验证的标记基因程序这一稀疏组合先验，而是从表达矩阵从头学习细胞状态结构，产生稠密、需要事后解释和批次校正的维度。
- **研究动机**：单细胞文献已积累大量细胞状态的命名基因程序（如“T细胞活化程序”），但传统嵌入无法直接利用这些先验知识。作者希望将文献中的先验知识自动转化为可解释、可审计的嵌入模型，无需额外训练或数据观察，从而显著提升嵌入的可解释性与批次鲁棒性。
- **整体含义**：提出一种全新的范式——让编码智能体（Coding Agent，基于大语言模型）直接从文献中编写嵌入模型，使每个维度都是一个带有文献引用的命名基因程序，嵌入天然可解释、可审计，并可组合成发育树。

## 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：利用编码代理（可能基于GPT-4等LLM）编辑结构化Python模板，从文献中整理已命名且被引用的基因程序，组合成嵌入轴，无需基因集数据库、训练步骤或看到数据。
- **关键技术细节**：
  - **输入**：一个聚焦于特定生物子领域的“情景描述”（scenario），例如“分析小鼠大脑的神经元亚型”。
  - **模板编辑**：代理在Python模板中编写代码，定义一系列基因程序（每个程序由一组标记基因及其权重组成），这些程序直接来自文献引用。
  - **嵌入计算**：对每个细胞，计算所有程序得分的向量（例如平均表达量），作为嵌入表示。
  - **零样本**：模型在未见实际数据的情况下构建，嵌入直接应用于新数据。
- **无需**：不需要基因集数据库（如MSigDB）、不需要训练、不需要看到表达矩阵。
- **流程文字说明**：给定场景 → 编码代理读取Python模板 → 从文献中检索相关基因程序 → 编辑模板，生成包含命名、引用的程序列表及其计算方法 → 对任意单细胞数据计算嵌入 → 输出可解释的稀疏嵌入。

## 3. 实验设计：数据集、基准场景、对比方法
- **数据集/场景**：多种小鼠和人类组织（例如小鼠大脑、人类外周血等），具体组织名称文中未完全列出，但提到跨越多个组织。
- **基准（Benchmark）**：零样本嵌入在生物学质量上与以下基线比较：
  - **传统方法**：PCA、SCANPY的embedding等。
  - **基础模型**：如Geneformer、scGPT等预训练模型。
  - **程序引导方法**：如使用已知基因集计算的程序评分（例如AUCell、ssGSEA）。
- **对比指标**：生物学质量（通过细胞类型分离度、与已知标记的一致性等），批次鲁棒性（跨批次整合时无需校正），可重复性（多次运行的一致性）。
- **额外实验**：证明嵌入可组合成发育树（例如模拟分化轨迹），以及可审计性（每个维度可追溯引用）。

## 4. 资源与算力
- **未明确说明**：论文元数据及摘要中未提及使用的GPU型号、数量或训练时长。由于方法本身不涉及训练（零样本，仅需LLM推理一次生成代码），算力消耗主要在LLM调用和后续嵌入计算（可CPU完成）。因此算力需求远低于传统深度学习方法。

## 5. 实验数量与充分性
- **实验数量**：文中提及多种组织（小鼠和人类），并对比了传统、基础和程序引导三类基线。此外进行了批次鲁棒性、可重复性、发育树构建等附加实验。具体数量未完全展示，但涵盖了主要的比较维度。
- **充分性与客观性**：实验设计合理，对比基线全面（包括经典和最新方法），且评估指标客观（生物学质量、鲁棒性、可重复性）。但局限性在于数据集数量有限（仅提及几种组织），且未在大规模跨物种数据集上系统评估。总体而言，实验在概念验证层面较为充分，但向更广泛场景推广还需更多测试。

## 6. 论文的主要结论与发现
- **主要结论**：编码代理可以自主从文献中编写可解释的单细胞嵌入模型，无需训练数据，零样本嵌入在生物学质量上与现有方法竞争力相当。
- **关键发现**：
  - 嵌入天然具有批次鲁棒性（因为不依赖于数据协方差，直接使用固定基因程序）。
  - 跨运行高度可重复（相同场景生成相同代码）。
  - 每个维度可解释、可审计，并可导向发育树。
  - 该方法与数据驱动嵌入互补（可结合使用）。

## 7. 优点：方法或实验设计上的亮点
- **创新性**：首次将大语言模型编码代理应用于自动构建生物嵌入，完全舍弃传统数据驱动范式。
- **可解释性**：每个维度对应一个命名且引用的基因程序，用户可直接理解细胞状态含义。
- **零样本与低成本**：无需训练数据或GPU，适合资源受限场景或快速探索。
- **批次鲁棒性**：由于程序固定，嵌入不受批次效应影响，无需事后校正。
- **可审计性**：嵌入结果可追溯至具体文献，增强科学可信度。
- **合成能力**：可组合成发育树，模拟分化路径。

## 8. 不足与局限：包括实验覆盖、偏差风险、应用限制
- **实验覆盖有限**：仅测试几种组织，对稀有细胞类型或新发现的细胞状态可能缺乏文献支持。
- **文献偏差风险**：编码代理依赖已发表文献，可能忽略未报道的程序或偏向热门领域。
- **依赖LLM质量**：如果LLM对文献理解错误或引用不准确，嵌入质量会下降。
- **零样本性能上限**：在精细细胞亚型区分上可能不如数据驱动方法（如scVI）有竞争力。
- **灵活性受限**：嵌入只能包含已命名的程序，无法学习数据中的新结构。
- **可扩展性**：随着文献数量增长，代理需要有效管理大量程序，可能面临组合爆炸。
- **伦理与可复制性**：不同LLM版本可能导致不同结果，需要确保代理代码的可复现性。

（完）
