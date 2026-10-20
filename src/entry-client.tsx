import { StrictMode } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App';

const container = document.getElementById('root');
if (!container) throw new Error('Root container #root not found');

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Prerendered routes ship with markup in #root and are hydrated; anything
// else (a 404 served by the host) falls back to a fresh client render.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
