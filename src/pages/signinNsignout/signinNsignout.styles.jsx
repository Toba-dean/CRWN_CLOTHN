import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1150px;
  margin: 30px auto;

  @media screen and (max-width: 1250px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 750px;
  }
`;