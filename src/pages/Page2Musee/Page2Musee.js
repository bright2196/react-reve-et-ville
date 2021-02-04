import styles from "./Page2Musee.module.scss";
import React from "react";
import BoxText from "../../components/BoxText/BoxText";
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from "../../components/Link/Link";
import BackgroundImg from "../../components/BackgroundImage/BackgroundImage";
import musee from "../../img/tableaux/MuseeEdit.jpg";

const Page2Musee = () => {
  return (
    <div className={styles.containerPage2Musee}>
      <BoxText
        textBoxContenu="Le regard du cavalier te guidera... Qu’est ce que cela veut bien pouvoir dire ?"
        namePerso="Vous"
      />
      <BackgroundImg ImageNum={2} Blur={true} />
      <img src={musee} alt="Musée Enigme" />
      <Link href="pageNatureMorte">
        <NormalButton
          buttonText="J'ai cliqué sur le tableaux de la nature morte, je passe a la suite ->"
        />
      </Link>
    </div>
  );
};

export default Page2Musee;
