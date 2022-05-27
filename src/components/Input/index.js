import { forwardRef } from "react"
import { FormControl, FormErrorMessage, FormLabel, Input as InputStyled, TextArea } from "./styles"

const Input = ({
  name,
  label,
  type,
  error = null,
  ...rest
}, ref) => {

  if (type === "textarea") {
    return (
      <FormControl>
        {label && <FormLabel>{label}</FormLabel>}
        <TextArea
          name={name}
          id={name}
          error={!!error}
          ref={ref}
          {...rest}
        />

        {!!error && <FormErrorMessage>
          {error.message}
        </FormErrorMessage>}
      </FormControl>
    )
  }

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <InputStyled
        name={name}
        id={name}
        error={!!error}
        ref={ref}
        {...rest}
      />

      {!!error && <FormErrorMessage>
        {error.message}
      </FormErrorMessage>}
    </FormControl>
  )
}

export const InputBase = forwardRef(Input)