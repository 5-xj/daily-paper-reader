---
title: "Search and Refine During Think: Facilitating Knowledge Refinement for Improved Retrieval-Augmented Reasoning"
title_zh: 思考中搜索与细化：促进知识精炼以改进检索增强推理
authors: "Yaorui Shi, Sihang Li, Chang Wu, Zhiyuan Liu, Junfeng Fang, Hengxing Cai, An Zhang, Xiang Wang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=rBlWKIUQey"
tags: ["query:ad"]
score: 6.0
evidence: LLM推理中的迭代搜索与细化，用于发现任务
tldr: 大型语言模型在检索增强推理中常因检索到无关噪声而受限。本文提出AutoRefine，一种强化学习后训练框架，让模型在多次搜索之间显式进行知识细化步骤，逐步过滤、提炼和组织证据，然后生成答案。在多个推理任务上，该方法显著提升了回答准确率，展示了将搜索与逐步知识精炼相结合的有效性，为自动发现中的知识检索提供了新思路。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-rblwkiuqey/fig-001.webp\", \"caption\": \"\", \"page\": 3, \"index\": 1, \"width\": 433, \"height\": 415}]"
motivation: 现有检索增强推理方法常因检索到无关或噪声信息而妨碍准确推理，需要更智能的迭代检索与知识融合机制。
method: 提出AutoRefine，采用强化学习后训练，在搜索调用间引入显式的知识细化步骤，实现迭代过滤和证据组织。
result: 在多个检索密集型推理基准上，AutoRefine显著优于现有方法，验证了迭代搜索-细化范式的有效性。
conclusion: 搜索与知识细化的迭代融合能有效提升LLM在复杂推理任务中的表现，可迁移至自动发现中的知识检索场景。
---

## Abstract
Large language models have demonstrated impressive reasoning capabilities but are inherently limited by their knowledge reservoir.
Retrieval-augmented reasoning mitigates this limitation by allowing LLMs to query external resources, but existing methods often retrieve irrelevant or noisy information, hindering accurate reasoning.
In this paper, we propose **AutoRefine**, a reinforcement learning post-training framework that adopts a new "search-and-refine-during-think" paradigm.
AutoRefine introduces explicit knowledge refinement steps between successive search calls, enabling the model to iteratively filter, distill, and organize evidence before generating an answer.
Furthermore, we incorporate tailored retrieval-specific rewards alongside answer correctness rewards using group relative policy optimization.
Experiments on single-hop and multi-hop QA benchmarks demonstrate that AutoRefine significantly outperforms existing approaches, particularly in complex, multi-hop reasoning scenarios.
Detailed analysis shows that AutoRefine issues frequent, higher-quality searches and synthesizes evidence effectively.

---

## 论文详细总结（自动生成）

# 论文中文总结

## 1. 核心问题与整体含义（研究动机和背景）

大型语言模型（LLM）虽具备强大的推理能力，但其知识来源受限于训练语料，导致在处理需要最新或特定知识的问题时表现不佳。检索增强生成（RAG）通过让LLM查询外部知识库来缓解这一局限，但现有方法（即“search-during-think”范式）存在两个关键缺陷：
- **缺乏对检索文档的精炼**：模型直接使用原始检索内容，而文档中常含大量噪声或弱相关细节，容易干扰推理，尤其在多跳场景中早期干扰会破坏整个推理链。
- **检索专用奖励未被充分探索**：以往方法仅使用基于最终答案正确性的结果奖励（outcome-based reward），缺乏对检索过程本身的直接监督，使模型难以学会如何检索更相关或信息量更大的文档。

为克服这些问题，论文提出 **AutoRefine**，一种采用“search-and-refine-during-think”新范式的强化学习后训练框架，在多次搜索之间显式加入知识精炼步骤，并结合最终答案奖励与检索专用奖励进行联合优化。

## 2. 方法论

### 核心思想
AutoRefine 在标准“思考-搜索-回答”流程中插入显式的 **<refine>** 步骤，要求模型在每次检索后对文档进行提炼、筛选和组织关键证据，再生成后续搜索或最终答案。同时，通过组相对策略优化（GRPO）同时优化最终答案正确性与检索过程质量。

### 关键技术细节
- **轨迹生成**：模型按模板 `<think> ... </think>` → `<search> ... </search>` → `<documents> ... </documents>` → `<refine> ... </refine>` 循环迭代，直至生成 `<answer> ... </answer>`。迭代次数由模型自主决定，适应问题难度。
- **奖励设计**：
  - **结果奖励（\(R_{\text{Ans}}\)）**：基于最终答案与真实答案的 F1 分数，取值范围 [0,1]。
  - **检索专用奖励（\(R_{\text{Ret}}\)）**：检查所有 `<refine>` 块中的内容是否完整覆盖真实答案的所有部分，若完整覆盖则奖励为 1，否则为 0。
  - **整合公式**：
    \[
    R_{\text{Overall}} =
    \begin{cases}
    R_{\text{Ans}}, & \text{if } R_{\text{Ans}} > 0 \\
    0.1, & \text{if } R_{\text{Ans}} = 0 \text{ and } R_{\text{Ret}} > 0 \\
    0, & \text{if } R_{\text{Ans}} = R_{\text{Ret}} = 0
    \end{cases}
    \]
    即正确答案获得全额奖励；答案错误但精炼步骤提取了正确信息则给予部分奖励（0.1）；两者都不满足则无奖励。
- **训练目标**：采用 GRPO 优化策略，损失计算时屏蔽检索文档对应的 token，确保仅对模型自身生成的思考、搜索、精炼、回答部分进行更新。

## 3. 实验设计

### 数据集
- **单跳 QA**：Natural Questions (NQ)、TriviaQA、PopQA
- **多跳 QA**：HotpotQA、2WikiMultihopQA (2Wiki)、Musique、Bamboogle
- 训练集：NQ 和 HotpotQA 训练集的合并（共约 169,615 条样本）
- 评估集：七个数据集的测试集或验证集（共约 51,713 条样本）

### 基准方法（Baselines）
- 无检索：Direct Generation、SFT、R1-like 训练（无检索）
- 单跳检索：Naive RAG
- 多跳检索：Search-o1、IRCoT、ReSearch (Instruct & Base)、Search-R1 (Instruct & Base)

### 评价指标
- **精确匹配（Exact Match, EM）** 作为主要指标
- 额外报告 F1 分数和覆盖精确匹配（Cover Exact Match, CEM）

## 4. 资源与算力

论文明确说明：**AutoRefine 使用 8 张 NVIDIA A100-80GB GPU 进行全参数微调**，采用 Fully Sharded Data Parallelism (FSDP) 和 BFloat16 精度。训练 200 步，使用 vLLM 进行高效 rollout 生成（GPU 内存利用率为 0.6），每数据点生成 5 个 rollout，每个 rollout 最多 5 次搜索。但未提供具体的训练总时长或 GPU 小时数。

## 5. 实验数量与充分性

论文进行了以下实验：
1. **主实验**：在 7 个基准数据集上与 9 种基线方法对比，并区分 Base 和 Instruct 两种变体（共 14 组比较）。
2. **搜索行为分析**：分析搜索频率与搜索质量（成功搜索比例），并与 Search-R1、ReSearch 对比。
3. **知识精炼有效性分析**：比较搜索、精炼、回答三种动作的召回率与 token 长度。
4. **检索深度鲁棒性**：在 \(k \in \{1,3,5,7\}\) 下测试性能。
5. **消融研究**：
   - 去除检索奖励、去除精炼步骤+检索奖励
   - 不同奖励设计（线性 vs 非线性，作用于精炼 vs 文档）
   - 不同模型大小（3B vs 7B）
   - 不同评价指标（EM、F1、CEM）
   - 外部精炼器对比（BART、Qwen 两种提示策略）
6. **统计显著性检验**：三次随机种子实验计算均值、标准差及 T 检验（p 值 ≪ 0.01）。

实验覆盖全面，消融设计合理，统计验证充分，结果客观公平。

## 6. 主要结论与发现

1. **整体性能提升**：AutoRefine 在七项基准平均准确率上超越最强基线 Search-R1 约 6.9 个百分点（Base 变体 40.5% vs 31.2%），在多跳任务上提升尤为显著（如 2Wiki 提升 21%，Musique 提升 26.7%）。
2. **自适应多轮搜索**：模型学会根据问题复杂度动态调整搜索次数——单跳问题平均约 1.2-2.0 次，多跳问题约 2.0-2.5 次。
3. **高质量搜索**：在多跳基准上，AutoRefine 的搜索成功率（文档包含答案）持续上升至 50% 以上，远超基线方法的 30%-40%。
4. **知识精炼高效**：精炼步骤平均 token 数约 100-200，仅为原始文档的 1/4 左右，但能保留关键证据，召回率与搜索动作相匹配。
5. **检索奖励与精炼步骤缺一不可**：消融实验显示，去除两者之一均导致性能显著下降，精炼步骤还促进了更频繁、更高质量的检索。
6. **跨检索深度鲁棒**：在 \(k=1\) 至 \(7\) 范围内，AutoRefine 持续提升基线模型 0.04-0.1 准确率，尤其在高噪声（大 \(k\)）时增益更明显。

## 7. 优点

- **创新范式**：首次在检索增强推理中引入显式的“搜索-精炼”步骤，并设计专用奖励直接监督精炼质量，弥补了现有“search-during-think”方法的不足。
- **轻量有效的奖励设计**：非线性的奖励整合方式（优先最终答案，部分奖励中间精炼）简单而有效，避免了过度强调中间步骤。
- **强适应性**：模型可自主决定搜索轮次，适应性问题复杂度。
- **鲁棒性强**：在不同检索深度、不同模型大小（3B/7B）、不同评价指标下均保持优势。
- **实验严谨**：大量消融、统计检验、外部精炼器对比，充分验证了每个组件的贡献。

## 8. 不足与局限

- **评价指标局限**：仅使用 EXACT MATCH 或 F1，可能忽略语义正确但文字略有不同的回答，不适用于长形式或开放式回答。
- **静态检索语料**：使用固定的 Wikipedia 2018 快照，缺乏时效性信息，与真实搜索引擎使用场景存在差距。
- **计算成本**：虽然未详细列出，但 RL 训练（尤其是多轮搜索轨迹生成）的 GPU 开销较大，在资源有限的场景下可能受限。
- **未讨论公平性/偏差**：未分析检索到的文档可能存在的偏见或事实错误对模型输出的影响。
- **仅限问题解答**：实验框架局限于闭集 QA 任务，未验证在更开放的生成任务（如摘要、对话）上的表现。

（完）
