import styles from "./Page6Pendu.module.scss";
import React from 'react'
import Link from '../../components/Link/Link'
import NormalButton from "../../components/NormalButton/NormalButton";
import BoxText from "../../components/BoxText/BoxText";
import BackgroundImg from "../../components/BackgroundImage/BackgroundImage"
import animG from "../../index.scss"

// Img
import note1 from '../../img/pendu/noteTableaux.png'
import noteWin from '../../img/pendu/noteTableauxWin.png'

class Page6Pendu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        win: false,
    };
  }


  render() {
    const { win } = this.state

    return (
      <div className={styles.containerPage6Pendu}>
        <BackgroundImg Blur={true} ImageNum={1}/>
        {
          win?
          (
              <div className={styles.animFadeIn}>
                <div>
                  <img src={noteWin} className={styles.img} alt=""/>
                  <div className={styles.btnContainer}>
                  <BoxText textBoxContenu='Super ! Le mot secret étais "Tableaux" ! Et il doit donc y en avoir treize sur la toile suivante... De plus qui est ce fidèle compagnon ?'></BoxText>
                    <div className={styles.btn}><Link href="pageSalon" >
                      <NormalButton buttonText="Voyons où cela nous mène ..." link="" /></Link >
                    </div>
                  </div>
                </div>
              </div> 
          )
          :
          (
            <div className={styles.animFadeIn} >
              <img src={note1} className={styles.img} alt=""/>
              <div className={styles.btnContainer}>
                <BoxText textBoxContenu="'Ses treize _ _ _ _ _ _ _ _ ? ' Qu'est-ce qu'il a voulu dire ? Quel est le mot secret?" namePerso="Vous" />
                <div onClick={() => {
                  const motJoueur = prompt('Quel est le mot secret ?')
                  if(motJoueur === 'tableaux' | motJoueur === 'Tableaux' | motJoueur === 'TABLEAUX' ){
                    this.setState({ win: true })
                    console.log('tableaux a bien été trouvé ')
                  }
                  }} className={styles.btn}>
                  <NormalButton buttonText="Faire un essai" link="" />
                </div>
              </div>
            </div>
          )
        }
        
      </div>
    );
  };
}
export default Page6Pendu;
