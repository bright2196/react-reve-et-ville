
import styles from "./Page1Carte.module.css";
import React from 'react'
import Carnet from '../../components/Carnet/Carnet'

const Page1Carte = () => {
  return (
    <div className={styles.containerPage1Carte}>
      < Carnet />
      Page1Carte
    </div>
  );
};

export default Page1Carte;
