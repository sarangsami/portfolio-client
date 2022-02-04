import {Grid, Typography, Box, useMediaQuery} from '@mui/material';
import {useTheme} from '@mui/material/styles';

import CustomPin from 'components/CustomPin';

const HistoryItem = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid container>
      <Grid item xl={1} lg={1} md={1} sm={1} xs={2}>
        <Box display="flex" justifyContent={isMd ? 'flex-start' : 'center'}>
          <CustomPin />
        </Box>
      </Grid>
      <Grid item xl lg md sm xs>
        <Box display="flex" flexDirection="column">
          <Typography variant="h6" sx={{fontWeight: 'bold'}}>
            Front - End Developer
          </Typography>
          <Box>
            <Typography
              color="primary"
              sx={{textTransform: 'uppercase', fontWeight: 'bold'}}
            >
              Novin.dev
            </Typography>
          </Box>
          <Box mt={2} maxWidth={500}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default HistoryItem;
