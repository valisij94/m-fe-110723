import React from "react";
import DwarwesLocationItem from "./DwarwesLocationItem";

export default function DwarwesLocationList( ) {

  const dwarwesLocations = [
    {
      locationName: 'Iron Hills',
      population: 30000,
      king: 'Dain Ironfoot',
    },
    {
      locationName: 'Erebor',
      population: 30000,
      king: 'Train',
    },
    {
      locationName: 'Moria',
      population: 30000,
      king: 'Durin'
    }
  ];

  return (
    <>
      {
        dwarwesLocations.map( location => {
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