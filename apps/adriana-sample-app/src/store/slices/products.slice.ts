import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';

import { RootState } from '..';
import { productsApi } from '../apis';

export type ProductsSliceState = {
  category: 'product1' | 'product2';
  data: any;
  isLoadingProducts: boolean;
  name: string;
  number: number;
  region: string;
};

const initialState: ProductsSliceState = {
  category: 'product1',
  data: null,
  isLoadingProducts: false,
  name: '',
  number: 4,
  region: '',
};

/**
 * Slice
 */
export const productsSlice = createSlice({
  name: 'productsSlice',
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
      .addMatcher(
        productsApi.endpoints.getProductsData.matchPending,
        (state) => {
          state.isLoadingProducts = true;
        }
      )
      .addMatcher(
        productsApi.endpoints.getProductsData.matchFulfilled,
        (state, result) => {
          const data = result.payload.data;

          state.data = data;

          if (data) {
            const { region } = data;

            state.region = region || '';
          }

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
export const selectProductsSlice = (state: RootState) => {
  return state.productsSlice;
};

export const selectProductsData = createSelector(
  [selectProductsSlice],
  (productsSlice) => {
    const data = productsSlice.data;

    return data;
  }
);
