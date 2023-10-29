import classNames from "classnames";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";

const useLoaded = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return isLoaded;
};

export default function Index() {
  const isLoaded = useLoaded();
  console.log(isLoaded);
  return (
    <div className={styles.index}>
      <Head>
        <title>Genzo Namikawa</title>
        <meta
          name="description"
          content="A professional showcase of Genzo Namikawa's works and projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 style={{ opacity: isLoaded ? 1 : 0 }} className={styles.japanese}>
          並川玄蔵
        </h1>
        <h1
          style={{
            opacity: isLoaded ? 1 : 0,
          }}
          className={styles.english}
        >
          Genzo Namikawa
        </h1>

        <p
          className={styles.description}
          style={{
            opacity: isLoaded ? 1 : 0,
          }}
        >
          A Software Developer in the Tokyo Metropolitan Area
        </p>
      </main>
    </div>
  );
}
