import { Container, RightSection } from "./styles"
import ITLogo from "../../assets/images/it-logo.svg"
import LogoutIcon from "../../assets/images/logout.svg"
import { useAuth } from "../../contexts/auth"
import history from "../../services/history"

export const Header = () => {
  const { auth, setAuthData } = useAuth()
  
  const logout = () => {
    setAuthData({})
    localStorage.clear()
    
    history.push("/")
  }

  return (
    <Container>
      <img src={ITLogo} alt="Logo Header"/>
      <RightSection>
        <img src={auth?.user?.photoURL} alt="Avatar" className="avatar"/>
        <span>{auth?.user?.displayName}</span>
        <img src={LogoutIcon} alt="Logout" onClick={() => logout()}/>
      </RightSection>
    </Container>
  )
}