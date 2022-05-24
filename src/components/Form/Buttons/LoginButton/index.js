import { Button } from "./styles"
import GithubIcon from "../../../../assets/images/github-icon.svg"

export const LoginButton = ({ children, isGithub = false }) => {

  if (isGithub) {
    return (
      <Button isGithub>
        <img src={GithubIcon} alt="Login Github" />
        {children}
      </Button>
    )
  }

  return (
    <Button>
      {children}
    </Button>
  )
}