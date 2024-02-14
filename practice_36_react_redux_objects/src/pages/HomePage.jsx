import React from "react";
import { useSelector } from "react-redux";

export default function HomePage() {

  const currentParticipants = useSelector( (state) => state.participants );
  return (
    <div>
      <h1>Welcome, brave dwarf!</h1>
      <p>You can apply your CV here!</p>
      <h3>Hello, there are {currentParticipants} now!</h3>
    </div>
  );
}