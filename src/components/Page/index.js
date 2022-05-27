import { Header } from "../Header"

export const Page = ({ children }) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}