import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 20px rgba(0, 0, 0, .1);

  @media screen and (max-width: 850px) {
    margin-bottom: 10px;
  }
`;

export const LogoContainer = styled(Link)`
  /* height: 100%; */
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center; 
  justify-content: flex-end;

  @media screen and (max-width: 850px) {
    flex: 1;
  }
`;

export const OptionsLink = styled(Link)`
  ${OptionContainerStyles}
  opacity: .7;

  &:hover {
    opacity: 1;
  }
`;