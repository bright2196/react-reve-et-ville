import React from 'react'
import styles from "./Page3NatureMorte.module.scss";
import BackgroundImg from "../../components/BackgroundImage/BackgroundImage";
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BoxText from '../../components/BoxText/BoxText';
import naturemorte from '../../img/tableaux/NatureMorte.jpg';

const Page3NatureMorte = () => {
  return (
    <div className={styles.containerPage3NatureMorte}>
      <BackgroundImg ImageNum={2} Blur={true}/>
      <img src={naturemorte} className={styles.tableau} alt="Nature Morte Enigme"/>
      <BoxText
        textBoxContenu="Ce carnet ressemble étrangement au mien… Mais, cette page n’est pas censée exister..."
        namePerso="Vous"
      />
      <div className={styles.divProvisoire}>
      <Link href="pageLoupe" >
        <NormalButton buttonText="Je veux aller a la loupe, voir la suite ->" link="" />
      </Link >
      </div>
    </div>
  );
};

export default Page3NatureMorte;

