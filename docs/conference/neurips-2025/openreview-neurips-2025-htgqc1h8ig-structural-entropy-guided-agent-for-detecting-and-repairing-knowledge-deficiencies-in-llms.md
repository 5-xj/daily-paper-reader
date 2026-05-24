---
title: Structural Entropy Guided Agent for Detecting and Repairing Knowledge Deficiencies in LLMs
title_zh: 结构熵引导的LLM知识缺陷检测与修复智能体
authors: "Yifan Wei, Xiaoyan Yu, Tengfei Pan, Angsheng Li, Li Du"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=hTGqC1h8Ig"
tags: ["query:ad"]
score: 6.0
evidence: 利用结构熵检测LLM知识缺陷，辅助知识发现
tldr: 大型语言模型在知识密集型领域（如医学、科研）常因知识缺陷而表现不佳。本文提出SENATOR框架，利用结构熵量化知识图谱路径上的不确定性，引导生成针对性合成数据，精准修复模型的知识盲区。在多个领域测试中，该方法有效提升了事实准确性，为知识发现中的知识增强提供了自动化手段。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-htgqc1h8ig/fig-001.webp\", \"caption\": \"\", \"page\": 8, \"index\": 1, \"width\": 2032, \"height\": 1626}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-htgqc1h8ig/fig-002.webp\", \"caption\": \"\", \"page\": 8, \"index\": 2, \"width\": 2031, \"height\": 1625}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-htgqc1h8ig/fig-003.webp\", \"caption\": \"\", \"page\": 8, \"index\": 3, \"width\": 2031, \"height\": 1625}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-htgqc1h8ig/fig-004.webp\", \"caption\": \"\", \"page\": 8, \"index\": 4, \"width\": 2032, \"height\": 1626}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-htgqc1h8ig/fig-005.webp\", \"caption\": \"\", \"page\": 8, \"index\": 5, \"width\": 4000, \"height\": 3200}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-htgqc1h8ig/fig-006.webp\", \"caption\": \"\", \"page\": 8, \"index\": 6, \"width\": 4000, \"height\": 3200}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-htgqc1h8ig/fig-007.webp\", \"caption\": \"\", \"page\": 8, \"index\": 7, \"width\": 4000, \"height\": 3200}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-htgqc1h8ig/fig-008.webp\", \"caption\": \"\", \"page\": 8, \"index\": 8, \"width\": 2032, \"height\": 1626}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-htgqc1h8ig/fig-009.webp\", \"caption\": \"\", \"page\": 8, \"index\": 9, \"width\": 2108, \"height\": 1596}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-htgqc1h8ig/fig-010.webp\", \"caption\": \"\", \"page\": 9, \"index\": 10, \"width\": 8001, \"height\": 1905}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-htgqc1h8ig/fig-011.webp\", \"caption\": \"\", \"page\": 23, \"index\": 11, \"width\": 3103, \"height\": 1830}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-htgqc1h8ig/fig-012.webp\", \"caption\": \"\", \"page\": 24, \"index\": 12, \"width\": 2657, \"height\": 1161}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-htgqc1h8ig/fig-013.webp\", \"caption\": \"\", \"page\": 24, \"index\": 13, \"width\": 2657, \"height\": 1246}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-htgqc1h8ig/fig-014.webp\", \"caption\": \"\", \"page\": 25, \"index\": 14, \"width\": 2657, \"height\": 1153}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-htgqc1h8ig/fig-015.webp\", \"caption\": \"\", \"page\": 25, \"index\": 15, \"width\": 2657, \"height\": 1477}]"
motivation: LLM在知识密集型任务中因知识缺陷导致事实性错误，现有合成数据生成方法无法对准真实知识缺口。
method: 提出SENATOR框架，采用结构熵度量沿知识图谱路径的不确定性，引导生成针对知识缺陷的合成数据。
result: 在医学和科学文献等知识密集场景中，该框架显著提升了模型的事实准确性，且无需人工标注。
conclusion: 结构熵引导的合成数据生成策略能有效修复LLM知识缺陷，可辅助自动发现中的知识获取与验证。
---

## Abstract
Large language models (LLMs) have achieved unprecedented performance by leveraging vast pretraining corpora, yet their performance remains suboptimal in knowledge-intensive domains such as medicine and scientific research, where high factual precision is required.
While synthetic data provides a promising avenue for augmenting domain knowledge, 
existing methods frequently generate redundant samples that do not align with the model’s true knowledge gaps. 
To overcome this limitation, 
we propose a novel Structural Entropy-guided Knowledge Navigator (SENATOR) framework that addresses the intrinsic knowledge deficiencies of LLMs. 
Our approach employs the Structure Entropy (SE) metric to quantify uncertainty along knowledge graph paths and leverages Monte Carlo Tree Search (MCTS) to selectively explore regions where the model lacks domain-specific knowledge. 
Guided by these insights, the framework generates targeted synthetic data for supervised fine-tuning, enabling continuous self-improvement. 
Experimental results on LLaMA-3 and Qwen2 across multiple domain-specific benchmarks show that SENATOR effectively detects and repairs knowledge deficiencies, achieving notable performance improvements.

---

## 论文详细总结（自动生成）

好的，这是基于您提供的论文内容，按照您的要求生成的中文总结。

# 论文总结：Structural Entropy Guided Agent for Detecting and Repairing Knowledge Deficiencies in LLMs

## 1. 核心问题与整体含义（研究动机和背景）
*   **核心问题**：虽然大型语言模型（LLMs）在大规模语料预训练后表现优异，但在医学、科学研究等知识密集型领域，由于缺乏高质量领域语料，模型的事实准确性不足，存在知识缺陷。现有合成数据增强方法效率低下，常生成模型已熟悉的数据，未对准模型真正的知识盲区。
*   **整体含义**：本文旨在解决“如何高效、精准地检测并修复LLMs的知识缺陷”这一关键问题。通过对知识图谱进行结构化探索，并利用结构熵（Structural Entropy, SE）作为探索奖励，引导蒙特卡洛树搜索（MCTS）聚焦于模型不确定性高的知识路径，从而生成针对性合成数据，实现模型的自提升。

## 2. 方法论：核心思想、关键技术细节
*   **核心思想**：提出SENATOR框架，将LLM作为智能体，在知识图谱（KG）上进行结构化探索。利用结构熵量化LLM沿知识路径的不确定性，通过MCTS高效搜索高不确定性路径，并基于这些路径生成合成数据，用于监督微调（SFT），修复知识缺陷。
*   **关键技术细节**：
    *   **知识缺陷检测（Knowledge Deficiency Detection）**：
        *   **三元组级不确定性**：将知识图谱三元组 <subject, relation, object> 转化为完形填空形式的提示，计算LLM输出正确object的自信息（Self-Information）$I(u, \rho, v) = -\log_2 P(v|u, \rho)$，作为该事实的不确定性度量。
        *   **路径级不确定性（结构熵）**：对路径上的每个实体节点，计算其加权度 $d_u = \sum_{v \in N(u)} I(u, \rho, v)$。将路径视为带权子图G，计算其一维结构熵 $H^1(G) = -\sum_{u \in V} \frac{d_u}{\text{vol}(G)} \log_2 \frac{d_u}{\text{vol}(G)}$。$H^1(G)$ 越高，表示该路径上模型知识越不确定。
    *   **MCTS搜索**：
        *   LLM在KG上从种子实体出发，每一步选择一个关系（动作）到达下一实体。
        *   **选择（Selection）**：使用PUCT算法平衡探索与利用，选择 s*_{t+1} = arg max [Q(s,a) + c_puct * P(a|s) * sqrt(N(s)) / (1+N(s,a))]。
        *   **扩展（Expansion）**：到达叶节点时，将所有可能的邻居实体加入搜索树。
        *   **模拟（Simulation）**：从新扩展节点开始，随机选择动作直到终端状态。
        *   **反向传播（Backpropagation）**：将奖励（使用结构熵作为状态价值 V(s)）反向传播，更新路径上所有节点的Q值和访问计数。奖励函数：$V(s_t) = H^1(G)$（G为当前搜索路径构成的子图）。
    *   **知识合成与修复（Knowledge Synthesis and Repair）**：
        *   选择MCTS搜索中结构熵最高的轨迹。
        *   基于该轨迹（一系列实体与关系），构造提示模板，引导LLM生成高质量的问答对（QA pairs），要求答案逻辑正确、基于事实、避免幻觉。
        *   通过多层级评估机制（格式一致性、逻辑连贯性、幻觉避免）过滤低质数据。
        *   使用过滤后的合成数据与通用指令数据混合，分两阶段进行SFT：第一阶段知识注入，第二阶段医学指令微调。

## 3. 实验设计
*   **使用的数据集/场景**：医学知识密集型场景。在**SPOKE**生物医学知识图谱上进行探索。
*   **Benchmark**：四个标准医学评测基准：
    1.  **MedQA** (USMLE选择题)
    2.  **MedMCQA** (AIIMS考试题目)
    3.  **PubMedQA** (基于PubMed摘要的QA)
    4.  **GPQA** (研究生级、高难度跨学科QA，尤其关注其遗传学和分子生物学子集)
*   **对比方法**：
    *   **通用LLMs**：Llama-3-8B, Qwen2-7B, Baichuan2-7B/13B, Llama-2-7B/13B。
    *   **医学LLMs**：Chat-Doctor, Med-Alpaca, HuatuoGPT-II, PMC-LLaMA。
    *   **自身消融**：
        *   Base模型（w/o SFT）
        *   仅使用通用指令数据（w/ instruction tuning）
        *   使用通用指令+合成数据（w/ synthetic data + IT，即完整SENATOR）
    *   **跨模型数据交换实验**：用Llama-3生成的合成数据微调Qwen2，反之亦然。

## 4. 资源与算力
文中明确说明（附录D）：
*   **训练**：使用8张NVIDIA A100-40G GPU，对Llama-3-8B和Qwen2-7B进行监督微调（SFT）。以Qwen2-7B为例，使用合成数据进行知识修复的训练时间约为30小时（执行3个epoch）。
*   **推理**：所有推理实验使用1-2张NVIDIA A100-40G GPU。合成数据生成和评估阶段借助vllm加速。

## 5. 实验数量与充分性
*   **实验数量**：包含多组实验：
    *   **主实验（表1）**：在两个基座模型（Llama-3-8B, Qwen2-7B）上，在4个基准测试上对比多个基线，并报告了完整模型的性能提升百分比。
    *   **消融实验**：对比了仅指令微调 vs. 完整SENATOR。
    *   **分布分析（图2、3）**：利用UMAP和KDE可视化原始预训练数据和合成数据的分布，分析覆盖范围。
    *   **数据缩放规律（图4a）**：探索不同比例合成数据对性能的影响。
    *   **数据交换实验（图4b、4c）**：验证合成数据的跨模型泛化能力。
    *   **子领域分析（图9）**：在MMLU医学子领域上的进一步分析。
    *   **最新基线对比（表3）**：与BioMistral-7B, Meditron-7B等最新模型对比。
*   **充分性、客观性、公平性**：
    *   实验设计较为全面，覆盖了性能对比、消融、分布分析、缩放规律、跨模型迁移等。
    *   使用了固定的随机种子，并重复实验三次以验证一致性（附录中提到“fixed random seeds”和“repeat three times”），增加了结果可信度。
    *   对比基线包括通用和专用医学模型，较为全面。
    *   但所有实验均集中在医学领域，未在其它知识密集型领域（如法律、科研）验证泛化性，存在领域限制。

## 6. 论文的主要结论与发现
*   **有效修复知识缺陷**：SENATOR框架能有效检测并修复LLMs的知识缺陷。在四个医学基准测试上，对Llama-3-8B和Qwen2-7B的平均性能分别提升了11.98%和9.15%。
*   **合成数据覆盖知识盲区**：合成数据成功地覆盖了原始预训练数据之外的知识分布，扩展了数据覆盖范围，且针对了模型自身的知识盲区（如GPQA Genetics子集）。
*   **数据缩放规律**：随着合成数据比例增加，模型性能呈现上升趋势，说明更多针对性的合成数据能持续增强模型。
*   **跨模型泛化性**：一个模型生成的合成数据也能有效修复另一个模型的知识缺陷，表明不同LLMs在知识缺陷上存在共性。
*   **合成数据优于单纯扩大通用指令数据**：仅有通用指令微调效果有限甚至下降，而针对性合成的数据则能带来显著提升。

## 7. 优点
*   **方法创新**：首次将结构熵（SE）引入LLM知识缺陷检测，利用图拓扑结构信息量化路径级不确定性，比单纯的三元组自信息更全面。
*   **探索效率高**：通过MCTS与结构熵奖励结合，智能体能够高效聚焦于高不确定区域，避免了盲目枚举所有知识路径。
*   **合成数据质量可控**：设计了多层级评估机制（格式/逻辑/幻觉），确保合成数据的高质量。
*   **实验系统性强**：从多个维度（性能、分布、缩放、跨模型）验证了方法的有效性，分析深入，论证充分。
*   **开源**：代码与数据已公开在GitHub，便于复现和进一步研究。

## 8. 不足与局限
*   **依赖外部知识图谱**：框架严重依赖高质量、结构化的领域知识图谱（如SPOKE）。对于知识图谱不完整或缺失的领域（或一般开放域），方法适用性受限。
*   **合成数据质量瓶颈**：尽管有过滤机制，但数据生成质量仍有提升空间。附录A.4分析显示，37.92%的生成样本存在格式、逻辑或幻觉问题，尤其逻辑错误（19.56%）比例较高。逻辑错误限制了模型在需要多跳推理任务上的表现。
*   **实验领域单一**：所有实验仅在医学领域进行，其通用性和在其他知识密集型领域的有效性尚未验证。
*   **计算资源要求较高**：使用8*A100-40G，训练时间约30小时（Qwen2-7B），对于算力有限的团队存在门槛。
*   **缺少对幻觉的直接评估**：论文主要关注知识覆盖度和基准准确率，未直接评估修复后模型在生成文本时是否产生新的幻觉或事实性错误。

（完）
