import {configureStore} from '@reduxjs/toolkit';
import settingsSlice from './settingsSlice';

export const store = configureStore({
  reducer: {
    settings: settingsSlice,
  },
});
