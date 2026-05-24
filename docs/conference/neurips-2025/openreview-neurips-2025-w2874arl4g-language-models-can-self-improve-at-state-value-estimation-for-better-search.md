---
title: Language Models can Self-Improve at State-Value Estimation for Better Search
title_zh: 语言模型可通过自我改进状态值估计以优化搜索
authors: "Ethan Mendes, Alan Ritter"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=W2874Arl4g"
tags: ["query:ad"]
score: 7.0
evidence: 通过语言模型前瞻自改进状态值估计，辅助启发式搜索
tldr: 多步推理中收集真实奖励或人类示范代价高昂。本文提出Self-Taught Lookahead（STL），一种无监督框架，训练价值LLM模拟下一步动作、结果状态及其价值，作为值迭代的思维链类比。在无需标注数据的情况下，STL改进了状态值预测，进而提升了基于搜索的决策质量。该方法展示了语言模型在自改进搜索引导方面的能力，可用于自动发现中的启发式搜索指导。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-w2874arl4g/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 1536, \"height\": 1024}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-w2874arl4g/fig-002.webp\", \"caption\": \"\", \"page\": 2, \"index\": 2, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-w2874arl4g/fig-003.webp\", \"caption\": \"\", \"page\": 2, \"index\": 3, \"width\": 612, \"height\": 612}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-w2874arl4g/fig-004.webp\", \"caption\": \"\", \"page\": 2, \"index\": 4, \"width\": 1280, \"height\": 1280}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-w2874arl4g/fig-005.webp\", \"caption\": \"\", \"page\": 2, \"index\": 5, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-w2874arl4g/fig-006.webp\", \"caption\": \"\", \"page\": 2, \"index\": 6, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-w2874arl4g/fig-007.webp\", \"caption\": \"\", \"page\": 2, \"index\": 7, \"width\": 1919, \"height\": 1920}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-w2874arl4g/fig-008.webp\", \"caption\": \"\", \"page\": 3, \"index\": 8, \"width\": 618, \"height\": 618}]"
motivation: 多步推理任务中获取真实奖励或人类示范成本过高，需要无标签的自改进搜索引导方法。
method: 提出STL框架，训练价值LLM通过自然语言前瞻模拟未来状态与动作，自监督优化值估计。
result: 在交互式网页任务等环境中，STL提升了基于搜索的策略质量，无需任何外部监督。
conclusion: 语言模型可通过自引导前瞻提升值函数精度，为启发式搜索引导的自动发现提供无监督优化方法。
---

## Abstract
Collecting ground-truth rewards or human demonstrations for multi-step reasoning tasks is often prohibitively expensive, especially in interactive domains such as web tasks. We introduce Self-Taught Lookahead (STL), a reward-free framework that improves language model–based value functions by reasoning explicitly about state transitions. STL can be viewed as a chain-of-thought analogue of the value iteration algorithm: instead of regressing directly on numeric values, a value LLM is trained to simulate a step of lookahead in natural language—predicting the next action, resulting state, and rationale for its value. This process refines value estimates without any labeled data. The self-supervised procedure yields more accurate state-value predictions, which in turn enable lightweight search algorithms to expand fewer states while maintaining strong performance. Empirically, STL-trained value models built on moderately sized (8B-parameter) open-weight LLMs boost web agent success rates by over 39%, achieving performance comparable to proprietary models. STL also generalizes to multi-hop question answering and math puzzles. Overall, STL enables small open-source models to guide efficient search, reducing inference costs by integrating explicit reasoning with value learning.

---

## 论文详细总结（自动生成）

# 论文详细总结

## 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：在多步推理任务（如 Web 导航、多跳问答）中，收集真实奖励信号或人类示范通常成本极高（例如 Web 任务中，小规模数据收集就可能花费数千美元）。现有方法可分为三类：
  - **Reward & Demo Learning**：依赖真实的奖励或人类示范进行强化学习或模仿学习。
  - **Reward-Guided Inference**：在推理阶段使用奖励信号（如 Monte Carlo Tree Search），但训练时不需要。
  - **Reward & Demo Free**：训练和推理都无需奖励/示范，但通常只能依赖通用的 LLM 提示，性能受限。
- **整体含义**：作者希望在 **无奖励、无人工示范** 的条件下，让 LLM 自身通过环境交互来自我改进搜索所需的状态‑价值估计，从而提升多步推理性能，并降低部署成本。

## 2. 方法论：核心思想与关键技术细节

- **核心思想**：Self-Taught Lookahead (STL) 是一种自监督框架，可以看作 **值迭代算法在自然语言上的思维链（Chain-of-Thought）类比**。它让一个价值 LLM 通过 **模拟一步前瞻**（预测下一最佳动作、后继状态及其价值理由）来改进当前状态的价值估计，而无需真实奖励。

- **关键技术流程**（详见 Algorithm 1）：
  1. **生成 Rollout 数据**：使用策略模型 πθ 和当前价值模型 Vϕk 在树搜索（MCTS 或 BFS）中收集状态。对于每个访问的状态 sj，计算 **lookahead value**：
     \[
     y_{s_j} \leftarrow \gamma \max_{a \in A_{s_j}} \text{Val}\big(V_{\phi_k}(x, s_0, \dots, s_j, T(s_j, a))\big)
     \]
     同时生成 **动作‑结果理由**（action‑outcome rationale）：
     \[
     o_{s_j} \leftarrow a^*_j \;||\; s^*_{j+1} \;||\; \text{Rat}\big(V_{\phi_k}(x, s_0, \dots, s_j, s^*_{j+1})\big)
     \]
     其中 \(a^*_j\) 是使后继状态价值最大的动作，\(s^*_{j+1}\) 是对应的环境后继状态。
  2. **微调价值模型**：从基础 LLM 初始化 Vϕ₀，使用收集到的 (s, o, y) 对进行标准交叉熵损失训练。模型被要求先生成理由再输出数值价值。
  3. **迭代**：用新训练的价值模型替换旧模型，进行下一轮数据生成和训练（实验中发现单轮 Web 任务即足够；Game-of-24 可进行多轮）。
  4. **搜索时使用**：训练好的价值模型可直接用于贪婪搜索或 BFS，在推理时 **模拟一步前瞻** 来评估状态，从而减少实际环境交互。

## 3. 实验设计

- **数据集与场景**：
  - **WebShop**：交互式 Web 购物任务，需根据自然语言描述搜索并购买商品。测试集有 500 例（全集）和 50 例（mini set）。
  - **HotpotQA**：多跳问答，需检索并推理维基百科条目。测试集 500 例及 50 例。
  - **Game-of-24**：数学谜题，用四个数字通过四则运算得到 24。

- **对比方法**：
  - **Reward & Demo Learning**：BERT+BART（IL/RL）、AgentQ（RL+SFT）。
  - **Reward-Guided Inference**：Reflexion（使用真实奖励反思）、LATS（LLM‑MCTS 使用真实奖励）。
  - **Reward & Demo Free**（STL 所属类别）：贪婪搜索/MCTS 基线（使用 gpt‑3.5‑turbo、gpt‑4o、llama‑3.1‑8b‑instruct、r1‑distill‑llama‑8b 等作为价值模型），以及 STL 微调后的 llama‑3.1‑8b‑instruct 价值模型。

- **评估指标**：平均奖励（Score）和成功率（SR）用于 WebShop；匹配率（Match Rate）用于 HotpotQA；准确率用于 Game-of-24。

- **重要设置**：
  - WebShop 中使用 **贪婪搜索**（pass@3），STL 数据生成使用 MCTS（5 轮）仅 50 个训练任务（1161 个样例）。
  - HotpotQA 使用 500 个训练任务（因动作多样性低）生成数据。
  - Game-of-24 使用 BFS，迭代 4 轮，每轮 25 个任务（后扩展到 50 个以验证泛化）。

## 4. 资源与算力

- 论文中明确提及：
  - **微调**：使用单张 NVIDIA A40 GPU，采用 LoRA 微调。WebShop 任务微调时长约 **4.5 小时**，估计成本 **1.76 美元**。
  - **数据生成**：使用 OpenAI 和 Groq API，数据生成总成本约 **8.54 美元**。
  - **推理成本**：STL 的 token 用量和费用显著低于同等性能的 gpt‑4o 方法（约便宜 5 倍）。
- **未明确说明**：数据生成的具体 GPU 小时数（因主要依赖 API），以及更大模型（>8B）的微调资源需求。

## 5. 实验数量与充分性

- **实验数量**：覆盖三大类任务，共计十余个基线对比，每类任务均报告了多次运行的平均结果。
  - WebShop：全测试集（500）和 mini 集（50），包含多个开源/闭源价值模型对比。
  - HotpotQA：全测试集（500）和 mini 集（50）。
  - Game-of-24：seen/unseen 测试集，迭代多轮。
  - 消融实验：WebShop 上对比仅使用 lookahead 值、加状态表示、再加推理理由的效果。
  - 效率分析：计算成本、环境访问次数、缩放趋势（不同大小模型）。
  - 超参数：γ ∈ [0.75,1.0] 的验证。
- **充分性与公平性**：
  - 使用 **paired bootstrap test** 计算统计显著性（p值）。
  - 基线方法尽可能保持一致（相同策略模型、相同分支因子等）。
  - 消融实验揭示了各信息成分的贡献。
  - 在 Game-of-24 上发现多迭代后泛化性能先降后升，并通过增加训练轮次验证了原因。
- **结论**：实验设计全面、客观，结果具有较强的说服力。

## 6. 论文的主要结论与发现

1. **性能提升显著**：在 WebShop 上，STL（基于 llama‑3.1‑8B）相比相同基线的贪婪搜索 **成功率提升 39%**（从 25.8% → 40.6%），分数提升超过 7 个百分点，与使用 gpt‑4o 作为价值模型的效果相当。
2. **匹配/超越封闭模型**：STL 在 WebShop、HotpotQA 和 Game-of-24 上均匹配或接近使用封闭源模型（gpt‑4o、gpt‑3.5‑turbo）的价值函数。
3. **效率优势**：STL 在推理阶段成本比同等性能的 gpt‑4o 方法便宜约 5 倍，且环境交互次数（扩展状态数）减少一半以上。
4. **可扩展性**：在 3B 到 8B 参数的开源模型上，STL 均能带来提升，且 3B 模型也能接近 gpt‑4o 的性能。
5. **理由学习的重要性**：消融实验表明，同时学习 lookahead 值、状态表示和值理由才能达到最佳效果，仅学习数值无法获得同等改进。
6. **泛化能力**：STL 在三种不同性质的任务（网页、问答、数学）上均有效，证明其框架的通用性。

## 7. 优点

- **方法创新性**：将经典强化学习中的 **值迭代** 思想以 **自然语言前瞻** 的形式实现，充分利用了 LLM 的语言推理能力，而不仅仅是数值回归。
- **无监督自改进**：完全不需要真实奖励或人工示范，仅依靠环境状态转换来生成训练数据，大幅降低了数据收集成本。
- **效率与性能平衡**：通过改进价值估计，使得轻量级搜索（贪婪搜索）也能达到甚至超越复杂树搜索（MCTS、LATS）的效果，同时减少计算和环境负担。
- **可扩展性与实用性**：适用于中小型开源模型（3B‑8B），降低了部署门槛，且实验证明其性价比优于封闭源模型。
- **实验严谨性**：提供了详细超参数、消融、显著性检验、效率分析等，结论可信。

## 8. 不足与局限

- **依赖任务规范**：STL 要求提供任务描述（如 WebShop 的自然语言指令），虽然比需要奖励/示范更宽松，但在某些完全无指令的场景下可能不适用。
- **动作多样性要求高**：在动作空间贫乏的任务（如 HotpotQA 中搜索词种类有限）中，需要多得多的训练任务（500 vs 50）才能有效改进；低多样性时改进幅度较小。
- **多迭代困难**：在 WebShop 上，第二轮 STL 反而导致性能下降，作者归因于价值模型难以准确模拟超过一步的前瞻（环境复杂）。仅在 Game-of-24 这种确定性且状态空间较小的情况下才实现多轮改进。
- **语言依赖性**：STL 需要动作和状态能用自然语言描述，对于传统 RL 任务（如网格世界、连续控制）难以直接应用，除非先进行语言化包装。
- **模型规模局限**：实验仅测试到 8B 参数模型，未探索更大模型（如 70B）上的表现，且未在更大规模上进行自改进。
- **未评估潜在风险**：自我改进可能让模型学习到不符合人类偏好的行为，作者虽在伦理部分提及，但并未设计实验来度量或缓解该风险。

（完）
