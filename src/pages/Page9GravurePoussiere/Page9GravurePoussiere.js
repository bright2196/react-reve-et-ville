import styles from "./Page9GravurePoussiere.module.scss";
import React from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import image from '../../img/tableaux/gravure.jpg'
import texture from '../../img/filtres/filtregravure.png'
import Header from '../../components/Header/Header'


const Page9GravurePoussiere = () => {
  return (
    <div>
      <Header colorIcones={true}/>
      <div className={styles.containerPage9GravurePoussiere}>
        <BackgroundImage ImageNum={3} Blur={true} GreyColor={true} BrownColor={false}/>
        <div className={styles.imageContainer}>
          <img src={image} className={styles.imageGravure} alt="Gravure"/>
          <div className={styles.textureColor}></div>
          <div className={styles.texture} style={{backgroundImage: `url(${texture})`}}></div>
        </div>
        <div className={styles.divProvisoire}>
          <Link href="pageGravureSansPoussiere" >
            <NormalButton buttonText="J'ai dépoussieré la gravure, voir la suite ->" link="" />
          </Link >
        </div>
      </div>
    </div>
  );
};

export default Page9GravurePoussiere;
