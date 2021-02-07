import styles from "./Page4Loupe.module.scss";
import React from "react";
import BoxText from "../../components/BoxText/BoxText";
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from "../../components/Link/Link";
import BackgroundImg from "../../components/BackgroundImage/BackgroundImage";
import Header from "../../components/Header/Header";
import Loupe from "../../components/Loupe/Loupe";
import Song from '../../audio/Deverouille.mp3'

class Page4Loupe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      win: false,
    };
  }

  render() {
    function openCarnet() {
      console.log('ouvrir le carnet !')
    }
    const { win } = this.state;
    return (
      <div>
        <Header colorIcones={true} allowPageSecrete={false} allowCarnet={true} />
        <audio src={Song} id='loupeTrouversong' />
        <div className={styles.containerPage4Loupe}>
          <BackgroundImg ImageNum={2} Blur={true} />

          {win ? (
            <div className={styles.animFadeIn}>
              <div className={styles.btn}>
                <Link href="pagePendu">
                  <NormalButton
                    buttonText="Bien joué ! Voyons où cela nous mène ..."
                    color="#FFFDF1"
                  />
                </Link>
              </div>
            </div>
          ) : (
            <div className={styles.animFadeIn}>
              <div className={styles.boardContainer} id='boardContainer'>
                <div onClick={(event)=>{
                  let xClick = event.clientX
                  let yClick = event.clientY
                  let board = document.getElementById('boardContainer')
                  const rect = board.getBoundingClientRect()
                  let xTarget = rect.width * 0.67
                  let yTarget = rect.height * 0.56
                  let x = xClick - rect.left
                  let y = yClick - rect.top
                  if(x > xTarget - 40 && x < xTarget + 40){
                    if(y > yTarget - 40 && y < yTarget + 40){
                      console.log('gooooood')
                      const motJoueur = prompt("Vous avez trouvé ?");
                        if (
                          (motJoueur === "39.5") |
                          (motJoueur === "39,5") |
                          (motJoueur === "39 et demi") |
                          (motJoueur === "39 demi")
                        ) {
                          openCarnet()
                          const audio = document.getElementById("loupeTrouversong")
                          audio.play()
                          this.setState({ win: true });
                        }
                      }
                    }
                }}>
                  <Loupe className={styles.tableau} />
                </div>
              </div>
            </div>
          )}

          <BoxText
            namePerso="Vous"
            textBoxContenu="Une page secrète ! Jetons un œil au carnet pour la trouver et découvrir ce qu'elle contient."
          />
        </div>
      </div>
    );
  }
}

export default Page4Loupe;
