import { Button } from "./styles"

export const ButtonDefault = ({ children, color, ...rest }) => {
  return (
    <Button {...rest} color={color}>
      {children}
    </Button>
  )
}