import { Button } from "./styles"

export const ActionButton = ({ children, color, ...rest }) => {
  return (
    <Button {...rest} color={color}>
      { children }
    </Button>
  )
}