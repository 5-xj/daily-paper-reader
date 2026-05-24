---
title: "Think before Recommendation: Autonomous Reasoning-enhanced Recommender"
title_zh: 思考后推荐：自主推理增强的推荐系统
authors: "Xiaoyu Kong, Junguang Jiang, Bin Liu, Ziru Xu, Han Zhu, Jian Xu, Bo Zheng, Jiancan Wu, Xiang Wang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=fVs2BCjCqC"
tags: ["query:llm-sr"]
score: 9.0
evidence: 使用强化学习训练单个大语言模型进行推荐，自主发展推理能力
tldr: 针对现有蒸馏方法从LLM迁移推理能力到推荐系统的局限性，本文提出RecZero，通过纯强化学习训练单个大语言模型，使其自主发展推荐推理能力，无需多模型多阶段蒸馏。实验表明RecZero在评分预测任务上取得优异效果，简化了推荐系统的训练流程。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-fvs2bcjcqc/fig-001.webp\", \"caption\": \"\", \"page\": 7, \"index\": 1, \"width\": 1152, \"height\": 798}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fvs2bcjcqc/fig-002.webp\", \"caption\": \"\", \"page\": 8, \"index\": 2, \"width\": 1189, \"height\": 589}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fvs2bcjcqc/fig-003.webp\", \"caption\": \"\", \"page\": 8, \"index\": 3, \"width\": 1189, \"height\": 589}]"
motivation: 现有蒸馏方法迁移LLM推理能力到推荐系统存在成本高、监督静态等不足。
method: 提出RecZero，使用纯强化学习训练单个大语言模型，使其自主发展推荐推理能力。
result: 实验证明RecZero在评分预测任务上优于现有蒸馏方法。
conclusion: 纯强化学习可有效训练LLM进行自主推理增强的推荐。
---

## Abstract
The core task of recommender systems is to learn user preferences from historical user-item interactions. With the rapid development of large language models (LLMs), recent research has explored leveraging the reasoning capabilities of LLMs to enhance rating prediction tasks. However, existing distillation-based methods suffer from limitations such as the teacher model's insufficient recommendation capability, costly and static supervision, and superficial transfer of reasoning ability. To address these issues, this paper proposes RecZero, a reinforcement learning (RL)-based recommendation paradigm that abandons the traditional multi-model and multi-stage distillation approach. Instead, RecZero trains a single LLM through pure RL to autonomously develop reasoning capabilities for rating prediction. RecZero consists of two key components: (1) "Think-before-Recommendation" prompt construction, which employs a structured reasoning template to guide the model in step-wise analysis of user interests, item features, and user-item compatibility; and (2) rule-based reward modeling, which adopts group relative policy optimization (GRPO) to compute rewards for reasoning trajectories and optimize the LLM. Additionally, the paper explores a hybrid paradigm, RecOne, which combines supervised fine-tuning with RL, initializing the model with cold-start reasoning samples and further optimizing it with RL. Experimental results demonstrate that RecZero and RecOne significantly outperform existing baseline methods on multiple benchmark datasets, validating the superiority of the RL paradigm in achieving autonomous reasoning-enhanced recommender systems.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义

- **研究动机**：推荐系统核心任务是从用户历史交互中学习偏好。近年来，大语言模型（LLM）被用于增强评分预测任务，现有方法多采用“蒸馏”范式——先用教师LLM生成推理轨迹，再微调学生模型。但该方法存在三个关键局限：
  - 教师模型缺乏领域知识，生成的推理轨迹与推荐目标不匹配；
  - 大规模生成推理数据成本高且监督静态，学生模型无法主动优化；
  - 学生模型仅学到表面模式，未真正获得推理能力。
- **整体含义**：本文提出纯强化学习（RL）范式RecZero，训练单个LLM自主发展推荐推理能力，无需多模型多阶段蒸馏，简化流程并提升性能。同时探索混合范式RecOne，结合SFT和RL。

## 2. 提出的方法论

- **核心思想**：抛弃蒸馏范式，使用纯RL训练单一LLM，使其自主学会分解评分预测任务为多个推理步骤（用户兴趣提取、物品特征总结、匹配评估、评分），并通过规则奖励优化推理轨迹和预测。
- **关键技术细节**：
  - **“Think-before-Recommendation”提示构造**：设计结构化推理模板，包含四个标记：`<analyze_user>`、`<analyze_item>`、`<match>`、`<rate>`，引导模型分步推理并输出。
  - **规则奖励建模**：采用GRPO（Group Relative Policy Optimization）进行策略优化。对于每个输入，模型采样G个输出，计算每个输出的奖励R = 格式奖励（正确格式得0.5，否则-0.5） + 答案奖励（基于预测评分与真实评分的误差，R_answer = 1 - |y-ŷ|/max_error）。然后计算组内相对优势Â_i = (R_i - mean(R))/(std(R))，用于策略更新。
  - **优化目标**：GRPO目标函数最大化，包含策略比例裁剪和KL散度惩罚项。
  - **RecOne**：先用少量高质量推理样本（由DeepSeek-R1生成）进行SFT冷启动，再用RecZero的RL框架进一步优化。

## 3. 实验设计

- **数据集与场景**：四个真实推荐数据集：Amazon-book（书籍）、Amazon-music（音乐）、Yelp（本地商家）和IMDb（电影）。评分范围1-5。
- **基准方法**：对比三类基线：
  - 协同过滤：MF；
  - 基于评论的方法：DeepCoNN、NARRE、DAML；
  - LLM方法：Rec-SAVER、EXP3RT、Reason4Rec。
- **评价指标**：MAE（平均绝对误差）和RMSE（均方根误差）。

## 4. 资源与算力

- **训练硬件**：传统基线使用单张H20 GPU；LLM基线和RecZero/RecOne使用8卡H20 GPU。
- **基础模型**：Qwen2.5-7B-Instruct-1M作为RL起点。
- **训练配置**：batch size=8，学习率=2e-6，每个样本8次rollout，采样温度=1.0，训练epoch=1，KL散度=0。
- **推断成本**：RecZero平均每个请求310-331个token，而SFT基线（如Reason4Rec）约350-562个token，且需多阶段推断。

## 5. 实验数量与充分性

- **主要实验**：在三个主要数据集（Book、Music、Yelp）上对比了9种方法（包括两个基线组），报告MAE和RMSE，共6个指标。
- **消融实验**：对RecOne进行了4种变体对比：无思考过程、无多步思考（单步<think>）、仅正确率奖励（整数匹配）、仅SFT无RL。在四个数据集上分别报告MAE和RMSE，共8组结果。
- **深入分析**：绘制了RecZero和RecOne在训练过程中的MAE变化曲线（200步），分析冷启动效果。
- **成本-效果分析**：在Music数据集上额外对比了RecZero(early-stop)、RecOne(SFT)等变体，报告训练样本数、GPU时间、推断token数等。
- **充分性评价**：实验覆盖多领域、多变体、多维度比较，且进行了消融和成本分析，充分验证了方法有效性。但未报告误差线或统计显著性检验，略有不足。

## 6. 主要结论与发现

- RecZero在所有数据集上MAE优于所有基线（除Book的RMSE略低于Reason4Rec外），证明纯RL范式有效性。
- RecOne在所有6个指标上均排名第一，将最佳先前RMSE降低6.7%-12.2%，MAE降低7.5%-29.9%。
- 纯RL（RecZero）在训练早期MAE先上升后下降，而冷启动的RecOne更快收敛且性能上限更高。
- 成本对比显示：RecZero(early-stop)仅用0.48K标签即达到Reason4Rec（20K标签）的MAE水平，训练时间缩短33%，推断token更少。
- 多步思考优于无思考或单步思考；仅正确率奖励会鼓励整数预测，损害MAE；仅SFT（无RL）效果最差，证实RL协同优化推理的必要性。

## 7. 优点

- **创新性**：首次将纯RL应用于LLM推荐推理，解决了蒸馏范式的根本局限。
- **简洁性**：单一模型、单一训练阶段、无需教师模型，工程开销低。
- **高效性**：RL可快速适应冷启动和数据漂移，只需数百条新交互即可重新优化。
- **可解释性**：结构化推理模板（用户分析、物品分析、匹配）增强了模型透明度。
- **成本效益**：比SFT基线更少标签和计算资源获得更好性能，增益超过5倍（每1K标签的误差减少）。

## 8. 不足与局限

- **计算资源限制**：未使用更大基模型（如7B以上）评估性能潜力，可能限制对模型真实上限的探索。
- **未探索自迭代优化**：未研究RecZero/RecOne能否作为教师模型产生冷启动数据用于多轮自迭代，闭环优化能力未验证。
- **实验统计性**：未报告误差棒或置信区间，无法判断结果稳定性。
- **超参数敏感性**：KL散度固定为0，未分析不同KL权重的影响。
- **领域覆盖有限**：仅测试了四个公开数据集（书籍、音乐、Yelp、IMDb），未在更广泛或工业场景验证。
- **评分任务单一**：仅聚焦评分预测，未检验对其他推荐任务（如点击率、序列推荐）的泛化能力。

（完）
