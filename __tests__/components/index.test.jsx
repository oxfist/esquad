import { render, screen } from '@testing-library/react';
import App from '../../pages/index';

const MAIN_HEADING = /Esquad/i;

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: MAIN_HEADING })
    ).toBeInTheDocument();
  });
});
