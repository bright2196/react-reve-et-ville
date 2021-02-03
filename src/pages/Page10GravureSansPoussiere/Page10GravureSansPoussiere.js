import styles from "./Page10GravureSansPoussiere.module.scss";
import React from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'

const Page10GravureSansPoussiere = () => {
  return (
    <div className={styles.containerPage10GravureSansPoussiere}>
      Page10GravureSansPoussiere
      <Link href="pageGrandMere" ><NormalButton buttonText="J'ai vue ma grand mère avec le peinceau, voir la suite ->" link="" /></Link >
    </div>
  );
};

export default Page10GravureSansPoussiere;
