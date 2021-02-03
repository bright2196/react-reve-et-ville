import styles from "./Page12Final.module.scss";
import React from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'

const Page12Final = () => {
  return (
    <div className={styles.containerPage12Final}>
      <h1>FINAL</h1>
      <Link href="home" ><NormalButton buttonText="C'est le final, retour a l'acceuil ->" link="" /></Link >
    </div>
  );
};

export default Page12Final;
