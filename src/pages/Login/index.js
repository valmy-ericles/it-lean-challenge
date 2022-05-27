import React, { useEffect } from "react";
import { LoginForm } from "../../components/LoginForm";
import { Container } from "./styles";
import { api } from '../../services/api'

const Login = () => {

  // useEffect(() => {
  //   const queryString = window.location.search;
  //   const urlParams = new URLSearchParams(queryString)
  //   const code = urlParams.get('code')
    

  //   const client_id = process.env.REACT_APP_GITHUB_CLIENT_ID
  //   const client_secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET

  //   async function getAccessToken() {

  //     const body = {
  //       client_id,
  //       client_secret,
  //       code,
  //     }

  //     try {
  //       const resp = await api.post('/login/oauth/access_token', body, {
  //         headers: {
  //           "Access-Control-Allow-Origin": "*",
  //           "Accept": "application/json"
  //         }
  //       });
  //       console.log(resp)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }

  //   if(code) getAccessToken(code)
  // }, [])

  return (
    <Container>
      <LoginForm />
    </Container>
  )
}

export default Login;