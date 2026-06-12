---
title: "ProtGPT3: an Open-source family of Promptable and Aligned Protein Language Models"
title_zh: "ProtGPT3: 开源可提示且对齐的蛋白质语言模型家族"
authors: "Garibbo, M., Boxo Corominas, G., Stocco, F., Illanes Vicioso, R., Middendorf, L., Ferruz, N."
date: 2026-06-08
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.04.730041v1.full.pdf"
tags: ["query:ad"]
score: 6.0
evidence: 蛋白质语言模型系列，支持可控生成，助力序列发现
tldr: 生成式蛋白质语言模型在蛋白质设计中潜力巨大，但可靠控制生成至特定功能家族仍具挑战。本文提出ProtGPT3，一个开源蛋白质语言模型家族，参数从112M到10B，集成HuggingFace，支持单序列和多序列比对（MSA）提示。系统比较监督微调和少样本提示，发现对齐后训练有效减少低复杂度生成，少样本提示更具可扩展性。在脱氟酶案例中，MSA模型取得了更高计算成功率和实验验证，并提出了基于同源的Feynman-Kac推理方法。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有蛋白质语言模型难以可靠控制生成目标功能家族，亟需对齐方法和提示控制策略。
method: 开发ProtGPT3模型家族（112M-10B参数），支持单序列和MSA提示，比较监督微调与少样本提示，并应用后训练对齐。
result: 对齐减少低复杂度生成；少样本提示在脱氟酶设计中优于微调基线，MSA模型经实验验证可溶表达。
conclusion: 开源ProtGPT3系列为可控蛋白质生成提供灵活框架，少样本提示和推理时间计算是有效策略。
---

## 摘要
生成式蛋白质语言模型（pLMs）能够探索广阔的序列空间以进行蛋白质设计，但可靠地控制生成方向以得到所需功能家族仍然具有挑战性。尽管蛋白质生成大致遵循了自然语言处理的趋势，但有两个方向尚未得到充分探索：针对设计目标优化模型行为的对齐方法，以及在推理时无需微调即可实现的基于提示的控制。我们推出了ProtGPT3，这是一个开源蛋白质语言模型家族，参数规模从1.12亿到100亿不等，并集成了Hugging Face生态系统。该套件包括单序列和多序列比对（MSA）可提示模型，能够为生成提供灵活的条件控制。在不同模型规模和蛋白质家族中，我们系统地比较了使用同源序列的监督微调和少样本提示。类似于大型语言模型（LLMs）通常与用户意图对齐的方式，我们研究了单序列模型中使用序列复杂度和结构置信度指标在整个蛋白质组上的训练后对齐。我们发现，对齐在保持序列多样性的同时减少了低复杂度生成。此外，我们证明少样本提示是监督微调的一种有竞争力且更具可扩展性的替代方案，用于控制生成。在一个低数据量的脱氟酶案例研究中，ProtGPT3-MSA 实现了比微调基线更高的计算成功率，并且产生的设计在实验验证后是可溶且表达的。最后，我们通过引入基于同源的Feynman-Kac推理过程，探索了MSA模型中推理时计算的潜力，以引导蛋白质生成朝向期望目标。所有模型公开于 https://huggingface.co/collections/AI4PD/protgpt3-family。

## Abstract
Generative protein language models (pLMs) enable exploration of vast sequence spaces for protein design, but reliably controlling generation toward desired functional families remains challenging. While protein generation has broadly followed trends in NLP, two directions remain underexplored: alignment methods that optimize model behavior toward design objectives, and prompting-based control at inference time without fine-tuning. We introduce ProtGPT3, an open-source family of protein language models spanning 112M to 10B parameters and integrated with the Hugging Face ecosystem. The suite includes both single-sequence and multiple sequence alignment (MSA)-promptable models, enabling flexible conditioning for generation. Across model scales and protein families, we systematically compare supervised fine-tuning and few-shot prompting using homologous sequences. Analogous to how large language models (LLMs) are routinely aligned with user intent, we study post-training alignment in single-sequence models using sequence-complexity and structure-confidence metrics across the proteome. We find that alignment reduces low-complexity generations while preserving sequence diversity. Furthermore, we show that few-shot prompting is a competitive and more scalable alternative to supervised fine-tuning for controlled generation. In a low-data defluorinase case study, ProtGPT3-MSA achieved higher computational success rates than fine-tuned baselines and produced designs that were soluble and expressed following experimental validation. Finally, we explore the potential of inference-time compute in MSA models by introducing a homolog-based Feynman-Kac inference procedure for steering protein generation toward desired targets. All models are publicly available at https://huggingface.co/collections/AI4PD/protgpt3-family.