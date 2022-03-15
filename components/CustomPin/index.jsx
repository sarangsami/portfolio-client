import PropTypes from 'prop-types';
import {Box} from '@mui/material';
import {alpha} from '@mui/material/styles';

const CustomPin = ({noTail}) => {
  return (
    <Box position="relative">
      <Box
        sx={{
          borderRadius: '50%',
          width: 20,
          height: 20,
          bgcolor: (globalTheme) =>
            alpha(globalTheme.palette.primary.main, 0.5),
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            bgcolor: (globalTheme) => globalTheme.palette.primary.main,
          }}
        />
      </Box>
      {!noTail && (
        <Box
          sx={{
            width: 3,
            height: 40,
            backgroundImage: (globalTheme) =>
              `linear-gradient(${globalTheme.palette.primary.main}, ${alpha(
                  globalTheme.palette.primary.main,
                  0,
              )})`,
            position: 'absolute',
            left: 8,
            top: 14,
          }}
        />
      )}
    </Box>
  );
};

CustomPin.propTypes = {
  noTail: PropTypes.bool,
};

export default CustomPin;
