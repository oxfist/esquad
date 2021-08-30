import { render, screen } from '@testing-library/react';
import SquadsList from '../../components/SquadsList';

describe('SquadsList', () => {
  it('renders four squads', () => {
    const squads = [
      { name: 'Squad 1', teams: ['Violeta', 'Susan', 'Silvia'] },
      { name: 'Squad 2', teams: ['Ada', 'Alexandra', 'Rosa'] },
      { name: 'Squad 3', teams: ['bell', 'Angela', 'Simone'] },
      { name: 'Squad 4', teams: ['Andrea', 'Audre', 'Marta'] },
    ];

    render(<SquadsList squads={squads} />);

    expect(screen.getAllByText('Squad', { exact: false })).toHaveLength(4);
  });

  it('renders three squads', () => {
    const squads = [
      { name: 'Squad 1', teams: ['1', '2', '3'] },
      { name: 'Squad 2', teams: ['4', '5', '6'] },
      { name: 'Squad 3', teams: ['7', '8', '9'] },
    ];

    render(<SquadsList squads={squads} />);

    expect(screen.getAllByText('Squad', { exact: false })).toHaveLength(3);
  });

  it('renders a squad with its name in bold followed by the teams', () => {
    const singleSquad = [
      { name: 'Squad 1', teams: ['Equipo 1', 'Equipo 2', 'Equipo 3'] },
    ];

    render(<SquadsList squads={singleSquad} />);

    const actualSquadTitle = screen.getByText('Squad 1:', { exact: false });
    const actualTeamsAmount = screen.getAllByText(/Equipo [1-3]/).length;

    expect(actualSquadTitle).toBeInTheDocument();
    expect(actualSquadTitle).toHaveStyle({ 'font-weight': 'bold' });
    expect(actualTeamsAmount).toEqual(3);
  });

  it('renders a squad with a captain in bold', () => {
    const singleSquad = [
      { name: 'Squad 1', teams: ['1', '2', '3'], captain: '1' },
    ];

    render(<SquadsList squads={singleSquad} />);

    const captainText = screen.getByText('Capitana: 1');

    expect(captainText).toBeInTheDocument();
    expect(captainText).toHaveStyle({ 'font-weight': 'bold' });
  });

  it('renders an empty tag when there are no squads', () => {
    render(<SquadsList squads={[]} />);

    expect(screen.queryByText('Squad')).not.toBeInTheDocument();
  });
});
