import styles from "./Tutoriel.module.scss";
import React from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage'
import Header from '../../components/Header/Header'

const Tutoriel = () => {
  return (
  <div>
    <Header colorIcones={false} allowPageSecrete={false} allowCarnet={true} page={0}/>
    <div className={styles.hintTuto}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12.492" height="31.072" viewBox="0 0 12.492 31.072">
            <g id="Groupe_16" data-name="Groupe 16" transform="translate(0.246)">
                <path id="Tracé_57" data-name="Tracé 57" d="M0,31V0" transform="translate(6)" fill="none" stroke="#4c2209" strokeWidth="1"/>
                <path id="Tracé_50" data-name="Tracé 50" d="M6,10A19.413,19.413,0,0,0,3.975,3.9,12.233,12.233,0,0,0,0,0" transform="translate(0 21)" fill="none" stroke="#4c2209" strokeWidth="1"/>
                <path id="Tracé_51" data-name="Tracé 51" d="M0,10A19.413,19.413,0,0,1,2.025,3.9,12.233,12.233,0,0,1,6,0" transform="translate(6 21)" fill="none" stroke="#4c2209" strokeWidth="1"/>
            </g>
            </svg>
              <p className={styles.hintTextTuto}>Vous avez accès à votre carnet en cliquant ici. Vous avez également accès aux indices récoltés tout au long de votre parcours. L'onglet galerie vous permet d'accéder aux vraies références des œuvres utilisées dans l'histoire. </p>
      </div>
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
