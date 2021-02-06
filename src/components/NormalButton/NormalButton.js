import React from "react";
import styles from "./NormalButton.module.scss";
import PropTypes from "prop-types";


class NormalButton extends React.Component {

  //   const brown = () => "hsl(22, 79%, 17%)";
  //   const white = () => "#FFFDF1"
  
  
  render() {
    return (
      <div className={styles.ContainerButton}>
        <button
          className={styles.Button}
          to={this.props.link}
          style={{
            color: this.props.color,
            border: "double" + this.props.color,
          }}
          >
          {this.props.buttonText}
        </button>
      </div>
    );
  }
}

NormalButton.propTypes = {
  buttonText: PropTypes.string,
  fontWeight: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
};
export default NormalButton;
