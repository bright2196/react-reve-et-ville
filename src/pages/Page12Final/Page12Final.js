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
              <BoxText textBoxContenu='Je te félicite. Tu viens de découvrir l’un des secrets les mieux gardés par notre famille. Si tu lis cette lettre, c’est probablement que tu as réussi 
            à résoudre toutes les énigmes que ta grand-mère a disséminé tout au long de ses travaux... '></BoxText>

            <div className={styles.boutonSuivantPage12}>
              <Link href="pageFinal2" ><NormalButton buttonText="Suivant ->" color="#FFFDF1" /></Link >
            </div>
    
      </div>
    </div>
    );
  }
};

export default Page12Final;
