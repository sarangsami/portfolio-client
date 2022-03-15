import * as React from 'react';
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
          <Box
            sx={{
              width: 30,
              height: 30,
              borderRadius: '50%',
              backgroundColor: 'red',
              position: 'absolute',
              top: 0,
            }}
          />
          <Box
            sx={{
              width: 30,
              height: 30,
              borderRadius: '50%',
              backgroundColor: 'red',
              position: 'absolute',
              top: 0,
            }}
          />
          <Box
            sx={{
              width: 30,
              height: 30,
              borderRadius: '50%',
              backgroundColor: 'red',
              position: 'absolute',
              top: 0,
            }}
          />
          <Container maxWidth="sm">
            <Grid container spacing={3}>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                  <ContactItem />
                </Box>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
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
