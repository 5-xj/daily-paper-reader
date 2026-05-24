---
title: "Teaching Transformers to Solve Combinatorial Problems through Efficient Trial & Error"
title_zh: 通过高效试错教Transformer解决组合问题
authors: "Panagiotis Giannoulis, Yorgos Pantis, Christos Tzamos"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=MLprqOvAAK"
tags: ["query:rl-comb-opt"]
score: 9.0
evidence: 利用大模型结合试错法求解组合优化问题
tldr: "针对大语言模型在组合优化问题（如数独）上表现不佳的局限，本文提出一种高效的试错方法，通过迭代生成候选解并利用验证器快速评估，采用标准解码器Transformer（GPT-2）无需外部工具。在数独任务上达到99%准确率，优于先前神经符号方法。该方法展示了将语言模型与启发式搜索（试错策略）结合求解NP问题的潜力，属于强化学习与组合优化的交叉方向。"
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-mlprqovaak/fig-001.webp\", \"caption\": \"\", \"page\": 6, \"index\": 1, \"width\": 3455, \"height\": 1095}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-mlprqovaak/fig-002.webp\", \"caption\": \"\", \"page\": 9, \"index\": 2, \"width\": 3336, \"height\": 1384}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-mlprqovaak/fig-003.webp\", \"caption\": \"\", \"page\": 28, \"index\": 3, \"width\": 3336, \"height\": 1347}]"
motivation: 大语言模型难以处理组合优化问题（如SAT、TSP等），需要新方法增强其推理能力。
method: 提出试错方法：利用LLM迭代生成候选解，通过验证器高效筛选，结合模仿学习学习问题规则。
result: "在数独任务上达到99%准确率，超越先前神经符号方法，且不依赖外部工具。"
conclusion: 该方法有效提升了LLM在组合优化上的性能，为神经组合优化提供了新途径。
---

## Abstract
Despite their proficiency in various language tasks, Large Language Models (LLMs) struggle with combinatorial problems like Satisfiability, Traveling Salesman Problem, or even basic arithmetic. We address this gap through a novel trial \& error approach for solving problems in the class NP, where candidate solutions are iteratively generated and efficiently validated using verifiers. We focus on the paradigmatic task of Sudoku and achieve state-of-the-art accuracy (99\%) compared to prior neuro-symbolic approaches. Unlike prior work that used custom architectures,  our method employs a vanilla decoder-only Transformer (GPT-2) without external tools or function calling. Our method integrates imitation learning of simple Sudoku rules with an explicit Depth-First Search (DFS) exploration strategy involving informed guessing and backtracking. Moving beyond imitation learning, we seek to minimize the number of guesses until reaching a solution. This is achieved using depth-1 guessing, showing empirically that almost all Sudoku can be solved using the puzzle's rules with at most one guess. We provide a rigorous analysis of this setup formalizing its connection to a contextual variant of $\textit{Min-Sum Set Cover}$, a well-studied problem in algorithms and stochastic optimization.

---

## 论文详细总结（自动生成）

## 1. 核心问题与整体含义（研究动机和背景）

大语言模型（LLM）在语言任务上表现优异，但在组合优化问题（如数独、SAT、旅行商问题、基本算术）上存在严重缺陷。现有 LLM（GPT-4o、Gemini、DeepSeek-R1 等）无法正确求解标准数独（表1显示准确率0%），即便采用思维链等策略也无法回溯错误。同时，先前基于深度学习的数独求解方法（如RRN、Recurrent Transformer）使用专用架构，缺乏通用性和可解释性，且无法在出错后修正。本文旨在**通过一种通用、高效的试错框架，训练标准因果Transformer（GPT-2）利用验证器和深度优先搜索（DFS）策略，解决NP类组合问题**，并以数独为主测试任务，展示LLM在结构化推理上的潜力。

## 2. 方法论：核心思想、关键技术细节、算法流程

### 核心思想
- **模仿学习 + 试错搜索**：通过模仿简单的数独规则（Lone Single、Hidden Single）进行基础推理；当规则不足时，模型学习做出**知情猜测**并**回溯**（DFS），实现自纠正。
- **超越模仿学习**：进一步优化猜测效率，引入**深度-1猜测**（最多一次猜测即可解决大多数数独），并将问题建模为**上下文Min‑Sum Set Cover**问题，设计新的损失函数以最小化期望猜测次数。

### 关键技术细节
- **动作级分词**：每个动作（行、列、值）编码为一个三位数（如123），而非三个独立token，减少序列长度3倍。
- **多目标损失**：允许每个时间步有多个合法下一动作，损失函数为 $\sum_{i \in S} -\log p_i$（$S$为所有合法动作），加速学习。
- **DFS转录生成**：生成教学转录序列，包含初始填充、规则应用、猜测（带水平标记）、死胡同回溯、最终解答。训练时使用软标签（多目标）。
- **深度-1猜测优化**：假设仅允许一次猜测且非自适应（每次猜测独立）。将猜测选择问题形式化为**Min‑Sum Set Cover**，目标是最小化期望尝试次数。提出损失函数 $L_1 = \left(\sum_{i \in S} p_i\right)^{-1}$（最小化期望步数），与标准交叉熵损失 $L_2$ 对比，理论上 $L_1$ 更优。

### 算法流程（文字说明）
1. 输入初始已知单元格序列→token序列。
2. 应用基本数独规则填满所有可确定的单元格。
3. 如果完成，输出结束符；否则输出“规则结束”符，进入猜测阶段。
4. 模型输出当前猜测级别（1~99）并选择一个猜测值。
5. 将该猜测加入，重新进入规则应用阶段。
6. 若出现矛盾（死胡同），输出死胡同标记并回溯到上一级别，尝试其他猜测。
7. 重复直至找到解或达到最大长度限制。

## 3. 实验设计

### 数据集/场景
- **数独（主任务）**：
  - **Random**：自研生成器从 $6.67 \times 10^{21}$ 个有效棋盘均匀采样，随机移除格子并保证唯一解。用于训练和测试（10万测试集）。
  - **Kaggle unfiltered**：3M数独数据集，随机选取10万测试。
  - **Kaggle filtered**：由SDWP24筛选的1.9M仅用7种策略可解的谜题。
  - **RRN**：PPW18引入的18K训练+18K测试集，按提示数分层。
- **1‑in‑3 SAT**：随机生成 $N=25$ 变量、$M=15$ 子句的实例，测试99%准确率。

### Benchmark与对比方法
- **基线方法**：
  - RRN（PPW18）
  - Recurrent Transformer（YIL23）
  - Causal Transformer（SDWP24）
  - Masked Diffusion Models（MDM，KSK+25）
  - 工业级LLM：GPT-4o、Gemini-1.5 Pro、GPT-o3 mini、Gemini-2.5 Flash、DeepSeek-R1
- **评估指标**：Board Accuracy（整个棋盘正确率）、Cell Accuracy、时间
- **对比设置**：在同一随机生成器上重新训练部分基线（RRN、Recurrent Transformer），消除数据分布偏差。

### 消融实验
- 分词策略：三元组 (r,c,v) vs. 三位数（rcv）
- 损失函数：单目标 vs. 多目标
- 深度-1猜测损失：$L_1$ vs. $L_2$ vs. 上下界oracle

## 4. 资源与算力

- **模型**：基于Karpathy的minGPT实现，42M参数，8层、8头注意力、嵌入维度576、FFN维度3456。
- **训练硬件**：单个NVIDIA A10G GPU。
- **训练时长**：3M步（约168 GPU小时），batch size 32，AdamW优化器，学习率线性预热至1e-4后线性衰减。
- **数据处理**：使用自研C语言实现的SudokuPy库，实时生成训练数据，避免过拟合。

## 5. 实验数量与充分性

- **数独实验**：在4个数据集（Random、Kaggle unfiltered、Kaggle filtered、RRN）上进行系统性评估，每个测试集至少10万谜题（RRN为1.8万）。对比了5种基线方法，并在多个基线上做了再训练公平比较。
- **消融实验**：考察分词、损失函数、猜测深度对性能的影响（如图3、图6所示）。
- **SAT实验**：仅给出整体准确率（99.1%），未做详细消融或与基线对比，略显单薄。
- **整体充分性**：数独实验设计全面、对比公平，结论可信。SAT实验作为泛化性展示，但对比不够充分。除深度-1猜测外，未实验多级猜测优化。

## 6. 主要结论与发现

- **试错框架有效**：仅用基本规则+猜测回溯，在数独上达到**98.9%~99.5% board accuracy**，**超越所有先前方法**（包括专用架构RRN、Recurrent Transformer、MDM）。在Random数据集上比RRN/RT提升6-7个百分点。
- **优化猜测**：深度-1猜测结合$L_1$损失（Min-Sum Set Cover损失）能显著减少期望猜测次数，中位数仅1.5次，优于$L_2$损失和oracle上界（中位数2.3次）。
- **泛化性**：方法可直接应用于其他NP问题（如1‑in‑3 SAT，99%准确率）。无需外部工具或函数调用，仅依赖标准因果Transformer和训练转录数据。
- **效率与可解释性**：动作级分词+多目标损失加速学习；DFS过程提供可解释的逐步推理路径。

## 7. 方法或实验设计上的优点

- **通用性**：框架适用于**任何NP问题**（满足“易验证”条件），只需定义规则和猜测逻辑，提供了C语言实现库。
- **零外部依赖**：使用纯Transformer（GPT-2）架构，无需定制结构或外部求解器。
- **理论支撑**：将猜测优化与经典Min-Sum Set Cover问题联系，提供理论界（非自适应策略损失至多$\Theta(\log n)$倍于最优自适应策略），并设计出理论更优的损失函数。
- **标准化基准**：发布高效C语言数独生成器SudokuPy，支持流式训练，避免静态数据集偏差。
- **实验严谨**：随机谜题生成器保证均匀分布；重新训练基线模型以确保公平对比。

## 8. 不足与局限

- **猜测优化限制**：当前优化仅限**深度-1**和**非自适应**策略，未扩展到多级猜测或自适应策略。异步多级猜测的优化是未来方向。
- **SAT实验较弱**：仅给出一个配置下的整体准确率，缺少与基线方法（如SATNet）的对比及消融分析。
- **规模扩展性**：42M参数模型在9×9数独上表现良好，但未验证在更大棋盘（如16×16）或更复杂NP问题（如TSP）上的效果。
- **符号表示局限**：任务依赖于离散符号表示和预设规则，对于无明确规则定义的问题可能不适用。
- **过度依赖猜测假设**：深度-1猜测假设在随机数独上成立（99.8%），但可能不适用于所有分布或更困难实例；未分析该假设对特定困难谜题的有效性。
- **未与最新推理LLM对比推理成本**：虽然工业LLM在表1中准确率为0，但论文未比较推理时间/成本与本文方法的开销。

（完）
