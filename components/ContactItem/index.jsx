import {Call} from '@mui/icons-material';
import {Box, Typography} from '@mui/material';

const ContactItem = () => {
  return (
    <div>
      <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Box
          sx={{
            borderRadius: '50%',
            p: 2,
            mr: 2,
            border: `1px solid`,
            width: 48,
            height: 48,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Call />
        </Box>
        <Typography>09170910019</Typography>
      </Box>
    </div>
  );
};
export default ContactItem;
