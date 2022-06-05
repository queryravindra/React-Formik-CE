import React from 'react'
import Input from './33.0.Input';

function FormikControl(props) {
  const { control, ...rest } = props;
  switch(control) {
      case 'input': return <Input {...rest} />
      case 'textare':
      case 'select':
      case 'radio':
      case 'checkbox':
      case 'date':
          default: return null
  }
}

export default FormikControl