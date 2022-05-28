import { ReactNode } from "react"
import { Header } from "../Header"

interface PageProps {
  children: ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}