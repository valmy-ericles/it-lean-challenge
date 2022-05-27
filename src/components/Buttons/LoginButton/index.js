import { Button } from "./styles"
import GithubIcon from "../../../assets/images/github-icon.svg"

export const LoginButton = ({ children, isGithub = false, ...rest }) => {

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