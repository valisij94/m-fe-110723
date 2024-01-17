import React from "react";

export function SimpleParagraph( {textContent, clickHandler} ) {

  const handleClick = () => {
    if (clickHandler) {
      clickHandler();
    }
  }

  return (
    <p onClick={handleClick} >{textContent}</p>
  );
}