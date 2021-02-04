
import styles from "./Page1Carte.module.scss";
import React from 'react'
import Carte from "./img/carteBordeaux.png"
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage'
import Header from '../../components/Header/Header'

const Page1Carte = () => {
  return (
    <div>
      <Header colorIcones={true}/>
      <div className={styles.containerPage1Carte}>
        <BackgroundImg ImageNum={0} Blur={false} BrownColor={true}/>
          <div className={styles.containerCarteImage}>
              <img className={styles.imageCarte} src={Carte} alt="Carte de Bordeaux"/>
              <div className={styles.divProvisoire}>
                <Link href="pageMusee" ><NormalButton buttonText="J'ai trouvé l'emplacement. Je passe à la suite. ->" link="" /></Link >
              </div>
          </div>
      </div>
    </div>
  );
};

export default Page1Carte;
