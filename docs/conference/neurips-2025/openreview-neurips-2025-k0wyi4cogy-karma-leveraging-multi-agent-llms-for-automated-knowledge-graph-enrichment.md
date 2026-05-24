---
title: "KARMA: Leveraging Multi-Agent LLMs for Automated Knowledge Graph Enrichment"
title_zh: KARMA：利用多智能体大语言模型实现自动化知识图谱丰富
authors: "Yuxing Lu, Wei Wu, Xukai Zhao, Rui Peng, Jinzhuo Wang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=k0wyi4cOGy"
tags: ["query:ad"]
score: 8.0
evidence: 使用多智能体LLM从文本自动发现知识以丰富知识图谱
tldr: 知识图谱的手动维护难以跟上科学文献的快速增长。本文提出KARMA，一个基于多智能体大语言模型的框架，通过九个协作智能体（包括实体发现、关系抽取、模式对齐、冲突解决）自动从非结构化文本中解析、验证并整合知识到现有图谱。在1200篇PubMed文章上的实验表明，该框架有效提升了知识图谱的覆盖率和时效性，为数据与知识中的自动发现提供了直接应用。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 手动维护知识图谱难以扩展，需要自动化方法从海量科学文本中提取和整合知识。
method: 采用九个协作LLM智能体，分别负责实体发现、关系抽取、模式对齐和冲突解决，迭代处理文档。
result: 在三个领域的1200篇PubMed文章上，KARMA有效增加了知识图谱的实体和关系，保持了高准确性。
conclusion: 多智能体LLM框架可大规模自动化知识发现，显著降低人工维护成本。
---

## Abstract
Maintaining comprehensive and up-to-date knowledge graphs (KGs) is critical for modern AI systems, but manual curation struggles to scale with the rapid growth of scientific literature. This paper presents KARMA, a novel framework employing multi-agent large language models (LLMs) to automate KG enrichment through structured analysis of unstructured text. Our approach employs nine collaborative agents, spanning entity discovery, relation extraction, schema alignment, and conflict resolution that iteratively parse documents, verify extracted knowledge, and integrate it into existing graph structures while adhering to domain-specific schema. Experiments on 1,200 PubMed articles from three different domains demonstrate the effectiveness of KARMA in knowledge graph enrichment, with the identification of up to 38,230 new entities while achieving 83.1\% LLM-verified correctness and reducing conflict edges by 18.6\% through multi-layer assessments.

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义
- **研究动机**：知识图谱（KG）是现代AI系统的基础，但手动维护难以跟上科学文献的指数增长（每年超700万篇文章）。传统方法（规则、神经网络）在可扩展性、领域泛化性和一致性上存在瓶颈，尤其是面对专业术语和复杂关系时。
- **核心问题**：如何从大规模非结构化科学文本中自动、准确、一致地提取新知并整合到现有知识图谱中？
- **整体含义**：提出多智能体大语言模型（LLM）框架KARMA，将KG丰富任务分解为协作的子任务，通过LLM的推理能力实现端到端自动化，旨在解决人工维护的规模和准确性问题。

## 2. 方法论
- **核心思想**：采用九个专用LLM智能体构成流水线，每个智能体负责特定子任务，通过中央控制器协调。智能体之间交叉验证，迭代解析文档、验证知识、整合到现有图结构，同时遵循领域模式。
- **关键技术细节**：
  - **Ingestion Agent**：文档检索、格式标准化、元数据提取。
  - **Reader Agent**：分割文本段落，基于KG上下文计算相关性得分（R(sj)），过滤低相关部分（阈值δ）。
  - **Summarizer Agent**：压缩段落为简洁摘要，保留关键实体与关系，降低后续计算成本。
  - **Entity Extraction Agent**：基于LLM进行命名实体识别，并通过字典/本体过滤和嵌入空间距离归一化（公式6），将提及映射到KG规范形式；未匹配的标记为新候选实体。
  - **Relationship Extraction Agent**：对实体对进行关系分类，输出概率分布，通过阈值θr选择多标签关系（公式7-8）。
  - **Schema Alignment Agent**：将新实体/关系映射到KG现有类型，否则标记为候选新增（公式9）。
  - **Conflict Resolution Agent**：检测新三元组与KG中已有关系的逻辑冲突，通过LLM辩论判定“一致/矛盾”，矛盾则丢弃或排队人工审核（公式10-11）。
  - **Evaluator Agent**：聚合多个验证信号，计算置信度C(t)、清晰度Cl(t)、相关性R(t)，通过加权逻辑函数（公式12-14），阈值Θ决定是否集成（公式15）。
- **算法流程**：文档→IA→RA（分段+评分）→SA（摘要）→EEA（实体提取+归一化）→REA（关系分类）→SAA（模式对齐）→CRA（冲突解决）→EA（评估集成）→KG存储。数学形式化包括实体归一化、关系多标签分类、冲突检测逻辑、评估加权和阈值决策。

## 3. 实验设计
- **数据集**：来自PubMed的1200篇文章，分为三个领域：
  - 基因学（Genomics）：720篇，关注基因变异、调控元件、测序。
  - 蛋白质组学（Proteomics）：360篇，关注蛋白结构、功能、互作网络。
  - 代谢组学（Metabolomics）：120篇，关注代谢通路、代谢物分析。
- **基准与对比方法**：
  - **单智能体基线**（Single-Agent）：使用同一个LLM（GLM-4）直接生成所有三元组，无分解。
  - **不同LLM骨干**：GLM-4（9B）、GPT-4o（闭源多模态）、DeepSeek-v3（37B激活参数MoE）。每个实验所有智能体共享同一骨干。
  - **消融实验**：分别移除Summarizer、Conflict Resolution、Evaluator，保持其余部分不变。
- **评估指标**：
  - **核心指标**：平均置信度（M↑Con）、清晰度（M↑Cla）、相关性（M↑Rel）。
  - **图统计**：覆盖增益（Δ↑Cov，新实体数）、连接增益（Δ↑Con，节点度增加）。
  - **质量指标**：冲突率（R↓CR，移除的比例）、LLM正确性（R↑LC，由独立LLM判断）、QA一致性（C↑QA，基于KG问答的准确率）、人工评估（R↑HE，两位专家打分归一化到0-1）。

## 4. 资源与算力
- 文中**未明确说明**所使用的GPU型号、数量、训练时长等硬件资源。
- 所有LLM通过API调用（GLM-4、GPT-4o、DeepSeek-v3），计算成本以提示/完成token数和处理时间衡量（图3）。例如，基因学平均完成token数550.64，蛋白质组平均处理时间96.58秒。
- 未提及预训练或微调过程，仅使用现成API进行推理。

## 5. 实验数量与充分性
- **主要实验**：3个领域 × 3种LLM骨干 × 1个单智能体基线 = 12个核心配置。每个配置报告多项指标（表1）。
- **消融实验**：3个领域 × 4种设置（完整、移除摘要、移除冲突解决、移除评估器）= 12个配置（表2）。
- **成本分析**：图3展示了提示/完成token和处理时间的分布。
- **充分性评估**：
  - 实验覆盖了三个不同规模和信息密度的领域，并包含单智能体基线，对比公平（同一骨干）。
  - 消融实验系统性地检验了每个关键智能体的贡献，验证了模块设计的必要性。
  - 指标多样（核心+图统计+质量），包含LLM验证和人类评估，减少单一偏差。
  - 不足之处：未进行跨领域迁移实验或进一步扩大LLM骨干种类（如更小模型或更多MoE变体）；未与近期其他多智能体KG系统（如AutoGen、Agent-based KG构建）进行直接比较。

## 6. 论文的主要结论与发现
- KARMA能够有效自动化知识图谱丰富：在基因学从720篇文章中发现38,230个新实体，LLM验证正确率达到83.1%，冲突减少18.6%。
- **多智能体协作优于单智能体**：在三个领域的所有质量指标上，多智能体版本均显著优于单智能体基线（例如基因学RLC从0.493提升至0.831）。
- **LLM骨干选择影响显著**：
  - DeepSeek-v3在覆盖率上领先（基因学ΔCov=38,230），同时保持较高正确率。
  - GPT-4o在正确率上最优（基因学RLC=0.880），但覆盖率较低。
  - GLM-4在特定领域（代谢组学清晰度、蛋白质组学QA一致性）表现突出。
- **消融实验表明每个智能体均重要**：移除Summarizer导致噪声增加和准确率下降；移除Conflict Resolution使冲突率上升；移除Evaluator降低最终质量。
- **成本与收益权衡**：基因学因文章密度高消耗更多token，但产出覆盖增益也最大；蛋白质组处理时间更长，对应更好的知识质量。

## 7. 优点
- **模块化与可扩展性**：九个智能体职责清晰，可独立替换或升级（如更换LLM骨干、添加新本体），便于适应新领域。
- **交叉验证减少幻觉**：通过实体提取与模式对齐验证、关系提取与冲突解决辩论等多层机制，提高可靠性。
- **域自适应提示**：提示模板包含领域专用指令（如保留基因符号、浓度数值），提升专业文本处理精度。
- **多维度评估体系**：同时使用结构指标、LLM验证、人工评估和QA测试，全面衡量KG质量，避免单一指标偏差。
- **消融实验设计严谨**：系统移除各智能体并观察影响，清晰证明每个组件的价值和整体设计的必要性。
- **成本分析**：提供实际token消耗和处理时间数据，帮助用户评估资源需求。

## 8. 不足与局限
- **依赖LLM而非直接专家验证**：主要质量指标由LLM判定，可能存在同源偏差（虽然引入人工评估部分缓解）。附录A承认需要领域专家最终核实，尤其在临床应用场景。
- **领域性能差异**：代谢组学QA一致性比基因学和蛋白质组学低12.4%和11.9%，表明对稀疏、罕见关系的建模能力不足。
- **未涉及混合符号方法**：当前完全依赖LLM，未结合符号推理或规则引擎，可能遗漏严格逻辑约束。
- **计算资源未透明**：未报告GPU型号、数量、推理批大小等，难以精确复现成本。
- **对比基线单一**：仅与单智能体基线对比，未与现有自动化KG构建系统（如基于BERT的NER+RE管道、其他多智能体框架如AutoGen、CrewAI等）比较，缺乏全面 benchmark。
- **潜在偏见风险**：LLM可能带有训练数据中的偏见，导致某些实体或关系被过度提取或忽略；论文未分析这种风险及其影响。
- **实验数量有限**：虽然消融全面，但仅在一个数据集（PubMed）上验证，且领域仅为生物医学；通用性有待在其他领域（金融、法律等）测试。

（完）
