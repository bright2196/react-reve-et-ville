
import styles from "./Home.module.css";
import React from 'react'
import Link from '../../components/Link/Link'

const Home = () => {
  return (
    <div className={styles.containerAbout}>
      Home
      <Link
        href="pagecarte"
      >
        <button>
          Coucou
        </button>
      </Link>
    </div>
  );
};

export default Home;
