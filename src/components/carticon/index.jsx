import { useDispatch, useSelector } from "react-redux";

import { CartContainer, CountSpan, BagIcon } from "./carticon.styles";
import { selectCartItem, toggleHidden } from "../../redux/slices/cartSlice";

const CartIcon = () => {

  const dispatch = useDispatch()
  const cartItem = useSelector(selectCartItem)

  const itemCount = cartItem.reduce((accumulator, { quantity }) => (
    accumulator + quantity
  ), 0)

  return (
    <CartContainer onClick={() => dispatch(toggleHidden())}>
      <BagIcon />

      <CountSpan>{itemCount}</CountSpan>
    </CartContainer>
  )
}

export default CartIcon
