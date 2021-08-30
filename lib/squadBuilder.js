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

const chooseCaptain = (teams) => {
  if (teams.length === 0) return undefined;

  const people = [];
  teams.forEach((team) => {
    people.push(team.split(' - '));
  });

  const totalPeople = people.flat().length;
  const randomPosition = Math.floor(Math.random() * totalPeople);
  const chosenCaptain = people.flat()[randomPosition];

  return chosenCaptain;
};

const buildEmptySquads = (squadAmount) => {
  const newSquads = [];

  for (let i = 0; i < squadAmount; i += 1) {
    newSquads.push({ name: `Squad ${i + 1}`, teams: [] });
  }

  return newSquads;
};

const squadBuilder = {
  build(teams, squadAmount = 4) {
    if (teams.length === 0) return [];

    const newEmptySquads = buildEmptySquads(squadAmount);

    const shuffledTeams = shuffleArray(teams);

    let assignedSquad = 0;
    shuffledTeams.forEach((team) => {
      const currentSquad = assignedSquad % squadAmount;
      const squad = newEmptySquads[currentSquad];

      squad.teams.push(team);

      assignedSquad += 1;
    });

    newEmptySquads.forEach((squad, i) => {
      newEmptySquads[i].captain = chooseCaptain(squad.teams);
    });

    return newEmptySquads;
  },
};

export default squadBuilder;
