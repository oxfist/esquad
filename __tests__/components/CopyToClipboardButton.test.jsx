import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CopyToClipboardButton from '../../components/CopyToClipboardButton';

describe('CopyToClipboardButton', () => {
  it('renders without crashing', () => {
    render(<CopyToClipboardButton />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders tooltip when hovering over button', async () => {
    render(<CopyToClipboardButton />);

    fireEvent.mouseOver(screen.getByRole('button'));

    expect(await screen.findByText('Copiar')).toBeInTheDocument();
  });

  it('renders different tooltip when clicking on button', async () => {
    render(<CopyToClipboardButton />);

    fireEvent.mouseOver(screen.getByRole('button'));
    await screen.findByText('Copiar');

    fireEvent.click(screen.getByRole('button'));
    expect(await screen.findByText(/¡Copiado!/)).toBeInTheDocument();
  });

  it('renders back the first tooltip 4 secs after clicking on button', async () => {
    render(<CopyToClipboardButton />);

    fireEvent.mouseOver(screen.getByRole('button'));
    await screen.findByText('Copiar');

    fireEvent.click(screen.getByRole('button'));
    await screen.findByText(/¡Copiado!/);

    await waitFor(() => screen.findByText('Copiar'), {
      timeout: 4001,
    });
  });
});
