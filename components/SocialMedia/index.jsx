import {
  FacebookTwoTone,
  GitHub,
  Instagram,
  LinkedIn,
} from '@mui/icons-material';
import {Box, Grid, IconButton} from '@mui/material';

const SocialMedia = () => {
  return (
    <Box display='flex'>
      <Grid container direction="column" spacing={1} alignItems="center">
        <Grid item xl lg md sm xs>
          <Box
            sx={{
              height: 176,
              width: 2,
              bgcolor: (globalTheme) => globalTheme.palette.text.primary,
            }}
          />
        </Grid>
        <Grid item xl lg md sm xs>
          <IconButton>
            <LinkedIn />
          </IconButton>
        </Grid>
        <Grid item xl lg md sm xs>
          <IconButton>
            <FacebookTwoTone />
          </IconButton>
        </Grid>
        <Grid item xl lg md sm xs>
          <IconButton>
            <GitHub />
          </IconButton>
        </Grid>
        <Grid item xl lg md sm xs>
          <IconButton>
            <Instagram />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};
export default SocialMedia;
