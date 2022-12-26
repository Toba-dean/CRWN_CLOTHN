import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  .custom_button {
    width: 85%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    .custom_button {
      display: flex;
      opacity: 0.85;
    }
  }
`;

export const ImageContainer = styled.div`
  background-image: ${({ image }) => image && `url(${image})`};
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const ItemFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin-top: 10px;
`;

export const NameText = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceText = styled.span`
  width: 10%;
`;