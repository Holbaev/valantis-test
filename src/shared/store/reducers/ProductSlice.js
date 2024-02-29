import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products_ids: [],
  products: [],
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsIds(state, action) {
      state.products_ids = action.payload.products_ids;
    },
    setProducts(state, action) {
      state.products = action.payload.products;
    },
    setTitleFilter(state, action) {},
    setBrnadFilter(state, action) {},
    setPriceFilter(state, action) {},
  },
});

export const {
  setProductsIds,
  setProducts,
  setTitleFilter,
  setBrnadFilter,
  setPriceFilter,
} = ProductSlice.actions;

export default ProductSlice.reducer;
