import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Genzo Namikawa</title>
        <meta name="description" content="A professional showcase of Genzo Namikawa's works and projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.japanese}>
          並川玄蔵
        </h1>
        <h1 className={styles.english}>
          Genzo Namikawa
        </h1>

        <p className={styles.description}>
          A Software Developer in the Tokyo Metropolitan Area
        </p>

      </main>

    </div>
  )
}
