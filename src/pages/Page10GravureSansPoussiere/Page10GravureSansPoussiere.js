import styles from "./Page10GravureSansPoussiere.module.scss";
import React from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage'

const Page10GravureSansPoussiere = () => {
  return (
    <div className={styles.containerPage10GravureSansPoussiere}>
      <BackgroundImg ImageNum={0} Blur={false}/>
      Page10GravureSansPoussiere
      <Link href="pageGrandMere" ><NormalButton buttonText="J'ai vu ma grand mère avec le pinceau, voir la suite ->" link="" /></Link >
    </div>
  );
};

export default Page10GravureSansPoussiere;
