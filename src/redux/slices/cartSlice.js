import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "../utils/cart.utils";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    hidden: true,
    cartItem: []
  },
  reducers: {
    toggleHidden: state => {
      state.hidden = !state.hidden
    },
    addCartItem: (state, { payload }) => {
      state.cartItem = addItemToCart(state.cartItem, payload)
    }
  }
})

export const { toggleHidden, addCartItem } = CartSlice.actions;
export const selectHidden = ({ cart }) => cart.hidden
export const selectCartItem = ({ cart }) => cart.cartItem
export const itemCount = () => selectCartItem()

export default CartSlice.reducer;