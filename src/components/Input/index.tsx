import { forwardRef } from "react"
import { FormControl, FormErrorMessage, FormLabel, Input as InputStyled, TextArea } from "./styles"
import { FieldError } from "react-hook-form"

interface InputProps {
  name: string;
  label?: string;
  type: string;
  error?: FieldError;
  placeholder: string;
  value?: string;
  rows?: number;
}

const Input = ({
  name,
  label,
  type,
  error = null,
  ...rest
}: InputProps, ref) => {

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      
      {type === "textarea" ?
        <TextArea
          name={name}
          id={name}
          error={!!error}
          ref={ref}
          {...rest}
        /> :
        <InputStyled
          name={name}
          id={name}
          error={!!error}
          ref={ref}
          {...rest}
        />
      }

      {!!error && <FormErrorMessage>
        {error.message}
      </FormErrorMessage>}
    </FormControl>
  )
}

export const InputBase = forwardRef(Input)