import {Box, Grid} from '@mui/material';

import SectionTitle from 'components/SectionTitle';
import ProjectItem from './ProjectItem';

const MyProjects = () => {
  return (
    <Box>
      <Box p={3}>
        <SectionTitle name="My Projects" />
      </Box>
      <Grid container spacing={2}>
        <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
          <ProjectItem />
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
          <ProjectItem />
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
          <ProjectItem />
        </Grid>
      </Grid>
    </Box>
  );
};
export default MyProjects;
