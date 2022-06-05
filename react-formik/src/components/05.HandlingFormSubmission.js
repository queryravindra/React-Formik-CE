import React from 'react';
import { useFormik } from 'formik';

function HandlingFormSubmission() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: ''
    },
    onSubmit: values => {
        console.log("Form data", values);
    }
  });

//   console.log('Form values', formik.values)

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />

            <label htmlFor='email'>E-mail</label>
            <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />

            <label htmlFor='channel'>Channel</label>
            <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel} />

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default HandlingFormSubmission

// onSubmit is a method which automatically receives form state as its argument

// onSubmit method at all times will receive the latest values of the form data as its argument
// But in real world application we might call an API with these form data as payload