import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "../utils/cart.utils";

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
    },
    removeCartItem: (state, { payload }) => {
      state.cartItem = removeItemFromCart(state.cartItem, payload)
    },
    clearCartItem: (state, { payload }) => {
      state.cartItem = state.cartItem.filter(item => item.id !== payload.id)
    }
  }
})

export const { toggleHidden, addCartItem, removeCartItem, clearCartItem } = CartSlice.actions;
export const selectHidden = ({ cart }) => cart.hidden
export const selectCartItem = ({ cart }) => cart.cartItem
export const itemCount = () => selectCartItem()

export default CartSlice.reducer;