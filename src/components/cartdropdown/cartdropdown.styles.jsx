import styled from "styled-components";

export const DropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  border-radius: 5px;
`;

export const CartItemContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: .3rem;
    background-color: #ccc;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000;
  }
`;