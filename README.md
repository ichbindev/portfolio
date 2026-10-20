# Portfolio

Welcome to my portfolio. It's a simple business-card site built with Vite, React and
TypeScript. You can visit it live on the web at [mlin.ac](https://www.mlin.ac).

## Requirements

- Node 22+ (see `.nvmrc` — Node 24 is what CI treats as current)
- pnpm (pinned via the `packageManager` field; `corepack enable` will fetch it)

## Running and building

```bash
pnpm install
pnpm dev
```

The dev server runs at [`localhost:5173`](http://localhost:5173).

| Command | What it does |
| --- | --- |
| `pnpm dev` | Vite dev server |
| `pnpm build` | Client build, SSR build, then prerender to `dist/` |
| `pnpm preview` | Serve the built `dist/` locally |
| `pnpm test` | Vitest suite |
| `pnpm lint` / `pnpm typecheck` | ESLint / `tsc --noEmit` |

## How the build works

`pnpm build` runs three steps:

1. `vite build` — the client bundle.
2. `vite build --ssr src/entry-server.tsx` — a server bundle used only at build time.
3. `node scripts/prerender.mjs` — renders every route to static HTML (`dist/index.html`,
   `dist/info.html`, …), plus `404.html`, `sitemap.xml` and `robots.txt`.

Pages are emitted as flat files (`dist/info.html`, not `dist/info/index.html`) so that
`/info` resolves both on static hosts and under `pnpm preview`.

`<head>` metadata is generated at build time by `src/config/seo.ts`, not by a React
component. React's `renderToString` hoists `<title>`/`<meta>` into the *container*
markup and expects them there when hydrating, while a client render hoists them into
`<head>` — so rendering metadata through React and relocating it for crawlers causes a
hydration mismatch. Every route here is entered by direct URL, so the build owns it.

## Deployment

The host must be configured to build with `pnpm build` and publish the `dist/`
directory.
