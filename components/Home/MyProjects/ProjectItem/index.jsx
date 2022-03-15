import {Box, CardMedia, Typography} from '@mui/material';
import {alpha} from '@mui/material/styles';

const ProjectItem = () => {
  return (
    <Box
      sx={{
        'mb': 6,
        'cursor': 'pointer',
        'border': 'double 2px transparent',
        'borderRadius': 6,
        'backgroundImage': (globalTheme) =>
          `linear-gradient(transparent, ${
            globalTheme.palette.background.default
          }), linear-gradient(to top, ${alpha(
              globalTheme.palette.text.primary,
              0.05,
          )}, transparent)`,
        'backgroundOrigin': 'border-box',
        'backgroundClip': 'content-box, border-box',
        'boxShadow': 'none',
        'transition': 'all 320ms ease-in-out',
        '& #projectId': {
          transition: 'all 320ms ease-in-out',
        },
        '&:hover': {
          'boxShadow': ' 0px 0px 45px -34px rgba(0, 0, 0, 1)',
          '& #projectId': {
            color: (globalTheme) => globalTheme.palette.primary.main,
          },
        },
      }}
    >
      <Box p={4}>
        <CardMedia
          component="img"
          sx={{
            borderRadius: 4,
            maxWidth: 300,
            boxShadow: ' 0px 10px 20px -15px rgba(0, 0, 0, 1)',
          }}
          width="300"
          image="/images/projectItem.png"
          alt="Paella dish"
        />
        <Box mt={4}>
          <Typography sx={{fontWeight: 'bold'}} id="projectId" variant="h6">
            Novin Website
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            mt: 1,
          }}
        >
          <Typography color="inherit">Novin Website</Typography>
          <Typography color="inherit">2019</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default ProjectItem;
