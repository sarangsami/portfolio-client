import PropTypes from 'prop-types';
import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import {useSelector} from 'react-redux';

import theme from 'services/theme';
import 'services/localization';

import Layout from 'Layout';

const Providers = ({children}) => {
  const settings = useSelector((state) => state.settings);
  return (
    <ThemeProvider theme={theme(settings)}>
      <CssBaseline />
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
};

Providers.propTypes = {
  children: PropTypes.any,
};

export default Providers;
