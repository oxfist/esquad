import { createMocks } from 'node-mocks-http';
import handleSquads from '../../pages/api/squad';

const OK = 200;
const squadAmount = 4;

describe('/api/squad', () => {
  it('responds with an array of squads containing teams', () => {
    const fakeTeams = ['1', '2', '3', '4', '5', '6'];
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        teams: fakeTeams,
      },
    });

    handleSquads(req, res);

    const actualSquads = res._getJSONData().body.squads;
    expect(res._getStatusCode()).toBe(OK);
    expect(actualSquads).toHaveLength(squadAmount);
    expect(actualSquads[0].teams.length).toBeGreaterThan(0);
  });

  it('responds with an empty array when there are no teams', () => {
    const noTeams = [];
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        teams: noTeams,
      },
    });

    handleSquads(req, res);

    expect(res._getStatusCode()).toBe(OK);
    expect(res._getJSONData().body.squads).toHaveLength(0);
  });

  it('responds with an object with name and teams for each squad', () => {
    const fakeTeams = ['1', '2', '3', '4', '5', '6'];
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        teams: fakeTeams,
      },
    });

    handleSquads(req, res);

    expect(res._getStatusCode()).toBe(OK);
    expect(res._getJSONData().body.squads).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'Squad 4',
          teams: expect.any(Array),
        }),
      ])
    );
  });
});
