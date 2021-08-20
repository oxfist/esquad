import { render, screen } from '@testing-library/react';
import EsquadHeader from '../../components/EsquadHeader';

const MAIN_HEADING = /Esquad/i;

describe('EsquadHeader', () => {
  it('renders Esquad header', () => {
    render(<EsquadHeader />);

    expect(
      screen.getByRole('heading', { name: MAIN_HEADING })
    ).toBeInTheDocument();
  });
});
