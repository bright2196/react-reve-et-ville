import styles from "./Prologue.module.scss";
import React from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link';
import BackgroundImg from '../../components/BackgroundImage/BackgroundImage';
import image from "../../img/scratchpaper.png";
import BoxText from '../../components/BoxText/BoxText';


const Prologue = () => {
  return (
    <div className={styles.containerPrologue}>
      <BoxText
        namePerso="Vous"
        textBoxContenu="Mmmh, je pense que cela me servira plus tard. Je devrais conserver cette note !"
      />
      <BackgroundImg ImageNum={0} Blur={false}/>
      <Link href="pageCarte" ><NormalButton buttonText="voir la suite ->" link="" /></Link >
      <p className={styles.desc}>
      Mon grand-père est décédé il y a quelques semaines maintenant. Parmi les affaires qu'il a légué, j'ai hérité d'un vieux carnet de croquis dont je n'ai jamais entendu parler. Il faut dire que je le connaissais peu. C'est curieux, les initiales ne sont même pas les bonnes…
      <br/><br/>
      Et il y a une étrange note glissée entre les pages :
      </p>

      <div className={styles.scracthpaper}>
        <img className={styles.Imagecitation} src={image}  alt="Scratched Paper" />
        <p className={styles.citation}>Le regard du cavalier te guidera.</p>
      </div>

    </div>
  );
};

export default Prologue;
