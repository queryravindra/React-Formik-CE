import React from 'react';
import { useFormik } from 'formik';

function ManagingFormState() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: ''
    }
  });

  console.log('Form values', formik.values)

  return (
    <div>
        <form>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />

            <label htmlFor='email'>E-mail</label>
            <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />

            <label htmlFor='channel'>Channel</label>
            <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel} />

            <button>Submit</button>
        </form>
    </div>
  )
}

export default ManagingFormState

// useFormik will accept object as parameter

// The properties for initialvalues correspond to the name attribute of the individual fields
// The handleChange method is formik helper to update the values object
// formik.values will give us access to the form data