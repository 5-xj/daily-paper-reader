---
title: "FACE: A General Framework for Mapping Collaborative Filtering Embeddings into LLM Tokens"
title_zh: "FACE: 将协同过滤嵌入映射到LLM标记的通用框架"
authors: "Chao Wang, Yixin Song, Jinhui Ye, Chuan Qin, Dazhong Shen, Lingfeng Liu, Xiang Wang, Yanyong Zhang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=loznSxLomv"
tags: ["query:llm-sr"]
score: 9.0
evidence: 将协同过滤嵌入映射到大语言模型标记以用于推荐
tldr: 针对协同过滤嵌入难以被大语言模型理解的问题，提出FACE框架，通过解耦投影模块和量化自编码器将连续嵌入转换为LLM可解释的离散标记。该方法使得LLM能够有效利用协同过滤信号进行推荐，实验表明在多个推荐任务上优于现有融合方法，为LLM与协同过滤的深度结合提供了通用方案。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-loznsxlomv/fig-001.webp\", \"caption\": \"\", \"page\": 4, \"index\": 1, \"width\": 478, \"height\": 630}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-loznsxlomv/fig-002.webp\", \"caption\": \"\", \"page\": 4, \"index\": 2, \"width\": 1129, \"height\": 578}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-loznsxlomv/fig-003.webp\", \"caption\": \"\", \"page\": 10, \"index\": 3, \"width\": 532, \"height\": 302}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-loznsxlomv/fig-004.webp\", \"caption\": \"\", \"page\": 10, \"index\": 4, \"width\": 531, \"height\": 302}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-loznsxlomv/fig-005.webp\", \"caption\": \"\", \"page\": 10, \"index\": 5, \"width\": 531, \"height\": 302}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-loznsxlomv/fig-006.webp\", \"caption\": \"\", \"page\": 25, \"index\": 6, \"width\": 3695, \"height\": 1148}]"
motivation: 大语言模型难以理解协同过滤产生的非语义嵌入，限制了LLM在推荐中的应用。
method: 提出解耦投影模块和量化自编码器，将协同过滤嵌入映射为LLM可解释的离散标记序列。
result: 在多个推荐任务上，该方法提升了LLM利用协同过滤信号的推荐效果。
conclusion: FACE为LLM与协同过滤的深度融合提供了通用且可解释的框架。
---

## Abstract
Recently, large language models (LLMs) have been explored for integration with collaborative filtering (CF)-based recommendation systems, which are crucial for personalizing user experiences. However, a key challenge is that LLMs struggle to interpret the latent, non-semantic embeddings produced by CF approaches, limiting recommendation effectiveness and further applications. To address this, we propose FACE, a general interpretable framework that maps CF embeddings into pre-trained LLM tokens. Specifically, we introduce a disentangled projection module to decompose CF embeddings into concept-specific vectors, followed by a quantized autoencoder to convert continuous embeddings into LLM tokens (descriptors). Then, we design a contrastive alignment objective to ensure that the tokens align with corresponding textual signals. Hence, the model-agnostic FACE framework achieves semantic alignment without fine-tuning LLMs and enhances recommendation performance by leveraging their pre-trained capabilities. Empirical results on three real-world recommendation datasets demonstrate performance improvements in benchmark models, with interpretability studies confirming the interpretability of the descriptors. Code is available in \url{https://github.com/YixinRoll/FACE}.

---

## 论文详细总结（自动生成）

# 论文中文详细总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：大语言模型（LLM）难以理解协同过滤（CF）方法产生的非语义、连续的嵌入表示，这限制了LLM在推荐系统中的有效应用。现有方法要么直接用文本信息替代协同信号（性能不足），要么通过单向对齐网络将CF嵌入映射到LLM空间（映射后仍偏离LLM原始词向量空间），导致LLM无法真正理解CF嵌入的语义含义。
- **研究动机**：提出一种通用、可解释的框架，将任意CF模型的用户/物品嵌入直接映射为预训练LLM的离散文本标记（descriptors），从而使LLM无需微调就能理解CF嵌入，并利用其强大的预训练能力提升推荐性能和可解释性。
- **整体含义**：为LLM与CF的深度融合提供了首个模型无关的映射方案，促进了推荐系统的语义化、可解释化以及复杂下游任务的拓展。

## 2. 论文提出的方法论：核心思想、关键技术细节

### 核心思想
采用“解耦→量化→对齐”三步策略：先将CF嵌入解耦为多个概念向量，再通过量化自编码器将其转换为LLM词汇表中的离散标记（descriptors），最后通过对比学习使这些标记与用户/物品的文本摘要语义对齐。

### 关键技术细节

1. **向量量化解耦表示映射**（VQ-VAE架构）
   - **码本构建**：基于LLM词汇表（如LLaMA2-7B），筛选出有语义的词语（通过COCA语料库），得到子集 D，用其预训练嵌入作为码本 C0，并通过可训练的线性变换 Wc 降维到 d 维（d < d_LLM），形成最终码本 C。
   - **解耦投影模块**：将CF嵌入 e 通过 n 个正交投影头得到 n 个概念向量 e_i = W_i e，再经过Transformer编码器层捕获关系，输出 n 个隐变量 z_e_i。
   - **残差量化（RQ）**：对每个 z_e_i 进行 H 层残差量化，每层从码本中选择最近邻码字 c^(h)，最终量化嵌入 z_q = ∑ c^(h)。第一层码字作为描述符嵌入 z_d_i。STE用于梯度直通。
   - **解码器**：将量化后的 n 个向量通过Transformer解码器和concat-projector重建原始CF嵌入 e_re。
   - **损失函数**：重建损失 L_recons = ||e_re - e||²，量化损失 L_Q = ∑ (||sg[r^(h)] - c^(h)_k||² + β||sg[c^(h)_k] - r^(h)||²)，整体 L_map = L_recons + L_Q。

2. **对比学习语义对齐**
   - **摘要嵌入**：利用LLM生成用户/物品的结构化文本摘要 s，通过LLM嵌入模型 E 得到 hs。
   - **描述符嵌入**：将描述符 z_d_i 通过伪逆矩阵映射回原始高维词向量空间，并与提示词拼接，形成完整序列 d，再通过同一LLM嵌入模型 E 得到 hd。
   - **对比对齐损失**：采用InfoNCE损失，使正样本对 (hd, hs) 相似度高，负样本对相似度低。hs 预计算并固定。
   - **联合优化**：总损失 L = L_R + μL_map + λL_align，采用三步训练策略：先预训练推荐骨干，再训练量化自编码器（无对齐），最后联合对齐优化。

## 3. 实验设计

- **数据集**：Amazon-book（用户11K、物品9.3K、交互120K）、Yelp（用户11K、物品11K、交互166K）、Steam（用户23K、物品5.2K、交互316K）。密度均很低（1.2e-3 ~ 2.6e-3）。
- **基准对比方法**：
  - 五个基础CF模型：GMF、LightGCN、SimGCL、LightGCL、RLMRec（LLM增强基线）。
  - 每个基础模型分别加上FACE框架进行对比。
- **评估指标**：Recall@N 和 NDCG@N（N=5,20），采用全排序评估策略（all-ranking）。
- **实现细节**：嵌入维度256，LLM使用LLaMA2-7B（也测试了MiniLM、Qwen2）。Adam优化器，学习率1e-2，批次大小128。采用SSLRec框架，在NVIDIA A100上训练。

## 4. 资源与算力

- 文中仅提及“部署于NVIDIA A100”，未明确说明使用了多少块GPU、训练时长或其他算力细节。因此，无法提供具体的算力总量信息。
- 鉴于模型涉及LLM编码和对比学习，推断需要较高的GPU内存，但未报告具体数值。

## 5. 实验数量与充分性

- **主要性能对比**：表1展示了5种基础模型在3个数据集上的Recall和NDCG，共4×3×2=24组核心结果。
- **消融实验**：表3在Amazon-book和Yelp上对LightGCN进行4种变体（完整、去除Transformer、去除重建、去除对齐）的消融，共8组。
- **超参数分析**：图4在Amazon上对码本维度、描述符数量、对齐权重进行敏感性分析。
- **可解释性实验**：
  - 物品检索任务（图2）在3个数据集上测试不同候选数（10~60）下的准确率。
  - 物品生成任务（图3）展示生成物品与真实物品的相似度分布。
  - 用户交互解释排序（表2）基于40个用户、4个候选物品，人工和LLM排序。
- **附录额外实验**：
  - 与不同LLM的兼容性（表5-7，3个数据集×3种LLM）。
  - 与其他LLM4Rec方法（CTRL、KAR）结合（表8，3个数据集）。
  - 冷启动实验（表9）与AlphaRec对比。
- **充分性评估**：实验覆盖了多种CF骨干、多种LLM、消融、可解释性、冷启动场景，对比公平（使用同一基准SSLRec框架，超参数默认或网格搜索）。实验数量充足，结论有支撑。

## 6. 论文的主要结论与发现

1. **性能提升**：FACE显著提升了各种CF基础模型的推荐性能（Amazon-book最高提升7.31%，Yelp 11.55%，Steam 8.00%），且对已含文本信息的RLMRec也有额外提升。
2. **可解释性**：描述符能有效恢复物品语义（物品检索准确率高，生成物品与真实物品余弦相似度显著高于非对应物品），且能帮助LLM生成比RLMRec更可靠的交互解释（仅用16个标记 vs 一段摘要，排名略优）。
3. **模型无关与鲁棒性**：FACE适用于不同CF骨干（GMF、LightGCN等）和不同LLM（LLaMA2、MiniLM、Qwen2），性能稳定。
4. **对齐的重要性**：消融实验表明，缺少对齐步骤性能下降最明显，验证了语义对齐的关键作用。

## 7. 优点

- **方法创新**：首次提出将CF嵌入直接映射为LLM预训练文本标记的通用框架，解决了LLM无法理解非语义嵌入的根本问题。
- **模型无关**：可即插即用于任意CF模型，无需修改推荐骨干。
- **无需微调LLM**：仅训练轻量量化自编码器和投影层，LLM保持冻结，计算高效且保留LLM原始能力。
- **强可解释性**：生成的描述符能用于物品检索、生成、交互解释，定性和定量实验均验证了语义一致性。
- **对比学习对齐机制**：巧妙利用LLM自身编码能力实现跨模态对齐，且摘要预计算固定，训练稳定。

## 8. 不足与局限

- **实验算力信息不足**：未明确报告GPU数量、训练时间，难以评估实际部署成本。
- **仅验证较小LLM**：仅使用7B或更小的LLM（LLaMA2-7B、MiniLM、Qwen2-7B），未验证更大模型的效果。
- **仅限协同过滤域**：未探索序列推荐、知识图谱推荐等其他场景。
- **冷启动实验有限**：仅与AlphaRec一种方法对比，未与更多SOTA冷启动方法比较。
- **潜在偏差风险**：LLM生成摘要和解释可能引入训练数据中的偏见；码本筛选基于COCA语料库，可能涵盖不全。
- **可扩展性**：在实际全量排序场景中，需为每个用户/物品生成描述符并经过LLM编码，可能带来额外计算负担；但文中复杂度分析认为开销可控。

（完）
