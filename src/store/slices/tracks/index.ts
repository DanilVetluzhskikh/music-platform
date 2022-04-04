import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/index';
import { Track } from '@type/track';

type TracksState = {
  tracks: Track[]
};

const initialState: TracksState = {
  tracks: [],
};

const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    setListTracks: (state, { payload, }: PayloadAction<Track[]>) => {
      state.tracks = payload;
    },
  },
});

export const getListTracks = (state: RootState) => state.tracks.tracks;

export const {
  setListTracks,
} = tracksSlice.actions;

export const { reducer: tracksReducer, } = tracksSlice;