import { SignIn, SignUp } from "../../components";
import { Container } from "./signinNsignout.styles";

const SignInAndSignOutPage = () => {
  return (
    <Container>
      <SignIn />
      <SignUp />
    </Container>
  )
}

export default SignInAndSignOutPage
