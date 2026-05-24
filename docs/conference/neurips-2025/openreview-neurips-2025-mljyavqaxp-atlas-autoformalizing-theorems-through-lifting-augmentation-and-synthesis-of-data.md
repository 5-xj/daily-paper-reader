---
title: "ATLAS: Autoformalizing Theorems through Lifting, Augmentation, and Synthesis of Data"
title_zh: "ATLAS: 通过提升、增强和数据合成进行定理自动形式化"
authors: "Xiaoyang Liu, Kangjie Bao, Jiashuo Zhang, Yunqi Liu, Yu Chen, Yuntian Liu, Yang Jiao, Tao Luo"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=MlJyAvQaxp"
tags: ["query:ad"]
score: 7.0
evidence: 利用LLM生成自动形式化平行语料，促进数学知识的自动发现
tldr: 在自动形式化领域，平行语料的稀缺严重限制了LLM的性能。为此，本文提出了ATLAS框架，它从一个概念库开始，通过提升、增强和合成三个模块，利用LLM自动生成大规模且高质量的定理陈述平行语料。在多个基准上的实验证明，ATLAS生成的语料显著提升了自动形式化模型的表现，超过了先前的方法。这项工作不仅解决了数据瓶颈，还为利用LLM进行数学知识的自动发现奠定了基础，展示了数据增强在推动自动形式化进展中的关键作用。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-mljyavqaxp/fig-001.webp\", \"caption\": \"\", \"page\": 4, \"index\": 1, \"width\": 1918, \"height\": 1920}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-mljyavqaxp/fig-002.webp\", \"caption\": \"\", \"page\": 4, \"index\": 2, \"width\": 640, \"height\": 640}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-mljyavqaxp/fig-003.webp\", \"caption\": \"\", \"page\": 6, \"index\": 3, \"width\": 512, \"height\": 512}]"
motivation: 在自动形式化任务中，平行语料的匮乏严重制约了性能提升，因此迫切需要一种能大规模生成高质量语料的方法。
method: 提出ATLAS框架，基于概念库，利用LLM通过提升、增强和合成三步生成定理陈述的平行语料。
result: 实验表明，ATLAS生成的语料使自动形式化模型的性能得到显著提升，验证了该数据驱动方法的有效性。
conclusion: ATLAS为自动形式化提供了可扩展的高质量数据生成方案，有望加速数学知识的自动化发现进程。
---

## Abstract
Autoformalization, the automatic translation of mathematical content from natural language into machine-verifiable formal languages, has seen significant progress driven by advances in large language models (LLMs). Nonetheless, a primary barrier to further improvements is the limited availability of parallel corpora that map informal mathematical text to its formal counterpart. To address this limitation, we propose ATLAS (Autoformalizing Theorems through Lifting, Augmentation, and Synthesis of Data), a novel data generation framework designed to produce large-scale, high-quality parallel corpora of theorem statements. Distinct from prior approaches, ATLAS begins with a concept repository, accelerates the improvement of the student model through expert iteration combined with knowledge distillation, and introduces two novel augmentation strategies that exploit the structural characteristics of formal languages. Running the proposed ATLAS framework for 10 iterations, we construct an undergraduate-level dataset of 117k theorem statements and develop the ATLAS Translator by fine-tuning Llama3.1-8B-Instruct with LoRA. This model establishes a new state of the art, demonstrating statistically significant improvements over both the Herald Translator and the Kimina-Autoformalizer across all benchmarks (p<0.05, two-sided t-test). Furthermore, we demonstrate that the full-parameter fine-tuning of a stronger base model on the ATLAS dataset leads to superior performance. The datasets, model, and code are available at https://github.com/XiaoyangLiu-sjtu/ATLAS.

---

## 论文详细总结（自动生成）

# 论文结构化总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：自动形式化（autoformalization）是将自然语言数学内容自动翻译成机器可验证的形式语言。该任务严重受限于高质量平行语料（自然语言定理陈述与形式语言定理陈述的对齐数据）的稀缺。
- **背景**：现有方法要么从Mathlib中提取形式语言语句并用LLM生成自然语言版本（但Mathlib规模有限），要么从大规模网络语料中收集自然语言语句再翻译成形式语言（但需要大量预处理过滤可形式化语句，效率低）。
- **整体含义**：本文提出ATLAS框架，旨在通过创新的数据生成方法大规模、高质量地构造平行定理陈述语料，从而突破自动形式化的数据瓶颈。这项工作为利用LLM自动发现和形式化数学知识提供了基础性工具。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：从Mathlib中提取数学概念构成概念库，然后通过数据提升（Lifting）、数据合成（Synthesis）和数据增强（Augmentation）三个模块，利用LLM和Lean编译器生成并验证平行语句，并通过专家迭代（expert iteration）逐步提升学生模型能力，最终构建大规模高质量数据集。
- **关键技术细节**：
  - **Data Lifting**：从Mathlib的undergrad.yaml中提取13个领域、55个主题、350个概念，构成概念库。与以往从NL或FL出发不同，ATLAS从概念出发合成NL语句，避免预处理并保证可扩展性。
  - **Data Synthesis**：
    - NL语句生成：以教师模型（DeepSeek-V2.5）随机采样两个概念生成NL定理陈述（不超过50词）。
    - NL语句翻译：学生模型（Llama3.1-8B-Instruct）将NL翻译为FL语句。
    - FL语句解析与编译：使用Lean编译器和`#check`解析FL语句为四部分（定理名、变量、假设、结论），编译失败则返回错误信息。
    - FL语句修订：教师模型根据错误信息修改FL语句，再次编译。
    - FL语句对齐：教师模型评估NL-FL对的语义一致性，评级为good或average的加入合成数据。
  - **Data Augmentation**：
    - 通过证明增强：对每个FL语句，用DeepSeek-Prover-V1.5生成证明，在每一步证明步骤后，利用Lean的Infoview中更新的证明状态构造新的FL语句（仅保留最后一步）。
    - 通过反位增强：对每个假设使用`contrapose!`策略，利用Infoview生成等价的反位FL语句，并用Levenshtein距离选择与原始语句差异最大的。
    - 增强数据构建：对增强后的FL语句重新编译，仅保留编译成功的；最后用LLM将其翻译回NL，形成平行语句。
  - **专家迭代**：共进行10轮迭代，每轮合成10,000个新NL语句，与上一轮剩余NL语句一起生成合成和增强数据，微调学生模型后进入下一轮。学生模型生成数据的比例从42.63%上升到82.30%。

## 3. 实验设计：数据集、Benchmark、对比方法

- **数据集**：
  - **ATLAS数据集**：经过10轮迭代构建，共117,145对本科生级平行语句（合成数据54,641，证明增强22,103，反位增强40,401）。
  - **MathQual数据集**：本文新建的465个研究生级自然语言问题，来自多所大学的博士资格考试，涵盖代数、拓扑、分析等多个领域，用于评估模型在更具挑战性数据上的泛化能力。
  - **其他评估数据集**：ProofNet（本科生级）、PutnamBench（竞赛级）、miniF2F（奥林匹克级）。
- **Benchmark**：在ProofNet、PutnamBench、MathQual上评估pass@1、pass@8、pass@32指标，每个实验使用5个种子（42-46）取平均值，并做双尾t检验（p<0.05）验证统计显著性。
- **对比方法**：
  - 教师模型：DeepSeek-V3（原V2.5已停服）
  - 初始化模型：Llama3.1-Initialization
  - 现有SOTA：Herald Translator（数据集1160k）、Kimina-Autoformalizer（训练中有人工专家参与）
  - 本文模型：ATLAS Translator（基于Llama3.1-8B-Instruct + LoRA，仅117k数据，无人工干预）

## 4. 资源与算力

- 明确说明：所有实验在单个NVIDIA A100 GPU（40GB显存）上进行。专家迭代阶段每次微调只需10分钟到1小时。
- 其他训练细节：使用LoRA（秩参数未明确）微调3个epoch，总批次大小128，学习率1.0e-5，余弦衰减计划。
- 全参数微调实验也在类似A100上进行（未指定数量）。

## 5. 实验数量与充分性

- **实验组数**：
  - 主实验（表2）：在3个数据集 × 3种pass@k = 9个指标上对比5种方法（含自己），每个结果5次实验取均值，并报告统计显著性。
  - 消融实验（表3）：去除合成数据、去除证明增强、去除反位增强，3种消融设置 × 9个指标。
  - 额外实验（表4）：3种基础模型（Llama3.1-8B-Instruct、DeepSeek-Prover-V1.5-7B-Base、Qwen2.5-Coder-7B-Instruct）分别做LoRA和全参数微调，在4个数据集（+ miniF2F）× 9个指标上对比。
  - 数据生成统计（图4）：10轮迭代中合成数据数量和比例、三种数据类型的分布。
  - 迭代性能曲线（图5）：学生模型在3个基准上的pass@1/8/32随轮次变化。
  - 概念库规模：13域、55主题、350概念。
- **充分性**：实验覆盖了从本科到研究生级、从有限样本到大规模数据生成的多个维度，消融实验验证了各组件贡献，统计检验确保结果可靠性。但未在更多形式语言（如Isabelle、Coq）上验证，也未在更大规模模型（如Llama3-70B）上测试。

## 6. 论文的主要结论与发现

- **主要结论**：ATLAS框架能高效生成大规模、高质量平行定理陈述语料，显著提升自动形式化性能。
- **具体发现**：
  - ATLAS Translator在ProofNet、PutnamBench、MathQual上全面超越Herald Translator和Kimina-Autoformalizer，大部分指标统计显著（p<0.05）。
  - 学生模型在迭代中自主贡献比例从42.68%升至82.30%，证明框架持续提升模型能力。
  - 合成数据是性能提升的关键（消融中去除后性能下降最大），两种增强方法均有正面贡献。
  - 全参数微调优于LoRA，且更强的基座模型（如DeepSeek-Prover-V1.5-7B-Base）在ATLAS数据集上微调后达到新的SOTA（ProofNet pass@54.99%，PutnamBench pass@42.49%）。
  - 数学命题的正确性并非自动形式化训练数据的关键，语义等价性和语法有效性更为重要。

## 7. 优点：方法或实验设计上的亮点

- **方法亮点**：
  - 创新性数据生成流程：从概念库出发，而非从NL或FL出发，从根本上避免了预处理限制和规模瓶颈。
  - 结合知识蒸馏与专家迭代：教师模型指导修订，学生模型逐步提升，迭代效率高（每轮仅需10分钟至1小时微调）。
  - 利用Lean编译器和Infoview进行语法验证和语义结构化：通过解析和错误信息反馈实现高效的修正循环。
  - 两种新颖的数据增强方法（证明步骤和反位）利用形式语言内部结构，自动化产生多样化的平行数据。
  - 无需任何人工专家干预（对比Kimina-Autoformalizer），降低了成本。
- **实验设计亮点**：
  - 构建了新的高难度数据集MathQual（465个研究生级问题），扩展了评估范围。
  - 进行了充分的统计显著性检验（5次运行+t检验），结果可靠。
  - 消融实验清晰揭示了各组件贡献。
  - 额外实验覆盖了三种不同基座模型和两种微调方式，验证了泛化性和可扩展性。

## 8. 不足与局限

- **实验覆盖**：
  - 仅实验于Lean 4形式语言，未在Isabelle、Coq等其他语言上验证框架通用性。
  - 评估数据集以本科和研究生级数学为主，更高级（如研究级）问题未覆盖。
  - 验证管道依赖LLM背译和NLI检查，存在误报风险（论文承认并做了人工评估，但仅对ProofNet部分验证）。
- **偏差风险**：
  - 数据集中包含不正确命题的估计（抽样显示约40%为假），训练模型时可能引入误导性信息。
  - 概念库仅从Mathlib提取，可能遗漏某些重要概念，导致某些领域覆盖不足。
- **应用限制**：
  - 当前方法聚焦于定理陈述的自动形式化，未涉及完整证明的形式化（虽然论文提及这是未来方向）。
  - 证明增强方法产生的多样性有限，当证明只涉及平凡策略时，新语句与原始语句差距小（BLEU分数较高）。
  - 虽然迭代效率高，但总共10轮迭代仍需多次交互，对API成本和编译器调用有一定要求。
- **其他**：未明确说明代码和数据集的许可证，且论文为匿名提交，部分细节（如LoRA秩参数）未完全公开。

（完）
