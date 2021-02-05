import styles from "./Prologue.module.scss";
import React from 'react'
// import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link';
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage';
import NoteEnigme from "./img/noteGP.png";
// import BoxText from '../../components/BoxText/BoxText';
import Header from '../../components/Header/Header'


const Prologue = () => {
  return (
    <div>
      <Header colorIcones={false} allowPageSecrete={false} allowCarnet={true}/>
      <div className={styles.boutonSuivantContainer}>
            <Link href="pageCarte" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68">
                        <g id="Groupe_31" data-name="Groupe 31" transform="translate(-1233 -337)">
                        <g id="Ellipse_9" data-name="Ellipse 9" transform="translate(1233 337)" fill="none" stroke="#4c2209" stroke-width="1">
                        <circle cx="34" cy="34" r="34" stroke="none"/>
                        <circle cx="34" cy="34" r="33.5" fill="none"/>
                        </g>
                        <g id="Groupe_16" data-name="Groupe 16" transform="translate(1252 377) rotate(-90)">
                        <path id="Tracé_57" data-name="Tracé 57" d="M0,31V0" transform="translate(6)" fill="none" stroke="#4c2209" stroke-width="1"/>
                        <path id="Tracé_50" data-name="Tracé 50" d="M6,10A19.413,19.413,0,0,0,3.975,3.9,12.233,12.233,0,0,0,0,0" transform="translate(0 21)" fill="none" stroke="#4c2209" stroke-width="1"/>
                        <path id="Tracé_51" data-name="Tracé 51" d="M0,10A19.413,19.413,0,0,1,2.025,3.9,12.233,12.233,0,0,1,6,0" transform="translate(6 21)" fill="none" stroke="#4c2209" stroke-width="1"/>
                        </g>
                    </g>
                    </svg>
            </Link>
      </div>
      
      <div className={styles.containerPrologue}>
      <div>
          </div>    
        <BackgroundImg ImageNum={0} Blur={false}/>        
          
          <p className={styles.desc}>
          Mon grand-père est décédé il y a quelques semaines maintenant. Parmi les affaires qu'il a légué, j'ai hérité d'un vieux carnet de croquis dont je n'ai jamais entendu parler. Il faut dire que je le connaissais peu. C'est curieux, les initiales ne sont même pas les bonnes… Je vais le conserver. Il pourrait m'être utile pour la suite...
          <br/><br/>
          Et il y a une étrange note glissée entre les pages :
          </p>

          <div className={styles.scracthpaper}>
            <img className={styles.Imagecitation} src={NoteEnigme}  alt="Scratched Paper" />
            {/* <p className={styles.citation}>Le regard du cavalier te guidera.</p> */}
          </div>
          
        </div>
    </div>
  );
};

export default Prologue;
