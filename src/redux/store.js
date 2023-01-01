import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import UserReducer from "./slices/userSlice";
import CartReducer from "./slices/cartSlice";
import DirectoryReducer from "./slices/directorySlice";
import ShopReducer from "./slices/shop/shopSlice";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const reducers = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  sections: DirectoryReducer,
  shop: ShopReducer
});

const rootReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: rootReducer
})

export const persistor = persistStore(store);