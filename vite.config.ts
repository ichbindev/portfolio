import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // The build emits one prerendered HTML file per route, so this is a static
  // multi-page site, not an SPA. Without this, `vite preview` serves the SPA
  // fallback (index.html) for every path and hides prerender/hydration bugs.
  appType: 'mpa',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // The vendored HTML5 UP / skel stylesheets under src/assets/scss/libs
        // still use `@import` and `100% / $columns` slash division. Both are
        // deprecated in Dart Sass and removed in 3.0. Rewriting ~1000 lines of
        // vendored code is out of scope; silence the noise until then.
        silenceDeprecations: [
          'import',
          'slash-div',
          'global-builtin',
          'color-functions',
          'if-function',
          'elseif',
          'new-global',
        ],
      },
    },
  },
  server: {
    proxy: {
      '/lambda': {
        target: 'https://d5o2rd8lqa.execute-api.us-east-1.amazonaws.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/lambda/, ''),
      },
    },
  },
});
