import { createContext, useContext, useState } from "react"

type UserProps = {
  apiKey: string;
  email: string;
  photoURL: string;
  displayName: string;
}

type AuthData = {
  token: string;
  user: UserProps;
}

interface AuthProps {
  auth: AuthData;
  setAuthData: (data: any) => void;
}

const AuthContext = createContext({} as AuthProps)

const AuthProvider = ({ children }) => {
  const authStorage = localStorage.getItem('@it-lean-auth')
  const [auth, setAuth] = useState(authStorage ? JSON.parse(authStorage) : {})

  const setAuthData = (data: AuthData) => {
    setAuth({ ...data })
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuthData,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  return useContext(AuthContext)
}

export { useAuth, AuthProvider }