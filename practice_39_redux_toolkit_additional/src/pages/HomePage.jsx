import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dropParticipant } from "../store/slices/participantsSlice";

export default function HomePage() {

  const participantsCount = useSelector( (state) => state.counter );

  const dwarwes = useSelector( state => state.participants );

  console.log(dwarwes);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Welcome, brave dwarf!</h1>
      <p>You can apply your CV here!</p>
      <h3>Hello, there are {participantsCount} now!</h3>
      <div>
        {
          dwarwes && dwarwes.map( dwarf => {
            return (
              <Link key={dwarf.dwarfName} to={`/weapons/${dwarf.dwarfName}`}>
                <p>{dwarf.dwarfName}</p>
              </Link>
            )
          })
        }
      </div>
    </div>
  );
}