---
title: "Bohdi: Heterogeneous LLM Fusion with Automatic Data Exploration"
title_zh: Bohdi：基于自动数据探索的异质大模型融合
authors: "Junqi Gao, Zhichang Guo, Dazhi Zhang, Dong Li, Runze Liu, Pengfei Li, Kai Tian, Biqing Qi"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=wVxIBvUAlj"
tags: ["query:ad"]
score: 4.0
evidence: 自动数据探索的LLM融合方法
tldr: 针对异质大模型融合依赖有限领域真实数据和固定数据分配的问题，Bohdi提出纯合成数据的异质LLM融合框架，通过将知识领域组织成层次树结构实现自动数据探索，动态调整数据分配比例以平衡模型在各领域的能力。实验表明该方法有效提升目标LLM跨领域知识获取能力，为自动数据探索在知识发现中的应用提供了新思路。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-001.webp\", \"caption\": \"\", \"page\": 1, \"index\": 1, \"width\": 934, \"height\": 961}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-002.webp\", \"caption\": \"\", \"page\": 4, \"index\": 2, \"width\": 578, \"height\": 392}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-003.webp\", \"caption\": \"\", \"page\": 4, \"index\": 3, \"width\": 1389, \"height\": 188}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-004.webp\", \"caption\": \"\", \"page\": 4, \"index\": 4, \"width\": 2784, \"height\": 1248}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-005.webp\", \"caption\": \"\", \"page\": 4, \"index\": 5, \"width\": 1253, \"height\": 238}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-006.webp\", \"caption\": \"\", \"page\": 4, \"index\": 6, \"width\": 5532, \"height\": 209}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-007.webp\", \"caption\": \"\", \"page\": 4, \"index\": 7, \"width\": 800, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-008.webp\", \"caption\": \"\", \"page\": 4, \"index\": 8, \"width\": 800, \"height\": 800}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-009.webp\", \"caption\": \"\", \"page\": 4, \"index\": 9, \"width\": 2784, \"height\": 213}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-010.webp\", \"caption\": \"\", \"page\": 4, \"index\": 10, \"width\": 2784, \"height\": 213}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-011.webp\", \"caption\": \"\", \"page\": 4, \"index\": 11, \"width\": 1285, \"height\": 526}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-012.webp\", \"caption\": \"\", \"page\": 4, \"index\": 12, \"width\": 1285, \"height\": 438}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-013.webp\", \"caption\": \"\", \"page\": 4, \"index\": 13, \"width\": 782, \"height\": 710}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-014.webp\", \"caption\": \"\", \"page\": 4, \"index\": 14, \"width\": 740, \"height\": 708}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-015.webp\", \"caption\": \"\", \"page\": 4, \"index\": 15, \"width\": 564, \"height\": 562}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-016.webp\", \"caption\": \"\", \"page\": 4, \"index\": 16, \"width\": 1284, \"height\": 209}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-017.webp\", \"caption\": \"\", \"page\": 4, \"index\": 17, \"width\": 1339, \"height\": 209}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-018.webp\", \"caption\": \"\", \"page\": 4, \"index\": 18, \"width\": 1248, \"height\": 316}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-019.webp\", \"caption\": \"\", \"page\": 4, \"index\": 19, \"width\": 2784, \"height\": 1248}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-020.webp\", \"caption\": \"\", \"page\": 6, \"index\": 20, \"width\": 809, \"height\": 761}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-021.webp\", \"caption\": \"\", \"page\": 6, \"index\": 21, \"width\": 1804, \"height\": 182}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-022.webp\", \"caption\": \"\", \"page\": 6, \"index\": 22, \"width\": 810, \"height\": 550}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-023.webp\", \"caption\": \"\", \"page\": 6, \"index\": 23, \"width\": 400, \"height\": 376}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-024.webp\", \"caption\": \"\", \"page\": 6, \"index\": 24, \"width\": 1897, \"height\": 334}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-025.webp\", \"caption\": \"\", \"page\": 6, \"index\": 25, \"width\": 1304, \"height\": 1286}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-026.webp\", \"caption\": \"\", \"page\": 6, \"index\": 26, \"width\": 1018, \"height\": 1018}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-027.webp\", \"caption\": \"\", \"page\": 6, \"index\": 27, \"width\": 934, \"height\": 961}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-028.webp\", \"caption\": \"\", \"page\": 6, \"index\": 28, \"width\": 1017, \"height\": 1057}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-029.webp\", \"caption\": \"\", \"page\": 6, \"index\": 29, \"width\": 1940, \"height\": 485}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-030.webp\", \"caption\": \"\", \"page\": 6, \"index\": 30, \"width\": 1666, \"height\": 2697}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-031.webp\", \"caption\": \"\", \"page\": 6, \"index\": 31, \"width\": 1666, \"height\": 555}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-032.webp\", \"caption\": \"\", \"page\": 6, \"index\": 32, \"width\": 1666, \"height\": 338}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-033.webp\", \"caption\": \"\", \"page\": 6, \"index\": 33, \"width\": 1964, \"height\": 338}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-034.webp\", \"caption\": \"\", \"page\": 6, \"index\": 34, \"width\": 1940, \"height\": 485}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-035.webp\", \"caption\": \"\", \"page\": 6, \"index\": 35, \"width\": 5530, \"height\": 2705}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-036.webp\", \"caption\": \"\", \"page\": 6, \"index\": 36, \"width\": 1968, \"height\": 2680}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-037.webp\", \"caption\": \"\", \"page\": 6, \"index\": 37, \"width\": 1804, \"height\": 522}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-038.webp\", \"caption\": \"\", \"page\": 6, \"index\": 38, \"width\": 1804, \"height\": 394}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-039.webp\", \"caption\": \"\", \"page\": 6, \"index\": 39, \"width\": 1804, \"height\": 401}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-040.webp\", \"caption\": \"\", \"page\": 6, \"index\": 40, \"width\": 1804, \"height\": 394}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-041.webp\", \"caption\": \"\", \"page\": 6, \"index\": 41, \"width\": 1804, \"height\": 423}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-042.webp\", \"caption\": \"\", \"page\": 6, \"index\": 42, \"width\": 1813, \"height\": 195}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-043.webp\", \"caption\": \"\", \"page\": 6, \"index\": 43, \"width\": 1804, \"height\": 1707}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-044.webp\", \"caption\": \"\", \"page\": 6, \"index\": 44, \"width\": 1902, \"height\": 2660}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-wvxibvualj/fig-045.webp\", \"caption\": \"\", \"page\": 6, \"index\": 45, \"width\": 1804, \"height\": 182}]"
motivation: 异质LLM融合方法依赖有限领域真实数据且分配比例固定，导致目标LLM跨领域知识获取不足和能力失衡。
method: 提出Bohdi框架，利用纯合成数据并将知识领域组织成层次树，通过自动数据探索动态调整各领域数据分配。
result: 实验证明Bohdi能有效提升目标LLM跨领域知识获取能力，优于现有固定比例融合方法。
conclusion: Bohdi为异质LLM融合的自动数据探索提供了有效框架，未来可推广至更广泛的知识发现场景。
---

## Abstract
Heterogeneous Large Language Model (LLM) fusion integrates the strengths of multiple source LLMs with different architectures into a target LLM with low computational overhead. While promising, existing methods suffer from two major limitations: 1) **reliance on real data from limited domain** for knowledge fusion, preventing the target LLM from fully acquiring knowledge across diverse domains, and 2) **fixed data allocation proportions** across domains, failing to dynamically adjust according to the target LLM's varying capabilities across domains, leading to a capability imbalance. To overcome these limitations, we propose Bohdi, a synthetic-data-only heterogeneous LLM fusion framework. Through the organization of knowledge domains into a hierarchical tree structure, Bohdi enables automatic domain exploration and multi-domain data generation through multi-model collaboration, thereby comprehensively extracting knowledge from source LLMs. By formalizing domain expansion and data sampling proportion allocation on the knowledge tree as a Hierarchical Multi-Armed Bandit problem, Bohdi leverages the designed DynaBranches mechanism to adaptively adjust sampling proportions based on the target LLM's performance feedback across domains. Integrated with our proposed Introspection-Rebirth (IR) mechanism, DynaBranches dynamically tracks capability shifts during target LLM's updates via Sliding Window Binomial Likelihood Ratio Testing (SWBLRT), further enhancing its online adaptation capability. Comparative experimental results on a comprehensive suite of benchmarks demonstrate that Bohdi significantly outperforms existing baselines on multiple target LLMs, exhibits higher data efficiency, and virtually eliminates the imbalance in the target LLM's capabilities.

---

## 论文详细总结（自动生成）

好的，作为一名资深学术论文分析助手，我将对这篇论文进行深入、客观的结构化总结。

### 论文总结：Bohdi: Heterogeneous LLM Fusion with Automatic Data Exploration

#### 1. 核心问题与整体含义（研究动机和背景）

*   **研究背景**：异质大语言模型（LLM）融合技术旨在将多个（源模型）不同架构、不同优势的LLM的知识注入到一个（目标模型）更小巧的LLM中，避免从头训练，降低成本。
*   **核心问题**：
    1.  **数据局限**：现有方法严重依赖有限领域的开源真实数据进行知识融合，无法覆盖源模型所具备的广泛、细粒度的专业知识，导致目标模型知识获取不全面。
    2.  **分配僵化**：这些方法采用固定的跨领域数据分配比例，无法根据目标模型在不同领域的实时能力差异进行动态调整（“木桶效应”），容易造成目标模型某些能力提升的同时，其他能力严重下降，导致能力失衡。

#### 2. 论文提出的方法论

*   **核心思想**：提出一个名为Bohdi的纯合成数据驱动框架。它通过构建一个层次化的知识树，将领域探索和数据生成形式化为一个**分层多臂老虎机（Hierarchical Multi-Armed Bandit, HMAB）**问题，并设计算法自动、动态地调整数据采样比例。

*   **关键技术细节**：
    1.  **知识树结构**：构建一个`[主领域 → 次领域 → 子领域]`的三层知识树`T`，用于结构化组织知识领域，并在每个节点维护一个”未知“（unk）分支，代表待探索的领域。
    2.  **自动领域探索**：设计了**Sprout（发芽）**和**Harvest（收获）**两个操作。
        *   **Sprout**: 当采样到“unk”分支时，让所有源模型共同提议新领域，并通过多数投票机制自动扩展知识树。
        *   **Harvest**: 对于采样到的路径，随机指定一个源模型作为“Leader”，生成问题，收集所有模型（源+目标）的答案，并由Leader评选出最佳答案，从而无监督地生成高质量的训练数据（`(q, a_best)`）。
    3.  **动态自适应采样**：将领域选择和采样比例分配建模为HMAB问题。
        *   **DynaBranches机制**：在每个MAB实例中，使用**汤普森采样（Thompson Sampling, TS）**算法。它为每个子领域（臂）的奖励分布参数`λ`（即目标模型在该领域表现差的概率）设置Beta分布先验，并根据每次采样的反馈（`r=1`表示目标模型弱于源模型，值得学习）更新后验。这使得算法能平衡探索与利用，自适应地调整各领域的采样比例。
    4.  **在线自适应能力**：提出**Introspection-Rebirth (IR) 机制**，用于解决因目标模型持续更新而导致的奖励分布变化问题。
        *   使用**滑动窗口二项似然比检验 (SWBLRT)**，检测短时间窗口内的奖励分布与历史全局分布是否一致。当检测到显著变化时（表明目标模型能力已变），重置该领域臂的后验参数，使其更关注最近的观察，从而保持对能力变化的敏感性。
    5.  **两阶段迭代优化**：Bohdi的融合过程是`MEDITATION`（冥想）和`ENLIGHTENMENT`（启迪）两个阶段的交替迭代。
        *   **Meditation阶段**：通过DynaBranches和IR机制，在知识树上采样路径、扩展现有领域、生成数据并更新各领域的采样概率。
        *   **Enlightenment阶段**：根据当前最优的采样比例，从已有知识中采样数据，训练目标LLM。

*   **公式与算法流程**：
    *   整体目标：最小化目标模型在任意领域表现不如最佳源模型的概率。
    *   **Meditation阶段**优化：`D(t+1) = argmax λ`，选择使目标模型当前表现最差（奖励最高）的领域。
    *   **Enlightenment阶段**优化：`θ(t+1) = argmin Loss`，使用Meditation阶段收集的数据训练目标模型参数。
    *   算法伪代码（附录B.4）详细描述了知识树初始化、路径采样、后验概率更新、训练等循环流程。

#### 3. 实验设计

*   **数据集/场景**：使用纯合成数据，不依赖于任何真实数据集。评估环节使用了包含8个标准化基准测试（Benchmark）的套件OpenCompass，涵盖四大能力维度：
    *   多学科知识（MMLU, GPQA）
    *   数学（GSM8K, MATH）
    *   编程（HumanEval, MBPP）
    *   推理（TheoremQA, BBH）
*   **对比方法**：与以下代表性基线方法对比：
    *   **FuseChat**：显式融合（EF）代表。
    *   **SFT**：直接监督微调。
    *   **FuseChat-3.0**：隐式融合（IF）代表，使用外部奖励模型。
    *   **Condor**：基于知识树生成多领域数据进行SFT。
*   **源模型与目标模型**：
    *   源模型：Qwen2.5-14B-Instruct, Mistral-Small-24B-Instruct-2501, phi-4。
    *   目标模型：Llama3.2-3B-Instruct, Gemma2-9B-IT，以及额外的Llama3.1-8B-Instruct, Qwen2.5-7B-Instruct，验证通用性。还有弱到强监督实验（以小型模型作为源，大型模型作为目标）。

#### 4. 资源与算力

*   **算力**：论文明确指出所有训练均在 **8 × Nvidia A100 GPU** 上完成，并使用bf16精度进行训练。
*   **时间**：Bohdi的整个训练执行时间约为 **515-567分钟**（视具体目标模型而定，如附录D表4所示），远少于其他基线方法（数千分钟），展示了其效率优势。

#### 5. 实验数量与充分性

*   **实验数量**：非常充分，涵盖了：主对比实验、组件消融（DynaBranches、IR、Reward Model）、超参数（SWBLRT的窗口大小`w`和分位数`u`）消融、两阶段采样比例消融、源模型数量（K=1/2/3）消融、弱到强监督实验、数据量对齐实验、稳定性实验（三独立运行）、Leader选择策略对比以及额外目标模型的泛化实验。
*   **充分性评价**：实验设计全面且严谨。不仅展示了最终性能，还通过大量消融实验深入剖析了各个组件的作用和参数影响。数据效率的公平对齐实验、多次运行的标准差报告，以及对可能存在的评估偏差（如固定Leader）的补充分析，都极大地增强了实验结论的客观性和说服力。实验是充分的、客观的且公平的。

#### 6. 主要结论与发现

*   **性能显著提升**：在多个目标模型上，Bohdi的平均性能大幅超越所有基线方法。例如，在Llama3.2-3B-Instruct上平均提升4.12%，在Gemma2-9B-IT上平均提升4.16%。
*   **消除能力失衡**：与基线方法不同，Bohdi在几乎所有基准上均取得正向或持平提升，没有出现某些能力暴涨而其他能力暴跌的现象。
*   **极高数据效率**：Bohdi仅使用约1.7K数据就能达到其他基线方法使用90K数据都无法企及的性能，数据效率提升超过50倍。
*   **出色的在线自适应能力**：DynaBranches和IR机制使Bohdi能稳定追踪目标模型能力变化，调整策略，而缺少这些组件则导致性能曲线波动剧烈。
*   **弱到强监督潜力**：实验中用较小的源模型（如Qwen2.5-3B-Instruct）帮助较大的目标模型（Gemma2-9B-IT）提升了其在源模型擅长的领域（如GPQA、TheoremQA）的表现，展示了其作为弱到强监督范式的巨大潜力。

#### 7. 优点

*   **创新的方法论**：巧妙地将LLM融合中的数据分配问题映射为分层多臂老虎机问题，为自动化、自适应的数据策略提供了优雅的数学基础。
*   **完全的零真实数据依赖**：通过多模型协作和精心设计的生成策略（Sprout & Harvest），彻底摆脱了对昂贵、稀缺的真实标注数据的依赖。
*   **动态能力感知**：DynaBranches和IR机制不仅能动态调整数据比例，还能感知目标模型自身能力的变化并实时响应。
*   **极致的效率**：无论是数据量还是计算时间，Bohdi都表现出远超基线方法的效率，具有很高的实际应用价值。

#### 8. 不足与局限

*   **数据多样性受限**：论文自身承认，在整个融合过程中使用固定的指令模板或风格提示来生成数据，这可能限制了所合成数据的多样性和知识覆盖面。
*   **数据质量提升空间**：虽然Leader模型评估机制有效，但未采用更高级的自我优化（self-refinement）或多智能体辩论（multi-agent debate）等技术来进一步提升合成数据的质量。
*   **知识树结构的限制**：预定义的三层树结构可能无法完美覆盖所有类型的知识，对于关联性极强或模糊边界的领域，其组织效率可能不高。
*   **实验覆盖的潜在偏差**：虽然实验全面，但源模型和目标模型的选用仍有一定局限。源模型全部是高性能模型，目标模型则针对较小模型，未能涵盖中等规模或同构模型间的融合场景（尽管弱到强监督实验是一个有益的补充）。
*   **固定指令的生成模式**：正如论文在"Limitations"部分指出，生成问题的指令是固定的，未采用自适应提示设计，这限制了数据生成的多样性。

（完）
