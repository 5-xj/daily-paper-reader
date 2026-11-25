<div class="dpr-topic-result-actions"><button type="button" data-topic-copy="docs/starter-pack/20261125-1f13833d13c1/papers.md">复制论文清单</button> <a href="docs/starter-pack/20261125-1f13833d13c1/papers.md" download data-no-router>下载 Markdown</a> <a href="docs/starter-pack/20261125-1f13833d13c1/papers.json" download data-no-router>下载 JSON</a> <button type="button" data-topic-continue="20261125-1f13833d13c1">继续生成阅读内容</button></div>

# ATSP · 入门导读

> 本导读基于所列论文的标题、摘要和已有速览，不代表已阅读全部全文。近期窗口不是完整领域史；检索不保证覆盖全部相关论文。模型导读需结合原文核验。

检索窗口：arXiv &#91;2025-11-25, 2026-11-25&#41;；会议 &#91;2024-11-25, 2026-11-25&#41;（UTC，结束日不含）

## 方向概览

本导读围绕非对称旅行商问题（ATSP）的求解前沿，基于检索窗口内提供的8篇论文，梳理出三条主要脉络：一是连续松弛与可微分约束方向，用梯度优化在软置换上求解ATSP并配合离散化后处理；二是近似算法理论方向，包括将ATSP近似保证归约到非对称路径TSP、非对称多路径TSP的近似，以及薄树验证复杂度这一与ATSP近似相关的结构性结果；三是启发式与统一神经求解方向，包括基于最小费用流与环消去的定向TSP启发式，以及将ATSP等归约为矩阵编码通用TSP的神经求解框架。此外还有一篇带颜色约束的ATSP平均情形分析，属于理论/概率分析而非求解器。需要说明：本窗口内没有提供分支切割、割平面、整数规划建模或LKH类经典局部搜索的代表性文献，因此无法据此完整评述ATSP精确求解的主流进展；概述与各节仅反映上述候选论文，不构成领域全史。

依据：[Solving the Asymmetric Traveling Salesman Problem via Trace-Guided Cost Augmentation](/conference/neurips-2025/openreview-neurips-2025-cnxrp7u5gv-solving-the-asymmetric-traveling-salesman-problem-via-trace-guided-cost-augmentation)；[Reducing Asymmetric Path TSP to Asymmetric TSP](/20251125-20261124/2611.21453v1)；[Approximation Algorithms for Asymmetric Multi-Path TSP](/20251125-20261124/2611.26188v1)；[UniCO: On Unified Combinatorial Optimization via Problem Reduction to Matrix-Encoded General TSP](/conference/iclr-2025/openreview-iclr-2025-yewakmniex-unico-on-unified-combinatorial-optimization-via-problem-reduction-to-matrix-encoded-general-tsp)；[A Canceling Heuristic for the Directed Traveling Salesman Problem](/20250910-20260909/2603.26564v1)；[Expected cost in Combinatorial Optimization under color constraints](/20251125-20261124/2608.03608v1)；[Thin Tree Verification is coNP-Complete](/20250910-20260909/2512.25043v1)

## 连续松弛与可微分约束方法

该方向把ATSP写成带可微约束的连续优化问题。Trace-Guided Cost Augmentation一文将基于迹的可微有向无环图约束与分配问题的双随机矩阵松弛结合，在软置换上进行基于梯度的优化，采用带自适应步长的投影指数梯度法，并用贪心后处理通过代价感知的环合并修正子回路；作者报告在标准非对称基准上达到当时最优，并在大规模或非对称实例上相对LKH-3具有竞争力。需要注意，这些结论来自该文自述，本导读未核验其实验细节与对比设置。该路线与经典精确/启发式求解器的关系，在给定材料中缺乏直接比较证据。

依据：[Solving the Asymmetric Traveling Salesman Problem via Trace-Guided Cost Augmentation](/conference/neurips-2025/openreview-neurips-2025-cnxrp7u5gv-solving-the-asymmetric-traveling-salesman-problem-via-trace-guided-cost-augmentation)

## 近似算法与结构性理论

本组论文处理ATSP的近似保证及其向变体的传播。Reducing Asymmetric Path TSP to Asymmetric TSP证明：对任意常数α≥1与ε&gt;0，ATSP的α-近似算法可导出非对称路径TSP的&#40;α+ε&#41;-近似，改进了Feige与Singh的α&#40;2+ε&#41;结果，并回答了Traub与Vygen的开放问题。Approximation Algorithms for Asymmetric Multi-Path TSP研究多路径推广：一般情形下即使允许近似因子依赖顶点数也在多项式时间内不可近似，作者给出时间n^&#123;O&#40;k&#41;&#125;的O&#40;k&#41;-近似；在起点终点分别相同的特殊情形给出多项式时间O&#40;k&#41;-近似与双准则近似，在多仓库情形给出常数因子近似，并由此改进非对称后悔有界车辆路径与单位权重路径ATSP的常数因子近似。Thin Tree Verification is coNP-Complete证明判定给定树是否α-薄是coNP-难的，而材料指出高效构造O&#40;1&#41;/k-薄树可直接导出ATSP的O&#40;1&#41;-近似，因此该结果刻画了这条ATSP近似路线的验证侧障碍。上述均为理论结果，材料中未提供实验评测。

依据：[Reducing Asymmetric Path TSP to Asymmetric TSP](/20251125-20261124/2611.21453v1)；[Approximation Algorithms for Asymmetric Multi-Path TSP](/20251125-20261124/2611.26188v1)；[Thin Tree Verification is coNP-Complete](/20250910-20260909/2512.25043v1)

## 启发式改进：流与环消去

A Canceling Heuristic for the Directed Traveling Salesman Problem利用最小费用流与TSP之间的联系来改进已有次优回路（例如经典启发式得到的局部最优）。方法把搜索空间限制在交替使用回路内弧与回路外弧的环与循环上，实践结果显示产生的子回路数量较少，轻量修补步骤即可获得较高成功率并缩小与最优解的差距。该文面向有向TSP，与ATSP求解直接相关；但材料未给出与其他启发式或精确方法在标准ATSP基准上的系统对比，故其相对前沿水平的位置需谨慎看待。

依据：[A Canceling Heuristic for the Directed Traveling Salesman Problem](/20250910-20260909/2603.26564v1)

## 统一建模与神经求解器

UniCO提出把若干组合优化问题归约为以距离矩阵表示的通用TSP形式，材料称至少ATSP、HCP与SAT可较容易地归约与解转换。针对非度量、非对称或离散距离且无显式节点坐标的矩阵型输入，作者设计两种神经TSP求解器：基于强化学习的序列模型MatPOENet（伪独热嵌入）与基于扩散生成模型的MatDIFFNet（混合噪声参考映射），并在ATSP、2DTSP、HCP与SAT分布的通用TSP上实验，报告对结构及规模变化的矩阵编码TSP具有较强能力。该方向把ATSP作为统一求解框架的测试场景之一，而非专门针对ATSP的算法设计；材料未提供与精确求解器的严格最优性差距分析。

依据：[UniCO: On Unified Combinatorial Optimization via Problem Reduction to Matrix-Encoded General TSP](/conference/iclr-2025/openreview-iclr-2025-yewakmniex-unico-on-unified-combinatorial-optimization-via-problem-reduction-to-matrix-encoded-general-tsp)

## 平均情形与概率分析

Expected cost in Combinatorial Optimization under color constraints建立带颜色约束的经典组合优化问题的平均情形模型：完全图边随机染成红蓝，对红边数量设上界以形成偏置，并分析该偏置对最小生成树、最短路、最小费用完美匹配与非对称旅行商问题最小费用的影响。该文属于理论/概率分析，不提供ATSP求解算法或计算实验，因此对“前沿如何求解ATSP”的直接指导有限，但可作为理解ATSP在随机模型下费用行为的参考。

依据：[Expected cost in Combinatorial Optimization under color constraints](/20251125-20261124/2608.03608v1)

## 评测与证据状况说明

在给定材料中，明确报告计算实验的仅有Trace-Guided Cost Augmentation（标准非对称基准、与LKH-3比较）与UniCO（ATSP等矩阵编码TSP实验）；A Canceling Heuristic报告了成功率与差距缩小的实践观察，但未给出标准基准上的系统对比。近似算法与薄树论文为理论结果，无实验评测；颜色约束论文为平均情形分析。材料未提供统一的基准集、评价指标定义或可复现资源（代码仓库、数据集链接），因此本导读无法对方法间性能作横向结论，也无法确认任何已发布实现。

依据：[Solving the Asymmetric Traveling Salesman Problem via Trace-Guided Cost Augmentation](/conference/neurips-2025/openreview-neurips-2025-cnxrp7u5gv-solving-the-asymmetric-traveling-salesman-problem-via-trace-guided-cost-augmentation)；[UniCO: On Unified Combinatorial Optimization via Problem Reduction to Matrix-Encoded General TSP](/conference/iclr-2025/openreview-iclr-2025-yewakmniex-unico-on-unified-combinatorial-optimization-via-problem-reduction-to-matrix-encoded-general-tsp)；[A Canceling Heuristic for the Directed Traveling Salesman Problem](/20250910-20260909/2603.26564v1)；[Reducing Asymmetric Path TSP to Asymmetric TSP](/20251125-20261124/2611.21453v1)；[Approximation Algorithms for Asymmetric Multi-Path TSP](/20251125-20261124/2611.26188v1)；[Thin Tree Verification is coNP-Complete](/20250910-20260909/2512.25043v1)；[Expected cost in Combinatorial Optimization under color constraints](/20251125-20261124/2608.03608v1)

## 进展与局限

从本窗口看，ATSP求解呈现两条并行进展：一是以连续松弛、可微约束和梯度优化构造软置换、再离散化恢复回路的新范式；二是近似理论持续收紧，包括路径版本归约的加性误差改进、多路径推广的近似与不可近似边界，以及与ATSP近似密切相关的薄树验证复杂度障碍。启发式侧出现以最小费用流和环消去改进局部最优的思路，神经求解侧则尝试用统一矩阵编码TSP框架覆盖ATSP。主要局限在于：材料缺少分支切割、割平面与整数规划建模等精确求解主线的代表文献，缺少经典局部搜索（如LKH类）的系统描述，也缺少跨方法的统一基准评测与可复现资源；因此对“当前最前沿ATSP求解器”的完整判断证据不足，需补充相应文献后再作扩展。

依据：[Solving the Asymmetric Traveling Salesman Problem via Trace-Guided Cost Augmentation](/conference/neurips-2025/openreview-neurips-2025-cnxrp7u5gv-solving-the-asymmetric-traveling-salesman-problem-via-trace-guided-cost-augmentation)；[Reducing Asymmetric Path TSP to Asymmetric TSP](/20251125-20261124/2611.21453v1)；[Approximation Algorithms for Asymmetric Multi-Path TSP](/20251125-20261124/2611.26188v1)；[Thin Tree Verification is coNP-Complete](/20250910-20260909/2512.25043v1)；[A Canceling Heuristic for the Directed Traveling Salesman Problem](/20250910-20260909/2603.26564v1)；[UniCO: On Unified Combinatorial Optimization via Problem Reduction to Matrix-Encoded General TSP](/conference/iclr-2025/openreview-iclr-2025-yewakmniex-unico-on-unified-combinatorial-optimization-via-problem-reduction-to-matrix-encoded-general-tsp)

## 建议阅读顺序

以下为建议学习顺序，不是公布时间排序。

1. [Solving the Asymmetric Traveling Salesman Problem via Trace-Guided Cost Augmentation](/conference/neurips-2025/openreview-neurips-2025-cnxrp7u5gv-solving-the-asymmetric-traveling-salesman-problem-via-trace-guided-cost-augmentation) · 入门
   - 阅读理由：先看一条完整的现代求解路线：可微DAG约束加双随机松弛、梯度优化与贪心后处理，并含标准基准与LKH-3对比的自述结论，便于建立对ATSP求解流程的具体认识。
   - 公布时间：2025（年精度）
   - NeurIPS-2025-Accepted · 2025（年精度）：[官方论文集](https://papers.neurips.cc/paper_files/paper/2025/hash/52a8f97c0393be8b2f36a54925010cff-Abstract-Conference.html) / [原文](https://openreview.net/forum?id=CNxrp7u5gV)

2. [A Canceling Heuristic for the Directed Traveling Salesman Problem](/20250910-20260909/2603.26564v1) · 入门
   - 阅读理由：接着看启发式改进思路：用最小费用流与交替环消去改进已有回路，理解如何在局部最优基础上做结构性修正。
   - 公布时间：2026-03-27（日精度）
   - arxiv · 2026-03-27（日精度）：[原文](https://arxiv.org/pdf/2603.26564v1) / [PDF](https://arxiv.org/pdf/2603.26564v1)

3. [UniCO: On Unified Combinatorial Optimization via Problem Reduction to Matrix-Encoded General TSP](/conference/iclr-2025/openreview-iclr-2025-yewakmniex-unico-on-unified-combinatorial-optimization-via-problem-reduction-to-matrix-encoded-general-tsp) · 进阶
   - 阅读理由：了解统一建模与神经求解视角：ATSP如何被归约为矩阵编码通用TSP，以及矩阵型非对称输入下的两类神经求解器设计。
   - 公布时间：2025（年精度）
   - ICLR-2025-Accepted · 2025（年精度）：[官方论文集](https://proceedings.iclr.cc/paper_files/paper/2025/hash/3acefc84f1355f5f974195bb9f6014a4-Abstract-Conference.html) / [原文](https://openreview.net/forum?id=yEwakMNIex)

4. [Reducing Asymmetric Path TSP to Asymmetric TSP](/20251125-20261124/2611.21453v1) · 进阶
   - 阅读理由：转入近似理论：ATSP近似算法如何以任意小加性误差传导到非对称路径TSP，理解归约技术的作用。
   - 公布时间：2026-11-16（日精度）
   - arxiv · 2026-11-16（日精度）：[原文](https://arxiv.org/pdf/2611.21453v1)

5. [Approximation Algorithms for Asymmetric Multi-Path TSP](/20251125-20261124/2611.26188v1) · 进阶
   - 阅读理由：在同一理论脉络下看多路径推广：不可近似性、O&#40;k&#41;-近似及特殊与多仓库情形的结果，理解ATSP变体的近似边界。
   - 公布时间：2026-11-19（日精度）
   - arxiv · 2026-11-19（日精度）：[原文](https://arxiv.org/pdf/2611.26188v1)

6. [Thin Tree Verification is coNP-Complete](/20250910-20260909/2512.25043v1) · 专题
   - 阅读理由：理解ATSP近似的一条结构性路线及其验证侧障碍：薄树验证的coNP-完全性如何关联到ATSP的O&#40;1&#41;-近似构造。
   - 公布时间：2025-12-31（日精度）
   - arxiv · 2025-12-31（日精度）：[原文](https://arxiv.org/pdf/2512.25043v1) / [PDF](https://arxiv.org/pdf/2512.25043v1)

7. [Expected cost in Combinatorial Optimization under color constraints](/20251125-20261124/2608.03608v1) · 专题
   - 阅读理由：作为补充视角阅读：带颜色约束的平均情形模型如何分析ATSP等问题的期望最小费用，属于概率分析而非求解器。
   - 公布时间：2026-08-04（日精度）
   - arxiv · 2026-08-04（日精度）：[原文](https://arxiv.org/pdf/2608.03608v1)

任务：研究方向大礼包

固定窗口：arXiv &#91;2025-11-25, 2026-11-25&#41;；会议 &#91;2024-11-25, 2026-11-25&#41;（UTC，结束日不含）

本次候选评审上限 300，最终名单上限 100；本轮内容预算 10。

覆盖限制：仅检索配置范围内已有库存与预算内候选；向量/会议Top-k召回并非全库遍历，不保证找全相关论文。未核实录用、日期边界和缺失库存不能当作已覆盖。

缺失库存：eccv 2025、emnlp 2026。

研究需求：我希望去进一步了解ATSP相关的知识，也就是现在前沿的atsp都是怎么进行求解的，组合优化领域

# ATSP

以下为本次固定最终名单，按相关性评分降序；不代表全部相关论文。

1. [Solving the Asymmetric Traveling Salesman Problem via Trace-Guided Cost Augmentation](https://papers.neurips.cc/paper_files/paper/2025/hash/52a8f97c0393be8b2f36a54925010cff-Abstract-Conference.html) · 分数 10
2. [Reducing Asymmetric Path TSP to Asymmetric TSP](https://arxiv.org/abs/2611.21453v1) · 分数 9
3. [Approximation Algorithms for Asymmetric Multi-Path TSP](https://arxiv.org/abs/2611.26188v1) · 分数 8
4. [UniCO: On Unified Combinatorial Optimization via Problem Reduction to Matrix-Encoded General TSP](https://proceedings.iclr.cc/paper_files/paper/2025/hash/3acefc84f1355f5f974195bb9f6014a4-Abstract-Conference.html) · 分数 8
5. [A Canceling Heuristic for the Directed Traveling Salesman Problem](https://arxiv.org/abs/2603.26564v1) · 分数 7
6. [Expected cost in Combinatorial Optimization under color constraints](https://arxiv.org/abs/2608.03608v1) · 分数 6
7. [Thin Tree Verification is coNP-Complete](https://arxiv.org/abs/2512.25043v1) · 分数 6

[按公布时间查看](#/starter-pack/20261125-1f13833d13c1/dates)

阅读内容：已完成 7，待补充 0。
