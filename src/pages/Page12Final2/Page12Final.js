import styles from "./Page12Final.module.scss";
import React from 'react'
//import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage'
import ImageLettreFinal from '../../img/Final.png'
import BoxText from "../../components/BoxText/BoxText";
import Header from "../../components/Header/Header"

class Page12Final extends React.Component {


  render() {

    return (
    <div >
      <Header colorIcones={true} allowPageSecrete={true} allowCarnet={true} page={0} pageCarnet={0}/>
      <audio  id='Winsong' />
      <div className={styles.containerPage12Final}>
        <BackgroundImg ImageNum={3} Blur={false}/>
        <img src={ImageLettreFinal} className={styles.imgFinal} alt='' />
                  <BoxText textBoxContenu='Car oui, la véritable artiste derrière tout ça c’était elle. 
                  Tu as su faire preuve d’observation, de déduction et de patience pour en arriver là. Ta grand-mère et moi aimions par-dessus tout les énigmes et les jeux de rôles. 
                  Dès le début, cela était son idée, et nous sommes fiers que tu aies pu en arriver au bout, fiers de toi.
                  '></BoxText>
                  <div className={styles.boutonSuivantContainer}>
            <Link href="pageFinal3" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68">
                        <g id="Groupe_31" data-name="Groupe 31" transform="translate(-1233 -337)">
                        <g id="Ellipse_9" data-name="Ellipse 9" transform="translate(1233 337)" fill="none" stroke="#FFFDF1" strokeWidth="1">
                        <circle cx="34" cy="34" r="34" stroke="none"/>
                        <circle cx="34" cy="34" r="33.5" fill="none"/>
                        </g>
                        <g id="Groupe_16" data-name="Groupe 16" transform="translate(1252 377) rotate(-90)">
                        <path id="Tracé_57" data-name="Tracé 57" d="M0,31V0" transform="translate(6)" fill="none" stroke="#FFFDF1" strokeWidth="1"/>
                        <path id="Tracé_50" data-name="Tracé 50" d="M6,10A19.413,19.413,0,0,0,3.975,3.9,12.233,12.233,0,0,0,0,0" transform="translate(0 21)" fill="none" stroke="#FFFDF1" strokeWidth="1"/>
                        <path id="Tracé_51" data-name="Tracé 51" d="M0,10A19.413,19.413,0,0,1,2.025,3.9,12.233,12.233,0,0,1,6,0" transform="translate(6 21)" fill="none" stroke="#FFFDF1" strokeWidth="1"/>
                        </g>
                    </g>
                    </svg>
                </Link>
          </div> 
      </div>
    </div>
  );
 }
};

export default Page12Final;
