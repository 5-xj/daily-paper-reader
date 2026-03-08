<p align="center">
  <img src="others/LOGO.png" alt="Daily Paper Reader Logo" width="720" />
</p>

<h2 align="center">Your Daily Companion for Discovering and Reading AI Papers</h2>

<p align="center">
  <a href="https://github.com/ziwenhahaha/daily-paper-reader/stargazers">
    <img src="https://img.shields.io/github/stars/ziwenhahaha/daily-paper-reader?style=flat-square" alt="Stars" />
  </a>
  <a href="https://github.com/ziwenhahaha/daily-paper-reader/network/members">
    <img src="https://img.shields.io/github/forks/ziwenhahaha/daily-paper-reader?style=flat-square" alt="Forks" />
  </a>
  <a href="https://github.com/ziwenhahaha/daily-paper-reader/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/ziwenhahaha/daily-paper-reader?style=flat-square" alt="License" />
  </a>
  <a href="https://ziwenhahaha.github.io/daily-paper-reader">
    <img src="https://img.shields.io/badge/Demo-GitHub%20Pages-2ea44f?style=flat-square" alt="Demo" />
  </a>
  <a href="https://ziwenhahaha.github.io/daily-paper-reader/#/newbie/README">
    <img src="https://img.shields.io/badge/Docs-Quick%20Start-blue?style=flat-square" alt="Docs" />
  </a>
</p>



## 🖼️ 界面预览

![Daily Paper Reader 界面预览](others/demo2.png)

## 📰 News

- **2026-03-07** 🎨 更新首页与 README 展示文案，补充界面预览图，完善项目对外说明。
- **2026-03-06** 🛠️ 修复 LLM refine 补分与组合 query 打分逻辑，并补上回归测试；新增首页使用教程入口并修复移动端导航与教程路由。
- **2026-03-05** 🚀 后台面板新增 30 天标准快速抓取入口，加入指定 arXiv 论文逐阶段命中追踪；向量召回改为 exact 优先并增加 ANN 低密度回退。
- **2026-03-04** 🧹 新增内容重置工作流入口，后台支持更安全地重建初始内容与站点数据。
- **2026-02-20** ✨ 日报输出新增 AI 简报与评分展示；Zotero Action 改进为支持批量处理与 Better Notes 公式来源。
- **2026-02-08** 🔗 支持 Supabase 向量同步，并优先复用用户侧预置 embedding，补齐公开数据同步链路。
- **2026-02-07** 🎛️ 优化后台管理面板交互与布局，订阅面板向单路多关键词召回演进。
- **2026-02-06** 🧠 重构推荐链路，引入 smart query、布尔检索与订阅规划模块，并补上对应测试。
- **2026-01-24** 👀 新增 workflow 监视面板，便于直接查看后台任务运行状态。
- **2026-01-11** 📝 补齐第 6 步论文总结模块，打通每日推荐结果到文档生成的闭环。
- **2026-01-10** 🧱 推荐系统大改版，alias 统一为 tag，召回、排序与 LLM refine 链路拆分成独立步骤。
- **2025-12-31** 🧭 新增统一引导面板，把主要设置集中到同一个入口。
- **2025-12-29** 🌐 项目切换到纯前端架构，订阅、配置与 GitHub Token 管理前置到浏览器端。
- **2025-12-23** 🧩 首页与侧边栏完成模块化拆分，同时将大模型接口迁到前端，界面交互开始成型。
- **2025-12-22** 🍴 调整为 Fork 即用版本，进一步降低自部署门槛。
- **2025-12-17** 🌱 最小可运行版本落地，并完成早期 Zotero Connector 集成。

## ✨ Why Daily Paper Reader?

- **🔎 Daily Paper Radar**：每日自动抓取 arXiv / OpenReview 新论文，持续追踪研究前沿。
- **🎯 Personalized Feed**：基于关键词、研究方向与兴趣生成个性化推荐流。
- **💬 Read + Ask in One Place**：支持沉浸式阅读与 AI 论文问答，边读边问。
- **🚀 Zero-Server Deployment**：依托 GitHub Actions 自动更新、GitHub Pages 部署，无需额外服务器。
- **🛠️ Fork-and-Run**：Fork 后完成少量配置，即可上线自己的论文主页。

## 🧭 你可以把它用在哪里？

- **🎓 个人论文雷达**：持续追踪自己研究方向的新论文
- **🧪 实验室主页**：沉淀团队关注的论文脉络与阅读结果
- **📚 日常阅读工作台**：把发现、阅读、问答、总结集中到一个入口

## ⚙️ Workflow Architecture

```mermaid
flowchart LR
    subgraph Frontend[前端链路]
        A[订阅关键词 / 研究方向 / Intent Queries]
        B[前端管理面板]
        C[保存配置到仓库]
        D[站点阅读 / AI 问答 / 持续追踪]
    end

    subgraph Backend[GitHub 后端链路]
        E[GitHub Actions 定时运行 / 手动触发]
        F[抓取 arXiv / OpenReview 新论文]
        G[召回 / 过滤 / 推荐排序 / LLM 精炼]
        H[生成日报 / 论文页 / Sidebar]
        I[GitHub Pages 自动发布]
    end

    A --> B --> C --> E
    E --> F --> G --> H --> I --> D
    B -. 手动快速抓取 .-> E
```

## ⚡ 5 分钟内你能得到什么

| 能力 | 说明 |
| --- | --- |
| 🔎 每日新论文发现 | 自动抓取 arXiv / OpenReview 最新论文 |
| 🎯 个性化推荐流 | 按研究方向、关键词、兴趣推送 |
| 📖 沉浸式阅读 | 快速查看摘要、链接与关键信息 |
| 🤖 AI 论文问答 | 支持边读边问，辅助理解论文 |
| 🔄 自动更新 | GitHub Actions 定时运行，无需手动维护 |
| 🚀 一键部署 | GitHub Pages 发布，无需单独服务器 |

## 👥 适合谁使用

- 🎓 想持续追踪某个研究方向的学生、研究者和工程师
- 🧑‍💻 想搭建私人论文推荐站点、实验室论文主页或阅读面板的开发者
- 🧠 想把「发现论文 → 阅读论文 → 提问总结」放到同一工作流的人

## 🚀 5 分钟快速启动

> [!TIP]
> 先准备一个大模型 API Key 和一个 GitHub PAT，之后完成 Fork、开启 Actions、开启 Pages 即可。

### 1) 🔑 准备大模型 API Key

当前 README 默认以 **柏拉图 API 平台** 为示例，建议先按默认配置跑通。

- 🌐 打开 [柏拉图 API 平台](https://api.bltcy.ai/)
- 📝 完成注册 / 登录
- 🔐 充值并创建密钥

### 2) 🪪 准备 GitHub PAT

打开 [GitHub 新建 PAT 页面](https://github.com/settings/tokens/new?type=beta&scopes=repo,workflow,gist)，勾选以下权限：

- ✅ `repo`
- ✅ `workflow`
- ✅ `gist`

### 3) 🍴 Fork 本仓库

Fork 到自己的 GitHub 账号下，建议仓库名保持 `daily-paper-reader` 不变。

### 4) ▶️ 开启 GitHub Actions

进入你 Fork 的仓库，点击顶部 `Actions`，启用 `daily-paper-reader` 工作流。

### 5) 🌍 开启 GitHub Pages

进入 `Settings → Pages`：

- ⚙️ Source 选择 `Deploy from a branch`
- 🌿 Branch 选择 `main`
- 📁 Folder 选择 `/(root)`

保存后等待约 1 分钟，站点地址会显示在页面顶部。

### 6) ✅ 打开站点验收

访问：

```text
https://<你的用户名>.github.io/daily-paper-reader
```

后续日常使用和配置，基本都可以在网页端完成。

## ❓ FAQ

### 💻 需要服务器吗？

不需要。项目基于 **GitHub Actions + GitHub Pages** 运行和部署。

### 🎛️ 可以做哪些个性化配置？

你可以调整订阅关键词、研究方向、查询意图与日常阅读偏好，构建自己的论文推荐流。

### 👨‍🔬 适合实验室或团队一起用吗？

可以。它很适合做实验室公共论文面板，或者作为团队内部的论文发现与阅读入口。


## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=ziwenhahaha/daily-paper-reader&type=Date)](https://star-history.com/#ziwenhahaha/daily-paper-reader&Date)
