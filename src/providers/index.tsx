import { ReactNode } from "react"
import { AuthProvider } from "../contexts/auth"

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}