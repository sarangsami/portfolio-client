import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

const theme = (settings) => {
  const {isDark} = settings;
  return createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
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
  });
};

export default theme;
