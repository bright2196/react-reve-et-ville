import styles from "./Page4Loupe.module.scss";
import React from 'react';
import BoxText from '../../components/BoxText/BoxText';
import tableau4 from '../../img/tableau4.jpg';
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'


const Page4Loupe = () => {
  return (
    <div className={styles.containerPage4Loupe}>

      <img src={tableau4} alt="Tableau 4" />

        <BoxText
          namePerso="Vous"
          textBoxContenu="Une page secrète ! Jetons un œil au carnet pour la trouver et découvrir ce qu'elle contient."
        />
        <Link href="pagePendu" ><NormalButton buttonText="J'ai trouver la page du carnet, voir la suite ->" link="" /></Link >

    </div>
  );
};

export default Page4Loupe;
