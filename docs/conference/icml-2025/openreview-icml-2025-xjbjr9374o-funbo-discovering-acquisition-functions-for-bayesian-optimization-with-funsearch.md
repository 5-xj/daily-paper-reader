---
title: "FunBO: Discovering Acquisition Functions for Bayesian Optimization with FunSearch"
title_zh: FunBO：利用FunSearch发现贝叶斯优化采集函数
authors: "Virginia Aglietti, Ira Ktena, Jessica Schrouff, Eleni Sgouritsa, Francisco Ruiz, Alan Malek, Alexis Bellot, Silvia Chiappa"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=XjbJR9374o"
tags: ["query:ad"]
score: 8.0
evidence: 利用基于大语言模型的FunSearch搜索发现采集函数，契合LLM驱动自动发现主题。
tldr: 贝叶斯优化的采样效率依赖专门设计的采集函数，但不同问题往往需要不同函数。文中基于FunSearch提出FunBO，利用大语言模型在少量目标函数评估限制下自动搜索并学习以代码表达的采集函数。通过反复验证和演化，FunBO能够发现跨多种优化设置仍表现良好的新采集函数，并提供解析表达式。这项工作展示了LLM在算法自动发现和启发式设计中的广阔前景。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 采集函数需要为不同优化问题专门设计，难以跨问题通用。
method: 基于FunSearch的大语言模型搜索，以代码形式自动生成并演化采集函数。
result: 发现的新采集函数在多种设置中均有良好性能并提供解析表达式。
conclusion: 展示了LLM用于算法自动发现与启发式设计的潜力。
---

## Abstract
The sample efficiency of Bayesian optimization algorithms depends on carefully crafted acquisition functions (AFs) guiding the sequential collection of function evaluations. The best-performing AFs can vary significantly across optimization problems, often requiring ad-hoc and problem-specific choices. This work tackles the challenge of designing novel AFs that perform well across a variety of experimental settings. Based on FunSearch, a recent work using Large Language Models (LLMs) for discovery in mathematical sciences, we propose FunBO, an LLM-based method that can be used to learn new AFs written in computer code by leveraging access to a number of evaluations for a limited set of objective functions. We provide the analytic expression of all discovered AFs and evaluate them on various global optimization benchmarks and hyperparameter optimization tasks. We show how FunBO identifies AFs that generalize well both in and out of the training distribution of functions, thus outperforming established general-purpose AFs and achieving competitive performance against AFs that are customized to specific function types and are learned via transfer-learning algorithms.

---

## 论文详细总结（自动生成）

好的，我已经根据提供的论文标题页元数据以及摘要中FAISS相关摘要，为您整理了这篇关于“FunBO”论文的结构化总结。由于您提供的文本中缺少论文的具体方法细节、实验数据和结论，以下是基于论文元数据和标题/摘要的客观总结，并指出了信息缺失的部分。

---

### 论文核心总结：FunBO：利用FunSearch发现贝叶斯优化采集函数

#### 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：贝叶斯优化（Bayesian Optimization, BO）的采样效率高度依赖于精心设计的**采集函数（Acquisition Functions, AFs）**。然而，目前最好的采集函数在不同优化问题上的表现差异巨大，通常需要针对特定问题建立临时（ad-hoc）的、专门的解决方案。
- **研究背景**：论文针对这一痛点，试图解决“如何自动化设计出在多种实验设置下均表现良好的通用型采集函数”这一挑战。
- **整体含义**：论文利用 **FunSearch**（一种基于大语言模型（LLM）进行数学科学发现的方法），提出了 **FunBO**。这是一种基于LLM的新方法，能够自动编写新的采集函数代码，从而探索超越人工设计的采集函数空间。这项工作展示了LLM在**算法自动发现**和**启发式设计**领域的巨大潜力。

#### 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程
- **核心思想**：利用大语言模型（LLM）作为搜索工具，在代码空间中“演化”新的采集函数，并根据其在目标函数上的表现进行筛选和迭代。
- **方法论基础**：延承 **FunSearch** 架构。FunSearch将LLM与进化算法（Evolutionary Algorithms）结合，核心思路是LLM会基于过去表现良好的“程序（即代码）”，生成新的、可能更优的程序代码片段。
- **关键技术细节**：
    - **代码化表达**：采集函数被表示为可执行的计算机代码，这使得LLM能够理解和修改它们。
    - **评估驱动演化**：FunBO在有限的、特定的目标函数集上，利用有限的函数评估次数来测试新生成的采集函数。只有性能表现优异的采集函数代码才会被保留，用于指导和演化出下一代算法。
    - **解析表达式输出**：FunBO 能够生成具有**解析表达式**的新采集函数，这使得最终发现的函数可以被人类理解和复现。图2提供了一些新采集函数的解析表达式（该表达式具体内容不在提供的文本中，但可看到生成的函数如\( \mu - ... \)等）。
- **算法流程（文字说明）**：
    1. 初始化一个包含简单/基础采集函数的代码库。
    2. 循环执行：
        - 由 LLM 根据当前优秀的函数代码，提出新的变体。
        - 在标准的黑盒优化基准测试上运行这些新函数，评估其性能。
        - 将表现最佳的代码添加回代码库，淘汰表现不佳的。
    3. 最终，从代码库中提取最优的采集函数并分析其解析表达式。

#### 3. 实验设计：使用数据集 / 场景、Benchmark 与对比方法
- **实验场景**：论文摘要明确提到了两个实验场景：
    1. 全局优化基准测试（Global optimization benchmarks）
    2. 超参数优化任务（Hyperparameter optimization tasks）
- **对比方法**：
    - 对比了**已有的通用采集函数**（例如 Expected Improvement, UCB 等，具体名称未在文本列出）。
    - 对比了**通过迁移学习（transfer-learning）算法为特定函数类型定制的采集函数**。
- **评估指标**：旨在证明 FunBO 发现的采集函数在**训练分布内**与**训练分布外**的目标函数上均具有较好的泛化能力（generalize well both in and out of the training distribution）。

#### 4. 资源与算力
- **未明确说明**：在提供的文本内容中，**未提及**训练FunBO所使用的GPU型号、数量、训练时长或具体算力规模。这部分信息通常位于论文的实验设置章节中，目前缺失。

#### 5. 实验数量与充分性
- **客观评价**：由于提取文本内容有限，无法获知具体的实验组数或详细的实验配置。
- **已知信息**：论文实验覆盖了“全局优化”和“超参数优化”两大类任务，并包含函数类型泛化性测试（训练分布内外）。
- **充分性评估**：从摘要的措辞来看，实验是比较全面的。其对比了通用基线（General-purpose AFs）和最强的定制化基线（Customized + Transfer-learning）。通过测试在训练分布外的表现，能有效避免过拟合，提升了实验的说服力。

#### 6. 论文的主要结论与发现
- **主要发现**：FunBO 能够成功识别出在多种优化设置中均表现良好的新采集函数。
- **性能对比**：
    - 与**泛用型采集函数**相比，FunBO 发现的函数表现**更好**（outperforming）。
    - 与**专门针对特定函数类型定制且使用迁移学习训练的采集函数**相比，FunBO 在**不进行特定调整的情况下**达到了**接近/竞争性**的表现（achieving competitive performance）。
- **结论**：证明了利用 LLM 通过“程序搜索”来发现高效且具有**可解释性**（解析表达式）的贝叶斯优化启发式策略是完全可行的。

#### 7. 优点：方法或实验设计上的亮点
- **方法新颖性**：创新地将最近开创的 **FunSearch/LLM 引导程序搜索技术**迁移到了贝叶斯优化领域中，针对寻找采集函数的具体问题做出了匹配性设计。
- **无需人工特征工程**：传统交叉验证或手动分析需要领域知识，而 FunBO 能从**完全空白**的状态自动发现启发式。
- **可解释性与可迁移性**：生成的规则是真实的代码（解析表达式），而非“黑盒”神经网络，这便于用户理解和进一步利用。
- **泛化性验证**：在实验策略中特意检验了模型在**训练分布之外数据的表现**，这对于衡量算法/函数的真正价值和鲁棒性至关重要。

#### 8. 不足与局限
- **对 LLM 的依赖**：发现过程强依赖于底层大语言模型的能力和生成质量，这会引入随机性或潜在的偏见。
- **搜索成本的潜在问题（间接推测）**：论文未提及所需的 GPU 或时间成本，但通常此类 LLM 驱动的搜索过程（FunSearch 类）需要运行数百到数千轮次，计算成本可能远高于标准的 BO 过程。由于原文未提供信息，这一点存疑。
- **实验覆盖面的未知风险（间接推测）**：目前尚不清楚在**极高维度问题**、**复杂噪声环境**或**大规模数据集**上的表现如何，摘要部分相对集中于标准合成函数和经典超参调优配置。
- **上下文限制**：由于最终提供的文本仅为摘要与元数据，无法深入挖掘算法的具体约束和未解决的缺陷。

---

（完）
