import PropTypes from 'prop-types';
import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';

import theme from 'services/theme';

import Layout from 'Layout';

const Providers = ({children}) => {
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
};

Providers.propTypes = {
  children: PropTypes.any,
};

export default Providers;
