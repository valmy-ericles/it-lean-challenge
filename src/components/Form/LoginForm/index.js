import { Divider } from "../Divider"
import { InputBase } from "../Input"
import { LoginButton } from "../Buttons/LoginButton"
import { Container, ButtonsWrapper } from "./styles"

export const LoginForm = () => {
  return (
    <Container>
      <span>Login</span>
      
      <InputBase type="text" placeholder="Digite seu email" label="Email"/>
      <InputBase type="password" placeholder="Digite sua senha" label="Senha"/>


      <ButtonsWrapper>
        <LoginButton>
          Entrar
        </LoginButton>

        <Divider/>
        
        <LoginButton isGithub>
          Entrar com Github
        </LoginButton>
      </ButtonsWrapper>
    </Container>
  )
}
