import styles from "./Page6Pendu.module.scss";
import React from 'react'
import Link from '../../components/Link/Link'
// import NormalButton from "../../components/NormalButton/NormalButton";
import BoxText from "../../components/BoxText/BoxText";
import BackgroundImg from "../../components/BackgroundImage/BackgroundImage"
import Header from '../../components/Header/Header'
import Song from '../../audio/Deverouille.mp3'

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
        <Header colorIcones={false} allowPageSecrete={true} allowCarnet={true} page={4}/>
        <audio src={Song} id='PenduTrouversong' />
        <div className={styles.hintTuto}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12.492" height="31.072" viewBox="0 0 12.492 31.072">
            <g id="Groupe_16" data-name="Groupe 16" transform="translate(0.246)">
                <path id="Tracé_57" data-name="Tracé 57" d="M0,31V0" transform="translate(6)" fill="none" stroke="#4C2209" strokeWidth="1"/>
                <path id="Tracé_50" data-name="Tracé 50" d="M6,10A19.413,19.413,0,0,0,3.975,3.9,12.233,12.233,0,0,0,0,0" transform="translate(0 21)" fill="none" stroke="#4C2209" strokeWidth="1"/>
                <path id="Tracé_51" data-name="Tracé 51" d="M0,10A19.413,19.413,0,0,1,2.025,3.9,12.233,12.233,0,0,1,6,0" transform="translate(6 21)" fill="none" stroke="#4C2209" strokeWidth="1"/>
            </g>
            </svg>
              <p className={styles.hintTextTuto}>Peut-être que la page secrète que vous avez découverte peut vous aider sur cette énigme…</p>
      </div>
        <div className={styles.containerPage6Pendu}>
          <BackgroundImg Blur={true} ImageNum={1}/>
          {
            win?
            (
                <div className={styles.animFadeIn}>
                  <div>
                    <img src={noteWin} className={styles.img} alt=""/>
                    <div className={styles.btnContainer}>
                      <BoxText textBoxContenu='Super ! Le mot secret était "Tableaux" ! Et il doit donc y en avoir treize sur la toile suivante... Mais je me demande bien qui peut-être ce fidèle compagnon dont la musique parle...'></BoxText>
                      <div className={styles.boutonSuivantContainer}>
                        <Link href="pageSalon" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68">
                                <g id="Groupe_31" data-name="Groupe 31" transform="translate(-1233 -337)">
                                <g id="Ellipse_9" data-name="Ellipse 9" transform="translate(1233 337)" fill="none" stroke="#4C2209" strokeWidth="1">
                                <circle cx="34" cy="34" r="34" stroke="none"/>
                                <circle cx="34" cy="34" r="33.5" fill="none"/>
                                </g>
                                <g id="Groupe_16" data-name="Groupe 16" transform="translate(1252 377) rotate(-90)">
                                <path id="Tracé_57" data-name="Tracé 57" d="M0,31V0" transform="translate(6)" fill="none" stroke="#4C2209" strokeWidth="1"/>
                                <path id="Tracé_50" data-name="Tracé 50" d="M6,10A19.413,19.413,0,0,0,3.975,3.9,12.233,12.233,0,0,0,0,0" transform="translate(0 21)" fill="none" stroke="#4C2209" strokeWidth="1"/>
                                <path id="Tracé_51" data-name="Tracé 51" d="M0,10A19.413,19.413,0,0,1,2.025,3.9,12.233,12.233,0,0,1,6,0" transform="translate(6 21)" fill="none" stroke="#4C2209" strokeWidth="1"/>
                                </g>
                                </g>
                            </svg>
                        </Link >
                      </div>
                    </div>
                  </div>
                </div>
            )
            :
            (
              <div className={styles.animFadeIn} >
                <img src={note1} className={styles.img} alt="" onClick={() => {
                    const motJoueur = prompt('Quel est le mot secret ?')
                    if(motJoueur === 'tableaux' | motJoueur === 'Tableaux' | motJoueur === 'TABLEAUX' ){
                      const audio = document.getElementById("PenduTrouversong")
                      audio.play()
                      this.setState({ win: true })
                      console.log('tableaux a bien été trouvé ')
                    }
                    }}/>
                <div className={styles.btnContainer}>
                  <BoxText textBoxContenu="'Ses treize _ _ _ _ _ _ _ _ ? ' Qu'est-ce qu'il a voulu dire ? Quel est le mot secret?" namePerso="Vous" />
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
