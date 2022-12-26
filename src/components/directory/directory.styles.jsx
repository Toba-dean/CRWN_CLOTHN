import styled from "styled-components";

export const DirContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;