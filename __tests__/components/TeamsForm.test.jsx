import { render, screen } from '@testing-library/react';
import TeamsForm from '../../components/TeamsForm';

describe('TeamsForm', () => {
  it('renders teams form without amount of teams before submitting', () => {
    render(<TeamsForm handleSubmit={() => {}} teamsSize={0} />);

    expect(screen.queryByText('equipos/personas')).not.toBeInTheDocument();
  });

  it('renders teams form with amount of teams after submitting', () => {
    render(<TeamsForm handleSubmit={() => {}} teamsSize={3} />);

    expect(screen.queryByText('3 equipos/personas')).toBeInTheDocument();
  });
});
