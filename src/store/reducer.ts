import { combineReducers } from "redux";

import { productsApi } from "./apis";
import { authSlice, productsSlice } from "./slices";

export const appReducer = combineReducers({
  /**
   * From apis
   */
  [productsApi.reducerPath]: productsApi.reducer,

  /**
   * From slices
   */
  [authSlice.name]: authSlice.reducer,
  [productsSlice.name]: productsSlice.reducer,
});
