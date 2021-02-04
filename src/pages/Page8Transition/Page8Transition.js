import styles from "./Page8Transition.module.scss";
import React from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage'
import Header from '../../components/Header/Header'

const Page8Transition = () => {
  return (
    <div>
      <Header colorIcones={false}/>
      <div className={styles.containerPage8Transition}>
        <BackgroundImg ImageNum={0} Blur={false}/>
          <div className={styles.containerPage8Transition}>
            <Link href="pageGravurePoussiere" ><NormalButton buttonText="J'ai lu le texte de transition, voir la suite ->" link="" /></Link >
              
          </div>
      </div>
    </div>
  );
};

export default Page8Transition;
