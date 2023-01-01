import { configureStore } from "@reduxjs/toolkit";

import UserReducer from "./slices/userSlice";
import CartReducer from "./slices/cartSlice";
import DirectoryReducer from "./slices/directorySlice";
import ShopReducer from "./slices/shop/shopSlice"

export const store = configureStore({
  reducer: {
    user: UserReducer,
    cart: CartReducer,
    sections: DirectoryReducer,
    shop: ShopReducer
  }
})