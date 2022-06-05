// When does validation run

import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
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

function ValidationRun() {

  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange={false}
        validateOnBlur={false}
    >
        <Form>
            <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <Field
                 type='text'
                 id='name'
                 name='name'
                />
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
            </div>

            <div className='form-control'>
              <label htmlFor='address'>Address</label>
              <FastField name='address'>
                {
                  (props) => {
                    console.log('Field render')
                    const { field, form, meta } = props;
                    return (
                      <div>
                        <input type='text' id='address' {...field} />
                        { meta.touched && meta.error ? <div>{meta.error}</div> : null }
                      </div>
                    )
                  }
                }
              </FastField>
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
                            const { push, remove, form } = fieldArrayProps;
                            const { values } = form;
                            const { phNumbers } = values;
                            console.log('Form errors', form.errors);
                            {/* on page load we can see that the errors object is empty, so the form validation is not yet run */}
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

export default ValidationRun


// When does validation run?

/**
 * what we know so far when the validation rules are run formik auto populates the formik.errors object with the error messages
 * 
 * for this tutorial we can use that to monitor when exactly validation runs
 * we need to pick up a field that implements the render props pattern which will give us access formik.errors object
 * we have two choices, we can use the address the field or the phone numbers field
 * since the address field a fast field component its behaviour is not exactly what we want for this video
 * so lets go with phoneNumbers
 */


/**
 * on page load the errors object is empty, so the form validation has not yet run
 * 
 * now lets understand the different scenarios in which this error object gets populated
 * 
 * 1st scenario: when a change event is occured - formik runs validation after any change to event in the form(onChange)
 * 
 * 2nd scenario: formik runs validation after any blur event in the form 
 * i.e., blur out the  form field(onBlur)(visited and getting out without filling)
 * 
 * 3rd scenario: whenever form submission is attempted formik runs the validation
 *      if the validation does not pass for all the fields the onSubmit handler never gets executed
 *      (without interacting with any of the form fields i am going to directly click on the submit button)
 * 
 * so you dont have to worry about manually handling form submission only if all the validation rules pass.formik will take care that for you
 * these are the three cases in which validation will be run 
 */

/**
 * Based on complexity of your form or even just meet your application requirements sometimes we might not want formik to
 * automatically run the validation function for us, so what formik does is provide two props to control the first two scenarios
 * on Formik componet we can specify a prop called validateOnChange={false}, this will instruct formik to not run the validation
 * function on change event
 * 
 * validateOnBlur={false}
 */