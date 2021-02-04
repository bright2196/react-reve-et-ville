import styles from "./Page9GravurePoussiere.module.scss";
import React from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import image from '../../img/tableaux/gravure.jpg'
import texture from '../../img/filtres/filtregravure.png'


const Page9GravurePoussiere = () => {
  return (
    <div className={styles.containerPage9GravurePoussiere}>
      <BackgroundImage ImageNum={3} Blur={true} GreyColor={false} BrownColor={true}/>
      Page9GravurePoussiere
      <div className={styles.imageContainer}>
        <img src={image} className={styles.imageGravure} alt="Gravure"/>
        <div className={styles.textureColor}></div>
        <div className={styles.texture} style={{backgroundImage: `url(${texture})`}}></div>
      </div>
      {/* <Link href="pageGravureSansPoussiere" ><NormalButton buttonText="J'ai dépoussieré la gravure, voir la suite ->" link="" /></Link > */}
    </div>
  );
};

export default Page9GravurePoussiere;
