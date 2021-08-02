import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const esquadLogoSrc = "/squat.png"

export default function Home() {
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

        <div className={styles.grid}>
          <form onSubmit={buildSquads}>
            <div>
              <label htmlFor="teams">Equipos (duplas/tríos/persona)</label>
            </div>
            <div>
              <textarea id="teams" type="textarea" required aria-required />
            </div>
            <div>
              <button type="submit">Formar squads</button>
            </div>
          </form>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

const buildSquads = async event => {
  event.preventDefault()

  const teamsSplit = event.target.teams.value.trim().split("\n")
  console.log('building squads with the following:')
  console.log(JSON.stringify({ teams: teamsSplit }))

  const res = await fetch(
    '/api/squad',
    {
      body: JSON.stringify({
        teams: teamsSplit
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }
  )

  return await res.json()
}

