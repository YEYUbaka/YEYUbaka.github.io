# YEYUbaka Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 更新 YEYUbaka 的 Profile README，并创建一个以 LocalRAG 为首个精选项目的深色极简个人作品集网站。

**Architecture:** Profile README 作为独立的 GitHub Markdown 内容交付；个人网站采用 React + TypeScript + Vite 的单页应用，使用本地数据文件驱动 Hero、方向、项目、学习路线和联系方式区块。网站不依赖运行时后端或 GitHub API，项目卡片只链接到已核验的公开仓库。

**Tech Stack:** React 19, TypeScript, Vite, 原生 CSS 变量与响应式媒体查询，Vitest 进行数据契约测试，GitHub Actions + GitHub Pages 负责构建发布。

## Global Constraints

- 主定位固定为“AI 专业学生｜测试开发方向｜Python 实践者”。
- LocalRAG 必须是 Profile README 和网站精选项目的第一项，链接为 https://github.com/YEYUbaka/LocalRAG。
- 三个首版精选项目固定为 LocalRAG、AI-learning-companion、doubanspider，描述必须以对应公开仓库当前事实为准。
- 不写入未独立验证的评测数字、实验结论、奖项、工作经历或虚构 Demo 地址。
- 网站采用近黑背景、单一冰蓝/青蓝强调色、细边框卡片和克制微交互；不复制参考站点的文案或资产。
- 网站为单页滚动结构，不创建内容为空的独立简历页、后台或运行时数据服务。
- 页面必须支持移动端、键盘焦点和 prefers-reduced-motion。
- 所有计划文件保存在 E:\AI_projects\YEYUbaka.github.io\plans\。
- 不修改 E:\AI_projects\LocalRAG；只读取它的公开说明作为作品集事实来源。

---

## 文件结构与职责

### Profile README 工作副本

- E:\AI_projects\YEYUbaka-profile\README.md：GitHub Profile 的精简展示内容。

### Website

- E:\AI_projects\YEYUbaka.github.io\package.json：开发、测试、构建脚本与依赖。
- E:\AI_projects\YEYUbaka.github.io\tsconfig.json：TypeScript 项目引用入口。
- E:\AI_projects\YEYUbaka.github.io\tsconfig.app.json：浏览器应用 TypeScript 配置。
- E:\AI_projects\YEYUbaka.github.io\tsconfig.node.json：Vite 配置 TypeScript 配置。
- E:\AI_projects\YEYUbaka.github.io\index.html：Vite 入口和页面元信息。
- E:\AI_projects\YEYUbaka.github.io\vite.config.ts：Vite 配置。
- E:\AI_projects\YEYUbaka.github.io\src\main.tsx：React 根节点和样式导入。
- E:\AI_projects\YEYUbaka.github.io\src\App.tsx：单页区块编排和全局交互状态。
- E:\AI_projects\YEYUbaka.github.io\src\data\profile.ts：姓名、定位、方向、学习路线、联系方式。
- E:\AI_projects\YEYUbaka.github.io\src\data\projects.ts：三个精选项目的事实数据和链接。
- E:\AI_projects\YEYUbaka.github.io\src\components\：页面区块组件。
- E:\AI_projects\YEYUbaka.github.io\src\styles\tokens.css：颜色、字体、间距、圆角、动效变量。
- E:\AI_projects\YEYUbaka.github.io\src\styles\global.css：布局、卡片、可访问性和响应式规则。
- E:\AI_projects\YEYUbaka.github.io\src\data\content.test.ts：内容真实性和链接契约测试。
- E:\AI_projects\YEYUbaka.github.io\vitest.config.ts：Vitest 配置。
- E:\AI_projects\YEYUbaka.github.io\.github\workflows\deploy.yml：GitHub Pages 构建发布工作流。
- E:\AI_projects\YEYUbaka.github.io\README.md：网站本地开发、构建和发布说明。

---

### Task 1: Prepare the Profile README work copy

**Files:**
- Create directory: E:\AI_projects\YEYUbaka-profile\
- Modify: E:\AI_projects\YEYUbaka-profile\README.md

**Interfaces:**
- Consumes: public repository https://github.com/YEYUbaka/YEYUbaka.git.
- Produces: concise Markdown profile with the agreed positioning and three featured project links.

- [ ] **Step 1: Clone the profile repository and verify the checkout**

Run:

~~~powershell
git clone https://github.com/YEYUbaka/YEYUbaka.git E:\AI_projects\YEYUbaka-profile
git -C E:\AI_projects\YEYUbaka-profile status --short --branch
~~~

Expected: checkout succeeds, the worktree is clean, and the default branch is reported.

- [ ] **Step 2: Replace the README with the concise profile content**

Write E:\AI_projects\YEYUbaka-profile\README.md with this content:

~~~markdown
# Hi, I'm YEYUbaka 👋

### AI Student · Test Development · Python

我是一名人工智能专业学生，当前专注于测试开发、Python 工程和 AI 应用实践。

## Focus

- 接口测试与自动化测试
- 测试工具开发与工程化实践
- Python 后端与 AI 应用

## Featured Projects

- [LocalRAG](https://github.com/YEYUbaka/LocalRAG) — 本地优先的 RAG 个人知识库系统，结合向量检索、BM25/RRF 和本地 Embedding/Reranker。
- [AI-learning-companion](https://github.com/YEYUbaka/AI-learning-companion) — 基于 FastAPI 与 React 的 AI 个性化学习平台。
- [doubanspider](https://github.com/YEYUbaka/doubanspider) — 豆瓣电影信息爬取、数据分析与可视化项目。

## Toolkit

Python · C · FastAPI · React · TypeScript
JMeter · Postman · Apifox · MySQL · Git

## Currently

- 持续提升接口测试、自动化测试和测试工具开发能力
- 学习 Python 工程实践与 AI 应用开发
- 寻找测试开发、Python 或 AI 相关项目合作

## Connect

- GitHub: [@YEYUbaka](https://github.com/YEYUbaka)
- Email: [yeyubaka@foxmail.com](mailto:yeyubaka@foxmail.com)
~~~

- [ ] **Step 3: Validate Markdown links and content boundaries**

Run:

~~~powershell
git -C E:\AI_projects\YEYUbaka-profile diff --check
rg -n "LocalRAG|AI-learning-companion|doubanspider|Test Development|测试开发" E:\AI_projects\YEYUbaka-profile\README.md
rg -n "访客|Achievements|Activity Graph|TODO|TBD|软件测试" E:\AI_projects\YEYUbaka-profile\README.md
~~~

Expected: the first two commands succeed; the final command returns no matches.

- [ ] **Step 4: Commit the README-only change**

Run:

~~~powershell
git -C E:\AI_projects\YEYUbaka-profile add -- E:\AI_projects\YEYUbaka-profile\README.md
git -C E:\AI_projects\YEYUbaka-profile commit -m "docs: refine profile README"
~~~

Expected: one commit contains only README.md.

---

### Task 2: Scaffold the website and test harness

**Files:**
- Create: E:\AI_projects\YEYUbaka.github.io\package.json
- Create: E:\AI_projects\YEYUbaka.github.io\tsconfig.json
- Create: E:\AI_projects\YEYUbaka.github.io\tsconfig.app.json
- Create: E:\AI_projects\YEYUbaka.github.io\tsconfig.node.json
- Create: E:\AI_projects\YEYUbaka.github.io\index.html
- Create: E:\AI_projects\YEYUbaka.github.io\vite.config.ts
- Create: E:\AI_projects\YEYUbaka.github.io\vitest.config.ts
- Create: E:\AI_projects\YEYUbaka.github.io\src\main.tsx
- Create: E:\AI_projects\YEYUbaka.github.io\src\App.tsx
- Create: E:\AI_projects\YEYUbaka.github.io\src\data\profile.ts
- Create: E:\AI_projects\YEYUbaka.github.io\src\data\projects.ts
- Create: E:\AI_projects\YEYUbaka.github.io\src\data\content.test.ts

**Interfaces:**
- profile.ts exports profile, focusItems, learningItems, and contactLinks.
- projects.ts exports projects, with projects[0].slug equal to localrag.
- App.tsx consumes those exports and renders the section components created in later tasks.

- [ ] **Step 1: Add the minimal package scripts and dependencies**

package.json must contain these pinned compatibility ranges:

~~~json
{
  "name": "yeyubaka-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest run"
  },
  "dependencies": {
    "react": "^19.2.7",
    "react-dom": "^19.2.7"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^5.0.4",
    "@types/react": "^19.2.0",
    "@types/react-dom": "^19.2.0",
    "typescript": "~5.9.3",
    "vite": "^7.3.5",
    "vitest": "^3.2.4"
  }
}
~~~

Run npm install from E:\AI_projects\YEYUbaka.github.io and commit the generated lockfile with the package file.

The TypeScript project files must contain:

~~~json
// tsconfig.json
{
  "files": [],
  "references": [{ "path": "./tsconfig.app.json" }, { "path": "./tsconfig.node.json" }]
}

// tsconfig.app.json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}

// tsconfig.node.json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2023",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "strict": true
  },
  "include": ["vite.config.ts", "vitest.config.ts"]
}
~~~

vite.config.ts must export defineConfig with the React plugin, and vitest.config.ts must export defineConfig with test.environment set to node.

- [ ] **Step 2: Add data contracts and the first failing content test**

Use this exact project type:

~~~typescript
export type Project = {
  slug: string
  name: string
  description: string
  tags: string[]
  url: string
}
~~~

E:\AI_projects\YEYUbaka.github.io\src\data\content.test.ts must assert:

~~~typescript
import { describe, expect, it } from 'vitest'
import { projects } from './projects'

describe('portfolio content', () => {
  it('keeps LocalRAG as the first featured project', () => {
    expect(projects[0].slug).toBe('localrag')
    expect(projects[0].url).toBe('https://github.com/YEYUbaka/LocalRAG')
  })

  it('uses only the three approved public projects', () => {
    expect(projects.map((project) => project.slug)).toEqual([
      'localrag',
      'ai-learning-companion',
      'doubanspider',
    ])
  })
})
~~~

- [ ] **Step 3: Run the content test before implementation**

Run npm test -- --run src/data/content.test.ts.

Expected: FAIL only because the data modules are not yet implemented; it must not fail because of a package installation error.

- [ ] **Step 4: Implement the verified profile and project data**

projects.ts must export exactly three entries in this order:

~~~typescript
export const projects: Project[] = [
  {
    slug: 'localrag',
    name: 'LocalRAG',
    description: '本地优先的 RAG 个人知识库系统，结合向量检索、BM25/RRF 和本地 Embedding/Reranker。',
    tags: ['FastAPI', 'React', 'ChromaDB', 'BM25/RRF'],
    url: 'https://github.com/YEYUbaka/LocalRAG',
  },
  {
    slug: 'ai-learning-companion',
    name: 'AI-learning-companion',
    description: '基于 FastAPI 与 React 的 AI 个性化学习平台。',
    tags: ['FastAPI', 'React', 'AI'],
    url: 'https://github.com/YEYUbaka/AI-learning-companion',
  },
  {
    slug: 'doubanspider',
    name: 'doubanspider',
    description: '豆瓣电影信息爬取、数据分析与可视化项目。',
    tags: ['Python', '爬虫', '数据可视化'],
    url: 'https://github.com/YEYUbaka/doubanspider',
  },
]
~~~

profile.ts must expose the title AI Student · Test Development · Python, three focus items (测试开发、Python 工程、AI 应用), four learning items (接口测试、自动化测试、Python 工程、AI 应用), and the public GitHub/email links used by the README.

- [ ] **Step 5: Run the content test after implementation**

Run npm test -- --run src/data/content.test.ts.

Expected: 2 tests pass.

- [ ] **Step 6: Commit the scaffold and content contract**

Run:

~~~powershell
git -C E:\AI_projects\YEYUbaka.github.io add -- E:\AI_projects\YEYUbaka.github.io\package.json E:\AI_projects\YEYUbaka.github.io\package-lock.json E:\AI_projects\YEYUbaka.github.io\tsconfig.json E:\AI_projects\YEYUbaka.github.io\tsconfig.app.json E:\AI_projects\YEYUbaka.github.io\tsconfig.node.json E:\AI_projects\YEYUbaka.github.io\index.html E:\AI_projects\YEYUbaka.github.io\vite.config.ts E:\AI_projects\YEYUbaka.github.io\vitest.config.ts E:\AI_projects\YEYUbaka.github.io\src
git -C E:\AI_projects\YEYUbaka.github.io commit -m "feat: scaffold portfolio content model"
~~~

---

### Task 3: Build the single-page portfolio layout

**Files:**
- Create: E:\AI_projects\YEYUbaka.github.io\src\components\SiteHeader.tsx
- Create: E:\AI_projects\YEYUbaka.github.io\src\components\HeroSection.tsx
- Create: E:\AI_projects\YEYUbaka.github.io\src\components\FocusSection.tsx
- Create: E:\AI_projects\YEYUbaka.github.io\src\components\ProjectGrid.tsx
- Create: E:\AI_projects\YEYUbaka.github.io\src\components\LearningSection.tsx
- Create: E:\AI_projects\YEYUbaka.github.io\src\components\ContactSection.tsx
- Create: E:\AI_projects\YEYUbaka.github.io\src\components\SiteFooter.tsx
- Modify: E:\AI_projects\YEYUbaka.github.io\src\App.tsx

**Interfaces:**
- Every component renders semantic section elements with stable IDs: top, focus, projects, learning, contact.
- ProjectGrid consumes projects: Project[] and renders one external-link card per item.
- SiteHeader toggles a mobile menu with aria-expanded, closes it after an anchor click, and closes it on Escape.

- [ ] **Step 1: Implement the header and mobile navigation**

Use a button with aria-label, aria-expanded, and an is-open class. The nav links target #focus, #projects, #learning, and #contact; no router is needed.

- [ ] **Step 2: Implement Hero and Focus**

Hero copy must contain YEYUbaka, AI Student · Test Development · Python, the confirmed Chinese positioning sentence, and buttons for 查看项目 and GitHub ↗. Focus cards use the three data items from profile.ts.

- [ ] **Step 3: Implement the project grid**

Each project card renders the name, one-sentence description, tags, and external GitHub link with target="_blank" and rel="noreferrer". The first card receives data-featured="true" so CSS gives LocalRAG visual priority without changing content order.

- [ ] **Step 4: Implement Learning, Contact, Footer, and App composition**

Learning shows the four current themes. Contact shows the GitHub URL and public email. App renders sections in this order:

~~~tsx
<SiteHeader />
<main>
  <HeroSection />
  <FocusSection />
  <ProjectGrid projects={projects} />
  <LearningSection />
  <ContactSection />
</main>
<SiteFooter />
~~~

- [ ] **Step 5: Run TypeScript build and content tests**

Run npm test and npm run build.

Expected: all content tests pass and Vite outputs a production dist directory without TypeScript errors.

- [ ] **Step 6: Commit the layout components**

Run git -C E:\AI_projects\YEYUbaka.github.io add -- E:\AI_projects\YEYUbaka.github.io\src\App.tsx E:\AI_projects\YEYUbaka.github.io\src\components then commit with message feat: add portfolio page sections.

---

### Task 4: Apply the visual system and responsive behavior

**Files:**
- Create: E:\AI_projects\YEYUbaka.github.io\src\styles\tokens.css
- Create: E:\AI_projects\YEYUbaka.github.io\src\styles\global.css
- Modify: E:\AI_projects\YEYUbaka.github.io\src\main.tsx

**Interfaces:**
- tokens.css owns all color, spacing, radius, shadow, font, and duration variables.
- global.css owns layout primitives, cards, section spacing, focus styles, responsive breakpoints, and reduced-motion behavior.
- Components do not hard-code page-wide colors or spacing when a token exists.

- [ ] **Step 1: Add visual tokens**

Use this baseline:

~~~css
:root {
  color-scheme: dark;
  --bg: #07090d;
  --surface: #10151d;
  --surface-hover: #151d27;
  --border: rgba(220, 238, 255, 0.12);
  --border-strong: rgba(220, 238, 255, 0.26);
  --text: #f3f7fb;
  --muted: #96a6b8;
  --accent: #8cc8ff;
  --accent-soft: rgba(140, 200, 255, 0.12);
  --font-sans: Inter, "PingFang SC", "Microsoft YaHei", sans-serif;
  --font-mono: "JetBrains Mono", Consolas, monospace;
  --radius: 16px;
  --container: 1120px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
}
~~~

- [ ] **Step 2: Implement global layout and accessibility**

CSS must include a centered .container, section vertical rhythm, .card border/surface, :focus-visible outline, a max-width 760px single-column layout, and a prefers-reduced-motion block that disables transitions and reveal transforms.

- [ ] **Step 3: Add restrained texture and micro-interactions**

Use a low-opacity radial gradient or CSS texture; do not add external images. Card hover may adjust border color and a small radial highlight, but must not cause layout shift.

- [ ] **Step 4: Build and inspect locally**

Run:

~~~powershell
npm run build
npm run dev -- --host 127.0.0.1
~~~

Expected: the dev server starts on an available localhost port, the page loads without missing CSS/JS, and desktop/mobile layout remains readable.

- [ ] **Step 5: Commit the visual system**

Run git -C E:\AI_projects\YEYUbaka.github.io add -- E:\AI_projects\YEYUbaka.github.io\src\main.tsx E:\AI_projects\YEYUbaka.github.io\src\styles then commit with message feat: add dark minimal visual system.

---

### Task 5: Add GitHub Pages delivery and documentation

**Files:**
- Create: E:\AI_projects\YEYUbaka.github.io\.github\workflows\deploy.yml
- Create: E:\AI_projects\YEYUbaka.github.io\README.md

**Interfaces:**
- Workflow triggers on pushes to main, runs npm ci and npm run build, uploads dist, and deploys with the official Pages actions.
- Project README documents only actual local commands and the YEYUbaka.github.io deployment target.

- [ ] **Step 1: Add the Pages workflow**

The workflow sequence is checkout, setup-node with npm cache, npm ci, npm run build, upload-pages-artifact, and deploy-pages. Permissions are contents: read, pages: write, and id-token: write.

- [ ] **Step 2: Document local development and content rules**

README.md includes npm install, npm run dev, npm test, npm run build, states that project descriptions come from public repositories, and states that LocalRAG is the first featured project.

- [ ] **Step 3: Validate workflow and documentation**

Run git -C E:\AI_projects\YEYUbaka.github.io diff --check, npm test, npm run build, and:

~~~powershell
rg -n "npm ci|npm run build|upload-pages-artifact|deploy-pages|main" E:\AI_projects\YEYUbaka.github.io\.github\workflows\deploy.yml
~~~

Expected: workflow checks find every required command/action and the build/test checks pass.

- [ ] **Step 4: Commit delivery configuration**

Run git -C E:\AI_projects\YEYUbaka.github.io add -- E:\AI_projects\YEYUbaka.github.io\.github E:\AI_projects\YEYUbaka.github.io\README.md then commit with message chore: add GitHub Pages delivery.

---

### Task 6: Final acceptance and remote handoff

**Files:**
- Verify: E:\AI_projects\YEYUbaka-profile\README.md
- Verify: E:\AI_projects\YEYUbaka.github.io\dist\
- Verify: all committed source files in both repositories.

**Interfaces:**
- Consumes: completed README and built website.
- Produces: evidence-bounded local acceptance report and, only after checking authentication and target remotes, pushed commits.

- [ ] **Step 1: Run final local checks**

Run:

~~~powershell
git -C E:\AI_projects\YEYUbaka-profile diff --check
git -C E:\AI_projects\YEYUbaka-profile status --short
git -C E:\AI_projects\YEYUbaka.github.io diff --check
npm --prefix E:\AI_projects\YEYUbaka.github.io test
npm --prefix E:\AI_projects\YEYUbaka.github.io run build
git -C E:\AI_projects\YEYUbaka.github.io status --short
~~~

Expected: both worktrees are clean after their commits, tests pass, build succeeds, and dist exists.

- [ ] **Step 2: Perform browser acceptance**

With the local Vite server running, check desktop and narrow viewport behavior: navigation anchors, mobile menu open/close/Escape, project links, keyboard focus, readable contrast, no missing assets, and reduced-motion behavior. Record only checks actually executed.

- [ ] **Step 3: Verify remote state before any push**

Run git -C E:\AI_projects\YEYUbaka-profile remote -v and git -C E:\AI_projects\YEYUbaka.github.io remote -v. If credentials and remotes are available, push the completed commits to their named remotes; otherwise leave local commits intact and report the exact blocker.

- [ ] **Step 4: Commit any final source-only correction**

If browser acceptance finds a source defect, fix it with a focused commit, rerun the failed check and npm run build, and do not stage screenshots, .playwright-mcp, dist, secrets, or personal data.

