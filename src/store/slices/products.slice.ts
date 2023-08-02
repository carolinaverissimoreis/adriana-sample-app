import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";

import { RootState } from "..";
import { productsApi } from "../apis";

export type ProductsSliceState = {
  category: "product1" | "product2";
  products: Array<any>;
  isLoadingProducts: boolean;
  name: string;
  number: number;
  region: string;
};

const initialState: ProductsSliceState = {
  category: "product1",
  products: [],
  isLoadingProducts: false,
  name: "",
  number: 0,
  region: "",
};

/**
 * Slice
 */
export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    updateProductsSlice: (
      state,
      action: PayloadAction<Partial<ProductsSliceState>>
    ) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    return builder
      .addMatcher(productsApi.endpoints.getProducts.matchPending, (state) => {
        state.isLoadingProducts = true;
      })
      .addMatcher(
        productsApi.endpoints.getProducts.matchFulfilled,
        (state, result) => {
          state.products = result.payload.data;

          state.isLoadingProducts = false;
        }
      );
  },
});

/**
 * Actions
 */
export const { updateProductsSlice } = productsSlice.actions;

/**
 * Selectors
 */
export const selectproductsSlice = (state: RootState) => {
  return state.productsSlice;
};

export const selectProducts = createSelector(
  [selectproductsSlice],
  (productsSlice) => {
    const products = productsSlice.products;

    return products;
  }
);
