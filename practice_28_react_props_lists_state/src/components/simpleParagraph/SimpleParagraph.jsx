import React from "react";
import classes from './SimpleParagraph.module.css';

export function SimpleParagraph( {textContent, clickHandler, currentTheme } ) {

  const handleClick = () => {
    if (clickHandler) {
      clickHandler();
    }
  }

  let theme = '';
  if (currentTheme) {
    theme = currentTheme === 'light' ? 'lightTheme' : 'darkTheme';
  }

  return (
    <p
      onClick={handleClick}
      className={classes[theme]}
    >{textContent}</p>
  );
}