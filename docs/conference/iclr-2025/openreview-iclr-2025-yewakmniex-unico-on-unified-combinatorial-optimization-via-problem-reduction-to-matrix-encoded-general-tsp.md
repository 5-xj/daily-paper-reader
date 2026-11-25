---
title: "UniCO: On Unified Combinatorial Optimization via Problem Reduction to Matrix-Encoded General TSP"
authors: "Wenzheng Pan, Hao Xiong, Jiale Ma, Wentao Zhao, Yang Li, Junchi Yan"
date: 2025
pdf: "https://proceedings.iclr.cc/paper_files/paper/2025/file/3acefc84f1355f5f974195bb9f6014a4-Paper-Conference.pdf"
tags: ["query:ATSP"]
score: 8
source: ICLR-2025-Accepted
selection_source: long-range
publication_date: 2025
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
id: openreview-iclr-2025-yewakmniex
canonical_id: "work:82c24f3de3c250aac86be155"
research_run_id: 20261125-1f13833d13c1
research_mode: starter
reading_status: complete
title_zh: UniCO：通过问题归约为矩阵编码通用TSP的统一组合优化
tldr: 现有神经求解器多针对特定CO问题定制，缺乏统一表示与学习框架。本文提出UniCO，将ATSP、HCP、SAT等问题归约为距离矩阵编码的通用TSP形式。为此设计有监督的MatPOENet与无监督的MatDIFFNet两种神经求解器。实验表明其能处理结构、规模变化的任意矩阵TSP，为统一CO求解提供新路径。
motivation: 神经CO求解器通常只适配单一问题类型，缺少通用的问题表示与统一学习框架。
method: 将多类CO问题归约为矩阵编码的通用TSP，并提出MatPOENet与MatDIFFNet两种神经求解器。
result: 在ATSP、2DTSP、HCP与SAT分布TSP上验证了处理任意矩阵TSP及结构规模变化的能力。
conclusion: UniCO展示了归约统一CO问题的可行性，为通用神经TSP求解与多任务训练提供框架。
evidence: 面向ATSP等组合优化问题的统一归约与矩阵编码通用TSP神经求解方法。
reading_content_version: 1
reading_section: deep
---

## 摘要
针对组合优化（CO）问题，已有多种神经求解器被设计出来，它们通常针对特定问题类型（如TSP、CVRP和SAT等）进行定制。然而，如何在一个通用框架下实现问题表示与学习方面的普适性仍是一个开放问题。本文首先提出**UniCO**，通过将一组CO问题归约为以距离矩阵为特征的*通用*TSP形式来统一它们。该策略的适用性取决于问题归约与解转换过程的效率，我们证明至少ATSP、HCP和SAT是容易可行的。其期望在于能够有效甚至同时利用尽可能多的CO实例类型来训练神经TSP求解器，并可选地针对特定问题类型进行微调。特别地，不同于基于二维坐标欧氏实例的流行TSP基准，我们研究的TSP领域可能涉及非度量、非对称或离散距离且没有显式节点坐标，这在TSP文献中探索较少，同时带来了新的智力挑战。沿着这一方向，我们分别设计了两种带监督和不带监督的神经TSP求解器来征服这种矩阵形式输入：1）**MatPOENet**和2）**MatDIFFNet**。前者是一种基于强化学习的序列模型，采用伪独热嵌入（POE）方案；后者是一种基于扩散的生成模型，采用混合噪声参考映射方案。在ATSP、2DTSP、HCP和SAT分布通用TSP上的实验表明，该方法对具有结构和规模变化的任意矩阵编码TSP具有强大能力。

## Abstract
Various neural solvers have been devised for combinatorial optimization (CO), which are often tailored for specific problem types, e.g., TSP, CVRP and SAT, etc. Yet, it remains an open question how to achieve universality regarding problem representing and learning with a general framework. This paper first proposes **UniCO**, to unify a set of CO problems by reducing them into the *general* TSP form featured by distance matrices. The applicability of this strategy depends on the efficiency of the problem reduction and solution transition procedures, which we show that at least ATSP, HCP, and SAT are readily feasible. The hope is to allow for the effective and even simultaneous use of as many types of CO instances as possible to train a neural TSP solver, and optionally finetune it for specific problem types. In particular, unlike the prevalent TSP benchmarks based on Euclidean instances with 2-D coordinates, our studied domain of TSP could involve non-metric, asymmetric or discrete distances without explicit node coordinates, which is much less explored in TSP literature while poses new intellectual challenges. Along this direction, we devise two neural TSP solvers with and without supervision to conquer such matrix-formulated input, respectively: 1) **MatPOENet** and 2) **MatDIFFNet**. The former is a reinforcement learning-based sequential model with pseudo one-hot embedding (POE) scheme; and the latter is a Diffusion-based generative model with the mix-noised reference mapping scheme. Experiments on ATSP, 2DTSP, HCP- and SAT-distributed general TSPs show the strong ability towards arbitrary matrix-encoded TSP with structure and size variation.

## 专题评审

专题相关性评分：8/10。

明确将ATSP作为归约目标并在ATSP上实验，直接研究非对称旅行商问题。

---

## 论文详细总结（自动生成）

## 1. 核心问题与研究动机

- **背景**：神经组合优化（NCO）领域已涌现大量神经求解器，但它们大多针对单一问题类型定制（如TSP、CVRP、SAT），缺乏统一的问题表示与学习框架。
- **核心问题**：能否构建一个通用框架，统一学习图上的一类CO问题？
- **切入角度**：作者借助计算复杂性理论中的**多项式时间归约**——任何NP问题都可在多项式时间内归约为某个NPC/NP-hard问题。选择**通用TSP**（以任意距离矩阵为输入，可非度量、非对称、离散、无节点坐标）作为归约终点，因为TSP在神经求解器研究中积累最丰富。
- **关键挑战**：归约后的TSP实例仅由任意正値矩阵表示，不再有2D坐标，现有Transformer/GNN求解器普遍依赖坐标特征，难以直接处理纯成对关系输入且节点数不固定。
- **整体含义**：提出UniCO框架，将ATSP、HCP、SAT等问题归约为矩阵编码通用TSP，训练统一神经TSP求解器，从而以一套流程覆盖多类CO问题，并支持多任务/多尺度联合训练与微调。

## 2. 方法论

### 2.1 UniCO 框架（三步流水线）

- **a) 问题归约**：将原始CO实例归约为通用TSP距离矩阵。归约链为 3SAT ≤P HCP ≤P TSP。
  - HCP→TSP：边存在设 Cij=0，否则设 Cij=1，找长度0的巡回即哈密顿圈。
  - 3SAT→HCP：为每个变量构造 2Nc 个变量-子句节点并连边，为每个子句构造1个节点并按文字正负连有向边，归约后图含 2NvNc+Nc 个节点；解转换时依据巡回经过变量节点对的顺序判定变量真值。
- **b) 求解**：将距离矩阵输入训练好的通用TSP求解器，输出巡回。
- **c) 解转换**：将TSP巡回高效转换为原问题解（HCP存在性/哈密顿圈、SAT可满足性/变量赋值）。
- **训练流程**（Algorithm 1）：维护可归约问题的实例池，每轮随机选取一个问题类型、生成同尺度批次、归约为TSP矩阵、训练求解器直至收敛。

### 2.2 MatPOENet（基于Transformer的强化学习求解器）

- **架构**：编码器-解码器Transformer（继承MatNet），输入两组初始节点嵌入 a0、b0 与距离矩阵C，通过混合分数注意力（将C与注意力分数经MLP融合）编码，解码器逐步选择下一节点，用掩码排除已访问节点。
- **训练**：POMO式深度强化学习，每个实例采样N条不同起点的巡回，策略梯度为
  ∇θJ(θ) ≈ (1/N) Σn [L(τn) − b(C)] ∇θ log pθ(τn|C)，基线 b(C) 取N条巡回平均长度。
- **核心创新——伪独热嵌入（POE）**：解决vanilla MatNet的独热嵌入维度固定、无法适配任意规模N的问题。
  - 步骤1：用最近邻（NN）启发式将代价矩阵转为一个粗略巡回，给每个节点分配位置索引 pos∈[0,N−1]。
  - 步骤2：定义脉冲状偶函数 f(x)=1/cosh(100x)，x∈[−1/2,1/2]。
  - 步骤3：沿巡回旋转平移f并采样，得到第pos个位置的第i维取值：
    P_{pos,i} = f(pos/N + i/d − 1/2)（当 pos/N+i/d ≤ 1），否则 f(pos/N+i/d − 3/2)。
  - 效果：POE矩阵替代B0，无需padding，实现规模无关的初始化，且使高相似度嵌入对集中于点积矩阵对角线附近，近似独热嵌入功能。

### 2.3 MatDIFFNet（基于扩散的生成式求解器）

- **框架**：离散扩散，前向加噪 q(St|St−1)=Cat(St; p=St−1Qt)，转移矩阵 Qt=[[βt,1−βt],[1−βt,βt]]；反向去噪学习 pθ(St−1|St,C)，训练目标为ELBO（式3/式18），网络预测 ˜pθ(˜S0|St,C) 的logits。
- **核心创新1——混合噪声参考映射**：将距离矩阵C与噪声标签矩阵 xt 沿最后一维堆叠为 M∈R^{N×N×2}，经两层MLP得 x^C_t = W2(ReLU(W1(M)))，再经正弦特征编码（式5）得到初始边嵌入，替代原扩散模型中的 xt。
- **核心创新2——双特征卷积**：针对非对称性，引入两组随机伪坐标 xA、xB∈R^{N×2} 作为"from"/"to"节点初始嵌入，在GNN各层用两套参数分别更新（式6–7），边特征更新融合时间嵌入（式8），并以 σ(e_ij) 归一化得到稠密注意力门控 G（式9），最终输出边热图 H 供解码搜索。

### 2.4 UniCO-DIMES（附录）

- 将GNN+元强化学习的DIMES纳入框架：用固定维度（d=64）的[0,1]随机向量替代坐标作为节点特征，保留MAML外循环+RL主动搜索内循环。

## 3. 实验设计

### 数据集 / 场景

- **四类问题分布**（均转为通用TSP矩阵形式）：
  - ATSP：Uniform(0,1) 非对称距离矩阵，对角线为0。
  - 2DTSP：Uniform(0,1)² 随机坐标的欧氏距离矩阵（度量、对称）。
  - DHCP：随机排列构造零长度哈密顿圈，再随机加入零边噪声，其余边设为1。
  - 3SAT：按变量数Nv与子句数Nc生成后归约，尺度与Nv、Nc绑定（附录D.2给出具体参数表）。
- **规模**：N≈20、50、100 三个尺度；测试集共10K实例（每问题每尺度2500个）。
- **额外场景**：标准对称TSP-50/100（各1280实例）、TSPLIB真实实例45个（N∈[14,195]）、大规模ATSP/HCP（N=1K、10K，结合GLOP分治）、顶点覆盖（VC）问题、预训练-微调（跨任务、跨尺度）。

### Benchmark 与对比方法

- **精确解**：Gurobi（Concorde仅适用欧氏TSP故未用）。
- **启发式**：LKH（500与10000 trials）、最近邻、最远插入。
- **神经方法**：vanilla MatNet、DIMES（含主动搜索AS(100/200)）、GLOP（以MatNet为局部修正器）；BQ-NCO与GOAL的ATSP结果仅按报告gap估算作参考。
- **指标**：巡回长度L、找到率FR（HCP/SAT决定性任务）、平均长度Avg.L、相对Gurobi的平均gap、单实例求解时间。
- 所有神经方法均在作者统一数据集上重训重测以保证公平。

## 4. 资源与算力

- **MatPOENet**：N≤50 用单张 NVIDIA RTX3090 24GB + AMD 3970X 32核CPU；N≈100 用 RTX8000 48GB + Intel Xeon W-3175X。
- **MatDIFFNet**：8张 NVIDIA H800 80GB + Intel Xeon 16核CPU。
- **评估**：统一在单张 RTX3090 上完成。
- **训练时长**：文中未直接给出总GPU小时数，但给出超参——MatPOENet 训练2000 epochs（每epoch 10000实例）；MatDIFFNet 每epoch约1.28M实例、100 epochs（混合数据400 epochs），1000步去噪训练、50步推理；DIMES 1000 outer epochs × 15 inner steps。
- **说明**：算力信息基本明确到GPU型号与数量，但缺少总训练时长的汇总统计。

## 5. 实验数量与充分性

- **实验组数概估**：
  - 主实验：3个尺度 × 4类问题 × 约20种方法配置（含8x并行、2OPT后处理、单任务/混合/多尺度训练变体），构成大规模结果表（Table 2/22）。
  - 效率对比（Table 3）、N>d 的POE规模消融（Table 4）、大规模1K/10K实验（Table 5）。
  - POE消融：不同粗糙求解器（NN/FI/无）、不同初始嵌入（随机/可训练/POE）（Table 10、11）。
  - 预训练-微调：跨任务（3SAT微调，Table 12）、跨尺度（Table 13）。
  - 学习范式对比：RL vs SL（Table 14、15）；VC问题（Table 17）；标准TSP-50/100（Table 18、19）；TSPLIB（Table 21）；DIMES效率（Table 9）；训练曲线（图6–8）。
- **充分性评价**：
  - **较充分**：覆盖多问题、多尺度、多学习范式（RL/SL/生成/元RL）、多骨干（Transformer/GNN/扩散），消融较系统，且所有神经基线统一重训，公平性较好。
  - **客观性亮点**：同时报告长度与找到率、时间，并诚实指出LKH在离散空间（SAT分布）性能崩溃的原因（α-measure在二值距离下退化）。
  - **不足**：未与SAT/HCP专用神经求解器（如NeuroSAT等）对比，作者在附录B.6给出理由（问题形式不同、缺乏通用评测协议），但这一缺口仍影响"统一框架是否优于专用方法"的说服力；部分对比（BQ-NCO、GOAL）仅为估算参考。

## 6. 主要结论与发现

- **性能**：MatPOENet（8x并行、多尺度混合训练，即MatPOENet*-8x）在N≈50时Avg.L优于LKH-500，在N≈100时Avg.L（2.5420）优于LKH-10000（2.5848），成为通用TSP上的强基线甚至SOTA级结果。
- **效率**：N≈100时MatPOENet以15m35s达到优于LKH-10000（2h15m）的平均质量，时间效率约8.7倍优势。
- **LKH的失效**：LKH在连续空间（ATSP、2DTSP）稳定优秀，但在离散二值空间（SAT分布TSP）显著退化，源于最小1-tree不唯一导致α-measure失效——说明发展能同时处理连续与离散空间的神经求解器具有必要性。
- **可扩展性**：POE使模型可在 N>d 时训练（vanilla MatNet不可行），性能有合理退化但可用；多尺度联合训练（MatPOENet*）可行且有益；结合GLOP可在1K/10K规模上显著优于MatNet与贪心。
- **框架通用性**：UniCO可承载RL、SL、生成式、元RL多种范式；跨任务微调（在ATSP/2DTSP/DHCP预训练后微调3SAT，仅200步即达97.08% FR，接近专门训练2000 epoch的96.08%）与跨尺度微调均有效。
- **标准与真实场景**：无坐标输入下在TSP-50/100上取得与坐标输入方法可比的结果；TSPLIB上MatPOENet（5.08）优于贪心（5.45），但逊于LKH3（4.86）。

## 7. 优点

- **思想新颖且理论根基扎实**：首次系统性地将"问题归约"引入神经CO统一框架，以通用TSP为归约终点，理论上可覆盖归约树内大量问题（VC、Clique、IS、部分VRP、FFSP、MIS等），并给出具体归约构造与解转换规则。
- **问题定位精准**：聚焦被忽视的矩阵编码通用TSP（非度量/非对称/离散/无坐标），填补了神经TSP研究空白，并构建了标准化多分布数据集。
- **POE设计巧妙**：用脉冲函数沿粗略巡回旋转采样，实现规模无关的嵌入初始化，既解决MatNet的固定维度限制，又通过"相似节点获得相似嵌入"注入局部结构先验，消融显示显著优于随机/可训练嵌入。
- **MatDIFFNet的矩阵适配**：混合噪声参考映射与双特征卷积优雅地将扩散模型从欧氏坐标推广到非对称矩阵输入。
- **实验工程量大且较公平**：统一重训所有神经基线、多指标报告、诚实分析LKH失效机理、覆盖多范式与多骨干，并开源代码与数据。
- **框架与求解器解耦**：UniCO与具体骨干正交，便于未来接入更强模型或与分治方法（GLOP）协同。

## 8. 不足与局限

- **与专用求解器缺乏对比**：未与NeuroSAT等SAT专用神经求解器、HCP专用方法比较，作者虽给出理由，但"统一框架相对专用方法是否具竞争力"这一关键问题未被直接回答。
- **绝对性能仍有差距**：相对Gurobi等精确求解器在特定问题上仍有明显gap（如N≈100时Avg.Gap约9%）；TSPLIB上不及LKH3。
- **可扩展性受限**：MatPOENet训练需O(N³)空间（注意力O(N²)+N次rollout），单卡难以支撑N≥500；MatDIFFNet推理慢（去噪步数多），且热图解码导致误差累积、稳定性较差（HCP上表现明显偏弱）。
- **归约实用性限制**：部分问题（如带容量约束的CVRP）归约到SAT再归约到TSP的转换开销大，作者自己也承认复杂约束问题"不实用"，推荐改用子TSP分解。
- **实验覆盖偏差风险**：主实验集中于合成数据，真实场景仅45个TSPLIB实例；3SAT尺度受Nv/Nc绑定限制，尺度设置较窄；BQ-NCO/GOAL对比为估算而非实测。
- **训练成本不透明**：未汇总总GPU小时，MatDIFFNet需8×H800，复现门槛较高。
- **理论保证有限**：归约的多项式时间可行性有保证，但归约后实例的分布偏移对学习的影响、以及"归约是否保持问题难度结构"缺乏理论分析。

（完）
