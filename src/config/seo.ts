import { siteConfig } from './site';

interface RouteSeo {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

/** Per-route overrides; anything omitted falls back to siteConfig. */
const ROUTE_SEO: Record<string, RouteSeo> = {
  '/': {},
  '/contact': { title: 'Contact - Chris Mlinac' },
  '/info': { title: 'Contact Info - Chris Mlinac' },
  '/pogo': { title: 'PoGo Friends - Chris Mlinac' },
  '/fc': { title: 'Friend Code - Chris Mlinac' },
};

const escapeAttr = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/**
 * Builds the <head> metadata for a route as an HTML string.
 *
 * This deliberately lives outside the React tree. React's renderToString
 * hoists <title>/<meta> into the *container* markup and expects to find them
 * there when hydrating, whereas a client render hoists them into <head> — so
 * rendering metadata through React and then relocating it into <head> for
 * crawlers produces a guaranteed hydration mismatch. Every route here is
 * entered by direct URL (the site has no internal links), so the build is the
 * right place to own this.
 */
export function renderMetaTags(pathname: string): string {
  const route = ROUTE_SEO[pathname] ?? {};

  const title = route.title || siteConfig.title;
  const description = route.description || siteConfig.description;
  const image = `${siteConfig.siteUrl}${route.image || siteConfig.image}`;
  const url = `${siteConfig.siteUrl}${pathname}`;

  const metas: [string, string, string][] = [
    ['name', 'description', description],
    ['name', 'image', image],
    ['property', 'og:url', url],
    ['property', 'og:type', route.article ? 'article' : 'website'],
    ['property', 'og:title', title],
    ['property', 'og:description', description],
    ['property', 'og:image', image],
    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:creator', siteConfig.twitterUsername],
    ['name', 'twitter:title', title],
    ['name', 'twitter:description', description],
    ['name', 'twitter:image', image],
  ];

  return [
    `<title>${escapeAttr(title)}</title>`,
    `<link rel="canonical" href="${escapeAttr(url)}"/>`,
    ...metas.map(
      ([attr, key, value]) =>
        `<meta ${attr}="${key}" content="${escapeAttr(value)}"/>`
    ),
  ].join('');
}
