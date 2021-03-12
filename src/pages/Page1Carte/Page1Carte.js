
import styles from "./Page1Carte.module.scss";
import React from 'react'
import Carte from "./img/carteBordeaux.jpg"
// import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage'
import Header from '../../components/Header/Header'
import BoxText from '../../components/BoxText/BoxText'


const Page1Carte = () => {
  return (
    <div >
      <Header colorIcones={true} allowPageSecrete={false} allowCarnet={true} page={1} pageCarnet={1}/>
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
      <div className={styles.containerPage1Carte}>
      <BoxText 
          textBoxContenu="Mon grand-père a travaillé pour le musée des Beaux-Arts de Bordeaux à l'époque. Cela ne m'étonnerais pas que je trouve la réponse à mes questions lâ-bas. Heureusement que cette carte étais dans ce carnet, elle va m'aider à localiser le musée..."
          namePerso="Vous"
        />
      </div>
        
    </div>
  );
};

export default Page1Carte;
