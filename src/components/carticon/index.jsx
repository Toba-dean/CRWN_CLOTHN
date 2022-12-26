import { CartContainer, CountSpan, BagIcon } from "./carticon.styles";

const CartIcon = () => {
  return (
    <CartContainer>
      <BagIcon />

      <CountSpan>0</CountSpan>
    </CartContainer>
  )
}

export default CartIcon
