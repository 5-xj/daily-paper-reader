---
title: Solving the Asymmetric Traveling Salesman Problem via Trace-Guided Cost Augmentation
authors: "Zhen Zhang, Javen Qinfeng Shi, Wee Sun Lee"
date: 2025
pdf: "https://papers.neurips.cc/paper_files/paper/2025/file/52a8f97c0393be8b2f36a54925010cff-Paper-Conference.pdf"
tags: ["query:ATSP"]
score: 10
source: NeurIPS-2025-Accepted
selection_source: long-range
publication_date: 2025
publication_date_precision: year
publication_date_source: conference year only; exact release date unverified
publication_date_kind: unknown
id: openreview-neurips-2025-cnxrp7u5gv
canonical_id: "work:8f09180999242238358263a2"
research_run_id: 20261125-1f13833d13c1
research_mode: starter
reading_status: complete
title_zh: 通过迹引导的成本增强求解非对称旅行商问题
tldr: 非对称旅行商问题（ATSP）是组合优化中的经典难题。本文提出一种连续松弛框架，将可微的迹引导DAG约束与双随机矩阵松弛结合，用投影指数梯度法优化软排列。在标准ATSP基准上达到领先性能，在大规模或非对称实例上优于LKH-3等启发式求解器。
motivation: ATSP缺乏有效的连续松弛与梯度优化手段，现有启发式求解器在大规模非对称实例上表现受限。
method: 融合可微迹引导DAG约束与双随机矩阵松弛，采用自适应步长投影指数梯度法，并用贪心子回路合并恢复离散解。
result: 在标准ATSP基准上取得领先性能，大规模与非对称实例上精度和可扩展性优于LKH-3。
conclusion: 为ATSP提供了可微连续松弛与梯度优化新路径，兼顾解质量与可扩展性。
evidence: 该文以连续松弛与梯度优化求解ATSP，属于组合优化专题中非对称TSP求解方法的研究。
reading_content_version: 1
reading_section: deep
---

## 摘要
非对称旅行商问题（ATSP）是组合优化中最基础且公认最困难的问题之一。我们提出了一种新颖的非对称旅行商问题（ATSP）连续松弛框架，利用可微约束来鼓励无环结构和有效排列。我们的方法将基于可微迹的有向无环图（DAG）约束与分配问题的双随机矩阵松弛相结合，从而能够在软排列上进行基于梯度的优化。我们开发了一种具有自适应步长的投影指数梯度方法，以在满足松弛约束的同时最小化巡回成本。为了恢复高质量的离散巡回，我们引入了一种贪心后处理过程，该过程使用成本感知的环合并来迭代修正子巡回。我们的方法在标准非对称TSP基准上达到了最先进的性能，并展现出有竞争力的可扩展性和准确性，特别是在LKH-3等启发式求解器难以处理的大规模或非对称实例上。

## Abstract
The Asymmetric Traveling Salesman Problem (ATSP) ranks among the most fundamental and notoriously difficult problems in combinatorial optimization. We propose a novel continuous relaxation framework for the Asymmetric Traveling Salesman Problem (ATSP) by leveraging differentiable constraints that encourage acyclic structures and valid permutations. Our approach integrates a differentiable trace-based Directed Acyclic Graph (DAG) constraint with a doubly stochastic matrix relaxation of the assignment problem, enabling gradient-based optimization over soft permutations. We develop a projected exponentiated gradient method with adaptive step size to minimize tour cost while satisfying the relaxed constraints. To recover high-quality discrete tours, we introduce a greedy post-processing procedure that iteratively corrects subtours using cost-aware cycle merging. Our method achieves state-of-the-art performance on standard asymmetric TSP benchmarks and demonstrates competitive scalability and accuracy, particularly on large or asymmetric instances where heuristic solvers such as LKH-3 struggle.

## 专题评审

专题相关性评分：10/10。

标题和摘要明确以ATSP为求解目标并提出新算法。

---

## 论文详细总结（自动生成）

# 论文结构化总结：Solving Asymmetric Traveling Salesman Problem via Trace-Guided Cost Augmentation

## 1. 核心问题与研究动机

- **问题定位**：非对称旅行商问题（ATSP）是组合优化中最基础也最困难的问题之一，许多组合优化问题理论上可归约到 ATSP，因此 ATSP 求解器的进步具有广泛的溢出价值。
- **背景矛盾**：现有研究格局存在明显失衡——组合优化社区大量精力投入对称 TSP（LKH-3 等强启发式主要面向对称情形），而专门面向非对称情形的求解器在对称实例上表现差；反之，对称求解器需将 ATSP 节点翻倍才能应用，代价高。
- **现有方法不足**：
  - 强化学习类方法（GOAL、MatPOENet 等）推理快，但解质量通常低于 LKH-3，且多在满足三角不等式的 ATSP 上训练，泛化到纯随机 ATSP 时性能急剧退化。
  - 基于分配问题（AP）松弛的构造式启发（如 Karp–Steele Patching 及其变体）理论上有吸引力（AP 松弛对非对称情形更紧），但开源实现往往不如 LKH-3。
- **核心洞察**：一般 TSP 可表述为"分配问题 + 恰好构成单一回路"的约束；该约束等价于要求赋值的所有真子图均为有向无环图（DAG）。受可微 DAG 学习进展启发，作者提出将迹（trace）型无环约束嵌入 ATSP 的连续松弛，从而用梯度方法求解。

## 2. 方法论

### 2.1 核心思想
将 ATSP 写成置换矩阵优化问题，把"无子回路"约束替换为可微的迹型无环性约束，并在双随机矩阵多面体上做连续松弛，用投影指数梯度法优化，再通过贪心解码与局部搜索恢复离散巡回。

### 2.2 关键技术细节

- **可微 DAG 约束**：对正邻接矩阵 $X$，用 $h(X)=\sum_{i=1}^{n}\mathrm{tr}(X^i)=0$ 刻画无环性（$X$ 含长度 $i$ 的环时 $\mathrm{tr}(X^i)>0$）。
- **精确连续松弛（公式 3）**：在双随机矩阵集合 $\mathcal{D}_n=\{X\in[0,1]^{n\times n}: X\mathbf{1}=\mathbf{1},\ \mathbf{1}^\top X=\mathbf{1}^\top\}$ 上最小化 $\langle D,X\rangle$，约束为 $\sum_{i=1}^{n-1}\mathrm{tr}(X^i)=0$。
- **命题 1（松弛的精确性）**：借助 Birkhoff–von Neumann 定理证明，任何满足该约束的双随机矩阵必为单一哈密顿回路的置换矩阵，故松弛问题的全局最优即原 TSP 最优。证明思路为反证：若分解中含多个置换矩阵或含子回路置换，则某个 $j<n$ 使 $\mathrm{tr}(X^j)>0$，违反约束。
- **对数域重参数化（公式 5–6）**：令 $X=\exp(Y)$（逐元素指数），保证严格正性、避免边界问题、提升数值稳定性；引入拉格朗日乘子 $\lambda$ 将约束问题转为无约束目标 $f(Y)=\langle D,\exp(Y)\rangle+\lambda\,\mathrm{tr}\big(\sum_{i=1}^{n-1}(\exp(Y))^i\big)$。
- **梯度（公式 7）**：$\nabla_Y f(Y)=D\odot\exp(Y)+\lambda\big[\sum_{i=0}^{n-2}(i+1)\exp(Y)^i\big]^\top\odot\exp(Y)$，其中 $\odot$ 为逐元素乘。
- **算法 1（近似投影梯度下降）流程**：
  1. 初始化 $Y\leftarrow -D$，用线性分配求初始置换 $\pi_{\text{prev}}$；
  2. 每轮计算梯度并更新 $Y_{\text{new}}\leftarrow Y-\alpha\nabla_Y f(Y)$；
  3. 用 Sinkhorn 归一化将 $\exp(Y_{\text{new}})$ 投影回 $\mathcal{D}_n$，再取对数回到对数域；
  4. 用 $-\Y_{\text{new}}$ 解线性分配得新置换；若置换改变则步长减半，否则加倍（自适应步长）；
  5. 若新置换只含一个回路则提前终止。
- **梯度近似加速**：矩阵幂加权和在 $n$ 大时因 $O(n^3)$ 矩阵乘法代价高；作者用当前硬分配置换矩阵 $\pi_{\text{prev}}$ 替代 $\exp(Y)$ 计算该和——置换矩阵稀疏二值、其幂为循环移位，可在 $O(n^2)$ 内求和。
- **贪心解码（子回路消除）**：从随机起点出发，沿赋值概率最高的边前进；若该边会形成过早回路或重复访问节点，则改选原始代价矩阵下最近的未访问节点，直至构造完整哈密顿回路。
- **局部搜索**：后处理加简单 2-opt；作者指出 2-opt 对非对称实例收益甚微（方向性代价结构），对对称实例收益明显。
- **复杂度**：每轮主导开销为线性分配（匈牙利算法最坏 $O(n^3)$，实际因早停更快）；附录提出复用对偶变量 $u,v$ 作热启动，以及最多 5 次迭代的简单分支定界（对 LAP 解中最高代价边分支）。

## 3. 实验设计

- **数据集/场景**：
  - 随机生成的 ATSP，规模 $n\in\{20,50,100,200,500,1000\}$，代价矩阵元素独立采样自 $[0,1]$ 均匀分布；同时覆盖**纯随机 ATSP**（不满足三角不等式）与**满足三角不等式的 ATSP**（沿用 Kwon 等的后处理构造）。
  - 对称 TSP：$n\in\{20,50\}$，$[0,1]^2$ 均匀随机点 + 欧氏距离。
  - 附录：TSPLIB 中大规模 ATSP 基准（rbg323/358/403/443 等堆垛机类实例）；以及与 ILP（Gurobi）在 100 节点对称、500 节点非对称实例上的初步对比。
  - 需整数代价的求解器：代价乘 $10^6$ 后取整。
- **Benchmark 与评价指标**：以 LKH-3（10 次运行 × 10000 trials）为参照计算 GAP（平均与中位数），并报告运行时间；每个设置平均 128 个实例。
- **对比方法**：
  - LKH-3 三种配置：(1, 500)、(1, 10000)、(10, 10000)；
  - 学习类方法 GOAL（GNN + RL）与 MatPOENet（Transformer），使用公开预训练权重；
  - 未对比 Gurobi/Concorde 等精确求解器（大规模下过慢），仅在附录做小规模初步对比。

## 4. 资源与算力

- 硬件：AMD Ryzen 9 3900X CPU、128GB DDR4 内存、NVIDIA RTX 3090 GPU（单卡）。
- 使用方式：LKH-3 为 C++ 单线程 CPU 运行；本文方法用 Python + SciPy，**单 CPU 进程、未用 GPU**；学习类基线（GOAL、MatPOENet）在 GPU 上推理。
- **未明确说明**：训练时长、总计算量、能耗等均未报告（本文方法本身无需训练，但未给出总实验耗时统计）。

## 5. 实验数量与充分性

- **实验组数概览**：
  - 主表 7 张：小规模（ATSP20/50，纯随机与三角不等式各一表）、中规模（ATSP100/200，各一表）、大规模（ATSP500/1000，各一表）、对称 TSP（TSP20/50 一表）。
  - 附录：TSPLIB 4 个实例对比表、ILP 对比 2 张表、复用对偶变量与 BnB 的增强结果 2 张表。
  - 覆盖 6 个问题规模 × 2 种 ATSP 分布 + 对称情形 + 真实基准，规模跨度较完整。
- **充分性评估**：
  - **优点**：规模覆盖从 20 到 1000，且区分"纯随机"与"三角不等式"两种分布，揭示出学习类方法的分布偏移问题，这一点比多数同类工作更诚实；附录给出加速策略（对偶复用、BnB）的增益，信息量较足。
  - **不足**：
    - 未报告误差棒、置信区间或显著性检验（作者在 checklist 中自认此项为 No，仅以平均值+中位数替代）。
    - 消融不系统：未单独量化迹约束、Sinkhorn 投影、贪心解码、2-opt 各组件贡献；$\lambda$、初始步长 $\alpha$、缩放因子 $\gamma$、最大迭代数 $T$ 等超参的敏感性未分析。
    - 学习类基线仅用公开权重直接推理，未在其训练分布上重训，跨分布比较虽揭示了泛化问题，但对基线本身不完全公平（作者也承认可能存在分布偏移）。
    - 与精确求解器（Gurobi）的对比仅 10 个样本、限于附录，统计意义有限。
    - TSPLIB 仅 4 个实例，覆盖偏窄。

## 6. 主要结论与发现

- 连续松弛在理论上**精确**：全局最优即 TSP 最优解；实践中局部最优常直接给出有效巡回，无需后处理。
- **大规模优势显著**：纯随机 ATSP 上，$n\ge 100$ 时优于 LKH-3(1,500)，$n\ge 200$ 时超过 LKH-3(1,10000)；$n=1000$ 时相对 LKH-3(10,10000) 提升超 20%，相对 LKH-3(1,500) 提升超 70%（表中 GAP 为负值，即优于参照）。三角不等式 ATSP 上趋势相同但幅度较小（1000 节点约 -0.35%）。
- **速度有竞争力**：未做工程优化的情况下，运行时间常与 LKH-3(1,500) 相当甚至更快，且快于 GPU 加速的学习类方法（大规模下）。
- **学习类方法泛化失败**：MatPOENet、GOAL 在纯随机 ATSP 上 GAP 达数百甚至上万百分比，说明在三角不等式数据上训练的神经求解器难以迁移到一般非对称分布；有趣的是 GOAL 在三角不等式 ATSP20 上反而大幅超过 LKH-3，提示在大规模结构化问题上训练可能增强小规模泛化。
- **对称 TSP 上**：方法未针对对称性设计，小规模下略逊于 LKH-3（TSP20 平均 GAP 0.04%，TSP50 为 0.86%），但明显优于 GOAL，与 MatPOENet 互有胜负。
- **加速策略有效**：复用对偶变量可提速至多约 5 倍；叠加 BnB 可进一步提升解质量（如 1000 节点纯随机 GAP 从 -21.40% 到 -22.31%）。
- **TSPLIB 实测**：在 rbg 系列上解质量总体优于 LKH-3(1–100)，部分实例接近 LKH-3(1–10000)，且耗时更短。

## 7. 优点

- **理论贡献清晰**：给出一个可微、精确的 ATSP 连续刻画，并用 Birkhoff–von Neumann 定理给出简洁严格的最优性证明，为"连续松弛 + 梯度优化"路线提供了合法性基础。
- **跨领域迁移巧妙**：把可微 DAG 学习中的迹约束引入组合优化，视角新颖；对数域重参数化 + Sinkhorn 投影的组合在数值上稳健。
- **工程细节务实**：自适应步长（依据 LAP 解是否变化调整）、用硬置换近似矩阵幂和（$O(n^3)\to O(n^2)$）、对偶变量热启动、贪心解码与 2-opt，都是低成本高收益的设计。
- **实验诚实度高**：主动区分纯随机与三角不等式分布，暴露学习类基线的泛化缺陷；在 checklist 中如实标注未提供误差棒、代码暂未开源等。
- **可扩展性突出**：在 LKH-3 表现吃力的超大规模非对称实例上取得领先，且方法天然可并行（Auction 算法、GPU 移植被点名为未来方向）。

## 8. 不足与局限

- **理论层面**：松弛虽精确但**非凸**，算法只保证收敛到局部最优，缺乏收敛性保证与解质量的理论界；$\lambda$ 的取值对可行性影响大，但无理论指导。
- **实验统计性**：无误差棒/显著性检验；每设置 128 个实例但未说明随机种子控制；超参敏感性、组件消融缺失，难以判断各模块的真实贡献。
- **基线公平性**：学习类方法未在目标分布上重训，跨分布比较虽具信息量，但不能完全代表这些方法在其设计场景下的能力；LKH-3 的调参预算（trials 数）与本文方法的迭代预算未做等算力对齐说明。
- **应用限制**：
  - 方法面向非对称/一般（非度量）TSP，对称实例上不占优，且未利用对称性；
  - 依赖匈牙利算法求解 LAP，$O(n^3)$ 复杂度在更大规模（如 $n>10^4$）下的表现未知；
  - 贪心解码在难例上可能显著劣化解质量，2-opt 对非对称实例几乎无效，局部搜索环节偏弱（作者建议未来换用 LKH 作精修）；
  - 仅在合成随机实例与少量 TSPLIB 实例上验证，缺少真实物流/路径规划等应用场景评估。
- **可复现性**：代码承诺发表后公开，当前不可获取；checklist 中"实验统计显著性"一项自评为 No。
- **其他**：未讨论更广泛社会影响（checklist 自评 No）；标题中的 "Cost Augmentation" 与正文实际内容（迹引导的约束松弛）表述略有出入，术语一致性可改进。

（完）
