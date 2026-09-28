# Reference Architecture Portfolio Rework Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 以 `xy200303.github.io` 的已验证作品集架构为基底，重做 YEYUbaka 的网站，使其拥有相同级别的导航、卡片、动效与项目详情结构，同时只展示 YEYUbaka 的真实定位和项目。

**Architecture:** 保留当前 React + TypeScript + Vite 工程和 GitHub Pages workflow；引入 `react-router-dom`，将页面组织为共享壳层、首页、项目详情页和轻量方向页。参考站点的结构和视觉语言独立重实现，内容由 `src/data` 驱动，LocalRAG 固定为第一精选项目。

**Tech Stack:** React 19, TypeScript, Vite, react-router-dom 7, 原生 CSS, Canvas 星空背景, Vitest, GitHub Actions + GitHub Pages。

## Global Constraints

- 主定位固定为“AI 专业学生｜测试开发方向｜Python 实践者”。
- `LocalRAG` 必须是首页第一精选项目，链接为 `https://github.com/YEYUbaka/LocalRAG`。
- 精选项目固定为 `LocalRAG`、`AI-learning-companion`、`doubanspider`。
- 参考仓库无 LICENSE，不直接复制其源码、文案或资产；只迁移结构与视觉意图并独立实现。
- 不写未经独立验证的性能数字、实验结论、奖项、工作经历、star 数或 Demo 地址。
- 不修改 `E:\\AI_projects\\LocalRAG`；只读取其公开事实。
- 计划文件继续保存在 `E:\\AI_projects\\YEYUbaka.github.io\\plans\\`。
- 页面必须支持移动端、键盘焦点和 `prefers-reduced-motion`。

---

### Task 1: Update dependencies and content contracts

**Files:**
- Modify: `E:\\AI_projects\\YEYUbaka.github.io\\package.json`
- Modify: `E:\\AI_projects\\YEYUbaka.github.io\\package-lock.json`
- Modify: `E:\\AI_projects\\YEYUbaka.github.io\\src\\data\\profile.ts`
- Modify: `E:\\AI_projects\\YEYUbaka.github.io\\src\\data\\projects.ts`
- Modify: `E:\\AI_projects\\YEYUbaka.github.io\\src\\data\\content.test.ts`

**Interfaces:**
- `profile.ts` exports profile, focus items, learning items, channels and direction-page data.
- `projects.ts` exports a typed `Project[]` with `projects[0].id === 'localrag'` and detail fields: `tagline`, `category`, `techStack`, `background`, `role`, `highlights`, `links`, `cover`.
- `content.test.ts` verifies order, URLs, approved slugs and absence of reference-person data.

- [ ] **Step 1: Add the router dependency.**

Run from `E:\\AI_projects\\YEYUbaka.github.io`:

```powershell
npm install react-router-dom@^7.9.0
```

Expected: `package.json` and `package-lock.json` add `react-router-dom`; no unrelated dependency is upgraded beyond the lockfile resolution.

- [ ] **Step 2: Write the content contract before changing the page components.**

Add tests for these exact facts:

```ts
expect(projects[0].id).toBe('localrag')
expect(projects[0].url).toBe('https://github.com/YEYUbaka/LocalRAG')
expect(projects.map((project) => project.id)).toEqual([
  'localrag',
  'ai-learning-companion',
  'doubanspider',
])
expect(profile.title).toContain('Test Development')
```

Run `npm test -- --run src/data/content.test.ts`; expected result is a failing content assertion only if the new data has not been implemented yet.

- [ ] **Step 3: Implement the three project records and profile data.**

Use the existing verified descriptions, add concise detail fields for the project pages, and keep LocalRAG first. `highlights` must describe capabilities or scope, not unverified metrics. Add `category` values `AI 应用`, `测试开发`, and `Python 工程` so the homepage filter is meaningful.

- [ ] **Step 4: Run the focused content test and commit.**

Run `npm test -- --run src/data/content.test.ts`; expected result: all content tests pass. Commit only the dependency and data-contract changes with `feat: adopt reference portfolio content model`.

---

### Task 2: Rebuild the shared reference-style shell

**Files:**
- Modify: `E:\\AI_projects\\YEYUbaka.github.io\\src\\App.tsx`
- Modify or replace: `E:\\AI_projects\\YEYUbaka.github.io\\src\\main.tsx`
- Create: `E:\\AI_projects\\YEYUbaka.github.io\\src\\components\\Nav.tsx`
- Create: `E:\\AI_projects\\YEYUbaka.github.io\\src\\components\\Footer.tsx`
- Create: `E:\\AI_projects\\YEYUbaka.github.io\\src\\components\\StarfieldCanvas.tsx`
- Create: `E:\\AI_projects\\YEYUbaka.github.io\\src\\components\\Reveal.tsx`
- Create: `E:\\AI_projects\\YEYUbaka.github.io\\src\\components\\SectionHeader.tsx`
- Create: `E:\\AI_projects\\YEYUbaka.github.io\\src\\components\\Badge.tsx`

**Interfaces:**
- `App` mounts `HashRouter`, `ScrollToTop`, card spotlight listener, `StarfieldCanvas`, `Nav`, route content and `Footer`.
- `Nav` supports desktop links and mobile open/close/Escape with `aria-expanded`.
- `Reveal` accepts `{ children, delay?, className? }` and adds `is-visible` through `IntersectionObserver`, with immediate visibility under reduced motion.
- `Badge` exports `Tag` and status/direction badges; `SectionHeader` accepts `index`, `title`, and optional `description`.

- [ ] **Step 1: Implement the router shell and route reset.**

Use `HashRouter` routes `/`, `/works/:id`, `/resume`, plus a fallback to `/`. Scroll to top on pathname changes. Keep the existing GitHub Pages-compatible hash routing.

- [ ] **Step 2: Implement the navigation and footer.**

Use the reference navigation rhythm: fixed blurred bar, `YEYUbaka.` brand, links for `作品`, `方向`, and external `GitHub ↗`. On mobile, render a menu button, close after navigation, and close on Escape.

- [ ] **Step 3: Implement the atmosphere and reveal primitives.**

Create a low-density Canvas starfield, a reduced-motion branch, IntersectionObserver reveal wrappers, and document-level `.card` pointer coordinates for spotlight gradients. No external image or runtime API is required.

- [ ] **Step 4: Run typecheck and commit the shell.**

Run `npm run build`; expected result: the router shell compiles even while route page components are still minimal. Commit with `feat: add reference-style portfolio shell`.

---

### Task 3: Implement homepage, project details, and direction page

**Files:**
- Create: `E:\\AI_projects\\YEYUbaka.github.io\\src\\pages\\HomePage.tsx`
- Create: `E:\\AI_projects\\YEYUbaka.github.io\\src\\pages\\HomePage.css`
- Create: `E:\\AI_projects\\YEYUbaka.github.io\\src\\pages\\WorkDetailPage.tsx`
- Create: `E:\\AI_projects\\YEYUbaka.github.io\\src\\pages\\WorkDetailPage.css`
- Create: `E:\\AI_projects\\YEYUbaka.github.io\\src\\pages\\ResumePage.tsx`
- Create: `E:\\AI_projects\\YEYUbaka.github.io\\src\\pages\\ResumePage.css`
- Create: `E:\\AI_projects\\YEYUbaka.github.io\\src\\components\\ProjectCard.tsx`
- Create: `E:\\AI_projects\\YEYUbaka.github.io\\src\\components\\ProjectCard.css`

**Interfaces:**
- `HomePage` owns the project category filter and renders `projects` in data order.
- `ProjectCard` receives one `Project`, links to `/works/:id`, and displays cover, category, tagline and up to four tags.
- `WorkDetailPage` resolves `id` from `useParams`, renders a missing-project state, and provides previous/next project links.
- `ResumePage` renders only verified direction and stack content; it must not contain invented employment, academic or award data.

- [ ] **Step 1: Build the reference-style Hero.**

Use the avatar/brand area, `PORTFOLIO — 2026`, `YEYUbaka`, an italic subtitle, role line, concise intro and three actions: `查看作品`, `GitHub ↗`, `方向 →`.

- [ ] **Step 2: Build the filtered project grid.**

Use `全部` plus the three data categories. Keep `LocalRAG` first when `全部` is selected. Add a `CORE PROJECT` marker only to LocalRAG, and make the whole card navigate to its detail route while keeping an explicit repository link in the detail page.

- [ ] **Step 3: Build project detail and direction routes.**

The detail page must show the gradient cover, category, tags, repository buttons, background, implementation scope and verified highlights. The direction page uses concise sections for testing development, Python engineering, AI applications and current learning.

- [ ] **Step 4: Run tests and build, then commit the page layer.**

Run `npm test` and `npm run build`; expected result: content tests pass and Vite emits `dist`. Commit with `feat: add reference-style portfolio pages`.

---

### Task 4: Port the reference visual system and responsive behavior

**Files:**
- Replace: `E:\\AI_projects\\YEYUbaka.github.io\\src\\styles\\tokens.css`
- Replace: `E:\\AI_projects\\YEYUbaka.github.io\\src\\styles\\global.css`
- Create: `E:\\AI_projects\\YEYUbaka.github.io\\src\\styles\\starfield.css`
- Create component/page CSS files listed in Tasks 2 and 3.
- Modify: `E:\\AI_projects\\YEYUbaka.github.io\\index.html`

**Interfaces:**
- `tokens.css` owns colors, typography, spacing, radii, shadows, container width and motion variables.
- `global.css` owns reset, layout container, `.section`, `.card`, spotlight, noise texture, focus styles and reduced-motion behavior.
- Page/component CSS owns only local layout and responsive rules; no broad selector may override another component accidentally.

- [ ] **Step 1: Port the reference token proportions.**

Use near-black `#050507`, `#0b0b0e` elevated surfaces, `#8cc8ff` ice-blue accent, 8px spacing rhythm, 1200px container, 64px nav height and 8–14px card radii.

- [ ] **Step 2: Port the reference card and texture treatment.**

Implement fixed starfield layering, low-opacity film grain, hairline borders, subtle shadow, hover border/spotlight, gradient project covers, mono labels and serif italic subtitles. Keep the accent restrained; no new orbital illustration or unrelated decorative system.

- [ ] **Step 3: Implement responsive and accessibility rules.**

Use three-column cards above 960px, two columns below 960px, one column below 640px; make nav collapse below 768px; add visible focus rings and disable reveal/transitions under reduced motion.

- [ ] **Step 4: Run local browser acceptance.**

Run `npm run dev -- --host 127.0.0.1`, then inspect desktop and 390px mobile view with Playwright. Check Hero, filters, LocalRAG first card, detail route, mobile menu open/close/Escape, keyboard focus, and absence of resource/console errors. Commit with `feat: port reference visual system`.

---

### Task 5: Final verification and Pages handoff

**Files:**
- Verify: `E:\\AI_projects\\YEYUbaka.github.io\\.github\\workflows\\deploy.yml`
- Verify: all source files in `E:\\AI_projects\\YEYUbaka.github.io\\src\\`
- Verify: `E:\\AI_projects\\YEYUbaka.github.io\\AGENTS.md`

**Interfaces:**
- Existing Pages workflow continues to run `npm ci`, `npm test`, `npm run build`, upload `dist`, and deploy to `github-pages`.
- Final output contains only verified local and remote evidence.

- [ ] **Step 1: Run final repository checks.**

Run:

```powershell
git -C E:\\AI_projects\\YEYUbaka.github.io diff --check
npm --prefix E:\\AI_projects\\YEYUbaka.github.io test
npm --prefix E:\\AI_projects\\YEYUbaka.github.io run build
git -C E:\\AI_projects\\YEYUbaka.github.io status --short --branch
```

Expected: tests and build pass; only intentionally ignored browser artifacts may remain outside Git; source worktree is clean after the final commit.

- [ ] **Step 2: Push the verified branch and main update.**

Push the feature branch for traceability, then update remote `main` only after local browser acceptance passes. Do not touch `E:\\AI_projects\\LocalRAG`.

- [ ] **Step 3: Verify the live deployment.**

Confirm the workflow run is successful, `https://yeyubaka.github.io/` returns `200 OK`, the title is `YEYUbaka · Test Development & AI`, the first project is LocalRAG, and mobile navigation works on the deployed URL.

- [ ] **Step 4: Report evidence and remaining caveats.**

Report commit IDs, test/build results, browser checks, live URL, and any unverified scope. Do not call the page complete based only on a successful build.
