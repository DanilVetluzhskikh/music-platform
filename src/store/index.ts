import { configureStore } from '@reduxjs/toolkit';

import {
  navbarReducer,
  trackReducer,
  tracksReducer
} from './slices';

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    tracks: tracksReducer,
    track: trackReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;