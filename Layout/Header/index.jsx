import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {CardMedia, Grid, Tab, Tabs} from '@mui/material';
import {styled} from '@mui/material/styles';
import {useTranslation} from 'react-i18next';

const CustomTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{children: <span className="MuiTabs-indicatorSpan" />}}
  />
))(({theme}) => ({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: theme.palette.text.primary,
  },
}));

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(
    ({theme}) => ({
      'textTransform': 'none',
      'fontWeight': theme.typography.fontWeightRegular,
      'fontSize': theme.typography.pxToRem(15),
      'marginRight': theme.spacing(1),
      'opacity': 0.6,
      '&.Mui-selected': {
        opacity: 1,
        color: theme.palette.text.primary,
      },
      '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
      },
    }),
);

const Header = () => {
  const {t} = useTranslation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppBar position="fixed" color="inherit" elevation={0}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xl={2} lg={2} md={6} sm={6} xs={6}></Grid>
          <Grid item xl lg md sm xs>
            <Box display="flex" justifyContent="center">
              <CustomTabs
                textColor="primary"
                indicatorColor="primary"
                aria-label="basic tabs example"
                value={value}
                onChange={handleChange}
              >
                <CustomTab label={t('header.aboutMe')} />
                <CustomTab label={t('header.experience')} />
                <CustomTab label={t('header.projects')} />
                <CustomTab label={t('header.skills')} />
                <CustomTab label={t('header.blog')} />
                <CustomTab label={t('header.contact')} />
              </CustomTabs>
            </Box>
          </Grid>
          <Grid item xl={2} lg={2} md={6} sm={6} xs={6}>
            <Box p={1}>
              <CardMedia
                sx={{width: 41, height: 44}}
                component="img"
                objectFit="contain"
                image="/images/logo.svg"
                alt="logo"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};
export default Header;
