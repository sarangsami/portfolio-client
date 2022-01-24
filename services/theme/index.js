import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

const theme = (settings) => {
  const {mode, direction} = settings;
  return createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#FF772B',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: red.A400,
      },
    },
    direction,
  });
};

export default theme;
