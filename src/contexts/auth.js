import { createContext, useContext, useState } from "react"

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const authStorage = localStorage.getItem('@it-lean-auth')
  const [auth, setAuth] = useState(authStorage ? JSON.parse(authStorage) : {})

  const setAuthData = (data) => {
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