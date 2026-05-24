---
title: Tree of Preferences for Diversified Recommendation
title_zh: 偏好树：面向多样化推荐的LLM方法
authors: "Hanyang Yuan, Ning Tang, Tongya Zheng, Jiarong Xu, Xintong Hu, Renhong Huang, Shunyu Liu, Jiacong Hu, Jiawei Chen, Mingli Song"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=KlZUwDP0pR"
tags: ["query:llm-sr"]
score: 8.0
evidence: 利用大语言模型进行多样化推荐
tldr: 针对多样化推荐中数据偏差导致用户偏好未被充分探索的问题，提出利用大语言模型的零样本推理能力构建偏好树的方法。该方法通过LLM的世界知识推断用户未显现的偏好，从而生成更丰富的推荐候选项。实验表明，该方法在多样化推荐任务上显著提升了覆盖率和用户满意度，为缓解推荐系统中的数据偏差提供了新思路。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-klzuwdp0pr/fig-001.webp\", \"caption\": \"\", \"page\": 4, \"index\": 1, \"width\": 1024, \"height\": 1536}]"
motivation: 现有多样化推荐方法受数据偏差影响，难以捕捉用户未充分表达的偏好。
method: 利用大语言模型的零样本推理能力，构建偏好树以推断用户未显现的偏好，从而生成多样化推荐。
result: 实验证明该方法在多样化推荐任务上有效提升了覆盖率和用户满意度。
conclusion: LLM的零样本推理能力可用于缓解推荐系统中的数据偏差问题。
---

## Abstract
Diversified recommendation has attracted increasing attention from both researchers and practitioners, which can effectively address the homogeneity of recommended items.
Existing approaches predominantly aim to infer the diversity of user preferences from observed user feedback.
Nonetheless, due to inherent data biases, the observed data may not fully reflect user interests, where underexplored preferences can be overwhelmed or remain unmanifested. Failing to capture these preferences can lead to suboptimal diversity in recommendations. To fill this gap,  this work aims to study diversified recommendation from a data-bias perspective.
Inspired by the outstanding performance of large language models (LLMs) in zero-shot inference leveraging world knowledge, we propose a novel approach that utilizes LLMs' expertise to uncover underexplored user preferences from observed behavior, ultimately providing diverse and relevant recommendations.
To achieve this, we first introduce Tree of Preferences (ToP), an innovative structure constructed to model user preferences from coarse to fine. ToP enables LLMs to systematically reason over the user's rationale behind their behavior, thereby uncovering their underexplored preferences.
To guide diversified recommendations using uncovered preferences, we adopt a data-centric approach, identifying candidate items that match user preferences and generating synthetic interactions that reflect underexplored preferences.  These interactions are integrated to train a general recommender for diversification.
Moreover, we scale up overall efficiency by dynamically selecting influential users during optimization.
Extensive evaluations of both diversity and relevance show that our approach outperforms existing methods in most cases and achieves near-optimal performance in others, with reasonable inference latency.

---

## 论文详细总结（自动生成）

# 详细中文总结：Tree of Preferences for Diversified Recommendation

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：现有多样化推荐方法主要依赖用户历史交互数据来推断偏好多样性，但数据本身存在固有偏差（如曝光偏差、选择偏差），导致用户的**未充分探索偏好**（underexplored preferences）被主导偏好掩盖或未被表达，从而限制了推荐多样性的提升，甚至可能降低相关性。
- **整体含义**：本文首次从**数据偏差**视角审视多样化推荐问题，提出利用大语言模型（LLM）的外部世界知识来补全观测数据的不足，通过推断用户隐藏的潜在偏好，在维持相关性的同时提升推荐多样性。

## 2. 论文提出的方法论

### 核心思想
- 构建一个**偏好树（Tree of Preferences, ToP）**，分层建模用户偏好（从粗粒度到细粒度）。
- 利用LLM的零样本推理能力，沿着ToP对用户历史行为进行**自上而下的推理**，分析行为背后的原因，并识别未在观测数据中显现的潜在偏好。
- 将识别出的潜在偏好映射到物品上，生成**合成交互数据**，以此训练通用推荐模型，实现多样化推荐。

### 关键技术细节
1. **构建ToP**：
   - 从物品集中通过k-means采样一个文本丰富的子集S。
   - 利用LLM按指令`Prompt_ToP`逐步划分偏好空间，生成层次化树结构（全局一次性构建，所有用户共享）。
2. **用户潜在偏好推理**：
   - 对每个用户，LLM按`Prompt_PR`进行广度优先搜索，从根节点开始，每层选择最能解释用户行为的偏好节点，直至叶子节点。
   - LLM会重新评估是否遗漏未观测偏好，若存在则添加相应路径。
3. **物品匹配与合成交互生成**：
   - 利用LLM（`Prompt_IM`）将每个物品预分配到ToP的叶子节点。
   - 对每个用户，计算候选物品的多样性和相关性分数：
     - 多样性分数 \( s_{div}(u,i) \propto 1/freq_i \)（freq_i为与该物品关联的偏好历史出现频率）。
     - 相关性分数 \( s_{rel}(u,i) = \langle Enc(A_u), Enc(A_i) \rangle \)（BERT编码的余弦相似度）。
     - 综合分数 \( s(u,i) = (1-\lambda) s_{rel} + \lambda s_{div} \)。
   - 选择分数高于阈值的物品，加入用户历史作为合成交互。
4. **成本优化**：
   - 动态选择**有影响力的用户**生成合成交互：计算用户局部梯度与模型参数更新轨迹的**k步对齐度**（\( Inf_u = \sum_{t} \langle \nabla \ell(u;\theta_{t-1}), \theta_t - \theta_{t-1} \rangle \)），选择影响力高的用户，并进行梯度降维和分组以降低计算开销。

## 3. 实验设计

- **数据集**：
  - Twitter（社交网络）、Weibo（社交网络）、Amazon（电商，合并7个类别）。
  - 均使用10-core（Twitter 5-core）过滤，训练/验证/测试划分0.6:0.2:0.2。
- **Benchmark**：
  - 对比9种基线方法，分为三类：
    - **启发式**：Random、MMR、DPP。
    - **传统多样性方法**：Box、LCD-UC、CDM。
    - **基于LLM的方法**：LLMRec-MMR、LLM4Rerank-A、LLM4Rerank-AD。
  - 统一使用Qwen2.5-32B-Instruct作为LLM，推荐主干为LightGCN（也验证了MF、NGCF）。
- **评估指标**：
  - **相关性**：Recall@k（k=50,100）。
  - **多样性**：Category Entropy@k（k=50,100）。

## 4. 资源与算力

- **硬件**：
  - 单台机器：Ubuntu 20.04，AMD EPYC 7763 CPU（756GB内存），NVIDIA RTX3090 GPU（24GB显存）。
- **模型与时间**：
  - 使用Qwen2.5-32B-Instruct完成LLM任务。
  - 论文未明确记录整体训练时长或LLM推理总耗时，但提供了**推理延迟对比**（图3(a)），显示ToP-Rec与传统方法（CDM、LCD-UC）相当，远优于LLM4Rerank。

## 5. 实验数量与充分性

- **实验组数**：涵盖三个数据集 × 多个基线（9个）+ 主干变体（MF、NGCF）+ 消融研究（4个变体）+ 超参数分析（λ、生成交互数、叶节点数、ToP深度/分支因子）+ 稳定性分析（不同LLM、不同提示策略、不同采样比例）+ 与生成式LLM方法DLCRec的额外对比。
- **充分性评价**：
  - 实验设计较为全面，涵盖了主流基线、多种主干、关键组件消融和超参数敏感性。
  - 提供了标准偏差和误差范围，增强了统计可靠性。
  - 进一步分析了多样性-相关性权衡，并展示了ToP-Rec在权衡上的优势。
  - 结论客观，承认了在极小情况下的次优结果，未片面夸大。

## 6. 论文的主要结论与发现

- ToP-Rec在**大多数情况下**同时提升了多样性和相关性，优于所有基线。
- 在多样性-相关性权衡中，ToP-Rec实现了**最佳平衡**，且相关性相对于主干模型（LightGCN）持续提升。
- 推理延迟与传统方法相当，显著优于LLM重排序方法。
- 消融实验证实：偏好推理（PR）、多样性/相关性分数、用户选择策略均对最终性能有正向贡献。
- 超参数分析表明：增大λ（多样性权重）可提升多样性但降低相关性；增加生成交互数使多样性先升后稳；叶节点数适中时效果最好。

## 7. 优点

- **创新视角**：首次从数据偏差角度出发，利用LLM世界知识补全未探索偏好，超越纯观测数据限制。
- **精细建模**：偏好树（ToP）实现粗到细的层次推理，避免粗粒度匹配引入噪声。
- **通用性**：无需要改推荐模型结构，通过数据增强方式适配任意通用推荐器。
- **成本可控**：通过动态用户选择降低LLM交互生成成本，并提供了理论分析支撑。
- **实验严谨**：多个数据集、多主干、全面消融、稳定性测试，结果可靠。

## 8. 不足与局限

- **文本质量依赖**：方法和物品属性用自然语言描述，若文本信息稀疏或质量低（如纯视频/图片平台），效果可能下降。
- **未关注新颖性**：论文明确将多样性（category entropy）与新颖性（long-tail proportion）区分，但未处理新颖性，用户可能仍面临无法发现冷门或意外物品的问题。
- **LLM偏差风险**：LLM世界知识本身可能带有偏见或事实错误，可能影响偏好推理的准确性。
- **计算成本**：尽管有用户选择策略，但LLM单次推理仍耗时，扩展至大规模真实系统仍需进一步优化。
- **局限性声明**：作者在附录A.5自行指出了上述两点限制，并提出未来将结合新颖性目标。

（完）
