import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionsLink } from "./header.styles.jsx";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from "../carticon/index.jsx";
import { auth } from "../../firebase/firebase";
import { selectHidden } from "../../redux/slices/cartSlice.js";
import CartDropDown from "../cartdropdown";
import { useAuthListener } from "../../hooks/useAuthListener";

const Header = () => {

  const user = useAuthListener();
  const hidden = useSelector(selectHidden);
  
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
            <OptionsLink as='div' onClick={() => signOut(auth)}>
              SIGN OUT
            </OptionsLink>
          ) : (
            <OptionsLink to="/login">SIGN IN</OptionsLink>
          )
        }

        {/* cart bag */}
        <CartIcon />
      </OptionsContainer>

      {
        hidden ? null : <CartDropDown />
      }
    </HeaderContainer>
  )
}

export default Header
