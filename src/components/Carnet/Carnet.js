import React,{ useState } from 'react';
import styles from './Carnet.module.scss';

// IMG
import Page0 from '../../img/carnet/CarnetPageBase.png'
import Page1 from '../../img/carnet/CarnetPage1.png'
import Page2 from '../../img/carnet/CarnetPage2.png'
import Page3 from '../../img/carnet/CarnetPage3.png'

const carnetPages = [
    Page0,
    Page1,
    Page2,
    Page3
  ]

class Carnet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPageIndex: 0
        };
      }

    render() {
        const { currentPageIndex } = this.state

    const parentClassName = this.props.ouverture ? styles.ContainerCarnetOn : styles.ContainerCarnetOff

    return (
    <div> 
        <div className={parentClassName}>
            {
                currentPageIndex == 0 
                ?
                (<div className={styles.fleche} onClick={() => this.setState({ currentPageIndex: currentPageIndex - 1 })}></div>)
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