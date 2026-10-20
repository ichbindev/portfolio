import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderAt } from './utils';

describe('routing', () => {
  it('renders the home page', () => {
    renderAt('/');
    expect(
      screen.getByRole('heading', { name: 'Chris Mlinac', level: 1 })
    ).toBeInTheDocument();
  });

  it('renders the info page business card', () => {
    renderAt('/info');
    expect(
      screen.getByRole('heading', { name: 'Contact Info' })
    ).toBeInTheDocument();
  });

  it('renders the pogo page', () => {
    renderAt('/pogo');
    expect(
      screen.getByRole('heading', { name: 'PoGo Friends' })
    ).toBeInTheDocument();
  });

  it('renders the friend code page', () => {
    renderAt('/fc');
    expect(screen.getByText('CasAttack512')).toBeInTheDocument();
  });

  it('renders the 404 page for an unknown route', () => {
    renderAt('/does-not-exist');
    expect(
      screen.getByRole('heading', { name: 'NOT FOUND' })
    ).toBeInTheDocument();
  });

});
