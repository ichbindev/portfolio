import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import type { ReactElement } from 'react';
import App from '../App';

/** Render the whole app at a given route, the way the entry points do. */
export function renderAt(route: string) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );
}

/** Render a single component inside a router, for component-level tests. */
export function renderWithRouter(ui: ReactElement, route = '/') {
  return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>);
}
