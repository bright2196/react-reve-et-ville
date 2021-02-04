import styles from "./Page7Suie.module.scss";
import React from 'react'
import InputText from "../../components/InputCode/InputCode";
import BoxText from "../../components/BoxText/BoxText";
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'

const Page7Suie = () => {
  return (
    <div className={styles.containerPage7Suie}>
        <div className={styles.ContainerInput}>
              <InputText
                  placeholderInput="Saisir le code ici"
              />
        </div >
        <div classname={styles.imgPage7}>
        <div classname={styles.focusPage7} id="focus"/>
          </div>

        <div className={styles.ContainerBoxText}>
            <BoxText
            textBoxContenu="Mince, le tableau est endommagé. Le temps ne l'a pas épargné… Je n'arrive pas à discerner les détails. Mais peut être qu'avec un peu de lumière …"
            namePerso="Vous"
            />
        </div>
        <Link href="pageTransition" ><NormalButton buttonText="J'ai trouvé le code, voir la suite ->" link="" /></Link >
        
    </div>
  );
};

export default Page7Suie;
