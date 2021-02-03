
import React from "react";
import styles from './InputCode.module.scss';
import PropTypes from 'prop-types';



class InputText extends React.Component {
  
  render() {
    return (
    <div className= {styles.ContainerInput}>

         <input className= {styles.InputCode} type="text" id="name" name="name" required
            minlength="4" maxlength="5" size="10" placeholder={this.props.placeholderInput}/>
        

    </div>
   
     
      
    );
  }
}


InputText.propTypes = {
    name: PropTypes.string,
    fontWeight: PropTypes.string,
    color: PropTypes.string, 
    fontSize: PropTypes.string


  }
  export default InputText;