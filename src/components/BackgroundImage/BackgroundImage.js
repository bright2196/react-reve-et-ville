import React from "react";
import styles from './BackgroundImage.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import image from '../../pages/Home/background.png';
import image1 from './Img/tactical4-2-antoine-tardivel.jpg';
import image2 from './Img/tactical4-3-antoine-tardivel.jpg';
import image3 from './Img/tactical4-4-antoine-tardivel.jpg';


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
                ImageLink = image
        }
        let className = cx({
            Image: true,
            blur: this.props.Blur,
          });
        return (
            <div className={styles.BackgroundImageContainer}>
                <div className={className} style={{backgroundImage: `url(${ImageLink})`}}>
                </div>
            </div>
        );
    }
}


BackgroundImage.propTypes = {
    Blur: PropTypes.bool,
    ImageNum: PropTypes.number,

  }
  export default BackgroundImage;