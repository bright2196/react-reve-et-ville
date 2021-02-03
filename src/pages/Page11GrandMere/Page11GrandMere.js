import styles from "./Page11GrandMere.module.scss";
import React from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'

const Page11GrandMere = () => {
  return (
    <div className={styles.containerPage11GrandMere}>
      Page11GrandMere
      <Link href="pageFinal" ><NormalButton buttonText="J'ai lue les lettres, voir la suite ->" link="" /></Link >
    </div>
  );
};

export default Page11GrandMere;
