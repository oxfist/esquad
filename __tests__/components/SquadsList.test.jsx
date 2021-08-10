import { render, screen } from '@testing-library/react';
import SquadsList from '../../components/SquadsList';

describe('SquadsList', () => {
  it('renders the squads', () => {
    const squads = [
      { name: 'Squad 1', teams: ['1', '2', '3'] },
      { name: 'Squad 2', teams: ['4', '5', '6'] },
      { name: 'Squad 3', teams: ['7', '8', '9'] },
      { name: 'Squad 4', teams: ['10', '11', '12'] },
    ];

    render(<SquadsList squads={squads} />);

    expect(screen.getAllByText('Squad', { exact: false })).toHaveLength(4);
  });

  it('renders a squad with its name in bold followed by the teams', () => {
    const singleSquad = [
      { name: 'Squad 1', teams: ['Equipo 1', 'Equipo 2', 'Equipo 3'] },
    ];

    render(<SquadsList squads={singleSquad} />);

    const actualSquadTitle = screen.getByText('Squad 1:', { exact: false });
    const actualTeams = screen.getAllByText('Equipo', { exact: false });

    expect(actualSquadTitle).toBeInTheDocument();
    expect(actualSquadTitle).toHaveStyle({ 'font-weight': 'bold' });
    expect(actualTeams).toHaveLength(3);
  });

  it('renders a squad with a slot for captain in bold', () => {
    const singleSquad = [{ name: 'Squad 1', teams: ['1', '2', '3'] }];

    render(<SquadsList squads={singleSquad} />);

    const captainText = screen.getByText('Capitana:');

    expect(captainText).toBeInTheDocument();
    expect(captainText).toHaveStyle({ 'font-weight': 'bold' });
  });

  it('renders an empty tag when there are no squads', () => {
    render(<SquadsList squads={[]} />);

    expect(screen.queryByText('Squad')).not.toBeInTheDocument();
  });
});
