import { ReactNode } from "react"
import { Button } from "./styles"

interface ButtonDefaultProps {
  children: ReactNode;
  color: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export const ButtonDefault = ({ children, color, ...rest }:ButtonDefaultProps) => {
  return (
    <Button {...rest} color={color}>
      {children}
    </Button>
  )
}