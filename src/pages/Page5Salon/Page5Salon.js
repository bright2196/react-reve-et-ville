import styles from "./Page5Salon.module.scss";
import React from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'

const Page5Salon = () => {
  return (
    <div className={styles.containerPage5Salon}>
      <Link href="pageSuie" ><NormalButton buttonText="J'ai identifié le tableau intru, voir la suite ->" link="" /></Link >
    </div>
  );
};

export default Page5Salon;
