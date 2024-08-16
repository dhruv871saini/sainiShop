// src/features/theme/themeSlice.js

import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? savedTheme : 'light';
};

const initialState = {
  theme: getInitialTheme(), // Initialize with localStorage value or default to 'light'
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme); // Save the theme to localStorage
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
