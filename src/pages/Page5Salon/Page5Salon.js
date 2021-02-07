import styles from "./Page5Salon.module.scss";
import React from 'react'
// import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage'
import BoxText from "../../components/BoxText/BoxText";
import Header from '../../components/Header/Header'
import Song from '../../audio/Deverouille.mp3'
//Img
import TableauImag from '../../img/tableaux/Salon.jpg'
import TableauImagEdit from '../../img/tableaux/SalonEdit.jpg'

class Page5Salon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        findTableau: false,
    };
  }

  render() {
    const { findTableau } = this.state
    return (
      <div>
        <Header colorIcones={false} allowPageSecrete={true} allowCarnet={true}/>
        <audio src={Song} id='tableauTrouversong' />
        <BackgroundImg ImageNum={0} Blur={true}/>
        {
          findTableau?
          (
            <div className={styles.containerPage5Salon}>
              <img src={TableauImagEdit} className={styles.tableau} alt="" />
                <div className={styles.boutonSuivantContainer}>
                    <Link href="pageSuie" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68">
                                <g id="Groupe_31" data-name="Groupe 31" transform="translate(-1233 -337)">
                                <g id="Ellipse_9" data-name="Ellipse 9" transform="translate(1233 337)" fill="none" stroke="#4C2209" strokeWidth="1">
                                <circle cx="34" cy="34" r="34" stroke="none"/>
                                <circle cx="34" cy="34" r="33.5" fill="none"/>
                                </g>
                                <g id="Groupe_16" data-name="Groupe 16" transform="translate(1252 377) rotate(-90)">
                                <path id="Tracé_57" data-name="Tracé 57" d="M0,31V0" transform="translate(6)" fill="none" stroke="#4C2209" strokeWidth="1"/>
                                <path id="Tracé_50" data-name="Tracé 50" d="M6,10A19.413,19.413,0,0,0,3.975,3.9,12.233,12.233,0,0,0,0,0" transform="translate(0 21)" fill="none" stroke="#4C2209" strokeWidth="1"/>
                                <path id="Tracé_51" data-name="Tracé 51" d="M0,10A19.413,19.413,0,0,1,2.025,3.9,12.233,12.233,0,0,1,6,0" transform="translate(6 21)" fill="none" stroke="#4C2209" strokeWidth="1"/>
                                </g>
                            </g>
                            </svg>
                    </Link>
              </div>
            </div>
          )
          :
          (
             <div className={styles.containerPage5Salon}>
                <img src={TableauImag} className={styles.tableau} alt="" />
                <div className={styles.clickableArea} onClick={()=>{
                  this.setState({findTableau: true})
                  const audio = document.getElementById("tableauTrouversong")
                  audio.play()
                  }}></div>
                <BoxText textBoxContenu="Je crois qu'on a enfin trouvé le tableau correspondant ! Aux côtés de son fidèle chien évidemment ! C’est une peinture de mon grand-père dans son salon. C’est étrange… Dans mes souvenirs, l’un des tableaux était différent…" 
                  namePerso="Vous" 
                />
            </div>
          )
        }
      </div>
    );
  }
};

export default Page5Salon;
