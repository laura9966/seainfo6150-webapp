import React from "react";
import {useState } from "react";
import styles from "./ArticleTextToggleButton.module.css";
import PropTypes from "prop-types";

const ArticleTextToggleButton = (props) => {
    const handleClick = () => {
        props.onClick();
    };

    return (
        <button className={styles.button} onClick={handleClick}>{props.buttonText}</button>
    );
};

ArticleTextToggleButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired
}

export default ArticleTextToggleButton;