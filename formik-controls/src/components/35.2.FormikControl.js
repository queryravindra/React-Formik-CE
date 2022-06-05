import React from 'react'
import Input from './33.0.Input';
import Textarea from './34.1.Textarea';
import Select from './35.1.Select';

function FormikControl(props) {
  const { control, ...rest } = props;
  switch(control) {
      case 'input': 
        return <Input {...rest} />
      case 'textarea': 
        return <Textarea {...rest} />
      case 'select':
        return <Select {...rest} />
      case 'radio':
      case 'checkbox':
      case 'date':
          default: return null
  }
}

export default FormikControl;