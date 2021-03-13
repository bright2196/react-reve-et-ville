import styles from "./Page9GravurePoussiere.module.scss";
import React, { useContext} from 'react'
import Link from '../../components/Link/Link'
import BoxText from "../../components/BoxText/BoxText";
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import image from '../../img/tableaux/gravure.jpg'
import texture from '../../img/filtres/filtregravure.png'
import Header from '../../components/Header/Header'
import { AppContext } from '../../App/AppProvider'
import Winsong from '../../audio/Deverouille.mp3'

const Page9GravurePoussiere = () => {

  const { BlowDetected, setBlowDetected } = useContext(AppContext)

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  if (navigator.getUserMedia) {
    
    navigator.getUserMedia({
        audio: true
    },

    function(stream) {
      let ok = 0
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
          setTimeout(function(){ 
            ok ++
            if (ok === 1){
              console.log("set time out");
              setBlowDetected(true) 
              AudioWIN()
            }
            
          }, 15000);

          // console.log(Math.round(average - 40));
          if (average > 90){
            console.log("Blow detected");
            setBlowDetected(true)
            console.log(BlowDetected);
            AudioWIN()
          }

          function AudioWIN() {
              document.getElementById('Winsong').play()
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
  const boutonSuivantContainerClassName = !BlowDetected ? styles.boutonSuivantContainerHidden : styles.boutonSuivantContainerVisible
  return (
    <div>
      <Header colorIcones={true} allowPageSecrete={true} allowCarnet={true} page={7} pageCarnet={0}/>
      <audio src={Winsong} id='Winsong' />
      <div className={styles.containerPage9GravurePoussiere}>
        <BackgroundImage ImageNum={3} Blur={true} GreyColor={true} BrownColor={false}/>
        <div className={styles.imageContainer}>
          <img src={image} className={styles.imageGravure} alt="Gravure"/>
          <div className={[styles.textureColor,colorTextureClassName].join(' ')}></div>
          <div className={[styles.texture,imageTextureClassName].join(' ')} style={{backgroundImage: `url(${texture})`}}></div>
        </div>
        <BoxText
          textBoxContenu="La gravure est pleine de poussière, la dépoussiérer ne ferait pas de mal... 🌬"
        />
      </div>
      <div className={boutonSuivantContainerClassName} >
            <Link href="pageGravureSansPoussiere" >
              <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68">
                <g id="Groupe_31" data-name="Groupe 31" transform="translate(-1233 -337)">
                  <g id="Ellipse_9" data-name="Ellipse 9" transform="translate(1233 337)" fill="none" stroke="#FFFDF1" strokeWidth="1">
                    <circle cx="34" cy="34" r="34" stroke="none"/>
                    <circle cx="34" cy="34" r="33.5" fill="none"/>
                  </g>
                  <g id="Groupe_16" data-name="Groupe 16" transform="translate(1252 377) rotate(-90)">
                    <path id="Tracé_57" data-name="Tracé 57" d="M0,31V0" transform="translate(6)" fill="none" stroke="#FFFDF1" strokeWidth="1"/>
                    <path id="Tracé_50" data-name="Tracé 50" d="M6,10A19.413,19.413,0,0,0,3.975,3.9,12.233,12.233,0,0,0,0,0" transform="translate(0 21)" fill="none" stroke="#FFFDF1" strokeWidth="1"/>
                    <path id="Tracé_51" data-name="Tracé 51" d="M0,10A19.413,19.413,0,0,1,2.025,3.9,12.233,12.233,0,0,1,6,0" transform="translate(6 21)" fill="none" stroke="#FFFDF1" strokeWidth="1"/>
                  </g>
                </g>
              </svg>
            </Link>
      </div>
    </div>
  );
};

export default Page9GravurePoussiere;
