import styles from "./Page4Loupe.module.scss";
import React from 'react';
import BoxText from '../../components/BoxText/BoxText';
import tableau4 from '../../img/tableau4.jpg';
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage'
import Header from '../../components/Header/Header'


const Page4Loupe = () => {
  return (
    <div>
      <Header colorIcones={true}/>
      <div className={styles.containerPage4Loupe}>
        <BackgroundImg ImageNum={2} Blur={true}/>
        <img src={tableau4} className={styles.tableau} alt="Tableau 4" />
        <BoxText
          namePerso="Vous"
          textBoxContenu="Une page secrète ! Jetons un œil au carnet pour la trouver et découvrir ce qu'elle contient."
        />
        <div className={styles.divProvisoire}>
          <Link href="pagePendu" ><NormalButton buttonText="J'ai trouver la page du carnet, voir la suite ->" link="" /></Link >
        </div>
      </div>
    </div>
  );
};

export default Page4Loupe;
