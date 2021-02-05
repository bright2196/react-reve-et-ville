import styles from "./Page4Loupe.module.scss";
import React from "react";
import BoxText from "../../components/BoxText/BoxText";
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from "../../components/Link/Link";
import BackgroundImg from "../../components/BackgroundImage/BackgroundImage";
import Header from "../../components/Header/Header";
import Loupe from "../../components/Loupe/Loupe";

class Page4Loupe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      win: false,
    };
  }

  render() {
    const { win } = this.state;
    return (
      <div>
        <Header colorIcones={true} allowPageSecrete={false} allowCarnet={true} />
        <div className={styles.containerPage4Loupe}>
          <BackgroundImg ImageNum={2} Blur={true} />

          {win ? (
            <div className={styles.animFadeIn}>
              <div className={styles.btn}>
                <Link href="pagePendu">
                  <NormalButton
                    buttonText="Bien joué ! Voyons où cela nous mène ..."
                    link=""
                  />
                </Link>
              </div>
            </div>
          ) : (
            <div className={styles.animFadeIn}>
              <div
                onClick={() => {
                  const motJoueur = prompt("Vous avez trouvé ?");
                  if (
                    (motJoueur === "39.5") |
                    (motJoueur === "39,5") |
                    (motJoueur === "39 et demi") |
                    (motJoueur === "39 demi")
                  ) {
                    this.setState({ win: true });
                  }
                }}
                className={styles.btn}
              >
                <NormalButton buttonText="Faire un essai" />
              </div>
              <div className={styles.hahajenaimarre}>
                <Loupe className={styles.tableau} />
              </div>
            </div>
          )}

          <BoxText
            namePerso="Vous"
            textBoxContenu="Une page secrète ! Jetons un œil au carnet pour la trouver et découvrir ce qu'elle contient."
          />
        </div>
      </div>
    );
  }
}

export default Page4Loupe;
