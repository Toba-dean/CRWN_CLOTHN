import { ButtonContainer } from "./custombutton.styles";

const CustomButton = ({ children, isGoogleButton, inverted, ...restProps }) => {
  return (
    <ButtonContainer
      isGoogleButton={isGoogleButton}
      inverted={inverted}
      {...restProps}
    >
      {children}
    </ButtonContainer>
  )
}

export default CustomButton
