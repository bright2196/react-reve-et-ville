import styles from "./Page12Final.module.scss";
import React from 'react'
//import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage'
import ImageLettreFinal from '../../img/Final.png'
import BoxText from "../../components/BoxText/BoxText";
import Header from "../../components/Header/Header"; 

class Page12Final extends React.Component {

  render() {
    return (
    <div >
      <Header colorIcones={true} allowPageSecrete={true} allowCarnet={true} page={0} pageCarnet={0}/>
      <audio  id='Winsong' />
      <div className={styles.containerPage12Final}>
        <BackgroundImg ImageNum={3} Blur={false}/>
        <img src={ImageLettreFinal} className={styles.imgFinal} alt='' />
              <BoxText textBoxContenu='Je te félicite. Tu viens de découvrir l’un des secrets les mieux gardés par notre famille. Si tu lis cette lettre, c’est probablement que tu as réussi 
            à résoudre toutes les énigmes que ta grand-mère a disséminées tout au long de ses travaux... '></BoxText>
            <div className={styles.boutonSuivantContainer}>
            <Link href="pageFinal2" >
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
