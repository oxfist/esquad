import { useState } from 'react';
import { Flex, Spacer } from '@chakra-ui/react';

import styles from '../styles/Home.module.css';

import TeamsForm from './TeamsForm';
import SquadsList from './SquadsList';

const getTeamsAmount = (squads) => {
  return squads.length > 0
    ? squads
        .map((squad) => squad.teams.length)
        .reduce((acc, current) => acc + current)
    : 0;
};

export default function EsquadBody() {
  const [squads, setSquads] = useState([]);

  const teamsSize = getTeamsAmount(squads);

  const buildSquads = async (teams, squadAmount) => {
    const requestOptions = {
      body: JSON.stringify({
        teams,
        squadAmount,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    };

    const resFromServer = await fetch('/api/squad', requestOptions);

    return resFromServer.json();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const splitTeams = event.target.teams.value.trim().split('\n');
    const squadAmount = event.target.squadAmount.value;
    const newSquads = await buildSquads(splitTeams, squadAmount);
    setSquads(newSquads.body.squads);
  };

  return (
    <Flex id={styles.teamsForm} direction="row" alignItems="center" pt={24}>
      <TeamsForm handleSubmit={handleSubmit} teamsSize={teamsSize} />
      <Spacer p={3} />
      <SquadsList squads={squads} />
    </Flex>
  );
}
