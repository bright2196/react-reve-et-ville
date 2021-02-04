import styles from "./Page5Salon.module.scss";
import React from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage'

const Page5Salon = () => {
  return (
    <div className={styles.containerPage5Salon}>
      <BackgroundImg ImageNum={0} Blur={true}/>
      <Link href="pageSuie" ><NormalButton buttonText="J'ai identifié le tableau intru, voir la suite ->" link="" /></Link >
    </div>
  );
};

export default Page5Salon;
