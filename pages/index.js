import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {Box, Container, Grid, Typography, useMediaQuery} from '@mui/material';
import {useTheme} from '@mui/material/styles';

import CustomButton from 'components/CustomButton';
import {ChevronLeft, ChevronRight} from '@mui/icons-material';
import SocialMedia from 'components/SocialMedia';
import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
  const {t} = useTranslation();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const direction = useSelector((state) => state.settings.direction);

  const person = {name: 'Jhon'};
  const anotherPerson = person;
  anotherPerson.name = 'Jane ';

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
        sx={{
          minHeight: '90vh',
          background: 'url(/images/firstSectionBg.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          display: 'flex',
          justifyContent: 'center',
          py: 3,
        }}
      >
        <Container>
          <Grid
            container
            spacing={3}
            direction={isMd ? 'column-reverse' : 'row'}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xl={5} lg={5} md={6} sm={12} xs={12}>
              <Box>
                <Typography
                  sx={{fontSize: 22}}
                  align={isMd ? 'center' : 'flex-start'}
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
                  align={isMd ? 'center' : 'flex-start'}
                >
                  Front-End{' '}
                  <Typography
                    component="span"
                    color="primary"
                    sx={{fontSize: isMd ? 24 : 48, fontWeight: 'bold'}}
                  >
                    Developer
                  </Typography>
                </Typography>
              </Box>
              <Box mt={2}>
                <Typography align={isMd ? 'center' : 'flex-start'}>
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
                <Grid container>
                  <Grid item xl lg md sm xs>
                    <Box width="100%" maxWidth={350} height={450}>
                      <Image
                        src="/images/profileBackground.png"
                        width="100%"
                        height="100%"
                        layout="responsive"
                        objectFit="contain"
                        alt="profile"
                      />
                    </Box>
                  </Grid>
                  <Grid item xl lg md sm xs>
                    <SocialMedia />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};
export default Home;
