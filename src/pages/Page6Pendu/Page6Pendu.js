import styles from "./Page6Pendu.module.scss";
import React from 'react'
import Link from '../../components/Link/Link'
import NormalButton from "../../components/NormalButton/NormalButton";
import BoxText from "../../components/BoxText/BoxText";
import BackgroundImg from "../../components/BackgroundImage/BackgroundImage"

// Img
import note1 from '../../img/pendu/noteTableaux.png'
import noteWin from '../../img/pendu/noteTableauxWin.png'

class Page6Pendu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        win: false,
    };
  }


  render() {
    const { win } = this.state

    return (
      <div className={styles.containerPage6Pendu}>
        <BackgroundImg Blur={true} ImageNum=''/>
        {
          win?
          (
              <div>
                <img src={noteWin} className={styles.img} alt=""/>
                <BoxText textBoxContenu='Super ! Le mot secret etais "Tableaux" ! Et il doit donc y en avoir treize... De plus qui est ce  fidèle compagnon ? 
                Quel tableau pourrait correspondre  à cette description ?' namePerso="Vous" />
                <div className={styles.btnContainer}><div className={styles.btn}><Link href="pageSalon" ><NormalButton buttonText="Voyons ou cela nous mène ..." link="" /></Link ></div></div>
              </div> 
          )
          :
          (
            <div >
              <img src={note1} className={styles.img} alt=""/>
              <div className={styles.btnContainer}>
                <div onClick={() => {
                  const motJoueur = prompt('Quel est le mot secret ?')
                  if(motJoueur === 'tableaux' | motJoueur === 'Tableaux' ){
                    this.setState({ win: true })
                    console.log('tableaux a bien ete trouvé ')
                  }
                  }} className={styles.btn}>
                  <NormalButton buttonText="Faire un essais" link="" />
                </div>
              </div>
              <BoxText textBoxContenu="C'est treize ? Ques qu'il a voulu dire ? Quel est le mot secret?" namePerso="Vous" />
            </div>
          )
        }
        
      </div>
    );
  };
}
export default Page6Pendu;
