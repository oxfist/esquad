const TOTAL_SQUADS = 4;

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

const squadBuilder = {
  build(teams) {
    if (teams.length === 0) return [];

    const newSquads = [
      { name: 'Squad 1', teams: [] },
      { name: 'Squad 2', teams: [] },
      { name: 'Squad 3', teams: [] },
      { name: 'Squad 4', teams: [] },
    ];

    const shuffledTeams = shuffleArray(teams);

    let assignedSquad = 0;
    shuffledTeams.forEach((team) => {
      const currentSquad = assignedSquad % TOTAL_SQUADS;
      const squad = newSquads[currentSquad];

      squad.teams.push(team);

      assignedSquad += 1;
    });

    newSquads.forEach((squad, i) => {
      newSquads[i].captain = chooseCaptain(squad.teams);
    });

    return newSquads;
  },
};

export default squadBuilder;
