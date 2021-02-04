
import styles from "./Page2Musee.module.scss";
import React from 'react'
import BoxText from "../../components/BoxText/BoxText";
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'

const Page2Musee = () => {
  return (
    <div className={styles.containerPage2Musee}>
          <BoxText
          textBoxContenu="Le regard du cavalier te guidera... Qu’est ce que cela veut bien pouvoir dire ?"
          namePerso="Vous"
          />
       <div className={styles.containerTextMusee}>
        <Link href="pageNatureMorte">
                  <NormalButton
                      buttonText="J'ai cliqué sur le tableaux de la nature morte, je passe a la suite ->"
                      link=""
                  />
                </Link >
        
       </div>
    </div>
  );
};

export default Page2Musee;
