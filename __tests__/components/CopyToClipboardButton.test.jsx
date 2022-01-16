import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import CopyToClipboardButton from '../../components/CopyToClipboardButton';
import markdownizer from '../../lib/markdownizer';

const originalClipboard = { ...global.navigator.clipboard };

describe('CopyToClipboardButton', () => {
  beforeEach(() => {
    const mockClipboard = { writeText: jest.fn() };
    global.navigator.clipboard = mockClipboard;
    markdownizer.markdownize = jest.fn().mockResolvedValueOnce('');
  });

  afterEach(() => {
    jest.resetAllMocks();
    global.navigator.clipboard = originalClipboard;
  });

  it('renders without crashing', () => {
    render(<CopyToClipboardButton />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should copy to clipboard', async () => {
    render(<CopyToClipboardButton />);
    fireEvent.click(screen.getByRole('button'));

    await waitFor(() =>
      expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1)
    );
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
