import React from "react";

export default function DwarwesLocationItem( {locationName, population, king} ) {

  return (
    <div className="dwarwesLocationItemContainer">
      <h4 className="locationItemHeader">{locationName}</h4>
      <p className="locationItemPopulation">{population}</p>
      <p className="locationItemKing">{king}</p>
    </div>
  );
}