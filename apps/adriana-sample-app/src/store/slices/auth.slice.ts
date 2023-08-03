import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '..';

// TODO: Get rid of using any
type AuthUser = null;

export type AuthSliceState = {
  token: string;
  user?: AuthUser;
  loading: boolean;
};

const initialState: AuthSliceState = {
  token: '',
  user: undefined,
  loading: true,
};

/**
 * Slice
 */
export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');

      state.token = '';
      state.user = undefined;

      return state;
    },

    updateAuthSlice: (
      state,
      action: PayloadAction<Partial<AuthSliceState>>
    ) => {
      return { ...state, ...action.payload };
    },
  },
});

/**
 * Actions
 */
export const { logout, updateAuthSlice } = authSlice.actions;

/**
 * Selectors
 */
export const selectAuthSlice = (state: RootState) => {
  return state.authSlice;
};

export const selectCurrentUser = createSelector(
  [selectAuthSlice],
  (authSlice) => {
    const user = authSlice.user;

    return user;
  }
);
