import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import CustomButton from "../custombutton";
import FormInput from "../forminput";
import { SignInContainer, HeaderText, SpanText, ButtonGroup } from "./signin.styles";
import { auth, signInWithGoogle } from "../../firebase/firebase";

const SignIn = () => {

  const signinData = {
    email: "",
    password: ""
  }

  const [data, setData] = useState(signinData);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setData({ ...data, [name]: value });
  }

  const handleSignIn = () => {
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password);
    console.log("Signed In");
  }

  const handleSubmit = e => {
    e.preventDefault();

    setData({
      email: "",
      password: ""
    })
  }

  return (
    <SignInContainer>
      <HeaderText>I already have an account</HeaderText>
      <SpanText>Sign in with your email and password.</SpanText>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          value={data.email}
          required
          label='Email'
          handleChange={handleChange}
        />

        <FormInput
          type='password'
          name='password'
          value={data.password}
          required
          label='Password'
          handleChange={handleChange}
        />

        <ButtonGroup>
          <CustomButton
            type="submit"
            onClick={handleSignIn}
          >
            Sign In
          </CustomButton>

          <CustomButton
            type='submit'
            isGoogleButton
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </CustomButton>
        </ButtonGroup>
      </form>
    </SignInContainer>
  )
}

export default SignIn
