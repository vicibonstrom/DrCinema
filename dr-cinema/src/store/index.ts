// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from '../slices/initSlices';

const store = configureStore({
  reducer: rootReducer,
  movies: moviesReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;