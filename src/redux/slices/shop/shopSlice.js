import { createSlice, createSelector } from "@reduxjs/toolkit";
import { SHOP_DATA } from "./shop.data.js";

const ShopSlice = createSlice({
  name: "shop",
  initialState: {
    collections: null
  },
  reducers: {
    updateCollection: (state, { payload }) => {
      state.collections = payload;
    }
  }
})

export default ShopSlice.reducer;
export const { updateCollection } = ShopSlice.actions;

const selectCollections = ({ shop }) => shop.collections;

export const selectCollectionPreview = ({ shop }) => shop.collections ? Object.keys(shop.collections).map(key => shop.collections[key]) : []

export const selectCollection = (collectionUrlParam) => createSelector(
  [selectCollections],
  collections => (collections ? collections[collectionUrlParam] : null)
);