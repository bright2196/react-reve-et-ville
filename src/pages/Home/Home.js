
import styles from "./Home.module.scss";
import React from 'react'
import Link from '../../components/Link/Link'
import NormalButton from "../../components/NormalButton/NormalButton";
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage'
// import Header from '../../components/Header/Header'

const Home = () => {
  const tel = window.innerWidth

  return (
      <div>
        <div className={[styles.titlescreen, styles.animFadeIn].join(' ')}>
            <BackgroundImage ImageNum={0} Blur={false} GreyColor={true} BrownColor={false}/>
            <div className={styles.title}>
              <h1>L' Amour de l' Art</h1>
              <p className={styles.homedesc}>Lancez-vous dans une course aux indices et plongez-vous dans les toiles du Musée des Beaux-Arts de Bordeaux pour révéler au grand jour un secret bien gardé.</p>
            </div>
            <div className={styles.beginbutton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="1" viewBox="0 0 100 1"><defs><style></style></defs><line className="a" x1="100" transform="translate(0 0.5)"/></svg>
              {
                tel < 800 ?(
                  <p className={styles.homedesc}>Oups... L'expérience n'est pas disponible sur téléphones</p>
                ):(
                    <Link
                  href="tutoriel"
                >
                  <NormalButton
                      buttonText="Commencer l'aventure"
                      link=""
                  />
                </Link>
                )
              }
                      
              <p className={styles.homeprenom}>Expérience réalisée par :  <a href='https://www.justinemagry.fr/' rel="noreferrer" target="_blank" className={styles.link}> Justine Magry</a> , 
                                                                          <a href='https://hugoblanchard.com/fr/index-fr.html' rel="noreferrer" target="_blank" className={styles.link}> Hugo Blanchard</a> , 
                                                                          <a href='https://www.antoinetardivel.com/' rel="noreferrer" target="_blank" className={styles.link}> Antoine Tardivel</a> ,
                                                                          <a href='https://clairerieusset.fr/' rel="noreferrer"  target="_blank" className={styles.link}> Claire Rieuset</a> ,
                                                                          <a href='https://valentingenest.fr/' rel="noreferrer" target="_blank" className={styles.link}> Valentin Genest</a> et 
                                                                          <a href='https://maellerabouan.com/' rel="noreferrer" target="_blank" className={styles.link}> Maëlle Rabouan</a>
                                                                          </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="1" viewBox="0 0 100 1"><defs><style></style></defs><line className="a" x1="100" transform="translate(0 0.5)"/></svg>
            </div>
          </div>
      </div>
  );
};

export default Home;
