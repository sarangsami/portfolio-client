import Box from '@mui/material/Box';
import {Container} from '@mui/material';
import SectionTitle from 'components/SectionTitle';
import {alpha, Grid} from '@mui/material';
import ContactItem from 'components/ContactItem';

export default function StickyFooter() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
      }}
    >
      <Container>
        <SectionTitle name="Contact" />
        <Box
          sx={{
            backgroundColor: (globalTheme) =>
              alpha(globalTheme.palette.primary.main, 0.1),
            p: 3,
            mt: 3,
            borderRadius: 7,
            minHeight: 170,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <Container maxWidth="sm">
            <Grid container spacing={3}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                  <ContactItem />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}
