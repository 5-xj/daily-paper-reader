<div class="dpr-home-notice-card">
  <h3 class="dpr-home-notice-title">🚀 Start Here</h3>
  <ul class="dpr-home-notice-list">
    <li><a href="#/tutorial/README">使用教程</a></li>
  </ul>
</div>

## 每次日报
- 最新运行日期：2026-08-03
- 运行时间：2026-08-03 21:56:44 UTC
- 运行状态：成功
- 本次总论文数：22
- 精读区：9
- 速读区：13

### 今日简报（AI）
今日精读9篇、速读13篇，聚焦LLM驱动的符号回归与路由启发式自动设计；最值得关注的是零样本LLM父代选择在遗传规划中的基准表现，以及面向大规模路由的自动化启发式方法SpecAHD，两者均获9.0高分。建议普通读者优先围观这两个方向，可先看摘要与图表结论，再决定是否深入代码复现。
- 详情：[/202608/03/README](/202608/03/README)

### 精读区论文标签
1. [Benchmarking Zero-Shot LLM-Generated Parent Selection in Genetic Programming for Symbolic Regression](/202608/03/2607.23505v1-benchmarking-zero-shot-llm-generated-parent-selection-in-genetic-programming-for-symbolic-regression)  
   标签：评分：9.0/10、query:ad
   evidence：在符号回归的遗传规划中使用大模型生成算子
2. [SpecAHD: Localize to Specialize for Automated Heuristic Design in Large-Scale Routing Problems](/202608/03/2607.23676v1-specahd-localize-to-specialize-for-automated-heuristic-design-in-large-scale-routing-problems)  
   标签：评分：9.0/10、query:ad
   evidence：基于LLM的自动启发式设计，结合双层搜索
3. [CORE: A Unified Cascaded Ordinal Relevance Estimation Framework for E-commerce Search](/202608/03/2607.24417v1-core-a-unified-cascaded-ordinal-relevance-estimation-framework-for-e-commerce-search)  
   标签：评分：9.0/10、query:rerank-train
   evidence：CORE提出级联二分类框架进行相关性评估，可直接用于重排序模型的训练。
4. [TabRank: Chain-of-Thought Distillation for Table Re-Rankers](/202608/03/2607.25182v1-tabrank-chain-of-thought-distillation-for-table-re-rankers)  
   标签：评分：9.0/10、query:rerank-train
   evidence：用于训练表格重排序器的思维链蒸馏框架
5. [Shared Symbolic Backbones for Physically Consistent Multi-Output Symbolic Regression](/202608/03/2607.26528v1-shared-symbolic-backbones-for-physically-consistent-multi-output-symbolic-regression)  
   标签：评分：9.0/10、query:ad
   evidence：基于神经进化的启发式搜索的符号回归
6. [FunL2O: LLM-Guided Feature Function Design for Learning to Optimize](/202608/03/2607.27389v1-funl2o-llm-guided-feature-function-design-for-learning-to-optimize)  
   标签：评分：9.0/10、query:ad
   evidence：融合LLM与演化计算的FunSearch式循环，自动发现优化特征函数
7. [OptGraph: Large Language Models Enhanced Evolutionary Optimization Via Graph Retrieval-Augmented Generation](/202608/03/2607.27918v1-optgraph-large-language-models-enhanced-evolutionary-optimization-via-graph-retrieval-augmented-generation)  
   标签：评分：9.0/10、query:ad
   evidence：大模型通过图检索增强生成增强进化优化
8. [AutoPref: Automatic Discovery of Task-Specific Preference Objectives for Neural Combinatorial Optimization](/202608/03/2607.27953v1-autopref-automatic-discovery-of-task-specific-preference-objectives-for-neural-combinatorial-optimization)  
   标签：评分：9.0/10、query:ad
   evidence：大语言模型引导的神经组合优化偏好目标自动发现
9. [LLM-Guided Evolutionary Search for Constraint Model Reformulation to Improve Solver Efficiency](/202608/03/2607.28268v1-llm-guided-evolutionary-search-for-constraint-model-reformulation-to-improve-solver-efficiency)  
   标签：评分：9.0/10、query:ad
   evidence：LLM引导的进化搜索用于自动启发式设计与模型重构

### 速读区论文标签
1. [Structure-aware Relative Policy Optimization for Ranking](/202608/03/2607.25268v1-structure-aware-relative-policy-optimization-for-ranking)  
   标签：评分：8.0/10、query:rerank-train
   evidence：SRPO提出面向排序的结构感知强化学习训练方法，直接对应列表式重排序模型训练
2. [PSG: Pair-Space Generation for Efficient Generative Reranking](/202608/03/2607.26427v1-psg-pair-space-generation-for-efficient-generative-reranking)  
   标签：评分：8.0/10、query:rerank-train
   evidence：PSG通过成对空间生成改进生成式重排序，直接面向列表式重排序的效率问题。
3. [Scientific Knowledge Discovery in the Age of Large Language Models](/202608/03/2607.26670v1-scientific-knowledge-discovery-in-the-age-of-large-language-models)  
   标签：评分：8.0/10、query:ad
   evidence：综述生成式大语言模型在文献检索与筛选中的科学知识发现应用
4. [DenseOn with the LateOn: Fully Open Dense and Late-Interaction Models for Multilingual, Long-Context, and Code Search](/202608/03/2607.27178v2-denseon-with-the-lateon-fully-open-dense-and-late-interaction-models-for-multilingual-long-context-and-code-search)  
   标签：评分：8.0/10、query:rerank-train
   evidence：开源稠密与晚期交互排序模型训练流程。
5. [SCOPE: Synthetic Conditional Objectives for Policy Evolution in Black-Box Combinatorial Optimization](/202608/03/2607.27630v1-scope-synthetic-conditional-objectives-for-policy-evolution-in-black-box-combinatorial-optimization)  
   标签：评分：8.0/10、query:ad
   evidence：SCOPE通过学习条件合成目标来引导黑盒组合优化中的策略演化，属于启发式搜索发现方法。
6. [Order in Desbordante: Techniques for Efficient Implementation of Order Dependency Discovery Algorithms](/202608/03/2607.23632v1-order-in-desbordante-techniques-for-efficient-implementation-of-order-dependency-discovery-algorithms)  
   标签：评分：7.0/10、query:ad
   evidence：面向数据中序依赖的自动发现算法
7. [Extending Desbordante with Probabilistic Functional Dependency Discovery Support](/202608/03/2607.23636v1-extending-desbordante-with-probabilistic-functional-dependency-discovery-support)  
   标签：评分：7.0/10、query:ad
   evidence：数据中概率函数依赖的自动发现算法
8. [Rethinking Logic Optimization Operators: Theory-Derived Operator Compression via Agentic Source Analysis](/202608/03/2607.23672v1-rethinking-logic-optimization-operators-theory-derived-operator-compression-via-agentic-source-analysis)  
   标签：评分：7.0/10、query:ad
   evidence：用大语言模型进行智能体源码分析，结合启发式编排压缩逻辑优化算子，是大模型引导发现的方法
9. [DIRECTOR: Dynamic Index-based Recommendation with Transport-Optimized Retrieval](/202608/03/2607.26418v1-director-dynamic-index-based-recommendation-with-transport-optimized-retrieval)  
   标签：评分：7.0/10、query:rerank-train
   evidence：动态索引与传输优化检索的生成式重排序模型
10. [On the post-hoc Evaluation of PDE Discovery: A Multifaceted Challenge of Scientific Advancement](/202608/03/2607.23753v1-on-the-post-hoc-evaluation-of-pde-discovery-a-multifaceted-challenge-of-scientific-advancement)  
   标签：评分：6.0/10、query:ad
   evidence：从数据中发现偏微分方程，属于数据和知识中的自动发现，但侧重评估标准
11. [A Grand-Canonical Solution to a Class of Random Optimization Problems](/202608/03/2607.24455v1-a-grand-canonical-solution-to-a-class-of-random-optimization-problems)  
   标签：评分：6.0/10、query:atsp
   evidence：该论文提出巨正则系综方法求解包括旅行商问题在内的一类组合优化问题，可视为ATSP的一种新型近似解法。
12. [A Quantitative Framework for Comparing Classical and Quantum Algorithms for the Traveling Salesman Problem](/202608/03/2607.24581v1-a-quantitative-framework-for-comparing-classical-and-quantum-algorithms-for-the-traveling-salesman-problem)  
   标签：评分：6.0/10、query:atsp
   evidence：对TSP的经典与量子算法进行比较，与旅行商问题及ATSP前沿求解方法相关
13. [A Graph Matching Based Approach for the Multi-Depot Capacitated Vehicle Routing Problem](/202608/03/2607.27727v1-a-graph-matching-based-approach-for-the-multi-depot-capacitated-vehicle-routing-problem)  
   标签：评分：6.0/10、query:atsp
   evidence：面向VRP的图匹配方法，属TSP推广，与ATSP相关。


<div class="dpr-home-promo-card">
  <h3 class="dpr-home-promo-title">💬 社区与支持</h3>
  <ul class="dpr-home-promo-list">
    <li>欢迎 Star / Fork / Issue / PR</li>
    <li>QQ群：583867967（欢迎交流，已有：1151人）</li>
  </ul>
</div>
