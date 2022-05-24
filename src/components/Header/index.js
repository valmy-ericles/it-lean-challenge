import { Container, RightSection } from "./styles"
import ITLogo from "../../assets/images/it-logo.svg"
import LogoutIcon from "../../assets/images/logout.svg"

export const Header = () => {
  return (
    <Container>
      <img src={ITLogo} alt="Logo Header"/>
      <RightSection>
        <span>Valmy Machado</span>
        <img src={LogoutIcon} alt="Logout"/>
      </RightSection>
    </Container>
  )
}