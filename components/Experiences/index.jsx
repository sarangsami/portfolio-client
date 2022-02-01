import {Box, Container, Typography, useMediaQuery} from '@mui/material';
import {useTheme, alpha} from '@mui/material/styles';

import HistoryItem from './HistoryItem';

const Experiences = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
      sx={{
        backgroundColor: (globalTheme) =>
          alpha(globalTheme.palette.primary.main, 0.1),
        minHeight: 450,
        borderRadius: 5,
        padding: 4,
      }}
    >
      <Box>
        <Typography
          variant="h5"
          sx={{fontWeight: 'bold', textTransform: 'uppercase'}}
        >
          Experiences
        </Typography>
        <Box
          sx={{
            width: 32,
            height: 3,
            borderRadius: 15,
            bgcolor: (globalTheme) => globalTheme.palette.text.primary,
          }}
        />
      </Box>
      <Container maxWidth={isMd ? 'lg' : 'md'}>
        <Box mt={3}>
          <HistoryItem />
        </Box>
        <Box mt={3}>
          <HistoryItem />
        </Box>
      </Container>
    </Box>
  );
};
export default Experiences;
