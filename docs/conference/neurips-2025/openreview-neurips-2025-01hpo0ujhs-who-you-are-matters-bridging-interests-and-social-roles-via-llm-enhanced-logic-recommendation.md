---
title: "Who You Are Matters: Bridging Interests and Social Roles via LLM-Enhanced Logic Recommendation"
title_zh: 你是谁很重要：通过LLM增强的逻辑推荐桥接兴趣与社会角色
authors: "Qing Yu, Xiaobei Wang, Shuchang Liu, cheng.feng, Xiaoyu Yang, Xueliang Wang, Chang Meng, Shanshan Wu, HailanYang, Bin Wen, Huihui Xiao, Xiang Li, Fan Yang, Xiaoqiang Feng, Lantao Hu, Han Li, Kun Gai, Lixin Zou"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=01hPO0uJhS"
tags: ["query:llm-sr"]
score: 9.0
evidence: LLM增强的逻辑推荐
tldr: 现有推荐系统忽视用户角色和逻辑关系，本文提出LLM增强的逻辑推荐方法，通过用户角色识别和行为逻辑建模弥补这一不足。实验表明该方法能有效提升推荐准确性和可解释性，为大语言模型融入推荐系统提供了新思路。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-01hpo0ujhs/fig-001.webp\", \"caption\": \"\", \"page\": 10, \"index\": 1, \"width\": 4181, \"height\": 1003}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-01hpo0ujhs/fig-002.webp\", \"caption\": \"\", \"page\": 28, \"index\": 2, \"width\": 4200, \"height\": 1500}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-01hpo0ujhs/fig-003.webp\", \"caption\": \"\", \"page\": 29, \"index\": 3, \"width\": 2447, \"height\": 1138}]"
motivation: 现有推荐系统忽略用户特征和社会角色建模，限制了推荐效果。
method: 引入用户角色识别任务和行为逻辑建模任务，利用大语言模型学习用户角色与兴趣的逻辑关系。
result: 在推荐任务上验证了该方法优于传统方法，显著提升准确率和可解释性。
conclusion: LLM增强的逻辑推荐能够有效建模用户深层特征，提升推荐系统性能。
---

## Abstract
Recommender systems filter contents/items valuable to users by inferring preferences from user features and historical behaviors. 
Mainstream approaches follow the learning-to-rank paradigm, which focus on discovering and modeling item topics (e.g.,
categories), and capturing user preferences on these topics based on historical interactions.
However, this paradigm often neglects the modeling of user characteristics and their social roles, which are logical confounders influencing the correlated interest and user preference transition. 
To bridge this gap, we introduce the user role identification task and the behavioral logic modeling task that aim to explicitly model user roles and learn the logical relations between item topics and user social roles. 
We show that it is possible to explicitly solve these tasks through an efficient integration framework of Large Language Model (LLM) and recommendation systems, for which we propose TagCF. 
On the one hand, TagCF exploits the (Multi-modal) LLM's world knowledge and logic inference ability to extract realistic tag-based virtual logic graphs that reveal dynamic and expressive knowledge of users, refining our understanding of user behaviors.
On the other hand, TagCF presents empirically effective integration modules that take advantage of the extracted tag-logic information, augmenting the recommendation performance.
We conduct both online experiments and offline experiments with industrial and public datasets as verification of TagCF's effectiveness, and we empirically show that the user role modeling strategy is potentially a better choice than the modeling of item topics. 
Additionally, we provide evidence that the extracted logic graphs are empirically a general and transferable knowledge that can benefit a wide range of recommendation tasks. Our code is available in https://github.com/Code2Q/TagCF.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
现有推荐系统主流采用学习排序范式，主要依赖物品主题（如类别）的建模以及用户历史交互来捕捉偏好，但**忽视了用户自身特征和社会角色的建模**。用户在社会中的角色（如“新生儿的爸爸”“交响乐爱好者”）是影响其兴趣和行为的逻辑混杂因素，能够解释看似不相关的物品共现（如尿布与啤酒的关联）。因此，论文提出**用户角色识别**和**行为逻辑建模**两个新任务，旨在显式建模用户角色，并学习物品主题与用户社会角色之间的逻辑关系，从而提升推荐的准确性和可解释性。

## 2. 方法论：核心思想、关键技术细节
论文提出的框架 **TagCF** 包含三个主要模块：

### 2.1 MLLM-based Item-wise Tag Extraction（标签提取）
- 利用多模态大语言模型（M3）对每个物品（视频）提取两类标签：
  - **物品主题标签**（Item tags）：如“器乐表演”“音乐创作”
  - **用户角色标签**（User tags）：如“民谣爱好者”“音乐爱好者”
- 通过覆盖集缩减算法（greedy min cover set）自动选择表达力强、语义差异大的标签子集（T* 和 C*），控制标签规模。
- 为解决计算瓶颈，采用蒸馏模型（Pθ(t|i)）将标签预测迁移到所有物品上。

### 2.2 LLM-based Collaborative Logic Filtering（逻辑推理）
- 使用 LLM（Qwen2.5-7B）迭代推理两种逻辑关系：
  - **U2I逻辑**：给定用户角色，推断其可能喜欢的物品类型。
  - **I2U逻辑**：给定物品类型，推断可能感兴趣的用户角色。
- 同样通过蒸馏模型（Pφ）将逻辑图限制在覆盖集上，得到 GU2I* 和 GI2U*。

### 2.3 Tag-Logic Integration in Recommendation（集成到推荐模型）
- **标签编码器**：对每个物品聚合其标签嵌入（通过注意力机制），形成标签层面的物品表示 r(t)_i，并与ID嵌入 xi 拼接。
- **用户编码器**：采用双序列模型（SASRec）分别编码用户历史中的ID嵌入和标签嵌入，融合后得到用户表示 ϕu。
- **学习增强**：引入对比学习损失，让用户/物品的标签预测与推荐目标对齐，同时支持基于逻辑图的标签扩展（Utility 和 Exploration 两种模式）。
- **推理扩展**：结合标签匹配得分 ˆytag 与原始得分 ˆyraw，通过超参数 β0、β1 调节精确性与探索性。

## 3. 实验设计
### 3.1 数据集
- **工业数据集**：来自快手视频分享平台，包含890万用户、1039万视频、329万交互。
- **公开数据集**：Amazon Books（9k用户/8k物品）、Amazon Movies（39k用户/24k物品）。
- 预处理：过滤低活跃用户，采用留一天训练/下一天测试。

### 3.2 Benchmark 与对比方法
- 传统方法：BPR、GRU4Rec、SASRec、Bert4Rec、LRURec、Mamba4Rec。
- LLM增强方法：RLM、SAID、GENRE。
- 所有基线在RecBole框架下复现，超参数调优至最佳。

### 3.3 评估指标
- 准确率：NDCG@10/20、MRR@10/20。
- 多样性：ItemCoverage@10/20、GiniIndex@10/20（越低越好）。
- 在线实验：关键交互奖励（点赞、转发等）和多样性指标。

## 4. 资源与算力
论文明确提及：
- 在线标签提取模块：部署在50块 NVIDIA 4090 GPU 集群上，每日处理300万视频。
- 离线实验：使用 Tesla V100 GPU。
- 训练时长未给出具体数值，但指出蒸馏模型和推荐模型训练在工业规模下可行。

## 5. 实验数量与充分性
- **在线A/B测试**：持续至少14天，8个桶（每个数千万用户），分别测试TagCF-util和TagCF-expl，并额外进行40天长期效应验证。
- **离线实验**：在3个数据集上运行5次不同随机种子取平均，报告所有指标。
- **消融实验**：去除标签编码器、学习增强、推理扩展三个组件分别测试，并分析超参数β0、β1、λ、k的影响。
- **迁移性测试**：将工业标签逻辑图迁移到公开数据集，验证通用性。
- **人类评估**：对359个视频进行GSB（Good/Same/Bad）评估，对比GPT-4o，并做细粒度维度评分。
- **逻辑图质量评估**：对3220个样本进行人评。

## 6. 主要结论与发现
- **TagCF显著优于所有基线**：在工业数据集上NDCG@10相对提升8.06%，Coverage@20提升14.21%。
- **用户角色标签优于物品主题标签**：TagCF-ut（使用用户角色标签）在准确率上表现更好，且标签集更稳定（覆盖集规模更小，每日扩展更少）。
- **逻辑图可迁移**：工业环境提取的逻辑图可直接用于公开数据集，无需重新推理。
- **在线实验**：TagCF-util提升交互0.946%，TagCF-expl提升多样性0.102%，且长期DAU提升0.037%。
- **三种集成方法均有效**：消融实验验证了标签编码器、学习增强、推理扩展各自贡献。

## 7. 优点
- **创新性**：首次提出将用户社会角色建模与LLM逻辑推理结合，弥补了传统推荐忽视用户特性的缺陷。
- **实用性**：设计了覆盖集缩减、蒸馏、并行推理等工程优化，成功部署于工业级系统。
- **充分实验**：涵盖在线/离线、多数据集、多基线、消融、迁移、人类评估，结果可靠。
- **可解释性**：标签和逻辑图为推荐提供了语义解释，支持探索性推荐（export exploration），缓解信息茧房。

## 8. 不足与局限
- **冷启动用户**：依赖用户历史序列，冷启动场景下难以识别用户角色。
- **标签最优性**：覆盖集采用贪心算法，可能不是全局最优，全量标签集的知识未被充分利用。
- **计算成本**：MLLM/LLM推理与蒸馏训练带来额外开销，虽可通过蒸馏缓解但仍需工业级集群支持。
- **道德风险**：用户角色标签可能涉及隐私或刻板印象，需要公平性审查；论文未深入讨论偏见问题。
- **实验覆盖**：仅在视频和商品领域验证，未涉及新闻、音乐等其他类型推荐。

（完）
