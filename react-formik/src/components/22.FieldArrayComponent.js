import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import TextError from './19.TextError';

const initialValues = {
  name: 'Ravindra',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: ''
  },
  phoneNumbers: ['', ''],
  phNumbers: ['']
};

const onSubmit = values => {
  console.log('Form data', values);
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid email format').required('Required!'),
    channel: Yup.string().required('Required!')
})

function FieldArrayComponent() {

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

            <div className='form-control'>
                <label htmlFor='facebook'>Facebook profile</label>
                <Field type='text' id='facebook' name='social.facebook' />
            </div>

            <div className='form-control'>
                <label htmlFor='twitter'>Twitter profile</label>
                <Field type='text' id='twitter' name='social.twitter' />
            </div>

            <div className='form-control'>
                <label htmlFor='primaryPh'>Primary phone number</label>
                <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
            </div>

            <div className='form-control'>
                <label htmlFor='secondaryPh'>Secondary phone number</label>
                <Field type='text' id='secondaryPh' name='phoneNumbers[1]' />
            </div>

            <div className='form-control'>
                <label>List of phone numbers</label>
                <FieldArray name='phNumbers'>
                    {
                        (fieldArrayProps) => {
                            console.log('fieldArrayProps', fieldArrayProps)
                            const { push, remove, form } = fieldArrayProps;
                            const { values } = form;
                            const { phNumbers } = values;
                            return <div>
                                {
                                    phNumbers.map((phNumber, index) => (
                                        <div key={index}>
                                            <Field name={`phNumbers[${index}]`} />
                                            {
                                                index > 0 && (
                                                    <button type='button' onClick={() => remove(index)}>
                                                    {' '}
                                                     - {' '}
                                                    </button>
                                                )
                                            }
                                            <button type='button' onClick={() => push('')}>
                                            {' '}
                                             + {' '} 
                                            </button>
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    }
                </FieldArray>
            </div>

            <button type='submit'>Submit</button>
        </Form>
    </Formik>
  )
}

export default FieldArrayComponent

