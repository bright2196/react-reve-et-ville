import React, { useContext } from "react";
import styles from './Link.module.scss';
import PropTypes from 'prop-types';
import { AppContext } from '../../App/AppProvider'

const Link = (props) => {
    console.log(props.href)
    const { setCurrentPage } = useContext(AppContext)
    const handleClick = ( ) => {
        setCurrentPage(props.href)
    }
    return (
    <div onClick={handleClick}>
        {props.children}
    </div>
    );
}

export default Link;