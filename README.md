# Personal site — Mycelium

A minimal, long-term personal homepage. Visual metaphor: **mycelium** (lines, networks, subtle growth) as a quiet background layer. Green/blue/cyan palette, low saturation, readable and maintainable.

## Tech stack

- **Astro** — static site, content in Markdown, no heavy JS
- **Content** in `src/content/writing/` (Markdown) and `src/data/projects.ts`
- **Styles** in `src/styles/global.css` (CSS variables)
- **Deploy** to Vercel, Netlify, or GitHub Pages

## Commands

```bash
npm install
npm run dev    # http://localhost:4321
npm run build  # output in dist/
npm run preview
```

## Structure

| Path | Purpose |
|------|--------|
| `src/pages/` | Routes: Home, About, Writing, Projects, Contact |
| `src/content/writing/*.md` | Blog/notes — add files here |
| `src/data/projects.ts` | Project list — edit array |
| `src/components/MyceliumBackground.astro` | Background network (intensity: full / subtle / none) |
| `src/styles/global.css` | Colors, typography, reading layout |

## Content-only updates

- **New post:** add a `.md` file in `src/content/writing/` with `title`, optional `description`, `pubDate`.
- **Projects:** edit `src/data/projects.ts`.
- **Copy:** edit the corresponding `.astro` page or layout.

## Design notes

- Mycelium is build-time SVG (no big animation libs). Optional light CSS “breathe” on the lines.
- Writing pages use `mycelium="none"` so content is the focus.
- Prefers reduced motion and dark mode are respected via CSS.
