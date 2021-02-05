import styles from "./Page9GravurePoussiere.module.scss";
import React, { useContext, useState } from 'react'
import NormalButton from "../../components/NormalButton/NormalButton";
import Link from '../../components/Link/Link'
import BoxText from "../../components/BoxText/BoxText";
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import image from '../../img/tableaux/gravure.jpg'
import texture from '../../img/filtres/filtregravure.png'
import Header from '../../components/Header/Header'
import { AppContext } from '../../App/AppProvider'

const Page9GravurePoussiere = () => {

  const { setCurrentPage , BlowDetected, setBlowDetected } = useContext(AppContext)

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  if (navigator.getUserMedia) {
    
    navigator.getUserMedia({
        audio: true
    },

    function(stream) {
      let audioContext = new AudioContext();
      let analyser = audioContext.createAnalyser();
      let microphone = audioContext.createMediaStreamSource(stream);
      let javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

      analyser.smoothingTimeConstant = 0.8;
      analyser.fftSize = 1024;

      microphone.connect(analyser);
      analyser.connect(javascriptNode);
      javascriptNode.connect(audioContext.destination);

      // canvasContext = $("#canvas")[0].getContext("2d");
      // canvasContext =  document.getElementById('canvas').getContext("2d");

      javascriptNode.onaudioprocess = function() {
          var array = new Uint8Array(analyser.frequencyBinCount);
          analyser.getByteFrequencyData(array);
          var values = 0;

          var length = array.length;
          for (var i = 0; i < length; i++) {
            values += (array[i]);
          }

          var average = values / length;
          

          // console.log(Math.round(average - 40));
          if (average > 90){
            console.log("Blow detected");
            // setCurrentPage("pageGravureSansPoussiere");
            setBlowDetected(true)
            console.log(BlowDetected);
          }

        } // end fn stream
    },
    function(err) {
      console.log("The following error occured: " + err.name)
    });

  } else {
    console.log("getUserMedia not supported");
  }
  const colorTextureClassName = BlowDetected ? styles.hiddenColorTexture : styles.visibleColorTexture
  const imageTextureClassName = BlowDetected ? styles.hiddenImageTexture : styles.visibleImageTexture
  return (
    <div>
      <Header colorIcones={true} allowPageSecrete={true} allowCarnet={true}/>
      <div className={styles.containerPage9GravurePoussiere}>
        <BackgroundImage ImageNum={3} Blur={true} GreyColor={true} BrownColor={false}/>
        <div className={styles.imageContainer}>
          <img src={image} className={styles.imageGravure} alt="Gravure"/>
          <div className={[styles.textureColor,colorTextureClassName].join(' ')}></div>
          <div className={[styles.texture,imageTextureClassName].join(' ')} style={{backgroundImage: `url(${texture})`}}></div>
        </div>
        <div className={styles.divProvisoire}>
          <Link href="pageGravureSansPoussiere" >
            <NormalButton buttonText="J'ai dépoussieré la gravure, voir la suite ->" link="" />
          </Link >
        </div>
        <BoxText
          textBoxContenu="La gravure est pleine de poussière, la dépoussierer ne ferait pas de mal... 🌬"
        />
      </div>
    </div>
  );
};

export default Page9GravurePoussiere;
