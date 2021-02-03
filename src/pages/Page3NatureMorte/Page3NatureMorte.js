import React from 'react'
import styles from "./Page3NatureMorte.module.scss";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'

const Page3NatureMorte = () => {
  return (
    <div className={styles.containerPage3NatureMorte}>
      <BackgroundImage
        Blur={true}
      />
      <Link href="pageLoupe" ><NormalButton buttonText="Je veux aller a la loupe, voir la suite ->" link="" /></Link >
    </div>
  );
};

export default Page3NatureMorte;

