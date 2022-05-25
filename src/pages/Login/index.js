import React, { useEffect } from "react";
import { LoginForm } from "../../components/Form/LoginForm";
import { Container } from "./styles";

const Login = () => {

  // useEffect(() => {
  //   const queryString = window.location.search;
  //   const urlParams = new URLSearchParams(queryString)
  //   const codeObj = urlParams.get('code')

    

  //   if(codeObj?.code) getAccessTokenGithub(codeObj.code)
  // },[])

  return (
    <Container>
      <LoginForm/>
    </Container>
  )
}

export default Login;