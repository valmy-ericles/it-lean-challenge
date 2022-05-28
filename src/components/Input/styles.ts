import styled from "styled-components"

type ErrorType = {
  error: boolean;
}

export const FormControl = styled.div`
  margin-bottom: 2rem;
`
export const FormLabel = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  line-height: 26px;
`

export const Input = styled.input`
  box-sizing: border-box;
  height: 60px;
  width: 100%;
  font-size: 16px;

  background-color: #FFFFFF;
  border: 1px solid #222222;
  border-radius: 10px;
  padding: 0.1rem 1.5rem;

  ::placeholder {
    color: #959595;
    opacity: 1;
  }

  border: ${({ error }: ErrorType) => error ? '2px solid red' : ''};
`

export const FormErrorMessage = styled.div`
  color: red;
  margin-left: 3px;
`

export const TextArea = styled.textarea`
  width: 100%;
  border-radius: 10px;
  border: 1px solid #000000;

  padding: 1rem 1.5rem;
  resize: vertical;

  border: ${({ error }: ErrorType) => error ? '2px solid red' : ''};
`
