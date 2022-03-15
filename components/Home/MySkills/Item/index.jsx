import PropTypes from 'prop-types';
import {Paper, Box, Typography} from '@mui/material';

const Item = ({borderPrimary, name}) => {
  return (
    <Box display="flex">
      <Paper
        elevation={0}
        sx={{
          borderRadius: 2,
          borderLeft: (globalTheme) =>
            `5px solid ${
              borderPrimary ? globalTheme.palette.primary.main : ''
            }`,
        }}
      >
        <Box p={2}>
          <Typography variant="body2" sx={{fontWeight: 'bold'}}>
            {name}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

Item.propTypes = {
  borderPrimary: PropTypes.bool,
  name: PropTypes.string,
};

export default Item;
