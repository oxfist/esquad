import { render, screen } from '@testing-library/react';
import App from '../pages/index';

const mainHeading = 'Esquad Icon of person performing a squat';

describe('App', () => {
  it('render without crashing', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: mainHeading })
    ).toBeInTheDocument();
  });
});
