---
title: Demystifying Long Chain-of-Thought Reasoning
title_zh: 揭秘长链式思维推理
authors: "Shiming Yang, Yuxuan Tong, Xinyao Niu, Graham Neubig, Xiang Yue"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=OLodUbcWjB"
score: 0.0
evidence: 不相关
tldr: 不相关
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 不相关。
method: 不相关。
result: 不相关。
conclusion: 不相关。
---

## Abstract
Scaling inference compute has become a key driver of advanced reasoning in large language models (LLMs). A proven approach for scaling inference compute is to generate long chains-of-thought (CoTs), enabling models to engage in structured reasoning strategies such as backtracking and error correction. Reinforcement learning (RL) has emerged as a crucial method for developing these capabilities, yet the conditions under which long CoTs emerge remain unclear, and RL training requires careful design choices. In this study, we systematically investigate the underlying *mechanics of long CoT reasoning*—examining the factors that enable models to generate extended reasoning trajectories. Through extensive supervised fine-tuning (SFT) and RL experiments, we identify three key findings: 1) while SFT is not strictly necessary, it significantly simplifies training and improves efficiency; 2) reasoning capabilities tend to emerge with increased training compute but are not guaranteed, making reward shaping essential for stabilizing CoT length growth; and 3) scaling verifiable reward signals is critical for RL, and we find that leveraging noisy, web-extracted solutions with filtering mechanisms shows promising potential, particularly in out-of-distribution (OOD) reasoning tasks such as STEM problem-solving. These insights provide practical guidance for optimizing training strategies to enhance long CoT reasoning in LLMs.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
不相关。

### 2. 核心内容
不相关。

### 3. 对应检索需求
当前结果未记录具体命中的检索需求。

### 4. 来源与原文
- Source：ICML-2025-Accepted
- OpenReview：[https://openreview.net/forum?id=OLodUbcWjB](https://openreview.net/forum?id=OLodUbcWjB)
