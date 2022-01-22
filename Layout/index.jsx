import PropTypes from 'prop-types';
import {Box} from '@mui/material';

import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
