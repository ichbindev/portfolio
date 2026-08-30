import { describe, it, expect } from 'vitest';
import { renderMetaTags } from '../config/seo';

describe('renderMetaTags', () => {
  it('builds a route-specific canonical url and og:url', () => {
    const html = renderMetaTags('/info');
    expect(html).toContain(
      '<meta property="og:url" content="https://www.mlin.ac/info"/>'
    );
    expect(html).toContain(
      '<link rel="canonical" href="https://www.mlin.ac/info"/>'
    );
  });

  it('uses the per-route title override', () => {
    expect(renderMetaTags('/pogo')).toContain(
      '<title>PoGo Friends - Chris Mlinac</title>'
    );
  });

  it('falls back to the site title for unknown routes', () => {
    expect(renderMetaTags('/404')).toContain(
      '<title>Chris Mlinac - Portfolio</title>'
    );
  });

  it('emits exactly one title tag', () => {
    expect(renderMetaTags('/').match(/<title>/g)).toHaveLength(1);
  });

  it('escapes quotes in metadata values', () => {
    expect(renderMetaTags('/contact')).not.toMatch(/content="[^"]*"[^/>]/);
  });
});
