---
title: "GrAdaBeam: Combining model gradients with evolutionary search for generalizable nucleic acid design"
title_zh: GrAdaBeam：结合模型梯度与进化搜索的可泛化核酸设计
authors: "Shor, J., Strand, E., McLean, C. Y."
date: 2026-04-01
pdf: "https://www.biorxiv.org/content/10.1101/2025.06.20.660785v4.full.pdf"
tags: ["query:ahd"]
score: 7.5
evidence: 结合演化搜索的混合模型优化用于核酸设计
tldr: 本研究提出GrAdaBeam，一种将梯度注意图与自适应束搜索相结合的混合优化算法，用于复杂核酸设计。它统一了进化搜索的广泛探索与梯度下降的精确指导，在NucleoBench基准的17个任务和60万次实验中表现卓越，展现出更好的泛化与生物信号捕获能力。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有核酸设计优化算法难以在所有任务中保持稳健性能，亟需融合多策略的方法。
method: 通过融合梯度导出的注意图与自适应束搜索，GrAdaBeam在核酸适应度景观中高效搜索。
result: GrAdaBeam在多个基因组设计任务上显著优于现有算法，表现出更强的泛化与生物信号捕获能力。
conclusion: GrAdaBeam提供了在多样核酸设计任务中更鲁棒和可推广的解决方案。
---

## 摘要
我们提出了 GrAdaBeam，这是一种混合的基于模型的优化算法，它将由梯度衍生的注意力图与自适应束搜索相结合，以在复杂的核酸适应度景观中进行导航。通过将进化方法的广泛探索能力与梯度下降的精确指导相结合，GrAdaBeam 克服了现有方法的一个核心限制：没有单一的优化策略能够在整个基因组设计任务范围内稳定表现。我们利用 NucleoBench 对 GrAdaBeam 和其他七种设计算法进行了严格评估。NucleoBench 是一个涵盖 17 个不同基因组任务的新型基准测试，其中引入了配对起始序列设计，以实现更优的统计比较。GrAdaBeam 在超过 600,000 个实验中在统计上优于所有其他算法，在所有 17 个基准任务中排名从未低于第二，而基线方法在处理大型模型或长序列时常常表现不佳。尤其值得注意的是，GrAdaBeam 生成的序列在独立的预测模型中表现出最可靠的泛化能力，并能从头恢复出经典的转录因子结合基序，表明其捕获了超出优化目标的生物学信号。GrAdaBeam 和 NucleoBench 作为开源软件包免费提供。

## Abstract
We introduce GrAdaBeam, a hybrid model-based optimization algorithm that combines gradient-derived attention maps with an adaptive beam search to navigate complex nucleic acid fitness landscapes. By unifying the broad exploration of evolutionary methods with the precise guidance of gradient descent, GrAdaBeam overcomes a central limitation of existing approaches: no single optimization strategy performs robustly across the full spectrum of genomic design tasks. We rigorously evaluate GrAdaBeam and seven other design algorithms using NucleoBench, a novel benchmark covering 17 diverse genomic tasks that introduces a paired-start-sequence design for superior statistical comparisons. GrAdaBeam statistically outperforms all other algorithms across over 600,000 experiments, never ranking lower than second across all 17 benchmark tasks, while baseline methods often struggle on large models or long sequences. Critically, GrAdaBeam sequences generalize most reliably to independent predictive models and recover canonical transcription factor binding motifs de novo, providing evidence of biological signal capture beyond the optimization target. GrAdaBeam and NucleoBench are freely available as an open-source package.