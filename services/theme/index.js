import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

const theme = (settings) => {
  const {mode, direction, primaryColor, language} = settings;
  return createTheme({
    palette: {
      mode: mode,
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: red.A400,
      },
    },
    direction,
    typography: {
      fontFamily: language === 'fa' ? 'IRANSansWeb' : 'roboto',
    },
  });
};

export default theme;
