import React from "react";
import styles from "./Indices.module.scss";
import PropTypes from "prop-types";
import bgImage from '../../img/scratchpaper2.png'


class Indices extends React.Component {

  //   const brown = () => "hsl(22, 79%, 17%)";
  //   const white = () => "#FFFDF1"

   
  render() {
    console.log(this.props.colorIndice)
    const parentClassName = this.props.ouverture ? styles.ContainerIndiceOn : styles.ContainerIndiceOff
    return (
      <div className={parentClassName}>
        <h1 >INDICE</h1>
        <img src={bgImage} alt=""/>
        <div className={styles.indiceContainer}>
            {this.props.page === 1 && (<p>Aide-toi de ton carnet pour trouver le bon emplacement. Clique sur la carte à l'endroit souhaité lorsque tu l'as trouvé. Échec et mat…</p>)}
            {this.props.page === 2 && (<p>Analysez bien tous les détails de cette pièce du musée. Cela devrait vous permettre de comprendre le sens de l’énigme.</p>)}
            {this.props.page === 3 && (<p>La loupe devrait être utile pour voir les moindres détails.</p>)}
            {this.props.page === 4 && (<p>On dirait que c’est un mot à trouver… Peut-être qu’en analysant un peu plus la page, je devrais trouver des lettres correspondant au mot mystérieux.</p>)}
            {this.props.page === 5 && (<p>Arpentez les tableaux de cette salle pour trouver lequel correspond à la description.</p>)}
            {this.props.page === 6 && (<p>Éclairez les parties du tableau pour voir s' il n’y a pas une inscription à récupérer. Il y a peu de supports sur lesquels il pourrait y avoir des inscriptions… Cela devrait vous mettre sur la voie.</p>)}
            {this.props.page === 7 && (<p>On n’y voit rien! Si seulement il n’y avait pas toute cette poussière…</p>)}
            {this.props.page === 0 && (<p>Pas d'indice</p>)}
        </div>
      </div>
    );
  }
}

Indices.propTypes = {
  page: PropTypes.number,

};
export default Indices;
