import styles from "./Page8Transition.module.scss";
import React, {useContext} from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage'
import Header from '../../components/Header/Header'
import { AppContext } from '../../App/AppProvider'

const Page8Transition = () => {
  const { setBlowDetected } = useContext(AppContext)
  return (
    <div>
      <Header colorIcones={false} allowPageSecrete={true} allowCarnet={true}/>
      <div className={styles.containerPage8Transition}>
        <BackgroundImg ImageNum={0} Blur={false}/>
          <div className={styles.containerPage8Transition}>
            <Link href="pageGravurePoussiere" onClick={setBlowDetected(false)}>
              <NormalButton buttonText="J'ai lu le texte de transition, voir la suite ->" link="" />
            </Link >
              
          </div>
      </div>
    </div>
  );
};

export default Page8Transition;
