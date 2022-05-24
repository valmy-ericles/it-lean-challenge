import { FormControl, FormErrorMessage, FormLabel, Input, TextArea } from "./styles"

export const InputBase = ({ name, type, placeholder, label, error = null, ...rest }) => {
  if(type === 'textarea') {
    return (
      <TextArea
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        {...rest}
      />
    )
  }

  return (
    <FormControl isInvalid={!!error}>
       { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        {...rest}
      />
      {!!error && <FormErrorMessage>
        {error.message}
      </FormErrorMessage>}
    </FormControl>
  )
}