import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;
`;

export const BagIcon = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;
`;

export const CountSpan = styled.span`
  position: absolute;
  bottom: 12px;
  font-size: 10px;
  font-weight: bold;
`;
