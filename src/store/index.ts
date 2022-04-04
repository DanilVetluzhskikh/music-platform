import { configureStore } from '@reduxjs/toolkit';

import {
  navbarReducer,
  tracksReducer
} from './slices';

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    tracks: tracksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;