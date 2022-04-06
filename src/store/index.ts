import { configureStore } from '@reduxjs/toolkit';

import { getDefaultMiddleware } from '@reduxjs/toolkit';

import {
  navbarReducer,
  trackReducer,
  tracksReducer
} from './slices';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    tracks: tracksReducer,
    track: trackReducer,
  },
  middleware: customizedMiddleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;