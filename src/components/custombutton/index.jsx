import { ButtonContainer } from "./custombutton.styles";

const CustomButton = ({ children, isGoogleButton, inverted, ...restProps }) => {

  console.log(restProps);

  return (
    <ButtonContainer
      inverted
      isGoogleButton
      {...restProps}
    >
      {children}
    </ButtonContainer>
  )
}

export default CustomButton
