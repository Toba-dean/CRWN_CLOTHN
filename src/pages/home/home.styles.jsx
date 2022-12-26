import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 80px;

  @media screen and (max-width: 850px) {
    padding: 0;
  }
`;