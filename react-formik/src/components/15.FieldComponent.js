// import React from 'react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';

// const initialValues = {
//   name: 'Ravindra',
//   email: '',
//   channel: ''
// };

// const onSubmit = values => {
//   console.log('Form data', values);
// }

// const validationSchema = Yup.object({
//     name: Yup.string().required('Required!'),
//     email: Yup.string().email('Invalid email format').required('Required!'),
//     channel: Yup.string().required('Required!')
// })

// function FieldComponent() {

//   console.log('Visited fields', formik.touched);

//   return (
//     <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}>
//         <Form>
//             <div className='form-control'>
//                 <label htmlFor='name'>Name</label>
//                 <Field
//                  type='text'
//                  id='name'
//                  name='name'
//                 />
//                 {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
//             </div>

//             <div className='form-control'>
//                 <label htmlFor='email'>E-mail</label>
//                 <Field
//                  type='email' 
//                  id='email' 
//                  name='email'  
//                 />
//                 {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
//             </div>

//             <div className='form-control'>
//                 <label htmlFor='channel'>Channel</label>
//                 <Field type='text' 
//                  id='channel' 
//                  name='channel' 
//                 />
//                 {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
//             </div>

//             <button type='submit'>Submit</button>
//         </Form>
//     </Formik>
//   )
// }

// export default FieldComponent

// // this component simplifies the code for form field

// /**
//  * 1st step: import field from formik
//  * 2nd step: replace each input tag with the field component
//  * step3: get rid of getFieldProps helper method from each of the fields
//  *       we are able to do this becz the field component does 3 things
//  *       1. It will behind the scenes Hookup inputs to the top level formik component
//  *       2. It uses the name attribute to match up with the formik state
//  *       3. By default field will render an input element which is what IUT form as well
//  * the field component hooks into formik using the name attribute
//  * It will take care of handling the value, handling onChange and the handler event
//  */

