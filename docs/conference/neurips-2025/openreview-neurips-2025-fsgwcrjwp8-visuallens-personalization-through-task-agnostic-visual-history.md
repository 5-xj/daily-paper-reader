---
title: "VisualLens: Personalization through Task-Agnostic Visual History"
title_zh: VisualLens：通过任务无关视觉历史实现个性化
authors: "Wang Bill Zhu, Deqing Fu, Kai Sun, Yi Lu, Zhaojiang Lin, Seungwhan Moon, Kanika Narang, MUSTAFA CANIM, Yue Liu, Anuj Kumar, Xin Luna Dong"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=FsgwcrJWp8"
tags: ["query:llm-sr"]
score: 9.0
evidence: 利用多模态大语言模型实现推荐个性化
tldr: 针对推荐系统依赖交互日志的局限，本文提出VisualLens框架，利用多模态大语言模型从用户日常视觉历史中提取、过滤和精炼用户画像，实现任务无关的个性化推荐。实验表明该方法在多种推荐场景下有效，拓展了LLM在推荐中的应用。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-neurips-2025-fsgwcrjwp8/fig-001.webp\", \"caption\": \"\", \"page\": 2, \"index\": 1, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fsgwcrjwp8/fig-002.webp\", \"caption\": \"\", \"page\": 2, \"index\": 2, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fsgwcrjwp8/fig-003.webp\", \"caption\": \"\", \"page\": 2, \"index\": 3, \"width\": 1024, \"height\": 683}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fsgwcrjwp8/fig-004.webp\", \"caption\": \"\", \"page\": 2, \"index\": 4, \"width\": 1600, \"height\": 1200}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fsgwcrjwp8/fig-005.webp\", \"caption\": \"\", \"page\": 2, \"index\": 5, \"width\": 1200, \"height\": 1600}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fsgwcrjwp8/fig-006.webp\", \"caption\": \"\", \"page\": 2, \"index\": 6, \"width\": 1600, \"height\": 1200}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fsgwcrjwp8/fig-007.webp\", \"caption\": \"\", \"page\": 2, \"index\": 7, \"width\": 1600, \"height\": 1199}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fsgwcrjwp8/fig-008.webp\", \"caption\": \"\", \"page\": 2, \"index\": 8, \"width\": 1200, \"height\": 1600}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fsgwcrjwp8/fig-009.webp\", \"caption\": \"\", \"page\": 4, \"index\": 9, \"width\": 2048, \"height\": 1536}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fsgwcrjwp8/fig-010.webp\", \"caption\": \"\", \"page\": 4, \"index\": 10, \"width\": 1939, \"height\": 1453}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fsgwcrjwp8/fig-011.webp\", \"caption\": \"\", \"page\": 4, \"index\": 11, \"width\": 2048, \"height\": 1536}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fsgwcrjwp8/fig-012.webp\", \"caption\": \"\", \"page\": 4, \"index\": 12, \"width\": 512, \"height\": 512}, {\"url\": \"assets/figures/openreview/openreview-neurips-2025-fsgwcrjwp8/fig-013.webp\", \"caption\": \"\", \"page\": 4, \"index\": 13, \"width\": 512, \"height\": 512}]"
motivation: 现有推荐系统依赖用户交互日志，不普适且缺乏多模态信息，探索利用视觉历史进行个性化。
method: 提出VisualLens框架，利用多模态大语言模型从用户日常图像中提取并精炼用户画像，用于个性化推荐。
result: 实验证明VisualLens在多种推荐任务上有效，验证了视觉历史作为个性化信号的潜力。
conclusion: 利用任务无关的视觉历史结合多模态大语言模型可实现有效的个性化推荐。
---

## Abstract
Existing recommendation systems either rely on user interaction logs, such as online shopping history for shopping recommendations, or focus on text signals. 
However, item-based histories are not always accessible and generalizable for multimodal recommendation.
We hypothesize that a user's visual history --- comprising images from daily life --- can offer rich, task-agnostic insights into their interests and preferences, and thus be leveraged for effective personalization.
To this end, we propose VisualLens, a novel framework that leverages multimodal large language models (MLLMs) to enable personalization using task-agnostic visual history.
VisualLens extracts, filters, and refines a spectrum user profile from the visual history to support personalized recommendation.
We created two new benchmarks, Google-Review-V and Yelp-V, with task-agnostic visual histories, and show that VisualLens improves over state-of-the-art item-based multimodal recommendations by 5-10\% on Hit@3, and outperforms GPT-4o by 2-5\%.
Further analysis shows that VisualLens is robust across varying history lengths and excels at adapting to both longer histories and unseen content categories.

---

## 论文详细总结（自动生成）

# VisualLens：通过任务无关视觉历史实现个性化推荐 —— 论文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **现有推荐系统的局限**：大多数推荐系统依赖用户交互日志（如购物历史）或文本信号，缺乏对多模态信息的利用；且基于物品的历史不总是可获取，也难以泛化到跨域推荐。
- **核心想**法：用户的**视觉历史**（日常生活中的图像）能够提供丰富、任务无关的偏好信号，可用于个性化推荐。
- **目标**：探索如何利用用户的视觉历史来理解偏好，实现更通用的个性化推荐，而无需领域特定的交互日志。
- **挑战**：视觉历史多样且嘈杂（包含无关图像、非信息元素）；主流多模态大语言模型（MLLMs）只能处理有限数量的图像；缺乏现有的评估基准。

## 2. 方法论：核心思想、关键技术细节

**核心思想**：将用户的视觉历史压缩为“频谱用户画像”，并通过检索、网格化、联合训练实现高效的个性化推荐。

**框架流程（VisualLens）**：

### 2.1 离线阶段：用户画像生成
- 对每个图像生成**三元组**：(原始图像, 标题, 方面词)
  - **标题**：使用冻结的 LLaVA-v1.6-8B 生成简洁描述（≤30词）。
  - **方面词**：使用 MiniCPM-V2.5 生成关键词列表（如“museum, dome, bench”）。
- 通过**迭代精炼**过程（Llama-3.1-70B 驱动，约4轮）优化方面词，使其更贴合用户偏好。
- 图像编码使用 CLIP ViT-L/14@336px 用于后续检索。

### 2.2 在线阶段：运行时推荐
1. **历史检索**：根据查询类别，使用余弦相似度从用户历史中检索 top-w 相关图像（w=64，形成8×8网格）。
2. **偏好画像生成**：将检索到的图像网格化为单张图片（d×d网格），并拼接标题和方面词作为文本描述，形成查询特定的用户画像。
3. **候选匹配**：将用户画像与每个候选物品（名称+描述+图像）拼接，送入多模态候选预测器，输出匹配分数用于排序。使用特殊 token `<I1>`...`<I100>` 标识候选。

### 2.3 训练策略
- **多图像标题预训练**：在 DOCCI 数据集上对模型进行 LoRA 继续预训练，使其能处理网格化输入。
- **方面词迭代精炼**：使用 Llama-3.1-70B 迭代筛选方面词，收敛后作为训练目标。
- **联合训练**：同时优化方面词生成（交叉熵损失）和候选匹配（二元交叉熵损失），平衡参数 λ=2。

## 3. 实验设计

### 3.1 数据集与基准
- **创建了两个新基准**：
  - **Google Review-V**：基于 Google Local Review 数据，包含15.69M训练样本，66个类别，平均157张图像/用户。
  - **Yelp-V**：基于 Yelp 公开数据集，4.12M训练样本，35个类别，平均264张图像/用户。
- **任务形式**：类别推荐问题（如“推荐附近的博物馆”）。每个问题关联一个用户的视觉历史（时间顺序，任务无关）和候选集（30-100个附近同类别商家），未来评过的为 ground truth。
- **三种测试划分**：默认按**用户ID**划分（训练/测试用户无重叠）；另设**更长历史**和**未见类别**测试集。

### 3.2 对比方法
- **简单基线**：随机排序、按评分排序。
- **微调模型**：UniMP (3B)、Llama-3.1-8B-Instruct（仅文本）、PaliGemma (3B)、MiniCPM-V2.5 (8B)。
- **直接推理模型**：Llama-3.1-70B-Instruct（仅文本）、GPT-4o（多模态）。
- **人类标注**：从测试集随机抽取50个样本由作者手工标注作为人类 oracle。

### 3.3 评测指标
- **Hit@k**（k=1,3,10）：第一个相关物品的排名是否在 top-k 内。
- **MRR**：平均倒数排名。

## 4. 资源与算力

论文明确说明：
- GPU：8 × NVIDIA **H100**（训练阶段）。
- 批量大小：8，梯度累积步数：8。
- 学习率：1e-3，LoRA rank=16（PaliGemma）/64（MiniCPM），LoRA alpha=16/64。
- 未给出训练总时长（epoch数）的具体数字，但可推断为在8卡H100上数小时级别。

## 5. 实验数量与充分性

- **主要对比实验**（表3）：涵盖10种方法+人类 oracle，在2个数据集上评估5个指标，共约100+个数值。
- **消融实验**（表4）：7组变体，系统性地去除检索、标题、方面词、联合训练、迭代精炼等组件，验证各部分贡献。
- **转移性实验**（表5）：三种数据划分（长历史、跨类别、跨用户），验证泛化能力。
- **鲁棒性分析**（图3-4）：候选数量、历史图像数量、类别分布的影响，并报告统计显著性（p-value < 0.04）。
- **定性分析**（附录）：展示成功/失败案例。
- **跨域泛化**（附录表7）：在Google Review-V和Yelp-V之间的迁移测试。
- **延迟评测**（附录表8）：对比VisualLens与UniMP的推理时间。

**评估**：实验设计全面、公平，消融充分，统计显著性明确，同时覆盖了多个维度的鲁棒性和转移性，具有较高可信度。

## 6. 主要结论与发现

1. **有效性**：VisualLens 显著优于所有基线，Hit@10 达82-91%，Hit@3 超过 GPT-4o 约 1.6-4.6%，MRR 提升明显。
2. **组件贡献**：历史检索最为关键（移除后 Hit@3 下降7-12%）；方面词比标题更重要；联合训练和迭代精炼均带来提升。
3. **转移性**：模型能良好泛化到更长历史、未见类别和新用户，跨数据集迁移仍保持较好性能。
4. **鲁棒性**：随历史增长 MRR 上升并趋于饱和；候选数量超过50后性能收敛；对类别之间的知识迁移（如“delivery”受益于“restaurant”）表现良好。
5. **效率**：3B 模型推理时间约5.3秒/例，比 UniMP 快约0.5秒。

## 7. 优点

- **创新性**：首次提出利用**任务无关的视觉历史**进行个性化推荐，打破了传统推荐对交互日志的依赖。
- **框架设计**：模块化、可扩展（每个组件可替换为更强模型），频谱用户画像平衡了信息丰富性与语义清晰度。
- **训练策略**：迭代精炼方面词 + 联合训练，有效提升了方面词的质量和推荐准确性。
- **基准贡献**：公开两个大规模多模态推荐基准，填补了评估空白。
- **实验充分**：覆盖多种基线、消融、转移性、鲁棒性分析，可靠性高。

## 8. 不足与局限

- **模态覆盖有限**：仅使用静态图像，未涉及视频、音频、多模态叙事等更丰富的日常记录形式。
- **评估范围受限**：仅考察类别推荐问答形式，未覆盖排序列表、交互式对话、隐式反馈等常见推荐场景。
- **组件并非最优**：使用统一的骨干模型（PaliGemma/MiniCPM）而非为每个子任务选择最佳模型，可能存在性能提升空间。
- **数据隐私风险**：用户视觉历史可能包含敏感信息，论文仅提及未来可采用联邦学习等隐私保护技术，未在当前实验中对隐私进行专门处理。
- **社会影响**：可能强化偏见（如过度拟合地理位置或美学特征），需引入公平性审计和透明机制。

（完）
