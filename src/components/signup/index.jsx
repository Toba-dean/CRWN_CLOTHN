import { useState } from "react";

import { SignUpContainer, HeadText, SpanText } from "./signup.styles";
import CustomButton from "../custombutton";
import FormInput from "../forminput";

const SignUp = () => {

  const signinData = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  const [data, setData] = useState(signinData);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setData({ ...data, [name]: value });
  }

  return (
    <SignUpContainer>
      <HeadText>Don't have an account</HeadText>
      <SpanText>Sign up with your email and password.</SpanText>

      <form>
        <FormInput
          type='text'
          name='displayName'
          value={data.displayName}
          required
          label='Display Name'
          handleChange={handleChange}
        />

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

        <FormInput
          type='password'
          name='confirmPassword'
          value={data.confirmPassword}
          required
          label='Confirm Password'
          handleChange={handleChange}
        />

        <CustomButton
          type="submit"
        >
          Sign Up
        </CustomButton>
      </form>
    </SignUpContainer>
  )
}

export default SignUp
