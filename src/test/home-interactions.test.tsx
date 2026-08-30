import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderAt } from './utils';

/** The open/close transitions are staged behind 250ms/275ms timers. */
const settle = async () => {
  await act(async () => {
    vi.advanceTimersByTime(400);
  });
};

const openArticle = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(screen.getByRole('button', { name: 'Work' }));
  await settle();
};

const workArticle = () => document.querySelector('#work');

describe('home page article interactions', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('opens an article from the header nav', async () => {
    renderAt('/');
    await openArticle(user);
    expect(workArticle()).toHaveClass('active');
    expect(document.querySelector('#main')).toHaveStyle({ display: 'flex' });
  });

  it('closes the open article with the close control', async () => {
    renderAt('/');
    await openArticle(user);

    // The article carries an inline display:none that the .active class
    // overrides via stylesheet, so it is outside jsdom's accessibility tree.
    const closeControl = workArticle()?.querySelector('.close');
    expect(closeControl).toBeTruthy();
    await user.click(closeControl as Element);
    await settle();

    expect(workArticle()).not.toHaveClass('active');
  });

  /**
   * Regression test: the old class component registered its keydown handler
   * as a local const but tried to remove `this.handleKeyDown`, so Escape
   * handling was never cleaned up. Verifies Escape actually closes.
   */
  it('closes the open article when Escape is pressed', async () => {
    renderAt('/');
    await openArticle(user);
    expect(workArticle()).toHaveClass('active');

    await user.keyboard('{Escape}');
    await settle();

    expect(workArticle()).not.toHaveClass('active');
  });

  it('closes the open article when clicking outside the wrapper', async () => {
    renderAt('/');
    await openArticle(user);

    await act(async () => {
      document.body.dispatchEvent(
        new MouseEvent('mousedown', { bubbles: true })
      );
    });
    await settle();

    expect(workArticle()).not.toHaveClass('active');
  });

  it('opens straight to the contact article on /contact', async () => {
    renderAt('/contact');
    await settle();
    expect(document.querySelector('#contact-card')).toHaveClass('active');
  });
});
