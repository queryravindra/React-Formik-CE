import React from 'react';
import { useFormik } from 'formik';

function ValidationFunction() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: ''
    },
    onSubmit: values => {
        console.log("Form data", values);
    },
    validate: values => {
        // values.name values.email values.channel
        // errors.name errors.email errors.channel
        // errors.name = 'This field is required'
        let errors = {}

        if(!values.name) {
          errors.name = 'Required'
        }

        if(!values.email) {
          errors.email = 'Invalid email format'
        } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email format'
        }

        if(!values.channel) {
          errors.channel = 'Required'
        }

        return errors;
    }
  });


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

export default ValidationFunction

// Lets define function body of validate
// This validate function that must satisfy some conditions formik to work as intended
/**
 * 1st condition:
 * this function will return an object
 * 
 * 2nd condition: 
 * the key for this errors object should be similar to that of the values object
 * 
 * errors.name errors.email errors.channel
 * 
 * these keys should be the same as the name attribute of the input element
 * 
 * 3rd condition:
 * the values of that keys should be a string indicating what the error message should be for that particular field
 */