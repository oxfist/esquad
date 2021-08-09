const totalSquads = 4;

const shuffleArray = (array) => {
  const arrayCopy = array.slice();

  let i = 0;
  let j = 0;
  let temp = null;

  for (i = arrayCopy.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arrayCopy[i];
    arrayCopy[i] = arrayCopy[j];
    arrayCopy[j] = temp;
  }

  return arrayCopy;
};

const buildSquads = (teams) => {
  if (teams.length === 0) return [];

  const squads = [
    { name: 'Squad 1', teams: [] },
    { name: 'Squad 2', teams: [] },
    { name: 'Squad 3', teams: [] },
    { name: 'Squad 4', teams: [] },
  ];

  const shuffledTeams = shuffleArray(teams);

  let assignedSquad = 0;
  shuffledTeams.forEach((team) => {
    const currentSquad = assignedSquad % totalSquads;
    const squad = squads[currentSquad];
    squad.teams.push(team);

    assignedSquad += 1;
  });

  return squads;
};

export default function handleSquads(req, res) {
  const { teams } = req.body;
  const squads = buildSquads(teams);

  res.status(200).json({
    body: {
      squads,
    },
  });
}
