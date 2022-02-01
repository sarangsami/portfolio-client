import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {Box, Container, Grid, Typography, useMediaQuery} from '@mui/material';
import {useTheme, alpha} from '@mui/material/styles';

import CustomButton from 'components/CustomButton';
import {ChevronLeft, ChevronRight} from '@mui/icons-material';
import SocialMedia from 'components/SocialMedia';
import Head from 'next/head';
import Experiences from 'components/Experiences';

const Home = ({scrollRefs}) => {
  const {t} = useTranslation();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const direction = useSelector((state) => state.settings.direction);

  const iconRender = () => {
    if (direction === 'rtl') {
      return <ChevronLeft />;
    } else {
      return <ChevronRight />;
    }
  };

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
          <Grid
            container
            spacing={3}
            direction={isMd ? 'column-reverse' : 'row'}
            alignItems="ccenter"
          >
            <Grid item xl={5} lg={5} md={6} sm={12} xs={12}>
              <Box>
                <Typography
                  sx={{fontSize: 22}}
                  align={isMd ? 'center' : 'left'}
                >
                  Welcome i&apos;m{' '}
                  <Typography
                    component="span"
                    sx={{fontWeight: 'bold', fontSize: 24}}
                  >
                    Sarang Sami
                  </Typography>
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{fontSize: isMd ? 24 : 48, fontWeight: 'bold'}}
                  align={isMd ? 'center' : 'left'}
                >
                  Front-End{' '}
                  <Typography
                    component="span"
                    color="primary"
                    sx={{
                      fontSize: isMd ? 24 : 48,
                      fontWeight: 'bold',
                      textShadow: (globalTheme) =>
                        ` 0px 15px 15px ${alpha(
                            globalTheme.palette.primary.main,
                            0.25,
                        )}`,
                    }}
                  >
                    Developer
                  </Typography>
                </Typography>
              </Box>
              <Box mt={3}>
                <Typography
                  sx={{opacity: 0.8}}
                  align={isMd ? 'center' : 'justify'}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </Typography>
              </Box>
              <Box mt={3}>
                <Grid
                  container
                  spacing={3}
                  justifyContent={isMd ? 'center' : 'flex-start'}
                >
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                    <CustomButton
                      fullWidth
                      variant="contained"
                      color="primary"
                      size={isMd ? 'small' : 'large'}
                      endIcon={iconRender()}
                      sx={{
                        boxShadow: (theme) =>
                          ` 0px 15px 15px ${alpha(
                              theme.palette.primary.main,
                              0.25,
                          )}`,
                      }}
                    >
                      {t('home.hireMe')}
                    </CustomButton>
                  </Grid>
                  <Grid item xl={5} lg={5} md={5} sm={5} xs={5}>
                    <CustomButton
                      fullWidth
                      variant="outlined"
                      color="inherit"
                      size={isMd ? 'small' : 'large'}
                      endIcon={iconRender()}
                    >
                      {t('home.downloadCV')}
                    </CustomButton>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xl lg md sm xs>
              <Box display="flex" justifyContent="flex-end" width="100%">
                <Grid container alignItems="center">
                  <Grid item xl lg md sm xs>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent={isMd ? 'center' : 'flex-end'}
                    >
                      <Box width="100%" maxWidth={350} maxHeight={450}>
                        <img
                          src="/images/profileBackground.png"
                          width="100%"
                          height="100%"
                          alt="profile"
                        />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xl={1} lg={1} md={1} sm={1} xs={2}>
                    <SocialMedia />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
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
    </div>
  );
};

Home.propTypes = {
  scrollRefs: PropTypes.any,
};

export default Home;
