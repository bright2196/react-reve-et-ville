import styles from "./Page7Suie.module.scss";
import React from 'react'
import InputText from "../../components/InputCode/InputCode";
import BoxText from "../../components/BoxText/BoxText";
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage'
import { ReactFlashlight } from "react-flashlight";
import imgPage7 from "./img/tableauPage7.jpg";


const style = {
  backgroundImage: `url(${imgPage7})`,
  height: "60vh",
  width: "50vw",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "50%",
  backgroundPosition: "center",
} 

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
        <ReactFlashlight>
          <div className={styles.imagePage7} style={style}>
          </div>
        </ReactFlashlight>
        </div>
        <div className={styles.boutonSuivantPage7}>
        <Link href="pageTransition" ><NormalButton buttonText="J'ai trouvé le code, voir la suite ->" link="" /></Link >
        </div>
    </div>
  );
};

export default Page7Suie;
