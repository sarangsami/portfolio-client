import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
  primaryColor: '#FF772B',
  direction: 'ltr',
  language: 'en',
};

export const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setDirection: (state, action) => {
      state.direction = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
    },
  },
});

export const { setMode, setDirection, setLanguage, setPrimaryColor } =
  settingSlice.actions;

export default settingSlice.reducer;
