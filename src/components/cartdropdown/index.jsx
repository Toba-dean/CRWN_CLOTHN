import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { DropDownContainer, CartItemContainer } from "./cartdropdown.styles";
import { selectCartItem } from "../../redux/slices/cartSlice";
import CustomButton from "../custombutton";
import { toggleHidden } from "../../redux/slices/cartSlice";
import CartItem from "../cartitem";

const CartDropDown = () => {

  const cartItem = useSelector(selectCartItem);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <DropDownContainer>
      <CartItemContainer>
        {
          cartItem.map(item => (
            <CartItem key={item.id} item={item} />
          ))
        }
      </CartItemContainer>

      <CustomButton
        onClick={() => {
          navigate('/checkout')
          dispatch(toggleHidden())
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </DropDownContainer>
  )
}

export default CartDropDown