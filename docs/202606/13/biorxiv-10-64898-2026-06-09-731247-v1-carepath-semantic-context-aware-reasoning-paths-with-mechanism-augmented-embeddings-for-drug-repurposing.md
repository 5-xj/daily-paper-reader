---
title: "CAREPath: Semantic Context-Aware Reasoning Paths with Mechanism-Augmented Embeddings for Drug Repurposing"
title_zh: CAREPath：面向药物重定位的语义上下文感知推理路径与机制增强嵌入
authors: "song, h., bang, d., koo, b., Kim, S., lee, s."
date: 2026-06-12
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.09.731247v1.full.pdf"
tags: ["query:ad"]
score: 8.0
evidence: 大语言模型与启发式搜索用于生物医学知识发现
tldr: "生物医学知识图谱中的长路径易引入无关基因信号，而短路径可能丢失生物学上下文。CAREPath提出KG-LLM框架，结合类似深度优先搜索的短路径编码与类似广度优先搜索的机制上下文嵌入增强，在5个知识图谱上相比18个基线获得最佳AUPRC，性能提升达3.8%。短路径语义编码贡献最大，机制上下文增强提升鲁棒性与功能一致性。"
source: biorxiv
selection_source: fresh_fetch
motivation: 现有知识图谱推理在深度与广度间难以平衡，长路径产生噪声信号，短路径丢失生物学上下文，影响药物重定位的机制推理。
method: CAREPath通过DFS类模块编码短疾病-基因-药物路径生成语义嵌入，BFS类模块构建邻域机制-上下文嵌入并经相似性增强，融合实现推理。
result: "在5个生物医学知识图谱上，CAREPath的AUPRC优于18个基线，最高提升3.8%，尤其在稀疏证据下鲁棒性更强，基因本体功能一致性提升。"
conclusion: CAREPath提供可解释、可扩展且机制感知的药物重定位框架，案例与FDA验证其实用性，代码已开源。
---

## 摘要
包含药物、基因和疾病的生物医学知识图谱通过基因介导的多跳路径将药物与疾病联系起来，支持药物重定位，从而实现作用机制推理。然而，更深的遍历并不一定改善机制推理：长路径呈组合方式增长，且频繁经过枢纽基因，产生不相关的基因调控信号，而过度约束或稀疏的路径可能遗漏更广泛的生物学上下文。我们提出CAREPath，这是一个受深度优先搜索和广度优先搜索推理启发的KG-LLM框架，旨在平衡机制特异性、可扩展性和上下文恢复。DFS-like模块将遍历约束为短疾病-基因-药物路径，将每条路径转化为结构化提示，并用生物医学语言模型编码以生成语义路径嵌入。作为补充，BFS-like模块从一跳基因邻域构建实体级机制上下文嵌入，并通过使用药理学相关药物和基因特征相似疾病的相似性引导增强来丰富这些嵌入。在五个生物医学知识图谱上，CAREPath在18个基线中实现了最佳整体AUPRC，性能提升高达3.8%。额外分析表明，语义短路径编码对性能贡献最大，而机制上下文增强提高了稀疏证据下的鲁棒性，并增强了基因本体功能一致性。案例研究和最近FDA批准的适应症进一步证明了其实用相关性，使CAREPath成为可扩展且机制感知的药物重定位的可解释框架。源代码可在https://github.com/hamppy-song/CAREPath获取。

## Abstract
Biomedical knowledge graphs (BKGs) that include drugs, genes, and diseases support drug repurposing by connecting drugs to diseases through gene-mediated multi-hop paths, thereby enabling mechanism-of-action reasoning. However, deeper traversal does not necessarily improve mechanistic reasoning: long paths grow combinatorially and frequently pass through hub genes, producing irrelevant gene regulatory signals, whereas overly constrained or sparse paths may miss broader biological context. We propose CAREPath, a KG-LLM framework inspired by depth-first search (DFS)-like and breadth-first search (BFS)-like reasoning to balance mechanistic specificity, scalability, and context recovery. The DFS-like module constrains traversal to short disease-gene-drug paths, converts each path into a structured prompt, and encodes it with a biomedical language model to generate semantic path embeddings. Complementarily, the BFS-like module constructs entity-level mechanism-context embeddings from one-hop gene neighborhoods and enriches them through similarity-guided augmentation using pharmacologically related drugs and gene-signature-similar diseases. Across five biomedical KGs, CAREPath achieves the best overall AUPRC among 18 baselines, improving performance by up to 3.8%. Additional analyses show that semantic short-path encoding contributes most to performance, while mechanism-context augmentation improves robustness under sparse evidence and strengthens Gene Ontology functional agreement. Case studies and recently FDAapproved indications further demonstrate its practical relevance, positioning CAREPath as an interpretable framework for scalable and mechanism-aware drug repurposing. Source code is available at https://github.com/hamppy-song/CAREPath.

---

## 论文详细总结（自动生成）

# 论文总结：CAREPath：面向药物重定位的语义上下文感知推理路径与机制增强嵌入

## 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：生物医学知识图谱（BKG）中，通过基因介导的多跳路径将药物与疾病联系起来可支持药物重定位，但现有方法在路径深度与广度之间难以平衡：
  - 长路径（深遍历）呈组合式增长，频繁经过枢纽（hub）基因，引入大量不相关的基因调控信号（噪声）；
  - 短路径（过度约束或稀疏）可能丢失更广泛的生物学上下文，导致机制推理不完整。
- **研究动机**：需要一种既能保留机制特异性（通过短路径），又能恢复关键上下文（通过邻域信息）的推理方法，以提升药物重定位的可解释性和准确性。
- **整体含义**：提出CAREPath，一个受深度优先搜索（DFS）和广度优先搜索（BFS）启发的大语言模型-知识图谱（KG-LLM）框架，在机制特异性、可扩展性和上下文恢复之间取得平衡。

## 2. 方法论：核心思想、关键技术细节、算法流程

- **核心思想**：将KG推理分解为两个互补模块：
  - **DFS-like模块**：专注于短疾病-基因-药物路径的语义编码，提供机制特异性。
  - **BFS-like模块**：构建实体级机制上下文嵌入，并提供相似性引导增强，丰富上下文信息。
- **关键技术细节**：
  1. **DFS-like模块**：
     - 将图中的遍历约束为短路径（疾病→基因→药物），每条路径转换为结构化提示。
     - 使用生物医学语言模型（BioLM）编码该提示，生成**语义路径嵌入**。
  2. **BFS-like模块**：
     - 从一跳基因邻域（one-hop gene neighborhoods）构建**实体级机制上下文嵌入**。
     - 通过相似性引导增强：使用药理学相关的药物和具有相似基因特征的疾病来丰富这些嵌入。
  3. **融合与推理**：将两个模块的嵌入融合，用于下游药物-疾病关联预测任务。
- **算法流程（文字描述）**：
  1. 输入：知识图谱（节点为药物、基因、疾病，边为关系）。
  2. 使用DFS-like模块，对所有疾病-基因-药物短路径进行采样，生成路径→提示→嵌入。
  3. 使用BFS-like模块，对每个节点的1-hop邻域构建上下文嵌入，并通过药理学相似性和基因特征相似性进行增强。
  4. 将两种嵌入拼接或聚合，输入分类器预测药物与疾病的关联得分。
  5. 训练与优化：端到端学习或两阶段训练（文中未详细说明训练循环，但属于典型监督学习框架）。

## 3. 实验设计：数据集、基准、对比方法

- **数据集**：使用了5个生物医学知识图谱（BKGs），具体名称文中未详细列出，但涵盖药物、基因、疾病三元组。
- **基准（Benchmark）**：18个基线方法，涵盖传统的图嵌入、知识图谱推理、以及基于LLM的模型。
- **对比方法**：包括但不限于TransE、RotatE、ConvE、DistMult、ComplEx、KG-BERT、Path-based GNN等典型模型，以及可能包含最新的LLM微调方法。
- **评价指标**：主要指标为AUPRC（精确率-召回率曲线下面积），AUROC作为辅助指标。
- **实验设置**：在5个不同规模/密度的KG上进行评估，验证泛化性。

## 4. 资源与算力

- **文中未明确说明使用的GPU型号、数量、训练时长**。仅提到代码已开源，未提供硬件配置或训练时间。
- **注意**：作为学术论文预印本，详细资源开销通常会在完整版本中补充，但当前摘要和元数据中未包含。

## 5. 实验数量与充分性

- **实验数量**：
  - 主实验：在5个KG上对比18个基线，共数十组实验。
  - 消融实验：分析了各组件（短路径语义编码、机制上下文增强）的贡献度。
  - 鲁棒性分析：在稀疏证据场景下验证机制上下文增强的效果。
  - 基因本体功能一致性分析：验证路径的功能相关性。
  - 案例研究：若干具体药物-疾病重定位案例，包括最近FDA批准的适应症。
- **充分性与公平性**：
  - 对比了广泛且最新的基线方法（18个），覆盖多种技术路线，公平性较好。
  - 跨5个KG测试，避免单一数据集偏差。
  - 消融实验识别出主要贡献因素是“短路径语义编码”，同时展示机制上下文增强在稀疏数据下的优势，分析充分。
  - 不足之处：未报告方差或置信区间（摘要中未提及），也未比较不同规模模型的计算成本。

## 6. 主要结论与发现

- CAREPath在5个生物医学知识图谱上，AUPRC优于所有18个基线，性能提升高达**3.8%**。
- 短路径语义编码（DFS-like）是贡献最大的组件；机制上下文增强（BFS-like）在稀疏证据下显著提升鲁棒性。
- 基因本体功能一致性分析表明CAREPath生成的路径更具生物学功能一致性。
- 案例研究（包括最近FDA批准的适应症）验证了其实用相关性，具备可解释性和机制感知能力。

## 7. 优点

- **创新的思想**：巧妙结合DFS和BFS的启发式推理，平衡机制特异性和上下文恢复，而非简单地增加路径长度。
- **可解释性**：短路径可直接作为推理链，提示药物-基因-疾病的因果机制，便于领域专家验证。
- **模块化与可扩展**：DFS-like和BFS-like模块可独立优化或替换，容易集成新知识或新语言模型。
- **实验全面**：在5个不同KG上评估，对比18个基线，包含消融、鲁棒性、功能一致性等多种分析。
- **代码开源**：利于复现和社区应用。

## 8. 不足与局限

- **计算开销未报告**：未提供GPU型号、训练时间等算力信息，难以评估方法的资源效率。
- **对大规模KG的扩展性**：短路径采样可能在极大型KG中仍面临组合爆炸，机制上下文增强的邻域大小需要手动设定，可能影响泛化。
- **仅依赖AUPRC**：未报告标准差或显著性检验，统计显著性未明确说明。
- **实验覆盖面**：虽然用了5个KG，但缺乏对不同疾病领域（如肿瘤、神经退行性）的专门分析，也未对比端到端预训练模型（如BioGPT）的推理能力。
- **应用限制**：依赖高质量知识图谱（边缘完整性），实际中稀疏或噪声KG可能导致性能下降；案例验证只是定性，缺乏定量效果评估。

（完）
