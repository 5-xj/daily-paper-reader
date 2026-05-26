---
title: "MOOSE-Chem2: Exploring LLM Limits in Fine-Grained Scientific Hypothesis Discovery via Hierarchical Search"
title_zh: MOOSE-Chem2：通过分层搜索探索LLM在细粒度科学假设发现中的极限
authors: "Zonglin Yang, Wanhao Liu, Ben Gao, Yujie Liu, Wei Li, Tong Xie, Lidong Bing, Wanli Ouyang, Erik Cambria, Dongzhan Zhou"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=Q3DtkFJ1Ap"
tags: ["query:ad"]
score: 9.0
evidence: 基于LLM的分层搜索进行细粒度科学假设发现
tldr: 针对现有LLM假设生成缺乏实验细节的问题，本文定义细粒度科学假设发现任务，将其形式化为组合优化问题，并探索LLM在最大化利用下的能力上限，实验表明LLM能够通过分层搜索生成详细可执行的假设，为科学发现自动化提供了新范式。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-q3dtkfj1ap/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 837, \"height\": 320, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-q3dtkfj1ap/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1436, \"height\": 528, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-q3dtkfj1ap/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 999, \"height\": 896, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-q3dtkfj1ap/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1002, \"height\": 429, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-q3dtkfj1ap/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1393, \"height\": 488, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-neurips-2025-q3dtkfj1ap/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1379, \"height\": 555, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-q3dtkfj1ap/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 877, \"height\": 504, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-q3dtkfj1ap/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1448, \"height\": 568, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-q3dtkfj1ap/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1248, \"height\": 241, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-q3dtkfj1ap/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1016, \"height\": 594, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-neurips-2025-q3dtkfj1ap/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 841, \"height\": 559, \"label\": \"Table\"}]"
motivation: 现有LLM假设生成方法输出粗粒度，缺乏可操作细节。
method: 将细粒度假设发现建模为组合优化问题，利用LLM内部分层搜索能力。
result: LLM在分层搜索中能生成包含方法和实验细节的假设，接近能力上限。
conclusion: 展示了LLM在自动发现算法中作为启发式搜索核心的巨大潜力。
---

## Abstract
Large language models (LLMs) have shown promise in automating scientific hypothesis generation, yet existing approaches primarily yield coarse-grained hypotheses lacking critical methodological and experimental details. We introduce and formally define the new task of fine-grained scientific hypothesis discovery, which entails generating detailed, experimentally actionable hypotheses from coarse initial research directions. We frame this as a combinatorial optimization problem and investigate the upper limits of LLMs' capacity to solve it when maximally leveraged. Specifically, we explore four foundational questions: (1) how to best harness an LLM's internal heuristics to formulate the fine-grained hypothesis it itself would judge as the most promising among all the possible hypotheses it might generate, based on its own internal scoring-thus defining a latent reward landscape over the hypothesis space; (2) whether such LLM-judged better hypotheses exhibit stronger alignment with ground-truth hypotheses; (3) whether shaping the reward landscape using an ensemble of diverse LLMs of similar capacity yields better outcomes than defining it with repeated instances of the strongest LLM among them; and (4) whether an ensemble of identical LLMs provides a more reliable reward landscape than a single LLM. To address these questions, we propose a hierarchical search method that incrementally proposes and integrates details into the hypothesis, progressing from general concepts to specific experimental configurations. We show that this hierarchical process smooths the reward landscape and enables more effective optimization. Empirical evaluations on a new benchmark of expert-annotated fine-grained hypotheses from recent literature show that our method consistently outperforms strong baselines.

---

## 论文详细总结（自动生成）

# 论文中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **现有问题**：当前LLM驱动的科学假设生成方法产生的是**粗粒度假设**，缺乏方法学和实验细节，无法直接用于实验室实施。例如，“合成分层3D铜”过于笼统，而细粒度版本应包含具体试剂浓度、时间、温度等。
- **研究目标**：定义并形式化**细粒度科学假设发现任务**——从粗略的研究方向出发，生成包含详细实验配置、可直接操作的假设。
- **核心挑战**：这是一个**组合优化问题**，候选编辑空间巨大且隐式，编辑之间相互依赖；且假设正确性在实验前未知（OOD问题）。
- **研究视角**：类比人类科学家在实验前使用启发式搜索假设空间，本文探索LLM内部启发式能力在最大化利用下的上限。

## 2. 方法论

- **核心思想**：将细粒度假设生成建模为在LLM自身定义的**奖励景观（reward landscape）**上的优化问题，提出**分层启发式搜索（Hierarchical Heuristic Search, HHS）**。
- **形式化**：
  - 细粒度假设：\( h_f = \{h_c, d_1, \dots, d_m\} \)，其中\( h_c \)是粗方向，\( d_i \)是编辑（添加/删除细节）。
  - 候选编辑集\( D = D_+ \cup D_- \)，搜索空间组合复杂度\( C(n,m) \)。
- **分层分解**：将编辑分为5个层次（化学领域）：
  1. 反应机理（最高抽象）
  2. 一般概念/所需成分类
  3. 具体成分选择（如特定化学物质）
  4. 具体成分的完整细节（SMILES、CAS号）
  5. 实验条件（温度、压力、溶剂等）
- **搜索流程**（图2）：
  - 逐层进行，当前层累积之前所有层的编辑。
  - 每层内，从当前假设出发，LLM作为**提议生成器**反复添加或删除一个细节，再通过LLM**成对比较**决定是否接受（作为梯度信号）。
  - 连续k次无改进则停止，找到当前层局部最优。
  - 每层独立运行3次（不同随机种子），得到3个局部最优，通过**重组模块**插值得到更优假设。
- **理论分析**：分层结构起到**低通滤波**作用，平滑奖励景观，减少陷入不良局部最优的风险，降低搜索复杂度。

## 3. 实验设计

- **数据集**：扩展自TOMATO-Chem数据集，包含**51篇2024年1月后**发表在Nature、Science等顶刊的化学论文。每位条目包含研究背景、粗粒度方向，并由两位化学博士标注**细粒度真实假设**。
- **基准模型**：使用**GPT-4o-mini**（知识截止2023年10月），防止数据污染。
- **对比方法**：
  - Greedy Search（贪心搜索）
  - Greedy Search + Self-consistency（贪心+自一致性，去除分层结构，相当于单层HHS）
  - 其他：ChemCrow、Qi et al.、SciMON、MOOSE等。
- **评估指标**：
  - **LLM成对比较**：比较HHS与基线在有效性、新颖性、详细度、可行性四个维度及总体的胜率（每对比较6次，交替顺序消去位置偏差）。
  - **专家评估**：两位化学博士对随机样本的三个假设进行排名。
  - **召回率**（与真实假设对齐）：Soft Recall（是否覆盖）和Hard Recall（精确匹配程度），由LLM打分。
- **四个研究问题实验**：
  - **Q1**：HHS vs 基线（表1）
  - **Q2**：通过召回率间接评估（表2）
  - **Q3**：混合LLM委员会 vs 单一最强LLM重复委员会（表3，使用GPT-4o-mini和Gemini-1.5-flash作为评估者）
  - **Q4**：HHS-1（单实例） vs HHS-3（三实例集成）（表4、表2）
- **额外分析**：误差分析（附录F）、假设质量定性评估（附录E）。

## 4. 资源与算力

- 论文明确提到使用**GPT-4o-mini**通过OpenAI官方API实现。
- 生成最终假设通常需要**数百到上千次**迭代搜索步骤。
- **未说明**具体的GPU型号、数量、训练时长（因使用闭源API，非本地训练）。仅提及计算资源来自上海人工智能实验室。因此无法给出精确算力指标。

## 5. 实验数量与充分性

- 实验覆盖**四个核心研究问题**，每组均有对比结果。
- 主要对比实验（表1）：HHS vs Greedy Search、HHS vs Greedy+Self-consistency、Greedy+Self-consistency vs Greedy Search，在51个样本上进行LLM评估（每个比较6次），并附带专家评估（全部51个样本）。
- 召回率实验（表2）：对比多种方法，统计平均步数。
- Q3实验（表3）：对比三种委员会设置，使用两个不同评估者（GPT-4o-mini和Gemini-1.5-flash）以控制评估偏差。
- Q4实验（表4、表2）：HHS-1 vs HHS-3，包含LLM比较和召回率。
- 误差分析（附录F）：由两位化学博士分别分析前30和剩余21个样本。
- **充分性**：实验设计较为系统，考虑了性能、对齐、集成策略等多个角度；但受限于仅一个化学数据集（51个样本），且未在其他学科验证，泛化性论证略显不足。评估过程注意了位置偏差，比较公平。

## 6. 主要结论与发现

1. **HHS一致发现更优局部最优**：在LLM评估中，HHS vs Greedy Search总胜率73.53%，专家评估胜率76.47%；HHS vs Greedy+Self-consistency总胜率53.43%，专家胜率74.51%。
2. **LLM判断的更好假设与真实假设更对齐**：HHS的软召回率40.35%、硬召回率23.04%，显著高于基线（Greedy+Self-consistency分别为31.53%、17.73%）。
3. **最强模型重复实例优于多样模型集成**：GPT-4o-mini委员会一致性优于混合委员会，后者优于Gemini-1.5-flash委员会（表3）。
4. **相同LLM集成（HHS-3）比单实例（HHS-1）能更好捕捉新颖性**：HHS-3在新颖性上胜率45.59%，而HHS-1在可行性上占优；但总体质量相近。HHS-3的召回率更高，表明聚合信号更优。
5. **分层搜索平滑奖励景观**，降低搜索难度，理论分析和可视化支持。

## 7. 优点

- **任务创新**：首次系统定义细粒度科学假设发现任务，并构建防数据污染的基准。
- **方法论亮点**：将LLM内部启发式建模为优化问题，引入分层搜索有效平滑奖励景观，理论分析清晰。
- **实验设计系统**：围绕四个基础问题展开，评估维度全面（LLM与专家、多标准、召回率）。
- **公平性考虑**：使用知识截止后的LLM避免数据泄漏；成对比较中交替顺序消去位置偏差；使用双评估者控制模型偏见。
- **可推广性**：框架与领域无关，仅层次设计需领域定制，论文提供了化学实例。

## 8. 不足与局限

- **不保证全局最优**：仅能达到局部最优，无法确保找到真正最佳假设。
- **领域局限**：实验仅在化学（51个样本）上进行，未在物理、生物等学科验证泛化性。
- **计算代价高**：每次假设生成需数百到上千次LLM调用，成本敏感。
- **手动层次设计**：层次划分（图1）需领域专家参与，新领域需重复此过程。
- **细节覆盖不全**：约50%的重要实验细节被遗漏（附录E.2），LLM倾向于包含较多非核心外围信息。
- **误差分析显示**：常见错误包括缺失关键化学物质、解释错误、可行性问题等（附录F）。
- **基准规模有限**：51个样本可能不足以充分刻画模型能力，统计显著性有待更大规模验证。

（完）
