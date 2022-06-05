import React from 'react';
import { Field } from 'formik';
import {
    Input, 
    FormControl,
    FormLabel,
    FormErrorMessage
} from '@chakra-ui/core';

function ChakraInput(props) {
  const { label, name, ...rest } = props;

  return (
    <Field name={name}>
        {
            ({ field, form }) => {
                return (
                    <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                        <FormLabel htmlFor={name}>{label}</FormLabel>
                        <Input {...field} {...rest} id={name} />
                        <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                    </FormControl>
                )
            }
        }
    </Field>
  )
}

export default ChakraInput



// ({ field, form }) => (
//     <FormControl isInvalid={form.errors[name] && form.touched[name]}>   
//         <FormLabel htmlFor={name}>{label}</FormLabel>
//         <Input {...field} {...rest} id={name} />
//         <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
//     </FormControl>
// ) 

//                      OR

// ({ field, form }) => {
//     return <FormControl isInvalid={form.errors[name] && form.touched[name]}>
//         <FormLabel htmlFor={name}>{label}</FormLabel>
//         <Input {...field} {...rest} id={name} />
//         <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
//     </FormControl>
// }