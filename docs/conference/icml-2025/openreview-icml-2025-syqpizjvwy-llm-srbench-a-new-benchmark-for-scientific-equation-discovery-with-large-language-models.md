---
title: "LLM-SRBench: A New Benchmark for Scientific Equation Discovery with Large Language Models"
title_zh: LLM-SRBench：面向大语言模型科学方程发现的新基准
authors: "Parshin Shojaee, Ngoc-Hieu Nguyen, Kazem Meidani, Amir Barati Farimani, Khoa D Doan, Chandan K. Reddy"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=SyQPiZJVWY"
tags: ["query:ad"]
score: 8.0
evidence: 是大语言模型辅助科学方程发现的评测基准，切合LLM自动发现主题。
tldr: 针对大语言模型在科学方程发现评测中因常见方程记忆导致得分虚高的问题，论文提出LLM-SRBench基准。该基准汇集四个科学领域的239个精心设计难题，用于评估模型真正的方程发现能力而非记忆水平。通过大规模易混淆和分布外的任务，研究者可更可信地比较不同LLM发现方法。该基准为LLM驱动的科学自动发现研究提供了更严格的测试基础。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 现有评测多依赖常见方程，容易被大语言模型记忆，导致发现能力被高估。
method: 构建跨四个科学领域的239个难题，设计防记忆的评测来评估LLM方程发现能力。
result: 得到一个可在多领域检测LLM真实发现能力的基准与评测框架。
conclusion: 为LLM在科学方程自动发现方向的可靠性评价奠定基础。
---

## Abstract
Scientific equation discovery is a fundamental task in the history of scientific progress, enabling the derivation of laws governing natural phenomena. Recently, Large Language Models (LLMs) have gained interest for this task due to their potential to leverage embedded scientific knowledge for hypothesis generation. However, evaluating the true discovery capabilities of these methods remains challenging, as existing benchmarks often rely on common equations that are susceptible to memorization by LLMs, leading to inflated performance metrics that do not reflect actual discovery. In this paper, we introduce LLM-SRBench, a comprehensive benchmark with 239 challenging problems across four scientific domains specifically designed to evaluate LLM-based scientific equation discovery methods while preventing trivial memorization. Our benchmark comprises two main categories: LSR-Transform, which transforms common physical models into less common mathematical representations to test reasoning beyond memorization, and LSR-Synth, which introduces synthetic, discovery-driven problems requiring data-driven reasoning. Through extensive evaluation of several state-of-the-art methods on LLM-SRBench, using both open and closed LLMs, we find that the best-performing system so far achieves only 31.5% symbolic accuracy.
These findings highlight the challenges of scientific equation discovery, positioning LLM-SRBench as a valuable resource for future research.

---

## 论文详细总结（自动生成）

# LLM-SRBench 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心背景**：科学方程发现是科学进步中的基础任务，旨在从观测数据中发现支配自然现象的定性和定量规律。近年来，大语言模型（LLMs）凭借其在预训练过程中沉淀的"科学知识"，被逐步引入到科学方程自动发现的研究中，用作假设生成器或搜索指导器。
- **关键问题**：LLM-based 方程发现方法的"真实发现能力"难以评估。现有评测基准多使用教科书式或常见形式的已知物理方程，LLM 完全可能在训练语料中"记忆"过这些方程的标准形式，导致评测成绩虚高，无法反映模型真正从数据中推理发现新方程的能力。
- **整体含义**：若评测错位，则社区对"LLM 能否做科学发现"的判断就可能建立在脆弱基础上。因此需要设计一类新的、难以凭记忆"刷分"的评测基准，为后续发展奠定可信的评估基础。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：构造一套**抗记忆**的评测方案，将 LLM 的得分从"见过多少常见公式"中剥离出来，考察其是否真的具备从数据出发的符号推理能力。
- **基准构成**：提出 **LLM-SRBench**，包含 **239 个挑战性问题**，横跨 **四个科学领域**，并划分为两个主要子集：
  - **LSR-Transform（变换集）**：将常见的物理模型改写成**不常见的数学表示**（如变量代换、非标准参数化、不同坐标系下的变体等），使模型无法从记忆中原封不动地调取答案，必须基于实际数据做符号回归与推理——用以测试"超越记忆的推理能力"。
  - **LSR-Synth（合成集）**：引入**合成的、发现驱动**的难题，其背后并不直接对应教科书中的已知物理模型，迫使方法进行纯粹的数据驱动推理与结构搜索，考察模型在真正未知情境下的发现力。
- **评测目标**：不再把"是否还原出某条标准方程"视为唯一指标，而是关注模型能否在**不依赖记忆捷径**的前提下恢复正确符号表达式结构。

## 3. 实验设计：数据集 / 场景 / Benchmark / 对比方法

- **Benchmark**：LLM-SRBench（共 239 道难题，四个科学领域，两个子集——LR-Transform 与 LR-Synth）。
- **评测场景**：科学方程发现任务，输入为数据（以及可选的辅助提示），输出应为符号形式的数学表达式。
- **对比方法**：评测了多种 SOTA 方法，既包括**开源 LLM**，也包括**闭源 LLM** 上的实现（文中未逐一列举具体模型名称，从摘要推断覆盖了主流的 LLM-based symbolic regression 方法）。
- **指标**：采用 **符号准确率（symbolic accuracy）**，衡量最终输出符号表达式的正确程度。

## 4. 资源与算力

- 论文的摘要与所提供的元数据**未明确说明所消耗的计算资源**（如 GPU 型号与数量、训练或推理时长等）。
- 这表明该基准的算力开销以“推理期评测”为主而非“训练期”，但具体资源投入需查看论文全文中的实验章节，此处无法给出确切数字。

## 5. 实验数量与充分性

- 摘要中提及"extensive evaluation of several state-of-the-art methods"，说明论文对不同 SOTA 方法进行了系统评测；同时，基准由 239 个问题构成，在**评测广度**上比以往基准覆盖更大。
- 但**摘要层面的信息有限**：没有显示具体的每个方法得分明细、分领域统计、消融实验的数目、或不同提示/设置之间的敏感性检查。是否进行了"模型规模、推理预算、提示格式、后处理"逐项控制，原文中未明确展开，需结合论文正文判断实验的完备程度。
- 就目标而言：相比旧基准只能聚焦少量方程，LLM-SRBench 的**多样性**（合成+变形）是对公平性的一种加强。

## 6. 论文的主要结论与发现

- 在 LLM-SRBench 下，当前**最优系统也只达到 31.5% 的符号准确率**。
- 这一结果远低于旧基准上的报告分数，说明 LLM 在此前的评测高分很大程度归因于**方程记忆**，而非真实验证过的科学发现能力。
- 其次，即便先进 LLM 拥有大量科学知识，它们的"真正数据驱动推理"仍具明显短板，发现新颖方程依然是一个未解决的巨大挑战。
- LLM-SRBench 因此提供了一个更为严格、可信的评价基准，为后续研究提供了基础性资源（valuable resource）。

## 7. 优点

- **评测设计的新颖性**：提出"记忆暴露"风险并给出两维对策——**重表达（Transform）** 与 **合成发现（Synth）**——直击旧基准的软肋，考察重点从"背诵"转移到"发现"。
- **问题规模与跨领域覆盖面**：239 个问题覆盖四个科学领域，具备较好的多样性与压力测试价值。
- **公平性更高**：相比常见方程的回归测试，本 benchmark 显著降低了对训练语料的记忆依赖，使度量结果更接近真实泛化能力。
- **公开基准资源**：作者将 LLM-SRBench 定位为未来研究资源，具有持续复用与扩展价值。

## 8. 不足与局限

- **性能天花板仍低**：评测对象（含最优系统）只达 31.5% 符号准确率，基准的区分度较高，但也有可能造成“地板效应”，即现有方法之间的真实差距在小分数区间内不够敏锐。
- **合成问题的真实性**：LSR-Synth 的“合成性（synthetic）”可能偏离真实科学发现场景；虽然有助于防记忆，但其结论向真正的疑难物理/生物/化学规律发现的外推能力需要进一步验证。
- **文本层面的信息缺失**：公开摘要在方法细节与实验设置上的细节有限，可能掩盖了与真实应用接轨仍存在的实现复杂性。
- **语料记忆难以完全排除**：即便使用“变换”形式，某些变换后的方程结构仍可能与语料内类似文献重合；防记忆机制不是绝对保证，而是降低概率。
- **通用性约束**：当前评测集中在符号回归与已知结构空间上，对于更开放的科学推理、理论生成等更深层目标，其覆盖度仍有限。

（完）
