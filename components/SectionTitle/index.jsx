import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const SectionTitle = ({ name }) => {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", textTransform: "uppercase" }}
      >
        {name}
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
  );
};

SectionTitle.propTypes = {
  name: PropTypes.string,
};

export default SectionTitle;
