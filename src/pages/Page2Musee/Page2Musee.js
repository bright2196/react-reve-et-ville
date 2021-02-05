import styles from "./Page2Musee.module.scss";
import React from "react";
import BoxText from "../../components/BoxText/BoxText";
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from "../../components/Link/Link";
import BackgroundImg from "../../components/BackgroundImage/BackgroundImage";
import musee from "../../img/tableaux/MuseeEdit.jpg";
import Header from '../../components/Header/Header'

const Page2Musee = () => {
  return (
    <div>
      <Header colorIcones={true}/>
      <div className={styles.containerPage2Musee}>
        <BackgroundImg ImageNum={2} Blur={true} BrownColor={true}/>
        <img className={styles.tableau} src={musee} alt="Musée Enigme" />
        <BoxText
          textBoxContenu="Le regard du cavalier te guidera... Qu’est ce que cela veut bien pouvoir dire ?"
          namePerso="Vous"
        />
        <div className={styles.divProvisoire}>
          <Link href="pageNatureMorte">
            <NormalButton
              buttonText="J'ai cliqué sur le tableaux de la nature morte, je passe à la suite ->"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page2Musee;
