import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { API } from '@constants/api';
import { RootState } from '@store/index';
import { Track } from '@type/track';

type TrackState = {
    pause: boolean;
    volume: number;
    duration: number;
    currentTime: number;
    active: boolean;
    track: Track | null;
    audio: HTMLAudioElement | null;
};

const initialState: TrackState = {
  pause: false,
  volume: 0,
  duration: 0,
  currentTime: 0,
  active: false,
  track: null,
  audio: null,
};

const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    setPause: (state) => {
      state.active = false;
      state.pause = true;

      state.audio?.pause();
    },
    setActive: (state) => {
      state.active = true;
      state.pause = false;

      state.audio?.play();
    },
    setVolume: (state, { payload, }: PayloadAction<number>): any => {
      state.volume = payload;
      if(state.audio){
        state.audio.volume = payload / 100;
      }
    },
    setTrack: (state, { payload, }: PayloadAction<Track>) => {
      state.audio?.pause();
      state.audio = null;

      state.track = payload;
      state.audio = new Audio(`${API}/${payload.audio}`) as any;

      if(state.audio){
        state.audio.volume = .5;
        state.volume = 50;
      }
    },
    setDuration: (state, { payload, }: PayloadAction<number>) => {
      state.duration = payload;

    },
    setCurrentTime: (state, { payload, }: PayloadAction<number>) => {
      state.currentTime = payload;

      if(payload === Math.floor(state.audio?.duration as number)){

        if(state.audio){
          state.audio.currentTime = 0;
          state.currentTime = 0;
        }
      }
    },
    setAudioCurrentTime: (state, { payload, }: PayloadAction<number>) => {
      state.currentTime = payload;

      if(state.audio){
        state.audio.currentTime = payload;

        if(payload === Math.floor(state.audio?.duration as number)){
          state.audio.currentTime = 0;
          state.currentTime = 0;
        }
      }
    },
  },
});

export const getTrack = (state: RootState) => state.track;

export const {
  setDuration,
  setPause,
  setActive,
  setVolume,
  setTrack,
  setCurrentTime,
  setAudioCurrentTime,
} = trackSlice.actions;

export const { reducer: trackReducer, } = trackSlice;