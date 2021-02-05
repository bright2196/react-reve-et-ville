import styles from "./Page10GravureSansPoussiere.module.scss";
import React from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage'
import Header from '../../components/Header/Header'

import image from '../../img/tableaux/gravure.jpg'

const Page10GravureSansPoussiere = () => {
  return (
    <div>
      <Header colorIcones={true} allowPageSecrete={true} allowCarnet={true}/>
      <div className={styles.containerPage10GravureSansPoussiere}>
        <BackgroundImg ImageNum={3} Blur={true}/>
        <div>
          <img src={image} className={styles.imageGravure} alt="Gravure"/>
          <Link href="pageGrandMere" ><NormalButton buttonText="J'ai vu ma grand mère avec le pinceau, voir la suite ->" color="#FFFDF1" /></Link >
        </div>
        
      </div>
    </div>
  );
};

export default Page10GravureSansPoussiere;
