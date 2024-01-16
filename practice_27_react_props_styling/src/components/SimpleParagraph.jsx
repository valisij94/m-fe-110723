import React from "react";

export function SimpleParagraph( {textContent, clickHandler} ) {

  return (
    <p onClick={clickHandler} >{textContent}</p>
  );
}