import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BigText = styled.h1`
  font-size: 38px;
  margin: 15px auto;
`;

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  .collection_item {
    width: 22vw;
    margin-bottom: 30px;
  }
`;