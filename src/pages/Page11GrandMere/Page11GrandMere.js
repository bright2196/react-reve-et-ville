import styles from "./Page11GrandMere.module.scss";
import React from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage'
import BoxText from "../../components/BoxText/BoxText";
import grandMere from "../../img/tableaux/grandMere.jpg"

const Page11GrandMere = () => {
  return (
    <div className={styles.containerPage11GrandMere}>
      <BackgroundImg ImageNum={3} Blur={true}/>
      <BoxText
        namePerso="Vous"
        textBoxContenu="Ma grand-mère ! Et elle peint !"
      />
      <Link href="pageFinal" ><NormalButton buttonText="J'ai lue les lettres, voir la suite ->"/></Link>
      <img src={grandMere} alt="Grand-mère peint"/>
    </div>
  );
};

export default Page11GrandMere;
