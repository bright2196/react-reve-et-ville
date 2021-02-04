
import styles from "./Home.module.scss";
import React from 'react'
import Link from '../../components/Link/Link'
import NormalButton from "../../components/NormalButton/NormalButton";
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage'

const Home = () => {
  return (
        <div className={[styles.titlescreen, styles.animFadeIn].join(' ')}>
            <BackgroundImage ImageNum={0} Blur={false} GreyColor={true} BrownColor={false}/>
            <div className={styles.title}>
              <h1>L'amour de l'art</h1>
              <p className={styles.homedesc}>Lancez-vous dans une course aux indices et plongez-vous dans les toiles du Musée des Beaux Arts de Bordeaux pour révéler au grand jour un secret bien gardé.</p>
            </div>
            <div className={styles.beginbutton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="1" viewBox="0 0 100 1"><defs><style></style></defs><line className="a" x1="100" transform="translate(0 0.5)"/></svg>
              <Link
                href="tutoriel"
              >
                <NormalButton
                    buttonText="Commencer l'aventure"
                    link=""
                />
              </Link>        
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="1" viewBox="0 0 100 1"><defs><style></style></defs><line className="a" x1="100" transform="translate(0 0.5)"/></svg>
            </div>
          </div>
  );
};

export default Home;
