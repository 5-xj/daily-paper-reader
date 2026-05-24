---
title: "Revolutionizing Training-Free NAS: Towards Efficient Automatic Proxy Discovery via Large Language Models"
title_zh: 革新训练无关NAS：通过大语言模型实现高效自动代理发现
authors: "Haidong Kang, Lihong Lin, Hanling Wang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=3naHyE5klE"
tags: ["query:ad"]
score: 9.0
evidence: 利用LLM自动发现零成本代理，属于神经网络算法自动发现
tldr: 训练无关神经架构搜索依赖人工设计的零成本代理，耗时且与最终性能相关性差。本文利用大语言模型自动设计零成本代理，通过LLM生成并筛选候选代理，实现代理的自动发现与优化。实验表明，该方法发现的代理在多个搜索空间上均优于人工设计，显著提升了搜索效率与准确率，直接展示了LLM在自动发现算法（即零成本代理）中的潜力。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-3nahye5kle/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 1113, \"height\": 733}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-3nahye5kle/fig-002.webp\", \"caption\": \"\", \"page\": 2, \"index\": 2, \"width\": 500, \"height\": 500}]"
motivation: 现有零成本代理依赖人工设计，成本高且与最终性能相关性差，需要自动化发现机制。
method: 利用大语言模型自动生成与筛选零成本代理，通过迭代搜索与评估实现代理的自动发现。
result: 在多个NAS搜索空间上，LLM发现的代理在预测性能方面显著优于人工设计的代理，且计算效率更高。
conclusion: LLM能够有效自动发现高性能零成本代理，拓展了神经网络算法发现的新途径。
---

## Abstract
The success of computer vision tasks is mainly attributed to the architectural design of neural networks. This highlights the need to automatically design high-performance architectures via Neural Architecture Search (NAS). To accelerate the search process, training-free NAS is proposed, which aims to search high-performance architectures at initialization via zero-cost proxies (ZCPs). However, existing zero-cost proxies heavily rely on manual design, which is often labor-intensive and requires extensive expert knowledge. In addition, these crafted proxies often suffer from poor correlation with final model performance and high computational complexity, severely limiting NAS efficiency in real-world applications. To address those issues, this paper proposes a novel Large Language Models (LLMs)-driven $\underline{A}$utomatic $\underline{P}$roxy $\underline{D}$iscovery ($\textbf{APD}$) framework, which revolutionizes the design paradigm of ZCPs by leveraging LLMs to automatically discover optimal ZCPs for Training-Free NAS. Moreover, we utilize actor-critic based reinforcement learning to optimize prompts, enabling to generate better ZCPs in the next generation. We conduct extensive experiments on mainstream NAS benchmarks, demonstrating APD excels in both performance and efficiency. Besides, we firmly believe that our APD will dramatically benefit the deep learning community through providing novel paradigm of design algorithms via LLMs.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：训练无关神经架构搜索（Training-Free NAS）依赖的零成本代理（Zero-Cost Proxies, ZCPs）目前完全由人工设计，需要大量专家知识和试错，且往往与最终模型性能的相关性较差，同时计算复杂度高，严重限制了NAS在实际应用中的效率。
- **整体含义**：本文旨在颠覆传统ZCP的设计范式，首次提出利用大语言模型（LLM）自动发现最优ZCP，从而释放NAS对人工和计算资源的依赖，推动训练无关NAS走向更高效、更自动化的新阶段。

### 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程
- **核心思想**：利用LLM作为代理生成器，通过结构化的提示（prompt）生成ZCP，并使用基于actor-critic的强化学习来优化进化策略，迭代生成相关性更高的ZCP。
- **关键技术细节**：
  - **代理候选生成器**：三个上下文条件化分布——`Initialization`（从零生成）、`Mutation`（局部变异）、`Crossover`（交叉重组）。每个候选代理表示为一个DAG，输入为网络层的梯度、权重或输出特征图，中间节点为统计或二元运算，输出为标量。
  - **适应度评估器**：使用Spearman相关系数（结合运行时惩罚）评估候选代理与真实性能之间的排名一致性。
  - **RL进化调度器**：采用actor-critic网络，以演化过程中每一代的平均适应度为奖励，学习最优行动策略（选择初始化/变异/交叉操作及其参数），并更新actor和critic参数。
- **算法流程**（文字说明）：
  1. 初始化：LLM生成初始种群`P0`（N个代理）。
  2. 循环Tmax代：
     - Actor采样操作`at`（init/mut/cross）并构造上下文；
     - LLM根据提示和上下文生成候选代理`P'_t`；
     - 适应度评估器计算`P'_t`的Spearman相关系数（带惩罚）；
     - 计算奖励并更新actor-critic；
     - 将`P'_t`加入种群，淘汰最差个体，保持种群规模N。
  3. 返回适应度最高的代理。

### 3. 实验设计：数据集/场景、benchmark、对比方法
- **Benchmark**：五种代表性搜索空间：
  - NAS-Bench-201（CIFAR-10/100, ImageNet16-120）
  - NAS-Bench-101（CIFAR-10）
  - DARTS搜索空间（CIFAR-10/100, ImageNet1k）
  - TransNAS-Bench-101-Micro（自编码、场景分类、拼图任务）
  - OoD-ViT-NAS-Ti（ImageNet1k, ImageNet-A, -R, -D/Texture, -D/Material）
- **对比方法**：包括人工设计的ZCP（SNIP, SynFlow, NWOT, ZenNAS, ZiCo, AZ-NAS, SWAP等）以及简单代理（参数量、FLOPs），并对比了多种LLM（GPT-4o, Claude 3.7, Deepseek V3, Gemini Flash, Llama 4, Grok 3, Qwen Plus）。

### 4. 资源与算力
- 文中指出：在NAS-Bench-201上，APD可在**30代内**达到Spearman相关性>0.80，耗时约**1 GPU-小时**（单张RTX 4090）。
- 在DARTS搜索空间上，APD仅用**0.004 GPU-天**完成搜索，比SWAP快1.5倍。
- 未明确说明使用多卡并行，推断实验基于单张RTX 4090或类似GPU。

### 5. 实验数量与充分性
- **数量**：在5个搜索空间、多个数据集（共约10+任务）上进行了对比实验；包含与7种主流LLM的消融实验、与2种进化操作的消融实验、与不同组件（Naive/Evolution/Actor-Critic）的消融实验、以及对超参数（种群大小、折扣因子、历史窗口、A2C网络深度）的敏感性分析。
- **充分性**：实验覆盖了CNN和ViT搜索空间，包括分类、自编码、场景分类和OoD任务，对比了几乎所有主流训练无关ZCP方法，结果皆以均值±标准差报告，并进行了多轮独立重复（如TransNAS-Bench-101为5次）。结论与图表清晰对应，实验设计较为充分且公平。

### 6. 论文的主要结论与发现
- APD在所有测试基准上均取得最优或接近最优的性能，Spearman相关性、Kendall相关性、测试精度均显著优于人工设计的ZCP。
- 在NAS-Bench-201（CIFAR-10）上，APD达到93.76%测试精度，比最先进方法（ZiCo）高0.07%，且运行时仅16.81 ms/arch，比SWAP快约2.8倍。
- 在DARTS搜索空间（CIFAR-10）上达到97.63% top-1精度；在ImageNet1k上达到76.9% top-1精度。
- 在TransNAS-Bench-101上，APD在自编码任务SSIM达0.54，场景分类54.0%，拼图任务91.2%。
- 在OoD-ViT-NAS上，APD在ImageNet-R上Spearman达0.88，远超其他方法。
- 消融实验证明：actor-critic RL演化框架显著优于单纯LLM生成（Naive方法），且在不同LLM上表现稳定。

### 7. 优点
- **范式创新**：首次将LLM引入零成本代理的自动发现，颠覆了人工设计范式。
- **自动化与效率**：无需专家知识，搜索成本极低（1 GPU-小时），且发现的代理效果优。
- **可解释性与可控性**：虽LLM内部为黑盒，但外层优化循环具备可监控的适应度信号，且代理以自然语言+代码表示，便于理解。
- **泛化性**：在多个搜索空间（CNN、ViT）和任务（分类、自编码、OoD）上均表现优异，且跨LLM鲁棒。
- **结构透明**：代理被设计为DAG，组合方式清晰，有利于后续分析和改进。

### 8. 不足与局限
- **黑盒优化**：LLM生成代理的内部推理过程不可见，尽管外部循环可检查。
- **需要少量真实标签数据**：适应度评估需使用约2-3%的基准架构的真实精度，尽管代价很小。
- **长上下文限制**：对于非常大的种群或复杂代理，prompt长度可能超出LLM上下文窗口，需要下采样。
- **安全性风险**：LLM生成的代码可能含有不安全或资源过度消耗的调用，需在沙盒中运行。
- **实验补充**：文中提到更多实验见附录，但主文未全面展示所有消融和可视化，依赖附录补全。
- **应用范围**：目前主要测试在已有的NAS benchmark和搜索空间，尚未验证在全新、未知的搜索空间上的零-shot迁移能力。

（完）
