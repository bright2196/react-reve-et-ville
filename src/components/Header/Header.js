import styles from "./Header.module.scss";
import React from 'react'
import Carnet from "../Carnet/Carnet";
import PropTypes from 'prop-types';
import Indices from '../Indices/Indices'
import SongB from '../../audio/Bouton.mp3'

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            onCarnet: false,
            setSong: true,
            onIndices: false
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
        <div>
            <div className={styles.header}>
                <div className={styles.pictosdroite}>
                    <button id='btn-carnet' onClick={() => {
                        if(this.props.allowCarnet){
                          this.setState({ onCarnet: !this.state.onCarnet })
                        color = this.props.colorIcones  
                        }  
                    }}>
                        <div className={styles.stack}>
                            {
                                this.state.onCarnet?
                                (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                                )
                                :
                                (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                                )
                            }
                            {
                                this.props.colorIcones === true ? (<p className={styles.pictoB}>Carnet</p>) : (<p>Carnet</p>)
                            }
                            
                        </div>
                    </button>
        
        
                    <button>
                    <div className={styles.stack} onClick={()=>{
                        if(this.props.allowCarnet){
                        this.setState({ onIndices: !this.state.onIndices})
                        }}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                        {
                            this.props.colorIcones === true ? (<p className={styles.pictoB}>Indices</p>) : (<p>Indices</p>)
                        }
                    </div>
                </button>      
        
                </div>
        
        
            </div>
            <Indices ouverture={this.state.onIndices} colorIndice={color} page={this.props.page} />
            < Carnet ouverture={this.state.onCarnet} colorCarnet={color} allowPageSecrete={this.props.allowPageSecrete}/>
        </div>
    )
}
}

Header.propTypes = {
    color: PropTypes.bool,
    allowCarnet: PropTypes.bool,
    allowPageSecrete: PropTypes.bool
  }

export default Header