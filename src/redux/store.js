import { configureStore } from "@reduxjs/toolkit";

import UserReducer from "./slices/userSlice";
import CartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    cart: CartReducer
  }
})