import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { Flex, Spacer, Text } from '@chakra-ui/react';

import styles from '../styles/Home.module.css';

import TeamsForm from '../components/TeamsForm';
import SquadsList from '../components/SquadsList';
import EsquadHeader from '../components/EsquadHeader';

export default function Home() {
  const [squads, setSquads] = useState([]);

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

  const teamsSize =
    squads.length > 0
      ? squads
          .map((squad) => squad.teams.length)
          .reduce((acc, current) => acc + current)
      : 0;

  return (
    <Flex
      id="pageContainer"
      direction="column"
      height="100vh"
      justifyContent="space-between"
      alignItems="stretch"
      p="0 1.5rem"
      background="white"
    >
      <Head>
        <title>Esquad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex direction="column" height="100vh">
        <Flex as="main" className={styles.main} justifyContent="start">
          <EsquadHeader />

          <Text fontSize="md">
            Organiza squads para demos y retros fácilmente
          </Text>

          <Flex
            id={styles.teamsForm}
            direction="column"
            alignItems="center"
            pt={squads.length > 0 ? 8 : 24}
          >
            <TeamsForm handleSubmit={handleSubmit} teamsSize={teamsSize} />
            <SquadsList squads={squads} />
          </Flex>
        </Flex>
      </Flex>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <Spacer p={0.5} />
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.logo}
            width={70.75}
            height={16}
          />
        </a>
      </footer>
    </Flex>
  );
}
