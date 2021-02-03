import styles from "./Tutoriel.module.scss";
import React from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'

const Tutoriel = () => {
  return (
    <div className={styles.containerTutoriel}>
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
  );
};

export default Tutoriel;
