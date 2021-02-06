import React from 'react';
import styles from './Carnet.module.scss';
import PropTypes from 'prop-types';

// IMG

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

    const endPages = this.props.allowPageSecrete? carnetPages.length-1 : 3

    const audio = document.getElementById('audioPageCarnet');

    return (
    <div> 
        <div className={parentClassName} >
            {
                currentPageIndex > 0 
                ?
                (<div className={styles.fleche} onClick={() =>{ 
                    this.setState({ currentPageIndex: currentPageIndex - 1 })
                    audio.play()
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="33.603" height="25.243" viewBox="0 0 33.603 25.243">
                        <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(1.5 2.121)">
                            <path id="Tracé_52" data-name="Tracé 52" d="M38.1,18H7.5" transform="translate(-7.5 -7.5)" fill="none" stroke={this.props.colorCarnet} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                            <path id="Tracé_53" data-name="Tracé 53" d="M28.5,7.5,18,18,28.5,28.5" transform="translate(-18 -7.5)" fill="none" stroke={this.props.colorCarnet} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                        </g>
                    </svg>
                </div>)
                :
                (<div className={styles.fleche}></div>)
            }
            <div className={styles.Carnet}>
                <img src={carnetPages[currentPageIndex]} alt="Carnet" />
                <audio src={AudioPage} id='audioPageCarnet' /> 
            </div>
            {
                currentPageIndex <  endPages
                ? (
                <div className={styles.fleche} id='flechedroite'
                    onClick={() => {
                    this.setState({ currentPageIndex: currentPageIndex + 1 })
                    audio.play()
                    }}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="33.603" height="25.243" viewBox="0 0 33.603 25.243">
                        <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-6 -5.379)">
                            <path id="Tracé_52" data-name="Tracé 52" d="M7.5,18H38.1" transform="translate(0)" fill="none" stroke={this.props.colorCarnet} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                            <path id="Tracé_53" data-name="Tracé 53" d="M18,7.5,28.5,18,18,28.5" transform="translate(9.603)" fill="none" stroke={this.props.colorCarnet} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                        </g>
                    </svg>
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

Carnet.propTypes = {
    colorCarnet: PropTypes.string,

  }


export default Carnet;