import { render, screen } from '@testing-library/react';
import EsquadBody from '../../components/EsquadBody';

describe('EsquadBody', () => {
  it('renders Esquad body', async () => {
    const squadsInputText = 'Pon aquí una línea por equipo o persona';
    const generateSquadsButtonText = 'Generar squads';

    render(<EsquadBody />);
    const squadsInput = screen.getByPlaceholderText(squadsInputText);
    const generateSquadsButton = screen.getByText(generateSquadsButtonText);

    expect(squadsInput).toBeInTheDocument();
    expect(generateSquadsButton).toBeInTheDocument();
  });
});
