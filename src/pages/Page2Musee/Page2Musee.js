
import styles from "./Page2Musee.module.scss";
import React from 'react'
import BoxText from "../../components/BoxText/BoxText";

const Page2Musee = () => {
  return (
    <div className={styles.containerPage2Musee}>
       <div className={styles.containerTextMusee}>

          <BoxText
          textBoxContenu="Le regard du cavalier te guidera... Qu’est ce que cela veut bien pouvoir dire ?"
          namePerso="Vous"
          

          />
       </div>
    </div>
  );
};

export default Page2Musee;
