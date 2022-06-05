import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from './19.TextError';

const initialValues = {
  name: 'Ravindra',
  email: '',
  channel: '',
  comments: '',
  address: ''
};

const onSubmit = values => {
  console.log('Form data', values);
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid email format').required('Required!'),
    channel: Yup.string().required('Required!')
})

function ErrorMessageRevisited() {

  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>
            <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <Field
                 type='text'
                 id='name'
                 name='name'
                />
                {/* <ErrorMessage name='name' component='div' /> */}
                <ErrorMessage name='name' component={TextError} />
            </div>

            <div className='form-control'>
                <label htmlFor='email'>E-mail</label>
                <Field
                 type='email' 
                 id='email' 
                 name='email'  
                />
                <ErrorMessage name='email'>
                    {
                        (errorMsg) => <div className='error'>{errorMsg}</div>
                    }
                </ErrorMessage>
            </div>

            <div className='form-control'>
                <label htmlFor='channel'>Channel</label>
                <Field type='text' 
                 id='channel' 
                 name='channel' 
                 placeholder='Youtube Channel Name'
                />
                <ErrorMessage name='channel' />
            </div>

            <div className='form-control'>
                <label htmlFor='comments'>Comments</label>
                <Field as='textarea' id='comments' name='comments' />
                {/* <Field component='textarea' id='comments' name='comments' /> */}
            </div>

            {/* 3rd point */}
            <div className='form-control'>
              <label htmlFor='address'>Address</label>
              <Field name='address'>
                {
                  (props) => {
                    const { field, form, meta } = props;
                    console.log('Render Props', props)
                    return (
                      <div>
                        <input type='text' id='address' {...field} />
                        { meta.touched && meta.error ? <div>{meta.error}</div> : null }
                      </div>
                    )
                  }
                }
              </Field>
            </div>

            <button type='submit'>Submit</button>
        </Form>
    </Formik>
  )
}

export default ErrorMessageRevisited

