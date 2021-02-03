
import styles from "./Home.module.css";
import React from 'react'
import Carnet from '../../components/Carnet/Carnet'


const Home = () => {
  return (
    <div className={styles.containerAbout}>
      Home
      < Carnet />
    </div>
  );
};

export default Home;
