import styles from "./Page7Suie.module.css";
import React from 'react'
import InputText from "../../components/InputCode/InputCode";
import imagePage7 from "./img/tableauPage7.jpg"
import BoxText from "../../components/BoxText/BoxText";

const Page7Suie = () => {
  return (
    <div className={styles.containerPage7Suie}>
        <div className={styles.ContainerInput}>
              <InputText
                  placeholderInput="Saisir le code ici"
              />
        </div >
        <div className={styles.ContainerImage}>
            <img className={styles.ImagePage7} src={imagePage7} alt=""/>
        </div>

        <div className={styles.ContainerBoxText}>
            <BoxText
            textBoxContenu="Mince, le tableau est endommagé. Le temps ne l'a pas épargné… Je n'arrive pas à discerner les détails. Mais peut être qu'avec un peu de lumière …"
            namePerso="Vous"
            />
        </div>
    </div>
  );
};

export default Page7Suie;
