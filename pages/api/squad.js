const totalSquads = 4;

export default function handler(req, res) {
  const squads = buildSquads(req.body.teams)
  console.info(squads)

  res.status(200).json({
    body: {
      squads: squads
    },
  })
}

// TODO: delete all and code again with TDD
const buildSquads = (teams) => {
  const shuffledTeams = shuffleArray(teams);
  const squads = [
    { name: 'Squad 1', teams: [] },
    { name: 'Squad 2', teams: [] },
    { name: 'Squad 3', teams: [] },
    { name: 'Squad 4', teams: [] }
  ];

  let assignedSquad = 0;
  shuffledTeams.forEach(team => {
    const currentSquad = assignedSquad % totalSquads;
    const squad = squads[currentSquad];
    squad.teams.push(team);

    assignedSquad += 1;
  });

  return squads;
}

const shuffleArray = (array) => {
  const arrayCopy = array.slice();

  let i = 0;
  let j = 0;
  let temp = null;

  for (i = arrayCopy.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = arrayCopy[i]
    arrayCopy[i] = arrayCopy[j]
    arrayCopy[j] = temp
  }

  return arrayCopy;
}
