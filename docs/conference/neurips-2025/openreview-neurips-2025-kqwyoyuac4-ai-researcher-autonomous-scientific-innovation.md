---
title: "AI-Researcher: Autonomous Scientific Innovation"
title_zh: AI研究员：自主科学创新
authors: "Jiabin Tang, Lianghao Xia, Zhonghang Li, Chao Huang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=kQWyOYUAC4"
tags: ["query:ad"]
score: 8.0
evidence: 全自动科研系统，利用LLM完成科学发现全流程
tldr: 该论文针对当前AI驱动科学发现缺乏全流程自动化评估的问题，提出AI-Researcher，一个完全自主的科研系统，利用大语言模型（LLM）的强大推理和编码能力，自动完成文献综述、假设生成、算法实现、实验验证及论文撰写等全流程，仅需极少人工干预。同时构建了Scientist-Bench基准，涵盖多个前沿论文的复现任务，用于评估自主研究能力。实验表明该系统能成功复现并部分超越已有成果，展示了LLM在加速科学创新领域的巨大潜力。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-kqwyoyuac4/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 533, \"height\": 367}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kqwyoyuac4/fig-002.webp\", \"caption\": \"\", \"page\": 2, \"index\": 2, \"width\": 533, \"height\": 393}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kqwyoyuac4/fig-003.webp\", \"caption\": \"\", \"page\": 2, \"index\": 3, \"width\": 519, \"height\": 487}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kqwyoyuac4/fig-004.webp\", \"caption\": \"\", \"page\": 2, \"index\": 4, \"width\": 416, \"height\": 600}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kqwyoyuac4/fig-005.webp\", \"caption\": \"\", \"page\": 2, \"index\": 5, \"width\": 626, \"height\": 791}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kqwyoyuac4/fig-006.webp\", \"caption\": \"\", \"page\": 2, \"index\": 6, \"width\": 1124, \"height\": 684}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kqwyoyuac4/fig-007.webp\", \"caption\": \"\", \"page\": 3, \"index\": 7, \"width\": 360, \"height\": 360}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kqwyoyuac4/fig-008.webp\", \"caption\": \"\", \"page\": 6, \"index\": 8, \"width\": 3000, \"height\": 1800}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kqwyoyuac4/fig-009.webp\", \"caption\": \"\", \"page\": 6, \"index\": 9, \"width\": 3600, \"height\": 2100}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kqwyoyuac4/fig-010.webp\", \"caption\": \"\", \"page\": 6, \"index\": 10, \"width\": 3600, \"height\": 2100}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kqwyoyuac4/fig-011.webp\", \"caption\": \"\", \"page\": 38, \"index\": 11, \"width\": 1224, \"height\": 1584}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kqwyoyuac4/fig-012.webp\", \"caption\": \"\", \"page\": 38, \"index\": 12, \"width\": 1224, \"height\": 1584}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kqwyoyuac4/fig-013.webp\", \"caption\": \"\", \"page\": 38, \"index\": 13, \"width\": 1224, \"height\": 1584}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kqwyoyuac4/fig-014.webp\", \"caption\": \"\", \"page\": 38, \"index\": 14, \"width\": 1224, \"height\": 1584}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kqwyoyuac4/fig-015.webp\", \"caption\": \"\", \"page\": 38, \"index\": 15, \"width\": 1224, \"height\": 1584}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kqwyoyuac4/fig-016.webp\", \"caption\": \"\", \"page\": 38, \"index\": 16, \"width\": 1224, \"height\": 1584}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kqwyoyuac4/fig-017.webp\", \"caption\": \"\", \"page\": 38, \"index\": 17, \"width\": 1224, \"height\": 1584}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kqwyoyuac4/fig-018.webp\", \"caption\": \"\", \"page\": 38, \"index\": 18, \"width\": 1224, \"height\": 1584}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kqwyoyuac4/fig-019.webp\", \"caption\": \"\", \"page\": 38, \"index\": 19, \"width\": 704, \"height\": 706}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kqwyoyuac4/fig-020.webp\", \"caption\": \"\", \"page\": 38, \"index\": 20, \"width\": 1758, \"height\": 1880}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-kqwyoyuac4/fig-021.webp\", \"caption\": \"\", \"page\": 38, \"index\": 21, \"width\": 1758, \"height\": 1880}]"
motivation: 现有AI辅助科研多限于单环节，缺乏从文献到论文的全流程自动化系统与评估基准。
method: 构建基于LLM的多智能体系统AI-Researcher，自动编排科研全流程，并设计Scientist-Bench基准进行全面评估。
result: 在多个前沿论文复现任务中，AI-Researcher成功产出可复现的实验结果与手稿，部分任务取得超越原始成果。
conclusion: 该工作证明了LLM在自主科学发现中的强大能力，为AI驱动的全自动科研奠定了基础。
---

## Abstract
The powerful reasoning capabilities of Large Language Models (LLMs) in mathematics and coding, combined with their ability to automate complex tasks through agentic frameworks, present unprecedented opportunities for accelerating scientific innovation. In this paper, we introduce AI-Researcher, a fully autonomous research system that transforms how AI-driven scientific discovery is conducted and evaluated. Our framework seamlessly orchestrates the complete research pipeline--from literature review and hypothesis generation to algorithm implementation and publication-ready manuscript preparation--with minimal human intervention. To rigorously assess autonomous research capabilities, we develop Scientist-Bench, a comprehensive benchmark comprising state-of-the-art papers across diverse AI research domains, featuring both guided innovation and open-ended exploration tasks. Through extensive experiments, we demonstrate that AI-Researcher achieves remarkable implementation success rates and produces research papers that approach human-level quality. This work establishes new foundations for autonomous scientific innovation that can complement human researchers by systematically exploring solution spaces beyond cognitive limitations.

---

## 论文详细总结（自动生成）

# 论文详细总结：AI-Researcher: Autonomous Scientific Innovation

## 1. 核心问题与整体含义（研究动机和背景）
- **研究动机**：尽管大语言模型在数学推理和编码方面表现出色，但现有AI系统大多局限于任务自动化（如安排会议、检索信息），缺乏进行真正科学创新所需的高阶认知能力，如假设生成、跨领域知识融合、方法创新等。科学发现过程涉及大量文献理解、不确定空间探索、实验结果与理论框架的迭代调整，对AI系统提出了远超当前智能水平的挑战。
- **整体含义**：本文旨在构建一个**完全自主的科研系统**，能够端到端完成从文献调研、假设生成、算法实现、实验验证到论文撰写的完整流程，从而加速科学创新。同时，作者指出目前缺乏标准化基准来评估自主科研能力，因此构建了**Scientist-Bench**基准。

## 2. 方法论：核心思想、关键技术细节、流程
### 核心思想
- 采用**多智能体架构**，将科研流程分解为三个主要阶段，通过结构化的知识交换和递归反馈机制保持推理一致性，实现从概念到可发表论文的自动化。
### 三阶段流程（文字说明）
1. **文献调研与想法生成**（Literature Review & Idea Generation）
   - **Knowledge Acquisition Agent**：基于用户提供的10–15篇参考文献，自动补充高质量GitHub代码仓库和arXiv论文，扩大知识基础。
   - **Resource Analyst Agent**：将研究概念分解为原子组件，通过Paper Analyst（数学形式化）和Code Analyst（代码实现映射）建立概念→数学→代码的双向映射，减少幻觉。随后Plan Agent生成详细的实现路线图（数据集、训练、测试方案）。
   - **Idea Generator**：采用**发散-收敛**机制，先独立生成5个研究方向，再根据新颖性、技术可行性和变革潜力排序，选择最佳方向形成完整研究提案。
2. **新算法设计、实现与验证**（New Algorithm Design, Implementation & Validation）
   - **Code Agent**：在受控Docker环境中，按照计划逐步编写代码，强制自包含原则（不直接引用外部代码库）。
   - **Advisor Agent**：模拟导师-学生关系，对比代码与原子概念，生成详细反馈报告，指导代码修正。
   - **渐进式实验循环**：先在少量数据上运行原型（1–2 epochs），通过“可行”检验后扩展至全量实验；超过迭代次数仍未通过则标记为“不可行”。
3. **自动科学文档**（Automated Scientific Documentation）
   - **Documentation Agent**：通过三阶段层次化生成克服LLM长文本一致性难题：
     1. 合成研究轨迹（结构大纲）；
     2. 基于模板的详细内容展开；
     3. 根据学术检查表逐项修订，确保事实准确性和完整性。
### 安全与可重复性
- 所有代码在Docker容器中执行，提供安全边界、预配置ML框架和动态包管理。

## 3. 实验设计
### 数据集 / 场景
- 使用自行构建的**Scientist-Bench**基准，包含22篇来自顶级会议的高影响力论文，覆盖四个AI领域：
  - 扩散模型（4篇）
  - 向量量化 / 信号处理（6篇）
  - 图神经网络（7篇）
  - 推荐系统（5篇）
- 任务级别：
  - **Level-1（引导型创新）**：提供明确研究指令，测试执行能力（22篇全覆盖）。
  - **Level-2（开放探索）**：仅提供参考文献，无指令，测试独立提出新方向的能力（选择5篇代表性论文以避免引用污染）。
### 对比方法
- 主要对比不同LLM骨干作为研究代理的性能：
  - **Claude系列**（Claude-3.5 Sonnet, Claude-3.7 Sonnet）
  - **GPT-4o系列**（GPT-4o, o1-mini, o3-mini）
- 评估方式：
  - **代码实现评估**：完整性（是否产出可执行代码）和正确性（基于5分制多智能体评分）。
  - **论文质量评估**：成对比较（AI生成论文 vs. 人类原始论文），采用7分量表（-3到+3），由5种不同LLM（GPT-4o, o1-mini, o3-mini, Claude-3.5, Claude-3.7）各做16次独立评审（随机打乱顺序），统计平均评分和“可比率”（评分≥-1.0的占比）。
- 此外，利用ICLR 2021-2023的32对接受/拒绝论文验证评审代理的准确性。

## 4. 资源与算力
- **未明确说明**具体GPU型号、数量或训练时长。文中仅提及：
  - 所有过程在Docker容器中运行；
  - 使用了Claude系列和GPT-4o系列模型进行推理；
  - 开放式探索中部分领域（如扩散模型）因计算资源限制影响了性能。
  - 无详细的硬件配置、GPU小时数或成本报告。

## 5. 实验数量与充分性
### 实验数量
- 共进行**6大类实验**：
  1. **实现质量评估**：完整性和正确性（完整22篇Level-1 + 5篇Level-2，使用Claude和GPT-4o）。
  2. **论文成对比较**：22篇Level-1，每篇由5种LLM各评16次（共22×5×16=1760次评审）。
  3. **开放探索（Level-2）**：5篇论文，同样使用5种LLM各评16次（共400次）。
  4. **LLM骨干消融**：7个代表性任务，对比GPT-4o和Claude-3.5作为研究代理（使用多种评审LLM）。
  5. **评审代理验证**：32对ICLR论文，5种LLM评审。
  6. **案例研究**：旋转向量量化任务（rotation_vq）的代码结构和实验报告展示。
### 充分性与客观性
- **优点**：使用多种LLM作为评估器（避免单一模型偏见），多次独立评审（温度=1.0），随机打乱顺序（消除位置偏差），涵盖多个领域和难度级别。
- **潜在不足**：
  - 评估器本身也是LLM，存在自评估偏差（尤其是当评审LLM与被评估系统使用相同模型时）。
  - 未引入人类专家评审进行对比，仅验证了评审代理与ICLR历史决策的一致性（虽达90.62%准确率）。
  - 实验规模相对较小（22篇目标论文），且Level-2仅5篇，泛化性有待验证。
  - 缺乏跨数据集、跨基线的完全复现对照。

## 6. 主要结论与发现
1. **实现质量高**：Claude系列模型在Scientist-Bench上实现完整性达93.8%，正确性平均2.65/5；VQ领域最高（3.22），推荐系统最低（2.20）。
2. **AI论文接近人类水平**：不同评估器下，13.64%–81.82%的AI生成论文被认为与人类原创论文质量相当（评分≥-1.0）。GPT-4o给予最高评价（81.82%可比），Claude-3.7最严苛（22.73%）。
3. **开放探索优于指令引导**：Level-2任务中，AI-Researcher的平均评分和可比率显著优于Level-1（可比率从13.64%-81.82%提升至50%-100%），表明系统在自由探索时更能发挥内部知识合成优势。
4. **Claude系列优于GPT-4o系列**：作为研究代理，Claude-3.5在完整性（87.5% vs. 50%）和正确性（2.75 vs. 1.0）上均显著领先；GPT-4o常出现欠简化实现（如将扩散Transformer简化为普通ViT）。
5. **评审代理有效**：与ICLR人类决策的准确率达81.25%–90.62%。

## 7. 优点
- **端到端自动化**：首个实现从文献到可发表论文全流程无人干预的系统。
- **系统性多智能体架构**：通过资源分析师、代码代理、顾问代理等分工协作，并引入循环反馈机制（导师-学生模式），提高实现成功率。
- **创新基准Scientist-Bench**：提供标准化评测框架，包含两个难度级别、多领域覆盖，填补了该领域空白。
- **严格的评估方法**：采用多LLM评估器、随机顺序、多次独立评审，消除偏差；并验证了评审代理与人类专家的一致性。
- **代码开放**：提供GitHub代码库，便于复现和扩展。

## 8. 不足与局限
- **伦理与安全考虑不足**：未系统讨论自动生成研究可能带来的偏见、有害实验建议、非人类作者责任等问题。
- **LLM骨架单一**：主要依赖Claude系列模型，未测试开源模型（如Llama、Qwen）或小模型，可能限制通用性。
- **计算资源未量化**：缺乏GPU小时数、API调用成本等关键资源信息，不利于其他研究者评估可复现性和成本。
- **论文质量仍低于人类**：平均评分多为负值（-0.53 ~ -1.70），且领域间差异大（推荐系统表现好，扩散模型较差），尚不能完全取代人类研究者。
- **评估自身偏差**：使用LLM评估LLM生成的内容，可能高估质量；虽进行了验证，但无法完全排除喜好偏差。
- **基准规模有限**：仅22篇目标论文，Level-2仅5篇，覆盖领域不够广（缺少NLP、强化学习等）。
- **开放式创新范围受限**：Level-2任务中，系统仍受限于参考论文范围，可能缺乏真正的颠覆性创新。

（完）
