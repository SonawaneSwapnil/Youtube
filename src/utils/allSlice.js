import { createSlice } from "@reduxjs/toolkit";

const allSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu } = allSlice.actions;
export const { closeMenu } = allSlice.actions;
export default allSlice.reducer;
