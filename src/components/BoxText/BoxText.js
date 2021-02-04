import React from "react";
import styles from './BoxText.module.scss';
import PropTypes from 'prop-types';
class BoxText extends React.Component {
  
  render() {
    return (
    <div className= {styles.ContainerBox}>
            <div className= {styles.Containertext}>
                <label className={styles.namePerso}>{this.props.namePerso}</label>
                <p className={styles.corpsBoxText}>{this.props.textBoxContenu}</p>
            </div>
    
      </div> 
    );
  }
}


BoxText.propTypes = {
    textBoxContenu: PropTypes.string,

  }

 export default BoxText;