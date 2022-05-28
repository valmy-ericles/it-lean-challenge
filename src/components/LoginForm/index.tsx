import { useEffect } from "react";

import { initializeApp } from "firebase/app";
import { GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import history from "../../services/history"

import { Divider } from "../Divider"
import { InputBase } from "../Input"
import { LoginButton } from "../Buttons/LoginButton"
import { Container, ButtonsWrapper } from "./styles"
import { useAuth } from "../../contexts/auth";

export const LoginForm = () => {
  const { setAuthData } = useAuth()

  useEffect(() => {
    initializeApp({
      apiKey: "AIzaSyAB7w8uFNbTJEEqgtB8YD14AwHH75yvwjc",
      authDomain: "it-lean-auth.firebaseapp.com",
      projectId: "it-lean-auth",
      storageBucket: "it-lean-auth.appspot.com",
      messagingSenderId: "777533460368",
      appId: "1:777533460368:web:e72d2dd4e86d292164ed15",
      measurementId: "G-BEBEGDKP60"
    })
  }, [])


  const handleLogin = async () => {
    const provider = new GithubAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        
        localStorage.setItem('@it-lean-auth', JSON.stringify({ token, user }))
        setAuthData({ token, user })

        history.push('/dashboard')
      }).catch((error) => {
        const errorCode = error.code;
      });
  }

  return (
    <Container>
      <span>Login</span>

      <InputBase name="email" type="text" placeholder="Digite seu email" label="Email" />
      <InputBase name="password" type="password" placeholder="Digite sua senha" label="Senha" />

      <ButtonsWrapper>
        <LoginButton>
          Entrar
        </LoginButton>

        <Divider />

        <LoginButton
          isGithub
          onClick={() => handleLogin()}
        >
          Entrar com Github
        </LoginButton>
      </ButtonsWrapper>
    </Container>
  )
}
