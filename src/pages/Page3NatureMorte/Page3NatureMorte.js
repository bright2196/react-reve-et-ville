import React from 'react'
import styles from "./Page3NatureMorte.module.scss";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";

const Page3NatureMorte = () => {
  return (
    <div className={styles.containerPage3NatureMorte}>
      <BackgroundImage
        Blur={true}
        ImageNum={2}
      />
    </div>
  );
};

export default Page3NatureMorte;

