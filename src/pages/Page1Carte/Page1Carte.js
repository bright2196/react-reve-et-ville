
import styles from "./Page1Carte.module.scss";
import React from 'react'
import Carte from "./img/carteBordeaux.png"
// import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage'
import Header from '../../components/Header/Header'


const Page1Carte = () => {
  return (
    <div>
      <Header colorIcones={true} allowPageSecrete={false} allowCarnet={true}/>
      <div className={styles.hintCarnet}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12.492" height="31.072" viewBox="0 0 12.492 31.072">
          <g id="Groupe_10" data-name="Groupe 10" transform="translate(-1201.254 -107.428)">
            <line id="Ligne_23" data-name="Ligne 23" y2="31" transform="translate(1207.5 107.5)" fill="none" stroke="#d9d1cc" strokeWidth="1"/>
            <path id="Tracé_50" data-name="Tracé 50" d="M6,0A19.413,19.413,0,0,1,3.975,6.1,12.233,12.233,0,0,1,0,10" transform="translate(1201.5 107.5)" fill="none" stroke="#d9d1cc" strokeWidth="1"/>
            <path id="Tracé_51" data-name="Tracé 51" d="M0,0A19.413,19.413,0,0,0,2.025,6.1,12.233,12.233,0,0,0,6,10" transform="translate(1207.5 107.5)" fill="none" stroke="#d9d1cc" strokeWidth="1"/>
          </g>
              </svg>

              <p className={styles.hintText}>Aide-toi de ton carnet pour trouver le bon emplacement. Clique sur la carte quand tu as trouvé. Échec et mat… </p>
      </div>

      <div className={styles.containerPage1Carte}>
        <BackgroundImg ImageNum={0} Blur={false} BrownColor={true}/>
          <div className={styles.containerCarteImage}>
            <div className={styles.containerImage}>
              <img className={styles.imageCarte} src={Carte} id='Carte' alt="Carte de Bordeaux"/>
              <Link href="pageMusee" >
                <div className={styles.clickableArea} id='clickableArea'></div>
              </Link>
            </div> 
          </div>
      </div>
    </div>
  );
};

export default Page1Carte;
