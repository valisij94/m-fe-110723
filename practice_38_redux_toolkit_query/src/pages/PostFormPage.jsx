

import { useForm } from 'react-hook-form';

export default function PostFormPage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (formData) => {
      try {
        console.log(formData)
      }
      catch (error) {
        console.log('ERROR', error)
      }
  }

  const errorHandler = (formErrors) => {
    console.log(formErrors);
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler, errorHandler)}
    >
      <label htmlFor="title">Enter post title</label>
      <input
        type="text"
        {...register('title', {
          required: 'Please, enter title!',
          minLength: {
            value: 5,
            message: 'Too short!'
          },
          maxLength: {
            value: 15,
            message: 'Too long!'
          }
        })}
      />
      {
        errors.title && errors.title.message && <p>{errors.title.message}</p>
      }
      <label htmlFor="body">Enter post Body</label>
      <input
        type="text"
        {...register('body', {
          required: 'Enter body!',
          maxLength: {
            value: 100,
            message: 'Too long!'
          }
        })}
      />
      {
        errors.body && errors.body.message && <p>{errors.body.message}</p>
      }
      <button
        type="submit"
      >Send Post!</button>

    </form>

  );
}