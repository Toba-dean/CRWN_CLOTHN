import { HeaderContainer, LogoContainer, OptionsContainer, OptionsLink } from "./header.styles.jsx";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from "../carticon/index.jsx";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo to="/" />
      </LogoContainer>

      <OptionsContainer>
        <OptionsLink to="/shop">SHOP</OptionsLink>
        <OptionsLink to="/contact">CONTACT</OptionsLink>
        <OptionsLink to="/login">SIGN IN</OptionsLink>

        {/* cart bag */}
        <CartIcon />
      </OptionsContainer>
    </HeaderContainer>
  )
}

export default Header
