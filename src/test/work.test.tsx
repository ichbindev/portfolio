import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from './utils';
import Work from '../components/Work';
import companies from '../content/companies';
import projects from '../content/projects';

// The <article> carries an inline display:none that the .active class
// overrides via stylesheet; jsdom does not apply it, so role queries in this
// file need `hidden: true` to see inside the article.
const renderWork = () =>
  renderWithRouter(<Work article="work" articleTimeout={false} close={null} />);

describe('Work', () => {
  it('shows companies first and toggles to projects', async () => {
    const user = userEvent.setup();
    renderWork();

    expect(screen.getByText(/Previous Companies/)).toBeInTheDocument();
    expect(
      screen.getByAltText(`link to ${companies[0].name}`)
    ).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'See Projects', hidden: true }));

    expect(screen.getByText(/Work - Projects/)).toBeInTheDocument();
    expect(
      screen.getByAltText(`link to ${projects[0].name}`)
    ).toBeInTheDocument();
  });

  it('shows the item description and tech list on hover', async () => {
    const user = userEvent.setup();
    renderWork();

    const [first] = companies;
    expect(
      screen.getByText('Hover over a company or project for more information.')
    ).toBeInTheDocument();

    await user.hover(screen.getByAltText(`link to ${first.name}`));

    expect(screen.getByText(first.description)).toBeInTheDocument();
    expect(
      screen.getByText(`Technologies Used: ${first.tech.join(', ')}`)
    ).toBeInTheDocument();
  });

  it('resets the description when toggling lists', async () => {
    const user = userEvent.setup();
    renderWork();

    await user.hover(screen.getByAltText(`link to ${companies[0].name}`));
    await user.click(screen.getByRole('button', { name: 'See Projects', hidden: true }));

    expect(
      screen.getByText('Hover over a company or project for more information.')
    ).toBeInTheDocument();
    expect(screen.queryByText(/Technologies Used:/)).not.toBeInTheDocument();
  });
});
