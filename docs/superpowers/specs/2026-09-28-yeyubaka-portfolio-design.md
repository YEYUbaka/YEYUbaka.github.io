# YEYUbaka 个人网站参考架构迁移设计

日期：2026-09-28  
状态：设计已确认，进入实现

## 1. 目标

本次只重做 `E:\\AI_projects\\YEYUbaka.github.io` 的个人网站视觉与页面架构。目标不是继续在上一版自定义单页上叠加 CSS，而是以 `xy200303/xy200303.github.io` 的实际作品集架构为基线，迁移它已经验证过的导航、星空背景、卡片、滚动入场、筛选和项目详情交互，再替换为 YEYUbaka 的真实定位与项目内容。

个人定位保持：

> AI 专业学生｜测试开发方向｜Python 实践者

`LocalRAG` 必须是首页精选作品的第一项，也必须出现在项目详情页和 README 的主要展示位置。

## 2. 参考基线与实现边界

参考仓库：<https://github.com/xy200303/xy200303.github.io>
参考提交：`06975c7`（Vite + React 作品集站）

参考仓库当前未发现 `LICENSE`，因此本项目不直接复制其源码、文案或图片资产。实现方式是复用已经观察到的信息架构和交互模式，在 YEYUbaka 的仓库中用独立代码重实现：

- 保留 `Nav / Starfield / Reveal / SectionHeader / Badge / ProjectCard` 这类职责边界；
- 保留 HashRouter 下的首页、项目详情和方向页结构；
- 保留深色噪点、星空、细描边、渐变封面、卡片 spotlight 和滚动入场这些视觉语言；
- 所有个人信息、项目文案、链接、标签和封面配色替换为 YEYUbaka 内容；
- 不照搬参考页的姓名、统计数字、论文、专利、经历、外部账号或项目数据。

## 3. 页面信息架构

### 3.1 共享壳层

- 固定顶部导航：品牌 `YEYUbaka.`、作品、方向、GitHub。
- 全局低密度星空 Canvas，尊重 `prefers-reduced-motion`。
- 全局卡片鼠标 spotlight，移动端不依赖 hover 才能理解内容。
- Footer 保留 GitHub、邮箱和源码入口。

### 3.2 首页 `/`

1. **Hero**：头像/品牌、`YEYUbaka`、`AI Student · Test Development · Python`、简短中文简介、查看作品和 GitHub 按钮。
2. **精选项目**：参考页的分组标题、分类筛选、三列卡片布局；`LocalRAG` 第一张并使用核心项目标记。
3. **实践方向**：测试开发、Python 工程、AI 应用三个方向，替代参考页中与用户无关的开源贡献数据。
4. **当前学习**：接口测试、自动化测试、测试工具开发、RAG/AI 应用，保持短列表，不编造履历。
5. **联系与 Footer**：GitHub、公开邮箱、源码仓库。

### 3.3 项目详情 `/works/:id`

沿用参考页的项目详情结构：渐变项目头部、分类、标签、仓库链接、背景与定位、实现范围、可核验亮点、上一个/下一个项目。没有事实依据的成果数字统一不写。

### 3.4 方向页 `/resume`

不伪造简历、奖项或工作经历。页面只展示个人定位、测试开发能力、Python/AI 技术栈和当前学习重点，作为参考页“简历”入口的轻量替代；导航文案使用“方向”，避免暗示存在未准备的正式简历。

## 4. 视觉与交互

- 背景：参考页同类的近黑色 `#050507`，叠加低透明度噪点与低密度星空。
- 强调：单一冰蓝 `#8cc8ff`，项目封面允许使用克制的蓝紫、青绿渐变以区分项目。
- 面板：近黑浮层、1px 发丝边框、轻阴影、12–16px 圆角。
- 字体：系统无衬线负责中文正文，等宽字体负责导航、标签、编号；标题可使用克制的衬线斜体副标题接近参考页层次。
- 动效：首屏 reveal、IntersectionObserver 滚动进入、卡片 hover 位移/spotlight；禁用动效后内容和导航仍完整可用。
- 响应式：宽屏三列项目卡片，平板两列，手机单列；移动端导航支持打开、点击关闭和 Escape 关闭。
- 可访问性：语义化 heading/section/nav，清晰 focus-visible，外链使用 `target` 与 `rel`，按钮提供 `aria-label` 和 `aria-expanded`。

## 5. 数据真实性

精选项目固定为：

1. `LocalRAG`：本地优先的 RAG 个人知识库系统，公开仓库描述涉及 React/TypeScript/Vite、FastAPI/Python、ChromaDB、Embedding/Reranker 与 BM25/RRF 混合检索。
2. `AI-learning-companion`：基于 FastAPI 与 React 的 AI 个性化学习平台。
3. `doubanspider`：豆瓣电影信息爬取、数据分析与可视化项目。

只写公开仓库可核验的定位和工程范围，不加入未经独立验证的性能数字、实验结论、奖项、工作经历、star 数或虚构演示地址。

## 6. 验收标准

- 首页视觉结构与参考页同源：固定导航、星空/噪点、Hero 层次、分类筛选、渐变项目卡片、滚动入场和 spotlight 均可见且克制。
- `LocalRAG` 在首页精选作品中第一位，卡片和详情页均链接到 <https://github.com/YEYUbaka/LocalRAG>。
- 三个项目均有详情路由、真实仓库链接和可核验描述。
- 桌面端、移动端和移动导航交互可用；键盘焦点与 reduced motion 可用。
- `npm test`、`npm run build` 通过；浏览器检查无明显控制台错误和资源 404。
- GitHub Pages workflow 继续从 `main` 构建并部署，线上页面内容与本地验证一致。
