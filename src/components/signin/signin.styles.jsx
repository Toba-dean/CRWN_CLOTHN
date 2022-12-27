import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1250px) {
    margin-bottom: 3pc;
  }
`;

export const HeaderText = styled.h1`
  margin: 10px 0;
`;

export const SpanText = styled.span``;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;