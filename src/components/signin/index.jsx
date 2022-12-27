import { useState } from "react";

import CustomButton from "../custombutton";
import FormInput from "../forminput";
import { SignInContainer, HeaderText, SpanText, ButtonGroup } from "./signin.styles";

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

  return (
    <SignInContainer>
      <HeaderText>I already have an account</HeaderText>
      <SpanText>Sign in with your email and password.</SpanText>

      <form>
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
          >
            Sign In
          </CustomButton>

          <CustomButton
            type='submit'
            isGoogleButton
          >
            Sign In With Google
          </CustomButton>
        </ButtonGroup>
      </form>
    </SignInContainer>
  )
}

export default SignIn
