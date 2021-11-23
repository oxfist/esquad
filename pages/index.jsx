import Head from 'next/head';
import Image from 'next/image';
import { Flex, Spacer, Text } from '@chakra-ui/react';

import styles from '../styles/Home.module.css';

import EsquadHeader from '../components/EsquadHeader';
import EsquadBody from '../components/EsquadBody';

function EsquadTitle() {
  return (
    <>
      <EsquadHeader />
      <Text fontSize="md">Organiza squads para demos y retros fácilmente</Text>
    </>
  );
}

export default function Home() {
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
        <link rel="icon" href="/squat.png" />
        <script
          async
          defer
          data-website-id="6723b37e-6b99-4618-807a-226f44de1729"
          src="https://esquad-analytics.herokuapp.com/umami.js"
        />
      </Head>

      <Flex direction="column" height="100vh">
        <Flex as="main" className={styles.main} justifyContent="start">
          <EsquadTitle />
          <EsquadBody />
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
