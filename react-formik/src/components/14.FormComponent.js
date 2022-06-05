// import React from 'react';
// import { Formik, Form } from 'formik';
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

// function FormComponent() {

//   console.log('Visited fields', formik.touched);

//   return (
//     <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}>
//         <Form>
//             <div className='form-control'>
//                 <label htmlFor='name'>Name</label>
//                 <input
//                  type='text'
//                  id='name'
//                  name='name'
//                  {...formik.getFieldProps('name')}
//                 />
//                 {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
//             </div>

//             <div className='form-control'>
//                 <label htmlFor='email'>E-mail</label>
//                 <input
//                  type='email' 
//                  id='email' 
//                  name='email' 
//                  {...formik.getFieldProps('email')} 
//                 />
//                 {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
//             </div>

//             <div className='form-control'>
//                 <label htmlFor='channel'>Channel</label>
//                 <input type='text' 
//                  id='channel' 
//                  name='channel' 
//                  {...formik.getFieldProps('channel')} 
//                 />
//                 {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
//             </div>

//             <button type='submit'>Submit</button>
//         </Form>
//     </Formik>
//   )
// }

// export default FormComponent

// // Let's see how to replace useFormik hook with formik component step by step

// /**
//  * 1st step: import form from formik
//  * 2nd step: replace the html 'form' element with the form component
//  * step3: remove onSubmit prop
//  *      now we are able to do this becz the form component is a small wrapper around the html form element that automatically 
//  *      hooks into formiks handleSubmit method
//  * so, the form componet helps us by automatically linking the onSubmit method to our forms submit event
//  *     this will automatically link the onSubmit event to the onSubmit method passed into formik
//  */