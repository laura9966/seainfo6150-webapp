import React from "react";
import {useState } from "react";
import styles from "./ArticleTextToggleButton.module.css";
import PropTypes from "prop-types";

const ArticleTextToggleButton = (props) => {
    const handleClick = () => {
        props.onClick();
    };

    return (
       <div className ={styles.box}>
        <button className={styles.button} onClick={handleClick}>{props.buttonText}</button>
        </div>
    );
};

ArticleTextToggleButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired
}

export default ArticleTextToggleButton;