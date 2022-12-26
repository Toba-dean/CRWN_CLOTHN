import styled from "styled-components";

export const ButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 25px;
  font-size: 13px;
  background-color: ${({ isGoogleButton, inverted }) => isGoogleButton && "#4285f4" ? inverted && "white" : "black"};
  color: ${({ isGoogleButton, inverted }) => isGoogleButton && "white" ? inverted && "black" : "white"};
  text-transform: uppercase;
  font-weight: bolder;
  border: ${({ inverted }) => inverted ? "1px solid black" : "none"};
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${({ isGoogleButton, inverted }) => isGoogleButton && "#357ae8" ? inverted && "black" : "white"};
    color: ${({ inverted }) => inverted ? "white" : "black"};
    border: ${({ inverted }) => inverted ? "none" : "1px solid black"};
  }

  @media screen and (max-width: 1150px) {
    font-size: 10px;
  }

  /* &.custom_button {
    width: 85%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  } */
`;