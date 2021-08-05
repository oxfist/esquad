import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

import TeamsForm from '../components/teamsForm';
import SquadsList from '../components/squadsList';

const esquadLogoSrc = '/squat.png';

export default function Home() {
  const [squads, setSquads] = useState([]);

  const buildSquads = async (teamsText) => {
    const teamsSeparated = teamsText.split('\n');

    const requestOptions = {
      body: JSON.stringify({
        teams: teamsSeparated,
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
    const newSquads = await buildSquads(event.target.teams.value.trim());
    setSquads(newSquads.body.squads);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Esquad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>Esquad</span>
          <Image
            src={esquadLogoSrc}
            alt="Icon of person performing a squat"
            width={64}
            height={64}
          />
        </h1>

        <p className={styles.description}>
          Organiza squads para demos y retros fácilmente
        </p>

        <div id={styles.teamsForm} className={styles.grid}>
          <TeamsForm handleSubmit={handleSubmit} />
          <SquadsList squads={squads} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          {' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
