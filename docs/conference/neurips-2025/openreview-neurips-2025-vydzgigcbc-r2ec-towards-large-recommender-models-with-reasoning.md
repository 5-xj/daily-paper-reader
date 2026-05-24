---
title: "R$^2$ec: Towards Large Recommender Models with Reasoning"
title_zh: "R^2ec: 迈向具备推理能力的大推荐模型"
authors: "Runyang You, Yongqi Li, Xinyu Lin, Xin Zhang, Wenjie Wang, Wenjie Li, Liqiang Nie"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=VYdzGigCBC"
tags: ["query:llm-sr"]
score: 9.0
evidence: 基于LLM的推荐模型具备推理能力
tldr: 现有推荐系统缺乏推理能力，本文提出R^2ec，一种统一的大推荐模型，内置推理能力。采用双头架构同时生成推理链和进行物品预测，并设计RecPO强化学习框架联合优化推理与推荐。实验表明R^2ec在性能和推理能力上均优于传统方法。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-vydzgigcbc/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 782, \"height\": 458}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vydzgigcbc/fig-002.webp\", \"caption\": \"\", \"page\": 2, \"index\": 2, \"width\": 814, \"height\": 490}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vydzgigcbc/fig-003.webp\", \"caption\": \"\", \"page\": 2, \"index\": 3, \"width\": 788, \"height\": 583}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vydzgigcbc/fig-004.webp\", \"caption\": \"\", \"page\": 2, \"index\": 4, \"width\": 838, \"height\": 514}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-vydzgigcbc/fig-005.webp\", \"caption\": \"\", \"page\": 2, \"index\": 5, \"width\": 854, \"height\": 530}]"
motivation: 当前LLM推荐模型缺乏推理能力，且推理链生成与推荐预测分离导致效率低下。
method: 提出双头架构支持推理链生成与物品预测，并用RecPO强化学习联合优化。
result: 在三个数据集上，R^2ec优于传统推荐模型，并展现了良好的推理能力。
conclusion: 将推理能力融入大推荐模型能显著提升推荐效果，具有广泛前景。
---

## Abstract
Large recommender models have extended LLMs as powerful recommenders via encoding or item generation, and recent breakthroughs in LLM reasoning synchronously motivate the exploration of reasoning in recommendation. 
In this work, we propose R$^2$ec, a unified large recommender model with intrinsic reasoning capability. 
R$^2$ec introduces a dual-head architecture that supports both reasoning chain generation and efficient item prediction in a single model, significantly reducing inference latency. To overcome the lack of annotated reasoning data, we design RecPO, a reinforcement learning framework that optimizes reasoning and recommendation jointly with a novel fused reward mechanism. 
Extensive experiments on three datasets demonstrate that R$^2$ec outperforms traditional, LLM-based, and reasoning-augmented recommender baselines, while further analyses validate its competitive efficiency among conventional LLM-based recommender baselines
and strong adaptability to diverse recommendation scenarios. Code and checkpoints available at https://github.com/YRYangang/RRec.

---

## 论文详细总结（自动生成）

# 详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **问题背景**：大语言模型（LLM）在推理能力上取得突破（如DeepSeek-R1），但现有大型推荐模型（如基于编码或生成ID的方法）缺乏推理能力，导致推荐性能受限。
- **现存矛盾**：当前推理增强推荐系统（如LangPTune）将推理模块与推荐模块分离，导致巨大的资源开销（需同时训练与服务两个模型）和次优的联合优化（推理与推荐无法端到端对齐）。
- **研究动机**：探索如何将推理能力内在地融入单一Large Recommender Model，实现高效的推理-推荐统一，从而提升推荐质量并保持实时性。
- **本文贡献**：提出R²ec，首个统一具备内在推理能力的大推荐模型，通过双头架构和强化学习训练框架RecPO，在提升性能的同时降低推理延迟。

## 2. 方法论

### 核心思想
- 将推理链生成与物品预测整合在单一Decoder-only Transformer模型中，通过双任务头实现紧密耦合：**语言建模头（lm_head）** 生成推理token，**推荐头（rec_head）** 通过内积计算物品得分。
- 训练采用强化学习（RL）框架 **RecPO**，无需人工标注的推理数据，通过融合奖励信号引导模型学习有效的推理路径。

### 关键技术细节
- **模型设计**：
  - **推理阶段**：给定用户提示 \( x_u \)，模型自回归生成推理token序列 \( o_1, ..., o_T \)。
  - **推荐阶段**：取最后隐藏状态 \( h_T \)，与候选物品嵌入表 \( H_V \) 计算内积 \( s(v) = h_T^\top H_V[v] \)，得到Top-K推荐结果。
  - **物品嵌入表**：由模型自身对物品描述编码获得，可动态增删，支持零样本泛化。

- **优化（RecPO）**：
  - **轨迹采样**：对每位用户采样G条推理-推荐轨迹（使用旧策略 \( \pi_{\theta_{\text{old}}} \) 通过Top-K温度采样）。
  - **奖励设计**：融合**离散排名奖励 \( R_d \)**（NDCG@k）与**连续相似度奖励 \( R_c \)**（softmax概率），线性组合：\( R = \beta R_c + (1-\beta)R_d \)，\( \beta \approx 0.05 \)。
  - **优势估计**：支持GRPO（组相对策略优化）和RLOO（留一法）两种方法。
  - **训练目标**：联合推理与推荐的目标函数（公式8），推理token使用标准裁剪损失，推荐部分仅使用优势最高的轨迹进行梯度更新，保留探索多样性。

### 公式/算法流程
- 重要性比 \( r_{i,t}(\theta) \) 分为推理阶段（\( t \le T \)）和推荐阶段（\( t = T+1 \)）。
- 推荐部分的目标物品概率使用in-batch softmax：\( \pi_\theta(v^+ | x_u, o_i) = \frac{\exp(h_T^\top h_{v^+}/\tau)}{\sum_{v' \in B} \exp(h_T^\top h_{v'}/\tau)} \)。
- 目标函数含裁剪操作与优势加权，可参考算法1训练流程。

## 3. 实验设计

### 数据集与场景
- **主数据集**：Amazon的三个子集——**CDs and Vinyl**（CDs）、**Video Games**（Games）、**Musical Instruments**（Instruments）。使用2019-2023年最新交互，按时间80%/10%/10%拆分，全量物品集评估，序列长度截断为20。
- **扩展数据集**：Electronics、GoodReads、MovieLens，用于跨域鲁棒性验证。

### 基线方法
- **传统顺序推荐**：GRU4Rec, Caser, SASRec。
- **LLM推荐**：TIGER, BigRec, D3, SDPO*, LLaRA*, SPRec。
- **推理增强推荐**：LangPTune。
- 两个骨干：**Gemma2-2B-Instruct** 和 **Qwen2.5-3B-Instruct**。

### 指标
- Hit Rate@K, NDCG@K（K=5,10,20），采用full-set推荐设置。

## 4. 资源与算力

- **硬件**：4× NVIDIA RTX 3090 (24GB) GPUs（附录D）。
- **软件**：PyTorch 2.5.0, Transformers 4.48.1, DeepSpeed 0.15.7。
- **训练细节**：LoRA微调（rank=4），最大3个epoch，early stopping patience=1；学习率1e-5，batch size 24，线性warm-up 32步；推理使用VLLM（单GPU）。论文未明确报告总体训练时长或GPU小时数。

## 5. 实验数量与充分性

- **实验组数**：超过10组主要实验，包括：
  - 主对比实验（3个数据集 × 2个骨干）。
  - 消融实验（4个变体：w/ ClsHead, w/o Reasoning, w/o Rd, w/o Rc）。
  - 优化分析（优势估计、轨迹采样温度/K值、组大小、嵌入策略）。
  - 推理行为定性定量分析（7种策略，每测试集100样本编码）。
  - 效率分析（延迟对比）。
  - 扩展实验（更大骨干Gemma-9B、跨域泛化）。
- **充分性判断**：实验设计较全面，覆盖多领域、多基线、核心组件消融、关键超参数影响、跨域和规模扩展。消融实验验证了推理和熔合奖励的必要性。但主实验仅三个Amazon子集，规模偏小；跨域实验未对所有基线进行对比（部分直接从原文取值），可能存在公平性风险。

## 6. 主要结论与发现

- **性能优势**：R²ec在所有数据集和骨干上均显著优于所有基线（包括传统、LLM、推理增强方法），提升幅度在11%–77%不等。
- **推理有效性**：加入推理（w/ Reasoning）相比无推理（w/o Reasoning）实现约15%平均提升；推理行为自动适应领域和用户上下文，并展现出7种可解释策略。
- **效率优势**：推理延迟在所有LLM-based方法中最优（单次1.67秒，配合VLLM降至0.0945秒），虽仍慢于传统SASRec（0.014秒），但差距大幅缩小。
- **优化关键**：熔合奖励（Rd主导+Rc辅助）效果优于单独任一种；GRPO优势估计在训练初期更快收敛；组大小6-8足够，更大提升不明显。
- **跨域与扩展**：在更大骨干（Gemma-9B）和跨域场景中推理持续带来增益，验证鲁棒性。

## 7. 优点

- **创新性**：首次实现统一模型内联合推理与推荐，替代分离式pipeline，降低资源开销。
- **训练机制**：RecPO无需人工标注推理数据，通过RL自然生成推理链，配合融合奖励设计提升训练效率。
- **推理行为分析**：深入定性定量揭示模型自动发展出多样推理策略（属性抽象、模式识别、场景推理等），增强可解释性。
- **实用效率**：双头架构避免了自回归生成物品ID的耗时步骤，推理速度优于其他LLM推荐方法。
- **公平性尝试**：在消融和优化分析中考虑了多种技术变体、骨干和超参数，实验较完整。

## 8. 不足与局限

- **推理延迟增加**：相比传统模型（SASRec 0.014s），R²ec推理仍慢一个量级（0.0945s配合VLLM），在实际高吞吐场景中可能受限。
- **训练资源限制**：仅使用LoRA微调而非全参数微调，可能未完全释放推理潜力；实验仅基于2B/3B骨干，更大模型（如7B+）上的效果有待验证。
- **数据域覆盖有限**：主要实验集中在Amazon三个子类，推广到其他领域（如视频、社交推荐）未充分验证；跨域实验仅部分基线对比，公平性风险。
- **依赖温度/采样超参数**：轨迹采样依赖温度、top-K等参数，需手动调优，未提供自适应的机制。
- **奖励设计的局限性**：熔合奖励中β=0.05为经验值，未进行系统性扫描；连续相似度奖励在实验中单独使用时表现不佳，其作用尚需进一步研究。
- **安全与隐私**：论文未讨论推荐系统的公平性、偏见或用户隐私保护，但作为通用方法可适用于现有安全机制。

（完）
