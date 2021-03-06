import React from "react";
import styles from './BackgroundImage.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import image1 from './Img/vieuxpapier.png';
import image2 from './Img/salle.png';
import image3 from './Img/pilepapier.png';


let cx = classNames.bind(styles);


class BackgroundImage extends React.Component {
    render() {
        let num = this.props.ImageNum
        let ImageLink
        switch (num) {
            case 1:
                ImageLink = image1
                break;
            case 2:
                ImageLink = image2
                break;
            case 3:
                ImageLink = image3
                break;
            default:
                ImageLink = image1
        }
        let className = cx({
            Image: true,
            blur: this.props.Blur,
          });
        let classNameColor = cx({
            GreyColor: this.props.GreyColor,
            BrownColor: this.props.BrownColor,
            divColor: true,
        });
        return (
            <div className={styles.BackgroundImageContainer}>
                <div className={className} style={{backgroundImage: `url(${ImageLink})`}}></div>
                <div className={classNameColor} ></div>
            </div>
        );
    }
}


BackgroundImage.propTypes = {
    Blur: PropTypes.bool,
    GreyColor: PropTypes.bool,
    BrownColor: PropTypes.bool,
    ImageNum: PropTypes.number,
  }
  
export default BackgroundImage;