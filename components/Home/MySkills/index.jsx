import {alpha, Box, Grid, Typography, useMediaQuery} from '@mui/material';

import SectionTitle from 'components/SectionTitle';
import CustomPin from 'components/CustomPin';
import Item from './Item';
import {useTheme} from '@emotion/react';

const technologies = [
  {
    id: 1,
    name: 'Node.js',
  },
  {
    id: 2,
    name: 'Version Control',
  },
  {
    id: 3,
    name: 'Next.js',
  },
  {
    id: 4,
    name: 'React.js',
  },
  {
    id: 5,
    name: 'React Native',
  },
  {
    id: 6,
    name: 'PWA',
  },
];

const MySkills = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
      sx={{
        background: 'url(/images/skillsBg.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundColor: (globalTheme) =>
          alpha(globalTheme.palette.text.primary, 0.05),

        borderRadius: 5,
        p: isMd ? 2 : 4,
        backgroundPosition: 'bottom',
      }}
    >
      <SectionTitle name="My Skills" />
      <Box p={isMd ? 0 : 3}>
        <Grid container spacing={isMd ? 4 : 2} sx={{mt: isMd ? 2 : 0}}>
          <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <CustomPin noTail />
              <Typography sx={{ml: 2}} variant="h6">
                Technologies
              </Typography>
            </Box>
          </Grid>
          <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
            <Grid container spacing={2}>
              {technologies.map(({name, id}) => (
                <Grid key={id} item xl={6} lg={6} md={6} sm={6} xs={6}>
                  <Item name={name} borderPrimary />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{mt: 2}}>
          <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <CustomPin noTail />
              <Typography sx={{ml: 2}} variant="h6">
                Programming Languages
              </Typography>
            </Box>
          </Grid>
          <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
            <Grid container spacing={2}>
              {technologies.map(({name, id}) => (
                <Grid key={id} item xl={6} lg={6} md={6} sm={6} xs={6}>
                  <Item name={name} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default MySkills;
