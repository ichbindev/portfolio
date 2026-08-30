import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';

export { renderMetaTags } from './config/seo';

/** Renders a route's app markup for the #root container. */
export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
