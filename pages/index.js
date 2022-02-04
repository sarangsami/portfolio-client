import Head from 'next/head';
import PropTypes from 'prop-types';
import {Box, Container} from '@mui/material';

import AboutMe from 'components/Home/AboutMe';
import Experiences from 'components/Home/Experiences';
import MyProjects from 'components/Home/MyProjects';

const Home = ({scrollRefs}) => {
  return (
    <div>
      <Head>
        <title>Sarang Sami</title>
      </Head>
      <Box
        component="section"
        ref={(el) => (scrollRefs.current[0] = el)}
        sx={{
          minHeight: '90vh',
          background: 'url(/images/firstSectionBg.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pt: 3,
        }}
      >
        <Container>
          <AboutMe />
        </Container>
      </Box>
      <Box
        sx={{minHeight: '80vh', my: 4}}
        component="section"
        ref={(el) => (scrollRefs.current[1] = el)}
      >
        <Container>
          <Experiences />
        </Container>
      </Box>
      <Box
        sx={{minHeight: '80vh', my: 4}}
        component="section"
        ref={(el) => (scrollRefs.current[2] = el)}
      >
        <Container>
          <MyProjects />
        </Container>
      </Box>
    </div>
  );
};

Home.propTypes = {
  scrollRefs: PropTypes.any,
};

export default Home;
