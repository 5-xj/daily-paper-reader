---
title: "PerturbTrace: Evaluating Feedback Use by AI Co-Scientist Agents in Perturbation Discovery"
title_zh: "PerturbTrace:评估AI共同科学家代理在扰动发现中的反馈使用"
authors: "Yu, C., Liu, S., Qiao, G., Luo, M., Xiang, Y., Xu, Z."
date: 2026-08-20
pdf: "https://www.biorxiv.org/content/10.64898/2026.08.18.745260v1.full.pdf"
tags: ["query:ad"]
score: 8.0
evidence: LLM智能体在扰动发现中用于闭环实验设计
tldr: "AI联合科学家代理已用于闭环实验设计，但其是否真正利用反馈修订决策仍属未知。PerturbTrace通过反馈到状态、状态到动作、动作到结果三阶段评估每轮转换。在17个屏幕导出任务上，四个LLM代理均优于非代理基线，但受控评估显示真实反馈无一致优势；576次转换中仅43次（7.5%）完整走完三阶段，其中25次发生在随机反馈条件下。这表明高最终召回率并不反映有效反馈使用，评价闭环代理时应同时考察性能与反馈对决策的影响。"
source: biorxiv
selection_source: fresh_fetch
motivation: AI联合科学家代理虽已用于闭环实验，但其是否真正利用反馈修订决策尚不明确。
method: 提出PerturbTrace，通过反馈到状态、状态到动作、动作到结果三阶段评估代理每轮决策的反馈使用。
result: "四个LLM代理在17个任务上大多优于非代理基线，但真实反馈相比随机无一致优势，仅7.5%转换完成完整反馈利用。"
conclusion: 高最终召回率不等于有效反馈使用，评估闭环代理需同时关注发现性能与反馈对决策的改变。
---

## 摘要
近期AI共同科学家的进展将LLM代理引入了闭环实验设计。然而，这些代理是否利用先前轮次的反馈来修订后续实验决策仍不清楚。我们通过PerturbTrace解决这一问题，该工具通过反馈到状态、状态到行动和行动到结果三个阶段来评估每轮之间的转换。这些阶段分别评估反馈是否反映在代理的推理和扰动选择策略中、所述策略是否指导下一批扰动，以及该批次是否比随机抽样预期产生更多命中。我们在17个筛选派生任务上评估了四种LLM代理，并将它们与随机选择、主动学习和LLM引导的贝叶斯优化基线进行比较。每个代理在17项任务中至少15项上优于最强的非代理方法，但在六项任务的受控评估显示，真实反馈相对于随机或无反馈并没有一致的优势。在真实或随机反馈下的576个转换中，只有43个(7.5%)完成了完整的反馈-状态-行动-结果序列，其中包括25个在随机反馈下的转换。这些发现表明，高最终召回率并不一定意味着有效的反馈使用。它们还强调了通过发现性能和反馈是否改变后续决策来评估闭环科学代理的必要性。

## Abstract
Recent advances in AI co-scientists have brought LLM agents into closed-loop experimental design. However, whether these agents use feedback from earlier rounds to revise subsequent experimental decisions remains unclear. We address this question with PerturbTrace, which evaluates each round-to-round transition through Feedback-to-State, State-to-Action, and Action-to-Outcome. These stages assess whether feedback is reflected in the agent's rationale and perturbation-selection strategy, whether the stated strategy guides the next perturbation batch, and whether that batch yields more hits than expected under random sampling. We evaluate four LLM agents on 17 screen-derived tasks and compare them with random selection, active learning, and LLM-guided Bayesian optimization baselines. Each agent outperforms the strongest non-agent method on at least 15 of the 17 tasks, yet controlled evaluations across six tasks show no consistent advantage from true feedback over random or no feedback. Among 576 transitions under true or random feedback, only 43 (7.5%) complete the full Feedback-State-Action-Outcome sequence, including 25 under random feedback. These findings show that high final recall does not necessarily indicate effective feedback use. They also highlight the need to evaluate closed-loop scientific agents by both their discovery performance and whether feedback changes their subsequent decisions.