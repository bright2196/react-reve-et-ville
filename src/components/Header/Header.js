import styles from "./Header.module.scss";
import React, { useState } from 'react'
import Carnet from "../Carnet/Carnet";


const Header = () => {

    const [onCarnet , setonCarnet] = useState(false);

    function carnetOpen() {
            setonCarnet(!onCarnet) 
    }    

    return(
        <div>
            <div className={styles.header}>
    
                <div className={styles.svgson}>
    
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke=" #4C2209" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                </button>
    
                    <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke=" #4C2209" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                </button>
                    
            </div>
    
                <div className={styles.pictosdroite}>
                    <button id='btn-carnet' onClick={carnetOpen}>
                        <div className={styles.stack}>
                            {
                                !onCarnet?
                                (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4C2209" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                                )
                                :
                                (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4C2209" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                                )
                            }
                            <p>Carnet</p>
                        </div>
                    </button>
        
        
                    <button>
                    <div className={styles.stack}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke=" #4C2209" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                        <p>Indices</p>
                    </div>
                </button>
        
        
                <button>
                    <div className={styles.stack}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4C2209" strokeWidth="2" strokeLinecap="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                    <p>Galerie</p>
                    </div>
                </button>
        
        
                </div>
        
        
            </div>
            < Carnet ouverture={onCarnet}/>
        </div>
    )
}

export default Header