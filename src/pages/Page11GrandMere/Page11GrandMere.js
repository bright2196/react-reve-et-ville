import styles from "./Page11GrandMere.module.scss";
import React from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage'

const Page11GrandMere = () => {
  return (
    <div className={styles.containerPage11GrandMere}>
      <BackgroundImg ImageNum={0} Blur={true}/>
      Page11GrandMere
      <Link href="pageFinal" ><NormalButton buttonText="J'ai lue les lettres, voir la suite ->" link="" /></Link >
    </div>
  );
};

export default Page11GrandMere;
