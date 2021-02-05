import styles from "./Page6Pendu.module.scss";
import React from 'react'
import Link from '../../components/Link/Link'
import NormalButton from "../../components/NormalButton/NormalButton";
import BoxText from "../../components/BoxText/BoxText";
import BackgroundImg from "../../components/BackgroundImage/BackgroundImage"
import Header from '../../components/Header/Header'

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
      <div>
        <Header colorIcones={false}/>
        <div className={styles.hintTuto}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12.492" height="31.072" viewBox="0 0 12.492 31.072">
            <g id="Groupe_16" data-name="Groupe 16" transform="translate(0.246)">
                <path id="Tracé_57" data-name="Tracé 57" d="M0,31V0" transform="translate(6)" fill="none" stroke="#4c2209" stroke-width="1"/>
                <path id="Tracé_50" data-name="Tracé 50" d="M6,10A19.413,19.413,0,0,0,3.975,3.9,12.233,12.233,0,0,0,0,0" transform="translate(0 21)" fill="none" stroke="#4c2209" stroke-width="1"/>
                <path id="Tracé_51" data-name="Tracé 51" d="M0,10A19.413,19.413,0,0,1,2.025,3.9,12.233,12.233,0,0,1,6,0" transform="translate(6 21)" fill="none" stroke="#4c2209" stroke-width="1"/>
            </g>
            </svg>
              <p className={styles.hintTextTuto}>Peut-être que la page secrète que vous avez découvert peut vous aider sur cette énigme…</p>
      </div>
        <div className={styles.containerPage6Pendu}>
          <BackgroundImg Blur={true} ImageNum={1}/>
          {
            win?
            (
                <div className={styles.animFadeIn}>
                  <div>
                  <p className={styles.hintTextTuto}>Peut-être que la page secrète que vous avez découvert peut vous aider sur cette énigme…</p>
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
      </div>
    );
  };
}
export default Page6Pendu;
