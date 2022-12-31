import { CartItemContainer, ItemDetail, SpanName, SpanPrice } from "./cartitem.styles";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt="item" />

      <ItemDetail>
        <SpanName>{name}</SpanName>
        <SpanPrice>{quantity} x ${price}</SpanPrice>
      </ItemDetail>
    </CartItemContainer>
  )
}

export default CartItem
