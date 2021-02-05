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
                  <BoxText textBoxContenu='Car oui, la véritable artiste derrière tout ça c’était elle. 
                  Tu as su faire preuve d’observation, de déduction et de patience pour en arriver là. Ta grand-mère et moi aimions par-dessus tout les énigmes et jeux de rôles. 
                  Dès le début, cela était son idée, et nous sommes fiers que tu aies pu en arriver au bout, fiers de toi.
                  '></BoxText>
                    <div className={styles.boutonSuivantPage12}>
                      <Link href="pageFinal3" ><NormalButton buttonText="Suivant ->" color="#FFFDF1" /></Link >
                    </div>
      </div>
    </div>
  );
 }
};

export default Page12Final;
