import { ReactNode } from "react"
import { Button } from "./styles"

interface ActionButtonProps {
  children: ReactNode;
  color: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export const ActionButton = ({ children, color, ...rest }:ActionButtonProps) => {
  return (
    <Button {...rest} color={color}>
      { children }
    </Button>
  )
}