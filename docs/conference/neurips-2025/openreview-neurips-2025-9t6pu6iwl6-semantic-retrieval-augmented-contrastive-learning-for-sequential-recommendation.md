---
title: Semantic Retrieval Augmented Contrastive Learning for Sequential Recommendation
title_zh: 面向序列推荐的语义检索增强对比学习
authors: "Ziqiang Cui, Yunpeng Weng, Xing Tang, Xiaokun Zhang, Shiwei Li, Peiyang Liu, Bowei He, Dugang Liu, Weihong Luo, xiuqiang He, Chen Ma"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=9T6Pu6iWL6"
tags: ["query:llm-sr"]
score: 9.0
evidence: 利用LLM增强序列推荐的对比学习
tldr: 针对现有对比学习方法在序列推荐中难以生成高质量对比对的问题，本文提出SRA-CL，利用大语言模型的语义理解和推理能力生成对比对，避免了随机扰动和稀疏协作数据带来的问题。在多个数据集上实验表明，该方法显著提升了序列推荐性能。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 现有对比学习方法生成对比对质量低，随机扰动破坏偏好模式，协作数据稀疏导致不可靠。
method: 利用LLM的语义理解能力自动生成高质量的对比对，无需预定义规则。
result: 在多个序列推荐数据集上，SRA-CL优于现有基线方法。
conclusion: LLM增强的对比学习能有效提升序列推荐模型的表示质量。
---

## Abstract
Contrastive learning has shown effectiveness in improving sequential recommendation models. However, existing methods still face challenges in generating high-quality contrastive pairs: they either rely on random perturbations that corrupt user preference patterns or depend on sparse collaborative data that generates unreliable contrastive pairs. Furthermore, existing approaches typically require predefined selection rules that impose strong assumptions, limiting the model's ability to autonomously learn optimal contrastive pairs. To address these limitations, we propose a novel approach named Semantic Retrieval Augmented Contrastive Learning (SRA-CL). SRA-CL leverages the semantic understanding and reasoning capabilities of LLMs to generate expressive embeddings that capture both user preferences and item characteristics. These semantic embeddings enable the construction of candidate pools for inter-user and intra-user contrastive learning through semantic-based retrieval. To further enhance the quality of the contrastive samples, we introduce a learnable sample synthesizer that optimizes the contrastive sample generation process during model training. SRA-CL adopts a plug-and-play design, enabling seamless integration with existing sequential recommendation architectures. Extensive experiments on four public datasets demonstrate the effectiveness and model-agnostic nature of our approach. 
Our code is available at https://github.com/ziqiangcui/SRA-CL

---

## 论文详细总结（自动生成）

# 论文中文总结

## 1. 核心问题与整体含义（研究动机和背景）

**研究背景**：序列推荐旨在基于用户历史行为序列建模用户偏好，但面临数据稀疏性问题。对比学习作为一种有效的自监督方法，通过构造正样本对并最大化它们在表示空间中的一致性来提升推荐性能。现有对比学习方法主要分为两类：用户间对比学习（如聚类用户表示）和用户内对比学习（如随机扰动序列生成增强视图）。

**核心问题**：现有方法在构造对比对时存在两大致命缺陷：  
- **语义偏离（Semantic Divergence）**：随机扰动（如随机掩码、Dropout）可能彻底改变序列语义（用户偏好），使得语义不同的序列在嵌入空间中靠近，降低模型区分能力；基于协作信号的聚类方法（如K-Means）受稀疏ID信号影响，产生低质量聚类结果。  
- **不可学习性（Unlearnability）**：依赖预定义的硬规则（如同簇用户、相同下一项物品）构造正样本对，强假设限制了模型自主优化对比对的能力，且部分规则（如相同下一项）只是重复推荐目标，无额外信息增益。

**动机**：利用文本数据（类别、品牌、描述）中丰富的语义信息，结合大语言模型的强大理解和推理能力，构造高质量、语义一致的对比样本，以克服上述局限。

## 2. 方法论

### 核心思想
提出**SRA-CL**框架，通过LLM生成用户偏好和物品的语义嵌入，基于语义相似性进行检索构建候选池，并引入**可学习样本合成器**动态生成最优对比样本，以替代传统随机扰动或硬规则。

### 关键技术细节

#### （1）用户间对比学习（Inter-User）
- **语义嵌入生成**：将用户序列按时间顺序构造为提示词（包含物品属性+描述），调用LLM（DeepSeek-V3）生成用户偏好总结，再用预训练文本嵌入模型SimCSE-RoBERTa提取固定语义嵌入 $\tilde{\mathbf{h}}_u$，并缓存（训练中冻结）。
- **语义检索**：计算 $\tilde{\mathbf{h}}_u$ 与其他用户的余弦相似度，选取top‑k最相似用户构成候选池 $\mathcal{N}_u$。
- **可学习样本合成**：通过一个适配器（可学习权重矩阵 $\mathbf{W}$）和注意力机制，以当前用户表示作为query，计算候选用户 $u'$ 的权重 $p_{u,u'}$，加权合成正样本 $\mathbf{h}_u^+ = \sum_{u'\in\mathcal{N}_u} p_{u,u'} \mathbf{h}_{u'}$（$\mathbf{h}_{u'}$ 为主推荐模型输出的序列表示）。然后计算InfoNCE损失 $\mathcal{L}_{\text{CS}}$。

#### （2）用户内对比学习（Intra-User）
- **物品语义嵌入**：为每个物品构造包含自身属性和包含该物品的典型用户序列上下文，利用LLM生成物品摘要，再用SimCSE提取语义嵌入 $\tilde{\mathbf{e}}_v$。
- **语义物品检索**：基于 $\tilde{\mathbf{e}}_v$ 余弦相似度选取top‑k语义相似物品作为候选替换池 $\mathcal{N}_v$。
- **对比样本生成**：对每个用户序列，随机选取20%的物品，每个被选物品从 $\mathcal{N}_v$ 中随机采样一个语义相似物品替换，得到增强视图 $S'_u$ 和 $S''_u$。通过重复生成两个增强视图作为正样本对。
- **损失**：计算InfoNCE损失 $\mathcal{L}_{\text{IS}}$。

#### （3）总体训练
总损失 $\mathcal{L} = \mathcal{L}_{\text{Rec}} + \alpha\mathcal{L}_{\text{CS}} + \beta\mathcal{L}_{\text{IS}}$，其中 $\mathcal{L}_{\text{Rec}}$ 为推荐任务交叉熵损失。训练过程中语义嵌入冻结，仅更新推荐模型参数和可学习合成器参数。推理阶段移除对比学习模块，无额外LLM开销。

## 3. 实验设计

### 数据集
- **四个公开数据集**：Yelp（19936用户/14587物品）、Amazon Sports（35598用户/18357物品）、Amazon Beauty（22363用户/12101物品）、Amazon Office（4905用户/2420物品）。均按留一法划分（最后一项测试，倒数第二项验证，其余训练）。

### 基准方法
对比**13种方法**，分为三类：
1. **经典方法**：GRU4Rec、SASRec、BERT4Rec。
2. **对比学习方法**：S3-Rec、CL4SRec、CoSeRec、ICLRec、DuoRec、MCLRec、ICSRec。
3. **LLM增强方法**：LRD、RLMRec、LLM-ESR。

### 评估指标
- **HR@20、NDCG@20**（主表），额外报告HR@10、NDCG@10。
- 全物品排序（无负采样），保证无偏评估。

## 4. 资源与算力

**文中明确说明**：
- 所有实验在**单块32GB V100 GPU**上运行。
- LLM调用使用**DeepSeek-V3 API**，文本嵌入模型使用**预训练SimCSE-RoBERTa**。
- 未明确给出单个实验的训练时长（如总epoch数），但提及使用了早停（验证集连续10轮不提升则停止）。第一阶段LLM API调用可通过异步并发在数小时内完成，且只需执行一次。

## 5. 实验数量与充分性

**实验组数**：
1. **主实验**（Table 1）：四个数据集×对比13个基线，每个实验运行5次取均值，用配对t检验（p<0.01）确认显著性。
2. **模型无关性验证**（Figure 3）：将SRA-CL集成到GRU4Rec、SASRec、DuoRec中，展示性能提升（HR@20提升8.3%~27.3%）。
3. **消融实验**（Table 2）：在四个数据集上对比6种变体（w/o CL、w/o L_CS、w/o L_IS、w/o learn.、w/o semantic、w/o LLM），验证每个模块必要性。
4. **超参数研究**（Figure 4 & Figure 7）：分析α、β、k的影响。
5. **稀疏数据分析**（Figure 5）：按用户序列长度分组（≤7, 7-10, >10），对比MCLRec、ICSRec，证明SRA-CL在稀疏场景优势更明显。
6. **附加分析**（Table 4）：对比用户内对比学习中可学习合成与不可学习替换策略效果。

**结论**：实验设置充分、客观（多次运行+t检验、全物品排序无偏、多个数据集覆盖不同领域、骨干多样），消融和分析全面支撑了文章主张。

## 6. 主要结论与发现

1. **SRA-CL在所有数据集上显著优于所有基线**，最高提升达NDCG@20提升9.12%（Sports）及HR@20提升11.82%（Sports）。
2. **模型无关性强**：可无缝集成到不同推荐骨干（GRU4Rec、SASRec、DuoRec）并稳定提升性能。
3. **语义信息的价值**：去除语义检索（w/o semantic）或去除LLM处理（w/o LLM）均导致明显下降，证实语义信息对构造高质量对比对至关重要。
4. **可学习合成器对用户间对比学习有效**（消融中w/o learn.下降），而用户内对比学习采用简单随机替换即可，无需可学习合成。
5. **稀疏数据下优势更突出**：在短序列用户组（<7次交互）中，SRA-CL相对最强对比学习基线的提升幅度更大，验证了其解决了稀疏数据下对比样本不可靠的问题。

## 7. 优点（亮点）

- **创新性**：首次将LLM的语义理解能力系统性地引入对比学习中，替代随机扰动和硬聚类规则，构建语义一致的对比样本。
- **可学习样本合成器**：突破了传统硬规则限制，让模型自适应从候选池中融合多个相似用户表示生成最优正样本。
- **高效部署**：推理阶段无需LLM或语义嵌入，零额外延迟，适合工业场景。
- **模型无关**：可即插即用到任意序列推荐模型，通用性强。
- **实验严谨**：全物品排序、多次运行、统计检验、多维度消融和稀疏分析，验证全面。

## 8. 不足与局限

- **LLM依赖性**：本文仅测试了DeepSeek-V3和Qwen两个LLM（附录D.1提及），不同LLM（如GPT-4、Llama）可能带来不同效果，可扩展性未充分探索。
- **物品替换比例固定**：用户内对比学习中随机替换20%物品，未系统研究不同替换比例的影响（可能对长序列或短序列效果不同）。
- **计算开销**：虽然推理无额外成本，但训练前需要调用LLM API生成语义描述（一次离线完成），耗费数小时，依赖外部API，不适用于完全离线或资源受限场景。
- **冷启动考虑不足**：新用户或新物品缺乏交互序列时，LLM无法获取足够上下文，语义检索效果可能下降。
- **潜在偏差**：LLM生成的用户偏好总结可能包含偏见或幻觉，进而影响语义嵌入质量和检索准确性。
- **超参数敏感**：k（检索数量）和α、β需调优（最优范围0.05-0.1），不同数据集可能需要单独搜索，增加调参成本。

（完）
