import styles from "./Page12Final.module.scss";
import React from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage'
import ImageLettreFinal from '../../img/Final.png'
import BoxText from "../../components/BoxText/BoxText";
import Header from "../../components/Header/Header"

class Page12Final extends React.Component {

  render() {

    return (
    <div >
      <Header colorIcones={true} allowPageSecrete={true} allowCarnet={true}/>
      <div className={styles.containerPage12Final}>
        <BackgroundImg ImageNum={3} Blur={false}/>
        <img src={ImageLettreFinal} className={styles.imgFinal} alt='' />
            <BoxText textBoxContenu='
            A l’heure où j’écris ces lignes, la place de la femme au sein du milieu artistique n’est pas très bien perçue, c’est pour cela que nous l’avions dissimulé. 
            Il faudra du temps mais je sais que cela changera un jour, j’en suis persuadé.
            Nous tenions à te dire que nous t’aimons tous les deux. Prends soin de l’héritage de ta grand-mère et va dire au monde que l’art est quelque chose de magnifique.
            Ton grand-père.'></BoxText>

            <div className={styles.boutonSuivantPage12}>
              <Link href="home" ><NormalButton buttonText="C'est le final, retour a l'accueil ->" color="#FFFDF1" /></Link >
            </div>
  
      </div>
    </div>
  );
 }
};

export default Page12Final;
