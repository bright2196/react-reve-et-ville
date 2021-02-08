
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
      <Header colorIcones={true} allowPageSecrete={false} allowCarnet={true} page={1}/>

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
