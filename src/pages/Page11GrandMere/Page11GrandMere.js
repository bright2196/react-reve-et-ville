import styles from "./Page11GrandMere.module.scss";
import React from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage'
import BoxText from "../../components/BoxText/BoxText";
import grandMere from "../../img/tableaux/grandMere.jpg"
import Header from '../../components/Header/Header'

const Page11GrandMere = () => {
  return (
    <div>
      <Header colorIcones={true}/>
      <div className={styles.containerPage11GrandMere}>
        <BackgroundImg ImageNum={3} Blur={true}/>
        <BoxText
          namePerso="Vous"
          textBoxContenu="Ma grand-mère ! Et elle peint !"
        />
        <img src={grandMere} className={styles.tableau} alt="Grand-mère peint"/>
        <div className={styles.divProvisoire}>
          <Link href="pageFinal" ><NormalButton buttonText="J'ai lu les lettres, voir la suite ->"/></Link>
        </div>
      </div>
    </div>
  );
};

export default Page11GrandMere;
