import styles from "./Page7Suie.module.css";
import React from 'react'
import InputText from "../../components/InputCode/InputCode";
import imagePage7 from "./img/tableauPage7.jpg"

const Page7Suie = () => {
  return (
    <div className={styles.containerPage7Suie}>
        <div className={styles.ContainerInput}>
              <InputText
                  placeholderInput="Saisir le code ici"
              />
        </div >
        <div className={styles.ContainerImage}>
            <img src={imagePage7} alt=""/>
        </div>
    </div>
  );
};

export default Page7Suie;
