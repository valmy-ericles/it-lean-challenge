import { forwardRef } from "react"
import { FormControl, FormErrorMessage, Input as InputStyled, TextArea } from "./styles"

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