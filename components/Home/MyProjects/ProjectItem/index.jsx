import {Box, CardMedia, Typography} from '@mui/material';

const ProjectItem = () => {
  return (
    <Box
      sx={{
        p: 4,
        borderRadius: 4,
        border: '2px solid',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        maxWidth: 375,
        borderImage:
          `linear-gradient(rgba(60,74,83,.00)` + `,rgba(60,74,83,0.90)) 1`,
      }}
    >
      <CardMedia
        component="img"
        sx={{borderRadius: 4, maxWidth: 300}}
        width="300"
        image="/images/projectItem.png"
        alt="Paella dish"
      />
      <Box mt={4}>
        <Typography>Novin Website</Typography>
      </Box>
    </Box>
  );
};
export default ProjectItem;
