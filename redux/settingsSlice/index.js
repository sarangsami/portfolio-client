import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isDark: true,
};

export const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setIsDark: (state, action) => {
      state.isDark = action.payload;
    },
  },
});

export const {setIsDark} = settingSlice.actions;

export default settingSlice.reducer;
