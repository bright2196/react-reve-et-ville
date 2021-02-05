import styles from "./Page12Final.module.scss";
import React from "react";
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from "../../components/Link/Link";
import BackgroundImg from "../../components/BackgroundImage/BackgroundImage";
import ImageLettreFinal from "../../img/Final.png";
import BoxText from "../../components/BoxText/BoxText";
import Header from "../../components/Header/Header"; 

class Page12Final extends React.Component {
  render() {
    return (
      <div>
        <Header colorIcones={true} allowPageSecrete={true} allowCarnet={true} />
        <div className={styles.containerPage12Final}>
          <BackgroundImg ImageNum={3} Blur={true} />
          <img src={ImageLettreFinal} className={styles.imgFinal} alt="" />

          <p className={styles.finaltext}>
            Je te félicite. Tu viens de découvrir l’un des secrets les mieux
            gardé par notre famille. Si tu lis cette lettre, c’est probablement
            que tu as réussi à résoudre toutes les énigmes que ta grand-mère a
            disséminé tout au long de ses travaux, car oui, la véritable artiste
            derrière tout ça c’était elle. Tu as su faire preuve d’observation,
            de déduction et de patience pour en arriver là. Ta grand-mère et moi
            aimions par dessus tout les énigmes et jeux de rôles. Dès le début
            c’était son idée, et nous sommes fiers que tu aies pu en arriver au
            bout.
            <br />
            <br />
            A l’heure où j’écris ces lignes, la place de la femme au sein du
            milieu artistique n’est pas très bien perçue, c’est pour cela que
            nous l’avions dissimulé. Il faudra du temps mais je sais que cela
            changera un jour, j’en suis persuadé.
            <br />
            <br />
            Nous tenions à te dire que nous t’aimons tous les deux. Prends soin
            de l’héritage de ta grand-mère et va dire au monde entier que l’art
            est quelque chose de magnifique et qu’il n’a pas de genre.
            <br />
            <br />
            Ton grand-père.
          </p>

          <div className={styles.boutonSuivantPage12}>
            <Link href="home">
              <NormalButton buttonText="Vous avez découvert le secret. Retour à l'accueil" color="#FFFDF1" />
            </Link>
          </div>

        </div>
      </div>
    );
  }
}

export default Page12Final;
