import styles from "./Page7Suie.module.scss";
import React, { useState } from "react";
//import InputText from "../../components/InputCode/InputCode";
import BoxText from "../../components/BoxText/BoxText";
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from "../../components/Link/Link";
import BackgroundImg from "../../components/BackgroundImage/BackgroundImage";
import Header from "../../components/Header/Header";
import Song from '../../audio/Deverouille.mp3'

const Page7Suie = () => {
  const [win, setwin] = useState(false);

  return (
    <div>
      <Header colorIcones={false} allowPageSecrete={true} allowCarnet={true} page={6} />
      <audio src={Song} id='SuieTrouversong' />
      <div className={styles.containerPage7Suie}>
        <BoxText
          textBoxContenu="Mince, le tableau est endommagé. Le temps ne l'a pas épargné… Je n'arrive pas à discerner les détails. Mais peut être qu'avec un peu de lumière …"
          namePerso="Vous"
        />
        <BackgroundImg ImageNum={1} Blur={false} />
        <div className={styles.imagePage7}>
          <div
            id="focusPage7"
            className={styles.focusPage7}
            onMouseMove={(event) => {
              let xClick = event.clientX
              let yClick = event.clientY
              let board = document.getElementById('focusPage7')
              const rect = board.getBoundingClientRect()
              let x = xClick - rect.left - 150 
              let y = yClick - rect.top - 150
              document.getElementById("focusPage7").style.backgroundPosition =
                (x) + "px " + (y) + "px";
            }}
          ></div>
        </div>
        <div className={styles.containerBoutons}>
          {win ? (
            <div className={styles.boutonSuivantPage7}>
              <Link href="pageTransition">
                <NormalButton
                  buttonText="J'ai trouvé le code ! Il correspond à un numéro d'archive 'ARCH-342'..."
                  link=""
                />
              </Link>
            </div>
          ) : (
            <div
              onClick={() => {
                let code = prompt("Quel est le code ?");
                if (
                  (code === "ARCH-342") |
                  (code === "arch-342") |
                  (code === "Arch-342") |
                  (code === "arch 342") |
                  (code === "arch342")
                ) {
                  const audio = document.getElementById("SuieTrouversong")
                  audio.play()
                  setwin(true);
                }
              }}
            >
              <NormalButton buttonText="Essaie un code" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page7Suie;
