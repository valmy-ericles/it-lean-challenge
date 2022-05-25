import { Divider } from "../Divider"
import { InputBase } from "../Input"
import { LoginButton } from "../Buttons/LoginButton"
import { Container, ButtonsWrapper } from "./styles"
import { api } from '../../../services/api'

import LoginGithub from 'react-login-github';

export const LoginForm = () => {

  const onSuccess = async response => {
    try {

      const client_id = process.env.REACT_APP_GITHUB_CLIENT_ID
      const client_secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
      
      const url = `/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&codigo=${response.code}`
      // const resp = await api.post(url, '', { headers: {
      //   'Access-Control-Allow-Origin': '*'
      // }});

      const resp = await api.post(url, '', { headers: {
        "Access-Control-Allow-Origin": "*",
        // client_id,
        // client_secret,
        // codigo: response.code,
      }});

      console.log(resp)
    } catch (err) {
      console.log(err)
    }
  }

  const onFailure = response => console.error(response);

  return (
    <Container>
      <span>Login</span>

      <InputBase type="text" placeholder="Digite seu email" label="Email" />
      <InputBase type="password" placeholder="Digite sua senha" label="Senha" />


      <ButtonsWrapper>
        <LoginButton>
          Entrar
        </LoginButton>

        <Divider />

        <LoginGithub
          clientId={process.env.REACT_APP_GITHUB_CLIENT_ID}
          redirectUri={process.env.REACT_APP_GITHUB_REDIRECT_URL}
          onSuccess={onSuccess}
          onFailure={onFailure}
        />

        <LoginButton isGithub>
          Entrar com Github
        </LoginButton>
      </ButtonsWrapper>
    </Container>
  )
}
