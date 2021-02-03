import React,{ useState } from 'react';
import styles from './Carnet.module.css';

// IMG
import Page1 from '../../img/carnet/CarnetPage1.png'
import Page2 from '../../img/carnet/CarnetPage2.png'
import Page3 from '../../img/carnet/CarnetPage3.png'
import PageBase from '../../img/carnet/CarnetPageBase.png'




class Carnet extends React.Component {
  
  render() {
    return (
    <div className={styles.ContainerCarnet}>
        <div className={styles.fleche}>

        </div>
        <div className={styles.Carnet}>
            <img src={Page1}/>
        </div>
        <div className={styles.fleche}>

        </div>
    </div>
    );
  }
}

export default Carnet;