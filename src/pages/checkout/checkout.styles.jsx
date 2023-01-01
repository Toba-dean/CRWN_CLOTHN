import styled from "styled-components";

export const CheckOutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckOutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const SpanText = styled.span``;

export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const PayButton = styled.div`
  width: 180px;
  background-color: skyblue;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  border-radius: 7px;
  cursor: pointer;
  opacity: .8;
  transition: all ease-in .3s;

  &:hover {
    opacity: 1;
  }
`;

