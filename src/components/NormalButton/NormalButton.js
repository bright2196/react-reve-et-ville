
import React from "react";
import styles from './NormalButton.module.scss';
import PropTypes from 'prop-types';



class NormalButton extends React.Component {
  
  render() {
    return (
    <div className= {styles.ContainerButton}>
       
      <button className={styles.Button} to = {this.props.link}>
      {this.props.buttonText} 
      </button>
      
    
      </div>
   
     
      
    );
  }
}


NormalButton.propTypes = {
    name: PropTypes.string,
    fontWeight: PropTypes.string,
    color: PropTypes.string, 
    fontSize: PropTypes.string
  }
  export default NormalButton;