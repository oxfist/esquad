import builder from '../lib/squadBuilder';

const FOUR_SQUADS = 4;

describe('build', () => {
  it('returns four squads', () => {
    const fakeTeams = ['1', '2', '3', '4'];

    const actualSquads = builder.build(fakeTeams);

    expect(actualSquads).toHaveLength(FOUR_SQUADS);
  });

  it('returns four squads with teams', () => {
    const fakeTeams = ['1', '2', '3', '4', '5', '6'];

    const actualSquads = builder.build(fakeTeams);
    const firstSquad = actualSquads[0];

    expect(actualSquads).toHaveLength(FOUR_SQUADS);
    expect(firstSquad.teams.length).toBeGreaterThan(0);
  });

  it('returns shuffled squads each time', () => {
    const fakeTeams = ['1', '2', '3', '4'];

    const firstSquads = builder.build(fakeTeams);
    const secondSquads = builder.build(fakeTeams);

    expect(secondSquads).not.toEqual(firstSquads);
  });

  it('returns four squads when teams are less than squads', () => {
    const fakeTeams = ['1', '2', '3'];

    const actualSquads = builder.build(fakeTeams);

    expect(actualSquads).toHaveLength(FOUR_SQUADS);
  });

  it('returns empty array when there are no teams', () => {
    const noTeams = [];

    const actualSquads = builder.build(noTeams);

    expect(actualSquads).toHaveLength(0);
  });

  it('returns a captain for each squad from one of the teams', () => {
    const fakeTeams = ['1'];
    const expectedCaptain = fakeTeams[0];

    const actualSquads = builder.build(fakeTeams);

    expect(actualSquads[0].captain).not.toBeUndefined();
    expect(actualSquads[0].captain).not.toBeNull();
    expect(actualSquads[0].captain).toEqual(expectedCaptain);
  });

  it('returns a captain from a team of several people separated by a -', () => {
    const fakeTeams = ['1 - 2'];
    const fakeTeamPeople = ['1', '2'];

    const actualSquads = builder.build(fakeTeams);

    expect(fakeTeamPeople).toContain(actualSquads[0].captain);
  });
});