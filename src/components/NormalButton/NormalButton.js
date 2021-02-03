
import React from "react";
import styles from './NormalButton.module.css';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";



class NormalButton extends React.Component {
  
  render() {
    return (
    <div className= {styles.ContainerButton}>
       
      <Link className={styles.Button} to = {this.props.link}>
      {this.props.buttonText} 
      </Link>
      
    
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