import React from "react";
import { useContext } from "react";
import { DwarfContext } from "../context/dwarfContext";

export default function HomePage() {

  const {participants} = useContext(DwarfContext);
  return (
    <div>
      <h1>Welcome, brave dwarf!</h1>
      <p>You can apply your CV here!</p>

      <div>
        {participants && participants.map( item => {
          return <p key={item.dwarfName}>{item.dwarfName}</p>
        })}
      </div>
    </div>
  );
}