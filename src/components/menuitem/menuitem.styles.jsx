import styled from "styled-components";

export const MenuContainer = styled.div`
  min-width: 30%;
  height: ${({ size }) => size ? "290px" : "250px"};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  background-image: ${({ image }) => image && `url(${image})`};
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  &:hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 1150px) {
    padding: 0 15px;
  }
  
  @media screen and (max-width: 750px) {
    padding: 0 25px;
  }
  
`;

export const BigText = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const SpanText = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;