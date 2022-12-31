import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionsLink } from "./header.styles.jsx";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from "../carticon/index.jsx";
import { selectUser } from "../../redux/slices/userSlice.js";
import { auth } from "../../firebase/firebase.js";

const Header = () => {

  const user = useSelector(selectUser);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>

      <OptionsContainer>
        <OptionsLink to="/shop">SHOP</OptionsLink>
        {/* <OptionsLink to="/contact">CONTACT</OptionsLink> */}
        {
          user ? (
            <OptionsLink as="div" onClick={() => signOut(auth)}>
              SIGN OUT
            </OptionsLink>
          ) : (
            <OptionsLink to="/login">SIGN IN</OptionsLink>
          )
        }

        {/* cart bag */}
        <CartIcon />
      </OptionsContainer>
    </HeaderContainer>
  )
}

export default Header
