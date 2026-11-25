<div class="dpr-topic-result-actions"><button type="button" class="arxiv-tool-btn" data-topic-copy="docs/20251125-20261124-starter-atsp/papers.md">复制完整清单</button> <a class="arxiv-tool-btn" href="docs/20251125-20261124-starter-atsp/papers.md" download data-no-router>下载 Markdown 清单</a></div>

# ATSP · 入门导读

> 本导读基于所列论文的标题、摘要和已有速览，不代表已阅读全部全文。近期窗口不是完整领域史；检索不保证覆盖全部相关论文。模型导读需结合原文核验。

检索窗口：2025-11-25 ~ 2026-11-24

## 方向概览

本导读围绕非对称旅行商问题（ATSP）的现代求解方法展开，覆盖近期检索窗口内的候选论文。研究问题可归纳为：在距离矩阵非对称、可能不满足三角不等式的条件下，如何从理论上获得更紧的近似保证，在工程上高效求得近优或最优巡游，并把方法推广到路径版本、多路径、时间依赖与大规模聚类路由等变体。候选论文大致分布在四条线索上：近似算法与LP松弛的整性比改进；整数规划建模、割平面与预处理；启发式与局部搜索（含流消圈、拓扑引导、学习式初始化与神经解码）；以及神经组合优化与统一求解框架。需要说明的是，本导读只依据候选论文的标题、摘要与TLDR，不补写未提供的经典文献、实验数字或领域事实；多数近似结果来自摘要中的自述，尚未经独立核验。

依据：[Better approximation guarantee for Asymmetric TSP](/20251125-20261124-starter-atsp/2603.14334v1-better-approximation-guarantee-for-asymmetric-tsp)；[A Common Improved Bound for Asymmetric TSP and Path TSP](/20251125-20261124-starter-atsp/2611.18498v1-a-common-improved-bound-for-asymmetric-tsp-and-path-tsp)；[Reducing Asymmetric Path TSP to Asymmetric TSP](/20251125-20261124-starter-atsp/2611.21453v1-reducing-asymmetric-path-tsp-to-asymmetric-tsp)；[Approximation Algorithms for Asymmetric Multi-Path TSP](/20251125-20261124-starter-atsp/2611.26188v1-approximation-algorithms-for-asymmetric-multi-path-tsp)；[A Canceling Heuristic for the Directed Traveling Salesman Problem](/20251125-20261124-starter-atsp/2603.26564v1-a-canceling-heuristic-for-the-directed-traveling-salesman-problem)；[Solving the Asymmetric Traveling Salesman Problem via Trace-Guided Cost Augmentation](/conference/neurips-2025/openreview-neurips-2025-cnxrp7u5gv-solving-the-asymmetric-traveling-salesman-problem-via-trace-guided-cost-augmentation)；[Thin Tree Verification is coNP-Complete](/20251125-20261124-starter-atsp/2512.25043v1-thin-tree-verification-is-conp-complete)；[TSP instances that require exponentially many subtour elimination constraints](/20251125-20261124-starter-atsp/2611.17386v1-tsp-instances-that-require-exponentially-many-subtour-elimination-constraints)；[Edge-aware Decoding for Neural Asymmetric Routing](/20251125-20261124-starter-atsp/2606.02136v1-edge-aware-decoding-for-neural-asymmetric-routing)；[UniCO: On Unified Combinatorial Optimization via Problem Reduction to Matrix-Encoded General TSP](/conference/iclr-2025/openreview-iclr-2025-yewakmniex-unico-on-unified-combinatorial-optimization-via-problem-reduction-to-matrix-encoded-general-tsp)

## 近似算法与LP松弛的理论前沿

这一子方向关注ATSP及其变体的近似比与松弛质量。候选论文中，一篇声称把ATSP近似比改进到15以下，并给出无权重有向图与指定端点巡游的更好比值，同时证明自然LP松弛的整性比上界更紧；另一篇在层状框架下强化子回路覆盖与递归增广，给出&#40;R&#42;+ε&#41;近似，R&#42;约为12.2604，并同时改进路径ATSP的保证。还有工作证明任意ATSP的α-近似可转化为路径ATSP的&#40;α+ε&#41;-近似，改进了既有归约；以及针对非对称多路径TSP给出O&#40;k&#41;近似与多仓库常数因子近似。需要注意，这些比值与归约均来自摘要自述，导读不补充其证明细节或与未提供文献的对比。另有一篇证明细树验证为coNP完全，指出基于细树猜想获得O&#40;1&#41;近似的路径面临障碍，属于对近似路线可行性的负面证据。

依据：[Better approximation guarantee for Asymmetric TSP](/20251125-20261124-starter-atsp/2603.14334v1-better-approximation-guarantee-for-asymmetric-tsp)；[A Common Improved Bound for Asymmetric TSP and Path TSP](/20251125-20261124-starter-atsp/2611.18498v1-a-common-improved-bound-for-asymmetric-tsp-and-path-tsp)；[Reducing Asymmetric Path TSP to Asymmetric TSP](/20251125-20261124-starter-atsp/2611.21453v1-reducing-asymmetric-path-tsp-to-asymmetric-tsp)；[Approximation Algorithms for Asymmetric Multi-Path TSP](/20251125-20261124-starter-atsp/2611.26188v1-approximation-algorithms-for-asymmetric-multi-path-tsp)；[Thin Tree Verification is coNP-Complete](/20251125-20261124-starter-atsp/2512.25043v1-thin-tree-verification-is-conp-complete)

## 整数规划建模、割平面与预处理

这一子方向处理ATSP的精确建模与求解效率。候选论文构造病态TSP实例，证明非对称实例需要指数级（增长率约φ^n）的子回路消除约束，否则Dantzig-Fulkerson-Johnson模型会返回更便宜的非连通解，并报告Concorde在这些实例上求解时间指数增长；这提示分支切割设计需警惕约束数量与模型紧性。另有工作采用迭代式割平面动态生成子回路消除约束，并结合候选弧预处理，在经典与量子后端上评估；还有预处理工作仅保留每个顶点代价最低的邻居弧以压缩变量规模。联合路由-分配问题的工作在MIP中加入Gurobi与割平面子回路消除，面向多重占位与时间窗等约束。总体看，候选证据集中在约束生成与规模压缩，缺少对分支切割整体框架的系统比较。

依据：[TSP instances that require exponentially many subtour elimination constraints](/20251125-20261124-starter-atsp/2611.17386v1-tsp-instances-that-require-exponentially-many-subtour-elimination-constraints)；[Cutting-plane methodology via quantum optimization for solving the Traveling Salesman Problem](/20251125-20261124-starter-atsp/2604.20321v1-cutting-plane-methodology-via-quantum-optimization-for-solving-the-traveling-salesman-problem)；[Traveling Salesman Problem with a preprocessing method for classical and quantum optimization](/20251125-20261124-starter-atsp/2603.23290v2-traveling-salesman-problem-with-a-preprocessing-method-for-classical-and-quantum-optimization)；[Assignment-Routing Optimization: Solvers for Problems Under Constraints](/20251125-20261124-starter-atsp/2512.18618v1-assignment-routing-optimization-solvers-for-problems-under-constraints)

## 启发式、局部搜索与初始化加速

这一子方向关注在精确方法难以扩展时获得高质量可行解。候选论文提出消圈启发式，利用最小费用流与TSP的联系，把搜索限制在路径内外弧交替的环流上，并以轻量修补恢复可行巡游；另有工作用回路与最小生成树的拓扑散度引导2-opt与3-opt。初始化方面，有免训练、与求解器无关的组件把大实例压缩到代理空间优化全局结构再恢复为起点，报告在千到十万节点规模上的加速；还有面向有序聚类路由的COMPASS，结合搜索与学习加速的子求解器，声称可处理非对称距离矩阵并扩展到十万级合成节点。这些结果多为作者自述，导读不补充未给出的对比基线细节。

依据：[A Canceling Heuristic for the Directed Traveling Salesman Problem](/20251125-20261124-starter-atsp/2603.26564v1-a-canceling-heuristic-for-the-directed-traveling-salesman-problem)；[Edge-wise Topological Divergence Gaps: Guiding Search in Combinatorial Optimization](/20251125-20261124-starter-atsp/2512.15800v1-edge-wise-topological-divergence-gaps-guiding-search-in-combinatorial-optimization)；[Just Initialize: A Training-Free Initialization Component for Large-Scale Routing Optimization](/20251125-20261124-starter-atsp/2609.35443v2-just-initialize-a-training-free-initialization-component-for-large-scale-routing-optimization)；[COMPASS: Ordered Clustered Routing at 100K Scale](/20251125-20261124-starter-atsp/2609.20352v1-compass-ordered-clustered-routing-at-100k-scale)

## 神经组合优化与连续松弛

这一子方向探索用学习与可微优化求解ATSP类问题。候选论文包括：迹引导代价增强框架，把可微DAG约束与双随机矩阵指派松弛结合，用投影指数梯度优化并贪婪修复子回路；边感知解码器，在神经非对称路由的最终打分中显式暴露当前有向边与回程闭合等迁移级量；UniCO把ATSP、HCP、SAT等归约为矩阵编码的通用TSP并配两种神经求解器；时间依赖TSP的神经模型用邻接张量刻画时变权重；Birkhoff扩展为排列函数提供几乎处处可微且带取整保证的连续延拓，与ATSP的指派松弛直接相关；以及把GNN本身训练为一次前向输出完整巡游的启发式。另有LLM驱动的耦合启发式组件联合进化与超图破坏—修复框架，虽以TSP/CVRP为主，但方法可迁移。该子方向的评测口径差异较大，部分工作使用ATSP-100/200/500/1000等基准，导读不补写未提供的具体数值。

依据：[Solving the Asymmetric Traveling Salesman Problem via Trace-Guided Cost Augmentation](/conference/neurips-2025/openreview-neurips-2025-cnxrp7u5gv-solving-the-asymmetric-traveling-salesman-problem-via-trace-guided-cost-augmentation)；[Edge-aware Decoding for Neural Asymmetric Routing](/20251125-20261124-starter-atsp/2606.02136v1-edge-aware-decoding-for-neural-asymmetric-routing)；[UniCO: On Unified Combinatorial Optimization via Problem Reduction to Matrix-Encoded General TSP](/conference/iclr-2025/openreview-iclr-2025-yewakmniex-unico-on-unified-combinatorial-optimization-via-problem-reduction-to-matrix-encoded-general-tsp)；[Neural Combinatorial Optimization for Time-Dependent Traveling Salesman Problem](/conference/neurips-2025/openreview-neurips-2025-uxtr6zyv1x-neural-combinatorial-optimization-for-time-dependent-traveling-salesman-problem)；[Differentiable extensions with rounding guarantees for combinatorial optimization over permutations](/conference/neurips-2025/openreview-neurips-2025-aaxk0cw6gw-differentiable-extensions-with-rounding-guarantees-for-combinatorial-optimization-over-permutations)；[Graph Neural Networks are Heuristics](/20251125-20261124-starter-atsp/2601.13465v4-graph-neural-networks-are-heuristics)；[LLM-Driven Joint Evolution of Coupled Heuristics Components for Routing Optimization](/20251125-20261124-starter-atsp/2609.02353v1-llm-driven-joint-evolution-of-coupled-heuristics-components-for-routing-optimization)；[Destroy and Repair Using Hyper-Graphs for Routing](/conference/aaai-2025/aaai-2025-34018-destroy-and-repair-using-hyper-graphs-for-routing)

## 评测、进展与局限

评测方面，候选论文使用的基准并不统一：近似算法以理论比值与整性比为指标；整数规划工作使用构造的病态实例、TSPLIB与自建数据集；神经方法使用ATSP-100/200/500/1000、ACVRP与矩阵编码实例；大规模路由工作报告合成与真实电商节点规模。时间依赖TSP的论文特别指出，许多实例的最优解不随时变权重改变，仅用平均旅行时间评估无法区分方法是否真正利用时间动态，这一评测批评值得在ATSP相关实验中借鉴。进展上，近似比与松弛上界被多篇工作推进，割平面与预处理在规模压缩上有效，学习式初始化与神经解码提供了新的工程路径。局限也很明显：近似结果依赖摘要自述且理论常数仍大；病态实例表明子回路约束数量可能指数增长；细树验证的coNP完全性给某类近似路线蒙上阴影；神经方法的泛化与评测口径尚不统一。证据不足之处在于，候选论文未提供统一的ATSP基准对比，导读无法据此判断哪类方法在实际实例上整体占优。

依据：[Better approximation guarantee for Asymmetric TSP](/20251125-20261124-starter-atsp/2603.14334v1-better-approximation-guarantee-for-asymmetric-tsp)；[A Common Improved Bound for Asymmetric TSP and Path TSP](/20251125-20261124-starter-atsp/2611.18498v1-a-common-improved-bound-for-asymmetric-tsp-and-path-tsp)；[TSP instances that require exponentially many subtour elimination constraints](/20251125-20261124-starter-atsp/2611.17386v1-tsp-instances-that-require-exponentially-many-subtour-elimination-constraints)；[Thin Tree Verification is coNP-Complete](/20251125-20261124-starter-atsp/2512.25043v1-thin-tree-verification-is-conp-complete)；[Neural Combinatorial Optimization for Time-Dependent Traveling Salesman Problem](/conference/neurips-2025/openreview-neurips-2025-uxtr6zyv1x-neural-combinatorial-optimization-for-time-dependent-traveling-salesman-problem)；[Just Initialize: A Training-Free Initialization Component for Large-Scale Routing Optimization](/20251125-20261124-starter-atsp/2609.35443v2-just-initialize-a-training-free-initialization-component-for-large-scale-routing-optimization)；[COMPASS: Ordered Clustered Routing at 100K Scale](/20251125-20261124-starter-atsp/2609.20352v1-compass-ordered-clustered-routing-at-100k-scale)；[Edge-aware Decoding for Neural Asymmetric Routing](/20251125-20261124-starter-atsp/2606.02136v1-edge-aware-decoding-for-neural-asymmetric-routing)

## 建议阅读顺序

以下为建议学习顺序，不是公布时间排序。

1. [Better approximation guarantee for Asymmetric TSP](/20251125-20261124-starter-atsp/2603.14334v1-better-approximation-guarantee-for-asymmetric-tsp) · 入门
   - 阅读理由：先建立ATSP近似比与LP整性比的理论坐标，理解当前保证的量级。
   - 公布时间：2026-03-15（日精度）
   - arxiv · 2026-03-15（日精度）：[原文](https://arxiv.org/pdf/2603.14334v1) / [PDF](https://arxiv.org/pdf/2603.14334v1)

2. [A Common Improved Bound for Asymmetric TSP and Path TSP](/20251125-20261124-starter-atsp/2611.18498v1-a-common-improved-bound-for-asymmetric-tsp-and-path-tsp) · 进阶
   - 阅读理由：紧接着看统一改进ATSP与路径ATSP的&#40;R&#42;+ε&#41;保证，形成对理论前沿的连续认识。
   - 公布时间：2026-11-13（日精度）
   - arxiv · 2026-11-13（日精度）：[原文](https://arxiv.org/pdf/2611.18498v1)

3. [Reducing Asymmetric Path TSP to Asymmetric TSP](/20251125-20261124-starter-atsp/2611.21453v1-reducing-asymmetric-path-tsp-to-asymmetric-tsp) · 进阶
   - 阅读理由：理解ATSP到路径ATSP的近似归约，是连接两类问题的理论桥梁。
   - 公布时间：2026-11-16（日精度）
   - arxiv · 2026-11-16（日精度）：[原文](https://arxiv.org/pdf/2611.21453v1)

4. [Approximation Algorithms for Asymmetric Multi-Path TSP](/20251125-20261124-starter-atsp/2611.26188v1-approximation-algorithms-for-asymmetric-multi-path-tsp) · 进阶
   - 阅读理由：把视野扩展到多路径与非对称变体，了解近似理论的推广边界。
   - 公布时间：2026-11-19（日精度）
   - arxiv · 2026-11-19（日精度）：[原文](https://arxiv.org/pdf/2611.26188v1)

5. [Thin Tree Verification is coNP-Complete](/20251125-20261124-starter-atsp/2512.25043v1-thin-tree-verification-is-conp-complete) · 专题
   - 阅读理由：从负面结果理解细树路线对ATSP近似的障碍，平衡对理论路线的预期。
   - 公布时间：2025-12-31（日精度）
   - arxiv · 2025-12-31（日精度）：[原文](https://arxiv.org/pdf/2512.25043v1) / [PDF](https://arxiv.org/pdf/2512.25043v1)

6. [TSP instances that require exponentially many subtour elimination constraints](/20251125-20261124-starter-atsp/2611.17386v1-tsp-instances-that-require-exponentially-many-subtour-elimination-constraints) · 入门
   - 阅读理由：转向整数规划建模，认识子回路消除约束可能指数增长的内在困难。
   - 公布时间：2026-11-11（日精度）
   - arxiv · 2026-11-11（日精度）：[原文](https://arxiv.org/pdf/2611.17386v1)

7. [Cutting-plane methodology via quantum optimization for solving the Traveling Salesman Problem](/20251125-20261124-starter-atsp/2604.20321v1-cutting-plane-methodology-via-quantum-optimization-for-solving-the-traveling-salesman-problem) · 进阶
   - 阅读理由：看迭代割平面与预处理如何动态控制约束规模，是建模困难的工程回应。
   - 公布时间：2026-04-22（日精度）
   - arxiv · 2026-04-22（日精度）：[原文](https://arxiv.org/pdf/2604.20321v1) / [PDF](https://arxiv.org/pdf/2604.20321v1)

8. [Traveling Salesman Problem with a preprocessing method for classical and quantum optimization](/20251125-20261124-starter-atsp/2603.23290v2-traveling-salesman-problem-with-a-preprocessing-method-for-classical-and-quantum-optimization) · 入门
   - 阅读理由：补充候选弧预处理压缩变量的具体思路，可与割平面方法对照。
   - 公布时间：2026-03-24（日精度）
   - arxiv · 2026-03-24（日精度）：[原文](https://arxiv.org/pdf/2603.23290v2) / [PDF](https://arxiv.org/pdf/2603.23290v2)

9. [Assignment-Routing Optimization: Solvers for Problems Under Constraints](/20251125-20261124-starter-atsp/2512.18618v1-assignment-routing-optimization-solvers-for-problems-under-constraints) · 进阶
   - 阅读理由：了解MIP加割平面在带丰富约束的联合路由-分配场景中的实用表现。
   - 公布时间：2025-12-21（日精度）
   - arxiv · 2025-12-21（日精度）：[原文](https://arxiv.org/pdf/2512.18618v1) / [PDF](https://arxiv.org/pdf/2512.18618v1)

10. [A Canceling Heuristic for the Directed Traveling Salesman Problem](/20251125-20261124-starter-atsp/2603.26564v1-a-canceling-heuristic-for-the-directed-traveling-salesman-problem) · 入门
   - 阅读理由：进入启发式层面，理解基于最小费用流的消圈改进如何作用于已有巡游。
   - 公布时间：2026-03-27（日精度）
   - arxiv · 2026-03-27（日精度）：[原文](https://arxiv.org/pdf/2603.26564v1) / [PDF](https://arxiv.org/pdf/2603.26564v1)

11. [Edge-wise Topological Divergence Gaps: Guiding Search in Combinatorial Optimization](/20251125-20261124-starter-atsp/2512.15800v1-edge-wise-topological-divergence-gaps-guiding-search-in-combinatorial-optimization) · 进阶
   - 阅读理由：看拓扑散度如何为2-opt/3-opt提供结构化引导，扩展局部搜索视角。
   - 公布时间：2025-12-16（日精度）
   - arxiv · 2025-12-16（日精度）：[原文](https://arxiv.org/pdf/2512.15800v1) / [PDF](https://arxiv.org/pdf/2512.15800v1)

12. [Just Initialize: A Training-Free Initialization Component for Large-Scale Routing Optimization](/20251125-20261124-starter-atsp/2609.35443v2-just-initialize-a-training-free-initialization-component-for-large-scale-routing-optimization) · 进阶
   - 阅读理由：学习免训练初始化如何把大实例压缩再恢复，是规模化求解的通用加速组件。
   - 公布时间：2026-09-28（日精度）
   - arxiv · 2026-09-28（日精度）：[原文](https://arxiv.org/pdf/2609.35443v1)
   - arxiv · 2026-09-28（日精度）：[原文](https://arxiv.org/pdf/2609.35443v2)

13. [COMPASS: Ordered Clustered Routing at 100K Scale](/20251125-20261124-starter-atsp/2609.20352v1-compass-ordered-clustered-routing-at-100k-scale) · 专题
   - 阅读理由：了解聚类有序路由在大规模非对称距离上的扩展，观察与ATSP基准的规模差异。
   - 公布时间：2026-09-17（日精度）
   - arxiv · 2026-09-17（日精度）：[原文](https://arxiv.org/pdf/2609.20352v1)

14. [Differentiable extensions with rounding guarantees for combinatorial optimization over permutations](/conference/neurips-2025/openreview-neurips-2025-aaxk0cw6gw-differentiable-extensions-with-rounding-guarantees-for-combinatorial-optimization-over-permutations) · 进阶
   - 阅读理由：从指派松弛出发理解Birkhoff扩展与取整保证，为神经与连续方法打基础。
   - 公布时间：2025（年精度）
   - NeurIPS-2025-Accepted · 2025（年精度）：[官方论文集](https://papers.neurips.cc/paper_files/paper/2025/hash/9840235bd522f0f067f306ddfd6d1ca1-Abstract-Conference.html) / [原文](https://openreview.net/forum?id=aAxk0cw6GW)

15. [Solving the Asymmetric Traveling Salesman Problem via Trace-Guided Cost Augmentation](/conference/neurips-2025/openreview-neurips-2025-cnxrp7u5gv-solving-the-asymmetric-traveling-salesman-problem-via-trace-guided-cost-augmentation) · 专题
   - 阅读理由：看可微DAG约束与双随机松弛结合的连续优化框架及其离散恢复。
   - 公布时间：2025（年精度）
   - NeurIPS-2025-Accepted · 2025（年精度）：[官方论文集](https://papers.neurips.cc/paper_files/paper/2025/hash/52a8f97c0393be8b2f36a54925010cff-Abstract-Conference.html) / [原文](https://openreview.net/forum?id=CNxrp7u5gV)

16. [Edge-aware Decoding for Neural Asymmetric Routing](/20251125-20261124-starter-atsp/2606.02136v1-edge-aware-decoding-for-neural-asymmetric-routing) · 专题
   - 阅读理由：聚焦神经路由的解码器设计，理解迁移级边信息为何重要。
   - 公布时间：2026-06-01（日精度）
   - arxiv · 2026-06-01（日精度）：[原文](https://arxiv.org/pdf/2606.02136v1) / [PDF](https://arxiv.org/pdf/2606.02136v1)

17. [UniCO: On Unified Combinatorial Optimization via Problem Reduction to Matrix-Encoded General TSP](/conference/iclr-2025/openreview-iclr-2025-yewakmniex-unico-on-unified-combinatorial-optimization-via-problem-reduction-to-matrix-encoded-general-tsp) · 专题
   - 阅读理由：了解把ATSP等归约为矩阵编码通用TSP的统一神经求解思路。
   - 公布时间：2025（年精度）
   - ICLR-2025-Accepted · 2025（年精度）：[官方论文集](https://proceedings.iclr.cc/paper_files/paper/2025/hash/3acefc84f1355f5f974195bb9f6014a4-Abstract-Conference.html) / [原文](https://openreview.net/forum?id=yEwakMNIex)

18. [Neural Combinatorial Optimization for Time-Dependent Traveling Salesman Problem](/conference/neurips-2025/openreview-neurips-2025-uxtr6zyv1x-neural-combinatorial-optimization-for-time-dependent-traveling-salesman-problem) · 专题
   - 阅读理由：把静态非对称推广到时间依赖设定，并注意其评测口径的批评。
   - 公布时间：2025（年精度）
   - NeurIPS-2025-Accepted · 2025（年精度）：[官方论文集](https://papers.neurips.cc/paper_files/paper/2025/hash/6996673217063746fc89f99340951600-Abstract-Conference.html) / [原文](https://openreview.net/forum?id=UXTR6ZYV1x)

19. [Graph Neural Networks are Heuristics](/20251125-20261124-starter-atsp/2601.13465v4-graph-neural-networks-are-heuristics) · 专题
   - 阅读理由：思考GNN作为学习式启发式本身的定位，与搜索增强路线形成对照。
   - 公布时间：2026-01-19（日精度）
   - arxiv · 2026-01-19（日精度）：[原文](https://arxiv.org/pdf/2601.13465v4) / [PDF](https://arxiv.org/pdf/2601.13465v4)

20. [LLM-Driven Joint Evolution of Coupled Heuristics Components for Routing Optimization](/20251125-20261124-starter-atsp/2609.02353v1-llm-driven-joint-evolution-of-coupled-heuristics-components-for-routing-optimization) · 专题
   - 阅读理由：了解LLM驱动耦合启发式组件联合进化，作为启发式自动设计的延伸阅读。
   - 公布时间：2026-09-02（日精度）
   - arxiv · 2026-09-02（日精度）：[原文](https://arxiv.org/pdf/2609.02353v1)

## 检索覆盖与论文目录

- 检索窗口：2025-11-25 ~ 2026-11-24（截止 2026-11-25，不含当天）
- 最终入选：24 篇（精读区 9 篇 · 速读区 15 篇）
- 研究需求：我希望去进一步了解ATSP相关的知识，也就是现在前沿的atsp都是怎么进行求解的，组合优化领域
- 缺失会议库存：eccv 2025、emnlp 2026

# 日报 · ATSP · 大礼包 (2025-11-25 ~ 2026-11-24)

- 最近生成时间：2026-11-25T14:48:14.138993+00:00
- 今日累计更新：1 次
- 今日累计推荐总数：24
- 精读区：9
- 速读区：15

## 精读区
1. [Better approximation guarantee for Asymmetric TSP](/20251125-20261124-starter-atsp/2603.14334v1-better-approximation-guarantee-for-asymmetric-tsp) （10.0/10）
2. [A Canceling Heuristic for the Directed Traveling Salesman Problem](/20251125-20261124-starter-atsp/2603.26564v1-a-canceling-heuristic-for-the-directed-traveling-salesman-problem) （9.0/10）
3. [A Common Improved Bound for Asymmetric TSP and Path TSP](/20251125-20261124-starter-atsp/2611.18498v1-a-common-improved-bound-for-asymmetric-tsp-and-path-tsp) （9.0/10）
4. [Reducing Asymmetric Path TSP to Asymmetric TSP](/20251125-20261124-starter-atsp/2611.21453v1-reducing-asymmetric-path-tsp-to-asymmetric-tsp) （9.0/10）
5. [Approximation Algorithms for Asymmetric Multi-Path TSP](/20251125-20261124-starter-atsp/2611.26188v1-approximation-algorithms-for-asymmetric-multi-path-tsp) （9.0/10）
6. [Solving the Asymmetric Traveling Salesman Problem via Trace-Guided Cost Augmentation](/conference/neurips-2025/openreview-neurips-2025-cnxrp7u5gv-solving-the-asymmetric-traveling-salesman-problem-via-trace-guided-cost-augmentation) （9.0/10）
7. [Thin Tree Verification is coNP-Complete](/20251125-20261124-starter-atsp/2512.25043v1-thin-tree-verification-is-conp-complete) （8.0/10）
8. [Edge-aware Decoding for Neural Asymmetric Routing](/20251125-20261124-starter-atsp/2606.02136v1-edge-aware-decoding-for-neural-asymmetric-routing) （8.0/10）
9. [TSP instances that require exponentially many subtour elimination constraints](/20251125-20261124-starter-atsp/2611.17386v1-tsp-instances-that-require-exponentially-many-subtour-elimination-constraints) （8.0/10）

## 速读区
1. [Assignment-Routing Optimization: Solvers for Problems Under Constraints](/20251125-20261124-starter-atsp/2512.18618v1-assignment-routing-optimization-solvers-for-problems-under-constraints) （7.0/10）
2. [Cutting-plane methodology via quantum optimization for solving the Traveling Salesman Problem](/20251125-20261124-starter-atsp/2604.20321v1-cutting-plane-methodology-via-quantum-optimization-for-solving-the-traveling-salesman-problem) （7.0/10）
3. [UniCO: On Unified Combinatorial Optimization via Problem Reduction to Matrix-Encoded General TSP](/conference/iclr-2025/openreview-iclr-2025-yewakmniex-unico-on-unified-combinatorial-optimization-via-problem-reduction-to-matrix-encoded-general-tsp) （7.0/10）
4. [Neural Combinatorial Optimization for Time-Dependent Traveling Salesman Problem](/conference/neurips-2025/openreview-neurips-2025-uxtr6zyv1x-neural-combinatorial-optimization-for-time-dependent-traveling-salesman-problem) （7.0/10）
5. [Edge-wise Topological Divergence Gaps: Guiding Search in Combinatorial Optimization](/20251125-20261124-starter-atsp/2512.15800v1-edge-wise-topological-divergence-gaps-guiding-search-in-combinatorial-optimization) （6.0/10）
6. [Graph Neural Networks are Heuristics](/20251125-20261124-starter-atsp/2601.13465v4-graph-neural-networks-are-heuristics) （6.0/10）
7. [Traveling Salesman Problem with a preprocessing method for classical and quantum optimization](/20251125-20261124-starter-atsp/2603.23290v2-traveling-salesman-problem-with-a-preprocessing-method-for-classical-and-quantum-optimization) （6.0/10）
8. [Augmented Graphs of Convex Sets and the Traveling Salesman Problem](/20251125-20261124-starter-atsp/2604.06406v1-augmented-graphs-of-convex-sets-and-the-traveling-salesman-problem) （6.0/10）
9. [An Exact Algorithm for Load-Dependent Traveling Salesman Problem for Unmanned Aerial Vehicle Package Delivery](/20251125-20261124-starter-atsp/2605.05507v1-an-exact-algorithm-for-load-dependent-traveling-salesman-problem-for-unmanned-aerial-vehicle-package-delivery) （6.0/10）
10. [GES-TSP: Graph Edge Sparsification for TSP](/20251125-20261124-starter-atsp/2607.09708v1-ges-tsp-graph-edge-sparsification-for-tsp) （6.0/10）
11. [LLM-Driven Joint Evolution of Coupled Heuristics Components for Routing Optimization](/20251125-20261124-starter-atsp/2609.02353v1-llm-driven-joint-evolution-of-coupled-heuristics-components-for-routing-optimization) （6.0/10）
12. [COMPASS: Ordered Clustered Routing at 100K Scale](/20251125-20261124-starter-atsp/2609.20352v1-compass-ordered-clustered-routing-at-100k-scale) （6.0/10）
13. [Just Initialize: A Training-Free Initialization Component for Large-Scale Routing Optimization](/20251125-20261124-starter-atsp/2609.35443v2-just-initialize-a-training-free-initialization-component-for-large-scale-routing-optimization) （6.0/10）
14. [Destroy and Repair Using Hyper-Graphs for Routing](/conference/aaai-2025/aaai-2025-34018-destroy-and-repair-using-hyper-graphs-for-routing) （6.0/10）
15. [Differentiable extensions with rounding guarantees for combinatorial optimization over permutations](/conference/neurips-2025/openreview-neurips-2025-aaxk0cw6gw-differentiable-extensions-with-rounding-guarantees-for-combinatorial-optimization-over-permutations) （6.0/10）

---
使用键盘方向键可在日报/论文之间快速切换。
