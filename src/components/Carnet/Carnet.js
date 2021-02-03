import React,{ useState } from 'react';
import styles from './Carnet.module.scss';

// IMG
import LeftArrow from '../../img/carnet/arrow-left.png'
import RightArrow from '../../img/carnet/arrow-right.png'
import Page0 from '../../img/carnet/CarnetPageBase.png'
import Page1 from '../../img/carnet/CarnetPage1.png'
import Page2 from '../../img/carnet/CarnetPage2.png'
import Page3 from '../../img/carnet/CarnetPage3.png'
import Page4 from '../../img/carnet/CarnetPage4.png'

//Song
import AudioPage from '../../audio/PagesQuiTourne.wav'

const carnetPages = [
    Page0,
    Page1,
    Page2,
    Page3,
    Page4
  ]

class Carnet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPageIndex: 0
        };
      }

    audioPage = new Audio(AudioPage);

    render() {
    const { currentPageIndex } = this.state

    const parentClassName = this.props.ouverture ? styles.ContainerCarnetOn : styles.ContainerCarnetOff

    return (
    <div> 
        <div className={parentClassName}>
            {
                currentPageIndex > 0 
                ?
                (<div className={styles.fleche} onClick={() => this.setState({ currentPageIndex: currentPageIndex - 1 })}>
                    <img  src={LeftArrow} />
                </div>)
                :
                (<div className={styles.fleche}></div>)
            }
            <div className={styles.Carnet}>
                <img src={carnetPages[currentPageIndex]} /> 
            </div>
            {
                currentPageIndex < carnetPages.length-1
                ? (
                <div className={styles.fleche} onClick={() => this.setState({ currentPageIndex: currentPageIndex + 1 })}>
                    <img  src={RightArrow} />
                </div>
                )
                : (
                    <div className={styles.fleche} ></div>
                )
            }
            
        </div>
    </div>
    );
  }
}


export default Carnet;