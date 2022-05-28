import { Button } from "./styles"
import GithubIcon from "../../../assets/images/github-icon.svg"
import { ReactNode } from "react"

interface LoginButtonProps {
  children: ReactNode;
  isGithub?: boolean;
  onClick?: () => void;
}

export const LoginButton = ({ children, isGithub = false, ...rest }:LoginButtonProps) => {

  if (isGithub) {
    return (
      <Button isGithub {...rest}>
        <img src={GithubIcon} alt="Login Github" />
        {children}
      </Button>
    )
  }

  return (
    <Button {...rest}>
      {children}
    </Button>
  )
}