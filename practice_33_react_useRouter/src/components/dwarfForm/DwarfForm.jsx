import React, { useState } from "react";

import classes from './DwarfForm.module.css';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function DwarfForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm();

  const navigate = useNavigate();

  const [formError, setFormError] = useState('');

  const checkForm = () => {
    const formInputs = getValues();
    let errorMessage = '';
    for (let [key, value] of Object.entries(formInputs)) {
      if (!value) {
        errorMessage += `Field ${key} is empty!`;
      }
    }
    setFormError(errorMessage);
  }

  const dwarfSubmitHandler = async (formData) => {
    if (formData.dwarfName === 'Dvalin' && formData.dwarfWeapon === 'Sword') {
      setFormError('You already have 2 axes!');
    }
    else {
      setFormError('');

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          headers: {'Content-type': 'application/json; charset=UTF-8'},
          method: 'POST',
          body: JSON.stringify(formData)
        });
        if (!response.ok) {
          throw new Error('Failed to submit!');
        }
        const result = await response.json();
        console.log(result);
        navigate('/');
      }
      catch (error) {
        setFormError(error.message);
      }
    }
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
          required: 'Please, enter your name!',
          minLength: {
            value: 3,
            message: 'Too short!'
          },
          maxLength: {
            value: 12,
            message: 'Too long!'
          }
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
          required: 'Choose your weapon!',
          validate: (value) => value.toLowerCase() !== 'crossbow' || 'No archers!'
        })}
      />
      {
        errors.dwarfWeapon && errors.dwarfWeapon.message && <p>{errors.dwarfWeapon.message}</p>
      }

      <label htmlFor="email">Please enter email</label>
      <input
        className={classes.dwarfFormInput}
        type="email"
        {...register('dwarfEmail', {
          required: 'Please enter your email!',
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: 'Invalid email!'
          }
        })}
      />
      {
        errors.dwarfEmail && errors.dwarfEmail.message && <p>{errors.dwarfEmail.message}</p>
      }

      { formError && <p>{formError}</p>}
      <button
        type="button"
        className={classes.dwarfFormButton}
        onClick={checkForm}
      >Check your data!</button>
      <button
        type="submit"
        className={classes.dwarfFormButton}
      >Join Torin's troop!</button>
    </form>

  );
}