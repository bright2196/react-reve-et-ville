import styles from "./Page8Transition.module.scss";
import React from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'

const Page8Transition = () => {
  return (
    <div className={styles.containerPage8Transition}>
        <div className={styles.containerPage8Transition}>
          <Link href="pageGravurePoussiere" ><NormalButton buttonText="J'ai lue le texte de transition, voir la suite ->" link="" /></Link >
            
        </div>
    </div>
  );
};

export default Page8Transition;
