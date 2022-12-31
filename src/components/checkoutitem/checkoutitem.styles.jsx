import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img { 
    width: 100%;
    height: 100
  }
`;

export const NameSpan = styled.span`
  width: 25%;
`;

export const QuantitySpan = styled.span`
  width: 25%;
  display: flex;
  align-items: center;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const PriceSpan = styled.span`
  width: 25%;
`;

export const RemoveButton = styled.div `
  padding-left: 12px;
  cursor: pointer;
`;