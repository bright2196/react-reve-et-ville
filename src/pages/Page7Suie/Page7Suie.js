import styles from "./Page7Suie.module.scss";
import React from 'react'
import InputText from "../../components/InputCode/InputCode";
import BoxText from "../../components/BoxText/BoxText";
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage'



const Page7Suie = () => {
  return (
    <div className={styles.containerPage7Suie}>
          <BoxText
          textBoxContenu="Mince, le tableau est endommagé. Le temps ne l'a pas épargné… Je n'arrive pas à discerner les détails. Mais peut être qu'avec un peu de lumière …"
          namePerso="Vous"
          />
      <BackgroundImg ImageNum={1} Blur={false}/>
        <div className={styles.ContainerInput}>
              <InputText
                  placeholderInput="Saisir le code ici"
              />
        </div >
        <div className={styles.imagePage7}>
               <div className={styles.focusPage7} id="focusPage7"></div>
        </div>
        <div className={styles.boutonSuivantPage7}>
        <Link href="pageTransition" ><NormalButton buttonText="J'ai trouvé le code, voir la suite ->" link="" /></Link >
        </div>
    </div>
  );
};


export default Page7Suie;
