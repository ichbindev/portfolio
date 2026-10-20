/**
 * Static prerender step, replacing Gatsby's SSG.
 *
 * Runs after `vite build` (client) and `vite build --ssr` (server) and writes
 * one static HTML file per route. This is deliberately hand-rolled: the
 * off-the-shelf Vite SSG plugins still target react-router 6 and pull in
 * unmaintained head-management libraries, whereas React 19 hoists <title> and
 * <meta> to the front of the rendered string on its own, so splitting them off
 * into <head> is all that is actually needed.
 */
import { mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const DIST = resolve(ROOT, 'dist');
const SERVER_DIR = resolve(ROOT, 'dist-server');

const HOSTNAME = 'https://www.mlin.ac';
/** Indexable routes. */
const PUBLIC_ROUTES = ['/', '/contact'];
/** Unlisted routes, previously disallowed by gatsby-plugin-robots-txt. */
const PRIVATE_ROUTES = ['/info', '/pogo', '/fc'];
const ROUTES = [...PUBLIC_ROUTES, ...PRIVATE_ROUTES];

const template = readFileSync(resolve(DIST, 'index.html'), 'utf8');
const { render, renderMetaTags } = await import(
  resolve(SERVER_DIR, 'entry-server.js')
);

for (const route of ROUTES) {
  const html = template
    // Drop the template's dev-only defaults before injecting route metadata.
    .replace('<title>Chris Mlinac - Portfolio</title>', '')
    .replace('<meta name="description" content="My Portfolio" />', '')
    .replace('</head>', `${renderMetaTags(route)}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`);

  // Flat files (dist/info.html), not dist/info/index.html: static hosts
  // (Netlify, Vercel, Cloudflare Pages, GitHub Pages) all serve /info from
  // info.html, and unlike the directory form it also resolves under
  // `vite preview`, so the built output can be verified locally.
  const outFile =
    route === '/'
      ? resolve(DIST, 'index.html')
      : resolve(DIST, `${route.slice(1)}.html`);


  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, html);
  console.log(`prerendered ${route}`);
}

// Static hosts serve 404.html for unmatched paths; render the catch-all route
// through a path that cannot match any real route.
writeFileSync(
  resolve(DIST, '404.html'),
  template
    .replace('<title>Chris Mlinac - Portfolio</title>', '')
    .replace('<meta name="description" content="My Portfolio" />', '')
    .replace('</head>', `${renderMetaTags('/404')}</head>`)
    .replace(
      '<div id="root"></div>',
      `<div id="root">${render('/404-not-found')}</div>`
    )
);
console.log('prerendered 404.html');

// --- sitemap.xml / robots.txt (replacing the two Gatsby plugins) ---
const lastmod = new Date().toISOString().split('T')[0];

writeFileSync(
  resolve(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PUBLIC_ROUTES.map(
  (route) =>
    `  <url>\n    <loc>${HOSTNAME}${route}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
).join('\n')}
</urlset>
`
);

writeFileSync(
  resolve(DIST, 'robots.txt'),
  `User-agent: *
Allow: /
${PRIVATE_ROUTES.map((route) => `Disallow: ${route}`).join('\n')}

Host: ${HOSTNAME}
Sitemap: ${HOSTNAME}/sitemap.xml
`
);
console.log('generated sitemap.xml and robots.txt');

rmSync(SERVER_DIR, { recursive: true, force: true });
