
import styles from "./Page1Carte.module.css";
import React from 'react'
import Carte from "./img/carteBordeaux.png"
const Page1Carte = () => {
  return (
    <div className={styles.containerPage1Carte}>
        <div className={styles.containerCarteImage}>

            <img className={styles.imageCarte} src={Carte} alt="Carte de Bordeaux"/>
        </div>
    </div>
  );
};

export default Page1Carte;
