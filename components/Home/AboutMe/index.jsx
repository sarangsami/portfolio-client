import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useTheme, alpha } from "@mui/material/styles";

import CustomButton from "components/CustomButton";
import SocialMedia from "./SocialMedia";
import { useRouter } from "next/router";

const iconRender = () => {
  const direction = useSelector((state) => state.settings.direction);
  if (direction === "rtl") {
    return <ChevronLeft />;
  } else {
    return <ChevronRight />;
  }
};

const AboutMe = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const { push } = useRouter();

  return (
    <Grid
      container
      spacing={3}
      direction={isMd ? "column-reverse" : "row"}
      alignItems="ccenter"
    >
      <Grid item xl={5} lg={5} md={6} sm={12} xs={12}>
        <Box>
          <Typography sx={{ fontSize: 22 }} align={isMd ? "center" : "left"}>
            Welcome i&apos;m{" "}
            <Typography
              component="span"
              sx={{ fontWeight: "bold", fontSize: 24 }}
            >
              Sarang Sami
            </Typography>
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{ fontSize: isMd ? 24 : 48, fontWeight: "bold" }}
            align={isMd ? "center" : "left"}
          >
            Front-End{" "}
            <Typography
              component="span"
              color="primary"
              sx={{
                fontSize: isMd ? 24 : 48,
                fontWeight: "bold",
                textShadow: (globalTheme) =>
                  ` 0px 15px 15px ${alpha(
                    globalTheme.palette.primary.main,
                    0.25
                  )}`,
              }}
            >
              Developer
            </Typography>
          </Typography>
        </Box>
        <Box mt={3}>
          <Typography sx={{ opacity: 0.8 }} align={isMd ? "center" : "justify"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore
          </Typography>
        </Box>
        <Box mt={3}>
          <Grid
            container
            spacing={3}
            justifyContent={isMd ? "center" : "flex-start"}
          >
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <CustomButton
                fullWidth
                variant="contained"
                color="primary"
                size={isMd ? "small" : "large"}
                endIcon={iconRender()}
                sx={{
                  boxShadow: (theme) =>
                    ` 0px 15px 15px ${alpha(theme.palette.primary.main, 0.25)}`,
                }}
              >
                {t("home.hireMe")}
              </CustomButton>
            </Grid>
            <Grid item xl={5} lg={5} md={5} sm={5} xs={5}>
              <CustomButton
                fullWidth
                variant="outlined"
                color="inherit"
                size={isMd ? "small" : "large"}
                endIcon={iconRender()}
              >
                {t("home.downloadCV")}
              </CustomButton>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <CustomButton
                fullWidth
                variant="outlined"
                color="inherit"
                size={isMd ? "small" : "large"}
                endIcon={iconRender()}
                onClick={() => push("/shares-calculator")}
              >
                Share Calculator
              </CustomButton>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xl lg md sm xs>
        <Box display="flex" justifyContent="flex-end" width="100%">
          <Grid container alignItems="center">
            <Grid item xl lg md sm xs>
              <Box
                display="flex"
                alignItems="center"
                justifyContent={isMd ? "center" : "flex-end"}
              >
                <Box width="100%" maxWidth={350} maxHeight={450}>
                  <img
                    src="/images/profileBackground.png"
                    width="100%"
                    height="100%"
                    alt="profile"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xl={1} lg={1} md={1} sm={1} xs={2}>
              <SocialMedia />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
export default AboutMe;
