import styles from "./Page5Salon.module.scss";
import React from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage'
import BoxText from "../../components/BoxText/BoxText";
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
        <BackgroundImg ImageNum={0} Blur={true}/>
        {
          findTableau?
          (
            <div className={styles.containerPage5Salon}>
            <Link href="pageSuie" ><NormalButton buttonText="J'ai identifié le tableau intrus, voir la suite ->" link="" /></Link >
              <img src={TableauImagEdit} alt="" />

            </div>
          )
          :
          (
             <div className={styles.containerPage5Salon}>

               
                
                
                <img src={TableauImag} className={styles.tableau} alt="" />
                
                <BoxText textBoxContenu="Je crois qu'on a enfin trouvé le tableau correspondant ! Aux côtés de son fidèle chien évidemment ! C’est une peinture de mon grand-père dans son salon. C’est étrange… Dans mes souvenirs, l’un des tableaux était différent…" 
                  namePerso="Vous" 
                />
                <div className={styles.divProvisoire}>
                <Link href="pageSuie" ><NormalButton buttonText="J'ai identifié le tableau intru, voir la suite ->" link="" /></Link >
                </div>
            </div>
          )
        }
      </div>
    );
  }
};

export default Page5Salon;
