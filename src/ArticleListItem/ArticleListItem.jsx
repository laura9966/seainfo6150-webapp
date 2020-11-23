import React from "react";
import { useState} from "react";
import PropTypes from "prop-types";
import styles from "./ArticleListItem.module.css";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import ArticleImage from '../ArticleImage/ArticleImage.jsx';

const ArticleListItem = (props) => {
 const [showArticle, setShowArticle] = useState(false);
 const [buttonText, setButtonText] = useState("show more");
    const onClick =()=> {
            setShowArticle(!showArticle);
            if(!showArticle) {
              setButtonText("show less");
            } else {
              setButtonText("show more");
            }

    }
  return(
       <article className = {styles.box}>

            <div className={styles.articleImage}>
               <ArticleImage url={props.article.image._url} title={props.article.title}/>
             </div>

        <h2 className = {styles.header}>{props.article.title}</h2>
        {showArticle &&
    <div>
      <p className = {styles.summary}>{props.article.shortText}</p>
      <time className={styles.time} dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
    </div>
    }
    <ArticleTextToggleButton onClick={onClick} buttonText={buttonText}/>
  </article>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired
};

export default ArticleListItem;