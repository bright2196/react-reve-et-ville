import styles from "./Page8Transition.module.scss";
import React from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage'
import Header from '../../components/Header/Header'
import BoxText from "../../components/BoxText/BoxText";

const Page8Transition = () => {
  return (
    <div>
      <Header colorIcones={true} allowPageSecrete={true} allowCarnet={true}/>
      <div className={styles.containerPage8Transition}>
        <BackgroundImg ImageNum={2} Blur={true}/>
          <div className={styles.containerPage8Transition}>
            <Link href="pageGravurePoussiere" ><NormalButton buttonText="C'est parti !" color="#FFFDF1" /></Link >
            <BoxText
            namePerso="Vous"
            textBoxContenu="Je ne sais pas ce que ce code peut signifier... ARCH, comme archives ? Il pourrait s'agir d'un numéro de dossier. Maintenant que j'y pense, je devrais y trouver des choses intéressantes… Allons-y!"
          />
          </div>
      </div>
    </div>
  );
};

export default Page8Transition;
