# 个人网站技术方案与目录结构

## 一、整体技术方案与理由

### 技术栈：Astro（静态站点生成）

**选择理由：**

| 需求 | 方案 |
|------|------|
| 静态部署、长期维护 | Astro 默认输出静态 HTML，无运行时框架负担，可部署到 Vercel / Netlify / GitHub Pages |
| 内容与样式分离 | 内容放在 `src/content/`（Markdown/JSON），布局与组件在 `src/components/`，改内容无需动样式 |
| SEO 友好、加载快 | 服务端渲染静态页，首屏无大 JS，可配合 sitemap、meta |
| 写作支持 Markdown | 内置 Content Collections，Writing 页面直接基于 `.md` 文件 |
| 无大型动效库、克制 | 默认零 JS 输出，菌丝用少量内联或单文件脚本即可 |
| 桌面/移动一致 | 一套响应式 CSS，不引入复杂 UI 框架 |

**不选：** Next.js（过重）、纯 HTML 手写（内容多了难维护）、重型动画库（与「慢、轻、可忽略」冲突）。

### 菌丝视觉实现

- **形式：** 极细线条网络，用 **SVG** 绘制（可维护、可被 CSS 控制透明度）。
- **逻辑：** 在组件内生成一组非对称但有序的节点与连线（类似最小生成树或德劳内三角的边），线条 `stroke` 使用主色 + 低 opacity（约 0.05–0.12），作为背景层。
- **动效：** 可选：随滚动微调 opacity 或线条轻微位移（CSS transition 或极慢的 requestAnimationFrame），变化幅度控制在「可忽略」。
- **原则：** 不写实、不抢眼，像「逻辑骨架」，仅在 Home / About / Projects 等页作为背景存在，Writing 页可弱化或去掉。

### 配色与设计系统

- 用 **CSS 变量** 统一主色、辅助色、强调色，便于全站一致与后续微调。
- 主色：深青、森林绿、冷蓝绿；辅助：浅灰、雾白；强调：低饱和青绿。
- 字体：系统字体栈 + 可选一款衬线（如阅读页），保证可读性与行距。

### 依赖原则

- 核心：Astro。
- 内容：`@astrojs/mdx`（若需 MDX 扩展）。
- 不引入：Three.js、GSAP、Bootstrap 等；菌丝与动效手写实现。

---

## 二、目录结构设计

```
/
├── public/                    # 静态资源，原样输出
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── MyceliumBackground.astro   # 菌丝背景（SVG）
│   │   ├── SiteHeader.astro           # 全站导航
│   │   └── layout/
│   │       └── BaseLayout.astro       # 共用布局（菌丝可选）
│   ├── content/
│   │   ├── writing/                   # Markdown 文章
│   │   │   └── *.md
│   │   └── config.ts                  # Content Collections 配置
│   ├── data/
│   │   └── projects.ts                # 项目数据（或 JSON）
│   ├── layouts/
│   │   └── WritingLayout.astro       # 单篇文章布局（可读性优先）
│   ├── pages/
│   │   ├── index.astro                # Home
│   │   ├── about.astro                # About
│   │   ├── writing/
│   │   │   ├── index.astro            # Writing 列表
│   │   │   └── [...slug].astro        # 单篇
│   │   ├── projects.astro             # Projects
│   │   └── contact.astro              # Contact
│   ├── styles/
│   │   └── global.css                # 变量、重置、基础样式
│   └── env.d.ts
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

- **内容与样式分离：** 写作只动 `content/writing/*.md` 与 `data/projects.ts`，主题与布局在 `components/`、`styles/`。
- **菌丝：** 仅 `MyceliumBackground.astro` 负责，页面通过 prop 控制是否显示及强度。

---

## 三、页面与路由对应

| 路径 | 说明 |
|------|------|
| `/` | Home：一句话介绍 + 当前关注 + 菌丝背景 |
| `/about` | About：背景、兴趣、工作方式，结构清晰 |
| `/writing` | Writing 列表；`/writing/*` 单篇 Markdown，可读性优先 |
| `/projects` | Projects：节点式布局，暗示连接 |
| `/contact` | Contact：极简，作为「出口节点」 |

---

接下来将按此方案生成 Astro 项目、设计系统、菌丝组件与各页面代码，保证可直接运行并附必要说明。
