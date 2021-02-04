import styles from "./Tutoriel.module.scss";
import React from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage'
import Header from '../../components/Header/Header'

const Tutoriel = () => {
  return (
  <div>
    <Header colorIcones={false}/>
    <div className={styles.containerTutoriel}>
      <BackgroundImg ImageNum={0} Blur={false}/>
      <p className={styles.tutorielText}>Déplacez votre curseur sur les pages du carnet et sur les tableaux. 
          Soyez attentifs aux détails et n'hésitez pas à fouiller! 
          Résolvez le mystère de ce carnet…</p>
      <div className={styles.buttonContainer}>
        <Link href="prologue">
          <NormalButton
              buttonText="J'ai compris !"
              link=""
          />
        </Link >
      </div>
    </div>
  </div>
  );
};

export default Tutoriel;
