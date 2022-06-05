// import React from 'react';
// import { Formik } from 'formik';
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

// function FormikComponent() {

//   console.log('Visited fields', formik.touched);

//   return (
//     <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}>
//         <form onSubmit={formik.handleSubmit}>
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
//         </form>
//     </Formik>
//   )
// }

// export default FormikComponent

// // Let's see how to replace useFormik hook with formik component step by step

// /**
//  * 1st step: import formik instead of useFormik
//  * 2nd step: remove the call to useFormik
//  * step3: we wrap our entire form with this Formik Component
//  * step4: pass in the different props to this formik component
//  */