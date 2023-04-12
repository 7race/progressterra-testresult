import { configureStore } from '@reduxjs/toolkit';
import { bonusInfoReducer } from './features/bonusInfo/bonusInfoSlice';

export const store = configureStore({
  reducer: { bonusInfo: bonusInfoReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
