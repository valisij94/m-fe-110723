import React from "react";
import DwarwesLocationItem from "./DwarwesLocationItem";

export default function DwarwesLocationList( { locations } ) {

  return (
    <>
      {
        locations.map( location => {
          return (<DwarwesLocationItem
            key={location.locationName}
            locationName={location.locationName}
            population={location.population}
            king={location.king}
          />
          );
        })
      }
    </>
  );
}