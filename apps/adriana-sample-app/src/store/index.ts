import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { appMiddleware } from './middleware';
import { appReducer } from './reducer';

const configStore = () => {
  const store = configureStore({
    reducer: appReducer,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(appMiddleware),
  });

  setupListeners(store.dispatch);

  return store;
};

export const store = configStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
