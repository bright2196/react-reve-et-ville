import styles from "./Page2Musee.module.scss";
import React from "react";
import BoxText from "../../components/BoxText/BoxText";
import Link from "../../components/Link/Link";
import BackgroundImg from "../../components/BackgroundImage/BackgroundImage";
import musee from "../../img/tableaux/MuseeEdit.jpg";
import Header from '../../components/Header/Header'

const Page2Musee = () => {
  return (
    <div>
      <Header colorIcones={true} allowPageSecrete={false} allowCarnet={true} page={2}/>
      <div className={styles.containerPage2Musee}>
        <BackgroundImg ImageNum={2} Blur={true} BrownColor={true}/>
        
        <div className={styles.containerImage}>
               <img className={styles.tableau} src={musee} alt="Musée Enigme" />
              <Link href="pageNatureMorte" >
              <div className={styles.clickableArea} ></div>
              </Link>
          </div>
       
        <BoxText
          textBoxContenu='Maintenant que je suis au bon endroit, voyons si la note laissée par mon grand-père peut être utile. "Le regard du cavalier te guidera..." Qu’est-ce que cela veut bien pouvoir dire ?'
          namePerso="Vous"
        />
        
      </div>
    </div>
  );
};

export default Page2Musee;
