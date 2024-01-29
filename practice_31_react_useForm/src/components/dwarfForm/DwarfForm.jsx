import React from "react";

import classes from './DwarfForm.module.css';

export default function DwarfForm() {

  return (
    <form className={classes.dwarfForm}>
      <label htmlFor="dwarfName">Enter your name, brave dwarf!</label>
      <input className={classes.dwarfFormInput} type="text" />
      <label htmlFor="weapon">What weapon do you prefer?</label>
      <input className={classes.dwarfFormInput} type="text"/>
      <label htmlFor="name">Name</label>
      <button className={classes.dwarfFormButton}>Join Torin's troop!</button>
    </form>
  );
}