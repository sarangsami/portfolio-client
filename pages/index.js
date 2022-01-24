import {Box, Container, Grid, TextField, Typography} from '@mui/material';

const Home = () => {
  return (
    <div>
      <Box
        sx={{
          minHeight: '100vh',
          background: 'url(/images/firstSectionBg.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container>
          <Grid container>
            <Grid item xl={5} lg={5} md={6} sm={12} xs={12}>
              <Box>
                <Typography sx={{fontSize: 22}}>
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
                <Typography sx={{fontSize: 48, fontWeight: 'bold'}}>
                  Front-End{' '}
                  <Typography
                    component="span"
                    color="primary"
                    sx={{fontSize: 48, fontWeight: 'bold'}}
                  >
                    Developer
                  </Typography>
                </Typography>
              </Box>
              <Box>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </Typography>
                <TextField label="تست"/>
              </Box>
            </Grid>
            <Grid item xl lg md sm xs>
              <Box display="flex" justifyContent="flex-end">
                <Box
                  sx={{
                    width: 350,
                    height: 400,
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      width: 350,
                      height: 400,
                      borderRadius: 5,
                      transform: 'rotate(-5deg) translate(-20px,-30px)',
                      border: (theme) =>
                        `2px dashed ${theme.palette.text.primary}`,
                      position: 'absolute',
                    }}
                  />
                  <Box
                    sx={{
                      width: 350,
                      height: 400,
                      backgroundColor: (theme) => theme.palette.text.primary,
                      borderRadius: 5,
                      position: 'absolute',
                    }}
                  ></Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};
export default Home;
