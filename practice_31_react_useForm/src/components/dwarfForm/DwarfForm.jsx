import React, { useEffect } from "react";

import classes from './DwarfForm.module.css';

import { useForm } from 'react-hook-form';

export default function DwarfForm() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const dwarfSubmitHandler = (formData) => {
    console.log(formData);
  }

  const dwarfErrorHandler = (formErrors) => {
    console.log(formErrors)
    //console.error('Fix All Errors!')
  }

  return (
    <form
      onSubmit={handleSubmit(dwarfSubmitHandler, dwarfErrorHandler)}
      className={classes.dwarfForm}
    >
      <label htmlFor="dwarfName">Enter your name, brave dwarf!</label>
      <input
        className={classes.dwarfFormInput}
        type="text"
        {...register('dwarfName', {
          required: 'Please, enter your name!'
        })}
      />
      {
        errors.dwarfName && errors.dwarfName.message && <p>{errors.dwarfName.message}</p>
      }
      <label htmlFor="weapon">What weapon do you prefer?</label>
      <input
        className={classes.dwarfFormInput}
        type="text"
        {...register('dwarfWeapon', {
          required: 'Choose your weapon!'
        })}
      />
      {
        errors.dwarfWeapon && errors.dwarfWeapon.message && <p>{errors.dwarfWeapon.message}</p>
      }
      <label htmlFor="name">Name</label>
      <button className={classes.dwarfFormButton}>Join Torin's troop!</button>
    </form>

  );
}