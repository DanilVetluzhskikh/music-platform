import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store/index';

type NavbarState = {
  open: boolean
};

const initialState: NavbarState = {
  open: true,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    handleOpenNavbar: (state) => {
      state.open = true;
    },
    handleCloseNavbar: (state) => {
      state.open = false;
    },
  },
});

export const getNavbarOpen = (state: RootState) => state.navbar.open;

export const {
  handleOpenNavbar,
  handleCloseNavbar,
} = navbarSlice.actions;

export const { reducer: navbarReducer, } = navbarSlice;