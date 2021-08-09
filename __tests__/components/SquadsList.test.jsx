import { render, screen } from '@testing-library/react';
import SquadsList from '../../components/SquadsList';

describe('SquadsList', () => {
  it('renders the squads', () => {
    const squads = [
      { name: 'Squad 1', teams: ['1', '2', '3'] },
      { name: 'Squad 2', teams: ['4', '5', '6'] },
    ];

    render(<SquadsList squads={squads} />);

    expect(screen.getAllByText('Squad', { exact: false })).toHaveLength(2);
  });

  // TODO: add check for teams below squad title
  it('renders a squad with a bold title followed by the teams', () => {
    const singleSquad = [{ name: 'Squad 1', teams: ['1', '2', '3'] }];

    render(<SquadsList squads={singleSquad} />);

    const actualSquadTitle = screen.getByText('Squad 1', { exact: false });

    expect(actualSquadTitle).toHaveStyle({ 'font-weight': 'bold' });
  });

  it('renders ankempty tag when there are no squads', () => {
    render(<SquadsList squads={[]} />);

    expect(screen.queryByText('Squad')).not.toBeInTheDocument();
  });
});
