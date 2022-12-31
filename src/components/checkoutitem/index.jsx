import { 
  ItemContainer, ImageContainer, NameSpan,
   QuantitySpan, Arrow, Value, PriceSpan, RemoveButton
  } from "./checkoutitem.styles";

const CheckOutItem = ({ item }) => {

  const { name, imageUrl, quantity, price } = item;

  return (
    <ItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="cart item" />
      </ImageContainer>

      <NameSpan>{name}</NameSpan>

      <QuantitySpan>
        <Arrow>&#10094;</Arrow>

        <Value>{quantity}</Value>

        <Arrow>&#10095;</Arrow>
      </QuantitySpan>

      <PriceSpan>${price}</PriceSpan>

      <RemoveButton>&#10008;</RemoveButton>
    </ItemContainer>
  )
}

export default CheckOutItem
