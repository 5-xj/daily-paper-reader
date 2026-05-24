---
title: "Self-Improving Language Models for Evolutionary Program Synthesis: A Case Study on ARC-AGI"
title_zh: 自改进语言模型用于进化程序合成：以ARC-AGI为案例研究
authors: "Julien Pourcel, Cédric Colas, Pierre-Yves Oudeyer"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=z4IG090qt2"
tags: ["query:automatic-discovery"]
score: 9.0
evidence: 将大模型集成到进化循环中自改进程序合成
tldr: SOAR将LLM与进化搜索及自改进结合用于程序合成
source: ICML-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-icml-2025-z4ig090qt2/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 965, \"height\": 969}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-z4ig090qt2/fig-002.webp\", \"caption\": \"\", \"page\": 2, \"index\": 2, \"width\": 800, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-z4ig090qt2/fig-003.webp\", \"caption\": \"\", \"page\": 2, \"index\": 3, \"width\": 1454, \"height\": 989}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-z4ig090qt2/fig-004.webp\", \"caption\": \"\", \"page\": 2, \"index\": 4, \"width\": 405, \"height\": 485}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-z4ig090qt2/fig-005.webp\", \"caption\": \"\", \"page\": 2, \"index\": 5, \"width\": 370, \"height\": 469}, {\"url\": \"assets/figures/openreview/openreview-icml-2025-z4ig090qt2/fig-006.webp\", \"caption\": \"\", \"page\": 2, \"index\": 6, \"width\": 1084, \"height\": 1027}]"
motivation: 程序合成任务中LLM单次生成能力有限，需要迭代搜索。
method: 交替进行LLM引导的进化搜索和外推学习微调LLM。
result: 在ARC-AGI任务上显著提升了成功率。
conclusion: LLM与进化计算的结合可自动发现程序算法。
---

## Abstract
Many program synthesis tasks prove too challenging for even state-of-the-art language models to solve in single attempts. Search-based evolutionary methods offer a promising alternative by exploring solution spaces iteratively, but their effectiveness remain limited by the fixed capabilities of the underlying generative model. 
We propose SOAR, a method that learns program synthesis by integrating language models into a self-improving evolutionary loop. 
SOAR alternates between (1) an evolutionary search that uses an LLM to sample and refine candidate solutions, and (2) a hindsight learning phase that converts search attempts into valid problem-solution pairs used to fine-tune the LLM's sampling and refinement capabilities—enabling increasingly effective search in subsequent iterations.
On the challenging ARC-AGI benchmark, SOAR achieves significant performance gains across model scales and iterations, leveraging positive transfer between the sampling and refinement finetuning tasks. These improvements carry over to test-time adaptation, enabling SOAR to solve 52\% of the public test set.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **问题**：在程序合成任务中，大规模语言模型（LLM）单次生成正确程序的能力有限。即便采用基于搜索的进化方法（如遗传编程）迭代探索解空间，其效果也受限于底层生成模型的固定能力——单纯增加搜索次数或模型规模会遭遇收益递减（性能天花板）。
- **背景**：抽象推理语料库（ARC-AGI）是一个专门设计来挑战AI核心推理能力的程序合成基准，每个任务需从少量输入-输出示例中推断隐含的变换规则。现有LLM直接求解成功率很低（如GPT-4.1仅8%，Claude-4-Sonnet仅20.75%），而基于搜索的方法虽能提升性能，但模型能力固定，无法持续改进。
- **整体目标**：开发一种能够通过自身搜索经验不断改进采样和精炼能力的程序合成系统，突破固定模型能力的性能瓶颈。

## 2. 方法论：核心思想、关键技术细节与算法流程

### 核心思想
SOAR（Self-improving Operators for Automated program Refinements）将LLM集成到自改进进化循环中：交替进行**进化搜索阶段**（LLM采样候选程序并精炼）和**学习阶段**（使用搜索轨迹微调LLM，提升其采样和精炼能力）。形成“更好模型→更有效搜索→更丰富训练数据→进一步改进模型”的良性循环。

### 关键技术细节
1. **程序采样**：给定ARC任务（训练输入输出对+测试输入），LLM生成Python函数$f$，执行后得到测试输出。初始采样3000个候选程序。
2. **程序精炼**：将不正确程序$f$及其执行反馈（训练示例上的输出）作为上下文，引导LLM生成改进版本$f^+$。精炼过程采用REX算法（结合Thompson采样和探索奖励的生成式多臂赌博机），预算3000次精炼。
3. **加权多数投票**：将全部6000个候选程序按其训练示例准确率加权，按测试输出分组投票，选出得分最高的两个输出网格作为最终答案。
4. **学习阶段**：
   - **采样能力微调**：利用“事后重标注”（hindsight relabeling）——任何采样程序$f_0$对于它实际产生的输出而言都是正确解。将所有采样程序（包括失败者）转化为新的(任务, 解)对，构建包含240万数据点的合成数据集，然后子采样每个ARC训练任务最多50个示例（25个最优+25个最差的多样性策略），用于微调LLM。
   - **精炼能力微调**：从搜索轨迹中提取成功精炼案例（错误程序→正确改进版本），并按照父程序训练准确率分桶平衡采样（每个任务最多50个），微调LLM的精炼能力。
   - **联合微调**：实验表明采样和精炼联合微调优于单独微调，二者有正向协同作用。
5. **迭代自改进**：在训练集上重复多轮（本文进行了4轮训练迭代）。收集所有迭代和所有模型的解决方案，去重后子采样，训练一个聚合的基模型用于测试时训练。
6. **测试时训练**：在测试集上，没有真值标签时，利用训练准确率筛选候选解进行事后重标注（仅微调采样能力），进行额外的测试时自适应迭代（本文进行了2轮）。

### 算法流程（文字描述）
```
初始化：基线LLM参数θ₀
循环 i = 0,1,2,... (训练阶段迭代):
  阶段1：进化搜索（使用模型θ_i）
    - 采样3000个程序 → 执行 → 训练准确率
    - 精炼3000次（REX算法） → 执行 → 训练准确率
    - 加权多数投票，生成解
  阶段2：学习（微调模型）
    - 从搜索轨迹构建采样微调数据集（事后重标注+子采样）
    - 从搜索轨迹构建精炼微调数据集（成功案例+平衡采样）
    - 联合微调，得到新模型θ_{i+1}
训练阶段结束后，得到聚合模型（基于所有模型和迭代数据训练）。
测试时训练阶段：
  使用聚合模型作为起点，在测试集上重复上述循环（仅微调采样能力），进行2轮。
```

## 3. 实验设计

### 数据集与基准
- **ARC-AGI**：包含400个训练任务（ARC-train）和400个测试任务（ARC-test）。每个任务提供2-10个训练输入-输出示例和1个测试输入，要求输出测试输出网格。
- 不使用任何人工构建的领域特定语言（DSL）或外部数据集，仅从自身搜索经验学习。

### 对比方法
- **单次生成（1-shot）**：多种LLM单次尝试（Qwen-2.5-Coder系列 7B/14B/32B、Qwen-2.5-72B、Mistral-Large-2、GPT-4.1、Claude-4-Sonnet、o3-mini、Gemini-2.5-Pro）。
- **纯采样（Sample-6k）**：采样6000个程序后多数投票。
- **采样+精炼（Sample&Refine-6k）**：3000采样+3000精炼后多数投票。
- **SOAR各迭代**：经过训练阶段和测试时训练阶段后的性能。
- **先前工作**：CodeIt、BARC-induction、Icecuber、Greenblatt等采用不同策略的诱导式方法。

### 评估指标
- 任务解决率（% solved），即多数投票结果与真实测试输出完全匹配的任务比例。
- 在ARC-train上用于方法选择，在ARC-test上报告最终结果。

## 4. 资源与算力

论文提到了相关计算资源：
- 微调在单个H100 GPU上完成。
- 使用RS-LoRA（7B和14B模型）和RS-QLoRA（更大模型），LoRA rank=256，α=32，3个epoch，学习率5e-5。
- 采样和精炼使用SGLang推理引擎，每个任务并行生成50个补全。
- 为了降低成本，当一个任务已获得至少100个完美训练准确率的解时提前终止生成。
- 论文未明确给出总训练时长、使用的GPU数量（除单卡微调外，搜索阶段可能使用多节点并行）等详细算力统计。附录B提到微调计算量仅占总FLOPs约5%，远小于搜索阶段。

## 5. 实验数量与充分性

### 实验组数
- **主要对比**：在5种模型规模（7B/14B/32B/72B/123B）上进行了完整的迭代（4轮训练+2轮测试时训练），报告了每轮性能。
- **消融实验**：
  - 采样数据选择策略对比（correct-only、uniform、greedy、greedy-diverse）——表2。
  - 精炼数据选择策略对比（uniform、diverse）——表3。
  - 联合vs单独微调对比——表4。
  - 不同模型组合的集成效果——附录C图10。
- **扩展实验**：计算预算缩放实验（图5、附录B），证明SOAR突破了单次搜索的FLOPs等比例性能天花板。
- **多样性分析**：图6展示了解多样性随迭代的变化。

### 充分性与公平性
- **充分性**：实验覆盖了多种模型规模、多种数据选择策略、多种搜索预算，消融齐全。在ARC-train上做方法选择（避免过拟合测试集），ARC-test为最终评估。
- **公平性**：
  - 对比方法中，单次生成和搜索方法均在同一模型基础上比较。
  - 与先前工作对比时，SOAR使用开源模型且无需人工数据，而BARC-induction等方法使用了大量人工数据和闭源LLM，因此SOAR的对比处于有利位置，但论文在表6中进行了详细公平性说明。
  - 未与闭源搜索方法（如FunSearch中的PaLM）直接比较，因为无法在同一条件下复现。

## 6. 主要结论与发现

1. **搜索能力突破**：SOAR通过迭代自改进，显著提升了所有规模模型的ARC-AGI任务解决率。例如Qwen-2.5-7B从基线的14.25%提升至36.25%（2.5倍），14B从19.87%提升至42.75%，32B从25.25%提升至44.38%，72B从25.62%提升至44.88%，Mistral-Large-2从26.25%提升至45.5%。通过集成所有模型，最终在ARC-test上达到52.00%解决率（Oracle性能57.25%）。
2. **突破性能天花板**：单纯增加模型规模或搜索预算会遭遇收益递减，而SOAR的每次迭代都能提升性能阶梯，使小模型通过自改进超越大模型单次搜索表现（如7B SOAR超过Claude-4-Sonnet的20.75%）。
3. **采样与精炼协同**：联合微调优于单独微调，表明采样和精炼可共享程序结构知识，产生正向迁移。
4. **事后重标注有效性**：使用失败程序构建合成训练数据（greedy-diverse策略）显著提升了采样能力，避免了仅依赖成功解的局限性。
5. **测试时训练可行**：在测试集上无真值情况下，仅凭训练准确率筛选进行事后重标注，可额外获得约3-5%的改进。
6. **多样性维持**：对于未解决任务，SOAR保持了较高的解多样性；对于已解决任务，多样性逐渐下降。

## 7. 优点

- **完全自监督**：无需任何人工标注数据、领域特定语言或外部知识，仅从自身搜索经验学习，具备强可扩展性和通用性。
- **通用框架**：方法不限于ARC，可应用于其他程序合成任务（如数学发现、软件工程），框架可作为现有进化搜索方法（如FunSearch、AlphaEvolve）的即插即用升级。
- **计算效率**：微调成本极低（仅占总FLOPs约5%），却带来显著性能提升。
- **深入消融**：对采样数据选择、精炼数据选择、联合学习等关键设计进行了细致对比，结论可靠。
- **跨模型集成**：发现不同规模模型具有互补的问题解决策略，集成后性能大幅提升（52% vs 单个最佳45.5%）。
- **开源贡献**：代码已开源，便于复现和社区改进。

## 8. 不足与局限

- **评估领域单一**：仅在ARC-AGI一个基准上评估，虽然该基准具有代表性，但未在软件工程、数学发现等其他程序合成任务上验证，泛化性待确认。
- **计算开销仍然较大**：每次搜索需要6000次生成和精炼（约50-100LLM调用），多轮迭代计算累积。尽管微调便宜，但搜索阶段是主要成本。
- **性能增长放缓**：迭代后期改进幅度减小（从第4轮到第5轮提升仅约5%），可能存在内在瓶颈或需要更高级的策略（如显式多样性优化、自适应搜索预算分配）。
- **测试时训练限制**：当前测试时训练仅微调采样能力，未涉及精炼能力（论文提到可扩展但未实现），可能漏掉部分改进空间。
- **多样性丢失风险**：在已解决任务上多样性下降，若后续遇到相似但不同变体可能缺乏泛化能力。论文建议未来引入质量多样性方法。
- **对模型选择有一定依赖性**：实验主要基于Qwen-2.5-Coder和Mistral系列，若换为其他架构或基础训练数据，效果是否一致未知。

（完）
