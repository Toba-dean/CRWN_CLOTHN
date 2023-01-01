import { useDispatch } from "react-redux";

import { addCartItem, removeCartItem, clearCartItem } from "../../redux/slices/cartSlice";
import {
  ItemContainer, ImageContainer, NameSpan,
  QuantitySpan, Arrow, Value, PriceSpan, RemoveButton
} from "./checkoutitem.styles";

const CheckOutItem = ({ item }) => {

  const dispatch = useDispatch();
  const { name, imageUrl, quantity, price } = item;

  return (
    <ItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="cart item" />
      </ImageContainer>

      <NameSpan>{name}</NameSpan>

      <QuantitySpan>
        <Arrow onClick={() => dispatch(removeCartItem(item))}>&#10094;</Arrow>

        <Value>{quantity}</Value>

        <Arrow onClick={() => dispatch(addCartItem(item))}>&#10095;</Arrow>
      </QuantitySpan>

      <PriceSpan>${price}</PriceSpan>

      <RemoveButton onClick={() => dispatch(clearCartItem(item))}>&#10008;</RemoveButton>
    </ItemContainer>
  )
}

export default CheckOutItem
