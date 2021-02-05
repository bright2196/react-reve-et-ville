import styles from "./Header.module.scss";
import React from 'react'
import Carnet from "../Carnet/Carnet";
import PropTypes from 'prop-types';





class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            onCarnet: false

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
    
                <div className={styles.svgson}>
    
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                </button>
    
                    <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                </button>
                    
            </div>
    
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
                    <div className={styles.stack}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                        {
                            this.props.colorIcones === true ? (<p className={styles.pictoB}>Indices</p>) : (<p>Indices</p>)
                        }
                    </div>
                </button>
        
        
                <button>
                    <div className={styles.stack}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                    {
                        this.props.colorIcones === true ? (<p className={styles.pictoB}>Galerie</p>) : (<p>Galerie</p>)
                    }
                    </div>
                </button>
        
        
                </div>
        
        
            </div>
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