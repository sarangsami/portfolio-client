import {
  FacebookTwoTone,
  GitHub,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { Box, Grid, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomIconButton = styled(IconButton)({
  opacity: 0.6,
  transition: "opacity 0.5s",
  "&:hover": {
    opacity: 1,
  },
});

const SocialMedia = () => {
  return (
    <Box display="flex">
      <Grid container direction="column" spacing={1} alignItems="center">
        <Grid item xl lg md sm xs>
          <Box
            sx={{
              height: 176,
              width: 2,
              bgcolor: (globalTheme) => globalTheme.palette.text.primary,
            }}
          />
        </Grid>
        <Grid item xl lg md sm xs>
          <CustomIconButton disableRipple>
            <LinkedIn />
          </CustomIconButton>
        </Grid>
        <Grid item xl lg md sm xs>
          <CustomIconButton disableRipple>
            <FacebookTwoTone />
          </CustomIconButton>
        </Grid>
        <Grid item xl lg md sm xs>
          <CustomIconButton disableRipple>
            <GitHub />
          </CustomIconButton>
        </Grid>
        <Grid item xl lg md sm xs>
          <CustomIconButton disableRipple>
            <Instagram />
          </CustomIconButton>
        </Grid>
      </Grid>
    </Box>
  );
};
export default SocialMedia;
