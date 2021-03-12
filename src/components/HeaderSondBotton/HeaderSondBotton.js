import React from 'react'
import PropTypes from 'prop-types';
import Song from '../../audio/Musique.mp3';
import SongB from '../../audio/Bouton.mp3';
import styles from "./HeaderSongBotton.module.scss";

class HeaderSondBotton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            setSong: true,
        };
       
      }
    render() {
    let color = ''

    if(this.props.colorIcones === true | this.props.colorIcones === false )
    {
        if(this.props.colorIcones === true)
        {
            color = " #FFFDF1"
        }else{
            color = " #4C2209"
        }

    }else{
        color = " #4C2209"
    }

    return(
        <div className={styles.headerSong}>
            <div className={styles.header}>
                <audio loop src={Song} id='musiqueSite' onLoadStart={()=>{
                const audioSite = document.getElementById('musiqueSite')
                audioSite.play()
                }} />
                {
                   this.props.allowCarnet ? (<audio src={SongB} id='audioBouton' onLoadStart={()=>{
                    const boutonAudio = document.getElementById('audioBouton')
                    boutonAudio.play()
                }} />) : (<div></div>)
                }
                <div className={styles.svgson}>
                    {!this.state.setSong?(
                            <button onClick={()=> {
                                const audioSite = document.getElementById('musiqueSite')
                                audioSite.play()
                                this.setState({ setSong: true })
                                }}>
                                <svg className={styles.svgIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                            </button>
                        ):(
                        <button onClick={()=> {
                            const audioSite = document.getElementById('musiqueSite')
                            audioSite.pause()
                            this.setState({ setSong: false })
                            }}>
                                <svg className={styles.svgIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                            </button> 
                        )}      
                </div>    
            </div> 
        </div>
    )
}
}

HeaderSondBotton.propTypes = {
    color: PropTypes.bool,
    allowCarnet: PropTypes.bool,
    allowPageSecrete: PropTypes.bool
  }

export default HeaderSondBotton