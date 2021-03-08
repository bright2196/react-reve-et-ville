import styles from "./Page7Suie.module.scss";
import React, { useState } from "react";
//import InputText from "../../components/InputCode/InputCode";
import BoxText from "../../components/BoxText/BoxText";
// import NormalButton from "../../components/NormalButton/NormalButton";
import Link from "../../components/Link/Link";
import BackgroundImg from "../../components/BackgroundImage/BackgroundImage";
import Header from "../../components/Header/Header";
import Song from '../../audio/Deverouille.mp3'

const Page7Suie = () => {
  const [win, setwin] = useState(false);

  return (
    <div>
      <Header colorIcones={false} allowPageSecrete={true} allowCarnet={true} page={6} pageCarnet={0}/>
      <audio src={Song} id='SuieTrouversong' />
      <div className={styles.containerPage7Suie}>
        <BoxText
          textBoxContenu="Mince, le tableau est endommagé. Le temps ne l'a pas épargné… Je n'arrive pas à discerner les détails. Mais peut être qu'avec un peu de lumière …"
          namePerso="Vous"
        />
        <BackgroundImg ImageNum={1} Blur={false} />
        <div className={styles.imagePage7} id='boardContainer'>
          { !win? (
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
                    document.getElementById("focusPage7").style.backgroundPosition = (x) + "px " + (y) + "px";
                  }}
                  onClick={
                    (events) => {
                      let xClick = events.clientX
                      let yClick = events.clientY
                      let board = document.getElementById('boardContainer')
                        const rect = board.getBoundingClientRect()
                        let x = xClick - rect.left
                        let y = yClick - rect.top
                        if(x > 186 && x < 318){
                          if(y > 300 && y <  357){
                            console.log('gooooood')
                            console.log(x, y)
                            let code = prompt("Quel est le code ?");
                            if (
                              (code === "ARCH-342") |
                              (code === "arch-342") |
                              (code === "Arch-342") |
                              (code === "arch 342") |
                              (code === "Arch 342") |
                              (code === "Arch342") |
                              (code === "arch342")
                            ) {
                              const audio = document.getElementById("SuieTrouversong")
                              audio.play()
                              setwin(true);
                            }
                            }
                          }
                      
                    }
                  }
                ></div>
          ):(
            <div/>
          )}
          
        </div>
        <div className={styles.containerBoutons}>
          {win ? (
            <div className={styles.boutonSuivantContainer}>
                <Link href="pageTransition" >
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
                </Link>
          </div>
          ) : (
            <div/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page7Suie;
