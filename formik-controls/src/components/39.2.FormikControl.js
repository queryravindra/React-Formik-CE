import React from 'react';
import Input from './33.0.Input';
import Textarea from './34.1.Textarea';
import Select from './35.1.Select';
import RadioButtons from './36.1.RadioButtons';
import CheckboxGroup from './37.1.CheckboxGroup';
import DatePicker from './38.1.DatePicker';

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
        return <RadioButtons {...rest} />
      case 'checkbox':
          return <CheckboxGroup {...rest} />
      case 'date':
        return <DatePicker {...rest} />
          default: return null
  }
}

export default FormikControl;