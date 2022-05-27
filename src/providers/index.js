import { AuthProvider } from "../contexts/auth"

export const Providers = ({ children }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}