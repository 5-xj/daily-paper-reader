---
title: "IGD: Token Decisiveness Modeling via Information Gain in LLMs for Personalized Recommendation"
title_zh: IGD：基于信息增益的大语言模型Token决定性建模用于个性化推荐
authors: "Zijie Lin, Yang Zhang, Xiaoyan Zhao, Fengbin ZHU, Fuli Feng, Tat-Seng Chua"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=ygNaCTGUwJ"
tags: ["query:llm-sr"]
score: 9.0
evidence: 利用信息增益建模大语言模型中Token的决定性以改进个性化推荐
tldr: 针对LLM用于推荐时将所有Token平等对待导致次优的问题，本文提出IGD方法，通过信息增益量化每个Token在决定推荐项时的重要性，从而在优化和解码中区分Token重要性。实验表明，IGD在多个推荐数据集上显著提升性能，揭示了Token级细粒度建模的价值。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 现有LLM推荐方法平等对待所有Token，忽略了Token对判别的贡献差异。
method: 提出IGD，以信息增益度量Token决定性，在训练和解码中差异化对待Token。
result: 实验证明IGD在多个推荐数据集上提升性能，验证了Token级细粒度建模的有效性。
conclusion: 通过信息增益建模Token决定性可提升大语言模型在个性化推荐中的表现。
---

## Abstract
Large Language Models (LLMs) have shown strong potential for recommendation by framing item prediction as a token-by-token language generation task. However, existing methods treat all item tokens equally, simply pursuing likelihood maximization during both optimization and decoding. This overlooks crucial token-level differences in decisiveness—many tokens contribute little to item discrimination yet can dominate optimization or decoding.
To quantify token decisiveness, we propose a novel perspective that models item generation as a decision process, measuring token decisiveness by the Information Gain (IG) each token provides in reducing uncertainty about the generated item. Our empirical analysis reveals that most tokens have low IG but often correspond to high logits, disproportionately influencing training loss and decoding, which may impair model performance.
Building on these insights, we introduce an Information Gain-based Decisiveness-aware Token handling (IGD) strategy that integrates token decisiveness into both tuning and decoding. Specifically, IGD downweights low-IG tokens during tuning and rebalances decoding to emphasize tokens with high IG. In this way, IGD moves beyond pure likelihood maximization, effectively prioritizing high-decisiveness tokens. Extensive experiments on four benchmark datasets with two LLM backbones demonstrate that IGD consistently improves recommendation accuracy, achieving significant gains on widely used ranking metrics compared to strong baselines. Our codes are available at \url{https://github.com/ZJLin2oo1/IGD}.

---

## 论文详细总结（自动生成）

# 论文总结：IGD: Token Decisiveness Modeling via Information Gain in LLMs for Personalized Recommendation

## 1. 核心问题与整体含义（研究动机和背景）

- **问题背景**：大型语言模型（LLM）被用于推荐系统时，通常将物品预测建模为逐Token的自回归语言生成任务。现有方法（如BIGRec、D3）在训练和推理时对所有Token一视同仁，仅优化或最大化Token似然。
- **核心问题**：这种做法忽略了不同Token在“决定性”（decisiveness）上的差异——许多Token（如填充词、常见词）对区分不同物品几乎没有贡献，但可能具有高logit值，从而主导训练损失和推理解码，导致模型性能下降。
- **研究动机**：需要量化并利用Token的决定性，将其引入优化和解码过程，超越单纯的似然最大化，以提升推荐准确性。

## 2. 方法论

### 核心思想
- 将LLM生成物品的逐Token过程视为一个**决策过程**：每一步生成Token时，候选物品空间逐渐缩小。
- 使用**信息增益（Information Gain, IG）** 衡量每个Token的“决定性”：IG定义为选择该Token后候选物品分布熵的减少量。IG越高，该Token对确定目标物品越关键。

### 关键技术细节
- **Token决定性度量**：
  - 对于给定前缀\(y_{<t}\)，候选物品集\(I_{y_{≤t}}\)的熵\(H(y_{≤t}) = -\sum_{I_i \in I_{y_{≤t}}} p_r(I_i) \log p_r(I_i)\)，其中\(p_r\)为训练数据中的经验先验概率。
  - 第\(t\)个Token的IG：\(IG(y_t; y_{<t}) = H(y_{≤t-1}) - H(y_{≤t})\)。
- **统计观察**：在四个真实数据集中，超过50%的Token具有零IG，且零IG Token往往对应高logit值，造成训练和解码偏差。

### IGD策略（两阶段）

#### IGD-Tuning（训练阶段）
- 修改交叉熵损失函数，对每个Token赋予权重\(w_t\)：
  \[
  L_{\text{IGD}} = \frac{1}{\Omega} \sum_{t=1}^{|y|} w_t \cdot \ell(f_\theta(x, y_{<t}), y_t)
  \]
  \[
  w_t = \begin{cases}
  \beta, & \text{if } IG(y_t; y_{<t}) = 0 \\
  1, & \text{if } IG(y_t; y_{<t}) > 0
  \end{cases}
  \]
  其中\(\beta \in [0,1]\)是超参数，用于压低零IG Token的贡献。

#### IGD-Decoding（推理阶段）
- 修改beam search的得分计算，加入基于IG的重新加权因子\(w_d\)：
  \[
  S(y_{\leq t}) = S(y_{\leq t-1}) + w_d \cdot \log p(y_t | x, y_{<t})
  \]
  \[
  w_d = 1 - \alpha \cdot f_{\text{IG}}(y_t)
  \]
  其中\(f_{\text{IG}}(y_t)\)是当前beam step内所有候选Token的IG的max-min归一化值，\(\alpha \in [0,1]\)控制校准强度。

## 3. 实验设计

### 数据集与场景
- **四个Amazon review数据集**：CDs、Games、Toys、Books（时间范围1996-2018），均按D3论文预处理，过滤低频用户和物品（至少5次交互）。
- **附加数据集**：Steam（约98.2万交互）用于泛化性测试。

### Benchmark与对比方法
- **传统推荐模型**：GRU4Rec、SASRec、LRURec。
- **LLM4Rec基线**：BIGRec、D3（均为状态-of-the-art）。
- **Token处理基线**：位置归一化（Pos）、因果微调（CFT）。
- **LLM骨干**：
  - 主要实验：Qwen2.5-1.5B
  - 泛化性实验：LLaMA3-8B（使用4-bit QLoRA微调）

### 评估指标
- Hit Ratio (HR@K) 和 NDCG@K，K=5和10，采用全排序协议（all-ranking protocol）。

## 4. 资源与算力

- 论文未明确给出具体的GPU型号、数量、训练时长等算力信息。仅在代码仓库README中提及基本计算环境，但未在正文中详细说明。

## 5. 实验数量与充分性

- **主要实验**：在四个Amazon数据集上，对BIGRec和D3两种LLM骨干分别应用IGD、Pos、CFT及原始模型，共报告了多组对比结果（表2）。
- **消融实验**：分别移除IGD-Tuning和IGD-Decoding组件，分析各自贡献（表3）。
- **机理分析**：
  - 训练损失对比：零IG vs 非零IG Token的损失变化（图5）。
  - 解码熵差异：预测与真实前缀的熵差距（图6）。
- **泛化性实验**：
  - 使用LLaMA3-8B骨干（表4+表5）。
  - 在Steam数据集上验证（表6）。
- **多样性分析**：First Word Repetition Rate和Item Score Entropy随α的变化（表7）。
- **超参数敏感性**：β的搜索范围及有效区间（附录H）。
- **比较线性权重方案**：二进制权重优于线性权重（附录G）。
- **总体评价**：实验覆盖多个数据集、多种骨干、多种对比方法，并进行消融、机理、泛化及多样性分析，充分且公平。但缺少统计显著性检验（如误差棒）的正式报告。

## 6. 主要结论与发现

- IGD在四个数据集上均显著优于所有基线，平均在BIGRec上提升HR@10约20.9%、NDCG@10约21.5%；在D3上提升HR@10约18.9%、NDCG@10约20.1%。
- IGD-Tuning（训练阶段）贡献比IGD-Decoding更大，但两者结合效果最佳。
- IGD成功缓解了训练中对零IG Token的过度优化和对非零IG Token的忽视，以及在解码中向高logit低IG Token的偏向。
- IGD在LLaMA3-8B骨干上也取得一致改进，证明其跨模型架构的泛化性。
- 增加α（解码校准强度）可降低首词重复率并提高物品得分熵，即提升推荐多样性。

## 7. 优点

- **视角新颖**：将物品生成建模为决策过程，利用信息增益量化Token决定性，理论依据扎实。
- **方法简洁有效**：基于二进制权重（训练）和线性缩放（解码），易于实现且计算开销低。
- **实验全面**：涵盖多个数据集、两种LLM骨干、与多种Token处理方法的对比、消融及机理分析，验证了鲁棒性和泛化性。
- **开源代码**：提供完整代码和数据处理脚本，便于复现。

## 8. 不足与局限

- **IG分布高度偏斜**：零IG Token占比极高，非零IG Token的IG值呈指数分布，导致二进制权重设计虽有效但可能不是最优，未来可探索Gini impurity、Gain Ratio等其他度量。
- **仅限文本Token**：当前分析局限于文本形式物品表示，未扩展到语义ID Token或多模态Token。
- **无统计显著性报告**：未提供误差棒或置信区间，仅基于单次运行结果，可能影响结论稳健性。
- **超参数调优**：β和α需要在验证集上调优，且最佳值在不同数据集间有差异，实际部署需额外搜索。
- **算力细节缺失**：未明确GPU型号、训练时长等，影响复现成本评估。

（完）
