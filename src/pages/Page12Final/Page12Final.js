import styles from "./Page12Final.module.scss";
import React from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage'
import ImageLettreFinal from '../../img/Final.png'
import BoxText from "../../components/BoxText/BoxText";
import Header from '../../components/Header/Header'

class Page12Final extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        goNext: 0 ,
    };
  }

  render() {
    const { goNext } = this.state

    return (
      <div>
        <Header colorIcones={true}/>
        <div className={styles.containerPage12Final}>
          <BackgroundImg ImageNum={3} Blur={false}/>
          <img src={ImageLettreFinal} className={styles.imgFinal} alt='' />
            {
              goNext === 0?
              (
                <BoxText textBoxContenu='Je te félicite. Tu viens de découvrir l’un des secrets les mieux gardés par notre famille. Si tu lis cette lettre, c’est probablement que tu as réussi 
              à résoudre toutes les énigmes que ta grand-mère a disséminé tout au long de ses travaux... '></BoxText>
              )
              :
              (
                  goNext === 1?
                  (
                    <BoxText textBoxContenu='Car oui, la véritable artiste derrière tout ça c’était elle. 
                    Tu as su faire preuve d’observation, de déduction et de patience pour en arriver là. Ta grand-mère et moi aimions par dessus tout les énigmes et jeux de rôles. 
                    Dès le début cela était son idée, et nous sommes fiers que tu aies pu en arriver au bout, fiers de toi.
                    '></BoxText>
                  )
                  :
                  (
                    goNext === 2?
                    (
                      <BoxText textBoxContenu='
                      A l’heure où j’écris ces lignes, la place de la femme au sein du milieu artistique n’est pas très bien perçue, c’est pour cela que nous l’avions dissimulé. 
                      Il faudra du temps mais je sais que cela changera un jour, j’en suis persuadé.
                      Nous tenions à te dire que nous t’aimons tous les deux. Prends soin de l’héritage de ta grand-mère et va dire au monde que l’art est quelque chose de magnifique.
                      Ton grand-père.'></BoxText>
                    )
                    :
                    (
                      <div className={styles.boutonSuivantPage12}>
                        <Link href="home" ><NormalButton buttonText="C'est le final, retour a l'accueil ->" link="" /></Link >
                      </div>
                    )  
                  ) 
              )
            }
            {
              goNext !== 3 ? 
              (
                <div className={styles.boutonSuivantPage12} onClick={() => this.setState({ goNext: goNext + 1 })} >
                  <NormalButton buttonText="Suivant ->" link=""  />
                </div>
              )
              :
              (
                <div></div>
              )
            } 
        </div>
      </div>
    );
  }
};

export default Page12Final;
