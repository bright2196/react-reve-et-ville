import styles from "./Page9GravurePoussiere.module.scss";
import React from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';

const Page9GravurePoussiere = () => {
  return (
    <div className={styles.containerPage9GravurePoussiere}>
      <BackgroundImage ImageNum={0} Blur={false} GreyColor={true} BrownColor={false}/>
      Page9GravurePoussiere
      <Link href="pageGravureSansPoussiere" ><NormalButton buttonText="J'ai dépoussieré la gravure, voir la suite ->" link="" /></Link >
            
    </div>
  );
};

export default Page9GravurePoussiere;
